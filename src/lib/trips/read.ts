import "server-only";

import { toBudgetLine } from "@/lib/budget";
import { byCatalogEntry } from "@/lib/catalog-order";
import { adminClient } from "@/lib/supabase/admin";
import {
  PACKING_CATALOG_COLUMNS,
  PRODUCT_COLUMNS,
  getDestinationById,
  toBudgetProduct,
  toPackingCatalogItem,
  type PackingCatalogRow,
  type ProductRow,
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
 */

/**
 * PostgREST devuelve un objeto para una relación many-to-one, pero algunas
 * combinaciones de versión la serializan como array de un elemento. Las dos
 * formas son válidas y ninguna es un error que valga la pena propagar.
 */
function embedded<T>(value: unknown, what: string): T {
  const row = Array.isArray(value) ? value[0] : value;

  if (!row || typeof row !== "object") {
    throw new Error(
      `La fila de ${what} vino sin su dato de catálogo. ¿Cambió la FK?`,
    );
  }

  return row as T;
}

async function loadView(trip: TripRecord, editToken: string | null): Promise<TripView> {
  const admin = adminClient();

  const [destination, packingResult, budgetResult] = await Promise.all([
    getDestinationById(trip.destinationId),
    admin
      .from("trip_packing_items")
      .select(`qty, checked, packing_catalog(${PACKING_CATALOG_COLUMNS})`)
      .eq("trip_id", trip.id),
    admin
      .from("trip_budget_items")
      .select(`qty, products(${PRODUCT_COLUMNS})`)
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

  const packing: TripPackingEntry[] = (packingResult.data ?? [])
    .map((row) => {
      const item = toPackingCatalogItem(
        embedded<PackingCatalogRow>(row.packing_catalog, "equipaje"),
      );

      return {
        item,
        qty: row.qty,
        checked: row.checked,
        totalWeightG: item.weightG * row.qty,
      };
    })
    // El mismo orden que usó el motor al generar la lista: sin esto la
    // ordenaría PostgREST por su índice y el dashboard cambiaría de orden
    // después del primer guardado.
    .sort(byCatalogEntry((entry) => entry.item));

  const budget = (budgetResult.data ?? [])
    .map((row) =>
      toBudgetLine(
        toBudgetProduct(embedded<ProductRow>(row.products, "presupuesto")),
        row.qty,
      ),
    )
    .sort(byCatalogEntry((line) => line.product));

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
