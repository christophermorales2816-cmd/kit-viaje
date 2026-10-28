import "server-only";

import { unstable_cache } from "next/cache";

import type { Mencion } from "@/content/comidas/types";
import { urlDelSitio } from "@/lib/sitio/url";

import { ETIQUETAS, cerrado } from "./osm";

/**
 * Las menciones de honor que siguen abiertas (spec, 18.5).
 *
 * Una mención es un lugar elegido a mano, y lo elegido a mano es lo que más
 * rápido queda viejo: nadie vuelve a mirar si el puesto de la esquina sigue
 * ahí. Por eso cada una va atada a su ficha de OpenStreetMap, y una vez por día
 * se pregunta por todas juntas, en un solo pedido. La que ya no está, o está
 * marcada como cerrada, deja de mostrarse sola; el catálogo la sigue teniendo
 * hasta que un PR la saque, y el test lo recuerda.
 *
 * Si Overpass no contesta, se muestran todas: se verificaron al cargarlas, y
 * esconderlas por una falla de la red sería peor que un día de atraso.
 */

const API = "https://overpass-api.de/api/interpreter";

const ESPERA_MAXIMA_MS = 10_000;

/** Un día. */
export const SEGUNDOS_EN_CACHE = 86_400;

const OSM = /^(node|way|relation)\/([1-9]\d*)$/;

/** La consulta por ids ("node/1", "way/3"): "node(id:1);way(id:3);". */
export function consultaDeMenciones(ids: readonly string[]): string {
  const porTipo = new Map<string, string[]>();

  for (const id of ids) {
    const partes = OSM.exec(id);
    if (!partes) continue;

    porTipo.set(partes[1], [...(porTipo.get(partes[1]) ?? []), partes[2]]);
  }

  const sentencias = [...porTipo]
    .map(([tipo, ids]) => `${tipo}(id:${ids.join(",")});`)
    .join("");

  return `[out:json][timeout:20];(${sentencias});out tags;`;
}

/** Si un elemento de OpenStreetMap sigue siendo un lugar de comida abierto. */
function sigueAbierto(etiquetas: Record<string, string>, hoy: Date): boolean {
  const esDeComida = Object.values(ETIQUETAS).some((reglas) =>
    reglas.some(([clave, valores]) => valores.includes(etiquetas[clave])),
  );

  return esDeComida && !cerrado(etiquetas, hoy);
}

/** Los ids ("node/123") de las que siguen abiertas en una respuesta de Overpass. */
export function abiertasDeLaRespuesta(
  datos: unknown,
  hoy: Date,
): Set<string> | null {
  const elementos = (datos as { elements?: unknown } | null)?.elements;
  if (!Array.isArray(elementos)) return null;

  const abiertas = new Set<string>();

  for (const elemento of elementos as {
    type?: unknown;
    id?: unknown;
    tags?: Record<string, unknown>;
  }[]) {
    const etiquetas: Record<string, string> = {};

    for (const [clave, valor] of Object.entries(elemento.tags ?? {})) {
      if (typeof valor === "string") etiquetas[clave] = valor;
    }

    if (sigueAbierto(etiquetas, hoy)) {
      abiertas.add(`${String(elemento.type)}/${String(elemento.id)}`);
    }
  }

  return abiertas;
}

async function consultar(ids: string[]): Promise<string[]> {
  const sitio = urlDelSitio();
  const respuesta = await fetch(API, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": sitio ? `kit-viaje (+${sitio}/que-comer)` : "kit-viaje",
    },
    body: new URLSearchParams({ data: consultaDeMenciones(ids) }),
    cache: "no-store",
    signal: AbortSignal.timeout(ESPERA_MAXIMA_MS),
  });

  if (!respuesta.ok) throw new Error(`Overpass respondió ${respuesta.status}.`);

  const abiertas = abiertasDeLaRespuesta(await respuesta.json(), new Date());
  if (!abiertas)
    throw new Error("Overpass contestó algo que no se puede leer.");

  // Un array y no un Set: la caché guarda JSON.
  return [...abiertas];
}

const enCache = unstable_cache(consultar, ["comidas-menciones", "v1"], {
  revalidate: SEGUNDOS_EN_CACHE,
  tags: ["comidas-menciones"],
});

/**
 * Las menciones que hay que mostrar: las abiertas según OpenStreetMap, o todas
 * si no se pudo preguntar.
 */
export async function mencionesVigentes(
  menciones: readonly Mencion[],
): Promise<Mencion[]> {
  if (menciones.length === 0) return [];

  // Ordenados: la misma lista es la misma clave de caché.
  const ids = [...new Set(menciones.map((mencion) => mencion.osm))].sort();

  try {
    const abiertas = new Set(await enCache(ids));

    return menciones.filter((mencion) => abiertas.has(mencion.osm));
  } catch (error) {
    console.error("mencionesVigentes", error);

    return [...menciones];
  }
}
