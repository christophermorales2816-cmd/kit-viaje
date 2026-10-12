-- República del Congo, con Brazzaville como ciudad base: es la capital y por
-- donde entra casi todo el que viaja; mira a Kinshasa del otro lado del río.
-- Precios en francos CFA de África Central, sin centavos.
--
-- Las ciudades del planificador son la capital, Pointe-Noire y la costa, el
-- bosque del Mayombe, Dolisie, Ouesso y el parque de Odzala. Ninguna está a
-- menos de cincuenta kilómetros de la frontera con la República
-- Centroafricana, adonde las recomendaciones piden no ir, ni en el
-- departamento del Pool, fuera de la capital.
--
-- Sobre el ecuador. Brazzaville, como Kinshasa, tiene calor húmedo todo el año,
-- con lluvias de octubre a mayo y una temporada seca, más fresca y nublada, de
-- junio a septiembre. La costa, en Pointe-Noire, es algo más fresca y seca. El
-- norte, en Odzala y Ouesso, es selva ecuatorial, con lluvia buena parte del
-- año.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Dolisie en julio: 16,6 / 25,2 → fresco + templado + calido → capas, playa
--   Ouesso (río Sangha) en marzo: 21,4 / 32,2 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000b500 a b508, la base es b500.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000b500', 'Brazzaville',                     'republica-del-congo', 'XAF', true,  'brazzaville'),
  ('00000000-0000-4000-8000-00000000b501', 'Rápidos del Congo',               'republica-del-congo', 'XAF', false, 'rapidos-del-congo'),
  ('00000000-0000-4000-8000-00000000b502', 'Pointe-Noire',                    'republica-del-congo', 'XAF', false, 'pointe-noire'),
  ('00000000-0000-4000-8000-00000000b503', 'Loango (ruta de los esclavos)',   'republica-del-congo', 'XAF', false, 'loango'),
  ('00000000-0000-4000-8000-00000000b504', 'Parque Nacional Conkouati-Douli', 'republica-del-congo', 'XAF', false, 'conkouati'),
  ('00000000-0000-4000-8000-00000000b505', 'Bosque del Mayombe (Dimonika)',   'republica-del-congo', 'XAF', false, 'mayombe'),
  ('00000000-0000-4000-8000-00000000b506', 'Dolisie',                         'republica-del-congo', 'XAF', false, 'dolisie'),
  ('00000000-0000-4000-8000-00000000b507', 'Parque Nacional Odzala-Kokoua',   'republica-del-congo', 'XAF', false, 'odzala'),
  ('00000000-0000-4000-8000-00000000b508', 'Ouesso (río Sangha)',             'republica-del-congo', 'XAF', false, 'ouesso')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Brazzaville
  ('00000000-0000-4000-8000-00000000b500',  1,  21.6,  30.6,  39),
  ('00000000-0000-4000-8000-00000000b500',  2,  21.8,  31.4,  43),
  ('00000000-0000-4000-8000-00000000b500',  3,  22.0,  32.0,  48),
  ('00000000-0000-4000-8000-00000000b500',  4,  22.2,  32.0,  53),
  ('00000000-0000-4000-8000-00000000b500',  5,  21.8,  31.0,  35),
  ('00000000-0000-4000-8000-00000000b500',  6,  19.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000b500',  7,  17.8,  27.2,   0),
  ('00000000-0000-4000-8000-00000000b500',  8,  18.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000b500',  9,  20.4,  30.4,  20),
  ('00000000-0000-4000-8000-00000000b500', 10,  21.4,  31.0,  42),
  ('00000000-0000-4000-8000-00000000b500', 11,  21.8,  30.8,  57),
  ('00000000-0000-4000-8000-00000000b500', 12,  21.6,  30.4,  52),
  -- Rápidos del Congo
  ('00000000-0000-4000-8000-00000000b501',  1,  21.6,  30.6,  39),
  ('00000000-0000-4000-8000-00000000b501',  2,  21.8,  31.4,  43),
  ('00000000-0000-4000-8000-00000000b501',  3,  22.0,  32.0,  48),
  ('00000000-0000-4000-8000-00000000b501',  4,  22.2,  32.0,  53),
  ('00000000-0000-4000-8000-00000000b501',  5,  21.8,  31.0,  35),
  ('00000000-0000-4000-8000-00000000b501',  6,  19.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000b501',  7,  17.8,  27.2,   0),
  ('00000000-0000-4000-8000-00000000b501',  8,  18.6,  28.6,   3),
  ('00000000-0000-4000-8000-00000000b501',  9,  20.4,  30.4,  20),
  ('00000000-0000-4000-8000-00000000b501', 10,  21.4,  31.0,  42),
  ('00000000-0000-4000-8000-00000000b501', 11,  21.8,  30.8,  57),
  ('00000000-0000-4000-8000-00000000b501', 12,  21.6,  30.4,  52),
  -- Pointe-Noire
  ('00000000-0000-4000-8000-00000000b502',  1,  23.4,  29.6,  32),
  ('00000000-0000-4000-8000-00000000b502',  2,  23.6,  30.2,  35),
  ('00000000-0000-4000-8000-00000000b502',  3,  23.6,  30.6,  42),
  ('00000000-0000-4000-8000-00000000b502',  4,  23.4,  30.2,  42),
  ('00000000-0000-4000-8000-00000000b502',  5,  22.4,  28.8,  19),
  ('00000000-0000-4000-8000-00000000b502',  6,  19.6,  26.0,   0),
  ('00000000-0000-4000-8000-00000000b502',  7,  18.4,  24.4,   0),
  ('00000000-0000-4000-8000-00000000b502',  8,  18.8,  24.6,   0),
  ('00000000-0000-4000-8000-00000000b502',  9,  20.6,  25.8,  10),
  ('00000000-0000-4000-8000-00000000b502', 10,  22.4,  27.4,  32),
  ('00000000-0000-4000-8000-00000000b502', 11,  23.0,  28.6,  45),
  ('00000000-0000-4000-8000-00000000b502', 12,  23.2,  29.2,  39),
  -- Loango (ruta de los esclavos)
  ('00000000-0000-4000-8000-00000000b503',  1,  23.2,  29.6,  32),
  ('00000000-0000-4000-8000-00000000b503',  2,  23.4,  30.2,  35),
  ('00000000-0000-4000-8000-00000000b503',  3,  23.4,  30.6,  42),
  ('00000000-0000-4000-8000-00000000b503',  4,  23.2,  30.2,  42),
  ('00000000-0000-4000-8000-00000000b503',  5,  22.2,  28.8,  19),
  ('00000000-0000-4000-8000-00000000b503',  6,  19.4,  26.0,   0),
  ('00000000-0000-4000-8000-00000000b503',  7,  18.2,  24.4,   0),
  ('00000000-0000-4000-8000-00000000b503',  8,  18.6,  24.6,   0),
  ('00000000-0000-4000-8000-00000000b503',  9,  20.4,  25.8,  10),
  ('00000000-0000-4000-8000-00000000b503', 10,  22.2,  27.4,  32),
  ('00000000-0000-4000-8000-00000000b503', 11,  22.8,  28.6,  45),
  ('00000000-0000-4000-8000-00000000b503', 12,  23.0,  29.2,  39),
  -- Parque Nacional Conkouati-Douli
  ('00000000-0000-4000-8000-00000000b504',  1,  23.0,  29.4,  35),
  ('00000000-0000-4000-8000-00000000b504',  2,  23.2,  30.0,  39),
  ('00000000-0000-4000-8000-00000000b504',  3,  23.2,  30.4,  45),
  ('00000000-0000-4000-8000-00000000b504',  4,  23.0,  30.0,  45),
  ('00000000-0000-4000-8000-00000000b504',  5,  22.0,  28.6,  23),
  ('00000000-0000-4000-8000-00000000b504',  6,  19.2,  25.8,   3),
  ('00000000-0000-4000-8000-00000000b504',  7,  18.0,  24.2,   0),
  ('00000000-0000-4000-8000-00000000b504',  8,  18.4,  24.4,   3),
  ('00000000-0000-4000-8000-00000000b504',  9,  20.2,  25.6,  13),
  ('00000000-0000-4000-8000-00000000b504', 10,  22.0,  27.2,  35),
  ('00000000-0000-4000-8000-00000000b504', 11,  22.6,  28.4,  48),
  ('00000000-0000-4000-8000-00000000b504', 12,  22.8,  29.0,  42),
  -- Bosque del Mayombe (Dimonika)
  ('00000000-0000-4000-8000-00000000b505',  1,  21.0,  28.6,  42),
  ('00000000-0000-4000-8000-00000000b505',  2,  21.2,  29.2,  45),
  ('00000000-0000-4000-8000-00000000b505',  3,  21.2,  29.6,  52),
  ('00000000-0000-4000-8000-00000000b505',  4,  21.2,  29.2,  55),
  ('00000000-0000-4000-8000-00000000b505',  5,  20.4,  27.6,  32),
  ('00000000-0000-4000-8000-00000000b505',  6,  18.0,  25.0,   3),
  ('00000000-0000-4000-8000-00000000b505',  7,  16.8,  23.6,   0),
  ('00000000-0000-4000-8000-00000000b505',  8,  17.4,  24.2,   6),
  ('00000000-0000-4000-8000-00000000b505',  9,  18.8,  25.6,  23),
  ('00000000-0000-4000-8000-00000000b505', 10,  20.4,  27.0,  48),
  ('00000000-0000-4000-8000-00000000b505', 11,  20.8,  27.8,  58),
  ('00000000-0000-4000-8000-00000000b505', 12,  20.8,  28.2,  52),
  -- Dolisie
  ('00000000-0000-4000-8000-00000000b506',  1,  21.0,  29.6,  42),
  ('00000000-0000-4000-8000-00000000b506',  2,  21.2,  30.4,  45),
  ('00000000-0000-4000-8000-00000000b506',  3,  21.4,  30.8,  52),
  ('00000000-0000-4000-8000-00000000b506',  4,  21.4,  30.4,  55),
  ('00000000-0000-4000-8000-00000000b506',  5,  20.6,  28.8,  32),
  ('00000000-0000-4000-8000-00000000b506',  6,  18.0,  26.2,   3),
  ('00000000-0000-4000-8000-00000000b506',  7,  16.6,  25.2,   0),
  ('00000000-0000-4000-8000-00000000b506',  8,  17.4,  26.6,   3),
  ('00000000-0000-4000-8000-00000000b506',  9,  19.4,  28.4,  23),
  ('00000000-0000-4000-8000-00000000b506', 10,  20.8,  29.4,  45),
  ('00000000-0000-4000-8000-00000000b506', 11,  21.2,  29.4,  58),
  ('00000000-0000-4000-8000-00000000b506', 12,  21.0,  29.4,  52),
  -- Parque Nacional Odzala-Kokoua
  ('00000000-0000-4000-8000-00000000b507',  1,  20.6,  30.0,  32),
  ('00000000-0000-4000-8000-00000000b507',  2,  20.8,  31.0,  42),
  ('00000000-0000-4000-8000-00000000b507',  3,  21.0,  31.2,  55),
  ('00000000-0000-4000-8000-00000000b507',  4,  21.2,  31.0,  61),
  ('00000000-0000-4000-8000-00000000b507',  5,  21.0,  30.4,  55),
  ('00000000-0000-4000-8000-00000000b507',  6,  20.6,  29.2,  26),
  ('00000000-0000-4000-8000-00000000b507',  7,  20.2,  28.2,  16),
  ('00000000-0000-4000-8000-00000000b507',  8,  20.4,  28.6,  26),
  ('00000000-0000-4000-8000-00000000b507',  9,  20.6,  29.4,  52),
  ('00000000-0000-4000-8000-00000000b507', 10,  20.8,  29.6,  65),
  ('00000000-0000-4000-8000-00000000b507', 11,  20.8,  29.4,  61),
  ('00000000-0000-4000-8000-00000000b507', 12,  20.6,  29.6,  42),
  -- Ouesso (río Sangha)
  ('00000000-0000-4000-8000-00000000b508',  1,  21.0,  31.0,  26),
  ('00000000-0000-4000-8000-00000000b508',  2,  21.2,  32.0,  35),
  ('00000000-0000-4000-8000-00000000b508',  3,  21.4,  32.2,  52),
  ('00000000-0000-4000-8000-00000000b508',  4,  21.6,  31.8,  58),
  ('00000000-0000-4000-8000-00000000b508',  5,  21.4,  31.0,  55),
  ('00000000-0000-4000-8000-00000000b508',  6,  21.0,  30.0,  32),
  ('00000000-0000-4000-8000-00000000b508',  7,  20.6,  29.0,  23),
  ('00000000-0000-4000-8000-00000000b508',  8,  20.8,  29.4,  29),
  ('00000000-0000-4000-8000-00000000b508',  9,  21.0,  30.2,  52),
  ('00000000-0000-4000-8000-00000000b508', 10,  21.2,  30.4,  65),
  ('00000000-0000-4000-8000-00000000b508', 11,  21.2,  30.4,  58),
  ('00000000-0000-4000-8000-00000000b508', 12,  21.0,  30.6,  39)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Brazzaville, en XAF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'comida', 'Desayuno (café y algo en una pastelería)', 3000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'comida', 'Almuerzo (saka-saka con pescado o plato del día)', 4500, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'comida', 'Cena en restaurante', 12000, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'comida', 'Compra en supermercado', 25000, 'XAF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'comida', 'Brochettes o beignets al paso', 1000, 'XAF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'alojamiento', 'Hotel 3★, noche', 60000, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'alojamiento', 'Lavandería (una carga)', 4000, 'XAF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'alojamiento', 'Depósito de equipaje', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'alojamiento', 'Propinas y servicio', 2000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'transporte', 'Taxi colectivo o bus, día', 1500, 'XAF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'transporte', 'Taxi, viaje corto', 2000, 'XAF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 6000, 'XAF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'transporte', 'Bus entre ciudades, tramo', 12000, 'XAF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 3000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'entretenimiento', 'Visita guiada', 15000, 'XAF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'entretenimiento', 'Entrada a museo', 2000, 'XAF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'entretenimiento', 'Salida nocturna', 12000, 'XAF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000b500'::uuid, 'entretenimiento', 'Excursión de día completo', 50000, 'XAF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000b501'::uuid, 1.00),  -- Rápidos del Congo
  ('00000000-0000-4000-8000-00000000b502'::uuid, 1.05),  -- Pointe-Noire
  ('00000000-0000-4000-8000-00000000b503'::uuid, 0.70),  -- Loango (ruta de los esclavos)
  ('00000000-0000-4000-8000-00000000b504'::uuid, 1.30),  -- Parque Nacional Conkouati-Douli
  ('00000000-0000-4000-8000-00000000b505'::uuid, 0.70),  -- Bosque del Mayombe (Dimonika)
  ('00000000-0000-4000-8000-00000000b506'::uuid, 0.70),  -- Dolisie
  ('00000000-0000-4000-8000-00000000b507'::uuid, 2.50),  -- Parque Nacional Odzala-Kokoua
  ('00000000-0000-4000-8000-00000000b508'::uuid, 0.80)  -- Ouesso (río Sangha)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000b500'
on conflict (id) do nothing;
