import { durationInDays, monthsCovered } from "./dates";
import { resolveClimateBuckets } from "./climate";
import { resolveQuantity } from "@/lib/quantity";
import type {
  ClimateBucketId,
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  PackingTrip,
} from "./types";

/**
 * Motor de packing (spec, sección 4).
 *
 * Determinístico y sin LLM: mismas entradas, misma lista. No toca la base ni la
 * red — recibe los datos ya leídos y devuelve el resultado. Persistir en
 * `trip_packing_items` (paso 5 del spec) es trabajo de la Server Action que lo
 * llama, no de acá.
 */

export interface PackingEngineInput {
  trip: PackingTrip;
  climateProfiles: ClimateProfile[];
  climateThresholds: ClimateThreshold[];
  catalog: PackingCatalogItem[];
}

export interface GeneratedPackingItem {
  item: PackingCatalogItem;
  qty: number;
  /** weightG × qty. */
  totalWeightG: number;
}

export interface PackingList {
  items: GeneratedPackingItem[];
  durationDays: number;
  monthsCovered: number[];
  climateBuckets: ClimateBucketId[];
  /** Meses del viaje sin datos de clima: la lista sale incompleta. */
  monthsWithoutClimateData: number[];
  /** Informativo. No trunca la lista ni bloquea agregar ítems (spec, sección 4). */
  totalWeightG: number;
}

function matchesClimate(
  item: PackingCatalogItem,
  buckets: ClimateBucketId[],
): boolean {
  return item.climateTags.some((tag) => buckets.includes(tag));
}

export function generatePackingList(input: PackingEngineInput): PackingList {
  const { trip, climateProfiles, climateThresholds, catalog } = input;

  const durationDays = durationInDays(trip.startDate, trip.endDate);
  const months = monthsCovered(trip.startDate, trip.endDate);

  const { buckets, monthsWithoutData } = resolveClimateBuckets(
    months,
    climateProfiles,
    climateThresholds,
  );

  const items = catalog
    // Las dos dimensiones del paso 3: el clima resuelto Y el tipo de viaje.
    .filter(
      (item) =>
        matchesClimate(item, buckets) && item.tripTypeTags.includes(trip.tripType),
    )
    .map((item) => {
      const qty = resolveQuantity(item, durationDays);
      return { item, qty, totalWeightG: item.weightG * qty };
    })
    // Orden estable: la lista se renderiza agrupada por categoría, y sin un
    // criterio fijo dos corridas iguales podrían devolver órdenes distintos.
    .sort(
      (a, b) =>
        a.item.category.localeCompare(b.item.category, "es") ||
        a.item.name.localeCompare(b.item.name, "es") ||
        a.item.id.localeCompare(b.item.id),
    );

  const totalWeightG = items.reduce((sum, entry) => sum + entry.totalWeightG, 0);

  return {
    items,
    durationDays,
    monthsCovered: months,
    climateBuckets: buckets,
    monthsWithoutClimateData: monthsWithoutData,
    totalWeightG,
  };
}
