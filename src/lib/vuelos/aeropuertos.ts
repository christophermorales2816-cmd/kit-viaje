import "server-only";

import datos from "./aeropuertos.json";
import type { AeropuertoResumido, TipoDeAeropuerto } from "./tipos";

/**
 * Los aeropuertos del mundo con vuelos regulares (spec, 17.3).
 *
 * Salen de OurAirports, que los publica en dominio público, a través de
 * herramientas/aeropuertos/generar.py: unos cuatro mil, todos los que tienen
 * código IATA y vuelos que se pueden comprar. El JSON no se edita a mano; para
 * actualizarlo se vuelve a correr el generador (docs/datos.md).
 *
 * Es solo del servidor, y no por secreto: pesa casi medio mega. Un componente
 * de cliente que lo importara lo mandaría entero al navegador, así que
 * `server-only` hace fallar el build si pasa. Al navegador le llega lo que pide
 * —una búsqueda, los cercanos—, ya resumido.
 */

export interface Aeropuerto {
  iata: string;
  /** Vacío si OurAirports no tiene un código OACI de cuatro letras. */
  icao: string;
  nombre: string;
  /** La ciudad como la escribe OurAirports; puede venir vacía. */
  ciudad: string;
  /** Código de país ISO 3166-1 de dos letras. */
  pais: string;
  lat: number;
  lon: number;
  tipo: TipoDeAeropuerto;
  /** Nombres alternativos separados por coma, para la búsqueda. */
  claves: string;
}

type Fila = [
  string,
  string,
  string,
  string,
  string,
  number,
  number,
  TipoDeAeropuerto,
  string,
];

export const FUENTE_DE_AEROPUERTOS: string = datos.fuente;

/** El día en que se bajó la lista de OurAirports, "aaaa-mm-dd". */
export const AEROPUERTOS_DESCARGADOS: string = datos.descargado;

export const AEROPUERTOS: readonly Aeropuerto[] = (
  datos.aeropuertos as Fila[]
).map(([iata, icao, nombre, ciudad, pais, lat, lon, tipo, claves]) => ({
  iata,
  icao,
  nombre,
  ciudad,
  pais,
  lat,
  lon,
  tipo,
  claves,
}));

const POR_IATA = new Map(
  AEROPUERTOS.map((aeropuerto) => [aeropuerto.iata, aeropuerto]),
);

/**
 * De más a menos útil para salir de viaje: un aeropuerto grande vuela a casi
 * cualquier lado; un hidroaeropuerto, a uno o dos. Ordena la búsqueda y la
 * sugerencia por cercanía.
 */
export const ORDEN_POR_TIPO: Record<TipoDeAeropuerto, number> = {
  grande: 0,
  mediano: 1,
  chico: 2,
  hidroaeropuerto: 3,
};

/**
 * El aeropuerto de un código IATA, o `undefined`.
 *
 * Acepta cualquier cosa porque los códigos llegan de afuera —una cookie, un
 * formulario, una URL— y lo que no es un código conocido no es un error que
 * haya que explicar: simplemente no hay aeropuerto.
 */
export function aeropuertoPorIata(codigo: unknown): Aeropuerto | undefined {
  if (typeof codigo !== "string" || codigo.length > 8) return undefined;

  return POR_IATA.get(codigo.trim().toUpperCase());
}

/**
 * Los países que el sitio nombra distinto que el castellano de Intl.
 *
 * Intl trae los nombres del CLDR, que en unos pocos casos no son los que usan
 * las guías: "Rumanía" y no "Rumania", "Côte d’Ivoire" y no "Costa de Marfil",
 * "RAE de Hong Kong (China)" y no "Hong Kong". Gana el nombre de la guía, para
 * que un mismo país no aparezca escrito de dos maneras en el sitio.
 */
const NOMBRES_DE_LAS_GUIAS: Record<string, string> = {
  CG: "República del Congo",
  CI: "Costa de Marfil",
  HK: "Hong Kong",
  MM: "Myanmar",
  MO: "Macao",
  PS: "Palestina",
  RO: "Rumania",
  SA: "Arabia Saudita",
  TL: "Timor Oriental",
};

const PAISES = new Intl.DisplayNames(["es"], { type: "region" });

/** El nombre del país en castellano: "AR" → "Argentina". */
export function nombreDePais(codigo: string): string {
  return NOMBRES_DE_LAS_GUIAS[codigo] ?? PAISES.of(codigo) ?? codigo;
}

/** Lo que se le manda al navegador de un aeropuerto. */
export function resumir(
  aeropuerto: Aeropuerto,
  distanciaKm?: number,
): AeropuertoResumido {
  return {
    iata: aeropuerto.iata,
    nombre: aeropuerto.nombre,
    ciudad: aeropuerto.ciudad,
    pais: nombreDePais(aeropuerto.pais),
    tipo: aeropuerto.tipo,
    ...(distanciaKm === undefined ? {} : { distanciaKm }),
  };
}
