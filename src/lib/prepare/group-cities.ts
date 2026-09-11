import type { Destination } from "@/lib/supabase/reference";

/**
 * Agrupar las ciudades del selector por región (spec, sección 12.4).
 *
 * Con seis ciudades una tira de chips se lee de un vistazo; con quince es un
 * bloque de texto en el que nadie encuentra nada. La región es el dato que
 * vuelve navegable esa lista, y en Bolivia además es el dato que importa: si
 * alguien duda entre Coroico y Potosí, saber que una es Yungas y la otra
 * Altiplano le dice más que los dos nombres juntos.
 *
 * La región vive en el contenido editorial y las ciudades vienen de la base, así
 * que el cruce se hace por slug. Una ciudad que la base tenga y el contenido no
 * NO se descarta: cae en un grupo sin nombre al final. Esconder un destino
 * planificable porque falta una línea de contenido sería el error de la sección
 * 11 otra vez, al revés.
 */
export type CityGroup = { region: string | null; destinations: Destination[] };

export function groupCitiesByRegion(
  destinations: Destination[],
  regionBySlug: Record<string, string>,
): CityGroup[] {
  // Un Map preserva el orden de inserción, así que las regiones salen en el
  // orden en que aparece su primera ciudad. Como las ciudades llegan con la
  // base primero, la región de la base queda arriba sin necesidad de un ranking
  // de regiones, que sería inventado.
  const grupos = new Map<string | null, Destination[]>();

  for (const destino of destinations) {
    const region = regionBySlug[destino.slug] ?? null;
    const existente = grupos.get(region);

    if (existente === undefined) {
      grupos.set(region, [destino]);
    } else {
      existente.push(destino);
    }
  }

  // El grupo sin región va último: es el cajón de lo que el contenido todavía no
  // nombró, no una región más.
  const sinRegion = grupos.get(null);
  grupos.delete(null);

  const ordenados: CityGroup[] = [...grupos].map(([region, destinations]) => ({
    region,
    destinations,
  }));

  if (sinRegion !== undefined) {
    ordenados.push({ region: null, destinations: sinRegion });
  }

  return ordenados;
}
