# Seguridad

Qué protege a Kit de viaje, contra qué, y dónde está cada control. Pensado para
quien tenga que auditarlo o extenderlo. La guía operativa para el dueño está en
[`administrar.md`](administrar.md).

## Qué hay que proteger

La app no tiene cuentas, pagos ni datos personales: un viaje son fechas, una
ciudad y dos listas. Lo que sí tiene valor:

| Activo                              | Por qué importa                                                     |
| ----------------------------------- | ------------------------------------------------------------------- |
| El `edit_token` de cada viaje       | Es la única llave de edición: quien lo tiene, edita                 |
| La service role key                 | Saltea toda la RLS: lee y escribe cualquier tabla                   |
| Las credenciales de CI              | Aplican migraciones a la base de producción                         |
| La disponibilidad y el costo        | La base es gratuita/limitada: llenarla o saturarla tiene costo      |
| La integridad de los datos maestros | Un precio en la moneda equivocada da un presupuesto falso sin error |

## Modelo de acceso

```
Navegador ──(HTML, Server Actions)──> Next.js en Vercel ──(service role)──> Supabase
                                          │
                                          └──(anon key, solo lectura)──> Supabase
```

- **El navegador nunca habla con Supabase.** Ni la URL ni la anon key llegan
  al bundle del cliente (verificado en el build). Toda lectura y escritura pasa
  por el servidor.
- **Tablas de referencia** (destinos, clima, precios, catálogo): RLS con
  `select using (true)` y **solo** el privilegio SELECT para `anon` y
  `authenticated`.
- **Tablas de sesión** (viajes y sus ítems) y **cupos**: RLS habilitada, cero
  políticas y todos los privilegios revocados para `anon` y `authenticated`.
  Solo la service role las toca.
- **Escrituras**: únicamente por Server Actions (`src/lib/trips/actions.ts`),
  que resuelven el `edit_token` contra la base antes de escribir y validan que
  lo que se escribe pertenece al viaje.

## Amenazas y controles

| Amenaza                                                      | Control                                                                           | Dónde                                                                  |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Leer los `edit_token` de todos los viajes con la anon key    | Tablas de sesión sin políticas ni privilegios                                     | `20260826120200_rls_policies.sql`; smoke test                          |
| Adivinar un `edit_token`                                     | 122 bits aleatorios de `gen_random_uuid()` (RNG del sistema operativo)            | `20260826120100_session_tables.sql`                                    |
| Escribir en un viaje ajeno                                   | El `trip_id` sale del token, nunca del cliente; upsert acotado por la PK          | `src/lib/trips/mutate.ts`                                              |
| Meter en un viaje propio un gasto de otro país               | Se valida contra los precios de la ciudad del viaje                               | `src/lib/trips/mutate.ts`; `mutate.test.ts`                            |
| Crear viajes en masa con un script                           | Cupo por hora: 30 por conexión, 2.000 en total, contado en Postgres               | `20261008120100_cupo_de_creacion.sql`; `src/lib/trips/cupo.ts`         |
| Clickjacking del dashboard (embeberlo en un iframe)          | `frame-ancestors 'none'` y `X-Frame-Options: DENY`                                | `src/lib/seguridad/headers.ts`                                         |
| Inyección de scripts de otros dominios                       | CSP: scripts solo del propio dominio y de Vercel Analytics                        | `src/lib/seguridad/headers.ts`                                         |
| Fuga del link privado por el header Referer                  | `Referrer-Policy: no-referrer` en `/viaje/*`                                      | `next.config.ts`                                                       |
| Fuga del link privado a analytics                            | Analytics no se monta en `/viaje/*`, y `beforeSend` borra tokens de cualquier URL | `src/components/analytics.tsx`; `src/lib/seguridad/privacidad.ts`      |
| Indexación de viajes por buscadores                          | `noindex` en la página, `X-Robots-Tag` y `Disallow: /viaje/`                      | páginas de viaje; `next.config.ts`; `src/app/robots.ts`                |
| CSRF contra las Server Actions                               | Next compara `Origin` con `Host` en cada Server Action                            | Next.js (nativo)                                                       |
| Texto de Postgres en pantalla (nombres de tablas y columnas) | Mensajes fijos para el usuario; el detalle va a los logs                          | `src/lib/trips/errors.ts`; `mutate.ts`                                 |
| Una tabla nueva expuesta por olvido                          | Privilegios por defecto revocados; CI falla si una tabla de `public` no tiene RLS | `20261008120000_endurecer_permisos.sql`; smoke test                    |
| Una función nueva expuesta como endpoint RPC                 | CI falla si `anon` puede ejecutar cualquier función de `public`                   | smoke test                                                             |
| Fórmulas en el CSV exportado                                 | Celdas que empiezan con `= + - @`, tab o CR se neutralizan                        | `src/lib/export/csv.ts`                                                |
| Fuente de cotizaciones colgada                               | Timeout de 5 s; la página sigue con un aviso                                      | `src/lib/quotes/fetch.ts`                                              |
| Dependencia vulnerable                                       | Dependabot semanal; `npm audit` sin hallazgos en producción                       | `.github/dependabot.yml`                                               |
| Action de CI comprometida                                    | Actions fijadas por SHA, CLI de Supabase con versión fija, token de solo lectura  | `.github/workflows/`                                                   |
| Precio cargado en otra moneda (a mano, en Studio)            | Trigger que lo rechaza; chequeo de integridad en CI y mensual                     | `20261008120200_moneda_coherente.sql`; `supabase/tests/integridad.sql` |

## Auditoría del 2026-10-08

Lo que se encontró y cómo quedó:

| #   | Hallazgo                                                              | Gravedad                       | Estado                                                                                 |
| --- | --------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------- |
| 1   | Next.js 16.3.3 con avisos de seguridad publicados (uno crítico)       | Crítica                        | Actualizado a 16.3.8; `npm audit` de producción en cero                                |
| 2   | Sin headers de seguridad: el dashboard se podía embeber en otro sitio | Alta                           | CSP, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, HSTS, COOP |
| 3   | Creación de viajes sin límite                                         | Media                          | Cupo por hora en la base                                                               |
| 4   | El link privado de cada viaje viajaba a Vercel Analytics              | Media                          | Analytics fuera de `/viaje/*` y URLs redactadas                                        |
| 5   | El texto de los errores de Postgres llegaba a la pantalla             | Baja                           | Mensajes fijos; el detalle va a los logs                                               |
| 6   | Un viaje aceptaba gastos de otras ciudades                            | Baja                           | Validación contra la ciudad del viaje                                                  |
| 7   | `anon` conservaba TRUNCATE, REFERENCES y TRIGGER sobre la referencia  | Baja                           | Revocados; solo SELECT                                                                 |
| 8   | Workflow con credenciales de producción instalaba el CLI "latest"     | Baja                           | Versión fija y actions por SHA                                                         |
| 9   | Sin timeout a la API de cotizaciones                                  | Baja                           | 5 s                                                                                    |
| 10  | HTML sin escapar en los popups del mapa                               | Informativa (contenido propio) | Escapado                                                                               |

## Riesgos que quedan, a sabiendas

- **`'unsafe-inline'` en `script-src`.** Next necesita scripts inline para
  arrancar, y la alternativa —nonces— obliga a renderizar cada página por
  request (las guías dejarían de ser estáticas). Mitigación: no hay HTML que
  escriba el usuario en ninguna parte de la app.
- **El link es la llave.** Quien recibe el link privado de un viaje puede
  editarlo; es el diseño (sin cuentas). La app lo dice al lado del link.
- **El cupo cuenta por IP.** Una red grande detrás de una sola IP (una
  universidad) comparte el cupo de 30 por hora. Los topes se ajustan en
  `src/lib/trips/cupo.ts` sin migración.
- **`braces` en las dependencias de desarrollo.** Aviso de `npm audit` en la
  cadena de ESLint, sin versión corregida compatible. No llega a producción:
  solo corre en el CI, sobre el código propio.
- **Las cotizaciones vienen de una API de terceros** (dolarapi.com). Si
  devolviera valores falsos, el total convertido sería falso. La app no
  persiste esos valores y los muestra con su hora.

## Cómo verificarlo

```bash
npm audit --omit=dev                      # cero vulnerabilidades en producción
npm test                                  # incluye headers, privacidad, cupo y escrituras
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/rls_smoke.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f supabase/tests/integridad.sql
curl -sI https://<dominio>/ | grep -i -E "content-security|x-frame|strict-transport"
```

## Reportar un problema

Si encontrás una vulnerabilidad, no abras un issue público: el repo es público
y el issue también. Escribile al dueño del repositorio por un canal privado.
