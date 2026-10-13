-- Micronesia, con Kolonia como ciudad base: es el pueblo más grande de
-- Pohnpei, a pocos kilómetros de Palikir, la capital, y por donde entra casi
-- todo el que viaja. Precios en dólares, con centavos: el país usa el dólar
-- estadounidense, como Ecuador.
--
-- Son los Estados Federados de Micronesia: cuatro islas o grupos de islas
-- separados por miles de kilómetros de mar, unidos por un vuelo que salta de
-- isla en isla. Las ciudades del planificador son las de Pohnpei —Kolonia,
-- Palikir, Nan Madol y la cascada de Kepirohi—, Weno y los naufragios de la
-- laguna de Chuuk, Colonia y el dinero de piedra de Yap, y Lelu, en Kosrae. Yap
-- y Chuuk tienen una hora menos que Pohnpei y Kosrae.
--
-- Calor húmedo y parejo todo el año. Pohnpei y Kosrae están entre los lugares
-- más lluviosos del mundo; Yap tiene una temporada más seca de enero a abril.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Palikir (la capital) en julio: 21,8 / 30,6 → templado + calido → nunca abrigo, playa
--   Colonia (Yap) en mayo: 24,2 / 31,2 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000cf00 a cf08, la base es cf00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000cf00', 'Kolonia (Pohnpei)',               'micronesia', 'USD', true,  'kolonia'),
  ('00000000-0000-4000-8000-00000000cf01', 'Palikir (la capital)',            'micronesia', 'USD', false, 'palikir'),
  ('00000000-0000-4000-8000-00000000cf02', 'Nan Madol (la ciudad de piedra)', 'micronesia', 'USD', false, 'nan-madol'),
  ('00000000-0000-4000-8000-00000000cf03', 'Cascada de Kepirohi',             'micronesia', 'USD', false, 'kepirohi'),
  ('00000000-0000-4000-8000-00000000cf04', 'Weno (Chuuk)',                    'micronesia', 'USD', false, 'weno'),
  ('00000000-0000-4000-8000-00000000cf05', 'Laguna de Chuuk (naufragios)',    'micronesia', 'USD', false, 'laguna-de-chuuk'),
  ('00000000-0000-4000-8000-00000000cf06', 'Colonia (Yap)',                   'micronesia', 'USD', false, 'colonia-yap'),
  ('00000000-0000-4000-8000-00000000cf07', 'Dinero de piedra (Yap)',          'micronesia', 'USD', false, 'dinero-de-piedra'),
  ('00000000-0000-4000-8000-00000000cf08', 'Lelu (Kosrae)',                   'micronesia', 'USD', false, 'lelu')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Kolonia (Pohnpei)
  ('00000000-0000-4000-8000-00000000cf00',  1,  22.6,  30.8,  68),
  ('00000000-0000-4000-8000-00000000cf00',  2,  22.6,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf00',  3,  22.6,  31.0,  68),
  ('00000000-0000-4000-8000-00000000cf00',  4,  22.6,  31.0,  74),
  ('00000000-0000-4000-8000-00000000cf00',  5,  22.4,  31.0,  77),
  ('00000000-0000-4000-8000-00000000cf00',  6,  22.2,  30.8,  77),
  ('00000000-0000-4000-8000-00000000cf00',  7,  22.0,  30.8,  77),
  ('00000000-0000-4000-8000-00000000cf00',  8,  22.0,  30.8,  77),
  ('00000000-0000-4000-8000-00000000cf00',  9,  22.0,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf00', 10,  22.0,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf00', 11,  22.2,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf00', 12,  22.4,  30.8,  71),
  -- Palikir (la capital)
  ('00000000-0000-4000-8000-00000000cf01',  1,  22.4,  30.6,  71),
  ('00000000-0000-4000-8000-00000000cf01',  2,  22.4,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf01',  3,  22.4,  30.8,  71),
  ('00000000-0000-4000-8000-00000000cf01',  4,  22.4,  30.8,  77),
  ('00000000-0000-4000-8000-00000000cf01',  5,  22.2,  30.8,  80),
  ('00000000-0000-4000-8000-00000000cf01',  6,  22.0,  30.6,  80),
  ('00000000-0000-4000-8000-00000000cf01',  7,  21.8,  30.6,  80),
  ('00000000-0000-4000-8000-00000000cf01',  8,  21.8,  30.6,  80),
  ('00000000-0000-4000-8000-00000000cf01',  9,  21.8,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf01', 10,  21.8,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf01', 11,  22.0,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf01', 12,  22.2,  30.6,  74),
  -- Nan Madol (la ciudad de piedra)
  ('00000000-0000-4000-8000-00000000cf02',  1,  22.8,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf02',  2,  22.8,  30.8,  62),
  ('00000000-0000-4000-8000-00000000cf02',  3,  22.8,  31.0,  65),
  ('00000000-0000-4000-8000-00000000cf02',  4,  22.8,  31.0,  71),
  ('00000000-0000-4000-8000-00000000cf02',  5,  22.6,  31.0,  74),
  ('00000000-0000-4000-8000-00000000cf02',  6,  22.4,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf02',  7,  22.2,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf02',  8,  22.2,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf02',  9,  22.2,  30.8,  71),
  ('00000000-0000-4000-8000-00000000cf02', 10,  22.2,  30.8,  71),
  ('00000000-0000-4000-8000-00000000cf02', 11,  22.4,  30.8,  71),
  ('00000000-0000-4000-8000-00000000cf02', 12,  22.6,  30.8,  68),
  -- Cascada de Kepirohi
  ('00000000-0000-4000-8000-00000000cf03',  1,  22.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf03',  2,  22.6,  30.6,  65),
  ('00000000-0000-4000-8000-00000000cf03',  3,  22.6,  30.8,  68),
  ('00000000-0000-4000-8000-00000000cf03',  4,  22.6,  30.8,  74),
  ('00000000-0000-4000-8000-00000000cf03',  5,  22.4,  30.8,  77),
  ('00000000-0000-4000-8000-00000000cf03',  6,  22.2,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf03',  7,  22.0,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf03',  8,  22.0,  30.6,  77),
  ('00000000-0000-4000-8000-00000000cf03',  9,  22.0,  30.6,  74),
  ('00000000-0000-4000-8000-00000000cf03', 10,  22.0,  30.6,  74),
  ('00000000-0000-4000-8000-00000000cf03', 11,  22.2,  30.6,  74),
  ('00000000-0000-4000-8000-00000000cf03', 12,  22.4,  30.6,  71),
  -- Weno (Chuuk)
  ('00000000-0000-4000-8000-00000000cf04',  1,  24.6,  30.4,  58),
  ('00000000-0000-4000-8000-00000000cf04',  2,  24.6,  30.4,  52),
  ('00000000-0000-4000-8000-00000000cf04',  3,  24.6,  30.6,  55),
  ('00000000-0000-4000-8000-00000000cf04',  4,  24.8,  30.8,  61),
  ('00000000-0000-4000-8000-00000000cf04',  5,  24.8,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf04',  6,  24.6,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf04',  7,  24.4,  30.8,  68),
  ('00000000-0000-4000-8000-00000000cf04',  8,  24.4,  31.0,  68),
  ('00000000-0000-4000-8000-00000000cf04',  9,  24.4,  31.0,  65),
  ('00000000-0000-4000-8000-00000000cf04', 10,  24.6,  31.0,  65),
  ('00000000-0000-4000-8000-00000000cf04', 11,  24.6,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf04', 12,  24.6,  30.6,  61),
  -- Laguna de Chuuk (naufragios)
  ('00000000-0000-4000-8000-00000000cf05',  1,  24.8,  30.2,  55),
  ('00000000-0000-4000-8000-00000000cf05',  2,  24.8,  30.2,  49),
  ('00000000-0000-4000-8000-00000000cf05',  3,  24.8,  30.4,  52),
  ('00000000-0000-4000-8000-00000000cf05',  4,  25.0,  30.6,  58),
  ('00000000-0000-4000-8000-00000000cf05',  5,  25.0,  30.6,  62),
  ('00000000-0000-4000-8000-00000000cf05',  6,  24.8,  30.6,  62),
  ('00000000-0000-4000-8000-00000000cf05',  7,  24.6,  30.6,  65),
  ('00000000-0000-4000-8000-00000000cf05',  8,  24.6,  30.8,  65),
  ('00000000-0000-4000-8000-00000000cf05',  9,  24.6,  30.8,  62),
  ('00000000-0000-4000-8000-00000000cf05', 10,  24.8,  30.8,  62),
  ('00000000-0000-4000-8000-00000000cf05', 11,  24.8,  30.6,  62),
  ('00000000-0000-4000-8000-00000000cf05', 12,  24.8,  30.4,  58),
  -- Colonia (Yap)
  ('00000000-0000-4000-8000-00000000cf06',  1,  23.8,  30.2,  48),
  ('00000000-0000-4000-8000-00000000cf06',  2,  23.8,  30.2,  42),
  ('00000000-0000-4000-8000-00000000cf06',  3,  23.8,  30.6,  42),
  ('00000000-0000-4000-8000-00000000cf06',  4,  24.2,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cf06',  5,  24.2,  31.2,  52),
  ('00000000-0000-4000-8000-00000000cf06',  6,  24.0,  31.0,  61),
  ('00000000-0000-4000-8000-00000000cf06',  7,  23.6,  30.6,  65),
  ('00000000-0000-4000-8000-00000000cf06',  8,  23.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf06',  9,  23.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf06', 10,  23.8,  30.8,  61),
  ('00000000-0000-4000-8000-00000000cf06', 11,  24.0,  30.8,  55),
  ('00000000-0000-4000-8000-00000000cf06', 12,  24.0,  30.4,  52),
  -- Dinero de piedra (Yap)
  ('00000000-0000-4000-8000-00000000cf07',  1,  23.6,  30.2,  48),
  ('00000000-0000-4000-8000-00000000cf07',  2,  23.6,  30.2,  42),
  ('00000000-0000-4000-8000-00000000cf07',  3,  23.6,  30.6,  42),
  ('00000000-0000-4000-8000-00000000cf07',  4,  24.0,  31.0,  42),
  ('00000000-0000-4000-8000-00000000cf07',  5,  24.0,  31.2,  52),
  ('00000000-0000-4000-8000-00000000cf07',  6,  23.8,  31.0,  61),
  ('00000000-0000-4000-8000-00000000cf07',  7,  23.4,  30.6,  65),
  ('00000000-0000-4000-8000-00000000cf07',  8,  23.4,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf07',  9,  23.4,  30.6,  68),
  ('00000000-0000-4000-8000-00000000cf07', 10,  23.6,  30.8,  61),
  ('00000000-0000-4000-8000-00000000cf07', 11,  23.8,  30.8,  55),
  ('00000000-0000-4000-8000-00000000cf07', 12,  23.8,  30.4,  52),
  -- Lelu (Kosrae)
  ('00000000-0000-4000-8000-00000000cf08',  1,  23.2,  30.0,  68),
  ('00000000-0000-4000-8000-00000000cf08',  2,  23.2,  30.2,  65),
  ('00000000-0000-4000-8000-00000000cf08',  3,  23.2,  30.4,  71),
  ('00000000-0000-4000-8000-00000000cf08',  4,  23.2,  30.4,  71),
  ('00000000-0000-4000-8000-00000000cf08',  5,  23.2,  30.4,  74),
  ('00000000-0000-4000-8000-00000000cf08',  6,  23.0,  30.2,  74),
  ('00000000-0000-4000-8000-00000000cf08',  7,  22.8,  30.2,  74),
  ('00000000-0000-4000-8000-00000000cf08',  8,  22.8,  30.4,  74),
  ('00000000-0000-4000-8000-00000000cf08',  9,  22.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000cf08', 10,  22.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000cf08', 11,  23.0,  30.2,  71),
  ('00000000-0000-4000-8000-00000000cf08', 12,  23.2,  30.0,  71)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Kolonia (Pohnpei), en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'comida', 'Desayuno (café y algo en un café)', 10, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'comida', 'Almuerzo (pescado con arroz o plato del día)', 12, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'comida', 'Cena en restaurante', 28, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'comida', 'Compra en supermercado', 80, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'comida', 'Pescado o pan de fruta al paso', 5, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'alojamiento', 'Hotel 3★, noche', 130, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'alojamiento', 'Lavandería (una carga)', 8, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'alojamiento', 'Propinas: en Micronesia no se acostumbran', 0, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'transporte', 'Taxi compartido, día', 6, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'transporte', 'Taxi compartido, viaje corto', 3, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 10, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'transporte', 'Vuelo entre islas, tramo', 300, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'entretenimiento', 'Visita guiada', 80, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'entretenimiento', 'Entrada a museo', 3, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'entretenimiento', 'Salida nocturna', 25, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000cf00'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'USD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000cf01'::uuid, 0.95),  -- Palikir (la capital)
  ('00000000-0000-4000-8000-00000000cf02'::uuid, 1.00),  -- Nan Madol (la ciudad de piedra)
  ('00000000-0000-4000-8000-00000000cf03'::uuid, 0.95),  -- Cascada de Kepirohi
  ('00000000-0000-4000-8000-00000000cf04'::uuid, 1.10),  -- Weno (Chuuk)
  ('00000000-0000-4000-8000-00000000cf05'::uuid, 1.50),  -- Laguna de Chuuk (naufragios)
  ('00000000-0000-4000-8000-00000000cf06'::uuid, 1.05),  -- Colonia (Yap)
  ('00000000-0000-4000-8000-00000000cf07'::uuid, 1.00),  -- Dinero de piedra (Yap)
  ('00000000-0000-4000-8000-00000000cf08'::uuid, 1.00)  -- Lelu (Kosrae)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000cf00'
on conflict (id) do nothing;
