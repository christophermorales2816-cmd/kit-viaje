import "server-only";

import { unstable_cache } from "next/cache";

import { BUILD_ID } from "@/lib/version";

import * as referencia from "./reference";

/**
 * Las lecturas de referencia, con caché entre requests.
 *
 * POR QUÉ
 *
 * La página de condiciones y el planificador leen `?ciudad=` de la URL, y eso
 * las vuelve dinámicas: el `revalidate = 3600` que declaran no cachea nada.
 * Cada visita eran tres o cuatro consultas a Supabase para datos que solo
 * cambian con una migración. Con esto, la primera visita de la hora consulta y
 * las demás leen de la caché de Next: menos latencia, y un pico de tráfico —o
 * alguien recargando a propósito— ya no se traduce en consultas a la base.
 *
 * CUÁNTO PUEDE QUEDAR VIEJO UN DATO
 *
 * Como mucho una hora, y solo dentro del mismo deploy: el id del build va en
 * la clave, así que cada deploy arranca con la caché vacía. Una migración que
 * cambia un precio se ve en la próxima hora o en el próximo deploy, lo que
 * llegue primero; una ciudad o un país nuevos se ven enseguida, porque su
 * clave no existía.
 *
 * Las tablas de sesión (los viajes) NO pasan por acá: se leen siempre frescas,
 * en src/lib/trips.
 *
 * Los errores no se cachean: si Supabase falla, la próxima request reintenta.
 */

const UNA_HORA = 3600;

function cachear<Args extends unknown[], R>(
  nombre: string,
  lectura: (...args: Args) => Promise<R>,
): (...args: Args) => Promise<R> {
  return unstable_cache(lectura, ["referencia", BUILD_ID, nombre], {
    revalidate: UNA_HORA,
    tags: ["referencia"],
  });
}

export const getDestination = cachear(
  "destino-base",
  referencia.getDestination,
);

export const getDestinationsByCorridor = cachear(
  "destinos-del-corredor",
  referencia.getDestinationsByCorridor,
);

export const getDestinationById = cachear(
  "destino-por-id",
  referencia.getDestinationById,
);

export const getClimateProfiles = cachear(
  "perfiles-de-clima",
  referencia.getClimateProfiles,
);

export const getClimateThresholds = cachear(
  "umbrales-de-clima",
  referencia.getClimateThresholds,
);

export const getPackingCatalog = cachear(
  "catalogo-de-equipaje",
  referencia.getPackingCatalog,
);

export const getProducts = cachear("productos", referencia.getProducts);

export { pickDestination } from "./reference";
export type { Destination } from "./reference";
