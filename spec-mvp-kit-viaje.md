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

**Sobre el aviso de cookies:** Vercel Web Analytics no usa cookies — identifica visitas con un hash generado del request entrante, sin datos que las reidentifiquen, y no guarda nada de forma permanente. Al no registrar información personalmente identificable, se puede usar sin banners de consentimiento de cookies. Si es la única herramienta activa (sin Google Analytics ni terceros en el plan), un banner "Aceptar todo / Personalizar" no tiene nada que consentir — no se setea ninguna cookie. Lo que sí conviene, y es mucho más simple: un aviso de una sola línea, sin lógica de consent management real ("Usamos analytics sin cookies para saber qué se usa. No vendemos datos ni mostramos anuncios."). Si preferís igual el patrón completo de consentimiento granular por si más adelante sumás algo que sí use cookies, decímelo y lo diseño así desde ya — pero con el plan de hoy, sería resolver un problema que no tenés. (Desde la sección 17 el sitio pone una cookie: la del aeropuerto de salida, y solo si alguien lo elige con un botón. Ver 17.3.)

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

> **Actualizado por la sección 14.12:** hay un segundo tipo de bucket, el de
> lluvia, en su propia tabla (`precip_thresholds`). Lo etiquetado con un bucket
> de lluvia entra en cualquier tipo de viaje: es la única excepción al paso 3.

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

## 13. América Latina completa

Dieciséis países nuevos, y el producto pasa de tres corredores a diecinueve:
Chile, Uruguay, Paraguay, Perú, Ecuador, Colombia y Venezuela en Sudamérica;
México, Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica y Panamá en
México y Centroamérica; Cuba y República Dominicana en el Caribe.

Cada uno con la misma estructura que Argentina, Brasil y Bolivia: una guía
completa, nueve ciudades con sus doce meses de clima y sus dieciocho precios, y
su corredor de cotizaciones. Quedan afuera Haití, Belice, Guyana, Surinam y
Puerto Rico: la app está escrita en español rioplatense para países
hispanohablantes más Brasil, y Puerto Rico es territorio de Estados Unidos.

### 13.1 Antes de sumar países, lo que asumía que había pocos

La primera tarea no fue cargar países sino buscar qué se rompía con muchos.
Aparecieron bugs que ya estaban en producción:

- Las guías de Brasil y Bolivia decían **"Cómo puntúa Argentina"**: el título
  estaba escrito a mano en el componente.
- El mapa de todas las guías decía "Las distancias de Argentina no se
  entienden en una lista".
- El selector del presupuesto de Brasil mostraba la cotización 5,11 como
  **"5"**: `formatRate` redondeaba al entero sin mirar el tamaño del número.
- El aviso de conversión decía "el total en pesos" en cualquier país.
- La portada decía "2 países" con tres.

Y lo que habría salido mal con diecinueve: `formatMoney` ponía centavos a toda
moneda que no fuera ARS —los precios en guaraníes habrían salido con ",00"—, la
portada armaba un botón por país en el hero, y las etiquetas del globo se
encimaban con los siete países de Centroamérica a pocos grados entre sí.

### 13.2 Países dolarizados

Ecuador, El Salvador y Panamá cobran en dólares. Un corredor es dolarizado
cuando su moneda local **es** la del resultado; no hay un flag aparte que pueda
contradecirlo. `fetchQuotes` no consulta nada y lo devuelve como éxito, la guía
dice "acá se paga en dólares" y el presupuesto, que el total ya está en la
moneda que vas a usar. Los precios llevan centavos y las ciudades derivadas se
redondean al centavo: redondear a la unidad convertiría un café de 2,50 en uno
de 2 o de 3.

### 13.3 Venezuela y Cuba: moneda propia, precios en dólares

Los dos tienen moneda propia y dos cotizaciones —la tesis de Argentina llevada
más lejos—, pero sus precios se cargan en dólares: es como se le cobra a un
viajero, y con su inflación un precio en bolívares o en pesos cubanos quedaría
viejo en semanas. El corredor sigue en VES o CUP, porque eso es lo que la guía
explica, y `budgetConversionStatus` resuelve el cruce: si los precios ya están
en la moneda del resultado no hay nada que convertir, aunque algún día el
corredor tenga fuente.

### 13.4 Ninguna fuente de cotizaciones nueva

La red de la sesión en que se cargaron los países bloqueaba dolarapi, así que
ninguna fuente se pudo verificar contra una respuesta real. Por la regla del
`fechaAtualizacao` de Brasil, los dieciséis van con `source: null`. Conectar
cualquiera es completar `source` en `corridors.ts` con un payload real a la
vista.

### 13.5 La ciudad base es la capital, con una excepción

En todos los países nuevos la base es la capital, salvo Guatemala: el
aeropuerto está en Ciudad de Guatemala pero casi todos los viajeros duermen en
Antigua, a una hora, y calcular con el clima y los precios de la capital habría
sido planificar para el lugar equivocado. Cambiar una base es mover `is_base` en
una migración.

### 13.6 Las migraciones se generaron, no se tipearon

Ciento cuarenta y cuatro ciudades con doce meses cada una son 1.728 filas de
clima. Se escribieron como datos en un generador que valida antes de emitir el
SQL —nueve ciudades, doce meses, mínima no mayor que la máxima, una sola base,
dieciocho productos sin nombres repetidos— y que calcula los comentarios de
cada migración con los mismos umbrales que usa el motor, en vez de afirmarlos a
mano. El SQL que entra al repo es el resultado, revisable como cualquier otro.

Los nombres de los productos de atracciones pasan a ser genéricos —"Entrada a
la atracción principal", "Visita guiada"— porque las ocho ciudades derivadas
heredan los nombres de la base, y "Entrada al Cristo Redentor" en Manaos no
tiene sentido.

### 13.7 Un test que estaba mal

El test de destinos exigía ids únicos entre todas las guías, con el argumento de
que dos iguales harían ambiguo el enlace del mosaico. No era cierto: el enlace
lleva el país, y la base declara el slug único por corredor. Con diecinueve
países la premisa chocó con la realidad —hay una Concepción en Bolivia y otra en
Paraguay, una Mérida en México y otra en Venezuela—, y renombrar ciudades para
conformar al test habría empeorado las URLs. Ahora verifica lo que sí
desambigua: que no se repitan dentro de un mismo país.

Dos tests usaban "uruguay" como ejemplo de corredor inexistente. Uno empezó a
fallar; el otro siguió pasando **por casualidad**, porque el mensaje de "sin
fuente" también contenía la palabra. Los dos usan ahora un corredor inventado.

### 13.8 Verificado en la app, no solo en los tests

Contra un Postgres con las treinta migraciones aplicadas desde cero: las 215
páginas —diecinueve guías, diecinueve planificadores y las condiciones de cada
una de las 177 ciudades— responden sin error. Y con viajes armados en el
planificador de punta a punta: Puno, Puerto Natales, San Cristóbal de las Casas
y Constanza salen con campera de abrigo; Iquitos, Punta Cana y Los Roques sin
nada de abrigo. Los totales del presupuesto, sumando cantidades desde la
interfaz y recargando, dan exacto: US$ 158,00 en Galápagos, CLP 84.000 en
Santiago, PYG 440.000 en Asunción.

## 14. Asia: la base

Antes del primer país de Asia, lo que el modelo tenía que saber expresar. Es el
mismo paso que se dio antes de Europa (zonas, continentes, monedas con
centavos), más lo que Asia trae de nuevo. El procedimiento país por país sigue
siendo [`docs/agregar-un-pais.md`](docs/agregar-un-pais.md).

### 14.1 Zonas

Cinco, de la división de la ONU (M49), y en la portada de oeste a este, a
continuación de Europa del Este: **Asia Occidental, Asia Central, Asia del Sur,
Sudeste Asiático y Asia Oriental**. La portada cuenta por continente ("… en
Asia") y no muestra una zona sin países.

Dos países que la ONU pone en Asia Occidental ya están en Europa del Sur y ahí
se quedan: Chipre, que es Unión Europea, y Turquía, que se viaja como parte de
Europa. El Cáucaso —Georgia, Armenia, Azerbaiyán— va en Asia Occidental, como
dice la ONU.

### 14.2 Alcance

Las guías no dan alertas de seguridad: hablan de precauciones normales. Un país
al que los gobiernos desaconsejan viajar en todo su territorio no admite una
guía así sin mentir, así que **queda afuera mientras eso dure**: Afganistán,
Corea del Norte, Siria y Yemen.

Se decide en la tanda de cada uno, mirando la situación de ese momento: Irak,
Irán, Israel y Palestina, Líbano, Myanmar y Pakistán. La pregunta es la misma
para todos: si una guía con precauciones normales es honesta.

> **Decidido en la sección 14.11:** entran los seis, con aviso, como Venezuela.

Hong Kong, Macao y Taiwán no son países en el sentido del resto de la lista,
pero tienen moneda y reglas de entrada propias, que es exactamente lo que el
modelo llama un corredor. Puerto Rico quedó afuera porque comparte moneda y
frontera con Estados Unidos; estos tres tienen las suyas. Queda por decidir.

> **Decidido en la sección 14.11:** entran los tres, y la portada pasa a decir
> "destinos".

Primera tanda, seis como en Europa, cargada el 2026-10-10: Japón, Corea del Sur,
China, Tailandia, Vietnam e India (sección 14.6).

### 14.3 Monedas

La regla de los centavos, que en Europa se decidió moneda por moneda, quedó
escrita: **una moneda lleva centavos si su unidad vale más de medio dólar.**
Explica todas las decisiones anteriores y, aplicada a Asia, suma siete: los
dólares de Singapur y de Brunéi, el manat azerí y los dinares y riales de
Kuwait, Baréin, Omán y Jordania. El dírham, el riyal saudí y el catarí, el
shekel, el ringgit y el lari valen un cuarto de dólar o menos y van enteros,
como el zloty. Las siete ya están en `MONEDAS_CON_CENTAVOS` y en el generador,
y un test exige que las dos listas coincidan: antes eran dos copias que había
que acordarse de tocar juntas.

Las cotizaciones menores que uno —un dólar vale 0,307 dinares kuwaitíes, 0,86
euros— se muestran con tres decimales. Con dos, "0,31" borra la diferencia
entre un día y otro, que es el mismo error que tuvo Brasil con "5" en vez de
"5,11".

Timor Oriental es dolarizado. Camboya y Maldivas son, probablemente, el caso de
Venezuela y Cuba: moneda propia, pero al viajero se le cobra en dólares.

### 14.4 Lo que se corrigió antes de sumar países

El catálogo de equipaje decía **"Adaptador de enchufe tipo I"** en la lista de
todos los países. Era cierto cuando el único destino era Buenos Aires; con 58,
era falso en casi todos, y en Asia lo habría sido en todos menos China. Ahora
dice "adaptador universal", y el tipo de cada país sigue en la guía
(`preparation.plug`), donde ya estaba.

Los ids de destino de Asia arrancan en `cc = 50`. Europa usó del `10` al `46`
y del `47` al `4f` queda para lo que falte de Europa.

### 14.5 Lo que queda abierto

**El globo de la portada.** Mira al punto medio de los destinos, y una esfera
vista de frente muestra un hemisferio. Hoy el punto medio cae en el Atlántico y
se ven los 58 países. Simulado con unos cuarenta países de Asia, se corre a
Libia y quedan del otro lado dieciséis de los diecinueve países de América,
además de Japón, Indonesia y Timor. La lista de países debajo del hero sigue
siendo completa, así que nada se vuelve inalcanzable, pero qué tiene que
mostrar el globo —girar, dejarse arrastrar, un continente por vez— es una
decisión de diseño, y se toma cuando se toque el diseño.

> **Resuelto en la sección 14.9:** el globo gira y se arrastra.

**La lluvia no entra en la lista de equipaje.** El motor elige por bucket de
temperatura y por tipo de viaje; el paraguas y el impermeable dependen del
tipo de viaje, no de `precip_probability`. En América y Europa casi no se
notaba. En Asia sí: un viaje de playa a Bali en enero, en pleno monzón, sale
sin nada para la lluvia. Que la lluvia sume ítems es un cambio del motor
(sección 4), no de datos: no se resuelve cargando países, y conviene decidirlo
antes de que los primeros de Asia lo dejen a la vista.

> **Resuelto en la sección 14.12:** la lluvia es un bucket propio, y el
> paraguas y el impermeable entran en cualquier viaje que toque un mes de
> lluvia.

### 14.6 Primera tanda: Japón, Corea del Sur, China, Tailandia, Vietnam e India

Seis países con la misma forma que el resto —guía completa, nueve ciudades con
sus doce meses de clima y dieciocho precios— y una cotización contra el dólar
cada uno, sin fuente todavía. Lo que cada uno le enseñó al modelo:

- **Japón** es el único país del sitio con enchufes de 100 V: es el dato que
  la portada muestra al lado del nombre. La propina no existe, así que su
  precio es cero y el nombre del ítem lo dice.
- **Corea del Sur** tiene una autorización previa (K-ETA) que se suspendió por
  temporadas para algunos pasaportes; la guía explica el mecanismo y manda a
  verificar. Los mapas que hay que llevar son los locales.
- **China** cambia la preparación antes que la valija: se paga con el celular
  (Alipay o WeChat Pay, que aceptan tarjetas extranjeras) y muchos servicios
  occidentales no funcionan con una conexión china. Harbin es la ciudad más
  fría del planificador.
- **Tailandia** es el primer país donde el clima se lee en la lluvia: todas
  sus ciudades son cálidas, ninguna llega a frío, y Ko Samui tiene el monzón
  en otros meses que Phuket.
- **Vietnam** tiene tres climas en un país y la lluvia del centro llega en
  otoño, cuando el sur ya está seco.
- **India** tiene el calor más fuerte del sitio antes del monzón y, en Leh, a
  más de tres mil metros, su ciudad más fría. Los nombres van en castellano
  (Bombay, Benarés) y la guía menciona una vez el otro nombre.

El primer dato destacado de cada guía es el que la portada muestra al lado del
país, y se lee como una frase: "100 V en los enchufes", "+40 °C en Delhi, Agra
y Benarés en mayo". En la primera versión decía "Taj Mahal el mausoleo de
mármol de Agra"; se reordenó para que diga lo que más cambia cómo se prepara
el viaje.

Verificado contra una base virgen —79 migraciones, smoke de RLS e
integridad— y con la app levantada: 72 rutas sin fallas, ciudades de clima
opuesto con listas opuestas (Sapporo, Harbin, Sapa y Leh con abrigo; Okinawa,
Phuket y Goa sin él) y doce totales de presupuesto exactos, de JPY 17.600 en
Tokio a VND 1.150.000 en Phu Quoc.

### 14.7 Segunda tanda: el Sudeste Asiático

Indonesia, Malasia, Singapur, Filipinas, Camboya y Laos. Con la primera tanda,
el Sudeste Asiático queda completo salvo Brunéi, Timor Oriental y Myanmar (que
se decide aparte, sección 14.2). Lo nuevo para el modelo:

- **Camboya** es el caso de Venezuela y Cuba sin inflación: al viajero se le
  cobra en dólares y el riel es el vuelto. El corredor queda en rieles y los
  precios en USD, con centavos; el presupuesto dice "los precios de este
  destino están en dólares" y no convierte. No hizo falta tocar código:
  `budgetConversionStatus` ya resolvía el cruce.
- **Singapur** es una ciudad-estado: sus nueve "ciudades" son barrios, como las
  parroquias de Andorra. El clima es el mismo en todos y cambia el precio. Es
  la primera moneda de Asia con centavos que se usa de verdad.
- **La ciudad base no es la capital** en Indonesia (Ubud, en Bali), Camboya
  (Siem Reap, por Angkor) y Laos (Luang Prabang): es donde duerme quien viaja,
  como Antigua en Guatemala.
- **El hemisferio sur llega a Asia**: Indonesia tiene la estación seca de
  abril a octubre, y el mirador del Bromo, a más de dos mil metros, pide
  abrigo en julio.
- **El monzón cambia de costa** en Malasia y en Filipinas: las islas del este
  de la península cierran de noviembre a febrero, y Siargao tiene la lluvia
  cuando Palawan está seco.
- **Los restos de bombas de la guerra**, en Camboya y Laos, se dicen como la
  precaución práctica que son —seguir los senderos marcados— y no como alerta.

El globo de la portada sigue el problema de la sección 14.5, y ahora más: con
setenta países el punto medio cae en el norte de África y quedan del otro lado
nueve marcadores, tres de ellos de América (Chile, Perú y México).

### 14.8 Tercera tanda: el Golfo, Jordania, Nepal y Sri Lanka

Emiratos Árabes Unidos, Catar, Omán, Jordania, Nepal y Sri Lanka. Lo nuevo:

- **El calor del Golfo pasó los topes del generador.** `generar.py` rechazaba
  mínimas de 30 °C o más y máximas de 45 °C o más, pensando en un dígito de más
  por error. En Dubái las noches de agosto no bajan de treinta y en Liwa la
  máxima de julio llega a 45: los topes pasaron a -40/36 y -30/50, que siguen
  cazando un 300 tipeado por 30,0. Liwa es ahora la ciudad más calurosa del
  sitio.
- **Las primeras monedas de Asia con centavos en uso**, además del dólar de
  Singapur: el rial omaní y el dinar jordano, que la base para Asia ya había
  dejado en `MONEDAS_CON_CENTAVOS`. No hubo que tocar nada para que salieran
  bien.
- **Catar es casi una ciudad-estado**, como Singapur: sus nueve "ciudades" son
  barrios de Doha y los pocos lugares del resto de la península.
- **Omán se recorre en auto**: el ítem de transporte diario es "auto de
  alquiler, día". Salalah tiene el monzón (khareef) en julio, cuando el resto
  del Golfo está más caluroso.
- **Jordania tiene invierno**: Amán y Petra, en la meseta, pueden tener nieve,
  y es el dato que va en la portada.
- **Nepal es la altura**: Namche Bazar, a casi tres mil quinientos metros,
  pasa el invierno bajo cero, y el mal de altura y las reglas de trekking se
  dicen como preparación.
- **Sri Lanka tiene dos monzones** y siempre una costa seca.
- La base de Emiratos es Dubái y no Abu Dabi, por la misma razón que Antigua.

El globo de la portada (sección 14.5) cruzó un límite con esta tanda: con
setenta y seis países el punto medio cae en el Sahara y quedan del otro lado
doce marcadores, entre ellos **Argentina**, Chile, Perú, México y tres países
de Centroamérica. Todos siguen en la lista de países, pero el globo de un
sitio para viajeros de América Latina ya no muestra la mayor parte de América.

### 14.9 El globo gira

Con setenta y seis países, un globo quieto ya no podía mostrarlos (sección
14.8). Se eligió que gire, de las tres opciones de la sección 14.5. Un
continente por vez obligaba a sumar un control de pestañas al hero.

- **Una vuelta por minuto**, de oeste a este como la Tierra. Más rápido no da
  tiempo a leer los nombres; más lento parece quieto.
- **Se detiene cuando hace falta**, que era el motivo por el que no giraba. Se
  detiene apenas entra el mouse al globo, para que el punto al que apuntás no
  se mueva, y cuando un marcador recibe el foco con Tab. En pantallas táctiles
  no hay "encima": ahí sigue girando.
- **Se arrastra** con el mouse o con el dedo, en la dirección de la mano. En el
  teléfono, arrastrar de costado gira el globo y arrastrar para arriba o para
  abajo sigue scrolleando la página (`touch-action: pan-y`).
- **Con `prefers-reduced-motion`** el globo no gira solo, pero se puede
  arrastrar igual.
- **Arranca mirando al Atlántico**, en el promedio de longitud de América y
  Europa. Desde ahí se ven los 58 países de los dos continentes, de México a
  Chipre, Argentina incluida. Es también lo que ve quien entra sin JavaScript.
- **La inclinación no es el promedio de latitud**, que caía en 29° norte y
  hacía girar al Río de la Plata a 64° del centro, pegado al borde. Es el punto
  medio entre el marcador más al norte (Islandia) y el más al sur (Uruguay): los
  dos pasan a unos 50° del centro.
- **Fuera de pantalla no dibuja**: un `IntersectionObserver` apaga el bucle.
  Cuando el globo se detiene, el canvas queda con el último frame.

Los marcadores siguen siendo enlaces HTML encima del canvas. En cada frame se
reubican con la misma proyección que dibuja cobe, escribiendo el estilo
directo y sin un render de React por frame. Un marcador del lado de atrás
queda con `visibility: hidden`: no se ve, no se clickea y no se llega con Tab.
La lista de países debajo del hero sigue siendo la forma de llegar a
cualquier país sin depender del globo.

### 14.10 Cuarta tanda: el Cáucaso y Asia Central

Georgia, Armenia, Azerbaiyán, Uzbekistán, Kazajistán y Kirguistán. Con esta
tanda la zona Asia Central tiene países y aparece en la portada; el Cáucaso va
en Asia Occidental, como decidió la sección 14.1. Lo nuevo:

- **Reglas de entrada que no son la visa.** Georgia pide por ley, desde 2024,
  un seguro médico por toda la estadía. Uzbekistán registra cada noche: los
  hoteles lo hacen solos y dan un comprobante que hay que guardar. Armenia
  tiene cerradas las fronteras con Turquía y con Azerbaiyán, y se llega en
  avión o desde Georgia o Irán. Azerbaiyán pide visa electrónica a casi todos,
  y sus fronteras terrestres estuvieron cerradas a los viajeros desde 2020: se
  dice como dato a verificar, no como regla fija.
- **Zonas que no forman parte del viaje.** Abjasia y Osetia del Sur en
  Georgia, Karabaj en Azerbaiyán y las zonas de frontera de montaña en
  Kirguistán se nombran como Transnistria en Moldavia: un dato de entrada, sin
  tono de alerta, y ninguna ciudad del planificador está ahí. Por lo mismo,
  ninguna ciudad de Armenia queda sobre la frontera con Azerbaiyán.
- **Song-Kol es la ciudad más fría del sitio**, con −24 °C de mínima en enero,
  apenas por debajo de Harbin. Sus yurtas abren de junio a septiembre, y el
  consejo de clima frío de Kirguistán dice que en pleno invierno el lago está
  congelado y sin campamentos, no solo que hace frío. Astaná y Burabay rondan
  los veinte bajo cero.
- **La base de Kazajistán es Almaty y no Astaná**, por la misma razón que Dubái
  en Emiratos: es por donde entra casi todo el que viaja, y desde donde se sale
  a las montañas, los lagos y los cañones.
- **El manat azerí es la primera moneda de la tanda con centavos**, y ya estaba
  en `MONEDAS_CON_CENTAVOS` desde la base para Asia. El lari, el dram, el som
  uzbeko, el tenge y el som kirguís van enteros; el som uzbeko, con montos de
  cientos de miles, como el dong o el kip.
- **Cuatro estaciones de esquí**: Gudauri, Tsaghkadzor, Shahdag y Shymbulak,
  sobre Almaty. Salvo Tsaghkadzor, que cuesta como Ereván, tienen el factor de
  precio más alto de su país.

Los ids de destino van del `62` al `67`.

### 14.11 Lo que quedaba de Asia

Veinte destinos en una tanda, la última de Asia:

- **Sin decisión pendiente:** Arabia Saudita, Kuwait, Baréin, Tayikistán,
  Turkmenistán, Maldivas, Bután, Bangladés, Brunéi, Timor Oriental y Mongolia.
- **Con aviso:** los seis que la sección 14.2 dejó para decidir en su tanda
  —Irak, Irán, Israel y Palestina, Líbano, Myanmar y Pakistán—.
- **Territorios:** Hong Kong, Macao y Taiwán.

Quedan afuera, como decidió la sección 14.2, Afganistán, Corea del Norte, Siria
y Yemen.

**Con aviso, como Venezuela.** La pregunta de la sección 14.2 era si una guía
con precauciones normales es honesta para esos seis. Se decidió que sí lo es si
lo dice: cada uno lleva una entrada "Qué tener en cuenta" que manda a revisar la
recomendación de viaje del propio país y qué cubre el seguro —muchos excluyen
los destinos con esa recomendación—, una pregunta del FAQ con lo mismo y la
lista de documentos en tono de advertencia. La guía no describe la situación,
que cambia más rápido que el texto. Las ciudades del planificador son las de los
viajes habituales:

- Gaza no está en Israel y Palestina.
- En Líbano no hay nada al sur de Sidón ni en el valle de la Bekaa.
- En Myanmar no hay nada en Rakhine ni en el norte del estado Shan.
- En Pakistán no hay nada en Baluchistán ni en las zonas de frontera con
  Afganistán.

Israel y Palestina son una sola guía, como los nombraba la sección 14.2: el
shekel circula en los dos y se entra por las mismas fronteras. Belén y Jericó
están en el planificador, con la forma de llegar.

**Territorios, y la portada dice "destinos".** Hong Kong, Macao y Taiwán tienen
moneda y frontera propias, que es lo que el modelo llama un corredor. Contarlos
como países habría sido decir algo que la portada no tiene por qué decir, así
que el contador, el botón y los textos de la lista pasaron a "destinos". Las
guías siguen usando el campo `country`, que para ellos es solo el nombre.

**Monedas:**

- **Dos cotizaciones y precios en dólares, como Venezuela y Cuba:**
  Turkmenistán, Irán y Myanmar. La oficial y la de la calle —o la de las casas
  de cambio, en Irán— están muy lejos entre sí. Sus corredores declaran las dos.
- **Moneda propia y precios en dólares, como Camboya:** Maldivas y Líbano, con
  una sola cotización.
- **Dolarizado, como Ecuador:** Timor Oriental. El test de los dolarizados lo
  suma a la lista.
- **Con centavos:** los dinares de Kuwait y Baréin y el dólar de Brunéi, que ya
  estaban en `MONEDAS_CON_CENTAVOS`. Las demás monedas van enteras.

**Climas nuevos en los extremos.** El lago Khövsgöl, en Mongolia, pasa a ser la
ciudad más fría del sitio, con −31,6 °C de mínima en enero, por delante de
Song-Kol (sección 14.10). Jahra, en Kuwait, pasa a ser la más calurosa, con
47,4 °C de máxima en julio, por delante de Liwa (sección 14.8). Los dos entran
en los topes del generador.

**Reglas de entrada que no son la visa, otra vez:**

- **Turkmenistán:** carta de invitación por agencia y guía durante todo el
  recorrido.
- **Bután:** la tasa diaria de desarrollo sostenible. Se dice que existe, pero
  no su monto, que cambia por decreto, y los precios del planificador no la
  incluyen.
- **Tayikistán:** el permiso aparte para el Pamir.
- **Irán e Irak:** quien entra a Estados Unidos con autorización electrónica,
  como el pasaporte chileno, la pierde tras visitarlos.

**Precios de Maldivas.** Son de isla local. Los atolones de resorts llevan el
factor más alto que admite el generador (2,5), y aun así un resort puede costar
varias veces más: la guía lo dice en la nota de alcance.

**Un tope que apareció en la verificación.** Contra la base nueva, el viaje 30
desde la misma conexión en una hora devolvió "Se crearon demasiados viajes desde
tu conexión en la última hora". Es el cupo por cliente funcionando como debe;
para seguir verificando se vació la tabla del cupo en la base local, no en la
de producción.

Los ids de destino van del `68` al `7b`, y Asia quedó entre `50` y `7b`.

### 14.12 La lluvia entra en la valija

Cierra lo que la sección 14.5 dejó abierto: la lista de equipaje no miraba la
probabilidad de lluvia, y un viaje de playa a Bali en enero —62 % en Seminyak—
salía sin nada para la lluvia.

**Un bucket que no sale de la temperatura.** `lluvia` se activa cuando algún
mes del viaje llega al 40 % de probabilidad de lluvia. El umbral vive en una
tabla propia, `precip_thresholds`, por lo mismo que los de temperatura viven en
`climate_thresholds` (sección 4): se ajusta desde Studio, sin deploy. No va en
`climate_thresholds` porque ahí un `temp_max` en null quiere decir "el bucket
más cálido".

**Por qué 40.** La mediana de las 11.088 filas de clima es 29 % y el percentil
75, 40 %: llover cuatro días de cada diez, tres días mojados por semana. Con 40
entran los monzones —Bombay y Goa de junio a septiembre, Bangkok, Siem Reap,
Bali en enero—, las tormentas de verano de Río, Florianópolis e Iguazú y las
costas lluviosas del norte, como Bergen, Galway y Reikiavik. Quedan afuera el
Mediterráneo en verano, los desiertos y Lima. Un cuarto de los meses del sitio
queda marcado como de lluvia.

**La lluvia no mira el tipo de viaje.** Es la única excepción al paso 3 de la
sección 4: lo etiquetado con un bucket de lluvia entra en cualquier viaje,
porque la lluvia moja igual en la playa que en un viaje de trabajo. El paraguas
y el impermeable llevan la etiqueta, además de las cuatro de temperatura que ya
tenían, y conservan sus tipos de viaje:

| Tipo de viaje | Mes seco               | Mes de lluvia          |
| ------------- | ---------------------- | ---------------------- |
| playa         | nada                   | paraguas e impermeable |
| urbano        | paraguas e impermeable | lo mismo               |
| aventura      | impermeable            | suma el paraguas       |
| negocios      | paraguas               | suma el impermeable    |

**Suma, nunca resta.** La versión más limpia habría sido que el paraguas
dependa solo de la lluvia, también en la ciudad. No se hizo por dos razones. La
lista arranca en cero (sección 4), así que un ítem de más no cuesta nada —queda
en cero—, y uno de menos no hay forma de agregarlo a mano: Montevideo, con un
25 % de lluvia todo el año, se habría quedado sin paraguas. Y la lectura de un
viaje superpone lo guardado sobre lo que genera el motor
(`src/lib/trips/read.ts`), así que un ítem que el motor deja de generar
desaparece del viaje de quien ya lo había elegido.

**Las tarjetas por mes también la muestran.** En "Condiciones actuales" cada
mes calcula su lluvia aparte de su bucket principal: un septiembre de monzón
sigue siendo cálido y el consejo de la tarjeta habla del calor, pero los chips
ponen primero lo de la lluvia. El aviso de que "se empaca parecido los doce
meses" cuenta la lluvia: Río, cálido todo el año, ya no lo muestra, porque de
noviembre a marzo suma el paraguas; Iquitos, con calor y lluvia los doce meses,
sí.

**Contra una base sin la migración, nada se rompe.** Si la tabla todavía no
existe, la lectura de los umbrales devuelve una lista vacía y la lista de
equipaje sale como salía antes. Romper el dashboard de un viaje por algo que
solo agrega sugerencias sería peor que mostrarlo sin ellas.

`supabase/tests/integridad.sql` acepta en el catálogo buckets de las dos tablas
y falla si un id está en las dos: el bucket se activaría también por la
temperatura, y lo etiquetado con él entraría en cualquier viaje aunque no
lloviera.

## 15. África

Lo mismo que se hizo antes de Europa y de Asia —zonas, alcance, monedas y lo
que el modelo todavía no sabía expresar—, esta vez en el mismo PR que la
primera tanda. El procedimiento país por país sigue siendo
[`docs/agregar-un-pais.md`](docs/agregar-un-pais.md).

### 15.1 Zonas

Cinco, de la división de la ONU (M49): **África del Norte, Occidental, Central,
Oriental y Austral**. En la portada, África va entre Europa y Asia: los
continentes van de oeste a este, y África tiene casi la misma longitud que
Europa. Adentro, de norte a sur. La portada cuenta por continente ("… en
África") y no muestra una zona sin países: con la primera tanda se ven África
del Norte, Oriental y Austral.

Egipto va en África del Norte con el Sinaí incluido, como dice la ONU.

### 15.2 Alcance

La regla es la de la sección 14.2: un país al que los gobiernos desaconsejan
viajar en todo su territorio **queda afuera mientras eso dure**. En octubre de
2026 son ocho: Libia, Sudán, Sudán del Sur, Somalia, Malí, Burkina Faso, Níger y
la República Centroafricana.

Se deciden en la tanda de cada uno, mirando la situación de ese momento, como
Irak o Irán en Asia: Chad, la República Democrática del Congo y Uganda, que hoy
figuran en el nivel más alto de la recomendación de Estados Unidos, y los
países con regiones enteras desaconsejadas pero viajes habituales en el resto,
como Nigeria, Camerún, Etiopía, Mozambique o Mauritania. La pregunta es la de
14.2: si una guía con precauciones normales es honesta. Ruanda se sumó a esta
lista en la tercera tanda (15.7).

> **Decidido en la sección 15.8:** entran con aviso, como en Asia. Mauritania va
> en la quinta tanda.

Los territorios:

- **El Sahara Occidental** es un territorio en disputa que Marruecos administra
  en su mayor parte. No es un corredor —no tiene moneda ni frontera propias en
  la práctica— y ninguna ciudad de Marruecos del planificador está ahí. La guía
  lo dice como dato de entrada, sin tomar posición.
- **Somalilandia** tiene moneda y fronteras propias, pero la recomendación que
  alcanza a Somalia la incluye: queda afuera con ella.
- **Canarias, Ceuta, Melilla y Madeira** son España y Portugal; Canarias y
  Madeira ya están en sus guías.
- **Reunión, Mayotte y Santa Elena** quedan por decidir cuando toque. Las dos
  primeras son Francia y usan el euro, aunque no estén en Schengen; Santa Elena
  es británica, con moneda propia.

> **Decidido en la sección 15.10:** quedan afuera las tres. Reunión y Mayotte
> comparten moneda y reglas de entrada con Francia, como Puerto Rico con
> Estados Unidos (sección 13). Santa Elena tiene moneda propia, atada a la
> libra, pero es un territorio de ultramar, y en América no entró ninguno. La
> guía de Comoras dice que Mayotte no está. Si alguno se suma, es un corredor
> nuevo y se decide en su propia tanda.
>
> **Revisado en la sección 16.2:** con el criterio de Oceanía, ser territorio
> ya no alcanza para quedar afuera. Santa Elena sigue afuera porque casi no
> recibe viajeros; Reunión y Mayotte, porque comparten moneda y reglas de
> entrada con Francia.

### 15.3 Monedas

Ninguna moneda propia de un país africano vale hoy más de medio dólar, así que
ninguna lleva centavos; la que más se acerca es el dinar tunecino, con
alrededor de un tercio. Lo que África trae:

- **Monedas cerradas.** El dírham marroquí y el dinar tunecino no se consiguen
  afuera ni se pueden sacar del país: se cambian allá. Las guías lo dicen, y el
  modelo no necesita nada, porque el presupuesto ya está en moneda local.
- **Monedas atadas.** Los francos CFA y el escudo caboverdiano están atados al
  euro, y en Lesoto, Esuatini y Namibia el rand vale lo mismo que la moneda
  local y se acepta. Para el modelo siguen siendo una cotización contra el
  dólar.
- **Precios en dólares con moneda propia, como Camboya:** probablemente
  Zimbabue y Liberia, donde el dólar circula junto a la moneda local.
- **Dos cotizaciones, como Venezuela:** probablemente Argelia, donde el dinar
  oficial y el del mercado están muy lejos.

Los dos últimos casos se deciden en su tanda.

> **Decidido:** Zimbabue (15.6), la RD del Congo (15.8) y Liberia (15.10) van
> con los precios en dólares; Malaui (15.7), Burundi y Argelia (15.9), con dos
> cotizaciones.

### 15.4 La entrada también es salud

En Europa y en Asia, la entrada era la visa. En África también es salud y,
en algunos países, un seguro:

- **Fiebre amarilla.** Muchos países piden el certificado internacional de
  vacunación a quien llega de un país con riesgo, y varios de Sudamérica están
  en esas listas: Sudáfrica incluye a Argentina y Brasil, y cuenta también una
  escala de más de doce horas. Las guías lo dicen en el tablero, en la
  checklist de documentos y en las preguntas, con el mismo cuidado que la
  visa: el mecanismo, y no la lista, que cambia.
- **Malaria.** Donde hay, la checklist de salud lo avisa en tono de advertencia
  y manda a consultar a un médico de viajes. La guía no receta.
- **Un seguro estatal obligatorio.** Tanzania lo exige aparte del que tenga
  cada uno: Zanzíbar desde octubre de 2024 y el continente desde el 1 de
  octubre de 2026. Es el dato de su portada, como el seguro de Georgia (14.10).
- **Una autorización antes de embarcar.** Kenia la pide a casi todos (eTA),
  como el Reino Unido en Europa.

### 15.5 Primera tanda: Marruecos, Egipto, Túnez, Sudáfrica, Kenia y Tanzania

Seis países con la misma forma que el resto —guía completa, nueve ciudades con
sus doce meses de clima y dieciocho precios— y una cotización contra el dólar
cada uno, sin fuente todavía. Lo que cada uno le enseñó al modelo:

- **Marruecos** rompe la idea de que África es calor: en Imlil, en el Alto
  Atlas, las noches de enero bajan de cero, y en Merzouga, entre las dunas, el
  verano pasa los cuarenta grados. La base es Marrakech y no Rabat, como Dubái
  en Emiratos.
- **Egipto** casi no tiene lluvia: lo que cambia la valija es el calor, que en
  Asuán y Luxor pasa los cuarenta en junio. Las ciudades son las del Nilo y el
  mar Rojo, más Sharm el-Sheij, al que se llega en avión; el norte del Sinaí,
  el desierto occidental y las fronteras no están.
- **Túnez** tiene una moneda que no se puede sacar del país, y ese es el dato de
  su portada. Es Mediterráneo y Sahara: de Djerba, con el invierno más suave,
  a los cuarenta y un grados de Douz en julio.
- **Sudáfrica** es el primer país donde el adaptador universal que sugiere la
  lista casi nunca sirve: el enchufe es de tipo M. Es también hemisferio sur,
  con un Cabo mediterráneo que llueve en invierno, al revés que el resto del
  país. La base es Ciudad del Cabo, su capital legislativa.
- **Kenia** está sobre el ecuador y no hace calor: Nairobi, a 1.700 metros,
  tiene once grados de mínima en julio, y es el dato de su portada. Sus dos
  temporadas de lluvia, de marzo a mayo y de octubre a diciembre, las marca el
  bucket de lluvia de la sección 14.12.
- **Tanzania** pide el seguro estatal propio, que es el dato de su portada, y
  su año lo ordena la lluvia: abril es el mes más mojado en las nueve ciudades.
  La base es Arusha, la puerta de los safaris del norte, como Siem Reap en
  Camboya.

**Precios de los parques.** En Kenia y Tanzania, la entrada a un parque y la
excursión del día se derivan de la base con el factor, y en la costa y en
Zanzíbar salían varias veces más caras de lo que cuestan: allá los parques son
marinos o el bosque de Jozani, y la excursión va en barco. Las dos migraciones
lo corrigen con un update al final, como el transporte gratis de Belgrado. Los
lodges de safari, en cambio, cuestan bastante más de lo que el factor permite
—el tope es 2,5—, y las guías lo dicen en la nota de alcance, como los resorts
de Maldivas.

**Los extremos no cambian.** La mínima más baja de la tanda es la de Imlil en
enero, −1,5 °C, y la máxima más alta, 41,8 °C, la de Merzouga en julio y la de
Abu Simbel en junio. Khövsgöl y Jahra siguen siendo la ciudad más fría y la más
calurosa del sitio (sección 14.11).

Los ids de destino van del `90` al `95`.

### 15.6 Segunda tanda: el sur de África, las islas del Índico, Cabo Verde y Senegal

Ocho países con la misma forma —guía completa, nueve ciudades con sus doce
meses de clima y dieciocho precios, una cotización contra el dólar sin fuente
todavía—: Namibia, Botsuana, Zimbabue, Zambia, Mauricio, Seychelles, Cabo Verde
y Senegal. Con los dos últimos aparece en la portada África Occidental.

**Zimbabue y Zambia van en África Oriental.** Se viajan junto con Botsuana y
Namibia, y en el habla de todos los días son "el sur de África", pero la ONU
los pone en África Oriental, con Mauricio y Seychelles. La portada sigue a la
ONU (15.1): una división propia habría que defenderla país por país.

**Zimbabue es el caso de Camboya.** La 15.3 lo dejaba para su tanda, y se
decidió así: la moneda oficial es el ZiG, pero al viajero se le cobra en
dólares casi todo, así que el corredor es
`unaCotizacion("zimbabue", "ZWG", …)` y los precios de la base van en USD, con
centavos. La guía explica las dos cosas, y el dato de su portada es el de los
billetes chicos: no circulan monedas de dólar.

Lo que cada uno le enseñó al modelo:

- **Namibia** es desierto y su portada habla del frío: en Sossusvlei, las
  madrugadas de julio rondan los cinco grados, y en el Kalahari, los tres. La
  costa, por la corriente de Benguela, es fresca y con niebla todo el año. Se
  recorre en auto alquilado, y la nota de alcance dice que el presupuesto no
  lo incluye.
- **Botsuana** tiene el agua al revés: el delta del Okavango se inunda en plena
  temporada seca, con lluvia que cayó meses antes en Angola. La base es Maun,
  la puerta del delta, como Arusha en Tanzania. Los campamentos del delta se
  venden en paquetes en dólares, muy por encima de lo que el factor permite, y
  la nota de alcance lo dice.
- **Zimbabue**, además de los dólares, tiene la meseta templada y el valle del
  Zambeze, que en octubre pasa los treinta y cinco grados. La base es Cataratas
  Victoria y no Harare.
- **Zambia** tiene tres estaciones y no dos: entre el invierno seco y las
  lluvias, septiembre y octubre son a la vez los meses de más calor y los
  mejores para los safaris. La base es Livingstone, el lado zambiano de las
  cataratas.
- **Mauricio** cambia en pocos kilómetros: el oeste es seco y la meseta
  central, en Curepipe, tiene el bucket de lluvia (14.12) once meses de doce.
  Rodrigues, a casi seiscientos kilómetros, entra como una ciudad más del país.
- **Seychelles** no le pide visa a nadie, pero sí una autorización online
  antes de volar, y ese es el dato de su portada, como la eTA de Kenia. No
  tiene invierno: la mínima nunca baja de veinticuatro grados. Desroches y
  Bird son islas con un resort, y entran porque mucha gente viaja a eso.
- **Cabo Verde** pide a todos un registro online, aparte de la visa, y es el
  dato de su portada. Casi no llueve —ningún mes de ninguna ciudad llega al
  bucket de lluvia— y la valija la definen el viento y el sol; la excepción es
  Chã das Caldeiras, adentro del volcán de Fogo, con noches de diez grados.
- **Senegal** trae el primer franco CFA y dos estaciones bien marcadas. Ninguna
  ciudad del planificador está en Casamance ni en el este, sobre la frontera
  con Malí, y la guía lo dice como dato de entrada, como Kenia con la frontera
  de Somalia.

**Precios de los parques.** En Botsuana, Gaborone, Tsodilo y Serowe no cobran
la tarifa de los parques del norte: lo que se visita ahí son reservas chicas y
un sitio arqueológico, y derivada de Maun la entrada salía casi tres veces más
cara. En Zimbabue, la atracción principal de la base es el sendero de las
cataratas, más caro que la entrada a los parques y a Gran Zimbabue, que con el
factor salían a casi cien dólares por día. Las dos migraciones lo corrigen con
un update al final, como Kenia y Tanzania.

**Los extremos no cambian.** La mínima más baja de la tanda es la del Kalahari
Central en julio, 2 °C, y la máxima más alta, 38,5 °C, la del cañón del río
Fish en enero. Khövsgöl y Jahra siguen siendo la ciudad más fría y la más
calurosa del sitio (sección 14.11).

Los ids de destino van del `96` al `9d`.

### 15.7 Tercera tanda: Madagascar, Malaui, Ghana, Costa de Marfil, Gambia, Lesoto, Esuatini y Santo Tomé y Príncipe

Ocho países con la misma forma —guía completa, nueve ciudades con sus doce
meses de clima y dieciocho precios, cotización sin fuente todavía—. Con Santo
Tomé y Príncipe aparece África Central en la portada: ya se ven las cinco
zonas.

**Ruanda queda para decidir.** Iba en esta tanda, pero el 17 de mayo de 2026
Estados Unidos subió su recomendación al nivel 3, por el brote de ébola en el
este del Congo, con nivel 4 a menos de diez kilómetros de la frontera: justo
donde están los volcanes de los gorilas y el lago Kivu. Pasa a la lista de
15.2, con Chad, el Congo y Uganda, y entra Costa de Marfil en su lugar. Costa
de Marfil tiene la frontera norte en nivel 4, como Kenia la de Somalia, y
Ghana tiene partes del norte con más precaución: ninguna ciudad del
planificador está ahí, y las guías lo dicen como dato de entrada.

**Malaui es el caso de Venezuela.** La 15.3 lo esperaba en Argelia, y apareció
antes: el kwacha tiene una cotización oficial y otra paralela muy lejos entre
sí. Como Turkmenistán, Irán y Myanmar, el corredor tiene las dos —por
defecto, la paralela— y los precios van en dólares, con centavos. Es el dato
de su portada.

**La vacuna, para todos.** Ghana y Costa de Marfil piden el certificado de la
fiebre amarilla a todos los viajeros, no solo a quien llega de un país con
riesgo, y Ghana lo controla antes de migraciones: es el dato de su portada.
Santo Tomé y Príncipe también puede pedirlo a cualquiera, y su guía dice que
se lleve.

Lo que cada uno le enseñó al modelo:

- **Madagascar** tiene varios climas en una isla: invierno fresco en las
  tierras altas —diez grados de noche en Antananarivo en julio, seis en
  Antsirabe—, una selva que activa el bucket de lluvia (14.12) los doce meses
  en Ranomafana, y un sur seco que no lo activa nunca. El dato de su portada
  son los lémures; la nota de alcance dice que el auto con chofer y los vuelos
  internos no entran en el presupuesto.
- **Malaui**, además de las dos cotizaciones, tiene el lago y la meseta de
  Nyika, que baja a dos grados en julio.
- **Ghana** tiene dos temporadas de lluvia y el harmattan, el viento del
  Sahara, de diciembre a febrero. Accra es de lo más seco de la costa.
- **Costa de Marfil** es el segundo país del franco CFA, la misma moneda que
  Senegal. La base es Abiyán y no Yamusukro, la capital, como Dubái en
  Emiratos.
- **Gambia** tiene sol de noviembre a mayo, sin una gota de lluvia en la
  costa, y es el dato de su portada; río arriba, Janjanbureh pasa los cuarenta
  grados en abril. La base es Kololi, como Grand Baie en Mauricio.
- **Lesoto** está entero por encima de los mil metros, y su punto más bajo, a
  mil cuatrocientos, es el dato de su portada. Afriski, a más de tres mil, baja
  a ocho bajo cero en julio y se esquía. Como Namibia, su moneda vale lo mismo
  que el rand, y el enchufe es el M.
- **Esuatini**, la última monarquía absoluta de África, tiene tres climas de
  oeste a este en pocos kilómetros; el lowveld de Hlane no llega nunca al
  bucket de lluvia. Su enchufe también es el M.
- **Santo Tomé y Príncipe** está sobre el ecuador, con una sola temporada
  seca, la gravana, de junio a septiembre. Las tarjetas extranjeras casi no
  funcionan, y la guía lo dice.

**Precios.** Esta vez no hizo falta ninguna excepción: con el factor, las
entradas a los parques de Malaui quedan cerca de lo que cuestan. Los lodges y
los resorts —Liwonde, Mkhaya, Príncipe, el Ilhéu das Rolas— cuestan más de lo
que el factor permite, y las notas de alcance lo dicen. Ninguna moneda nueva
lleva centavos; Malaui los lleva porque sus precios están en dólares.

**Los extremos.** La mínima más baja de África en el planificador pasa a ser
la de Afriski en julio, −8,4 °C, y la máxima de la tanda, 40,6 °C, la de
Janjanbureh en abril, por debajo de Merzouga. Khövsgöl y Jahra siguen siendo la
ciudad más fría y la más calurosa del sitio (sección 14.11).

Los ids de destino van del `9e` al `a5`.

### 15.8 Cuarta tanda: los países con aviso

Ocho países con la misma forma —guía completa, nueve ciudades con sus doce
meses de clima y dieciocho precios, cotización sin fuente todavía—: Nigeria,
Etiopía, Uganda, Ruanda, Mozambique, Camerún, la República Democrática del
Congo y Chad. Mauritania, el noveno de la lista de 15.2, va en la quinta tanda.

**Con aviso, como en Asia.** La pregunta de 15.2 era la de 14.2: si una guía
con precauciones normales es honesta para estos países. Se decidió como en la
sección 14.11: entran, y cada guía lleva la entrada "Qué tener en cuenta", que
manda a revisar la recomendación de viaje del propio país y qué cubre el
seguro, la misma pregunta al principio del FAQ y la checklist de documentos en
tono de advertencia. La guía no describe la situación. Tampoco menciona las
leyes locales que afectan a viajeros LGBT: se decidió no tratarlas como dato
de entrada, igual en todos los países.

**Las ciudades, fuera de las zonas desaconsejadas.** Las recomendaciones de
Estados Unidos y del Reino Unido se revisaron el 12 de octubre de 2026, y
ninguna ciudad del planificador está en una zona adonde alguno de los dos pida
no ir. La revisión cambió el primer borrador en tres países:

- **Etiopía:** nada en Amhara, Tigray, Afar ni Oromía. Por eso no están
  Lalibela, Gondar ni Axum, y tampoco los lagos del Rift al sur de la capital:
  Bishoftu y el lago Langano están en zonas de Oromía que Estados Unidos
  desaconseja desde agosto, y su lugar lo ocupan Dorze, en los montes Gamo, y
  Turmi, en el valle del Omo. Al sur y al este se llega en avión; a Harar, por
  ruta desde Dire Dawa, y la guía manda a revisar también ese camino.
- **Uganda:** nada en Karamoja ni sobre la frontera con Sudán del Sur. El
  Parque Nacional Reina Isabel, que varias recomendaciones señalan, dejó su
  lugar al lago Mburo. Bwindi está cerca de la frontera con el Congo, y la guía
  lo dice.
- **Chad:** nada en el norte, en el lago Chad ni en las zonas de frontera,
  salvo la capital, que mira a Camerún del otro lado del río. El Ennedi y los
  lagos de Ounianga, sus destinos más conocidos, están en provincias del norte
  adonde el Reino Unido pide no ir; salieron con Bongor, que está sobre la
  frontera, y entraron el parque de Manda, Bitkine y el lago Fitri.

En el resto, la lista ya cumplía: Nigeria sin el norte ni el delta del Níger;
Ruanda sin la franja de diez kilómetros sobre la frontera con el Congo (15.7);
Mozambique sin Cabo Delgado ni los distritos del norte de Niassa y Nampula;
Camerún sin el Noroeste, el Sudoeste ni el norte, y la RD del Congo sin el este
ni las otras provincias desaconsejadas. A Gorongosa y a la Isla de Mozambique
se llega por ruta, y la guía manda a revisar esos caminos.

Lo que cada uno le enseñó al modelo:

- **Nigeria** ya no da la visa al llegar: casi todos los pasaportes de fuera
  de África Occidental la tramitan online, y las aerolíneas no embarcan sin
  ella. Es el dato de su portada. La base es Lagos y no Abuja, como Duala en
  Camerún.
- **Etiopía** tiene calendario y hora propios: trece meses, siete u ocho años
  atrás, y las horas contadas desde que sale el sol. Es el dato de su portada,
  porque cambia cómo se lee un horario. Adís Abeba, a más de dos mil
  trescientos metros, cae en el bucket `frio` las noches de diciembre.
- **Uganda** tiene el permiso de los gorilas, que cuesta más que el resto del
  viaje y no entra en el presupuesto: es el dato de su portada. Dejó de pedir
  el certificado de la fiebre amarilla en octubre de 2026, y la guía lo dice
  con el cuidado de siempre: otro país puede pedirlo a quien llega de Uganda.
- **Ruanda** prohíbe las bolsas de plástico, y en el aeropuerto te las pueden
  sacar: es el dato de su portada y la primera regla de entrada que cambia cómo
  se arma la valija. Musanze queda con el precio derivado: lo caro allá son
  los permisos del parque de los volcanes, que no entran en el presupuesto.
- **Mozambique** tiene la temporada de ciclones, de diciembre a marzo, que es
  el dato de su portada. Se habla portugués, y la guía lo cuenta como ventaja.
- **Camerún** trae el franco CFA de África Central, que vale lo mismo que el de
  África Occidental pero no se acepta en su zona, ni el de ella acá. Le dicen
  "África en miniatura", que es el dato de su portada, y pide la vacuna de la
  fiebre amarilla a todos.
- **La RD del Congo es el caso de Camboya y Zimbabue.** El corredor es
  `unaCotizacion("republica-democratica-del-congo", "CDF", …)` y los precios
  van en USD, con centavos. El dato de su portada son los dólares: los
  billetes viejos o manchados se rechazan. Lubumbashi tiene una hora más que
  Kinshasa; el reloj del corredor es el de la ciudad base.
- **Chad** tiene el Sahel en la ciudad base: Yamena pasa los cuarenta y un
  grados en abril, y es el dato de su portada. Hay que registrarse en la
  policía, y para las fotos puede hacer falta un permiso.

**Precios.** Los parques de Uganda —Murchison, Kibale, el lago Mburo y Bwindi—
y los de Ruanda —Nyungwe y Akagera— cobran una entrada mucho más cara que la
atracción principal de la capital, y sus migraciones lo corrigen con un update
al final, como Kenia y Tanzania. Los permisos de gorilas y chimpancés no entran
en el presupuesto, y las guías lo dicen. Ninguna moneda nueva lleva centavos;
la RD del Congo los lleva porque sus precios están en dólares.

**Los extremos no cambian.** La mínima más baja de la tanda es la de
Lubumbashi en julio, 6,2 °C, y la máxima más alta, 41 °C, la de Yamena y el lago
Fitri en abril, por debajo de Merzouga. Khövsgöl y Jahra siguen siendo la
ciudad más fría y la más calurosa del sitio (sección 14.11).

Los ids de destino van del `a6` al `ad`.

### 15.9 Quinta tanda: Mauritania, Burundi, Guinea-Bisáu, Argelia, Angola, Gabón, Guinea Ecuatorial y la República del Congo

Ocho países con la misma forma —guía completa, nueve ciudades con sus doce
meses de clima y dieciocho precios, cotización sin fuente todavía—. Con ellos,
África Central queda completa en la portada, salvo la República Centroafricana,
que la sección 15.2 dejó afuera.

**Con aviso, tres.** Mauritania, el último de la lista de 15.2, entra como los
de la cuarta tanda (15.8). Burundi y Guinea-Bisáu no estaban en esa lista, pero
los dos figuran en el nivel 3 de la recomendación de Estados Unidos
("reconsiderar el viaje"), y la regla de 15.8 los alcanza: entran con aviso.
Los otros cinco van con precauciones normales, y las zonas desaconsejadas, si
las hay, se dicen como dato de entrada, como en Kenia.

**Las ciudades, fuera de las zonas desaconsejadas**, con la misma revisión de
15.8:

- **Mauritania:** nada al norte del trópico de Cáncer, en el este ni cerca de
  las fronteras con Malí, Argelia o el Sahara Occidental. Por eso no está
  Nuadibú, la segunda ciudad, pegada a esa frontera.
- **Burundi:** nada en Cibitoke ni en Bubanza, en el parque de la Kibira ni
  sobre la frontera con el Congo, al oeste de Buyumbura.
- **Guinea-Bisáu:** nada a menos de veinte kilómetros de la frontera con
  Senegal, así que Varela y São Domingos no están.
- **Argelia:** nada cerca de las fronteras del sur y del este ni en el Sahara
  profundo —Tamanrasset, Djanet, Illizi—; Ghardaïa es lo más al sur.
- **Angola:** nada en Cabinda ni en las Lundas.
- **República del Congo:** nada a menos de cincuenta kilómetros de la frontera
  con la República Centroafricana ni en el Pool fuera de la capital. Como la
  ruta entre Brazzaville y Pointe-Noire cruza el Pool, la guía recomienda
  volar.

**Dos cotizaciones, dos más.** La 15.3 esperaba a Argelia, y se decidió así:
el dinar tiene una cotización oficial y otra paralela muy lejos entre sí, como
el kwacha de Malaui (15.7). Burundi es el mismo caso con el franco burundés.
Los dos corredores declaran `oficial` y `paralelo` —por defecto, la
paralela— y los precios van en dólares, con centavos.

Lo que cada uno le enseñó al modelo:

- **Mauritania** tiene la máxima más alta de África en el planificador: Atar,
  43,4 °C en junio, que es el dato de su portada. Es una república islámica, y
  la guía dice que no se vende alcohol.
- **Burundi**, además de las dos cotizaciones, tiene el lago Tanganica, el
  segundo más profundo del mundo, que es el dato de su portada.
- **Guinea-Bisáu** es un archipiélago al que se llega en barco, sin cajeros:
  las ochenta y ocho islas de las Bijagós son el dato de su portada.
- **Argelia** trae ciudades romanas enteras —Timgad, Djémila y Tipaza—, el dato
  de su portada, y una visa que se tramita en un consulado, con reserva o
  carta de invitación. El dinar, como el dírham y el dinar tunecino, no se
  puede sacar del país.
- **Angola** tiene costa tropical sin calor de trópico: la corriente de
  Benguela trae el cacimbo, un invierno fresco y nublado, que es el dato de su
  portada. Casi todos los pasaportes de América y Europa entran sin visa por
  turismo.
- **Gabón** es casi todo selva, con trece parques nacionales, y es de los
  países más caros de África: los lodges de Loango y la Lopé se venden en
  paquetes, y la nota de alcance lo dice.
- **Guinea Ecuatorial** es el único país de África con el español como idioma
  oficial, y es el dato de su portada. Bioko y el continente se viajan por
  separado, y el sur de la isla pide un permiso.
- **La República del Congo**, la de Brazzaville, tiene los gorilas de llanura
  de Odzala, el dato de su portada, en lodges que llevan el factor más alto
  que admite el generador (2,5). Su FAQ aclara que no es la RD del Congo.

**Precios.** Ninguna excepción esta vez. Ninguna moneda nueva lleva centavos:
la uguiya, el kwanza y los francos CFA valen mucho menos que medio dólar.
Burundi y Argelia los llevan porque sus precios están en dólares.

**Los extremos.** La máxima más alta de África en el planificador pasa a ser la
de Atar en junio, 43,4 °C, por encima de Merzouga y Abu Simbel (15.5). La
mínima de la tanda es la de Timgad en enero, 0,4 °C, por encima de Afriski
(15.7). Khövsgöl y Jahra siguen siendo la ciudad más fría y la más calurosa
del sitio (sección 14.11).

Los ids de destino van del `ae` al `b5`.

### 15.10 Sexta tanda: Togo, Benín, Liberia, Sierra Leona, Guinea, Comoras, Yibuti y Eritrea

Ocho países con la misma forma —guía completa, nueve ciudades con sus doce
meses de clima y dieciocho precios, cotización sin fuente todavía—. Con ellos,
África queda completa en el planificador: cuarenta y seis países, todos menos
los ocho que la sección 15.2 dejó afuera, que se revisan cuando cambien sus
recomendaciones.

**Con aviso, uno.** Eritrea: el Reino Unido desaconseja todo viaje a menos de
veinticinco kilómetros de cualquier frontera terrestre y los que no sean
esenciales al resto del país. La regla de 15.8 la alcanza: entra con aviso.
Los otros siete van con precauciones normales, y las zonas desaconsejadas, si
las hay, se dicen como dato de entrada.

**Las ciudades, fuera de las zonas desaconsejadas**, con la misma revisión de
15.8:

- **Togo:** nada al norte de Kandé ni cerca de la frontera con Burkina Faso,
  así que Koutammakou, la tierra de los batammariba, no está.
- **Benín:** nada en el Atacora ni en el Alibori, así que los parques de la
  Pendjari y W no están.
- **Yibuti:** nada cerca de la frontera con Eritrea ni al norte de Obock, donde
  además hace falta un permiso del gobierno.
- **Eritrea:** nada a menos de veinticinco kilómetros de una frontera
  terrestre. Para salir de la región de Asmara hace falta un permiso para cada
  destino, y la guía lo dice.

**Precios en dólares, uno más.** La 15.3 esperaba a Liberia, y se decidió así:
el dólar liberiano y el estadounidense circulan juntos y al viajero se le cobra
en el segundo, como en Camboya, Zimbabue y la RD del Congo. El corredor queda
en dólares liberianos (`LRD`) y los precios van en USD, con centavos.

**Los territorios.** Reunión, Mayotte y Santa Elena quedan afuera; la nota de
15.2 dice por qué.

Lo que cada uno le enseñó al modelo:

- **Togo** pide, además de la visa, un registro online antes de llegar y otro
  antes de irse: el de Cabo Verde (15.6), pero de ida y de vuelta. El dato de
  su portada es lo angosto del país, cincuenta y seis kilómetros de costa.
- **Benín** tiene el vudú como religión reconocida, con feriado nacional el 10
  de enero: es el dato de su portada. La base es Cotonú y no Porto Novo, la
  capital, como Abiyán en Costa de Marfil.
- **Liberia** trae, además de los dólares, el enchufe estadounidense a 120 V,
  un caso raro en África: la fila del secador en `avoid` es la de Japón y no la
  del resto del continente. El dato de su portada es la lluvia: Monrovia es una
  de las capitales más lluviosas del mundo, y el bucket de lluvia (14.12) se
  activa de abril a noviembre.
- **Sierra Leona** tiene una moneda que perdió tres ceros en 2022 —el leone
  nuevo, `SLE`, y no el viejo, `SLL`—, y en la calle todavía se oyen precios en
  la vieja: es el dato de su portada. El aeropuerto está del otro lado de la
  bahía, y la guía explica el cruce.
- **Guinea** junta una de las temporadas de lluvia más fuertes del mundo en la
  costa con las noches frescas del Futa Yalón, el dato de su portada. Su FAQ
  aclara que Mali, el pueblo de la meseta, no es el país vecino.
- **Comoras** es un archipiélago de tres islas, con la visa al llegar, en
  efectivo. La cumbre del Karthala lleva el bucket frío a una guía tropical, y
  las tortugas de Mohéli, que desovan todo el año, son el dato de su portada.
- **Yibuti** tiene la máxima más alta de África en el planificador: el lago
  Assal, 45,6 °C en julio. El dato de su portada son los tiburones ballena del
  golfo de Tadjoura.
- **Eritrea**, además del aviso, pide la visa en una embajada y un permiso para
  cada destino fuera de la región de Asmara, que es el dato de su portada. No
  hay cajeros para tarjetas extranjeras.

**Precios.** Ninguna excepción. Ninguna moneda nueva lleva centavos: la que
más vale, el nakfa, no llega a una décima de dólar. Liberia los lleva porque sus
precios están en dólares.

**Los extremos.** La máxima más alta de África en el planificador pasa a ser la
del lago Assal en julio, 45,6 °C, por encima de Atar (15.9). La mínima de la
tanda es la de Debre Bizen en enero, 6,2 °C, por encima de las de Timgad (15.9)
y Afriski (15.7). Khövsgöl y Jahra siguen siendo la ciudad más fría y la más
calurosa del sitio (sección 14.11).

Los ids de destino van del `b6` al `bd`.

## 16. Oceanía

Lo mismo que antes de Asia y de África —zonas, alcance, monedas y lo que el
modelo todavía no sabía expresar—, y esta vez el continente entero en una sola
tanda: diecisiete destinos en el mismo PR. El procedimiento país por país sigue
siendo [`docs/agregar-un-pais.md`](docs/agregar-un-pais.md).

### 16.1 Zonas

Cuatro, de la división de la ONU (M49): **Australia y Nueva Zelanda,
Melanesia, Micronesia y Polinesia**. En la portada, Oceanía va al final: los
continentes van de oeste a este, y Oceanía sigue a Asia Oriental. Adentro, de
Australia y Nueva Zelanda a la Polinesia. La portada cuenta por continente
("… en Oceanía").

Como dice la ONU, Kiribati va en Micronesia aunque las islas de la Línea estén
en medio de la Polinesia, y Fiyi, en Melanesia.

### 16.2 Alcance

Ningún país de Oceanía tiene hoy una recomendación de no viajar a todo su
territorio. Uno tiene regiones enteras desaconsejadas: **Papúa Nueva Guinea**,
que entra con aviso, como Pakistán (14.11) y los países en duda de África
(15.8). Sus ciudades quedan fuera de esas zonas, con la revisión de 15.8: nada
en Hela, Southern Highlands ni Enga, ni en el centro de Bougainville, ni en las
tierras altas salvo Goroka. Nueva Caledonia y las Islas Salomón piden más
precaución que el resto, sin zonas desaconsejadas: van con precauciones
normales.

**Los territorios.** El criterio de 14.2 —moneda o reglas de entrada propias,
que es lo que el modelo llama un corredor— se afinó con una condición más: que
se viaje a ellos como a un país. Entran tres:

- **Nueva Caledonia y la Polinesia Francesa** son Francia, pero tienen moneda
  propia, el franco CFP, y reglas de entrada propias: una visa Schengen sola no
  alcanza.
- **Las Islas Cook** son un estado libre asociado a Nueva Zelanda, con frontera
  propia, aunque usen el dólar neozelandés.

Y quedan afuera:

- **Hawái, Guam y las Marianas del Norte**, como Puerto Rico (sección 13):
  comparten moneda y frontera con Estados Unidos.
- **Niue, Wallis y Futuna, Samoa Americana, Tokelau y Pitcairn**, que tienen
  moneda o frontera propias pero casi no reciben viajeros. Si alguno se suma,
  es un corredor nuevo, en su propia tanda.

Con este criterio, ser territorio deja de alcanzar para quedar afuera, y la
nota de 15.2 sobre Santa Elena se corrigió: sigue afuera, ahora porque casi no
recibe viajeros.

### 16.3 Monedas

La regla de 14.3 —centavos si la unidad vale más de medio dólar— deja adentro
**el dólar australiano y el neozelandés**, que se sumaron a
`MONEDAS_CON_CENTAVOS` y al generador. El resto va entero: el dólar fiyiano, el
kina, el dólar salomonense, el vatu, el franco CFP, el tala y el pa'anga.

Lo que Oceanía trae:

- **Monedas prestadas.** Kiribati, Nauru y Tuvalu usan el dólar australiano, y
  las Islas Cook, el neozelandés. Kiribati, Tuvalu y las Cook acuñan además
  monedas propias que valen lo mismo y solo se aceptan ahí: la moneda
  triangular de dos dólares de las Cook es el dato de su portada. Para el
  modelo, el corredor es la moneda prestada, con su cotización:
  `unaCotizacion("kiribati", "AUD", …)`.
- **Una moneda compartida.** Nueva Caledonia y la Polinesia usan el mismo franco
  CFP, atado al euro: dos corredores con la misma moneda, como los del franco
  CFA en África. `Intl` lo escribe "CFPF", y así sale en los precios.
- **Dólares, como Ecuador.** Las Islas Marshall, Micronesia y Palaos usan el
  dólar estadounidense: van con `dolarizado` en los corredores, y el test de
  los dolarizados ahora nombra siete.

### 16.4 El antimeridiano

Oceanía es el primer continente que cruza el meridiano 180, y eso tocó tres
cosas:

- **Las cajas del test.** Fiyi —Taveuni queda al este del meridiano— y
  Kiribati —las islas de la Línea, a más de tres mil kilómetros al este de
  Tarawa— tienen cajas que cruzan la línea: su límite oeste es mayor que el
  este, y el test lo entiende.
- **El mapa de cada guía.** Leaflet encuadra los pines con longitudes de -180 a
  180: con Taveuni en -179,9 y Nadi en 177,4, el mapa de Fiyi salía con el
  planeta entero y un pin en cada borde. `src/lib/antimeridiano.ts` corre 360
  grados las longitudes negativas cuando los pines ocupan más de media vuelta,
  y el mapa los junta. Sus tests lo prueban con Fiyi, Kiribati, Tonga y
  Argentina.
- **La hora.** La línea de cambio de fecha no sigue el meridiano: Samoa y Tonga
  tienen trece horas más que Greenwich, y Kiritimati, catorce —el primer lugar
  del mundo en empezar el día—; las Islas Cook y Tahití, diez menos. Entre Samoa
  y las Cook hay casi un día entero. Cada corredor tiene su zona horaria, y las
  guías lo dicen donde cambia el viaje: en Kiribati, en la Polinesia, donde las
  Marquesas tienen media hora menos, y en Micronesia, donde Yap y Chuuk tienen
  una hora menos que Pohnpei.

El globo de la portada no necesitó nada: proyecta con senos y cosenos, que no
saben de antimeridianos.

### 16.5 La tanda: diecisiete destinos

Catorce países y tres territorios con la misma forma —guía completa, nueve
ciudades con sus doce meses de clima y dieciocho precios, cotización sin fuente
todavía—, cargados el 2026-10-13 en una sola tanda. Con ellos, Oceanía queda
completa en el planificador, y el sitio llega a 165 destinos.

Lo que cada uno le enseñó al modelo:

- **Australia** trae la bioseguridad como dato de entrada —toda la comida se
  declara al llegar, el dato de su portada— y tres husos horarios. La base es
  Sídney y no Canberra, como Abiyán en Costa de Marfil.
- **Nueva Zelanda** pide la NZeTA y una tasa de turismo antes de volar, el dato
  de su portada, y lleva la bioseguridad al calzado y al equipo de camping.
  Queenstown en julio tiene la mínima más baja de Oceanía.
- **Fiyi** es el primer país partido por el antimeridiano. El dato de su
  portada es el kava, la bebida de la bienvenida.
- **Papúa Nueva Guinea** entra con aviso. Desde la capital no hay ruta a la
  costa norte ni a las tierras altas, así que el tramo largo del presupuesto es
  un vuelo interno. El dato de su portada son sus más de ochocientas lenguas.
- **Islas Salomón** tiene dos tipos de enchufe, el de patas en V y el
  británico, y malaria en todo el país. El dato de su portada son los
  naufragios de la Segunda Guerra frente a Guadalcanal.
- **Vanuatu** carga aparte la entrada al volcán Yasur en Tanna, con un `update`
  al final de la migración, como el Kilimanjaro. Se maneja por la derecha, como
  en Nueva Caledonia.
- **Nueva Caledonia** es el primer territorio de Oceanía: una visa Schengen sola
  no alcanza. El dato de su portada es la laguna, patrimonio de la humanidad.
- **Polinesia Francesa** lleva en Bora Bora el factor más alto que admite el
  generador, 2,5, y tiene tres husos horarios. El dato de su portada son sus
  118 islas, en un mar del tamaño de Europa.
- **Samoa** cambia el nombre del hotel en su presupuesto: "Hotel 3★ o fale de
  playa con media pensión". El dato de su portada es la línea de cambio de
  fecha, que la deja un día adelante de Samoa Americana.
- **Tonga** tiene el domingo sagrado por ley —cierran los comercios y no hay
  vuelos—, y es el dato de su portada.
- **Islas Cook** suma la escala en Auckland a los datos de entrada: el país no
  pide visa, pero Nueva Zelanda puede pedir la autorización de tránsito.
- **Tuvalu** es el país más bajo del planificador: su punto más alto está a 4,6
  metros, el dato de su portada. A las otras islas se llega solo en el barco
  del gobierno.
- **Kiribati** es el segundo país partido por el antimeridiano, y el más
  extremo: Kiritimati, a UTC+14, es el dato de su portada.
- **Nauru** es el país más chico del planificador. Pide la visa antes de viajar,
  con la reserva del hotel, y sus nueve "ciudades" son los distritos y lugares
  de la vuelta a la isla.
- **Islas Marshall** es el primer país del planificador que pide el
  comprobante de la vacuna contra el sarampión, y el primero dolarizado de
  Oceanía. Los enchufes son de 120 V, como en Liberia.
- **Micronesia** son cuatro estados a miles de kilómetros, con dos husos
  horarios. El dato de su portada es el dinero de piedra de Yap.
- **Palaos** sella un compromiso ambiental en el pasaporte, el dato de su
  portada, y es el único de Oceanía donde la propina se acostumbra. El permiso
  de las Islas Rocosas se paga una vez y vale lo mismo en tres destinos: va con
  un `update` al final de la migración.

**La entrada.** Siguen las reglas de 15.4: la fiebre amarilla se dice donde se
pide —Australia, Fiyi, Papúa, las Salomón, Nueva Caledonia, la Polinesia,
Samoa, Kiribati, Micronesia y Palaos— y no donde no. La malaria va en tono de
advertencia en Papúa, las Salomón y Vanuatu; en el resto de las islas
tropicales, el aviso es el dengue.

**Precios.** Las dos excepciones de arriba, Tanna y las Islas Rocosas. Los
nombres de atracción, museo, visita y excursión quedaron genéricos, porque las
ciudades derivadas heredan los nombres de la base.

**Los extremos.** La mínima más baja de Oceanía es la de Queenstown en julio,
-1,4 °C, y la máxima más alta, la de Uluru en enero, 37,8 °C. Khövsgöl y
Jahra siguen siendo la ciudad más fría y la más calurosa del sitio (sección
14.11).

Los ids de destino van del `c0` al `d0`.

## 17. Vuelos

Una sección nueva, `/vuelos`, para planear el viaje: de dónde salís, a dónde
llegás, cuánto cuesta. El pedido original era una tabla en tiempo real con los
vuelos de todo el mundo, mapas de rutas y conexiones, y comparadores y
buscadores de ofertas. Se reordenó antes de escribir código (17.1), con tres
condiciones del dueño: presupuesto cero por ahora, afiliados como experimento
—si no funcionan, no pasa nada— y cualquier ciudad del mundo como origen.

### 17.1 Qué es, y lo que se corrigió del pedido

- **Una tabla con todos los vuelos del mundo no le sirve a nadie.** En el aire
  hay entre 10.000 y 20.000 aviones a la vez: una tabla así no se puede leer ni
  buscar, y en el celular no entra. En su lugar, un mapa en vivo con los
  aviones —que terminó siendo un radar por zonas, porque la fuente gratuita no
  da todos a la vez (17.5)—, unos pocos números globales y tablas acotadas: lo
  que vuela desde un aeropuerto, o en una ruta.
- **El comparador no vende pasajes: deriva.** Muestra precios de referencia,
  con su antigüedad —como las cotizaciones—, y manda a comprar a otro sitio por
  un link de afiliado.
- **El diseño visual va al final; la estructura, ahora.** Qué hay en cada
  pantalla y cómo se navega se decide antes, porque cambiarlo después cuesta el
  doble.

Tres capas, cada una responde una pregunta, como el resto del sitio:

| Capa        | Pregunta                 | Qué tiene                                                                                                 |
| ----------- | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| **En vivo** | ¿Qué está pasando ahora? | Un radar con los aviones alrededor de tu aeropuerto, el total del mundo y lo que vuela en cada aeropuerto |
| **Rutas**   | ¿Cómo llego?             | Las conexiones desde tu aeropuerto: directo o con una escala                                              |
| **Precios** | ¿Cuánto sale?            | El calendario de precios por fecha, la comparación entre rutas y aerolíneas, y las alertas                |

Y dónde vive cada cosa: la sección `/vuelos`; en cada guía, un bloque "Cómo
llegar desde tu ciudad", con la ruta y el precio hasta la ciudad base, y en el
planificador, el pasaje dentro del presupuesto, que hoy calcula todo menos el
gasto más grande del viaje.

### 17.2 Fuentes, licencias y costos

| Para qué        | Fuente                                                   | Hoy                | Al lanzar                                                                |
| --------------- | -------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------ |
| Aeropuertos     | OurAirports, de dominio público                          | Gratis             | Gratis                                                                   |
| Tu ciudad       | La ubicación aproximada que agrega Vercel a cada request | Gratis             | Incluido                                                                 |
| Mapas           | MapLibre con OpenFreeMap, sin clave y con uso comercial  | Gratis             | Gratis                                                                   |
| Aviones en vivo | adsb.lol, y la ruta de cada vuelo por su número          | Gratis             | Gratis: su licencia, ODbL, admite uso comercial citando la fuente (17.5) |
| Rutas y precios | Travelpayouts, la red de afiliados de Aviasales          | Gratis, con cuenta | Gratis; paga comisión                                                    |
| Mails           | Un servicio con plan gratuito                            | Gratis             | Gratis hasta varios miles por mes                                        |
| Hosting         | Vercel                                                   | Plan Hobby         | Plan Pro, unos 20 dólares por mes                                        |

Lo que no existe gratis, y qué se hace en su lugar:

- **Precios en vivo.** Amadeus, la fuente gratuita que usaba casi todo el
  mundo, cerró su portal para desarrolladores el 2026-07-17. Los precios de
  Travelpayouts son los que otros usuarios encontraron en los últimos días, de
  dos a siete: alcanzan para un calendario y para comparar, y se muestran con
  su antigüedad ("precio visto hace 3 días"). La búsqueda en vivo la hace
  Aviasales cuando alguien hace clic, y ahí está la comisión.
- **El cartel de un aeropuerto** —horarios, puertas, demoras— solo está en APIs
  pagas. En su lugar va "En el aire ahora, desde y hacia este aeropuerto": los
  aviones en vuelo de adsb.lol con la ruta de cada uno.

Dos condiciones para encender los afiliados (17.4): el plan Hobby de Vercel es
para uso personal y no comercial, así que un sitio con links de afiliado pasa
al plan Pro, y adsb.lol tiene que saber que lo usamos: su licencia lo permite,
pero pide que le avisen quién lo usa en producción (17.5). La cuenta de
Travelpayouts la crea el dueño, y su clave va a las variables de entorno de
Vercel, nunca a un chat ni al repo. Hasta entonces se construye con datos de
prueba.

### 17.3 La base: los aeropuertos, tu ciudad y "Salgo desde"

Todo lo demás de la sección sale del aeropuerto del que sale cada uno, así que
es lo primero.

**Los aeropuertos.** Salen de OurAirports, de dominio público, a través de
`herramientas/aeropuertos/generar.py`, que escribe
`src/lib/vuelos/aeropuertos.json`: un aeropuerto por línea, para que un diff
se lea. Entran los que tienen código IATA y vuelos regulares, de los cuatro
tipos que los tienen —grande, mediano, chico e hidroaeropuerto—: 4.079 en 233
países y territorios, bajados el 2026-10-16. El generador valida antes de
escribir: códigos únicos, coordenadas en rango, una cantidad razonable y una
lista de aeropuertos que tienen que estar, desde Ezeiza hasta Funafuti. Los
nombres van como los escribe OurAirports, en inglés o en el idioma local; los
países, en castellano, con los nombres de las guías donde Intl escribe otro
("Rumania" y no "Rumanía", "Costa de Marfil" y no "Côte d'Ivoire").

La lista está al día: Nom Pen ya vuela desde Techo (KTI), Ulán Bator desde el
aeropuerto nuevo (UBN) y Dakar desde Blaise Diagne (DSS), y el de Biskek es
BSZ. Pesa 464 KB, así que es solo del servidor (`server-only`): al navegador le
llega lo que pide, ya resumido. El build lo verifica.

**La búsqueda** encuentra por el código ("EZE", u OACI: "SAEZ"), la ciudad, el
nombre del aeropuerto o el país, sin acentos y por el comienzo de cada palabra:
"bue" encuentra Buenos Aires, "ires" no. Como OurAirports está en inglés o en
el idioma local, `src/lib/vuelos/nombres-en-castellano.ts` tiene las ciudades
que en castellano se llaman distinto —Londres, Nueva York, Pekín, Atenas, que
para OurAirports es "Spata-Artemida"—, con sus aeropuertos en orden de
importancia. Una ciudad sin aeropuerto propio lleva el que la sirve, con un
comentario: buscar "Jerusalén" y no encontrar nada no le sirve a nadie.

El orden de los resultados se ajustó probándolo con búsquedas reales:

1. El código exacto.
2. La ciudad. Dentro de las ciudades, primero los aeropuertos grandes, después
   la ciudad que empieza con lo escrito ("london" pone London antes que East
   London) y, en una ciudad del diccionario, su orden: Heathrow antes que
   Gatwick.
3. El país escrito entero. "Argentina" tiene que traer Aeroparque y Ezeiza, no
   Ushuaia primero porque su aeropuerto se llama "Malvinas Argentinas".
4. El nombre del aeropuerto, los nombres alternativos y el país por el
   comienzo.

Un test busca la ciudad base de cada una de las 165 guías por su nombre y exige
un aeropuerto a menos de 150 km. Siete se buscan por la isla o la ciudad,
porque su base es un barrio o una zona: Singapur, Hong Kong, Macao, Bali,
Mauricio, Banjul y Esuatini.

**Tu ciudad.** Vercel agrega a cada request la ubicación aproximada de la
conexión: latitud, longitud, ciudad y país. No hace falta pedirle permiso al
navegador —la política del sitio lo tiene bloqueado (`geolocation=()`) y así
sigue—, se usa para sugerir y se descarta con la respuesta. Con una VPN o desde
un celular puede caer en otra ciudad, y por eso la página siempre deja buscar.

El más cercano no siempre es el que sirve: en el centro de Londres, London City
queda a 13 km y Heathrow a 23, pero desde Heathrow se va a casi cualquier lado.
La regla (`src/lib/vuelos/cercanos.ts`): de los aeropuertos a menos de 150 km,
el grande más cercano; si no hay grandes, el mediano, y así. Si no hay ninguno
en ese radio, el radio pasa a ser el doble de la distancia al más cercano del
mundo: desde Tristán da Cunha, el más cercano es Santa Elena, a 2.400 km, pero
el que sirve es Ciudad del Cabo, a 2.800. Las alternativas, hasta cuatro, van
en el mismo orden.

**"Salgo desde".** Lo que se elige se guarda en una cookie, `origen`, con el
código de tres letras: un año, `SameSite=Lax` y `Secure` (salvo en desarrollo).
Es la primera cookie del sitio, y corrige la nota de la sección 2:

- La pone solo quien elige un aeropuerto, con un botón, y la página dice al
  lado qué guarda y cómo se borra. "Olvidar" la saca. No identifica a nadie ni
  sirve para rastrear: son tres letras públicas. Por eso sigue sin haber
  banner.
- No es `httpOnly`, a propósito: las guías son estáticas, y para mostrar "Cómo
  llegar desde tu ciudad" la van a leer desde el navegador.
- Se valida en cada lectura: un código que no está en la lista no es un origen,
  y se ignora.

Por qué cookie y no localStorage: el servidor tiene que saber de dónde salís
para armar la página —las rutas, los precios— sin un segundo viaje al
navegador.

**La página.** `/vuelos` es dinámica, porque lee la cookie y la ubicación, y
Next la manda sin caché compartida. Tiene tres estados: el origen elegido, con
"Olvidar"; la sugerencia por la conexión, con las alternativas y sus
distancias, y el buscador solo, cuando no hay ubicación (en local, o si Vercel
no la informa).

Anda sin JavaScript: el buscador es un formulario GET a `/vuelos?buscar=`, y
elegir y olvidar son formularios con Server Actions, que responden con un 303.
Con JavaScript, el buscador consulta `/api/aeropuertos?q=` mientras se escribe
—espera 200 ms desde la última tecla y cancela el pedido anterior: escribir
"londres" hace un solo pedido— y la URL no cambia. La API depende solo de la
URL y la guarda la CDN de Vercel: un día fresca y una semana más mientras se
renueva.

Todavía no se indexa ni se enlaza (`noindex`, fuera del sitemap y del menú):
hasta que la sección tenga más que el selector, no hay nada que buscar ahí.
(Desde el radar, sí: 17.5.)
Lo que se escribe en el buscador sale de la URL antes de llegar a analytics,
porque suele ser la ciudad donde vive cada uno (`redactarUrl`), y `/api/` queda
fuera de los buscadores (`robots.ts`).

### 17.4 Lo que viene

Un PR por paso, cada uno usable por sí solo:

1. ~~La base: los aeropuertos, tu ciudad y "Salgo desde"~~ (17.3).
2. ~~En vivo~~: el radar por zonas, con el total del mundo (17.5). Fue
   enseguida, aunque no sea lo más útil para planear: es la parte curiosa, la
   que hace que alguien entre. Con él, `/vuelos` se enlaza y se indexa.
3. **Aeropuertos.** La página de cada aeropuerto, con lo que vuela ahora desde
   y hacia él, y sus rutas.
4. **Rutas.** El mapa de conexiones, en `/vuelos` y en cada guía.
5. **Precios.** El calendario, el comparador y el pasaje en el presupuesto, con
   los links de afiliado listos pero apagados. En la moneda del país de cada
   uno cuando Travelpayouts la tiene; si no, en dólares.
6. **Alertas por mail.** Solo el mail, con confirmación y un link para darse de
   baja con un clic, como piden las leyes de datos personales de Argentina y
   Europa. Es el primer dato personal que guarda el sitio: va separado de los
   viajes, sin nada que lo una a un `edit_token`, para que el modelo de la
   sección 3 siga en pie.
7. **Lanzamiento,** cuando lo decida el dueño: plan Pro de Vercel, afiliados
   encendidos y licencias confirmadas (17.2).

### 17.5 En vivo: el radar por zonas

**Lo que dio la fuente.** La API pública de adsb.lol no da todos los aviones
del mundo a la vez. Da los que están a menos de 250 millas náuticas —463 km— de
un punto, y el total que ve en el mundo (`/0/me`: unos seis mil, de madrugada
en América). La lista global completa queda para quien le aporta datos con una
antena propia, y avisa que más adelante va a pedir una clave que se consigue
así. Su licencia es ODbL, la de OpenStreetMap: se puede usar con fines
comerciales citando la fuente, y con eso se cerró la duda de 17.2. Pide,
además, que le avisen quién la usa en producción.

Con eso, el "mapa del mundo con todos los aviones" de 17.1 no se podía hacer
gratis. Entre un radar por zonas, una antena propia y una fuente paga, el dueño
eligió el radar: es gratis hoy, y si más adelante se quiere el mapa completo, la
antena —una Raspberry Pi con un receptor y una antena— lo habilita sin tocar el
resto.

**Las zonas.** El radar arranca en el aeropuerto de quien mira —el elegido, el
sugerido por la conexión o, sin ninguno, Ezeiza— y muestra los aviones de su
zona: un círculo de 463 km con el centro en una grilla de un grado
(`src/lib/vuelos/zona.ts`). Al mover el mapa, carga la zona de la grilla más
cercana al centro. La grilla está por la caché: todos los que miran Buenos
Aires piden la misma URL, y adsb.lol recibe un pedido por zona, no uno por
visitante. Por eso la API solo acepta centros de la grilla escritos de una sola
forma: cualquier variante sería otra URL que la caché no puede ahorrar.

**La caché, y el límite.** En las pruebas, ocho pedidos en siete segundos
alcanzaron para que adsb.lol contestara 429. Hay tres capas:

- `/api/vuelos/en-vivo` se guarda en la CDN de Vercel 15 segundos, y 30 más
  mientras se renueva.
- Detrás, el `fetch` a adsb.lol se guarda en la caché de datos de Next el mismo
  tiempo, y el total del mundo, un minuto, compartido entre todas las zonas.
  Next solo guarda las respuestas 200: un 429 no pisa los datos que había.
- Si adsb.lol igual pide esperar, la API contesta 503 con `Retry-After: 60`, la
  CDN lo guarda ese minuto y el radar se frena: todos los que miran esa zona
  esperan juntos.

El radar pide cada 15 segundos, y solo con la pestaña a la vista.

**Qué se muestra.** Los aviones en vuelo con una posición de menos de un
minuto. Los que están en tierra no, y tampoco los que pidieron no aparecer —la
lista LADD de EE.UU. y las direcciones PIA—, aunque adsb.lol los publique. La
altitud va en metros y la velocidad en km/h, como el resto del sitio, y los
textos que vienen de los transpondedores se aceptan solo con forma de vuelo,
modelo o matrícula. Cada avión se dibuja girado hacia su rumbo; al tocarlo, una
ficha dice su vuelo, matrícula, modelo, altitud, velocidad y hacia dónde va.

**El mapa.** MapLibre 6 con el estilo "positron" de OpenFreeMap, que encaja con
el tema claro del sitio:

- Las etiquetas salen en castellano cuando OpenStreetMap las tiene
  (`name:es`): "Alemania", "Londres".
- El norte queda siempre arriba —no gira ni se inclina—, y los gestos son
  cooperativos: la página baja con la rueda o con un dedo, y el mapa se mueve
  con Ctrl o con dos dedos.
- Su worker no se encuentra solo cuando Next empaqueta la librería: se lo da
  `setWorkerUrl`, con la dirección que arma el bundler con `new URL`, como en
  la guía de Next.
- La CSP suma `tiles.openfreemap.org` en `connect-src` e `img-src`. Los aviones
  no: el navegador los pide al propio sitio.

Si un arrastre se suelta afuera del mapa, MapLibre lo cierra recién cuando el
mouse vuelve a pasar por encima, y recién ahí carga la zona nueva. Es de la
librería, no se traba, y no se tocó.

**La zona lleva el nombre de un aeropuerto.** "Zona: hasta 463 km alrededor de
London Gatwick Airport (LGW)", y no el de su ciudad: OurAirports pone el
municipio, que a veces no dice nada —el aeropuerto de Kassel figura en
"Calden"— y a veces está en inglés.

**Accesibilidad.** Debajo del mapa, la lista de los 50 aviones más cercanos al
centro, con un botón para verlos en el mapa. Lo que cambia —la zona,
"buscando"— se anuncia; el refresco de cada 15 segundos no cambia el texto y no
interrumpe.

**Sin JavaScript.** El primer pedido lo hace el servidor, así que los números
y la lista llegan con la página. Pero llegan por el streaming de React, que
necesita JavaScript para mostrarse: sin JavaScript, la página dice que el radar
lo necesita, y "Salgo desde" anda igual.

**Enlazado.** `/vuelos` deja de ser `noindex`, entra al sitemap y se enlaza
desde la portada, abajo del botón de los destinos: como enlace y no como un
segundo botón, porque el hero sigue invitando a una sola cosa.

**Lo que queda.** Escribirle a adsb.lol que el sitio usa su API, como pide: lo
hace el dueño ([`docs/administrar.md`](docs/administrar.md)). Y si un día se
quiere el mapa del mundo completo, la antena.

## 18. Qué comer y beber

Una sección nueva, `/que-comer`, con lo que se come y se toma en cada país: un
catálogo de platos con filtros, la ficha de cada uno como la página de un menú
y, al final de la ficha, un mapa de los lugares que lo sirven. El pedido venía
con los filtros de un sitio de referencia y tres condiciones del dueño: que los
lugares estén al día sin cargarlos a mano, que no cueste plata —su pilar de
"eficiencia compartida": gastar solo lo que genera valor— y que haya lugar para
los negocios locales, de los puestitos a la alta cocina.

### 18.1 Qué es, y lo que se corrigió del pedido

- **Los lugares salen de OpenStreetMap, no de un scraper.** Scrapear Google
  Maps o TripAdvisor viola sus condiciones, y se cae cada vez que cambian la
  página. Google sabe antes que nadie de un restaurante nuevo, pero cobra por
  consulta y no deja mostrar sus datos en otro mapa que el suyo.
  OpenStreetMap es gratis, admite uso comercial citando la fuente y Overpass
  lo sirve al minuto: lo que alguien carga hoy, la consulta lo ve hoy (18.4).
- **"Mañana mismo" tiene una condición.** Un lugar que abre mañana aparece
  mañana si alguien lo carga en OpenStreetMap, y en una ciudad grande eso pasa
  rápido; en un pueblo, puede tardar. Ninguna fuente gratuita promete más. Para
  acortarlo, la página invita a los negocios a cargarse ellos mismos (18.5).
- **"Halal only" pasa a "Sin cerdo ni alcohol".** No podemos certificar que algo
  sea halal: también depende de cómo se faenó la carne. Lo que sí se puede decir
  es qué lleva.
- **Los filtros cambian por país.** La lista del pedido era la de Japón: la
  izakaya y las regiones de Japón no tienen sentido en México. Los tipos de
  lugar son los mismos en todos los países, con su nombre local —en Japón el bar
  es una izakaya; en México, la cantina—, y cada país tiene sus regiones. Un
  filtro que no dejaría ningún plato no se muestra.
- **Los precios, en dólares.** "$$" tiene que querer decir lo mismo en Japón
  que en la Argentina: la página es para comparar entre países.
- **Las menciones de honor no se compran.** Son lugares elegidos y se dice. Si
  algún día se venden lugares destacados, van con la palabra "pago" al lado: lo
  exige la ley de publicidad, y el plan Hobby de Vercel no admite uso comercial
  (17.2).
- **Las dos opciones del final de la ficha** son "Buscá restaurantes con esta
  comida", que abre el mapa, y "Compartir". Las menciones de honor del plato van
  arriba de los botones, cuando hay.

### 18.2 Las páginas

| Ruta                        | Qué es                                                                   | Cómo se renderiza                                              |
| --------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `/que-comer`                | Los países con catálogo, por zona                                        | Estática                                                       |
| `/que-comer/{pais}`         | El encabezado, la introducción, la despensa, el catálogo y las menciones | Estática; se regenera una vez por día por las menciones (18.5) |
| `/que-comer/{pais}/{plato}` | La ficha del plato, entera                                               | Estática, igual                                                |
| `/api/que-comer/lugares`    | Los lugares de una celda del mapa                                        | Dinámica; caché de doce horas y diez minutos en la CDN (18.4)  |

Al tocar un plato del catálogo, su ficha se abre en una ventana encima
(`@ficha/(.)[plato]`, una ruta paralela que intercepta la navegación) y la URL
pasa a ser la del plato: se puede copiar y compartir, y el botón de volver la
cierra. Con un link directo o al recargar no hay ventana: se ve la página del
plato, que es también la que encuentra un buscador ("qué es el takoyaki").

Solo aparecen los países que tienen catálogo. La guía de cada uno enlaza a su
catálogo, y la portada a `/que-comer`, como enlace y no como un botón más.

### 18.3 El catálogo, los filtros y la ficha

Cada catálogo es un archivo en `src/content/comidas/`, como las guías. Un plato
dice qué es, a qué sabe, qué lleva, cuánto sale y dónde y cuándo se come
(`types.ts`). Lo que decide si alguien lo puede comer no se marca a mano: se
deriva de `contiene`, la lista de lo que lleva la versión de siempre.
"Vegetariano" escrito al lado de un plato con caldo de pescado es el error más
fácil de cometer, y el que más le importa a quien lo lee; con la lista, no se
puede escribir. Un test revisa además que los ingredientes y `contiene` digan lo
mismo: si un ingrediente es "panceta", el plato lleva cerdo.

Los filtros son los del pedido, en castellano:

- **Para destacar:** solo los imperdibles, para comer solo.
- **Dieta:** vegetariano, vegano, con carne, con pescado o mariscos, y sin cerdo
  ni alcohol, con la aclaración de que no es lo mismo que halal.
- **Picante, dónde se consigue, momento del día, qué tan aventurero, precio** y
  **de dónde es típico**: una región muestra lo típico de ahí, no todo lo que se
  consigue ahí.

Dentro de un grupo se suman (vegano o vegetariano) y entre grupos se cruzan
(vegano y barato). Cada opción dice cuántos platos dejaría, y la que no dejaría
ninguno se apaga. Los filtros van en la URL, para compartir "comida vegana y
barata en Japón" como un link; se leen recién en el navegador, porque el HTML
del servidor tiene el catálogo entero, que es lo que lee un buscador. En el
teléfono el panel se abre desde un botón "Filtros (2)".

La ficha es la página de un menú: el nombre en grande y como se escribe allá,
el precio con su rango, la descripción, el sabor, los ingredientes, dónde y
cuándo se come, de qué región es y qué lleva para tu dieta, con la advertencia
de que cada lugar lo hace a su manera. Si el plato no se busca en un mapa —el
onigiri lo tiene cualquier konbini, el mate se toma en casa—, la ficha lo dice
en vez de mostrar un botón que no lleva a nada.

### 18.4 El mapa de lugares: la regla de la frescura

**Qué se busca.** OpenStreetMap no sabe qué platos sirve cada lugar: sabe qué
tipo de cocina tiene y cómo se llama. Cada plato dice cómo encontrarlo
(`buscar`): en qué tipos de lugar, con qué cocinas (`cuisine=ramen`) o con qué
palabras en el nombre ("taquería", "ラーメン"). La búsqueda sale del contenido,
nunca del navegador: la API no deja preguntarle a OpenStreetMap cualquier cosa
en nombre del sitio.

**Por celdas.** El mapa no pide "lo que hay alrededor de donde miro": pide
celdas fijas de una décima de grado, unos 11 km de lado, como un mapa pide
mosaicos (`src/lib/comidas/celdas.ts`). Todos los que miran el centro de Tokio
piden las mismas URLs y comparten la caché, y al mover el mapa solo se piden las
celdas nuevas. Más alejado que el zoom 12 no se carga nada —no se distinguiría—,
y la API solo acepta celdas a menos de 300 km de una ciudad del catálogo: es
"dónde comer esto en Japón".

**La regla.**

1. Cada celda y cada búsqueda se le preguntan a Overpass como mucho una vez
   cada doce horas, y solo si alguien las mira. La respuesta se guarda en la
   caché de Next con la búsqueda en la clave: si un PR cambia cómo se busca un
   plato, la caché vieja no se usa.
2. Pasadas las doce horas, el primero que mira recibe lo guardado y dispara la
   actualización por detrás. Si Overpass falla, queda lo anterior: un mapa con
   los datos de ayer es mejor que uno vacío, siempre que diga de cuándo son.
3. Lo que tiene menos de un día se sirve con diez minutos de CDN. Lo que tiene
   más —una celda que nadie miró en días— sale igual, sin CDN y avisando:
   "Estamos actualizando los datos, que son del 25 de octubre". El mapa lo
   vuelve a pedir a los ocho segundos, cuando la caché ya se renovó. Nadie ve
   datos de más de un día sin que la página se lo diga.
4. No se muestra lo que OpenStreetMap ya marca como cerrado, de cualquiera de
   las formas en que se marca (`disused`, un horario "closed", una fecha de
   cierre pasada, "(cerrado)" en el nombre).
5. Cada lugar dice cuán al día está: "Alguien confirmó que sigue abierto en
   agosto de 2025", o, si nadie lo tocó en cuatro años, "puede haber cerrado",
   y se dibuja apagado. No se esconde: en muchas ciudades serían la mayoría.
6. Cualquiera lo corrige. Cada lugar tiene "¿Cerró o está mal? Avisá", que deja
   una nota en OpenStreetMap en ese punto, sin cuenta; cuando un voluntario la
   resuelve, acá se ve en un día.

**El límite de Overpass.** Pide no pasar de diez mil consultas por día. Con doce
horas por celda, solo las celdas que alguien mira y la CDN adelante, el sitio
queda lejos. Si igual pide esperar (429 o 504), la API contesta 503 con
`Retry-After: 60`, la CDN guarda ese minuto y el mapa se frena, como el radar
con adsb.lol (17.5).

**El mapa.** El mismo MapLibre con OpenFreeMap del radar, con lo común en
`src/lib/mapa/` y `src/components/mapa/`. Arranca en la ciudad de la región del
plato —el okonomiyaki, en Osaka— y tiene botones para saltar a las otras. Los
lugares se agrupan cuando son muchos, y al tocar uno sale su ficha: dirección,
horario en castellano ("Lu-Vi 11:00-15:00"), teléfono, web, cómo llegar —un link
común a Google Maps con las coordenadas, que no tiene costo— y su ficha en
OpenStreetMap. Debajo, la lista de los treinta más cercanos al centro, para
quien no ve el mapa. MapLibre se baja recién al tocar "Buscá restaurantes": pesa
más que todo el catálogo.

Lo que viene de OpenStreetMap lo escribió cualquiera: los nombres se muestran
como texto, la web solo entra si es http o https, y quién editó cada lugar no
sale del servidor.

### 18.5 Menciones de honor y negocios

Una mención es un lugar elegido a mano —un puestito de barrio, un lugar con
historia, una mesa de alta cocina, un mercado— con por qué ir y los platos por
los que se lo menciona. Lo elegido a mano es lo que más rápido queda viejo, así
que cada una va atada a su ficha de OpenStreetMap y una vez por día se pregunta
por todas juntas, en un solo pedido (`src/lib/comidas/menciones.ts`): la que ya
no está o está marcada como cerrada deja de mostrarse sola. Si Overpass no
contesta, se muestran todas: se verificaron al cargarlas. Aparecen en la página
del país, en la ficha de sus platos y en el mapa, en dorado.

Para los negocios, la página explica cómo aparecer gratis: cargarse en
OpenStreetMap con su tipo de cocina. Al día siguiente están en el mapa de cada
plato que sirven, acá y en todas las apps que usan OpenStreetMap. Es la otra
mitad de la frescura: el que más rápido puede cargar un lugar nuevo es su dueño.

### 18.6 Las fotos

De Wikimedia Commons, con licencia libre que admite uso comercial —dominio
público, CC0, CC BY o CC BY-SA— y el autor y la licencia al lado de cada una. El
catálogo nombra solo el archivo; `herramientas/comidas/fotos.py` le pregunta a
Commons las miniaturas, el autor y la licencia, rechaza lo que no sirve y lo
deja en `fotos.json`, y un test exige que toda foto nombrada haya pasado por
ahí. Las miniaturas se sirven desde `upload.wikimedia.org`, la CDN de
Wikimedia: gratis, y sin gastar las optimizaciones de imágenes de Vercel. La
CSP suma ese dominio solo en `img-src`.

Sin foto, la tarjeta muestra el nombre como se escribe allá —"ラーメン"—, que
ayuda a reconocerlo en un menú, en vez de una foto de stock que nadie se acuerda
de cambiar.

### 18.7 Fuentes, licencias y costos

| Para qué    | Fuente                                    | Costo                                 |
| ----------- | ----------------------------------------- | ------------------------------------- |
| Platos      | Escritos a mano, en el repo               | —                                     |
| Lugares     | OpenStreetMap, por Overpass               | Gratis; ODbL: se cita la fuente       |
| Mapa        | MapLibre con OpenFreeMap, como el radar   | Gratis                                |
| Fotos       | Wikimedia Commons                         | Gratis; cada licencia pide su crédito |
| Cómo llegar | Un link a Google Maps con las coordenadas | Gratis: es un link, no la API         |

### 18.8 Primera tanda: Japón, México y la Argentina

Japón porque es el ejemplo del pedido, México por los tacos al pastor, y la
Argentina por la casa: 41, 32 y 24 platos y bebidas, con su despensa, sus
regiones y sus ciudades. Quedaron para cuando el entorno llegue a Overpass y a
Commons: comprobar con datos reales que cada búsqueda encuentra los lugares que
tiene que encontrar, las fotos y las menciones de honor, que se verifican en
OpenStreetMap antes de escribirlas. El mapa se probó con respuestas simuladas.

### 18.9 Lo que viene

Los demás países con guía, de a tandas, por continente, como las guías. Cuando
haya cuentas, los platos que alguien guarda para su viaje. Y si un día el mapa
necesita más de lo que da OpenStreetMap en una ciudad, una fuente paga se suma
para esa ciudad, no para todas.
