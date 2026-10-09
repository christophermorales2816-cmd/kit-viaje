-- Un precio está siempre en la moneda de su destino (datos maestros).
--
-- Hasta ahora lo garantizaba la disciplina: cada migración de corredor carga
-- los productos en la misma moneda que el destino, y las 501 ciudades cumplen.
-- Pero los precios también se pueden tocar a mano desde Supabase Studio, y ahí
-- un "USD" en un producto de Buenos Aires no lo frenaba nada: el presupuesto
-- sumaría pesos con dólares y mostraría un total sin sentido, sin error.
--
-- Ahora la base lo rechaza, en los dos sentidos:
--
--   products      un precio nuevo o editado tiene que estar en la moneda del
--                 destino al que pertenece.
--   destinations  cambiarle la moneda a un destino exige que sus precios ya
--                 estén en la nueva. Primero los precios, después el destino,
--                 en la misma transacción.
--
-- Venezuela y Cuba no son excepción acá: sus destinos están en USD y sus
-- precios también (ver budgetConversionStatus en src/lib/quotes/corridors.ts).

create or replace function exigir_moneda_del_destino()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_moneda text;
begin
  select base_currency into v_moneda
  from public.destinations
  where id = new.destination_id;

  if v_moneda is distinct from new.currency then
    raise exception 'El precio "%" está en % y su destino usa %.',
      new.name, new.currency, coalesce(v_moneda, '(destino inexistente)')
      using errcode = 'check_violation';
  end if;

  return new;
end;
$$;

create trigger products_moneda_del_destino
  before insert or update of currency, destination_id on products
  for each row
  execute function exigir_moneda_del_destino();

create or replace function exigir_moneda_de_los_precios()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if exists (
    select 1
    from public.products
    where destination_id = new.id
      and currency <> new.base_currency
  ) then
    raise exception 'El destino "%" tiene precios en otra moneda: pasalos a % antes de cambiarlo.',
      new.name, new.base_currency
      using errcode = 'check_violation';
  end if;

  return new;
end;
$$;

create trigger destinations_moneda_de_los_precios
  before update of base_currency on destinations
  for each row
  execute function exigir_moneda_de_los_precios();

-- Funciones de trigger: nadie las llama a mano (ver 20261008120000).
revoke execute on function exigir_moneda_del_destino() from public, anon, authenticated;
revoke execute on function exigir_moneda_de_los_precios() from public, anon, authenticated;
