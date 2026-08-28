# Configurar Supabase

Cómo pasar de un repo clonado a la aplicación funcionando contra una base real.
Toma unos 15 minutos.

Al terminar vas a tener: el esquema y el catálogo cargados, la app corriendo en
local contra tu proyecto, y el deploy de Vercel funcionando.

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

Tarda un par de minutos en aprovisionar.

## 2. Copiar las tres claves

**Project Settings → API**. Vas a necesitar tres valores:

| En el dashboard | Variable de entorno |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| `anon` `public` (en proyectos nuevos: *Publishable key*) | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| `service_role` `secret` (en proyectos nuevos: *Secret key*) | `SUPABASE_SERVICE_ROLE_KEY` |

Las dos primeras son públicas por diseño: viajan al browser. La tercera **no**,
y por eso no lleva el prefijo `NEXT_PUBLIC_`.

## 3. Aplicar las migraciones

Desde la carpeta del proyecto:

```bash
npx supabase login          # abre el navegador
npx supabase link --project-ref <TU_PROJECT_REF>
npx supabase db push
```

El `project-ref` es el identificador que aparece en la URL del dashboard
(`https://supabase.com/dashboard/project/<ESTO>`), o en **Project Settings →
General**. El `link` te va a pedir la contraseña de la base del paso 1.

`db push` aplica las 10 migraciones en orden y te las lista. Deberías ver:

```
20260826120000_reference_tables.sql
20260826120100_session_tables.sql
20260826120200_rls_policies.sql
20260826120300_seed_climate_thresholds.sql
20260826140000_precip_probability_scale.sql
20260827100000_seed_buenos_aires.sql
20260827100100_seed_packing_catalog.sql
20260827100200_seed_products.sql
20260827160000_products_include_by_default.sql
20260827170000_create_trip_function.sql
```

## 4. Verificar que quedó bien

En el **SQL Editor** del dashboard:

```sql
select
  (select count(*) from destinations)     as destinos,      -- 1
  (select count(*) from climate_profiles) as meses_clima,   -- 12
  (select count(*) from climate_thresholds) as buckets,     -- 3
  (select count(*) from packing_catalog)  as equipaje,      -- 33
  (select count(*) from products)         as productos,     -- 18
  (select count(*) from products where include_by_default) as en_presupuesto; -- 14
```

Y que la función de creación existe y está protegida:

```sql
select proname, pg_get_function_identity_arguments(oid)
  from pg_proc where proname = 'create_trip';
```

### Verificación de seguridad (opcional, recomendada)

El criterio de aceptación 7 del spec dice que ninguna escritura debe ser posible
sin un `edit_token` válido. Hay un test que lo comprueba, pero necesita `psql`
porque usa `set role`:

```bash
psql "$(npx supabase status -o env | grep DB_URL | cut -d= -f2-)" \
  -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql
```

Son 25 aserciones. Todas tienen que decir `OK`.

> La cadena de conexión también está en **Project Settings → Database**. No la
> pegues en ningún lado: lleva la contraseña adentro.

## 5. Correr la app en local

```bash
cp .env.example .env.local
```

Completá los tres valores del paso 2 y:

```bash
npm run dev
```

`.env.local` ya está en `.gitignore`. Verificá con `git status` que no aparezca.

## 6. Configurar Vercel

En el proyecto de Vercel → **Settings → Environment Variables**, agregá las tres
para **Production, Preview y Development**:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Las variables nuevas se toman en el **próximo** deploy: volvé a desplegar
después de agregarlas, o el error va a ser "Falta la variable de entorno...".

## 7. Probarlo de punta a punta

1. Abrí la app y tocá **Planificar mi viaje**
2. Elegí un rango de fechas y un tipo de viaje
3. Confirmá

Si todo está bien te redirige a `/viaje/{edit_token}` con un token de 32
caracteres en la URL. **Hoy eso da 404**: el dashboard es la próxima tarea. Que
la URL tenga el token ya significa que el viaje se creó.

Confirmalo en el SQL Editor:

```sql
select t.id, t.start_date, t.end_date, t.trip_type,
       (select count(*) from trip_packing_items where trip_id = t.id) as equipaje,
       (select count(*) from trip_budget_items  where trip_id = t.id) as presupuesto
  from trips t order by t.id desc limit 5;
```

Un viaje recién creado tiene filas en las dos listas. Si tiene el viaje pero las
listas vacías, algo pasó con `create_trip` — avisá, porque justamente está
escrita para que eso no pueda ocurrir.

---

## Si algo falla

**`Falta la variable de entorno NEXT_PUBLIC_SUPABASE_URL`**
El `.env.local` no existe, está incompleto, o el server de Next se levantó antes
de crearlo. Reiniciá `npm run dev`.

**`No pudimos crear el viaje. Probá de nuevo en un momento.`**
Es el mensaje genérico del camino de error. El detalle está en la consola del
servidor: la terminal donde corre `npm run dev`, o **Logs** en Vercel. Las causas
habituales son la `service_role key` mal copiada o las migraciones sin aplicar.

**`No hay ningún destino cargado para el corredor "argentina"`**
Las migraciones de esquema corrieron pero las de seed no. Revisá que `db push`
haya listado las diez.

**`permission denied for function create_trip`**
La app está usando la `anon key` donde debería usar la `service_role`. Revisá que
`SUPABASE_SERVICE_ROLE_KEY` esté bien seteada: solo ese rol puede ejecutarla, y
es a propósito.

**El `db push` dice que no hay cambios pendientes**
Ya se aplicaron. Confirmá con las consultas del paso 4.
