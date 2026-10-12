-- Camerún, con Duala como ciudad base: es la ciudad más grande y la del
-- aeropuerto con más vuelos; Yaundé, la capital, está a pocas horas. Precios en
-- francos CFA de África Central, sin centavos: el franco está atado al euro y
-- vale lo mismo que el de África Occidental, aunque uno no se acepte en la zona
-- del otro.
--
-- Entra con aviso (spec, 15.8): la guía manda a revisar la recomendación de
-- viaje del propio país antes de reservar. Las ciudades del planificador son
-- las del Litoral, el Centro, el Sur, el Este y el Oeste; ninguna está en el
-- Noroeste ni en el Sudoeste anglófonos, donde están Limbe y el monte Camerún,
-- ni en el Extremo Norte.
--
-- Duala es de las ciudades más lluviosas de África, con lluvia casi todos los
-- días de junio a octubre. Yaundé y el sur tienen dos temporadas de lluvia; las
-- tierras altas del Oeste, en Dschang y Bandjoun, son frescas.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Bandjoun (jefatura bamileke) en enero: 12,6 / 24 → fresco + templado → capas, cero playa
--   Edéa (río Sanaga) en febrero: 22,4 / 31,6 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ab00 a ab08, la base es ab00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ab00', 'Duala',                             'camerun', 'XAF', true,  'duala'),
  ('00000000-0000-4000-8000-00000000ab01', 'Yaundé',                            'camerun', 'XAF', false, 'yaunde'),
  ('00000000-0000-4000-8000-00000000ab02', 'Kribi',                             'camerun', 'XAF', false, 'kribi'),
  ('00000000-0000-4000-8000-00000000ab03', 'Ebodjé (tortugas marinas)',         'camerun', 'XAF', false, 'ebodje'),
  ('00000000-0000-4000-8000-00000000ab04', 'Edéa (río Sanaga)',                 'camerun', 'XAF', false, 'edea'),
  ('00000000-0000-4000-8000-00000000ab05', 'Foumban (palacio del sultán)',      'camerun', 'XAF', false, 'foumban'),
  ('00000000-0000-4000-8000-00000000ab06', 'Dschang (tierras altas del Oeste)', 'camerun', 'XAF', false, 'dschang'),
  ('00000000-0000-4000-8000-00000000ab07', 'Bandjoun (jefatura bamileke)',      'camerun', 'XAF', false, 'bandjoun'),
  ('00000000-0000-4000-8000-00000000ab08', 'Reserva del Dja (Somalomo)',        'camerun', 'XAF', false, 'dja')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Duala
  ('00000000-0000-4000-8000-00000000ab00',  1,  23.2,  30.8,  13),
  ('00000000-0000-4000-8000-00000000ab00',  2,  23.4,  31.4,  19),
  ('00000000-0000-4000-8000-00000000ab00',  3,  23.2,  31.0,  39),
  ('00000000-0000-4000-8000-00000000ab00',  4,  23.0,  30.6,  52),
  ('00000000-0000-4000-8000-00000000ab00',  5,  22.8,  30.0,  61),
  ('00000000-0000-4000-8000-00000000ab00',  6,  22.4,  28.4,  71),
  ('00000000-0000-4000-8000-00000000ab00',  7,  22.0,  26.8,  84),
  ('00000000-0000-4000-8000-00000000ab00',  8,  22.0,  26.8,  84),
  ('00000000-0000-4000-8000-00000000ab00',  9,  22.0,  27.6,  77),
  ('00000000-0000-4000-8000-00000000ab00', 10,  22.2,  28.4,  65),
  ('00000000-0000-4000-8000-00000000ab00', 11,  22.6,  29.6,  35),
  ('00000000-0000-4000-8000-00000000ab00', 12,  22.8,  30.4,  13),
  -- Yaundé
  ('00000000-0000-4000-8000-00000000ab01',  1,  18.8,  29.4,   6),
  ('00000000-0000-4000-8000-00000000ab01',  2,  19.4,  30.0,  13),
  ('00000000-0000-4000-8000-00000000ab01',  3,  19.6,  29.6,  35),
  ('00000000-0000-4000-8000-00000000ab01',  4,  19.6,  29.0,  48),
  ('00000000-0000-4000-8000-00000000ab01',  5,  19.6,  28.2,  52),
  ('00000000-0000-4000-8000-00000000ab01',  6,  19.2,  27.2,  42),
  ('00000000-0000-4000-8000-00000000ab01',  7,  18.8,  26.2,  29),
  ('00000000-0000-4000-8000-00000000ab01',  8,  18.8,  26.4,  32),
  ('00000000-0000-4000-8000-00000000ab01',  9,  19.0,  27.0,  58),
  ('00000000-0000-4000-8000-00000000ab01', 10,  19.0,  27.2,  65),
  ('00000000-0000-4000-8000-00000000ab01', 11,  19.0,  27.8,  35),
  ('00000000-0000-4000-8000-00000000ab01', 12,  18.8,  28.6,  10),
  -- Kribi
  ('00000000-0000-4000-8000-00000000ab02',  1,  23.2,  30.0,  19),
  ('00000000-0000-4000-8000-00000000ab02',  2,  23.6,  30.6,  26),
  ('00000000-0000-4000-8000-00000000ab02',  3,  23.4,  30.4,  39),
  ('00000000-0000-4000-8000-00000000ab02',  4,  23.2,  30.2,  48),
  ('00000000-0000-4000-8000-00000000ab02',  5,  23.0,  29.4,  55),
  ('00000000-0000-4000-8000-00000000ab02',  6,  22.6,  28.0,  42),
  ('00000000-0000-4000-8000-00000000ab02',  7,  22.2,  26.8,  23),
  ('00000000-0000-4000-8000-00000000ab02',  8,  22.0,  26.6,  29),
  ('00000000-0000-4000-8000-00000000ab02',  9,  22.2,  27.4,  55),
  ('00000000-0000-4000-8000-00000000ab02', 10,  22.4,  28.0,  68),
  ('00000000-0000-4000-8000-00000000ab02', 11,  22.8,  29.0,  45),
  ('00000000-0000-4000-8000-00000000ab02', 12,  23.0,  29.6,  19),
  -- Ebodjé (tortugas marinas)
  ('00000000-0000-4000-8000-00000000ab03',  1,  23.2,  29.8,  19),
  ('00000000-0000-4000-8000-00000000ab03',  2,  23.6,  30.4,  26),
  ('00000000-0000-4000-8000-00000000ab03',  3,  23.4,  30.2,  39),
  ('00000000-0000-4000-8000-00000000ab03',  4,  23.2,  30.0,  48),
  ('00000000-0000-4000-8000-00000000ab03',  5,  23.0,  29.2,  55),
  ('00000000-0000-4000-8000-00000000ab03',  6,  22.6,  27.8,  42),
  ('00000000-0000-4000-8000-00000000ab03',  7,  22.2,  26.6,  23),
  ('00000000-0000-4000-8000-00000000ab03',  8,  22.0,  26.4,  29),
  ('00000000-0000-4000-8000-00000000ab03',  9,  22.2,  27.2,  55),
  ('00000000-0000-4000-8000-00000000ab03', 10,  22.4,  27.8,  68),
  ('00000000-0000-4000-8000-00000000ab03', 11,  22.8,  28.8,  45),
  ('00000000-0000-4000-8000-00000000ab03', 12,  23.0,  29.4,  19),
  -- Edéa (río Sanaga)
  ('00000000-0000-4000-8000-00000000ab04',  1,  22.0,  30.8,  13),
  ('00000000-0000-4000-8000-00000000ab04',  2,  22.4,  31.6,  19),
  ('00000000-0000-4000-8000-00000000ab04',  3,  22.4,  31.2,  39),
  ('00000000-0000-4000-8000-00000000ab04',  4,  22.2,  30.6,  52),
  ('00000000-0000-4000-8000-00000000ab04',  5,  22.0,  30.0,  58),
  ('00000000-0000-4000-8000-00000000ab04',  6,  21.6,  28.6,  61),
  ('00000000-0000-4000-8000-00000000ab04',  7,  21.2,  27.0,  65),
  ('00000000-0000-4000-8000-00000000ab04',  8,  21.2,  27.0,  68),
  ('00000000-0000-4000-8000-00000000ab04',  9,  21.4,  27.8,  71),
  ('00000000-0000-4000-8000-00000000ab04', 10,  21.6,  28.4,  68),
  ('00000000-0000-4000-8000-00000000ab04', 11,  21.8,  29.6,  35),
  ('00000000-0000-4000-8000-00000000ab04', 12,  21.8,  30.2,  13),
  -- Foumban (palacio del sultán)
  ('00000000-0000-4000-8000-00000000ab05',  1,  15.4,  27.0,   3),
  ('00000000-0000-4000-8000-00000000ab05',  2,  16.2,  28.0,  10),
  ('00000000-0000-4000-8000-00000000ab05',  3,  16.8,  27.6,  29),
  ('00000000-0000-4000-8000-00000000ab05',  4,  16.8,  26.6,  48),
  ('00000000-0000-4000-8000-00000000ab05',  5,  16.6,  25.6,  55),
  ('00000000-0000-4000-8000-00000000ab05',  6,  16.2,  24.4,  58),
  ('00000000-0000-4000-8000-00000000ab05',  7,  15.8,  23.0,  61),
  ('00000000-0000-4000-8000-00000000ab05',  8,  15.8,  23.2,  65),
  ('00000000-0000-4000-8000-00000000ab05',  9,  15.8,  24.0,  68),
  ('00000000-0000-4000-8000-00000000ab05', 10,  15.8,  24.6,  58),
  ('00000000-0000-4000-8000-00000000ab05', 11,  15.6,  25.6,  16),
  ('00000000-0000-4000-8000-00000000ab05', 12,  15.2,  26.4,   3),
  -- Dschang (tierras altas del Oeste)
  ('00000000-0000-4000-8000-00000000ab06',  1,  13.0,  24.4,   6),
  ('00000000-0000-4000-8000-00000000ab06',  2,  13.8,  25.4,  13),
  ('00000000-0000-4000-8000-00000000ab06',  3,  14.4,  25.0,  35),
  ('00000000-0000-4000-8000-00000000ab06',  4,  14.6,  24.0,  55),
  ('00000000-0000-4000-8000-00000000ab06',  5,  14.6,  23.0,  61),
  ('00000000-0000-4000-8000-00000000ab06',  6,  14.2,  21.8,  68),
  ('00000000-0000-4000-8000-00000000ab06',  7,  13.8,  20.4,  74),
  ('00000000-0000-4000-8000-00000000ab06',  8,  13.8,  20.6,  74),
  ('00000000-0000-4000-8000-00000000ab06',  9,  13.8,  21.4,  74),
  ('00000000-0000-4000-8000-00000000ab06', 10,  13.8,  22.0,  65),
  ('00000000-0000-4000-8000-00000000ab06', 11,  13.6,  23.0,  23),
  ('00000000-0000-4000-8000-00000000ab06', 12,  13.0,  23.8,   6),
  -- Bandjoun (jefatura bamileke)
  ('00000000-0000-4000-8000-00000000ab07',  1,  12.6,  24.0,   6),
  ('00000000-0000-4000-8000-00000000ab07',  2,  13.4,  25.0,  13),
  ('00000000-0000-4000-8000-00000000ab07',  3,  14.0,  24.6,  35),
  ('00000000-0000-4000-8000-00000000ab07',  4,  14.2,  23.6,  55),
  ('00000000-0000-4000-8000-00000000ab07',  5,  14.2,  22.6,  61),
  ('00000000-0000-4000-8000-00000000ab07',  6,  13.8,  21.4,  65),
  ('00000000-0000-4000-8000-00000000ab07',  7,  13.4,  20.0,  71),
  ('00000000-0000-4000-8000-00000000ab07',  8,  13.4,  20.2,  71),
  ('00000000-0000-4000-8000-00000000ab07',  9,  13.4,  21.0,  71),
  ('00000000-0000-4000-8000-00000000ab07', 10,  13.4,  21.6,  62),
  ('00000000-0000-4000-8000-00000000ab07', 11,  13.2,  22.6,  23),
  ('00000000-0000-4000-8000-00000000ab07', 12,  12.6,  23.4,   6),
  -- Reserva del Dja (Somalomo)
  ('00000000-0000-4000-8000-00000000ab08',  1,  19.2,  29.4,  10),
  ('00000000-0000-4000-8000-00000000ab08',  2,  19.8,  30.2,  19),
  ('00000000-0000-4000-8000-00000000ab08',  3,  20.0,  29.8,  39),
  ('00000000-0000-4000-8000-00000000ab08',  4,  20.0,  29.0,  52),
  ('00000000-0000-4000-8000-00000000ab08',  5,  20.0,  28.4,  52),
  ('00000000-0000-4000-8000-00000000ab08',  6,  19.6,  27.2,  35),
  ('00000000-0000-4000-8000-00000000ab08',  7,  19.2,  26.2,  19),
  ('00000000-0000-4000-8000-00000000ab08',  8,  19.2,  26.4,  26),
  ('00000000-0000-4000-8000-00000000ab08',  9,  19.4,  27.0,  52),
  ('00000000-0000-4000-8000-00000000ab08', 10,  19.4,  27.4,  65),
  ('00000000-0000-4000-8000-00000000ab08', 11,  19.4,  27.6,  42),
  ('00000000-0000-4000-8000-00000000ab08', 12,  19.0,  28.6,  13)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Duala, en XAF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'comida', 'Desayuno (café y algo en una pastelería)', 2000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'comida', 'Almuerzo (ndolé o plato del día)', 3500, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'comida', 'Cena en restaurante', 10000, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'comida', 'Compra en supermercado', 18000, 'XAF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'comida', 'Beignets con porotos al paso', 500, 'XAF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'alojamiento', 'Hotel 3★, noche', 45000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'alojamiento', 'Lavandería (una carga)', 4000, 'XAF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'alojamiento', 'Depósito de equipaje', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'alojamiento', 'Propinas y servicio', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'transporte', 'Taxi colectivo o moto, día', 1500, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'transporte', 'Taxi o Yango, viaje corto', 2000, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 7000, 'XAF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'transporte', 'Bus entre ciudades, tramo', 6000, 'XAF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'entretenimiento', 'Visita guiada', 15000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'entretenimiento', 'Entrada a museo', 2000, 'XAF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'entretenimiento', 'Salida nocturna', 10000, 'XAF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ab00'::uuid, 'entretenimiento', 'Excursión de día completo', 40000, 'XAF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ab01'::uuid, 0.95),  -- Yaundé
  ('00000000-0000-4000-8000-00000000ab02'::uuid, 1.00),  -- Kribi
  ('00000000-0000-4000-8000-00000000ab03'::uuid, 0.70),  -- Ebodjé (tortugas marinas)
  ('00000000-0000-4000-8000-00000000ab04'::uuid, 0.70),  -- Edéa (río Sanaga)
  ('00000000-0000-4000-8000-00000000ab05'::uuid, 0.70),  -- Foumban (palacio del sultán)
  ('00000000-0000-4000-8000-00000000ab06'::uuid, 0.70),  -- Dschang (tierras altas del Oeste)
  ('00000000-0000-4000-8000-00000000ab07'::uuid, 0.65),  -- Bandjoun (jefatura bamileke)
  ('00000000-0000-4000-8000-00000000ab08'::uuid, 1.00)  -- Reserva del Dja (Somalomo)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ab00'
on conflict (id) do nothing;
