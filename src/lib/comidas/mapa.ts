import type {
  CatalogoDeComida,
  CiudadDelMapa,
  Plato,
} from "@/content/comidas/types";
import { distanciaKm } from "@/lib/geo";

import { type LugarDeComida, sinNovedades } from "./lugares";

/**
 * Lo que el mapa de lugares dibuja y lista, sin el mapa (spec, 18.4). Como en
 * el radar, son funciones puras: el componente solo se las pasa a MapLibre.
 */

/**
 * Dónde arranca el mapa de un plato: en la primera ciudad de su región, si es
 * de una región —el okonomiyaki, en Osaka—, y si no, en la primera del país.
 */
export function ciudadInicial(
  catalogo: Pick<CatalogoDeComida, "ciudades">,
  plato: Pick<Plato, "regiones">,
): CiudadDelMapa {
  return (
    catalogo.ciudades.find(
      (ciudad) => ciudad.region && plato.regiones.includes(ciudad.region),
    ) ?? catalogo.ciudades[0]
  );
}

/**
 * Los lugares de varias celdas, sin repetir: un mercado grande puede tocar dos
 * celdas, y Overpass lo devuelve en las dos.
 */
export function juntarLugares(
  porCelda: readonly (readonly LugarDeComida[])[],
): LugarDeComida[] {
  const vistos = new Map<string, LugarDeComida>();

  for (const lugares of porCelda) {
    for (const lugar of lugares) {
      if (!vistos.has(lugar.id)) vistos.set(lugar.id, lugar);
    }
  }

  return [...vistos.values()];
}

interface PropiedadesDeLugar {
  id: string;
  /** Si nadie lo confirmó en años: se dibuja apagado (lugares.ts). */
  dudoso: boolean;
  elegido: boolean;
}

export function geojsonDeLugares(
  lugares: readonly LugarDeComida[],
  hoy: Date,
  elegido: string | null,
): GeoJSON.FeatureCollection<GeoJSON.Point, PropiedadesDeLugar> {
  return {
    type: "FeatureCollection",
    features: lugares.map((lugar) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [lugar.lon, lugar.lat] },
      properties: {
        id: lugar.id,
        dudoso: sinNovedades(lugar, hoy),
        elegido: lugar.id === elegido,
      },
    })),
  };
}

export interface LugarCercano {
  lugar: LugarDeComida;
  distanciaKm: number;
}

/**
 * Los lugares del más cercano al más lejano de un punto: el orden de la lista,
 * para quien no ve el mapa. Manda la distancia; si un lugar puede haber
 * cerrado, se dice al lado (sinNovedades), no se lo manda al fondo.
 */
export function porCercania(
  lugares: readonly LugarDeComida[],
  [lat, lon]: readonly [number, number],
): LugarCercano[] {
  return lugares
    .map((lugar) => ({
      lugar,
      distanciaKm: distanciaKm([lat, lon], [lugar.lat, lugar.lon]),
    }))
    .sort((a, b) => a.distanciaKm - b.distanciaKm);
}
