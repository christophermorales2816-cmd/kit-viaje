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
 * lejos de eso.
 *
 * CÓMO SE PRESENTA
 *
 * FOSSGIS, que opera overpass-api.de, pide un user-agent que identifique a la
 * aplicación: el que trae cada biblioteca no alcanza. En 2026, además, contesta
 * 406 a lo que parece un script anónimo, y lo que se reporta como señal es un
 * user-agent de biblioteca, un Accept que solo admite application/json o el
 * Accept-Language "*" que Node manda solo. El sitio mandaba ese Accept, y en
 * noviembre de 2026 todos sus pedidos volvían con 406. Por eso va un Accept
 * amplio, como el de un navegador, el idioma del sitio, el nombre con versión
 * y la dirección de la página, y la página como Referer (encabezadosParaOverpass).
 * Nunca el user-agent de otro programa: eso termina en un bloqueo.
 *
 * SI OVERPASS FRENA
 *
 * Con un 429 —demasiados pedidos— o un 504 —no da abasto—, nadie le pregunta
 * nada durante SEGUNDOS_DE_PAUSA. Con un 403 o un 406 —rechazó al sitio—,
 * durante SEGUNDOS_DE_PAUSA_POR_RECHAZO, y queda en el log: insistir con
 * pedidos rechazados es lo que hace que bloqueen la IP. La API, mientras
 * tanto, contesta 503 con Retry-After, y el mapa espera ese rato antes de
 * volver a pedir. La pausa vive en la memoria de cada instancia del servidor:
 * no es exacta, pero cada instancia pregunta una sola vez por pausa.
 */

const API = "https://overpass-api.de/api/interpreter";

/** La consulta tiene 20 segundos en Overpass; se espera un poco más por la red. */
export const ESPERA_MAXIMA_MS = 25_000;

/** Doce horas: lo que abre hoy aparece hoy o mañana a la mañana. */
export const SEGUNDOS_EN_CACHE = 43_200;

/** Lo que se deja de preguntar cuando Overpass pide pausa (429) o no da abasto (504). */
export const SEGUNDOS_DE_PAUSA = 60;

/**
 * Lo que se deja de preguntar cuando Overpass rechaza al sitio (403, 406).
 * Eso no se arregla esperando: alguien tiene que mirarlo (docs/administrar.md).
 */
export const SEGUNDOS_DE_PAUSA_POR_RECHAZO = 900;

/** Las respuestas con las que Overpass rechaza al sitio. */
const RECHAZOS = new Set([403, 406]);

/** Las respuestas con las que Overpass pide pausa o avisa que no da abasto. */
const SATURACIONES = new Set([429, 504]);

/**
 * Una falla de Overpass. `esperaS` es lo que falta para volver a preguntar,
 * cuando Overpass frenó al sitio; si es null, se puede volver a probar ya.
 */
export class FallaDeOverpass extends Error {
  constructor(
    mensaje: string,
    readonly esperaS: number | null = null,
  ) {
    super(mensaje);
    this.name = "FallaDeOverpass";
  }
}

/** Cómo se presenta el sitio ante Overpass (CÓMO SE PRESENTA, arriba). */
export function encabezadosParaOverpass(
  sitio: string | null = urlDelSitio(),
): Record<string, string> {
  const pagina = sitio ? `${sitio}/que-comer` : null;

  return {
    accept: "*/*",
    "accept-language": "es",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": pagina ? `kit-viaje/1.0 (+${pagina})` : "kit-viaje/1.0",
    ...(pagina ? { referer: pagina } : {}),
  };
}

/** Hasta cuándo nadie le pregunta nada a Overpass, y por qué. */
let pausa: { hasta: number; motivo: string } | null = null;

/** Para los tests: cada uno arranca sin pausa. */
export function olvidarLaPausa(): void {
  pausa = null;
}

/**
 * Le manda una consulta a Overpass y devuelve lo que contestó, ya leído.
 * Durante una pausa no pregunta nada. Tira FallaDeOverpass si no se puede.
 */
export async function pedirAOverpass(
  consulta: string,
  esperaMaximaMs: number,
): Promise<unknown> {
  const antes = Date.now();

  if (pausa && pausa.hasta > antes) {
    throw new FallaDeOverpass(
      pausa.motivo,
      Math.ceil((pausa.hasta - antes) / 1000),
    );
  }

  let respuesta: Response;

  try {
    respuesta = await fetch(API, {
      method: "POST",
      headers: encabezadosParaOverpass(),
      body: new URLSearchParams({ data: consulta }),
      // La caché es la de unstable_cache, sobre el resultado ya leído.
      cache: "no-store",
      signal: AbortSignal.timeout(esperaMaximaMs),
    });
  } catch (error) {
    throw new FallaDeOverpass(
      error instanceof Error
        ? `No se pudo contactar a Overpass: ${error.message}`
        : "No se pudo contactar a Overpass.",
    );
  }

  if (!respuesta.ok) {
    // El cuerpo no se usa: se descarta, y la conexión queda libre.
    await respuesta.body?.cancel().catch(() => {});

    const motivo = `Overpass respondió ${respuesta.status}.`;
    const rechazo = RECHAZOS.has(respuesta.status);

    if (!rechazo && !SATURACIONES.has(respuesta.status)) {
      throw new FallaDeOverpass(motivo);
    }

    const segundos = rechazo
      ? SEGUNDOS_DE_PAUSA_POR_RECHAZO
      : SEGUNDOS_DE_PAUSA;

    if (rechazo) {
      console.error(
        `${motivo} Rechazó al sitio: no se le pregunta nada por ${segundos / 60} minutos. Qué hacer: docs/administrar.md, "El mapa de un plato no muestra lugares".`,
      );
    }

    const hasta = Date.now() + segundos * 1000;
    // Una pausa corta no acorta una larga.
    if (!pausa || pausa.hasta < hasta) pausa = { hasta, motivo };

    throw new FallaDeOverpass(motivo, segundos);
  }

  try {
    return await respuesta.json();
  } catch {
    throw new FallaDeOverpass("Overpass contestó algo que no se puede leer.");
  }
}

/** Le pregunta a Overpass por una celda, sin caché. Tira FallaDeOverpass si no se puede. */
export async function consultarCelda(
  busqueda: BusquedaEnElMapa,
  celda: Celda,
): Promise<LugaresDeLaCelda> {
  const datos = await pedirAOverpass(
    consultaDeOverpass(busqueda, limitesDeCelda(celda)),
    ESPERA_MAXIMA_MS,
  );

  const ahora = new Date();
  const leido = lugaresDeLaRespuesta(datos, ahora);

  if (!leido) {
    throw new FallaDeOverpass("Overpass contestó algo que no se puede leer.");
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

/**
 * Lo que trajo una celda. Si falló, `esperaS` dice cuánto falta para volver a
 * preguntar, cuando Overpass frenó al sitio; null si se puede probar ya.
 */
export type ResultadoDeLugares =
  | { ok: true; datos: LugaresDeLaCelda }
  | { ok: false; motivo: string; esperaS: number | null };

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
    return {
      ok: false,
      motivo: error instanceof Error ? error.message : "Falla desconocida.",
      esperaS: error instanceof FallaDeOverpass ? error.esperaS : null,
    };
  }
}
