-- Endurece los permisos que Supabase concede por defecto (auditoría de seguridad).
--
-- QUÉ CAMBIA Y POR QUÉ
--
-- 1. Datos de referencia: solo SELECT, y nada más.
--
--    20260826120200 revocó insert, update y delete, pero Supabase concede TODO
--    por defecto sobre las tablas de public, y "todo" incluye TRUNCATE,
--    REFERENCES y TRIGGER. RLS no se aplica a TRUNCATE. La API REST no expone
--    ese comando, así que hoy no hay por dónde usarlo, pero un permiso que no
--    se necesita es un permiso que sobra: se revoca todo y se vuelve a dar
--    solo lectura.
--
-- 2. Funciones: nadie de afuera las ejecuta.
--
--    Supabase publica como endpoint (/rest/v1/rpc/...) toda función de public
--    que anon pueda ejecutar. set_updated_at es de un trigger y no sirve para
--    nada llamada a mano, pero la regla general es la que importa: las
--    funciones de este esquema son internas.
--
-- 3. Las tablas que se creen a partir de ahora nacen cerradas.
--
--    Se cambian los privilegios por defecto del esquema: una tabla nueva ya no
--    queda expuesta a la anon key hasta que una migración lo diga
--    explícitamente. Es el error más común en proyectos de Supabase —crear una
--    tabla y olvidarse de la RLS— y así deja de ser posible por omisión.
--
--    Con las funciones no alcanza: Postgres le da EXECUTE a PUBLIC de forma
--    global, y eso no se puede revocar por esquema. Cada función nueva tiene
--    que llevar su propio `revoke execute ... from public, anon, authenticated`
--    (como las de 20261008120100), y el smoke test de CI falla si alguna de
--    public queda ejecutable por anon. La regla está en el test, no en la
--    memoria de quien escriba la próxima migración.

-- ---------------------------------------------------------------------------
-- 1. Referencia: solo lectura
-- ---------------------------------------------------------------------------

revoke all on destinations       from anon, authenticated;
revoke all on climate_profiles   from anon, authenticated;
revoke all on climate_thresholds from anon, authenticated;
revoke all on products           from anon, authenticated;
revoke all on packing_catalog    from anon, authenticated;

grant select on destinations       to anon, authenticated;
grant select on climate_profiles   to anon, authenticated;
grant select on climate_thresholds to anon, authenticated;
grant select on products           to anon, authenticated;
grant select on packing_catalog    to anon, authenticated;

-- ---------------------------------------------------------------------------
-- 2. Funciones existentes
-- ---------------------------------------------------------------------------

revoke execute on function set_updated_at() from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- 3. Lo nuevo nace cerrado
-- ---------------------------------------------------------------------------

alter default privileges in schema public
  revoke all on tables from anon, authenticated;

alter default privileges in schema public
  revoke all on sequences from anon, authenticated;

alter default privileges in schema public
  revoke execute on functions from anon, authenticated;
