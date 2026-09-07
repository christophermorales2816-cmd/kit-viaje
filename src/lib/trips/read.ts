import "server-only";

import { generateBudgetList, toBudgetLine } from "@/lib/budget";
import { generatePackingList } from "@/lib/packing";
import { adminClient } from "@/lib/supabase/admin";
import {
  getClimateProfiles,
  getClimateThresholds,
  getDestinationById,
  getPackingCatalog,
  getProducts,
} from "@/lib/supabase/reference";

import { TRIP_COLUMNS, toTripRecord } from "./create";
import type { TripPackingEntry, TripRecord, TripView } from "./types";
import { isEditToken, isShareSlug } from "./validate";

/**
 * Lectura de un viaje guardado (spec, sección 6B y 6D).
 *
 * Va por el cliente admin y no por el de referencia: las tablas de sesión están
 * cerradas al cliente anónimo (RLS habilitada, cero políticas — ver
 * 20260826120200_rls_policies.sql). Eso es justamente lo que impide que alguien
 * se baje los edit_token de todos los viajes desde el browser, y por eso el
 * dashboard es un Server Component.
 *
 * Devuelve null en vez de tirar cuando el token no existe: una URL vieja o mal
 * copiada es un caso normal, y la página redirige a la landing (spec, 6B).
 *
 * LA LISTA SE GENERA ACÁ Y LO GUARDADO SE SUPERPONE
 *
 * `createTrip` no escribe ítems: una fila existe solo si el usuario eligió una
 * cantidad. Así que la lista completa sale de los motores en cada lectura —son
 * deterministas, mismas entradas misma salida— y encima se aplican las filas
 * que sí existen.
 *
 * La ventaja no es solo no guardar cincuenta ceros por viaje: como nunca se
 * escribe un cero, el `check (qty > 0)` de las tablas de sesión no se puede
 * disparar, y la app funciona igual contra una base sin la migración que lo
 * afloja.
 */

async function loadView(
  trip: TripRecord,
  editToken: string | null,
): Promise<TripView> {
  const admin = adminClient();

  // Todo en paralelo: nada de esto depende del resultado de lo otro, y en
  // serie serían seis viajes encadenados antes de pintar el dashboard.
  const [
    destination,
    climateProfiles,
    climateThresholds,
    catalog,
    products,
    packingResult,
    budgetResult,
  ] = await Promise.all([
    getDestinationById(trip.destinationId),
    getClimateProfiles(trip.destinationId),
    getClimateThresholds(),
    getPackingCatalog(),
    getProducts(trip.destinationId),
    admin
      .from("trip_packing_items")
      .select("item_id, qty, checked")
      .eq("trip_id", trip.id),
    admin
      .from("trip_budget_items")
      .select("product_id, qty")
      .eq("trip_id", trip.id),
  ]);

  if (packingResult.error) {
    throw new Error(
      `No se pudo leer el equipaje del viaje: ${packingResult.error.message}`,
    );
  }

  if (budgetResult.error) {
    throw new Error(
      `No se pudo leer el presupuesto del viaje: ${budgetResult.error.message}`,
    );
  }

  // Lo elegido, indexado para superponerlo sobre la lista generada.
  const elegidoPacking = new Map(
    (packingResult.data ?? []).map((row) => [
      row.item_id,
      { qty: row.qty, checked: row.checked },
    ]),
  );

  const elegidoBudget = new Map(
    (budgetResult.data ?? []).map((row) => [row.product_id, row.qty]),
  );

  // Los motores ya devuelven todo ordenado por categoría y nombre, así que no
  // hace falta reordenar después de superponer.
  const packing: TripPackingEntry[] = generatePackingList({
    trip,
    climateProfiles,
    climateThresholds,
    catalog,
  }).items.map((entry) => {
    const elegido = elegidoPacking.get(entry.item.id);
    const qty = elegido?.qty ?? 0;

    return {
      item: entry.item,
      qty,
      checked: elegido?.checked ?? false,
      totalWeightG: entry.item.weightG * qty,
    };
  });

  const budget = generateBudgetList(trip, products).map((line) =>
    toBudgetLine(line.product, elegidoBudget.get(line.product.id) ?? 0),
  );

  return {
    // Campo por campo y no un spread con rest: si mañana `trips` suma una
    // columna sensible, un spread la dejaría pasar a la vista compartida sola.
    trip: {
      id: trip.id,
      destinationId: trip.destinationId,
      startDate: trip.startDate,
      endDate: trip.endDate,
      tripType: trip.tripType,
      shareSlug: trip.shareSlug,
    },
    editToken,
    destination,
    packing,
    totalWeightG: packing.reduce((sum, entry) => sum + entry.totalWeightG, 0),
    budget,
  };
}

async function findTrip(
  column: "edit_token" | "share_slug",
  value: string,
): Promise<TripRecord | null> {
  const { data, error } = await adminClient()
    .from("trips")
    .select(TRIP_COLUMNS)
    .eq(column, value)
    .maybeSingle();

  if (error) {
    throw new Error(`No se pudo buscar el viaje: ${error.message}`);
  }

  return data ? toTripRecord(data) : null;
}

/** Ruta privada `/viaje/{edit_token}`: lectura y escritura. */
export async function getTripByEditToken(
  token: string,
): Promise<TripView | null> {
  if (!isEditToken(token)) return null;

  const trip = await findTrip("edit_token", token);

  return trip ? loadView(trip, trip.editToken) : null;
}

/**
 * Ruta pública `/viaje/ver/{share_slug}`: solo lectura.
 *
 * El `editToken: null` no es un detalle de presentación. Es lo que hace que el
 * token no exista en este camino ni siquiera en memoria del render.
 */
export async function getTripByShareSlug(
  slug: string,
): Promise<TripView | null> {
  if (!isShareSlug(slug)) return null;

  const trip = await findTrip("share_slug", slug);

  return trip ? loadView(trip, null) : null;
}

/**
 * Resuelve el id del viaje a partir del token privado, sin traer las listas.
 *
 * Es lo que necesita cada mutación: validar que quien escribe tiene el token, y
 * nada más. Traer el viaje entero para actualizar un checkbox sería leer dos
 * tablas de más en cada tap.
 */
export async function resolveTripIdByEditToken(
  token: string,
): Promise<string | null> {
  if (!isEditToken(token)) return null;

  const trip = await findTrip("edit_token", token);

  return trip?.id ?? null;
}
