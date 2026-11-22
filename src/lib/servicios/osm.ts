import type { Limites } from "@/lib/comidas/celdas";
import {
  type ElementoCrudo,
  type Etiquetas,
  cerrado,
  datosDelServidor,
  direccion,
  etiquetasDe,
  nombreLatino,
  telefono,
  webSegura,
} from "@/lib/comidas/osm";

import type { ServicioCercano, TipoDeServicio } from "./servicios";

/**
 * Qué servicios se le piden a OpenStreetMap y cómo se lee lo que contesta
 * (spec, 26). Sin red: el pedido está en overpass.ts.
 *
 * La consulta es siempre la misma, salvo la celda: la arma el repo, nunca el
 * navegador. Lo que ya se usa para leer los lugares de comida —el teléfono,
 * la web, si cerró— se lee igual acá (src/lib/comidas/osm.ts).
 */

/**
 * Las etiquetas de OpenStreetMap de cada tipo: cada regla es una lista de
 * condiciones [clave, valores] que se tienen que cumplir juntas.
 *
 * - Información: la oficina de turismo y el centro de visitantes de un parque,
 *   no cada cartel (`information=board`) ni cada mapa al costado del camino. Y
 *   la estación de guardaparques, que en un parque es donde se pregunta.
 * - Salud: hospitales, clínicas y consultorios.
 * - Policía, y los puestos de rescate de montaña.
 * - Dinero: cajeros, bancos y casas de cambio.
 * - Refugios de montaña, con o sin guardián. No `amenity=shelter`, que en
 *   OpenStreetMap es también cada parada de colectivo con techo.
 */
const REGLAS: Record<TipoDeServicio, [string, string[]][][]> = {
  informacion: [
    [
      ["tourism", ["information"]],
      ["information", ["office", "visitor_centre"]],
    ],
    [["amenity", ["ranger_station"]]],
  ],
  salud: [[["amenity", ["hospital", "clinic", "doctors"]]]],
  farmacia: [[["amenity", ["pharmacy"]]]],
  policia: [[["amenity", ["police"]]], [["emergency", ["mountain_rescue"]]]],
  combustible: [[["amenity", ["fuel"]]]],
  dinero: [[["amenity", ["atm", "bank", "bureau_de_change"]]]],
  refugio: [[["tourism", ["alpine_hut", "wilderness_hut"]]]],
};

/**
 * Cuántos servicios de cada tipo se traen por celda, como mucho.
 *
 * Lejos de las ciudades hay unos pocos; en el centro de una capital puede
 * haber cientos de farmacias y de cajeros. El tope va por tipo, en una salida
 * aparte de la consulta: así, los cajeros de una ciudad no dejan afuera a su
 * hospital. Si de algún tipo había más, la respuesta lo dice (`recortado`).
 */
export const MAXIMO_POR_TIPO = 150;

/** Lo que se le da a Overpass para resolver una celda, en segundos. */
export const TIEMPO_DE_LA_CONSULTA_S = 20;

function condicion([clave, valores]: [string, string[]]): string {
  return valores.length === 1
    ? `["${clave}"="${valores[0]}"]`
    : `["${clave}"~"^(${valores.join("|")})$"]`;
}

/** La consulta de Overpass con los servicios de una celda. */
export function consultaDeServicios(limites: Limites): string {
  const bbox = [limites.sur, limites.oeste, limites.norte, limites.este]
    .map((grado) => grado.toFixed(1))
    .join(",");

  // Una salida por tipo, cada una con su tope (MAXIMO_POR_TIPO, arriba). Se
  // pide uno más del tope para saber si había más. `center` da un punto
  // también para los edificios, y `tags` deja afuera quién editó y cuándo.
  const salidas = Object.values(REGLAS).map((reglas) => {
    const sentencias = reglas.map(
      (regla) => `nwr${regla.map(condicion).join("")};`,
    );
    const conjunto =
      sentencias.length === 1 ? sentencias[0] : `(${sentencias.join("")});`;

    return `${conjunto}out center tags qt ${MAXIMO_POR_TIPO + 1};`;
  });

  return (
    `[out:json][timeout:${TIEMPO_DE_LA_CONSULTA_S}][bbox:${bbox}];` +
    salidas.join("")
  );
}

/** El tipo de un elemento según sus etiquetas, en el orden de la leyenda. */
export function tipoDeServicio(etiquetas: Etiquetas): TipoDeServicio | null {
  for (const [tipo, reglas] of Object.entries(REGLAS) as [
    TipoDeServicio,
    [string, string[]][][],
  ][]) {
    if (
      reglas.some((regla) =>
        regla.every(([clave, valores]) => valores.includes(etiquetas[clave])),
      )
    ) {
      return tipo;
    }
  }

  return null;
}

/** Lo que no es para cualquiera: el surtidor de una empresa, el cajero de un cuartel. */
const SIN_ACCESO = new Set(["private", "no", "customers", "delivery"]);

function numero(valor: unknown): number | null {
  return typeof valor === "number" && Number.isFinite(valor) ? valor : null;
}

/**
 * Un elemento de OpenStreetMap como servicio del mapa; null si no es uno de
 * los servicios que se buscan, si cerró o si no es para el público.
 */
export function servicioDelElemento(
  crudo: ElementoCrudo,
  hoy: Date,
): ServicioCercano | null {
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
  const tipo = tipoDeServicio(etiquetas);

  if (!tipo || cerrado(etiquetas, hoy)) return null;
  if (SIN_ACCESO.has(etiquetas.access?.trim().toLowerCase() ?? "")) {
    return null;
  }

  return {
    id: `${tipoOsm}/${id}`,
    tipo,
    nombre: etiquetas.name?.trim() || null,
    nombreLatino: nombreLatino(etiquetas),
    // Cinco decimales son un metro: más es ruido que viaja.
    lat: Math.round(lat * 1e5) / 1e5,
    lon: Math.round(lon * 1e5) / 1e5,
    telefono: telefono(etiquetas),
    horario: etiquetas.opening_hours?.trim() || null,
    web: webSegura(
      etiquetas.website ?? etiquetas["contact:website"] ?? etiquetas.url,
    ),
    direccion: direccion(etiquetas),
  };
}

/**
 * Los servicios de una respuesta de Overpass, o null si la respuesta no sirve.
 *
 * Como con los lugares de comida, un 200 con un error adentro (`remark`) es
 * una falla, no "no hay servicios". Un elemento que cumple las reglas de dos
 * tipos sale en las dos salidas: queda una vez.
 */
export function serviciosDeLaRespuesta(
  datos: unknown,
  hoy: Date,
): {
  servicios: ServicioCercano[];
  recortado: boolean;
  datosDel: string | null;
} | null {
  if (typeof datos !== "object" || datos === null) return null;

  const { elements, remark } = datos as {
    elements?: unknown;
    remark?: unknown;
  };

  if (!Array.isArray(elements)) return null;
  if (typeof remark === "string" && /error/i.test(remark)) return null;

  const vistos = new Set<string>();
  const porTipo = new Map<TipoDeServicio, number>();
  const servicios: ServicioCercano[] = [];
  let recortado = false;

  for (const crudo of elements as unknown[]) {
    if (typeof crudo !== "object" || crudo === null) continue;

    const elemento = crudo as ElementoCrudo;
    const clave = `${String(elemento.type)}/${String(elemento.id)}`;

    if (vistos.has(clave)) continue;
    vistos.add(clave);

    // Se cuentan antes de descartar los cerrados: el tope lo aplicó Overpass
    // sobre todo lo que tenía, y lo que dice si había más es esa cuenta.
    const tipo = tipoDeServicio(etiquetasDe(elemento));
    if (!tipo) continue;

    const cantidad = (porTipo.get(tipo) ?? 0) + 1;
    porTipo.set(tipo, cantidad);

    // El de más que se pidió para saber si había más no se muestra.
    if (cantidad > MAXIMO_POR_TIPO) {
      recortado = true;
      continue;
    }

    const servicio = servicioDelElemento(elemento, hoy);
    if (servicio) servicios.push(servicio);
  }

  return { servicios, recortado, datosDel: datosDelServidor(datos) };
}
