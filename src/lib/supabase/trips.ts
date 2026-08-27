import "server-only";

import type { TripDraft } from "@/lib/trips/draft";
import type { TripInput } from "@/lib/trips/input";

import { createAdminClient } from "./admin";

/**
 * Escrituras sobre las tablas de sesión.
 *
 * Van con la service role key porque esas tablas están cerradas al cliente
 * (migración 20260826120200). El `import "server-only"` de arriba impide que
 * este módulo termine en un bundle del browser.
 */

export interface CreatedTrip {
  id: string;
  editToken: string;
  shareSlug: string;
}

interface CreateTripRow {
  id: string;
  edit_token: string;
  share_slug: string;
}

/**
 * El proyecto no genera los tipos de la base, así que la respuesta del rpc
 * llega sin tipar. En vez de castearla a ciegas se verifica la forma: si
 * alguien cambia la firma de create_trip, el error dice qué pasó en lugar de
 * propagar undefined hasta el redirect.
 */
function isCreateTripRow(value: unknown): value is CreateTripRow {
  if (typeof value !== "object" || value === null) return false;

  const row = value as Record<string, unknown>;

  return (
    typeof row.id === "string" &&
    typeof row.edit_token === "string" &&
    typeof row.share_slug === "string"
  );
}

export interface CreateTripParams {
  destinationId: string;
  input: TripInput;
  draft: TripDraft;
}

/**
 * Crea el viaje con su equipaje y su presupuesto en una sola transacción.
 *
 * Pasa por la función create_trip y no por tres inserts porque cada llamada de
 * PostgREST es su propia transacción: un fallo a mitad de camino dejaría un
 * viaje sin listas, y el usuario aterrizaría en un dashboard vacío.
 */
export async function createTrip({
  destinationId,
  input,
  draft,
}: CreateTripParams): Promise<CreatedTrip> {
  const { data, error } = await createAdminClient().rpc("create_trip", {
    p_destination_id: destinationId,
    p_start_date: input.startDate,
    p_end_date: input.endDate,
    p_trip_type: input.tripType,
    p_packing: draft.packingItems.map((item) => ({
      item_id: item.itemId,
      qty: item.qty,
    })),
    p_budget: draft.budgetItems.map((item) => ({
      product_id: item.productId,
      qty: item.qty,
    })),
  });

  if (error) {
    throw new Error(`No se pudo crear el viaje: ${error.message}`);
  }

  // La función devuelve `returns table`, así que llega una fila dentro de un
  // array aunque sea siempre una sola.
  const row = Array.isArray(data) ? (data as unknown[])[0] : data;

  if (!isCreateTripRow(row)) {
    throw new Error(
      `create_trip devolvió algo inesperado: ${JSON.stringify(row)}`,
    );
  }

  return { id: row.id, editToken: row.edit_token, shareSlug: row.share_slug };
}
