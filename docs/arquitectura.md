# Arquitectura

Para quien recibe el proyecto: cómo está armado, por qué así, y dónde mirar
primero. Asume que conocés Next.js y Postgres; no asume que leíste el spec
(`spec-mvp-kit-viaje.md`, la fuente de verdad del producto).

## En una frase

Una app Next.js 16 sin cuentas que, para un país y una ciudad, arma la lista de
equipaje con el clima histórico de las fechas del viaje y un presupuesto en
moneda local convertible a dólares; los viajes se guardan en Supabase y se
vuelve a ellos por un link con un token.

## Piezas

| Capa                      | Tecnología                                                                                      | Dónde                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Hosting                   | Vercel (deploy por push a `main`)                                                               | —                                                                        |
| Web                       | Next.js 16 App Router, React 19, Server Components y Server Actions                             | `src/app`, `src/components`                                              |
| Lógica                    | Funciones puras en TypeScript, sin I/O                                                          | `src/lib/packing`, `src/lib/budget`, `src/lib/prepare`, `src/lib/quotes` |
| Datos                     | Supabase (Postgres 17), RLS                                                                     | `supabase/migrations`                                                    |
| Contenido                 | Guías en TypeScript, validadas por tests                                                        | `src/content/guias`                                                      |
| Cotizaciones              | dolarapi.com (Argentina y Brasil); el resto sin fuente todavía                                  | `src/lib/quotes/corridors.ts`                                            |
| CI                        | GitHub Actions: lint, tests, build, typecheck; migraciones + RLS + integridad sobre Postgres 16 | `.github/workflows/ci.yml`                                               |
| Migraciones en producción | GitHub Actions con el CLI de Supabase, al mergear                                               | `.github/workflows/migraciones.yml`                                      |

## Rutas y cómo se renderiza cada una

| Ruta                          | Qué es                                      | Render                                                                               | Lee de Supabase      |
| ----------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------- |
| `/`                           | Portada con el globo                        | Estática                                                                             | No                   |
| `/guia/[slug]`                | Guía del país                               | Estática (70, por `generateStaticParams`) + cotizaciones en `<Suspense>` cada 10 min | No                   |
| `/guia/[slug]/preparar`       | El año climático de una ciudad (`?ciudad=`) | Dinámica                                                                             | Sí, con caché de 1 h |
| `/guia/[slug]/planificar`     | El formulario del viaje                     | Dinámica                                                                             | Sí, con caché de 1 h |
| `/viaje/[editToken]`          | Dashboard privado                           | Dinámica, sin caché                                                                  | Sí                   |
| `/viaje/ver/[shareSlug]`      | Vista compartida, solo lectura              | Dinámica, sin caché                                                                  | Sí                   |
| `/robots.txt`, `/sitemap.xml` | Para buscadores                             | Estáticos                                                                            | No                   |

Las páginas de guía no dependen de la base a propósito: si Supabase se cae, la
portada y las 70 guías siguen funcionando.

## Flujos

**Crear un viaje** (`createTripAction` en `src/lib/trips/actions.ts`):

1. Valida el formulario (`validate.ts`): fechas reales, 1 a 30 días, país
   existente, ciudad con forma de uuid.
2. Consume el cupo de creación (`cupo.ts` → función `consumir_cupo_de_viaje`).
3. Inserta la fila en `trips` (`create.ts`); la base genera `edit_token` y
   `share_slug`.
4. Redirige a `/viaje/{edit_token}`.

No se guarda ningún ítem: las listas se generan al leer.

**Leer un viaje** (`read.ts`): busca el viaje por token, trae en paralelo la
ciudad, su clima, los umbrales, el catálogo y los precios (de la caché), y los
ítems guardados (sin caché). Los motores generan las dos listas completas y lo
guardado se superpone encima.

**Editar** (`mutate.ts`): cada tilde o cantidad es una Server Action que
resuelve el token contra la base, verifica que el ítem o el gasto pertenezca al
viaje y hace upsert, o borra la fila si la cantidad vuelve a cero. La UI es
optimista (`useOptimistic`) y se revierte si la acción falla.

## Decisiones que conviene conocer antes de cambiar algo

- **Sin cuentas.** El link privado es la única llave del viaje, y la app lo dice
  al lado del link. Sumar cuentas es otro producto (spec, sección 2).
- **Los motores son puros.** `src/lib/packing` y `src/lib/budget` no saben que
  existe Supabase: reciben datos y devuelven resultados. Por eso tienen la
  mayoría de los tests. Una consulta adentro de un motor rompe eso.
- **Clima histórico, no pronóstico.** Con meses de anticipación es lo único que
  existe. Los buckets (`climate_thresholds`) son datos, no código.
- **Los precios son órdenes de magnitud.** La vista muestra su antigüedad. Los
  montos convertidos no se guardan nunca: se recalculan con la cotización del
  momento.
- **Las tablas de sesión están cerradas al cliente.** El spec pedía lectura
  pública; eso habría regalado los tokens de todos los viajes. El porqué está
  arriba de `20260826120200_rls_policies.sql`.
- **CSP sin nonces.** Con nonces, cada página tendría que renderizarse por
  request. Ver [`seguridad.md`](seguridad.md).
- **Caché solo de lo que no es del usuario.** Las lecturas de referencia se
  cachean una hora por deploy (`src/lib/supabase/cached.ts`); las de viajes,
  nunca.

## Dónde mirar primero

| Para…                       | Empezá por                                                               |
| --------------------------- | ------------------------------------------------------------------------ |
| Entender el producto        | `spec-mvp-kit-viaje.md` y el `README.md`                                 |
| La lógica de equipaje       | `src/lib/packing/engine.ts` y su test                                    |
| La lógica de presupuesto    | `src/lib/budget/engine.ts`, `money.ts`                                   |
| Escrituras y permisos       | `src/lib/trips/` y `supabase/migrations/20260826120200_rls_policies.sql` |
| Los datos                   | [`datos.md`](datos.md)                                                   |
| La seguridad                | [`seguridad.md`](seguridad.md)                                           |
| Operar el sitio             | [`administrar.md`](administrar.md)                                       |
| Sumar un país               | [`agregar-un-pais.md`](agregar-un-pais.md)                               |
| Configurar Supabase de cero | [`configurar-supabase.md`](configurar-supabase.md)                       |

## Cómo se prueba

```bash
npm test             # Vitest: motores, contenido, validación, seguridad
npm run lint
npm run build        # genera los tipos de rutas: va antes del typecheck
npm run typecheck
```

Contra un Postgres local o de CI, después de aplicar las migraciones en orden:

```bash
psql -v ON_ERROR_STOP=1 -f supabase/tests/setup-roles.sql   # solo fuera de Supabase
psql -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql     # permisos y constraints
psql -v ON_ERROR_STOP=1 -f supabase/tests/integridad.sql    # datos maestros
```

## Lo que queda abierto

- **Fuentes de cotización** para los países que hoy dicen "sin fuente
  todavía": se agregan en `corridors.ts` cuando hay una API verificada.
- **Monitoreo de errores.** Hoy los errores quedan en los logs de Vercel; un
  servicio de reporte (con la misma redacción de tokens que analytics) daría
  alertas.
- **Retención de viajes.** No vencen solos; `purgar_viajes_terminados` existe
  para cuando haga falta.
