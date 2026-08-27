/**
 * Lectura de variables de entorno con un error que dice qué falta.
 *
 * El valor se pasa como argumento en vez de leerse acá con `process.env[name]`:
 * Next reemplaza las `NEXT_PUBLIC_*` en tiempo de build solo cuando aparecen
 * escritas literalmente como `process.env.NEXT_PUBLIC_ALGO`. Con un acceso por
 * índice dinámico ese reemplazo no ocurre y la variable llega vacía a cualquier
 * bundle de cliente.
 */
export function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Falta la variable de entorno ${name}. Copiá .env.example a .env.local y completala.`,
    );
  }

  return value;
}
