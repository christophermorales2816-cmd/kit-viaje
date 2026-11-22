-- Las ciudades argentinas dejan de presupuestar Buenos Aires (spec, 23.2).
--
-- Ushuaia, Bariloche, Mendoza, Salta, Puerto Iguazú, El Calafate, El Chaltén y
-- Puerto Madryn derivaron sus precios de Buenos Aires, y con los precios se
-- llevaron los nombres: en Bariloche se presupuestaba una excursión al Delta
-- del Tigre, un show de tango, un partido de fútbol, la SUBE y el traslado a
-- Ezeiza, con el precio de cuarenta kilómetros de autopista.
--
-- Solo se renombra y se corrige el precio: nada se borra. Un viaje guardado
-- puede tener cualquiera de estos renglones elegido, y trip_budget_items los
-- referencia con ON DELETE RESTRICT. Con el mismo id, el viaje sigue teniendo
-- su renglón, con el nombre que corresponde a su ciudad.
--
--   Excursión al Delta del Tigre  → Excursión de día completo (mismo precio)
--   Entrada a show de tango       → Entrada a la atracción principal (mismo)
--   Entrada a partido de fútbol   → Visita guiada (25.000 por el factor)
--   Transporte público… en SUBE   → Transporte público, día (mismo precio)
--   Traslado a Ezeiza             → el traslado de cada ciudad, a su precio
--
-- El factor de cada ciudad es el de su hotel contra el de Buenos Aires: la
-- visita guiada sale de llevar el partido (55.000 por el factor) a 25.000.

-- Las ocho ciudades. Buenos Aires y Las Leñas quedan afuera: la primera es el
-- origen de los nombres, y la segunda ya nace corregida (20261121180000).
-- Ushuaia, Bariloche, Mendoza, Salta, Puerto Iguazú, El Calafate, El Chaltén y
-- Puerto Madryn, en ese orden, en cada `in` de abajo.

update products
set name = 'Excursión de día completo'
where destination_id in (
  '00000000-0000-4000-8000-0000000000a1', '00000000-0000-4000-8000-0000000000a2',
  '00000000-0000-4000-8000-0000000000a3', '00000000-0000-4000-8000-0000000000a4',
  '00000000-0000-4000-8000-0000000000a5', '00000000-0000-4000-8000-000000000a06',
  '00000000-0000-4000-8000-000000000a07', '00000000-0000-4000-8000-000000000a08')
  and name = 'Excursión al Delta del Tigre';

update products
set name = 'Entrada a la atracción principal'
where destination_id in (
  '00000000-0000-4000-8000-0000000000a1', '00000000-0000-4000-8000-0000000000a2',
  '00000000-0000-4000-8000-0000000000a3', '00000000-0000-4000-8000-0000000000a4',
  '00000000-0000-4000-8000-0000000000a5', '00000000-0000-4000-8000-000000000a06',
  '00000000-0000-4000-8000-000000000a07', '00000000-0000-4000-8000-000000000a08')
  and name = 'Entrada a show de tango';

update products
set name = 'Visita guiada', base_price = round(base_price * 25000 / 55000)
where destination_id in (
  '00000000-0000-4000-8000-0000000000a1', '00000000-0000-4000-8000-0000000000a2',
  '00000000-0000-4000-8000-0000000000a3', '00000000-0000-4000-8000-0000000000a4',
  '00000000-0000-4000-8000-0000000000a5', '00000000-0000-4000-8000-000000000a06',
  '00000000-0000-4000-8000-000000000a07', '00000000-0000-4000-8000-000000000a08')
  and name = 'Entrada a partido de fútbol';

update products
set name = 'Transporte público, día'
where destination_id in (
  '00000000-0000-4000-8000-0000000000a1', '00000000-0000-4000-8000-0000000000a2',
  '00000000-0000-4000-8000-0000000000a3', '00000000-0000-4000-8000-0000000000a4',
  '00000000-0000-4000-8000-0000000000a5', '00000000-0000-4000-8000-000000000a06',
  '00000000-0000-4000-8000-000000000a07', '00000000-0000-4000-8000-000000000a08')
  and name = 'Transporte público, día (4 viajes en SUBE)';

-- El traslado: un taxi al aeropuerto de la ciudad, salvo en El Chaltén, que no
-- tiene, y en Puerto Madryn, donde casi todos los vuelos llegan a Trelew.
update products p
set name = t.nombre, base_price = t.precio
from (values
  ('00000000-0000-4000-8000-0000000000a1'::uuid, 'Traslado al aeropuerto (por tramo)', 10000),
  ('00000000-0000-4000-8000-0000000000a2'::uuid, 'Traslado al aeropuerto (por tramo)', 18000),
  ('00000000-0000-4000-8000-0000000000a3'::uuid, 'Traslado al aeropuerto (por tramo)', 12000),
  ('00000000-0000-4000-8000-0000000000a4'::uuid, 'Traslado al aeropuerto (por tramo)', 12000),
  ('00000000-0000-4000-8000-0000000000a5'::uuid, 'Traslado al aeropuerto (por tramo)', 20000),
  ('00000000-0000-4000-8000-000000000a06'::uuid, 'Traslado al aeropuerto (por tramo)', 15000),
  ('00000000-0000-4000-8000-000000000a07'::uuid, 'Bus desde el aeropuerto de El Calafate (por tramo)', 45000),
  ('00000000-0000-4000-8000-000000000a08'::uuid, 'Traslado desde el aeropuerto de Trelew (por tramo)', 30000)
) as t(destino, nombre, precio)
where p.destination_id = t.destino
  and p.name = 'Traslado a Ezeiza (por tramo)';
