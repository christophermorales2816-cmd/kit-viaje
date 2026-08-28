import "server-only";

import { adminClient } from "@/lib/supabase/admin";

import { resolveTripIdByEditToken } from "./read";
import { isUuid } from "./validate";

/**
 * Escrituras sobre un viaje (spec, sección 6B).
 *
 * TODAS pasan por acá y TODAS empiezan resolviendo el edit_token contra la
 * base. Ese es el criterio de aceptación 7 del spec — "ninguna escritura es
 * posible sin un edit_token válido" — y no lo garantiza ninguna política de
 * RLS: las tablas de sesión están cerradas al cliente, así que la única llave
 * es la service role key, que puede todo. Quien la usa tiene que chequear.
 *
 * El `isReadOnly` de la vista compartida no participa de esto (spec, 6D): es
 * presentacional. Un visitante con el share_slug no tiene edit_token, así que
 * aunque fuerce el prop desde devtools no hay mutación que pueda ejecutar.
 */

/** Lo que pasó, en un formato que la UI pueda mostrar y usar para revertir. */
export type MutationResult =
  | { ok: true }
  | { ok: false; error: string };

const SIN_PERMISO =
  "No se pudo guardar: este viaje no existe o el link no habilita edición.";

export interface PackingItemPatch {
  qty?: number;
  checked?: boolean;
}

/**
 * Actualiza cantidad y/o tildado de un ítem de equipaje.
 *
 * Es un update y no un upsert a propósito: el ítem tiene que estar en la lista
 * generada del viaje. Agregar ítems fuera de lo generado no es parte del MVP, y
 * un upsert lo habilitaría sin querer desde cualquier id de catálogo.
 */
export async function setPackingItem(
  editToken: string,
  itemId: string,
  patch: PackingItemPatch,
): Promise<MutationResult> {
  if (!isUuid(itemId)) {
    return { ok: false, error: "El ítem no existe." };
  }

  if (patch.qty === undefined && patch.checked === undefined) {
    return { ok: false, error: "No hay nada que cambiar." };
  }

  const tripId = await resolveTripIdByEditToken(editToken);

  if (!tripId) {
    return { ok: false, error: SIN_PERMISO };
  }

  const { error, count } = await adminClient()
    .from("trip_packing_items")
    .update(
      {
        ...(patch.qty !== undefined ? { qty: patch.qty } : {}),
        ...(patch.checked !== undefined ? { checked: patch.checked } : {}),
      },
      { count: "exact" },
    )
    // El filtro por trip_id es la mitad que importa: sin él, el token de un
    // viaje serviría para editar el ítem de cualquier otro.
    .eq("trip_id", tripId)
    .eq("item_id", itemId);

  if (error) {
    return { ok: false, error: `No se pudo guardar: ${error.message}` };
  }

  // Un update que no tocó ninguna fila no es un éxito silencioso: significa que
  // el ítem no está en este viaje, y la UI tiene que revertir lo que mostró.
  if (count === 0) {
    return { ok: false, error: "Ese ítem no está en la lista del viaje." };
  }

  return { ok: true };
}

export async function setBudgetItemQty(
  editToken: string,
  productId: string,
  qty: number,
): Promise<MutationResult> {
  if (!isUuid(productId)) {
    return { ok: false, error: "El gasto no existe." };
  }

  const tripId = await resolveTripIdByEditToken(editToken);

  if (!tripId) {
    return { ok: false, error: SIN_PERMISO };
  }

  const { error, count } = await adminClient()
    .from("trip_budget_items")
    .update({ qty }, { count: "exact" })
    .eq("trip_id", tripId)
    .eq("product_id", productId);

  if (error) {
    return { ok: false, error: `No se pudo guardar: ${error.message}` };
  }

  if (count === 0) {
    return { ok: false, error: "Ese gasto no está en el presupuesto del viaje." };
  }

  return { ok: true };
}
