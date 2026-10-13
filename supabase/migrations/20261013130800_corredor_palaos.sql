-- Palaos, con Koror como ciudad base: es la ciudad más grande y por donde
-- entra casi todo el que viaja; Melekeok, la capital, está en Babeldaob, al
-- norte. Precios en dólares, con centavos: el país usa el dólar
-- estadounidense, como Ecuador.
--
-- Las ciudades del planificador son Koror, las Islas Rocosas con el lago de las
-- Medusas y el arrecife de Blue Corner, Babeldaob —Melekeok, los monolitos de
-- Badrulchau y la cascada de Ngardmau—, Peleliu y el atolón de Kayangel.
--
-- Calor húmedo y parejo todo el año. Llueve casi todos los días de mayo a
-- octubre; de febrero a abril, la temporada más seca, el mar está más calmo.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Cascada de Ngardmau en julio: 23,8 / 30,4 → templado + calido → nunca abrigo, playa
--   Melekeok (la capital) en abril: 24,6 / 31,4 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000d000 a d008, la base es d000.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000d000', 'Koror',                          'palaos', 'USD', true,  'koror'),
  ('00000000-0000-4000-8000-00000000d001', 'Islas Rocosas (Rock Islands)',   'palaos', 'USD', false, 'islas-rocosas'),
  ('00000000-0000-4000-8000-00000000d002', 'Lago de las Medusas (Eil Malk)', 'palaos', 'USD', false, 'lago-de-las-medusas'),
  ('00000000-0000-4000-8000-00000000d003', 'Blue Corner (buceo)',            'palaos', 'USD', false, 'blue-corner'),
  ('00000000-0000-4000-8000-00000000d004', 'Melekeok (la capital)',          'palaos', 'USD', false, 'melekeok'),
  ('00000000-0000-4000-8000-00000000d005', 'Monolitos de Badrulchau',        'palaos', 'USD', false, 'badrulchau'),
  ('00000000-0000-4000-8000-00000000d006', 'Cascada de Ngardmau',            'palaos', 'USD', false, 'ngardmau'),
  ('00000000-0000-4000-8000-00000000d007', 'Peleliu',                        'palaos', 'USD', false, 'peleliu'),
  ('00000000-0000-4000-8000-00000000d008', 'Kayangel (atolón)',              'palaos', 'USD', false, 'kayangel')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Koror
  ('00000000-0000-4000-8000-00000000d000',  1,  24.4,  30.6,  61),
  ('00000000-0000-4000-8000-00000000d000',  2,  24.4,  30.6,  57),
  ('00000000-0000-4000-8000-00000000d000',  3,  24.6,  30.8,  52),
  ('00000000-0000-4000-8000-00000000d000',  4,  24.8,  31.2,  50),
  ('00000000-0000-4000-8000-00000000d000',  5,  24.8,  31.2,  68),
  ('00000000-0000-4000-8000-00000000d000',  6,  24.4,  30.8,  73),
  ('00000000-0000-4000-8000-00000000d000',  7,  24.2,  30.4,  71),
  ('00000000-0000-4000-8000-00000000d000',  8,  24.2,  30.4,  65),
  ('00000000-0000-4000-8000-00000000d000',  9,  24.2,  30.6,  60),
  ('00000000-0000-4000-8000-00000000d000', 10,  24.4,  30.8,  65),
  ('00000000-0000-4000-8000-00000000d000', 11,  24.6,  31.0,  63),
  ('00000000-0000-4000-8000-00000000d000', 12,  24.6,  30.8,  68),
  -- Islas Rocosas (Rock Islands)
  ('00000000-0000-4000-8000-00000000d001',  1,  24.6,  30.4,  61),
  ('00000000-0000-4000-8000-00000000d001',  2,  24.6,  30.4,  57),
  ('00000000-0000-4000-8000-00000000d001',  3,  24.8,  30.6,  52),
  ('00000000-0000-4000-8000-00000000d001',  4,  25.0,  31.0,  50),
  ('00000000-0000-4000-8000-00000000d001',  5,  25.0,  31.0,  68),
  ('00000000-0000-4000-8000-00000000d001',  6,  24.6,  30.6,  73),
  ('00000000-0000-4000-8000-00000000d001',  7,  24.4,  30.2,  71),
  ('00000000-0000-4000-8000-00000000d001',  8,  24.4,  30.2,  65),
  ('00000000-0000-4000-8000-00000000d001',  9,  24.4,  30.4,  60),
  ('00000000-0000-4000-8000-00000000d001', 10,  24.6,  30.6,  65),
  ('00000000-0000-4000-8000-00000000d001', 11,  24.8,  30.8,  63),
  ('00000000-0000-4000-8000-00000000d001', 12,  24.8,  30.6,  68),
  -- Lago de las Medusas (Eil Malk)
  ('00000000-0000-4000-8000-00000000d002',  1,  24.6,  30.4,  61),
  ('00000000-0000-4000-8000-00000000d002',  2,  24.6,  30.4,  57),
  ('00000000-0000-4000-8000-00000000d002',  3,  24.8,  30.6,  52),
  ('00000000-0000-4000-8000-00000000d002',  4,  25.0,  31.0,  50),
  ('00000000-0000-4000-8000-00000000d002',  5,  25.0,  31.0,  68),
  ('00000000-0000-4000-8000-00000000d002',  6,  24.6,  30.6,  73),
  ('00000000-0000-4000-8000-00000000d002',  7,  24.4,  30.2,  71),
  ('00000000-0000-4000-8000-00000000d002',  8,  24.4,  30.2,  65),
  ('00000000-0000-4000-8000-00000000d002',  9,  24.4,  30.4,  60),
  ('00000000-0000-4000-8000-00000000d002', 10,  24.6,  30.6,  65),
  ('00000000-0000-4000-8000-00000000d002', 11,  24.8,  30.8,  63),
  ('00000000-0000-4000-8000-00000000d002', 12,  24.8,  30.6,  68),
  -- Blue Corner (buceo)
  ('00000000-0000-4000-8000-00000000d003',  1,  24.8,  30.2,  58),
  ('00000000-0000-4000-8000-00000000d003',  2,  24.8,  30.2,  54),
  ('00000000-0000-4000-8000-00000000d003',  3,  25.0,  30.4,  49),
  ('00000000-0000-4000-8000-00000000d003',  4,  25.2,  30.8,  47),
  ('00000000-0000-4000-8000-00000000d003',  5,  25.2,  30.8,  65),
  ('00000000-0000-4000-8000-00000000d003',  6,  24.8,  30.4,  70),
  ('00000000-0000-4000-8000-00000000d003',  7,  24.6,  30.0,  68),
  ('00000000-0000-4000-8000-00000000d003',  8,  24.6,  30.0,  62),
  ('00000000-0000-4000-8000-00000000d003',  9,  24.6,  30.2,  57),
  ('00000000-0000-4000-8000-00000000d003', 10,  24.8,  30.4,  62),
  ('00000000-0000-4000-8000-00000000d003', 11,  25.0,  30.6,  60),
  ('00000000-0000-4000-8000-00000000d003', 12,  25.0,  30.4,  65),
  -- Melekeok (la capital)
  ('00000000-0000-4000-8000-00000000d004',  1,  24.2,  30.8,  64),
  ('00000000-0000-4000-8000-00000000d004',  2,  24.2,  30.8,  60),
  ('00000000-0000-4000-8000-00000000d004',  3,  24.4,  31.0,  55),
  ('00000000-0000-4000-8000-00000000d004',  4,  24.6,  31.4,  53),
  ('00000000-0000-4000-8000-00000000d004',  5,  24.6,  31.4,  71),
  ('00000000-0000-4000-8000-00000000d004',  6,  24.2,  31.0,  76),
  ('00000000-0000-4000-8000-00000000d004',  7,  24.0,  30.6,  74),
  ('00000000-0000-4000-8000-00000000d004',  8,  24.0,  30.6,  68),
  ('00000000-0000-4000-8000-00000000d004',  9,  24.0,  30.8,  63),
  ('00000000-0000-4000-8000-00000000d004', 10,  24.2,  31.0,  68),
  ('00000000-0000-4000-8000-00000000d004', 11,  24.4,  31.2,  66),
  ('00000000-0000-4000-8000-00000000d004', 12,  24.4,  31.0,  71),
  -- Monolitos de Badrulchau
  ('00000000-0000-4000-8000-00000000d005',  1,  24.2,  30.8,  64),
  ('00000000-0000-4000-8000-00000000d005',  2,  24.2,  30.8,  60),
  ('00000000-0000-4000-8000-00000000d005',  3,  24.4,  31.0,  55),
  ('00000000-0000-4000-8000-00000000d005',  4,  24.6,  31.4,  53),
  ('00000000-0000-4000-8000-00000000d005',  5,  24.6,  31.4,  71),
  ('00000000-0000-4000-8000-00000000d005',  6,  24.2,  31.0,  76),
  ('00000000-0000-4000-8000-00000000d005',  7,  24.0,  30.6,  74),
  ('00000000-0000-4000-8000-00000000d005',  8,  24.0,  30.6,  68),
  ('00000000-0000-4000-8000-00000000d005',  9,  24.0,  30.8,  63),
  ('00000000-0000-4000-8000-00000000d005', 10,  24.2,  31.0,  68),
  ('00000000-0000-4000-8000-00000000d005', 11,  24.4,  31.2,  66),
  ('00000000-0000-4000-8000-00000000d005', 12,  24.4,  31.0,  71),
  -- Cascada de Ngardmau
  ('00000000-0000-4000-8000-00000000d006',  1,  24.0,  30.6,  67),
  ('00000000-0000-4000-8000-00000000d006',  2,  24.0,  30.6,  63),
  ('00000000-0000-4000-8000-00000000d006',  3,  24.2,  30.8,  58),
  ('00000000-0000-4000-8000-00000000d006',  4,  24.4,  31.2,  56),
  ('00000000-0000-4000-8000-00000000d006',  5,  24.4,  31.2,  74),
  ('00000000-0000-4000-8000-00000000d006',  6,  24.0,  30.8,  79),
  ('00000000-0000-4000-8000-00000000d006',  7,  23.8,  30.4,  77),
  ('00000000-0000-4000-8000-00000000d006',  8,  23.8,  30.4,  71),
  ('00000000-0000-4000-8000-00000000d006',  9,  23.8,  30.6,  66),
  ('00000000-0000-4000-8000-00000000d006', 10,  24.0,  30.8,  71),
  ('00000000-0000-4000-8000-00000000d006', 11,  24.2,  31.0,  69),
  ('00000000-0000-4000-8000-00000000d006', 12,  24.2,  30.8,  74),
  -- Peleliu
  ('00000000-0000-4000-8000-00000000d007',  1,  24.6,  30.6,  58),
  ('00000000-0000-4000-8000-00000000d007',  2,  24.6,  30.6,  54),
  ('00000000-0000-4000-8000-00000000d007',  3,  24.8,  30.8,  49),
  ('00000000-0000-4000-8000-00000000d007',  4,  25.0,  31.2,  47),
  ('00000000-0000-4000-8000-00000000d007',  5,  25.0,  31.2,  65),
  ('00000000-0000-4000-8000-00000000d007',  6,  24.6,  30.8,  70),
  ('00000000-0000-4000-8000-00000000d007',  7,  24.4,  30.4,  68),
  ('00000000-0000-4000-8000-00000000d007',  8,  24.4,  30.4,  62),
  ('00000000-0000-4000-8000-00000000d007',  9,  24.4,  30.6,  57),
  ('00000000-0000-4000-8000-00000000d007', 10,  24.6,  30.8,  62),
  ('00000000-0000-4000-8000-00000000d007', 11,  24.8,  31.0,  60),
  ('00000000-0000-4000-8000-00000000d007', 12,  24.8,  30.8,  65),
  -- Kayangel (atolón)
  ('00000000-0000-4000-8000-00000000d008',  1,  24.6,  30.4,  55),
  ('00000000-0000-4000-8000-00000000d008',  2,  24.6,  30.4,  51),
  ('00000000-0000-4000-8000-00000000d008',  3,  24.8,  30.6,  46),
  ('00000000-0000-4000-8000-00000000d008',  4,  25.0,  31.0,  44),
  ('00000000-0000-4000-8000-00000000d008',  5,  25.0,  31.0,  62),
  ('00000000-0000-4000-8000-00000000d008',  6,  24.6,  30.6,  67),
  ('00000000-0000-4000-8000-00000000d008',  7,  24.4,  30.2,  65),
  ('00000000-0000-4000-8000-00000000d008',  8,  24.4,  30.2,  59),
  ('00000000-0000-4000-8000-00000000d008',  9,  24.4,  30.4,  54),
  ('00000000-0000-4000-8000-00000000d008', 10,  24.6,  30.6,  59),
  ('00000000-0000-4000-8000-00000000d008', 11,  24.8,  30.8,  57),
  ('00000000-0000-4000-8000-00000000d008', 12,  24.8,  30.6,  62)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Koror, en USD. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'comida', 'Desayuno (café y algo en un café)', 14, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'comida', 'Almuerzo (bento o plato del día)', 16, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'comida', 'Cena en restaurante', 35, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'comida', 'Compra en supermercado', 90, 'USD', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'comida', 'Bento o pescado al paso', 6, 'USD', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'alojamiento', 'Hotel 3★, noche', 170, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'alojamiento', 'Lavandería (una carga)', 10, 'USD', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'alojamiento', 'Depósito de equipaje', 10, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'alojamiento', 'Propinas y servicio', 5, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'transporte', 'Taxi, día', 20, 'USD', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'transporte', 'Taxi, viaje corto', 8, 'USD', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 20, 'USD', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'transporte', 'Lancha a otra isla, tramo', 60, 'USD', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 50, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'entretenimiento', 'Visita guiada', 120, 'USD', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'entretenimiento', 'Entrada a museo', 10, 'USD', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'entretenimiento', 'Salida nocturna', 30, 'USD', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000d000'::uuid, 'entretenimiento', 'Excursión de día completo', 150, 'USD', 1, true, 4, 6)
) as v(destination_id, category, name, base_price, currency,
       base_qty, scales_with_days, days_per_unit, max_qty)
on conflict (id) do nothing;

-- Las otras ocho ciudades, derivadas de la base con un factor.
-- En USD se redondea al centavo: redondear a la unidad convertiría un
-- café de 2,50 en uno de 2 o de 3.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(ciudad.id::text || p.name)::uuid,
  ciudad.id, p.category, p.name, round(p.base_price * ciudad.factor, 2), p.currency,
  p.base_qty, p.scales_with_days, p.days_per_unit, p.max_qty
from (values
  ('00000000-0000-4000-8000-00000000d001'::uuid, 1.40),  -- Islas Rocosas (Rock Islands)
  ('00000000-0000-4000-8000-00000000d002'::uuid, 1.40),  -- Lago de las Medusas (Eil Malk)
  ('00000000-0000-4000-8000-00000000d003'::uuid, 1.50),  -- Blue Corner (buceo)
  ('00000000-0000-4000-8000-00000000d004'::uuid, 0.90),  -- Melekeok (la capital)
  ('00000000-0000-4000-8000-00000000d005'::uuid, 0.90),  -- Monolitos de Badrulchau
  ('00000000-0000-4000-8000-00000000d006'::uuid, 0.90),  -- Cascada de Ngardmau
  ('00000000-0000-4000-8000-00000000d007'::uuid, 0.90),  -- Peleliu
  ('00000000-0000-4000-8000-00000000d008'::uuid, 1.00)  -- Kayangel (atolón)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000d000'
on conflict (id) do nothing;

-- En las Islas Rocosas, el lago de las Medusas y Blue Corner, la atracción
-- principal es el permiso de las Islas Rocosas, que se paga una sola vez y no
-- depende del lugar: derivado con el factor, salía más caro de lo que es.
update products
set base_price = 100
where destination_id in (
    '00000000-0000-4000-8000-00000000d001', -- Islas Rocosas
    '00000000-0000-4000-8000-00000000d002', -- Lago de las Medusas
    '00000000-0000-4000-8000-00000000d003'  -- Blue Corner
  )
  and name = 'Entrada a la atracción principal';
