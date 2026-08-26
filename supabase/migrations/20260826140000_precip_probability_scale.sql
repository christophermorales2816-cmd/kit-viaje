-- precip_probability queda en escala 0-100.
--
-- La sección 3 del spec dejaba la unidad sin definir (podía ser 0-1 o 0-100) y
-- la columna quedó sin check a propósito, con un comment marcándolo. Decisión
-- tomada: 0-100, porque se lee directo ("60% de probabilidad de lluvia") sin
-- convertir en la vista.
--
-- Va en una migración nueva y no editando 20260826120000: esa ya está aplicada.

alter table climate_profiles
  add constraint climate_profiles_precip_range
  check (precip_probability between 0 and 100);

comment on column climate_profiles.precip_probability is
  'Probabilidad de precipitación en escala 0-100 (no 0-1).';
