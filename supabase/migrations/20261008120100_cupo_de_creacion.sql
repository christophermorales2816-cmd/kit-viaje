-- Cupo de creación de viajes y fecha de alta (auditoría de seguridad).
--
-- EL PROBLEMA
--
-- Crear un viaje es la única escritura pública de la app: no pide cuenta ni
-- token, a propósito. Eso también significa que un script podía crear miles
-- por minuto y llenar la base. No hacía falta un ataque sofisticado: un loop.
--
-- LA SOLUCIÓN, EN LA BASE
--
-- Cada creación consume un cupo por hora, con dos topes:
--
--   por cliente  alguien planificando de verdad crea un puñado de viajes; un
--                loop, cientos. El cliente se identifica por un hash de su IP
--                que calcula el servidor (src/lib/trips/cupo.ts): la base
--                nunca ve la IP.
--   global       un freno de emergencia para un ataque repartido entre
--                muchas IPs: pase lo que pase, la base no crece más de eso
--                por hora.
--
-- Va en Postgres y no en memoria del servidor porque en Vercel cada request
-- puede caer en una instancia distinta: un contador en memoria no cuenta nada.
-- El upsert sobre la clave primaria es atómico, así que dos requests
-- simultáneas no se pisan.
--
-- Los topes los pasa la aplicación (src/lib/trips/cupo.ts), así que ajustarlos
-- no necesita migración. Solo puede llamar la service role.

-- ---------------------------------------------------------------------------
-- Fecha de alta de cada viaje
-- ---------------------------------------------------------------------------

-- Faltaba: sin ella no hay forma de saber cuántos viajes se crean por día, ni
-- de limpiar los viejos. Los viajes que ya existían quedan con la fecha de esta
-- migración, que es lo más honesto que se puede decir de ellos.
alter table trips
  add column if not exists created_at timestamptz not null default now();

comment on column trips.created_at is
  'Alta del viaje. La usan las métricas de uso y purgar_viajes_terminados().';

create index if not exists trips_created_at_idx on trips (created_at);

-- La FK a destinations no tenía índice del lado de trips: borrar o renombrar
-- un destino obligaba a recorrer la tabla entera para chequear el restrict.
create index if not exists trips_destination_id_idx on trips (destination_id);

-- ---------------------------------------------------------------------------
-- Cupos
-- ---------------------------------------------------------------------------

create table if not exists limites_de_creacion (
  -- Hash de la IP del cliente, o 'global'.
  clave   text        not null check (length(clave) between 1 and 64),
  -- Inicio de la hora que se está contando.
  ventana timestamptz not null,
  cuenta  int         not null default 0 check (cuenta >= 0),
  primary key (clave, ventana)
);

comment on table limites_de_creacion is
  'Contadores por hora para frenar la creación masiva de viajes. Se limpian solos: solo se guarda el último día.';

alter table limites_de_creacion enable row level security;
-- Sin políticas: igual que las tablas de sesión, solo la service role la toca.
revoke all on limites_de_creacion from anon, authenticated;
grant all on limites_de_creacion to service_role;

create or replace function consumir_cupo_de_viaje(
  p_clave     text,
  p_por_clave int,
  p_global    int
)
returns boolean
language plpgsql
set search_path = ''
as $$
declare
  v_ventana timestamptz := date_trunc('hour', now());
  v_cuenta  int;
begin
  -- Mantenimiento: lo de ayer ya no cuenta para nada.
  delete from public.limites_de_creacion
  where ventana < v_ventana - interval '1 day';

  -- Primero el tope del cliente: si un solo cliente se pasa, no gasta el cupo
  -- de todos los demás.
  insert into public.limites_de_creacion as l (clave, ventana, cuenta)
  values (p_clave, v_ventana, 1)
  on conflict (clave, ventana) do update set cuenta = l.cuenta + 1
  returning cuenta into v_cuenta;

  if v_cuenta > p_por_clave then
    return false;
  end if;

  insert into public.limites_de_creacion as l (clave, ventana, cuenta)
  values ('global', v_ventana, 1)
  on conflict (clave, ventana) do update set cuenta = l.cuenta + 1
  returning cuenta into v_cuenta;

  return v_cuenta <= p_global;
end;
$$;

comment on function consumir_cupo_de_viaje(text, int, int) is
  'Suma una creación al cupo de la hora y devuelve si todavía entra. Solo service_role.';

revoke execute on function consumir_cupo_de_viaje(text, int, int)
  from public, anon, authenticated;
grant execute on function consumir_cupo_de_viaje(text, int, int)
  to service_role;

-- ---------------------------------------------------------------------------
-- Limpieza manual de viajes terminados
-- ---------------------------------------------------------------------------

-- No corre sola. Borrar viajes es una decisión de producto —el link de alguien
-- deja de funcionar—, así que queda como herramienta para el administrador:
--
--   select purgar_viajes_terminados(365);
--
-- borra los viajes que terminaron hace más de un año y devuelve cuántos. Las
-- filas de equipaje y presupuesto se van con el viaje (on delete cascade).
create or replace function purgar_viajes_terminados(p_dias int)
returns int
language plpgsql
set search_path = ''
as $$
declare
  v_borrados int;
begin
  if p_dias is null or p_dias < 30 then
    raise exception 'Por seguridad, solo se purgan viajes terminados hace 30 días o más.';
  end if;

  delete from public.trips
  where end_date < current_date - p_dias;

  get diagnostics v_borrados = row_count;
  return v_borrados;
end;
$$;

comment on function purgar_viajes_terminados(int) is
  'Borra los viajes que terminaron hace más de p_dias días (mínimo 30). Manual, solo service_role.';

revoke execute on function purgar_viajes_terminados(int)
  from public, anon, authenticated;
grant execute on function purgar_viajes_terminados(int) to service_role;
