import "server-only";

import { unstable_cache } from "next/cache";

import type { BusquedaEnElMapa } from "@/content/comidas/types";
import { urlDelSitio } from "@/lib/sitio/url";

import { type Celda, claveDeCelda, limitesDeCelda } from "./celdas";
import type { LugaresDeLaCelda } from "./lugares";
import { consultaDeOverpass, lugaresDeLaRespuesta } from "./osm";

/**
 * Los lugares de OpenStreetMap, por Overpass (spec, 18.4).
 *
 * POR QUÉ OPENSTREETMAP
 *
 * Es gratis, admite uso comercial citando la fuente (ODbL, la misma licencia
 * que adsb.lol) y Overpass lo sirve al minuto: lo que alguien carga hoy, la
 * consulta lo ve hoy. Google sabe antes de los lugares nuevos, pero cobra por
 * consulta y no deja mostrar sus datos en otro mapa que el suyo. Scrapear
 * Google o TripAdvisor está prohibido por sus condiciones.
 *
 * CADA CUÁNTO SE PREGUNTA
 *
 * Cada celda y cada búsqueda se guardan SEGUNDOS_EN_CACHE —doce horas— en la
 * caché de Next, con la búsqueda en la clave: si un PR cambia cómo se busca un
 * plato, la caché vieja no se usa. Pasado ese tiempo, el primero que la mira
 * recibe lo guardado y dispara la actualización por detrás, y si Overpass falla
 * queda lo anterior: un mapa con datos de ayer es mejor que uno vacío, siempre
 * que diga de cuándo son. Eso lo decide la API (src/app/api/que-comer/lugares).
 *
 * Overpass pide no pasar de diez mil consultas por día. Con doce horas por
 * celda, solo las celdas que alguien mira y la CDN adelante, el sitio queda
 * lejos de eso; si Overpass igual pide esperar (429), la API contesta 503 con
 * Retry-After, como el radar con adsb.lol.
 */

const API = "https://overpass-api.de/api/interpreter";

/** La consulta tiene 20 segundos en Overpass; se espera un poco más por la red. */
export const ESPERA_MAXIMA_MS = 25_000;

/** Doce horas: lo que abre hoy aparece hoy o mañana a la mañana. */
export const SEGUNDOS_EN_CACHE = 43_200;

/** Lo que se espera cuando Overpass pide pausa. */
export const SEGUNDOS_DE_PAUSA = 60;

/** Una falla de Overpass: `saturado` si pidió esperar. */
export class FallaDeOverpass extends Error {
  constructor(
    mensaje: string,
    readonly saturado: boolean,
  ) {
    super(mensaje);
    this.name = "FallaDeOverpass";
  }
}

/** Como el radar con adsb.lol: con nombre y dirección, por si algo les molesta. */
function identificacion(): string {
  const sitio = urlDelSitio();

  return sitio ? `kit-viaje (+${sitio}/que-comer)` : "kit-viaje";
}

/** Le pregunta a Overpass, sin caché. Tira FallaDeOverpass si no se puede. */
export async function consultarCelda(
  busqueda: BusquedaEnElMapa,
  celda: Celda,
): Promise<LugaresDeLaCelda> {
  let respuesta: Response;

  try {
    respuesta = await fetch(API, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": identificacion(),
      },
      body: new URLSearchParams({
        data: consultaDeOverpass(busqueda, limitesDeCelda(celda)),
      }),
      // La caché es la de unstable_cache, sobre el resultado ya leído.
      cache: "no-store",
      signal: AbortSignal.timeout(ESPERA_MAXIMA_MS),
    });
  } catch (error) {
    throw new FallaDeOverpass(
      error instanceof Error
        ? `No se pudo contactar a Overpass: ${error.message}`
        : "No se pudo contactar a Overpass.",
      false,
    );
  }

  // 429: demasiados pedidos. 504: Overpass está tan cargado que no llegó.
  if (respuesta.status === 429 || respuesta.status === 504) {
    throw new FallaDeOverpass(`Overpass respondió ${respuesta.status}.`, true);
  }

  if (!respuesta.ok) {
    throw new FallaDeOverpass(`Overpass respondió ${respuesta.status}.`, false);
  }

  const ahora = new Date();
  const leido = lugaresDeLaRespuesta(await respuesta.json(), ahora);

  if (!leido) {
    throw new FallaDeOverpass(
      "Overpass contestó algo que no se puede leer.",
      false,
    );
  }

  return {
    celda: claveDeCelda(celda),
    actualizado: ahora.toISOString(),
    ...leido,
  };
}

const enCache = unstable_cache(
  (busqueda: BusquedaEnElMapa, celda: Celda) => consultarCelda(busqueda, celda),
  ["comidas-lugares", "v1"],
  { revalidate: SEGUNDOS_EN_CACHE, tags: ["comidas-lugares"] },
);

export type ResultadoDeLugares =
  | { ok: true; datos: LugaresDeLaCelda }
  | { ok: false; saturado: boolean; motivo: string };

/** Los lugares de una celda para una búsqueda, con la caché de doce horas. */
export async function traerLugares(
  busqueda: BusquedaEnElMapa,
  celda: Celda,
): Promise<ResultadoDeLugares> {
  try {
    return {
      ok: true,
      datos: await enCache(busqueda, celda),
    };
  } catch (error) {
    if (error instanceof FallaDeOverpass) {
      return { ok: false, saturado: error.saturado, motivo: error.message };
    }

    return {
      ok: false,
      saturado: false,
      motivo: error instanceof Error ? error.message : "Falla desconocida.",
    };
  }
}
