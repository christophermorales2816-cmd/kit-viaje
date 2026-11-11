-- Los lugares del mapa de "Qué comer", con datos propios (spec, 18.10).
--
-- Los carga una vez por día el workflow de lugares
-- (.github/workflows/lugares.yml), con el extracto de OpenStreetMap de cada
-- país, y los lee la API del mapa (src/app/api/que-comer/lugares). Son datos
-- públicos de OpenStreetMap (ODbL): se leen con la anon key, como los datos de
-- referencia, y solo los escribe ese proceso, con la service role.

create table lugares_de_comida (
  pais    text        not null,
  plato   text        not null,
  -- El elemento de OpenStreetMap: "node/123", "way/45".
  osm     text        not null,
  -- La celda de la grilla del mapa donde cae: "356_1397"
  -- (src/lib/comidas/celdas.ts). El mapa pide de a una.
  celda   text        not null,
  -- El lugar tal como lo muestra el mapa (LugarDeComida, en
  -- src/lib/comidas/lugares.ts).
  lugar   jsonb       not null,
  -- La corrida del proceso que lo cargó. Cuando una corrida termina, se borra
  -- lo que quedó de las anteriores: los lugares que ya no están o cerraron.
  corrida timestamptz not null,
  primary key (pais, plato, osm),
  check (osm ~ '^(node|way|relation)/[1-9][0-9]*$'),
  check (celda ~ '^-?[0-9]+_-?[0-9]+$')
);

-- La consulta del mapa: un país, un plato, una celda.
create index lugares_de_comida_por_celda
  on lugares_de_comida (pais, plato, celda);

-- Un registro por país: de cuándo son sus datos. Sin registro, el país todavía
-- no tiene datos propios y el mapa le pregunta a Overpass.
create table extractos_de_comida (
  pais      text        primary key,
  -- Hasta cuándo llegan los datos del extracto de OpenStreetMap.
  datos_del timestamptz not null,
  -- Cuándo terminó de cargarlos el proceso.
  procesado timestamptz not null,
  lugares   integer     not null check (lugares >= 0)
);

alter table lugares_de_comida   enable row level security;
alter table extractos_de_comida enable row level security;

create policy "lectura pública de lugares_de_comida"
  on lugares_de_comida for select to anon, authenticated using (true);

create policy "lectura pública de extractos_de_comida"
  on extractos_de_comida for select to anon, authenticated using (true);

revoke insert, update, delete, truncate on lugares_de_comida   from anon, authenticated;
revoke insert, update, delete, truncate on extractos_de_comida from anon, authenticated;

grant select on lugares_de_comida   to anon, authenticated;
grant select on extractos_de_comida to anon, authenticated;

grant all on lugares_de_comida   to service_role;
grant all on extractos_de_comida to service_role;
