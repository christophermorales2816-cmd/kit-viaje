-- Seis destinos más en Bolivia, y dos regiones que el mosaico no tenía.
--
-- Los nueve originales cubrían altiplano, valles, oriente y Amazonía, pero se
-- salteaban los YUNGAS, que es justamente donde el país hace su truco: de La Paz
-- a Coroico hay tres horas de bajada y 1.850 metros de diferencia. Salís con
-- campera a 3.600 y llegás en remera a 1.750. Sin esa fila, la guía explicaba
-- que la altura manda y no tenía cómo demostrarlo.
--
--   Oruro       3.735 m  Altiplano  el Carnaval, y viento el resto del año
--   Coroico     1.750 m  Yungas     el contraste más rápido del país
--   Sorata      2.680 m  Yungas     valle al pie del Illampu
--   Torotoro    2.600 m  Valles     cañones y huellas de dinosaurio
--   Tupiza      2.950 m  Valles     quebradas rojas del sur
--   Concepción    490 m  Oriente    misiones jesuíticas de la Chiquitania
--
-- Bolivia queda con quince ciudades. Que tenga más que Argentina y Brasil no
-- rompe nada: la simetría que importa es que cada destino que una guía muestra
-- se pueda planificar, y eso lo vigila destinos-planificables.test.ts.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-000000000d09', 'Oruro',       'bolivia', 'BOB', false, 'oruro'),
  ('00000000-0000-4000-8000-000000000d0a', 'Coroico',     'bolivia', 'BOB', false, 'coroico'),
  ('00000000-0000-4000-8000-000000000d0b', 'Sorata',      'bolivia', 'BOB', false, 'sorata'),
  ('00000000-0000-4000-8000-000000000d0c', 'Torotoro',    'bolivia', 'BOB', false, 'torotoro'),
  ('00000000-0000-4000-8000-000000000d0d', 'Tupiza',      'bolivia', 'BOB', false, 'tupiza'),
  ('00000000-0000-4000-8000-000000000d0e', 'Concepción',  'bolivia', 'BOB', false, 'concepcion')
on conflict (id) do nothing;

-- Promedios históricos aproximados, misma escala que el resto.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados:
--
--   Oruro en junio      −6,4 / 14,8  → frio + fresco       → abrigo, cero playa
--   Coroico en enero     15,4 / 25,6  → fresco + templado   → capas livianas y lluvia
--   Concepción en enero  21,8 / 31,2  → templado + cálido   → nunca abrigo
--
-- Coroico y La Paz en el mismo mes dan listas distintas, que es exactamente lo
-- que la guía viene afirmando sobre la altura.

insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Oruro (3.735 m): el altiplano sin la protección de la hondonada paceña.
  ('00000000-0000-4000-8000-000000000d09',  1,  3.6, 17.2, 55),
  ('00000000-0000-4000-8000-000000000d09',  2,  3.6, 17.0, 50),
  ('00000000-0000-4000-8000-000000000d09',  3,  2.8, 17.2, 40),
  ('00000000-0000-4000-8000-000000000d09',  4,  0.2, 17.0, 15),
  ('00000000-0000-4000-8000-000000000d09',  5, -3.8, 16.0,  5),
  ('00000000-0000-4000-8000-000000000d09',  6, -6.4, 14.8,  3),
  ('00000000-0000-4000-8000-000000000d09',  7, -6.8, 14.6,  3),
  ('00000000-0000-4000-8000-000000000d09',  8, -5.0, 15.8,  5),
  ('00000000-0000-4000-8000-000000000d09',  9, -2.0, 17.0, 10),
  ('00000000-0000-4000-8000-000000000d09', 10,  0.4, 18.4, 15),
  ('00000000-0000-4000-8000-000000000d09', 11,  2.0, 19.2, 25),
  ('00000000-0000-4000-8000-000000000d09', 12,  3.2, 18.4, 45),
  -- Coroico (1.750 m): subtropical y húmedo, a tres horas de La Paz.
  ('00000000-0000-4000-8000-000000000d0a',  1, 15.4, 25.6, 78),
  ('00000000-0000-4000-8000-000000000d0a',  2, 15.4, 25.4, 75),
  ('00000000-0000-4000-8000-000000000d0a',  3, 15.2, 25.6, 70),
  ('00000000-0000-4000-8000-000000000d0a',  4, 14.4, 25.4, 52),
  ('00000000-0000-4000-8000-000000000d0a',  5, 13.0, 24.8, 35),
  ('00000000-0000-4000-8000-000000000d0a',  6, 11.8, 24.0, 25),
  ('00000000-0000-4000-8000-000000000d0a',  7, 11.4, 24.0, 22),
  ('00000000-0000-4000-8000-000000000d0a',  8, 12.4, 25.2, 25),
  ('00000000-0000-4000-8000-000000000d0a',  9, 13.8, 26.0, 38),
  ('00000000-0000-4000-8000-000000000d0a', 10, 14.8, 26.2, 55),
  ('00000000-0000-4000-8000-000000000d0a', 11, 15.2, 26.0, 65),
  ('00000000-0000-4000-8000-000000000d0a', 12, 15.4, 25.6, 75),
  -- Sorata (2.680 m): valle templado con el Illampu encima.
  ('00000000-0000-4000-8000-000000000d0b',  1,  9.8, 21.0, 72),
  ('00000000-0000-4000-8000-000000000d0b',  2,  9.8, 20.8, 68),
  ('00000000-0000-4000-8000-000000000d0b',  3,  9.4, 20.8, 60),
  ('00000000-0000-4000-8000-000000000d0b',  4,  8.2, 20.8, 38),
  ('00000000-0000-4000-8000-000000000d0b',  5,  6.0, 20.4, 18),
  ('00000000-0000-4000-8000-000000000d0b',  6,  4.4, 19.6, 10),
  ('00000000-0000-4000-8000-000000000d0b',  7,  4.0, 19.6, 10),
  ('00000000-0000-4000-8000-000000000d0b',  8,  5.2, 20.4, 14),
  ('00000000-0000-4000-8000-000000000d0b',  9,  7.0, 21.0, 28),
  ('00000000-0000-4000-8000-000000000d0b', 10,  8.4, 21.6, 40),
  ('00000000-0000-4000-8000-000000000d0b', 11,  9.2, 21.8, 52),
  ('00000000-0000-4000-8000-000000000d0b', 12,  9.6, 21.2, 68),
  -- Torotoro (2.600 m): sol directo casi todo el recorrido.
  ('00000000-0000-4000-8000-000000000d0c',  1, 12.6, 24.4, 60),
  ('00000000-0000-4000-8000-000000000d0c',  2, 12.4, 24.2, 55),
  ('00000000-0000-4000-8000-000000000d0c',  3, 12.0, 24.4, 45),
  ('00000000-0000-4000-8000-000000000d0c',  4, 10.2, 24.2, 22),
  ('00000000-0000-4000-8000-000000000d0c',  5,  7.0, 23.6,  8),
  ('00000000-0000-4000-8000-000000000d0c',  6,  4.8, 22.8,  4),
  ('00000000-0000-4000-8000-000000000d0c',  7,  4.4, 22.8,  4),
  ('00000000-0000-4000-8000-000000000d0c',  8,  6.2, 24.0,  6),
  ('00000000-0000-4000-8000-000000000d0c',  9,  8.8, 25.0, 12),
  ('00000000-0000-4000-8000-000000000d0c', 10, 11.0, 25.6, 22),
  ('00000000-0000-4000-8000-000000000d0c', 11, 12.0, 25.8, 34),
  ('00000000-0000-4000-8000-000000000d0c', 12, 12.4, 24.8, 50),
  -- Tupiza (2.950 m): el sur seco, con la mayor amplitud de los valles.
  ('00000000-0000-4000-8000-000000000d0d',  1, 12.8, 26.4, 50),
  ('00000000-0000-4000-8000-000000000d0d',  2, 12.6, 26.0, 45),
  ('00000000-0000-4000-8000-000000000d0d',  3, 11.8, 26.0, 35),
  ('00000000-0000-4000-8000-000000000d0d',  4,  9.0, 25.6, 12),
  ('00000000-0000-4000-8000-000000000d0d',  5,  5.0, 24.4,  4),
  ('00000000-0000-4000-8000-000000000d0d',  6,  2.4, 23.2,  2),
  ('00000000-0000-4000-8000-000000000d0d',  7,  2.0, 23.2,  2),
  ('00000000-0000-4000-8000-000000000d0d',  8,  3.8, 24.6,  3),
  ('00000000-0000-4000-8000-000000000d0d',  9,  6.6, 26.0,  6),
  ('00000000-0000-4000-8000-000000000d0d', 10,  9.4, 27.2, 12),
  ('00000000-0000-4000-8000-000000000d0d', 11, 11.2, 27.8, 22),
  ('00000000-0000-4000-8000-000000000d0d', 12, 12.4, 27.0, 40),
  -- Concepción (490 m): Chiquitania, calor húmedo casi todo el año.
  ('00000000-0000-4000-8000-000000000d0e',  1, 21.8, 31.2, 58),
  ('00000000-0000-4000-8000-000000000d0e',  2, 21.6, 30.8, 55),
  ('00000000-0000-4000-8000-000000000d0e',  3, 21.2, 30.6, 50),
  ('00000000-0000-4000-8000-000000000d0e',  4, 20.0, 29.6, 40),
  ('00000000-0000-4000-8000-000000000d0e',  5, 18.0, 28.0, 30),
  ('00000000-0000-4000-8000-000000000d0e',  6, 16.4, 27.0, 20),
  ('00000000-0000-4000-8000-000000000d0e',  7, 15.6, 27.4, 16),
  ('00000000-0000-4000-8000-000000000d0e',  8, 17.0, 29.4, 14),
  ('00000000-0000-4000-8000-000000000d0e',  9, 19.0, 30.6, 24),
  ('00000000-0000-4000-8000-000000000d0e', 10, 20.6, 31.2, 38),
  ('00000000-0000-4000-8000-000000000d0e', 11, 21.4, 31.4, 48),
  ('00000000-0000-4000-8000-000000000d0e', 12, 21.8, 31.2, 55)
on conflict (destination_id, month) do nothing;

-- Precios derivados de La Paz con un factor, igual que las otras ocho.
-- Los pueblos chicos salen más baratos que la sede de gobierno; Concepción sube
-- porque la Chiquitania se recorre con transporte contratado.

insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-000000000d09'::uuid, 0.90),  -- Oruro
  ('00000000-0000-4000-8000-000000000d0a'::uuid, 1.00),  -- Coroico
  ('00000000-0000-4000-8000-000000000d0b'::uuid, 0.85),  -- Sorata
  ('00000000-0000-4000-8000-000000000d0c'::uuid, 0.90),  -- Torotoro
  ('00000000-0000-4000-8000-000000000d0d'::uuid, 0.90),  -- Tupiza
  ('00000000-0000-4000-8000-000000000d0e'::uuid, 1.10)   -- Concepción
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-0000000000b0'
on conflict (id) do nothing;
