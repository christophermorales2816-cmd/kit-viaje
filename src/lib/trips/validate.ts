import { TRIP_TYPES, durationInDays, type TripType } from "@/lib/packing";

/**
 * Validación de lo que llega desde el cliente (spec, sección 6).
 *
 * Vive separada del I/O y devuelve un resultado en vez de tirar: las Server
 * Actions reciben datos de un formulario, y "el viaje no puede durar más de 30
 * días" es algo que el usuario tiene que leer, no un stack trace en los logs.
 *
 * Duplica lo que ya garantizan los constraints de la tabla `trips` a propósito.
 * La base es la última línea de defensa y responde con un error de Postgres
 * imposible de mostrar; esta capa responde en castellano y evita el round-trip.
 */

/** El rango que acepta el datepicker de la landing (spec, sección 6A). */
export const MIN_TRIP_DAYS = 1;
export const MAX_TRIP_DAYS = 30;

export interface TripInput {
  /** yyyy-mm-dd. */
  startDate: string;
  /** yyyy-mm-dd, inclusive. */
  endDate: string;
  tripType: TripType;
}

export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

function isTripType(value: unknown): value is TripType {
  return (
    typeof value === "string" && TRIP_TYPES.includes(value as TripType)
  );
}

/**
 * Formato de los tokens de sesión, tal como los genera la base:
 * `edit_token` es un uuid v4 sin guiones (32 hex) y `share_slug` sus primeros
 * 16 — ver 20260826120100_session_tables.sql.
 *
 * Chequear la forma antes de consultar no es seguridad (el token igual se
 * verifica contra la base), es evitar una query por cada URL basureada y que
 * un `/viaje/undefined` devuelva 404 sin tocar Supabase.
 */
const EDIT_TOKEN = /^[0-9a-f]{32}$/;
const SHARE_SLUG = /^[0-9a-f]{16}$/;

export function isEditToken(value: unknown): value is string {
  return typeof value === "string" && EDIT_TOKEN.test(value);
}

export function isShareSlug(value: unknown): value is string {
  return typeof value === "string" && SHARE_SLUG.test(value);
}

/**
 * Los ids del catálogo y de products, que llegan desde el cliente en cada
 * edición. Mismo criterio que los tokens: la FK de la base es la que decide, y
 * esto solo evita mandarle a Postgres un string que no es un uuid — lo que
 * además devuelve un error de sintaxis, no un "no encontrado".
 */
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === "string" && UUID.test(value);
}

/**
 * Valida lo mínimo para crear un viaje: dos fechas y un tipo.
 *
 * No normaliza ni "arregla" nada — si las fechas vienen al revés lo dice, no
 * las da vuelta en silencio. Invertirlas sería adivinar qué quiso hacer el
 * usuario y generarle una lista para un viaje que no pidió.
 */
export function parseTripInput(raw: {
  startDate: unknown;
  endDate: unknown;
  tripType: unknown;
}): ValidationResult<TripInput> {
  const { startDate, endDate, tripType } = raw;

  if (typeof startDate !== "string" || typeof endDate !== "string") {
    return { ok: false, error: "Elegí las fechas de ida y de vuelta." };
  }

  if (!isTripType(tripType)) {
    return {
      ok: false,
      error: `Elegí un tipo de viaje: ${TRIP_TYPES.join(", ")}.`,
    };
  }

  let days: number;

  try {
    // durationInDays parsea las dos fechas contra el calendario real y rechaza
    // el orden invertido, así que cubre formato, existencia y orden de una.
    days = durationInDays(startDate, endDate);
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof RangeError
          ? error.message
          : "Las fechas del viaje no son válidas.",
    };
  }

  if (days < MIN_TRIP_DAYS || days > MAX_TRIP_DAYS) {
    return {
      ok: false,
      error: `El viaje tiene que durar entre ${MIN_TRIP_DAYS} y ${MAX_TRIP_DAYS} días, y este dura ${days}.`,
    };
  }

  return { ok: true, value: { startDate, endDate, tripType } };
}

/**
 * Cantidad editada a mano en el dashboard.
 *
 * El tope superior no sale de ninguna regla de negocio: es el mismo criterio
 * que el `check (qty > 0)` de la base, más un techo para que un `99999999` en
 * el input no dé un total de presupuesto que ocupe media pantalla. El usuario
 * puede poner lo que quiera dentro de eso.
 */
export const MAX_ITEM_QTY = 999;

export function parseQty(value: unknown): ValidationResult<number> {
  const parsed = typeof value === "string" ? Number(value) : value;

  if (typeof parsed !== "number" || !Number.isInteger(parsed)) {
    return { ok: false, error: "La cantidad tiene que ser un número entero." };
  }

  if (parsed < 1 || parsed > MAX_ITEM_QTY) {
    return {
      ok: false,
      error: `La cantidad tiene que estar entre 1 y ${MAX_ITEM_QTY}.`,
    };
  }

  return { ok: true, value: parsed };
}
