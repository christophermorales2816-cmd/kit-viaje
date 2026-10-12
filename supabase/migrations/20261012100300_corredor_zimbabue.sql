-- Zimbabue, con Cataratas Victoria como ciudad base: es el pueblo junto a las
-- cataratas y por donde entra casi todo el que viaja, como Siem Reap en Camboya.
--
-- Precios en DÓLARES, con centavos, aunque la moneda oficial sea el ZiG. Es el
-- caso de Camboya: al viajero se le cobra en dólares el alojamiento, los parques,
-- las actividades y casi todo lo demás, y el corredor sigue en la moneda local
-- porque eso es lo que la guía explica.
--
-- Hemisferio sur. La meseta —Harare, Bulawayo— es templada, con lluvias de
-- noviembre a marzo e inviernos secos de noches frías. El valle del Zambeze
-- —Mana Pools, Kariba— es mucho más caluroso: octubre pasa los treinta y cinco
-- grados. Nyanga, en las tierras altas del este, es lo más fresco y lluvioso
-- del país.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Parque Nacional Hwange en julio: 4 / 24,5 → frio + fresco + templado → abrigo, cero playa
--   Mana Pools en octubre: 21,5 / 38 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-000000009800 a 9808, la base es 9800.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-000000009800', 'Cataratas Victoria',              'zimbabue', 'USD', true,  'cataratas-victoria'),
  ('00000000-0000-4000-8000-000000009801', 'Parque Nacional Hwange',          'zimbabue', 'USD', false, 'hwange'),
  ('00000000-0000-4000-8000-000000009802', 'Harare',                          'zimbabue', 'USD', false, 'harare'),
  ('00000000-0000-4000-8000-000000009803', 'Gran Zimbabue (Masvingo)',        'zimbabue', 'USD', false, 'gran-zimbabue'),
  ('00000000-0000-4000-8000-000000009804', 'Bulawayo',                        'zimbabue', 'USD', false, 'bulawayo'),
  ('00000000-0000-4000-8000-000000009805', 'Parque Nacional Matobo',          'zimbabue', 'USD', false, 'matobo'),
  ('00000000-0000-4000-8000-000000009806', 'Mana Pools',                      'zimbabue', 'USD', false, 'mana-pools'),
  ('00000000-0000-4000-8000-000000009807', 'Lago Kariba',                     'zimbabue', 'USD', false, 'kariba'),
  ('00000000-0000-4000-8000-000000009808', 'Nyanga (Tierras Altas del Este)', 'zimbabue', 'USD', false, 'nyanga')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Cataratas Victoria
  ('00000000-0000-4000-8000-000000009800',  1,  18.5,  29.5,  52),
  ('00000000-0000-4000-8000-000000009800',  2,  18.5,  29.5,  48),
  ('00000000-0000-4000-8000-000000009800',  3,  17.5,  29.5,  35),
  ('00000000-0000-4000-8000-000000009800',  4,  14.5,  29.0,  13),
  ('00000000-0000-4000-8000-000000009800',  5,  10.0,  27.0,   3),
  ('00000000-0000-4000-8000-000000009800',  6,   6.5,  24.5,   0),
  ('00000000-0000-4000-8000-000000009800',  7,   6.0,  24.5,   0),
  ('00000000-0000-4000-8000-000000009800',  8,   8.5,  27.5,   0),
  ('00000000-0000-4000-8000-000000009800',  9,  13.0,  31.5,   1),
  ('00000000-0000-4000-8000-000000009800', 10,  17.0,  33.5,   6),
  ('00000000-0000-4000-8000-000000009800', 11,  18.5,  32.5,  26),
  ('00000000-0000-4000-8000-000000009800', 12,  18.5,  30.0,  45),
  -- Parque Nacional Hwange
  ('00000000-0000-4000-8000-000000009801',  1,  18.5,  30.5,  45),
  ('00000000-0000-4000-8000-000000009801',  2,  18.0,  30.0,  42),
  ('00000000-0000-4000-8000-000000009801',  3,  16.5,  30.0,  29),
  ('00000000-0000-4000-8000-000000009801',  4,  13.0,  29.0,  10),
  ('00000000-0000-4000-8000-000000009801',  5,   8.0,  27.0,   2),
  ('00000000-0000-4000-8000-000000009801',  6,   4.5,  24.5,   0),
  ('00000000-0000-4000-8000-000000009801',  7,   4.0,  24.5,   0),
  ('00000000-0000-4000-8000-000000009801',  8,   7.0,  27.5,   0),
  ('00000000-0000-4000-8000-000000009801',  9,  12.0,  31.5,   1),
  ('00000000-0000-4000-8000-000000009801', 10,  16.5,  33.5,   5),
  ('00000000-0000-4000-8000-000000009801', 11,  18.0,  33.0,  23),
  ('00000000-0000-4000-8000-000000009801', 12,  18.5,  30.5,  39),
  -- Harare
  ('00000000-0000-4000-8000-000000009802',  1,  16.0,  26.0,  55),
  ('00000000-0000-4000-8000-000000009802',  2,  15.8,  26.0,  48),
  ('00000000-0000-4000-8000-000000009802',  3,  14.5,  26.0,  35),
  ('00000000-0000-4000-8000-000000009802',  4,  12.5,  25.0,  13),
  ('00000000-0000-4000-8000-000000009802',  5,   9.0,  23.0,   3),
  ('00000000-0000-4000-8000-000000009802',  6,   6.5,  20.5,   1),
  ('00000000-0000-4000-8000-000000009802',  7,   6.0,  20.5,   0),
  ('00000000-0000-4000-8000-000000009802',  8,   8.0,  23.0,   0),
  ('00000000-0000-4000-8000-000000009802',  9,  11.5,  26.5,   2),
  ('00000000-0000-4000-8000-000000009802', 10,  14.5,  28.5,  10),
  ('00000000-0000-4000-8000-000000009802', 11,  15.5,  27.5,  32),
  ('00000000-0000-4000-8000-000000009802', 12,  15.8,  26.0,  52),
  -- Gran Zimbabue (Masvingo)
  ('00000000-0000-4000-8000-000000009803',  1,  16.5,  28.0,  42),
  ('00000000-0000-4000-8000-000000009803',  2,  16.5,  27.5,  35),
  ('00000000-0000-4000-8000-000000009803',  3,  15.0,  27.0,  29),
  ('00000000-0000-4000-8000-000000009803',  4,  12.0,  25.5,  13),
  ('00000000-0000-4000-8000-000000009803',  5,   8.0,  23.5,   5),
  ('00000000-0000-4000-8000-000000009803',  6,   5.0,  21.0,   2),
  ('00000000-0000-4000-8000-000000009803',  7,   4.5,  21.0,   2),
  ('00000000-0000-4000-8000-000000009803',  8,   6.5,  23.5,   2),
  ('00000000-0000-4000-8000-000000009803',  9,  10.5,  27.0,   3),
  ('00000000-0000-4000-8000-000000009803', 10,  13.5,  29.0,  10),
  ('00000000-0000-4000-8000-000000009803', 11,  15.5,  28.5,  26),
  ('00000000-0000-4000-8000-000000009803', 12,  16.5,  28.0,  39),
  -- Bulawayo
  ('00000000-0000-4000-8000-000000009804',  1,  16.5,  27.5,  42),
  ('00000000-0000-4000-8000-000000009804',  2,  16.0,  27.0,  35),
  ('00000000-0000-4000-8000-000000009804',  3,  15.0,  26.5,  26),
  ('00000000-0000-4000-8000-000000009804',  4,  12.5,  25.0,  10),
  ('00000000-0000-4000-8000-000000009804',  5,   8.5,  23.0,   3),
  ('00000000-0000-4000-8000-000000009804',  6,   5.5,  20.5,   0),
  ('00000000-0000-4000-8000-000000009804',  7,   5.0,  20.5,   0),
  ('00000000-0000-4000-8000-000000009804',  8,   7.0,  23.5,   0),
  ('00000000-0000-4000-8000-000000009804',  9,  11.0,  27.0,   2),
  ('00000000-0000-4000-8000-000000009804', 10,  14.5,  29.0,   8),
  ('00000000-0000-4000-8000-000000009804', 11,  15.5,  28.5,  23),
  ('00000000-0000-4000-8000-000000009804', 12,  16.0,  27.5,  39),
  -- Parque Nacional Matobo
  ('00000000-0000-4000-8000-000000009805',  1,  16.0,  28.0,  42),
  ('00000000-0000-4000-8000-000000009805',  2,  15.5,  27.5,  35),
  ('00000000-0000-4000-8000-000000009805',  3,  14.5,  27.0,  26),
  ('00000000-0000-4000-8000-000000009805',  4,  11.5,  25.5,  10),
  ('00000000-0000-4000-8000-000000009805',  5,   7.5,  23.5,   3),
  ('00000000-0000-4000-8000-000000009805',  6,   4.5,  21.0,   0),
  ('00000000-0000-4000-8000-000000009805',  7,   4.0,  21.0,   0),
  ('00000000-0000-4000-8000-000000009805',  8,   6.0,  24.0,   0),
  ('00000000-0000-4000-8000-000000009805',  9,  10.0,  27.5,   2),
  ('00000000-0000-4000-8000-000000009805', 10,  13.5,  29.5,   8),
  ('00000000-0000-4000-8000-000000009805', 11,  15.0,  29.0,  23),
  ('00000000-0000-4000-8000-000000009805', 12,  15.5,  28.0,  39),
  -- Mana Pools
  ('00000000-0000-4000-8000-000000009806',  1,  22.0,  32.5,  48),
  ('00000000-0000-4000-8000-000000009806',  2,  21.5,  32.0,  45),
  ('00000000-0000-4000-8000-000000009806',  3,  21.0,  32.0,  32),
  ('00000000-0000-4000-8000-000000009806',  4,  18.5,  31.5,   8),
  ('00000000-0000-4000-8000-000000009806',  5,  14.0,  29.5,   1),
  ('00000000-0000-4000-8000-000000009806',  6,  10.5,  27.0,   0),
  ('00000000-0000-4000-8000-000000009806',  7,  10.0,  27.0,   0),
  ('00000000-0000-4000-8000-000000009806',  8,  12.5,  30.5,   0),
  ('00000000-0000-4000-8000-000000009806',  9,  17.5,  35.0,   0),
  ('00000000-0000-4000-8000-000000009806', 10,  21.5,  38.0,   3),
  ('00000000-0000-4000-8000-000000009806', 11,  22.5,  36.5,  19),
  ('00000000-0000-4000-8000-000000009806', 12,  22.0,  33.0,  42),
  -- Lago Kariba
  ('00000000-0000-4000-8000-000000009807',  1,  22.0,  31.5,  48),
  ('00000000-0000-4000-8000-000000009807',  2,  21.5,  31.0,  42),
  ('00000000-0000-4000-8000-000000009807',  3,  21.0,  31.0,  29),
  ('00000000-0000-4000-8000-000000009807',  4,  19.0,  30.5,   8),
  ('00000000-0000-4000-8000-000000009807',  5,  15.5,  28.5,   1),
  ('00000000-0000-4000-8000-000000009807',  6,  12.5,  26.0,   0),
  ('00000000-0000-4000-8000-000000009807',  7,  12.0,  26.0,   0),
  ('00000000-0000-4000-8000-000000009807',  8,  14.0,  29.0,   0),
  ('00000000-0000-4000-8000-000000009807',  9,  18.0,  33.0,   0),
  ('00000000-0000-4000-8000-000000009807', 10,  21.5,  35.5,   3),
  ('00000000-0000-4000-8000-000000009807', 11,  22.5,  34.5,  19),
  ('00000000-0000-4000-8000-000000009807', 12,  22.0,  32.0,  42),
  -- Nyanga (Tierras Altas del Este)
  ('00000000-0000-4000-8000-000000009808',  1,  13.0,  23.0,  62),
  ('00000000-0000-4000-8000-000000009808',  2,  13.0,  23.0,  55),
  ('00000000-0000-4000-8000-000000009808',  3,  12.0,  22.5,  45),
  ('00000000-0000-4000-8000-000000009808',  4,  10.0,  21.5,  23),
  ('00000000-0000-4000-8000-000000009808',  5,   7.0,  19.5,  10),
  ('00000000-0000-4000-8000-000000009808',  6,   4.5,  17.5,   6),
  ('00000000-0000-4000-8000-000000009808',  7,   4.0,  17.5,   6),
  ('00000000-0000-4000-8000-000000009808',  8,   5.5,  19.5,   5),
  ('00000000-0000-4000-8000-000000009808',  9,   8.5,  22.5,   6),
  ('00000000-0000-4000-8000-000000009808', 10,  11.0,  24.5,  16),
  ('00000000-0000-4000-8000-000000009808', 11,  12.0,  24.0,  42),
  ('00000000-0000-4000-8000-000000009808', 12,  12.5,  23.0,  58)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Cataratas Victoria, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-000000009800'::uuid, 'comida', 'Desayuno (café y algo en una cafetería)', 10, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'comida', 'Almuerzo (sadza o plato del día)', 15, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'comida', 'Cena en restaurante', 35, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'comida', 'Compra en supermercado', 50, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'comida', 'Algo al paso', 5, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'alojamiento', 'Hotel 3★, noche', 120, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'alojamiento', 'Depósito de equipaje', 5, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'alojamiento', 'Propinas y servicio', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'transporte', 'Combi o taxi compartido, día', 5, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'transporte', 'Taxi, viaje corto', 8, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 30, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'transporte', 'Bus entre ciudades, tramo', 25, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 50, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'entretenimiento', 'Visita guiada', 40, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-000000009800'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'USD', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
-- En USD se redondea al centavo: redondear a la unidad convertiría un
-- café de 2,50 en uno de 2 o de 3.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-000000009801'::uuid, 1.80),  -- Parque Nacional Hwange
  ('00000000-0000-4000-8000-000000009802'::uuid, 0.85),  -- Harare
  ('00000000-0000-4000-8000-000000009803'::uuid, 0.75),  -- Gran Zimbabue (Masvingo)
  ('00000000-0000-4000-8000-000000009804'::uuid, 0.70),  -- Bulawayo
  ('00000000-0000-4000-8000-000000009805'::uuid, 0.90),  -- Parque Nacional Matobo
  ('00000000-0000-4000-8000-000000009806'::uuid, 2.20),  -- Mana Pools
  ('00000000-0000-4000-8000-000000009807'::uuid, 1.20),  -- Lago Kariba
  ('00000000-0000-4000-8000-000000009808'::uuid, 0.80)  -- Nyanga (Tierras Altas del Este)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-000000009800'
on conflict (id) do nothing;

-- Los parques nacionales y Gran Zimbabue cobran a los extranjeros entradas de
-- pocas decenas de dólares por día, bastante menos que el sendero de las
-- cataratas, que es la atracción principal de la base. Derivada con el
-- factor, Mana Pools y Hwange salían a casi cien dólares por día.
update products
set base_price = 25
where destination_id in (
    '00000000-0000-4000-8000-000000009801', -- Hwange
    '00000000-0000-4000-8000-000000009803', -- Gran Zimbabue
    '00000000-0000-4000-8000-000000009805', -- Matobo
    '00000000-0000-4000-8000-000000009806', -- Mana Pools
    '00000000-0000-4000-8000-000000009807', -- Kariba
    '00000000-0000-4000-8000-000000009808'  -- Nyanga
  )
  and name = 'Entrada a la atracción principal';
