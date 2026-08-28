import type { PostgrestError } from "@supabase/supabase-js";

import type { BudgetProduct } from "@/lib/budget";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  TripType,
} from "@/lib/packing";

import { referenceClient } from "./client";

/**
 * Lectura de los datos de referencia y traducción al dominio.
 *
 * Este archivo es el único lugar donde se escribe el snake_case de las tablas
 * de referencia — las de sesión se traducen en src/lib/trips/read.ts, que
 * reutiliza los mapeos de acá para las filas embebidas. Los motores de packing
 * y presupuesto son funciones puras que no saben que Supabase existe (secciones
 * 4 y 5): reciben datos ya leídos, en camelCase, y devuelven el resultado.
 * Meter una query adentro de src/lib/packing o src/lib/budget rompería
 * justamente lo que los hace testeables sin base.
 */

/** El corredor único del MVP (spec, sección 2). */
export const DEFAULT_CORRIDOR = "argentina";

export interface Destination {
  id: string;
  name: string;
  corridor: string;
  /** ISO 4217. Define contra qué cotizaciones se convierte el presupuesto. */
  baseCurrency: string;
}

function fail(what: string, error: PostgrestError): never {
  throw new Error(`No se pudo leer ${what}: ${error.message}`);
}

/**
 * PostgREST serializa `numeric` como número JSON, pero devuelve string cuando
 * el valor no entra en un double. Ninguno de los precios del catálogo se acerca
 * a ese límite, pero un "8500" colándose como string en la aritmética de
 * centavos daría un total mal sin fallar en ningún lado.
 */
function numeric(value: number | string | null): number | null {
  if (value === null) return null;

  const parsed = typeof value === "number" ? value : Number(value);

  if (!Number.isFinite(parsed)) {
    throw new RangeError(`Valor numérico inválido en la base: "${value}".`);
  }

  return parsed;
}

function requiredNumeric(value: number | string | null, column: string): number {
  const parsed = numeric(value);

  if (parsed === null) {
    throw new RangeError(`La columna ${column} vino en null y no puede serlo.`);
  }

  return parsed;
}

// ---------------------------------------------------------------------------
// destinations
// ---------------------------------------------------------------------------

export async function getDestination(
  corridor: string = DEFAULT_CORRIDOR,
): Promise<Destination> {
  const { data, error } = await referenceClient()
    .from("destinations")
    .select("id, name, corridor, base_currency")
    .eq("corridor", corridor)
    .limit(1)
    .maybeSingle();

  if (error) fail("el destino", error);

  // El seed (20260827100000) siembra Buenos Aires, así que no encontrarlo
  // significa que la base está sin migrar. Es mejor decirlo que devolver null y
  // que reviente tres capas más arriba.
  if (!data) {
    throw new Error(
      `No hay ningún destino para el corredor "${corridor}". ¿Corriste las migraciones?`,
    );
  }

  return {
    id: data.id,
    name: data.name,
    corridor: data.corridor,
    baseCurrency: data.base_currency,
  };
}

/**
 * El destino de un viaje ya creado. La lectura del dashboard tiene el
 * `destination_id` guardado en la fila de `trips` y no debería volver a
 * resolverlo por corredor: si mañana el corredor suma un segundo destino, un
 * viaje viejo tiene que seguir mostrando el suyo.
 */
export async function getDestinationById(id: string): Promise<Destination> {
  const { data, error } = await referenceClient()
    .from("destinations")
    .select("id, name, corridor, base_currency")
    .eq("id", id)
    .maybeSingle();

  if (error) fail("el destino", error);

  if (!data) {
    throw new Error(`No existe el destino "${id}".`);
  }

  return {
    id: data.id,
    name: data.name,
    corridor: data.corridor,
    baseCurrency: data.base_currency,
  };
}

// ---------------------------------------------------------------------------
// climate_profiles / climate_thresholds
// ---------------------------------------------------------------------------

export async function getClimateProfiles(
  destinationId: string,
): Promise<ClimateProfile[]> {
  const { data, error } = await referenceClient()
    .from("climate_profiles")
    .select("month, temp_min, temp_max, precip_probability")
    .eq("destination_id", destinationId)
    .order("month");

  if (error) fail("los perfiles de clima", error);

  return (data ?? []).map((row) => ({
    month: row.month,
    tempMin: numeric(row.temp_min),
    tempMax: numeric(row.temp_max),
    precipProbability: numeric(row.precip_probability),
  }));
}

export async function getClimateThresholds(): Promise<ClimateThreshold[]> {
  const { data, error } = await referenceClient()
    .from("climate_thresholds")
    .select("id, temp_max");

  if (error) fail("los umbrales de clima", error);

  // Sin orden explícito a propósito: orderThresholds() los ordena por tempMax y
  // deja el bucket sin tope al final. Ordenarlos acá por id daría un orden
  // alfabético que no significa nada.
  return (data ?? []).map((row) => ({
    id: row.id,
    tempMax: numeric(row.temp_max),
  }));
}

// ---------------------------------------------------------------------------
// packing_catalog
// ---------------------------------------------------------------------------

/**
 * Se exporta la lista de columnas, y no solo la query, porque la lectura de un
 * viaje trae estas mismas filas embebidas dentro de trip_packing_items. Dos
 * listas separadas se desincronizan en cuanto alguien agregue una columna.
 */
export const PACKING_CATALOG_COLUMNS =
  "id, category, name, weight_g, climate_tags, trip_type_tags, base_qty, scales_with_days, days_per_unit, max_qty";

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

export function toPackingCatalogItem(
  row: PackingCatalogRow,
): PackingCatalogItem {
  return {
    id: row.id,
    category: row.category,
    name: row.name,
    weightG: row.weight_g,
    climateTags: row.climate_tags,
    // El constraint packing_catalog_trip_type_tags_valid ya garantiza que solo
    // haya valores del enum cerrado, así que el cast no esconde nada.
    tripTypeTags: row.trip_type_tags as TripType[],
    baseQty: row.base_qty,
    scalesWithDays: row.scales_with_days,
    daysPerUnit: row.days_per_unit,
    maxQty: row.max_qty,
  };
}

export async function getPackingCatalog(): Promise<PackingCatalogItem[]> {
  const { data, error } = await referenceClient()
    .from("packing_catalog")
    .select(PACKING_CATALOG_COLUMNS);

  if (error) fail("el catálogo de equipaje", error);

  return (data ?? []).map(toPackingCatalogItem);
}

// ---------------------------------------------------------------------------
// products
// ---------------------------------------------------------------------------

export const PRODUCT_COLUMNS =
  "id, category, name, base_price, currency, updated_at, base_qty, scales_with_days, days_per_unit, max_qty";

export interface ProductRow {
  id: string;
  category: string;
  name: string;
  base_price: number | string;
  currency: string;
  updated_at: string;
  base_qty: number;
  scales_with_days: boolean;
  days_per_unit: number | null;
  max_qty: number | null;
}

export function toBudgetProduct(row: ProductRow): BudgetProduct {
  return {
    id: row.id,
    category: row.category,
    name: row.name,
    basePrice: requiredNumeric(row.base_price, "products.base_price"),
    currency: row.currency,
    updatedAt: row.updated_at,
    baseQty: row.base_qty,
    scalesWithDays: row.scales_with_days,
    daysPerUnit: row.days_per_unit,
    maxQty: row.max_qty,
  };
}

export async function getProducts(
  destinationId: string,
): Promise<BudgetProduct[]> {
  const { data, error } = await referenceClient()
    .from("products")
    .select(PRODUCT_COLUMNS)
    .eq("destination_id", destinationId);

  if (error) fail("el catálogo de precios", error);

  return (data ?? []).map(toBudgetProduct);
}
