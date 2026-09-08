import type { ClimateBucketId, PackingCatalogItem } from "@/lib/packing";

/**
 * Los ítems más representativos de un clima (spec, sección 9.3).
 *
 * Es una vista editorial del catálogo, no el motor de packing: acá no hay
 * cantidades ni días, solo "qué define empacar para este mes". El motor real
 * corre en el planificador, con las fechas del viaje. La diferencia importa
 * para entender el orden: el planificador lista TODO lo que puede llegar a
 * hacer falta y deja que el usuario baje a cero lo que no; acá hay cuatro
 * lugares y hay que gastarlos en lo que caracteriza al mes.
 *
 * El orden tiene tres claves, y las tres hicieron falta:
 *
 * 1. PRIMERO LO QUE MATCHEA EL BUCKET PRINCIPAL DEL MES. Un mes abarca varios
 *    buckets, y sin esta clave el enero porteño —20 a 30 °C, o sea templado de
 *    noche y cálido de tarde— sugería "buzo o polar" y "pantalón largo",
 *    porque el buzo está etiquetado [frio, templado] y matchea por la mínima.
 *    Un polar no es lo que define un enero en Buenos Aires. Peor todavía: el
 *    traje de baño quedaba afuera de enero y aparecía en mayo.
 *
 * 2. DESPUÉS LO ESPECÍFICO. Los ítems genéricos —remera, cepillo de dientes—
 *    llevan las tres etiquetas y si no ganaban siempre por orden de catálogo.
 *    Un short que solo sirve con calor dice algo de enero; un cepillo de
 *    dientes no dice nada de ningún mes.
 *
 * 3. Y al final el orden del catálogo, que ya está curado: estable entre
 *    renders y sin sorpresas.
 *
 * Lo que NO se toca son las etiquetas del catálogo. Que el traje de baño sea
 * [templado, calido] y por eso aparezca en un mayo de 11 a 19 °C es discutible,
 * pero esas etiquetas también las usa el motor de packing: cambiarlas cambia la
 * lista que se genera para un viaje real, y eso es una decisión de producto, no
 * un arreglo de presentación.
 */
export function suggestItemsForBuckets(
  catalog: PackingCatalogItem[],
  buckets: ClimateBucketId[],
  /** El bucket que define el mes. `null` cuando el mes no tiene datos. */
  primaryBucket: ClimateBucketId | null,
  limit: number,
): PackingCatalogItem[] {
  // Sin guarda para `buckets` vacío: el filtro de abajo ya devuelve una lista
  // vacía, y una guarda que no cambia el resultado es código que nadie puede
  // romper — ni testear.
  return catalog
    .map((item, orden) => ({
      item,
      orden,
      // 0 el que matchea el bucket principal, 1 el que no: la resta de abajo
      // necesita números, no booleanos. Sin bucket principal la clave queda
      // constante en 0 y el orden pasa entero a las dos claves siguientes —no
      // es una guarda, es el caso degenerado del mismo cálculo.
      fueraDelPrincipal:
        primaryBucket === null || item.climateTags.includes(primaryBucket)
          ? 0
          : 1,
    }))
    .filter(({ item }) => item.climateTags.some((tag) => buckets.includes(tag)))
    .sort(
      (a, b) =>
        a.fueraDelPrincipal - b.fueraDelPrincipal ||
        a.item.climateTags.length - b.item.climateTags.length ||
        a.orden - b.orden,
    )
    .slice(0, limit)
    .map(({ item }) => item);
}
