import "server-only";

import { unstable_cache } from "next/cache";

import { type Celda, claveDeCelda, limitesDeCelda } from "@/lib/comidas/celdas";
import {
  ESPERA_MAXIMA_MS,
  FallaDeOverpass,
  pedirAOverpass,
} from "@/lib/comidas/overpass";

import { consultaDeServicios, serviciosDeLaRespuesta } from "./osm";
import { type ServiciosDeLaCelda, VIGENCIA_DE_SERVICIOS_S } from "./servicios";

/**
 * Los servicios de una celda, por Overpass (spec, 26).
 *
 * El pedido es el mismo de los lugares de comida (src/lib/comidas/overpass.ts),
 * con el mismo servidor, el mismo turno —A_LA_VEZ pedidos juntos por
 * instancia, sumando los dos mapas— y la misma pausa cuando Overpass frena al
 * sitio. Lo que cambia es la caché: una semana por celda, porque un hospital
 * no abre ni cierra de un día para otro, y porque a un servidor ajeno se le
 * pregunta lo menos posible.
 */

const enCache = unstable_cache(
  (celda: Celda) => consultarServicios(celda),
  ["servicios-cerca", "v1"],
  { revalidate: VIGENCIA_DE_SERVICIOS_S, tags: ["servicios-cerca"] },
);

/** Le pregunta a Overpass por una celda, sin caché. Tira FallaDeOverpass si no se puede. */
export async function consultarServicios(
  celda: Celda,
): Promise<ServiciosDeLaCelda> {
  const datos = await pedirAOverpass(
    consultaDeServicios(limitesDeCelda(celda)),
    ESPERA_MAXIMA_MS,
  );

  const ahora = new Date();
  const leido = serviciosDeLaRespuesta(datos, ahora);

  if (!leido) {
    throw new FallaDeOverpass("Overpass contestó algo que no se puede leer.");
  }

  return {
    celda: claveDeCelda(celda),
    actualizado: ahora.toISOString(),
    ...leido,
  };
}

/**
 * Lo que trajo una celda. Si falló, `esperaS` dice cuánto falta para volver a
 * preguntar, cuando Overpass frenó al sitio; null si se puede probar ya.
 */
export type ResultadoDeServicios =
  | { ok: true; datos: ServiciosDeLaCelda }
  | { ok: false; motivo: string; esperaS: number | null };

/** Los servicios de una celda, con la caché de una semana. */
export async function traerServicios(
  celda: Celda,
): Promise<ResultadoDeServicios> {
  try {
    return { ok: true, datos: await enCache(celda) };
  } catch (error) {
    return {
      ok: false,
      motivo: error instanceof Error ? error.message : "Falla desconocida.",
      esperaS: error instanceof FallaDeOverpass ? error.esperaS : null,
    };
  }
}
