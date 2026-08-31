-- El traslado a Ezeiza decía "ida y vuelta" sobre una unidad de un solo tramo.
--
-- La fila es base_price 45.000 con base_qty 2, así que el total de 90.000 está
-- bien: son los dos tramos. El problema era el nombre — en el presupuesto se
-- leía "Traslado a Ezeiza (ida y vuelta) · $45.000 c/u · ×2 · $90.000", que
-- suena a dos viajes redondos.
--
-- Se corrige el nombre y no el precio, siguiendo el estilo del resto del
-- catálogo, donde el paréntesis describe la unidad: "Transporte público, día
-- (4 viajes en SUBE)", "Remis corto (centro)".
--
-- Nota: este update dispara products_set_updated_at, así que el precio va a
-- figurar como actualizado hoy aunque no haya cambiado. El trigger es
-- deliberadamente simple y no distingue qué columna se tocó; para un cambio de
-- nombre el efecto es inofensivo.

update products
   set name = 'Traslado a Ezeiza (por tramo)'
 where id = 'b0000000-0000-4000-8000-000000000008'
   and name = 'Traslado a Ezeiza (ida y vuelta)';
