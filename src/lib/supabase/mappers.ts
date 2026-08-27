import type { BudgetProduct } from "@/lib/budget";
import type { Destination } from "@/lib/domain";
import { TRIP_TYPES } from "@/lib/packing";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  TripType,
} from "@/lib/packing";

import type {
  ClimateProfileRow,
  ClimateThresholdRow,
  DestinationRow,
  PackingCatalogRow,
  ProductRow,
} from "./rows";

/**
 * Traducción del borde de la base al dominio: snake_case a camelCase, y
 * `numeric` a número de verdad.
 */

export function toNumber(value: number | string, field: string): number {
  // Number("") y Number("  ") devuelven 0, no NaN. Sin este guardia, un
  // base_price vacío se convierte en un producto gratis y un temp_min vacío en
  // 0 °C, que además cae en el bucket 'frio'. Falla en silencio y con datos
  // plausibles, que es la peor combinación.
  if (typeof value === "string" && value.trim() === "") {
    throw new TypeError(`El campo "${field}" llegó vacío en vez de un número.`);
  }

  const parsed = typeof value === "number" ? value : Number(value);

  if (!Number.isFinite(parsed)) {
    throw new TypeError(`El campo "${field}" no es un número: ${JSON.stringify(value)}`);
  }

  return parsed;
}

export function toNullableNumber(
  value: number | string | null,
  field: string,
): number | null {
  return value === null ? null : toNumber(value, field);
}

export function mapDestination(row: DestinationRow): Destination {
  return {
    id: row.id,
    name: row.name,
    corridor: row.corridor,
    baseCurrency: row.base_currency,
  };
}

export function mapClimateProfile(row: ClimateProfileRow): ClimateProfile {
  return {
    month: row.month,
    tempMin: toNullableNumber(row.temp_min, "temp_min"),
    tempMax: toNullableNumber(row.temp_max, "temp_max"),
    precipProbability: toNullableNumber(row.precip_probability, "precip_probability"),
  };
}

export function mapClimateThreshold(row: ClimateThresholdRow): ClimateThreshold {
  return {
    id: row.id,
    tempMax: toNullableNumber(row.temp_max, "temp_max"),
  };
}

function isTripType(value: string): value is TripType {
  return (TRIP_TYPES as readonly string[]).includes(value);
}

export function mapPackingCatalogItem(row: PackingCatalogRow): PackingCatalogItem {
  // El check packing_catalog_trip_type_tags_valid ya lo garantiza en la base.
  // Se vuelve a validar acá porque el motor tipa trip_type_tags como TripType[]
  // y una fila cargada a mano antes de que existiera el check pasaría de largo.
  const desconocidos = row.trip_type_tags.filter((tag) => !isTripType(tag));

  if (desconocidos.length > 0) {
    throw new TypeError(
      `El ítem "${row.name}" tiene tipos de viaje desconocidos: ${desconocidos.join(", ")}.`,
    );
  }

  return {
    id: row.id,
    category: row.category,
    name: row.name,
    weightG: row.weight_g,
    climateTags: row.climate_tags,
    tripTypeTags: row.trip_type_tags as TripType[],
    baseQty: row.base_qty,
    scalesWithDays: row.scales_with_days,
    daysPerUnit: row.days_per_unit,
    maxQty: row.max_qty,
  };
}

export function mapProduct(row: ProductRow): BudgetProduct {
  return {
    id: row.id,
    category: row.category,
    name: row.name,
    basePrice: toNumber(row.base_price, "base_price"),
    currency: row.currency,
    updatedAt: row.updated_at,
    baseQty: row.base_qty,
    scalesWithDays: row.scales_with_days,
    daysPerUnit: row.days_per_unit,
    maxQty: row.max_qty,
  };
}
