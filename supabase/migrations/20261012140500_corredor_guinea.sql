-- Guinea, con Conakri como ciudad base: es la capital y por donde entra casi
-- todo el que viaja. Precios en francos guineanos, sin centavos.
--
-- Las ciudades del planificador son la capital y sus islas, Dubréka, Kindia y
-- el Futa Yalón —Dalaba, Pita, Labé, Doucki y Mali—, adonde va casi todo el que
-- viaja por Guinea a caminar entre cañones y cascadas.
--
-- Calor húmedo en la costa, con una de las temporadas de lluvia más fuertes del
-- mundo, de junio a septiembre: en Conakri, julio y agosto llueven casi todos
-- los días. De noviembre a abril es la temporada seca. El Futa Yalón, entre mil
-- y mil quinientos metros, es fresco: en diciembre y enero, las noches de Mali
-- y de Dalaba rondan los once grados.
--
-- Lo que resuelve el motor con estos números, contra los umbrales sembrados
-- (frio ≤10, fresco ≤18, templado ≤25, calido sin tope):
--
--   Mali (la Dama de Mali) en enero: 10,6 / 25,6 → fresco + templado + calido → capas, playa
--   Kindia (Velo de la Novia) en marzo: 21,6 / 35,4 → templado + calido → nunca abrigo, playa
--
-- IDS FIJOS: destinos 00000000-…-00000000ba00 a ba08, la base es ba00.
-- Los precios usan md5(destino || nombre)::uuid, igual que las ciudades
-- derivadas de las migraciones anteriores: determinístico y sin choques.

insert into destinations (id, name, corridor, base_currency, is_base, slug) values
  ('00000000-0000-4000-8000-00000000ba00', 'Conakri',                         'guinea', 'GNF', true,  'conakri'),
  ('00000000-0000-4000-8000-00000000ba01', 'Islas de Los',                    'guinea', 'GNF', false, 'islas-de-los'),
  ('00000000-0000-4000-8000-00000000ba02', 'Dubréka (cascadas de la Soumba)', 'guinea', 'GNF', false, 'dubreka'),
  ('00000000-0000-4000-8000-00000000ba03', 'Kindia (Velo de la Novia)',       'guinea', 'GNF', false, 'kindia'),
  ('00000000-0000-4000-8000-00000000ba04', 'Dalaba (Futa Yalón)',             'guinea', 'GNF', false, 'dalaba'),
  ('00000000-0000-4000-8000-00000000ba05', 'Pita (cascadas de Kinkon)',       'guinea', 'GNF', false, 'pita'),
  ('00000000-0000-4000-8000-00000000ba06', 'Labé',                            'guinea', 'GNF', false, 'labe'),
  ('00000000-0000-4000-8000-00000000ba07', 'Doucki (cañones del Futa Yalón)', 'guinea', 'GNF', false, 'doucki'),
  ('00000000-0000-4000-8000-00000000ba08', 'Mali (la Dama de Mali)',          'guinea', 'GNF', false, 'mali')
on conflict (id) do nothing;

-- Promedios históricos aproximados, no pronóstico. precip_probability 0-100.
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  -- Conakri
  ('00000000-0000-4000-8000-00000000ba00',  1,  21.6,  30.9,   0),
  ('00000000-0000-4000-8000-00000000ba00',  2,  21.6,  31.3,   0),
  ('00000000-0000-4000-8000-00000000ba00',  3,  22.4,  31.6,   3),
  ('00000000-0000-4000-8000-00000000ba00',  4,  23.2,  31.8,   7),
  ('00000000-0000-4000-8000-00000000ba00',  5,  23.4,  31.4,  29),
  ('00000000-0000-4000-8000-00000000ba00',  6,  22.8,  29.8,  63),
  ('00000000-0000-4000-8000-00000000ba00',  7,  22.4,  28.0,  87),
  ('00000000-0000-4000-8000-00000000ba00',  8,  22.2,  27.6,  87),
  ('00000000-0000-4000-8000-00000000ba00',  9,  22.4,  28.6,  73),
  ('00000000-0000-4000-8000-00000000ba00', 10,  22.6,  29.8,  45),
  ('00000000-0000-4000-8000-00000000ba00', 11,  23.0,  30.9,  13),
  ('00000000-0000-4000-8000-00000000ba00', 12,  22.2,  31.1,   3),
  -- Islas de Los
  ('00000000-0000-4000-8000-00000000ba01',  1,  22.4,  30.4,   0),
  ('00000000-0000-4000-8000-00000000ba01',  2,  22.4,  30.8,   0),
  ('00000000-0000-4000-8000-00000000ba01',  3,  23.0,  31.0,   3),
  ('00000000-0000-4000-8000-00000000ba01',  4,  23.6,  31.2,   7),
  ('00000000-0000-4000-8000-00000000ba01',  5,  23.8,  30.8,  29),
  ('00000000-0000-4000-8000-00000000ba01',  6,  23.2,  29.4,  61),
  ('00000000-0000-4000-8000-00000000ba01',  7,  22.8,  27.8,  84),
  ('00000000-0000-4000-8000-00000000ba01',  8,  22.6,  27.4,  84),
  ('00000000-0000-4000-8000-00000000ba01',  9,  22.8,  28.4,  71),
  ('00000000-0000-4000-8000-00000000ba01', 10,  23.0,  29.4,  42),
  ('00000000-0000-4000-8000-00000000ba01', 11,  23.4,  30.4,  13),
  ('00000000-0000-4000-8000-00000000ba01', 12,  22.8,  30.6,   3),
  -- Dubréka (cascadas de la Soumba)
  ('00000000-0000-4000-8000-00000000ba02',  1,  21.2,  31.6,   0),
  ('00000000-0000-4000-8000-00000000ba02',  2,  21.4,  32.2,   0),
  ('00000000-0000-4000-8000-00000000ba02',  3,  22.2,  32.6,   3),
  ('00000000-0000-4000-8000-00000000ba02',  4,  23.0,  32.6,   7),
  ('00000000-0000-4000-8000-00000000ba02',  5,  23.2,  32.0,  29),
  ('00000000-0000-4000-8000-00000000ba02',  6,  22.6,  30.2,  63),
  ('00000000-0000-4000-8000-00000000ba02',  7,  22.2,  28.2,  87),
  ('00000000-0000-4000-8000-00000000ba02',  8,  22.0,  27.8,  87),
  ('00000000-0000-4000-8000-00000000ba02',  9,  22.2,  28.8,  73),
  ('00000000-0000-4000-8000-00000000ba02', 10,  22.4,  30.2,  45),
  ('00000000-0000-4000-8000-00000000ba02', 11,  22.6,  31.4,  13),
  ('00000000-0000-4000-8000-00000000ba02', 12,  21.8,  31.6,   3),
  -- Kindia (Velo de la Novia)
  ('00000000-0000-4000-8000-00000000ba03',  1,  18.6,  33.0,   0),
  ('00000000-0000-4000-8000-00000000ba03',  2,  20.0,  34.6,   0),
  ('00000000-0000-4000-8000-00000000ba03',  3,  21.6,  35.4,   3),
  ('00000000-0000-4000-8000-00000000ba03',  4,  22.4,  34.6,  13),
  ('00000000-0000-4000-8000-00000000ba03',  5,  22.2,  32.6,  35),
  ('00000000-0000-4000-8000-00000000ba03',  6,  21.2,  30.2,  61),
  ('00000000-0000-4000-8000-00000000ba03',  7,  20.6,  28.2,  81),
  ('00000000-0000-4000-8000-00000000ba03',  8,  20.6,  27.8,  84),
  ('00000000-0000-4000-8000-00000000ba03',  9,  20.8,  29.0,  74),
  ('00000000-0000-4000-8000-00000000ba03', 10,  21.0,  30.6,  48),
  ('00000000-0000-4000-8000-00000000ba03', 11,  20.6,  31.6,  13),
  ('00000000-0000-4000-8000-00000000ba03', 12,  19.0,  32.2,   0),
  -- Dalaba (Futa Yalón)
  ('00000000-0000-4000-8000-00000000ba04',  1,  11.4,  27.0,   0),
  ('00000000-0000-4000-8000-00000000ba04',  2,  12.6,  28.6,   0),
  ('00000000-0000-4000-8000-00000000ba04',  3,  14.6,  29.6,   3),
  ('00000000-0000-4000-8000-00000000ba04',  4,  16.2,  29.2,  13),
  ('00000000-0000-4000-8000-00000000ba04',  5,  16.8,  27.6,  35),
  ('00000000-0000-4000-8000-00000000ba04',  6,  16.2,  25.4,  58),
  ('00000000-0000-4000-8000-00000000ba04',  7,  16.0,  23.6,  74),
  ('00000000-0000-4000-8000-00000000ba04',  8,  16.0,  23.2,  81),
  ('00000000-0000-4000-8000-00000000ba04',  9,  16.0,  24.2,  71),
  ('00000000-0000-4000-8000-00000000ba04', 10,  15.6,  25.4,  45),
  ('00000000-0000-4000-8000-00000000ba04', 11,  13.6,  26.0,  10),
  ('00000000-0000-4000-8000-00000000ba04', 12,  11.6,  26.0,   0),
  -- Pita (cascadas de Kinkon)
  ('00000000-0000-4000-8000-00000000ba05',  1,  12.4,  28.0,   0),
  ('00000000-0000-4000-8000-00000000ba05',  2,  13.6,  29.6,   0),
  ('00000000-0000-4000-8000-00000000ba05',  3,  15.6,  30.6,   3),
  ('00000000-0000-4000-8000-00000000ba05',  4,  17.2,  30.2,  13),
  ('00000000-0000-4000-8000-00000000ba05',  5,  17.8,  28.6,  35),
  ('00000000-0000-4000-8000-00000000ba05',  6,  17.2,  26.4,  58),
  ('00000000-0000-4000-8000-00000000ba05',  7,  17.0,  24.6,  74),
  ('00000000-0000-4000-8000-00000000ba05',  8,  17.0,  24.2,  81),
  ('00000000-0000-4000-8000-00000000ba05',  9,  17.0,  25.2,  71),
  ('00000000-0000-4000-8000-00000000ba05', 10,  16.6,  26.4,  45),
  ('00000000-0000-4000-8000-00000000ba05', 11,  14.6,  27.0,  10),
  ('00000000-0000-4000-8000-00000000ba05', 12,  12.6,  27.0,   0),
  -- Labé
  ('00000000-0000-4000-8000-00000000ba06',  1,  12.6,  29.6,   0),
  ('00000000-0000-4000-8000-00000000ba06',  2,  14.0,  31.4,   0),
  ('00000000-0000-4000-8000-00000000ba06',  3,  16.6,  32.6,   3),
  ('00000000-0000-4000-8000-00000000ba06',  4,  18.6,  32.2,  10),
  ('00000000-0000-4000-8000-00000000ba06',  5,  19.2,  30.0,  32),
  ('00000000-0000-4000-8000-00000000ba06',  6,  18.2,  27.4,  58),
  ('00000000-0000-4000-8000-00000000ba06',  7,  17.8,  25.2,  77),
  ('00000000-0000-4000-8000-00000000ba06',  8,  17.8,  24.6,  84),
  ('00000000-0000-4000-8000-00000000ba06',  9,  17.8,  25.8,  74),
  ('00000000-0000-4000-8000-00000000ba06', 10,  17.4,  27.2,  42),
  ('00000000-0000-4000-8000-00000000ba06', 11,  15.0,  28.4,   6),
  ('00000000-0000-4000-8000-00000000ba06', 12,  12.8,  28.6,   0),
  -- Doucki (cañones del Futa Yalón)
  ('00000000-0000-4000-8000-00000000ba07',  1,  12.2,  28.4,   0),
  ('00000000-0000-4000-8000-00000000ba07',  2,  13.4,  30.0,   0),
  ('00000000-0000-4000-8000-00000000ba07',  3,  15.4,  31.0,   3),
  ('00000000-0000-4000-8000-00000000ba07',  4,  17.0,  30.6,  13),
  ('00000000-0000-4000-8000-00000000ba07',  5,  17.6,  29.0,  35),
  ('00000000-0000-4000-8000-00000000ba07',  6,  17.0,  26.8,  58),
  ('00000000-0000-4000-8000-00000000ba07',  7,  16.8,  25.0,  77),
  ('00000000-0000-4000-8000-00000000ba07',  8,  16.8,  24.6,  84),
  ('00000000-0000-4000-8000-00000000ba07',  9,  16.8,  25.6,  71),
  ('00000000-0000-4000-8000-00000000ba07', 10,  16.4,  26.8,  45),
  ('00000000-0000-4000-8000-00000000ba07', 11,  14.4,  27.4,  10),
  ('00000000-0000-4000-8000-00000000ba07', 12,  12.4,  27.4,   0),
  -- Mali (la Dama de Mali)
  ('00000000-0000-4000-8000-00000000ba08',  1,  10.6,  25.6,   0),
  ('00000000-0000-4000-8000-00000000ba08',  2,  11.8,  27.2,   0),
  ('00000000-0000-4000-8000-00000000ba08',  3,  13.8,  28.4,   3),
  ('00000000-0000-4000-8000-00000000ba08',  4,  15.4,  28.0,  10),
  ('00000000-0000-4000-8000-00000000ba08',  5,  16.0,  26.4,  32),
  ('00000000-0000-4000-8000-00000000ba08',  6,  15.4,  24.0,  58),
  ('00000000-0000-4000-8000-00000000ba08',  7,  15.2,  22.4,  77),
  ('00000000-0000-4000-8000-00000000ba08',  8,  15.2,  22.0,  84),
  ('00000000-0000-4000-8000-00000000ba08',  9,  15.2,  23.0,  71),
  ('00000000-0000-4000-8000-00000000ba08', 10,  14.8,  24.2,  39),
  ('00000000-0000-4000-8000-00000000ba08', 11,  12.6,  24.6,   6),
  ('00000000-0000-4000-8000-00000000ba08', 12,  10.8,  24.8,   0)
on conflict (destination_id, month) do nothing;

-- Precios de referencia de Conakri, en GNF. Órdenes de magnitud
-- para planificar, no precios vigentes: la vista muestra su antigüedad.
insert into products
  (id, destination_id, category, name, base_price, currency,
   base_qty, scales_with_days, days_per_unit, max_qty)
select
  md5(v.destination_id::text || v.name)::uuid, v.destination_id, v.category, v.name,
  v.base_price, v.currency, v.base_qty, v.scales_with_days, v.days_per_unit, v.max_qty
from (values
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'comida', 'Desayuno (café y pan con algo)', 40000, 'GNF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'comida', 'Almuerzo (arroz con salsa o plato del día)', 60000, 'GNF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'comida', 'Cena en restaurante', 200000, 'GNF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'comida', 'Compra en supermercado', 350000, 'GNF', 1, true, 4, 8),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'comida', 'Brochettes o beignets al paso', 15000, 'GNF', 1, true, 2, 15),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'alojamiento', 'Hotel 3★, noche', 800000, 'GNF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'alojamiento', 'Lavandería (una carga)', 50000, 'GNF', 1, true, 7, 4),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'alojamiento', 'Depósito de equipaje', 30000, 'GNF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'alojamiento', 'Propinas y servicio', 30000, 'GNF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'transporte', 'Taxi colectivo o moto, día', 20000, 'GNF', 1, true, 1, 30),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'transporte', 'Taxi, viaje corto', 40000, 'GNF', 1, true, 3, 10),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'transporte', 'Traslado al aeropuerto (por tramo)', 150000, 'GNF', 2, false, null, null),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'transporte', 'Taxi colectivo entre ciudades, tramo', 150000, 'GNF', 1, true, 6, 4),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'entretenimiento', 'Entrada a la atracción principal', 30000, 'GNF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'entretenimiento', 'Visita guiada', 250000, 'GNF', 1, false, null, null),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'entretenimiento', 'Entrada a museo', 20000, 'GNF', 1, true, 4, 6),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'entretenimiento', 'Salida nocturna', 150000, 'GNF', 1, true, 5, 5),
  ('00000000-0000-4000-8000-00000000ba00'::uuid, 'entretenimiento', 'Excursión de día completo', 600000, 'GNF', 1, true, 4, 6)
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
  ('00000000-0000-4000-8000-00000000ba01'::uuid, 1.10),  -- Islas de Los
  ('00000000-0000-4000-8000-00000000ba02'::uuid, 0.75),  -- Dubréka (cascadas de la Soumba)
  ('00000000-0000-4000-8000-00000000ba03'::uuid, 0.70),  -- Kindia (Velo de la Novia)
  ('00000000-0000-4000-8000-00000000ba04'::uuid, 0.75),  -- Dalaba (Futa Yalón)
  ('00000000-0000-4000-8000-00000000ba05'::uuid, 0.65),  -- Pita (cascadas de Kinkon)
  ('00000000-0000-4000-8000-00000000ba06'::uuid, 0.70),  -- Labé
  ('00000000-0000-4000-8000-00000000ba07'::uuid, 0.60),  -- Doucki (cañones del Futa Yalón)
  ('00000000-0000-4000-8000-00000000ba08'::uuid, 0.60)  -- Mali (la Dama de Mali)
) as ciudad(id, factor)
join products p on p.destination_id = '00000000-0000-4000-8000-00000000ba00'
on conflict (id) do nothing;
