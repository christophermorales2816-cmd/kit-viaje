import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { requireEnv } from "./env";

/**
 * Cliente de lectura de los datos de referencia (spec, sección 3).
 *
 * Usa la anon key, que es pública por diseño: las cinco tablas de referencia
 * tienen una política de select con `using (true)` y los privilegios de
 * escritura revocados. No puede tocar las tablas de sesión — esas tienen RLS
 * habilitada y cero políticas.
 *
 * PEREZOSO A PROPÓSITO: crear el cliente al importar el módulo haría que
 * `next build` explote en cualquier entorno sin .env.local, incluso en rutas
 * que no leen nada de la base. Así el error aparece cuando alguien realmente
 * consulta, y dice qué variable falta.
 */
let client: SupabaseClient | null = null;

export function referenceClient(): SupabaseClient {
  client ??= createClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
    requireEnv(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    ),
    // Sin login no hay sesión que persistir ni token que refrescar.
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  return client;
}
