import type { ClimateBucketId, PackingCatalogItem } from "@/lib/packing";

/**
 * Los ítems más representativos de un clima (spec, sección 9.3).
 *
 * Es una vista editorial del catálogo, no el motor de packing: acá no hay
 * cantidades ni días, solo "qué define empacar para este mes". El motor real
 * corre en el planificador, con las fechas del viaje.
 *
 * El orden es por ESPECIFICIDAD: primero los ítems que sirven para pocos
 * climas. Sin esto los doce meses mostraban los mismos chips, porque los
 * genéricos —remera, cepillo de dientes— llevan las tres etiquetas y ganaban
 * siempre por orden de catálogo. Un short que solo sirve con calor dice algo
 * de enero; un cepillo de dientes no dice nada de ningún mes.
 *
 * El desempate es el orden del catálogo, que ya está curado: estable entre
 * renders y sin sorpresas.
 */
export function suggestItemsForBuckets(
  catalog: PackingCatalogItem[],
  buckets: ClimateBucketId[],
  limit: number,
): PackingCatalogItem[] {
  // Sin guarda para `buckets` vacío: el filtro de abajo ya devuelve una lista
  // vacía, y una guarda que no cambia el resultado es código que nadie puede
  // romper — ni testear.
  return catalog
    .map((item, orden) => ({ item, orden }))
    .filter(({ item }) => item.climateTags.some((tag) => buckets.includes(tag)))
    .sort(
      (a, b) =>
        a.item.climateTags.length - b.item.climateTags.length ||
        a.orden - b.orden,
    )
    .slice(0, limit)
    .map(({ item }) => item);
}
