/**
 * Cuánto acercar el globo al elegir un país, para que se lean sus estados
 * (spec, 27).
 *
 * Con un zoom fijo, Estados Unidos o Argentina llenan el globo y Francia es
 * una mancha donde no entra ni un nombre. Así que el zoom sale del tamaño del
 * país: de lo lejos que quedan sus estados del centro.
 */

import {
  ESCALA_MAXIMA,
  RADIO_DE_LA_ESFERA,
  acotar,
  distanciaAngular,
  type Coordenadas,
} from "./geometria";

const RAD = Math.PI / 180;

/**
 * Qué parte del radio del globo ocupa el país, una vez acercado. Menos de la
 * mitad: arriba queda el nombre del país y abajo, la tarjeta.
 */
const PARTE_DEL_GLOBO = 0.42;

/**
 * Hasta cuántas veces la distancia mediana a la base cuenta un estado para el
 * tamaño del país. No todos cuentan: Francia tiene regiones en Sudamérica y
 * en el Índico, y Estados Unidos, Hawái y Alaska.
 */
const VECES_LA_MEDIANA = 2.5;

export interface Encuadre {
  /** Adónde mirar: el centro de los estados, no la capital. */
  centro: Coordenadas;
  /** Hasta dónde llegan, en grados desde ese centro. */
  radioEnGrados: number;
}

function aVector([lat, lon]: Coordenadas): [number, number, number] {
  return [
    Math.cos(lat * RAD) * Math.cos(lon * RAD),
    Math.cos(lat * RAD) * Math.sin(lon * RAD),
    Math.sin(lat * RAD),
  ];
}

/**
 * El centro y el tamaño de un país según sus estados, o null si no tiene.
 * Se promedian como vectores sobre la esfera: así Fiyi, que cruza el
 * antimeridiano, no termina centrada en Greenwich.
 */
export function encuadreDelPais(
  base: Coordenadas,
  estados: readonly Coordenadas[],
): Encuadre | null {
  if (estados.length === 0) return null;

  const distancias = estados
    .map((estado) => distanciaAngular(base, estado))
    .sort((a, b) => a - b);
  const mediana = distancias[Math.floor((distancias.length - 1) / 2)];
  const tope = Math.max(1, mediana * VECES_LA_MEDIANA);
  const cercanos = estados.filter(
    (estado) => distanciaAngular(base, estado) <= tope,
  );

  const suma = cercanos
    .map(aVector)
    .reduce((a, v) => [a[0] + v[0], a[1] + v[1], a[2] + v[2]], [0, 0, 0]);
  const largo = Math.hypot(...suma) || 1;
  const centro: Coordenadas = [
    Math.asin(acotar(suma[2] / largo, -1, 1)) / RAD,
    Math.atan2(suma[1], suma[0]) / RAD,
  ];

  const radioEnGrados = Math.max(
    ...cercanos.map((estado) => distanciaAngular(centro, estado)),
  );

  return { centro, radioEnGrados };
}

/**
 * La escala con la que un país de ese radio ocupa PARTE_DEL_GLOBO, sin bajar
 * de `minima` ni pasar del zoom máximo.
 */
export function escalaParaElPais(
  radioEnGrados: number,
  minima: number,
): number {
  const seno = Math.sin(acotar(radioEnGrados, 0.5, 89) * RAD);

  return acotar(
    PARTE_DEL_GLOBO / (RADIO_DE_LA_ESFERA * seno),
    minima,
    ESCALA_MAXIMA,
  );
}
