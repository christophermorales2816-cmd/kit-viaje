/**
 * Qué commit está corriendo.
 *
 * POR QUÉ ESTO EXISTE
 *
 * Tres veces en este proyecto un arreglo estaba en `main` y no en producción:
 * un PR apilado sobre una rama muerta, un commit pusheado después del merge, y
 * un log de error producido por código que ya no existía en el repo. Las tres
 * veces se perdió tiempo discutiendo si el problema era el código o el deploy,
 * cuando eso se contesta mirando un dato.
 *
 * Vercel expone el SHA del commit del build. Mostrarlo convierte "¿esto ya
 * está desplegado?" de una discusión en una comparación.
 *
 * En local no hay ninguna de estas variables, y eso también es informativo:
 * dice "dev", que es exactamente lo que está corriendo.
 */

const SHA =
  process.env.VERCEL_GIT_COMMIT_SHA ??
  process.env.NEXT_PUBLIC_COMMIT_SHA ??
  null;

/** Los 7 caracteres que usa git para abreviar, o "dev" fuera de Vercel. */
export const BUILD_ID = SHA ? SHA.slice(0, 7) : "dev";

/** URL del commit en GitHub, o null si no sabemos cuál es. */
export const BUILD_URL = SHA
  ? `https://github.com/christophermorales2816-cmd/kit-viaje/commit/${SHA}`
  : null;
