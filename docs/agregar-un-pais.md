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

## 3. El corredor de cotizaciones

En `corridors.ts`, declarando ids, default, referencia para la brecha, labels y
reloj (`timeZone` + `label`).

**`source: null` si no se verificó la API contra una respuesta real.** No se
adivina el nombre de los campos. Brasil costó un ciclo entero por escribir
`fechaAtualizacao` cuando el campo era `dataAtualizacao`: "fecha" en español,
"data" en portugués. Con `source: null` la página dice honestamente que todavía
no hay cotización en vivo y todo lo demás funciona.

## 4. La migración

Ids fijos, nunca `gen_random_uuid()`, en un rango que no choque con los países
que ya están. Por cada ciudad:

- 1 fila en `destinations`, con `slug` y con `is_base` en **una sola** por
  corredor (hay un índice parcial que lo obliga).
- **12 filas** en `climate_profiles`. No once.
- **18 filas** en `products`. Las de la ciudad base a mano, en su moneda; las
  demás derivadas con un factor y `md5(destination_id || name)::uuid`.

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
# y después el smoke de RLS, que tiene que dar 26 asserts en verde
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

- [ ] `src/content/guias/<pais>.ts` con los cuatro buckets y un solo `featured`
- [ ] Registrado en `index.ts`
- [ ] Caja del país en `CAJAS` (`guias.test.ts`)
- [ ] Corredor en `corridors.ts` (`source: null` si no se verificó la API)
- [ ] Migración: 12 filas de clima y 18 precios por ciudad, una sola base
- [ ] `lint`, `test`, `build`, `typecheck`
- [ ] Migraciones sobre base virgen + smoke de RLS en verde
- [ ] La app mirada en el navegador: dos ciudades opuestas, listas opuestas
- [ ] Spec actualizado
- [ ] **Post-merge: la corrida de Migraciones en verde**
