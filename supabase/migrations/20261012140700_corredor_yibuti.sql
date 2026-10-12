-- Yibuti, con la ciudad de Yibuti como base: es la capital y por donde entra
-- casi todo el que viaja. Precios en francos yibutianos, sin centavos: el
-- franco está atado al dólar desde hace décadas.
--
-- Las ciudades del planificador son la capital, el golfo de Tadjoura —las islas
-- Moucha, Arta, el Ghoubbet y Tadjoura—, los lagos Assal y Abbé, el bosque del
-- Day y el desierto del Grand Bara. Ninguna está cerca de la frontera con
-- Eritrea, adonde las recomendaciones de viaje piden no ir; al norte de Obock
-- hace falta, además, un permiso del gobierno.
--
-- Uno de los países más calurosos del mundo. De octubre a abril los días son
-- cálidos y agradables, con el mar en calma; de junio a septiembre sopla el
-- khamsin y el calor pasa los cuarenta grados: el lago Assal, a ciento
-- cincuenta metros bajo el nivel del mar, llega a cuarenta y cinco en julio.
-- Casi no llueve. El bosque del Day, a más de mil quinientos metros, es lo
-- único fresco.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Bosque del Day (montes Goda) en enero: 12,6 / 22 → fresco + templado → capas, cero playa
--   Lago Assal en julio: 33,4 / 45,6 → calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000bc00 a bc08, la base es bc00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000bc00', 'Yibuti',                            'yibuti', 'DJF', true,  'yibuti'),
  ('00000000-0000-4000-8000-00000000bc01', 'Islas Moucha',                      'yibuti', 'DJF', false, 'islas-moucha'),
  ('00000000-0000-4000-8000-00000000bc02', 'Playa de Arta (tiburones ballena)', 'yibuti', 'DJF', false, 'arta'),
  ('00000000-0000-4000-8000-00000000bc03', 'Golfo de Ghoubbet',                 'yibuti', 'DJF', false, 'ghoubbet'),
  ('00000000-0000-4000-8000-00000000bc04', 'Lago Assal',                        'yibuti', 'DJF', false, 'lago-assal'),
  ('00000000-0000-4000-8000-00000000bc05', 'Lago Abbé (chimeneas de piedra)',   'yibuti', 'DJF', false, 'lago-abbe'),
  ('00000000-0000-4000-8000-00000000bc06', 'Tadjoura',                          'yibuti', 'DJF', false, 'tadjoura'),
  ('00000000-0000-4000-8000-00000000bc07', 'Bosque del Day (montes Goda)',      'yibuti', 'DJF', false, 'bosque-del-day'),
  ('00000000-0000-4000-8000-00000000bc08', 'Desierto del Grand Bara',           'yibuti', 'DJF', false, 'grand-bara')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Yibuti
  ('00000000-0000-4000-8000-00000000bc00',  1,  21.6,  28.7,   3),
  ('00000000-0000-4000-8000-00000000bc00',  2,  22.4,  29.3,   3),
  ('00000000-0000-4000-8000-00000000bc00',  3,  23.6,  30.7,   3),
  ('00000000-0000-4000-8000-00000000bc00',  4,  25.0,  32.4,   3),
  ('00000000-0000-4000-8000-00000000bc00',  5,  27.2,  34.7,   3),
  ('00000000-0000-4000-8000-00000000bc00',  6,  29.4,  38.4,   0),
  ('00000000-0000-4000-8000-00000000bc00',  7,  30.8,  41.6,   3),
  ('00000000-0000-4000-8000-00000000bc00',  8,  30.0,  40.7,   3),
  ('00000000-0000-4000-8000-00000000bc00',  9,  28.6,  37.0,   3),
  ('00000000-0000-4000-8000-00000000bc00', 10,  25.6,  33.3,   3),
  ('00000000-0000-4000-8000-00000000bc00', 11,  23.6,  31.0,   3),
  ('00000000-0000-4000-8000-00000000bc00', 12,  22.2,  29.4,   3),
  -- Islas Moucha
  ('00000000-0000-4000-8000-00000000bc01',  1,  22.0,  27.8,   3),
  ('00000000-0000-4000-8000-00000000bc01',  2,  22.8,  28.4,   3),
  ('00000000-0000-4000-8000-00000000bc01',  3,  24.0,  29.8,   3),
  ('00000000-0000-4000-8000-00000000bc01',  4,  25.4,  31.4,   3),
  ('00000000-0000-4000-8000-00000000bc01',  5,  27.6,  33.6,   3),
  ('00000000-0000-4000-8000-00000000bc01',  6,  29.6,  37.0,   0),
  ('00000000-0000-4000-8000-00000000bc01',  7,  30.6,  40.2,   3),
  ('00000000-0000-4000-8000-00000000bc01',  8,  29.8,  39.4,   3),
  ('00000000-0000-4000-8000-00000000bc01',  9,  28.6,  36.0,   3),
  ('00000000-0000-4000-8000-00000000bc01', 10,  25.8,  32.4,   3),
  ('00000000-0000-4000-8000-00000000bc01', 11,  23.8,  30.2,   3),
  ('00000000-0000-4000-8000-00000000bc01', 12,  22.6,  28.6,   3),
  -- Playa de Arta (tiburones ballena)
  ('00000000-0000-4000-8000-00000000bc02',  1,  21.4,  28.6,   3),
  ('00000000-0000-4000-8000-00000000bc02',  2,  22.2,  29.2,   3),
  ('00000000-0000-4000-8000-00000000bc02',  3,  23.4,  30.6,   3),
  ('00000000-0000-4000-8000-00000000bc02',  4,  24.8,  32.2,   3),
  ('00000000-0000-4000-8000-00000000bc02',  5,  27.0,  34.6,   3),
  ('00000000-0000-4000-8000-00000000bc02',  6,  29.2,  38.2,   0),
  ('00000000-0000-4000-8000-00000000bc02',  7,  30.6,  41.4,   3),
  ('00000000-0000-4000-8000-00000000bc02',  8,  29.8,  40.6,   3),
  ('00000000-0000-4000-8000-00000000bc02',  9,  28.4,  36.8,   3),
  ('00000000-0000-4000-8000-00000000bc02', 10,  25.4,  33.2,   3),
  ('00000000-0000-4000-8000-00000000bc02', 11,  23.4,  30.8,   3),
  ('00000000-0000-4000-8000-00000000bc02', 12,  22.0,  29.2,   3),
  -- Golfo de Ghoubbet
  ('00000000-0000-4000-8000-00000000bc03',  1,  22.0,  29.6,   3),
  ('00000000-0000-4000-8000-00000000bc03',  2,  22.8,  30.4,   3),
  ('00000000-0000-4000-8000-00000000bc03',  3,  24.2,  32.0,   3),
  ('00000000-0000-4000-8000-00000000bc03',  4,  25.6,  33.8,   3),
  ('00000000-0000-4000-8000-00000000bc03',  5,  27.8,  36.4,   3),
  ('00000000-0000-4000-8000-00000000bc03',  6,  30.0,  40.0,   0),
  ('00000000-0000-4000-8000-00000000bc03',  7,  31.6,  43.0,   3),
  ('00000000-0000-4000-8000-00000000bc03',  8,  30.8,  42.0,   3),
  ('00000000-0000-4000-8000-00000000bc03',  9,  29.2,  38.4,   3),
  ('00000000-0000-4000-8000-00000000bc03', 10,  26.2,  34.6,   3),
  ('00000000-0000-4000-8000-00000000bc03', 11,  24.0,  32.0,   3),
  ('00000000-0000-4000-8000-00000000bc03', 12,  22.6,  30.2,   3),
  -- Lago Assal
  ('00000000-0000-4000-8000-00000000bc04',  1,  22.6,  30.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  2,  23.4,  31.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  3,  25.0,  33.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  4,  26.6,  35.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  5,  29.0,  38.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  6,  31.8,  42.6,   0),
  ('00000000-0000-4000-8000-00000000bc04',  7,  33.4,  45.6,   3),
  ('00000000-0000-4000-8000-00000000bc04',  8,  32.6,  44.4,   3),
  ('00000000-0000-4000-8000-00000000bc04',  9,  30.6,  40.8,   3),
  ('00000000-0000-4000-8000-00000000bc04', 10,  27.2,  36.4,   3),
  ('00000000-0000-4000-8000-00000000bc04', 11,  24.6,  33.2,   3),
  ('00000000-0000-4000-8000-00000000bc04', 12,  23.0,  31.2,   3),
  -- Lago Abbé (chimeneas de piedra)
  ('00000000-0000-4000-8000-00000000bc05',  1,  17.0,  29.6,   3),
  ('00000000-0000-4000-8000-00000000bc05',  2,  18.0,  30.6,   3),
  ('00000000-0000-4000-8000-00000000bc05',  3,  20.0,  32.6,   6),
  ('00000000-0000-4000-8000-00000000bc05',  4,  22.0,  34.6,   6),
  ('00000000-0000-4000-8000-00000000bc05',  5,  24.6,  37.6,   3),
  ('00000000-0000-4000-8000-00000000bc05',  6,  27.0,  40.6,   3),
  ('00000000-0000-4000-8000-00000000bc05',  7,  28.6,  42.6,   6),
  ('00000000-0000-4000-8000-00000000bc05',  8,  28.0,  41.6,  10),
  ('00000000-0000-4000-8000-00000000bc05',  9,  26.0,  38.6,   6),
  ('00000000-0000-4000-8000-00000000bc05', 10,  22.0,  35.0,   3),
  ('00000000-0000-4000-8000-00000000bc05', 11,  19.0,  32.0,   3),
  ('00000000-0000-4000-8000-00000000bc05', 12,  17.4,  30.0,   3),
  -- Tadjoura
  ('00000000-0000-4000-8000-00000000bc06',  1,  21.8,  29.1,   3),
  ('00000000-0000-4000-8000-00000000bc06',  2,  22.6,  29.7,   3),
  ('00000000-0000-4000-8000-00000000bc06',  3,  23.8,  31.1,   3),
  ('00000000-0000-4000-8000-00000000bc06',  4,  25.2,  32.8,   3),
  ('00000000-0000-4000-8000-00000000bc06',  5,  27.4,  35.1,   3),
  ('00000000-0000-4000-8000-00000000bc06',  6,  29.6,  38.8,   0),
  ('00000000-0000-4000-8000-00000000bc06',  7,  31.0,  42.0,   3),
  ('00000000-0000-4000-8000-00000000bc06',  8,  30.2,  41.1,   3),
  ('00000000-0000-4000-8000-00000000bc06',  9,  28.8,  37.4,   3),
  ('00000000-0000-4000-8000-00000000bc06', 10,  25.8,  33.7,   3),
  ('00000000-0000-4000-8000-00000000bc06', 11,  23.8,  31.4,   3),
  ('00000000-0000-4000-8000-00000000bc06', 12,  22.4,  29.8,   3),
  -- Bosque del Day (montes Goda)
  ('00000000-0000-4000-8000-00000000bc07',  1,  12.6,  22.0,   6),
  ('00000000-0000-4000-8000-00000000bc07',  2,  13.4,  22.6,   6),
  ('00000000-0000-4000-8000-00000000bc07',  3,  14.6,  24.0,  10),
  ('00000000-0000-4000-8000-00000000bc07',  4,  16.0,  25.6,  10),
  ('00000000-0000-4000-8000-00000000bc07',  5,  18.0,  27.6,   6),
  ('00000000-0000-4000-8000-00000000bc07',  6,  20.0,  30.0,   3),
  ('00000000-0000-4000-8000-00000000bc07',  7,  21.4,  32.0,  10),
  ('00000000-0000-4000-8000-00000000bc07',  8,  20.8,  31.2,  16),
  ('00000000-0000-4000-8000-00000000bc07',  9,  19.4,  28.6,  10),
  ('00000000-0000-4000-8000-00000000bc07', 10,  16.6,  25.6,   6),
  ('00000000-0000-4000-8000-00000000bc07', 11,  14.4,  23.6,   6),
  ('00000000-0000-4000-8000-00000000bc07', 12,  13.0,  22.4,   6),
  -- Desierto del Grand Bara
  ('00000000-0000-4000-8000-00000000bc08',  1,  17.6,  29.6,   3),
  ('00000000-0000-4000-8000-00000000bc08',  2,  18.4,  30.4,   3),
  ('00000000-0000-4000-8000-00000000bc08',  3,  20.0,  32.0,   3),
  ('00000000-0000-4000-8000-00000000bc08',  4,  21.6,  34.0,   3),
  ('00000000-0000-4000-8000-00000000bc08',  5,  24.0,  36.6,   3),
  ('00000000-0000-4000-8000-00000000bc08',  6,  26.6,  40.0,   0),
  ('00000000-0000-4000-8000-00000000bc08',  7,  28.0,  42.6,   3),
  ('00000000-0000-4000-8000-00000000bc08',  8,  27.4,  41.6,   3),
  ('00000000-0000-4000-8000-00000000bc08',  9,  25.6,  38.4,   3),
  ('00000000-0000-4000-8000-00000000bc08', 10,  21.6,  34.6,   3),
  ('00000000-0000-4000-8000-00000000bc08', 11,  19.0,  32.0,   3),
  ('00000000-0000-4000-8000-00000000bc08', 12,  17.8,  30.0,   3)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Yibuti, en DJF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'comida', 'Desayuno (café y algo en una cafetería)', 1200, 'DJF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'comida', 'Almuerzo (pescado a la yemení o plato del día)', 2000, 'DJF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'comida', 'Cena en restaurante', 5000, 'DJF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'comida', 'Compra en supermercado', 9000, 'DJF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'comida', 'Sambusa o lahoh al paso', 300, 'DJF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'alojamiento', 'Hotel 3★, noche', 25000, 'DJF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'alojamiento', 'Lavandería (una carga)', 2000, 'DJF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'alojamiento', 'Depósito de equipaje', 1000, 'DJF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'alojamiento', 'Propinas y servicio', 1000, 'DJF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'transporte', 'Minibús, día', 500, 'DJF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'transporte', 'Taxi, viaje corto', 1000, 'DJF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 2000, 'DJF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'transporte', 'Minibús o todoterreno entre pueblos, tramo', 3000, 'DJF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 2000, 'DJF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'entretenimiento', 'Visita guiada', 15000, 'DJF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'entretenimiento', 'Entrada a museo', 1000, 'DJF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'entretenimiento', 'Salida nocturna', 5000, 'DJF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000bc00'::uuid, 'entretenimiento', 'Excursión de día completo', 30000, 'DJF', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-00000000bc01'::uuid, 1.30),  -- Islas Moucha
  ('00000000-0000-4000-8000-00000000bc02'::uuid, 1.10),  -- Playa de Arta (tiburones ballena)
  ('00000000-0000-4000-8000-00000000bc03'::uuid, 1.10),  -- Golfo de Ghoubbet
  ('00000000-0000-4000-8000-00000000bc04'::uuid, 0.90),  -- Lago Assal
  ('00000000-0000-4000-8000-00000000bc05'::uuid, 1.20),  -- Lago Abbé (chimeneas de piedra)
  ('00000000-0000-4000-8000-00000000bc06'::uuid, 0.80),  -- Tadjoura
  ('00000000-0000-4000-8000-00000000bc07'::uuid, 0.90),  -- Bosque del Day (montes Goda)
  ('00000000-0000-4000-8000-00000000bc08'::uuid, 0.90)  -- Desierto del Grand Bara
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000bc00'
on conflict (id) do nothing;
