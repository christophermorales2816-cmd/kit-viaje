-- Row Level Security (spec, sección 3).
--
-- Dos grupos con reglas distintas:
--
--   Referencia → lectura pública, sin escritura desde el cliente.
--   Sesión     → ni lectura ni escritura desde el cliente. Todo pasa por
--                Server Actions con la service role key.
--
-- ATENCIÓN, DESVÍO DEL SPEC EN LAS TABLAS DE SESIÓN
--
-- El spec pide `using (true)` en select también para trips, trip_packing_items
-- y trip_budget_items. Eso rompe el modelo de dos tokens: la anon key es
-- pública (va en el bundle del browser), así que con `using (true)` cualquiera
-- puede pegarle a la API REST de Supabase y hacer
--
--     select edit_token from trips
--
-- y quedarse con el token de edición de TODOS los viajes. De ahí en adelante
-- entra por /viaje/{edit_token} y escribe como si fuera el dueño, usando las
-- Server Actions legítimas de la aplicación. El criterio de aceptación 7 del
-- propio spec — "ninguna escritura es posible sin un edit_token válido" —
-- quedaría vacío: los tokens los repartiría la base.
--
-- Acá las tablas de sesión quedan con RLS habilitada y CERO políticas. En
-- Postgres eso significa denegar todo, y encima se revocan los privilegios de
-- tabla. Nada de esto le saca funcionalidad a la app: la sección 6 ya define
-- que el dashboard es un Server Component y que el guardado va por Server
-- Actions, así que el browser nunca lee estas tablas por su cuenta.
--
-- Si preferís la versión literal del spec, es cambiar este archivo: agregar las
-- tres políticas de select con using (true) y sacar los revoke.

-- ===========================================================================
-- Datos de referencia: lectura pública
-- ===========================================================================

alter table destinations       enable row level security;
alter table climate_profiles   enable row level security;
alter table climate_thresholds enable row level security;
alter table products           enable row level security;
alter table packing_catalog    enable row level security;

create policy "lectura pública de destinations"
  on destinations for select to anon, authenticated using (true);

create policy "lectura pública de climate_profiles"
  on climate_profiles for select to anon, authenticated using (true);

create policy "lectura pública de climate_thresholds"
  on climate_thresholds for select to anon, authenticated using (true);

create policy "lectura pública de products"
  on products for select to anon, authenticated using (true);

create policy "lectura pública de packing_catalog"
  on packing_catalog for select to anon, authenticated using (true);

-- Sin políticas de insert/update/delete: RLS las deniega. Los privilegios de
-- tabla se recortan a select para que el rechazo llegue incluso si alguien
-- agrega una política permisiva por error más adelante.
revoke insert, update, delete on destinations       from anon, authenticated;
revoke insert, update, delete on climate_profiles   from anon, authenticated;
revoke insert, update, delete on climate_thresholds from anon, authenticated;
revoke insert, update, delete on products           from anon, authenticated;
revoke insert, update, delete on packing_catalog    from anon, authenticated;

grant select on destinations       to anon, authenticated;
grant select on climate_profiles   to anon, authenticated;
grant select on climate_thresholds to anon, authenticated;
grant select on products           to anon, authenticated;
grant select on packing_catalog    to anon, authenticated;

-- ===========================================================================
-- Datos de sesión: cerrados al cliente
-- ===========================================================================

alter table trips              enable row level security;
alter table trip_packing_items enable row level security;
alter table trip_budget_items  enable row level security;

-- Deliberadamente sin políticas. RLS habilitada y sin política = deniega todo.
revoke all on trips              from anon, authenticated;
revoke all on trip_packing_items from anon, authenticated;
revoke all on trip_budget_items  from anon, authenticated;

-- service_role tiene BYPASSRLS: es el rol de las Server Actions, que son las
-- que validan el edit_token antes de escribir. La service role key nunca sale
-- del servidor (por eso en .env.example no lleva el prefijo NEXT_PUBLIC_).
grant all on trips              to service_role;
grant all on trip_packing_items to service_role;
grant all on trip_budget_items  to service_role;
