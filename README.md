# Kit de viaje

Aplicación web sin registro que resuelve dos cosas para viajar a destinos con
alta volatilidad económica y multiplicidad cambiaria: **qué empacar** y
**cuánto vas a gastar**. MVP acotado a un corredor: Buenos Aires, Argentina.

La especificación completa vive en [`spec-mvp-kit-viaje.md`](./spec-mvp-kit-viaje.md)
y es la fuente de verdad del proyecto — se implementa por secciones, en orden
de dependencias.

## Estado

Scaffold inicial (sección 7 del spec). El proyecto compila y corre; **todavía
no hay lógica de negocio**.

| Sección | Qué es | Estado |
|---|---|---|
| 7 | Stack, testing, deploy | ✅ scaffold |
| 3 | Modelo de datos + RLS | ⬜ pendiente |
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
