-- Datos de sesión (spec, sección 3).
--
-- Los genera el usuario sin cuenta. Dos tokens, no uno:
--   edit_token  → privado, solo lo tiene quien creó el viaje. Habilita escritura.
--   share_slug  → público, es el que se comparte. Solo lectura.
--
-- Ninguna escritura pasa por el cliente: todas van por Server Actions que
-- validan el edit_token antes de tocar la base. Las políticas están en
-- 20260826120200_rls_policies.sql.

-- ---------------------------------------------------------------------------
-- trips
-- ---------------------------------------------------------------------------

create table trips (
  id             uuid primary key default gen_random_uuid(),
  destination_id uuid not null references destinations (id) on delete restrict,
  start_date     date not null,
  end_date       date not null,
  trip_type      text not null
    check (trip_type in ('playa', 'urbano', 'aventura', 'negocios')),

  -- El spec propone substr(md5(random()::text), 1, 20) para los dos tokens.
  -- random() no es un generador criptográfico: está sembrado por sesión y su
  -- salida es predecible para quien observe otros valores. Como el edit_token
  -- es lo único que separa a un visitante de escribir sobre un viaje ajeno,
  -- eso no alcanza. gen_random_uuid() usa pg_strong_random (el RNG del sistema
  -- operativo), es nativo desde Postgres 13 y no necesita extensiones.
  edit_token text unique not null
    default replace(gen_random_uuid()::text, '-', ''),

  -- 16 hex sobre el mismo generador fuerte. Más corto porque va en una URL que
  -- se comparte a mano y solo habilita lectura.
  share_slug text unique not null
    default substr(replace(gen_random_uuid()::text, '-', ''), 1, 16),

  constraint trips_date_order check (end_date >= start_date),

  -- El datepicker de la landing acepta 1-30 días (spec, sección 6). El motor de
  -- packing escala cantidades por duración, así que un rango absurdo no es solo
  -- UI fea: genera una lista sin sentido.
  constraint trips_max_duration check (end_date - start_date <= 29)
);

comment on table trips is
  'Sesión anónima compartible por URL. Sin cuenta: el link es la única forma de volver (spec, sección 6C).';
comment on column trips.edit_token is
  'PRIVADO. Ruta /viaje/{edit_token}. Nunca se expone en la vista compartida.';
comment on column trips.share_slug is
  'PÚBLICO. Ruta /viaje/ver/{share_slug}. Solo lectura.';

-- ---------------------------------------------------------------------------
-- trip_packing_items
-- ---------------------------------------------------------------------------

create table trip_packing_items (
  trip_id uuid not null references trips (id) on delete cascade,
  item_id uuid not null references packing_catalog (id) on delete restrict,
  qty     int not null default 1 check (qty > 0),
  checked boolean not null default false,

  primary key (trip_id, item_id)
);

comment on table trip_packing_items is
  'Lista generada por el motor de packing. El usuario la edita después: la generación es punto de partida, no resultado final (spec, sección 4).';

-- La PK ya cubre las búsquedas por trip_id. Este índice es para el lado
-- referenciado: sin él, borrar un ítem del catálogo escanea la tabla entera
-- para chequear el on delete restrict.
create index trip_packing_items_item_id_idx on trip_packing_items (item_id);

-- ---------------------------------------------------------------------------
-- trip_budget_items
-- ---------------------------------------------------------------------------

create table trip_budget_items (
  trip_id    uuid not null references trips (id) on delete cascade,
  product_id uuid not null references products (id) on delete restrict,
  qty        int not null default 1 check (qty > 0),

  primary key (trip_id, product_id)
);

comment on table trip_budget_items is
  'Lista generada por el motor de presupuesto. El monto convertido no se persiste: se recalcula contra la cotización vigente en cada render (spec, sección 5).';

create index trip_budget_items_product_id_idx on trip_budget_items (product_id);
