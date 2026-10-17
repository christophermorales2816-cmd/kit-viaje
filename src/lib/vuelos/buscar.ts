import "server-only";

import {
  AEROPUERTOS,
  ORDEN_POR_TIPO,
  nombreDePais,
  type Aeropuerto,
} from "./aeropuertos";
import { NOMBRES_EN_CASTELLANO } from "./nombres-en-castellano";

/**
 * La búsqueda del selector "Salgo desde" (spec, 17.3).
 *
 * Se busca por lo que la gente escribe: el código ("EZE"), la ciudad ("Buenos
 * Aires"), el nombre del aeropuerto ("Jorge Newbery") o el país
 * ("Argentina"), sin acentos ni mayúsculas y por el comienzo de cada palabra:
 * "bue" encuentra Buenos Aires, "aires" también, "ires" no.
 *
 * Los datos de OurAirports están en inglés o en el idioma de cada país, así que
 * "Londres" no encontraría "London". Para eso está NOMBRES_EN_CASTELLANO: las
 * ciudades que en castellano se llaman distinto, con sus aeropuertos.
 *
 * El orden de los resultados, de más a menos parecido a lo que se pidió:
 *
 *   0. El código IATA u OACI exacto.
 *   1. La ciudad, o su nombre en castellano.
 *   2. El país, escrito entero: quien busca "Argentina" quiere los aeropuertos
 *      del país antes que el de Ushuaia, que se llama "Malvinas Argentinas".
 *   3. El nombre del aeropuerto.
 *   4. Los nombres alternativos de OurAirports.
 *   5. El país, por el comienzo: "arg".
 *
 * Dentro de cada grupo van primero los aeropuertos grandes: quien busca
 * "Argentina" quiere Ezeiza antes que un aeródromo de la Patagonia. Entre los
 * del mismo tamaño, la ciudad que empieza con lo pedido va antes que la que lo
 * tiene en otra palabra —"london" pone London antes que East London—, y
 * después todo va por ciudad. Dentro de una ciudad de NOMBRES_EN_CASTELLANO,
 * en el orden en que los lista: Heathrow antes que Gatwick.
 */

export const RESULTADOS_POR_BUSQUEDA = 8;

/** Menos que esto no alcanza para buscar; más, no es una ciudad. */
const LARGO_MINIMO = 2;
export const LARGO_MAXIMO_DE_BUSQUEDA = 60;

/** El lugar de los que no están en NOMBRES_EN_CASTELLANO: después de todos. */
const SIN_LUGAR = Number.MAX_SAFE_INTEGER;

/**
 * Minúsculas, sin acentos ni apóstrofos, con un espacio entre palabras.
 *
 * Los apóstrofos se borran en vez de separar: "Nuku'alofa" queda
 * "nukualofa", que es como lo escribe cualquiera que no tenga el teclado de
 * Tonga.
 */
export function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['’`ʻ]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

interface Indexado {
  aeropuerto: Aeropuerto;
  iata: string;
  icao: string;
  // Lo que sigue va normalizado y con un espacio adelante, para que
  // " " + palabra encuentre también la primera palabra.
  /** La ciudad de OurAirports, si la tiene, y sus nombres en castellano. */
  ciudades: string[];
  nombre: string;
  claves: string;
  pais: string;
  /**
   * Su lugar en la lista de su ciudad en NOMBRES_EN_CASTELLANO: Heathrow es el
   * 0 de Londres y Gatwick, el 1.
   */
  lugar: number;
}

function construirIndice(): Indexado[] {
  const alias = new Map<string, string[]>();
  const lugar = new Map<string, number>();

  for (const [nombre, codigos] of Object.entries(NOMBRES_EN_CASTELLANO)) {
    codigos.forEach((codigo, posicion) => {
      alias.set(codigo, [...(alias.get(codigo) ?? []), nombre]);
      // Un aeropuerto que sirve a dos ciudades se queda con su mejor lugar.
      lugar.set(codigo, Math.min(posicion, lugar.get(codigo) ?? SIN_LUGAR));
    });
  }

  const conEspacio = (texto: string) => ` ${normalizar(texto)}`;

  return AEROPUERTOS.map((aeropuerto) => ({
    aeropuerto,
    iata: aeropuerto.iata,
    icao: aeropuerto.icao,
    ciudades: [aeropuerto.ciudad, ...(alias.get(aeropuerto.iata) ?? [])]
      .filter((ciudad) => ciudad !== "")
      .map(conEspacio),
    nombre: conEspacio(aeropuerto.nombre),
    claves: conEspacio(aeropuerto.claves),
    pais: conEspacio(nombreDePais(aeropuerto.pais)),
    lugar: lugar.get(aeropuerto.iata) ?? SIN_LUGAR,
  }));
}

let indice: Indexado[] | null = null;

interface Resultado {
  aeropuerto: Aeropuerto;
  /** Qué tan parecido es a lo pedido, del 0 al 5 (ver arriba). */
  grupo: number;
  /** La ciudad coincidió por otra palabra y no por la primera. */
  enOtraPalabra: boolean;
  /**
   * El nombre por el que se ordena: la ciudad que coincidió, si fue una
   * ciudad. Así "san" ordena por "san pablo" y no por "campinas", que es donde
   * queda Viracopos.
   */
  ciudad: string;
  lugar: number;
}

/** Cómo se parece el aeropuerto a lo pedido, o `null` si no se parece. */
function comparar(
  entrada: Indexado,
  consulta: string,
  codigo: string,
): Resultado | null {
  const palabra = ` ${consulta}`;
  const coincide = (texto: string) => texto.includes(palabra);
  const resultado = (
    grupo: number,
    ciudad = entrada.ciudades[0] ?? entrada.nombre,
    enOtraPalabra = false,
  ): Resultado => ({
    aeropuerto: entrada.aeropuerto,
    grupo,
    enOtraPalabra,
    ciudad,
    lugar: entrada.lugar,
  });

  if (codigo === entrada.iata || codigo === entrada.icao) return resultado(0);

  const alPrincipio = entrada.ciudades.find((nombre) =>
    nombre.startsWith(palabra),
  );
  const ciudad = alPrincipio ?? entrada.ciudades.find(coincide);

  if (ciudad !== undefined) {
    return resultado(1, ciudad, alPrincipio === undefined);
  }
  if (entrada.pais === palabra) return resultado(2);
  if (coincide(entrada.nombre)) return resultado(3);
  if (coincide(entrada.claves)) return resultado(4);
  if (coincide(entrada.pais)) return resultado(5);

  return null;
}

export function buscarAeropuertos(
  texto: unknown,
  limite: number = RESULTADOS_POR_BUSQUEDA,
): Aeropuerto[] {
  if (typeof texto !== "string") return [];

  const consulta = normalizar(texto.slice(0, LARGO_MAXIMO_DE_BUSQUEDA));

  if (consulta.length < LARGO_MINIMO) return [];

  const codigo = consulta.replace(/ /g, "").toUpperCase();

  indice ??= construirIndice();

  return indice
    .flatMap((entrada) => comparar(entrada, consulta, codigo) ?? [])
    .sort(
      (a, b) =>
        a.grupo - b.grupo ||
        ORDEN_POR_TIPO[a.aeropuerto.tipo] - ORDEN_POR_TIPO[b.aeropuerto.tipo] ||
        Number(a.enOtraPalabra) - Number(b.enOtraPalabra) ||
        a.ciudad.localeCompare(b.ciudad, "es") ||
        a.lugar - b.lugar ||
        a.aeropuerto.iata.localeCompare(b.aeropuerto.iata),
    )
    .slice(0, limite)
    .map(({ aeropuerto }) => aeropuerto);
}
