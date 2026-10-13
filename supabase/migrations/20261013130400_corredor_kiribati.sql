-- Kiribati, con Tarawa como ciudad base: es la capital y por donde entra casi
-- todo el que viaja. Precios en dólares australianos, con centavos: es la
-- moneda del país, que acuña además sus propias monedas.
--
-- Las ciudades del planificador son las de las islas Gilbert —Tarawa, Betio,
-- Tarawa Norte, Abaiang, Marakei, Abemama y Butaritari— y Kiritimati y
-- Tabuaeran, en las islas de la Línea, a más de tres mil kilómetros al este.
-- Kiritimati tiene dos horas más que Tarawa: es el primer lugar del mundo en
-- empezar el día. Kiribati cruza el antimeridiano (spec, 16.4).
--
-- Calor húmedo y parejo todo el año, sobre el ecuador. En Tarawa llueve más de
-- diciembre a abril; Kiritimati, en una franja seca del Pacífico, llueve poco.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Kiritimati (isla de Navidad) en agosto: 23,8 / 30,4 → templado + calido → nunca abrigo, playa
--   Tarawa en octubre: 24,8 / 31,8 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000cc00 a cc08, la base es cc00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000cc00', 'Tarawa',                       'kiribati', 'AUD', true,  'tarawa'),
  ('00000000-0000-4000-8000-00000000cc01', 'Betio (la batalla de 1943)',   'kiribati', 'AUD', false, 'betio'),
  ('00000000-0000-4000-8000-00000000cc02', 'Tarawa Norte',                 'kiribati', 'AUD', false, 'tarawa-norte'),
  ('00000000-0000-4000-8000-00000000cc03', 'Abaiang',                      'kiribati', 'AUD', false, 'abaiang'),
  ('00000000-0000-4000-8000-00000000cc04', 'Marakei',                      'kiribati', 'AUD', false, 'marakei'),
  ('00000000-0000-4000-8000-00000000cc05', 'Abemama',                      'kiribati', 'AUD', false, 'abemama'),
  ('00000000-0000-4000-8000-00000000cc06', 'Butaritari',                   'kiribati', 'AUD', false, 'butaritari'),
  ('00000000-0000-4000-8000-00000000cc07', 'Kiritimati (isla de Navidad)', 'kiribati', 'AUD', false, 'kiritimati'),
  ('00000000-0000-4000-8000-00000000cc08', 'Tabuaeran (Fanning)',          'kiribati', 'AUD', false, 'tabuaeran')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Tarawa
  ('00000000-0000-4000-8000-00000000cc00',  1,  24.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cc00',  2,  24.8,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cc00',  3,  24.8,  31.2,  35),
  ('00000000-0000-4000-8000-00000000cc00',  4,  24.8,  31.4,  32),
  ('00000000-0000-4000-8000-00000000cc00',  5,  24.8,  31.4,  29),
  ('00000000-0000-4000-8000-00000000cc00',  6,  24.8,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cc00',  7,  24.6,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cc00',  8,  24.6,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cc00',  9,  24.8,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cc00', 10,  24.8,  31.8,  19),
  ('00000000-0000-4000-8000-00000000cc00', 11,  24.8,  31.6,  23),
  ('00000000-0000-4000-8000-00000000cc00', 12,  24.8,  31.2,  35),
  -- Betio (la batalla de 1943)
  ('00000000-0000-4000-8000-00000000cc01',  1,  24.8,  30.8,  42),
  ('00000000-0000-4000-8000-00000000cc01',  2,  24.8,  30.8,  39),
  ('00000000-0000-4000-8000-00000000cc01',  3,  24.8,  31.0,  35),
  ('00000000-0000-4000-8000-00000000cc01',  4,  24.8,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cc01',  5,  24.8,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc01',  6,  24.8,  31.2,  23),
  ('00000000-0000-4000-8000-00000000cc01',  7,  24.6,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cc01',  8,  24.6,  31.2,  23),
  ('00000000-0000-4000-8000-00000000cc01',  9,  24.8,  31.4,  19),
  ('00000000-0000-4000-8000-00000000cc01', 10,  24.8,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cc01', 11,  24.8,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cc01', 12,  24.8,  31.0,  35),
  -- Tarawa Norte
  ('00000000-0000-4000-8000-00000000cc02',  1,  24.8,  30.8,  45),
  ('00000000-0000-4000-8000-00000000cc02',  2,  24.8,  30.8,  42),
  ('00000000-0000-4000-8000-00000000cc02',  3,  24.8,  31.0,  38),
  ('00000000-0000-4000-8000-00000000cc02',  4,  24.8,  31.2,  35),
  ('00000000-0000-4000-8000-00000000cc02',  5,  24.8,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cc02',  6,  24.8,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cc02',  7,  24.6,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc02',  8,  24.6,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cc02',  9,  24.8,  31.4,  22),
  ('00000000-0000-4000-8000-00000000cc02', 10,  24.8,  31.6,  22),
  ('00000000-0000-4000-8000-00000000cc02', 11,  24.8,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cc02', 12,  24.8,  31.0,  38),
  -- Abaiang
  ('00000000-0000-4000-8000-00000000cc03',  1,  24.8,  30.8,  48),
  ('00000000-0000-4000-8000-00000000cc03',  2,  24.8,  30.8,  45),
  ('00000000-0000-4000-8000-00000000cc03',  3,  24.8,  31.0,  41),
  ('00000000-0000-4000-8000-00000000cc03',  4,  24.8,  31.2,  38),
  ('00000000-0000-4000-8000-00000000cc03',  5,  24.8,  31.2,  35),
  ('00000000-0000-4000-8000-00000000cc03',  6,  24.8,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc03',  7,  24.6,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cc03',  8,  24.6,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc03',  9,  24.8,  31.4,  25),
  ('00000000-0000-4000-8000-00000000cc03', 10,  24.8,  31.6,  25),
  ('00000000-0000-4000-8000-00000000cc03', 11,  24.8,  31.4,  29),
  ('00000000-0000-4000-8000-00000000cc03', 12,  24.8,  31.0,  41),
  -- Marakei
  ('00000000-0000-4000-8000-00000000cc04',  1,  24.8,  30.8,  48),
  ('00000000-0000-4000-8000-00000000cc04',  2,  24.8,  30.8,  45),
  ('00000000-0000-4000-8000-00000000cc04',  3,  24.8,  31.0,  41),
  ('00000000-0000-4000-8000-00000000cc04',  4,  24.8,  31.2,  38),
  ('00000000-0000-4000-8000-00000000cc04',  5,  24.8,  31.2,  35),
  ('00000000-0000-4000-8000-00000000cc04',  6,  24.8,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc04',  7,  24.6,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cc04',  8,  24.6,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc04',  9,  24.8,  31.4,  25),
  ('00000000-0000-4000-8000-00000000cc04', 10,  24.8,  31.6,  25),
  ('00000000-0000-4000-8000-00000000cc04', 11,  24.8,  31.4,  29),
  ('00000000-0000-4000-8000-00000000cc04', 12,  24.8,  31.0,  41),
  -- Abemama
  ('00000000-0000-4000-8000-00000000cc05',  1,  24.8,  31.0,  36),
  ('00000000-0000-4000-8000-00000000cc05',  2,  24.8,  31.0,  33),
  ('00000000-0000-4000-8000-00000000cc05',  3,  24.8,  31.2,  29),
  ('00000000-0000-4000-8000-00000000cc05',  4,  24.8,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cc05',  5,  24.8,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cc05',  6,  24.8,  31.4,  17),
  ('00000000-0000-4000-8000-00000000cc05',  7,  24.6,  31.4,  20),
  ('00000000-0000-4000-8000-00000000cc05',  8,  24.6,  31.4,  17),
  ('00000000-0000-4000-8000-00000000cc05',  9,  24.8,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cc05', 10,  24.8,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cc05', 11,  24.8,  31.6,  17),
  ('00000000-0000-4000-8000-00000000cc05', 12,  24.8,  31.2,  29),
  -- Butaritari
  ('00000000-0000-4000-8000-00000000cc06',  1,  24.8,  30.6,  58),
  ('00000000-0000-4000-8000-00000000cc06',  2,  24.8,  30.6,  55),
  ('00000000-0000-4000-8000-00000000cc06',  3,  24.8,  30.8,  51),
  ('00000000-0000-4000-8000-00000000cc06',  4,  24.8,  31.0,  48),
  ('00000000-0000-4000-8000-00000000cc06',  5,  24.8,  31.0,  45),
  ('00000000-0000-4000-8000-00000000cc06',  6,  24.8,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cc06',  7,  24.6,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cc06',  8,  24.6,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cc06',  9,  24.8,  31.2,  35),
  ('00000000-0000-4000-8000-00000000cc06', 10,  24.8,  31.4,  35),
  ('00000000-0000-4000-8000-00000000cc06', 11,  24.8,  31.2,  39),
  ('00000000-0000-4000-8000-00000000cc06', 12,  24.8,  30.8,  51),
  -- Kiritimati (isla de Navidad)
  ('00000000-0000-4000-8000-00000000cc07',  1,  24.0,  30.0,  26),
  ('00000000-0000-4000-8000-00000000cc07',  2,  24.2,  30.0,  26),
  ('00000000-0000-4000-8000-00000000cc07',  3,  24.4,  30.2,  32),
  ('00000000-0000-4000-8000-00000000cc07',  4,  24.6,  30.6,  35),
  ('00000000-0000-4000-8000-00000000cc07',  5,  24.6,  30.8,  29),
  ('00000000-0000-4000-8000-00000000cc07',  6,  24.4,  30.6,  23),
  ('00000000-0000-4000-8000-00000000cc07',  7,  24.0,  30.4,  23),
  ('00000000-0000-4000-8000-00000000cc07',  8,  23.8,  30.4,  16),
  ('00000000-0000-4000-8000-00000000cc07',  9,  23.8,  30.6,  13),
  ('00000000-0000-4000-8000-00000000cc07', 10,  23.8,  30.6,  13),
  ('00000000-0000-4000-8000-00000000cc07', 11,  23.8,  30.4,  16),
  ('00000000-0000-4000-8000-00000000cc07', 12,  23.8,  30.2,  19),
  -- Tabuaeran (Fanning)
  ('00000000-0000-4000-8000-00000000cc08',  1,  24.2,  30.2,  45),
  ('00000000-0000-4000-8000-00000000cc08',  2,  24.4,  30.2,  45),
  ('00000000-0000-4000-8000-00000000cc08',  3,  24.6,  30.4,  48),
  ('00000000-0000-4000-8000-00000000cc08',  4,  24.8,  30.8,  52),
  ('00000000-0000-4000-8000-00000000cc08',  5,  24.8,  31.0,  48),
  ('00000000-0000-4000-8000-00000000cc08',  6,  24.6,  30.8,  42),
  ('00000000-0000-4000-8000-00000000cc08',  7,  24.2,  30.6,  39),
  ('00000000-0000-4000-8000-00000000cc08',  8,  24.0,  30.6,  35),
  ('00000000-0000-4000-8000-00000000cc08',  9,  24.0,  30.8,  32),
  ('00000000-0000-4000-8000-00000000cc08', 10,  24.0,  30.8,  32),
  ('00000000-0000-4000-8000-00000000cc08', 11,  24.0,  30.6,  35),
  ('00000000-0000-4000-8000-00000000cc08', 12,  24.0,  30.4,  42)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Tarawa, en AUD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'comida', 'Desayuno (café y algo en un café)', 10, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'comida', 'Almuerzo (pescado con arroz o plato del día)', 12, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'comida', 'Cena en restaurante', 28, 'AUD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'comida', 'Compra en supermercado', 80, 'AUD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'comida', 'Pescado o pan al paso', 5, 'AUD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'alojamiento', 'Hotel 3★, noche', 150, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'AUD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'alojamiento', 'Propinas: en Kiribati no se acostumbran', 0, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'transporte', 'Minibús, día', 4, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'transporte', 'Taxi, viaje corto', 10, 'AUD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 20, 'AUD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'transporte', 'Vuelo interno, tramo', 250, 'AUD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 20, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'entretenimiento', 'Visita guiada', 60, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'entretenimiento', 'Entrada a museo', 5, 'AUD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'AUD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000cc00'::uuid, 'entretenimiento', 'Excursión de día completo', 100, 'AUD', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
-- En AUD se redondea al centavo: redondear a la unidad convertiría un
-- café de 2,50 en uno de 2 o de 3.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-00000000cc01'::uuid, 0.95),  -- Betio (la batalla de 1943)
  ('00000000-0000-4000-8000-00000000cc02'::uuid, 0.85),  -- Tarawa Norte
  ('00000000-0000-4000-8000-00000000cc03'::uuid, 0.85),  -- Abaiang
  ('00000000-0000-4000-8000-00000000cc04'::uuid, 0.85),  -- Marakei
  ('00000000-0000-4000-8000-00000000cc05'::uuid, 0.85),  -- Abemama
  ('00000000-0000-4000-8000-00000000cc06'::uuid, 0.85),  -- Butaritari
  ('00000000-0000-4000-8000-00000000cc07'::uuid, 1.20),  -- Kiritimati (isla de Navidad)
  ('00000000-0000-4000-8000-00000000cc08'::uuid, 1.00)  -- Tabuaeran (Fanning)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000cc00'
on conflict (id) do nothing;
