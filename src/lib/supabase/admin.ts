import "server-only";

import { createClient } from "@supabase/supabase-js";

import { readPublicSupabaseEnv, readServiceRoleKey } from "./env";

/**
 * Cliente con la service role key. Bypassea RLS.
 *
 * Es el único camino de escritura a trips, trip_packing_items y
 * trip_budget_items, y solo lo pueden usar las Server Actions, que validan el
 * edit_token antes de tocar nada.
 *
 * El `import "server-only"` de arriba no es decorativo: si algún día alguien
 * importa este módulo desde un Client Component, el build de Next falla en vez
 * de mandar la service role key al browser.
 */
export function createAdminClient() {
  const { url } = readPublicSupabaseEnv();

  return createClient(url, readServiceRoleKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
