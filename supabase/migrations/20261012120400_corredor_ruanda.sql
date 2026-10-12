-- Ruanda, con Kigali como ciudad base: es la capital y por donde entra casi
-- todo el que viaja. Precios en francos ruandeses, sin centavos.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Ninguna ciudad del planificador está
-- en la franja de diez kilómetros sobre la frontera con el Congo que las
-- recomendaciones desaconsejan, ni en Rubavu ni en Rusizi. Musanze queda unos
-- kilómetros afuera, pero el parque de los volcanes llega hasta la frontera:
-- sus permisos no entran en el presupuesto, y la guía lo dice.
--
-- Sobre el ecuador y en altura: calor templado todo el año, con dos temporadas
-- de lluvia, de marzo a mayo y de septiembre a diciembre, y una seca de junio a
-- agosto. Los volcanes y el bosque de Nyungwe son frescos y lluviosos; Akagera,
-- en el este, lo más cálido y seco.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Bosque de Nyungwe en julio: 11,2 / 22,4 → fresco + templado → capas, cero playa
--   Parque Nacional Akagera en agosto: 15,8 / 30,2 → fresco + templado + calido → capas, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000a900 a a908, la base es a900.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000a900', 'Kigali',                  'ruanda', 'RWF', true,  'kigali'),
  ('00000000-0000-4000-8000-00000000a901', 'Musanze',                 'ruanda', 'RWF', false, 'musanze'),
  ('00000000-0000-4000-8000-00000000a902', 'Bosque de Nyungwe',       'ruanda', 'RWF', false, 'nyungwe'),
  ('00000000-0000-4000-8000-00000000a903', 'Parque Nacional Akagera', 'ruanda', 'RWF', false, 'akagera'),
  ('00000000-0000-4000-8000-00000000a904', 'Karongi (lago Kivu)',     'ruanda', 'RWF', false, 'karongi'),
  ('00000000-0000-4000-8000-00000000a905', 'Huye (Butare)',           'ruanda', 'RWF', false, 'huye'),
  ('00000000-0000-4000-8000-00000000a906', 'Nyanza (palacio real)',   'ruanda', 'RWF', false, 'nyanza'),
  ('00000000-0000-4000-8000-00000000a907', 'Nyamata (memorial)',      'ruanda', 'RWF', false, 'nyamata'),
  ('00000000-0000-4000-8000-00000000a908', 'Lago Muhazi',             'ruanda', 'RWF', false, 'muhazi')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Kigali
  ('00000000-0000-4000-8000-00000000a900',  1,  16.0,  27.0,  35),
  ('00000000-0000-4000-8000-00000000a900',  2,  16.2,  27.4,  39),
  ('00000000-0000-4000-8000-00000000a900',  3,  16.2,  27.0,  52),
  ('00000000-0000-4000-8000-00000000a900',  4,  16.4,  26.4,  65),
  ('00000000-0000-4000-8000-00000000a900',  5,  16.2,  26.0,  52),
  ('00000000-0000-4000-8000-00000000a900',  6,  15.2,  26.6,  13),
  ('00000000-0000-4000-8000-00000000a900',  7,  14.8,  27.4,   6),
  ('00000000-0000-4000-8000-00000000a900',  8,  15.4,  28.2,  16),
  ('00000000-0000-4000-8000-00000000a900',  9,  15.8,  28.0,  35),
  ('00000000-0000-4000-8000-00000000a900', 10,  16.0,  27.0,  52),
  ('00000000-0000-4000-8000-00000000a900', 11,  15.8,  26.0,  61),
  ('00000000-0000-4000-8000-00000000a900', 12,  15.8,  26.4,  45),
  -- Musanze
  ('00000000-0000-4000-8000-00000000a901',  1,  13.0,  23.8,  42),
  ('00000000-0000-4000-8000-00000000a901',  2,  13.2,  24.2,  45),
  ('00000000-0000-4000-8000-00000000a901',  3,  13.4,  23.8,  58),
  ('00000000-0000-4000-8000-00000000a901',  4,  13.6,  23.2,  68),
  ('00000000-0000-4000-8000-00000000a901',  5,  13.2,  22.8,  58),
  ('00000000-0000-4000-8000-00000000a901',  6,  12.0,  23.0,  19),
  ('00000000-0000-4000-8000-00000000a901',  7,  11.4,  23.6,  10),
  ('00000000-0000-4000-8000-00000000a901',  8,  12.0,  24.2,  23),
  ('00000000-0000-4000-8000-00000000a901',  9,  12.6,  24.0,  45),
  ('00000000-0000-4000-8000-00000000a901', 10,  13.0,  23.2,  61),
  ('00000000-0000-4000-8000-00000000a901', 11,  13.0,  22.6,  65),
  ('00000000-0000-4000-8000-00000000a901', 12,  12.8,  23.0,  52),
  -- Bosque de Nyungwe
  ('00000000-0000-4000-8000-00000000a902',  1,  12.4,  21.6,  55),
  ('00000000-0000-4000-8000-00000000a902',  2,  12.6,  22.0,  58),
  ('00000000-0000-4000-8000-00000000a902',  3,  12.8,  21.8,  68),
  ('00000000-0000-4000-8000-00000000a902',  4,  12.8,  21.4,  74),
  ('00000000-0000-4000-8000-00000000a902',  5,  12.6,  21.4,  61),
  ('00000000-0000-4000-8000-00000000a902',  6,  11.6,  21.8,  26),
  ('00000000-0000-4000-8000-00000000a902',  7,  11.2,  22.4,  16),
  ('00000000-0000-4000-8000-00000000a902',  8,  11.8,  22.8,  32),
  ('00000000-0000-4000-8000-00000000a902',  9,  12.2,  22.4,  55),
  ('00000000-0000-4000-8000-00000000a902', 10,  12.4,  21.6,  68),
  ('00000000-0000-4000-8000-00000000a902', 11,  12.4,  21.0,  71),
  ('00000000-0000-4000-8000-00000000a902', 12,  12.2,  21.2,  61),
  -- Parque Nacional Akagera
  ('00000000-0000-4000-8000-00000000a903',  1,  16.4,  28.6,  29),
  ('00000000-0000-4000-8000-00000000a903',  2,  16.6,  29.0,  32),
  ('00000000-0000-4000-8000-00000000a903',  3,  16.8,  28.6,  45),
  ('00000000-0000-4000-8000-00000000a903',  4,  17.0,  27.8,  55),
  ('00000000-0000-4000-8000-00000000a903',  5,  16.8,  27.6,  42),
  ('00000000-0000-4000-8000-00000000a903',  6,  15.6,  28.6,  10),
  ('00000000-0000-4000-8000-00000000a903',  7,  15.0,  29.4,   3),
  ('00000000-0000-4000-8000-00000000a903',  8,  15.8,  30.2,  10),
  ('00000000-0000-4000-8000-00000000a903',  9,  16.4,  30.0,  26),
  ('00000000-0000-4000-8000-00000000a903', 10,  16.8,  28.8,  42),
  ('00000000-0000-4000-8000-00000000a903', 11,  16.6,  27.6,  52),
  ('00000000-0000-4000-8000-00000000a903', 12,  16.4,  28.0,  39),
  -- Karongi (lago Kivu)
  ('00000000-0000-4000-8000-00000000a904',  1,  16.6,  25.8,  42),
  ('00000000-0000-4000-8000-00000000a904',  2,  16.8,  26.0,  45),
  ('00000000-0000-4000-8000-00000000a904',  3,  16.8,  25.8,  55),
  ('00000000-0000-4000-8000-00000000a904',  4,  16.8,  25.4,  65),
  ('00000000-0000-4000-8000-00000000a904',  5,  16.6,  25.2,  52),
  ('00000000-0000-4000-8000-00000000a904',  6,  15.8,  25.8,  16),
  ('00000000-0000-4000-8000-00000000a904',  7,  15.4,  26.4,  10),
  ('00000000-0000-4000-8000-00000000a904',  8,  16.0,  26.8,  23),
  ('00000000-0000-4000-8000-00000000a904',  9,  16.4,  26.4,  45),
  ('00000000-0000-4000-8000-00000000a904', 10,  16.6,  25.6,  58),
  ('00000000-0000-4000-8000-00000000a904', 11,  16.4,  25.0,  61),
  ('00000000-0000-4000-8000-00000000a904', 12,  16.4,  25.4,  52),
  -- Huye (Butare)
  ('00000000-0000-4000-8000-00000000a905',  1,  14.6,  25.4,  42),
  ('00000000-0000-4000-8000-00000000a905',  2,  14.8,  25.6,  45),
  ('00000000-0000-4000-8000-00000000a905',  3,  14.8,  25.4,  55),
  ('00000000-0000-4000-8000-00000000a905',  4,  15.0,  24.8,  65),
  ('00000000-0000-4000-8000-00000000a905',  5,  14.6,  24.6,  52),
  ('00000000-0000-4000-8000-00000000a905',  6,  13.4,  25.2,  16),
  ('00000000-0000-4000-8000-00000000a905',  7,  12.8,  25.8,   6),
  ('00000000-0000-4000-8000-00000000a905',  8,  13.6,  26.4,  16),
  ('00000000-0000-4000-8000-00000000a905',  9,  14.2,  26.2,  39),
  ('00000000-0000-4000-8000-00000000a905', 10,  14.6,  25.2,  55),
  ('00000000-0000-4000-8000-00000000a905', 11,  14.6,  24.4,  61),
  ('00000000-0000-4000-8000-00000000a905', 12,  14.4,  24.8,  52),
  -- Nyanza (palacio real)
  ('00000000-0000-4000-8000-00000000a906',  1,  15.0,  26.0,  39),
  ('00000000-0000-4000-8000-00000000a906',  2,  15.2,  26.2,  42),
  ('00000000-0000-4000-8000-00000000a906',  3,  15.2,  26.0,  52),
  ('00000000-0000-4000-8000-00000000a906',  4,  15.4,  25.4,  62),
  ('00000000-0000-4000-8000-00000000a906',  5,  15.0,  25.2,  48),
  ('00000000-0000-4000-8000-00000000a906',  6,  13.8,  25.8,  13),
  ('00000000-0000-4000-8000-00000000a906',  7,  13.2,  26.4,   6),
  ('00000000-0000-4000-8000-00000000a906',  8,  14.0,  27.0,  16),
  ('00000000-0000-4000-8000-00000000a906',  9,  14.6,  26.8,  35),
  ('00000000-0000-4000-8000-00000000a906', 10,  15.0,  25.8,  52),
  ('00000000-0000-4000-8000-00000000a906', 11,  15.0,  25.0,  58),
  ('00000000-0000-4000-8000-00000000a906', 12,  14.8,  25.4,  48),
  -- Nyamata (memorial)
  ('00000000-0000-4000-8000-00000000a907',  1,  16.4,  28.0,  29),
  ('00000000-0000-4000-8000-00000000a907',  2,  16.6,  28.4,  32),
  ('00000000-0000-4000-8000-00000000a907',  3,  16.6,  28.0,  45),
  ('00000000-0000-4000-8000-00000000a907',  4,  16.8,  27.4,  58),
  ('00000000-0000-4000-8000-00000000a907',  5,  16.6,  27.2,  45),
  ('00000000-0000-4000-8000-00000000a907',  6,  15.6,  27.8,  10),
  ('00000000-0000-4000-8000-00000000a907',  7,  15.0,  28.6,   3),
  ('00000000-0000-4000-8000-00000000a907',  8,  15.8,  29.4,  10),
  ('00000000-0000-4000-8000-00000000a907',  9,  16.2,  29.2,  29),
  ('00000000-0000-4000-8000-00000000a907', 10,  16.4,  28.2,  45),
  ('00000000-0000-4000-8000-00000000a907', 11,  16.4,  27.2,  55),
  ('00000000-0000-4000-8000-00000000a907', 12,  16.2,  27.6,  39),
  -- Lago Muhazi
  ('00000000-0000-4000-8000-00000000a908',  1,  16.0,  27.0,  32),
  ('00000000-0000-4000-8000-00000000a908',  2,  16.2,  27.4,  35),
  ('00000000-0000-4000-8000-00000000a908',  3,  16.2,  27.0,  48),
  ('00000000-0000-4000-8000-00000000a908',  4,  16.4,  26.4,  61),
  ('00000000-0000-4000-8000-00000000a908',  5,  16.2,  26.0,  48),
  ('00000000-0000-4000-8000-00000000a908',  6,  15.2,  26.6,  13),
  ('00000000-0000-4000-8000-00000000a908',  7,  14.8,  27.4,   6),
  ('00000000-0000-4000-8000-00000000a908',  8,  15.4,  28.2,  13),
  ('00000000-0000-4000-8000-00000000a908',  9,  15.8,  28.0,  32),
  ('00000000-0000-4000-8000-00000000a908', 10,  16.0,  27.0,  48),
  ('00000000-0000-4000-8000-00000000a908', 11,  15.8,  26.0,  58),
  ('00000000-0000-4000-8000-00000000a908', 12,  15.8,  26.4,  42)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Kigali, en RWF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'comida', 'Desayuno (café y algo en una cafetería)', 5000, 'RWF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'comida', 'Almuerzo (buffet local o plato del día)', 6000, 'RWF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'comida', 'Cena en restaurante', 15000, 'RWF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'comida', 'Compra en supermercado', 35000, 'RWF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'comida', 'Brochette o sambusa al paso', 1500, 'RWF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'alojamiento', 'Hotel 3★, noche', 110000, 'RWF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'alojamiento', 'Lavandería (una carga)', 6000, 'RWF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'alojamiento', 'Depósito de equipaje', 3000, 'RWF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'alojamiento', 'Propinas y servicio', 3000, 'RWF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'transporte', 'Bus o moto-taxi, día', 2000, 'RWF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'transporte', 'Taxi, viaje corto', 6000, 'RWF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 15000, 'RWF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'transporte', 'Bus entre ciudades, tramo', 4000, 'RWF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 10000, 'RWF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'entretenimiento', 'Visita guiada', 40000, 'RWF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'entretenimiento', 'Entrada a museo', 10000, 'RWF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'entretenimiento', 'Salida nocturna', 20000, 'RWF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000a900'::uuid, 'entretenimiento', 'Excursión de día completo', 150000, 'RWF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000a901'::uuid, 1.30),  -- Musanze
  ('00000000-0000-4000-8000-00000000a902'::uuid, 1.60),  -- Bosque de Nyungwe
  ('00000000-0000-4000-8000-00000000a903'::uuid, 1.60),  -- Parque Nacional Akagera
  ('00000000-0000-4000-8000-00000000a904'::uuid, 0.90),  -- Karongi (lago Kivu)
  ('00000000-0000-4000-8000-00000000a905'::uuid, 0.75),  -- Huye (Butare)
  ('00000000-0000-4000-8000-00000000a906'::uuid, 0.70),  -- Nyanza (palacio real)
  ('00000000-0000-4000-8000-00000000a907'::uuid, 0.75),  -- Nyamata (memorial)
  ('00000000-0000-4000-8000-00000000a908'::uuid, 0.90)  -- Lago Muhazi
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000a900'
on conflict (id) do nothing;

-- Akagera y Nyungwe cobran a los extranjeros una entrada de parque nacional
-- —en Nyungwe, más la actividad—, bastante más cara que la atracción
-- principal de Kigali: derivada con el factor, salía a una parte. Musanze se
-- queda con la derivada: lo caro allá son los permisos del parque de los
-- volcanes, que no entran en el presupuesto (ver el encabezado).
update products
set base_price = 145000
where destination_id in (
    '00000000-0000-4000-8000-00000000a902', -- Nyungwe
    '00000000-0000-4000-8000-00000000a903'  -- Akagera
  )
  and name = 'Entrada a la atracción principal';
