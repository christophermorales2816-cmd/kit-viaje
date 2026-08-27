-- create_trip: crea el viaje y sus dos listas en una sola transacción.
--
-- POR QUÉ UNA FUNCIÓN Y NO TRES INSERTS
--
-- supabase-js habla PostgREST, y cada llamada es su propia transacción. Crear
-- el trip y después los ítems son tres viajes de ida y vuelta: si el segundo
-- falla, queda un viaje sin equipaje ni presupuesto, y el usuario aterriza en
-- un dashboard vacío sin ninguna pista de qué pasó. Adentro de una función es
-- todo o nada.
--
-- De paso ahorra dos round-trips en el camino crítico: el usuario está
-- esperando el redirect.
--
-- PERMISOS: solo service_role. Las Server Actions son el único camino de
-- escritura (sección 3), y crear un viaje no es la excepción aunque sea la
-- única escritura que todavía no tiene un edit_token que validar.

create function public.create_trip(
  p_destination_id uuid,
  p_start_date     date,
  p_end_date       date,
  p_trip_type      text,
  p_packing        jsonb,   -- [{"item_id": "...", "qty": 1}, ...]
  p_budget         jsonb    -- [{"product_id": "...", "qty": 1}, ...]
)
returns table (id uuid, edit_token text, share_slug text)
language plpgsql
set search_path = ''
as $$
declare
  v_trip public.trips;
begin
  insert into public.trips (destination_id, start_date, end_date, trip_type)
  values (p_destination_id, p_start_date, p_end_date, p_trip_type)
  returning * into v_trip;

  -- Los constraints de las tablas hijas siguen aplicando acá adentro: un qty en
  -- cero o un item_id inexistente aborta la transacción entera.
  insert into public.trip_packing_items (trip_id, item_id, qty)
  select v_trip.id,
         (elem ->> 'item_id')::uuid,
         (elem ->> 'qty')::int
    from jsonb_array_elements(coalesce(p_packing, '[]'::jsonb)) as elem;

  insert into public.trip_budget_items (trip_id, product_id, qty)
  select v_trip.id,
         (elem ->> 'product_id')::uuid,
         (elem ->> 'qty')::int
    from jsonb_array_elements(coalesce(p_budget, '[]'::jsonb)) as elem;

  return query select v_trip.id, v_trip.edit_token, v_trip.share_slug;
end;
$$;

comment on function public.create_trip is
  'Crea un viaje con su equipaje y su presupuesto en una transacción. Solo service_role.';

revoke all on function public.create_trip(uuid, date, date, text, jsonb, jsonb)
  from public, anon, authenticated;

grant execute on function public.create_trip(uuid, date, date, text, jsonb, jsonb)
  to service_role;
