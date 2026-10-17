import "server-only";

import { aeropuertoPorIata, type Aeropuerto } from "./aeropuertos";

/**
 * El aeropuerto del que sale cada uno (spec, 17.3).
 *
 * Se guarda en una cookie, y es la única que pone el sitio: la analítica no usa
 * ninguna (ver el pie en src/app/layout.tsx). La pone solo quien elige un
 * aeropuerto, con un botón, y la saca el botón "Olvidar". No identifica a
 * nadie: guarda tres letras, "EZE".
 *
 * Por qué cookie y no localStorage: el servidor tiene que saber de dónde salís
 * para armar la página —más adelante, las rutas y los precios desde ahí— sin un
 * segundo viaje al navegador. No es `httpOnly` a propósito: las páginas
 * estáticas, como las guías, la van a leer desde el navegador para mostrar
 * "Cómo llegar desde tu ciudad", y lo que guarda no es un secreto.
 *
 * Lo que viene en la cookie se valida en cada lectura: un código que no está en
 * la lista no es un origen, es basura, y se ignora.
 */

export const COOKIE_DE_ORIGEN = "origen";

/** Un año: la ciudad de la que alguien sale no cambia todas las semanas. */
export const DURACION_DE_LA_COOKIE_S = 60 * 60 * 24 * 365;

export function opcionesDeLaCookie(
  entorno: string | undefined = process.env.NODE_ENV,
) {
  return {
    path: "/",
    maxAge: DURACION_DE_LA_COOKIE_S,
    sameSite: "lax" as const,
    // En desarrollo el sitio corre por http y una cookie `secure` no se
    // guardaría. En el resto, siempre https.
    secure: entorno !== "development",
    httpOnly: false,
  };
}

/** El aeropuerto guardado en la cookie, si es uno que existe. */
export function origenGuardado(
  valor: string | undefined,
): Aeropuerto | undefined {
  return aeropuertoPorIata(valor);
}
