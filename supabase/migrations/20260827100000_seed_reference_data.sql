-- Seed de los datos de referencia del corredor (spec, secciones 3, 4 y 5).
--
-- Va en una migración por la misma razón que 20260826120300_seed_climate_thresholds:
-- no son datos de ejemplo. Sin estas filas los dos motores corren igual y
-- devuelven listas vacías, así que producción las necesita tanto como desarrollo.
--
-- IDS FIJOS, NO gen_random_uuid()
--
-- Las tablas generan el id por default y ninguna tiene un unique natural sobre
-- el que hacer `on conflict`. Con ids literales el seed es idempotente sin
-- tocar el esquema: correrlo dos veces no duplica nada, y un precio ajustado a
-- mano en Studio sobrevive a la próxima corrida.
--
--   00000000-…-00ba  destino
--   a0000000-…-00NN  packing_catalog
--   b0000000-…-00NN  products
--
-- ATENCIÓN AL EDITAR products: el trigger products_set_updated_at solo corre en
-- update, así que estas filas quedan con el now() de la migración — que es
-- correcto, son precios cargados en este momento. La antigüedad que muestra la
-- vista de presupuesto (resolvePriceFreshness) se mide contra eso.

-- ===========================================================================
-- destinations
-- ===========================================================================

insert into destinations (id, name, corridor, base_currency) values
  ('00000000-0000-4000-8000-0000000000ba', 'Buenos Aires', 'argentina', 'ARS')
on conflict (id) do nothing;

-- ===========================================================================
-- climate_profiles — promedio histórico mensual de Buenos Aires
-- ===========================================================================
--
-- Promedios históricos, no pronóstico (spec, sección 1). precip_probability en
-- escala 0-100, según 20260826140000_precip_probability_scale.
--
-- Contra los buckets sembrados (frio ≤10, templado ≤25, calido sin tope), el
-- rango [temp_min, temp_max] de cada mes hace que el motor resuelva:
--
--   jun/jul/ago → frio + templado   (mínimas bajo 10, máximas sobre 15)
--   dic/ene/feb → templado + calido (máximas sobre 25)
--   el resto    → templado
--
-- O sea que el seed ejercita los tres buckets con datos reales, sin inventar
-- un clima que Buenos Aires no tiene.

insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  ('00000000-0000-4000-8000-0000000000ba',  1, 20.4, 30.4, 35),
  ('00000000-0000-4000-8000-0000000000ba',  2, 19.4, 28.7, 35),
  ('00000000-0000-4000-8000-0000000000ba',  3, 17.6, 26.8, 38),
  ('00000000-0000-4000-8000-0000000000ba',  4, 13.9, 22.9, 33),
  ('00000000-0000-4000-8000-0000000000ba',  5, 10.6, 19.2, 30),
  ('00000000-0000-4000-8000-0000000000ba',  6,  8.1, 16.3, 30),
  ('00000000-0000-4000-8000-0000000000ba',  7,  7.6, 15.6, 32),
  ('00000000-0000-4000-8000-0000000000ba',  8,  8.8, 17.7, 28),
  ('00000000-0000-4000-8000-0000000000ba',  9, 10.6, 19.4, 30),
  ('00000000-0000-4000-8000-0000000000ba', 10, 13.5, 22.4, 35),
  ('00000000-0000-4000-8000-0000000000ba', 11, 16.2, 25.7, 35),
  ('00000000-0000-4000-8000-0000000000ba', 12, 18.8, 28.6, 33)
on conflict (destination_id, month) do nothing;

-- ===========================================================================
-- packing_catalog
-- ===========================================================================
--
-- El catálogo es global, no depende del destino: lo que filtra es clima × tipo
-- de viaje (spec, sección 4). Un ítem entra si climate_tags interseca alguno de
-- los buckets resueltos Y trip_type_tags contiene el tipo del viaje.
--
-- SOBRE base_qty Y scales_with_days: cuando scales_with_days es true, base_qty
-- se ignora — la cantidad sale de ceil(duración / days_per_unit), acotada por
-- max_qty. Está documentado en src/lib/quantity.ts y el seed lo respeta: los
-- ítems que escalan dejan base_qty en 1 para que no parezca que dice algo.

insert into packing_catalog
  (id, category, name, weight_g, climate_tags, trip_type_tags, base_qty, scales_with_days, days_per_unit, max_qty)
values
  -- documentación — todos los climas, todos los tipos de viaje
  ('a0000000-0000-4000-8000-000000000001', 'documentacion', 'Pasaporte o DNI',                        30, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000002', 'documentacion', 'Efectivo en dólares y tarjetas',         50, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000003', 'documentacion', 'Seguro de viaje impreso',                20, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),

  -- tecnología
  ('a0000000-0000-4000-8000-000000000004', 'tecnologia',    'Celular y cargador',                    250, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000005', 'tecnologia',    'Adaptador de enchufe tipo I',            60, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000006', 'tecnologia',    'Batería portátil',                      200, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000007', 'tecnologia',    'Notebook y cargador',                  1800, '{frio,templado,calido}', '{negocios}',                       1, false, null, null),

  -- ropa
  ('a0000000-0000-4000-8000-000000000008', 'ropa',          'Remera de algodón',                     150, '{templado,calido}',      '{playa,urbano,aventura,negocios}', 1, true,     2,   10),
  ('a0000000-0000-4000-8000-000000000009', 'ropa',          'Camisa formal',                         200, '{frio,templado,calido}', '{negocios}',                       1, true,     2,    6),
  ('a0000000-0000-4000-8000-00000000000a', 'ropa',          'Buzo o polar',                          500, '{frio,templado}',        '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-00000000000b', 'ropa',          'Campera de abrigo',                     900, '{frio}',                 '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-00000000000c', 'ropa',          'Pantalón largo',                        400, '{frio,templado}',        '{playa,urbano,aventura,negocios}', 1, true,     5,    3),
  ('a0000000-0000-4000-8000-00000000000d', 'ropa',          'Short o bermuda',                       200, '{calido}',               '{playa,urbano,aventura}',          1, true,     4,    4),
  ('a0000000-0000-4000-8000-00000000000e', 'ropa',          'Ropa interior',                          50, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, true,     1,   10),
  ('a0000000-0000-4000-8000-00000000000f', 'ropa',          'Medias',                                 50, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, true,     1,   10),
  ('a0000000-0000-4000-8000-000000000010', 'ropa',          'Pijama',                                250, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000011', 'ropa',          'Traje de baño',                         150, '{templado,calido}',      '{playa}',                          2, false, null, null),
  ('a0000000-0000-4000-8000-000000000012', 'ropa',          'Bufanda y gorro de lana',               200, '{frio}',                 '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000013', 'ropa',          'Traje o blazer',                       1200, '{frio,templado,calido}', '{negocios}',                       1, false, null, null),
  ('a0000000-0000-4000-8000-000000000014', 'ropa',          'Impermeable liviano',                   300, '{frio,templado,calido}', '{urbano,aventura}',                1, false, null, null),

  -- calzado
  ('a0000000-0000-4000-8000-000000000015', 'calzado',       'Zapatillas para caminar',               800, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000016', 'calzado',       'Ojotas',                                200, '{templado,calido}',      '{playa}',                          1, false, null, null),
  ('a0000000-0000-4000-8000-000000000017', 'calzado',       'Zapatos de vestir',                     900, '{frio,templado,calido}', '{negocios}',                       1, false, null, null),
  ('a0000000-0000-4000-8000-000000000018', 'calzado',       'Botas de trekking',                    1200, '{frio,templado}',        '{aventura}',                       1, false, null, null),

  -- higiene
  ('a0000000-0000-4000-8000-000000000019', 'higiene',       'Neceser básico',                        400, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-00000000001a', 'higiene',       'Protector solar FPS 50',                200, '{templado,calido}',      '{playa,urbano,aventura}',          1, false, null, null),
  ('a0000000-0000-4000-8000-00000000001b', 'higiene',       'Repelente de insectos',                 150, '{templado,calido}',      '{playa,aventura}',                 1, false, null, null),
  ('a0000000-0000-4000-8000-00000000001c', 'higiene',       'Crema humectante y protector labial',   100, '{frio}',                 '{playa,urbano,aventura,negocios}', 1, false, null, null),

  -- salud
  ('a0000000-0000-4000-8000-00000000001d', 'salud',         'Botiquín básico',                       250, '{frio,templado,calido}', '{playa,urbano,aventura,negocios}', 1, false, null, null),

  -- accesorios
  ('a0000000-0000-4000-8000-00000000001e', 'accesorios',    'Lentes de sol',                         100, '{templado,calido}',      '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-00000000001f', 'accesorios',    'Botella reutilizable',                  150, '{frio,templado,calido}', '{playa,urbano,aventura}',          1, false, null, null),
  ('a0000000-0000-4000-8000-000000000020', 'accesorios',    'Mochila de día',                        500, '{frio,templado,calido}', '{playa,urbano,aventura}',          1, false, null, null),
  ('a0000000-0000-4000-8000-000000000021', 'accesorios',    'Paraguas compacto',                     350, '{frio,templado,calido}', '{urbano,negocios}',                1, false, null, null),
  ('a0000000-0000-4000-8000-000000000022', 'accesorios',    'Mate y termo',                          900, '{frio,templado,calido}', '{urbano,aventura}',                1, false, null, null)
on conflict (id) do nothing;

-- ===========================================================================
-- products
-- ===========================================================================
--
-- 18 filas en las 4 categorías del spec (sección 5). Los precios de referencia
-- salen de la tabla de ejemplo del propio spec; el resto sigue esa escala.
--
-- POR QUÉ NO HAY ALTERNATIVAS DEL MISMO GASTO
--
-- generateBudgetList() emite una línea por CADA producto del catálogo: no tiene
-- forma de saber que hostel y hotel son dos maneras de resolver lo mismo. Si el
-- catálogo trajera las dos, el presupuesto default cobraría las dos por noche y
-- daría un número sin sentido. Por eso alojamiento tiene una sola opción que
-- escala por noche (hotel 3★, el ejemplo intermedio del spec) y el resto de la
-- categoría son gastos que se suman de verdad.
--
-- Si más adelante se quiere ofrecer el nivel de alojamiento como elección del
-- usuario, eso es una dimensión nueva en el modelo (un grupo de exclusión
-- mutua), no una fila más acá.
--
-- SOBRE LA UNIDAD DEL TRANSPORTE PÚBLICO: la regla de escalado del spec tiene
-- como granularidad mínima una unidad por día (days_per_unit es un entero de
-- días), así que no puede expresar "4 viajes de SUBE por día". El producto toma
-- el día como unidad y el precio ya viene multiplicado — dice lo que cobra.

insert into products
  (id, destination_id, category, name, base_price, currency, base_qty, scales_with_days, days_per_unit, max_qty)
values
  -- comida
  ('b0000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-0000000000ba', 'comida',          'Menú ejecutivo (almuerzo)',                 8500, 'ARS', 1, true,     1,   30),
  ('b0000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-0000000000ba', 'comida',          'Café con leche y medialunas',               3200, 'ARS', 1, true,     1,   30),
  ('b0000000-0000-4000-8000-000000000003', '00000000-0000-4000-8000-0000000000ba', 'comida',          'Cena en parrilla',                         18000, 'ARS', 1, true,     3,   10),
  ('b0000000-0000-4000-8000-000000000004', '00000000-0000-4000-8000-0000000000ba', 'comida',          'Compra en supermercado',                   12000, 'ARS', 1, true,     4,    8),
  ('b0000000-0000-4000-8000-000000000005', '00000000-0000-4000-8000-0000000000ba', 'comida',          'Empanadas o almuerzo rápido',               5200, 'ARS', 1, true,     2,   15),

  -- transporte
  ('b0000000-0000-4000-8000-000000000006', '00000000-0000-4000-8000-0000000000ba', 'transporte',      'Transporte público, día (4 viajes en SUBE)', 1400, 'ARS', 1, true,    1,   30),
  ('b0000000-0000-4000-8000-000000000007', '00000000-0000-4000-8000-0000000000ba', 'transporte',      'Remis corto (centro)',                      4500, 'ARS', 1, true,     3,   10),
  ('b0000000-0000-4000-8000-000000000008', '00000000-0000-4000-8000-0000000000ba', 'transporte',      'Traslado a Ezeiza (ida y vuelta)',         45000, 'ARS', 2, false, null, null),
  ('b0000000-0000-4000-8000-000000000009', '00000000-0000-4000-8000-0000000000ba', 'transporte',      'Alquiler de bicicleta por día',             6000, 'ARS', 1, true,     5,    6),

  -- alojamiento
  ('b0000000-0000-4000-8000-00000000000a', '00000000-0000-4000-8000-0000000000ba', 'alojamiento',     'Hotel 3★, noche',                          65000, 'ARS', 1, true,     1,   30),
  ('b0000000-0000-4000-8000-00000000000b', '00000000-0000-4000-8000-0000000000ba', 'alojamiento',     'Lavandería (una carga)',                    9500, 'ARS', 1, true,     7,    4),
  ('b0000000-0000-4000-8000-00000000000c', '00000000-0000-4000-8000-0000000000ba', 'alojamiento',     'Depósito de equipaje',                      8000, 'ARS', 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000d', '00000000-0000-4000-8000-0000000000ba', 'alojamiento',     'Propinas y servicio',                       6000, 'ARS', 1, false, null, null),

  -- entretenimiento
  ('b0000000-0000-4000-8000-00000000000e', '00000000-0000-4000-8000-0000000000ba', 'entretenimiento', 'Entrada a show de tango',                  45000, 'ARS', 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000f', '00000000-0000-4000-8000-0000000000ba', 'entretenimiento', 'Entrada a museo',                           6000, 'ARS', 1, true,     4,    6),
  ('b0000000-0000-4000-8000-000000000010', '00000000-0000-4000-8000-0000000000ba', 'entretenimiento', 'Excursión al Delta del Tigre',             38000, 'ARS', 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000011', '00000000-0000-4000-8000-0000000000ba', 'entretenimiento', 'Entrada a partido de fútbol',              55000, 'ARS', 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000012', '00000000-0000-4000-8000-0000000000ba', 'entretenimiento', 'Salida nocturna',                          25000, 'ARS', 1, true,     5,    5)
on conflict (id) do nothing;
