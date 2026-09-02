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

## 4. Motor de packing

> **Actualizado: las listas se generan en cero.** El motor decide **qué** entra en la lista, no **cuánto**. Cada ítem generado llega con cantidad 0 y el usuario suma lo que se acopla a su viaje. La regla de escalado por duración que se describe más abajo sigue viva y testeada en `src/lib/quantity.ts`, y viaja con cada ítem del catálogo, pero ya no se aplica sola: una lista preseleccionada obliga a desmarcar en vez de elegir. Vale igual para el motor de presupuesto (sección 5). La base acompaña con `check (qty >= 0)` en las dos tablas de sesión y default 0, así que "ninguno" es un estado representable y no hay que borrar la fila para expresarlo.

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
1. Un usuario sin cuenta puede definir fechas + tipo de viaje y llegar a una lista de equipaje y un presupuesto generados automáticamente, **con todas las cantidades en cero**, listos para que elija lo que necesita.
2. El presupuesto se recalcula en tiempo real al cambiar entre las 4 cotizaciones.
3. El link `share_slug` abre una vista funcional en modo solo lectura, verificable desde otro navegador.
4. Exportar a PDF y CSV funciona para ambas listas.
5. Volver al planificador (`/guia/{slug}/planificar`) en el mismo navegador después de crear un trip muestra el acceso rápido en "Tus viajes recientes". Vivía en `/`, pero con el flujo de tres páginas la bienvenida quedó como una sola banda de presentación (8.1) y el historial pertenece al lugar donde se decide un viaje.
6. Los tests del motor de packing y del motor de presupuesto pasan en CI.
7. Ninguna escritura a `trips`, `trip_packing_items` o `trip_budget_items` es posible sin un `edit_token` válido — verificable intentando una mutación directa contra la API de Supabase con la anon key.

Los criterios 8 a 11, propios de la guía de destino, están en la sección 8.8.

## 8. Guía de destino

Pivote de producto, decidido después de tener el planner funcionando. El globo se queda donde está —es la entrada y el selector de destino—, pero lo que se abre al tocarlo deja de ser el datepicker y pasa a ser una **guía informativa de Argentina**. El planner no se elimina: pasa a ser la tercera página del flujo, entero.

**Por qué.** Una herramienta suelta se lee como un ejercicio; una guía que termina en una herramienta se lee como un producto. Además resuelve un problema real del embudo actual: quien cae en `/` sin saber nada de Argentina no tiene motivo para elegir fechas todavía. Se le pedía el gesto final —fechas, tipo de viaje— antes de haberle dado una sola razón. La guía le da esa razón y lo deja parado justo arriba del planner.

**Alcance geográfico:** país, no ciudad. El corredor de datos sigue siendo Buenos Aires (sección 3: un solo `destination`); la guía habla de Argentina. No es una inconsistencia a ocultar — es lo que el MVP puede sostener hoy, y el texto lo dice donde corresponde en vez de fingir cobertura nacional en los cálculos.

**Idioma:** español, sin cambios (sección 2).

### 8.1 Estructura: tres páginas, no una

La promesa es "el mundo en tus manos: elegís un destino y te decimos lo que necesitás saber". El globo es el punto de entrada y el selector de destino, y todo lo demás cuelga de ese click.

Primero se probó todo en una sola página con cinco bloques. No estaba mal, pero invertía el orden: quien llegaba leía "empezá por Argentina" antes de haber elegido nada. Se separa en tres pasos, uno por página.

**Página 1 — Bienvenida (`/`).** No habla del país. **Un solo rectángulo oscuro a sangre**, del borde superior hasta debajo de los números: el título, el resumen de qué hace el producto, dos accesos (explorar la guía, abrir el planificador), el globo al costado y los cuatro números adentro de la misma banda. El hero y las estadísticas son la misma zona, no dos bandas apiladas con una costura en el medio. El marcador del globo es un `<Link>` a la guía: navega sin JavaScript, se abre en otra pestaña y Next precarga la página al pasar el mouse.

**Página 2 — La guía del país (`/guia/{slug}`).** Adónde llega el click. El nombre del país, la línea de resumen y los **cuatro números destacados** (8.3); después las **cotizaciones en vivo** (8.7), el **tablero informativo** fechado (8.4) y los **puntajes** (8.5). Cierra invitando al planificador. Prerenderizada con `generateStaticParams`, y con `dynamicParams = false`: un slug que no existe es 404, no una guía vacía.

**Página 3 — El planificador (`/guia/{slug}/planificar`).** El datepicker, el tipo de viaje y **"Tus viajes recientes"**. El formulario y su Server Action no cambian respecto de la sección 6A; lo único que se movió es dónde vive. Queda pendiente rediseñarlo.

El historial vive acá y no en la bienvenida: la página 1 quedó como una sola banda de presentación, y una lista guardada en `localStorage` no pertenece a esa banda. Acá está donde se decide un viaje, que es el momento en que a alguien le sirve retomar uno anterior.

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

### 8.8 Criterios de aceptación adicionales

8. El flujo de tres páginas funciona de punta a punta: `/` no nombra el país en su título, el marcador del globo lleva a `/guia/argentina`, y desde ahí se llega a `/guia/argentina/planificar`. Cada página tiene vuelta a la anterior, y un slug inexistente responde 404.
9. Crear un viaje desde la página 3 sigue llevando a `/viaje/{edit_token}` — el pivote no toca el flujo de las secciones 6B a 6D.
10. El bloque de cotizaciones muestra las cuatro con hora de consulta, y con dolarapi caído muestra el mensaje de error sin romper el resto de la página — verificable interceptando la respuesta.
11. Un test valida el contenido de la guía contra su interfaz: exactamente cuatro `highlights`, cada `score` entre 0 y 10, y `factsUpdatedAt` ni en el futuro ni con más de 180 días de antigüedad. El último caso es deliberado: el test falla solo cuando el contenido envejece, y esa falla en CI es el recordatorio de revisarlo. Es la contraparte de haber puesto el contenido en git (8.2).
