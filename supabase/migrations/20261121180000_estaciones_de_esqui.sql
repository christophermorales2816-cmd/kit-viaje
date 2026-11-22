-- Seis estaciones de esquí en el planificador (spec, 23).
--
-- Las guías ya nombraban el esquí —Bariloche, Denver, Sapporo—, pero el
-- planificador no tenía dónde ponerlo. El presupuesto de Santiago no trae el
-- pase, el equipo ni las clases, que en un viaje de esquí son buena parte del
-- gasto, y su clima no es el de la montaña: en julio, Santiago anda entre 3 y
-- 15 grados, y a una hora y media, Valle Nevado está bajo cero.
--
--   Las Leñas            2.240 m  Argentina        junio a septiembre
--   Valle Nevado         2.400 m  Chile            junio a septiembre
--   Sierra Nevada        2.100 m  España           diciembre a abril
--   Vail y Breckenridge  2.500 m  Estados Unidos   noviembre a abril
--   Niseko                 180 m  Japón            diciembre a abril
--   Thredbo y Perisher   1.380 m  Australia        junio a septiembre
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Valle Nevado en julio:   −6,5 / 2,5  → frio → abrigo, cero playa
--   Sierra Nevada en enero:  −4,0 / 3,5  → frio → abrigo, cero playa
--   Niseko en enero:       −10,0 / −2,5  → frio → abrigo, cero playa
--
-- Los precios salen de la base del corredor con un factor, como en las
-- ciudades derivadas, y después se corrigen los renglones que en una estación
-- no tienen sentido: la excursión pasa a ser el día de esquí con pase; la
-- atracción principal, el alquiler de equipo; la visita guiada, una clase
-- grupal, y el traslado sale de donde se sube. Lo que arriba no existe —el
-- metro, el museo— se borra. Las Leñas parte de Buenos Aires, cuyos renglones
-- tienen nombre propio (el Delta, Ezeiza, el tango), y se corrige uno por uno.
--
-- IDS FIJOS: cada estación sigue la numeración de su corredor (0a09, 1009,
-- 2009, e012, 5009 y c009).

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-000000000a09', 'Las Leñas',                 'argentina',       'ARS', false, 'las-lenas'),
  ('00000000-0000-4000-8000-000000001009', 'Valle Nevado y Farellones', 'chile',           'CLP', false, 'valle-nevado'),
  ('00000000-0000-4000-8000-000000002009', 'Sierra Nevada',             'espana',          'EUR', false, 'sierra-nevada'),
  ('00000000-0000-4000-8000-00000000e012', 'Vail y Breckenridge',       'estados-unidos',  'USD', false, 'vail'),
  ('00000000-0000-4000-8000-000000005009', 'Niseko',                    'japon',           'JPY', false, 'niseko'),
  ('00000000-0000-4000-8000-00000000c009', 'Thredbo y Perisher',        'australia',       'AUD', false, 'thredbo')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100:
-- en la montaña, la probabilidad de un día con nieve o lluvia.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Las Leñas (2.240 m): Andes del sur de Mendoza, nieve seca de junio a septiembre.
  ('00000000-0000-4000-8000-000000000a09',  1,   4.5,  20.0,  10),
  ('00000000-0000-4000-8000-000000000a09',  2,   4.0,  19.5,  10),
  ('00000000-0000-4000-8000-000000000a09',  3,   1.5,  16.5,  12),
  ('00000000-0000-4000-8000-000000000a09',  4,  -1.5,  12.0,  15),
  ('00000000-0000-4000-8000-000000000a09',  5,  -4.0,   7.5,  25),
  ('00000000-0000-4000-8000-000000000a09',  6,  -6.5,   4.0,  30),
  ('00000000-0000-4000-8000-000000000a09',  7,  -7.5,   3.5,  28),
  ('00000000-0000-4000-8000-000000000a09',  8,  -7.0,   4.5,  28),
  ('00000000-0000-4000-8000-000000000a09',  9,  -5.0,   7.5,  20),
  ('00000000-0000-4000-8000-000000000a09', 10,  -2.0,  11.0,  15),
  ('00000000-0000-4000-8000-000000000a09', 11,   1.0,  15.0,  12),
  ('00000000-0000-4000-8000-000000000a09', 12,   3.5,  18.5,  10),
  -- Valle Nevado y Farellones (2.400 a 3.600 m): sobre Santiago, seco en verano.
  ('00000000-0000-4000-8000-000000001009',  1,   5.0,  17.0,   5),
  ('00000000-0000-4000-8000-000000001009',  2,   5.0,  16.5,   5),
  ('00000000-0000-4000-8000-000000001009',  3,   3.0,  14.0,   7),
  ('00000000-0000-4000-8000-000000001009',  4,   0.0,  10.0,  12),
  ('00000000-0000-4000-8000-000000001009',  5,  -3.0,   6.0,  22),
  ('00000000-0000-4000-8000-000000001009',  6,  -5.5,   3.0,  28),
  ('00000000-0000-4000-8000-000000001009',  7,  -6.5,   2.5,  27),
  ('00000000-0000-4000-8000-000000001009',  8,  -6.0,   3.0,  24),
  ('00000000-0000-4000-8000-000000001009',  9,  -4.0,   5.5,  16),
  ('00000000-0000-4000-8000-000000001009', 10,  -1.5,   8.5,  12),
  ('00000000-0000-4000-8000-000000001009', 11,   1.5,  12.0,   8),
  ('00000000-0000-4000-8000-000000001009', 12,   3.5,  15.0,   6),
  -- Sierra Nevada (Pradollano, 2.100 m): sol de Andalucía y frío de montaña.
  ('00000000-0000-4000-8000-000000002009',  1,  -4.0,   3.5,  25),
  ('00000000-0000-4000-8000-000000002009',  2,  -4.0,   4.0,  25),
  ('00000000-0000-4000-8000-000000002009',  3,  -2.0,   6.5,  25),
  ('00000000-0000-4000-8000-000000002009',  4,  -0.5,   8.5,  28),
  ('00000000-0000-4000-8000-000000002009',  5,   3.0,  13.0,  22),
  ('00000000-0000-4000-8000-000000002009',  6,   8.0,  19.0,  10),
  ('00000000-0000-4000-8000-000000002009',  7,  12.0,  23.5,   4),
  ('00000000-0000-4000-8000-000000002009',  8,  12.0,  23.0,   5),
  ('00000000-0000-4000-8000-000000002009',  9,   7.5,  17.5,  13),
  ('00000000-0000-4000-8000-000000002009', 10,   3.0,  12.0,  22),
  ('00000000-0000-4000-8000-000000002009', 11,  -1.0,   6.5,  27),
  ('00000000-0000-4000-8000-000000002009', 12,  -3.0,   4.5,  27),
  -- Vail (2.500 m): inviernos largos y secos, con nieve de noviembre a abril.
  ('00000000-0000-4000-8000-00000000e012',  1, -15.0,  -1.0,  35),
  ('00000000-0000-4000-8000-00000000e012',  2, -14.0,   1.0,  35),
  ('00000000-0000-4000-8000-00000000e012',  3, -10.0,   5.0,  38),
  ('00000000-0000-4000-8000-00000000e012',  4,  -5.0,  10.0,  35),
  ('00000000-0000-4000-8000-00000000e012',  5,  -1.0,  16.0,  30),
  ('00000000-0000-4000-8000-00000000e012',  6,   3.0,  22.0,  22),
  ('00000000-0000-4000-8000-00000000e012',  7,   6.0,  25.5,  35),
  ('00000000-0000-4000-8000-00000000e012',  8,   5.5,  24.0,  35),
  ('00000000-0000-4000-8000-00000000e012',  9,   1.0,  20.0,  25),
  ('00000000-0000-4000-8000-00000000e012', 10,  -4.0,  13.0,  22),
  ('00000000-0000-4000-8000-00000000e012', 11, -10.0,   4.5,  32),
  ('00000000-0000-4000-8000-00000000e012', 12, -15.0,  -1.0,  35),
  -- Niseko (Kutchan): nieva casi todos los días de diciembre a febrero.
  ('00000000-0000-4000-8000-000000005009',  1, -10.0,  -2.5,  75),
  ('00000000-0000-4000-8000-000000005009',  2, -10.5,  -1.5,  70),
  ('00000000-0000-4000-8000-000000005009',  3,  -6.5,   2.5,  60),
  ('00000000-0000-4000-8000-000000005009',  4,  -0.5,  10.0,  45),
  ('00000000-0000-4000-8000-000000005009',  5,   4.5,  17.0,  35),
  ('00000000-0000-4000-8000-000000005009',  6,  10.0,  21.0,  35),
  ('00000000-0000-4000-8000-000000005009',  7,  15.0,  25.0,  38),
  ('00000000-0000-4000-8000-000000005009',  8,  16.0,  26.0,  40),
  ('00000000-0000-4000-8000-000000005009',  9,  11.0,  22.0,  42),
  ('00000000-0000-4000-8000-000000005009', 10,   4.0,  15.0,  50),
  ('00000000-0000-4000-8000-000000005009', 11,  -1.5,   7.0,  62),
  ('00000000-0000-4000-8000-000000005009', 12,  -7.0,   0.0,  75),
  -- Thredbo (1.380 m): las Montañas Nevadas, con nieve de junio a septiembre.
  ('00000000-0000-4000-8000-00000000c009',  1,   6.0,  22.0,  30),
  ('00000000-0000-4000-8000-00000000c009',  2,   6.0,  21.5,  28),
  ('00000000-0000-4000-8000-00000000c009',  3,   3.5,  18.5,  30),
  ('00000000-0000-4000-8000-00000000c009',  4,   0.5,  14.0,  33),
  ('00000000-0000-4000-8000-00000000c009',  5,  -1.5,  10.0,  40),
  ('00000000-0000-4000-8000-00000000c009',  6,  -3.5,   6.0,  45),
  ('00000000-0000-4000-8000-00000000c009',  7,  -4.5,   4.5,  48),
  ('00000000-0000-4000-8000-00000000c009',  8,  -4.0,   5.5,  48),
  ('00000000-0000-4000-8000-00000000c009',  9,  -2.0,   8.5,  45),
  ('00000000-0000-4000-8000-00000000c009', 10,   0.0,  12.5,  42),
  ('00000000-0000-4000-8000-00000000c009', 11,   2.5,  16.0,  38),
  ('00000000-0000-4000-8000-00000000c009', 12,   4.5,  19.5,  33)
on conflict (destination_id, month) do nothing;

-- Precios enteros: los de la ciudad base del corredor, con el factor de la estación.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-000000000a09'::uuid, '00000000-0000-4000-8000-0000000000ba'::uuid, 1.60),  -- Las Leñas
  ('00000000-0000-4000-8000-000000001009'::uuid, '00000000-0000-4000-8000-000000001000'::uuid, 1.80),  -- Valle Nevado y Farellones
  ('00000000-0000-4000-8000-000000005009'::uuid, '00000000-0000-4000-8000-000000005000'::uuid, 1.30)   -- Niseko
) as ciudad(id, base, factor)
join products p on p.destination_id = ciudad.base
on conflict (id) do nothing;

-- Precios con centavos: los de la ciudad base del corredor, con el factor de la estación.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-000000002009'::uuid, '00000000-0000-4000-8000-000000002000'::uuid, 1.15),  -- Sierra Nevada
  ('00000000-0000-4000-8000-00000000e012'::uuid, '00000000-0000-4000-8000-00000000e000'::uuid, 1.25),  -- Vail y Breckenridge
  ('00000000-0000-4000-8000-00000000c009'::uuid, '00000000-0000-4000-8000-00000000c000'::uuid, 1.25)   -- Thredbo y Perisher
) as ciudad(id, base, factor)
join products p on p.destination_id = ciudad.base
on conflict (id) do nothing;

-- Lo que en una estación cambia de nombre, de precio o de ritmo: el día de
-- esquí y el equipo van uno por día de viaje, y no uno cada cuatro días como
-- la excursión que reemplazan.
-- Las Leñas
update products
set name = 'Día de esquí (con pase)', base_price = 120000, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000000a09'
  and name = 'Excursión al Delta del Tigre';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 40000, scales_with_days = true, days_per_unit = 1, max_qty = 30, category = 'entretenimiento'
where destination_id = '00000000-0000-4000-8000-000000000a09'
  and name = 'Alquiler de bicicleta por día';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 60000
where destination_id = '00000000-0000-4000-8000-000000000a09'
  and name = 'Entrada a partido de fútbol';
update products
set name = 'Traslado desde San Rafael o Malargüe (por tramo)', base_price = 45000
where destination_id = '00000000-0000-4000-8000-000000000a09'
  and name = 'Traslado a Ezeiza (por tramo)';
update products
set base_price = 200000
where destination_id = '00000000-0000-4000-8000-000000000a09'
  and name = 'Hotel 3★, noche';
-- Valle Nevado y Farellones
update products
set name = 'Día de esquí (con pase)', base_price = 85000, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000001009'
  and name = 'Excursión de día completo';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 35000, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000001009'
  and name = 'Entrada a la atracción principal';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 55000
where destination_id = '00000000-0000-4000-8000-000000001009'
  and name = 'Visita guiada';
update products
set name = 'Traslado desde Santiago (por tramo)', base_price = 40000
where destination_id = '00000000-0000-4000-8000-000000001009'
  and name = 'Traslado al aeropuerto (por tramo)';
update products
set base_price = 200000
where destination_id = '00000000-0000-4000-8000-000000001009'
  and name = 'Hotel 3★, noche';
-- Sierra Nevada
update products
set name = 'Día de esquí (con pase)', base_price = 62.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000002009'
  and name = 'Excursión de día completo';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 30.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000002009'
  and name = 'Entrada a la atracción principal';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 45.00
where destination_id = '00000000-0000-4000-8000-000000002009'
  and name = 'Visita guiada';
update products
set name = 'Bus desde Granada (por tramo)', base_price = 6.00
where destination_id = '00000000-0000-4000-8000-000000002009'
  and name = 'Traslado al aeropuerto (por tramo)';
update products
set name = 'Salida nocturna', base_price = 35.00
where destination_id = '00000000-0000-4000-8000-000000002009'
  and name = 'Noche de flamenco';
-- Vail y Breckenridge
update products
set name = 'Día de esquí (con pase)', base_price = 250.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-00000000e012'
  and name = 'Excursión de día completo';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 75.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-00000000e012'
  and name = 'Entrada a la atracción principal';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 200.00
where destination_id = '00000000-0000-4000-8000-00000000e012'
  and name = 'Visita guiada';
update products
set name = 'Traslado desde el aeropuerto de Denver (por tramo)', base_price = 90.00
where destination_id = '00000000-0000-4000-8000-00000000e012'
  and name = 'Traslado al aeropuerto en taxi (por tramo)';
-- Niseko
update products
set name = 'Día de esquí (con pase)', base_price = 11000, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Excursión de día completo';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 7000, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Entrada a la atracción principal';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 12000
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Visita guiada';
update products
set name = 'Bus desde el aeropuerto de New Chitose (por tramo)', base_price = 5000
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Traslado al aeropuerto (por tramo)';
update products
set name = 'Baño en un onsen', base_price = 1000
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Entrada a museo';
update products
set base_price = 35000
where destination_id = '00000000-0000-4000-8000-000000005009'
  and name = 'Hotel 3★, noche';
-- Thredbo y Perisher
update products
set name = 'Día de esquí (con pase)', base_price = 210.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-00000000c009'
  and name = 'Excursión de día completo';
update products
set name = 'Alquiler de equipo de esquí, día', base_price = 90.00, scales_with_days = true, days_per_unit = 1, max_qty = 30
where destination_id = '00000000-0000-4000-8000-00000000c009'
  and name = 'Entrada a la atracción principal';
update products
set name = 'Clase grupal de esquí (medio día)', base_price = 150.00
where destination_id = '00000000-0000-4000-8000-00000000c009'
  and name = 'Visita guiada';
update products
set name = 'Bus desde Canberra (por tramo)', base_price = 85.00
where destination_id = '00000000-0000-4000-8000-00000000c009'
  and name = 'Traslado al aeropuerto (por tramo)';
update products
set base_price = 350.00
where destination_id = '00000000-0000-4000-8000-00000000c009'
  and name = 'Hotel 3★, noche';

-- Lo que arriba no existe: el metro, el museo, el show de la ciudad base.
delete from products
where destination_id = '00000000-0000-4000-8000-000000000a09'  -- Las Leñas
  and name in ('Entrada a show de tango', 'Transporte público, día (4 viajes en SUBE)', 'Entrada a museo', 'Remis corto (centro)');
delete from products
where destination_id = '00000000-0000-4000-8000-000000001009'  -- Valle Nevado y Farellones
  and name in ('Transporte público, día (metro y micro)', 'Entrada a museo', 'Viaje corto en app', 'Bus de larga distancia');
delete from products
where destination_id = '00000000-0000-4000-8000-000000002009'  -- Sierra Nevada
  and name in ('Transporte público, día (metro y bus)', 'Entrada a museo');
delete from products
where destination_id = '00000000-0000-4000-8000-00000000e012'  -- Vail y Breckenridge
  and name in ('Transporte público, día', 'Entrada a museo');
delete from products
where destination_id = '00000000-0000-4000-8000-000000005009'  -- Niseko
  and name in ('Metro y tren urbano, día');
delete from products
where destination_id = '00000000-0000-4000-8000-00000000c009'  -- Thredbo y Perisher
  and name in ('Transporte público, día', 'Entrada a museo');
