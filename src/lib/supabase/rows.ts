/**
 * Forma de las filas tal como las devuelve PostgREST: snake_case, con los
 * nombres de las migraciones. Estos tipos describen el borde de la base; el
 * resto de la aplicación trabaja con los tipos de dominio y nunca ve un
 * snake_case.
 *
 * `numeric` de Postgres puede llegar como número o como string según el
 * serializador, así que se tipa como `number | string` y lo normalizan los
 * mappers. No es paranoia: es la diferencia entre sumar precios y concatenarlos.
 */

export interface DestinationRow {
  id: string;
  name: string;
  corridor: string;
  base_currency: string;
}

export interface ClimateProfileRow {
  month: number;
  temp_min: number | string | null;
  temp_max: number | string | null;
  precip_probability: number | string | null;
}

export interface ClimateThresholdRow {
  id: string;
  temp_max: number | string | null;
}

export interface PackingCatalogRow {
  id: string;
  category: string;
  name: string;
  weight_g: number;
  climate_tags: string[];
  trip_type_tags: string[];
  base_qty: number;
  scales_with_days: boolean;
  days_per_unit: number | null;
  max_qty: number | null;
}

export interface ProductRow {
  id: string;
  category: string;
  name: string;
  base_price: number | string;
  currency: string;
  updated_at: string;
  include_by_default: boolean;
  base_qty: number;
  scales_with_days: boolean;
  days_per_unit: number | null;
  max_qty: number | null;
}
