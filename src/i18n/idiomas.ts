/**
 * Los idiomas del sitio (spec, sección 21).
 *
 * Por ahora, solo español. La fase 1 saca los textos del código a diccionarios
 * sin cambiar lo que se ve; cuando entre el inglés, se suma acá y TypeScript
 * marca cada diccionario al que todavía le falta.
 */
export const IDIOMAS = ["es"] as const;

export type Idioma = (typeof IDIOMAS)[number];

/** El idioma de una página que no dice cuál es el suyo. */
export const IDIOMA_POR_DEFECTO: Idioma = "es";

/**
 * Un diccionario en cada idioma del sitio. El español define la forma, y cada
 * traducción tiene que tener las mismas claves, con los mismos parámetros en
 * los textos que son funciones.
 */
export type PorIdioma<T> = Readonly<Record<Idioma, T>>;
