import type { ClimateBucketId, ClimateProfile, ClimateThreshold } from "./types";

/**
 * Resolución de buckets de clima (spec, sección 4, paso 2).
 *
 * INTERPRETACIÓN DEL SPEC — vale leerla antes de tocar esto.
 *
 * El paso 2 dice: "Promediar temp_min/temp_max de esos meses → mapear a
 * bucket(s) de climate_thresholds. Si el viaje cruza más de un bucket (ej. 30
 * días que arrancan templados y terminan fríos), incluir ítems de ambos."
 *
 * Las dos frases no pueden cumplirse juntas al pie de la letra: promediar todos
 * los meses colapsa el rango en un solo número, y un número cae siempre en
 * exactamente un bucket. Con esa lectura, el ejemplo del propio spec —arrancar
 * templado y terminar frío— es imposible de producir.
 *
 * Lo que se implementa acá: cada mes cubierto aporta su rango [temp_min,
 * temp_max] y se toman TODOS los buckets que ese rango toca; después se unen
 * los de todos los meses. Eso reproduce el ejemplo (septiembre y octubre caen
 * en buckets distintos) y además cubre el caso de un solo mes con noches frías
 * y tardes templadas, que necesita abrigo igual.
 *
 * El "promediar" del spec no se pierde: las filas de climate_profiles YA son
 * promedios históricos por mes (sección 1). El promedio está en el dato, no en
 * el cálculo.
 *
 * La alternativa sería promediar temp_min entre meses y temp_max entre meses, y
 * mapear ese rango. Es una línea de diferencia y está aislada en
 * `resolveClimateBuckets`, pero descarta información temporal sin necesidad.
 */

export interface ResolvedClimate {
  /** Buckets a incluir, ordenados de más frío a más cálido. */
  buckets: ClimateBucketId[];
  /**
   * Meses del viaje sin datos de clima utilizables (sin fila en
   * climate_profiles, o con temp_min y temp_max en null). Se reportan en vez de
   * ignorarse: si faltan, la lista sale más corta de lo que debería y quien
   * llama tiene que poder avisarlo.
   */
  monthsWithoutData: number[];
}

/**
 * Ordena los umbrales de más frío a más cálido. El bucket sin límite superior
 * (`tempMax: null`) queda último: es el abierto hacia arriba.
 */
export function orderThresholds(thresholds: ClimateThreshold[]): ClimateThreshold[] {
  return [...thresholds].sort((a, b) => {
    if (a.tempMax === null && b.tempMax === null) return a.id.localeCompare(b.id, "es");
    if (a.tempMax === null) return 1;
    if (b.tempMax === null) return -1;
    return a.tempMax - b.tempMax;
  });
}

/**
 * Índice del bucket que le corresponde a una temperatura, sobre umbrales ya
 * ordenados. El límite es inclusive: con el seed del spec ('frio' hasta 10),
 * 10 °C es frío y 10.1 °C es templado.
 *
 * Devuelve -1 si no hay umbrales.
 */
export function bucketIndexForTemperature(
  temperatureC: number,
  orderedThresholds: ClimateThreshold[],
): number {
  if (orderedThresholds.length === 0) return -1;

  const index = orderedThresholds.findIndex(
    (threshold) => threshold.tempMax === null || temperatureC <= threshold.tempMax,
  );

  // Sin bucket abierto hacia arriba y temperatura por encima de todos: cae en el
  // más cálido disponible. Es una configuración inválida (el spec define
  // 'calido' con tempMax null), pero devolver el más cálido es más útil que
  // devolver nada.
  return index === -1 ? orderedThresholds.length - 1 : index;
}

export function resolveClimateBuckets(
  months: number[],
  profiles: ClimateProfile[],
  thresholds: ClimateThreshold[],
): ResolvedClimate {
  const ordered = orderThresholds(thresholds);
  const monthsWithoutData: number[] = [];

  if (ordered.length === 0) {
    return { buckets: [], monthsWithoutData: [...months] };
  }

  const selected = new Set<number>();

  for (const month of months) {
    const profile = profiles.find((candidate) => candidate.month === month);
    const temperatures = [profile?.tempMin, profile?.tempMax].filter(
      (value): value is number => typeof value === "number",
    );

    if (temperatures.length === 0) {
      monthsWithoutData.push(month);
      continue;
    }

    // Un solo valor presente sirve igual: el rango colapsa a un punto.
    const lowest = Math.min(...temperatures);
    const highest = Math.max(...temperatures);

    const from = bucketIndexForTemperature(lowest, ordered);
    const to = bucketIndexForTemperature(highest, ordered);

    for (let index = from; index <= to; index += 1) {
      selected.add(index);
    }
  }

  const buckets = [...selected]
    .sort((a, b) => a - b)
    .map((index) => ordered[index].id);

  return { buckets, monthsWithoutData };
}
