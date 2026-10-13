-- Nauru, con Yaren como ciudad base: es el distrito del gobierno y del
-- aeropuerto, porque Nauru no tiene capital oficial. Precios en dólares
-- australianos, con centavos.
--
-- Es el tercer país más chico del mundo: una sola isla que se rodea en auto en
-- menos de media hora, con una meseta central vaciada por un siglo de minería
-- de fosfato. Las ciudades del planificador son los distritos y lugares de esa
-- vuelta: Yaren, Meneng, Anibare, Anabar, Ewa, Aiwo, la laguna de Buada,
-- Command Ridge y la meseta del fosfato.
--
-- Calor húmedo y parejo todo el año, sobre el ecuador. Llueve más de noviembre
-- a febrero, y hay años enteros de sequía.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Laguna de Buada en junio: 24,4 / 31,6 → templado + calido → nunca abrigo, playa
--   La meseta del fosfato (Topside) en octubre: 24,6 / 32,2 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000cd00 a cd08, la base es cd00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000cd00', 'Yaren',                             'nauru', 'AUD', true,  'yaren'),
  ('00000000-0000-4000-8000-00000000cd01', 'Bahía de Anibare',                  'nauru', 'AUD', false, 'anibare'),
  ('00000000-0000-4000-8000-00000000cd02', 'Laguna de Buada',                   'nauru', 'AUD', false, 'laguna-buada'),
  ('00000000-0000-4000-8000-00000000cd03', 'Command Ridge (cañones japoneses)', 'nauru', 'AUD', false, 'command-ridge'),
  ('00000000-0000-4000-8000-00000000cd04', 'Meneng (costa sudeste)',            'nauru', 'AUD', false, 'meneng'),
  ('00000000-0000-4000-8000-00000000cd05', 'Anabar',                            'nauru', 'AUD', false, 'anabar'),
  ('00000000-0000-4000-8000-00000000cd06', 'Aiwo (el puerto del fosfato)',      'nauru', 'AUD', false, 'aiwo'),
  ('00000000-0000-4000-8000-00000000cd07', 'Ewa (costa norte)',                 'nauru', 'AUD', false, 'ewa'),
  ('00000000-0000-4000-8000-00000000cd08', 'La meseta del fosfato (Topside)',   'nauru', 'AUD', false, 'meseta-del-fosfato')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Yaren
  ('00000000-0000-4000-8000-00000000cd00',  1,  24.8,  31.4,  48),
  ('00000000-0000-4000-8000-00000000cd00',  2,  24.8,  31.2,  42),
  ('00000000-0000-4000-8000-00000000cd00',  3,  24.8,  31.2,  39),
  ('00000000-0000-4000-8000-00000000cd00',  4,  24.8,  31.4,  32),
  ('00000000-0000-4000-8000-00000000cd00',  5,  24.8,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cd00',  6,  24.6,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cd00',  7,  24.6,  31.4,  19),
  ('00000000-0000-4000-8000-00000000cd00',  8,  24.6,  31.6,  16),
  ('00000000-0000-4000-8000-00000000cd00',  9,  24.6,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd00', 10,  24.8,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cd00', 11,  24.8,  31.8,  19),
  ('00000000-0000-4000-8000-00000000cd00', 12,  24.8,  31.6,  35),
  -- Bahía de Anibare
  ('00000000-0000-4000-8000-00000000cd01',  1,  24.8,  31.2,  48),
  ('00000000-0000-4000-8000-00000000cd01',  2,  24.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cd01',  3,  24.8,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cd01',  4,  24.8,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cd01',  5,  24.8,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cd01',  6,  24.6,  31.2,  23),
  ('00000000-0000-4000-8000-00000000cd01',  7,  24.6,  31.2,  19),
  ('00000000-0000-4000-8000-00000000cd01',  8,  24.6,  31.4,  16),
  ('00000000-0000-4000-8000-00000000cd01',  9,  24.6,  31.4,  13),
  ('00000000-0000-4000-8000-00000000cd01', 10,  24.8,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd01', 11,  24.8,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cd01', 12,  24.8,  31.4,  35),
  -- Laguna de Buada
  ('00000000-0000-4000-8000-00000000cd02',  1,  24.6,  31.6,  48),
  ('00000000-0000-4000-8000-00000000cd02',  2,  24.6,  31.4,  42),
  ('00000000-0000-4000-8000-00000000cd02',  3,  24.6,  31.4,  39),
  ('00000000-0000-4000-8000-00000000cd02',  4,  24.6,  31.6,  32),
  ('00000000-0000-4000-8000-00000000cd02',  5,  24.6,  31.6,  26),
  ('00000000-0000-4000-8000-00000000cd02',  6,  24.4,  31.6,  23),
  ('00000000-0000-4000-8000-00000000cd02',  7,  24.4,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cd02',  8,  24.4,  31.8,  16),
  ('00000000-0000-4000-8000-00000000cd02',  9,  24.4,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cd02', 10,  24.6,  32.0,  13),
  ('00000000-0000-4000-8000-00000000cd02', 11,  24.6,  32.0,  19),
  ('00000000-0000-4000-8000-00000000cd02', 12,  24.6,  31.8,  35),
  -- Command Ridge (cañones japoneses)
  ('00000000-0000-4000-8000-00000000cd03',  1,  24.6,  31.6,  48),
  ('00000000-0000-4000-8000-00000000cd03',  2,  24.6,  31.4,  42),
  ('00000000-0000-4000-8000-00000000cd03',  3,  24.6,  31.4,  39),
  ('00000000-0000-4000-8000-00000000cd03',  4,  24.6,  31.6,  32),
  ('00000000-0000-4000-8000-00000000cd03',  5,  24.6,  31.6,  26),
  ('00000000-0000-4000-8000-00000000cd03',  6,  24.4,  31.6,  23),
  ('00000000-0000-4000-8000-00000000cd03',  7,  24.4,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cd03',  8,  24.4,  31.8,  16),
  ('00000000-0000-4000-8000-00000000cd03',  9,  24.4,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cd03', 10,  24.6,  32.0,  13),
  ('00000000-0000-4000-8000-00000000cd03', 11,  24.6,  32.0,  19),
  ('00000000-0000-4000-8000-00000000cd03', 12,  24.6,  31.8,  35),
  -- Meneng (costa sudeste)
  ('00000000-0000-4000-8000-00000000cd04',  1,  24.8,  31.4,  48),
  ('00000000-0000-4000-8000-00000000cd04',  2,  24.8,  31.2,  42),
  ('00000000-0000-4000-8000-00000000cd04',  3,  24.8,  31.2,  39),
  ('00000000-0000-4000-8000-00000000cd04',  4,  24.8,  31.4,  32),
  ('00000000-0000-4000-8000-00000000cd04',  5,  24.8,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cd04',  6,  24.6,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cd04',  7,  24.6,  31.4,  19),
  ('00000000-0000-4000-8000-00000000cd04',  8,  24.6,  31.6,  16),
  ('00000000-0000-4000-8000-00000000cd04',  9,  24.6,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd04', 10,  24.8,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cd04', 11,  24.8,  31.8,  19),
  ('00000000-0000-4000-8000-00000000cd04', 12,  24.8,  31.6,  35),
  -- Anabar
  ('00000000-0000-4000-8000-00000000cd05',  1,  24.8,  31.2,  48),
  ('00000000-0000-4000-8000-00000000cd05',  2,  24.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cd05',  3,  24.8,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cd05',  4,  24.8,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cd05',  5,  24.8,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cd05',  6,  24.6,  31.2,  23),
  ('00000000-0000-4000-8000-00000000cd05',  7,  24.6,  31.2,  19),
  ('00000000-0000-4000-8000-00000000cd05',  8,  24.6,  31.4,  16),
  ('00000000-0000-4000-8000-00000000cd05',  9,  24.6,  31.4,  13),
  ('00000000-0000-4000-8000-00000000cd05', 10,  24.8,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd05', 11,  24.8,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cd05', 12,  24.8,  31.4,  35),
  -- Aiwo (el puerto del fosfato)
  ('00000000-0000-4000-8000-00000000cd06',  1,  24.8,  31.4,  48),
  ('00000000-0000-4000-8000-00000000cd06',  2,  24.8,  31.2,  42),
  ('00000000-0000-4000-8000-00000000cd06',  3,  24.8,  31.2,  39),
  ('00000000-0000-4000-8000-00000000cd06',  4,  24.8,  31.4,  32),
  ('00000000-0000-4000-8000-00000000cd06',  5,  24.8,  31.4,  26),
  ('00000000-0000-4000-8000-00000000cd06',  6,  24.6,  31.4,  23),
  ('00000000-0000-4000-8000-00000000cd06',  7,  24.6,  31.4,  19),
  ('00000000-0000-4000-8000-00000000cd06',  8,  24.6,  31.6,  16),
  ('00000000-0000-4000-8000-00000000cd06',  9,  24.6,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd06', 10,  24.8,  31.8,  13),
  ('00000000-0000-4000-8000-00000000cd06', 11,  24.8,  31.8,  19),
  ('00000000-0000-4000-8000-00000000cd06', 12,  24.8,  31.6,  35),
  -- Ewa (costa norte)
  ('00000000-0000-4000-8000-00000000cd07',  1,  24.8,  31.2,  48),
  ('00000000-0000-4000-8000-00000000cd07',  2,  24.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cd07',  3,  24.8,  31.0,  39),
  ('00000000-0000-4000-8000-00000000cd07',  4,  24.8,  31.2,  32),
  ('00000000-0000-4000-8000-00000000cd07',  5,  24.8,  31.2,  26),
  ('00000000-0000-4000-8000-00000000cd07',  6,  24.6,  31.2,  23),
  ('00000000-0000-4000-8000-00000000cd07',  7,  24.6,  31.2,  19),
  ('00000000-0000-4000-8000-00000000cd07',  8,  24.6,  31.4,  16),
  ('00000000-0000-4000-8000-00000000cd07',  9,  24.6,  31.4,  13),
  ('00000000-0000-4000-8000-00000000cd07', 10,  24.8,  31.6,  13),
  ('00000000-0000-4000-8000-00000000cd07', 11,  24.8,  31.6,  19),
  ('00000000-0000-4000-8000-00000000cd07', 12,  24.8,  31.4,  35),
  -- La meseta del fosfato (Topside)
  ('00000000-0000-4000-8000-00000000cd08',  1,  24.6,  31.8,  48),
  ('00000000-0000-4000-8000-00000000cd08',  2,  24.6,  31.6,  42),
  ('00000000-0000-4000-8000-00000000cd08',  3,  24.6,  31.6,  39),
  ('00000000-0000-4000-8000-00000000cd08',  4,  24.6,  31.8,  32),
  ('00000000-0000-4000-8000-00000000cd08',  5,  24.6,  31.8,  26),
  ('00000000-0000-4000-8000-00000000cd08',  6,  24.4,  31.8,  23),
  ('00000000-0000-4000-8000-00000000cd08',  7,  24.4,  31.8,  19),
  ('00000000-0000-4000-8000-00000000cd08',  8,  24.4,  32.0,  16),
  ('00000000-0000-4000-8000-00000000cd08',  9,  24.4,  32.0,  13),
  ('00000000-0000-4000-8000-00000000cd08', 10,  24.6,  32.2,  13),
  ('00000000-0000-4000-8000-00000000cd08', 11,  24.6,  32.2,  19),
  ('00000000-0000-4000-8000-00000000cd08', 12,  24.6,  32.0,  35)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Yaren, en AUD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'comida', 'Desayuno (café y algo en un café)', 12, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'comida', 'Almuerzo (plato del día)', 15, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'comida', 'Cena en restaurante', 30, 'AUD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'comida', 'Compra en supermercado', 90, 'AUD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'comida', 'Pescado frito o comida china al paso', 8, 'AUD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'alojamiento', 'Hotel 3★, noche', 200, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'AUD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'alojamiento', 'Propinas: en Nauru no se acostumbran', 0, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'transporte', 'Auto alquilado, día', 70, 'AUD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'transporte', 'Viaje corto en auto', 10, 'AUD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 10, 'AUD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'transporte', 'Bicicleta alquilada, día', 25, 'AUD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 10, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'entretenimiento', 'Visita guiada', 50, 'AUD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'entretenimiento', 'Entrada a museo', 5, 'AUD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'AUD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000cd00'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'AUD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000cd01'::uuid, 1.00),  -- Bahía de Anibare
  ('00000000-0000-4000-8000-00000000cd02'::uuid, 1.00),  -- Laguna de Buada
  ('00000000-0000-4000-8000-00000000cd03'::uuid, 1.00),  -- Command Ridge (cañones japoneses)
  ('00000000-0000-4000-8000-00000000cd04'::uuid, 1.10),  -- Meneng (costa sudeste)
  ('00000000-0000-4000-8000-00000000cd05'::uuid, 1.00),  -- Anabar
  ('00000000-0000-4000-8000-00000000cd06'::uuid, 0.95),  -- Aiwo (el puerto del fosfato)
  ('00000000-0000-4000-8000-00000000cd07'::uuid, 1.00),  -- Ewa (costa norte)
  ('00000000-0000-4000-8000-00000000cd08'::uuid, 1.00)  -- La meseta del fosfato (Topside)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000cd00'
on conflict (id) do nothing;
