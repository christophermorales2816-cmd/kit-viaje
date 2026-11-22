-- Guantes y ropa térmica en la valija del frío (spec, 23).
--
-- Para el frío, el catálogo tenía campera, gorro y bufanda, buzo, pantalón
-- largo y crema para los labios, pero no guantes ni una primera capa térmica.
-- Y como la lista arranca en cero (20260902060000), lo que el motor no genera
-- no se puede agregar a mano: quien iba a Yellowknife en enero, a Qaanaaq o a
-- una estación de esquí no tenía dónde tildar los guantes, aunque la guía los
-- pidiera ("abrigo, gorro, guantes y calzado que no deje pasar el agua").
--
-- Los dos van con la etiqueta 'frio' y para cualquier tipo de viaje, como la
-- campera: el frío pide guantes también en un viaje de trabajo. La ropa
-- térmica escala con el viaje, una muda cada tres días y hasta tres.

insert into packing_catalog
  (id, category, name, weight_g, climate_tags, trip_type_tags, base_qty, scales_with_days, days_per_unit, max_qty)
values
  ('a0000000-0000-4000-8000-000000000023', 'ropa', 'Guantes',                      80, '{frio}', '{playa,urbano,aventura,negocios}', 1, false, null, null),
  ('a0000000-0000-4000-8000-000000000024', 'ropa', 'Ropa térmica (primera capa)', 250, '{frio}', '{playa,urbano,aventura,negocios}', 1, true,     3,    3)
on conflict (id) do nothing;
