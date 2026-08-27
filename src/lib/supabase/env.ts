/**
 * Lectura y validación de las variables de entorno de Supabase.
 *
 * Las NEXT_PUBLIC_ se leen como literales `process.env.NEXT_PUBLIC_X` y no con
 * acceso dinámico `process.env[nombre]`: Next reemplaza estáticamente la forma
 * literal al compilar, y la dinámica no. Con acceso dinámico funcionaría en el
 * servidor y devolvería undefined en el browser, que es el peor de los dos
 * mundos porque el bug aparece tarde.
 */

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(
      `Falta la variable de entorno ${name}. Copiá .env.example a .env.local y completala.`,
    );
  }
  return value;
}

export interface PublicSupabaseEnv {
  url: string;
  anonKey: string;
}

export function readPublicSupabaseEnv(): PublicSupabaseEnv {
  return {
    url: required(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL"),
    anonKey: required(
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    ),
  };
}

/**
 * Solo del lado del servidor. La service role key bypassea RLS: si termina en
 * un bundle del browser, cualquiera puede escribir en cualquier viaje.
 */
export function readServiceRoleKey(): string {
  return required(
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    "SUPABASE_SERVICE_ROLE_KEY",
  );
}
