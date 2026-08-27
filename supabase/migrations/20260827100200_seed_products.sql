-- Catálogo de consumos típicos de Buenos Aires (spec, sección 5).
--
-- 18 productos, 4-5 por categoría, con los precios de ejemplo del spec como
-- base. `updated_at` toma el default now(): al aplicar la migración quedan
-- frescos, y a partir de ahí el aviso de antigüedad de la sección 5 hace su
-- trabajo. Editarlos desde Studio mueve updated_at solo, por el trigger.
--
-- PRECIOS DE REFERENCIA, NO RELEVADOS. Los siete que trae el spec se
-- reproducen tal cual; los otros once están en el mismo orden de magnitud.
-- Antes de mostrar esto como dato real conviene relevarlos.
--
-- DOS LÍMITES CONOCIDOS, los dos explicados en el PR:
--
-- 1. El presupuesto default va a sumar los CUATRO alojamientos a la vez. El
--    motor no filtra: la sección 5 lo genera sobre todos los productos del
--    destino. Con alternativas mutuamente excluyentes eso no da un total
--    creíble. La propuesta es una columna include_by_default.
--
-- 2. El escalado es "una unidad cada N días" con N entero, así que no se puede
--    expresar "cuatro viajes de subte por día". Por eso el transporte público
--    se modela como un producto diario ya agregado (1400 = ~4 viajes) en vez
--    de como viaje individual.

insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
values
  -- Comida
  ('c0000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001',
   'comida', 'Menú ejecutivo (almuerzo)', 8500, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-000000000002', 'a0000000-0000-4000-8000-000000000001',
   'comida', 'Café con leche y medialunas', 3200, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-000000000003', 'a0000000-0000-4000-8000-000000000001',
   'comida', 'Cena en restaurante', 18000, 'ARS', 1, true, 2, 15),
  ('c0000000-0000-4000-8000-000000000004', 'a0000000-0000-4000-8000-000000000001',
   'comida', 'Asado o parrilla', 25000, 'ARS', 1, false, null, null),
  ('c0000000-0000-4000-8000-000000000005', 'a0000000-0000-4000-8000-000000000001',
   'comida', 'Compra en supermercado', 12000, 'ARS', 1, true, 3, 10),

  -- Transporte
  ('c0000000-0000-4000-8000-000000000006', 'a0000000-0000-4000-8000-000000000001',
   'transporte', 'Transporte público, día (SUBE)', 1400, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-000000000007', 'a0000000-0000-4000-8000-000000000001',
   'transporte', 'Remis o taxi corto', 4500, 'ARS', 1, true, 3, 10),
  ('c0000000-0000-4000-8000-000000000008', 'a0000000-0000-4000-8000-000000000001',
   'transporte', 'Traslado al aeropuerto', 25000, 'ARS', 2, false, null, null),
  ('c0000000-0000-4000-8000-000000000009', 'a0000000-0000-4000-8000-000000000001',
   'transporte', 'Alquiler de bicicleta por día', 6000, 'ARS', 1, true, 5, 6),

  -- Alojamiento (ver límite 1 arriba)
  ('c0000000-0000-4000-8000-00000000000a', 'a0000000-0000-4000-8000-000000000001',
   'alojamiento', 'Hostel, cama en dormitorio', 22000, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-00000000000b', 'a0000000-0000-4000-8000-000000000001',
   'alojamiento', 'Departamento temporario', 48000, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-00000000000c', 'a0000000-0000-4000-8000-000000000001',
   'alojamiento', 'Hotel 3 estrellas, noche', 65000, 'ARS', 1, true, 1, 30),
  ('c0000000-0000-4000-8000-00000000000d', 'a0000000-0000-4000-8000-000000000001',
   'alojamiento', 'Hotel 4 estrellas, noche', 110000, 'ARS', 1, true, 1, 30),

  -- Entretenimiento
  ('c0000000-0000-4000-8000-00000000000e', 'a0000000-0000-4000-8000-000000000001',
   'entretenimiento', 'Entrada a show de tango', 45000, 'ARS', 1, false, null, null),
  ('c0000000-0000-4000-8000-00000000000f', 'a0000000-0000-4000-8000-000000000001',
   'entretenimiento', 'Entrada a museo', 6000, 'ARS', 1, true, 3, 8),
  ('c0000000-0000-4000-8000-000000000010', 'a0000000-0000-4000-8000-000000000001',
   'entretenimiento', 'Salida nocturna', 15000, 'ARS', 1, true, 3, 8),
  ('c0000000-0000-4000-8000-000000000011', 'a0000000-0000-4000-8000-000000000001',
   'entretenimiento', 'City tour guiado', 28000, 'ARS', 1, false, null, null),
  ('c0000000-0000-4000-8000-000000000012', 'a0000000-0000-4000-8000-000000000001',
   'entretenimiento', 'Entrada a partido de fútbol', 35000, 'ARS', 1, false, null, null)
on conflict (id) do nothing;
