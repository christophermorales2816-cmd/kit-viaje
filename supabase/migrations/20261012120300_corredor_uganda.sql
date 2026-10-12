-- Uganda, con Kampala como ciudad base: es la capital, a menos de una hora del
-- aeropuerto de Entebbe. Precios en chelines ugandeses, sin centavos.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son
-- Kampala, Entebbe, Jinja, los parques del oeste y del norte y el monte Elgon;
-- ninguna está en Karamoja ni sobre la frontera con Sudán del Sur. El Parque
-- Nacional Reina Isabel, que varias recomendaciones señalan, queda afuera;
-- Bwindi está cerca de la frontera con el Congo, y la guía lo dice.
--
-- Sobre el ecuador y en altura: calor templado todo el año, sin invierno, con
-- dos temporadas de lluvia, de marzo a mayo y de septiembre a noviembre. El
-- suroeste, en Bwindi y el lago Bunyonyi, es fresco de noche; Murchison, en el
-- norte, es lo más caluroso.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Lago Bunyonyi (Kabale) en julio: 9,8 / 23,2 → frio + fresco + templado → abrigo, cero playa
--   Cataratas Murchison en febrero: 20,6 / 34,4 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000a800 a a808, la base es a800.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000a800', 'Kampala',                         'uganda', 'UGX', true,  'kampala'),
  ('00000000-0000-4000-8000-00000000a801', 'Entebbe (lago Victoria)',         'uganda', 'UGX', false, 'entebbe'),
  ('00000000-0000-4000-8000-00000000a802', 'Jinja (fuente del Nilo)',         'uganda', 'UGX', false, 'jinja'),
  ('00000000-0000-4000-8000-00000000a803', 'Cataratas Murchison',             'uganda', 'UGX', false, 'murchison'),
  ('00000000-0000-4000-8000-00000000a804', 'Kibale (Fort Portal)',            'uganda', 'UGX', false, 'kibale'),
  ('00000000-0000-4000-8000-00000000a805', 'Parque Nacional Lago Mburo',      'uganda', 'UGX', false, 'mburo'),
  ('00000000-0000-4000-8000-00000000a806', 'Bwindi (gorilas)',                'uganda', 'UGX', false, 'bwindi'),
  ('00000000-0000-4000-8000-00000000a807', 'Lago Bunyonyi (Kabale)',          'uganda', 'UGX', false, 'bunyonyi'),
  ('00000000-0000-4000-8000-00000000a808', 'Cataratas de Sipi (monte Elgon)', 'uganda', 'UGX', false, 'sipi')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Kampala
  ('00000000-0000-4000-8000-00000000a800',  1,  17.6,  28.4,  26),
  ('00000000-0000-4000-8000-00000000a800',  2,  17.8,  28.6,  32),
  ('00000000-0000-4000-8000-00000000a800',  3,  17.6,  28.0,  52),
  ('00000000-0000-4000-8000-00000000a800',  4,  17.6,  27.0,  61),
  ('00000000-0000-4000-8000-00000000a800',  5,  17.4,  26.4,  52),
  ('00000000-0000-4000-8000-00000000a800',  6,  16.8,  26.0,  23),
  ('00000000-0000-4000-8000-00000000a800',  7,  16.4,  25.6,  19),
  ('00000000-0000-4000-8000-00000000a800',  8,  16.4,  26.0,  32),
  ('00000000-0000-4000-8000-00000000a800',  9,  16.6,  27.0,  42),
  ('00000000-0000-4000-8000-00000000a800', 10,  16.8,  27.4,  48),
  ('00000000-0000-4000-8000-00000000a800', 11,  16.8,  27.0,  52),
  ('00000000-0000-4000-8000-00000000a800', 12,  17.0,  27.4,  39),
  -- Entebbe (lago Victoria)
  ('00000000-0000-4000-8000-00000000a801',  1,  17.8,  26.8,  26),
  ('00000000-0000-4000-8000-00000000a801',  2,  18.0,  27.0,  35),
  ('00000000-0000-4000-8000-00000000a801',  3,  18.0,  26.6,  52),
  ('00000000-0000-4000-8000-00000000a801',  4,  18.0,  25.8,  65),
  ('00000000-0000-4000-8000-00000000a801',  5,  17.8,  25.4,  55),
  ('00000000-0000-4000-8000-00000000a801',  6,  17.2,  25.0,  29),
  ('00000000-0000-4000-8000-00000000a801',  7,  16.6,  24.6,  19),
  ('00000000-0000-4000-8000-00000000a801',  8,  16.6,  24.8,  26),
  ('00000000-0000-4000-8000-00000000a801',  9,  16.8,  25.6,  39),
  ('00000000-0000-4000-8000-00000000a801', 10,  17.2,  26.0,  45),
  ('00000000-0000-4000-8000-00000000a801', 11,  17.4,  25.8,  48),
  ('00000000-0000-4000-8000-00000000a801', 12,  17.6,  26.2,  39),
  -- Jinja (fuente del Nilo)
  ('00000000-0000-4000-8000-00000000a802',  1,  17.0,  28.6,  23),
  ('00000000-0000-4000-8000-00000000a802',  2,  17.4,  29.0,  32),
  ('00000000-0000-4000-8000-00000000a802',  3,  17.6,  28.6,  48),
  ('00000000-0000-4000-8000-00000000a802',  4,  17.6,  27.4,  58),
  ('00000000-0000-4000-8000-00000000a802',  5,  17.4,  26.8,  52),
  ('00000000-0000-4000-8000-00000000a802',  6,  16.6,  26.4,  29),
  ('00000000-0000-4000-8000-00000000a802',  7,  16.0,  26.0,  26),
  ('00000000-0000-4000-8000-00000000a802',  8,  16.2,  26.4,  35),
  ('00000000-0000-4000-8000-00000000a802',  9,  16.4,  27.4,  42),
  ('00000000-0000-4000-8000-00000000a802', 10,  16.8,  27.8,  45),
  ('00000000-0000-4000-8000-00000000a802', 11,  16.8,  27.4,  45),
  ('00000000-0000-4000-8000-00000000a802', 12,  16.8,  27.8,  32),
  -- Cataratas Murchison
  ('00000000-0000-4000-8000-00000000a803',  1,  19.6,  33.6,   6),
  ('00000000-0000-4000-8000-00000000a803',  2,  20.6,  34.4,  13),
  ('00000000-0000-4000-8000-00000000a803',  3,  21.2,  33.4,  29),
  ('00000000-0000-4000-8000-00000000a803',  4,  21.0,  31.6,  45),
  ('00000000-0000-4000-8000-00000000a803',  5,  20.6,  30.4,  52),
  ('00000000-0000-4000-8000-00000000a803',  6,  19.8,  29.6,  39),
  ('00000000-0000-4000-8000-00000000a803',  7,  19.4,  29.0,  39),
  ('00000000-0000-4000-8000-00000000a803',  8,  19.4,  29.4,  52),
  ('00000000-0000-4000-8000-00000000a803',  9,  19.6,  30.2,  52),
  ('00000000-0000-4000-8000-00000000a803', 10,  19.8,  30.6,  48),
  ('00000000-0000-4000-8000-00000000a803', 11,  19.8,  31.0,  29),
  ('00000000-0000-4000-8000-00000000a803', 12,  19.4,  32.4,  10),
  -- Kibale (Fort Portal)
  ('00000000-0000-4000-8000-00000000a804',  1,  14.0,  26.2,  23),
  ('00000000-0000-4000-8000-00000000a804',  2,  14.4,  26.6,  32),
  ('00000000-0000-4000-8000-00000000a804',  3,  14.8,  26.0,  48),
  ('00000000-0000-4000-8000-00000000a804',  4,  15.2,  25.0,  61),
  ('00000000-0000-4000-8000-00000000a804',  5,  15.0,  24.6,  55),
  ('00000000-0000-4000-8000-00000000a804',  6,  14.2,  24.4,  26),
  ('00000000-0000-4000-8000-00000000a804',  7,  13.6,  24.4,  19),
  ('00000000-0000-4000-8000-00000000a804',  8,  13.8,  24.6,  35),
  ('00000000-0000-4000-8000-00000000a804',  9,  14.0,  25.0,  52),
  ('00000000-0000-4000-8000-00000000a804', 10,  14.4,  25.0,  61),
  ('00000000-0000-4000-8000-00000000a804', 11,  14.6,  24.6,  58),
  ('00000000-0000-4000-8000-00000000a804', 12,  14.2,  25.0,  39),
  -- Parque Nacional Lago Mburo
  ('00000000-0000-4000-8000-00000000a805',  1,  15.6,  28.0,  26),
  ('00000000-0000-4000-8000-00000000a805',  2,  16.0,  28.6,  32),
  ('00000000-0000-4000-8000-00000000a805',  3,  16.0,  28.0,  45),
  ('00000000-0000-4000-8000-00000000a805',  4,  16.4,  27.0,  57),
  ('00000000-0000-4000-8000-00000000a805',  5,  16.0,  26.6,  39),
  ('00000000-0000-4000-8000-00000000a805',  6,  14.8,  26.8,  13),
  ('00000000-0000-4000-8000-00000000a805',  7,  14.2,  27.2,  10),
  ('00000000-0000-4000-8000-00000000a805',  8,  14.8,  28.0,  19),
  ('00000000-0000-4000-8000-00000000a805',  9,  15.2,  28.4,  37),
  ('00000000-0000-4000-8000-00000000a805', 10,  15.6,  27.6,  45),
  ('00000000-0000-4000-8000-00000000a805', 11,  15.6,  26.8,  50),
  ('00000000-0000-4000-8000-00000000a805', 12,  15.4,  27.0,  35),
  -- Bwindi (gorilas)
  ('00000000-0000-4000-8000-00000000a806',  1,  13.0,  24.0,  35),
  ('00000000-0000-4000-8000-00000000a806',  2,  13.4,  24.4,  42),
  ('00000000-0000-4000-8000-00000000a806',  3,  13.6,  23.8,  55),
  ('00000000-0000-4000-8000-00000000a806',  4,  13.8,  23.0,  65),
  ('00000000-0000-4000-8000-00000000a806',  5,  13.6,  22.6,  52),
  ('00000000-0000-4000-8000-00000000a806',  6,  12.8,  22.6,  23),
  ('00000000-0000-4000-8000-00000000a806',  7,  12.2,  22.8,  16),
  ('00000000-0000-4000-8000-00000000a806',  8,  12.6,  23.0,  29),
  ('00000000-0000-4000-8000-00000000a806',  9,  13.0,  23.2,  48),
  ('00000000-0000-4000-8000-00000000a806', 10,  13.4,  23.0,  58),
  ('00000000-0000-4000-8000-00000000a806', 11,  13.4,  22.6,  61),
  ('00000000-0000-4000-8000-00000000a806', 12,  13.0,  23.0,  48),
  -- Lago Bunyonyi (Kabale)
  ('00000000-0000-4000-8000-00000000a807',  1,  11.4,  23.8,  32),
  ('00000000-0000-4000-8000-00000000a807',  2,  11.6,  24.0,  39),
  ('00000000-0000-4000-8000-00000000a807',  3,  12.0,  23.6,  52),
  ('00000000-0000-4000-8000-00000000a807',  4,  12.4,  22.8,  61),
  ('00000000-0000-4000-8000-00000000a807',  5,  12.0,  22.6,  45),
  ('00000000-0000-4000-8000-00000000a807',  6,  10.6,  22.8,  13),
  ('00000000-0000-4000-8000-00000000a807',  7,   9.8,  23.2,   6),
  ('00000000-0000-4000-8000-00000000a807',  8,  10.4,  23.6,  19),
  ('00000000-0000-4000-8000-00000000a807',  9,  11.0,  23.6,  39),
  ('00000000-0000-4000-8000-00000000a807', 10,  11.6,  23.2,  52),
  ('00000000-0000-4000-8000-00000000a807', 11,  11.6,  22.6,  58),
  ('00000000-0000-4000-8000-00000000a807', 12,  11.4,  23.0,  45),
  -- Cataratas de Sipi (monte Elgon)
  ('00000000-0000-4000-8000-00000000a808',  1,  13.0,  25.6,  13),
  ('00000000-0000-4000-8000-00000000a808',  2,  13.6,  26.4,  23),
  ('00000000-0000-4000-8000-00000000a808',  3,  14.2,  25.6,  42),
  ('00000000-0000-4000-8000-00000000a808',  4,  14.4,  24.2,  58),
  ('00000000-0000-4000-8000-00000000a808',  5,  14.2,  23.2,  61),
  ('00000000-0000-4000-8000-00000000a808',  6,  13.6,  22.6,  48),
  ('00000000-0000-4000-8000-00000000a808',  7,  13.2,  22.0,  48),
  ('00000000-0000-4000-8000-00000000a808',  8,  13.2,  22.6,  55),
  ('00000000-0000-4000-8000-00000000a808',  9,  13.2,  23.6,  48),
  ('00000000-0000-4000-8000-00000000a808', 10,  13.4,  24.0,  42),
  ('00000000-0000-4000-8000-00000000a808', 11,  13.4,  24.0,  32),
  ('00000000-0000-4000-8000-00000000a808', 12,  13.0,  24.8,  16)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Kampala, en UGX. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'comida', 'Desayuno (rolex o algo en una cafetería)', 15000, 'UGX', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'comida', 'Almuerzo (matoke o plato del día)', 20000, 'UGX', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'comida', 'Cena en restaurante', 50000, 'UGX', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'comida', 'Compra en supermercado', 100000, 'UGX', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'comida', 'Rolex al paso', 4000, 'UGX', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'alojamiento', 'Hotel 3★, noche', 300000, 'UGX', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'alojamiento', 'Lavandería (una carga)', 20000, 'UGX', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'alojamiento', 'Depósito de equipaje', 10000, 'UGX', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'alojamiento', 'Propinas y servicio', 10000, 'UGX', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'transporte', 'Taxi colectivo o boda-boda, día', 10000, 'UGX', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'transporte', 'Viaje corto en app (Uber o SafeBoda)', 15000, 'UGX', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 120000, 'UGX', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'transporte', 'Bus entre ciudades, tramo', 40000, 'UGX', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 30000, 'UGX', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'entretenimiento', 'Visita guiada', 100000, 'UGX', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'entretenimiento', 'Entrada a museo', 15000, 'UGX', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'entretenimiento', 'Salida nocturna', 50000, 'UGX', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000a800'::uuid, 'entretenimiento', 'Excursión de día completo', 400000, 'UGX', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000a801'::uuid, 1.00),  -- Entebbe (lago Victoria)
  ('00000000-0000-4000-8000-00000000a802'::uuid, 0.90),  -- Jinja (fuente del Nilo)
  ('00000000-0000-4000-8000-00000000a803'::uuid, 1.80),  -- Cataratas Murchison
  ('00000000-0000-4000-8000-00000000a804'::uuid, 1.30),  -- Kibale (Fort Portal)
  ('00000000-0000-4000-8000-00000000a805'::uuid, 1.40),  -- Parque Nacional Lago Mburo
  ('00000000-0000-4000-8000-00000000a806'::uuid, 2.00),  -- Bwindi (gorilas)
  ('00000000-0000-4000-8000-00000000a807'::uuid, 1.10),  -- Lago Bunyonyi (Kabale)
  ('00000000-0000-4000-8000-00000000a808'::uuid, 0.85)  -- Cataratas de Sipi (monte Elgon)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000a800'
on conflict (id) do nothing;

-- Murchison, Kibale, el lago Mburo y Bwindi cobran a los extranjeros una
-- entrada diaria de parque nacional, bastante más cara que la atracción
-- principal de Kampala: derivada con el factor, salía a un tercio. El permiso
-- para ver gorilas o chimpancés va aparte y no entra en el presupuesto; la
-- guía lo dice.
update products
set base_price = 150000
where destination_id in (
    '00000000-0000-4000-8000-00000000a803', -- Murchison
    '00000000-0000-4000-8000-00000000a804', -- Kibale
    '00000000-0000-4000-8000-00000000a805', -- Lago Mburo
    '00000000-0000-4000-8000-00000000a806'  -- Bwindi
  )
  and name = 'Entrada a la atracción principal';
