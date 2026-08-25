# Spec MVP — Kit de viaje (packing + presupuesto) para corredores volátiles

**Corredor inicial:** Buenos Aires / Argentina
**Tipo de proyecto:** Portfolio técnico
**Audiencia de este documento:** referencia de implementación propia + agente de código (spec-driven development)

---

## 1. Resumen del producto

**Visión general:** una aplicación web frictionless (sin registro) diseñada para centralizar y simplificar la planificación logística y financiera de viajes hacia destinos con alta volatilidad económica o multiplicidad cambiaria. El MVP actúa como prueba de concepto enfocada en un único corredor (Buenos Aires, Argentina).

**Problema que resuelve:** viajar a destinos con tipos de cambio múltiples y climas variables genera fricción en la planificación. Los usuarios necesitan saber qué empacar según el clima esperado de sus fechas —promedio histórico para esa época, no pronóstico real, que no es confiable con meses de anticipación (sección 4)— y cuánto van a gastar. Ese presupuesto se desactualiza rápido, pero menos por el tipo de cambio (relativamente estable hoy, sección 2) que por la inflación en pesos — de ahí el timestamp de actualización en cada producto del catálogo (sección 5).

**Propuesta de valor y enfoque técnico:** el sistema ofrece dos motores principales, operando sobre sesiones anónimas compartibles mediante URL (`edit_token` / `share_slug`, sección 3):

1. **Motor de equipaje:** generación determinística basada en reglas de clima, tipo de viaje y duración.
2. **Motor de presupuesto:** catálogo curado de consumos típicos con conversión en tiempo real consultando APIs financieras externas (oficial, blue, MEP, CCL).

**Objetivo del proyecto:** servir como pieza técnica de portfolio que demuestre dominio en arquitecturas modernas (Next.js, Supabase), Spec-Driven Development con agentes de IA, diseño de RLS en bases relacionales, y UX sin fricción de entrada (sin flujos de autenticación tradicionales).

## 2. Alcance del MVP

Ledger vivo, no lista cerrada de una sola vez — a medida que aparezcan decisiones de alcance en el resto del spec, te consulto antes de asumir nada, como pediste.

**Dentro del MVP (confirmado):**
- Sin login: `edit_token` privado (edita) + `share_slug` público (solo lectura) — ver sección 3.
- Un corredor: Argentina / Buenos Aires.
- Español, monolingüe.
- Motor de packing por reglas, sin LLM.
- Motor de presupuesto: catálogo curado (15-20 productos, 4 categorías), 4 cotizaciones.
- Export PDF (impresión del navegador vía CSS de impresión, sin librería) y CSV, para packing y para presupuesto.
- Analytics de uso con Vercel Web Analytics.

**Fuera del MVP por ahora** (no descartado — se revisa si aparece una razón concreta, no una lista cerrada):
- Cuentas/login.
- Más de un corredor.
- Inglés / i18n.
- Monetización — consistente con que esto es portfolio, no producto a monetizar.
- Notificaciones: consecuencia directa de no tener login, no una exclusión aparte — sin cuenta no hay canal (mail/push) al que notificar.
- Tracking de gastos reales e historial de gastos por viaje (vs. el presupuesto estimado): a diferencia de los ítems anteriores, esto no es un "más adelante en este proyecto" — es scope de un proyecto de finanzas/blog aparte que ya tenés en mente. Lo registro acá para no perderlo, no para reabrirlo en este MVP.

**Sobre el aviso de cookies:** Vercel Web Analytics no usa cookies — identifica visitas con un hash generado del request entrante, sin datos que las reidentifiquen, y no guarda nada de forma permanente. Al no registrar información personalmente identificable, se puede usar sin banners de consentimiento de cookies. Si es la única herramienta activa (sin Google Analytics ni terceros en el plan), un banner "Aceptar todo / Personalizar" no tiene nada que consentir — no se setea ninguna cookie. Lo que sí conviene, y es mucho más simple: un aviso de una sola línea, sin lógica de consent management real ("Usamos analytics sin cookies para saber qué se usa. No vendemos datos ni mostramos anuncios."). Si preferís igual el patrón completo de consentimiento granular por si más adelante sumás algo que sí use cookies, decímelo y lo diseño así desde ya — pero con el plan de hoy, sería resolver un problema que no tenés.

## 3. Modelo de datos

Postgres/Supabase. Dos grupos de tablas con políticas RLS distintas.

**Datos de referencia** (cargados por el admin, lectura pública):

```sql
create table destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  corridor text not null,          -- ej: 'argentina'
  base_currency text not null      -- ISO 4217, ej: 'ARS'
);

create table climate_profiles (
  destination_id uuid references destinations(id),
  month int not null check (month between 1 and 12),
  temp_min numeric,
  temp_max numeric,
  precip_probability numeric,
  primary key (destination_id, month)
);

create table products (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid references destinations(id),
  category text not null,
  name text not null,
  base_price numeric not null,
  currency text not null,
  updated_at timestamptz not null default now()
);

create table packing_catalog (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  weight_g int not null,
  climate_tags text[] not null,     -- ej: {'frio','lluvia'}
  trip_type_tags text[] not null    -- ej: {'playa','urbano'}
);
```

**Datos de sesión** (generados por el usuario, sin cuenta):

```sql
create table trips (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid references destinations(id),
  start_date date not null,
  end_date date not null,
  trip_type text not null,
  edit_token text unique not null default substr(md5(random()::text), 1, 20),  -- privado, solo el creador
  share_slug text unique not null default substr(md5(random()::text), 1, 10)   -- público, se comparte, solo lectura
);

create table trip_packing_items (
  trip_id uuid references trips(id),
  item_id uuid references packing_catalog(id),
  qty int not null default 1,
  checked boolean not null default false,
  primary key (trip_id, item_id)
);

create table trip_budget_items (
  trip_id uuid references trips(id),
  product_id uuid references products(id),
  qty int not null default 1,
  primary key (trip_id, product_id)
);
```

**RLS:**
- `destinations`, `climate_profiles`, `products`, `packing_catalog` → policy de solo lectura pública (`using (true)` en `select`), sin insert/update/delete desde el cliente.
- `trips`, `trip_packing_items`, `trip_budget_items` → dos tokens, no uno: `edit_token` (privado, solo lo tiene quien creó el trip) habilita lectura y escritura; `share_slug` (el que se comparte) habilita solo lectura — corrijo acá la versión anterior de este documento, que asumía que el link compartido también editaba. Sin autenticación real, RLS no puede distinguir esto por sí solo: ninguna escritura pasa por el cliente con la anon key, todas van por Server Actions de Next.js que validan `edit_token` server-side antes de tocar Supabase. Las tablas de sesión quedan en RLS de solo lectura pública (`using (true)` en `select`), sin policies de insert/update para el cliente. Rutas: `/viaje/{edit_token}` (editable), `/viaje/ver/{share_slug}` (solo lectura).

**No modelado como tabla (se resuelve en runtime):** cotizaciones de cambio. Se consultan contra la API externa según `base_currency` del destino, no se persisten como parte del schema relacional.

## 4. Motor de packing

Motor de reglas determinístico (sin LLM) — predecible, sin costo de inferencia por visita, sin riesgo de alucinar ítems. Un LLM, si se agrega, queda para una capa posterior de refinamiento conversacional sobre la lista ya generada, no para la generación en sí.

**Tipos de viaje (enum cerrado para MVP):** `playa`, `urbano`, `aventura`, `negocios`

**Umbrales de clima — parametrizables, no hardcodeados:**

```sql
create table climate_thresholds (
  id text primary key,      -- 'frio' | 'templado' | 'calido'
  temp_max numeric          -- límite superior en °C; null = sin límite superior
);
-- seed inicial: ('frio', 10), ('templado', 25), ('calido', null)
```

Editable directo en Supabase Studio — no hace falta panel de admin para el MVP.

**Extensión a `packing_catalog`** (cantidad variable por duración del viaje):

```sql
alter table packing_catalog add column base_qty int not null default 1;
alter table packing_catalog add column scales_with_days boolean not null default false;
alter table packing_catalog add column days_per_unit int;   -- solo si scales_with_days
alter table packing_catalog add column max_qty int;         -- tope, ej: medias no pasan de 10
```

**Lógica del motor** (dado un trip: destino, fechas, trip_type):

1. Resolver los meses que cubre el rango de fechas → traer `climate_profiles` de esos meses para el destino.
2. Promediar temp_min/temp_max de esos meses → mapear a bucket(s) de `climate_thresholds`. Si el viaje cruza más de un bucket (ej. 30 días que arrancan templados y terminan fríos), incluir ítems de ambos.
3. Query: `packing_catalog` donde `climate_tags` interseca el/los bucket(s) resueltos Y `trip_type_tags` contiene el `trip_type` del trip.
4. Cantidad por ítem: si `scales_with_days = false` → qty = `base_qty`. Si `scales_with_days = true` → qty = `min(ceil(duration_days / days_per_unit), max_qty)`.
5. Insertar resultado en `trip_packing_items`. El usuario edita cantidades y tilda ítems después — la generación es punto de partida, no resultado final.

**Peso:** se suma `weight_g × qty` de todos los ítems y se muestra como total informativo. No trunca la lista ni bloquea agregar ítems (decisión: solo informativo, no límite duro).

## 5. Motor de presupuesto

**Categorías del catálogo inicial:** transporte, alojamiento, entretenimiento y comida (restaurantes, cafés, supermercado).

15-20 productos totales, ~4-5 por categoría. Ejemplo de filas para poblar `products`:

| category | name | base_price | currency |
|---|---|---|---|
| comida | Menú ejecutivo (almuerzo) | 8500 | ARS |
| comida | Café con leche + medialuna | 3200 | ARS |
| transporte | Viaje en SUBE (colectivo/subte) | 350 | ARS |
| transporte | Remis corto (centro) | 4500 | ARS |
| alojamiento | Hostel, cama en dorm | 22000 | ARS |
| alojamiento | Hotel 3★, noche | 65000 | ARS |
| entretenimiento | Entrada show de tango | 45000 | ARS |

**Fuente de cotización:** dolarapi.com o monedapi.ar (oficial/blue/MEP/CCL en un solo request).

**Cotización mostrada:** las 4 se traen siempre, pero se muestra una sola a la vez. Componente: badge rectangular con el valor de blue (default) + ícono de dropdown al lado — al abrirlo, lista oficial/MEP/CCL como alternativas para cambiar la selección. Semánticamente es un `Select` de Shadcn (elegís un valor de una lista), no un `DropdownMenu` (que es para acciones); el trigger se stylea como botón de color sólido con chevron, igual que la referencia visual. Con la brecha actual entre blue y oficial en ~2-6%, cualquiera sirve de default razonable — blue queda visible pero no exclusivo, el resto está a un click, no oculto.

**Cálculo:**
```
total_ars = Σ (product.base_price × trip_budget_items.qty)
total_usuario = total_ars / cotización_seleccionada.valor
```
El monto convertido nunca se persiste — se recalcula en cada render contra la cotización vigente.

**Staleness:** cada `product` tiene `updated_at`. La vista de presupuesto muestra la antigüedad del precio más viejo del listado ("precios actualizados hace X días"); si supera un umbral (ej. 30 días), warning visual. No se oculta el problema, se lo muestra.

**Cantidades por default:** mismo patrón de escalado por duración que `packing_catalog` (sección 4), aplicado a `products`:

```sql
alter table products add column base_qty int not null default 1;
alter table products add column scales_with_days boolean not null default false;
alter table products add column days_per_unit int;
alter table products add column max_qty int;
```

Así el motor de presupuesto genera una lista default al crear el trip —igual que el motor de packing— en vez de arrancar vacío.

## 6. Flujo de usuario y persistencia

**A. Entrada (Landing — `/`)**

Hero con globo 3D interactivo (librería `cobe`, ~5kB, renderizado vía WebGL sobre un `<canvas>`, sin depender de Three.js) con un marcador único en Buenos Aires — el corredor está fijo para este MVP. Sin formulario tradicional.

1. Click en el marcador → slide-over con dos inputs: datepicker (rango de fechas, 1-30 días) y tipo de viaje (playa/urbano/aventura/negocios) como chips de un tap. Sigue siendo una sola interacción, no dos pantallas — pero el tipo de viaje no puede quedar implícito: `packing_catalog.trip_type_tags` (sección 4) es una de las dos dimensiones que filtran qué se genera, sin ese dato el motor no distingue equipaje de playa de equipaje de negocios.
2. Al confirmar, un Server Action inserta el `trip` (`edit_token` + `share_slug` generados), ejecuta el motor de packing (sección 4) y el de presupuesto (sección 5) —ambos con cantidades default por el mismo patrón de escalado— y hace `redirect()` a `/viaje/{edit_token}`.

**B. Dashboard privado (`/viaje/{edit_token}`)**

Server Component valida `edit_token` contra Supabase; si no existe, redirect a `/`. Header con destino/fechas/tipo y los controles de Compartir (copia `/viaje/ver/{share_slug}`) y Exportar (PDF vía CSS de impresión + CSV, por separado en cada tab).

Dos tabs sobre la misma página — Equipaje y Presupuesto — reforzando "igual peso, kit de viaje":

- **Equipaje:** lista generada, checkbox + cantidad editables, peso total informativo.
- **Presupuesto:** lista generada con cantidades default editables. Select de Shadcn arriba para pivotar entre las 4 cotizaciones (oficial, blue, MEP, CCL — sección 5), recalculando el total en tiempo real, con aviso de antigüedad de precios.

**Guardado:** sin botón "Guardar" — cada interacción dispara un Server Action en background, y `useOptimistic` de React actualiza la UI al instante mientras resuelve. Falta el camino de error: si el Server Action falla, `useOptimistic` tiene que revertir al estado anterior y mostrar el fallo — sin eso el usuario puede quedar viendo un estado que nunca se persistió.

**C. Recuperación sin login**

`useEffect` en el dashboard guarda en `localStorage` un array `[{ id, destination_name, edit_token }]` — no solo el último trip. En la landing, si hay historial, se muestra "Tus viajes recientes" antes de ofrecer empezar uno nuevo. Es conveniencia de cliente, no autenticación: si cambia de navegador o dispositivo, el link guardado (bookmark, o compartido a sí mismo) es la única vía real de volver — vale un mensaje visible en el dashboard: "Guardá este link, es la única forma de volver".

**D. Modo solo lectura (`/viaje/ver/{share_slug}`)**

Mismo componente del dashboard con prop `isReadOnly={true}`: checkboxes y cantidades se renderizan como texto estático. El selector de cotización queda activo — cambiar qué tasa mirar es estado de cliente, no escribe nada en la base.

`isReadOnly` es presentacional, no el mecanismo de seguridad: eso ya lo resuelve la sección 3 (las escrituras solo pasan por Server Actions que validan `edit_token`, y un visitante con `share_slug` nunca tiene ese token). Aunque alguien manipule el DOM o el prop desde devtools, no hay forma de que la mutación se ejecute sin el token.

## 7. Stack técnico y criterios de aceptación

**Stack:**
- Next.js (App Router, Server Components) — Vercel.
- Tailwind CSS + Shadcn UI.
- Supabase (Postgres) — RLS de solo lectura pública en datos de referencia, escrituras exclusivamente vía Server Actions (sección 3).
- TypeScript estricto.
- `cobe` para el globo de la landing (sección 6).

**Testing:** cobertura dirigida a la lógica real, no a CRUD — motor de packing (sección 4) y cálculo de presupuesto (sección 5) son las dos superficies con lógica de negocio genuina.
- Motor de packing: dado un rango de fechas + tipo de viaje conocido, el set de ítems generado y las cantidades escaladas por duración son deterministas y verificables — casos de test por cada bucket de clima × tipo de viaje.
- Motor de presupuesto: el cálculo `total_ars → total_usuario` según la cotización seleccionada es aritmética pura, fácil de testear con valores fijos.
- Fuera de foco de testing: componentes de UI, Server Actions que son I/O directo a Supabase (se prueban manualmente / con Playwright si da el tiempo, no bloqueante para el MVP).

**CI/Deploy:** Vercel conectado al repo de GitHub — cada push a `main` deploya a producción, cada PR genera un preview deploy. Sin pipeline custom para el MVP.

**Criterios de aceptación (Definition of Done):**
1. Un usuario sin cuenta puede definir fechas + tipo de viaje y llegar a una lista de equipaje y un presupuesto generados automáticamente.
2. El presupuesto se recalcula en tiempo real al cambiar entre las 4 cotizaciones.
3. El link `share_slug` abre una vista funcional en modo solo lectura, verificable desde otro navegador.
4. Exportar a PDF y CSV funciona para ambas listas.
5. Volver a `/` en el mismo navegador después de crear un trip muestra el acceso rápido en "Tus viajes recientes".
6. Los tests del motor de packing y del motor de presupuesto pasan en CI.
7. Ninguna escritura a `trips`, `trip_packing_items` o `trip_budget_items` es posible sin un `edit_token` válido — verificable intentando una mutación directa contra la API de Supabase con la anon key.
