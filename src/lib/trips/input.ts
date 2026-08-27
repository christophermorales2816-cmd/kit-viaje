import { durationInDays, parseIsoDate } from "@/lib/packing/dates";
import { TRIP_TYPES } from "@/lib/packing";
import type { TripType } from "@/lib/packing";

/**
 * Validación de lo que manda el formulario de la landing.
 *
 * Espeja los constraints de la tabla `trips`: el rango de fechas, el máximo de
 * 30 días y el enum de tipo de viaje. La base sigue siendo la última línea de
 * defensa, no la primera — un error de validación tiene que llegar como texto
 * al usuario, no como un 500 desde Postgres.
 *
 * Devuelve un resultado en vez de tirar: el formulario tiene que poder mostrar
 * todos los problemas juntos.
 */

/** Coincide con el constraint trips_max_duration y con el datepicker (sección 6). */
export const MAX_TRIP_DAYS = 30;

export interface TripInput {
  startDate: string;
  endDate: string;
  tripType: TripType;
}

export type TripInputResult =
  | { ok: true; value: TripInput }
  | { ok: false; errors: string[] };

export interface RawTripInput {
  startDate?: unknown;
  endDate?: unknown;
  tripType?: unknown;
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isTripType(value: string): value is TripType {
  return (TRIP_TYPES as readonly string[]).includes(value);
}

function isParseableDate(value: string): boolean {
  try {
    parseIsoDate(value);
    return true;
  } catch {
    return false;
  }
}

export function parseTripInput(raw: RawTripInput): TripInputResult {
  const startDate = asTrimmedString(raw.startDate);
  const endDate = asTrimmedString(raw.endDate);
  const tripType = asTrimmedString(raw.tripType);

  const errors: string[] = [];

  if (!startDate) {
    errors.push("Elegí la fecha de inicio.");
  } else if (!isParseableDate(startDate)) {
    errors.push("La fecha de inicio no es una fecha válida.");
  }

  if (!endDate) {
    errors.push("Elegí la fecha de fin.");
  } else if (!isParseableDate(endDate)) {
    errors.push("La fecha de fin no es una fecha válida.");
  }

  if (!tripType) {
    errors.push("Elegí un tipo de viaje.");
  } else if (!isTripType(tripType)) {
    errors.push(`"${tripType}" no es un tipo de viaje del MVP.`);
  }

  // Sin dos fechas válidas no tiene sentido seguir midiendo la duración.
  if (errors.length > 0) {
    return { ok: false, errors };
  }

  let durationDays: number;
  try {
    durationDays = durationInDays(startDate, endDate);
  } catch {
    return { ok: false, errors: ["El viaje no puede terminar antes de empezar."] };
  }

  if (durationDays > MAX_TRIP_DAYS) {
    return {
      ok: false,
      errors: [
        `El viaje no puede durar más de ${MAX_TRIP_DAYS} días, y este dura ${durationDays}.`,
      ],
    };
  }

  return {
    ok: true,
    value: { startDate, endDate, tripType: tripType as TripType },
  };
}
