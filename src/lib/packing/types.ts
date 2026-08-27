import type { QuantityRule } from "@/lib/quantity";

/**
 * Tipos del dominio del motor de packing (spec, sección 4).
 *
 * Son tipos de dominio, no filas de la base: el motor es una función pura que
 * recibe datos ya leídos y no sabe que Supabase existe. Van en camelCase; el
 * mapeo desde el snake_case de Postgres es responsabilidad de quien consulta.
 */

/** Enum cerrado para el MVP. Espeja el check de trips.trip_type. */
export const TRIP_TYPES = ["playa", "urbano", "aventura", "negocios"] as const;

export type TripType = (typeof TRIP_TYPES)[number];

/**
 * Identificador de bucket de clima.
 *
 * Es `string` y no una unión cerrada a propósito: los buckets viven en la tabla
 * `climate_thresholds` justamente para ser parametrizables sin tocar código
 * (spec, sección 4). Clavar `'frio' | 'templado' | 'calido'` acá haría que
 * agregar un bucket desde Studio necesite un deploy.
 */
export type ClimateBucketId = string;

export interface ClimateThreshold {
  id: ClimateBucketId;
  /** Límite superior en °C, inclusive. `null` = sin límite superior. */
  tempMax: number | null;
}

export interface ClimateProfile {
  /** 1-12. */
  month: number;
  tempMin: number | null;
  tempMax: number | null;
  /** Escala 0-100. */
  precipProbability: number | null;
}

export interface PackingCatalogItem extends QuantityRule {
  id: string;
  category: string;
  name: string;
  weightG: number;
  climateTags: ClimateBucketId[];
  tripTypeTags: TripType[];
}

export interface PackingTrip {
  /** Formato yyyy-mm-dd. */
  startDate: string;
  /** Formato yyyy-mm-dd, inclusive. */
  endDate: string;
  tripType: TripType;
}

export type { QuantityRule };
