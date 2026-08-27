import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { requireEnv } from "./env";

/**
 * Cliente con service role key: el ÚNICO camino de escritura de la aplicación.
 *
 * Las tablas de sesión (trips, trip_packing_items, trip_budget_items) tienen
 * RLS habilitada y cero políticas, y los privilegios revocados para anon — ver
 * el comentario largo en 20260826120200_rls_policies.sql. En Postgres eso
 * significa denegar todo, así que nadie las toca salvo por acá.
 *
 * El `import "server-only"` no es decorativo: hace que el build FALLE si este
 * módulo entra en un bundle de cliente. Sin eso, un import por error en un
 * componente `"use client"` filtraría la clave que se salta toda la RLS.
 *
 * Quien llama sigue teniendo que validar el edit_token antes de escribir: este
 * cliente no lo hace por su cuenta, tiene permiso para todo.
 */
let client: SupabaseClient | null = null;

export function adminClient(): SupabaseClient {
  client ??= createClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
    requireEnv(
      "SUPABASE_SERVICE_ROLE_KEY",
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    ),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  return client;
}
