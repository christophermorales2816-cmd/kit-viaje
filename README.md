# Kit de viaje

[![CI](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/ci.yml/badge.svg)](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/ci.yml)
[![Migraciones](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/migraciones.yml/badge.svg)](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/migraciones.yml)

> **Documentación**
>
> - [`docs/administrar.md`](docs/administrar.md) — cómo operar el sitio con
>   seguridad: cuentas, claves, rutina y qué hacer si algo pasa.
> - [`docs/arquitectura.md`](docs/arquitectura.md) — cómo está armado, para
>   quien recibe el proyecto.
> - [`docs/datos.md`](docs/datos.md) — diccionario de datos y reglas de los
>   datos maestros.
> - [`docs/seguridad.md`](docs/seguridad.md) — amenazas, controles y la
>   auditoría del 2026-10-08.
> - [`docs/agregar-un-pais.md`](docs/agregar-un-pais.md) — sumar un país sin
>   sorpresas.

Aplicación web sin registro que resuelve dos cosas para viajar: **qué empacar**
y **cuánto vas a gastar**. Nació para destinos con alta volatilidad económica y
multiplicidad cambiaria —el MVP fue un solo corredor, Buenos Aires— y hoy cubre
América Latina completa y buena parte de Europa, con el clima de cada ciudad y
el presupuesto en moneda local.

La especificación completa vive en [`spec-mvp-kit-viaje.md`](./spec-mvp-kit-viaje.md)
y es la fuente de verdad del proyecto — se implementa por secciones, en orden
de dependencias.

## Estado

**MVP completo contra el spec.** Las siete secciones implementadas y los siete
criterios de aceptación de la sección 7 cumplidos.

| Sección | Qué es | Estado |
|---|---|---|
| 3 | Modelo de datos + RLS | ✅ |
| 4 | Motor de packing | ✅ |
| 5 | Motor de presupuesto | ✅ |
| 6 | Flujo de usuario y persistencia | ✅ |
| 7 | Stack, testing, deploy | ✅ |
| 8 | Guía de destino | ✅ |
| 9 | Página de preparación | ✅ |

### El flujo

Cuatro páginas, en este orden. Cada una responde una pregunta y recién después
pide la siguiente decisión.

| # | Ruta | Qué responde | Cómo se renderiza |
|---|---|---|---|
| 1 | `/` | *¿Adónde?* — el globo, sin hablar del país | Estática |
| 2 | `/guia/[slug]` | *¿Qué me espera?* — números, cotizaciones en vivo, tablero, puntajes, destinos y mapa | Estática + `<Suspense>` para las cotizaciones |
| 3 | `/guia/[slug]/preparar` | *¿Cuándo conviene ir y qué llevo?* — el año climático, mes a mes, y la checklist | Dinámica; las lecturas de la base, en caché 1 h |
| 4 | `/guia/[slug]/planificar` | *¿Qué necesito para MIS fechas?* — el generador | Dinámica; las ciudades, en caché 1 h. El viaje se crea en la Server Action |

Las páginas 3 y 4 son dinámicas y no prerenderizadas a propósito: leen
Supabase, y con `generateStaticParams` un hipo de la base durante el build no
rompería una request, rompería el deploy entero. Lo que se cachea son las
lecturas (`src/lib/supabase/cached.ts`): una hora, y por deploy.

### Criterios de aceptación

| # | Criterio | Cómo se verifica |
|---|---|---|
| 1 | Crear un viaje sin cuenta y llegar a las dos listas, **con todo en cero** | `src/lib/trips/item-write.test.ts` y el flujo en `src/lib/trips/` |
| 2 | El presupuesto se recalcula con las 4 cotizaciones | `src/lib/quotes/map.test.ts` |
| 3 | El `share_slug` abre en solo lectura | Ruta `/viaje/ver/[shareSlug]` con `isReadOnly` |
| 4 | Exportar a PDF y CSV | `src/lib/export/csv.test.ts` y CSS de impresión |
| 5 | El dashboard privado avisa que el link es la única forma de volver | `src/components/trip/share-controls.tsx` |
| 6 | Los tests de los motores pasan en CI | Job `web` del [workflow](./.github/workflows/ci.yml) |
| 7 | Ninguna escritura sin `edit_token` válido | Job `database`: 38 aserciones en `supabase/tests/rls_smoke.sql` |

El criterio 5 reemplaza al original, que pedía un historial de "viajes
recientes" en `localStorage`. Esa función se eliminó entera —módulo, efecto y
UI— porque un historial en el navegador promete una permanencia que no puede
cumplir: se pierde al cambiar de dispositivo o limpiar el sitio, y quien confió
en él perdió el viaje. El aviso al lado del link dice la verdad en su lugar
(spec, 6C).

Fuera del MVP y sin planificar: cuentas, más corredores, i18n, monetización y
tracking de gastos reales. La sección 2 del spec explica el porqué de cada uno.

## Stack

- **Next.js 16** (App Router, Server Components) sobre Vercel
- **TypeScript** en modo estricto
- **Tailwind CSS v4** + **Shadcn UI** (estilo `new-york`, base `neutral`)
- **Supabase** (Postgres) — lecturas con RLS de solo lectura pública,
  escrituras exclusivamente vía Server Actions que validan `edit_token`
- **cobe** para el globo interactivo de la landing y **Leaflet** para el mapa
  de destinos — los dos se cargan solo en el cliente, y Leaflet además dentro
  del efecto: lee `window` al evaluarse y rompe el prerender si se importa arriba
- **react-day-picker** para el calendario y **date-fns** para las fechas
- **Vercel Web Analytics**, sin cookies
- **Vitest** para los tests de los motores y unos pocos de componentes

## Base de datos

Las migraciones son archivos versionados en `supabase/migrations/`, en el
formato del CLI de Supabase (`<timestamp>_<nombre>.sql`). Se aplican en orden
alfabético y no se editan una vez aplicadas: los cambios van en una migración
nueva. El diccionario de datos y las reglas de los datos maestros están en
[`docs/datos.md`](docs/datos.md).

Las de nombre `_corredor_<pais>` siembran un país cada una (ciudades, clima y
precios) y se generan con `herramientas/corredor/generar.py`. Las demás son
estructurales:

| Migración | Contenido |
|---|---|
| `20260826120000_reference_tables.sql` | `destinations`, `climate_profiles`, `climate_thresholds`, `products`, `packing_catalog` |
| `20260826120100_session_tables.sql` | `trips`, `trip_packing_items`, `trip_budget_items` |
| `20260826120200_rls_policies.sql` | RLS de los dos grupos de tablas |
| `20260826120300_seed_climate_thresholds.sql` | Buckets de clima iniciales |
| `20260826140000_precip_probability_scale.sql` | `precip_probability` acotada a 0-100 |
| `20260827100000_seed_reference_data.sql` | Destino, clima, catálogo y precios de Buenos Aires |
| `20260831040000_ezeiza_por_tramo.sql` | El traslado del aeropuerto se cobra por tramo, no por día |
| `20260902060000_qty_desde_cero.sql` | `qty >= 0` y default 0 en las tablas de sesión |
| `20260910100000_destinos_por_ciudad.sql` | Varias ciudades por corredor, una base |
| `20260910140000_slug_de_ciudad.sql` | La ciudad en la URL |
| `20261008120000_endurecer_permisos.sql` | Solo SELECT para anon; lo nuevo nace cerrado |
| `20261008120100_cupo_de_creacion.sql` | Fecha de alta, cupo de creación de viajes y purga manual |
| `20261008120200_moneda_coherente.sql` | Precios siempre en la moneda de su ciudad |

Aplicarlas:

```bash
npx supabase db push          # contra el proyecto remoto
npx supabase start            # o levantar Supabase local con Docker
```

### El modelo de acceso en una línea

Los datos de referencia se leen desde cualquier lado y no se escriben desde el
cliente. Los datos de sesión no se tocan desde el cliente en absoluto: todo
pasa por Server Actions que validan el `edit_token` y usan la service role key.

Esto es más restrictivo que lo que pide la sección 3 del spec, y el porqué está
documentado arriba de todo en `20260826120200_rls_policies.sql`.

### Verificar

```bash
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/integridad.sql
```

El smoke son 38 aserciones sobre RLS, privilegios, tokens, constraints, el cupo
de creación y los triggers. La de integridad verifica los datos maestros: doce
meses de clima por ciudad, una base por país, precios en la moneda de su
ciudad. Las dos corren dentro de una transacción y terminan con `rollback`, así
que se pueden correr contra una base con datos.

## Los motores

La lógica de negocio vive en funciones puras que no saben que Supabase existe:
reciben los datos ya leídos y devuelven el resultado. Persistir es trabajo de la
Server Action que las llama. Es lo que las hace testeables sin base de datos, y
es donde el spec pone el foco de testing (sección 7).

### Motor de packing (`src/lib/packing`)

```ts
import { generatePackingList } from "@/lib/packing";

const lista = generatePackingList({
  trip: { startDate: "2026-04-16", endDate: "2026-05-15", tripType: "urbano" },
  climateProfiles,
  climateThresholds,
  catalog,
});
```

Determinístico y sin LLM. Resuelve los meses que toca el viaje, mapea cada uno a
buckets de clima, filtra el catálogo por clima × tipo de viaje y escala las
cantidades por duración.

Devuelve además `monthsWithoutClimateData`: si a un mes del viaje le falta la
fila en `climate_profiles`, la lista sale más corta de lo que debería y quien
llama tiene que poder avisarlo en vez de mostrar una lista incompleta sin
explicación.

### Motor de presupuesto (`src/lib/budget`)

```ts
import { calculateBudget, generateBudgetList, selectQuote } from "@/lib/budget";

const lineas = generateBudgetList(trip, products);            // una vez, al crear el viaje
const totales = calculateBudget(lineas, selectQuote(quotes, "blue"));  // en cada render
```

Las cotizaciones entran **como dato**, no las va a buscar el motor: así el
cálculo se testea con valores fijos y no depende de una API externa. El monto
convertido no se persiste nunca — se recalcula contra la cotización vigente.

Dos detalles que no son obvios:

- **Se convierte con la compra, no con la venta.** El viajero llega con dólares
  y la casa se los compra: con blue en 1000/1050 entrega un dólar y recibe 1000
  pesos. También es la estimación más conservadora.
- **Los totales se suman en centavos enteros.** Sumar precios como float
  acumula error; con ARS de cinco cifras no cambia lo que se muestra, pero la
  cuenta que sale mal cuesta lo mismo que la que sale bien.

## Cuando algo falla

Cuatro rutas leen Supabase en cada request. Sin red de contención, cualquier
hipo de la base cae en la pantalla por defecto de Next —"Application error: a
server-side exception has occurred"—, en inglés y sin salida. Hay tres
archivos para eso:

| Archivo | Cuándo aparece |
|---|---|
| `src/app/not-found.tsx` | Un slug que no existe. Lo llaman las tres rutas de guía |
| `src/app/error.tsx` | Falla el render de una ruta: Supabase caído, una lectura que revienta |
| `src/app/global-error.tsx` | Falla el layout raíz. Reemplaza el `<html>` entero, así que no puede usar nada del layout — de ahí los estilos inline |

**No se muestra `error.message`.** En producción Next ya lo reemplaza por uno
genérico, pero en desarrollo llega entero, y los errores de lectura incluyen el
texto de Postgres: eso es para los logs del servidor, no para la pantalla de
alguien que solo quiere armar una valija. Lo que sí se muestra es el `digest`,
que es con lo que se encuentra el error real en los logs y no dice nada de la
base. Las escrituras de viajes muestran un mensaje fijo y, como mucho, el
código SQLSTATE.

## CI

Cada push y cada pull request corren [dos jobs](./.github/workflows/ci.yml):

**`web`** — lint, tests, build y typecheck. El build va **antes** del typecheck
a propósito: `next build` genera los tipos de las rutas (`PageProps`,
`LayoutProps`) en `.next/types`, y sin ellos `tsc --noEmit` falla en un
checkout limpio por archivos que todavía no existen.

**`database`** — levanta un Postgres 16, aplica las migraciones en orden y
corre el smoke test de RLS y el chequeo de integridad de los datos maestros.
Cubre el criterio de aceptación 7 del spec —ninguna escritura a las tablas de
sesión es posible sin un `edit_token` válido— y además que ninguna tabla quede
sin RLS ni ninguna función ejecutable desde la API pública, verificado en cada
PR y no una sola vez a mano.

Las actions van fijadas por commit (SHA) y el CLI de Supabase con versión fija;
[Dependabot](./.github/dependabot.yml) abre un PR cada semana con lo que haya
que actualizar.

**Los dos badges de arriba son dos preguntas distintas.** El de CI dice si el
código está sano; el de Migraciones, si la base de producción está al día. Se
puede tener el primero en verde y el segundo en rojo durante semanas, y ahí la
app queda pidiéndole a Postgres columnas que no existen. Pasó: el workflow de
migraciones falló sus cuatro primeras corridas seguidas —le faltaban los tres
secrets— y nadie lo miró, porque el badge del README solo mostraba CI.

### Si el badge de Migraciones está en rojo

Casi siempre es lo mismo: faltan los tres secrets. El paso de verificación
imprime cuáles, así que el log del run lo dice sin que haya que adivinar.

Se cargan en Settings → Secrets and variables → Actions, en la pestaña
**Secrets** y como **Repository secrets**. Los tres errores habituales son
cargarlas en la pestaña "Variables" de al lado, cargarlas como *Environment
secrets* de un environment que el workflow no declara, o un typo en el nombre.

Mientras tanto la base se puede poner al día desde una terminal, sin GitHub de
por medio:

```bash
npx supabase link --project-ref <ref>
npx supabase db push
```

Un tercer workflow, [`migraciones.yml`](./.github/workflows/migraciones.yml),
corre `supabase db push` cuando un merge a `main` toca
`supabase/migrations/`, y también a mano desde la pestaña Actions. Existe
porque una migración que vive en el repo pero no está aplicada es
indistinguible de un bug: la app pide una columna que no existe y el error
aparece en la cara del usuario, no en CI. Necesita tres secrets cargados en
GitHub y los verifica antes de intentar nada.

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar con las claves de Supabase
npm run dev                  # http://localhost:3000
```

Otros comandos:

```bash
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm test            # Vitest (una corrida)
npm run test:watch  # Vitest en watch
npm run build       # build de producción
```

## Estructura

```
docs/                    # administración, arquitectura, datos, seguridad
herramientas/corredor/   # generador de las migraciones de cada país
supabase/
├── migrations/          # historial versionado del esquema y los datos
└── tests/
    ├── rls_smoke.sql    # permisos, RLS, constraints, cupo y triggers
    └── integridad.sql   # reglas de los datos maestros
src/
├── app/                 # rutas del App Router
│   ├── layout.tsx       # pie con el aviso de analytics y el sello de build
│   ├── error.tsx        # red de contención de las rutas
│   ├── global-error.tsx # último recurso: falla el layout raíz
│   ├── not-found.tsx    # 404 propio
│   ├── page.tsx         # 1 · landing: el globo
│   ├── robots.ts        # todo indexable menos /viaje/
│   ├── sitemap.ts       # las guías, desde el índice de contenido
│   ├── guia/[slug]/
│   │   ├── page.tsx     # 2 · guía del país
│   │   ├── preparar/    # 3 · condiciones actuales
│   │   └── planificar/  # 4 · el generador
│   └── viaje/
│       ├── [editToken]/     # dashboard privado
│       └── ver/[shareSlug]/ # vista compartida, solo lectura
├── components/
│   ├── landing/         # globo y formulario de viaje nuevo
│   ├── guia/            # tablero, puntajes, cotizaciones, mosaico, mapa
│   ├── preparar/        # tira de meses, gráficos, checklists, tabla, FAQ
│   ├── trip/            # listas, totales, controles de compartir
│   ├── analytics.tsx    # Vercel Analytics sin los links privados
│   └── ui/              # componentes de Shadcn
├── content/guias/       # contenido editorial de las guías (sección 8.2)
└── lib/
    ├── packing/         # motor de packing (sección 4)
    │   ├── dates.ts     # meses cubiertos y duración, todo en UTC
    │   ├── climate.ts   # resolución de buckets de clima
    │   └── engine.ts    # generatePackingList()
    ├── budget/          # motor de presupuesto (sección 5)
    │   ├── quotes.ts    # selección de cotización y tasa
    │   ├── money.ts     # aritmética en centavos enteros
    │   ├── freshness.ts # antigüedad de los precios
    │   └── engine.ts    # generateBudgetList() / calculateBudget()
    ├── prepare/         # el año climático de la página 3 (sección 9)
    ├── quotes/          # dolarapi: fetch, mapeo y spread
    ├── trips/           # Server Actions, validación, lectura, escrituras y cupo
    ├── supabase/        # clientes, lectura de referencia y su caché
    ├── seguridad/       # headers HTTP y redacción de URLs
    ├── sitio/           # dominio público, para robots y sitemap
    ├── export/          # CSV
    ├── quantity.ts      # escalado por duración, usado por los dos motores
    ├── version.ts       # el commit que está corriendo
    └── utils.ts         # cn()
```

## Sobre los componentes de Shadcn

Shadcn no es una dependencia: copia el código del componente al repo. Para
agregar uno nuevo:

```bash
npx shadcn@latest add select tabs checkbox
```

## Variables de entorno

Ver [`.env.example`](./.env.example). `SUPABASE_SERVICE_ROLE_KEY` es
server-only y nunca debe llevar el prefijo `NEXT_PUBLIC_`: es la que usan las
Server Actions para escribir, después de validar el `edit_token`, y el secreto
con el que se hashea la IP del cupo de creación. Las dos `NEXT_PUBLIC_` también
se usan solo en el servidor: el navegador nunca habla con Supabase.

Dónde vive cada una y qué hacer si se filtra:
[`docs/administrar.md`](docs/administrar.md#7-mapa-de-secretos).
