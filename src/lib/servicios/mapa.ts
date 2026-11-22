import type { GuidePlace } from "@/content/guias";
import {
  type Limites,
  celdasVisibles,
  claveDeCelda,
} from "@/lib/comidas/celdas";
import { distanciaKm } from "@/lib/geo";

import {
  DIBUJO_DEL_SERVICIO,
  type ServicioCercano,
  ZOOM_MINIMO_DE_SERVICIOS,
  celdaCercaDeLaGuia,
} from "./servicios";

/**
 * Lo que la capa de servicios del mapa de la guía dibuja y lista, sin el mapa
 * (spec, 26). Como en el mapa de cada plato, son funciones puras: el
 * componente solo se las pasa a MapLibre.
 */

/** Qué celdas pedir según lo que se ve del mapa. */
export type VistaDeServicios =
  | { tipo: "apagado" }
  /** Muy alejado: las celdas serían demasiadas. */
  | { tipo: "lejos" }
  /** Lo que se ve queda lejos de todos los destinos de la guía. */
  | { tipo: "fuera" }
  | { tipo: "celdas"; claves: string[] };

/** Las celdas que hay que pedir para lo que se ve del mapa. */
export function vistaDeServicios({
  activo,
  zoom,
  limites,
  places,
}: {
  activo: boolean;
  zoom: number;
  limites: Limites;
  places: readonly Pick<GuidePlace, "coords">[];
}): VistaDeServicios {
  if (!activo) return { tipo: "apagado" };
  if (zoom < ZOOM_MINIMO_DE_SERVICIOS) return { tipo: "lejos" };

  const visibles = celdasVisibles(limites);
  if (!visibles) return { tipo: "lejos" };

  const cerca = visibles.filter((celda) => celdaCercaDeLaGuia(celda, places));

  return cerca.length === 0
    ? { tipo: "fuera" }
    : { tipo: "celdas", claves: cerca.map(claveDeCelda) };
}

/** Los servicios de varias celdas, sin repetir: un hospital grande puede tocar dos. */
export function juntarServicios(
  porCelda: readonly (readonly ServicioCercano[])[],
): ServicioCercano[] {
  const vistos = new Map<string, ServicioCercano>();

  for (const servicios of porCelda) {
    for (const servicio of servicios) {
      if (!vistos.has(servicio.id)) vistos.set(servicio.id, servicio);
    }
  }

  return [...vistos.values()];
}

export interface ServicioALaDistancia {
  servicio: ServicioCercano;
  distanciaKm: number;
}

/** Del más cercano al más lejano de un punto: el orden de la lista. */
export function serviciosPorCercania(
  servicios: readonly ServicioCercano[],
  centro: readonly [number, number],
): ServicioALaDistancia[] {
  return servicios
    .map((servicio) => ({
      servicio,
      distanciaKm: distanciaKm(
        [centro[0], centro[1]],
        [servicio.lat, servicio.lon],
      ),
    }))
    .sort((a, b) => a.distanciaKm - b.distanciaKm);
}

interface PropiedadesDeServicio {
  id: string;
  color: string;
  letra: string;
}

export function geojsonDeServicios(
  servicios: readonly ServicioCercano[],
): GeoJSON.FeatureCollection<GeoJSON.Point, PropiedadesDeServicio> {
  return {
    type: "FeatureCollection",
    features: servicios.map((servicio) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [servicio.lon, servicio.lat] },
      properties: { id: servicio.id, ...DIBUJO_DEL_SERVICIO[servicio.tipo] },
    })),
  };
}
