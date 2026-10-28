import type { CiudadDelMapa } from "@/content/comidas/types";
import { distanciaKm } from "@/lib/geo";

/**
 * La grilla del mapa de lugares (spec, 18.4).
 *
 * El mapa no pide "los lugares alrededor de donde estoy mirando": pide celdas
 * fijas de una décima de grado —unos 11 km de lado en el ecuador—, como pide
 * mosaicos un mapa. Así, todos los que miran el centro de Tokio piden las
 * mismas URLs y comparten la caché, y al mover el mapa solo se piden las
 * celdas nuevas. Cada celda es un pedido a OpenStreetMap como mucho dos veces
 * por día, y solo si alguien la mira.
 *
 * Una celda se nombra por su fila y su columna: la fila es la latitud de su
 * borde sur en décimas de grado, y la columna, la longitud de su borde oeste.
 * "356_1397" es la celda de 35,6° a 35,7° norte y de 139,7° a 139,8° este.
 */

/** Celdas por grado: la celda mide 1/10 de grado. */
const POR_GRADO = 10;

const FILA_MINIMA = -90 * POR_GRADO;
const FILA_MAXIMA = 90 * POR_GRADO - 1;
const COLUMNAS = 360 * POR_GRADO;
const COLUMNA_MINIMA = -180 * POR_GRADO;
const COLUMNA_MAXIMA = 180 * POR_GRADO - 1;

/**
 * Hasta dónde se busca desde las ciudades del catálogo.
 *
 * El mapa es "dónde comer esto en Japón": más lejos de 300 km de todas sus
 * ciudades ya no es Japón, o es campo sin lugares cargados. También acota lo
 * que la API acepta pedir a OpenStreetMap en nombre de alguien.
 */
export const RADIO_DEL_PAIS_KM = 300;

/** Desde qué zoom se cargan lugares: más lejos, no se distinguen. */
export const ZOOM_MINIMO = 12;

/** Cuántas celdas se piden a la vez, como mucho: más es un mapa muy alejado. */
export const CELDAS_MAXIMAS = 12;

export interface Celda {
  fila: number;
  columna: number;
}

export interface Limites {
  sur: number;
  oeste: number;
  norte: number;
  este: number;
}

/** La columna dentro de [-1800, 1799], dé las vueltas que dé. */
function columnaNormal(columna: number): number {
  return (
    ((((columna - COLUMNA_MINIMA) % COLUMNAS) + COLUMNAS) % COLUMNAS) +
    COLUMNA_MINIMA
  );
}

/**
 * Por cuántas décimas de grado empieza un valor.
 *
 * Con un margen de una millonésima: en coma flotante, 35,7 × 10 puede dar
 * 356,99999999999994, y esa latitud es de la celda 357.
 */
function decimas(grados: number): number {
  return Math.floor(grados * POR_GRADO + 1e-6);
}

export function celdaDe(lat: number, lon: number): Celda {
  return {
    fila: Math.min(FILA_MAXIMA, Math.max(FILA_MINIMA, decimas(lat))),
    columna: columnaNormal(decimas(lon)),
  };
}

export function claveDeCelda({ fila, columna }: Celda): string {
  return `${fila}_${columna}`;
}

// Una sola forma de escribir cada celda: sin ceros adelante ni "-0", para que
// dos URLs distintas no sean la misma celda y no se salteen la caché.
const CLAVE = /^(0|-?[1-9]\d{0,2})_(0|-?[1-9]\d{0,3})$/;

/** La celda de una clave, o null si no es una clave válida. */
export function celdaDeClave(clave: unknown): Celda | null {
  if (typeof clave !== "string") return null;

  const partes = CLAVE.exec(clave);
  if (!partes) return null;

  const fila = Number(partes[1]);
  const columna = Number(partes[2]);

  if (fila < FILA_MINIMA || fila > FILA_MAXIMA) return null;
  if (columna < COLUMNA_MINIMA || columna > COLUMNA_MAXIMA) return null;

  return { fila, columna };
}

export function limitesDeCelda({ fila, columna }: Celda): Limites {
  return {
    sur: fila / POR_GRADO,
    oeste: columna / POR_GRADO,
    norte: (fila + 1) / POR_GRADO,
    este: (columna + 1) / POR_GRADO,
  };
}

export function centroDeCelda(celda: Celda): [number, number] {
  const { sur, oeste, norte, este } = limitesDeCelda(celda);

  return [(sur + norte) / 2, (oeste + este) / 2];
}

/**
 * Las celdas que tocan lo que se ve del mapa, o null si son demasiadas.
 *
 * Los límites pueden pasar de ±180 de longitud: es lo que da el mapa cuando se
 * mira el antimeridiano (Fiyi, Tonga). Las columnas se dan vuelta solas.
 */
export function celdasVisibles(limites: Limites): Celda[] | null {
  const primeraFila = Math.max(FILA_MINIMA, decimas(limites.sur));
  const ultimaFila = Math.min(FILA_MAXIMA, decimas(limites.norte));
  const primeraColumna = decimas(limites.oeste);
  const ultimaColumna = decimas(limites.este);

  const cantidad =
    (ultimaFila - primeraFila + 1) * (ultimaColumna - primeraColumna + 1);

  if (cantidad > CELDAS_MAXIMAS) return null;

  const celdas: Celda[] = [];

  for (let fila = primeraFila; fila <= ultimaFila; fila++) {
    for (let columna = primeraColumna; columna <= ultimaColumna; columna++) {
      celdas.push({ fila, columna: columnaNormal(columna) });
    }
  }

  return celdas;
}

/** Si una celda queda a menos de RADIO_DEL_PAIS_KM de alguna ciudad. */
export function celdaDelPais(
  celda: Celda,
  ciudades: readonly CiudadDelMapa[],
): boolean {
  const centro = centroDeCelda(celda);

  return ciudades.some(
    (ciudad) => distanciaKm(centro, ciudad.coords) <= RADIO_DEL_PAIS_KM,
  );
}

export function rutaDeLugares(
  pais: string,
  plato: string,
  celda: Celda,
): string {
  const busqueda = new URLSearchParams({
    pais,
    plato,
    celda: claveDeCelda(celda),
  });

  return `/api/que-comer/lugares?${busqueda}`;
}
