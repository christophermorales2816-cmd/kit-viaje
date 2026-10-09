-- El adaptador de enchufe del catálogo deja de decir "tipo I".
--
-- El catálogo de equipaje es global: el mismo ítem aparece en la lista de
-- cualquier país. Se escribió cuando el único destino era Buenos Aires, y ahí
-- "tipo I" era el enchufe al que había que adaptarse. Con 58 países dice algo
-- falso en casi todos: en Alemania hacen falta patas redondas (C y F), en el
-- Reino Unido el G, en México el A. Con Asia empeoraría: Japón usa A, India C,
-- D y M, Singapur y los Emiratos G, y China tiene tres tipos distintos.
--
-- El tipo de cada país ya está donde corresponde: en la guía
-- (`preparation.plug`), que la página de preparación muestra como dato. La
-- lista dice lo que sirve en todos lados: un adaptador universal.
--
-- Solo cambia el nombre. El id es el mismo, así que los viajes que ya tildaron
-- el ítem lo siguen teniendo tildado. El `and name =` hace que la migración no
-- pise un nombre que alguien haya corregido de otra forma.

update packing_catalog
set name = 'Adaptador de enchufe universal'
where id = 'a0000000-0000-4000-8000-000000000005'
  and name = 'Adaptador de enchufe tipo I';
