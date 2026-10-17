/**
 * Dónde está, más o menos, quien abre la página (spec, 17.3).
 *
 * Vercel agrega a cada request la ubicación aproximada de la IP de origen
 * (https://vercel.com/docs/headers/request-headers): latitud, longitud, ciudad
 * y país. No hace falta pedirle permiso al navegador —la política del sitio lo
 * tiene bloqueado (`geolocation=()`, src/lib/seguridad/headers.ts)— ni guardar
 * nada: se usa para sugerir un aeropuerto y se descarta con la respuesta.
 *
 * Es aproximada a propósito. Con una VPN o desde un celular puede caer en otra
 * ciudad, y por eso la página siempre deja buscar otra.
 *
 * En Vercel estos encabezados los pone la plataforma y un cliente no puede
 * falsificarlos. Fuera de Vercel —en local, en CI— no existen, o los podría
 * mandar cualquiera; en el peor caso alguien se sugiere a sí mismo un
 * aeropuerto equivocado. Igual se validan: un número fuera de rango o una
 * ciudad rara no llegan a la página.
 */

export interface UbicacionAproximada {
  lat: number;
  lon: number;
  /** La ciudad que informa Vercel, si la informa. */
  ciudad: string | null;
  /** Código de país ISO 3166-1, si lo informa. */
  pais: string | null;
}

/** Lo único que se usa de los headers: alcanza con `get`. */
interface Encabezados {
  get(nombre: string): string | null;
}

const LARGO_MAXIMO_DE_CIUDAD = 80;

function numero(texto: string | null, limite: number): number | null {
  if (texto === null || texto.trim() === "") return null;

  const valor = Number(texto);

  return Number.isFinite(valor) && Math.abs(valor) <= limite ? valor : null;
}

/** Vercel manda la ciudad codificada para URL: "S%C3%A3o%20Paulo". */
function ciudad(texto: string | null): string | null {
  if (!texto) return null;

  let decodificada: string;

  try {
    decodificada = decodeURIComponent(texto);
  } catch {
    return null;
  }

  const limpia = decodificada.replace(/\s+/g, " ").trim();

  if (limpia === "" || limpia.length > LARGO_MAXIMO_DE_CIUDAD) return null;
  // Letras de cualquier idioma, espacios y la puntuación de un nombre de
  // ciudad. Cualquier otra cosa no es una ciudad y no se muestra.
  return /^[\p{L}\p{M} .,'’()-]+$/u.test(limpia) ? limpia : null;
}

export function ubicacionAproximada(
  encabezados: Encabezados,
): UbicacionAproximada | null {
  const lat = numero(encabezados.get("x-vercel-ip-latitude"), 90);
  const lon = numero(encabezados.get("x-vercel-ip-longitude"), 180);

  if (lat === null || lon === null) return null;
  // El "punto nulo", frente a África: lo que devuelven algunas bases de
  // geolocalización cuando no saben. Nadie toma un avión desde ahí.
  if (lat === 0 && lon === 0) return null;

  const pais = encabezados.get("x-vercel-ip-country");

  return {
    lat,
    lon,
    ciudad: ciudad(encabezados.get("x-vercel-ip-city")),
    pais: pais && /^[A-Z]{2}$/.test(pais) ? pais : null,
  };
}
