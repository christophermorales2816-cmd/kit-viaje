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
| 4 | Motor de packing | ⬜ pendiente |
| 5 | Motor de presupuesto | ⬜ pendiente |
| 6 | Flujo de usuario y persistencia | ⬜ pendiente |

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

18 aserciones sobre RLS, tokens, constraints de dominio, el trigger de
`updated_at` y el borrado en cascada. Corre dentro de una transacción y termina
con `rollback`, así que se puede correr contra una base con datos.

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
    ├── utils.ts         # cn()
    └── utils.test.ts
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
