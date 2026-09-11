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
- Guía informativa de Argentina como landing, con el planner como último bloque de esa misma página (sección 8).

**Fuera del MVP por ahora** (no descartado — se revisa si aparece una razón concreta, no una lista cerrada):
- Cuentas/login.
- Captura de email para descargar una plantilla. Rompe "sin registro", que es lo que sostiene el modelo de seguridad de la sección 3, y no hace falta: el export CSV de la sección 6B ya es la planilla, con el viaje real del usuario adentro (sección 8.1).
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

### 3.1 Filas ralas: el cero es ausencia de fila

Las tablas de sesión guardan **solo lo que el usuario eligió**. Un viaje recién creado no tiene ninguna fila en `trip_packing_items` ni en `trip_budget_items`.

- **Crear** (`create.ts`) inserta la fila de `trips` y nada más.
- **Leer** (`read.ts`) corre los dos motores —que son deterministas— y superpone encima las filas que existan. Sin fila, cantidad 0.
- **Escribir** (`mutate.ts`) hace upsert al subir una cantidad y **borra la fila** al bajarla a cero.

La primera razón es de modelado: la versión anterior escribía unas cincuenta filas por viaje, todas diciendo "ninguno". Eso no son datos, es el estado inicial escrito a mano.

La segunda es la que importó de verdad. Guardar ceros exigía que la base tuviera `check (qty >= 0)`, y mientras esa migración no estuviera aplicada **la creación de viajes fallaba entera**. Con filas ralas nunca se escribe un cero, así que el check original —`qty > 0`— no se puede disparar y la app funciona con o sin esa migración. Verificado contra un Postgres sin migrar: viaje creado, cantidades arriba, tildado, y bajada a cero, sin un solo error.

La regla de decisión vive aparte, en `src/lib/trips/item-write.ts`, para poder probarla sin base. Su invariante: **nunca devuelve un upsert con cantidad cero**.

**Tildar sube la cantidad a uno** si estaba en cero. Marcar algo que se lleva en cantidad ninguna no significa nada, y además la fila necesita una cantidad válida para existir.

## 4. Motor de packing

> **Actualizado: las listas se generan en cero, y el cero no se guarda.** El motor decide **qué** entra en la lista, no **cuánto**. Cada ítem llega con cantidad 0 y el usuario suma lo que se acopla a su viaje. La regla de escalado por duración que se describe más abajo sigue viva y testeada en `src/lib/quantity.ts`, y viaja con cada ítem del catálogo, pero ya no se aplica sola: una lista preseleccionada obliga a desmarcar en vez de elegir. Vale igual para el motor de presupuesto (sección 5).
>
> **Una fila existe solo si el usuario eligió algo** (ver 3.1). Crear un viaje no escribe ningún ítem; la lista se genera al leer y las filas guardadas se superponen encima.

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

> **Actualizado por la sección 8.** El globo sigue siendo la entrada y sigue arriba de todo: eso no cambia. Lo que cambia es qué pasa al tocar el marcador. Antes abría el slide-over con los dos inputs; ahora navega a la guía del destino, y los dos inputs viven en una tercera página (`/guia/{slug}/planificar`). El Server Action, la generación y el `redirect()` a `/viaje/{edit_token}` no se tocan.

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

**Decisión revisada: no hay historial en el navegador.** La versión anterior de esta sección guardaba los viajes en `localStorage` y los ofrecía como "Tus viajes recientes". Se sacó entero, junto con el módulo de storage y el efecto que escribía.

El motivo es que era una media promesa. Funcionaba en un solo navegador y en un solo dispositivo, así que a veces el viaje estaba y a veces no, sin que el usuario pudiera saber por qué. Una recuperación que falla de forma impredecible es peor que no ofrecer ninguna, porque enseña a no guardar el link.

**El link es la única vía de volver, y la página lo dice.** El dashboard muestra un aviso destacado junto a los botones de compartir: "Guardá este link. Es la única forma de volver a tu viaje: no hay cuenta ni mail para recuperarlo." Ese texto ya existía; sacar el historial lo vuelve literalmente cierto en vez de casi cierto.

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
1. Un usuario sin cuenta puede definir fechas + tipo de viaje y llegar a una lista de equipaje y un presupuesto generados automáticamente, **con todas las cantidades en cero**, listos para que elija lo que necesita. La creación no depende de ninguna migración pendiente (3.1).
2. El presupuesto se recalcula en tiempo real al cambiar entre las 4 cotizaciones.
3. El link `share_slug` abre una vista funcional en modo solo lectura, verificable desde otro navegador.
4. Exportar a PDF y CSV funciona para ambas listas.
5. El dashboard privado muestra, junto a los controles de compartir, el aviso de que el link es la única forma de volver al viaje. Reemplaza al criterio anterior, que pedía un historial de viajes recientes en el navegador: esa función se eliminó (sección 6C).
6. Los tests del motor de packing y del motor de presupuesto pasan en CI.
7. Ninguna escritura a `trips`, `trip_packing_items` o `trip_budget_items` es posible sin un `edit_token` válido — verificable intentando una mutación directa contra la API de Supabase con la anon key.

Los criterios 8 a 12, propios de la guía de destino, están en la sección 8.9.

## 8. Guía de destino

Pivote de producto, decidido después de tener el planner funcionando. El globo se queda donde está —es la entrada y el selector de destino—, pero lo que se abre al tocarlo deja de ser el datepicker y pasa a ser una **guía informativa de Argentina**. El planner no se elimina: pasa a ser la tercera página del flujo, entero.

**Por qué.** Una herramienta suelta se lee como un ejercicio; una guía que termina en una herramienta se lee como un producto. Además resuelve un problema real del embudo actual: quien cae en `/` sin saber nada de Argentina no tiene motivo para elegir fechas todavía. Se le pedía el gesto final —fechas, tipo de viaje— antes de haberle dado una sola razón. La guía le da esa razón y lo deja parado justo arriba del planner.

**Alcance geográfico:** país, no ciudad. El corredor de datos sigue siendo Buenos Aires (sección 3: un solo `destination`); la guía habla de Argentina. No es una inconsistencia a ocultar — es lo que el MVP puede sostener hoy, y el texto lo dice donde corresponde en vez de fingir cobertura nacional en los cálculos.

**Idioma:** español, sin cambios (sección 2).

### 8.1 Estructura: cuatro páginas, no una

La promesa es "el mundo en tus manos: elegís un destino y te decimos lo que necesitás saber". El globo es el punto de entrada y el selector de destino, y todo lo demás cuelga de ese click.

Primero se probó todo en una sola página con cinco bloques. No estaba mal, pero invertía el orden: quien llegaba leía "empezá por Argentina" antes de haber elegido nada. Se separa en tres pasos, uno por página.

**Página 1 — Bienvenida (`/`).** No habla del país. **Un solo rectángulo oscuro a sangre**, del borde superior hasta debajo de los números: el título, el resumen de qué hace el producto, dos accesos (explorar la guía, abrir el planificador), el globo al costado y los cuatro números adentro de la misma banda. El hero y las estadísticas son la misma zona, no dos bandas apiladas con una costura en el medio. El marcador del globo es un `<Link>` a la guía: navega sin JavaScript, se abre en otra pestaña y Next precarga la página al pasar el mouse.

**Página 2 — La guía del país (`/guia/{slug}`).** Adónde llega el click. El nombre del país, la línea de resumen y los **cuatro números destacados** (8.3); después las **cotizaciones en vivo** (8.7), el **tablero informativo** fechado (8.4), los **puntajes** (8.5), el **mosaico de destinos** y el **mapa** (8.8). Cierra invitando al planificador. Prerenderizada con `generateStaticParams`, y con `dynamicParams = false`: un slug que no existe es 404, no una guía vacía.

**Página 3 — El planificador (`/guia/{slug}/planificar`).** El datepicker y el tipo de viaje. El formulario y su Server Action no cambian respecto de la sección 6A; lo único que se movió es dónde vive. Queda pendiente rediseñarlo.

Cada página tiene un enlace de vuelta a la anterior. El flujo hacia adelante lo maneja el globo y los CTA; el de atrás, esos enlaces.

**Los cuatro números de la bienvenida.** El patrón de referencia usa números de cobertura ("146 países"). Los nuestros no pueden serlo sin mentir, así que dicen lo que este producto sí tiene:

| Valor | Etiqueta | Nota |
| --- | --- | --- |
| **4** | cotizaciones en vivo | Oficial, blue, MEP y CCL |
| **0** | registros | Sin cuenta y sin mail |
| **1** | corredor por ahora | Argentina; el motor suma más |
| **100%** | gratis | Sin anuncios ni venta de datos |

El tercero es el que incomoda, y por eso está.

**Qué es en tiempo real y qué no.** La promesa dice "estadísticas en tiempo real" y la página tiene que ser precisa sobre a qué aplica, porque no aplica a todo:

| Dato | Frescura | De dónde sale |
| --- | --- | --- |
| Las 4 cotizaciones | tiempo real (revalidación cada 10 min) | dolarapi (sección 5) |
| Precios del catálogo | `updated_at` por producto, con warning a los 30 días | Postgres (sección 3) |
| Clima del mes | promedio histórico, no pronóstico | `climate_profiles` (sección 4) |
| Tablero informativo | revisión manual fechada | contenido en el repo (8.2) |
| Puntajes | opinión editorial | contenido en el repo (8.2) |

Ninguna de las cuatro últimas filas se presenta como "en vivo". Decir que el clima es tiempo real cuando es un promedio histórico sería exactamente el tipo de imprecisión que este producto dice combatir.

**Un solo destino, dicho de frente.** El globo insinúa "elegí cualquier país" y el MVP solo tiene Argentina. La respuesta no es esconder el globo ni fingir cobertura: el marcador de Argentina está activo y el resto del globo no tiene marcadores, con una línea al pie — "Un corredor por ahora: Argentina. El motor está hecho para sumar más." Es honesto y además cuenta bien la arquitectura, que es lo que un portfolio tiene que mostrar.

**Sin captura de email.** El patrón de referencia ("completá el formulario y recibí la plantilla gratis") rompe la decisión de "sin registro" de la sección 2, que es la que sostiene todo el modelo de seguridad de la sección 3 — pedir un mail obliga a tratarlo como dato personal, con base legal, borrado y un canal de contacto que hoy no existe. Y es innecesario: **el export CSV de la sección 6B ya es la planilla**, y es mejor que una plantilla genérica porque viene con el viaje real del usuario adentro.

### 8.2 Modelo de contenido: en el repo, no en Postgres

El contenido de la guía vive en `src/content/guias/argentina.ts`, tipado contra una interfaz en `src/content/guias/types.ts`. **No** se agrega una tabla de referencia en Supabase. Razones, en orden de peso:

1. **La fecha de actualización no puede mentir.** Es lo único que hace defendible el bloque 2 (8.4). Si el texto vive en la base, alguien lo edita desde el dashboard de Supabase y se olvida de mover la fecha, y no hay nada que lo detecte. Si vive en git, cambiar el texto sin mover la fecha es un diff visible en un PR, y además un test lo puede exigir (8.5).
2. **Latencia en la página más visitada.** `/` es la puerta de entrada; un round trip a Postgres para prosa que cambia dos veces por año se paga en cada visita.
3. **Corregir una errata no debería necesitar una migración.**
4. **La capa de datos ya está demostrada.** 7 migraciones, RLS con 21 aserciones en CI. Meter prosa en una octava tabla no prueba nada nuevo; elegir dónde *no* va cada cosa, sí.

Cuando aparezca un segundo corredor, el archivo pasa a ser `src/content/guias/{slug}.ts` con un índice — la interfaz ya está pensada por destino, no como singleton.

```ts
// src/content/guias/types.ts

/** Un número del hero. `value` es texto, no número: "UTC−3", "90 días". */
export interface GuideHighlight {
  value: string;
  label: string;
  note: string;
}

/** Una entrada del tablero "todo lo que hay que saber antes de reservar". */
export interface GuideFact {
  id: string;
  title: string;
  /** Párrafos. Texto plano, sin markdown ni HTML: no hay renderer y no hace falta. */
  body: string[];
}

/** Una dimensión puntuada. 0-10, un decimal como máximo. */
export interface GuideScore {
  dimension: string;
  score: number;
  rationale: string;
}

export interface GuideImage {
  src: string;
  alt: string;
  /** Atribución. Obligatoria aunque la licencia no la exija. */
  credit: string;
  creditUrl: string;
}

export interface DestinationGuide {
  slug: string;
  country: string;
  subhead: string;
  hero: GuideImage;
  highlights: GuideHighlight[];   // exactamente 4
  facts: GuideFact[];
  /** ISO date (YYYY-MM-DD) de la última revisión del contenido de `facts`. */
  factsUpdatedAt: string;
  scores: GuideScore[];
  shines: string[];
  costs: string[];
  /** Alcance real de los cálculos del planner, dicho en la página. */
  dataScopeNote: string;
}
```

### 8.3 Los cuatro números de la guía

| Valor | Etiqueta | Nota |
| --- | --- | --- |
| **4** | cotizaciones simultáneas | oficial, blue, MEP y CCL. Cuál usás cambia el total, no el redondeo. |
| **UTC−3** | todo el año | sin horario de verano: la diferencia con tu país no se mueve en el viaje. |
| **90 días** | sin visa | para la mayoría de los pasaportes de América y la UE. Verificá el tuyo. |
| **3.700 km** | de norte a sur | de Jujuy a Ushuaia. No es un destino: son varios climas a la vez. |

El cuarto número es el que justifica el motor de packing: en un país con esa extensión, "qué llevo" no tiene una respuesta única.

Los cuatro son contenido editorial estático, sin llamadas de red: encabezan la guía y no deben depender de una API de terceros. El dato en vivo tiene su propio bloque inmediatamente debajo (8.7), donde un estado de carga o un error se pueden mostrar sin arruinar la entrada.

### 8.4 El bloque de información: qué se dice y qué no

Este es el bloque que puede envejecer mal, así que las reglas son parte del spec, no del criterio del día:

- **Nada de "alertas de seguridad".** Una alerta desactualizada es peor que ninguna: quien la lee asume vigencia. El encabezado es "qué tener en cuenta" y el contenido es de tipo estructural (cómo funciona el efectivo, qué precauciones urbanas aplican en cualquier ciudad grande), no coyuntural.
- **Ningún número volátil en prosa.** Sin cotizaciones, sin precios, sin tarifas. Eso lo resuelven la API de cotizaciones (sección 5) y el catálogo con `updated_at` (sección 3), que sí tienen frescura verificable. La prosa explica *el mecanismo*, no *el valor de hoy*.
- **Fecha visible, arriba del bloque**, con el formato "Revisado el {fecha}". No al pie en gris.
- **Nada que dependa de un trámite o de una norma que cambia sin aviso** salvo con un link a la fuente oficial.

Entradas propuestas (borrador editorial, para corregir):

1. **Plata: por qué hay más de un dólar.** Qué es cada cotización, cuál toca realmente un turista según pague en efectivo o con tarjeta, y por qué conviene entenderlo antes de llegar y no en la ventanilla.
2. **Cuándo ir.** Hemisferio sur: las estaciones están invertidas respecto del hemisferio norte. Buenos Aires es húmeda y calurosa en enero; la Patagonia tiene temporada corta; el norte y las Cataratas funcionan casi todo el año. El planner del bloque 4 usa clima histórico del mes, no pronóstico (sección 4), y eso está bien dicho acá.
3. **Moverse: las distancias son continentales.** Vuelos internos vs. micros de larga distancia — los micros son genuinamente buenos y son parte de la experiencia, pero un tramo puede ser una noche entera.
4. **Qué tener en cuenta.** Precauciones urbanas estándar de cualquier ciudad grande; cambiar plata en lugares establecidos y no en la calle; llevar algo de efectivo aunque la tarjeta funcione.
5. **Alcance de los cálculos.** Los presupuestos y las listas del bloque 4 están calibrados para Buenos Aires. Dicho en la página, no escondido.

### 8.5 Puntajes (borrador editorial, para corregir)

| Dimensión | Puntaje | Por qué |
| --- | --- | --- |
| Naturaleza y paisajes | 9,5 | Glaciares, selva, puna, Atlántico y Andes en un solo país. Pocos destinos ofrecen ese rango. |
| Gastronomía | 9,0 | Carne y vino de nivel mundial a precio de comida cotidiana, más una escena de café e italiana propia. |
| Vida urbana y cultura | 9,0 | Buenos Aires sostiene teatro, librerías y música en vivo a una escala poco común en la región. |
| Relación precio-calidad | 8,0 | Alto para el viajero que trae divisa, con la advertencia de que se mueve con la inflación. |
| Facilidad logística | 6,0 | Las distancias son grandes, los tramos internos caros y el efectivo sigue importando. |
| Previsibilidad económica | 4,0 | Es el punto débil declarado, y es exactamente el problema que esta herramienta ataca. |

**Dónde brilla:** el rango de paisajes en un solo viaje; comer y tomar bien sin que sea un gasto excepcional; una ciudad capital con vida cultural propia y no de vitrina.

**Dónde te cuesta:** las distancias obligan a elegir (no se hace Iguazú y Ushuaia en una semana); los precios se mueven entre que planificás y que viajás; hay que entender el sistema cambiario antes de llegar.

**Disclaimer obligatorio, visible junto a las barras:** "Valoración editorial, no un índice oficial. Es una opinión fundamentada, no una medición."

El puntaje bajo en previsibilidad económica no es un problema de la guía: es el gancho. La sección 4 de la página existe porque ese 4,0 existe.

### 8.6 Imágenes

La foto del país no va en la bienvenida —ese lugar es del globo (8.1)— sino como cabecera del bloque informativo de la página 2, que es donde le da identidad visual a la lectura. Si más adelante se quiere una foto de fondo en la bienvenida, entra detrás de la banda oscura sin rehacer el layout.

Fuera de lo que este entorno puede hacer: la red saliente del contenedor bloquea los CDN de imágenes, así que las fotos las provee el usuario (Unsplash o Pexels, licencia libre). Requisitos: `alt` descriptivo en español, atribución al autor con link aunque la licencia no la exija, y servidas por `next/image` con `width`/`height` explícitos para no romper el layout al cargar.

### 8.7 Cotizaciones en vivo

El bloque que cumple la promesa de "en tiempo real". No hay que construir casi nada: `fetchQuotes()` (`src/lib/quotes/dolarapi.ts`) ya trae las cuatro de dolarapi con `next: { revalidate: 600 }`, y `mapDolarApiResponse` ya traduce los `casa` de la API a los ids del MVP (`bolsa` → MEP, `contadoconliqui` → CCL). Lo que falta es la presentación.

- **Cuatro tarjetas**: Oficial, Blue, MEP, CCL, cada una con el valor de venta y la variación respecto de la oficial, que es la lectura que le importa a un extranjero ("cuánto más rinde tu dólar según dónde lo cambies").
- **Hora de consulta visible.** Un número sin timestamp no es un dato en tiempo real, es un número.
- **Streaming, no bloqueo.** El bloque va dentro de un `<Suspense>` con skeleton: el hero y el resto de la página se pintan sin esperar a dolarapi. Es Server Component, así que la key no viaja al cliente y el cacheo de 10 minutos es compartido entre visitas.
- **Camino de error explícito.** `fetchQuotes` devuelve `{ ok: false, reason }` — el bloque muestra "No pudimos traer las cotizaciones ahora", no un cero ni una página rota. Es la misma decisión que ya tomó la sección 5, aplicada acá.

**Por qué no se guardan en la base.** Tentador para tener un histórico y un gráfico, pero eso es otro producto: exige un job programado, una tabla de series temporales y una política de retención. El MVP muestra el valor de ahora, que es lo que cambia una decisión de viaje.

### 8.8 Destinos: el mosaico y el mapa

Dos bloques que salen de **una sola lista** (`places` en el contenido de la guía). Que compartan la fuente no es economía de código: es lo que evita que el mapa marque un lugar que el mosaico no menciona.

Cada destino tiene nombre, región, una etiqueta corta, un párrafo, coordenadas y una foto opcional. Las coordenadas son del centro de la localidad, no del atractivo — el pin de El Calafate marca el pueblo donde se duerme, no el glaciar.

**El criterio para elegirlos no fue "los más lindos" sino los que anclan un itinerario.** Si alguien arma dos semanas, sale de esa lista. Por eso están las distancias incómodas —Ushuaia e Iguazú en puntas opuestas— y no veinte lugares que nadie combina en un viaje.

**Mosaico ("Adónde ir").** Tarjetas con filtro por región. El filtro es estado de cliente: no toca la URL ni pide datos. Las regiones se derivan del contenido, así que sumar un destino de una región nueva hace aparecer el filtro solo. Una tarjeta puede marcarse `featured` y ocupa dos columnas.

**Mapa ("El país de un vistazo").** Leaflet con tiles de CARTO sobre OpenStreetMap, en dos columnas: el mapa a la izquierda y la lista por región a la derecha. **No** a todo el ancho como el patrón de referencia: aquel país es ancho y Argentina es alta y angosta —unos 30 grados de latitud contra unos 14 de longitud efectiva a esta altura del planeta—, así que un mapa apaisado deja el país en una franja fina con vacío a los costados.

Tres decisiones técnicas que no son de estilo:

- **Leaflet se importa adentro del efecto.** Lee `window` al evaluarse, y un componente de cliente igual se renderiza en el servidor: importarlo arriba rompe el prerender con `window is not defined` y tira el build. La alternativa habitual, `next/dynamic` con `ssr: false`, obliga a un componente extra porque en un Server Component esa opción no está permitida.
- **Marcador propio con `divIcon`.** El ícono por defecto de Leaflet son PNG que la librería busca por una ruta relativa a su CSS, y con el bundler esa ruta no resuelve. Un SVG inline no depende de ninguna ruta.
- **El encuadre sale de `fitBounds` sobre los destinos**, no de un centro y un zoom escritos a mano: sumar un destino en otra punta del país reencuadra el mapa solo en vez de dejarlo afuera.

**Ni las tarjetas ni los pines son enlaces.** En el patrón de referencia cada uno abre la guía de ese destino; acá esas páginas no existen — hay una guía por país. Un enlace que no lleva a ningún lado es peor que ninguno, porque enseña que los clicks de esta página no hacen nada. El pin abre un popup con el mismo texto de la tarjeta. Cuando existan guías por destino, tarjetas y pines se vuelven enlaces sin tocar el resto.

**Sin fotos todavía** (8.6): las tarjetas usan un tinte por región. Cuando haya imágenes con licencia entran de fondo con un degradado encima, sin rehacer el layout.

### 8.9 Criterios de aceptación adicionales

8. El flujo de cuatro páginas funciona de punta a punta: `/` no nombra el país en su título, el marcador del globo lleva a `/guia/argentina`, y desde ahí se llega a `/guia/argentina/planificar`. Cada página tiene vuelta a la anterior, y un slug inexistente responde 404.
9. Crear un viaje desde la página 3 sigue llevando a `/viaje/{edit_token}` — el pivote no toca el flujo de las secciones 6B a 6D.
10. El bloque de cotizaciones muestra las cuatro con hora de consulta, y con dolarapi caído muestra el mensaje de error sin romper el resto de la página — verificable interceptando la respuesta.
11. El mosaico filtra por región sin recargar la página, y el mapa dibuja un pin por destino que abre su popup al tocarlo. Mosaico y mapa muestran exactamente los mismos destinos, porque salen de la misma lista.
12. Un test valida el contenido de la guía contra su interfaz: exactamente cuatro `highlights`, cada `score` entre 0 y 10, y `factsUpdatedAt` ni en el futuro ni con más de 180 días de antigüedad. El último caso es deliberado: el test falla solo cuando el contenido envejece, y esa falla en CI es el recordatorio de revisarlo. Es la contraparte de haber puesto el contenido en git (8.2).

### 7.1 Qué se ve cuando algo falla

Cuatro rutas leen Supabase en cada request. La pantalla por defecto de Next
—"Application error: a server-side exception has occurred"— está en inglés, no
ofrece salida y no distingue "la base se cayó" de "escribiste mal la URL". Tres
archivos cubren los tres casos: `not-found.tsx` para un slug inexistente,
`error.tsx` para una ruta que revienta, y `global-error.tsx` para el layout
raíz, que reemplaza el `<html>` entero y por eso no puede importar nada del
layout.

Ninguno muestra `error.message`. En producción Next ya lo reemplaza, pero en
desarrollo llega entero, y los errores de escritura incluyen a propósito el
SQLSTATE y el texto de Postgres (6.1): eso es para los logs, no para la
pantalla. Sí se muestra el `digest`, que sirve para encontrar el error en los
logs y no revela nada del esquema.

---

## 9. Página de preparación — "Condiciones actuales"

Va entre la guía y el planificador: `/guia/{slug}/preparar`. La guía dice **a
qué país vas**; ésta dice **cuándo conviene ir y qué clima te toca cada mes**.
Recién después se eligen fechas.

Bloques, en orden: respuesta corta, cuatro datos de resumen, lo que cambia la
valija, la tira de doce meses, los dos gráficos, una tarjeta por mes,
electricidad, y el CTA al planificador.

### 9.1 La temporada sale de los extremos, no del promedio

La primera versión promediaba `temp_min` y `temp_max` de cada mes y miraba
dónde caía ese número. Con eso **los doce meses de Buenos Aires salían
"ideal"**: el promedio de un enero de 30 °C de día y 20 de noche es 25, que es
templado y agradable. El promedio esconde justo lo que hace difícil un mes.
Enero no es incómodo en promedio: es incómodo a las tres de la tarde.

Un mes es **exigente** si CUALQUIERA se cumple: máxima ≥ 28 °C, mínima ≤ 8 °C,
o probabilidad de lluvia ≥ 70 %. Es **ideal** si se cumplen TODOS: máxima
≤ 26 °C, mínima ≥ 10 °C, lluvia < 50 %. El resto es **aceptable**, que es
también lo que devuelve un mes sin datos de temperatura — es la única de las
tres que no promete nada.

Los umbrales viven en el código y no en la base: no son parámetros del destino,
son la definición editorial de qué llamamos un mes incómodo. Cambiarlos cambia
el mensaje de la página, y eso debe ser un diff visible en un PR.

### 9.2 Cada mes abarca varios buckets

Las doce tarjetas salían **idénticas** mientras cada mes se mapeaba a un único
bucket por su temperatura media: los doce caían en `templado`. Se corrigió
llamando a `resolveClimateBuckets` **por mes**, que ya devuelve todos los
buckets que toca el rango. Enero es `templado + calido`; julio, `frio +
templado`.

Para el consejo y los chips hace falta uno solo, y gana el que **obliga a
empacar algo distinto**: `calido` > `frio` > `templado`. "Templado" nunca
obliga a nada.

### 9.3 Los chips se ordenan por bucket principal y después por especificidad

También salían idénticos. Los ítems genéricos —remera, cepillo de dientes—
llevan las tres etiquetas de clima y ganaban siempre por orden de catálogo.
`suggestItemsForBuckets` ordena por **cantidad de `climateTags`, de menor a
mayor**: un short que solo sirve con calor dice algo de enero; un cepillo de
dientes no dice nada de ningún mes. El desempate es el orden del catálogo, que
ya está curado.

Con eso solo no alcanzaba. Un mes abarca varios buckets, y el enero porteño
—20 a 30 °C, templado de noche y cálido de tarde— sugería **"buzo o polar" y
"pantalón largo"**: el buzo está etiquetado `[frio, templado]` y matchea por la
mínima. Peor todavía, el traje de baño quedaba afuera de enero y aparecía en
mayo. La primera clave del orden es entonces **si el ítem matchea el bucket
principal del mes**; recién después la especificidad y el orden de catálogo.

Esto es una vista editorial, no el motor de packing: acá no hay cantidades ni
días. El motor real corre en el planificador, con las fechas del viaje, y esa
diferencia justifica el orden: el planificador lista todo lo que puede llegar a
hacer falta y deja bajar a cero lo que no; acá hay cuatro lugares y hay que
gastarlos en lo que caracteriza al mes.

**Lo que no se toca son las etiquetas del catálogo.** Que el traje de baño sea
`[templado, calido]` y por eso aparezca en un mayo de 11 a 19 °C es discutible,
pero esas etiquetas también las usa el motor de packing: cambiarlas cambia la
lista que se genera para un viaje real. Es una decisión de producto, no un
arreglo de presentación.

**Consecuencia honesta:** con tres buckets hay como mucho tres juegos de chips
distintos, y el año de Buenos Aires usa los tres. Las doce tarjetas siguen
siendo distintas por temperatura y por consejo, pero los chips se repiten en
tres grupos. Inventar variedad ahí sería inventar información.

### 9.4 Dinámica con ISR, no prerenderizada

La guía es estática porque su contenido vive en el repo. Ésta lee cuatro tablas
de Supabase. Con `generateStaticParams`, un hipo de Supabase durante el build no
rompe una request: rompe el deploy entero. Con `revalidate = 3600` rompe un
render, y el siguiente lo reintenta.

La lluvia se dibuja en **porcentaje, no en milímetros**: `climate_profiles` solo
tiene `precip_probability`. Dibujar "mm" sería inventar una unidad que no está
en la base.

### 9.5 Lo que esta página todavía no tiene

La parte 2 (9.6) cubrió consejos de empaque, electrónica, higiene, salud, viajar
con chicos, la tabla de "no lo lleves" y las FAQ. Sigue pendiente: la lista de
ropa **con cantidades** —que es en rigor trabajo del planificador, no de esta
página—, documentos y dinero, y organización de la valija.

### 9.6 Parte 2: la checklist editorial

Cuatro bloques más, después de las tarjetas por mes: consejos en dos columnas
(sí / no), las secciones plegables de checklist, la tabla de "lo que ocupa lugar
y no vale la pena", y las preguntas frecuentes.

**Todo es contenido, no lógica.** Vive en `preparation` junto al resto de la
guía, por lo mismo que el tablero informativo (8.2): un texto que cambia sin que
nadie lo note es peor que un texto viejo. Los tests de `argentina.test.ts` son
la contraparte — lo que en Postgres serían check constraints.

**`<details>` y no un acordeón de React.** Se pliega sin una línea de
JavaScript, llega con teclado y lector de pantalla ya resueltos, y deja que la
página siga siendo un Server Component entero. El único costo es animar la
flecha con CSS en vez de con estado, que es exactamente lo que hay que pagar
por esto.

**La tabla es una `<table>` de verdad**, con `scope="col"` y `scope="row"`. Son
tres columnas que se leen de a filas: un lector de pantalla necesita saber que
el porqué pertenece a lo que se deja. En móvil scrollea horizontal dentro de su
contenedor; apilar cada fila rompería la comparación que la hace útil.

**Las tres columnas de esa tabla son obligatorias.** Decirle a alguien que deje
algo sin decirle con qué reemplazarlo es un consejo a medias, y el tipo no puede
exigir que un string no esté vacío — el test sí.

**El color nunca es el único canal.** La columna "Sí" y la columna "No" llevan
su ícono y su palabra además del verde y el rojo. El tono `warn` de los avisos
se reserva para lo que tiene consecuencias reales —agua no potable, un enchufe
que no entra—, y un test acota cuántas secciones pueden usarlo: si todo grita,
nada grita.

**Los números de las FAQ salen de un contador CSS**, no escritos en el texto:
agregar una pregunta en el medio no obliga a renumerar nada a mano.

**Sobre las cifras.** La referencia de la que salió el diseño trae datos muy
precisos ("el algodón absorbe 7 veces su peso", "los jeans tardan 18 horas en
secar"). Acá no se reprodujeron: no hay forma de verificarlos y un número falso
con dos decimales hace más daño que una frase honesta sin número. El contenido
dice *que* el algodón retiene humedad y tarda en secar, que es lo verdadero y lo
único que cambia una decisión de equipaje.

---

## 10. Segundo corredor: Brasil

### 10.1 Las cotizaciones dejan de ser cuatro

Hasta el MVP, `QUOTE_IDS` era una unión cerrada con las cuatro cotizaciones
argentinas, escrita adentro del motor de presupuesto. Con un solo corredor
alcanzaba. Con dos deja de alcanzar: **Brasil tiene un único tipo de cambio**, y
"blue" o "MEP" no significan nada ahí.

La salida es la que ya se había tomado para los buckets de clima:
`ClimateBucketId` es `string` y no una unión cerrada, justamente para no
necesitar un deploy por cada bucket nuevo. Ahora `QuoteId` es igual, y el
conjunto válido lo declara el corredor en `src/lib/quotes/corridors.ts`.

Se parametrizan tres cosas que antes eran constantes: la cotización por defecto
(blue en Argentina, comercial en Brasil), el conjunto que se espera completo, y
**contra cuál se mide la brecha**. Ese último es un campo y no la constante
"oficial" porque en Brasil vale `null`: con una sola cotización no hay contra
qué comparar, y devolver 0 afirmaría que no hay brecha en lugar de decir que no
hay dato.

### 10.2 Los nombres de los campos también son dato

Cada fuente publica el mismo contenido en otro dialecto: `venta` acá, `venda`
allá; `fechaActualizacion` acá, `fechaAtualizacao` allá. El corredor declara
**cómo se llaman los campos de su fuente**, y un único mapper genérico sirve
para los dos.

No es adorno. Escribir un mapper por fuente duplicaría toda la validación, que
es la parte que importa: rechazar una fecha inválida, rechazar un valor de
compra que no sirve para dividir, ignorar una moneda que el corredor no pidió.
Y tiene una segunda ventaja: corregir un campo mal adivinado es editar tres
strings de un archivo de configuración, no escribir código.

### 10.3 Una fuente que no se pudo verificar

El entorno donde se escribió esto no tiene salida a internet, así que **el
endpoint brasileño está escrito contra su forma documentada y no se pudo probar
contra la API real**.

Eso es aceptable únicamente porque `fetchQuotes` ya devolvía un resultado
explícito en vez de tirar (sección 5): si el dialecto no coincide, la vista dice
"no pudimos traer la cotización" y el resto de la página sigue funcionando. La
lista de equipaje, que no depende de ninguna cotización, no se entera.

Queda pendiente confirmarlo en el primer deploy y, si difiere, corregir
`fields` en `corridors.ts`.

### 10.4 Río de Janeiro: los doce meses piden lo mismo

Contra los buckets sembrados, **los doce meses de Río caen en templado+cálido**.
Ninguno toca `frio`. Eso no es un error de carga: en el mes más fresco del año
la máxima sigue arriba de los 25 grados.

La consecuencia es que las doce tarjetas de "Qué llevar según el mes" muestran
los mismos chips y el mismo consejo. El título promete una variación que en Río
no existe, así que la sección lo dice cuando detecta que todos los meses
comparten el bucket principal, y remite a lo que sí cambia: el calor y la
lluvia, que están en la tira de temporadas y en los gráficos.

Fabricar variedad ahí habría sido inventar información, que es exactamente lo
que 9.3 evitó al ordenar los chips por especificidad.

Lo que sí distingue los meses funciona bien: enero a abril salen **exigentes**
por calor, junio a septiembre salen **ideales**, y el mejor mes es julio. Esa es
la temporada que casi nadie de afuera imagina y la que efectivamente conviene.

### 10.5 Dos marcadores en el globo

Con un solo país el globo se centraba en él y el marcador iba al centro exacto
del canvas, sin cuentas. Con dos hay que proyectar de verdad: proyección
ortográfica, la misma que usa cobe, con el foco en el punto medio de los
destinos y los puntos del otro lado del planeta escondidos.

El radio de la esfera está **medido, no estimado**. Se comparó la posición que
da la fórmula con el centroide de los píxeles naranjas de los marcadores que
dibuja el propio cobe, en un build de producción:

|  | fórmula | cobe | escala |
|---|---|---|---|
| Argentina | −0,1089 −0,1054 | −0,0932 −0,0890 | 0,856 / 0,845 |
| Brasil | 0,1219 0,0980 | 0,1030 0,0839 | 0,845 / 0,856 |

Que la escala salga igual en x y en y es lo que confirma que la proyección es
correcta y que lo único que faltaba era el radio: 0,85 de la mitad del canvas,
porque cobe deja margen para el glow. Con eso aplicado, la diferencia entre el
marcador HTML y el punto de cobe queda por debajo del píxel.

Se corrigió además un desalineamiento que venía del MVP: el enlace centraba el
bloque punto+etiqueta sobre la coordenada, así que el punto quedaba unos píxeles
arriba del país. Con un solo país centrado no se notaba; con dos, el pin
señalaba al lugar equivocado.

### 10.6 El viaje tiene que saber a qué país es

Sumar Brasil destapó un bug silencioso que el MVP no podía tener: `createTrip`
llamaba a `getDestination()` **sin argumento**, o sea que caía siempre al
corredor por defecto. Con un solo país daba exactamente igual. Con dos, armar un
viaje desde la guía de Brasil creaba **un viaje a Buenos Aires**: precios en
pesos, clima argentino y las cuatro cotizaciones argentinas, para alguien que va
a Río.

Reproducido de punta a punta contra un Postgres real antes de tocar nada: el
viaje creado desde `/guia/brasil/planificar` quedaba con `destination_id` de
Buenos Aires.

Lo que lo hace peligroso es que **no falla**. No hay excepción, ni fila
inválida, ni una línea en los logs. La lista sale, el presupuesto suma, y todo
está mal. Un bug que rompe se arregla; uno que miente se descubre viajando.

El corredor ahora viaja desde la URL hasta la base: la ruta se lo pasa al
formulario, el formulario lo manda en un campo oculto —la Server Action no ve la
URL desde la que la llamaron—, `parseTripInput` lo valida **contra el índice de
guías**, y `createTrip` se lo pasa a `getDestination`.

La validación no cae a un default. Un corredor desconocido devuelve un error
legible, porque lo contrario es justamente el bug de arriba con otra cara.

**Sobre el test:** la línea culpable no tenía cobertura, y una mutación lo
confirmó —revertir el arreglo pasaba los 308 tests—. `create.ts` es I/O puro y
no había nada que extraerle sin inventar una capa, así que se mockea el I/O y se
verifica **el argumento** con el que se llama a `getDestination`, que es lo único
que distingue el bug. Para eso `server-only` se reemplaza por un módulo vacío en
Vitest: la guarda real la sigue aplicando el bundler de Next en cada build, que
es donde importa.

---

## 11. El viaje se planifica para una ciudad, no para un país

La guía de Argentina ofrece Ushuaia y la de Brasil ofrece Manaos, pero el
planificador calculaba todo con la ciudad base del corredor. Alguien que iba a
Ushuaia en julio recibía la lista de Buenos Aires.

Los dos motores ya estaban listos: `climate_profiles` y `products` son por
`destination_id` desde la primera migración, y `packing_catalog` es global.
Faltaban las ciudades, y que el viaje supiera cuál.

### 11.1 Una ciudad base explícita por corredor

`getDestination(corredor)` hacía `.limit(1)` **sin order by**. Con una sola
ciudad por corredor funcionaba por accidente; con varias, Postgres puede
devolver cualquiera y hasta una distinta entre dos requests, así que la página
de preparación habría empezado a mostrar el clima de una ciudad al azar.

Ahora hay una columna `is_base` con un índice único parcial por corredor: es la
clase de invariante que un check no puede expresar y una convención no puede
sostener.

### 11.2 El bucket 'templado' era demasiado ancho

Elegir la ciudad arregló la mitad del problema. La otra mitad apareció al mirar
la lista de Río en enero: **traía buzo polar y botas de trekking** con 30 grados.

La causa es que `templado` iba de 10 a 25 °C, o sea que una noche de 23 en Río
caía en el mismo cajón que una de 12 en Bariloche, y esos ítems están
etiquetados `[frio, templado]`.

La solución **no toca una línea de código**, y eso es exactamente lo que el
diseño prometía: los buckets viven en `climate_thresholds` "para ser
parametrizables sin tocar código" (sección 4). Esta migración cobra esa promesa.

| bucket | hasta | qué pide |
|---|---|---|
| `frio` | 10 °C | abrigo de verdad |
| `fresco` | 18 °C | capas: buzo, pantalón largo, botas |
| `templado` | 25 °C | manga corta cómoda |
| `calido` | — | ropa de calor |

Verificado contra el catálogo y las ciudades sembradas:

| ciudad y mes | rango | resultado |
|---|---|---|
| Ushuaia, julio | −1,3 / 3,9 | abrigo, cero playa |
| Ushuaia, enero | 5,9 / 14,5 | sigue sin ojotas ni protector |
| Río, enero | 23,3 / 30,2 | cero abrigo |
| Manaos, todo el año | ~23 / ~31 | nunca abrigo |
| Salta, julio | 4,6 / 21,9 | campera **y** remera |

Salta con las dos cosas no es un error: amanece helando y a la tarde hay 22
grados. Recortar una de las dos puntas sería perder información real.

### 11.3 Precios por ciudad, con un factor y no con ciento sesenta números

Cada ciudad nueva necesita dieciocho precios. Tipearlos a mano son ciento
sesenta números inventados de a uno; un factor por ciudad es **una** estimación
explícita en vez de dieciocho implícitas, y se corrige en un solo lugar.

La simplificación que asume: que todo cuesta proporcionalmente lo mismo. Es
falso en el detalle —el alojamiento en Ushuaia se dispara más que un boleto de
colectivo— y está bien para lo que la app promete, que es un orden de magnitud
con la fecha de carga a la vista. Cuando haya precios relevados por ciudad,
reemplazan estas filas por id.

### 11.4 "Condiciones actuales" también es por ciudad

Con el selector en el planificador quedó un salto raro: se leía "el mejor mes es
mayo" pensando en Ushuaia, y era Buenos Aires. La página pasa a ser por ciudad,
con la ciudad en la URL: `/guia/argentina/preparar?ciudad=ushuaia`.

**En la URL y no en estado de cliente**, porque la elección tiene que poder
compartirse. Un `<select>` con estado convertiría un link en algo que no se
puede mandar por WhatsApp. Por eso las ciudades son enlaces, y por eso hay una
columna `slug`: un uuid en la URL no dice nada y además expone un id interno.

Un slug desconocido **no es 404**: la página sigue siendo la del país y muestra
su ciudad base, que es más útil que un error por una letra mal tipeada. Lo que
sí hace es marcar cuál está mirando, para no mentir sobre de qué habla.

La ciudad viaja al planificador en el enlace final, así que quien acaba de leer
el año de Ushuaia no tiene que volver a elegirla.

**Efecto colateral buscado:** las doce tarjetas de Brasil eran idénticas porque
Río pide lo mismo todo el año. Por ciudad, São Paulo y Florianópolis sí varían.
Río sigue siendo uniforme, que es la verdad sobre Río.

### 11.5 "Ninguno" no es "s/d"

Ushuaia y Manaos tienen los doce meses cargados y **ningún mes ideal**: en
Ushuaia la mínima nunca llega a 10 °C, en Manaos la máxima nunca baja de 30. El
resumen mostraba "s/d" en el mejor mes, o sea afirmaba que falta información que
sí está.

`summarizeYear` devuelve ahora `hasData`, que separa las dos cosas. Con datos y
sin mes ideal dice "Ninguno ideal"; sin datos dice "s/d".

**No se elige un "mejor entre los no ideales".** Cualquier ranking de eso sería
inventado, y la tira de temporadas y los gráficos están justo abajo para que el
lector decida con los números a la vista.

### 10.7 La fuente brasileña, ya verificada

La respuesta real de `br.dolarapi.com/v1/cotacoes/usd` es un objeto suelto:

```json
{"moeda":"USD","nome":"Dólar","compra":5.1106,"venda":5.1114,
 "fechoAnterior":5.0852,"dataAtualizacao":"2023-10-01T21:59:59.000Z"}
```

De los cuatro nombres de campo que hubo que adivinar, **tres estaban bien y uno
no**: la fecha es `dataAtualizacao`, no `fechaAtualizacao`. El error fue mezclar
el "fecha" del español con el portugués, que dice "data". Corregirlo fue una
palabra, que es exactamente lo que 10.2 prometía al hacer de los nombres de
campo configuración en vez de código.

El payload real pasa a ser el fixture de los tests. No es un detalle: un fixture
inventado habría confirmado la adivinanza en vez de contradecirla.

### 10.8 Lo que la segunda moneda destapó en la UI

Tres textos y un formato estaban escritos para un solo país:

**"Las cuatro cotizaciones, ahora"**, escrito a mano, en una guía que tiene una.
Contradecía además el número del hero, que dice "1 cotización, no cuatro" dos
pantallas más arriba. El plural también cambia la bajada: "el mismo gasto cambia
de tamaño según cuál mires" no significa nada cuando no hay entre cuáles elegir.

**El valor, formateado siempre en pesos argentinos y sin decimales.** Con
Argentina se veía bien —`$ 1.220`—; con Brasil destruía el dato: 5,1114 salía
como **`$ 5`**, con el símbolo equivocado y sin la parte que importa. En una
moneda cuyo valor entero es 5, redondear al entero no es redondear, es borrar.
`formatMoney` ya resolvía esto y ya estaba testeada: el formateador local era
una copia peor.

**"vs. oficial"** en la brecha, que solo es cierto en Argentina.

**"hora de Buenos Aires"** en el sello. Para Brasil la hora coincide —los dos
husos son UTC−3 y ninguno de los dos países usa horario de verano— pero la
etiqueta afirmaba una ciudad que no era la del destino. Que coincida hoy no la
hace cierta, así que el huso y su nombre pasan a ser parte del corredor.

Ninguno de los cuatro rompía nada ni fallaba un test. Aparecieron mirando la
página renderizada con la moneda nueva.

### 11.6 Los dieciocho destinos son planificables

El mosaico de cada guía ofrece nueve lugares y la base tenía seis y cinco. Un
lector veía Fernando de Noronha o El Chaltén, hacía click en armar el viaje y
recibía la lista de la ciudad base. No fallaba: salía mal, que es el modo de
error que este proyecto viene persiguiendo desde la sección 11.

Se suman las siete que faltaban —El Calafate, El Chaltén y Puerto Madryn;
Recife, Fernando de Noronha, Foz do Iguaçu y el Pantanal— con sus doce meses de
clima y sus dieciocho precios, y los dos países quedan simétricos: nueve
ciudades, 108 filas de clima y 162 precios cada uno.

**El id del destino en el contenido ES su slug en la base.** Había cuatro que no
coincidían (`rio` contra `rio-de-janeiro`, `manaus` contra `manaos`, y los dos
Iguazú). Una sola forma de nombrar cada ciudad es lo que permite que el mosaico
enlace directo sin una tabla de traducción.

**El mosaico ahora lleva a algún lado.** Cada tarjeta tiene un enlace a las
condiciones de esa ciudad; antes era un catálogo que obligaba a volver a buscar
el destino en el selector del planificador.

**El invariante se testea leyendo los dos archivos.** Que una guía prometa un
destino que la base no tiene cruza contenido y migraciones, así que el test lee
el SQL y compara. No es elegante leer SQL desde un test de TypeScript, pero es
la única forma de que la promesa y el dato no se separen sin que nadie se
entere. El test incluye una guarda contra sí mismo: si el regex dejara de
encontrar filas, pasaría vacío y no probaría nada.

## 12. Tercer corredor: Bolivia

Bolivia entra sin tocar ninguna abstracción: una guía nueva en
`src/content/guias/bolivia.ts`, un corredor en el registro de cotizaciones y una
migración de datos. Que sumar un país sea eso —y no un refactor— es el resultado
de las secciones 10 y 11, que fue cuando el código dejó de asumir que existía un
solo destino.

Nueve ciudades con La Paz de base, 108 filas de clima y 162 precios en
bolivianos, igual que los otros dos. Los tres países quedan simétricos.

### 12.1 Acá la valija no la decide la estación, la decide la altura

En Argentina el eje es el invierno contra el verano; en Brasil, cuánto calor y
cuánta lluvia. En Bolivia ninguno de los dos sirve: **La Paz tiene casi la misma
temperatura los doce meses del año** —unos 14 de máxima, cerca de cero de
mínima— así que se empaca igual en enero que en julio. Lo que cambia entre un
mes y otro es la lluvia.

Lo que sí cambia, y muchísimo, es a qué altura se duerme. Contra los umbrales
sembrados:

| Ciudad | Altura | Mes | Rango | Buckets |
|---|---|---|---|---|
| Salar de Uyuni | 3.660 m | julio | −8,5 / 16,0 | frio + fresco |
| Potosí | 4.000 m | junio | −4,8 / 14,6 | frio + fresco |
| La Paz | 3.600 m | cualquiera | ~0 / ~14 | frio + fresco |
| Rurrenabaque | 200 m | enero | 22,4 / 31,0 | templado + cálido |

Un viaje de dos semanas por Bolivia puede pedir campera de abrigo **y** ojotas, y
eso no es un error de carga. La página renderizada lo confirma: Uyuni sale con
campera y sin nada de playa, Rurrenabaque con ojotas y remera y sin abrigo. Es
exactamente el motor de la sección 11 aplicado a un país donde el eje es
vertical en vez de estacional.

### 12.2 Un corredor sin fuente de cotizaciones, a propósito

Bolivia declara sus dos cotizaciones —oficial y paralelo, con el paralelo por
defecto y la brecha contra el oficial— pero **`source: null`**. No es un
descuido: adivinar el dialecto de una API es lo que costó el `fechaAtualizacao`
de Brasil, que era `dataAtualizacao`. El corredor queda declarado y la fuente se
conecta cuando se pueda verificar contra una respuesta real.

`fetchQuotes` ya devolvía un resultado explícito para ese caso, pero la vista
decía _"no pudimos traer las cotizaciones ahora"_, que es una afirmación falsa:
invita a recargar esperando un número que no va a aparecer. Ahora distingue los
dos casos y dice que todavía no hay fuente para esa moneda. El resto de la guía
—que es casi toda— sigue funcionando.

### 12.3 El test de destinos planificables dejó de nombrar países

El regex que lee las migraciones tenía `(?:argentina|brasil)` escrito a mano, así
que un corredor nuevo pasaba el test sin que sus filas se contaran. Pasa a
aceptar cualquier corredor y la guarda contra sí mismo sube de 18 a 27 slugs.
Un test que hay que editar para cada país es un test que tarde o temprano se
queda atrás del código que vigila.

### 12.4 Quince ciudades, y el selector agrupado por región

Los nueve destinos originales cubrían altiplano, valles, oriente y Amazonía,
pero se salteaban los **Yungas**, que es justamente donde el país hace su truco:
de La Paz a Coroico hay tres horas de bajada y 1.850 metros de diferencia. La
guía afirmaba que acá manda la altura y no tenía cómo demostrarlo.

Se suman seis —Oruro, Coroico, Sorata, Torotoro, Tupiza y Concepción— con sus
doce meses de clima y sus dieciocho precios cada una. Bolivia queda con quince
ciudades y cinco regiones. Que tenga más que Argentina y Brasil no rompe nada:
la simetría que importa no es el número de ciudades sino que **todo destino que
una guía muestra se pueda planificar**, y eso lo vigila un test.

La demostración, en la página renderizada:

| Ciudad | Altura | Rango del año | Qué manda a la valija |
|---|---|---|---|
| Potosí | 4.000 m | −5° a 18° | campera de abrigo, cero playa |
| Coroico | 1.750 m | 11° a 26° | ojotas y remera, sin abrigo |

Dos ciudades del mismo país, a medio día de viaje, con listas opuestas.

**El selector de ciudad pasa a agruparse por región.** Con seis ciudades una
tira de chips se leía de un vistazo; con quince era un bloque de texto en el que
no se encontraba nada. Y en Bolivia la región no es decoración: si alguien duda
entre Coroico y Potosí, saber que una es Yungas y la otra Altiplano le dice más
que los dos nombres juntos.

El agrupado tiene dos decisiones que el test fija:

**No se impone un orden de regiones.** Las ciudades llegan con la base primero y
después alfabéticas, así que las regiones salen en el orden de su primera
ciudad. Cualquier ranking de regiones sería inventado, y la región de la ciudad
base tiene que quedar arriba porque es la que la página muestra por defecto.

**Una ciudad que el contenido todavía no nombró no se esconde**: cae en un grupo
sin título al final. Descartarla sería el error de la sección 11 al revés — un
destino planificable que desaparece del selector porque falta una línea de
contenido editorial.
