-- Roles y privilegios que Supabase crea solo, para poder correr el smoke test
-- contra un Postgres común: en CI, o en local.
--
-- Contra un proyecto de Supabase real NO hace falta: los roles ya existen.
-- Correrlo igual es inofensivo (es idempotente), pero innecesario.

do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'anon') then
    create role anon nologin noinherit;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'authenticated') then
    create role authenticated nologin noinherit;
  end if;
  if not exists (select 1 from pg_roles where rolname = 'service_role') then
    create role service_role nologin noinherit bypassrls;
  end if;
end $$;

grant usage on schema public to anon, authenticated, service_role;

-- Supabase concede todo por defecto sobre las tablas nuevas de public. Que las
-- migraciones tengan que revocar explícitamente es el punto de la prueba: sin
-- esto, el smoke test pasaría porque los permisos nunca se dieron, no porque
-- las migraciones los saquen.
alter default privileges in schema public
  grant all on tables to anon, authenticated, service_role;
