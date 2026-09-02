-- Las listas generadas arrancan en cero, y el usuario suma lo que se acopla a
-- su viaje. Hasta acá el motor proponía cantidades escaladas por duración y
-- todo llegaba preseleccionado; el default deja de ser una propuesta y pasa a
-- ser un punto de partida vacío.
--
-- El check `qty > 0` lo impedía a nivel base: una fila en cero no era
-- representable, así que "no llevo ninguno" solo se podía expresar borrando la
-- fila y perdiendo el ítem de la lista. Con `qty >= 0` la fila sigue estando y
-- dice explícitamente que la cantidad elegida es ninguna, que es justo lo que
-- necesita una lista para tildar.
--
-- Se mantiene el piso en cero: una cantidad negativa no significa nada en una
-- valija ni en un presupuesto.

alter table trip_packing_items
  drop constraint trip_packing_items_qty_check,
  add constraint trip_packing_items_qty_check check (qty >= 0),
  alter column qty set default 0;

alter table trip_budget_items
  drop constraint trip_budget_items_qty_check,
  add constraint trip_budget_items_qty_check check (qty >= 0),
  alter column qty set default 0;

comment on column trip_packing_items.qty is
  'Cantidad elegida por el usuario. Arranca en 0: la generación arma la lista, no la llena.';

comment on column trip_budget_items.qty is
  'Cantidad elegida por el usuario. Arranca en 0: el presupuesto se construye sumando, no restando.';
