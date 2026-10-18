import "server-only";

import { AEROPUERTOS, ORDEN_POR_TIPO, type Aeropuerto } from "./aeropuertos";
import { distanciaKm } from "./geo";

/**
 * Qué aeropuerto le sugerimos a alguien según dónde está (spec, 17.3).
 *
 * El más cercano no siempre es el que sirve. En el centro de Londres, el más
 * cercano es London City, a 13 km, que vuela a pocos lugares; el que sirve para
 * casi cualquier viaje es Heathrow, a 23. La regla:
 *
 *   1. Se toman los aeropuertos a menos de RADIO_KM.
 *   2. De esos, el grande más cercano; si no hay ninguno grande, el mediano más
 *      cercano, y así con los chicos y los hidroaeropuertos.
 *   3. Si no hay ninguno en el radio —una isla, el medio del desierto—, el
 *      radio pasa a ser el doble de la distancia al más cercano del mundo, y
 *      vale la misma regla. Desde Tristán da Cunha, el más cercano es el de
 *      Santa Elena, a 2.400 km, pero el que sirve es el de Ciudad del Cabo, a
 *      2.800.
 *
 * Los demás del radio se ofrecen como alternativas, en el mismo orden: quien
 * vive en Buenos Aires y vuela desde Ezeiza no tiene que buscarlo.
 */

/** Hasta dónde un aeropuerto todavía es "de tu ciudad". */
export const RADIO_KM = 150;

/** Cuántas alternativas se ofrecen, además de la sugerida. */
export const ALTERNATIVAS = 4;

export interface AeropuertoCercano {
  aeropuerto: Aeropuerto;
  distanciaKm: number;
}

export interface Sugerencia {
  sugerido: AeropuertoCercano;
  otros: AeropuertoCercano[];
}

/** Todos los aeropuertos a menos de `radioKm`, del más cercano al más lejano. */
export function aeropuertosCercanos(
  lat: number,
  lon: number,
  radioKm: number = RADIO_KM,
): AeropuertoCercano[] {
  return AEROPUERTOS.map((aeropuerto) => ({
    aeropuerto,
    distanciaKm: distanciaKm([lat, lon], [aeropuerto.lat, aeropuerto.lon]),
  }))
    .filter((cercano) => cercano.distanciaKm <= radioKm)
    .sort((a, b) => a.distanciaKm - b.distanciaKm);
}

export function sugerirOrigen(lat: number, lon: number): Sugerencia {
  // Del más cercano al más lejano: la lista nunca está vacía, porque el
  // generador exige miles de aeropuertos.
  const todos = aeropuertosCercanos(lat, lon, Infinity);
  const masCercano = todos[0].distanciaKm;
  const radio = masCercano <= RADIO_KM ? RADIO_KM : 2 * masCercano;

  // `sort` es estable: dentro de cada tamaño se mantiene el orden por
  // distancia.
  const [sugerido, ...otros] = todos
    .filter((cercano) => cercano.distanciaKm <= radio)
    .sort(
      (a, b) =>
        ORDEN_POR_TIPO[a.aeropuerto.tipo] - ORDEN_POR_TIPO[b.aeropuerto.tipo],
    );

  return { sugerido, otros: otros.slice(0, ALTERNATIVAS) };
}
