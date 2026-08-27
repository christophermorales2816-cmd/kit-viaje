"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createTrip } from "./create";
import {
  setBudgetItemQty,
  setPackingItem,
  type MutationResult,
} from "./mutate";
import { parseQty, parseTripInput } from "./validate";

/**
 * Server Actions (spec, sección 6).
 *
 * Son la frontera: todo lo que entra por acá viene del cliente y no vale nada
 * hasta validarlo. La lógica de verdad vive en create.ts y mutate.ts —acá solo
 * se parsea la entrada, se llama, y se traduce el resultado a algo que la UI
 * pueda mostrar.
 *
 * Ninguna devuelve una excepción al cliente: un throw en una Server Action de
 * producción llega al browser como "an error occurred in the Server Components
 * render", que no le dice nada a nadie. El resultado va tipado.
 */

export type CreateTripState = { error: string } | null;

/**
 * Crea el viaje y redirige a `/viaje/{edit_token}` (spec, 6A paso 2).
 *
 * El redirect va FUERA del try: `redirect()` funciona tirando una excepción
 * NEXT_REDIRECT, y un catch alrededor la tragaría dejando al usuario en la
 * landing con un viaje ya creado que no puede volver a encontrar nunca.
 */
export async function createTripAction(
  _previous: CreateTripState,
  formData: FormData,
): Promise<CreateTripState> {
  const parsed = parseTripInput({
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    tripType: formData.get("tripType"),
  });

  if (!parsed.ok) {
    return { error: parsed.error };
  }

  let editToken: string;

  try {
    const trip = await createTrip(parsed.value);
    editToken = trip.editToken;
  } catch (error) {
    console.error("createTripAction", error);

    return {
      error:
        "No pudimos crear el viaje. Probá de nuevo en un momento.",
    };
  }

  redirect(`/viaje/${editToken}`);
}

/**
 * El `revalidatePath` no es opcional para que la UI optimista funcione.
 *
 * `useOptimistic` muestra el valor nuevo mientras la acción corre y después
 * vuelve a lo que diga el estado del servidor. Sin revalidar, ese estado sigue
 * siendo el del render anterior: el tilde aparecería y se volvería a ir solo,
 * aunque el guardado haya salido bien.
 */
function refresh(editToken: string): void {
  revalidatePath(`/viaje/${editToken}`);
}

export async function togglePackingItemAction(
  editToken: string,
  itemId: string,
  checked: boolean,
): Promise<MutationResult> {
  const result = await setPackingItem(editToken, itemId, { checked });

  if (result.ok) refresh(editToken);

  return result;
}

export async function setPackingQtyAction(
  editToken: string,
  itemId: string,
  qty: unknown,
): Promise<MutationResult> {
  const parsed = parseQty(qty);

  if (!parsed.ok) return { ok: false, error: parsed.error };

  const result = await setPackingItem(editToken, itemId, { qty: parsed.value });

  if (result.ok) refresh(editToken);

  return result;
}

export async function setBudgetQtyAction(
  editToken: string,
  productId: string,
  qty: unknown,
): Promise<MutationResult> {
  const parsed = parseQty(qty);

  if (!parsed.ok) return { ok: false, error: parsed.error };

  const result = await setBudgetItemQty(editToken, productId, parsed.value);

  if (result.ok) refresh(editToken);

  return result;
}
