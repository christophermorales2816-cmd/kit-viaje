-- Seed de los buckets de clima (spec, sección 4).
--
-- Va en una migración y no en supabase/seed.sql porque no son datos de ejemplo:
-- el motor de packing no puede resolver un bucket sin estas filas, así que
-- producción las necesita igual que desarrollo.
--
-- Los valores son editables desde Studio; el on conflict evita pisar un ajuste
-- hecho a mano si la migración se vuelve a correr.

insert into climate_thresholds (id, temp_max) values
  ('frio',      10),
  ('templado',  25),
  ('calido',  null)
on conflict (id) do nothing;
