-- include_by_default: qué productos entran en el presupuesto inicial.
--
-- POR QUÉ EXISTE ESTA COLUMNA
--
-- La sección 5 genera la lista default sobre todos los productos del destino, y
-- pide 4-5 productos por categoría. Las dos cosas juntas no cierran cuando la
-- categoría tiene alternativas mutuamente excluyentes: el presupuesto de un
-- viaje de 5 días terminaba pagando hostel + departamento + hotel 3★ + hotel 4★
-- a la vez, ARS 1.225.000 de un total de 1.608.500. El 76% del presupuesto era
-- alojamiento cuádruple.
--
-- Tampoco alcanzaba con que el usuario lo corrigiera: trip_budget_items tiene
-- check (qty > 0), así que poner cero no es una salida.
--
-- Con esta columna el motor genera un presupuesto creíble y el catálogo completo
-- sigue disponible para agregar a mano desde la UI. Default true: un producto
-- nuevo entra salvo que se diga lo contrario.

alter table products
  add column include_by_default boolean not null default true;

comment on column products.include_by_default is
  'Si entra en el presupuesto que se genera al crear el viaje. Los false siguen en el catálogo para agregarse a mano.';

-- Alojamiento: se deja uno solo. Hotel 3★ es la referencia de gama media; el
-- resto queda disponible para cambiar la elección desde la UI.
update products set include_by_default = false
 where id in (
   'c0000000-0000-4000-8000-00000000000a',  -- Hostel, cama en dormitorio
   'c0000000-0000-4000-8000-00000000000b',  -- Departamento temporario
   'c0000000-0000-4000-8000-00000000000d'   -- Hotel 4 estrellas
 );

-- Extra opcional, no un gasto que todo viaje tiene.
update products set include_by_default = false
 where id = 'c0000000-0000-4000-8000-000000000009';  -- Alquiler de bicicleta
