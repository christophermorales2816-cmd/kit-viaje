-- Papúa Nueva Guinea, con Port Moresby como ciudad base: es la capital y por
-- donde entra casi todo el que viaja. Precios en kinas, sin centavos.
--
-- Entra con aviso (spec, 16.2): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son la
-- capital, el comienzo del camino de Kokoda, Tufi, Alotau, Madang, Rabaul,
-- Kavieng, Kimbe y Goroka. Ninguna está en Hela, Southern Highlands, Enga ni el
-- centro de Bougainville, ni en las tierras altas fuera de Goroka.
--
-- Calor húmedo todo el año en la costa, con lluvias que cambian de un lugar a
-- otro: Port Moresby tiene una temporada seca de mayo a noviembre, y Madang,
-- Kimbe o Kavieng llueven casi todo el año. Goroka, a más de mil quinientos
-- metros, tiene días templados y noches frescas.
--
-- El transporte entre ciudades es casi todo en avión: desde la capital no hay
-- ruta a la costa norte ni a las tierras altas. Por eso el tramo de larga
-- distancia del presupuesto es un vuelo interno.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Goroka (tierras altas) en julio: 12,8 / 24,8 → fresco + templado → capas, cero playa
--   Port Moresby en diciembre: 23,8 / 32 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000c300 a c308, la base es c300.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000c300', 'Port Moresby',               'papua-nueva-guinea', 'PGK', true,  'port-moresby'),
  ('00000000-0000-4000-8000-00000000c301', 'Sogeri (camino de Kokoda)',  'papua-nueva-guinea', 'PGK', false, 'sogeri'),
  ('00000000-0000-4000-8000-00000000c302', 'Tufi (fiordos)',             'papua-nueva-guinea', 'PGK', false, 'tufi'),
  ('00000000-0000-4000-8000-00000000c303', 'Alotau (bahía Milne)',       'papua-nueva-guinea', 'PGK', false, 'alotau'),
  ('00000000-0000-4000-8000-00000000c304', 'Madang',                     'papua-nueva-guinea', 'PGK', false, 'madang'),
  ('00000000-0000-4000-8000-00000000c305', 'Rabaul y Kokopo (volcanes)', 'papua-nueva-guinea', 'PGK', false, 'rabaul'),
  ('00000000-0000-4000-8000-00000000c306', 'Kavieng (Nueva Irlanda)',    'papua-nueva-guinea', 'PGK', false, 'kavieng'),
  ('00000000-0000-4000-8000-00000000c307', 'Kimbe (Walindi, buceo)',     'papua-nueva-guinea', 'PGK', false, 'kimbe'),
  ('00000000-0000-4000-8000-00000000c308', 'Goroka (tierras altas)',     'papua-nueva-guinea', 'PGK', false, 'goroka')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Port Moresby
  ('00000000-0000-4000-8000-00000000c300',  1,  23.8,  31.6,  55),
  ('00000000-0000-4000-8000-00000000c300',  2,  23.8,  31.0,  58),
  ('00000000-0000-4000-8000-00000000c300',  3,  23.6,  30.8,  55),
  ('00000000-0000-4000-8000-00000000c300',  4,  23.4,  30.8,  42),
  ('00000000-0000-4000-8000-00000000c300',  5,  23.2,  30.6,  26),
  ('00000000-0000-4000-8000-00000000c300',  6,  22.6,  29.8,  19),
  ('00000000-0000-4000-8000-00000000c300',  7,  22.0,  29.0,  16),
  ('00000000-0000-4000-8000-00000000c300',  8,  22.2,  29.4,  16),
  ('00000000-0000-4000-8000-00000000c300',  9,  22.8,  30.2,  19),
  ('00000000-0000-4000-8000-00000000c300', 10,  23.4,  31.0,  23),
  ('00000000-0000-4000-8000-00000000c300', 11,  23.8,  31.8,  32),
  ('00000000-0000-4000-8000-00000000c300', 12,  23.8,  32.0,  45),
  -- Sogeri (camino de Kokoda)
  ('00000000-0000-4000-8000-00000000c301',  1,  20.4,  29.0,  65),
  ('00000000-0000-4000-8000-00000000c301',  2,  20.6,  28.4,  68),
  ('00000000-0000-4000-8000-00000000c301',  3,  20.4,  28.4,  65),
  ('00000000-0000-4000-8000-00000000c301',  4,  20.2,  28.4,  58),
  ('00000000-0000-4000-8000-00000000c301',  5,  19.8,  28.0,  45),
  ('00000000-0000-4000-8000-00000000c301',  6,  19.0,  27.2,  35),
  ('00000000-0000-4000-8000-00000000c301',  7,  18.4,  26.4,  32),
  ('00000000-0000-4000-8000-00000000c301',  8,  18.6,  26.8,  32),
  ('00000000-0000-4000-8000-00000000c301',  9,  19.2,  27.6,  35),
  ('00000000-0000-4000-8000-00000000c301', 10,  19.8,  28.4,  42),
  ('00000000-0000-4000-8000-00000000c301', 11,  20.2,  29.2,  48),
  ('00000000-0000-4000-8000-00000000c301', 12,  20.4,  29.4,  58),
  -- Tufi (fiordos)
  ('00000000-0000-4000-8000-00000000c302',  1,  23.4,  31.0,  61),
  ('00000000-0000-4000-8000-00000000c302',  2,  23.4,  30.8,  61),
  ('00000000-0000-4000-8000-00000000c302',  3,  23.4,  30.6,  61),
  ('00000000-0000-4000-8000-00000000c302',  4,  23.2,  30.4,  55),
  ('00000000-0000-4000-8000-00000000c302',  5,  22.8,  30.0,  48),
  ('00000000-0000-4000-8000-00000000c302',  6,  22.2,  29.2,  42),
  ('00000000-0000-4000-8000-00000000c302',  7,  21.6,  28.6,  39),
  ('00000000-0000-4000-8000-00000000c302',  8,  21.6,  28.8,  39),
  ('00000000-0000-4000-8000-00000000c302',  9,  22.0,  29.4,  42),
  ('00000000-0000-4000-8000-00000000c302', 10,  22.6,  30.0,  45),
  ('00000000-0000-4000-8000-00000000c302', 11,  23.0,  30.6,  52),
  ('00000000-0000-4000-8000-00000000c302', 12,  23.2,  31.0,  58),
  -- Alotau (bahía Milne)
  ('00000000-0000-4000-8000-00000000c303',  1,  23.2,  30.8,  58),
  ('00000000-0000-4000-8000-00000000c303',  2,  23.2,  30.6,  61),
  ('00000000-0000-4000-8000-00000000c303',  3,  23.2,  30.2,  61),
  ('00000000-0000-4000-8000-00000000c303',  4,  23.0,  29.8,  58),
  ('00000000-0000-4000-8000-00000000c303',  5,  22.6,  29.0,  55),
  ('00000000-0000-4000-8000-00000000c303',  6,  22.0,  28.0,  55),
  ('00000000-0000-4000-8000-00000000c303',  7,  21.4,  27.2,  55),
  ('00000000-0000-4000-8000-00000000c303',  8,  21.4,  27.4,  52),
  ('00000000-0000-4000-8000-00000000c303',  9,  21.8,  28.2,  48),
  ('00000000-0000-4000-8000-00000000c303', 10,  22.4,  29.2,  45),
  ('00000000-0000-4000-8000-00000000c303', 11,  22.8,  30.2,  48),
  ('00000000-0000-4000-8000-00000000c303', 12,  23.0,  30.8,  52),
  -- Madang
  ('00000000-0000-4000-8000-00000000c304',  1,  22.8,  30.6,  68),
  ('00000000-0000-4000-8000-00000000c304',  2,  22.8,  30.4,  68),
  ('00000000-0000-4000-8000-00000000c304',  3,  22.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000c304',  4,  22.8,  30.6,  71),
  ('00000000-0000-4000-8000-00000000c304',  5,  22.8,  30.8,  61),
  ('00000000-0000-4000-8000-00000000c304',  6,  22.4,  30.6,  52),
  ('00000000-0000-4000-8000-00000000c304',  7,  22.2,  30.4,  48),
  ('00000000-0000-4000-8000-00000000c304',  8,  22.2,  30.6,  48),
  ('00000000-0000-4000-8000-00000000c304',  9,  22.4,  30.8,  52),
  ('00000000-0000-4000-8000-00000000c304', 10,  22.6,  31.0,  58),
  ('00000000-0000-4000-8000-00000000c304', 11,  22.8,  31.0,  61),
  ('00000000-0000-4000-8000-00000000c304', 12,  22.8,  30.8,  65),
  -- Rabaul y Kokopo (volcanes)
  ('00000000-0000-4000-8000-00000000c305',  1,  23.4,  31.4,  65),
  ('00000000-0000-4000-8000-00000000c305',  2,  23.4,  31.2,  61),
  ('00000000-0000-4000-8000-00000000c305',  3,  23.4,  31.2,  61),
  ('00000000-0000-4000-8000-00000000c305',  4,  23.4,  31.4,  55),
  ('00000000-0000-4000-8000-00000000c305',  5,  23.4,  31.6,  48),
  ('00000000-0000-4000-8000-00000000c305',  6,  23.2,  31.4,  45),
  ('00000000-0000-4000-8000-00000000c305',  7,  23.0,  31.2,  45),
  ('00000000-0000-4000-8000-00000000c305',  8,  23.0,  31.4,  45),
  ('00000000-0000-4000-8000-00000000c305',  9,  23.2,  31.6,  48),
  ('00000000-0000-4000-8000-00000000c305', 10,  23.4,  31.8,  48),
  ('00000000-0000-4000-8000-00000000c305', 11,  23.4,  31.8,  52),
  ('00000000-0000-4000-8000-00000000c305', 12,  23.4,  31.6,  61),
  -- Kavieng (Nueva Irlanda)
  ('00000000-0000-4000-8000-00000000c306',  1,  24.2,  30.6,  68),
  ('00000000-0000-4000-8000-00000000c306',  2,  24.2,  30.6,  65),
  ('00000000-0000-4000-8000-00000000c306',  3,  24.0,  30.6,  65),
  ('00000000-0000-4000-8000-00000000c306',  4,  24.0,  30.8,  61),
  ('00000000-0000-4000-8000-00000000c306',  5,  24.0,  30.8,  58),
  ('00000000-0000-4000-8000-00000000c306',  6,  23.8,  30.6,  55),
  ('00000000-0000-4000-8000-00000000c306',  7,  23.6,  30.4,  55),
  ('00000000-0000-4000-8000-00000000c306',  8,  23.6,  30.6,  55),
  ('00000000-0000-4000-8000-00000000c306',  9,  23.8,  30.8,  55),
  ('00000000-0000-4000-8000-00000000c306', 10,  24.0,  31.0,  58),
  ('00000000-0000-4000-8000-00000000c306', 11,  24.2,  31.0,  61),
  ('00000000-0000-4000-8000-00000000c306', 12,  24.2,  30.8,  65),
  -- Kimbe (Walindi, buceo)
  ('00000000-0000-4000-8000-00000000c307',  1,  23.2,  31.6,  71),
  ('00000000-0000-4000-8000-00000000c307',  2,  23.2,  31.4,  71),
  ('00000000-0000-4000-8000-00000000c307',  3,  23.2,  31.4,  71),
  ('00000000-0000-4000-8000-00000000c307',  4,  23.2,  31.4,  65),
  ('00000000-0000-4000-8000-00000000c307',  5,  23.2,  31.4,  55),
  ('00000000-0000-4000-8000-00000000c307',  6,  23.0,  31.0,  48),
  ('00000000-0000-4000-8000-00000000c307',  7,  22.8,  30.6,  45),
  ('00000000-0000-4000-8000-00000000c307',  8,  22.8,  30.8,  45),
  ('00000000-0000-4000-8000-00000000c307',  9,  23.0,  31.2,  48),
  ('00000000-0000-4000-8000-00000000c307', 10,  23.2,  31.6,  52),
  ('00000000-0000-4000-8000-00000000c307', 11,  23.2,  31.8,  58),
  ('00000000-0000-4000-8000-00000000c307', 12,  23.2,  31.8,  65),
  -- Goroka (tierras altas)
  ('00000000-0000-4000-8000-00000000c308',  1,  15.4,  26.2,  68),
  ('00000000-0000-4000-8000-00000000c308',  2,  15.4,  26.0,  68),
  ('00000000-0000-4000-8000-00000000c308',  3,  15.2,  26.0,  68),
  ('00000000-0000-4000-8000-00000000c308',  4,  15.0,  26.2,  61),
  ('00000000-0000-4000-8000-00000000c308',  5,  14.4,  25.8,  48),
  ('00000000-0000-4000-8000-00000000c308',  6,  13.4,  25.2,  35),
  ('00000000-0000-4000-8000-00000000c308',  7,  12.8,  24.8,  32),
  ('00000000-0000-4000-8000-00000000c308',  8,  12.8,  25.2,  35),
  ('00000000-0000-4000-8000-00000000c308',  9,  13.6,  25.8,  42),
  ('00000000-0000-4000-8000-00000000c308', 10,  14.4,  26.4,  52),
  ('00000000-0000-4000-8000-00000000c308', 11,  15.0,  26.6,  58),
  ('00000000-0000-4000-8000-00000000c308', 12,  15.4,  26.6,  65)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Port Moresby, en PGK. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'comida', 'Desayuno (café y algo en un café)', 35, 'PGK', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'comida', 'Almuerzo (plato del día)', 40, 'PGK', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'comida', 'Cena en restaurante', 120, 'PGK', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'comida', 'Compra en supermercado', 150, 'PGK', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'comida', 'Pollo o pescado frito al paso', 15, 'PGK', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'alojamiento', 'Hotel 3★, noche', 700, 'PGK', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'alojamiento', 'Lavandería (una carga)', 30, 'PGK', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'alojamiento', 'Depósito de equipaje', 20, 'PGK', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'alojamiento', 'Propinas: en Papúa Nueva Guinea no se acostumbran', 0, 'PGK', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'transporte', 'Auto con chofer del hotel, día', 250, 'PGK', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'transporte', 'Taxi del hotel, viaje corto', 50, 'PGK', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 80, 'PGK', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'transporte', 'Vuelo interno, tramo', 650, 'PGK', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 30, 'PGK', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'entretenimiento', 'Visita guiada', 200, 'PGK', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'PGK', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'entretenimiento', 'Salida nocturna', 100, 'PGK', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000c300'::uuid, 'entretenimiento', 'Excursión de día completo', 450, 'PGK', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000c301'::uuid, 0.85),  -- Sogeri (camino de Kokoda)
  ('00000000-0000-4000-8000-00000000c302'::uuid, 1.40),  -- Tufi (fiordos)
  ('00000000-0000-4000-8000-00000000c303'::uuid, 0.95),  -- Alotau (bahía Milne)
  ('00000000-0000-4000-8000-00000000c304'::uuid, 0.95),  -- Madang
  ('00000000-0000-4000-8000-00000000c305'::uuid, 0.95),  -- Rabaul y Kokopo (volcanes)
  ('00000000-0000-4000-8000-00000000c306'::uuid, 1.10),  -- Kavieng (Nueva Irlanda)
  ('00000000-0000-4000-8000-00000000c307'::uuid, 1.30),  -- Kimbe (Walindi, buceo)
  ('00000000-0000-4000-8000-00000000c308'::uuid, 0.85)  -- Goroka (tierras altas)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000c300'
on conflict (id) do nothing;
