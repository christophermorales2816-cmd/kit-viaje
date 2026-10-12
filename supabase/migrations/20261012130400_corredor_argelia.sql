-- Argelia, con Argel como ciudad base: es la capital y por donde entra casi
-- todo el que viaja.
--
-- Precios en DÓLARES, con centavos, aunque la moneda sea el dinar. Es el caso
-- de Malaui: la cotización oficial y la del mercado paralelo están muy lejos, y
-- un precio en dinares convertido a la oficial diría un costo que el viajero no
-- paga. El corredor sigue en dinares, con las dos cotizaciones, porque eso es
-- lo que la guía explica.
--
-- Las ciudades del planificador son las de la costa, las ruinas romanas del
-- interior y Ghardaïa, en el valle del M'zab. Ninguna está cerca de las
-- fronteras del sur y del este ni en el Sahara profundo —Tamanrasset, Djanet,
-- Illizi—, adonde las recomendaciones piden no ir; la guía lo dice como dato
-- de entrada, como Kenia con la frontera de Somalia.
--
-- Mediterráneo en la costa: veranos calurosos y secos, inviernos templados y
-- lluviosos. Tierra adentro, en Constantina, Djémila y Timgad, a más de
-- seiscientos metros, el invierno es frío, con heladas de noche. Ghardaïa ya
-- es Sahara: pasa los cuarenta grados en julio y casi no llueve.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Timgad (ruinas romanas) en enero: 0,4 / 10,8 → frio + fresco → abrigo, cero playa
--   Ghardaïa (valle del M'zab) en julio: 27 / 41 → calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000b100 a b108, la base es b100.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000b100', 'Argel',                       'argelia', 'USD', true,  'argel'),
  ('00000000-0000-4000-8000-00000000b101', 'Tipaza (ruinas romanas)',     'argelia', 'USD', false, 'tipaza'),
  ('00000000-0000-4000-8000-00000000b102', 'Orán',                        'argelia', 'USD', false, 'oran'),
  ('00000000-0000-4000-8000-00000000b103', 'Tlemcen',                     'argelia', 'USD', false, 'tlemcen'),
  ('00000000-0000-4000-8000-00000000b104', 'Béjaïa',                      'argelia', 'USD', false, 'bejaia'),
  ('00000000-0000-4000-8000-00000000b105', 'Constantina',                 'argelia', 'USD', false, 'constantina'),
  ('00000000-0000-4000-8000-00000000b106', 'Djémila (ruinas romanas)',    'argelia', 'USD', false, 'djemila'),
  ('00000000-0000-4000-8000-00000000b107', 'Timgad (ruinas romanas)',     'argelia', 'USD', false, 'timgad'),
  ('00000000-0000-4000-8000-00000000b108', 'Ghardaïa (valle del M''zab)', 'argelia', 'USD', false, 'ghardaia')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Argel
  ('00000000-0000-4000-8000-00000000b100',  1,   8.6,  16.8,  32),
  ('00000000-0000-4000-8000-00000000b100',  2,   8.8,  17.4,  32),
  ('00000000-0000-4000-8000-00000000b100',  3,  10.4,  19.4,  26),
  ('00000000-0000-4000-8000-00000000b100',  4,  12.2,  21.4,  23),
  ('00000000-0000-4000-8000-00000000b100',  5,  15.4,  24.4,  16),
  ('00000000-0000-4000-8000-00000000b100',  6,  19.0,  28.2,   7),
  ('00000000-0000-4000-8000-00000000b100',  7,  22.0,  31.2,   3),
  ('00000000-0000-4000-8000-00000000b100',  8,  22.8,  31.8,   6),
  ('00000000-0000-4000-8000-00000000b100',  9,  20.6,  29.0,  13),
  ('00000000-0000-4000-8000-00000000b100', 10,  17.0,  25.6,  19),
  ('00000000-0000-4000-8000-00000000b100', 11,  12.6,  20.8,  30),
  ('00000000-0000-4000-8000-00000000b100', 12,   9.8,  17.8,  32),
  -- Tipaza (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b101',  1,   8.8,  16.6,  32),
  ('00000000-0000-4000-8000-00000000b101',  2,   9.0,  17.2,  32),
  ('00000000-0000-4000-8000-00000000b101',  3,  10.6,  19.2,  26),
  ('00000000-0000-4000-8000-00000000b101',  4,  12.4,  21.2,  23),
  ('00000000-0000-4000-8000-00000000b101',  5,  15.6,  24.2,  16),
  ('00000000-0000-4000-8000-00000000b101',  6,  19.2,  28.0,   7),
  ('00000000-0000-4000-8000-00000000b101',  7,  22.2,  31.0,   3),
  ('00000000-0000-4000-8000-00000000b101',  8,  23.0,  31.6,   6),
  ('00000000-0000-4000-8000-00000000b101',  9,  20.8,  28.8,  13),
  ('00000000-0000-4000-8000-00000000b101', 10,  17.2,  25.4,  19),
  ('00000000-0000-4000-8000-00000000b101', 11,  12.8,  20.6,  30),
  ('00000000-0000-4000-8000-00000000b101', 12,  10.0,  17.6,  32),
  -- Orán
  ('00000000-0000-4000-8000-00000000b102',  1,   7.0,  17.0,  23),
  ('00000000-0000-4000-8000-00000000b102',  2,   7.8,  18.0,  23),
  ('00000000-0000-4000-8000-00000000b102',  3,   9.8,  20.2,  23),
  ('00000000-0000-4000-8000-00000000b102',  4,  11.6,  22.0,  19),
  ('00000000-0000-4000-8000-00000000b102',  5,  14.8,  25.0,  13),
  ('00000000-0000-4000-8000-00000000b102',  6,  18.4,  28.6,   3),
  ('00000000-0000-4000-8000-00000000b102',  7,  21.4,  31.4,   0),
  ('00000000-0000-4000-8000-00000000b102',  8,  22.2,  32.2,   3),
  ('00000000-0000-4000-8000-00000000b102',  9,  19.6,  29.4,  10),
  ('00000000-0000-4000-8000-00000000b102', 10,  16.0,  25.6,  16),
  ('00000000-0000-4000-8000-00000000b102', 11,  11.6,  21.0,  23),
  ('00000000-0000-4000-8000-00000000b102', 12,   8.6,  18.0,  23),
  -- Tlemcen
  ('00000000-0000-4000-8000-00000000b103',  1,   4.4,  14.6,  26),
  ('00000000-0000-4000-8000-00000000b103',  2,   5.0,  15.8,  26),
  ('00000000-0000-4000-8000-00000000b103',  3,   7.0,  18.4,  26),
  ('00000000-0000-4000-8000-00000000b103',  4,   8.6,  20.6,  23),
  ('00000000-0000-4000-8000-00000000b103',  5,  11.8,  24.4,  16),
  ('00000000-0000-4000-8000-00000000b103',  6,  15.6,  29.4,   6),
  ('00000000-0000-4000-8000-00000000b103',  7,  19.0,  33.6,   3),
  ('00000000-0000-4000-8000-00000000b103',  8,  19.6,  33.8,   3),
  ('00000000-0000-4000-8000-00000000b103',  9,  16.8,  29.4,  10),
  ('00000000-0000-4000-8000-00000000b103', 10,  12.8,  24.2,  16),
  ('00000000-0000-4000-8000-00000000b103', 11,   8.4,  18.6,  23),
  ('00000000-0000-4000-8000-00000000b103', 12,   5.6,  15.6,  26),
  -- Béjaïa
  ('00000000-0000-4000-8000-00000000b104',  1,   8.0,  16.8,  39),
  ('00000000-0000-4000-8000-00000000b104',  2,   8.2,  17.0,  35),
  ('00000000-0000-4000-8000-00000000b104',  3,   9.6,  18.8,  32),
  ('00000000-0000-4000-8000-00000000b104',  4,  11.4,  20.6,  29),
  ('00000000-0000-4000-8000-00000000b104',  5,  14.6,  23.4,  19),
  ('00000000-0000-4000-8000-00000000b104',  6,  18.2,  27.2,   7),
  ('00000000-0000-4000-8000-00000000b104',  7,  21.0,  30.4,   3),
  ('00000000-0000-4000-8000-00000000b104',  8,  22.0,  31.0,   6),
  ('00000000-0000-4000-8000-00000000b104',  9,  19.8,  28.8,  16),
  ('00000000-0000-4000-8000-00000000b104', 10,  16.4,  25.6,  26),
  ('00000000-0000-4000-8000-00000000b104', 11,  12.0,  20.8,  35),
  ('00000000-0000-4000-8000-00000000b104', 12,   9.2,  17.6,  39),
  -- Constantina
  ('00000000-0000-4000-8000-00000000b105',  1,   2.8,  12.6,  35),
  ('00000000-0000-4000-8000-00000000b105',  2,   3.2,  13.8,  32),
  ('00000000-0000-4000-8000-00000000b105',  3,   5.0,  16.6,  32),
  ('00000000-0000-4000-8000-00000000b105',  4,   7.2,  19.6,  29),
  ('00000000-0000-4000-8000-00000000b105',  5,  11.0,  24.6,  23),
  ('00000000-0000-4000-8000-00000000b105',  6,  15.4,  30.2,  10),
  ('00000000-0000-4000-8000-00000000b105',  7,  18.4,  34.0,   3),
  ('00000000-0000-4000-8000-00000000b105',  8,  18.8,  33.8,   6),
  ('00000000-0000-4000-8000-00000000b105',  9,  15.8,  28.8,  16),
  ('00000000-0000-4000-8000-00000000b105', 10,  11.6,  23.8,  23),
  ('00000000-0000-4000-8000-00000000b105', 11,   6.8,  17.4,  29),
  ('00000000-0000-4000-8000-00000000b105', 12,   3.8,  13.6,  35),
  -- Djémila (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b106',  1,   1.8,  11.4,  32),
  ('00000000-0000-4000-8000-00000000b106',  2,   2.4,  12.8,  29),
  ('00000000-0000-4000-8000-00000000b106',  3,   4.2,  15.6,  29),
  ('00000000-0000-4000-8000-00000000b106',  4,   6.4,  18.6,  29),
  ('00000000-0000-4000-8000-00000000b106',  5,  10.2,  23.6,  23),
  ('00000000-0000-4000-8000-00000000b106',  6,  14.6,  29.4,  10),
  ('00000000-0000-4000-8000-00000000b106',  7,  17.8,  33.4,   3),
  ('00000000-0000-4000-8000-00000000b106',  8,  18.0,  33.0,   6),
  ('00000000-0000-4000-8000-00000000b106',  9,  14.8,  27.8,  16),
  ('00000000-0000-4000-8000-00000000b106', 10,  10.6,  22.4,  23),
  ('00000000-0000-4000-8000-00000000b106', 11,   5.8,  16.2,  29),
  ('00000000-0000-4000-8000-00000000b106', 12,   2.8,  12.4,  32),
  -- Timgad (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b107',  1,   0.4,  10.8,  23),
  ('00000000-0000-4000-8000-00000000b107',  2,   1.2,  12.8,  23),
  ('00000000-0000-4000-8000-00000000b107',  3,   3.4,  16.0,  26),
  ('00000000-0000-4000-8000-00000000b107',  4,   6.0,  19.4,  26),
  ('00000000-0000-4000-8000-00000000b107',  5,  10.0,  24.6,  23),
  ('00000000-0000-4000-8000-00000000b107',  6,  14.4,  30.6,  13),
  ('00000000-0000-4000-8000-00000000b107',  7,  17.6,  34.4,   6),
  ('00000000-0000-4000-8000-00000000b107',  8,  17.6,  33.8,  10),
  ('00000000-0000-4000-8000-00000000b107',  9,  14.4,  28.4,  16),
  ('00000000-0000-4000-8000-00000000b107', 10,   9.8,  22.6,  19),
  ('00000000-0000-4000-8000-00000000b107', 11,   4.8,  15.8,  23),
  ('00000000-0000-4000-8000-00000000b107', 12,   1.4,  11.6,  23),
  -- Ghardaïa (valle del M'zab)
  ('00000000-0000-4000-8000-00000000b108',  1,   5.4,  17.2,   6),
  ('00000000-0000-4000-8000-00000000b108',  2,   7.0,  19.6,   6),
  ('00000000-0000-4000-8000-00000000b108',  3,  10.2,  23.4,   6),
  ('00000000-0000-4000-8000-00000000b108',  4,  13.8,  27.4,   6),
  ('00000000-0000-4000-8000-00000000b108',  5,  18.6,  32.4,   6),
  ('00000000-0000-4000-8000-00000000b108',  6,  23.6,  37.6,   3),
  ('00000000-0000-4000-8000-00000000b108',  7,  27.0,  41.0,   3),
  ('00000000-0000-4000-8000-00000000b108',  8,  26.4,  40.0,   3),
  ('00000000-0000-4000-8000-00000000b108',  9,  22.0,  34.6,   6),
  ('00000000-0000-4000-8000-00000000b108', 10,  16.6,  28.6,   6),
  ('00000000-0000-4000-8000-00000000b108', 11,  10.4,  21.8,   6),
  ('00000000-0000-4000-8000-00000000b108', 12,   6.4,  17.6,   6)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Argel, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'comida', 'Desayuno (café y croissant o msemen)', 4, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'comida', 'Almuerzo (chorba, cuscús o plato del día)', 7, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'comida', 'Cena en restaurante', 18, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'comida', 'Compra en supermercado', 30, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'comida', 'Garantita o mhajeb al paso', 2, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'alojamiento', 'Hotel 3★, noche', 70, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'alojamiento', 'Lavandería (una carga)', 6, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'alojamiento', 'Depósito de equipaje', 4, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'alojamiento', 'Propinas y servicio', 3, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'transporte', 'Metro, tranvía o bus, día', 2, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'transporte', 'Viaje corto en app (Yassir)', 4, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 15, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'transporte', 'Tren o bus entre ciudades, tramo', 12, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 3, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'entretenimiento', 'Visita guiada', 30, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'entretenimiento', 'Entrada a museo', 2, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'entretenimiento', 'Salida nocturna', 15, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000b100'::uuid, 'entretenimiento', 'Excursión de día completo', 80, 'USD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000b101'::uuid, 0.85),  -- Tipaza (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b102'::uuid, 0.90),  -- Orán
  ('00000000-0000-4000-8000-00000000b103'::uuid, 0.75),  -- Tlemcen
  ('00000000-0000-4000-8000-00000000b104'::uuid, 0.85),  -- Béjaïa
  ('00000000-0000-4000-8000-00000000b105'::uuid, 0.85),  -- Constantina
  ('00000000-0000-4000-8000-00000000b106'::uuid, 0.70),  -- Djémila (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b107'::uuid, 0.70),  -- Timgad (ruinas romanas)
  ('00000000-0000-4000-8000-00000000b108'::uuid, 0.80)  -- Ghardaïa (valle del M'zab)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000b100'
on conflict (id) do nothing;
