-- República Democrática del Congo, con Kinshasa como ciudad base: es la capital
-- y por donde entra casi todo el que viaja.
--
-- Precios en DÓLARES, con centavos, aunque la moneda sea el franco congoleño.
-- Es el caso de Camboya y Zimbabue: hoteles, restaurantes y casi todo lo que
-- paga un viajero se cobra en dólares, y el franco queda para el vuelto y las
-- compras chicas. El corredor sigue en francos congoleños, que es lo que la
-- guía explica.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son
-- Kinshasa, el Congo Central hasta el Atlántico y Lubumbashi; ninguna está en
-- el este (Kivu del Norte, Kivu del Sur, Ituri), donde están Goma, Bukavu y los
-- parques de los gorilas.
--
-- Calor húmedo todo el año en Kinshasa y el oeste, con una temporada seca, más
-- fresca y nublada, de junio a septiembre. Lubumbashi, en el sur y a más de mil
-- doscientos metros, tiene un invierno seco de noches frías.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Lubumbashi en julio: 6,2 / 25,2 → frio + fresco + templado + calido → abrigo, playa
--   Matadi en marzo: 22,8 / 32,4 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ac00 a ac08, la base es ac00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ac00', 'Kinshasa',                  'republica-democratica-del-congo', 'USD', true,  'kinshasa'),
  ('00000000-0000-4000-8000-00000000ac01', 'Lola ya Bonobo',            'republica-democratica-del-congo', 'USD', false, 'lola-ya-bonobo'),
  ('00000000-0000-4000-8000-00000000ac02', 'Kisantu (jardín botánico)', 'republica-democratica-del-congo', 'USD', false, 'kisantu'),
  ('00000000-0000-4000-8000-00000000ac03', 'Cataratas de Zongo',        'republica-democratica-del-congo', 'USD', false, 'zongo'),
  ('00000000-0000-4000-8000-00000000ac04', 'Mbanza-Ngungu (grutas)',    'republica-democratica-del-congo', 'USD', false, 'mbanza-ngungu'),
  ('00000000-0000-4000-8000-00000000ac05', 'Matadi',                    'republica-democratica-del-congo', 'USD', false, 'matadi'),
  ('00000000-0000-4000-8000-00000000ac06', 'Boma',                      'republica-democratica-del-congo', 'USD', false, 'boma'),
  ('00000000-0000-4000-8000-00000000ac07', 'Muanda (costa atlántica)',  'republica-democratica-del-congo', 'USD', false, 'muanda'),
  ('00000000-0000-4000-8000-00000000ac08', 'Lubumbashi',                'republica-democratica-del-congo', 'USD', false, 'lubumbashi')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Kinshasa
  ('00000000-0000-4000-8000-00000000ac00',  1,  21.6,  31.0,  39),
  ('00000000-0000-4000-8000-00000000ac00',  2,  21.8,  31.6,  39),
  ('00000000-0000-4000-8000-00000000ac00',  3,  22.0,  32.0,  45),
  ('00000000-0000-4000-8000-00000000ac00',  4,  22.2,  32.0,  52),
  ('00000000-0000-4000-8000-00000000ac00',  5,  21.8,  31.0,  32),
  ('00000000-0000-4000-8000-00000000ac00',  6,  19.6,  28.8,   3),
  ('00000000-0000-4000-8000-00000000ac00',  7,  18.0,  27.4,   1),
  ('00000000-0000-4000-8000-00000000ac00',  8,  18.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000ac00',  9,  20.2,  30.4,  19),
  ('00000000-0000-4000-8000-00000000ac00', 10,  21.4,  31.2,  42),
  ('00000000-0000-4000-8000-00000000ac00', 11,  21.8,  31.0,  58),
  ('00000000-0000-4000-8000-00000000ac00', 12,  21.6,  30.6,  52),
  -- Lola ya Bonobo
  ('00000000-0000-4000-8000-00000000ac01',  1,  21.6,  31.0,  39),
  ('00000000-0000-4000-8000-00000000ac01',  2,  21.8,  31.6,  39),
  ('00000000-0000-4000-8000-00000000ac01',  3,  22.0,  32.0,  45),
  ('00000000-0000-4000-8000-00000000ac01',  4,  22.2,  32.0,  52),
  ('00000000-0000-4000-8000-00000000ac01',  5,  21.8,  31.0,  32),
  ('00000000-0000-4000-8000-00000000ac01',  6,  19.6,  28.8,   3),
  ('00000000-0000-4000-8000-00000000ac01',  7,  18.0,  27.4,   1),
  ('00000000-0000-4000-8000-00000000ac01',  8,  18.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000ac01',  9,  20.2,  30.4,  19),
  ('00000000-0000-4000-8000-00000000ac01', 10,  21.4,  31.2,  42),
  ('00000000-0000-4000-8000-00000000ac01', 11,  21.8,  31.0,  58),
  ('00000000-0000-4000-8000-00000000ac01', 12,  21.6,  30.6,  52),
  -- Kisantu (jardín botánico)
  ('00000000-0000-4000-8000-00000000ac02',  1,  20.4,  30.0,  42),
  ('00000000-0000-4000-8000-00000000ac02',  2,  20.6,  30.6,  42),
  ('00000000-0000-4000-8000-00000000ac02',  3,  20.8,  31.0,  48),
  ('00000000-0000-4000-8000-00000000ac02',  4,  20.8,  30.8,  55),
  ('00000000-0000-4000-8000-00000000ac02',  5,  20.2,  29.6,  35),
  ('00000000-0000-4000-8000-00000000ac02',  6,  17.6,  27.2,   3),
  ('00000000-0000-4000-8000-00000000ac02',  7,  16.0,  25.8,   1),
  ('00000000-0000-4000-8000-00000000ac02',  8,  16.8,  27.0,   3),
  ('00000000-0000-4000-8000-00000000ac02',  9,  18.6,  29.0,  23),
  ('00000000-0000-4000-8000-00000000ac02', 10,  20.0,  30.0,  45),
  ('00000000-0000-4000-8000-00000000ac02', 11,  20.4,  30.0,  61),
  ('00000000-0000-4000-8000-00000000ac02', 12,  20.4,  29.6,  55),
  -- Cataratas de Zongo
  ('00000000-0000-4000-8000-00000000ac03',  1,  20.6,  30.4,  42),
  ('00000000-0000-4000-8000-00000000ac03',  2,  20.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000ac03',  3,  21.0,  31.4,  48),
  ('00000000-0000-4000-8000-00000000ac03',  4,  21.0,  31.2,  55),
  ('00000000-0000-4000-8000-00000000ac03',  5,  20.4,  30.0,  35),
  ('00000000-0000-4000-8000-00000000ac03',  6,  17.8,  27.6,   3),
  ('00000000-0000-4000-8000-00000000ac03',  7,  16.2,  26.2,   1),
  ('00000000-0000-4000-8000-00000000ac03',  8,  17.0,  27.4,   3),
  ('00000000-0000-4000-8000-00000000ac03',  9,  18.8,  29.4,  23),
  ('00000000-0000-4000-8000-00000000ac03', 10,  20.2,  30.4,  45),
  ('00000000-0000-4000-8000-00000000ac03', 11,  20.6,  30.4,  61),
  ('00000000-0000-4000-8000-00000000ac03', 12,  20.6,  30.0,  55),
  -- Mbanza-Ngungu (grutas)
  ('00000000-0000-4000-8000-00000000ac04',  1,  19.4,  28.6,  42),
  ('00000000-0000-4000-8000-00000000ac04',  2,  19.6,  29.2,  42),
  ('00000000-0000-4000-8000-00000000ac04',  3,  19.8,  29.6,  48),
  ('00000000-0000-4000-8000-00000000ac04',  4,  19.8,  29.4,  55),
  ('00000000-0000-4000-8000-00000000ac04',  5,  19.2,  28.2,  35),
  ('00000000-0000-4000-8000-00000000ac04',  6,  16.4,  25.8,   3),
  ('00000000-0000-4000-8000-00000000ac04',  7,  14.8,  24.4,   1),
  ('00000000-0000-4000-8000-00000000ac04',  8,  15.6,  25.6,   3),
  ('00000000-0000-4000-8000-00000000ac04',  9,  17.6,  27.6,  23),
  ('00000000-0000-4000-8000-00000000ac04', 10,  19.0,  28.6,  45),
  ('00000000-0000-4000-8000-00000000ac04', 11,  19.4,  28.6,  61),
  ('00000000-0000-4000-8000-00000000ac04', 12,  19.4,  28.2,  55),
  -- Matadi
  ('00000000-0000-4000-8000-00000000ac05',  1,  22.4,  31.4,  29),
  ('00000000-0000-4000-8000-00000000ac05',  2,  22.6,  32.0,  32),
  ('00000000-0000-4000-8000-00000000ac05',  3,  22.8,  32.4,  39),
  ('00000000-0000-4000-8000-00000000ac05',  4,  22.8,  32.2,  45),
  ('00000000-0000-4000-8000-00000000ac05',  5,  22.2,  30.6,  23),
  ('00000000-0000-4000-8000-00000000ac05',  6,  19.6,  27.8,   1),
  ('00000000-0000-4000-8000-00000000ac05',  7,  18.2,  26.4,   1),
  ('00000000-0000-4000-8000-00000000ac05',  8,  18.8,  27.2,   1),
  ('00000000-0000-4000-8000-00000000ac05',  9,  20.4,  29.2,   6),
  ('00000000-0000-4000-8000-00000000ac05', 10,  21.8,  30.8,  26),
  ('00000000-0000-4000-8000-00000000ac05', 11,  22.4,  31.4,  45),
  ('00000000-0000-4000-8000-00000000ac05', 12,  22.4,  31.0,  39),
  -- Boma
  ('00000000-0000-4000-8000-00000000ac06',  1,  22.6,  31.0,  26),
  ('00000000-0000-4000-8000-00000000ac06',  2,  22.8,  31.6,  29),
  ('00000000-0000-4000-8000-00000000ac06',  3,  23.0,  32.0,  35),
  ('00000000-0000-4000-8000-00000000ac06',  4,  23.0,  31.8,  42),
  ('00000000-0000-4000-8000-00000000ac06',  5,  22.4,  30.2,  19),
  ('00000000-0000-4000-8000-00000000ac06',  6,  19.8,  27.4,   1),
  ('00000000-0000-4000-8000-00000000ac06',  7,  18.4,  26.0,   1),
  ('00000000-0000-4000-8000-00000000ac06',  8,  19.0,  26.8,   1),
  ('00000000-0000-4000-8000-00000000ac06',  9,  20.6,  28.8,   6),
  ('00000000-0000-4000-8000-00000000ac06', 10,  22.0,  30.4,  23),
  ('00000000-0000-4000-8000-00000000ac06', 11,  22.6,  31.0,  42),
  ('00000000-0000-4000-8000-00000000ac06', 12,  22.6,  30.6,  35),
  -- Muanda (costa atlántica)
  ('00000000-0000-4000-8000-00000000ac07',  1,  23.0,  30.0,  23),
  ('00000000-0000-4000-8000-00000000ac07',  2,  23.2,  30.6,  26),
  ('00000000-0000-4000-8000-00000000ac07',  3,  23.4,  30.8,  32),
  ('00000000-0000-4000-8000-00000000ac07',  4,  23.4,  30.4,  35),
  ('00000000-0000-4000-8000-00000000ac07',  5,  22.6,  29.0,  16),
  ('00000000-0000-4000-8000-00000000ac07',  6,  20.4,  26.6,   1),
  ('00000000-0000-4000-8000-00000000ac07',  7,  19.0,  25.4,   1),
  ('00000000-0000-4000-8000-00000000ac07',  8,  19.4,  25.8,   1),
  ('00000000-0000-4000-8000-00000000ac07',  9,  21.0,  27.0,   3),
  ('00000000-0000-4000-8000-00000000ac07', 10,  22.4,  28.4,  16),
  ('00000000-0000-4000-8000-00000000ac07', 11,  23.0,  29.4,  32),
  ('00000000-0000-4000-8000-00000000ac07', 12,  23.0,  29.6,  29),
  -- Lubumbashi
  ('00000000-0000-4000-8000-00000000ac08',  1,  16.4,  27.2,  77),
  ('00000000-0000-4000-8000-00000000ac08',  2,  16.4,  27.4,  71),
  ('00000000-0000-4000-8000-00000000ac08',  3,  16.0,  27.6,  61),
  ('00000000-0000-4000-8000-00000000ac08',  4,  13.6,  27.6,  19),
  ('00000000-0000-4000-8000-00000000ac08',  5,   9.6,  26.8,   3),
  ('00000000-0000-4000-8000-00000000ac08',  6,   6.6,  25.0,   0),
  ('00000000-0000-4000-8000-00000000ac08',  7,   6.2,  25.2,   0),
  ('00000000-0000-4000-8000-00000000ac08',  8,   8.4,  27.6,   0),
  ('00000000-0000-4000-8000-00000000ac08',  9,  11.6,  30.8,   3),
  ('00000000-0000-4000-8000-00000000ac08', 10,  15.0,  31.6,  16),
  ('00000000-0000-4000-8000-00000000ac08', 11,  16.4,  29.2,  52),
  ('00000000-0000-4000-8000-00000000ac08', 12,  16.6,  27.2,  77)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Kinshasa, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'comida', 'Desayuno (café y algo en una pastelería)', 8, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'comida', 'Almuerzo (fufu con pondu o plato del día)', 12, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'comida', 'Cena en restaurante', 30, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'comida', 'Compra en supermercado', 50, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'comida', 'Mikate o brochette al paso', 2, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'alojamiento', 'Hotel 3★, noche', 150, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'alojamiento', 'Depósito de equipaje', 5, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'alojamiento', 'Propinas y servicio', 5, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'transporte', 'Taxi colectivo, día', 4, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'transporte', 'Taxi o Yango, viaje corto', 10, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 50, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 25, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 30, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'entretenimiento', 'Visita guiada', 50, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ac00'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'USD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ac01'::uuid, 1.00),  -- Lola ya Bonobo
  ('00000000-0000-4000-8000-00000000ac02'::uuid, 0.60),  -- Kisantu (jardín botánico)
  ('00000000-0000-4000-8000-00000000ac03'::uuid, 0.65),  -- Cataratas de Zongo
  ('00000000-0000-4000-8000-00000000ac04'::uuid, 0.55),  -- Mbanza-Ngungu (grutas)
  ('00000000-0000-4000-8000-00000000ac05'::uuid, 0.70),  -- Matadi
  ('00000000-0000-4000-8000-00000000ac06'::uuid, 0.65),  -- Boma
  ('00000000-0000-4000-8000-00000000ac07'::uuid, 0.80),  -- Muanda (costa atlántica)
  ('00000000-0000-4000-8000-00000000ac08'::uuid, 0.90)  -- Lubumbashi
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ac00'
on conflict (id) do nothing;
