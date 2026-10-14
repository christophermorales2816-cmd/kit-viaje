-- Islas Cook, con Avarua como ciudad base: es la capital, en Rarotonga, y
-- por donde entra todo el que viaja. Precios en dólares neozelandeses, con
-- centavos: es la moneda del país, que acuña además sus propias monedas.
--
-- Es un estado libre asociado a Nueva Zelanda, con frontera propia, y entra por
-- la decisión de la sección 16.2. Las ciudades del planificador son las de
-- Rarotonga —Avarua, la laguna de Muri, Titikaveka y el cruce de la isla—, la
-- laguna de Aitutaki con One Foot Island, Atiu, Mangaia y Mauke.
--
-- Trópico del hemisferio sur: calor húmedo de diciembre a marzo, la temporada
-- de lluvias y ciclones, y un invierno templado y más seco de junio a
-- septiembre. Las Islas Cook están al este de la línea de cambio de fecha:
-- tienen diez horas menos que Greenwich, como Hawái.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Te Rua Manga (el cruce de la isla) en julio: 16,6 / 23,4 → fresco + templado → capas, cero playa
--   Aitutaki (la laguna) en febrero: 23,6 / 29,8 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ca00 a ca08, la base es ca00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ca00', 'Avarua (Rarotonga)',                 'islas-cook', 'NZD', true,  'avarua'),
  ('00000000-0000-4000-8000-00000000ca01', 'Laguna de Muri',                     'islas-cook', 'NZD', false, 'muri'),
  ('00000000-0000-4000-8000-00000000ca02', 'Titikaveka (snorkel)',               'islas-cook', 'NZD', false, 'titikaveka'),
  ('00000000-0000-4000-8000-00000000ca03', 'Te Rua Manga (el cruce de la isla)', 'islas-cook', 'NZD', false, 'te-rua-manga'),
  ('00000000-0000-4000-8000-00000000ca04', 'Aitutaki (la laguna)',               'islas-cook', 'NZD', false, 'aitutaki'),
  ('00000000-0000-4000-8000-00000000ca05', 'One Foot Island (Aitutaki)',         'islas-cook', 'NZD', false, 'one-foot-island'),
  ('00000000-0000-4000-8000-00000000ca06', 'Atiu (cuevas y café)',               'islas-cook', 'NZD', false, 'atiu'),
  ('00000000-0000-4000-8000-00000000ca07', 'Mangaia',                            'islas-cook', 'NZD', false, 'mangaia'),
  ('00000000-0000-4000-8000-00000000ca08', 'Mauke',                              'islas-cook', 'NZD', false, 'mauke')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Avarua (Rarotonga)
  ('00000000-0000-4000-8000-00000000ca00',  1,  22.6,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca00',  2,  23.0,  29.4,  55),
  ('00000000-0000-4000-8000-00000000ca00',  3,  22.6,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca00',  4,  21.6,  28.0,  48),
  ('00000000-0000-4000-8000-00000000ca00',  5,  20.0,  26.6,  42),
  ('00000000-0000-4000-8000-00000000ca00',  6,  18.6,  25.4,  35),
  ('00000000-0000-4000-8000-00000000ca00',  7,  17.6,  24.6,  32),
  ('00000000-0000-4000-8000-00000000ca00',  8,  17.6,  24.6,  29),
  ('00000000-0000-4000-8000-00000000ca00',  9,  18.4,  25.0,  32),
  ('00000000-0000-4000-8000-00000000ca00', 10,  19.4,  25.8,  35),
  ('00000000-0000-4000-8000-00000000ca00', 11,  20.6,  27.0,  42),
  ('00000000-0000-4000-8000-00000000ca00', 12,  21.8,  28.2,  48),
  -- Laguna de Muri
  ('00000000-0000-4000-8000-00000000ca01',  1,  22.8,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca01',  2,  23.2,  29.4,  55),
  ('00000000-0000-4000-8000-00000000ca01',  3,  22.8,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca01',  4,  21.8,  28.0,  48),
  ('00000000-0000-4000-8000-00000000ca01',  5,  20.2,  26.6,  42),
  ('00000000-0000-4000-8000-00000000ca01',  6,  18.8,  25.4,  35),
  ('00000000-0000-4000-8000-00000000ca01',  7,  17.8,  24.6,  32),
  ('00000000-0000-4000-8000-00000000ca01',  8,  17.8,  24.6,  29),
  ('00000000-0000-4000-8000-00000000ca01',  9,  18.6,  25.0,  32),
  ('00000000-0000-4000-8000-00000000ca01', 10,  19.6,  25.8,  35),
  ('00000000-0000-4000-8000-00000000ca01', 11,  20.8,  27.0,  42),
  ('00000000-0000-4000-8000-00000000ca01', 12,  22.0,  28.2,  48),
  -- Titikaveka (snorkel)
  ('00000000-0000-4000-8000-00000000ca02',  1,  22.8,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca02',  2,  23.2,  29.4,  55),
  ('00000000-0000-4000-8000-00000000ca02',  3,  22.8,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca02',  4,  21.8,  28.0,  48),
  ('00000000-0000-4000-8000-00000000ca02',  5,  20.2,  26.6,  42),
  ('00000000-0000-4000-8000-00000000ca02',  6,  18.8,  25.4,  35),
  ('00000000-0000-4000-8000-00000000ca02',  7,  17.8,  24.6,  32),
  ('00000000-0000-4000-8000-00000000ca02',  8,  17.8,  24.6,  29),
  ('00000000-0000-4000-8000-00000000ca02',  9,  18.6,  25.0,  32),
  ('00000000-0000-4000-8000-00000000ca02', 10,  19.6,  25.8,  35),
  ('00000000-0000-4000-8000-00000000ca02', 11,  20.8,  27.0,  42),
  ('00000000-0000-4000-8000-00000000ca02', 12,  22.0,  28.2,  48),
  -- Te Rua Manga (el cruce de la isla)
  ('00000000-0000-4000-8000-00000000ca03',  1,  21.6,  27.8,  61),
  ('00000000-0000-4000-8000-00000000ca03',  2,  22.0,  28.2,  61),
  ('00000000-0000-4000-8000-00000000ca03',  3,  21.6,  27.8,  61),
  ('00000000-0000-4000-8000-00000000ca03',  4,  20.6,  26.8,  54),
  ('00000000-0000-4000-8000-00000000ca03',  5,  19.0,  25.4,  48),
  ('00000000-0000-4000-8000-00000000ca03',  6,  17.6,  24.2,  41),
  ('00000000-0000-4000-8000-00000000ca03',  7,  16.6,  23.4,  38),
  ('00000000-0000-4000-8000-00000000ca03',  8,  16.6,  23.4,  35),
  ('00000000-0000-4000-8000-00000000ca03',  9,  17.4,  23.8,  38),
  ('00000000-0000-4000-8000-00000000ca03', 10,  18.4,  24.6,  41),
  ('00000000-0000-4000-8000-00000000ca03', 11,  19.6,  25.8,  48),
  ('00000000-0000-4000-8000-00000000ca03', 12,  20.8,  27.0,  54),
  -- Aitutaki (la laguna)
  ('00000000-0000-4000-8000-00000000ca04',  1,  23.2,  29.4,  49),
  ('00000000-0000-4000-8000-00000000ca04',  2,  23.6,  29.8,  49),
  ('00000000-0000-4000-8000-00000000ca04',  3,  23.2,  29.4,  49),
  ('00000000-0000-4000-8000-00000000ca04',  4,  22.2,  28.4,  42),
  ('00000000-0000-4000-8000-00000000ca04',  5,  20.6,  27.0,  36),
  ('00000000-0000-4000-8000-00000000ca04',  6,  19.2,  25.8,  29),
  ('00000000-0000-4000-8000-00000000ca04',  7,  18.2,  25.0,  26),
  ('00000000-0000-4000-8000-00000000ca04',  8,  18.2,  25.0,  23),
  ('00000000-0000-4000-8000-00000000ca04',  9,  19.0,  25.4,  26),
  ('00000000-0000-4000-8000-00000000ca04', 10,  20.0,  26.2,  29),
  ('00000000-0000-4000-8000-00000000ca04', 11,  21.2,  27.4,  36),
  ('00000000-0000-4000-8000-00000000ca04', 12,  22.4,  28.6,  42),
  -- One Foot Island (Aitutaki)
  ('00000000-0000-4000-8000-00000000ca05',  1,  23.4,  29.4,  49),
  ('00000000-0000-4000-8000-00000000ca05',  2,  23.8,  29.8,  49),
  ('00000000-0000-4000-8000-00000000ca05',  3,  23.4,  29.4,  49),
  ('00000000-0000-4000-8000-00000000ca05',  4,  22.4,  28.4,  42),
  ('00000000-0000-4000-8000-00000000ca05',  5,  20.8,  27.0,  36),
  ('00000000-0000-4000-8000-00000000ca05',  6,  19.4,  25.8,  29),
  ('00000000-0000-4000-8000-00000000ca05',  7,  18.4,  25.0,  26),
  ('00000000-0000-4000-8000-00000000ca05',  8,  18.4,  25.0,  23),
  ('00000000-0000-4000-8000-00000000ca05',  9,  19.2,  25.4,  26),
  ('00000000-0000-4000-8000-00000000ca05', 10,  20.2,  26.2,  29),
  ('00000000-0000-4000-8000-00000000ca05', 11,  21.4,  27.4,  36),
  ('00000000-0000-4000-8000-00000000ca05', 12,  22.6,  28.6,  42),
  -- Atiu (cuevas y café)
  ('00000000-0000-4000-8000-00000000ca06',  1,  22.8,  29.2,  52),
  ('00000000-0000-4000-8000-00000000ca06',  2,  23.2,  29.6,  52),
  ('00000000-0000-4000-8000-00000000ca06',  3,  22.8,  29.2,  52),
  ('00000000-0000-4000-8000-00000000ca06',  4,  21.8,  28.2,  45),
  ('00000000-0000-4000-8000-00000000ca06',  5,  20.2,  26.8,  39),
  ('00000000-0000-4000-8000-00000000ca06',  6,  18.8,  25.6,  32),
  ('00000000-0000-4000-8000-00000000ca06',  7,  17.8,  24.8,  29),
  ('00000000-0000-4000-8000-00000000ca06',  8,  17.8,  24.8,  26),
  ('00000000-0000-4000-8000-00000000ca06',  9,  18.6,  25.2,  29),
  ('00000000-0000-4000-8000-00000000ca06', 10,  19.6,  26.0,  32),
  ('00000000-0000-4000-8000-00000000ca06', 11,  20.8,  27.2,  39),
  ('00000000-0000-4000-8000-00000000ca06', 12,  22.0,  28.4,  45),
  -- Mangaia
  ('00000000-0000-4000-8000-00000000ca07',  1,  22.2,  28.6,  55),
  ('00000000-0000-4000-8000-00000000ca07',  2,  22.6,  29.0,  55),
  ('00000000-0000-4000-8000-00000000ca07',  3,  22.2,  28.6,  55),
  ('00000000-0000-4000-8000-00000000ca07',  4,  21.2,  27.6,  48),
  ('00000000-0000-4000-8000-00000000ca07',  5,  19.6,  26.2,  42),
  ('00000000-0000-4000-8000-00000000ca07',  6,  18.2,  25.0,  35),
  ('00000000-0000-4000-8000-00000000ca07',  7,  17.2,  24.2,  32),
  ('00000000-0000-4000-8000-00000000ca07',  8,  17.2,  24.2,  29),
  ('00000000-0000-4000-8000-00000000ca07',  9,  18.0,  24.6,  32),
  ('00000000-0000-4000-8000-00000000ca07', 10,  19.0,  25.4,  35),
  ('00000000-0000-4000-8000-00000000ca07', 11,  20.2,  26.6,  42),
  ('00000000-0000-4000-8000-00000000ca07', 12,  21.4,  27.8,  48),
  -- Mauke
  ('00000000-0000-4000-8000-00000000ca08',  1,  22.8,  29.2,  52),
  ('00000000-0000-4000-8000-00000000ca08',  2,  23.2,  29.6,  52),
  ('00000000-0000-4000-8000-00000000ca08',  3,  22.8,  29.2,  52),
  ('00000000-0000-4000-8000-00000000ca08',  4,  21.8,  28.2,  45),
  ('00000000-0000-4000-8000-00000000ca08',  5,  20.2,  26.8,  39),
  ('00000000-0000-4000-8000-00000000ca08',  6,  18.8,  25.6,  32),
  ('00000000-0000-4000-8000-00000000ca08',  7,  17.8,  24.8,  29),
  ('00000000-0000-4000-8000-00000000ca08',  8,  17.8,  24.8,  26),
  ('00000000-0000-4000-8000-00000000ca08',  9,  18.6,  25.2,  29),
  ('00000000-0000-4000-8000-00000000ca08', 10,  19.6,  26.0,  32),
  ('00000000-0000-4000-8000-00000000ca08', 11,  20.8,  27.2,  39),
  ('00000000-0000-4000-8000-00000000ca08', 12,  22.0,  28.4,  45)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Avarua (Rarotonga), en NZD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'comida', 'Desayuno (café y algo en un café)', 22, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'comida', 'Almuerzo (ika mata o plato del día)', 25, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'comida', 'Cena en restaurante', 55, 'NZD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'comida', 'Compra en supermercado', 90, 'NZD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'comida', 'Pescado frito o ika mata al paso', 12, 'NZD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'alojamiento', 'Hotel 3★, noche', 250, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'alojamiento', 'Lavandería (una carga)', 12, 'NZD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'alojamiento', 'Propinas: en las Islas Cook no se esperan', 0, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'transporte', 'Bus de la vuelta a la isla, día', 16, 'NZD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'transporte', 'Taxi, viaje corto', 20, 'NZD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 25, 'NZD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'transporte', 'Vuelo entre islas, tramo', 250, 'NZD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 25, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'entretenimiento', 'Visita guiada', 90, 'NZD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'NZD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'entretenimiento', 'Salida nocturna', 50, 'NZD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ca00'::uuid, 'entretenimiento', 'Excursión de día completo', 160, 'NZD', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ca01'::uuid, 1.30),  -- Laguna de Muri
  ('00000000-0000-4000-8000-00000000ca02'::uuid, 1.15),  -- Titikaveka (snorkel)
  ('00000000-0000-4000-8000-00000000ca03'::uuid, 1.00),  -- Te Rua Manga (el cruce de la isla)
  ('00000000-0000-4000-8000-00000000ca04'::uuid, 1.50),  -- Aitutaki (la laguna)
  ('00000000-0000-4000-8000-00000000ca05'::uuid, 1.60),  -- One Foot Island (Aitutaki)
  ('00000000-0000-4000-8000-00000000ca06'::uuid, 1.20),  -- Atiu (cuevas y café)
  ('00000000-0000-4000-8000-00000000ca07'::uuid, 1.10),  -- Mangaia
  ('00000000-0000-4000-8000-00000000ca08'::uuid, 1.10)  -- Mauke
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ca00'
on conflict (id) do nothing;
