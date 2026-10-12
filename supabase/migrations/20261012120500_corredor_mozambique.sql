-- Mozambique, con Maputo como ciudad base: es la capital y por donde entra
-- casi todo el que viaja. Precios en meticales, sin centavos.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son
-- las del sur, la costa de Inhambane, Gorongosa, Chimanimani y la Isla de
-- Mozambique; ninguna está en Cabo Delgado.
--
-- Hemisferio sur y trópico. Maputo tiene veranos calurosos y húmedos e
-- inviernos templados y secos; hacia el norte el calor sube, y las lluvias de
-- verano, de diciembre a marzo, son más fuertes, con la temporada de ciclones.
-- Gorongosa y Chimanimani tienen lluvias fuertes de noviembre a marzo y noches
-- frescas en invierno.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Montes Chimanimani en julio: 8,4 / 22 → frio + fresco + templado → abrigo, cero playa
--   Parque Nacional Gorongosa en noviembre: 21,4 / 34,2 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000aa00 a aa08, la base es aa00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000aa00', 'Maputo',                               'mozambique', 'MZN', true,  'maputo'),
  ('00000000-0000-4000-8000-00000000aa01', 'Ponta do Ouro',                        'mozambique', 'MZN', false, 'ponta-do-ouro'),
  ('00000000-0000-4000-8000-00000000aa02', 'Bilene (laguna Uembje)',               'mozambique', 'MZN', false, 'bilene'),
  ('00000000-0000-4000-8000-00000000aa03', 'Tofo (tiburones ballena)',             'mozambique', 'MZN', false, 'tofo'),
  ('00000000-0000-4000-8000-00000000aa04', 'Inhambane',                            'mozambique', 'MZN', false, 'inhambane'),
  ('00000000-0000-4000-8000-00000000aa05', 'Vilankulo (archipiélago de Bazaruto)', 'mozambique', 'MZN', false, 'vilankulo'),
  ('00000000-0000-4000-8000-00000000aa06', 'Parque Nacional Gorongosa',            'mozambique', 'MZN', false, 'gorongosa'),
  ('00000000-0000-4000-8000-00000000aa07', 'Isla de Mozambique',                   'mozambique', 'MZN', false, 'ilha-de-mocambique'),
  ('00000000-0000-4000-8000-00000000aa08', 'Montes Chimanimani',                   'mozambique', 'MZN', false, 'chimanimani')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Maputo
  ('00000000-0000-4000-8000-00000000aa00',  1,  21.6,  30.2,  29),
  ('00000000-0000-4000-8000-00000000aa00',  2,  21.8,  30.2,  29),
  ('00000000-0000-4000-8000-00000000aa00',  3,  21.0,  29.4,  26),
  ('00000000-0000-4000-8000-00000000aa00',  4,  18.6,  28.2,  19),
  ('00000000-0000-4000-8000-00000000aa00',  5,  16.0,  26.6,  13),
  ('00000000-0000-4000-8000-00000000aa00',  6,  13.4,  24.6,  10),
  ('00000000-0000-4000-8000-00000000aa00',  7,  13.2,  24.4,  10),
  ('00000000-0000-4000-8000-00000000aa00',  8,  14.6,  25.4,  10),
  ('00000000-0000-4000-8000-00000000aa00',  9,  16.4,  26.8,  13),
  ('00000000-0000-4000-8000-00000000aa00', 10,  18.0,  27.4,  19),
  ('00000000-0000-4000-8000-00000000aa00', 11,  19.4,  28.4,  23),
  ('00000000-0000-4000-8000-00000000aa00', 12,  20.8,  29.6,  26),
  -- Ponta do Ouro
  ('00000000-0000-4000-8000-00000000aa01',  1,  21.4,  29.4,  32),
  ('00000000-0000-4000-8000-00000000aa01',  2,  21.6,  29.4,  32),
  ('00000000-0000-4000-8000-00000000aa01',  3,  20.8,  28.8,  29),
  ('00000000-0000-4000-8000-00000000aa01',  4,  18.8,  27.6,  23),
  ('00000000-0000-4000-8000-00000000aa01',  5,  16.4,  26.0,  16),
  ('00000000-0000-4000-8000-00000000aa01',  6,  14.0,  24.2,  13),
  ('00000000-0000-4000-8000-00000000aa01',  7,  13.6,  24.0,  13),
  ('00000000-0000-4000-8000-00000000aa01',  8,  14.8,  24.6,  13),
  ('00000000-0000-4000-8000-00000000aa01',  9,  16.6,  25.6,  16),
  ('00000000-0000-4000-8000-00000000aa01', 10,  18.0,  26.4,  23),
  ('00000000-0000-4000-8000-00000000aa01', 11,  19.4,  27.6,  26),
  ('00000000-0000-4000-8000-00000000aa01', 12,  20.6,  28.8,  29),
  -- Bilene (laguna Uembje)
  ('00000000-0000-4000-8000-00000000aa02',  1,  21.6,  30.4,  29),
  ('00000000-0000-4000-8000-00000000aa02',  2,  21.8,  30.6,  29),
  ('00000000-0000-4000-8000-00000000aa02',  3,  21.0,  29.8,  26),
  ('00000000-0000-4000-8000-00000000aa02',  4,  18.6,  28.4,  19),
  ('00000000-0000-4000-8000-00000000aa02',  5,  15.8,  26.8,  13),
  ('00000000-0000-4000-8000-00000000aa02',  6,  13.2,  24.8,  10),
  ('00000000-0000-4000-8000-00000000aa02',  7,  13.0,  24.6,  10),
  ('00000000-0000-4000-8000-00000000aa02',  8,  14.4,  25.6,  10),
  ('00000000-0000-4000-8000-00000000aa02',  9,  16.4,  27.0,  13),
  ('00000000-0000-4000-8000-00000000aa02', 10,  18.0,  27.8,  19),
  ('00000000-0000-4000-8000-00000000aa02', 11,  19.4,  28.8,  23),
  ('00000000-0000-4000-8000-00000000aa02', 12,  20.8,  29.8,  26),
  -- Tofo (tiburones ballena)
  ('00000000-0000-4000-8000-00000000aa03',  1,  22.6,  30.0,  32),
  ('00000000-0000-4000-8000-00000000aa03',  2,  22.8,  30.2,  32),
  ('00000000-0000-4000-8000-00000000aa03',  3,  22.2,  29.6,  32),
  ('00000000-0000-4000-8000-00000000aa03',  4,  20.6,  28.6,  26),
  ('00000000-0000-4000-8000-00000000aa03',  5,  18.4,  27.0,  23),
  ('00000000-0000-4000-8000-00000000aa03',  6,  16.2,  25.4,  19),
  ('00000000-0000-4000-8000-00000000aa03',  7,  15.8,  25.0,  19),
  ('00000000-0000-4000-8000-00000000aa03',  8,  16.6,  25.6,  13),
  ('00000000-0000-4000-8000-00000000aa03',  9,  18.2,  26.6,  13),
  ('00000000-0000-4000-8000-00000000aa03', 10,  19.6,  27.4,  16),
  ('00000000-0000-4000-8000-00000000aa03', 11,  20.8,  28.4,  23),
  ('00000000-0000-4000-8000-00000000aa03', 12,  22.0,  29.4,  29),
  -- Inhambane
  ('00000000-0000-4000-8000-00000000aa04',  1,  22.4,  30.2,  32),
  ('00000000-0000-4000-8000-00000000aa04',  2,  22.6,  30.4,  32),
  ('00000000-0000-4000-8000-00000000aa04',  3,  22.0,  29.8,  32),
  ('00000000-0000-4000-8000-00000000aa04',  4,  20.4,  28.8,  26),
  ('00000000-0000-4000-8000-00000000aa04',  5,  18.2,  27.2,  23),
  ('00000000-0000-4000-8000-00000000aa04',  6,  16.0,  25.6,  19),
  ('00000000-0000-4000-8000-00000000aa04',  7,  15.6,  25.2,  19),
  ('00000000-0000-4000-8000-00000000aa04',  8,  16.4,  25.8,  13),
  ('00000000-0000-4000-8000-00000000aa04',  9,  18.0,  26.8,  13),
  ('00000000-0000-4000-8000-00000000aa04', 10,  19.4,  27.6,  16),
  ('00000000-0000-4000-8000-00000000aa04', 11,  20.6,  28.6,  23),
  ('00000000-0000-4000-8000-00000000aa04', 12,  21.8,  29.6,  29),
  -- Vilankulo (archipiélago de Bazaruto)
  ('00000000-0000-4000-8000-00000000aa05',  1,  23.0,  31.4,  35),
  ('00000000-0000-4000-8000-00000000aa05',  2,  23.2,  31.4,  35),
  ('00000000-0000-4000-8000-00000000aa05',  3,  22.4,  30.8,  29),
  ('00000000-0000-4000-8000-00000000aa05',  4,  20.6,  29.8,  19),
  ('00000000-0000-4000-8000-00000000aa05',  5,  18.0,  28.0,  13),
  ('00000000-0000-4000-8000-00000000aa05',  6,  15.6,  26.2,  10),
  ('00000000-0000-4000-8000-00000000aa05',  7,  15.0,  25.8,  10),
  ('00000000-0000-4000-8000-00000000aa05',  8,  16.0,  26.6,   6),
  ('00000000-0000-4000-8000-00000000aa05',  9,  17.8,  27.8,   6),
  ('00000000-0000-4000-8000-00000000aa05', 10,  19.8,  29.0,  10),
  ('00000000-0000-4000-8000-00000000aa05', 11,  21.2,  30.0,  19),
  ('00000000-0000-4000-8000-00000000aa05', 12,  22.4,  30.8,  29),
  -- Parque Nacional Gorongosa
  ('00000000-0000-4000-8000-00000000aa06',  1,  21.6,  32.6,  52),
  ('00000000-0000-4000-8000-00000000aa06',  2,  21.6,  32.4,  48),
  ('00000000-0000-4000-8000-00000000aa06',  3,  21.0,  32.0,  39),
  ('00000000-0000-4000-8000-00000000aa06',  4,  19.2,  31.0,  19),
  ('00000000-0000-4000-8000-00000000aa06',  5,  16.2,  29.4,   6),
  ('00000000-0000-4000-8000-00000000aa06',  6,  13.6,  27.4,   3),
  ('00000000-0000-4000-8000-00000000aa06',  7,  13.0,  27.0,   3),
  ('00000000-0000-4000-8000-00000000aa06',  8,  14.4,  28.8,   3),
  ('00000000-0000-4000-8000-00000000aa06',  9,  17.0,  31.6,   3),
  ('00000000-0000-4000-8000-00000000aa06', 10,  19.8,  33.8,  10),
  ('00000000-0000-4000-8000-00000000aa06', 11,  21.4,  34.2,  26),
  ('00000000-0000-4000-8000-00000000aa06', 12,  21.8,  33.0,  45),
  -- Isla de Mozambique
  ('00000000-0000-4000-8000-00000000aa07',  1,  24.6,  31.0,  48),
  ('00000000-0000-4000-8000-00000000aa07',  2,  24.6,  31.0,  45),
  ('00000000-0000-4000-8000-00000000aa07',  3,  24.4,  31.0,  42),
  ('00000000-0000-4000-8000-00000000aa07',  4,  23.8,  30.4,  26),
  ('00000000-0000-4000-8000-00000000aa07',  5,  22.4,  29.4,  13),
  ('00000000-0000-4000-8000-00000000aa07',  6,  20.6,  28.0,  10),
  ('00000000-0000-4000-8000-00000000aa07',  7,  20.0,  27.4,  10),
  ('00000000-0000-4000-8000-00000000aa07',  8,  20.0,  27.8,   6),
  ('00000000-0000-4000-8000-00000000aa07',  9,  21.0,  28.8,   3),
  ('00000000-0000-4000-8000-00000000aa07', 10,  22.4,  30.0,   3),
  ('00000000-0000-4000-8000-00000000aa07', 11,  23.8,  31.2,  10),
  ('00000000-0000-4000-8000-00000000aa07', 12,  24.6,  31.4,  32),
  -- Montes Chimanimani
  ('00000000-0000-4000-8000-00000000aa08',  1,  17.6,  27.6,  61),
  ('00000000-0000-4000-8000-00000000aa08',  2,  17.6,  27.4,  55),
  ('00000000-0000-4000-8000-00000000aa08',  3,  16.8,  26.8,  48),
  ('00000000-0000-4000-8000-00000000aa08',  4,  14.8,  25.8,  26),
  ('00000000-0000-4000-8000-00000000aa08',  5,  11.6,  24.2,  10),
  ('00000000-0000-4000-8000-00000000aa08',  6,   8.8,  22.2,   6),
  ('00000000-0000-4000-8000-00000000aa08',  7,   8.4,  22.0,   6),
  ('00000000-0000-4000-8000-00000000aa08',  8,   9.8,  23.8,   3),
  ('00000000-0000-4000-8000-00000000aa08',  9,  12.4,  26.4,   3),
  ('00000000-0000-4000-8000-00000000aa08', 10,  15.0,  28.4,  10),
  ('00000000-0000-4000-8000-00000000aa08', 11,  16.8,  28.6,  35),
  ('00000000-0000-4000-8000-00000000aa08', 12,  17.4,  27.8,  55)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Maputo, en MZN. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'comida', 'Desayuno (café y algo en una pastelería)', 350, 'MZN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'comida', 'Almuerzo (matapa o plato del día)', 500, 'MZN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'comida', 'Cena en restaurante', 1500, 'MZN', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'comida', 'Compra en supermercado', 2000, 'MZN', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'comida', 'Prego o rissóis al paso', 120, 'MZN', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'alojamiento', 'Hotel 3★, noche', 6000, 'MZN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'alojamiento', 'Lavandería (una carga)', 400, 'MZN', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'alojamiento', 'Depósito de equipaje', 250, 'MZN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'alojamiento', 'Propinas y servicio', 250, 'MZN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'transporte', 'Chapa, día', 100, 'MZN', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'transporte', 'Taxi o Yango, viaje corto', 400, 'MZN', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 1000, 'MZN', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 1500, 'MZN', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 300, 'MZN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'entretenimiento', 'Visita guiada', 2000, 'MZN', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'entretenimiento', 'Entrada a museo', 200, 'MZN', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'entretenimiento', 'Salida nocturna', 1500, 'MZN', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000aa00'::uuid, 'entretenimiento', 'Excursión de día completo', 6000, 'MZN', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000aa01'::uuid, 1.10),  -- Ponta do Ouro
  ('00000000-0000-4000-8000-00000000aa02'::uuid, 0.90),  -- Bilene (laguna Uembje)
  ('00000000-0000-4000-8000-00000000aa03'::uuid, 0.90),  -- Tofo (tiburones ballena)
  ('00000000-0000-4000-8000-00000000aa04'::uuid, 0.80),  -- Inhambane
  ('00000000-0000-4000-8000-00000000aa05'::uuid, 1.20),  -- Vilankulo (archipiélago de Bazaruto)
  ('00000000-0000-4000-8000-00000000aa06'::uuid, 1.80),  -- Parque Nacional Gorongosa
  ('00000000-0000-4000-8000-00000000aa07'::uuid, 0.75),  -- Isla de Mozambique
  ('00000000-0000-4000-8000-00000000aa08'::uuid, 0.70)  -- Montes Chimanimani
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000aa00'
on conflict (id) do nothing;
