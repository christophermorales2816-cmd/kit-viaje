import {
  resolveClimateBuckets,
  type ClimateBucketId,
  type ClimateProfile,
  type ClimateThreshold,
} from "@/lib/packing";

/**
 * El año climático de un destino (spec, sección 9.1).
 *
 * Alimenta la página "Condiciones actuales", que va entre la guía y el
 * planificador: qué mes conviene, qué clima toca cada mes y qué llevar.
 *
 * Es un módulo puro. Recibe las filas de climate_profiles y climate_thresholds
 * ya leídas y no sabe que Supabase existe, igual que el motor de packing.
 */

export type Season = "ideal" | "media" | "dificil";

/**
 * Umbrales de "mes exigente". Un mes es difícil si CUALQUIERA se cumple.
 *
 * Están acá y no en la base a propósito: no son parámetros del destino, son la
 * definición editorial de qué llamamos un mes incómodo. Cambiarlos cambia el
 * mensaje de la página, y eso debería ser un diff visible en un PR.
 */
export const CALOR_EXIGENTE = 28;
export const FRIO_EXIGENTE = 8;
export const LLUVIA_ALTA = 70;

/** Umbrales de "mes ideal". Tienen que cumplirse TODOS. */
export const IDEAL_MAX = 26;
export const IDEAL_MIN = 10;
export const IDEAL_LLUVIA = 50;

export const MESES_CORTOS = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
] as const;

export const MESES_LARGOS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

/**
 * Clasifica un mes por sus EXTREMOS, no por su promedio.
 *
 * Esto importa más de lo que parece. La primera versión promediaba temp_min y
 * temp_max y miraba dónde caía ese número: con eso los doce meses de Buenos
 * Aires salían "ideal", porque el promedio de un enero de 30 °C de día y 20 de
 * noche es 25, que es templado y agradable. El promedio esconde justo lo que
 * hace difícil un mes. Enero no es incómodo en promedio: es incómodo a las
 * tres de la tarde.
 *
 * Con extremos, el año de Buenos Aires sale ideal en Abr/May/Sep/Oct/Nov y
 * difícil en Ene/Feb/Jul/Dic, que es lo que diría cualquiera que viva ahí.
 *
 * Sin ningún dato de temperatura devuelve "media": no sabemos, y "media" es la
 * única de las tres que no promete nada.
 */
export function resolveSeason(
  tempMin: number | null,
  tempMax: number | null,
  precipProbability: number | null,
): Season {
  if (tempMin === null && tempMax === null) return "media";

  const calor = tempMax !== null && tempMax >= CALOR_EXIGENTE;
  const frio = tempMin !== null && tempMin <= FRIO_EXIGENTE;
  const lluvioso =
    precipProbability !== null && precipProbability >= LLUVIA_ALTA;

  if (calor || frio || lluvioso) return "dificil";

  // Un dato ausente no descalifica: con temp_max en null no podemos decir que
  // las tardes sean pesadas, así que ese requisito se da por cumplido. El
  // guard de arriba ya garantiza que al menos una temperatura existe.
  const templadoDeDia = tempMax === null || tempMax <= IDEAL_MAX;
  const templadoDeNoche = tempMin === null || tempMin >= IDEAL_MIN;
  const seco = precipProbability === null || precipProbability < IDEAL_LLUVIA;

  return templadoDeDia && templadoDeNoche && seco ? "ideal" : "media";
}

/**
 * Orden de exigencia de los buckets, del más ropa-específico al más neutro.
 *
 * Se usa para elegir UN bucket representativo cuando un mes abarca varios
 * (enero en Buenos Aires es templado de noche y cálido de tarde). El consejo
 * de la tarjeta tiene que hablar del que obliga a empacar algo distinto, y
 * "templado" nunca obliga a nada.
 *
 * 'fresco' entra entre 'frio' y 'templado': pide capas, que es más que nada
 * pero menos que abrigo de verdad.
 */
const EXIGENCIA = ["calido", "frio", "fresco", "templado"] as const;

function mostDemandingBucket(
  buckets: ClimateBucketId[],
): ClimateBucketId | null {
  for (const candidato of EXIGENCIA) {
    if (buckets.includes(candidato)) return candidato;
  }

  // Un bucket configurado desde Studio que no está en la escala editorial: el
  // primero sirve más que null, porque al menos es del mes.
  return buckets[0] ?? null;
}

export interface MonthClimate {
  /** 1-12. */
  month: number;
  shortName: string;
  longName: string;
  tempMin: number | null;
  tempMax: number | null;
  /** Escala 0-100. Es probabilidad, no milímetros: es lo único que hay. */
  precipProbability: number | null;
  season: Season;
  /**
   * TODOS los buckets que toca el rango del mes, no uno solo. Sin esto las
   * doce tarjetas salían idénticas: al mapear el mes a un único bucket por su
   * temperatura media, los doce meses de Buenos Aires caían en "templado".
   */
  buckets: ClimateBucketId[];
  /** El bucket que manda para el consejo y los chips. `null` si no hay datos. */
  primaryBucket: ClimateBucketId | null;
}

export function resolveClimateYear(
  profiles: ClimateProfile[],
  thresholds: ClimateThreshold[],
): MonthClimate[] {
  return Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const profile = profiles.find((candidato) => candidato.month === month);
    const tempMin = profile?.tempMin ?? null;
    const tempMax = profile?.tempMax ?? null;
    const precipProbability = profile?.precipProbability ?? null;

    // Un mes a la vez, no el año entero: resolveClimateBuckets une los buckets
    // de todos los meses que recibe, y pasarle los doce daría la misma lista
    // para las doce tarjetas.
    const { buckets } = resolveClimateBuckets(
      [month],
      profile ? [profile] : [],
      thresholds,
    );

    return {
      month,
      shortName: MESES_CORTOS[i],
      longName: MESES_LARGOS[i],
      tempMin,
      tempMax,
      precipProbability,
      season: resolveSeason(tempMin, tempMax, precipProbability),
      buckets,
      primaryBucket: mostDemandingBucket(buckets),
    };
  });
}

export interface YearSummary {
  /** Mínima más baja del año. `null` si ningún mes tiene datos. */
  tempMin: number | null;
  /** Máxima más alta del año. */
  tempMax: number | null;
  /** El mes ideal con menos lluvia. `null` si no hay ningún mes ideal. */
  bestMonth: MonthClimate | null;
  idealCount: number;
}

export function summarizeYear(months: MonthClimate[]): YearSummary {
  const minimas = months
    .map((mes) => mes.tempMin)
    .filter((valor): valor is number => valor !== null);
  const maximas = months
    .map((mes) => mes.tempMax)
    .filter((valor): valor is number => valor !== null);

  const ideales = months.filter((mes) => mes.season === "ideal");

  // Entre los ideales gana el más seco. Empate o sin dato de lluvia: gana el
  // primero del año, que es un desempate arbitrario pero estable.
  const bestMonth =
    ideales.length === 0
      ? null
      : ideales.reduce((mejor, mes) =>
          (mes.precipProbability ?? 100) < (mejor.precipProbability ?? 100)
            ? mes
            : mejor,
        );

  return {
    tempMin: minimas.length === 0 ? null : Math.min(...minimas),
    tempMax: maximas.length === 0 ? null : Math.max(...maximas),
    bestMonth,
    idealCount: ideales.length,
  };
}
