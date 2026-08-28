/**
 * Orden de las listas generadas.
 *
 * Vive fuera de los motores por la misma razón que quantity.ts: los dos ordenan
 * con el mismo criterio (categoría, después nombre, después id como desempate)
 * y la lectura del viaje tiene que reproducirlo exactamente. Si la lista
 * guardada volviera en otro orden que la generada, el dashboard mostraría los
 * ítems reordenados después del primer refresh sin que nadie tocara nada.
 *
 * El desempate por id existe para que el orden sea total: dos ítems con la
 * misma categoría y el mismo nombre son posibles, y sin tercer criterio el sort
 * quedaría a merced de cómo llegaron las filas.
 */

export interface CatalogEntry {
  id: string;
  category: string;
  name: string;
}

/**
 * `localeCompare` con locale explícito y no el del entorno: el servidor puede
 * correr en cualquier locale, y con el default "camión" y "camion" se ordenan
 * distinto según dónde deployes.
 */
export function compareCatalogEntries(a: CatalogEntry, b: CatalogEntry): number {
  return (
    a.category.localeCompare(b.category, "es") ||
    a.name.localeCompare(b.name, "es") ||
    a.id.localeCompare(b.id)
  );
}

/** Ordena por la entrada de catálogo que envuelve cada elemento. */
export function byCatalogEntry<T>(
  pick: (value: T) => CatalogEntry,
): (a: T, b: T) => number {
  return (a, b) => compareCatalogEntries(pick(a), pick(b));
}
