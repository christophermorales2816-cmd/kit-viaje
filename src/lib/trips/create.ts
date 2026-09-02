import "server-only";

import { generateBudgetList } from "@/lib/budget";
import { generatePackingList } from "@/lib/packing";
import { adminClient } from "@/lib/supabase/admin";
import {
  getClimateProfiles,
  getClimateThresholds,
  getDestination,
  getPackingCatalog,
  getProducts,
} from "@/lib/supabase/reference";

import { TripWriteError } from "./errors";
import type { TripRecord } from "./types";
import type { TripInput } from "./validate";

/**
 * Creación de un viaje (spec, sección 6A, paso 2).
 *
 * "Un Server Action inserta el trip, ejecuta el motor de packing y el de
 * presupuesto, y hace redirect() a /viaje/{edit_token}".
 *
 * Acá está el trabajo; la Server Action que lo llama solo valida la entrada y
 * redirige. Separado así, esto se puede llamar desde un script o un test de
 * integración sin arrastrar el contexto de request de Next.
 */

const TRIP_COLUMNS =
  "id, destination_id, start_date, end_date, trip_type, edit_token, share_slug";

interface TripRow {
  id: string;
  destination_id: string;
  start_date: string;
  end_date: string;
  trip_type: string;
  edit_token: string;
  share_slug: string;
}

export function toTripRecord(row: TripRow): TripRecord {
  return {
    id: row.id,
    destinationId: row.destination_id,
    startDate: row.start_date,
    endDate: row.end_date,
    // El check trip_type de la tabla espeja TRIP_TYPES, así que el cast no
    // esconde nada que la base no garantice ya.
    tripType: row.trip_type as TripRecord["tripType"],
    editToken: row.edit_token,
    shareSlug: row.share_slug,
  };
}

export { TRIP_COLUMNS };
export type { TripRow };

export async function createTrip(input: TripInput): Promise<TripRecord> {
  const destination = await getDestination();

  // Las cuatro lecturas son independientes entre sí y ninguna depende del
  // resultado de otra: en serie serían cuatro round-trips encadenados a
  // Supabase antes de poder mostrarle nada al usuario.
  const [climateProfiles, climateThresholds, catalog, products] =
    await Promise.all([
      getClimateProfiles(destination.id),
      getClimateThresholds(),
      getPackingCatalog(),
      getProducts(destination.id),
    ]);

  const packingList = generatePackingList({
    trip: input,
    climateProfiles,
    climateThresholds,
    catalog,
  });

  const budgetList = generateBudgetList(input, products);

  const admin = adminClient();

  const { data, error } = await admin
    .from("trips")
    .insert({
      destination_id: destination.id,
      start_date: input.startDate,
      end_date: input.endDate,
      trip_type: input.tripType,
    })
    // edit_token y share_slug los genera la base (defaults de la migración),
    // así que hay que leerlos de vuelta: son el único modo de volver al viaje.
    .select(TRIP_COLUMNS)
    .single();

  if (error || !data) {
    throw new TripWriteError(
      `No se pudo crear el viaje: ${error?.message ?? "la base no devolvió la fila."}`,
      error?.code ?? null,
    );
  }

  const trip = toTripRecord(data);

  try {
    await insertGeneratedItems(trip.id, packingList.items, budgetList);
  } catch (cause) {
    // Un viaje sin ítems no es un viaje a medias: es un dashboard vacío al que
    // el usuario llega por redirect y del que no puede salir, porque la
    // generación corre una sola vez al crear. Se borra y se falla — el cascade
    // de las FK se lleva lo que haya alcanzado a entrar.
    await admin.from("trips").delete().eq("id", trip.id);
    throw cause;
  }

  return trip;
}

async function insertGeneratedItems(
  tripId: string,
  packingItems: { item: { id: string }; qty: number }[],
  budgetItems: { product: { id: string }; qty: number }[],
): Promise<void> {
  const admin = adminClient();

  // Una lista vacía es posible y no es un error: un tipo de viaje sin ítems
  // para el clima resuelto genera cero filas. Insertar [] en PostgREST es una
  // request al pedo, no un no-op.
  const inserts = [];

  if (packingItems.length > 0) {
    inserts.push(
      admin.from("trip_packing_items").insert(
        packingItems.map((entry) => ({
          trip_id: tripId,
          item_id: entry.item.id,
          qty: entry.qty,
        })),
      ),
    );
  }

  if (budgetItems.length > 0) {
    inserts.push(
      admin.from("trip_budget_items").insert(
        budgetItems.map((line) => ({
          trip_id: tripId,
          product_id: line.product.id,
          qty: line.qty,
        })),
      ),
    );
  }

  const results = await Promise.all(inserts);
  const failed = results.find((result) => result.error);

  if (failed?.error) {
    // El código del error viaja: es lo que distingue "la base está caída" de
    // "la base no tiene la migración que este código necesita".
    throw new TripWriteError(
      `No se pudieron guardar las listas generadas: ${failed.error.message}`,
      failed.error.code ?? null,
    );
  }
}
