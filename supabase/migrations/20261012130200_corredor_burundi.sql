-- Burundi, con Buyumbura como ciudad base: es la ciudad más grande y la del
-- aeropuerto; Gitega, la capital política, está a pocas horas.
--
-- Precios en DÓLARES, con centavos, aunque la moneda sea el franco burundés. Es
-- el caso de Malaui: la cotización oficial y la del mercado paralelo están muy
-- lejos, y un precio en francos convertido a la oficial diría un costo que el
-- viajero no paga. El corredor sigue en francos, con las dos cotizaciones,
-- porque eso es lo que la guía explica.
--
-- Entra con aviso (spec, 15.9): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Ninguna ciudad del planificador está
-- en Cibitoke ni en Bubanza, en el parque de la Kibira ni sobre la frontera con
-- el Congo, al oeste de Buyumbura.
--
-- Sobre el ecuador y en altura. Buyumbura, a orillas del lago Tanganica, es
-- calurosa todo el año; las tierras altas, en Gitega, Bururi y la fuente del
-- Nilo, son templadas o frescas. Llueve de octubre a mayo; de junio a
-- septiembre es la temporada seca.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Fuente del Nilo (Rutovu) en julio: 9,4 / 22,4 → frio + fresco + templado → abrigo, cero playa
--   Nyanza-Lac (playas del sur) en septiembre: 19,8 / 32 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000af00 a af08, la base es af00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000af00', 'Buyumbura',                    'burundi', 'USD', true,  'buyumbura'),
  ('00000000-0000-4000-8000-00000000af01', 'Gitega',                       'burundi', 'USD', false, 'gitega'),
  ('00000000-0000-4000-8000-00000000af02', 'Rumonge (lago Tanganica)',     'burundi', 'USD', false, 'rumonge'),
  ('00000000-0000-4000-8000-00000000af03', 'Nyanza-Lac (playas del sur)',  'burundi', 'USD', false, 'nyanza-lac'),
  ('00000000-0000-4000-8000-00000000af04', 'Fuente del Nilo (Rutovu)',     'burundi', 'USD', false, 'fuente-del-nilo'),
  ('00000000-0000-4000-8000-00000000af05', 'Cataratas de Karera (Rutana)', 'burundi', 'USD', false, 'karera'),
  ('00000000-0000-4000-8000-00000000af06', 'Parque Nacional de la Ruvubu', 'burundi', 'USD', false, 'ruvubu'),
  ('00000000-0000-4000-8000-00000000af07', 'Bosque de Bururi',             'burundi', 'USD', false, 'bururi'),
  ('00000000-0000-4000-8000-00000000af08', 'Lagos de Kirundo (aves)',      'burundi', 'USD', false, 'kirundo')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Buyumbura
  ('00000000-0000-4000-8000-00000000af00',  1,  19.8,  28.6,  52),
  ('00000000-0000-4000-8000-00000000af00',  2,  19.8,  28.8,  54),
  ('00000000-0000-4000-8000-00000000af00',  3,  19.8,  28.8,  55),
  ('00000000-0000-4000-8000-00000000af00',  4,  19.8,  28.6,  60),
  ('00000000-0000-4000-8000-00000000af00',  5,  19.6,  29.0,  29),
  ('00000000-0000-4000-8000-00000000af00',  6,  18.6,  29.6,   7),
  ('00000000-0000-4000-8000-00000000af00',  7,  18.2,  30.0,   3),
  ('00000000-0000-4000-8000-00000000af00',  8,  18.6,  31.0,   6),
  ('00000000-0000-4000-8000-00000000af00',  9,  19.4,  31.4,  20),
  ('00000000-0000-4000-8000-00000000af00', 10,  20.0,  30.4,  35),
  ('00000000-0000-4000-8000-00000000af00', 11,  19.8,  28.8,  53),
  ('00000000-0000-4000-8000-00000000af00', 12,  19.6,  28.6,  55),
  -- Gitega
  ('00000000-0000-4000-8000-00000000af01',  1,  15.4,  25.6,  58),
  ('00000000-0000-4000-8000-00000000af01',  2,  15.4,  25.8,  55),
  ('00000000-0000-4000-8000-00000000af01',  3,  15.6,  25.8,  62),
  ('00000000-0000-4000-8000-00000000af01',  4,  15.8,  25.4,  65),
  ('00000000-0000-4000-8000-00000000af01',  5,  15.2,  25.4,  35),
  ('00000000-0000-4000-8000-00000000af01',  6,  13.2,  26.2,   7),
  ('00000000-0000-4000-8000-00000000af01',  7,  12.6,  26.6,   3),
  ('00000000-0000-4000-8000-00000000af01',  8,  13.8,  27.6,  10),
  ('00000000-0000-4000-8000-00000000af01',  9,  15.0,  27.8,  29),
  ('00000000-0000-4000-8000-00000000af01', 10,  15.6,  26.6,  48),
  ('00000000-0000-4000-8000-00000000af01', 11,  15.4,  25.4,  62),
  ('00000000-0000-4000-8000-00000000af01', 12,  15.4,  25.4,  62),
  -- Rumonge (lago Tanganica)
  ('00000000-0000-4000-8000-00000000af02',  1,  20.0,  29.0,  52),
  ('00000000-0000-4000-8000-00000000af02',  2,  20.0,  29.2,  52),
  ('00000000-0000-4000-8000-00000000af02',  3,  20.0,  29.2,  55),
  ('00000000-0000-4000-8000-00000000af02',  4,  20.0,  29.0,  58),
  ('00000000-0000-4000-8000-00000000af02',  5,  19.8,  29.4,  26),
  ('00000000-0000-4000-8000-00000000af02',  6,  18.8,  30.0,   6),
  ('00000000-0000-4000-8000-00000000af02',  7,  18.4,  30.4,   3),
  ('00000000-0000-4000-8000-00000000af02',  8,  18.8,  31.4,   6),
  ('00000000-0000-4000-8000-00000000af02',  9,  19.6,  31.8,  19),
  ('00000000-0000-4000-8000-00000000af02', 10,  20.2,  30.8,  32),
  ('00000000-0000-4000-8000-00000000af02', 11,  20.0,  29.2,  52),
  ('00000000-0000-4000-8000-00000000af02', 12,  19.8,  29.0,  55),
  -- Nyanza-Lac (playas del sur)
  ('00000000-0000-4000-8000-00000000af03',  1,  20.2,  29.2,  48),
  ('00000000-0000-4000-8000-00000000af03',  2,  20.2,  29.4,  48),
  ('00000000-0000-4000-8000-00000000af03',  3,  20.2,  29.4,  52),
  ('00000000-0000-4000-8000-00000000af03',  4,  20.2,  29.2,  55),
  ('00000000-0000-4000-8000-00000000af03',  5,  20.0,  29.6,  23),
  ('00000000-0000-4000-8000-00000000af03',  6,  19.0,  30.2,   3),
  ('00000000-0000-4000-8000-00000000af03',  7,  18.6,  30.6,   3),
  ('00000000-0000-4000-8000-00000000af03',  8,  19.0,  31.6,   3),
  ('00000000-0000-4000-8000-00000000af03',  9,  19.8,  32.0,  16),
  ('00000000-0000-4000-8000-00000000af03', 10,  20.4,  31.0,  29),
  ('00000000-0000-4000-8000-00000000af03', 11,  20.2,  29.4,  48),
  ('00000000-0000-4000-8000-00000000af03', 12,  20.0,  29.2,  52),
  -- Fuente del Nilo (Rutovu)
  ('00000000-0000-4000-8000-00000000af04',  1,  11.6,  21.4,  61),
  ('00000000-0000-4000-8000-00000000af04',  2,  11.6,  21.6,  58),
  ('00000000-0000-4000-8000-00000000af04',  3,  11.8,  21.6,  65),
  ('00000000-0000-4000-8000-00000000af04',  4,  12.0,  21.2,  68),
  ('00000000-0000-4000-8000-00000000af04',  5,  11.4,  21.2,  39),
  ('00000000-0000-4000-8000-00000000af04',  6,   9.8,  21.8,  10),
  ('00000000-0000-4000-8000-00000000af04',  7,   9.4,  22.4,   6),
  ('00000000-0000-4000-8000-00000000af04',  8,  10.4,  23.2,  13),
  ('00000000-0000-4000-8000-00000000af04',  9,  11.4,  23.4,  32),
  ('00000000-0000-4000-8000-00000000af04', 10,  11.8,  22.4,  52),
  ('00000000-0000-4000-8000-00000000af04', 11,  11.6,  21.2,  65),
  ('00000000-0000-4000-8000-00000000af04', 12,  11.6,  21.2,  65),
  -- Cataratas de Karera (Rutana)
  ('00000000-0000-4000-8000-00000000af05',  1,  16.4,  27.0,  55),
  ('00000000-0000-4000-8000-00000000af05',  2,  16.4,  27.2,  52),
  ('00000000-0000-4000-8000-00000000af05',  3,  16.6,  27.2,  58),
  ('00000000-0000-4000-8000-00000000af05',  4,  16.8,  26.8,  61),
  ('00000000-0000-4000-8000-00000000af05',  5,  16.0,  26.8,  29),
  ('00000000-0000-4000-8000-00000000af05',  6,  13.8,  27.6,   3),
  ('00000000-0000-4000-8000-00000000af05',  7,  13.2,  28.2,   0),
  ('00000000-0000-4000-8000-00000000af05',  8,  14.6,  29.2,   6),
  ('00000000-0000-4000-8000-00000000af05',  9,  15.8,  29.4,  23),
  ('00000000-0000-4000-8000-00000000af05', 10,  16.6,  28.0,  42),
  ('00000000-0000-4000-8000-00000000af05', 11,  16.4,  26.8,  58),
  ('00000000-0000-4000-8000-00000000af05', 12,  16.4,  26.8,  58),
  -- Parque Nacional de la Ruvubu
  ('00000000-0000-4000-8000-00000000af06',  1,  15.8,  27.2,  55),
  ('00000000-0000-4000-8000-00000000af06',  2,  15.8,  27.4,  52),
  ('00000000-0000-4000-8000-00000000af06',  3,  16.0,  27.2,  58),
  ('00000000-0000-4000-8000-00000000af06',  4,  16.2,  26.8,  61),
  ('00000000-0000-4000-8000-00000000af06',  5,  15.6,  26.8,  32),
  ('00000000-0000-4000-8000-00000000af06',  6,  13.6,  27.4,   6),
  ('00000000-0000-4000-8000-00000000af06',  7,  13.0,  28.0,   3),
  ('00000000-0000-4000-8000-00000000af06',  8,  14.2,  29.0,   6),
  ('00000000-0000-4000-8000-00000000af06',  9,  15.4,  29.2,  26),
  ('00000000-0000-4000-8000-00000000af06', 10,  16.0,  28.0,  45),
  ('00000000-0000-4000-8000-00000000af06', 11,  15.8,  26.8,  61),
  ('00000000-0000-4000-8000-00000000af06', 12,  15.8,  26.8,  61),
  -- Bosque de Bururi
  ('00000000-0000-4000-8000-00000000af07',  1,  13.0,  22.6,  61),
  ('00000000-0000-4000-8000-00000000af07',  2,  13.0,  22.8,  58),
  ('00000000-0000-4000-8000-00000000af07',  3,  13.2,  22.8,  65),
  ('00000000-0000-4000-8000-00000000af07',  4,  13.4,  22.4,  68),
  ('00000000-0000-4000-8000-00000000af07',  5,  12.8,  22.4,  39),
  ('00000000-0000-4000-8000-00000000af07',  6,  11.0,  23.0,  10),
  ('00000000-0000-4000-8000-00000000af07',  7,  10.6,  23.6,   6),
  ('00000000-0000-4000-8000-00000000af07',  8,  11.8,  24.4,  13),
  ('00000000-0000-4000-8000-00000000af07',  9,  12.8,  24.6,  32),
  ('00000000-0000-4000-8000-00000000af07', 10,  13.2,  23.6,  52),
  ('00000000-0000-4000-8000-00000000af07', 11,  13.0,  22.4,  65),
  ('00000000-0000-4000-8000-00000000af07', 12,  13.0,  22.4,  65),
  -- Lagos de Kirundo (aves)
  ('00000000-0000-4000-8000-00000000af08',  1,  15.6,  26.6,  48),
  ('00000000-0000-4000-8000-00000000af08',  2,  15.6,  26.8,  48),
  ('00000000-0000-4000-8000-00000000af08',  3,  15.8,  26.6,  55),
  ('00000000-0000-4000-8000-00000000af08',  4,  16.0,  26.0,  61),
  ('00000000-0000-4000-8000-00000000af08',  5,  15.6,  26.0,  35),
  ('00000000-0000-4000-8000-00000000af08',  6,  14.0,  26.8,   6),
  ('00000000-0000-4000-8000-00000000af08',  7,  13.4,  27.4,   3),
  ('00000000-0000-4000-8000-00000000af08',  8,  14.4,  28.4,  10),
  ('00000000-0000-4000-8000-00000000af08',  9,  15.2,  28.6,  29),
  ('00000000-0000-4000-8000-00000000af08', 10,  15.8,  27.4,  45),
  ('00000000-0000-4000-8000-00000000af08', 11,  15.6,  26.2,  58),
  ('00000000-0000-4000-8000-00000000af08', 12,  15.6,  26.2,  55)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Buyumbura, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'comida', 'Desayuno (café o té con algo en una cafetería)', 4, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'comida', 'Almuerzo (buffet local o plato del día)', 6, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'comida', 'Cena en restaurante', 15, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'comida', 'Compra en supermercado', 25, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'comida', 'Brochette o sambusa al paso', 1, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'alojamiento', 'Hotel 3★, noche', 70, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'alojamiento', 'Lavandería (una carga)', 5, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'alojamiento', 'Depósito de equipaje', 3, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'alojamiento', 'Propinas y servicio', 3, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'transporte', 'Bus o taxi colectivo, día', 3, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'transporte', 'Taxi, viaje corto', 6, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 20, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 8, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'entretenimiento', 'Visita guiada', 30, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'entretenimiento', 'Entrada a museo', 5, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'entretenimiento', 'Salida nocturna', 15, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000af00'::uuid, 'entretenimiento', 'Excursión de día completo', 80, 'USD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000af01'::uuid, 0.80),  -- Gitega
  ('00000000-0000-4000-8000-00000000af02'::uuid, 0.70),  -- Rumonge (lago Tanganica)
  ('00000000-0000-4000-8000-00000000af03'::uuid, 0.75),  -- Nyanza-Lac (playas del sur)
  ('00000000-0000-4000-8000-00000000af04'::uuid, 0.60),  -- Fuente del Nilo (Rutovu)
  ('00000000-0000-4000-8000-00000000af05'::uuid, 0.60),  -- Cataratas de Karera (Rutana)
  ('00000000-0000-4000-8000-00000000af06'::uuid, 1.00),  -- Parque Nacional de la Ruvubu
  ('00000000-0000-4000-8000-00000000af07'::uuid, 0.60),  -- Bosque de Bururi
  ('00000000-0000-4000-8000-00000000af08'::uuid, 0.65)  -- Lagos de Kirundo (aves)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000af00'
on conflict (id) do nothing;
