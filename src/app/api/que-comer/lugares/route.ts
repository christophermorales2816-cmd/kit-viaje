import type { NextRequest } from "next/server";

import { getCatalogo } from "@/content/comidas";
import { celdaDeClave, celdaDelPais } from "@/lib/comidas/celdas";
import { VIGENCIA_S } from "@/lib/comidas/lugares";
import { SEGUNDOS_DE_PAUSA, traerLugares } from "@/lib/comidas/overpass";

/**
 * Dónde sirven un plato, en una celda del mapa (spec, 18.4).
 *
 * `GET /api/que-comer/lugares?pais=japon&plato=ramen&celda=356_1397` →
 * LugaresDeLaCelda (src/lib/comidas/lugares.ts).
 *
 * Solo acepta un plato del catálogo que tenga búsqueda, y una celda de la
 * grilla dentro del país: la búsqueda que llega a OpenStreetMap la decide el
 * contenido del repo, no quien arma la URL.
 *
 * LA REGLA DE LA FRESCURA
 *
 * Lo que se le pidió a OpenStreetMap hace menos de VIGENCIA_S se sirve con
 * caché en la CDN (CACHE). Lo más viejo —una celda que nadie miró en días—
 * sale igual, porque es mejor que nada, pero sin caché y con su fecha: la
 * caché de Next ya lo está renovando por detrás, y el mapa vuelve a pedirlo
 * en unos segundos (src/components/comer/mapa-de-lugares.tsx). Así, nadie ve
 * datos de más de un día sin que la página se lo diga.
 */

/** Diez minutos en la CDN, y una hora más mientras la renueva. */
const CACHE = "public, max-age=0, s-maxage=600, stale-while-revalidate=3600";

function error(status: number, mensaje: string): Response {
  return Response.json(
    { error: mensaje },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function GET(request: NextRequest): Promise<Response> {
  const parametros = request.nextUrl.searchParams;
  const catalogo = getCatalogo(parametros.get("pais") ?? "");
  const plato = catalogo?.platos.find(
    (candidato) => candidato.id === parametros.get("plato"),
  );

  if (!catalogo || !plato) {
    return error(404, "No existe ese plato en ese país.");
  }

  if (!plato.buscar) {
    return error(404, "Ese plato no tiene mapa de lugares.");
  }

  const celda = celdaDeClave(parametros.get("celda"));

  if (!celda) {
    return error(400, "La celda tiene que ser de la grilla: ?celda=356_1397.");
  }

  if (!celdaDelPais(celda, catalogo.ciudades)) {
    return error(400, "Esa celda queda fuera del país.");
  }

  const resultado = await traerLugares(plato.buscar, celda);

  if (!resultado.ok && resultado.saturado) {
    // Como en el radar: la CDN guarda el 503 ese rato, para que todos los que
    // miran la celda esperen juntos en vez de insistir cada uno por su lado.
    return Response.json(
      { error: resultado.motivo },
      {
        status: 503,
        headers: {
          "Cache-Control": `public, max-age=0, s-maxage=${SEGUNDOS_DE_PAUSA}`,
          "Retry-After": String(SEGUNDOS_DE_PAUSA),
        },
      },
    );
  }

  if (!resultado.ok) return error(502, resultado.motivo);

  const edadS = (Date.now() - Date.parse(resultado.datos.actualizado)) / 1000;

  return Response.json(resultado.datos, {
    headers: { "Cache-Control": edadS < VIGENCIA_S ? CACHE : "no-store" },
  });
}
