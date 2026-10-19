import type { NextRequest } from "next/server";

import {
  SEGUNDOS_DE_PAUSA,
  SEGUNDOS_EN_CACHE_DE_ZONA,
  traerZona,
} from "@/lib/vuelos/adsb";
import { centroDeConsulta } from "@/lib/vuelos/zona";

/**
 * Lo que vuela ahora en una zona del radar (spec, 17.5).
 *
 * `GET /api/vuelos/en-vivo?lat=-35&lon=-59` → ZonaEnVivo (src/lib/vuelos/tipos.ts).
 * Lo pide el radar cada 15 segundos. Solo acepta centros de la grilla, con la
 * forma exacta que arma src/lib/vuelos/zona.ts: cualquier otra URL sería una
 * forma de saltear la caché.
 *
 * La CDN de Vercel guarda cada zona SEGUNDOS_EN_CACHE_DE_ZONA y la sigue
 * sirviendo un rato más mientras la renueva, así que mil personas mirando la
 * misma zona son un pedido a adsb.lol, no mil. El navegador no guarda nada: el
 * radar quiere el dato de ahora.
 *
 * Un error de adsb.lol no se guarda: el próximo pedido vuelve a intentar. La
 * excepción es cuando adsb.lol pide esperar (429): la respuesta es un 503 con
 * `Retry-After`, y la CDN la guarda ese rato, para que todos los que miran la
 * zona esperen juntos en vez de insistir cada uno por su lado.
 */

const CACHE = `public, max-age=0, s-maxage=${SEGUNDOS_EN_CACHE_DE_ZONA}, stale-while-revalidate=${2 * SEGUNDOS_EN_CACHE_DE_ZONA}`;

export async function GET(request: NextRequest): Promise<Response> {
  const parametros = request.nextUrl.searchParams;
  const centro = centroDeConsulta(parametros.get("lat"), parametros.get("lon"));

  if (centro === null) {
    return Response.json(
      {
        error: "La zona tiene que ser un punto de la grilla: ?lat=-35&lon=-59.",
      },
      { status: 400 },
    );
  }

  const resultado = await traerZona(centro);

  if (!resultado.ok && resultado.saturado) {
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

  if (!resultado.ok) {
    return Response.json(
      { error: resultado.motivo },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }

  return Response.json(resultado.zona, {
    headers: { "Cache-Control": CACHE },
  });
}
