-- Segundo corredor: Brasil, con Río de Janeiro como ciudad base (spec, 10).
--
-- Va en una migración por lo mismo que el seed de Buenos Aires: no son datos de
-- ejemplo. Sin estas filas la guía de Brasil renderiza y el planificador
-- devuelve listas vacías, así que producción las necesita tanto como desarrollo.
--
-- IDS FIJOS, NO gen_random_uuid(), y en rangos que no chocan con Argentina:
--
--   00000000-…-00b2  destino Río de Janeiro   (Buenos Aires es …-00ba)
--   b1000000-…-00NN  products de Río          (los de Buenos Aires son b0000000-…)
--
-- packing_catalog NO se toca: es global, sin destination_id, y el mismo
-- catálogo sirve para los dos países. Que eso ya estuviera así es la razón por
-- la que sumar un país no obligó a duplicar treinta y cuatro filas de ropa.

-- ===========================================================================
-- destinations
-- ===========================================================================

insert into destinations (id, name, corridor, base_currency) values
  ('00000000-0000-4000-8000-0000000000b2', 'Río de Janeiro', 'brasil', 'BRL')
on conflict (id) do nothing;

-- ===========================================================================
-- climate_profiles — promedio histórico mensual de Río de Janeiro
-- ===========================================================================
--
-- Promedios históricos, no pronóstico (spec, sección 1). precip_probability en
-- escala 0-100.
--
-- CONSECUENCIA QUE CONVIENE SABER ANTES DE LEER LA PÁGINA: contra los buckets
-- sembrados (frio ≤10, templado ≤25, calido sin tope), LOS DOCE MESES de Río
-- caen en templado+cálido. Ninguno toca 'frio'.
--
-- Eso no es un error de carga: es Río. En el mes más fresco del año la máxima
-- sigue arriba de los 25 grados, así que la ropa que hay que llevar es
-- practicamente la misma en enero y en julio. Lo que cambia entre un mes y otro
-- es cuánto calor y cuánta lluvia, y eso sí se ve en la tira de temporadas y en
-- los gráficos.

insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  ('00000000-0000-4000-8000-0000000000b2',  1, 23.3, 30.2, 45),
  ('00000000-0000-4000-8000-0000000000b2',  2, 23.6, 30.6, 40),
  ('00000000-0000-4000-8000-0000000000b2',  3, 23.0, 29.6, 42),
  ('00000000-0000-4000-8000-0000000000b2',  4, 21.4, 28.0, 35),
  ('00000000-0000-4000-8000-0000000000b2',  5, 19.8, 26.6, 28),
  ('00000000-0000-4000-8000-0000000000b2',  6, 18.2, 25.5, 25),
  ('00000000-0000-4000-8000-0000000000b2',  7, 17.6, 25.2, 22),
  ('00000000-0000-4000-8000-0000000000b2',  8, 17.9, 25.6, 22),
  ('00000000-0000-4000-8000-0000000000b2',  9, 18.6, 25.5, 28),
  ('00000000-0000-4000-8000-0000000000b2', 10, 19.9, 26.2, 35),
  ('00000000-0000-4000-8000-0000000000b2', 11, 21.1, 27.6, 40),
  ('00000000-0000-4000-8000-0000000000b2', 12, 22.4, 29.1, 45)
on conflict (destination_id, month) do nothing;

-- ===========================================================================
-- products — precios de referencia en reales
-- ===========================================================================
--
-- Órdenes de magnitud para planificar, no una lista de precios vigentes. La
-- vista de presupuesto muestra la antigüedad de estos valores (resolvePriceFreshness)
-- justamente para que nadie los lea como si fueran de hoy.
--
-- El trigger products_set_updated_at solo corre en update, así que estas filas
-- quedan con el now() de esta migración, que es correcto: son precios cargados
-- en este momento.

insert into products
  (id, destination_id, category, name, base_price, currency, base_qty, scales_with_days, days_per_unit, max_qty)
values
  -- comida
  ('b1000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-0000000000b2', 'comida', 'Café da manhã (café y pão de queijo)',  20, 'BRL', 1, true,  1, 30),
  ('b1000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-0000000000b2', 'comida', 'Almuerzo por kilo',                      45, 'BRL', 1, true,  1, 30),
  ('b1000000-0000-4000-8000-000000000003', '00000000-0000-4000-8000-0000000000b2', 'comida', 'Cena en botequim',                       90, 'BRL', 1, true,  3, 10),
  ('b1000000-0000-4000-8000-000000000004', '00000000-0000-4000-8000-0000000000b2', 'comida', 'Compra en supermercado',                120, 'BRL', 1, true,  4,  8),
  ('b1000000-0000-4000-8000-000000000005', '00000000-0000-4000-8000-0000000000b2', 'comida', 'Açaí o agua de coco en la playa',        20, 'BRL', 1, true,  2, 15),
  -- alojamiento
  ('b1000000-0000-4000-8000-000000000006', '00000000-0000-4000-8000-0000000000b2', 'alojamiento', 'Hotel 3★, noche',                  350, 'BRL', 1, true,  1, 30),
  ('b1000000-0000-4000-8000-000000000007', '00000000-0000-4000-8000-0000000000b2', 'alojamiento', 'Lavandería (una carga)',            60, 'BRL', 1, true,  7,  4),
  ('b1000000-0000-4000-8000-000000000008', '00000000-0000-4000-8000-0000000000b2', 'alojamiento', 'Depósito de equipaje',              45, 'BRL', 1, false, null, null),
  ('b1000000-0000-4000-8000-000000000009', '00000000-0000-4000-8000-0000000000b2', 'alojamiento', 'Propinas y servicio',               40, 'BRL', 1, false, null, null),
  -- transporte
  ('b1000000-0000-4000-8000-00000000000a', '00000000-0000-4000-8000-0000000000b2', 'transporte', 'Transporte público, día (metro y ómnibus)', 15, 'BRL', 1, true, 1, 30),
  ('b1000000-0000-4000-8000-00000000000b', '00000000-0000-4000-8000-0000000000b2', 'transporte', 'Viaje corto en app',                 25, 'BRL', 1, true,  3, 10),
  ('b1000000-0000-4000-8000-00000000000c', '00000000-0000-4000-8000-0000000000b2', 'transporte', 'Traslado al Galeão (por tramo)',     90, 'BRL', 2, false, null, null),
  ('b1000000-0000-4000-8000-00000000000d', '00000000-0000-4000-8000-0000000000b2', 'transporte', 'Alquiler de bicicleta por día',      30, 'BRL', 1, true,  5,  6),
  -- entretenimiento
  ('b1000000-0000-4000-8000-00000000000e', '00000000-0000-4000-8000-0000000000b2', 'entretenimiento', 'Entrada al Cristo Redentor',   110, 'BRL', 1, false, null, null),
  ('b1000000-0000-4000-8000-00000000000f', '00000000-0000-4000-8000-0000000000b2', 'entretenimiento', 'Bondinho del Pão de Açúcar',   150, 'BRL', 1, false, null, null),
  ('b1000000-0000-4000-8000-000000000010', '00000000-0000-4000-8000-0000000000b2', 'entretenimiento', 'Entrada a museo',               30, 'BRL', 1, true,  4,  6),
  ('b1000000-0000-4000-8000-000000000011', '00000000-0000-4000-8000-0000000000b2', 'entretenimiento', 'Noche de samba en Lapa',        80, 'BRL', 1, true,  5,  5),
  ('b1000000-0000-4000-8000-000000000012', '00000000-0000-4000-8000-0000000000b2', 'entretenimiento', 'Clase de surf',                150, 'BRL', 1, false, null, null)
on conflict (id) do nothing;
