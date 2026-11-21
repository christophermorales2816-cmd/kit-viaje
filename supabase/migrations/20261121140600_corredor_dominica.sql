-- Dominica, con Roseau como ciudad base. Precios en dólares del Caribe
-- Oriental, enteros: valen menos de medio dólar, por paridad fija.
--
-- La isla más montañosa y lluviosa de la tanda. El parque Morne Trois Pitons,
-- a unos setecientos metros, llueve más de dos días de cada tres y sus mínimas
-- bajan de 18 grados. El aeropuerto internacional está en la costa noreste,
-- a más de una hora de Roseau: el traslado de los pueblos que quedan cerca se
-- corrige al final.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Parque Morne Trois Pitons en febrero: 17,1 / 24,1 → fresco + templado → capas, cero playa
--   Roseau en agosto: 24 / 31,9 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000eb00 a eb08, la base es eb00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000eb00', 'Roseau',                    'dominica', 'XCD', true,  'roseau'),
  ('00000000-0000-4000-8000-00000000eb01', 'Valle de Roseau',           'dominica', 'XCD', false, 'valle-de-roseau'),
  ('00000000-0000-4000-8000-00000000eb02', 'Parque Morne Trois Pitons', 'dominica', 'XCD', false, 'morne-trois-pitons'),
  ('00000000-0000-4000-8000-00000000eb03', 'Scotts Head y Soufrière',   'dominica', 'XCD', false, 'scotts-head'),
  ('00000000-0000-4000-8000-00000000eb04', 'Mero y la costa oeste',     'dominica', 'XCD', false, 'mero'),
  ('00000000-0000-4000-8000-00000000eb05', 'Portsmouth y el río Indio', 'dominica', 'XCD', false, 'portsmouth'),
  ('00000000-0000-4000-8000-00000000eb06', 'Calibishie',                'dominica', 'XCD', false, 'calibishie'),
  ('00000000-0000-4000-8000-00000000eb07', 'Territorio kalinago',       'dominica', 'XCD', false, 'territorio-kalinago'),
  ('00000000-0000-4000-8000-00000000eb08', 'Rosalie y la costa este',   'dominica', 'XCD', false, 'rosalie')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Roseau
  ('00000000-0000-4000-8000-00000000eb00',  1,  21.8,  29.3,  42),
  ('00000000-0000-4000-8000-00000000eb00',  2,  21.6,  29.6,  32),
  ('00000000-0000-4000-8000-00000000eb00',  3,  22.0,  30.3,  29),
  ('00000000-0000-4000-8000-00000000eb00',  4,  22.8,  31.0,  30),
  ('00000000-0000-4000-8000-00000000eb00',  5,  23.8,  31.6,  39),
  ('00000000-0000-4000-8000-00000000eb00',  6,  24.2,  31.7,  57),
  ('00000000-0000-4000-8000-00000000eb00',  7,  24.0,  31.6,  65),
  ('00000000-0000-4000-8000-00000000eb00',  8,  24.0,  31.9,  61),
  ('00000000-0000-4000-8000-00000000eb00',  9,  23.8,  31.9,  60),
  ('00000000-0000-4000-8000-00000000eb00', 10,  23.4,  31.6,  58),
  ('00000000-0000-4000-8000-00000000eb00', 11,  23.0,  30.8,  60),
  ('00000000-0000-4000-8000-00000000eb00', 12,  22.3,  29.8,  52),
  -- Valle de Roseau
  ('00000000-0000-4000-8000-00000000eb01',  1,  19.8,  26.8,  54),
  ('00000000-0000-4000-8000-00000000eb01',  2,  19.6,  27.1,  44),
  ('00000000-0000-4000-8000-00000000eb01',  3,  20.0,  27.8,  41),
  ('00000000-0000-4000-8000-00000000eb01',  4,  20.8,  28.5,  42),
  ('00000000-0000-4000-8000-00000000eb01',  5,  21.8,  29.1,  51),
  ('00000000-0000-4000-8000-00000000eb01',  6,  22.2,  29.2,  69),
  ('00000000-0000-4000-8000-00000000eb01',  7,  22.0,  29.1,  77),
  ('00000000-0000-4000-8000-00000000eb01',  8,  22.0,  29.4,  73),
  ('00000000-0000-4000-8000-00000000eb01',  9,  21.8,  29.4,  72),
  ('00000000-0000-4000-8000-00000000eb01', 10,  21.4,  29.1,  70),
  ('00000000-0000-4000-8000-00000000eb01', 11,  21.0,  28.3,  72),
  ('00000000-0000-4000-8000-00000000eb01', 12,  20.3,  27.3,  64),
  -- Parque Morne Trois Pitons
  ('00000000-0000-4000-8000-00000000eb02',  1,  17.3,  23.8,  67),
  ('00000000-0000-4000-8000-00000000eb02',  2,  17.1,  24.1,  57),
  ('00000000-0000-4000-8000-00000000eb02',  3,  17.5,  24.8,  54),
  ('00000000-0000-4000-8000-00000000eb02',  4,  18.3,  25.5,  55),
  ('00000000-0000-4000-8000-00000000eb02',  5,  19.3,  26.1,  64),
  ('00000000-0000-4000-8000-00000000eb02',  6,  19.7,  26.2,  82),
  ('00000000-0000-4000-8000-00000000eb02',  7,  19.5,  26.1,  90),
  ('00000000-0000-4000-8000-00000000eb02',  8,  19.5,  26.4,  86),
  ('00000000-0000-4000-8000-00000000eb02',  9,  19.3,  26.4,  85),
  ('00000000-0000-4000-8000-00000000eb02', 10,  18.9,  26.1,  83),
  ('00000000-0000-4000-8000-00000000eb02', 11,  18.5,  25.3,  85),
  ('00000000-0000-4000-8000-00000000eb02', 12,  17.8,  24.3,  77),
  -- Scotts Head y Soufrière
  ('00000000-0000-4000-8000-00000000eb03',  1,  21.8,  29.3,  38),
  ('00000000-0000-4000-8000-00000000eb03',  2,  21.6,  29.6,  28),
  ('00000000-0000-4000-8000-00000000eb03',  3,  22.0,  30.3,  25),
  ('00000000-0000-4000-8000-00000000eb03',  4,  22.8,  31.0,  26),
  ('00000000-0000-4000-8000-00000000eb03',  5,  23.8,  31.6,  35),
  ('00000000-0000-4000-8000-00000000eb03',  6,  24.2,  31.7,  53),
  ('00000000-0000-4000-8000-00000000eb03',  7,  24.0,  31.6,  61),
  ('00000000-0000-4000-8000-00000000eb03',  8,  24.0,  31.9,  57),
  ('00000000-0000-4000-8000-00000000eb03',  9,  23.8,  31.9,  56),
  ('00000000-0000-4000-8000-00000000eb03', 10,  23.4,  31.6,  54),
  ('00000000-0000-4000-8000-00000000eb03', 11,  23.0,  30.8,  56),
  ('00000000-0000-4000-8000-00000000eb03', 12,  22.3,  29.8,  48),
  -- Mero y la costa oeste
  ('00000000-0000-4000-8000-00000000eb04',  1,  21.8,  29.3,  40),
  ('00000000-0000-4000-8000-00000000eb04',  2,  21.6,  29.6,  30),
  ('00000000-0000-4000-8000-00000000eb04',  3,  22.0,  30.3,  27),
  ('00000000-0000-4000-8000-00000000eb04',  4,  22.8,  31.0,  28),
  ('00000000-0000-4000-8000-00000000eb04',  5,  23.8,  31.6,  37),
  ('00000000-0000-4000-8000-00000000eb04',  6,  24.2,  31.7,  55),
  ('00000000-0000-4000-8000-00000000eb04',  7,  24.0,  31.6,  63),
  ('00000000-0000-4000-8000-00000000eb04',  8,  24.0,  31.9,  59),
  ('00000000-0000-4000-8000-00000000eb04',  9,  23.8,  31.9,  58),
  ('00000000-0000-4000-8000-00000000eb04', 10,  23.4,  31.6,  56),
  ('00000000-0000-4000-8000-00000000eb04', 11,  23.0,  30.8,  58),
  ('00000000-0000-4000-8000-00000000eb04', 12,  22.3,  29.8,  50),
  -- Portsmouth y el río Indio
  ('00000000-0000-4000-8000-00000000eb05',  1,  21.8,  29.3,  45),
  ('00000000-0000-4000-8000-00000000eb05',  2,  21.6,  29.6,  35),
  ('00000000-0000-4000-8000-00000000eb05',  3,  22.0,  30.3,  32),
  ('00000000-0000-4000-8000-00000000eb05',  4,  22.8,  31.0,  33),
  ('00000000-0000-4000-8000-00000000eb05',  5,  23.8,  31.6,  42),
  ('00000000-0000-4000-8000-00000000eb05',  6,  24.2,  31.7,  60),
  ('00000000-0000-4000-8000-00000000eb05',  7,  24.0,  31.6,  68),
  ('00000000-0000-4000-8000-00000000eb05',  8,  24.0,  31.9,  64),
  ('00000000-0000-4000-8000-00000000eb05',  9,  23.8,  31.9,  63),
  ('00000000-0000-4000-8000-00000000eb05', 10,  23.4,  31.6,  61),
  ('00000000-0000-4000-8000-00000000eb05', 11,  23.0,  30.8,  63),
  ('00000000-0000-4000-8000-00000000eb05', 12,  22.3,  29.8,  55),
  -- Calibishie
  ('00000000-0000-4000-8000-00000000eb06',  1,  21.8,  29.0,  48),
  ('00000000-0000-4000-8000-00000000eb06',  2,  21.6,  29.3,  38),
  ('00000000-0000-4000-8000-00000000eb06',  3,  22.0,  30.0,  35),
  ('00000000-0000-4000-8000-00000000eb06',  4,  22.8,  30.7,  36),
  ('00000000-0000-4000-8000-00000000eb06',  5,  23.8,  31.3,  45),
  ('00000000-0000-4000-8000-00000000eb06',  6,  24.2,  31.4,  63),
  ('00000000-0000-4000-8000-00000000eb06',  7,  24.0,  31.3,  71),
  ('00000000-0000-4000-8000-00000000eb06',  8,  24.0,  31.6,  67),
  ('00000000-0000-4000-8000-00000000eb06',  9,  23.8,  31.6,  66),
  ('00000000-0000-4000-8000-00000000eb06', 10,  23.4,  31.3,  64),
  ('00000000-0000-4000-8000-00000000eb06', 11,  23.0,  30.5,  66),
  ('00000000-0000-4000-8000-00000000eb06', 12,  22.3,  29.5,  58),
  -- Territorio kalinago
  ('00000000-0000-4000-8000-00000000eb07',  1,  21.5,  28.7,  56),
  ('00000000-0000-4000-8000-00000000eb07',  2,  21.3,  29.0,  46),
  ('00000000-0000-4000-8000-00000000eb07',  3,  21.7,  29.7,  43),
  ('00000000-0000-4000-8000-00000000eb07',  4,  22.5,  30.4,  44),
  ('00000000-0000-4000-8000-00000000eb07',  5,  23.5,  31.0,  53),
  ('00000000-0000-4000-8000-00000000eb07',  6,  23.9,  31.1,  71),
  ('00000000-0000-4000-8000-00000000eb07',  7,  23.7,  31.0,  79),
  ('00000000-0000-4000-8000-00000000eb07',  8,  23.7,  31.3,  75),
  ('00000000-0000-4000-8000-00000000eb07',  9,  23.5,  31.3,  74),
  ('00000000-0000-4000-8000-00000000eb07', 10,  23.1,  31.0,  72),
  ('00000000-0000-4000-8000-00000000eb07', 11,  22.7,  30.2,  74),
  ('00000000-0000-4000-8000-00000000eb07', 12,  22.0,  29.2,  66),
  -- Rosalie y la costa este
  ('00000000-0000-4000-8000-00000000eb08',  1,  21.5,  28.7,  57),
  ('00000000-0000-4000-8000-00000000eb08',  2,  21.3,  29.0,  47),
  ('00000000-0000-4000-8000-00000000eb08',  3,  21.7,  29.7,  44),
  ('00000000-0000-4000-8000-00000000eb08',  4,  22.5,  30.4,  45),
  ('00000000-0000-4000-8000-00000000eb08',  5,  23.5,  31.0,  54),
  ('00000000-0000-4000-8000-00000000eb08',  6,  23.9,  31.1,  72),
  ('00000000-0000-4000-8000-00000000eb08',  7,  23.7,  31.0,  80),
  ('00000000-0000-4000-8000-00000000eb08',  8,  23.7,  31.3,  76),
  ('00000000-0000-4000-8000-00000000eb08',  9,  23.5,  31.3,  75),
  ('00000000-0000-4000-8000-00000000eb08', 10,  23.1,  31.0,  73),
  ('00000000-0000-4000-8000-00000000eb08', 11,  22.7,  30.2,  75),
  ('00000000-0000-4000-8000-00000000eb08', 12,  22.0,  29.2,  67)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Roseau, en XCD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'comida', 'Desayuno', 30, 'XCD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'comida', 'Almuerzo', 40, 'XCD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'comida', 'Cena en restaurante', 120, 'XCD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'comida', 'Compra en supermercado', 230, 'XCD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'comida', 'Roti o algo al paso', 10, 'XCD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'alojamiento', 'Hotel 3★, noche', 400, 'XCD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'alojamiento', 'Lavandería (una carga)', 25, 'XCD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'alojamiento', 'Depósito de equipaje', 20, 'XCD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'alojamiento', 'Propinas y servicio', 40, 'XCD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'transporte', 'Minibús, día', 8, 'XCD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'transporte', 'Viaje corto en taxi', 40, 'XCD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'transporte', 'Traslado al aeropuerto en taxi (por tramo)', 180, 'XCD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'transporte', 'Minibús entre pueblos', 12, 'XCD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 35, 'XCD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'entretenimiento', 'Visita guiada', 200, 'XCD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'XCD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'entretenimiento', 'Salida nocturna', 80, 'XCD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000eb00'::uuid, 'entretenimiento', 'Excursión de día completo', 280, 'XCD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000eb01'::uuid, 1.00),  -- Valle de Roseau
  ('00000000-0000-4000-8000-00000000eb02'::uuid, 0.95),  -- Parque Morne Trois Pitons
  ('00000000-0000-4000-8000-00000000eb03'::uuid, 0.95),  -- Scotts Head y Soufrière
  ('00000000-0000-4000-8000-00000000eb04'::uuid, 1.00),  -- Mero y la costa oeste
  ('00000000-0000-4000-8000-00000000eb05'::uuid, 0.90),  -- Portsmouth y el río Indio
  ('00000000-0000-4000-8000-00000000eb06'::uuid, 1.00),  -- Calibishie
  ('00000000-0000-4000-8000-00000000eb07'::uuid, 0.85),  -- Territorio kalinago
  ('00000000-0000-4000-8000-00000000eb08'::uuid, 1.05)  -- Rosalie y la costa este
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000eb00'
on conflict (id) do nothing;

-- El aeropuerto internacional está en la costa noreste: Portsmouth y
-- Calibishie quedan a minutos, y el territorio kalinago y Rosalie, a media
-- hora. El factor había derivado el traslado de más de una hora desde Roseau.
update products
set base_price = 60
where destination_id in ('00000000-0000-4000-8000-00000000eb05',
                         '00000000-0000-4000-8000-00000000eb06')
  and name = 'Traslado al aeropuerto en taxi (por tramo)';
update products
set base_price = 100
where destination_id in ('00000000-0000-4000-8000-00000000eb07',
                         '00000000-0000-4000-8000-00000000eb08')
  and name = 'Traslado al aeropuerto en taxi (por tramo)';
