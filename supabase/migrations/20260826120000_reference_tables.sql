-- Datos de referencia del corredor (spec, sección 3).
--
-- Los carga el admin desde Supabase Studio; el cliente solo los lee. Ninguna
-- de estas tablas se escribe desde la aplicación.
--
-- Las columnas de escalado por duración (base_qty, scales_with_days,
-- days_per_unit, max_qty) aparecen en el spec como `alter table` porque el
-- documento las agregó en las secciones 4 y 5, después de definir el modelo.
-- Acá van dentro del `create table`: esta es la primera migración del
-- proyecto y no hay nada desplegado que alterar.

-- ---------------------------------------------------------------------------
-- destinations
-- ---------------------------------------------------------------------------

create table destinations (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  corridor      text not null,
  base_currency text not null check (base_currency ~ '^[A-Z]{3}$')
);

comment on table destinations is
  'Destinos del MVP. Hoy uno solo: Buenos Aires, corredor argentina.';
comment on column destinations.base_currency is
  'ISO 4217. Define contra qué cotizaciones se convierte el presupuesto.';

-- ---------------------------------------------------------------------------
-- climate_profiles
-- ---------------------------------------------------------------------------

create table climate_profiles (
  destination_id     uuid not null references destinations (id) on delete cascade,
  month              int  not null check (month between 1 and 12),
  temp_min           numeric,
  temp_max           numeric,
  precip_probability numeric,

  primary key (destination_id, month),

  constraint climate_profiles_temp_order check (temp_min <= temp_max)
);

comment on table climate_profiles is
  'Promedio histórico por mes, no pronóstico: el motor de packing corre con meses de anticipación (spec, sección 1).';
comment on column climate_profiles.precip_probability is
  'ATENCIÓN: el spec no define la unidad (0-1 o 0-100). Queda sin check hasta decidirlo.';

-- ---------------------------------------------------------------------------
-- climate_thresholds (spec, sección 4)
-- ---------------------------------------------------------------------------

create table climate_thresholds (
  id       text primary key,
  temp_max numeric
);

comment on table climate_thresholds is
  'Buckets de clima parametrizables, editables desde Studio sin panel de admin (spec, sección 4).';
comment on column climate_thresholds.temp_max is
  'Límite superior en °C. null = sin límite superior.';

-- ---------------------------------------------------------------------------
-- products
-- ---------------------------------------------------------------------------

create table products (
  id               uuid primary key default gen_random_uuid(),
  destination_id   uuid not null references destinations (id) on delete cascade,
  category         text not null,
  name             text not null,
  base_price       numeric not null check (base_price >= 0),
  currency         text not null check (currency ~ '^[A-Z]{3}$'),
  updated_at       timestamptz not null default now(),

  base_qty         int not null default 1 check (base_qty > 0),
  scales_with_days boolean not null default false,
  days_per_unit    int check (days_per_unit > 0),
  max_qty          int check (max_qty > 0),

  constraint products_days_per_unit_required
    check (not scales_with_days or days_per_unit is not null)
);

comment on table products is
  'Catálogo curado de consumos típicos: 15-20 filas, 4 categorías (spec, sección 5).';
comment on column products.updated_at is
  'Antigüedad del precio. La vista de presupuesto avisa cuando el más viejo pasa el umbral (spec, sección 5). Lo mantiene el trigger products_set_updated_at.';

create index products_destination_id_idx on products (destination_id);

-- El spec mide staleness contra updated_at, pero editar un precio en Studio no
-- lo actualiza solo: sin este trigger la vista diría "actualizado hace 2 días"
-- sobre un precio que se acaba de tocar.
create function set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger products_set_updated_at
  before update on products
  for each row
  execute function set_updated_at();

-- ---------------------------------------------------------------------------
-- packing_catalog
-- ---------------------------------------------------------------------------

create table packing_catalog (
  id               uuid primary key default gen_random_uuid(),
  category         text not null,
  name             text not null,
  weight_g         int not null check (weight_g >= 0),
  climate_tags     text[] not null check (cardinality(climate_tags) > 0),
  trip_type_tags   text[] not null check (cardinality(trip_type_tags) > 0),

  base_qty         int not null default 1 check (base_qty > 0),
  scales_with_days boolean not null default false,
  days_per_unit    int check (days_per_unit > 0),
  max_qty          int check (max_qty > 0),

  constraint packing_catalog_days_per_unit_required
    check (not scales_with_days or days_per_unit is not null),

  -- trip_type es un enum cerrado para el MVP (spec, sección 4), así que se
  -- valida. climate_tags NO se valida contra una lista fija: los buckets viven
  -- en climate_thresholds justamente para ser parametrizables.
  constraint packing_catalog_trip_type_tags_valid
    check (trip_type_tags <@ array['playa', 'urbano', 'aventura', 'negocios'])
);

comment on table packing_catalog is
  'Catálogo global de ítems de equipaje. No depende del destino: lo que filtra es clima × tipo de viaje (spec, sección 4).';
comment on column packing_catalog.climate_tags is
  'Buckets de climate_thresholds que aplican al ítem, ej: {frio,lluvia}.';
