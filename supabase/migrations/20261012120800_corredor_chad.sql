-- Chad, con Yamena como ciudad base: es la capital y por donde entra casi
-- todo el que viaja. Precios en francos CFA de África Central, sin centavos, la
-- misma moneda que Camerún.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son la
-- capital, Zakouma, el Guéra, el lago Fitri y el sur. El norte —el Ennedi, los
-- lagos de Ounianga, el Tibesti—, el lago Chad y las zonas de frontera, adonde
-- las recomendaciones piden no ir, quedan afuera; la capital es la excepción,
-- frente a Camerún, del otro lado del río.
--
-- Sahel en el centro y sabana en el sur. En Yamena, abril y mayo pasan los
-- cuarenta grados y las lluvias van de junio a septiembre; hacia el sur, en
-- Sarh y Moundou, llueve más y por más tiempo, de mayo a octubre. Las noches de
-- diciembre y enero son frescas en todo el país.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Yamena en enero: 14,6 / 32,6 → fresco + templado + calido → capas, playa
--   Yamena en abril: 24,8 / 41 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ad00 a ad08, la base es ad00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ad00', 'Yamena',                   'chad', 'XAF', true,  'yamena'),
  ('00000000-0000-4000-8000-00000000ad01', 'Parque Nacional Zakouma',  'chad', 'XAF', false, 'zakouma'),
  ('00000000-0000-4000-8000-00000000ad02', 'Am Timan',                 'chad', 'XAF', false, 'am-timan'),
  ('00000000-0000-4000-8000-00000000ad03', 'Sarh (río Chari)',         'chad', 'XAF', false, 'sarh'),
  ('00000000-0000-4000-8000-00000000ad04', 'Parque Nacional de Manda', 'chad', 'XAF', false, 'manda'),
  ('00000000-0000-4000-8000-00000000ad05', 'Moundou',                  'chad', 'XAF', false, 'moundou'),
  ('00000000-0000-4000-8000-00000000ad06', 'Mongo (macizo del Guéra)', 'chad', 'XAF', false, 'mongo'),
  ('00000000-0000-4000-8000-00000000ad07', 'Bitkine (pico Abtouyour)', 'chad', 'XAF', false, 'bitkine'),
  ('00000000-0000-4000-8000-00000000ad08', 'Lago Fitri',               'chad', 'XAF', false, 'fitri')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Yamena
  ('00000000-0000-4000-8000-00000000ad00',  1,  14.6,  32.6,   0),
  ('00000000-0000-4000-8000-00000000ad00',  2,  17.0,  35.6,   0),
  ('00000000-0000-4000-8000-00000000ad00',  3,  21.4,  39.0,   0),
  ('00000000-0000-4000-8000-00000000ad00',  4,  24.8,  41.0,   3),
  ('00000000-0000-4000-8000-00000000ad00',  5,  26.6,  40.4,  16),
  ('00000000-0000-4000-8000-00000000ad00',  6,  25.4,  37.8,  29),
  ('00000000-0000-4000-8000-00000000ad00',  7,  23.2,  33.6,  48),
  ('00000000-0000-4000-8000-00000000ad00',  8,  22.6,  31.6,  61),
  ('00000000-0000-4000-8000-00000000ad00',  9,  22.6,  33.4,  39),
  ('00000000-0000-4000-8000-00000000ad00', 10,  22.0,  36.6,  10),
  ('00000000-0000-4000-8000-00000000ad00', 11,  18.0,  35.6,   0),
  ('00000000-0000-4000-8000-00000000ad00', 12,  15.2,  33.6,   0),
  -- Parque Nacional Zakouma
  ('00000000-0000-4000-8000-00000000ad01',  1,  16.4,  34.6,   0),
  ('00000000-0000-4000-8000-00000000ad01',  2,  19.4,  37.0,   0),
  ('00000000-0000-4000-8000-00000000ad01',  3,  22.6,  39.0,   3),
  ('00000000-0000-4000-8000-00000000ad01',  4,  24.8,  39.6,  10),
  ('00000000-0000-4000-8000-00000000ad01',  5,  24.6,  37.4,  26),
  ('00000000-0000-4000-8000-00000000ad01',  6,  22.8,  34.2,  45),
  ('00000000-0000-4000-8000-00000000ad01',  7,  21.6,  31.2,  61),
  ('00000000-0000-4000-8000-00000000ad01',  8,  21.2,  30.6,  68),
  ('00000000-0000-4000-8000-00000000ad01',  9,  21.0,  31.6,  55),
  ('00000000-0000-4000-8000-00000000ad01', 10,  20.6,  33.6,  19),
  ('00000000-0000-4000-8000-00000000ad01', 11,  17.6,  35.0,   0),
  ('00000000-0000-4000-8000-00000000ad01', 12,  15.6,  34.0,   0),
  -- Am Timan
  ('00000000-0000-4000-8000-00000000ad02',  1,  16.6,  34.8,   0),
  ('00000000-0000-4000-8000-00000000ad02',  2,  19.6,  37.2,   0),
  ('00000000-0000-4000-8000-00000000ad02',  3,  22.8,  39.2,   3),
  ('00000000-0000-4000-8000-00000000ad02',  4,  25.0,  39.8,  10),
  ('00000000-0000-4000-8000-00000000ad02',  5,  24.8,  37.6,  26),
  ('00000000-0000-4000-8000-00000000ad02',  6,  23.0,  34.4,  45),
  ('00000000-0000-4000-8000-00000000ad02',  7,  21.8,  31.4,  61),
  ('00000000-0000-4000-8000-00000000ad02',  8,  21.4,  30.8,  68),
  ('00000000-0000-4000-8000-00000000ad02',  9,  21.2,  31.8,  55),
  ('00000000-0000-4000-8000-00000000ad02', 10,  20.8,  33.8,  19),
  ('00000000-0000-4000-8000-00000000ad02', 11,  17.8,  35.2,   0),
  ('00000000-0000-4000-8000-00000000ad02', 12,  15.8,  34.2,   0),
  -- Sarh (río Chari)
  ('00000000-0000-4000-8000-00000000ad03',  1,  16.4,  33.6,   0),
  ('00000000-0000-4000-8000-00000000ad03',  2,  19.4,  36.0,   0),
  ('00000000-0000-4000-8000-00000000ad03',  3,  22.8,  37.6,   6),
  ('00000000-0000-4000-8000-00000000ad03',  4,  24.4,  37.4,  19),
  ('00000000-0000-4000-8000-00000000ad03',  5,  23.4,  35.0,  39),
  ('00000000-0000-4000-8000-00000000ad03',  6,  22.0,  32.4,  52),
  ('00000000-0000-4000-8000-00000000ad03',  7,  21.2,  30.4,  61),
  ('00000000-0000-4000-8000-00000000ad03',  8,  21.0,  30.0,  68),
  ('00000000-0000-4000-8000-00000000ad03',  9,  21.0,  31.0,  61),
  ('00000000-0000-4000-8000-00000000ad03', 10,  20.6,  32.6,  32),
  ('00000000-0000-4000-8000-00000000ad03', 11,  17.6,  34.0,   3),
  ('00000000-0000-4000-8000-00000000ad03', 12,  15.6,  33.4,   0),
  -- Parque Nacional de Manda
  ('00000000-0000-4000-8000-00000000ad04',  1,  16.0,  34.0,   0),
  ('00000000-0000-4000-8000-00000000ad04',  2,  19.0,  36.4,   0),
  ('00000000-0000-4000-8000-00000000ad04',  3,  22.6,  38.0,   6),
  ('00000000-0000-4000-8000-00000000ad04',  4,  24.2,  37.6,  19),
  ('00000000-0000-4000-8000-00000000ad04',  5,  23.2,  35.2,  39),
  ('00000000-0000-4000-8000-00000000ad04',  6,  21.8,  32.6,  52),
  ('00000000-0000-4000-8000-00000000ad04',  7,  21.0,  30.6,  61),
  ('00000000-0000-4000-8000-00000000ad04',  8,  20.8,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ad04',  9,  20.8,  31.2,  61),
  ('00000000-0000-4000-8000-00000000ad04', 10,  20.4,  32.8,  32),
  ('00000000-0000-4000-8000-00000000ad04', 11,  17.2,  34.4,   3),
  ('00000000-0000-4000-8000-00000000ad04', 12,  15.2,  33.8,   0),
  -- Moundou
  ('00000000-0000-4000-8000-00000000ad05',  1,  16.2,  33.8,   0),
  ('00000000-0000-4000-8000-00000000ad05',  2,  19.0,  36.2,   0),
  ('00000000-0000-4000-8000-00000000ad05',  3,  22.4,  37.8,   6),
  ('00000000-0000-4000-8000-00000000ad05',  4,  24.0,  37.2,  23),
  ('00000000-0000-4000-8000-00000000ad05',  5,  23.2,  34.6,  42),
  ('00000000-0000-4000-8000-00000000ad05',  6,  21.8,  32.0,  55),
  ('00000000-0000-4000-8000-00000000ad05',  7,  21.0,  30.0,  65),
  ('00000000-0000-4000-8000-00000000ad05',  8,  20.8,  29.6,  71),
  ('00000000-0000-4000-8000-00000000ad05',  9,  20.8,  30.6,  65),
  ('00000000-0000-4000-8000-00000000ad05', 10,  20.4,  32.4,  35),
  ('00000000-0000-4000-8000-00000000ad05', 11,  17.4,  34.0,   3),
  ('00000000-0000-4000-8000-00000000ad05', 12,  15.4,  33.6,   0),
  -- Mongo (macizo del Guéra)
  ('00000000-0000-4000-8000-00000000ad06',  1,  16.0,  33.6,   0),
  ('00000000-0000-4000-8000-00000000ad06',  2,  18.6,  36.0,   0),
  ('00000000-0000-4000-8000-00000000ad06',  3,  22.4,  38.6,   0),
  ('00000000-0000-4000-8000-00000000ad06',  4,  25.0,  39.4,   3),
  ('00000000-0000-4000-8000-00000000ad06',  5,  25.6,  38.4,  16),
  ('00000000-0000-4000-8000-00000000ad06',  6,  24.0,  36.0,  32),
  ('00000000-0000-4000-8000-00000000ad06',  7,  22.0,  32.4,  52),
  ('00000000-0000-4000-8000-00000000ad06',  8,  21.4,  30.8,  61),
  ('00000000-0000-4000-8000-00000000ad06',  9,  21.6,  32.6,  39),
  ('00000000-0000-4000-8000-00000000ad06', 10,  21.4,  35.0,   6),
  ('00000000-0000-4000-8000-00000000ad06', 11,  18.0,  35.0,   0),
  ('00000000-0000-4000-8000-00000000ad06', 12,  15.8,  33.6,   0),
  -- Bitkine (pico Abtouyour)
  ('00000000-0000-4000-8000-00000000ad07',  1,  15.4,  33.0,   0),
  ('00000000-0000-4000-8000-00000000ad07',  2,  18.0,  35.4,   0),
  ('00000000-0000-4000-8000-00000000ad07',  3,  21.8,  38.0,   0),
  ('00000000-0000-4000-8000-00000000ad07',  4,  24.4,  38.8,   3),
  ('00000000-0000-4000-8000-00000000ad07',  5,  25.0,  37.8,  19),
  ('00000000-0000-4000-8000-00000000ad07',  6,  23.4,  35.4,  35),
  ('00000000-0000-4000-8000-00000000ad07',  7,  21.4,  31.8,  55),
  ('00000000-0000-4000-8000-00000000ad07',  8,  20.8,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ad07',  9,  21.0,  32.0,  42),
  ('00000000-0000-4000-8000-00000000ad07', 10,  20.8,  34.4,  10),
  ('00000000-0000-4000-8000-00000000ad07', 11,  17.4,  34.4,   0),
  ('00000000-0000-4000-8000-00000000ad07', 12,  15.2,  33.0,   0),
  -- Lago Fitri
  ('00000000-0000-4000-8000-00000000ad08',  1,  15.0,  32.8,   0),
  ('00000000-0000-4000-8000-00000000ad08',  2,  17.6,  35.8,   0),
  ('00000000-0000-4000-8000-00000000ad08',  3,  21.6,  39.0,   0),
  ('00000000-0000-4000-8000-00000000ad08',  4,  25.0,  41.0,   0),
  ('00000000-0000-4000-8000-00000000ad08',  5,  26.8,  40.6,  10),
  ('00000000-0000-4000-8000-00000000ad08',  6,  26.0,  38.4,  23),
  ('00000000-0000-4000-8000-00000000ad08',  7,  24.0,  34.6,  42),
  ('00000000-0000-4000-8000-00000000ad08',  8,  23.0,  32.6,  55),
  ('00000000-0000-4000-8000-00000000ad08',  9,  23.2,  34.4,  29),
  ('00000000-0000-4000-8000-00000000ad08', 10,  22.4,  37.0,   3),
  ('00000000-0000-4000-8000-00000000ad08', 11,  18.6,  35.6,   0),
  ('00000000-0000-4000-8000-00000000ad08', 12,  15.6,  33.4,   0)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Yamena, en XAF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'comida', 'Desayuno (café y algo en una pastelería)', 2000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'comida', 'Almuerzo (boule o plato del día)', 3000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'comida', 'Cena en restaurante', 10000, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'comida', 'Compra en supermercado', 20000, 'XAF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'comida', 'Brochettes o beignets al paso', 500, 'XAF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'alojamiento', 'Hotel 3★, noche', 60000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'alojamiento', 'Lavandería (una carga)', 4000, 'XAF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'alojamiento', 'Depósito de equipaje', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'alojamiento', 'Propinas y servicio', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'transporte', 'Taxi colectivo o moto, día', 1500, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'transporte', 'Taxi, viaje corto', 2500, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 7000, 'XAF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 12000, 'XAF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'entretenimiento', 'Visita guiada', 20000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'entretenimiento', 'Entrada a museo', 2000, 'XAF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'entretenimiento', 'Salida nocturna', 10000, 'XAF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ad00'::uuid, 'entretenimiento', 'Excursión de día completo', 60000, 'XAF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ad01'::uuid, 2.50),  -- Parque Nacional Zakouma
  ('00000000-0000-4000-8000-00000000ad02'::uuid, 0.60),  -- Am Timan
  ('00000000-0000-4000-8000-00000000ad03'::uuid, 0.60),  -- Sarh (río Chari)
  ('00000000-0000-4000-8000-00000000ad04'::uuid, 0.80),  -- Parque Nacional de Manda
  ('00000000-0000-4000-8000-00000000ad05'::uuid, 0.65),  -- Moundou
  ('00000000-0000-4000-8000-00000000ad06'::uuid, 0.60),  -- Mongo (macizo del Guéra)
  ('00000000-0000-4000-8000-00000000ad07'::uuid, 0.55),  -- Bitkine (pico Abtouyour)
  ('00000000-0000-4000-8000-00000000ad08'::uuid, 0.55)  -- Lago Fitri
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ad00'
on conflict (id) do nothing;
