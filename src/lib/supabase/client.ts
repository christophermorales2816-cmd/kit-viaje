import { createClient } from "@supabase/supabase-js";

import { readPublicSupabaseEnv } from "./env";

/**
 * Cliente con la anon key.
 *
 * Sirve para las tablas de referencia, que tienen lectura pública (migración
 * 20260826120200). Contra las tablas de sesión no puede hacer nada: quedaron
 * con RLS habilitada, sin políticas y sin privilegios para anon. Eso es a
 * propósito, no una omisión — ver el encabezado de esa migración.
 */
export function createPublicClient() {
  const { url, anonKey } = readPublicSupabaseEnv();

  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
