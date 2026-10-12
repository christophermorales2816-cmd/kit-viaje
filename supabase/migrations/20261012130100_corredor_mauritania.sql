-- Mauritania, con Nuakchot como ciudad base: es la capital y por donde entra
-- casi todo el que viaja. Precios en uguiyas, sin centavos.
--
-- Entra con aviso (spec, 15.9): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son la
-- capital, el Banc d'Arguin, el Adrar —Atar, Chinguetti, Uadane, Terjit y el
-- Ojo del Sahara— y el río Senegal. Ninguna está al norte del trópico de
-- Cáncer, en el este ni cerca de las fronteras con Malí, Argelia o el Sahara
-- Occidental; por eso no está Nuadibú, pegada a esa frontera.
--
-- Desierto con costa. Nuakchot y el Banc d'Arguin tienen el calor templado por
-- el Atlántico y casi no ven lluvia. El Adrar es Sahara: de mayo a septiembre
-- pasa los cuarenta grados, y Atar llega a cuarenta y tres en junio; en
-- invierno, los días son agradables y las noches, frescas. El río Senegal, en
-- el sur, tiene una temporada de lluvias corta, de julio a septiembre.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Ojo del Sahara (Guelb er Richât) en enero: 10,6 / 27,6 → fresco + templado + calido → capas, playa
--   Atar en junio: 27 / 43,4 → calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ae00 a ae08, la base es ae00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ae00', 'Nuakchot',                                  'mauritania', 'MRU', true,  'nuakchot'),
  ('00000000-0000-4000-8000-00000000ae01', 'Parque Nacional del Banc d''Arguin (Iwik)', 'mauritania', 'MRU', false, 'banc-darguin'),
  ('00000000-0000-4000-8000-00000000ae02', 'Atar',                                      'mauritania', 'MRU', false, 'atar'),
  ('00000000-0000-4000-8000-00000000ae03', 'Chinguetti',                                'mauritania', 'MRU', false, 'chinguetti'),
  ('00000000-0000-4000-8000-00000000ae04', 'Uadane',                                    'mauritania', 'MRU', false, 'uadane'),
  ('00000000-0000-4000-8000-00000000ae05', 'Ojo del Sahara (Guelb er Richât)',          'mauritania', 'MRU', false, 'ojo-del-sahara'),
  ('00000000-0000-4000-8000-00000000ae06', 'Terjit (oasis)',                            'mauritania', 'MRU', false, 'terjit'),
  ('00000000-0000-4000-8000-00000000ae07', 'Rosso (río Senegal)',                       'mauritania', 'MRU', false, 'rosso'),
  ('00000000-0000-4000-8000-00000000ae08', 'Parque Nacional del Diawling',              'mauritania', 'MRU', false, 'diawling')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Nuakchot
  ('00000000-0000-4000-8000-00000000ae00',  1,  14.3,  28.6,   1),
  ('00000000-0000-4000-8000-00000000ae00',  2,  15.6,  30.4,   1),
  ('00000000-0000-4000-8000-00000000ae00',  3,  17.2,  31.6,   0),
  ('00000000-0000-4000-8000-00000000ae00',  4,  18.4,  32.0,   0),
  ('00000000-0000-4000-8000-00000000ae00',  5,  20.6,  32.8,   0),
  ('00000000-0000-4000-8000-00000000ae00',  6,  23.0,  33.4,   1),
  ('00000000-0000-4000-8000-00000000ae00',  7,  24.6,  32.2,   6),
  ('00000000-0000-4000-8000-00000000ae00',  8,  25.4,  32.6,  13),
  ('00000000-0000-4000-8000-00000000ae00',  9,  25.4,  34.0,  10),
  ('00000000-0000-4000-8000-00000000ae00', 10,  23.6,  34.0,   3),
  ('00000000-0000-4000-8000-00000000ae00', 11,  19.6,  31.8,   1),
  ('00000000-0000-4000-8000-00000000ae00', 12,  15.6,  28.8,   1),
  -- Parque Nacional del Banc d'Arguin (Iwik)
  ('00000000-0000-4000-8000-00000000ae01',  1,  14.0,  26.4,   1),
  ('00000000-0000-4000-8000-00000000ae01',  2,  14.8,  27.6,   1),
  ('00000000-0000-4000-8000-00000000ae01',  3,  15.8,  28.4,   0),
  ('00000000-0000-4000-8000-00000000ae01',  4,  16.6,  28.6,   0),
  ('00000000-0000-4000-8000-00000000ae01',  5,  17.8,  29.2,   0),
  ('00000000-0000-4000-8000-00000000ae01',  6,  19.6,  30.2,   0),
  ('00000000-0000-4000-8000-00000000ae01',  7,  21.0,  30.4,   3),
  ('00000000-0000-4000-8000-00000000ae01',  8,  22.4,  31.6,   6),
  ('00000000-0000-4000-8000-00000000ae01',  9,  22.8,  32.6,   6),
  ('00000000-0000-4000-8000-00000000ae01', 10,  21.4,  31.6,   3),
  ('00000000-0000-4000-8000-00000000ae01', 11,  18.4,  29.6,   1),
  ('00000000-0000-4000-8000-00000000ae01', 12,  15.2,  26.8,   1),
  -- Atar
  ('00000000-0000-4000-8000-00000000ae02',  1,  12.7,  28.3,   0),
  ('00000000-0000-4000-8000-00000000ae02',  2,  14.2,  31.0,   0),
  ('00000000-0000-4000-8000-00000000ae02',  3,  17.2,  34.4,   0),
  ('00000000-0000-4000-8000-00000000ae02',  4,  20.0,  37.8,   0),
  ('00000000-0000-4000-8000-00000000ae02',  5,  23.6,  41.0,   0),
  ('00000000-0000-4000-8000-00000000ae02',  6,  27.0,  43.4,   3),
  ('00000000-0000-4000-8000-00000000ae02',  7,  27.4,  42.0,   6),
  ('00000000-0000-4000-8000-00000000ae02',  8,  27.3,  41.0,  13),
  ('00000000-0000-4000-8000-00000000ae02',  9,  26.4,  40.3,   6),
  ('00000000-0000-4000-8000-00000000ae02', 10,  22.3,  36.9,   1),
  ('00000000-0000-4000-8000-00000000ae02', 11,  17.2,  31.9,   0),
  ('00000000-0000-4000-8000-00000000ae02', 12,  13.4,  28.0,   0),
  -- Chinguetti
  ('00000000-0000-4000-8000-00000000ae03',  1,  11.4,  27.4,   0),
  ('00000000-0000-4000-8000-00000000ae03',  2,  12.8,  30.0,   0),
  ('00000000-0000-4000-8000-00000000ae03',  3,  15.8,  33.4,   0),
  ('00000000-0000-4000-8000-00000000ae03',  4,  18.8,  36.8,   0),
  ('00000000-0000-4000-8000-00000000ae03',  5,  22.4,  40.0,   0),
  ('00000000-0000-4000-8000-00000000ae03',  6,  25.8,  42.4,   3),
  ('00000000-0000-4000-8000-00000000ae03',  7,  26.4,  41.2,   6),
  ('00000000-0000-4000-8000-00000000ae03',  8,  26.2,  40.2,  13),
  ('00000000-0000-4000-8000-00000000ae03',  9,  25.4,  39.4,   6),
  ('00000000-0000-4000-8000-00000000ae03', 10,  21.2,  36.0,   1),
  ('00000000-0000-4000-8000-00000000ae03', 11,  16.0,  31.0,   0),
  ('00000000-0000-4000-8000-00000000ae03', 12,  12.2,  27.0,   0),
  -- Uadane
  ('00000000-0000-4000-8000-00000000ae04',  1,  11.0,  27.6,   0),
  ('00000000-0000-4000-8000-00000000ae04',  2,  12.6,  30.4,   0),
  ('00000000-0000-4000-8000-00000000ae04',  3,  15.6,  33.8,   0),
  ('00000000-0000-4000-8000-00000000ae04',  4,  18.8,  37.2,   0),
  ('00000000-0000-4000-8000-00000000ae04',  5,  22.4,  40.6,   0),
  ('00000000-0000-4000-8000-00000000ae04',  6,  26.0,  43.0,   3),
  ('00000000-0000-4000-8000-00000000ae04',  7,  26.6,  41.8,   3),
  ('00000000-0000-4000-8000-00000000ae04',  8,  26.4,  40.6,  10),
  ('00000000-0000-4000-8000-00000000ae04',  9,  25.4,  39.8,   6),
  ('00000000-0000-4000-8000-00000000ae04', 10,  21.0,  36.4,   1),
  ('00000000-0000-4000-8000-00000000ae04', 11,  15.6,  31.2,   0),
  ('00000000-0000-4000-8000-00000000ae04', 12,  11.8,  27.2,   0),
  -- Ojo del Sahara (Guelb er Richât)
  ('00000000-0000-4000-8000-00000000ae05',  1,  10.6,  27.6,   0),
  ('00000000-0000-4000-8000-00000000ae05',  2,  12.2,  30.4,   0),
  ('00000000-0000-4000-8000-00000000ae05',  3,  15.2,  33.8,   0),
  ('00000000-0000-4000-8000-00000000ae05',  4,  18.4,  37.2,   0),
  ('00000000-0000-4000-8000-00000000ae05',  5,  22.0,  40.6,   0),
  ('00000000-0000-4000-8000-00000000ae05',  6,  25.6,  43.0,   3),
  ('00000000-0000-4000-8000-00000000ae05',  7,  26.2,  41.8,   3),
  ('00000000-0000-4000-8000-00000000ae05',  8,  26.0,  40.6,  10),
  ('00000000-0000-4000-8000-00000000ae05',  9,  25.0,  39.8,   6),
  ('00000000-0000-4000-8000-00000000ae05', 10,  20.6,  36.4,   1),
  ('00000000-0000-4000-8000-00000000ae05', 11,  15.2,  31.2,   0),
  ('00000000-0000-4000-8000-00000000ae05', 12,  11.4,  27.2,   0),
  -- Terjit (oasis)
  ('00000000-0000-4000-8000-00000000ae06',  1,  12.8,  28.0,   0),
  ('00000000-0000-4000-8000-00000000ae06',  2,  14.4,  30.6,   0),
  ('00000000-0000-4000-8000-00000000ae06',  3,  17.4,  34.0,   0),
  ('00000000-0000-4000-8000-00000000ae06',  4,  20.2,  37.4,   0),
  ('00000000-0000-4000-8000-00000000ae06',  5,  23.8,  40.6,   0),
  ('00000000-0000-4000-8000-00000000ae06',  6,  27.0,  43.0,   3),
  ('00000000-0000-4000-8000-00000000ae06',  7,  27.4,  41.6,   6),
  ('00000000-0000-4000-8000-00000000ae06',  8,  27.2,  40.6,  13),
  ('00000000-0000-4000-8000-00000000ae06',  9,  26.4,  40.0,   6),
  ('00000000-0000-4000-8000-00000000ae06', 10,  22.4,  36.6,   1),
  ('00000000-0000-4000-8000-00000000ae06', 11,  17.4,  31.6,   0),
  ('00000000-0000-4000-8000-00000000ae06', 12,  13.6,  27.8,   0),
  -- Rosso (río Senegal)
  ('00000000-0000-4000-8000-00000000ae07',  1,  14.2,  30.5,   0),
  ('00000000-0000-4000-8000-00000000ae07',  2,  15.8,  33.6,   0),
  ('00000000-0000-4000-8000-00000000ae07',  3,  18.0,  36.4,   0),
  ('00000000-0000-4000-8000-00000000ae07',  4,  20.0,  38.6,   0),
  ('00000000-0000-4000-8000-00000000ae07',  5,  22.6,  40.0,   1),
  ('00000000-0000-4000-8000-00000000ae07',  6,  24.6,  39.0,   6),
  ('00000000-0000-4000-8000-00000000ae07',  7,  25.0,  36.0,  16),
  ('00000000-0000-4000-8000-00000000ae07',  8,  24.8,  34.4,  29),
  ('00000000-0000-4000-8000-00000000ae07',  9,  24.6,  35.2,  23),
  ('00000000-0000-4000-8000-00000000ae07', 10,  23.0,  37.0,   6),
  ('00000000-0000-4000-8000-00000000ae07', 11,  18.4,  35.0,   1),
  ('00000000-0000-4000-8000-00000000ae07', 12,  15.0,  30.8,   0),
  -- Parque Nacional del Diawling
  ('00000000-0000-4000-8000-00000000ae08',  1,  16.0,  29.0,   0),
  ('00000000-0000-4000-8000-00000000ae08',  2,  16.8,  31.0,   0),
  ('00000000-0000-4000-8000-00000000ae08',  3,  18.0,  32.4,   0),
  ('00000000-0000-4000-8000-00000000ae08',  4,  19.0,  32.0,   0),
  ('00000000-0000-4000-8000-00000000ae08',  5,  20.8,  32.0,   0),
  ('00000000-0000-4000-8000-00000000ae08',  6,  23.0,  32.6,   3),
  ('00000000-0000-4000-8000-00000000ae08',  7,  24.6,  32.2,  13),
  ('00000000-0000-4000-8000-00000000ae08',  8,  25.0,  32.0,  23),
  ('00000000-0000-4000-8000-00000000ae08',  9,  25.0,  33.0,  19),
  ('00000000-0000-4000-8000-00000000ae08', 10,  24.2,  33.6,   6),
  ('00000000-0000-4000-8000-00000000ae08', 11,  20.4,  32.4,   1),
  ('00000000-0000-4000-8000-00000000ae08', 12,  17.0,  29.6,   0)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Nuakchot, en MRU. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'comida', 'Desayuno (café o té con pan y algo en una cafetería)', 150, 'MRU', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'comida', 'Almuerzo (thieboudienne o plato del día)', 250, 'MRU', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'comida', 'Cena en restaurante', 600, 'MRU', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'comida', 'Compra en supermercado', 1200, 'MRU', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'comida', 'Brochettes o sándwich de carne al paso', 60, 'MRU', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'alojamiento', 'Hotel 3★, noche', 2400, 'MRU', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'alojamiento', 'Lavandería (una carga)', 200, 'MRU', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'alojamiento', 'Depósito de equipaje', 100, 'MRU', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'alojamiento', 'Propinas y servicio', 100, 'MRU', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'transporte', 'Taxi colectivo, día', 100, 'MRU', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'transporte', 'Taxi, viaje corto', 150, 'MRU', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 800, 'MRU', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 600, 'MRU', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 200, 'MRU', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'entretenimiento', 'Visita guiada', 1000, 'MRU', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'entretenimiento', 'Entrada a museo', 100, 'MRU', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'entretenimiento', 'Salida nocturna', 400, 'MRU', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ae00'::uuid, 'entretenimiento', 'Excursión de día completo', 4000, 'MRU', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ae01'::uuid, 1.40),  -- Parque Nacional del Banc d'Arguin (Iwik)
  ('00000000-0000-4000-8000-00000000ae02'::uuid, 0.80),  -- Atar
  ('00000000-0000-4000-8000-00000000ae03'::uuid, 0.80),  -- Chinguetti
  ('00000000-0000-4000-8000-00000000ae04'::uuid, 0.85),  -- Uadane
  ('00000000-0000-4000-8000-00000000ae05'::uuid, 1.20),  -- Ojo del Sahara (Guelb er Richât)
  ('00000000-0000-4000-8000-00000000ae06'::uuid, 0.80),  -- Terjit (oasis)
  ('00000000-0000-4000-8000-00000000ae07'::uuid, 0.65),  -- Rosso (río Senegal)
  ('00000000-0000-4000-8000-00000000ae08'::uuid, 0.90)  -- Parque Nacional del Diawling
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ae00'
on conflict (id) do nothing;
