import type { BudgetProduct } from "@/lib/budget";
import type { Destination } from "@/lib/domain";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
} from "@/lib/packing";

import { createPublicClient } from "./client";
import {
  mapClimateProfile,
  mapClimateThreshold,
  mapDestination,
  mapPackingCatalogItem,
  mapProduct,
} from "./mappers";
import type {
  ClimateProfileRow,
  ClimateThresholdRow,
  DestinationRow,
  PackingCatalogRow,
  ProductRow,
} from "./rows";

/**
 * Lecturas de las tablas de referencia.
 *
 * Van con la anon key porque esas tablas tienen lectura pública. Las tablas de
 * sesión NO se leen desde acá: están cerradas al cliente y se acceden solo
 * desde Server Actions con la service role key.
 */

function unwrap<T>(
  result: { data: T | null; error: { message: string } | null },
  what: string,
): T {
  if (result.error) {
    throw new Error(`No se pudo leer ${what}: ${result.error.message}`);
  }
  if (result.data === null) {
    throw new Error(`No se pudo leer ${what}: la consulta no devolvió datos.`);
  }
  return result.data;
}

export async function fetchDestinationByCorridor(
  corridor: string,
): Promise<Destination | null> {
  const { data, error } = await createPublicClient()
    .from("destinations")
    .select("id, name, corridor, base_currency")
    .eq("corridor", corridor)
    .limit(1)
    .maybeSingle<DestinationRow>();

  if (error) {
    throw new Error(`No se pudo leer el destino "${corridor}": ${error.message}`);
  }

  return data ? mapDestination(data) : null;
}

export async function fetchClimateProfiles(
  destinationId: string,
): Promise<ClimateProfile[]> {
  const result = await createPublicClient()
    .from("climate_profiles")
    .select("month, temp_min, temp_max, precip_probability")
    .eq("destination_id", destinationId)
    .order("month")
    .returns<ClimateProfileRow[]>();

  return unwrap(result, "los perfiles de clima").map(mapClimateProfile);
}

export async function fetchClimateThresholds(): Promise<ClimateThreshold[]> {
  const result = await createPublicClient()
    .from("climate_thresholds")
    .select("id, temp_max")
    .returns<ClimateThresholdRow[]>();

  return unwrap(result, "los umbrales de clima").map(mapClimateThreshold);
}

export async function fetchPackingCatalog(): Promise<PackingCatalogItem[]> {
  const result = await createPublicClient()
    .from("packing_catalog")
    .select(
      "id, category, name, weight_g, climate_tags, trip_type_tags, base_qty, scales_with_days, days_per_unit, max_qty",
    )
    .returns<PackingCatalogRow[]>();

  return unwrap(result, "el catálogo de equipaje").map(mapPackingCatalogItem);
}

export async function fetchProducts(destinationId: string): Promise<BudgetProduct[]> {
  const result = await createPublicClient()
    .from("products")
    .select(
      "id, category, name, base_price, currency, updated_at, base_qty, scales_with_days, days_per_unit, max_qty",
    )
    .eq("destination_id", destinationId)
    .returns<ProductRow[]>();

  return unwrap(result, "el catálogo de productos").map(mapProduct);
}

export interface ReferenceData {
  destination: Destination;
  climateProfiles: ClimateProfile[];
  climateThresholds: ClimateThreshold[];
  catalog: PackingCatalogItem[];
  products: BudgetProduct[];
}

/**
 * Todo lo que necesitan los dos motores para generar un viaje, en paralelo.
 * Es lo que va a consumir la Server Action que crea el trip (sección 6).
 */
export async function fetchReferenceData(corridor: string): Promise<ReferenceData> {
  const destination = await fetchDestinationByCorridor(corridor);

  if (!destination) {
    throw new Error(`No hay ningún destino cargado para el corredor "${corridor}".`);
  }

  const [climateProfiles, climateThresholds, catalog, products] = await Promise.all([
    fetchClimateProfiles(destination.id),
    fetchClimateThresholds(),
    fetchPackingCatalog(),
    fetchProducts(destination.id),
  ]);

  return { destination, climateProfiles, climateThresholds, catalog, products };
}
