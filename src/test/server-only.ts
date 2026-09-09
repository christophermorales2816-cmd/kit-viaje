/**
 * Reemplazo de `server-only` para los tests.
 *
 * `server-only` tira apenas se importa fuera de un Server Component, y eso es
 * exactamente lo que se quiere en producción: hace que el build FALLE si
 * `admin.ts` —que tiene la service role key— entra por error en un bundle de
 * cliente.
 *
 * En Vitest esa protección no aplica: no hay bundle de cliente, y sin este
 * alias no se puede testear ni una línea de `create.ts`, `read.ts` o
 * `mutate.ts`. La guarda real la sigue haciendo cumplir el bundler de Next en
 * cada build, que es donde importa.
 */
export {};
