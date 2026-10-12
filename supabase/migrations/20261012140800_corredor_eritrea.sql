-- Eritrea, con Asmara como ciudad base: es la capital y por donde entra casi
-- todo el que viaja. Precios en nakfas, sin centavos.
--
-- Entra con aviso (spec, 15.10): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son la
-- capital, el camino al mar —Debre Bizen, Filfil, Ghinda—, Massawa y las islas
-- Dahlak, Keren y Nakfa; ninguna está a menos de veinticinco kilómetros de una
-- frontera terrestre. Para salir de Asmara hace falta un permiso, y la guía lo
-- dice.
--
-- Asmara está a más de dos mil trescientos metros: días templados todo el año,
-- noches frescas en invierno y lluvias cortas en julio y agosto. Bajando hacia
-- el mar Rojo el clima cambia por completo: Massawa y las islas Dahlak son de
-- lo más caluroso del mundo en verano, y llueve en invierno. La escarpa del
-- este, en Filfil y Ghinda, recibe lluvia en las dos temporadas.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Monasterio de Debre Bizen en enero: 6,2 / 21,1 → frio + fresco + templado → abrigo, cero playa
--   Islas Dahlak en julio: 30 / 40,4 → calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000bd00 a bd08, la base es bd00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000bd00', 'Asmara',                    'eritrea', 'ERN', true,  'asmara'),
  ('00000000-0000-4000-8000-00000000bd01', 'Massawa',                   'eritrea', 'ERN', false, 'massawa'),
  ('00000000-0000-4000-8000-00000000bd02', 'Playa de Gurgusum',         'eritrea', 'ERN', false, 'gurgusum'),
  ('00000000-0000-4000-8000-00000000bd03', 'Islas Dahlak',              'eritrea', 'ERN', false, 'dahlak'),
  ('00000000-0000-4000-8000-00000000bd04', 'Keren',                     'eritrea', 'ERN', false, 'keren'),
  ('00000000-0000-4000-8000-00000000bd05', 'Bosque de Filfil',          'eritrea', 'ERN', false, 'filfil'),
  ('00000000-0000-4000-8000-00000000bd06', 'Monasterio de Debre Bizen', 'eritrea', 'ERN', false, 'debre-bizen'),
  ('00000000-0000-4000-8000-00000000bd07', 'Ghinda',                    'eritrea', 'ERN', false, 'ghinda'),
  ('00000000-0000-4000-8000-00000000bd08', 'Nakfa',                     'eritrea', 'ERN', false, 'nakfa')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Asmara
  ('00000000-0000-4000-8000-00000000bd00',  1,   7.2,  22.6,   0),
  ('00000000-0000-4000-8000-00000000bd00',  2,   8.2,  23.6,   3),
  ('00000000-0000-4000-8000-00000000bd00',  3,   9.6,  25.0,   6),
  ('00000000-0000-4000-8000-00000000bd00',  4,  11.2,  25.6,  10),
  ('00000000-0000-4000-8000-00000000bd00',  5,  12.4,  26.0,  13),
  ('00000000-0000-4000-8000-00000000bd00',  6,  12.4,  26.0,  13),
  ('00000000-0000-4000-8000-00000000bd00',  7,  12.6,  22.6,  42),
  ('00000000-0000-4000-8000-00000000bd00',  8,  12.6,  22.0,  42),
  ('00000000-0000-4000-8000-00000000bd00',  9,  11.2,  23.6,  10),
  ('00000000-0000-4000-8000-00000000bd00', 10,   9.6,  22.4,   3),
  ('00000000-0000-4000-8000-00000000bd00', 11,   8.6,  22.0,   3),
  ('00000000-0000-4000-8000-00000000bd00', 12,   7.6,  21.6,   0),
  -- Massawa
  ('00000000-0000-4000-8000-00000000bd01',  1,  21.4,  29.4,  10),
  ('00000000-0000-4000-8000-00000000bd01',  2,  21.4,  29.6,   6),
  ('00000000-0000-4000-8000-00000000bd01',  3,  22.6,  31.2,   3),
  ('00000000-0000-4000-8000-00000000bd01',  4,  24.2,  32.8,   3),
  ('00000000-0000-4000-8000-00000000bd01',  5,  26.0,  35.4,   0),
  ('00000000-0000-4000-8000-00000000bd01',  6,  28.2,  38.4,   0),
  ('00000000-0000-4000-8000-00000000bd01',  7,  29.6,  40.0,   3),
  ('00000000-0000-4000-8000-00000000bd01',  8,  29.6,  39.6,   3),
  ('00000000-0000-4000-8000-00000000bd01',  9,  28.0,  37.4,   0),
  ('00000000-0000-4000-8000-00000000bd01', 10,  25.8,  34.6,   3),
  ('00000000-0000-4000-8000-00000000bd01', 11,  23.8,  32.0,   6),
  ('00000000-0000-4000-8000-00000000bd01', 12,  22.2,  30.4,  10),
  -- Playa de Gurgusum
  ('00000000-0000-4000-8000-00000000bd02',  1,  21.6,  29.2,  10),
  ('00000000-0000-4000-8000-00000000bd02',  2,  21.6,  29.4,   6),
  ('00000000-0000-4000-8000-00000000bd02',  3,  22.8,  31.0,   3),
  ('00000000-0000-4000-8000-00000000bd02',  4,  24.4,  32.6,   3),
  ('00000000-0000-4000-8000-00000000bd02',  5,  26.2,  35.2,   0),
  ('00000000-0000-4000-8000-00000000bd02',  6,  28.4,  38.2,   0),
  ('00000000-0000-4000-8000-00000000bd02',  7,  29.8,  39.8,   3),
  ('00000000-0000-4000-8000-00000000bd02',  8,  29.8,  39.4,   3),
  ('00000000-0000-4000-8000-00000000bd02',  9,  28.2,  37.2,   0),
  ('00000000-0000-4000-8000-00000000bd02', 10,  26.0,  34.4,   3),
  ('00000000-0000-4000-8000-00000000bd02', 11,  24.0,  31.8,   6),
  ('00000000-0000-4000-8000-00000000bd02', 12,  22.4,  30.2,  10),
  -- Islas Dahlak
  ('00000000-0000-4000-8000-00000000bd03',  1,  21.8,  29.8,   6),
  ('00000000-0000-4000-8000-00000000bd03',  2,  21.8,  30.0,   3),
  ('00000000-0000-4000-8000-00000000bd03',  3,  23.0,  31.6,   3),
  ('00000000-0000-4000-8000-00000000bd03',  4,  24.6,  33.2,   3),
  ('00000000-0000-4000-8000-00000000bd03',  5,  26.4,  35.8,   0),
  ('00000000-0000-4000-8000-00000000bd03',  6,  28.6,  38.8,   0),
  ('00000000-0000-4000-8000-00000000bd03',  7,  30.0,  40.4,   3),
  ('00000000-0000-4000-8000-00000000bd03',  8,  30.0,  40.0,   3),
  ('00000000-0000-4000-8000-00000000bd03',  9,  28.4,  37.8,   0),
  ('00000000-0000-4000-8000-00000000bd03', 10,  26.2,  35.0,   3),
  ('00000000-0000-4000-8000-00000000bd03', 11,  24.2,  32.4,   3),
  ('00000000-0000-4000-8000-00000000bd03', 12,  22.6,  30.8,   6),
  -- Keren
  ('00000000-0000-4000-8000-00000000bd04',  1,  13.6,  27.6,   0),
  ('00000000-0000-4000-8000-00000000bd04',  2,  14.6,  29.0,   0),
  ('00000000-0000-4000-8000-00000000bd04',  3,  16.4,  31.0,   3),
  ('00000000-0000-4000-8000-00000000bd04',  4,  18.4,  32.6,   6),
  ('00000000-0000-4000-8000-00000000bd04',  5,  20.2,  33.6,  10),
  ('00000000-0000-4000-8000-00000000bd04',  6,  21.2,  34.0,  13),
  ('00000000-0000-4000-8000-00000000bd04',  7,  19.6,  30.0,  39),
  ('00000000-0000-4000-8000-00000000bd04',  8,  18.8,  28.6,  42),
  ('00000000-0000-4000-8000-00000000bd04',  9,  18.6,  30.6,  13),
  ('00000000-0000-4000-8000-00000000bd04', 10,  17.4,  30.6,   3),
  ('00000000-0000-4000-8000-00000000bd04', 11,  15.6,  29.0,   0),
  ('00000000-0000-4000-8000-00000000bd04', 12,  14.0,  27.6,   0),
  -- Bosque de Filfil
  ('00000000-0000-4000-8000-00000000bd05',  1,  15.6,  26.0,  26),
  ('00000000-0000-4000-8000-00000000bd05',  2,  15.6,  26.4,  23),
  ('00000000-0000-4000-8000-00000000bd05',  3,  16.6,  27.6,  23),
  ('00000000-0000-4000-8000-00000000bd05',  4,  17.8,  29.0,  16),
  ('00000000-0000-4000-8000-00000000bd05',  5,  19.2,  30.6,  10),
  ('00000000-0000-4000-8000-00000000bd05',  6,  20.6,  32.0,   6),
  ('00000000-0000-4000-8000-00000000bd05',  7,  20.6,  31.0,  16),
  ('00000000-0000-4000-8000-00000000bd05',  8,  20.2,  30.4,  19),
  ('00000000-0000-4000-8000-00000000bd05',  9,  19.6,  30.0,  10),
  ('00000000-0000-4000-8000-00000000bd05', 10,  18.4,  28.6,  16),
  ('00000000-0000-4000-8000-00000000bd05', 11,  17.0,  27.0,  23),
  ('00000000-0000-4000-8000-00000000bd05', 12,  16.0,  26.0,  26),
  -- Monasterio de Debre Bizen
  ('00000000-0000-4000-8000-00000000bd06',  1,   6.2,  21.1,   6),
  ('00000000-0000-4000-8000-00000000bd06',  2,   7.2,  22.1,   6),
  ('00000000-0000-4000-8000-00000000bd06',  3,   8.6,  23.5,  10),
  ('00000000-0000-4000-8000-00000000bd06',  4,  10.2,  24.1,  13),
  ('00000000-0000-4000-8000-00000000bd06',  5,  11.4,  24.5,  13),
  ('00000000-0000-4000-8000-00000000bd06',  6,  11.4,  24.5,  10),
  ('00000000-0000-4000-8000-00000000bd06',  7,  11.6,  21.1,  42),
  ('00000000-0000-4000-8000-00000000bd06',  8,  11.6,  20.5,  42),
  ('00000000-0000-4000-8000-00000000bd06',  9,  10.2,  22.1,  10),
  ('00000000-0000-4000-8000-00000000bd06', 10,   8.6,  20.9,   6),
  ('00000000-0000-4000-8000-00000000bd06', 11,   7.6,  20.5,   6),
  ('00000000-0000-4000-8000-00000000bd06', 12,   6.6,  20.1,   6),
  -- Ghinda
  ('00000000-0000-4000-8000-00000000bd07',  1,  17.0,  27.6,  26),
  ('00000000-0000-4000-8000-00000000bd07',  2,  17.0,  28.0,  23),
  ('00000000-0000-4000-8000-00000000bd07',  3,  18.2,  29.4,  19),
  ('00000000-0000-4000-8000-00000000bd07',  4,  19.6,  31.0,  13),
  ('00000000-0000-4000-8000-00000000bd07',  5,  21.2,  33.0,   6),
  ('00000000-0000-4000-8000-00000000bd07',  6,  22.6,  35.0,   3),
  ('00000000-0000-4000-8000-00000000bd07',  7,  22.4,  34.6,  10),
  ('00000000-0000-4000-8000-00000000bd07',  8,  22.0,  34.0,  13),
  ('00000000-0000-4000-8000-00000000bd07',  9,  21.6,  33.6,   6),
  ('00000000-0000-4000-8000-00000000bd07', 10,  20.4,  31.4,  13),
  ('00000000-0000-4000-8000-00000000bd07', 11,  18.6,  29.4,  19),
  ('00000000-0000-4000-8000-00000000bd07', 12,  17.4,  28.0,  26),
  -- Nakfa
  ('00000000-0000-4000-8000-00000000bd08',  1,  10.6,  24.6,   3),
  ('00000000-0000-4000-8000-00000000bd08',  2,  11.4,  25.6,   3),
  ('00000000-0000-4000-8000-00000000bd08',  3,  13.4,  27.6,   3),
  ('00000000-0000-4000-8000-00000000bd08',  4,  15.4,  29.4,   6),
  ('00000000-0000-4000-8000-00000000bd08',  5,  17.2,  31.0,   6),
  ('00000000-0000-4000-8000-00000000bd08',  6,  18.4,  32.0,   6),
  ('00000000-0000-4000-8000-00000000bd08',  7,  18.0,  29.4,  26),
  ('00000000-0000-4000-8000-00000000bd08',  8,  17.6,  28.6,  29),
  ('00000000-0000-4000-8000-00000000bd08',  9,  16.4,  29.6,   6),
  ('00000000-0000-4000-8000-00000000bd08', 10,  14.4,  28.4,   3),
  ('00000000-0000-4000-8000-00000000bd08', 11,  12.4,  26.4,   3),
  ('00000000-0000-4000-8000-00000000bd08', 12,  10.8,  24.6,   3)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Asmara, en ERN. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'comida', 'Desayuno (macchiato y algo en un café)', 60, 'ERN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'comida', 'Almuerzo (zigni con injera o pasta)', 120, 'ERN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'comida', 'Cena en restaurante', 300, 'ERN', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'comida', 'Compra en supermercado', 600, 'ERN', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'comida', 'Sambusa o ful al paso', 20, 'ERN', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'alojamiento', 'Hotel 3★, noche', 1500, 'ERN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'alojamiento', 'Lavandería (una carga)', 100, 'ERN', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'alojamiento', 'Depósito de equipaje', 60, 'ERN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'alojamiento', 'Propinas y servicio', 60, 'ERN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'transporte', 'Bus urbano, día', 30, 'ERN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'transporte', 'Taxi, viaje corto', 100, 'ERN', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 200, 'ERN', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 150, 'ERN', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 150, 'ERN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'entretenimiento', 'Visita guiada', 600, 'ERN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'entretenimiento', 'Entrada a museo', 50, 'ERN', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'entretenimiento', 'Salida nocturna', 300, 'ERN', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000bd00'::uuid, 'entretenimiento', 'Excursión de día completo', 2000, 'ERN', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000bd01'::uuid, 0.90),  -- Massawa
  ('00000000-0000-4000-8000-00000000bd02'::uuid, 0.95),  -- Playa de Gurgusum
  ('00000000-0000-4000-8000-00000000bd03'::uuid, 1.60),  -- Islas Dahlak
  ('00000000-0000-4000-8000-00000000bd04'::uuid, 0.70),  -- Keren
  ('00000000-0000-4000-8000-00000000bd05'::uuid, 0.70),  -- Bosque de Filfil
  ('00000000-0000-4000-8000-00000000bd06'::uuid, 0.60),  -- Monasterio de Debre Bizen
  ('00000000-0000-4000-8000-00000000bd07'::uuid, 0.60),  -- Ghinda
  ('00000000-0000-4000-8000-00000000bd08'::uuid, 0.60)  -- Nakfa
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000bd00'
on conflict (id) do nothing;
