import "server-only";

import { IDIOMA_POR_DEFECTO, type Idioma, type PorIdioma } from "./idiomas";

/**
 * El idioma de la página que se está armando, para los Server Components.
 *
 * Hoy es siempre español. En la fase 3 sale de la ruta (`/es/...`) con
 * `next/root-params`, que se lee desde cualquier Server Component sin pasarlo
 * de mano en mano. Esa lectura es asíncrona, y por eso esta función ya lo es:
 * así, cuando llegue, no hay que tocar cada componente que la usa.
 */
export async function idiomaActual(): Promise<Idioma> {
  return IDIOMA_POR_DEFECTO;
}

/** Los textos de un diccionario en el idioma de la página. */
export async function textos<T>(diccionario: PorIdioma<T>): Promise<T> {
  return diccionario[await idiomaActual()];
}
