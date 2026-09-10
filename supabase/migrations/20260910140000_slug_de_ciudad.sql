-- Un slug por ciudad, para que la URL diga a dónde mira la página (spec, 11.4).
--
-- La página de condiciones actuales pasa a ser por ciudad, y esa elección tiene
-- que poder compartirse: `/guia/argentina/preparar?ciudad=ushuaia` dice de qué
-- habla; el mismo link con un uuid no dice nada y además expone un id interno.
--
-- Único POR CORREDOR y no global: dos países podrían tener una ciudad con el
-- mismo nombre —Córdoba, Santiago, San José— y no hay razón para que la primera
-- le gane el slug a la otra.

alter table destinations
  add column if not exists slug text;

update destinations set slug = case id
  when '00000000-0000-4000-8000-0000000000ba' then 'buenos-aires'
  when '00000000-0000-4000-8000-0000000000a1' then 'ushuaia'
  when '00000000-0000-4000-8000-0000000000a2' then 'bariloche'
  when '00000000-0000-4000-8000-0000000000a3' then 'mendoza'
  when '00000000-0000-4000-8000-0000000000a4' then 'salta'
  when '00000000-0000-4000-8000-0000000000a5' then 'puerto-iguazu'
  when '00000000-0000-4000-8000-0000000000b2' then 'rio-de-janeiro'
  when '00000000-0000-4000-8000-0000000000c1' then 'sao-paulo'
  when '00000000-0000-4000-8000-0000000000c2' then 'salvador'
  when '00000000-0000-4000-8000-0000000000c3' then 'manaos'
  when '00000000-0000-4000-8000-0000000000c4' then 'florianopolis'
  else slug
end
where slug is null;

-- Recién ahora se puede exigir: antes de poblarlo, un not null habría fallado
-- sobre las filas existentes.
alter table destinations
  alter column slug set not null;

-- `add constraint` no tiene `if not exists`, así que repetir esta migración a
-- mano —cosa que pasa cuando hay que poner una base al día sin el CLI— falla
-- acá con un error que parece grave y no lo es. El guard la hace repetible.
do $$
begin
  alter table destinations
    add constraint destinations_slug_formato
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$');
exception when duplicate_object then
  null;
end $$;

create unique index if not exists destinations_slug_por_corredor
  on destinations (corridor, slug);
