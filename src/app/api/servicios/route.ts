import type { NextRequest } from "next/server";

import { getGuide } from "@/content/guias";
import { celdaDeClave } from "@/lib/comidas/celdas";
import { traerServicios } from "@/lib/servicios/overpass";
import {
  type RespuestaDeServicios,
  VIGENCIA_DE_SERVICIOS_S,
  celdaCercaDeLaGuia,
} from "@/lib/servicios/servicios";

/**
 * Los servicios para viajeros de una celda del mapa de la guía (spec, 26).
 *
 * `GET /api/servicios?guia=argentina&celda=-549_-684` → RespuestaDeServicios
 * (src/lib/servicios/servicios.ts).
 *
 * Solo acepta una celda de la grilla cerca de algún destino de esa guía: la
 * API no le pregunta a OpenStreetMap por cualquier punto del planeta en
 * nombre de quien arme la URL.
 *
 * Como con los lugares de cada plato (src/app/api/que-comer/lugares), lo que
 * pasó la vigencia sale igual, sin caché y diciendo que se está renovando; y
 * si Overpass frenó al sitio, un 503 con Retry-After que la CDN guarda ese
 * rato.
 */

/** Un día en la CDN, y una semana más mientras la renueva. */
const CACHE =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800";

function error(status: number, mensaje: string): Response {
  return Response.json(
    { error: mensaje },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function GET(request: NextRequest): Promise<Response> {
  const parametros = request.nextUrl.searchParams;
  const guia = getGuide(parametros.get("guia") ?? "");

  if (!guia) return error(404, "No existe esa guía.");

  const celda = celdaDeClave(parametros.get("celda"));

  if (!celda) {
    return error(400, "La celda tiene que ser de la grilla: ?celda=-549_-684.");
  }

  if (!celdaCercaDeLaGuia(celda, guia.places)) {
    return error(400, "Esa celda queda lejos de los destinos de la guía.");
  }

  const resultado = await traerServicios(celda);

  if (!resultado.ok && resultado.esperaS !== null) {
    return Response.json(
      { error: resultado.motivo },
      {
        status: 503,
        headers: {
          "Cache-Control": `public, max-age=0, s-maxage=${resultado.esperaS}`,
          "Retry-After": String(resultado.esperaS),
        },
      },
    );
  }

  if (!resultado.ok) return error(502, resultado.motivo);

  const edadS = (Date.now() - Date.parse(resultado.datos.actualizado)) / 1000;
  const respuesta: RespuestaDeServicios = {
    ...resultado.datos,
    // Más viejos que la vigencia, la caché de Next ya los está renovando.
    renovando: edadS >= VIGENCIA_DE_SERVICIOS_S,
  };

  return Response.json(respuesta, {
    headers: { "Cache-Control": respuesta.renovando ? "no-store" : CACHE },
  });
}
