-- Nueva Zelanda, con Auckland como ciudad base: es la ciudad más grande y por
-- donde entra casi todo el que viaja; Wellington, la capital, está al sur de la
-- isla Norte. Precios en dólares neozelandeses, con centavos.
--
-- Las ciudades del planificador son las de la isla Norte —Auckland, la Bahía de
-- las Islas, Rotorua, Tongariro y Wellington— y las de la isla Sur:
-- Christchurch, Queenstown, el glaciar Franz Josef y Milford Sound.
--
-- Hemisferio sur y clima de mar: veranos templados de diciembre a febrero e
-- inviernos frescos, con nieve en las montañas de la isla Sur. La costa oeste y
-- Fiordland están entre los lugares más lluviosos del mundo: en Milford Sound
-- llueve más de la mitad de los días del año.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Queenstown en julio: -1,4 / 7,8 → frio → abrigo, cero playa
--   Bahía de las Islas (Paihia) en febrero: 16,6 / 25 → fresco + templado → capas, cero playa
--
-- IDS FIJOS: destinos 00000000-…-00000000c100 a c108, la base es c100.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000c100', 'Auckland',                    'nueva-zelanda', 'NZD', true,  'auckland'),
  ('00000000-0000-4000-8000-00000000c101', 'Rotorua',                     'nueva-zelanda', 'NZD', false, 'rotorua'),
  ('00000000-0000-4000-8000-00000000c102', 'Wellington',                  'nueva-zelanda', 'NZD', false, 'wellington'),
  ('00000000-0000-4000-8000-00000000c103', 'Queenstown',                  'nueva-zelanda', 'NZD', false, 'queenstown'),
  ('00000000-0000-4000-8000-00000000c104', 'Milford Sound (Fiordland)',   'nueva-zelanda', 'NZD', false, 'milford-sound'),
  ('00000000-0000-4000-8000-00000000c105', 'Christchurch',                'nueva-zelanda', 'NZD', false, 'christchurch'),
  ('00000000-0000-4000-8000-00000000c106', 'Bahía de las Islas (Paihia)', 'nueva-zelanda', 'NZD', false, 'bahia-de-las-islas'),
  ('00000000-0000-4000-8000-00000000c107', 'Franz Josef (glaciar)',       'nueva-zelanda', 'NZD', false, 'franz-josef'),
  ('00000000-0000-4000-8000-00000000c108', 'Tongariro (cruce alpino)',    'nueva-zelanda', 'NZD', false, 'tongariro')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Auckland
  ('00000000-0000-4000-8000-00000000c100',  1,  16.6,  23.7,  26),
  ('00000000-0000-4000-8000-00000000c100',  2,  17.0,  24.2,  25),
  ('00000000-0000-4000-8000-00000000c100',  3,  15.6,  22.8,  26),
  ('00000000-0000-4000-8000-00000000c100',  4,  13.4,  20.4,  33),
  ('00000000-0000-4000-8000-00000000c100',  5,  11.2,  17.9,  42),
  ('00000000-0000-4000-8000-00000000c100',  6,   9.0,  15.6,  50),
  ('00000000-0000-4000-8000-00000000c100',  7,   8.0,  14.8,  55),
  ('00000000-0000-4000-8000-00000000c100',  8,   8.4,  15.4,  48),
  ('00000000-0000-4000-8000-00000000c100',  9,   9.8,  16.8,  43),
  ('00000000-0000-4000-8000-00000000c100', 10,  11.2,  18.4,  39),
  ('00000000-0000-4000-8000-00000000c100', 11,  12.8,  20.2,  33),
  ('00000000-0000-4000-8000-00000000c100', 12,  14.8,  22.2,  32),
  -- Rotorua
  ('00000000-0000-4000-8000-00000000c101',  1,  12.4,  23.8,  29),
  ('00000000-0000-4000-8000-00000000c101',  2,  12.6,  24.0,  29),
  ('00000000-0000-4000-8000-00000000c101',  3,  10.8,  22.0,  32),
  ('00000000-0000-4000-8000-00000000c101',  4,   8.2,  18.8,  35),
  ('00000000-0000-4000-8000-00000000c101',  5,   5.8,  15.6,  39),
  ('00000000-0000-4000-8000-00000000c101',  6,   3.8,  13.0,  45),
  ('00000000-0000-4000-8000-00000000c101',  7,   3.0,  12.4,  45),
  ('00000000-0000-4000-8000-00000000c101',  8,   3.8,  13.4,  45),
  ('00000000-0000-4000-8000-00000000c101',  9,   5.4,  15.2,  42),
  ('00000000-0000-4000-8000-00000000c101', 10,   7.2,  17.4,  42),
  ('00000000-0000-4000-8000-00000000c101', 11,   8.8,  19.6,  35),
  ('00000000-0000-4000-8000-00000000c101', 12,  11.0,  22.0,  35),
  -- Wellington
  ('00000000-0000-4000-8000-00000000c102',  1,  13.6,  20.4,  26),
  ('00000000-0000-4000-8000-00000000c102',  2,  14.0,  20.8,  26),
  ('00000000-0000-4000-8000-00000000c102',  3,  12.8,  19.4,  29),
  ('00000000-0000-4000-8000-00000000c102',  4,  11.0,  17.2,  35),
  ('00000000-0000-4000-8000-00000000c102',  5,   9.0,  14.8,  42),
  ('00000000-0000-4000-8000-00000000c102',  6,   7.2,  12.8,  45),
  ('00000000-0000-4000-8000-00000000c102',  7,   6.4,  12.0,  48),
  ('00000000-0000-4000-8000-00000000c102',  8,   6.6,  12.6,  45),
  ('00000000-0000-4000-8000-00000000c102',  9,   7.8,  14.0,  42),
  ('00000000-0000-4000-8000-00000000c102', 10,   9.0,  15.4,  42),
  ('00000000-0000-4000-8000-00000000c102', 11,  10.6,  17.0,  35),
  ('00000000-0000-4000-8000-00000000c102', 12,  12.6,  19.0,  32),
  -- Queenstown
  ('00000000-0000-4000-8000-00000000c103',  1,   9.6,  22.6,  29),
  ('00000000-0000-4000-8000-00000000c103',  2,   9.4,  22.4,  26),
  ('00000000-0000-4000-8000-00000000c103',  3,   7.6,  19.6,  29),
  ('00000000-0000-4000-8000-00000000c103',  4,   4.8,  15.4,  29),
  ('00000000-0000-4000-8000-00000000c103',  5,   2.2,  11.6,  32),
  ('00000000-0000-4000-8000-00000000c103',  6,  -0.6,   8.2,  32),
  ('00000000-0000-4000-8000-00000000c103',  7,  -1.4,   7.8,  29),
  ('00000000-0000-4000-8000-00000000c103',  8,   0.0,   9.6,  29),
  ('00000000-0000-4000-8000-00000000c103',  9,   2.2,  13.0,  32),
  ('00000000-0000-4000-8000-00000000c103', 10,   4.2,  15.6,  35),
  ('00000000-0000-4000-8000-00000000c103', 11,   6.0,  18.4,  32),
  ('00000000-0000-4000-8000-00000000c103', 12,   8.4,  21.0,  32),
  -- Milford Sound (Fiordland)
  ('00000000-0000-4000-8000-00000000c104',  1,  10.0,  18.8,  55),
  ('00000000-0000-4000-8000-00000000c104',  2,  10.2,  19.2,  52),
  ('00000000-0000-4000-8000-00000000c104',  3,   9.0,  17.6,  55),
  ('00000000-0000-4000-8000-00000000c104',  4,   6.8,  15.0,  55),
  ('00000000-0000-4000-8000-00000000c104',  5,   4.6,  12.0,  55),
  ('00000000-0000-4000-8000-00000000c104',  6,   2.6,   9.6,  52),
  ('00000000-0000-4000-8000-00000000c104',  7,   1.8,   9.0,  52),
  ('00000000-0000-4000-8000-00000000c104',  8,   2.6,  10.4,  52),
  ('00000000-0000-4000-8000-00000000c104',  9,   4.2,  12.4,  55),
  ('00000000-0000-4000-8000-00000000c104', 10,   5.6,  14.2,  58),
  ('00000000-0000-4000-8000-00000000c104', 11,   7.2,  15.8,  58),
  ('00000000-0000-4000-8000-00000000c104', 12,   9.0,  17.6,  58),
  -- Christchurch
  ('00000000-0000-4000-8000-00000000c105',  1,  12.0,  22.6,  22),
  ('00000000-0000-4000-8000-00000000c105',  2,  11.8,  22.2,  22),
  ('00000000-0000-4000-8000-00000000c105',  3,  10.2,  20.4,  26),
  ('00000000-0000-4000-8000-00000000c105',  4,   7.4,  17.6,  26),
  ('00000000-0000-4000-8000-00000000c105',  5,   4.6,  14.4,  29),
  ('00000000-0000-4000-8000-00000000c105',  6,   2.2,  11.6,  32),
  ('00000000-0000-4000-8000-00000000c105',  7,   1.6,  11.2,  32),
  ('00000000-0000-4000-8000-00000000c105',  8,   2.6,  12.4,  29),
  ('00000000-0000-4000-8000-00000000c105',  9,   4.6,  15.0,  26),
  ('00000000-0000-4000-8000-00000000c105', 10,   6.6,  17.4,  26),
  ('00000000-0000-4000-8000-00000000c105', 11,   8.6,  19.4,  26),
  ('00000000-0000-4000-8000-00000000c105', 12,  10.8,  21.4,  26),
  -- Bahía de las Islas (Paihia)
  ('00000000-0000-4000-8000-00000000c106',  1,  16.0,  24.6,  29),
  ('00000000-0000-4000-8000-00000000c106',  2,  16.6,  25.0,  29),
  ('00000000-0000-4000-8000-00000000c106',  3,  15.2,  23.6,  32),
  ('00000000-0000-4000-8000-00000000c106',  4,  12.8,  21.2,  39),
  ('00000000-0000-4000-8000-00000000c106',  5,  10.6,  18.6,  45),
  ('00000000-0000-4000-8000-00000000c106',  6,   8.6,  16.4,  52),
  ('00000000-0000-4000-8000-00000000c106',  7,   7.6,  15.6,  55),
  ('00000000-0000-4000-8000-00000000c106',  8,   7.8,  16.0,  52),
  ('00000000-0000-4000-8000-00000000c106',  9,   9.2,  17.4,  45),
  ('00000000-0000-4000-8000-00000000c106', 10,  10.6,  19.0,  39),
  ('00000000-0000-4000-8000-00000000c106', 11,  12.2,  20.8,  35),
  ('00000000-0000-4000-8000-00000000c106', 12,  14.2,  23.0,  32),
  -- Franz Josef (glaciar)
  ('00000000-0000-4000-8000-00000000c107',  1,  11.4,  19.8,  52),
  ('00000000-0000-4000-8000-00000000c107',  2,  11.6,  20.4,  48),
  ('00000000-0000-4000-8000-00000000c107',  3,  10.2,  19.0,  52),
  ('00000000-0000-4000-8000-00000000c107',  4,   8.0,  16.6,  52),
  ('00000000-0000-4000-8000-00000000c107',  5,   5.6,  13.8,  52),
  ('00000000-0000-4000-8000-00000000c107',  6,   3.2,  11.4,  48),
  ('00000000-0000-4000-8000-00000000c107',  7,   2.4,  11.0,  48),
  ('00000000-0000-4000-8000-00000000c107',  8,   3.4,  12.0,  48),
  ('00000000-0000-4000-8000-00000000c107',  9,   5.0,  13.6,  55),
  ('00000000-0000-4000-8000-00000000c107', 10,   6.8,  15.0,  58),
  ('00000000-0000-4000-8000-00000000c107', 11,   8.4,  16.6,  55),
  ('00000000-0000-4000-8000-00000000c107', 12,  10.4,  18.6,  55),
  -- Tongariro (cruce alpino)
  ('00000000-0000-4000-8000-00000000c108',  1,   8.8,  18.8,  42),
  ('00000000-0000-4000-8000-00000000c108',  2,   9.0,  19.2,  39),
  ('00000000-0000-4000-8000-00000000c108',  3,   7.4,  17.0,  42),
  ('00000000-0000-4000-8000-00000000c108',  4,   5.0,  13.8,  45),
  ('00000000-0000-4000-8000-00000000c108',  5,   2.8,  10.6,  52),
  ('00000000-0000-4000-8000-00000000c108',  6,   0.6,   8.0,  55),
  ('00000000-0000-4000-8000-00000000c108',  7,  -0.4,   7.4,  58),
  ('00000000-0000-4000-8000-00000000c108',  8,   0.0,   8.2,  58),
  ('00000000-0000-4000-8000-00000000c108',  9,   1.6,  10.2,  55),
  ('00000000-0000-4000-8000-00000000c108', 10,   3.4,  12.4,  55),
  ('00000000-0000-4000-8000-00000000c108', 11,   5.0,  14.6,  48),
  ('00000000-0000-4000-8000-00000000c108', 12,   7.4,  17.0,  45)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Auckland, en NZD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'comida', 'Desayuno (flat white y algo en un café)', 18, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'comida', 'Almuerzo (plato del día en un café)', 26, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'comida', 'Cena en restaurante', 55, 'NZD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'comida', 'Compra en supermercado', 65, 'NZD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'comida', 'Pie o fish and chips al paso', 9, 'NZD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'alojamiento', 'Hotel 3★, noche', 210, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'NZD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'alojamiento', 'Depósito de equipaje', 15, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'alojamiento', 'Propinas: en Nueva Zelanda no se esperan', 0, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'transporte', 'Transporte público, día', 12, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'transporte', 'Viaje corto en app', 20, 'NZD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 20, 'NZD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'transporte', 'Bus de larga distancia', 60, 'NZD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 37, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'entretenimiento', 'Visita guiada', 80, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'entretenimiento', 'Entrada a museo', 28, 'NZD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'entretenimiento', 'Salida nocturna', 50, 'NZD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000c100'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'NZD', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
-- En NZD se redondea al centavo: redondear a la unidad convertiría un
-- café de 2,50 en uno de 2 o de 3.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-00000000c101'::uuid, 0.85),  -- Rotorua
  ('00000000-0000-4000-8000-00000000c102'::uuid, 0.95),  -- Wellington
  ('00000000-0000-4000-8000-00000000c103'::uuid, 1.15),  -- Queenstown
  ('00000000-0000-4000-8000-00000000c104'::uuid, 1.30),  -- Milford Sound (Fiordland)
  ('00000000-0000-4000-8000-00000000c105'::uuid, 0.85),  -- Christchurch
  ('00000000-0000-4000-8000-00000000c106'::uuid, 0.95),  -- Bahía de las Islas (Paihia)
  ('00000000-0000-4000-8000-00000000c107'::uuid, 0.95),  -- Franz Josef (glaciar)
  ('00000000-0000-4000-8000-00000000c108'::uuid, 0.90)  -- Tongariro (cruce alpino)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000c100'
on conflict (id) do nothing;
