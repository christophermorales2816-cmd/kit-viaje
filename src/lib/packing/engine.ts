import { durationInDays, monthsCovered } from "./dates";
import { resolveClimateBuckets, resolveRainBuckets } from "./climate";
import { byCatalogEntry } from "@/lib/catalog-order";
import type {
  ClimateBucketId,
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  PackingTrip,
  PrecipThreshold,
  TripType,
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
  /**
   * Buckets de lluvia (sección 14.12). Sin umbrales la lluvia no suma nada y la
   * lista sale como antes de que contara, que es también lo que pasa contra una
   * base sin la migración que crea `precip_thresholds`.
   */
  precipThresholds?: PrecipThreshold[];
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
  /** Buckets de lluvia que tocó el viaje (sección 14.12). */
  rainBuckets: ClimateBucketId[];
  /** Meses del viaje sin datos de clima: la lista sale incompleta. */
  monthsWithoutClimateData: number[];
  /** Informativo. No trunca la lista ni bloquea agregar ítems (spec, sección 4). */
  totalWeightG: number;
}

/**
 * Las dos dimensiones del paso 3 —el clima resuelto Y el tipo de viaje—, más la
 * lluvia, que no mira el tipo de viaje (sección 14.12).
 *
 * El paraguas va con la ciudad y los negocios, y el impermeable con la ciudad y
 * la aventura, llueva o no: eso no cambió. Lo nuevo es que en un mes de lluvia
 * los dos entran en cualquier viaje, y la playa, que no llevaba ninguno, suma
 * los dos. La lluvia suma y nunca resta: la lista arranca en cero, así que un
 * ítem de más queda en cero, y uno de menos no hay forma de agregarlo.
 */
function matches(
  item: PackingCatalogItem,
  buckets: ClimateBucketId[],
  rainBuckets: ClimateBucketId[],
  tripType: TripType,
): boolean {
  const porClima =
    item.climateTags.some((tag) => buckets.includes(tag)) &&
    item.tripTypeTags.includes(tripType);
  const porLluvia = item.climateTags.some((tag) => rainBuckets.includes(tag));

  return porClima || porLluvia;
}

export function generatePackingList(input: PackingEngineInput): PackingList {
  const {
    trip,
    climateProfiles,
    climateThresholds,
    precipThresholds = [],
    catalog,
  } = input;

  const durationDays = durationInDays(trip.startDate, trip.endDate);
  const months = monthsCovered(trip.startDate, trip.endDate);

  const { buckets, monthsWithoutData } = resolveClimateBuckets(
    months,
    climateProfiles,
    climateThresholds,
  );

  const rainBuckets = resolveRainBuckets(
    months,
    climateProfiles,
    precipThresholds,
  );

  const items = catalog
    .filter((item) => matches(item, buckets, rainBuckets, trip.tripType))
    .map((item) => {
      // Arranca en cero: la generación decide QUÉ entra en la lista, no
      // CUÁNTO. Quién sabe si el usuario lleva dos pantalones o cinco es el
      // usuario, y una lista preseleccionada lo obliga a desmarcar en vez de
      // elegir. `resolveQuantity` sigue siendo la regla de escalado del spec
      // (sección 4) y viaja con cada ítem, lista para ofrecerse como
      // sugerencia — pero ya no se aplica sola.
      const qty = 0;
      return { item, qty, totalWeightG: item.weightG * qty };
    })
    // Orden estable: la lista se renderiza agrupada por categoría, y sin un
    // criterio fijo dos corridas iguales podrían devolver órdenes distintos.
    .sort(byCatalogEntry((entry) => entry.item));

  const totalWeightG = items.reduce(
    (sum, entry) => sum + entry.totalWeightG,
    0,
  );

  return {
    items,
    durationDays,
    monthsCovered: months,
    climateBuckets: buckets,
    rainBuckets,
    monthsWithoutClimateData: monthsWithoutData,
    totalWeightG,
  };
}
