import type { CatalogoDeComida } from "@/content/comidas/types";

import { celdaDe, celdaDelPais, claveDeCelda } from "./celdas";
import { coincide } from "./coincide";
import type { LugarDeComida } from "./lugares";
import { ETIQUETAS, type ElementoCrudo, lugarDelElemento } from "./osm";

/**
 * Los lugares de cada plato, sacados del extracto diario de OpenStreetMap de
 * un país (spec, 18.10).
 *
 * El proceso diario (herramientas/lugares) baja el extracto, se queda con los
 * lugares de comida (filtroDeOsmium) y los exporta a GeoJSON, una línea por
 * lugar. Acá cada línea se vuelve el mismo elemento que daría Overpass
 * (elementoDeLaLinea), y cada elemento, las filas de la base: una por cada
 * plato que lo busca (filasDelElemento). La regla es la misma que la de la
 * consulta a Overpass (coincide.ts), y el lugar sale de la misma función
 * (lugarDelElemento): con datos propios, el mapa muestra lo mismo.
 */

/** Las expresiones de `osmium tags-filter` que dejan solo los lugares de comida. */
export function filtroDeOsmium(): string[] {
  const porClave = new Map<string, Set<string>>();

  for (const reglas of Object.values(ETIQUETAS)) {
    for (const [clave, valores] of reglas) {
      const delaClave = porClave.get(clave) ?? new Set<string>();
      for (const valor of valores) delaClave.add(valor);
      porClave.set(clave, delaClave);
    }
  }

  return [...porClave].map(
    ([clave, valores]) => `nwr/${clave}=${[...valores].join(",")}`,
  );
}

/**
 * El centro de la caja que encierra una geometría GeoJSON: lo mismo que da
 * Overpass con `out center` para un edificio o un área.
 */
function centroDe(coordenadas: unknown): { lat: number; lon: number } | null {
  let sur = Infinity;
  let norte = -Infinity;
  let oeste = Infinity;
  let este = -Infinity;

  const recorrer = (valor: unknown): void => {
    if (!Array.isArray(valor)) return;

    const [lon, lat] = valor;

    if (typeof lon === "number" && typeof lat === "number") {
      sur = Math.min(sur, lat);
      norte = Math.max(norte, lat);
      oeste = Math.min(oeste, lon);
      este = Math.max(este, lon);
      return;
    }

    for (const parte of valor) recorrer(parte);
  };

  recorrer(coordenadas);

  if (!Number.isFinite(sur) || !Number.isFinite(oeste)) return null;

  return { lat: (sur + norte) / 2, lon: (oeste + este) / 2 };
}

/**
 * Una línea de `osmium export -f geojsonseq -a type,id,timestamp`, como
 * elemento de Overpass; null si no se puede leer.
 *
 * Cada línea empieza con un separador (RFC 8142), y la fecha de la última
 * edición viene en segundos: Overpass la da en ISO.
 */
export function elementoDeLaLinea(linea: string): ElementoCrudo | null {
  const texto = linea.replace(/^\u001e/, "").trim();
  if (!texto) return null;

  let feature: unknown;

  try {
    feature = JSON.parse(texto);
  } catch {
    return null;
  }

  const { geometry, properties } = (feature ?? {}) as {
    geometry?: { coordinates?: unknown } | null;
    properties?: Record<string, unknown> | null;
  };

  if (!properties) return null;

  const centro = centroDe(geometry?.coordinates);
  if (!centro) return null;

  const tipo = properties["@type"];
  const editado = properties["@timestamp"];
  const tags: Record<string, string> = {};

  for (const [clave, valor] of Object.entries(properties)) {
    if (!clave.startsWith("@") && typeof valor === "string") {
      tags[clave] = valor;
    }
  }

  return {
    type: tipo,
    id: properties["@id"],
    ...(tipo === "node" ? centro : { center: centro }),
    tags,
    timestamp:
      typeof editado === "number" && Number.isFinite(editado)
        ? new Date(editado * 1000).toISOString()
        : undefined,
  };
}

/** Un lugar para un plato, como fila de la base. */
export interface FilaDeLugar {
  plato: string;
  /** "node/123": con el plato, identifica la fila. */
  osm: string;
  /** La celda de la grilla del mapa donde cae el lugar ("356_1397"). */
  celda: string;
  lugar: LugarDeComida;
}

/**
 * Las filas de un elemento: una por cada plato del catálogo que lo busca.
 * Nada si no es un lugar de comida abierto, o si cae en una celda que el mapa
 * del país nunca va a pedir (celdaDelPais).
 *
 * `delPais` guarda qué celdas son del país, para no medir las mismas
 * distancias cien mil veces.
 */
export function filasDelElemento(
  elemento: ElementoCrudo,
  catalogo: CatalogoDeComida,
  hoy: Date,
  delPais: Map<string, boolean> = new Map(),
): FilaDeLugar[] {
  const lugar = lugarDelElemento(elemento, hoy);
  if (!lugar) return [];

  const celda = celdaDe(lugar.lat, lugar.lon);
  const clave = claveDeCelda(celda);

  if (!delPais.has(clave)) {
    delPais.set(clave, celdaDelPais(celda, catalogo.ciudades));
  }

  if (!delPais.get(clave)) return [];

  const etiquetas: Record<string, string> = {};

  for (const [nombre, valor] of Object.entries(elemento.tags ?? {})) {
    if (typeof valor === "string") etiquetas[nombre] = valor;
  }

  return catalogo.platos.flatMap((plato) =>
    plato.buscar && coincide(plato.buscar, etiquetas)
      ? [{ plato: plato.id, osm: lugar.id, celda: clave, lugar }]
      : [],
  );
}

/**
 * Las filas de todo el extracto, línea por línea. El mismo elemento puede
 * venir dos veces —un edificio, como línea y como área— y cuenta una sola.
 */
export async function* filasDelExtracto(
  lineas: AsyncIterable<string> | Iterable<string>,
  catalogo: CatalogoDeComida,
  hoy: Date,
): AsyncGenerator<FilaDeLugar> {
  const vistos = new Set<string>();
  const delPais = new Map<string, boolean>();

  for await (const linea of lineas) {
    const elemento = elementoDeLaLinea(linea);
    if (!elemento) continue;

    const id = `${String(elemento.type)}/${String(elemento.id)}`;
    if (vistos.has(id)) continue;
    vistos.add(id);

    yield* filasDelElemento(elemento, catalogo, hoy, delPais);
  }
}
