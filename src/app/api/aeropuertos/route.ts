import type { NextRequest } from "next/server";

import { resumir } from "@/lib/vuelos/aeropuertos";
import { buscarAeropuertos } from "@/lib/vuelos/buscar";

/**
 * La búsqueda de aeropuertos del selector "Salgo desde" (spec, 17.3).
 *
 * `GET /api/aeropuertos?q=bue` → `{ "aeropuertos": [...] }`, con lo justo para
 * mostrarlos (AeropuertoResumido, en src/lib/vuelos/tipos.ts). La llama el
 * buscador mientras se escribe. Sin JavaScript no hace falta: el formulario va
 * a `/vuelos?buscar=` y la página busca sola.
 *
 * La respuesta depende solo de la URL, así que se guarda en la CDN de Vercel:
 * un día fresca, y una semana más mientras se renueva por detrás. La lista de
 * aeropuertos cambia con un deploy, nunca en el medio, y en Vercel cada deploy
 * arranca con la caché vacía. Al navegador le dura una hora: quien borra y
 * vuelve a escribir no repite el pedido.
 *
 * Es pública, como la página, y no lee cookies ni nada de quien la llama. Lo
 * que llega en `q` lo recorta y lo limpia buscarAeropuertos.
 */

const CACHE =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

export function GET(request: NextRequest): Response {
  const aeropuertos = buscarAeropuertos(
    request.nextUrl.searchParams.get("q"),
  ).map((aeropuerto) => resumir(aeropuerto));

  return Response.json(
    { aeropuertos },
    { headers: { "Cache-Control": CACHE } },
  );
}
