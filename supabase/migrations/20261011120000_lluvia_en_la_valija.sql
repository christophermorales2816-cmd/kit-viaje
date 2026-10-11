-- La lluvia entra en la valija (spec, sección 14.12).
--
-- QUÉ PASABA
--
-- El motor elegía por bucket de temperatura y por tipo de viaje, y nunca miraba
-- precip_probability. El paraguas y el impermeable dependían solo del tipo de
-- viaje: la ciudad llevaba los dos, la aventura el impermeable y los negocios
-- el paraguas. Un viaje de playa a Bali en enero, con 62 % de probabilidad de
-- lluvia en Seminyak, salía sin nada para la lluvia.
--
-- QUÉ CAMBIA
--
-- 1. Un bucket nuevo, 'lluvia', que no sale de la temperatura sino de la
--    probabilidad de lluvia: un mes con 40 % o más lo activa. Vive en su propia
--    tabla, precip_thresholds, por la misma razón que los de temperatura viven
--    en climate_thresholds: el umbral se ajusta desde Studio, sin deploy. No va
--    en climate_thresholds porque ahí un temp_max en null significa "el bucket
--    más cálido", y una fila de lluvia se leería como un segundo bucket cálido.
--
-- 2. El paraguas y el impermeable suman la etiqueta 'lluvia'. Lo etiquetado con
--    un bucket de lluvia entra en CUALQUIER tipo de viaje cuando el viaje cae en
--    meses de lluvia (src/lib/packing/engine.ts): la lluvia moja igual a quien
--    viaja por playa que a quien viaja por trabajo.
--
-- LO QUE NO CAMBIA
--
-- La lluvia suma, nunca resta. La ciudad sigue llevando paraguas e impermeable
-- aunque vaya a Dubái en julio. La lista arranca en cero, así que un ítem de más
-- no cuesta nada —queda en cero—, y uno de menos no se puede agregar a mano.
-- Sacarlos de un viaje seco además escondería lo que alguien ya eligió: la
-- lectura de un viaje superpone lo guardado sobre lo que genera el motor, y lo
-- que el motor deja de generar no se ve.
--
-- POR QUÉ 40
--
-- La mediana de las 11.088 filas de clima es 29 % y el percentil 75, 40 %. Es
-- llover cuatro días de cada diez: en una semana, tres días mojados. Agarra los
-- monzones (Bombay y Goa de junio a septiembre, Bangkok, Siem Reap, Bali en
-- enero), las tormentas de verano (Río y Florianópolis en enero, Iguazú) y las
-- costas lluviosas del norte (Bergen, Galway, Reikiavik). Deja afuera el
-- Mediterráneo en verano, los desiertos y Lima. Un cuarto de los meses de todas
-- las ciudades queda marcado como de lluvia.

create table precip_thresholds (
  id         text primary key,
  precip_min numeric not null check (precip_min >= 0 and precip_min <= 100)
);

comment on table precip_thresholds is
  'Buckets de lluvia del motor de packing (spec, sección 14.12). Un mes cuya precip_probability llega a precip_min activa el bucket.';
comment on column precip_thresholds.precip_min is
  'Probabilidad de lluvia mínima, de 0 a 100, inclusive. Misma escala que climate_profiles.precip_probability.';

-- Datos de referencia: lectura pública y nada más, igual que el resto
-- (20260826120200 y 20261008120000). La tabla nace cerrada por los privilegios
-- por defecto del esquema, así que el select se concede acá explícitamente.
alter table precip_thresholds enable row level security;

create policy "lectura pública de precip_thresholds"
  on precip_thresholds for select to anon, authenticated using (true);

grant select on precip_thresholds to anon, authenticated;

-- Editable desde Studio; el on conflict no pisa un ajuste hecho a mano.
insert into precip_thresholds (id, precip_min) values
  ('lluvia', 40)
on conflict (id) do nothing;

-- Paraguas compacto e impermeable liviano. La condición evita duplicar la
-- etiqueta si la migración se vuelve a correr.
update packing_catalog
set climate_tags = climate_tags || array['lluvia']
where id in (
    'a0000000-0000-4000-8000-000000000014', -- Impermeable liviano
    'a0000000-0000-4000-8000-000000000021'  -- Paraguas compacto
  )
  and not ('lluvia' = any (climate_tags));
