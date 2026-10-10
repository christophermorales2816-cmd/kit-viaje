# Datos

Qué datos tiene Kit de viaje, dónde vive cada uno, qué significa cada columna y
qué reglas los protegen. Es el documento para entender la base sin leer las
casi setenta migraciones.

## Tres fuentes, un mismo país

Un país está repartido en tres lugares, unidos por el mismo identificador:

| Dónde                           | Qué tiene                                                                            | Cómo se cambia  |
| ------------------------------- | ------------------------------------------------------------------------------------ | --------------- |
| `src/content/guias/<pais>.ts`   | El texto editorial: highlights, tablero, puntajes, lugares con coordenadas, consejos | PR al código    |
| `src/lib/quotes/corridors.ts`   | La moneda, las cotizaciones y la fuente de cada una                                  | PR al código    |
| Supabase (tablas de referencia) | Ciudades, clima de los doce meses, precios, catálogo de equipaje                     | Migración nueva |

El hilo que los une:

```
guia.slug  ==  destinations.corridor  ==  clave del corredor en corridors.ts
guia.places[].id  ==  destinations.slug  (único dentro del país)
```

Los tests lo verifican en los dos sentidos: cada guía tiene su país en la base,
cada país de la base tiene guía, cada lugar de una guía existe como ciudad, y la
moneda de la base es una de las dos que conoce su cotización
(`src/content/guias/destinos-planificables.test.ts`).

Hoy: **76 países, 690 ciudades, 8.280 filas de clima, 12.420 precios y 34 ítems
de equipaje.**

## Tablas de referencia (datos maestros)

Las lee cualquiera, las escriben solo las migraciones.

### `destinations` — una fila por ciudad

| Columna         | Tipo    | Significado                                                                                                                         |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | uuid    | Identificador. En los países de 2026-10, `00000000-0000-4000-8000-00000000{cc}{nn}`: `cc` es el país, `nn` la ciudad (`00` la base) |
| `name`          | text    | Nombre que se muestra, en castellano                                                                                                |
| `corridor`      | text    | El país, igual al slug de su guía                                                                                                   |
| `base_currency` | text    | Moneda de los precios (ISO 4217). Una sola por país                                                                                 |
| `is_base`       | boolean | La ciudad por defecto del país. Exactamente una por país                                                                            |
| `slug`          | text    | La ciudad en la URL (`?ciudad=ushuaia`). Único dentro del país                                                                      |

El `cc` va por bloques de continente: Europa usó del `10` al `46`, del `47` al
`4f` queda para lo que falte de Europa y Asia arranca en `50` (las tres primeras tandas
usaron del `50` al `61`).

### `climate_profiles` — doce filas por ciudad

| Columna                | Tipo    | Significado                                                    |
| ---------------------- | ------- | -------------------------------------------------------------- |
| `destination_id`       | uuid    | La ciudad                                                      |
| `month`                | int     | 1 a 12                                                         |
| `temp_min`, `temp_max` | numeric | Promedio histórico en °C, no pronóstico. `temp_min ≤ temp_max` |
| `precip_probability`   | numeric | Probabilidad de lluvia, de 0 a 100                             |

### `climate_thresholds` — los buckets de clima

| `id`       | `temp_max` | Lo que pide la valija |
| ---------- | ---------- | --------------------- |
| `frio`     | 10         | Abrigo                |
| `fresco`   | 18         | Capas                 |
| `templado` | 25         | Liviano con un buzo   |
| `calido`   | sin tope   | Liviano, playa        |

Un mes cae en todos los buckets que toca su rango: 8 / 20 °C es `frio`,
`fresco` y `templado` a la vez.

### `products` — dieciocho precios por ciudad

| Columna                                                    | Tipo        | Significado                                                                                |
| ---------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ |
| `id`                                                       | uuid        | `md5(destination_id ‖ name)`: determinístico, sin choques                                  |
| `destination_id`                                           | uuid        | La ciudad                                                                                  |
| `category`                                                 | text        | `comida`, `alojamiento`, `transporte` o `entretenimiento`                                  |
| `name`                                                     | text        | Lo que se muestra. Si el precio es cero, el nombre dice por qué ("gratis en todo el país") |
| `base_price`                                               | numeric     | Precio de referencia en la moneda de la ciudad. Orden de magnitud, no cotización           |
| `currency`                                                 | text        | Igual a la de la ciudad: un trigger lo exige                                               |
| `updated_at`                                               | timestamptz | Antigüedad del precio; la mantiene un trigger                                              |
| `base_qty`, `scales_with_days`, `days_per_unit`, `max_qty` |             | Cuántos sugiere el presupuesto según la duración del viaje                                 |

Las ciudades que no son la base copian los precios de la base multiplicados por
un factor (0,80 un pueblo, 1,30 un lugar de lujo). Las monedas cuya unidad
vale más de medio dólar (hoy USD, EUR, GBP, CHF y BAM; ya están listas SGD,
BND, AZN, JOD, KWD, BHD y OMR para Asia) redondean al centavo; el resto, a la
unidad. La lista es `MONEDAS_CON_CENTAVOS` en `src/lib/format.ts`.

### `packing_catalog` — el catálogo de equipaje, global

| Columna                                                    | Significado                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------- |
| `category`, `name`, `weight_g`                             | El ítem y su peso                                                |
| `climate_tags`                                             | En qué buckets de clima se sugiere                               |
| `trip_type_tags`                                           | En qué tipos de viaje: `playa`, `urbano`, `aventura`, `negocios` |
| `base_qty`, `scales_with_days`, `days_per_unit`, `max_qty` | Cantidad según la duración                                       |

## Tablas de sesión (datos de los usuarios)

Nadie las lee desde afuera: solo la app, con la service role key.

| Tabla                 | Una fila por…               | Columnas clave                                                                                                                        |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `trips`               | viaje                       | `destination_id`, `start_date`, `end_date` (hasta 30 días), `trip_type`, `edit_token` (privado), `share_slug` (público), `created_at` |
| `trip_packing_items`  | ítem que el usuario eligió  | `qty`, `checked`                                                                                                                      |
| `trip_budget_items`   | gasto que el usuario eligió | `qty`                                                                                                                                 |
| `limites_de_creacion` | cliente y hora              | `clave` (hash, nunca la IP), `ventana`, `cuenta`. Se limpia sola al día                                                               |

Un ítem con cantidad cero no tiene fila: la lista completa se genera al leer el
viaje y lo guardado se superpone encima (`src/lib/trips/read.ts`).

## Las reglas y dónde se hacen cumplir

| Regla                                                                     | Dónde                                            |
| ------------------------------------------------------------------------- | ------------------------------------------------ |
| Doce meses de clima por ciudad                                            | CI: `supabase/tests/integridad.sql`              |
| Una ciudad base por país, ni cero ni dos                                  | Índice único (no más de una) + CI (al menos una) |
| Slug con forma de URL, único en el país                                   | Check + índice único                             |
| Precios en la moneda de su ciudad                                         | Trigger en `products` y en `destinations`        |
| Una moneda por país                                                       | CI                                               |
| Buckets del catálogo que existen                                          | CI                                               |
| Cada tipo de viaje con ítems                                              | CI                                               |
| Precio ≥ 0, cantidades > 0, mes 1–12, lluvia 0–100, `temp_min ≤ temp_max` | Checks de la tabla                               |
| Viaje de 1 a 30 días, fin después del inicio                              | Checks de `trips` + validación en el servidor    |
| Cada guía con su país en la base y viceversa                              | Test de Vitest                                   |

`supabase/tests/integridad.sql` corre en cada PR y se puede pegar en el SQL
Editor de Supabase para verificar producción ([`administrar.md`](administrar.md)).

## Cómo se cambian los datos

**Siempre con una migración nueva.** Las migraciones aplicadas no se editan:
el workflow _Migraciones_ las aplica en orden y lleva registro de cuáles
corrieron.

- **Un país nuevo**: [`agregar-un-pais.md`](agregar-un-pais.md). El SQL se
  genera con `herramientas/corredor/generar.py` a partir de un archivo de
  datos; `ejemplo_andorra.py` es la plantilla.
- **Un precio o una ciudad**: una migración con el `update` o el `insert`
  puntual. Si una sola ciudad tiene una excepción (Belgrado con transporte
  gratis), va un `update` comentado al final de la migración.
- **Nunca a mano en Studio.** No queda en el repo, la próxima base armada desde
  las migraciones no lo tiene, y nadie sabe que existió.

## Funciones de la base

Ninguna se puede llamar desde afuera: solo la service role o el SQL Editor.

| Función                                                         | Para qué                                           |
| --------------------------------------------------------------- | -------------------------------------------------- |
| `set_updated_at()`                                              | Trigger: actualiza `products.updated_at` al editar |
| `exigir_moneda_del_destino()`, `exigir_moneda_de_los_precios()` | Triggers: precios en la moneda de su ciudad        |
| `consumir_cupo_de_viaje(clave, por_clave, global)`              | Cupo de creación de viajes (la llama la app)       |
| `purgar_viajes_terminados(dias)`                                | Limpieza manual de viajes viejos, mínimo 30 días   |
