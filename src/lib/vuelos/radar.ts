import { circulo, distanciaKm, longitudCercaDe } from "./geo";
import type { AvionEnVuelo, CentroDeZona } from "./tipos";

/**
 * Lo que el radar dibuja y lista, sin el mapa (spec, 17.5).
 *
 * Son funciones puras para que se puedan probar: el componente
 * (src/components/vuelos/radar.tsx) solo se las pasa a MapLibre.
 */

/** Un avión en el GeoJSON del mapa: lo justo para dibujarlo y elegirlo. */
interface PropiedadesDeAvion {
  hex: string;
  vuelo: string | null;
  rumbo: number | null;
  elegido: boolean;
}

/**
 * Los aviones como GeoJSON, con el elegido marcado.
 *
 * Las longitudes se acercan al centro de la zona: sobre el antimeridiano, un
 * avión en -179° quedaría en la otra punta del mapa (geo.ts).
 */
export function geojsonDeAviones(
  aviones: readonly AvionEnVuelo[],
  centro: CentroDeZona,
  elegido: string | null,
): GeoJSON.FeatureCollection<GeoJSON.Point, PropiedadesDeAvion> {
  return {
    type: "FeatureCollection",
    features: aviones.map((avion) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [longitudCercaDe(avion.lon, centro.lon), avion.lat],
      },
      properties: {
        hex: avion.hex,
        vuelo: avion.vuelo,
        rumbo: avion.rumbo,
        elegido: avion.hex === elegido,
      },
    })),
  };
}

/** El borde de la zona: un círculo de `radioKm` alrededor de su centro. */
export function geojsonDeZona(
  centro: CentroDeZona,
  radioKm: number,
): GeoJSON.Feature<GeoJSON.LineString> {
  return {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: circulo(centro.lat, centro.lon, radioKm),
    },
    properties: {},
  };
}

/** El rectángulo que contiene la zona, [[oeste, sur], [este, norte]]. */
export function limitesDeZona(
  centro: CentroDeZona,
  radioKm: number,
): [[number, number], [number, number]] {
  const anillo = circulo(centro.lat, centro.lon, radioKm);
  const longitudes = anillo.map(([lon]) => lon);
  const latitudes = anillo.map(([, lat]) => lat);

  return [
    [Math.min(...longitudes), Math.min(...latitudes)],
    [Math.max(...longitudes), Math.max(...latitudes)],
  ];
}

export interface AvionCercano {
  avion: AvionEnVuelo;
  distanciaKm: number;
}

/**
 * Los aviones del más cercano al más lejano del centro de la zona.
 *
 * Es el orden de la lista: quien no ve el mapa —un lector de pantalla, alguien
 * sin JavaScript— encuentra primero lo que vuela cerca.
 */
export function porCercania(
  aviones: readonly AvionEnVuelo[],
  centro: CentroDeZona,
): AvionCercano[] {
  return aviones
    .map((avion) => ({
      avion,
      distanciaKm: distanciaKm(
        [centro.lat, centro.lon],
        [avion.lat, avion.lon],
      ),
    }))
    .sort((a, b) => a.distanciaKm - b.distanciaKm);
}

/**
 * La etiqueta de un lugar del mapa en castellano, si OpenStreetMap la tiene:
 * "Londres" y no "London", "Alemania" y no "Germany". Si no la tiene, queda la
 * del estilo.
 *
 * Solo se tocan las etiquetas que muestran nombres, que en el estilo son
 * expresiones: las patentes de las rutas (`ref`) quedan como están.
 */
export function etiquetaEnCastellano<Campo>(campo: Campo): Campo {
  if (!Array.isArray(campo) || !JSON.stringify(campo).includes('"name')) {
    return campo;
  }

  // Sigue siendo una expresión de texto, como la que entró.
  return ["coalesce", ["get", "name:es"], campo] as unknown as Campo;
}

const PUNTOS_CARDINALES = [
  "norte",
  "noreste",
  "este",
  "sureste",
  "sur",
  "suroeste",
  "oeste",
  "noroeste",
];

/** Hacia dónde apunta un rumbo, en palabras: 141° es "sureste". */
export function puntoCardinal(grados: number): string {
  const octavo = Math.round((((grados % 360) + 360) % 360) / 45) % 8;

  return PUNTOS_CARDINALES[octavo];
}
