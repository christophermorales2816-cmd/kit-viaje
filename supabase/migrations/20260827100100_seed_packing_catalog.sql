-- Catálogo de equipaje (spec, sección 4).
--
-- El catálogo es global: no depende del destino. Lo que filtra son las dos
-- dimensiones del motor, clima × tipo de viaje.
--
-- SOBRE LOS climate_tags: solo se usan 'frio', 'templado' y 'calido', que son
-- los buckets que resuelve el motor desde climate_thresholds. El spec da como
-- ejemplo {'frio','lluvia'}, pero 'lluvia' nunca matchearía: el paso 2 de la
-- sección 4 resuelve buckets únicamente por temperatura. Ver el PR para la
-- propuesta de cómo darle uso a precip_probability, que hoy se guarda y no se
-- lee. Mientras tanto, los ítems de lluvia van etiquetados en los tres buckets
-- de temperatura, así entran siempre en vez de no entrar nunca.

insert into packing_catalog
  (id, category, name, weight_g, climate_tags, trip_type_tags,
   base_qty, scales_with_days, days_per_unit, max_qty)
values
  -- Ropa
  ('b0000000-0000-4000-8000-000000000001', 'ropa', 'Remera', 150,
   array['templado','calido'], array['playa','urbano','aventura','negocios'], 1, true, 2, 8),
  ('b0000000-0000-4000-8000-000000000002', 'ropa', 'Camisa manga larga', 250,
   array['frio','templado'], array['urbano','negocios'], 1, true, 3, 5),
  ('b0000000-0000-4000-8000-000000000003', 'ropa', 'Pantalón largo', 500,
   array['frio','templado'], array['playa','urbano','aventura','negocios'], 2, false, null, null),
  ('b0000000-0000-4000-8000-000000000004', 'ropa', 'Pantalón corto', 250,
   array['calido'], array['playa','aventura'], 1, true, 4, 3),
  ('b0000000-0000-4000-8000-000000000005', 'ropa', 'Buzo o sweater', 500,
   array['frio','templado'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000006', 'ropa', 'Campera de abrigo', 900,
   array['frio'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000007', 'ropa', 'Rompevientos impermeable', 400,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000008', 'ropa', 'Ropa interior', 60,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, true, 1, 10),
  ('b0000000-0000-4000-8000-000000000009', 'ropa', 'Medias', 50,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, true, 1, 10),
  ('b0000000-0000-4000-8000-00000000000a', 'ropa', 'Pijama', 300,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000b', 'ropa', 'Malla o traje de baño', 150,
   array['calido'], array['playa'], 2, false, null, null),
  ('b0000000-0000-4000-8000-00000000000c', 'ropa', 'Traje o saco', 1200,
   array['frio','templado'], array['negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000d', 'ropa', 'Bufanda', 150,
   array['frio'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000e', 'ropa', 'Gorro de lana', 100,
   array['frio'], array['urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000000f', 'ropa', 'Gorra o sombrero', 100,
   array['calido'], array['playa','urbano','aventura'], 1, false, null, null),

  -- Calzado
  ('b0000000-0000-4000-8000-000000000010', 'calzado', 'Zapatillas urbanas', 800,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000011', 'calzado', 'Zapatos de vestir', 900,
   array['frio','templado'], array['negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000012', 'calzado', 'Ojotas', 200,
   array['calido'], array['playa'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000013', 'calzado', 'Botas de trekking', 1200,
   array['frio','templado'], array['aventura'], 1, false, null, null),

  -- Higiene
  ('b0000000-0000-4000-8000-000000000014', 'higiene', 'Kit de higiene personal', 500,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000015', 'higiene', 'Protector solar', 200,
   array['templado','calido'], array['playa','urbano','aventura'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000016', 'higiene', 'Repelente de insectos', 150,
   array['templado','calido'], array['playa','aventura'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000017', 'higiene', 'Botiquín básico', 300,
   array['frio','templado','calido'], array['aventura'], 1, false, null, null),

  -- Documentos
  ('b0000000-0000-4000-8000-000000000018', 'documentos', 'Documento o pasaporte', 50,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000019', 'documentos', 'Tarjeta SUBE', 10,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),

  -- Electrónica
  ('b0000000-0000-4000-8000-00000000001a', 'electronica', 'Cargador de celular', 150,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000001b', 'electronica', 'Adaptador de enchufe', 100,
   array['frio','templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000001c', 'electronica', 'Power bank', 250,
   array['frio','templado','calido'], array['playa','urbano','aventura'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000001d', 'electronica', 'Notebook', 1400,
   array['frio','templado','calido'], array['negocios'], 1, false, null, null),

  -- Accesorios
  ('b0000000-0000-4000-8000-00000000001e', 'accesorios', 'Paraguas plegable', 350,
   array['frio','templado','calido'], array['urbano','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-00000000001f', 'accesorios', 'Lentes de sol', 100,
   array['templado','calido'], array['playa','urbano','aventura','negocios'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000020', 'accesorios', 'Mochila de día', 600,
   array['frio','templado','calido'], array['playa','urbano','aventura'], 1, false, null, null),
  ('b0000000-0000-4000-8000-000000000021', 'accesorios', 'Botella reutilizable', 200,
   array['frio','templado','calido'], array['playa','urbano','aventura'], 1, false, null, null)
on conflict (id) do nothing;
