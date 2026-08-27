-- Destino y perfil climático del corredor del MVP.
--
-- Va en migraciones y no en supabase/seed.sql porque no son datos de ejemplo:
-- sin destino ni clima la aplicación no genera nada. `supabase db push` tiene
-- que dejar una base usable.
--
-- Los on conflict do nothing hacen la migración repetible y no pisan ajustes
-- hechos a mano desde Studio.
--
-- FUENTE DE LOS DATOS DE CLIMA: promedios históricos mensuales de Buenos Aires,
-- redondeados. Son valores de referencia plausibles, NO una serie oficial
-- verificada. Si el proyecto los va a mostrar como dato duro, conviene
-- reemplazarlos por una fuente citable (Servicio Meteorológico Nacional).

insert into destinations (id, name, corridor, base_currency) values
  ('a0000000-0000-4000-8000-000000000001', 'Buenos Aires', 'argentina', 'ARS')
on conflict (id) do nothing;

-- Hemisferio sur: enero es verano, julio es invierno.
-- precip_probability en escala 0-100 (migración 20260826140000).
insert into climate_profiles (destination_id, month, temp_min, temp_max, precip_probability) values
  ('a0000000-0000-4000-8000-000000000001',  1, 20.4, 30.4, 30),
  ('a0000000-0000-4000-8000-000000000001',  2, 19.7, 28.9, 28),
  ('a0000000-0000-4000-8000-000000000001',  3, 18.0, 26.8, 33),
  ('a0000000-0000-4000-8000-000000000001',  4, 14.2, 22.9, 30),
  ('a0000000-0000-4000-8000-000000000001',  5, 11.0, 19.3, 25),
  ('a0000000-0000-4000-8000-000000000001',  6,  8.2, 15.9, 25),
  ('a0000000-0000-4000-8000-000000000001',  7,  7.6, 15.4, 25),
  ('a0000000-0000-4000-8000-000000000001',  8,  8.8, 17.3, 25),
  ('a0000000-0000-4000-8000-000000000001',  9, 10.6, 19.0, 27),
  ('a0000000-0000-4000-8000-000000000001', 10, 13.4, 22.2, 33),
  ('a0000000-0000-4000-8000-000000000001', 11, 16.1, 25.5, 30),
  ('a0000000-0000-4000-8000-000000000001', 12, 18.8, 28.4, 30)
on conflict (destination_id, month) do nothing;
