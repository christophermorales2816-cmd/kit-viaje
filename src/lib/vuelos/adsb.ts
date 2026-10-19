import "server-only";

import { urlDelSitio } from "@/lib/sitio/url";

import { resumir } from "./aeropuertos";
import { sugerirOrigen } from "./cercanos";
import type { AvionEnVuelo, CentroDeZona, ZonaEnVivo } from "./tipos";
import { RADIO_DE_ZONA_KM } from "./zona";

/**
 * Los aviones en el aire, de adsb.lol (spec, 17.2 y 17.5).
 *
 * adsb.lol junta lo que reciben las antenas de miles de voluntarios y lo
 * publica gratis con licencia ODbL, la de OpenStreetMap: se puede usar con
 * fines comerciales, citando la fuente. Su API pública da los aviones a menos
 * de 250 millas náuticas de un punto, y el total que ve en el mundo; la lista
 * global completa queda para quien le aporta datos con una antena.
 *
 * QUÉ SE MUESTRA
 *
 * Los aviones en vuelo con una posición de hace menos de POSICION_VIEJA_S. Los
 * que están en tierra no: el radar es de lo que vuela. Tampoco los que pidieron
 * no aparecer —la lista LADD de EE.UU. y las direcciones privadas PIA—, aunque
 * adsb.lol los publique: los sitios de seguimiento los ocultan, y este también.
 *
 * Todo pasa a las unidades del sitio: altitud en metros, velocidad en km/h.
 *
 * CACHÉ Y LÍMITE
 *
 * Cada zona se pide con `next.revalidate`, así que adsb.lol recibe un pedido
 * cada SEGUNDOS_EN_CACHE_DE_ZONA por zona, mire quien mire. El total del mundo
 * cambia despacio y se comparte entre todas las zonas.
 *
 * adsb.lol corta las ráfagas con un 429: en las pruebas, ocho pedidos en siete
 * segundos alcanzaron. Next no guarda en caché una respuesta que no sea 200, así
 * que una zona que ya tenía datos los sigue sirviendo, y el resultado avisa que
 * adsb.lol pidió esperar (`saturado`) para que el radar se frene.
 */

const API = "https://api.adsb.lol";

/** 463 km, en la unidad que entiende adsb.lol. */
const RADIO_MN = 250;

/** Lo que se espera a adsb.lol antes de darlo por caído, como con las cotizaciones. */
export const ESPERA_MAXIMA_MS = 5000;

/** Lo mismo que tarda el radar en volver a pedir: 15 segundos. */
export const SEGUNDOS_EN_CACHE_DE_ZONA = 15;
export const SEGUNDOS_EN_CACHE_DEL_TOTAL = 60;

/** Lo que se espera cuando adsb.lol pide pausa. */
export const SEGUNDOS_DE_PAUSA = 60;

/** Una posición más vieja que esto ya no dice dónde está el avión. */
export const POSICION_VIEJA_S = 60;

/** Las marcas de adsb.lol (`dbFlags`) de los aviones que pidieron no aparecer. */
const LADD = 8;
const PIA = 4;

const METROS_POR_PIE = 0.3048;
const KMH_POR_NUDO = 1.852;

// Lo que se acepta de cada campo de texto. Lo que no tiene esta forma no se
// muestra: viene de transpondedores, no de una base revisada.
const HEX = /^~?[0-9a-f]{6}$/;
const VUELO = /^[A-Z0-9]{2,8}$/;
const MODELO = /^[A-Z0-9]{2,4}$/;
const MATRICULA = /^[A-Z0-9-]{2,10}$/;

/** Por qué no hay datos, y si adsb.lol pidió que se espere (429). */
type Falla = { ok: false; motivo: string; saturado: boolean };

export type ResultadoDeZona = { ok: true; zona: ZonaEnVivo } | Falla;

type Respuesta = { ok: true; datos: unknown } | Falla;

function esNumero(valor: unknown): valor is number {
  return typeof valor === "number" && Number.isFinite(valor);
}

function texto(valor: unknown, forma: RegExp): string | null {
  if (typeof valor !== "string") return null;

  const limpio = valor.trim().toUpperCase();

  return forma.test(limpio) ? limpio : null;
}

/**
 * Un avión de la respuesta de adsb.lol, o `null` si no va en el radar.
 *
 * Los nombres de los campos son los de readsb, el programa de las antenas:
 * `alt_baro` en pies o "ground", `gs` en nudos, `track` en grados.
 */
function avion(crudo: unknown): AvionEnVuelo | null {
  if (typeof crudo !== "object" || crudo === null) return null;

  const a = crudo as Record<string, unknown>;
  const hex = typeof a.hex === "string" ? a.hex.toLowerCase() : "";

  if (!HEX.test(hex)) return null;
  if (!esNumero(a.lat) || Math.abs(a.lat) > 90) return null;
  if (!esNumero(a.lon) || Math.abs(a.lon) > 180) return null;
  // "ground" es un avión en tierra; sin altitud, no se sabe si vuela.
  if (!esNumero(a.alt_baro)) return null;
  if (esNumero(a.seen_pos) && a.seen_pos > POSICION_VIEJA_S) return null;
  if (esNumero(a.dbFlags) && (a.dbFlags & (LADD | PIA)) !== 0) return null;

  const rumbo = [a.track, a.true_heading, a.mag_heading].find(esNumero);

  return {
    hex,
    vuelo: texto(a.flight, VUELO),
    modelo: texto(a.t, MODELO),
    matricula: texto(a.r, MATRICULA),
    lat: Math.round(a.lat * 1e4) / 1e4,
    lon: Math.round(a.lon * 1e4) / 1e4,
    rumbo: rumbo === undefined ? null : Math.round(rumbo) % 360,
    altitudM: Math.round((a.alt_baro * METROS_POR_PIE) / 10) * 10,
    velocidadKmH: esNumero(a.gs) ? Math.round(a.gs * KMH_POR_NUDO) : null,
  };
}

/**
 * Los aviones de una respuesta de `/v2/point`, ya filtrados.
 *
 * `null` si la respuesta no tiene la forma esperada: no es "cero aviones",
 * es que adsb.lol cambió algo, y la página lo tiene que decir.
 */
export function avionesDeLaRespuesta(datos: unknown): AvionEnVuelo[] | null {
  if (typeof datos !== "object" || datos === null) return null;

  const { ac } = datos as { ac?: unknown };

  if (!Array.isArray(ac)) return null;

  return ac.flatMap((crudo) => avion(crudo) ?? []);
}

/** El total de aviones que ve adsb.lol, de una respuesta de `/0/me`. */
export function totalGlobalDeLaRespuesta(datos: unknown): number | null {
  if (typeof datos !== "object" || datos === null) return null;

  const total = (datos as { global?: { aircraft?: unknown } }).global?.aircraft;

  return esNumero(total) && total >= 0 ? Math.round(total) : null;
}

/** Cuándo armó adsb.lol la respuesta (`now`, en milisegundos), o ahora. */
function momento(datos: unknown): string {
  const ahora = (datos as { now?: unknown } | null)?.now;

  return new Date(esNumero(ahora) ? ahora : Date.now()).toISOString();
}

/**
 * Se presenta con nombre y dirección: adsb.lol pide que le avisen quién lo usa
 * en producción, y así sabe a quién escribirle si algo le molesta.
 */
function identificacion(): string {
  const sitio = urlDelSitio();

  return sitio ? `kit-viaje (+${sitio}/vuelos)` : "kit-viaje";
}

async function pedir(
  ruta: string,
  segundosEnCache: number,
): Promise<Respuesta> {
  try {
    const respuesta = await fetch(`${API}${ruta}`, {
      headers: { accept: "application/json", "user-agent": identificacion() },
      next: { revalidate: segundosEnCache },
      signal: AbortSignal.timeout(ESPERA_MAXIMA_MS),
    });

    if (!respuesta.ok) {
      return {
        ok: false,
        motivo: `adsb.lol respondió ${respuesta.status}.`,
        saturado: respuesta.status === 429,
      };
    }

    return { ok: true, datos: await respuesta.json() };
  } catch (error) {
    return {
      ok: false,
      motivo:
        error instanceof Error
          ? `No se pudo contactar a adsb.lol: ${error.message}`
          : "No se pudo contactar a adsb.lol.",
      saturado: false,
    };
  }
}

/**
 * El aeropuerto que le da nombre a una zona: el que se sugeriría a alguien
 * parado en su centro, si queda adentro. En medio del océano no hay ninguno.
 */
function referencia(centro: CentroDeZona): ZonaEnVivo["referencia"] {
  const { sugerido } = sugerirOrigen(centro.lat, centro.lon);

  return sugerido.distanciaKm <= RADIO_DE_ZONA_KM
    ? resumir(sugerido.aeropuerto)
    : null;
}

/**
 * Lo que vuela ahora en una zona, y el total del mundo.
 *
 * Si falla el total, la zona igual sirve: el contador dice que no está. Si
 * falla la zona, no hay radar, y el resultado lo dice para que la página
 * muestre un aviso en vez de un mapa vacío que parezca un cielo sin aviones.
 */
export async function traerZona(
  centro: CentroDeZona,
): Promise<ResultadoDeZona> {
  const [zona, total] = await Promise.all([
    pedir(
      `/v2/point/${centro.lat}/${centro.lon}/${RADIO_MN}`,
      SEGUNDOS_EN_CACHE_DE_ZONA,
    ),
    pedir("/0/me", SEGUNDOS_EN_CACHE_DEL_TOTAL),
  ]);

  if (!zona.ok) return zona;

  const aviones = avionesDeLaRespuesta(zona.datos);

  if (aviones === null) {
    return {
      ok: false,
      motivo: "adsb.lol respondió algo que no se entiende.",
      saturado: false,
    };
  }

  return {
    ok: true,
    zona: {
      centro,
      radioKm: RADIO_DE_ZONA_KM,
      referencia: referencia(centro),
      actualizado: momento(zona.datos),
      totalGlobal: total.ok ? totalGlobalDeLaRespuesta(total.datos) : null,
      aviones,
    },
  };
}
