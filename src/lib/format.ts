import { parseIsoDate } from "@/lib/packing";

/**
 * Formateo para pantalla. Todo en es-AR, que es el locale del corredor del MVP.
 *
 * El tema recurrente de este archivo es el mismo que el de src/lib/packing/dates.ts:
 * las fechas del viaje son fechas de CALENDARIO, no instantes. Pasarlas por
 * `new Date("2026-09-01")` las interpreta como medianoche UTC y las muestra en
 * la zona local, así que a un usuario en Buenos Aires (UTC-3) le aparecería el
 * 31 de agosto. Acá se arma la Date en UTC y se formatea en UTC.
 */

const LOCALE = "es-AR";

/**
 * Date → "yyyy-mm-dd" leyendo los componentes LOCALES.
 *
 * Es la conversión inversa y va al revés a propósito: el datepicker entrega una
 * Date construida en la zona del usuario (medianoche local del día que tocó).
 * `toISOString()` la pasaría a UTC y devolvería el día anterior para cualquiera
 * al oeste de Greenwich — el usuario elige el 1 y se guarda el 31.
 */
export function toIsoDate(date: Date): string {
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const dia = String(date.getDate()).padStart(2, "0");

  return `${date.getFullYear()}-${mes}-${dia}`;
}

/** "yyyy-mm-dd" → Date en UTC, para formatear sin corrimiento. */
function toUtcDate(iso: string): Date {
  const { year, month, day } = parseIsoDate(iso);

  return new Date(Date.UTC(year, month - 1, day));
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(toUtcDate(iso));
}

/**
 * "1 al 7 de septiembre de 2026", y con los dos extremos completos cuando el
 * viaje cruza de mes o de año.
 */
export function formatDateRange(startIso: string, endIso: string): string {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);

  if (start.year === end.year && start.month === end.month) {
    if (start.day === end.day) return formatDate(startIso);

    const mesYAno = new Intl.DateTimeFormat(LOCALE, {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(toUtcDate(endIso));

    return `${start.day} al ${end.day} de ${mesYAno}`;
  }

  return `${formatDate(startIso)} al ${formatDate(endIso)}`;
}

/** "7 días" / "1 día". */
export function formatDuration(days: number): string {
  return `${days} ${days === 1 ? "día" : "días"}`;
}

/**
 * Peso informativo del equipaje (spec, sección 4).
 *
 * Bajo el kilo se muestra en gramos: "0,4 kg" dice menos que "400 g" cuando lo
 * que el usuario quiere saber es si le entra en la mochila.
 */
export function formatWeight(grams: number): string {
  if (grams < 1000) {
    return `${Math.round(grams)} g`;
  }

  return `${new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(grams / 1000)} kg`;
}

/**
 * Importes con el símbolo de la moneda.
 *
 * Sin decimales para ARS y con dos para el resto: los precios del catálogo son
 * enteros de cinco cifras y "$ 65.000,00" es ruido, pero el total convertido a
 * dólares sí necesita los centavos.
 */
export function formatMoney(amount: number, currency: string): string {
  const sinDecimales = currency === "ARS";

  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: sinDecimales ? 0 : 2,
    maximumFractionDigits: sinDecimales ? 0 : 2,
  }).format(amount);
}

/** El valor de una cotización: siempre pesos por dólar, sin centavos. */
export function formatRate(rate: number): string {
  return new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 0 }).format(rate);
}

/**
 * Antigüedad en palabras, para el aviso de precios viejos (spec, sección 5).
 */
export function formatAge(days: number | null): string {
  if (days === null) return "sin datos";
  if (days === 0) return "hoy";
  if (days === 1) return "ayer";

  return `hace ${days} días`;
}

/** Hora de la última actualización de la cotización, esta sí como instante. */
export function formatTimestamp(iso: string): string {
  const parsed = new Date(iso);

  if (Number.isNaN(parsed.getTime())) return "sin fecha";

  return new Intl.DateTimeFormat(LOCALE, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(parsed);
}

const TIPO_DE_VIAJE: Record<string, string> = {
  playa: "Playa",
  urbano: "Urbano",
  aventura: "Aventura",
  negocios: "Negocios",
};

export function formatTripType(tripType: string): string {
  return TIPO_DE_VIAJE[tripType] ?? tripType;
}

/**
 * Las categorías se guardan en minúscula y sin acento (son claves, no texto).
 * La pantalla las muestra como títulos.
 */
const CATEGORIA: Record<string, string> = {
  documentacion: "Documentación",
  tecnologia: "Tecnología",
  ropa: "Ropa",
  calzado: "Calzado",
  higiene: "Higiene",
  salud: "Salud",
  accesorios: "Accesorios",
  comida: "Comida",
  transporte: "Transporte",
  alojamiento: "Alojamiento",
  entretenimiento: "Entretenimiento",
};

export function formatCategory(category: string): string {
  return (
    CATEGORIA[category] ??
    // Una categoría agregada desde Studio sin pasar por acá se muestra igual,
    // capitalizada, en vez de desaparecer de la pantalla.
    category.charAt(0).toUpperCase() + category.slice(1)
  );
}
