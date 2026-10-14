-- Islas Marshall, con Majuro como ciudad base: es la capital y por donde
-- entra casi todo el que viaja. Precios en dólares, con centavos: el país usa
-- el dólar estadounidense, como Ecuador.
--
-- Las ciudades del planificador son las del atolón de Majuro —Majuro, Laura y
-- la isla Eneko— y los atolones de Arno, Mili, Jaluit, Wotje, Likiep y
-- Maloelap, con restos de la Segunda Guerra y casi sin servicios. Kwajalein,
-- base militar de Estados Unidos, y Bikini, que no se puede visitar por cuenta
-- propia, no están.
--
-- Calor húmedo y parejo todo el año, sobre atolones a un par de metros del mar.
-- Los atolones del sur llueven casi todo el año; los del norte, como Wotje y
-- Likiep, tienen una temporada seca de enero a abril.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Likiep en febrero: 24 / 29,4 → templado + calido → nunca abrigo, playa
--   Wotje en agosto: 24,8 / 31 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ce00 a ce08, la base es ce00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ce00', 'Majuro',                            'islas-marshall', 'USD', true,  'majuro'),
  ('00000000-0000-4000-8000-00000000ce01', 'Laura (la punta oeste del atolón)', 'islas-marshall', 'USD', false, 'laura'),
  ('00000000-0000-4000-8000-00000000ce02', 'Isla Eneko',                        'islas-marshall', 'USD', false, 'eneko'),
  ('00000000-0000-4000-8000-00000000ce03', 'Arno',                              'islas-marshall', 'USD', false, 'arno'),
  ('00000000-0000-4000-8000-00000000ce04', 'Mili (restos de la guerra)',        'islas-marshall', 'USD', false, 'mili'),
  ('00000000-0000-4000-8000-00000000ce05', 'Jaluit',                            'islas-marshall', 'USD', false, 'jaluit'),
  ('00000000-0000-4000-8000-00000000ce06', 'Wotje',                             'islas-marshall', 'USD', false, 'wotje'),
  ('00000000-0000-4000-8000-00000000ce07', 'Likiep',                            'islas-marshall', 'USD', false, 'likiep'),
  ('00000000-0000-4000-8000-00000000ce08', 'Maloelap (Taroa)',                  'islas-marshall', 'USD', false, 'maloelap')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Majuro
  ('00000000-0000-4000-8000-00000000ce00',  1,  24.8,  29.8,  55),
  ('00000000-0000-4000-8000-00000000ce00',  2,  24.8,  29.8,  48),
  ('00000000-0000-4000-8000-00000000ce00',  3,  24.8,  30.0,  52),
  ('00000000-0000-4000-8000-00000000ce00',  4,  25.0,  30.2,  58),
  ('00000000-0000-4000-8000-00000000ce00',  5,  25.0,  30.4,  65),
  ('00000000-0000-4000-8000-00000000ce00',  6,  24.8,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce00',  7,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce00',  8,  24.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000ce00',  9,  24.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000ce00', 10,  24.6,  30.6,  68),
  ('00000000-0000-4000-8000-00000000ce00', 11,  24.8,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce00', 12,  24.8,  30.0,  61),
  -- Laura (la punta oeste del atolón)
  ('00000000-0000-4000-8000-00000000ce01',  1,  24.8,  29.6,  55),
  ('00000000-0000-4000-8000-00000000ce01',  2,  24.8,  29.6,  48),
  ('00000000-0000-4000-8000-00000000ce01',  3,  24.8,  29.8,  52),
  ('00000000-0000-4000-8000-00000000ce01',  4,  25.0,  30.0,  58),
  ('00000000-0000-4000-8000-00000000ce01',  5,  25.0,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ce01',  6,  24.8,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce01',  7,  24.6,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce01',  8,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce01',  9,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce01', 10,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce01', 11,  24.8,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce01', 12,  24.8,  29.8,  61),
  -- Isla Eneko
  ('00000000-0000-4000-8000-00000000ce02',  1,  25.0,  29.6,  52),
  ('00000000-0000-4000-8000-00000000ce02',  2,  25.0,  29.6,  45),
  ('00000000-0000-4000-8000-00000000ce02',  3,  25.0,  29.8,  49),
  ('00000000-0000-4000-8000-00000000ce02',  4,  25.2,  30.0,  55),
  ('00000000-0000-4000-8000-00000000ce02',  5,  25.2,  30.2,  62),
  ('00000000-0000-4000-8000-00000000ce02',  6,  25.0,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ce02',  7,  24.8,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ce02',  8,  24.8,  30.4,  65),
  ('00000000-0000-4000-8000-00000000ce02',  9,  24.8,  30.4,  65),
  ('00000000-0000-4000-8000-00000000ce02', 10,  24.8,  30.4,  65),
  ('00000000-0000-4000-8000-00000000ce02', 11,  25.0,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ce02', 12,  25.0,  29.8,  58),
  -- Arno
  ('00000000-0000-4000-8000-00000000ce03',  1,  24.8,  29.6,  55),
  ('00000000-0000-4000-8000-00000000ce03',  2,  24.8,  29.6,  48),
  ('00000000-0000-4000-8000-00000000ce03',  3,  24.8,  29.8,  52),
  ('00000000-0000-4000-8000-00000000ce03',  4,  25.0,  30.0,  58),
  ('00000000-0000-4000-8000-00000000ce03',  5,  25.0,  30.2,  65),
  ('00000000-0000-4000-8000-00000000ce03',  6,  24.8,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce03',  7,  24.6,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce03',  8,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce03',  9,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce03', 10,  24.6,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce03', 11,  24.8,  30.2,  68),
  ('00000000-0000-4000-8000-00000000ce03', 12,  24.8,  29.8,  61),
  -- Mili (restos de la guerra)
  ('00000000-0000-4000-8000-00000000ce04',  1,  24.8,  29.8,  58),
  ('00000000-0000-4000-8000-00000000ce04',  2,  24.8,  29.8,  51),
  ('00000000-0000-4000-8000-00000000ce04',  3,  24.8,  30.0,  55),
  ('00000000-0000-4000-8000-00000000ce04',  4,  25.0,  30.2,  61),
  ('00000000-0000-4000-8000-00000000ce04',  5,  25.0,  30.4,  68),
  ('00000000-0000-4000-8000-00000000ce04',  6,  24.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000ce04',  7,  24.6,  30.4,  71),
  ('00000000-0000-4000-8000-00000000ce04',  8,  24.6,  30.6,  71),
  ('00000000-0000-4000-8000-00000000ce04',  9,  24.6,  30.6,  71),
  ('00000000-0000-4000-8000-00000000ce04', 10,  24.6,  30.6,  71),
  ('00000000-0000-4000-8000-00000000ce04', 11,  24.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000ce04', 12,  24.8,  30.0,  64),
  -- Jaluit
  ('00000000-0000-4000-8000-00000000ce05',  1,  24.8,  29.8,  61),
  ('00000000-0000-4000-8000-00000000ce05',  2,  24.8,  29.8,  54),
  ('00000000-0000-4000-8000-00000000ce05',  3,  24.8,  30.0,  58),
  ('00000000-0000-4000-8000-00000000ce05',  4,  25.0,  30.2,  64),
  ('00000000-0000-4000-8000-00000000ce05',  5,  25.0,  30.4,  71),
  ('00000000-0000-4000-8000-00000000ce05',  6,  24.8,  30.4,  74),
  ('00000000-0000-4000-8000-00000000ce05',  7,  24.6,  30.4,  74),
  ('00000000-0000-4000-8000-00000000ce05',  8,  24.6,  30.6,  74),
  ('00000000-0000-4000-8000-00000000ce05',  9,  24.6,  30.6,  74),
  ('00000000-0000-4000-8000-00000000ce05', 10,  24.6,  30.6,  74),
  ('00000000-0000-4000-8000-00000000ce05', 11,  24.8,  30.4,  74),
  ('00000000-0000-4000-8000-00000000ce05', 12,  24.8,  30.0,  67),
  -- Wotje
  ('00000000-0000-4000-8000-00000000ce06',  1,  24.4,  29.4,  32),
  ('00000000-0000-4000-8000-00000000ce06',  2,  24.2,  29.4,  26),
  ('00000000-0000-4000-8000-00000000ce06',  3,  24.4,  29.8,  29),
  ('00000000-0000-4000-8000-00000000ce06',  4,  24.8,  30.2,  35),
  ('00000000-0000-4000-8000-00000000ce06',  5,  25.0,  30.6,  45),
  ('00000000-0000-4000-8000-00000000ce06',  6,  25.0,  30.8,  52),
  ('00000000-0000-4000-8000-00000000ce06',  7,  24.8,  30.8,  58),
  ('00000000-0000-4000-8000-00000000ce06',  8,  24.8,  31.0,  58),
  ('00000000-0000-4000-8000-00000000ce06',  9,  24.8,  31.0,  58),
  ('00000000-0000-4000-8000-00000000ce06', 10,  24.8,  30.8,  58),
  ('00000000-0000-4000-8000-00000000ce06', 11,  24.8,  30.4,  52),
  ('00000000-0000-4000-8000-00000000ce06', 12,  24.6,  29.8,  42),
  -- Likiep
  ('00000000-0000-4000-8000-00000000ce07',  1,  24.2,  29.4,  29),
  ('00000000-0000-4000-8000-00000000ce07',  2,  24.0,  29.4,  23),
  ('00000000-0000-4000-8000-00000000ce07',  3,  24.2,  29.8,  26),
  ('00000000-0000-4000-8000-00000000ce07',  4,  24.6,  30.2,  32),
  ('00000000-0000-4000-8000-00000000ce07',  5,  24.8,  30.6,  42),
  ('00000000-0000-4000-8000-00000000ce07',  6,  24.8,  30.8,  49),
  ('00000000-0000-4000-8000-00000000ce07',  7,  24.6,  30.8,  55),
  ('00000000-0000-4000-8000-00000000ce07',  8,  24.6,  31.0,  55),
  ('00000000-0000-4000-8000-00000000ce07',  9,  24.6,  31.0,  55),
  ('00000000-0000-4000-8000-00000000ce07', 10,  24.6,  30.8,  55),
  ('00000000-0000-4000-8000-00000000ce07', 11,  24.6,  30.4,  49),
  ('00000000-0000-4000-8000-00000000ce07', 12,  24.4,  29.8,  39),
  -- Maloelap (Taroa)
  ('00000000-0000-4000-8000-00000000ce08',  1,  24.6,  29.4,  38),
  ('00000000-0000-4000-8000-00000000ce08',  2,  24.4,  29.4,  32),
  ('00000000-0000-4000-8000-00000000ce08',  3,  24.6,  29.8,  35),
  ('00000000-0000-4000-8000-00000000ce08',  4,  25.0,  30.2,  41),
  ('00000000-0000-4000-8000-00000000ce08',  5,  25.2,  30.6,  51),
  ('00000000-0000-4000-8000-00000000ce08',  6,  25.2,  30.8,  58),
  ('00000000-0000-4000-8000-00000000ce08',  7,  25.0,  30.8,  64),
  ('00000000-0000-4000-8000-00000000ce08',  8,  25.0,  31.0,  64),
  ('00000000-0000-4000-8000-00000000ce08',  9,  25.0,  31.0,  64),
  ('00000000-0000-4000-8000-00000000ce08', 10,  25.0,  30.8,  64),
  ('00000000-0000-4000-8000-00000000ce08', 11,  25.0,  30.4,  58),
  ('00000000-0000-4000-8000-00000000ce08', 12,  24.8,  29.8,  48)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Majuro, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'comida', 'Desayuno (café y algo en un café)', 12, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'comida', 'Almuerzo (pescado con arroz o plato del día)', 14, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'comida', 'Cena en restaurante', 30, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'comida', 'Compra en supermercado', 80, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'comida', 'Pescado o pan de fruta al paso', 5, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'alojamiento', 'Hotel 3★, noche', 150, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'alojamiento', 'Lavandería (una carga)', 8, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'alojamiento', 'Propinas: en las Marshall no se acostumbran', 0, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'transporte', 'Taxi colectivo, día', 5, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'transporte', 'Taxi colectivo, viaje corto', 2, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 10, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'transporte', 'Vuelo interno, tramo', 150, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 5, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'entretenimiento', 'Visita guiada', 60, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'entretenimiento', 'Entrada a museo', 3, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ce00'::uuid, 'entretenimiento', 'Excursión de día completo', 100, 'USD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ce01'::uuid, 0.95),  -- Laura (la punta oeste del atolón)
  ('00000000-0000-4000-8000-00000000ce02'::uuid, 1.10),  -- Isla Eneko
  ('00000000-0000-4000-8000-00000000ce03'::uuid, 0.90),  -- Arno
  ('00000000-0000-4000-8000-00000000ce04'::uuid, 0.90),  -- Mili (restos de la guerra)
  ('00000000-0000-4000-8000-00000000ce05'::uuid, 0.85),  -- Jaluit
  ('00000000-0000-4000-8000-00000000ce06'::uuid, 0.85),  -- Wotje
  ('00000000-0000-4000-8000-00000000ce07'::uuid, 0.85),  -- Likiep
  ('00000000-0000-4000-8000-00000000ce08'::uuid, 0.85)  -- Maloelap (Taroa)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ce00'
on conflict (id) do nothing;
