-- Smoke test de RLS y constraints del modelo de datos.
--
-- Cubre el criterio de aceptación 7 del spec ("ninguna escritura a trips,
-- trip_packing_items o trip_budget_items es posible sin un edit_token válido")
-- un nivel más abajo que la verificación por HTTP que propone el spec: si el
-- rol anon no puede ni leer ni escribir estas tablas en la base, tampoco puede
-- hacerlo la anon key a través de PostgREST.
--
-- Corre entero dentro de una transacción y termina con rollback: no deja nada.
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql
--
-- Contra un Supabase local: supabase start && psql "$(supabase status -o env | grep DB_URL | cut -d= -f2-)" ...
-- Requiere los roles anon, authenticated y service_role, que Supabase ya crea.

\set ON_ERROR_STOP on

begin;

-- ---------------------------------------------------------------------------
-- Fixtures
-- ---------------------------------------------------------------------------

insert into destinations (id, name, corridor, base_currency)
values ('11111111-1111-1111-1111-111111111111', 'Buenos Aires', 'argentina', 'ARS');

insert into packing_catalog (id, category, name, weight_g, climate_tags, trip_type_tags)
values ('22222222-2222-2222-2222-222222222222', 'ropa', 'Campera', 800,
        array['frio'], array['urbano']);

insert into products (id, destination_id, category, name, base_price, currency)
values ('33333333-3333-3333-3333-333333333333',
        '11111111-1111-1111-1111-111111111111',
        'comida', 'Menú ejecutivo', 8500, 'ARS');

insert into trips (id, destination_id, start_date, end_date, trip_type)
values ('44444444-4444-4444-4444-444444444444',
        '11111111-1111-1111-1111-111111111111',
        '2026-09-01', '2026-09-07', 'urbano');

insert into trip_packing_items (trip_id, item_id)
values ('44444444-4444-4444-4444-444444444444',
        '22222222-2222-2222-2222-222222222222');

insert into trip_budget_items (trip_id, product_id)
values ('44444444-4444-4444-4444-444444444444',
        '33333333-3333-3333-3333-333333333333');

-- ---------------------------------------------------------------------------
-- 1. anon LEE los datos de referencia
-- ---------------------------------------------------------------------------

do $$
declare
  n int;
begin
  set local role anon;
  select count(*) into n from destinations;
  if n = 0 then
    raise exception 'FALLO: anon no pudo leer destinations';
  end if;
  select count(*) into n from climate_thresholds;
  raise notice 'OK  anon lee los datos de referencia';
end $$;
reset role;

-- ---------------------------------------------------------------------------
-- 2. anon NO ESCRIBE los datos de referencia
-- ---------------------------------------------------------------------------

do $$
begin
  set local role anon;
  update products set base_price = 1;
  raise exception 'FALLO: anon pudo modificar un precio del catálogo';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede escribir en products';
end $$;
reset role;

-- ---------------------------------------------------------------------------
-- 3. anon NO LEE las tablas de sesión — el punto crítico
--
-- Si esto pasara, anon se llevaría los edit_token de todos los viajes y el
-- modelo de dos tokens no protegería nada.
-- ---------------------------------------------------------------------------

do $$
declare
  leaked text;
begin
  set local role anon;
  select edit_token into leaked from trips limit 1;
  raise exception 'FALLO: anon leyó un edit_token (%)', leaked;
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede leer trips';
end $$;
reset role;

do $$
begin
  set local role anon;
  perform 1 from trip_packing_items limit 1;
  raise exception 'FALLO: anon pudo leer trip_packing_items';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede leer trip_packing_items';
end $$;
reset role;

do $$
begin
  set local role anon;
  perform 1 from trip_budget_items limit 1;
  raise exception 'FALLO: anon pudo leer trip_budget_items';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede leer trip_budget_items';
end $$;
reset role;

-- ---------------------------------------------------------------------------
-- 4. anon NO ESCRIBE las tablas de sesión (criterio de aceptación 7)
-- ---------------------------------------------------------------------------

do $$
begin
  set local role anon;
  insert into trips (destination_id, start_date, end_date, trip_type)
  values ('11111111-1111-1111-1111-111111111111', '2026-10-01', '2026-10-05', 'playa');
  raise exception 'FALLO: anon pudo crear un viaje';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede crear viajes';
end $$;
reset role;

do $$
begin
  set local role anon;
  update trip_packing_items set checked = true;
  raise exception 'FALLO: anon pudo tildar un ítem de equipaje ajeno';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede editar el equipaje de un viaje';
end $$;
reset role;

do $$
begin
  set local role anon;
  delete from trips;
  raise exception 'FALLO: anon pudo borrar viajes';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede borrar viajes';
end $$;
reset role;

-- ---------------------------------------------------------------------------
-- 5. service_role SÍ escribe: es el rol de las Server Actions
-- ---------------------------------------------------------------------------

do $$
declare
  n int;
begin
  set local role service_role;
  insert into trips (destination_id, start_date, end_date, trip_type)
  values ('11111111-1111-1111-1111-111111111111', '2026-10-01', '2026-10-05', 'playa');
  select count(*) into n from trips;
  if n < 2 then
    raise exception 'FALLO: service_role no ve los viajes que escribe (%)', n;
  end if;
  raise notice 'OK  service_role lee y escribe (bypass RLS)';
end $$;
reset role;

-- ---------------------------------------------------------------------------
-- 6. Los tokens se generan fuertes y distintos
-- ---------------------------------------------------------------------------

do $$
declare
  t record;
begin
  select edit_token, share_slug into t from trips
   where id = '44444444-4444-4444-4444-444444444444';

  if length(t.edit_token) <> 32 or t.edit_token !~ '^[0-9a-f]{32}$' then
    raise exception 'FALLO: edit_token con formato inesperado (%)', t.edit_token;
  end if;
  if length(t.share_slug) <> 16 or t.share_slug !~ '^[0-9a-f]{16}$' then
    raise exception 'FALLO: share_slug con formato inesperado (%)', t.share_slug;
  end if;
  if strpos(t.edit_token, t.share_slug) > 0 then
    raise exception 'FALLO: el share_slug se puede derivar del edit_token';
  end if;

  if (select count(distinct edit_token) from trips) <> (select count(*) from trips) then
    raise exception 'FALLO: edit_token repetido entre viajes';
  end if;

  raise notice 'OK  tokens con formato y unicidad correctos';
end $$;

-- ---------------------------------------------------------------------------
-- 7. Constraints del dominio
-- ---------------------------------------------------------------------------

do $$
begin
  insert into trips (destination_id, start_date, end_date, trip_type)
  values ('11111111-1111-1111-1111-111111111111', '2026-09-01', '2026-11-01', 'urbano');
  raise exception 'FALLO: se aceptó un viaje de más de 30 días';
exception
  when check_violation then
    raise notice 'OK  se rechaza un viaje de más de 30 días';
end $$;

do $$
begin
  insert into trips (destination_id, start_date, end_date, trip_type)
  values ('11111111-1111-1111-1111-111111111111', '2026-09-10', '2026-09-01', 'urbano');
  raise exception 'FALLO: se aceptó end_date anterior a start_date';
exception
  when check_violation then
    raise notice 'OK  se rechaza end_date anterior a start_date';
end $$;

do $$
begin
  insert into trips (destination_id, start_date, end_date, trip_type)
  values ('11111111-1111-1111-1111-111111111111', '2026-09-01', '2026-09-05', 'safari');
  raise exception 'FALLO: se aceptó un trip_type fuera del enum';
exception
  when check_violation then
    raise notice 'OK  se rechaza un trip_type fuera del enum';
end $$;

do $$
begin
  insert into packing_catalog (category, name, weight_g, climate_tags, trip_type_tags,
                               scales_with_days)
  values ('ropa', 'Medias', 40, array['frio'], array['urbano'], true);
  raise exception 'FALLO: se aceptó scales_with_days sin days_per_unit';
exception
  when check_violation then
    raise notice 'OK  scales_with_days exige days_per_unit';
end $$;

do $$
begin
  insert into packing_catalog (category, name, weight_g, climate_tags, trip_type_tags)
  values ('ropa', 'Traje', 1200, array['templado'], array['gala']);
  raise exception 'FALLO: se aceptó un trip_type_tag fuera del enum';
exception
  when check_violation then
    raise notice 'OK  se rechaza un trip_type_tag fuera del enum';
end $$;

-- ---------------------------------------------------------------------------
-- 8. updated_at lo fija el trigger, no quien escribe
--
-- No se compara "antes vs. después" porque now() es el timestamp de la
-- transacción: dentro de un mismo BEGIN no avanza. Lo que importa igual es
-- otra cosa: que un update no pueda dejar el precio marcado como viejo.
-- ---------------------------------------------------------------------------

do $$
declare
  ts timestamptz;
begin
  update products
     set base_price = 9000,
         updated_at = timestamptz '2020-01-01'   -- el trigger tiene que pisarlo
   where id = '33333333-3333-3333-3333-333333333333';

  select updated_at into ts from products
   where id = '33333333-3333-3333-3333-333333333333';

  if ts < now() - interval '1 minute' then
    raise exception 'FALLO: updated_at quedó en %, el trigger no lo pisó', ts;
  end if;
  raise notice 'OK  updated_at lo fija el trigger, no quien escribe';
end $$;

-- ---------------------------------------------------------------------------
-- 9. Borrar un viaje se lleva sus ítems; borrar catálogo en uso se bloquea
-- ---------------------------------------------------------------------------

do $$
declare
  n int;
begin
  delete from trips where id = '44444444-4444-4444-4444-444444444444';
  select count(*) into n from trip_packing_items
   where trip_id = '44444444-4444-4444-4444-444444444444';
  if n <> 0 then
    raise exception 'FALLO: quedaron % ítems huérfanos', n;
  end if;
  raise notice 'OK  borrar un viaje arrastra sus ítems';
end $$;

do $$
begin
  insert into trips (id, destination_id, start_date, end_date, trip_type)
  values ('55555555-5555-5555-5555-555555555555',
          '11111111-1111-1111-1111-111111111111', '2026-09-01', '2026-09-07', 'urbano');
  insert into trip_packing_items (trip_id, item_id)
  values ('55555555-5555-5555-5555-555555555555',
          '22222222-2222-2222-2222-222222222222');

  delete from packing_catalog where id = '22222222-2222-2222-2222-222222222222';
  raise exception 'FALLO: se borró un ítem del catálogo que estaba en uso';
exception
  when foreign_key_violation then
    raise notice 'OK  no se puede borrar catálogo en uso';
end $$;

-- ---------------------------------------------------------------------------
-- 10. precip_probability respeta la escala 0-100
--
-- El check acota el rango, no la escala: 0.6 pasa porque es un 0,6% válido.
-- Que la columna esté en 0-100 y no en 0-1 lo fija el comment de la columna y
-- el proceso de carga, no el constraint. Lo que sí se verifica es que no entren
-- valores fuera de rango.
-- ---------------------------------------------------------------------------

do $$
begin
  insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability)
  values ('11111111-1111-1111-1111-111111111111', 7, 8, 15, 150);
  raise exception 'FALLO: se aceptó precip_probability = 150';
exception
  when check_violation then
    raise notice 'OK  se rechaza precip_probability fuera de 0-100';
end $$;

do $$
begin
  insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability)
  values ('11111111-1111-1111-1111-111111111111', 8, 8, 15, -1);
  raise exception 'FALLO: se aceptó precip_probability negativa';
exception
  when check_violation then
    raise notice 'OK  se rechaza precip_probability negativa';
end $$;

do $$
begin
  insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability)
  values ('11111111-1111-1111-1111-111111111111',  9, 8, 15,   0),
         ('11111111-1111-1111-1111-111111111111', 10, 8, 15,  60),
         ('11111111-1111-1111-1111-111111111111', 11, 8, 15, 100);
  raise notice 'OK  se aceptan 0, 60 y 100';
end $$;

rollback;
