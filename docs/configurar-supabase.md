# Configurar Supabase

Cómo pasar de un repo clonado a la aplicación funcionando contra una base real.
Toma unos 15 minutos.

> **Nunca compartas la `service_role key`.** Bypassea RLS: con esa clave
> cualquiera puede leer y escribir cualquier viaje. No va a un chat, ni a una
> captura, ni a un commit. Si se te escapa, rotala desde el dashboard.

---

## 1. Crear el proyecto

En [supabase.com/dashboard](https://supabase.com/dashboard) → **New project**.

| Campo | Qué poner |
|---|---|
| Name | `kit-viaje` |
| Database Password | Generala y **guardala en tu gestor de contraseñas** — la vas a necesitar en el paso 3 y no se puede volver a ver |
| Region | La más cercana a tus usuarios. Para el corredor del MVP, `South America (São Paulo)` |

## 2. Copiar las tres claves

**Project Settings → API**:

| En el dashboard | Variable de entorno |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| `anon` `public` (en proyectos nuevos: *Publishable key*) | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `service_role` `secret` (en proyectos nuevos: *Secret key*) | `SUPABASE_SERVICE_ROLE_KEY` |

Las dos primeras son públicas por diseño: viajan al browser, y todo el modelo de
seguridad asume eso. La tercera **no**, y por eso no lleva el prefijo
`NEXT_PUBLIC_`.

La URL va **sin barra final**: con ella algunas rutas quedan con `//`.

## 3. Aplicar las migraciones

```bash
npx supabase login          # abre el navegador
npx supabase link --project-ref <TU_PROJECT_REF>
npx supabase db push
```

El `project-ref` es el subdominio de tu Project URL
(`https://<ESTO>.supabase.co`), y también está en **Project Settings → General**.
El `link` pide la contraseña del paso 1; no se ven los caracteres mientras la
escribís.

`db push` aplica las seis migraciones en orden:

```
20260826120000_reference_tables.sql
20260826120100_session_tables.sql
20260826120200_rls_policies.sql
20260826120300_seed_climate_thresholds.sql
20260826140000_precip_probability_scale.sql
20260827100000_seed_reference_data.sql
```

## 4. Verificar que quedó bien

En el **SQL Editor** del dashboard:

```sql
select
  (select count(*) from destinations)       as destinos,     -- 1
  (select count(*) from climate_profiles)   as meses_clima,  -- 12
  (select count(*) from climate_thresholds) as buckets,      -- 3
  (select count(*) from packing_catalog)    as equipaje,     -- 34
  (select count(*) from products)           as productos;    -- 18
```

Si te da `1 · 12 · 3 · 34 · 18`, el esquema y el catálogo quedaron completos.

### Verificación de seguridad (recomendada)

El criterio de aceptación 7 del spec pide que ninguna escritura sea posible sin
un `edit_token` válido. Hay un test que lo comprueba a nivel de base: si el rol
`anon` no puede leer ni escribir las tablas de sesión, tampoco puede hacerlo la
anon key a través de PostgREST.

Necesita `psql` porque usa `set role`, que el SQL Editor no permite:

```bash
psql "<CONNECTION_STRING>" -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql
```

La cadena de conexión está en **Project Settings → Database**. No la pegues en
ningún lado: lleva la contraseña adentro.

Son **21 aserciones** y todas tienen que decir `OK`. Cubren RLS de los dos
grupos de tablas, formato y unicidad de los tokens, los constraints de dominio,
el trigger de `updated_at` y el borrado en cascada.

## 5. Correr la app en local

```bash
cp .env.example .env.local   # completá los tres valores del paso 2
npm install
npm run dev
```

`.env.local` ya está en `.gitignore`. Confirmalo con `git status` antes de
commitear.

## 6. Configurar Vercel

**Settings → Environment Variables**, las tres, para **Production, Preview y
Development**:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Las variables nuevas se toman en el **próximo** deploy: volvé a desplegar
después de agregarlas.

## 7. Probarlo de punta a punta

1. Abrí la app y planificá un viaje: rango de fechas y tipo
2. Te redirige a `/viaje/{edit_token}` con el equipaje y el presupuesto generados
3. Probá el link de compartir en otra ventana: tiene que abrir en solo lectura

Confirmalo en el SQL Editor:

```sql
select t.id, t.start_date, t.end_date, t.trip_type,
       (select count(*) from trip_packing_items where trip_id = t.id) as equipaje,
       (select count(*) from trip_budget_items  where trip_id = t.id) as presupuesto
  from trips t order by t.id desc limit 5;
```

Un viaje recién creado tiene filas en las dos listas.

---

## Si algo falla

**`Falta la variable de entorno NEXT_PUBLIC_SUPABASE_URL`**
El `.env.local` no existe, está incompleto, o el server de Next se levantó antes
de crearlo. Reiniciá `npm run dev`.

**El viaje no se crea**
El detalle está en la consola del servidor: la terminal donde corre
`npm run dev`, o **Logs** en Vercel. Las causas habituales son la
`service_role key` mal copiada o las migraciones sin aplicar.

**`No hay ningún destino cargado para el corredor "argentina"`**
Las migraciones de esquema corrieron pero el seed no. Revisá que `db push`
haya listado las seis.

**El `db push` dice que no hay cambios pendientes**
Ya se aplicaron. Confirmá con las consultas del paso 4, o mirá el estado real
con `npx supabase migration list`.

**`supabase db push` no encuentra `config.toml`**
Estás parado en otra carpeta, o te falta hacer `git pull`.
