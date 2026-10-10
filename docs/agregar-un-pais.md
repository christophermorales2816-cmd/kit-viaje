# Agregar un país

Este documento existe porque Bolivia salió con errores que Argentina y Brasil ya
habían enseñado. Lo que sigue es el procedimiento completo: seguirlo entero
alcanza para que un país nuevo entre sin sorpresas.

**Lo único que hace falta pedir es esto:**

1. El país y su **ciudad base** (la que el planificador usa por defecto).
2. La **moneda** y, si tiene más de un tipo de cambio, cómo se llaman.
3. Las **ciudades** que además de la base valga la pena ofrecer.

Todo lo demás sale de acá.

---

## 1. Qué archivos se tocan

Son cuatro, siempre los mismos, y ninguno es un refactor:

| Archivo                                           | Qué lleva                                                                  |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| `src/content/guias/<pais>.ts`                     | La guía: highlights, facts, scores, lugares y todo el bloque `preparation` |
| `src/content/guias/index.ts`                      | Sumar el país a `GUIAS` y al `export`                                      |
| `src/lib/quotes/corridors.ts`                     | El corredor de cotizaciones                                                |
| `supabase/migrations/<fecha>_corredor_<pais>.sql` | Destinos, clima y precios                                                  |

Si hubo que tocar otra cosa, o es un bug del motor o el país está pidiendo algo
que el modelo todavía no sabe expresar. Las dos merecen una conversación, no un
parche.

## 2. La guía (`src/content/guias/<pais>.ts`)

Copiar la forma de `brasil.ts`, que es la más limpia. Los tamaños no son
decorativos: hay tests que los fijan.

- **4 highlights**, ni tres ni cinco.
- **1 lugar destacado** (`featured: true`), exactamente uno.
- **Coordenadas reales** de cada lugar. Un signo cambiado planta el pin en
  China, así que hay que agregar la caja del país a `CAJAS` en `guias.test.ts`.
- **`preparation.adviceByBucket` con los cuatro buckets**: `frio`, `fresco`,
  `templado`, `calido`. Faltar uno deja un mes sin consejo.
- **El `id` de cada lugar ES su `slug` en la base.** No hay tabla de
  traducción: si no coinciden, el mosaico enlaza a una página que no existe.
  Tiene que ser único dentro del país, no entre países: hay una Concepción en
  Bolivia y otra en Paraguay, y las dos son `concepcion`.
- **El lugar destacado es la ciudad base.** La portada pone el marcador del
  globo en el destino destacado, y ese marcador dice dónde están calibrados los
  cálculos.
- **`subregion`**: Sudamérica, México y Centroamérica o Caribe en América. En
  Europa y Asia, la división de la ONU: Europa del Sur, Occidental, del Norte y
  del Este; Asia Occidental, Central, del Sur, Sudeste Asiático y Asia
  Oriental. Turquía y Chipre, que la ONU pone en Asia, están en Europa del Sur;
  el Cáucaso queda en Asia Occidental. Agrupa la lista de países de la portada.
  Una zona nueva se suma al tipo `GuideSubregion`, al orden `ZONAS` y al Record
  `CONTINENTE` de `src/app/page.tsx`; el compilador avisa si falta alguno.
- **La entrada es parte de la guía, y nunca se da por cerrada.** En Europa,
  Schengen se cuenta sumando todos sus países y el Reino Unido tiene su propia
  autorización previa. En Asia casi cada país tiene su régimen —visa
  electrónica, visa a la llegada, exención por pasaporte— y cambia seguido. La
  guía dice cuál es el mecanismo, no si tu pasaporte lo necesita: "verificá el
  tuyo" y "fijate si ya está vigente".
- **Los nombres, en castellano.** Se usa el nombre que usa la prensa en
  castellano (Pekín, Tokio, Seúl, Hanói, Calcuta) y el `slug` va sin acentos ni
  eñes (`pekin`, `hanoi`). Si la ciudad se conoce más por otro nombre, la guía
  lo menciona una vez.
- **El clima de Asia se lee en la lluvia, no solo en la temperatura.** Muchas
  ciudades caen en `calido` los doce meses: lo que cambia es el monzón. Va en
  `precip_probability`, que la página de preparación usa para marcar la
  temporada de lluvias y elegir el mejor mes, y los consejos de
  `adviceByBucket` hablan de la lluvia aunque el bucket sea siempre el mismo.
  Indonesia y Timor Oriental están casi enteros al sur del ecuador.
- **El enchufe va en la guía** (`preparation.plug`). La lista de equipaje dice
  "adaptador universal" para todos los países; el tipo de cada uno lo da la
  guía.

## 3. El corredor de cotizaciones

En `corridors.ts`. Hay tres formas, según cómo se paga en el país:

| Caso                | Cómo se declara                                    | Ejemplos                            |
| ------------------- | -------------------------------------------------- | ----------------------------------- |
| Un tipo de cambio   | `unaCotizacion(slug, moneda, reloj)`               | Chile, México, España, Reino Unido  |
| Varias cotizaciones | un objeto con sus `quoteIds`, default y referencia | Argentina, Bolivia, Venezuela, Cuba |
| Dolarizado          | `dolarizado(slug, reloj)`                          | Ecuador, El Salvador, Panamá        |

En Asia, Timor Oriental es dolarizado: su moneda es el dólar.

**Precios en dólares con moneda propia.** Si la moneda local tiene inflación
alta y a un viajero se le cobra en dólares —Venezuela y Cuba—, el corredor
sigue en la moneda local, porque eso es lo que la guía explica, pero
`destinations.base_currency` y los precios van en `USD`. `budgetConversionStatus`
reconoce el caso y el presupuesto no intenta convertir. En Asia es el caso de
Camboya, donde al turista se le cobra en dólares y el riel es el vuelto: el
corredor es `unaCotizacion("camboya", "KHR", …)` y los precios van en USD. Es
también el caso probable de Maldivas, que se decide en su tanda.

**`source: null` si no se verificó la API contra una respuesta real.** No se
adivina el nombre de los campos. Brasil costó un ciclo entero por escribir
`fechaAtualizacao` cuando el campo era `dataAtualizacao`: "fecha" en español,
"data" en portugués. Con `source: null` la página dice honestamente que todavía
no hay cotización en vivo y todo lo demás funciona.

## 4. La migración

Ids fijos, nunca `gen_random_uuid()`, en un rango que no choque con los países
que ya están. Los países de 2026-10 usan `00000000-0000-4000-8000-00000000{cc}{nn}`,
con `cc` en hexadecimal y por bloques: Europa usó del `10` al `46`, del `47` al
`4f` queda para lo que falte de Europa, y **Asia arranca en `50`** (las dos primeras
tandas usaron del `50` al `5b`; hay lugar hasta `8f`). Por cada ciudad:

- 1 fila en `destinations`, con `slug` y con `is_base` en **una sola** por
  corredor (hay un índice parcial que lo obliga).
- **12 filas** en `climate_profiles`. No once.
- **18 filas** en `products`. Las de la ciudad base a mano, en su moneda; las
  demás derivadas con un factor y `md5(destination_id || name)::uuid`. **Una
  moneda lleva centavos si su unidad vale más de medio dólar** —dólar, euro,
  libra, franco suizo, marco bosnio; en Asia, los dólares de Singapur y Brunéi,
  el manat azerí y los dinares y riales de Kuwait, Baréin, Omán y Jordania—, y
  ahí las derivadas van con `round(precio * factor, 2)`: redondear a la unidad
  convierte un café de 2,50 en uno de 2 o de 3. Las demás, enteras. La lista
  vive en `MONEDAS_CON_CENTAVOS` (`src/lib/format.ts`) y en `CON_CENTAVOS`
  (`generar.py`); un test exige que coincidan, así que una moneda nueva se suma
  en los dos lados o CI falla.
- Los nombres de atracciones, genéricos —"Entrada a la atracción principal"—,
  porque las ciudades derivadas heredan los nombres de la base.
- Si una sola ciudad tiene una regla propia —el transporte gratis de Belgrado,
  que el resto de Serbia no tiene—, va un `update` al final de la migración,
  después de derivar las otras ocho, con un comentario que diga por qué. Un
  precio cero lleva el motivo en el nombre, para que no parezca un dato que
  falta.

Las migraciones de los países de 2026-10 tienen la forma exacta a copiar; la
de Chile es la más corta de leer. Las de Europa se generaron con
`herramientas/corredor/generar.py`, que valida doce meses, nueve ciudades y
dieciocho precios antes de escribir nada: describir el país en un archivo como
`herramientas/corredor/ejemplo_andorra.py` y correr

```bash
python3 herramientas/corredor/generar.py supabase/migrations AAAAMMDD HH <archivo>
```

La base además rechaza un precio en otra moneda que la de su ciudad
(`20261008120200_moneda_coherente.sql`).

`packing_catalog` **no se toca**: es global y el mismo catálogo sirve para todos
los países. Que eso ya fuera así es la razón por la que sumar un país no obliga
a duplicar treinta y cuatro filas de ropa.

## 5. Verificación, en este orden

Ninguno de estos pasos es opcional, y el orden importa.

```bash
npm run lint
npm test
npm run build        # ANTES del typecheck: genera los tipos de las rutas
npm run typecheck
```

Después, contra una base **virgen** —no una que ya tenga el país a medias—:

```bash
# aplicar las migraciones una por una, en orden alfabético
# y después el smoke de RLS (38 asserts en verde) y supabase/tests/integridad.sql
```

Si la migración toca `destinations` o cualquier constraint, esto es obligatorio:
una vez se rompió `main` por agregar una columna `not null` sin re-correr el job.

Por último, **levantar la app y mirarla**. Cuatro de los mejores hallazgos de
este proyecto aparecieron así y ningún test los tenía. Comprobar que dos ciudades
de clima opuesto dan listas opuestas:

- La más fría del país: abrigo, cero ítems de playa.
- La más cálida: playa, cero abrigo.

Si las dos dan lo mismo, el motor no está leyendo el destino.

## 6. Y lo que de verdad rompió Bolivia

Todo lo anterior estaba bien y aun así el país salió en 404. Dos causas, ninguna
en el código del país:

**La migración nunca corrió en producción.** El workflow `Migraciones` venía
fallando hacía tres merges y nadie lo miraba. El repo y la base son dos cosas
distintas: que el SQL esté commiteado no significa que esté aplicado. **Después
de mergear, mirar que la corrida de Migraciones esté en verde.** Ningún test del
repo puede sustituir eso.

**Las páginas devolvían 404 cuando faltaban los datos.** Eso escondía la causa:
el lector veía "esta página no existe" para un país que sí existe. Ahora
degradan — muestran el contenido editorial y dicen qué falta. Si al abrir un país
nuevo aparece ese aviso, la respuesta no es tocar el código: **es que la
migración no se aplicó.**

## 7. La lista corta

- [ ] `src/content/guias/<pais>.ts` con los cuatro buckets, `subregion` y un solo `featured`, que es la base
- [ ] Registrado en `index.ts`
- [ ] Caja del país en `CAJAS` (`guias.test.ts`)
- [ ] Corredor en `corridors.ts` (`source: null` si no se verificó la API)
- [ ] Migración: 12 filas de clima y 18 precios por ciudad, una sola base
- [ ] `lint`, `test`, `build`, `typecheck`
- [ ] Migraciones sobre base virgen + smoke de RLS e integridad en verde
- [ ] La app mirada en el navegador: dos ciudades opuestas, listas opuestas
- [ ] Spec actualizado
- [ ] **Post-merge: la corrida de Migraciones en verde**
