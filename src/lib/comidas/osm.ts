import type { BusquedaEnElMapa, TipoDeLugarOsm } from "@/content/comidas/types";

import type { Limites } from "./celdas";
import type { LugarDeComida } from "./lugares";

/**
 * Lo que se le pregunta a OpenStreetMap y cómo se lee lo que contesta
 * (spec, 18.4). Sin red: el pedido está en overpass.ts.
 *
 * QUÉ SE PIDE
 *
 * Los lugares de una celda que coinciden con la búsqueda del plato
 * (`BusquedaEnElMapa`): los del tipo pedido —restaurantes, panaderías— que
 * tienen la cocina o la palabra en el nombre. La búsqueda sale del contenido
 * del repo, nunca del navegador: la API no deja preguntarle a OpenStreetMap
 * cualquier cosa en nuestro nombre.
 *
 * QUÉ NO SE MUESTRA
 *
 * Lo que OpenStreetMap ya marca como cerrado. La forma más común es cambiarle
 * la etiqueta ("disused:amenity=restaurant"), y esos lugares ya no entran en la
 * búsqueda. Las otras se descartan acá (`cerrado`).
 */

/** Las etiquetas de OpenStreetMap de cada tipo de lugar: [clave, valores]. */
export const ETIQUETAS: Record<TipoDeLugarOsm, [string, string[]][]> = {
  comida: [["amenity", ["restaurant", "fast_food", "food_court"]]],
  cafe: [["amenity", ["cafe"]]],
  bar: [["amenity", ["bar", "pub", "biergarten"]]],
  heladeria: [
    ["amenity", ["ice_cream"]],
    ["shop", ["ice_cream"]],
  ],
  panaderia: [["shop", ["bakery"]]],
  dulceria: [["shop", ["pastry", "confectionery", "chocolate"]]],
  mercado: [["amenity", ["marketplace"]]],
  almacen: [["shop", ["convenience"]]],
  bebidas: [["shop", ["alcohol", "wine", "beverages"]]],
};

/**
 * Cuántos lugares se traen por celda, como mucho.
 *
 * Una celda del centro de Tokio puede tener cientos de lugares de ramen: mil
 * alcanzan para cualquier plato que no sea "cualquier konbini", y esos no
 * tienen mapa (`sinMapa`). Si hay más, la respuesta lo dice (`recortado`).
 */
export const MAXIMO_POR_CELDA = 1000;

/** Lo que se le da a Overpass para resolver una celda, en segundos. */
export const TIEMPO_DE_LA_CONSULTA_S = 20;

/** Valores de `cuisine`: minúsculas, números y guion bajo, como los escribe OpenStreetMap. */
export const COCINA_VALIDA = /^[a-z0-9_]+$/;

/**
 * Palabras de un nombre: letras de cualquier alfabeto, números, espacios,
 * apóstrofos y guiones. Nada que una expresión regular lea como un operador,
 * así no hay que escapar nada al armar la consulta.
 */
export const PALABRA_VALIDA = /^[\p{L}\p{M}\p{N} '’-]+$/u;

/** La consulta de Overpass para una búsqueda en una celda. */
export function consultaDeOverpass(
  busqueda: BusquedaEnElMapa,
  limites: Limites,
): string {
  const cocinas = busqueda.cocinas ?? [];
  const nombres = busqueda.nombres ?? [];

  if (
    !cocinas.every((cocina) => COCINA_VALIDA.test(cocina)) ||
    !nombres.every((nombre) => PALABRA_VALIDA.test(nombre))
  ) {
    // El test de contenido no deja llegar hasta acá; si llega, mejor romper
    // que armar una consulta con algo que no se revisó.
    throw new Error("La búsqueda del plato tiene valores que no son válidos.");
  }

  const condiciones: string[] = [];

  if (cocinas.length > 0) {
    // `cuisine` puede tener varias, separadas por punto y coma: "ramen;japanese".
    condiciones.push(`["cuisine"~"(^|;) *(${cocinas.join("|")}) *(;|$)"]`);
  }

  if (nombres.length > 0) {
    condiciones.push(`["name"~"${nombres.join("|")}",i]`);
  }

  const sentencias: string[] = [];

  for (const tipo of busqueda.en ?? ["comida"]) {
    for (const [clave, valores] of ETIQUETAS[tipo]) {
      const delTipo = `nwr["${clave}"~"^(${valores.join("|")})$"]`;

      if (condiciones.length === 0) {
        sentencias.push(`${delTipo};`);
      } else {
        for (const condicion of condiciones) {
          sentencias.push(`${delTipo}${condicion};`);
        }
      }
    }
  }

  const bbox = [limites.sur, limites.oeste, limites.norte, limites.este]
    .map((grado) => grado.toFixed(1))
    .join(",");

  // `center` da un punto también para los edificios; `meta`, la fecha de la
  // última edición; `qt`, el orden más rápido de sacar. Se pide uno más del
  // máximo para saber si había más.
  return (
    `[out:json][timeout:${TIEMPO_DE_LA_CONSULTA_S}][bbox:${bbox}];` +
    `(${sentencias.join("")});` +
    `out center meta qt ${MAXIMO_POR_CELDA + 1};`
  );
}

interface ElementoCrudo {
  type?: unknown;
  id?: unknown;
  lat?: unknown;
  lon?: unknown;
  center?: { lat?: unknown; lon?: unknown };
  tags?: Record<string, unknown>;
  timestamp?: unknown;
}

type Etiquetas = Record<string, string>;

function etiquetasDe(crudo: ElementoCrudo): Etiquetas {
  const etiquetas: Etiquetas = {};

  for (const [clave, valor] of Object.entries(crudo.tags ?? {})) {
    if (typeof valor === "string") etiquetas[clave] = valor;
  }

  return etiquetas;
}

const ESTADOS_DE_CERRADO = new Set([
  "closed",
  "closed_permanently",
  "permanently_closed",
  "vacant",
  "disused",
  "abandoned",
]);

/**
 * Si OpenStreetMap ya dice que cerró, aunque siga etiquetado como restaurante:
 * con `disused=yes`, con un horario que dice "closed", con una fecha de cierre
 * pasada o con "(cerrado)" en el nombre.
 */
export function cerrado(etiquetas: Etiquetas, hoy: Date): boolean {
  if (etiquetas.disused === "yes" || etiquetas.abandoned === "yes") return true;

  if (/^(closed|off)$/i.test(etiquetas.opening_hours?.trim() ?? ""))
    return true;

  for (const clave of ["operational_status", "status"]) {
    if (ESTADOS_DE_CERRADO.has(etiquetas[clave]?.trim().toLowerCase() ?? "")) {
      return true;
    }
  }

  const fin = etiquetas.end_date?.trim();
  if (
    fin &&
    /^\d{4}(-\d{2}){0,2}$/.test(fin) &&
    fin <= hoy.toISOString().slice(0, 10)
  ) {
    return true;
  }

  return /\((cerrado|closed|閉店)\)|閉店しました/i.test(etiquetas.name ?? "");
}

function tipoDe(etiquetas: Etiquetas): TipoDeLugarOsm | null {
  for (const [tipo, reglas] of Object.entries(ETIQUETAS) as [
    TipoDeLugarOsm,
    [string, string[]][],
  ][]) {
    if (reglas.some(([clave, valores]) => valores.includes(etiquetas[clave]))) {
      return tipo;
    }
  }

  return null;
}

/** El nombre en alfabeto latino, para un lugar de Tokio o de Seúl. */
const NOMBRES_LATINOS = [
  "name:es",
  "name:en",
  "name:ja-Latn",
  "name:ja_rm",
  "name:zh-Latn-pinyin",
  "name:ko-Latn",
  "int_name",
];

function nombreLatino(etiquetas: Etiquetas): string | null {
  for (const clave of NOMBRES_LATINOS) {
    const nombre = etiquetas[clave]?.trim();

    if (nombre && nombre !== etiquetas.name?.trim()) return nombre;
  }

  return null;
}

function direccion(etiquetas: Etiquetas): string | null {
  const completa = etiquetas["addr:full"]?.trim();
  if (completa) return completa;

  const calle = etiquetas["addr:street"]?.trim();
  if (!calle) return null;

  const numero = etiquetas["addr:housenumber"]?.trim();

  return numero ? `${calle} ${numero}` : calle;
}

/**
 * La web del lugar, solo si es http o https.
 *
 * Viene de lo que cargó cualquiera en OpenStreetMap y termina en un `href`: un
 * "javascript:" ahí sería un script en nuestra página.
 */
export function webSegura(crudo: string | undefined): string | null {
  const web = crudo?.split(";")[0]?.trim();
  if (!web || web.length > 300) return null;

  const conEsquema = /^[a-z][a-z0-9+.-]*:/i.test(web) ? web : `https://${web}`;

  try {
    const url = new URL(conEsquema);

    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function telefono(etiquetas: Etiquetas): string | null {
  const crudo = (etiquetas.phone ?? etiquetas["contact:phone"])?.split(";")[0];
  const limpio = crudo?.replace(/[^\d+()\- ]/g, "").trim();

  return limpio && /\d{6}/.test(limpio.replace(/\D/g, ""))
    ? limpio.slice(0, 40)
    : null;
}

function verificado(etiquetas: Etiquetas): string | null {
  for (const clave of [
    "check_date",
    "check_date:opening_hours",
    "survey:date",
  ]) {
    const fecha = etiquetas[clave]?.trim();

    if (fecha && /^\d{4}-\d{2}(-\d{2})?$/.test(fecha)) return fecha;
  }

  return null;
}

function numero(valor: unknown): number | null {
  return typeof valor === "number" && Number.isFinite(valor) ? valor : null;
}

function lugarDe(crudo: ElementoCrudo, hoy: Date): LugarDeComida | null {
  const tipoOsm = crudo.type;
  const id = numero(crudo.id);

  if (
    (tipoOsm !== "node" && tipoOsm !== "way" && tipoOsm !== "relation") ||
    id === null
  ) {
    return null;
  }

  const lat = numero(crudo.lat) ?? numero(crudo.center?.lat);
  const lon = numero(crudo.lon) ?? numero(crudo.center?.lon);

  if (lat === null || lon === null) return null;

  const etiquetas = etiquetasDe(crudo);
  const tipo = tipoDe(etiquetas);

  if (!tipo || cerrado(etiquetas, hoy)) return null;

  const editado =
    typeof crudo.timestamp === "string" &&
    /^\d{4}-\d{2}-\d{2}/.test(crudo.timestamp)
      ? crudo.timestamp.slice(0, 10)
      : null;

  return {
    id: `${tipoOsm}/${id}`,
    nombre: etiquetas.name?.trim() || null,
    nombreLatino: nombreLatino(etiquetas),
    // Cinco decimales son un metro: más es ruido que viaja.
    lat: Math.round(lat * 1e5) / 1e5,
    lon: Math.round(lon * 1e5) / 1e5,
    tipo,
    direccion: direccion(etiquetas),
    horario: etiquetas.opening_hours?.trim() || null,
    web: webSegura(
      etiquetas.website ?? etiquetas["contact:website"] ?? etiquetas.url,
    ),
    telefono: telefono(etiquetas),
    verificado: verificado(etiquetas),
    editado,
  };
}

/**
 * Los lugares de una respuesta de Overpass, o null si la respuesta no sirve.
 *
 * Overpass a veces contesta 200 con un error adentro (`remark`: "runtime
 * error: Query timed out"), y lo que trae entonces está incompleto: se trata
 * como una falla, no como "no hay lugares".
 */
export function lugaresDeLaRespuesta(
  datos: unknown,
  hoy: Date,
): { lugares: LugarDeComida[]; recortado: boolean } | null {
  if (typeof datos !== "object" || datos === null) return null;

  const { elements, remark } = datos as {
    elements?: unknown;
    remark?: unknown;
  };

  if (!Array.isArray(elements)) return null;
  if (typeof remark === "string" && /error/i.test(remark)) return null;

  const lugares = elements
    .slice(0, MAXIMO_POR_CELDA)
    .map((crudo) => lugarDe(crudo as ElementoCrudo, hoy))
    .filter((lugar): lugar is LugarDeComida => lugar !== null);

  return { lugares, recortado: elements.length > MAXIMO_POR_CELDA };
}
