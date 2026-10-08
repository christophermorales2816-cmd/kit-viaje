-- Integridad de los datos maestros.
--
-- Las reglas que tienen que valer sobre los datos de referencia —destinos,
-- clima, precios, catálogo— y que el esquema solo no puede expresar con un
-- check. Corre en CI después de las migraciones, y se puede correr tal cual
-- contra la base de producción desde el SQL Editor de Supabase: solo lee, y
-- termina con rollback igual.
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/integridad.sql
--
-- Cada bloque dice OK o falla con el nombre de lo que está mal. Si falla en
-- producción y no en CI, alguien editó datos a mano en Studio: el arreglo va
-- en una migración, no en otro retoque a mano.
--
-- Sin comandos de psql a propósito: se pega tal cual en el SQL Editor de
-- Supabase. Ahí los OK pueden no mostrarse; lo que importa es que termine sin
-- error.

begin;

do $$
declare
  mal text;
begin
  select string_agg(d.corridor || '/' || d.slug || ' (' || count_meses || ')', ', ')
  into mal
  from (
    select d.id, count(distinct c.month) as count_meses
    from destinations d
    left join climate_profiles c on c.destination_id = d.id
    group by d.id
  ) x
  join destinations d on d.id = x.id
  where x.count_meses <> 12;

  if mal is not null then
    raise exception 'FALLO: destinos sin los 12 meses de clima: %', mal;
  end if;

  raise notice 'OK  cada destino tiene los 12 meses de clima';
end $$;

do $$
declare
  mal text;
begin
  select string_agg(d.corridor || '/' || d.slug, ', ') into mal
  from destinations d
  where not exists (select 1 from products p where p.destination_id = d.id);

  if mal is not null then
    raise exception 'FALLO: destinos sin precios: %', mal;
  end if;

  raise notice 'OK  cada destino tiene precios';
end $$;

do $$
declare
  mal text;
begin
  select string_agg(corridor || ' (' || bases || ')', ', ') into mal
  from (
    select corridor, count(*) filter (where is_base) as bases
    from destinations
    group by corridor
  ) x
  where bases <> 1;

  if mal is not null then
    raise exception 'FALLO: corredores sin exactamente una ciudad base: %', mal;
  end if;

  raise notice 'OK  cada corredor tiene exactamente una ciudad base';
end $$;

do $$
declare
  mal text;
begin
  select string_agg(corridor, ', ') into mal
  from (
    select corridor
    from destinations
    group by corridor
    having count(distinct base_currency) > 1
  ) x;

  if mal is not null then
    raise exception 'FALLO: corredores con más de una moneda: %', mal;
  end if;

  select string_agg(distinct d.corridor || '/' || d.slug, ', ') into mal
  from products p
  join destinations d on d.id = p.destination_id
  where p.currency <> d.base_currency;

  if mal is not null then
    raise exception 'FALLO: precios en otra moneda que la de su destino: %', mal;
  end if;

  raise notice 'OK  una moneda por corredor, y los precios en ella';
end $$;

do $$
declare
  abiertos int;
  mal text;
begin
  select count(*) into abiertos from climate_thresholds where temp_max is null;

  if abiertos <> 1 then
    raise exception 'FALLO: tiene que haber un solo bucket de clima sin tope, y hay %', abiertos;
  end if;

  select string_agg(distinct t, ', ') into mal
  from packing_catalog, unnest(climate_tags) as t
  where t not in (select id from climate_thresholds);

  if mal is not null then
    raise exception 'FALLO: el catálogo usa buckets de clima que no existen: %', mal;
  end if;

  raise notice 'OK  los buckets de clima son coherentes con el catálogo';
end $$;

do $$
declare
  mal text;
begin
  -- Un tipo de viaje sin ítems genera una lista de equipaje vacía.
  select string_agg(tipo, ', ') into mal
  from unnest(array['playa', 'urbano', 'aventura', 'negocios']) as tipo
  where not exists (
    select 1 from packing_catalog where tipo = any (trip_type_tags)
  );

  if mal is not null then
    raise exception 'FALLO: tipos de viaje sin ningún ítem en el catálogo: %', mal;
  end if;

  raise notice 'OK  cada tipo de viaje tiene ítems en el catálogo';
end $$;

do $$
declare
  mal int;
begin
  select count(*) into mal from products where updated_at > now() + interval '1 day';

  if mal > 0 then
    raise exception 'FALLO: % precios con fecha de actualización en el futuro', mal;
  end if;

  raise notice 'OK  ningún precio dice estar actualizado en el futuro';
end $$;

rollback;
