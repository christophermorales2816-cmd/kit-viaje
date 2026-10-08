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

-- Corredor propio, no 'argentina': el seed ya siembra Buenos Aires como ciudad
-- base de ese corredor, y desde que hay un índice único parcial de una base por
-- corredor y otro de (corredor, slug), un fixture que se llame igual choca con
-- los datos reales. Un corredor de prueba deja este archivo independiente del
-- seed, que es lo que un smoke test de RLS debería ser: prueba permisos, no
-- contenido.
insert into destinations (id, name, corridor, base_currency, is_base, slug)
values ('11111111-1111-1111-1111-111111111111', 'Ciudad de prueba', 'corredor-de-prueba', 'ARS', true, 'ciudad-de-prueba');

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

-- ---------------------------------------------------------------------------
-- destinations: una sola ciudad base por corredor, y slugs únicos
-- ---------------------------------------------------------------------------
--
-- Son los dos invariantes que sostienen la elección de ciudad. Sin el primero,
-- getDestination() devuelve una ciudad al azar cuando el corredor tiene varias;
-- sin el segundo, dos ciudades del mismo país se pelean la misma URL.
--
-- Van acá y no en un test de TypeScript porque los hace cumplir Postgres, y lo
-- que Postgres promete se verifica contra Postgres.

do $$
begin
  begin
    insert into destinations (id, name, corridor, base_currency, is_base, slug)
    values ('11111111-1111-1111-1111-11111111aaaa', 'Otra base', 'corredor-de-prueba', 'ARS', true, 'otra-base');
    raise exception 'FALLA  se aceptó una segunda ciudad base en el mismo corredor';
  exception when unique_violation then
    raise notice 'OK  se rechaza una segunda ciudad base en el mismo corredor';
  end;
end $$;

do $$
begin
  insert into destinations (id, name, corridor, base_currency, is_base, slug)
  values ('11111111-1111-1111-1111-11111111bbbb', 'Secundaria', 'corredor-de-prueba', 'ARS', false, 'secundaria');
  raise notice 'OK  se acepta una segunda ciudad no base en el mismo corredor';
end $$;

do $$
begin
  begin
    insert into destinations (id, name, corridor, base_currency, is_base, slug)
    values ('11111111-1111-1111-1111-11111111cccc', 'Repetida', 'corredor-de-prueba', 'ARS', false, 'secundaria');
    raise exception 'FALLA  se aceptó un slug repetido dentro del mismo corredor';
  exception when unique_violation then
    raise notice 'OK  se rechaza un slug repetido dentro del corredor';
  end;
end $$;

do $$
begin
  -- El mismo slug en OTRO corredor sí vale: dos países pueden tener una ciudad
  -- con el mismo nombre y no hay razón para que la primera se lo quede.
  insert into destinations (id, name, corridor, base_currency, is_base, slug)
  values ('11111111-1111-1111-1111-11111111dddd', 'Secundaria', 'otro-corredor', 'ARS', true, 'secundaria');
  raise notice 'OK  el mismo slug vale en otro corredor';
end $$;

do $$
begin
  begin
    insert into destinations (id, name, corridor, base_currency, is_base, slug)
    values ('11111111-1111-1111-1111-11111111eeee', 'Mal formada', 'otro-corredor', 'ARS', false, 'Con Mayúsculas Y Espacios');
    raise exception 'FALLA  se aceptó un slug que no sirve para una URL';
  exception when check_violation then
    raise notice 'OK  se rechaza un slug que no sirve para una URL';
  end;
end $$;

-- ---------------------------------------------------------------------------
-- Endurecimiento de permisos (20261008120000)
-- ---------------------------------------------------------------------------

do $$
begin
  -- RLS no aplica a TRUNCATE: el permiso tiene que no existir.
  if has_table_privilege('anon', 'destinations', 'TRUNCATE')
     or has_table_privilege('anon', 'products', 'TRUNCATE') then
    raise exception 'FALLO: anon tiene TRUNCATE sobre los datos de referencia';
  end if;

  if has_table_privilege('anon', 'products', 'REFERENCES')
     or has_table_privilege('anon', 'products', 'TRIGGER') then
    raise exception 'FALLO: anon tiene permisos de más sobre products';
  end if;

  raise notice 'OK  anon solo tiene SELECT sobre los datos de referencia';
end $$;

-- Las dos reglas que cubren lo que todavía no existe. Recorren el catálogo, así
-- que una tabla o una función que agregue una migración futura queda cubierta
-- sin tocar este archivo.

do $$
declare
  sin_rls text;
begin
  select string_agg(c.relname, ', ' order by c.relname) into sin_rls
  from pg_class c
  join pg_namespace n on n.oid = c.relnamespace
  where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity;

  if sin_rls is not null then
    raise exception 'FALLO: tablas de public sin RLS: %', sin_rls;
  end if;

  raise notice 'OK  todas las tablas de public tienen RLS';
end $$;

do $$
declare
  expuestas text;
begin
  select string_agg(p.oid::regprocedure::text, ', ') into expuestas
  from pg_proc p
  join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public'
    and has_function_privilege('anon', p.oid, 'EXECUTE');

  if expuestas is not null then
    raise exception 'FALLO: anon puede ejecutar funciones de public: %. Cada función nueva lleva su revoke execute.', expuestas;
  end if;

  raise notice 'OK  ninguna función de public es ejecutable por anon';
end $$;

do $$
begin
  -- Una tabla nueva, creada como la crearía una migración futura, nace sin
  -- permisos para anon: olvidarse de la RLS deja de exponerla.
  create table prueba_tabla_nueva (x int);

  if has_table_privilege('anon', 'prueba_tabla_nueva', 'SELECT')
     or has_table_privilege('authenticated', 'prueba_tabla_nueva', 'SELECT') then
    raise exception 'FALLO: una tabla nueva queda expuesta a la anon key por defecto';
  end if;

  raise notice 'OK  una tabla nueva nace cerrada para anon';
end $$;

-- ---------------------------------------------------------------------------
-- Cupo de creación de viajes (20261008120100)
-- ---------------------------------------------------------------------------

do $$
begin
  set local role anon;
  perform 1 from limites_de_creacion limit 1;
  raise exception 'FALLO: anon pudo leer limites_de_creacion';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede leer los cupos';
end $$;
reset role;

do $$
begin
  set local role anon;
  perform consumir_cupo_de_viaje('x', 1000, 1000);
  raise exception 'FALLO: anon pudo consumir cupo';
exception
  when insufficient_privilege then
    raise notice 'OK  anon no puede llamar al cupo';
end $$;
reset role;

do $$
declare
  r1 boolean; r2 boolean; r3 boolean; otro boolean;
begin
  set local role service_role;

  -- Tope de 2 por cliente: el tercero no entra, y otro cliente sí.
  r1 := consumir_cupo_de_viaje('cliente-de-prueba', 2, 1000);
  r2 := consumir_cupo_de_viaje('cliente-de-prueba', 2, 1000);
  r3 := consumir_cupo_de_viaje('cliente-de-prueba', 2, 1000);
  otro := consumir_cupo_de_viaje('otro-cliente', 2, 1000);

  if not (r1 and r2) or r3 or not otro then
    raise exception 'FALLO: el cupo por cliente no corta donde debe (%, %, %, %)', r1, r2, r3, otro;
  end if;

  raise notice 'OK  el cupo por cliente corta en el tope y no afecta a otros';
end $$;
reset role;

do $$
declare
  dentro boolean; fuera boolean;
begin
  set local role service_role;

  -- Tope global: cuenta a todos los clientes juntos. Ya hay 3 que entraron
  -- arriba (dos del primero y uno del segundo).
  dentro := consumir_cupo_de_viaje('tercero', 1000, 4);
  fuera  := consumir_cupo_de_viaje('cuarto', 1000, 4);

  if not dentro or fuera then
    raise exception 'FALLO: el tope global no corta donde debe (%, %)', dentro, fuera;
  end if;

  raise notice 'OK  el tope global frena aunque cada cliente esté dentro de su cupo';
end $$;
reset role;

do $$
begin
  perform purgar_viajes_terminados(7);
  raise exception 'FALLO: se pudo purgar con menos de 30 días';
exception
  when raise_exception then
    if sqlerrm like 'FALLO:%' then raise; end if;
    raise notice 'OK  la purga se niega a borrar viajes recientes';
end $$;

do $$
declare
  borrados int;
begin
  insert into trips (id, destination_id, start_date, end_date, trip_type)
  values ('55555555-5555-4555-8555-555555555555',
          '11111111-1111-1111-1111-111111111111',
          current_date - 400, current_date - 395, 'urbano'),
         ('66666666-6666-4666-8666-666666666666',
          '11111111-1111-1111-1111-111111111111',
          current_date - 40, current_date - 35, 'urbano');

  borrados := purgar_viajes_terminados(365);

  if borrados < 1 or exists (select 1 from trips where id = '55555555-5555-4555-8555-555555555555') then
    raise exception 'FALLO: la purga no borró un viaje terminado hace más de un año';
  end if;

  if not exists (select 1 from trips where id = '66666666-6666-4666-8666-666666666666') then
    raise exception 'FALLO: la purga borró un viaje que no correspondía';
  end if;

  raise notice 'OK  la purga borra solo los viajes terminados hace más de lo pedido';
end $$;

-- ---------------------------------------------------------------------------
-- Moneda coherente entre precios y destino (20261008120200)
-- ---------------------------------------------------------------------------

do $$
begin
  begin
    insert into products (destination_id, category, name, base_price, currency)
    values ('11111111-1111-1111-1111-111111111111', 'comida', 'Café en dólares', 3, 'USD');
    raise exception 'FALLA  se aceptó un precio en otra moneda que la del destino';
  exception when check_violation then
    raise notice 'OK  se rechaza un precio en otra moneda que la del destino';
  end;
end $$;

do $$
begin
  begin
    update destinations set base_currency = 'USD'
    where id = '11111111-1111-1111-1111-111111111111';
    raise exception 'FALLA  se cambió la moneda de un destino con precios en la anterior';
  exception when check_violation then
    raise notice 'OK  no se cambia la moneda de un destino sin pasar antes sus precios';
  end;
end $$;

rollback;
