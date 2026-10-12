-- Comoras, con Moroni como ciudad base: es la capital, en Gran Comora, y por
-- donde entra casi todo el que viaja. Precios en francos comorenses, sin
-- centavos: el franco está atado al euro.
--
-- Las ciudades del planificador son las de las tres islas del país —Gran
-- Comora, Anjouán y Mohéli— y la cumbre del Karthala, el volcán de Gran Comora.
-- Mayotte, la cuarta isla del archipiélago, la administra Francia y no está.
--
-- Trópico del hemisferio sur: calor húmedo todo el año, con la temporada de
-- lluvias y de ciclones de noviembre a abril y una temporada más seca y fresca,
-- de mayo a octubre. En la cumbre del Karthala, a más de dos mil metros, las
-- noches de julio rondan los siete grados.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Volcán Karthala (cumbre) en julio: 7,4 / 15,8 → frio + fresco → abrigo, cero playa
--   Fomboni (Mohéli) en marzo: 23,6 / 30,8 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000bb00 a bb08, la base es bb00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000bb00', 'Moroni',                                'comoras', 'KMF', true,  'moroni'),
  ('00000000-0000-4000-8000-00000000bb01', 'Mitsamiouli (playas del norte)',        'comoras', 'KMF', false, 'mitsamiouli'),
  ('00000000-0000-4000-8000-00000000bb02', 'Volcán Karthala (cumbre)',              'comoras', 'KMF', false, 'karthala'),
  ('00000000-0000-4000-8000-00000000bb03', 'Iconi (la antigua capital)',            'comoras', 'KMF', false, 'iconi'),
  ('00000000-0000-4000-8000-00000000bb04', 'Mutsamudu (Anjouán)',                   'comoras', 'KMF', false, 'mutsamudu'),
  ('00000000-0000-4000-8000-00000000bb05', 'Moya (playas de Anjouán)',              'comoras', 'KMF', false, 'moya'),
  ('00000000-0000-4000-8000-00000000bb06', 'Fomboni (Mohéli)',                      'comoras', 'KMF', false, 'fomboni'),
  ('00000000-0000-4000-8000-00000000bb07', 'Nioumachoua (parque marino de Mohéli)', 'comoras', 'KMF', false, 'nioumachoua'),
  ('00000000-0000-4000-8000-00000000bb08', 'Itsamia (tortugas marinas)',            'comoras', 'KMF', false, 'itsamia')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Moroni
  ('00000000-0000-4000-8000-00000000bb00',  1,  23.4,  30.0,  58),
  ('00000000-0000-4000-8000-00000000bb00',  2,  23.4,  30.0,  57),
  ('00000000-0000-4000-8000-00000000bb00',  3,  23.4,  30.4,  55),
  ('00000000-0000-4000-8000-00000000bb00',  4,  23.0,  30.0,  50),
  ('00000000-0000-4000-8000-00000000bb00',  5,  21.6,  28.6,  39),
  ('00000000-0000-4000-8000-00000000bb00',  6,  20.0,  27.2,  37),
  ('00000000-0000-4000-8000-00000000bb00',  7,  19.0,  26.4,  32),
  ('00000000-0000-4000-8000-00000000bb00',  8,  19.0,  26.4,  26),
  ('00000000-0000-4000-8000-00000000bb00',  9,  19.6,  27.0,  20),
  ('00000000-0000-4000-8000-00000000bb00', 10,  20.8,  28.0,  23),
  ('00000000-0000-4000-8000-00000000bb00', 11,  22.0,  29.4,  27),
  ('00000000-0000-4000-8000-00000000bb00', 12,  23.0,  30.0,  42),
  -- Mitsamiouli (playas del norte)
  ('00000000-0000-4000-8000-00000000bb01',  1,  23.6,  29.8,  52),
  ('00000000-0000-4000-8000-00000000bb01',  2,  23.6,  29.8,  52),
  ('00000000-0000-4000-8000-00000000bb01',  3,  23.6,  30.2,  50),
  ('00000000-0000-4000-8000-00000000bb01',  4,  23.2,  29.8,  45),
  ('00000000-0000-4000-8000-00000000bb01',  5,  21.8,  28.4,  35),
  ('00000000-0000-4000-8000-00000000bb01',  6,  20.2,  27.0,  32),
  ('00000000-0000-4000-8000-00000000bb01',  7,  19.2,  26.2,  29),
  ('00000000-0000-4000-8000-00000000bb01',  8,  19.2,  26.2,  23),
  ('00000000-0000-4000-8000-00000000bb01',  9,  19.8,  26.8,  16),
  ('00000000-0000-4000-8000-00000000bb01', 10,  21.0,  27.8,  19),
  ('00000000-0000-4000-8000-00000000bb01', 11,  22.2,  29.2,  23),
  ('00000000-0000-4000-8000-00000000bb01', 12,  23.2,  29.8,  39),
  -- Volcán Karthala (cumbre)
  ('00000000-0000-4000-8000-00000000bb02',  1,  11.4,  19.0,  68),
  ('00000000-0000-4000-8000-00000000bb02',  2,  11.6,  19.0,  65),
  ('00000000-0000-4000-8000-00000000bb02',  3,  11.4,  19.0,  65),
  ('00000000-0000-4000-8000-00000000bb02',  4,  11.0,  19.0,  58),
  ('00000000-0000-4000-8000-00000000bb02',  5,   9.6,  18.0,  45),
  ('00000000-0000-4000-8000-00000000bb02',  6,   8.2,  16.6,  42),
  ('00000000-0000-4000-8000-00000000bb02',  7,   7.4,  15.8,  39),
  ('00000000-0000-4000-8000-00000000bb02',  8,   7.4,  15.8,  32),
  ('00000000-0000-4000-8000-00000000bb02',  9,   8.0,  16.4,  26),
  ('00000000-0000-4000-8000-00000000bb02', 10,   9.0,  17.4,  29),
  ('00000000-0000-4000-8000-00000000bb02', 11,  10.0,  18.4,  35),
  ('00000000-0000-4000-8000-00000000bb02', 12,  11.0,  19.0,  52),
  -- Iconi (la antigua capital)
  ('00000000-0000-4000-8000-00000000bb03',  1,  23.4,  30.2,  58),
  ('00000000-0000-4000-8000-00000000bb03',  2,  23.4,  30.2,  57),
  ('00000000-0000-4000-8000-00000000bb03',  3,  23.4,  30.6,  55),
  ('00000000-0000-4000-8000-00000000bb03',  4,  23.0,  30.2,  50),
  ('00000000-0000-4000-8000-00000000bb03',  5,  21.6,  28.8,  39),
  ('00000000-0000-4000-8000-00000000bb03',  6,  20.0,  27.4,  37),
  ('00000000-0000-4000-8000-00000000bb03',  7,  19.0,  26.6,  32),
  ('00000000-0000-4000-8000-00000000bb03',  8,  19.0,  26.6,  26),
  ('00000000-0000-4000-8000-00000000bb03',  9,  19.6,  27.2,  20),
  ('00000000-0000-4000-8000-00000000bb03', 10,  20.8,  28.2,  23),
  ('00000000-0000-4000-8000-00000000bb03', 11,  22.0,  29.6,  27),
  ('00000000-0000-4000-8000-00000000bb03', 12,  23.0,  30.2,  42),
  -- Mutsamudu (Anjouán)
  ('00000000-0000-4000-8000-00000000bb04',  1,  23.2,  30.2,  61),
  ('00000000-0000-4000-8000-00000000bb04',  2,  23.2,  30.2,  58),
  ('00000000-0000-4000-8000-00000000bb04',  3,  23.2,  30.6,  58),
  ('00000000-0000-4000-8000-00000000bb04',  4,  22.8,  30.2,  52),
  ('00000000-0000-4000-8000-00000000bb04',  5,  21.4,  28.8,  42),
  ('00000000-0000-4000-8000-00000000bb04',  6,  19.8,  27.4,  39),
  ('00000000-0000-4000-8000-00000000bb04',  7,  18.8,  26.6,  35),
  ('00000000-0000-4000-8000-00000000bb04',  8,  18.8,  26.6,  29),
  ('00000000-0000-4000-8000-00000000bb04',  9,  19.4,  27.2,  23),
  ('00000000-0000-4000-8000-00000000bb04', 10,  20.6,  28.2,  26),
  ('00000000-0000-4000-8000-00000000bb04', 11,  21.8,  29.6,  29),
  ('00000000-0000-4000-8000-00000000bb04', 12,  22.8,  30.2,  45),
  -- Moya (playas de Anjouán)
  ('00000000-0000-4000-8000-00000000bb05',  1,  23.4,  30.0,  61),
  ('00000000-0000-4000-8000-00000000bb05',  2,  23.4,  30.0,  58),
  ('00000000-0000-4000-8000-00000000bb05',  3,  23.4,  30.4,  58),
  ('00000000-0000-4000-8000-00000000bb05',  4,  23.0,  30.0,  52),
  ('00000000-0000-4000-8000-00000000bb05',  5,  21.6,  28.6,  42),
  ('00000000-0000-4000-8000-00000000bb05',  6,  20.0,  27.2,  39),
  ('00000000-0000-4000-8000-00000000bb05',  7,  19.0,  26.4,  35),
  ('00000000-0000-4000-8000-00000000bb05',  8,  19.0,  26.4,  29),
  ('00000000-0000-4000-8000-00000000bb05',  9,  19.6,  27.0,  23),
  ('00000000-0000-4000-8000-00000000bb05', 10,  20.8,  28.0,  26),
  ('00000000-0000-4000-8000-00000000bb05', 11,  22.0,  29.4,  29),
  ('00000000-0000-4000-8000-00000000bb05', 12,  23.0,  30.0,  45),
  -- Fomboni (Mohéli)
  ('00000000-0000-4000-8000-00000000bb06',  1,  23.6,  30.4,  55),
  ('00000000-0000-4000-8000-00000000bb06',  2,  23.6,  30.4,  55),
  ('00000000-0000-4000-8000-00000000bb06',  3,  23.6,  30.8,  52),
  ('00000000-0000-4000-8000-00000000bb06',  4,  23.2,  30.4,  48),
  ('00000000-0000-4000-8000-00000000bb06',  5,  21.8,  29.0,  35),
  ('00000000-0000-4000-8000-00000000bb06',  6,  20.2,  27.6,  32),
  ('00000000-0000-4000-8000-00000000bb06',  7,  19.2,  26.8,  29),
  ('00000000-0000-4000-8000-00000000bb06',  8,  19.2,  26.8,  23),
  ('00000000-0000-4000-8000-00000000bb06',  9,  19.8,  27.4,  16),
  ('00000000-0000-4000-8000-00000000bb06', 10,  21.0,  28.4,  19),
  ('00000000-0000-4000-8000-00000000bb06', 11,  22.2,  29.8,  23),
  ('00000000-0000-4000-8000-00000000bb06', 12,  23.2,  30.4,  39),
  -- Nioumachoua (parque marino de Mohéli)
  ('00000000-0000-4000-8000-00000000bb07',  1,  23.8,  30.2,  55),
  ('00000000-0000-4000-8000-00000000bb07',  2,  23.8,  30.2,  55),
  ('00000000-0000-4000-8000-00000000bb07',  3,  23.8,  30.6,  52),
  ('00000000-0000-4000-8000-00000000bb07',  4,  23.4,  30.2,  48),
  ('00000000-0000-4000-8000-00000000bb07',  5,  22.0,  28.8,  35),
  ('00000000-0000-4000-8000-00000000bb07',  6,  20.4,  27.4,  32),
  ('00000000-0000-4000-8000-00000000bb07',  7,  19.4,  26.6,  29),
  ('00000000-0000-4000-8000-00000000bb07',  8,  19.4,  26.6,  23),
  ('00000000-0000-4000-8000-00000000bb07',  9,  20.0,  27.2,  16),
  ('00000000-0000-4000-8000-00000000bb07', 10,  21.2,  28.2,  19),
  ('00000000-0000-4000-8000-00000000bb07', 11,  22.4,  29.6,  23),
  ('00000000-0000-4000-8000-00000000bb07', 12,  23.4,  30.2,  39),
  -- Itsamia (tortugas marinas)
  ('00000000-0000-4000-8000-00000000bb08',  1,  23.8,  30.2,  55),
  ('00000000-0000-4000-8000-00000000bb08',  2,  23.8,  30.2,  55),
  ('00000000-0000-4000-8000-00000000bb08',  3,  23.8,  30.6,  52),
  ('00000000-0000-4000-8000-00000000bb08',  4,  23.4,  30.2,  48),
  ('00000000-0000-4000-8000-00000000bb08',  5,  22.0,  28.8,  35),
  ('00000000-0000-4000-8000-00000000bb08',  6,  20.4,  27.4,  32),
  ('00000000-0000-4000-8000-00000000bb08',  7,  19.4,  26.6,  29),
  ('00000000-0000-4000-8000-00000000bb08',  8,  19.4,  26.6,  23),
  ('00000000-0000-4000-8000-00000000bb08',  9,  20.0,  27.2,  16),
  ('00000000-0000-4000-8000-00000000bb08', 10,  21.2,  28.2,  19),
  ('00000000-0000-4000-8000-00000000bb08', 11,  22.4,  29.6,  23),
  ('00000000-0000-4000-8000-00000000bb08', 12,  23.4,  30.2,  39)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Moroni, en KMF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'comida', 'Desayuno (café y pan con algo)', 1500, 'KMF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'comida', 'Almuerzo (pescado con arroz o plato del día)', 3000, 'KMF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'comida', 'Cena en restaurante', 7000, 'KMF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'comida', 'Compra en supermercado', 15000, 'KMF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'comida', 'Samosas o brochettes al paso', 500, 'KMF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'alojamiento', 'Hotel 3★, noche', 35000, 'KMF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'alojamiento', 'Lavandería (una carga)', 3000, 'KMF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'alojamiento', 'Depósito de equipaje', 2000, 'KMF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'alojamiento', 'Propinas y servicio', 1500, 'KMF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'transporte', 'Taxi colectivo, día', 1000, 'KMF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'transporte', 'Taxi, viaje corto', 1500, 'KMF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 5000, 'KMF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'transporte', 'Barco entre islas, tramo', 25000, 'KMF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 2000, 'KMF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'entretenimiento', 'Visita guiada', 15000, 'KMF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'entretenimiento', 'Entrada a museo', 1000, 'KMF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'entretenimiento', 'Salida nocturna', 5000, 'KMF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000bb00'::uuid, 'entretenimiento', 'Excursión de día completo', 35000, 'KMF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000bb01'::uuid, 1.10),  -- Mitsamiouli (playas del norte)
  ('00000000-0000-4000-8000-00000000bb02'::uuid, 0.80),  -- Volcán Karthala (cumbre)
  ('00000000-0000-4000-8000-00000000bb03'::uuid, 0.70),  -- Iconi (la antigua capital)
  ('00000000-0000-4000-8000-00000000bb04'::uuid, 0.80),  -- Mutsamudu (Anjouán)
  ('00000000-0000-4000-8000-00000000bb05'::uuid, 0.85),  -- Moya (playas de Anjouán)
  ('00000000-0000-4000-8000-00000000bb06'::uuid, 0.80),  -- Fomboni (Mohéli)
  ('00000000-0000-4000-8000-00000000bb07'::uuid, 1.10),  -- Nioumachoua (parque marino de Mohéli)
  ('00000000-0000-4000-8000-00000000bb08'::uuid, 0.80)  -- Itsamia (tortugas marinas)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000bb00'
on conflict (id) do nothing;
