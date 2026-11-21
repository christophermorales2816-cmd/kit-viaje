-- Barbados, con Bridgetown como ciudad base. Precios en dólares de Barbados,
-- con centavos: valen medio dólar estadounidense por paridad fija desde 1975,
-- y se cobran en mitades, como el boleto de bus.
--
-- Una isla de 34 kilómetros: como en Malta o Nauru, las nueve ciudades son
-- zonas de la isla. El clima cambia poco de una costa a la otra; el centro, un
-- poco más alto, es algo más fresco y lluvioso.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Cueva de Harrison en febrero: 21,1 / 27,6 → templado + calido → nunca abrigo, playa
--   Bridgetown en septiembre: 24,6 / 31,1 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000e500 a e508, la base es e500.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000e500', 'Bridgetown',                    'barbados', 'BBD', true,  'bridgetown'),
  ('00000000-0000-4000-8000-00000000e501', 'Holetown y la costa oeste',     'barbados', 'BBD', false, 'costa-oeste'),
  ('00000000-0000-4000-8000-00000000e502', 'Speightstown',                  'barbados', 'BBD', false, 'speightstown'),
  ('00000000-0000-4000-8000-00000000e503', 'St. Lawrence Gap y Oistins',    'barbados', 'BBD', false, 'st-lawrence-gap'),
  ('00000000-0000-4000-8000-00000000e504', 'Silver Sands',                  'barbados', 'BBD', false, 'silver-sands'),
  ('00000000-0000-4000-8000-00000000e505', 'Crane Beach y el sureste',      'barbados', 'BBD', false, 'crane-beach'),
  ('00000000-0000-4000-8000-00000000e506', 'Bathsheba',                     'barbados', 'BBD', false, 'bathsheba'),
  ('00000000-0000-4000-8000-00000000e507', 'Cueva de Harrison',             'barbados', 'BBD', false, 'cueva-harrison'),
  ('00000000-0000-4000-8000-00000000e508', 'Animal Flower Cave y el norte', 'barbados', 'BBD', false, 'animal-flower-cave')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Bridgetown
  ('00000000-0000-4000-8000-00000000e500',  1,  22.8,  28.6,  29),
  ('00000000-0000-4000-8000-00000000e500',  2,  22.6,  28.8,  21),
  ('00000000-0000-4000-8000-00000000e500',  3,  23.0,  29.4,  19),
  ('00000000-0000-4000-8000-00000000e500',  4,  23.9,  30.1,  20),
  ('00000000-0000-4000-8000-00000000e500',  5,  24.7,  30.6,  26),
  ('00000000-0000-4000-8000-00000000e500',  6,  24.9,  30.7,  43),
  ('00000000-0000-4000-8000-00000000e500',  7,  24.6,  30.6,  48),
  ('00000000-0000-4000-8000-00000000e500',  8,  24.7,  31.0,  45),
  ('00000000-0000-4000-8000-00000000e500',  9,  24.6,  31.1,  47),
  ('00000000-0000-4000-8000-00000000e500', 10,  24.3,  30.8,  45),
  ('00000000-0000-4000-8000-00000000e500', 11,  23.9,  30.0,  47),
  ('00000000-0000-4000-8000-00000000e500', 12,  23.3,  29.1,  35),
  -- Holetown y la costa oeste
  ('00000000-0000-4000-8000-00000000e501',  1,  22.8,  28.6,  27),
  ('00000000-0000-4000-8000-00000000e501',  2,  22.6,  28.8,  20),
  ('00000000-0000-4000-8000-00000000e501',  3,  23.0,  29.4,  18),
  ('00000000-0000-4000-8000-00000000e501',  4,  23.9,  30.1,  19),
  ('00000000-0000-4000-8000-00000000e501',  5,  24.7,  30.6,  25),
  ('00000000-0000-4000-8000-00000000e501',  6,  24.9,  30.7,  41),
  ('00000000-0000-4000-8000-00000000e501',  7,  24.6,  30.6,  46),
  ('00000000-0000-4000-8000-00000000e501',  8,  24.7,  31.0,  43),
  ('00000000-0000-4000-8000-00000000e501',  9,  24.6,  31.1,  45),
  ('00000000-0000-4000-8000-00000000e501', 10,  24.3,  30.8,  43),
  ('00000000-0000-4000-8000-00000000e501', 11,  23.9,  30.0,  45),
  ('00000000-0000-4000-8000-00000000e501', 12,  23.3,  29.1,  33),
  -- Speightstown
  ('00000000-0000-4000-8000-00000000e502',  1,  22.6,  28.5,  28),
  ('00000000-0000-4000-8000-00000000e502',  2,  22.4,  28.7,  21),
  ('00000000-0000-4000-8000-00000000e502',  3,  22.8,  29.3,  19),
  ('00000000-0000-4000-8000-00000000e502',  4,  23.7,  30.0,  20),
  ('00000000-0000-4000-8000-00000000e502',  5,  24.5,  30.5,  26),
  ('00000000-0000-4000-8000-00000000e502',  6,  24.7,  30.6,  42),
  ('00000000-0000-4000-8000-00000000e502',  7,  24.4,  30.5,  47),
  ('00000000-0000-4000-8000-00000000e502',  8,  24.5,  30.9,  44),
  ('00000000-0000-4000-8000-00000000e502',  9,  24.4,  31.0,  46),
  ('00000000-0000-4000-8000-00000000e502', 10,  24.1,  30.7,  44),
  ('00000000-0000-4000-8000-00000000e502', 11,  23.7,  29.9,  46),
  ('00000000-0000-4000-8000-00000000e502', 12,  23.1,  29.0,  34),
  -- St. Lawrence Gap y Oistins
  ('00000000-0000-4000-8000-00000000e503',  1,  22.8,  28.6,  29),
  ('00000000-0000-4000-8000-00000000e503',  2,  22.6,  28.8,  21),
  ('00000000-0000-4000-8000-00000000e503',  3,  23.0,  29.4,  19),
  ('00000000-0000-4000-8000-00000000e503',  4,  23.9,  30.1,  20),
  ('00000000-0000-4000-8000-00000000e503',  5,  24.7,  30.6,  26),
  ('00000000-0000-4000-8000-00000000e503',  6,  24.9,  30.7,  43),
  ('00000000-0000-4000-8000-00000000e503',  7,  24.6,  30.6,  48),
  ('00000000-0000-4000-8000-00000000e503',  8,  24.7,  31.0,  45),
  ('00000000-0000-4000-8000-00000000e503',  9,  24.6,  31.1,  47),
  ('00000000-0000-4000-8000-00000000e503', 10,  24.3,  30.8,  45),
  ('00000000-0000-4000-8000-00000000e503', 11,  23.9,  30.0,  47),
  ('00000000-0000-4000-8000-00000000e503', 12,  23.3,  29.1,  35),
  -- Silver Sands
  ('00000000-0000-4000-8000-00000000e504',  1,  22.9,  28.5,  28),
  ('00000000-0000-4000-8000-00000000e504',  2,  22.7,  28.7,  20),
  ('00000000-0000-4000-8000-00000000e504',  3,  23.1,  29.3,  18),
  ('00000000-0000-4000-8000-00000000e504',  4,  24.0,  30.0,  19),
  ('00000000-0000-4000-8000-00000000e504',  5,  24.8,  30.5,  25),
  ('00000000-0000-4000-8000-00000000e504',  6,  25.0,  30.6,  42),
  ('00000000-0000-4000-8000-00000000e504',  7,  24.7,  30.5,  47),
  ('00000000-0000-4000-8000-00000000e504',  8,  24.8,  30.9,  44),
  ('00000000-0000-4000-8000-00000000e504',  9,  24.7,  31.0,  46),
  ('00000000-0000-4000-8000-00000000e504', 10,  24.4,  30.7,  44),
  ('00000000-0000-4000-8000-00000000e504', 11,  24.0,  29.9,  46),
  ('00000000-0000-4000-8000-00000000e504', 12,  23.4,  29.0,  34),
  -- Crane Beach y el sureste
  ('00000000-0000-4000-8000-00000000e505',  1,  22.6,  28.3,  30),
  ('00000000-0000-4000-8000-00000000e505',  2,  22.4,  28.5,  22),
  ('00000000-0000-4000-8000-00000000e505',  3,  22.8,  29.1,  20),
  ('00000000-0000-4000-8000-00000000e505',  4,  23.7,  29.8,  21),
  ('00000000-0000-4000-8000-00000000e505',  5,  24.5,  30.3,  27),
  ('00000000-0000-4000-8000-00000000e505',  6,  24.7,  30.4,  44),
  ('00000000-0000-4000-8000-00000000e505',  7,  24.4,  30.3,  49),
  ('00000000-0000-4000-8000-00000000e505',  8,  24.5,  30.7,  46),
  ('00000000-0000-4000-8000-00000000e505',  9,  24.4,  30.8,  48),
  ('00000000-0000-4000-8000-00000000e505', 10,  24.1,  30.5,  46),
  ('00000000-0000-4000-8000-00000000e505', 11,  23.7,  29.7,  48),
  ('00000000-0000-4000-8000-00000000e505', 12,  23.1,  28.8,  36),
  -- Bathsheba
  ('00000000-0000-4000-8000-00000000e506',  1,  22.0,  28.0,  33),
  ('00000000-0000-4000-8000-00000000e506',  2,  21.8,  28.2,  25),
  ('00000000-0000-4000-8000-00000000e506',  3,  22.2,  28.8,  22),
  ('00000000-0000-4000-8000-00000000e506',  4,  23.1,  29.5,  23),
  ('00000000-0000-4000-8000-00000000e506',  5,  24.0,  30.0,  30),
  ('00000000-0000-4000-8000-00000000e506',  6,  24.2,  30.1,  47),
  ('00000000-0000-4000-8000-00000000e506',  7,  23.9,  30.0,  52),
  ('00000000-0000-4000-8000-00000000e506',  8,  24.0,  30.4,  49),
  ('00000000-0000-4000-8000-00000000e506',  9,  23.9,  30.5,  50),
  ('00000000-0000-4000-8000-00000000e506', 10,  23.6,  30.2,  48),
  ('00000000-0000-4000-8000-00000000e506', 11,  23.2,  29.4,  50),
  ('00000000-0000-4000-8000-00000000e506', 12,  22.5,  28.5,  39),
  -- Cueva de Harrison
  ('00000000-0000-4000-8000-00000000e507',  1,  21.3,  27.4,  35),
  ('00000000-0000-4000-8000-00000000e507',  2,  21.1,  27.6,  27),
  ('00000000-0000-4000-8000-00000000e507',  3,  21.5,  28.2,  24),
  ('00000000-0000-4000-8000-00000000e507',  4,  22.4,  28.9,  25),
  ('00000000-0000-4000-8000-00000000e507',  5,  23.2,  29.4,  32),
  ('00000000-0000-4000-8000-00000000e507',  6,  23.4,  29.5,  49),
  ('00000000-0000-4000-8000-00000000e507',  7,  23.1,  29.4,  54),
  ('00000000-0000-4000-8000-00000000e507',  8,  23.2,  29.8,  51),
  ('00000000-0000-4000-8000-00000000e507',  9,  23.1,  29.9,  53),
  ('00000000-0000-4000-8000-00000000e507', 10,  22.8,  29.6,  51),
  ('00000000-0000-4000-8000-00000000e507', 11,  22.4,  28.8,  53),
  ('00000000-0000-4000-8000-00000000e507', 12,  21.8,  27.9,  41),
  -- Animal Flower Cave y el norte
  ('00000000-0000-4000-8000-00000000e508',  1,  22.3,  28.2,  30),
  ('00000000-0000-4000-8000-00000000e508',  2,  22.1,  28.4,  22),
  ('00000000-0000-4000-8000-00000000e508',  3,  22.5,  29.0,  20),
  ('00000000-0000-4000-8000-00000000e508',  4,  23.4,  29.7,  21),
  ('00000000-0000-4000-8000-00000000e508',  5,  24.2,  30.2,  27),
  ('00000000-0000-4000-8000-00000000e508',  6,  24.4,  30.3,  44),
  ('00000000-0000-4000-8000-00000000e508',  7,  24.1,  30.2,  49),
  ('00000000-0000-4000-8000-00000000e508',  8,  24.2,  30.6,  46),
  ('00000000-0000-4000-8000-00000000e508',  9,  24.1,  30.7,  48),
  ('00000000-0000-4000-8000-00000000e508', 10,  23.8,  30.4,  46),
  ('00000000-0000-4000-8000-00000000e508', 11,  23.4,  29.6,  48),
  ('00000000-0000-4000-8000-00000000e508', 12,  22.8,  28.7,  36)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Bridgetown, en BBD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'comida', 'Desayuno', 30, 'BBD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'comida', 'Almuerzo', 35, 'BBD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'comida', 'Cena en restaurante', 120, 'BBD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'comida', 'Compra en supermercado', 150, 'BBD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'comida', 'Fish cake, roti o algo al paso', 15, 'BBD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'alojamiento', 'Hotel 3★, noche', 500, 'BBD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'alojamiento', 'Lavandería (una carga)', 25, 'BBD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'alojamiento', 'Depósito de equipaje', 20, 'BBD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'alojamiento', 'Propinas y servicio', 40, 'BBD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'transporte', 'Bus, día (dos viajes)', 7, 'BBD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'transporte', 'Viaje corto en taxi', 40, 'BBD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'transporte', 'Traslado al aeropuerto en taxi (por tramo)', 70, 'BBD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'transporte', 'Bus de punta a punta de la isla', 3.50, 'BBD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 80, 'BBD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'entretenimiento', 'Visita guiada', 150, 'BBD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'entretenimiento', 'Entrada a museo', 30, 'BBD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'entretenimiento', 'Salida nocturna', 80, 'BBD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000e500'::uuid, 'entretenimiento', 'Excursión de día completo', 300, 'BBD', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
-- En BBD se redondea al centavo: redondear a la unidad convertiría un
-- café de 2,50 en uno de 2 o de 3.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-00000000e501'::uuid, 1.25),  -- Holetown y la costa oeste
  ('00000000-0000-4000-8000-00000000e502'::uuid, 0.95),  -- Speightstown
  ('00000000-0000-4000-8000-00000000e503'::uuid, 1.00),  -- St. Lawrence Gap y Oistins
  ('00000000-0000-4000-8000-00000000e504'::uuid, 0.95),  -- Silver Sands
  ('00000000-0000-4000-8000-00000000e505'::uuid, 1.10),  -- Crane Beach y el sureste
  ('00000000-0000-4000-8000-00000000e506'::uuid, 0.90),  -- Bathsheba
  ('00000000-0000-4000-8000-00000000e507'::uuid, 0.95),  -- Cueva de Harrison
  ('00000000-0000-4000-8000-00000000e508'::uuid, 0.90)  -- Animal Flower Cave y el norte
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000e500'
on conflict (id) do nothing;

-- El bus de Barbados tiene tarifa única en toda la isla, y el factor de cada
-- zona la había movido al derivar. Las nueve vuelven al precio de la base.
update products
set base_price = 7
where name = 'Bus, día (dos viajes)'
  and destination_id in (select id from destinations where corridor = 'barbados');
update products
set base_price = 3.5
where name = 'Bus de punta a punta de la isla'
  and destination_id in (select id from destinations where corridor = 'barbados');
