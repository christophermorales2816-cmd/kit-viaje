/**
 * Qué hacer con la fila de un ítem cuando el usuario cambia algo.
 *
 * Es la regla del modelo "una fila existe solo si elegiste algo", separada de
 * la escritura para poder probarla sin base: `mutate.ts` la ejecuta, acá se
 * decide.
 *
 * El punto que sostiene todo: NUNCA se devuelve un upsert con cantidad cero.
 * Guardar un cero fallaría contra el `check (qty > 0)` original de las tablas
 * de sesión, y es justo lo que rompía la creación de viajes.
 */

export interface ItemState {
  qty: number;
  checked: boolean;
}

export interface ItemPatch {
  qty?: number;
  checked?: boolean;
}

export type ItemWrite =
  | { action: "delete" }
  | { action: "upsert"; qty: number; checked: boolean };

/**
 * @param actual estado guardado, o `null` si el ítem todavía no tiene fila.
 */
export function resolveItemWrite(
  actual: ItemState | null,
  patch: ItemPatch,
): ItemWrite {
  const qty = patch.qty ?? actual?.qty ?? 0;
  const checked = patch.checked ?? actual?.checked ?? false;

  // Sin cantidad y sin tilde no hay nada que guardar: la ausencia de fila ya
  // significa exactamente eso.
  if (qty === 0 && !checked) {
    return { action: "delete" };
  }

  return {
    action: "upsert",
    // Tildar algo que se lleva en cantidad ninguna no significa nada, y además
    // la fila necesita una cantidad válida para existir.
    qty: checked ? Math.max(qty, 1) : qty,
    checked,
  };
}
