/**
 * Aritmética de fechas del motor de packing.
 *
 * Todo se calcula en UTC y las fechas se parsean a mano en vez de pasarlas por
 * `new Date(iso)`. No es purismo: `new Date('2026-09-01')` interpreta el string
 * como medianoche UTC, y después `getMonth()` lo lee en la zona local. Para un
 * usuario en Buenos Aires (UTC-3) eso devuelve el 31 de agosto, y un viaje que
 * arranca el 1 de septiembre resolvería el clima de agosto.
 */

export interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const MS_PER_DAY = 86_400_000;

export function parseIsoDate(iso: string): CalendarDate {
  const match = ISO_DATE.exec(iso);
  if (!match) {
    throw new RangeError(`Fecha inválida: "${iso}". Se espera el formato yyyy-mm-dd.`);
  }

  const [, rawYear, rawMonth, rawDay] = match;
  const date: CalendarDate = {
    year: Number(rawYear),
    month: Number(rawMonth),
    day: Number(rawDay),
  };

  // Round-trip contra el calendario real: descarta 2026-02-30 y 2026-13-01,
  // que pasan la regex sin problema.
  const utc = new Date(0);
  utc.setUTCFullYear(date.year, date.month - 1, date.day);
  utc.setUTCHours(0, 0, 0, 0);

  if (
    utc.getUTCFullYear() !== date.year ||
    utc.getUTCMonth() !== date.month - 1 ||
    utc.getUTCDate() !== date.day
  ) {
    throw new RangeError(`Fecha inexistente en el calendario: "${iso}".`);
  }

  return date;
}

export function toUtcMillis(date: CalendarDate): number {
  const utc = new Date(0);
  utc.setUTCFullYear(date.year, date.month - 1, date.day);
  utc.setUTCHours(0, 0, 0, 0);
  return utc.getTime();
}

/**
 * Duración en días, contando ambos extremos: del 1 al 7 de septiembre son 7
 * días, no 6. Es la misma cuenta que hace el constraint trips_max_duration
 * (`end_date - start_date <= 29`, o sea hasta 30 días).
 */
export function durationInDays(startDate: string, endDate: string): number {
  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);
  const diff = toUtcMillis(end) - toUtcMillis(start);

  if (diff < 0) {
    throw new RangeError(
      `El viaje termina antes de empezar: ${startDate} → ${endDate}.`,
    );
  }

  return diff / MS_PER_DAY + 1;
}

/**
 * Meses que toca el rango, en orden cronológico y sin repetir.
 *
 * Devuelve números de mes (1-12) y no pares año/mes porque `climate_profiles`
 * está indexada solo por mes: son promedios históricos, no datos de un año
 * puntual. Un viaje de diciembre a enero devuelve `[12, 1]`.
 */
export function monthsCovered(startDate: string, endDate: string): number[] {
  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);

  if (toUtcMillis(end) < toUtcMillis(start)) {
    throw new RangeError(
      `El viaje termina antes de empezar: ${startDate} → ${endDate}.`,
    );
  }

  const months: number[] = [];
  let { year, month } = start;

  while (year < end.year || (year === end.year && month <= end.month)) {
    if (!months.includes(month)) {
      months.push(month);
    }
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  return months;
}
