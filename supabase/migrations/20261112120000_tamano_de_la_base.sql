-- Lo que ocupa la base, para que la carga diaria de los lugares de "Qué comer"
-- no la llene (spec, 18.10; src/lib/comidas/carga.ts).
--
-- La base es la misma de los viajes, y en el plan gratis de Supabase pasa a
-- solo lectura cuando llega a 500 MB: no se rompería solo el mapa, dejarían de
-- guardarse los viajes. La carga pregunta esto antes de subir cada país y se
-- frena bastante antes.
--
-- security definer porque pg_database_size pide permiso para conectarse a la
-- base, y así no depende de cómo lo tenga service_role: corre como quien
-- aplica las migraciones. No recibe nada ni toca ninguna tabla, y solo la puede
-- llamar service_role: cuánto ocupa la base no es asunto de la anon key.

create or replace function tamano_de_la_base()
returns bigint
language sql
stable
security definer
set search_path = ''
as $$
  select pg_catalog.pg_database_size(pg_catalog.current_database());
$$;

comment on function tamano_de_la_base() is
  'Lo que ocupa la base, en bytes. Lo usa la carga diaria de lugares. Solo service_role.';

revoke execute on function tamano_de_la_base() from public, anon, authenticated;
grant execute on function tamano_de_la_base() to service_role;
