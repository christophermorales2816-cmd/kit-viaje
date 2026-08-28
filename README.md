# Kit de viaje

Aplicación web sin registro que resuelve dos cosas para viajar a destinos con
alta volatilidad económica y multiplicidad cambiaria: **qué empacar** y
**cuánto vas a gastar**. MVP acotado a un corredor: Buenos Aires, Argentina.

La especificación completa vive en [`spec-mvp-kit-viaje.md`](./spec-mvp-kit-viaje.md)
y es la fuente de verdad del proyecto — se implementa por secciones, en orden
de dependencias.

## Estado

El proyecto compila y corre, y el esquema de la base está versionado.
**Todavía no hay lógica de negocio.**

| Sección | Qué es | Estado |
|---|---|---|
| 7 | Stack, testing, deploy | ✅ scaffold |
| 3 | Modelo de datos + RLS | ✅ migraciones |
| 4 | Motor de packing | ✅ motor + tests |
| 5 | Motor de presupuesto | ✅ motor + tests |
| 6 | Flujo de usuario y persistencia | 🔨 capa de datos lista, falta la UI |

## Stack

- **Next.js 16** (App Router, Server Components) sobre Vercel
- **TypeScript** en modo estricto
- **Tailwind CSS v4** + **Shadcn UI** (estilo `new-york`, base `neutral`)
- **Supabase** (Postgres) — lecturas con RLS de solo lectura pública,
  escrituras exclusivamente vía Server Actions que validan `edit_token`
- **cobe** para el globo interactivo de la landing
- **Vitest** para los tests de los motores

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
| `20260827100000_seed_buenos_aires.sql` | Destino y 12 meses de perfil climático |
| `20260827100100_seed_packing_catalog.sql` | 33 ítems de equipaje |
| `20260827100200_seed_products.sql` | 18 productos, 4-5 por categoría |
| `20260827160000_products_include_by_default.sql` | Qué productos entran en el presupuesto inicial |
| `20260827170000_create_trip_function.sql` | `create_trip()`: crea el viaje y sus listas en una transacción |

Para conectar un proyecto de Supabase desde cero, seguí
[`docs/configurar-supabase.md`](./docs/configurar-supabase.md). El resumen:

```bash
npx supabase login
npx supabase link --project-ref <TU_PROJECT_REF>
npx supabase db push
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

25 aserciones sobre RLS, tokens, constraints de dominio, el trigger de
`updated_at`, el borrado en cascada y la atomicidad de `create_trip`. Corre dentro de una transacción y termina
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

## Acceso a datos

Dos clientes, y la diferencia importa:

| | Clave | Puede |
|---|---|---|
| `createPublicClient()` | anon | leer las tablas de referencia, nada más |
| `createAdminClient()` | service role | todo — bypassea RLS |

El de admin lleva `import "server-only"` arriba de todo. Si alguien lo importa
desde un Client Component, el build de Next falla en vez de mandar la service
role key al browser.

Las filas se traducen en `mappers.ts` antes de tocar el resto de la aplicación:
del `snake_case` de Postgres al dominio, y de `numeric` a número de verdad —
PostgREST puede serializarlo como string, y sumar strings no da un total.

### Cotizaciones

`fetchDolarApiQuotes()` trae las cuatro de dolarapi.com en un request. El
parseo está separado del fetch para poder testearlo con fixtures. Los nombres
no coinciden con los del spec: `bolsa` es MEP y `contadoconliqui` es CCL.

## Crear un viaje

`createTripAction` es el único camino: valida, corre los dos motores, persiste y
redirige a `/viaje/{edit_token}`. La lógica testeable vive afuera de la acción —
`parseTripInput` y `buildTripDraft` son puras.

La escritura pasa por la función `create_trip()` de Postgres y no por tres
inserts. Cada llamada de PostgREST es su propia transacción: si el segundo
insert fallara, quedaría un viaje sin equipaje ni presupuesto y el usuario
aterrizaría en un dashboard vacío sin ninguna pista. Adentro de la función es
todo o nada, y solo `service_role` puede ejecutarla.

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
│   ├── layout.tsx
│   ├── page.tsx         # landing (placeholder por ahora)
│   └── globals.css      # Tailwind v4 + tokens de tema de Shadcn
├── components/
│   └── ui/              # componentes de Shadcn
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
    ├── supabase/        # borde con la base
    │   ├── env.ts       # validación de variables de entorno
    │   ├── client.ts    # cliente anon, solo lectura de referencia
    │   ├── admin.ts     # cliente service role, server-only
    │   ├── mappers.ts   # snake_case → dominio
    │   └── reference.ts # queries de las tablas de referencia
    ├── trips/           # creación del viaje
    │   ├── input.ts     # validación de lo que manda el formulario
    │   └── draft.ts     # orquesta los dos motores
    ├── actions/         # Server Actions
    ├── quantity.ts      # escalado por duración, usado por los dos motores
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
