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
 * Las monedas cuyos precios se muestran con centavos.
 *
 * La regla: **una moneda lleva centavos si su unidad vale más de medio dólar.**
 * Por debajo de eso, un café o un boleto cuestan varias unidades y redondear
 * a la unidad no cambia el precio; por encima, sí: un café a 3,50 redondeado a
 * 4 es otro precio.
 *
 * La regla se escribió después de las decisiones y las explica todas. Los
 * catálogos de América Latina —pesos, reales, bolivianos, soles, quetzales,
 * colones— van enteros, y ahí "$ 65.000,00" o "R$ 20,00" es ruido. El dólar
 * lleva centavos por partida doble: es la moneda del total convertido y la que
 * se cobra en Ecuador, El Salvador y Panamá. En Europa, el euro, la libra, el
 * franco suizo y el marco bosnio sí; el zloty, el leu, la corona checa, el lek
 * o la lira turca, no.
 *
 * En Asia, la misma regla deja adentro el dólar de Singapur y el de Brunéi, el
 * manat azerí y los dinares y riales del Golfo y de Jordania (KWD, BHD, OMR,
 * JOD). Estos cuatro tienen milésimos y no centésimos: se muestran con dos
 * decimales igual, que para un precio de referencia sobra. Quedan afuera el
 * dírham de los Emiratos, el riyal saudí y el catarí, el shekel, el ringgit y
 * el lari: valen un cuarto de dólar o menos, como el zloty. Están desde antes
 * de que haya un solo país de Asia para que ninguna tanda tenga que acordarse.
 *
 * Antes la regla era al revés —"sin decimales solo para ARS"— y con un solo
 * país eso alcanzaba. Con diecinueve habría que haber sumado cada moneda nueva
 * a mano, y la que se olvidara saldría con ",00" en todos sus precios.
 *
 * `herramientas/corredor/generar.py` tiene su propia copia (`CON_CENTAVOS`),
 * porque redondea las ciudades derivadas con la misma regla; un test exige que
 * las dos digan lo mismo.
 */
export const MONEDAS_CON_CENTAVOS: ReadonlySet<string> = new Set([
  "USD",
  "EUR",
  "GBP",
  "CHF",
  "BAM",
  "SGD",
  "BND",
  "AZN",
  "JOD",
  "KWD",
  "BHD",
  "OMR",
]);

/** Importes con el símbolo de la moneda: precios, subtotales y totales. */
export function formatMoney(amount: number, currency: string): string {
  const decimales = MONEDAS_CON_CENTAVOS.has(currency) ? 2 : 0;

  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(amount);
}

/**
 * Cuántos decimales lleva una cotización.
 *
 * Una cotización no es un precio: es cuántas unidades locales vale un dólar, y
 * la cantidad de cifras que importan depende del tamaño del número. 1.220 pesos
 * argentinos se leen bien sin centavos; 5,11 reales redondeados a "5" pierden
 * justo la parte que distingue un día de otro. Pasó exactamente eso en el
 * selector del presupuesto de Brasil.
 */
function decimalesDeCotizacion(rate: number): number {
  const tamaño = Math.abs(rate);
  // Por debajo de uno —la libra, el euro, los dinares del Golfo— dos
  // decimales dejan dos cifras: un dinar kuwaití a 0,307 se leería "0,31".
  if (tamaño < 1) return 3;
  return tamaño < 100 ? 2 : 0;
}

/** Una cotización como número suelto: "1.220", "5,11". */
export function formatRate(rate: number): string {
  const decimales = decimalesDeCotizacion(rate);

  return new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(rate);
}

/** Una cotización con el símbolo de la moneda local: "$ 1.220", "R$ 5,11". */
export function formatQuote(rate: number, currency: string): string {
  const decimales = decimalesDeCotizacion(rate);

  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(rate);
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
