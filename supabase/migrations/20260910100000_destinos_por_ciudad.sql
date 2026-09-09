-- El viaje se planifica para una CIUDAD, no para un país (spec, sección 11).
--
-- La guía de Argentina ofrece Ushuaia y la de Brasil ofrece Manaos, pero el
-- planificador calculaba todo con la ciudad base del corredor. Alguien que iba
-- a Ushuaia en julio recibía la lista de Buenos Aires: sin campera de abrigo,
-- con ojotas y protector solar.
--
-- Los dos motores ya estaban listos para esto —climate_profiles y products son
-- por destination_id desde la primera migración— y el catálogo de equipaje es
-- global. Lo único que faltaba eran las ciudades y que el viaje supiera cuál.

-- ===========================================================================
-- 1. Cuál es la ciudad base de cada corredor
-- ===========================================================================
--
-- getDestination(corredor) hacía `.limit(1)` SIN ORDER BY. Con una sola ciudad
-- por corredor eso funcionaba por accidente; con varias, Postgres puede
-- devolver cualquiera, y hasta una distinta entre dos requests. La página de
-- preparación habría empezado a mostrar el clima de una ciudad al azar.
--
-- El índice parcial garantiza una sola base por corredor: es la clase de
-- invariante que un check no puede expresar y una convención no puede sostener.

alter table destinations
  add column if not exists is_base boolean not null default false;

create unique index if not exists destinations_una_base_por_corredor
  on destinations (corridor)
  where is_base;

update destinations set is_base = true
where id in (
  '00000000-0000-4000-8000-0000000000ba',  -- Buenos Aires
  '00000000-0000-4000-8000-0000000000b2'   -- Río de Janeiro
);

-- ===========================================================================
-- 2. Las ciudades
-- ===========================================================================
--
-- Un subconjunto curado, no las dieciocho que listan las guías: son las que
-- tienen un clima genuinamente distinto al de la ciudad base, que es lo que
-- cambia la lista de equipaje. Sumar una es agregar su fila acá y sus doce
-- meses abajo.

insert into destinations (id, name, corridor, base_currency, is_base) values
  ('00000000-0000-4000-8000-0000000000a1', 'Ushuaia',          'argentina', 'ARS', false),
  ('00000000-0000-4000-8000-0000000000a2', 'Bariloche',        'argentina', 'ARS', false),
  ('00000000-0000-4000-8000-0000000000a3', 'Mendoza',          'argentina', 'ARS', false),
  ('00000000-0000-4000-8000-0000000000a4', 'Salta',            'argentina', 'ARS', false),
  ('00000000-0000-4000-8000-0000000000a5', 'Puerto Iguazú',    'argentina', 'ARS', false),
  ('00000000-0000-4000-8000-0000000000c1', 'São Paulo',        'brasil',    'BRL', false),
  ('00000000-0000-4000-8000-0000000000c2', 'Salvador',         'brasil',    'BRL', false),
  ('00000000-0000-4000-8000-0000000000c3', 'Manaos',           'brasil',    'BRL', false),
  ('00000000-0000-4000-8000-0000000000c4', 'Florianópolis',    'brasil',    'BRL', false)
on conflict (id) do nothing;

-- ===========================================================================
-- 3. Doce meses de clima por ciudad
-- ===========================================================================
--
-- Promedios históricos aproximados, no pronóstico (spec, sección 1). Son
-- órdenes de magnitud de normales climáticas publicadas, con la precisión que
-- necesita decidir qué meter en la valija — no sirven para nada más.
--
-- Contra los umbrales sembrados (frio ≤10, templado ≤25, calido sin tope), esto
-- es lo que resuelve el motor y es exactamente el punto del cambio:
--
--   Ushuaia en julio  → solo 'frio'         → campera, bufanda, botas
--   Ushuaia en enero  → 'frio' + 'templado' → sigue sin ojotas ni protector
--   Manaos, siempre   → 'calido'            → nunca abrigo
--   Salta en invierno → 'frio' + 'calido'   → las dos cosas, y es correcto:
--                                             amanece helando y a la tarde hay 22

insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Ushuaia
  ('00000000-0000-4000-8000-0000000000a1',  1,  5.9, 14.5, 48),
  ('00000000-0000-4000-8000-0000000000a1',  2,  5.5, 14.0, 48),
  ('00000000-0000-4000-8000-0000000000a1',  3,  4.0, 11.9, 50),
  ('00000000-0000-4000-8000-0000000000a1',  4,  2.4,  9.2, 52),
  ('00000000-0000-4000-8000-0000000000a1',  5,  0.6,  6.2, 55),
  ('00000000-0000-4000-8000-0000000000a1',  6, -1.0,  4.2, 55),
  ('00000000-0000-4000-8000-0000000000a1',  7, -1.3,  3.9, 52),
  ('00000000-0000-4000-8000-0000000000a1',  8, -0.5,  5.2, 50),
  ('00000000-0000-4000-8000-0000000000a1',  9,  0.9,  7.9, 45),
  ('00000000-0000-4000-8000-0000000000a1', 10,  2.5, 10.6, 42),
  ('00000000-0000-4000-8000-0000000000a1', 11,  3.9, 12.4, 45),
  ('00000000-0000-4000-8000-0000000000a1', 12,  5.2, 13.7, 48),
  -- Bariloche
  ('00000000-0000-4000-8000-0000000000a2',  1,  9.4, 22.3, 25),
  ('00000000-0000-4000-8000-0000000000a2',  2,  9.1, 21.8, 25),
  ('00000000-0000-4000-8000-0000000000a2',  3,  7.0, 18.9, 30),
  ('00000000-0000-4000-8000-0000000000a2',  4,  4.7, 14.2, 45),
  ('00000000-0000-4000-8000-0000000000a2',  5,  2.6,  9.7, 60),
  ('00000000-0000-4000-8000-0000000000a2',  6,  0.9,  6.9, 65),
  ('00000000-0000-4000-8000-0000000000a2',  7,  0.3,  6.5, 62),
  ('00000000-0000-4000-8000-0000000000a2',  8,  1.0,  8.0, 58),
  ('00000000-0000-4000-8000-0000000000a2',  9,  2.1, 10.8, 45),
  ('00000000-0000-4000-8000-0000000000a2', 10,  4.1, 14.4, 35),
  ('00000000-0000-4000-8000-0000000000a2', 11,  6.2, 18.0, 30),
  ('00000000-0000-4000-8000-0000000000a2', 12,  8.3, 20.8, 28),
  -- Mendoza
  ('00000000-0000-4000-8000-0000000000a3',  1, 19.5, 32.4, 25),
  ('00000000-0000-4000-8000-0000000000a3',  2, 18.3, 30.6, 25),
  ('00000000-0000-4000-8000-0000000000a3',  3, 15.7, 27.9, 22),
  ('00000000-0000-4000-8000-0000000000a3',  4, 11.0, 23.0, 15),
  ('00000000-0000-4000-8000-0000000000a3',  5,  7.1, 18.4, 12),
  ('00000000-0000-4000-8000-0000000000a3',  6,  3.7, 14.6, 10),
  ('00000000-0000-4000-8000-0000000000a3',  7,  3.5, 14.9, 10),
  ('00000000-0000-4000-8000-0000000000a3',  8,  5.4, 17.6, 10),
  ('00000000-0000-4000-8000-0000000000a3',  9,  8.5, 21.0, 12),
  ('00000000-0000-4000-8000-0000000000a3', 10, 12.4, 25.4, 18),
  ('00000000-0000-4000-8000-0000000000a3', 11, 15.6, 28.8, 20),
  ('00000000-0000-4000-8000-0000000000a3', 12, 18.3, 31.6, 25),
  -- Salta
  ('00000000-0000-4000-8000-0000000000a4',  1, 17.6, 28.4, 55),
  ('00000000-0000-4000-8000-0000000000a4',  2, 17.2, 27.5, 55),
  ('00000000-0000-4000-8000-0000000000a4',  3, 16.1, 26.6, 50),
  ('00000000-0000-4000-8000-0000000000a4',  4, 13.2, 25.2, 30),
  ('00000000-0000-4000-8000-0000000000a4',  5,  9.3, 23.0, 12),
  ('00000000-0000-4000-8000-0000000000a4',  6,  5.9, 21.2,  5),
  ('00000000-0000-4000-8000-0000000000a4',  7,  4.6, 21.9,  5),
  ('00000000-0000-4000-8000-0000000000a4',  8,  6.9, 24.4,  5),
  ('00000000-0000-4000-8000-0000000000a4',  9, 10.3, 26.4, 10),
  ('00000000-0000-4000-8000-0000000000a4', 10, 14.3, 27.5, 25),
  ('00000000-0000-4000-8000-0000000000a4', 11, 16.0, 28.3, 40),
  ('00000000-0000-4000-8000-0000000000a4', 12, 17.4, 28.8, 52),
  -- Puerto Iguazú
  ('00000000-0000-4000-8000-0000000000a5',  1, 21.9, 33.0, 45),
  ('00000000-0000-4000-8000-0000000000a5',  2, 21.6, 32.2, 45),
  ('00000000-0000-4000-8000-0000000000a5',  3, 20.5, 31.2, 42),
  ('00000000-0000-4000-8000-0000000000a5',  4, 17.6, 28.0, 40),
  ('00000000-0000-4000-8000-0000000000a5',  5, 14.1, 24.2, 38),
  ('00000000-0000-4000-8000-0000000000a5',  6, 12.5, 22.0, 40),
  ('00000000-0000-4000-8000-0000000000a5',  7, 11.6, 22.5, 35),
  ('00000000-0000-4000-8000-0000000000a5',  8, 12.7, 24.7, 35),
  ('00000000-0000-4000-8000-0000000000a5',  9, 14.7, 26.1, 42),
  ('00000000-0000-4000-8000-0000000000a5', 10, 17.4, 28.5, 48),
  ('00000000-0000-4000-8000-0000000000a5', 11, 18.9, 30.5, 45),
  ('00000000-0000-4000-8000-0000000000a5', 12, 20.8, 32.4, 45),
  -- São Paulo
  ('00000000-0000-4000-8000-0000000000c1',  1, 19.5, 27.7, 55),
  ('00000000-0000-4000-8000-0000000000c1',  2, 19.7, 28.2, 50),
  ('00000000-0000-4000-8000-0000000000c1',  3, 19.1, 27.4, 48),
  ('00000000-0000-4000-8000-0000000000c1',  4, 17.3, 25.6, 38),
  ('00000000-0000-4000-8000-0000000000c1',  5, 14.9, 23.4, 30),
  ('00000000-0000-4000-8000-0000000000c1',  6, 13.5, 22.5, 25),
  ('00000000-0000-4000-8000-0000000000c1',  7, 13.0, 22.6, 25),
  ('00000000-0000-4000-8000-0000000000c1',  8, 13.9, 24.2, 22),
  ('00000000-0000-4000-8000-0000000000c1',  9, 15.4, 24.6, 35),
  ('00000000-0000-4000-8000-0000000000c1', 10, 16.7, 25.5, 42),
  ('00000000-0000-4000-8000-0000000000c1', 11, 17.9, 26.6, 48),
  ('00000000-0000-4000-8000-0000000000c1', 12, 19.0, 27.2, 55),
  -- Salvador
  ('00000000-0000-4000-8000-0000000000c2',  1, 24.4, 30.2, 32),
  ('00000000-0000-4000-8000-0000000000c2',  2, 24.6, 30.4, 35),
  ('00000000-0000-4000-8000-0000000000c2',  3, 24.7, 30.4, 40),
  ('00000000-0000-4000-8000-0000000000c2',  4, 24.2, 29.4, 58),
  ('00000000-0000-4000-8000-0000000000c2',  5, 23.0, 28.2, 62),
  ('00000000-0000-4000-8000-0000000000c2',  6, 21.8, 27.0, 60),
  ('00000000-0000-4000-8000-0000000000c2',  7, 21.1, 26.4, 55),
  ('00000000-0000-4000-8000-0000000000c2',  8, 21.1, 26.6, 45),
  ('00000000-0000-4000-8000-0000000000c2',  9, 21.9, 27.6, 35),
  ('00000000-0000-4000-8000-0000000000c2', 10, 22.8, 28.5, 32),
  ('00000000-0000-4000-8000-0000000000c2', 11, 23.5, 29.1, 35),
  ('00000000-0000-4000-8000-0000000000c2', 12, 24.0, 29.8, 32),
  -- Manaos
  ('00000000-0000-4000-8000-0000000000c3',  1, 23.5, 30.6, 72),
  ('00000000-0000-4000-8000-0000000000c3',  2, 23.5, 30.4, 72),
  ('00000000-0000-4000-8000-0000000000c3',  3, 23.6, 30.6, 75),
  ('00000000-0000-4000-8000-0000000000c3',  4, 23.6, 30.9, 72),
  ('00000000-0000-4000-8000-0000000000c3',  5, 23.5, 31.2, 60),
  ('00000000-0000-4000-8000-0000000000c3',  6, 23.1, 31.6, 42),
  ('00000000-0000-4000-8000-0000000000c3',  7, 22.8, 31.9, 32),
  ('00000000-0000-4000-8000-0000000000c3',  8, 23.0, 32.7, 25),
  ('00000000-0000-4000-8000-0000000000c3',  9, 23.4, 32.7, 30),
  ('00000000-0000-4000-8000-0000000000c3', 10, 23.6, 32.4, 42),
  ('00000000-0000-4000-8000-0000000000c3', 11, 23.7, 31.8, 55),
  ('00000000-0000-4000-8000-0000000000c3', 12, 23.7, 31.0, 65),
  -- Florianópolis
  ('00000000-0000-4000-8000-0000000000c4',  1, 21.9, 28.5, 45),
  ('00000000-0000-4000-8000-0000000000c4',  2, 22.0, 28.6, 45),
  ('00000000-0000-4000-8000-0000000000c4',  3, 21.1, 27.6, 45),
  ('00000000-0000-4000-8000-0000000000c4',  4, 18.6, 25.5, 40),
  ('00000000-0000-4000-8000-0000000000c4',  5, 15.8, 23.0, 38),
  ('00000000-0000-4000-8000-0000000000c4',  6, 13.6, 21.1, 38),
  ('00000000-0000-4000-8000-0000000000c4',  7, 13.2, 20.9, 42),
  ('00000000-0000-4000-8000-0000000000c4',  8, 13.9, 21.4, 42),
  ('00000000-0000-4000-8000-0000000000c4',  9, 15.3, 21.9, 45),
  ('00000000-0000-4000-8000-0000000000c4', 10, 17.1, 23.6, 45),
  ('00000000-0000-4000-8000-0000000000c4', 11, 18.8, 25.7, 42),
  ('00000000-0000-4000-8000-0000000000c4', 12, 20.6, 27.4, 45)
on conflict (destination_id, month) do nothing;

-- ===========================================================================
-- 4. Precios por ciudad
-- ===========================================================================
--
-- SE DERIVAN DE LA CIUDAD BASE CON UN FACTOR, Y CONVIENE SABER QUÉ SIGNIFICA.
--
-- La alternativa era tipear dieciocho precios por ciudad, o sea ciento sesenta
-- números inventados uno por uno. Un factor por ciudad es UNA estimación
-- explícita en vez de dieciocho implícitas, y se corrige en un solo lugar.
--
-- La simplificación que asume: que todo cuesta proporcionalmente lo mismo. Es
-- falso en el detalle —el alojamiento en Ushuaia se dispara más que un boleto
-- de colectivo— y está bien para lo que la app promete, que es un orden de
-- magnitud con la fecha de carga a la vista, no un presupuesto cerrado.
-- Cuando haya precios relevados por ciudad, reemplazan estas filas por id.
--
-- El id es determinístico (md5 del destino y el nombre) para que la migración
-- sea idempotente sin un unique natural en la tabla, igual que los ids fijos
-- del seed original.

insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id,
  p.category,
  p.name,
  round(p.base_price * ciudad.factor),
  p.currency,
  p.base_qty,
  p.scales_with_days,
  p.days_per_unit,
  p.max_qty
from (values
  -- Argentina, contra Buenos Aires
  ('00000000-0000-4000-8000-0000000000a1'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 1.35),  -- Ushuaia: lejos y turística
  ('00000000-0000-4000-8000-0000000000a2'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 1.20),  -- Bariloche
  ('00000000-0000-4000-8000-0000000000a3'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 0.90),  -- Mendoza
  ('00000000-0000-4000-8000-0000000000a4'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 0.80),  -- Salta
  ('00000000-0000-4000-8000-0000000000a5'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 1.00),  -- Puerto Iguazú
  -- Brasil, contra Río de Janeiro
  ('00000000-0000-4000-8000-0000000000c1'::uuid, '00000000-0000-4000-8000-0000000000b2'::uuid, 1.05),  -- São Paulo
  ('00000000-0000-4000-8000-0000000000c2'::uuid, '00000000-0000-4000-8000-0000000000b2'::uuid, 0.85),  -- Salvador
  ('00000000-0000-4000-8000-0000000000c3'::uuid, '00000000-0000-4000-8000-0000000000b2'::uuid, 0.95),  -- Manaos
  ('00000000-0000-4000-8000-0000000000c4'::uuid, '00000000-0000-4000-8000-0000000000b2'::uuid, 1.00)   -- Florianópolis
) as ciudad(id, base_id, factor)
join products p on p.destination_id = ciudad.base_id
on conflict (id) do nothing;

-- ===========================================================================
-- 5. Un bucket más: 'fresco'
-- ===========================================================================
--
-- Con ciudades de verdad quedó a la vista que 'templado' era demasiado ancho:
-- iba de 10 a 25 grados, así que una noche de 23 en Río entraba en el mismo
-- cajón que una de 12 en Bariloche. El buzo polar y las botas de trekking
-- están etiquetados [frio, templado] y por eso aparecían en un enero carioca de
-- 30 grados.
--
-- La solución no toca una línea de código, y eso es exactamente lo que el
-- diseño prometía: los buckets viven en climate_thresholds "para ser
-- parametrizables sin tocar código" (spec, sección 4). Esta migración cobra esa
-- promesa.
--
--   frio     ≤ 10   abrigo de verdad
--   fresco   ≤ 18   capas: buzo, pantalón largo, botas          ← nuevo
--   templado ≤ 25   manga corta cómoda
--   calido   sin tope
--
-- Qué resuelve, contra las ciudades sembradas:
--
--   Río en enero      23,3 / 30,2  → templado + calido  → sin abrigo. Era el bug.
--   Ushuaia en julio  -1,3 /  3,9  → frio               → solo abrigo
--   Ushuaia en enero   5,9 / 14,5  → frio + fresco      → sigue sin ojotas
--   Salta en julio     4,6 / 21,9  → frio+fresco+templado → campera Y remera,
--                                    que es lo correcto: amanece helando y a la
--                                    tarde hay 22 grados

insert into climate_thresholds (id, temp_max) values ('fresco', 18)
on conflict (id) do nothing;

update climate_thresholds set temp_max = 18 where id = 'fresco';

-- Reetiquetado del catálogo. Es la contraparte obligatoria: sin esto ningún
-- ítem menciona 'fresco' y ese bucket no aporta nada.
--
-- Los genéricos suman 'fresco' porque sirven siempre. Los de abrigo intermedio
-- —buzo, pantalón largo, botas— pasan de [frio, templado] a [frio, fresco], que
-- es el cambio que saca el polar de Río. Los de playa y los de abrigo pesado no
-- se tocan.

update packing_catalog
set climate_tags = array['frio', 'fresco', 'templado', 'calido']
where climate_tags @> array['frio', 'templado', 'calido']
  and array_length(climate_tags, 1) = 3;

update packing_catalog
set climate_tags = array['frio', 'fresco']
where climate_tags = array['frio', 'templado'];
