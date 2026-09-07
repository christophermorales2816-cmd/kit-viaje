import "server-only";

import { adminClient } from "@/lib/supabase/admin";

import { resolveItemWrite } from "./item-write";
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
 *
 * CANTIDAD CERO ES AUSENCIA DE FILA
 *
 * El viaje se crea sin ítems (`create.ts`) y la lista se genera al leer
 * (`read.ts`). Acá se cierra ese modelo: subir una cantidad inserta la fila,
 * bajarla a cero la borra. Nunca se guarda un cero.
 *
 * No es una economía de filas: es lo que hace que la app no dependa de que la
 * base tenga el `check (qty >= 0)`. Con el check viejo, `qty > 0`, guardar un
 * cero fallaba; borrar la fila funciona con los dos.
 *
 * El upsert está acotado por la clave primaria (trip_id, item_id) y el itemId
 * se valida como uuid, así que sigue sin poder escribir en otro viaje.
 */

/** Lo que pasó, en un formato que la UI pueda mostrar y usar para revertir. */
export type MutationResult = { ok: true } | { ok: false; error: string };

const SIN_PERMISO =
  "No se pudo guardar: este viaje no existe o el link no habilita edición.";

export interface PackingItemPatch {
  qty?: number;
  checked?: boolean;
}

/** Estado guardado de un ítem, o su ausencia. */
async function leerPackingItem(
  tripId: string,
  itemId: string,
): Promise<{ qty: number; checked: boolean } | null> {
  const { data } = await adminClient()
    .from("trip_packing_items")
    .select("qty, checked")
    .eq("trip_id", tripId)
    .eq("item_id", itemId)
    .maybeSingle();

  return data ?? null;
}

/**
 * Actualiza cantidad y/o tildado de un ítem de equipaje.
 *
 * Tildar sube la cantidad a uno si estaba en cero: marcar algo que llevás en
 * cantidad ninguna no significa nada, y además la fila necesita una cantidad
 * para existir.
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

  const write = resolveItemWrite(await leerPackingItem(tripId, itemId), patch);

  // Bajar a cero saca el ítem del viaje: se borra la fila en vez de guardar un
  // cero, y con ella se va el tildado, que es lo correcto — no se tilda algo
  // que no se lleva.
  if (write.action === "delete") {
    const { error } = await adminClient()
      .from("trip_packing_items")
      .delete()
      .eq("trip_id", tripId)
      .eq("item_id", itemId);

    return error
      ? { ok: false, error: `No se pudo guardar: ${error.message}` }
      : { ok: true };
  }

  const { error } = await adminClient()
    .from("trip_packing_items")
    // El upsert está acotado por la PK: no puede crear una fila en otro viaje
    // porque el trip_id sale del token, no del cliente.
    .upsert(
      {
        trip_id: tripId,
        item_id: itemId,
        qty: write.qty,
        checked: write.checked,
      },
      { onConflict: "trip_id,item_id" },
    );

  if (error) {
    return { ok: false, error: `No se pudo guardar: ${error.message}` };
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

  // Cero saca el gasto del presupuesto: fila borrada, no fila en cero.
  if (qty === 0) {
    const { error } = await adminClient()
      .from("trip_budget_items")
      .delete()
      .eq("trip_id", tripId)
      .eq("product_id", productId);

    return error
      ? { ok: false, error: `No se pudo guardar: ${error.message}` }
      : { ok: true };
  }

  const { error } = await adminClient()
    .from("trip_budget_items")
    .upsert(
      { trip_id: tripId, product_id: productId, qty },
      { onConflict: "trip_id,product_id" },
    );

  if (error) {
    return { ok: false, error: `No se pudo guardar: ${error.message}` };
  }

  return { ok: true };
}
