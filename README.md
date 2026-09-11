# Kit de viaje

[![CI](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/ci.yml/badge.svg)](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/ci.yml)
[![Migraciones](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/migraciones.yml/badge.svg)](https://github.com/christophermorales2816-cmd/kit-viaje/actions/workflows/migraciones.yml)

> **¿Sumar un país?** El procedimiento completo está en
> [`docs/agregar-un-pais.md`](docs/agregar-un-pais.md): qué cuatro archivos se
> tocan, qué verificar y en qué orden, y los dos errores que ya nos costaron un
> país en producción.

Aplicación web sin registro que resuelve dos cosas para viajar a destinos con
alta volatilidad económica y multiplicidad cambiaria: **qué empacar** y
**cuánto vas a gastar**. MVP acotado a un corredor: Buenos Aires, Argentina.

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
| 3 | `/guia/[slug]/preparar` | *¿Cuándo conviene ir y qué llevo?* — el año climático, mes a mes, y la checklist | Dinámica con ISR (1 h) |
| 4 | `/guia/[slug]/planificar` | *¿Qué necesito para MIS fechas?* — el generador | Estática, el cálculo va en la Server Action |

La página 3 es dinámica y no prerenderizada a propósito: lee cuatro tablas de
Supabase, y con `generateStaticParams` un hipo de la base durante el build no
rompería una request, rompería el deploy entero.

### Criterios de aceptación

| # | Criterio | Cómo se verifica |
|---|---|---|
| 1 | Crear un viaje sin cuenta y llegar a las dos listas, **con todo en cero** | `src/lib/trips/item-write.test.ts` y el flujo en `src/lib/trips/` |
| 2 | El presupuesto se recalcula con las 4 cotizaciones | `src/lib/quotes/map.test.ts` |
| 3 | El `share_slug` abre en solo lectura | Ruta `/viaje/ver/[shareSlug]` con `isReadOnly` |
| 4 | Exportar a PDF y CSV | `src/lib/export/csv.test.ts` y CSS de impresión |
| 5 | El dashboard privado avisa que el link es la única forma de volver | `src/components/trip/share-controls.tsx` |
| 6 | Los tests de los motores pasan en CI | Job `web` del [workflow](./.github/workflows/ci.yml) |
| 7 | Ninguna escritura sin `edit_token` válido | Job `database`: 21 aserciones en `supabase/tests/rls_smoke.sql` |

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
nueva.

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
```

21 aserciones sobre RLS, tokens, constraints de dominio, el trigger de
`updated_at` y el borrado en cascada. Corre dentro de una transacción y termina
con `rollback`, así que se puede correr contra una base con datos.

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
genérico, pero en desarrollo llega entero, y los errores de escritura de viajes
incluyen a propósito el SQLSTATE y el texto de Postgres: eso es para los logs
del servidor, no para la pantalla de alguien que solo quiere armar una valija.
Lo que sí se muestra es el `digest`, que es con lo que se encuentra el error
real en los logs y no dice nada de la base.

## CI

Cada push y cada pull request corren [dos jobs](./.github/workflows/ci.yml):

**`web`** — lint, tests, build y typecheck. El build va **antes** del typecheck
a propósito: `next build` genera los tipos de las rutas (`PageProps`,
`LayoutProps`) en `.next/types`, y sin ellos `tsc --noEmit` falla en un
checkout limpio por archivos que todavía no existen.

**`database`** — levanta un Postgres 16, aplica las migraciones en orden y
corre el smoke test de RLS. Cubre el criterio de aceptación 7 del spec:
ninguna escritura a las tablas de sesión es posible sin un `edit_token`
válido, verificado en cada PR y no una sola vez a mano.

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
supabase/
├── migrations/          # historial versionado del esquema
└── tests/
    └── rls_smoke.sql    # verificación de RLS y constraints
src/
├── app/                 # rutas del App Router
│   ├── layout.tsx       # pie con el aviso de analytics y el sello de build
│   ├── error.tsx        # red de contención de las rutas
│   ├── global-error.tsx # último recurso: falla el layout raíz
│   ├── not-found.tsx    # 404 propio
│   ├── page.tsx         # 1 · landing: el globo
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
    ├── trips/           # Server Actions, validación y lectura de viajes
    ├── supabase/        # clientes y lectura de datos de referencia
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
Server Actions para escribir, después de validar el `edit_token`.
