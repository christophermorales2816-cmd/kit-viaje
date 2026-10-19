import type { CentroDeZona } from "./tipos";

/**
 * Las zonas del radar (spec, 17.5).
 *
 * adsb.lol no da todos los aviones del mundo de una vez: da los que están a
 * menos de 250 millas náuticas —463 km— de un punto. El radar trabaja por
 * zonas, círculos de ese radio con el centro en una grilla de un grado.
 *
 * Por qué una grilla y no el punto exacto: la respuesta se guarda en la CDN
 * por URL. Si cada visitante pidiera el centro exacto de su mapa, no habría dos
 * URL iguales y cada uno haría su propio pedido a adsb.lol. Con la grilla,
 * todos los que miran Buenos Aires piden la misma zona, y adsb.lol recibe un
 * pedido cada unos segundos por zona, no uno por visitante.
 *
 * Un grado son unos 111 km, así que el centro del mapa nunca queda a más de
 * unos 80 km del centro de su zona.
 */

/** 250 millas náuticas: lo más lejos que busca adsb.lol alrededor de un punto. */
export const RADIO_DE_ZONA_KM = 463;

/** Más allá, el mapa ya no puede mostrarlo: la proyección termina en ±85°. */
const LATITUD_MAXIMA = 85;

/** Una longitud entre -180 (incluido) y 180 (excluido). */
function normalizarLongitud(lon: number): number {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}

/** El centro de la zona que le toca a un punto: el de la grilla más cercano. */
export function centroDeZona(lat: number, lon: number): CentroDeZona {
  return {
    // El `+ 0` convierte -0 en 0: los dos se escriben distinto en una URL.
    lat:
      Math.max(-LATITUD_MAXIMA, Math.min(LATITUD_MAXIMA, Math.round(lat))) + 0,
    lon: normalizarLongitud(Math.round(lon)) + 0,
  };
}

/** Un entero sin ceros de más: "-34" sí; "-034", "-0" y "34.0" no. */
const ENTERO = /^(0|-?[1-9]\d{0,2})$/;

/**
 * El centro que pide una URL de la API, si es uno de la grilla.
 *
 * Solo se acepta la forma exacta que arma el radar. Cualquier variante —un
 * cero adelante, decimales— sería la misma zona con otra URL, y cada URL nueva
 * es un pedido nuevo a adsb.lol que la CDN no puede ahorrar.
 */
export function centroDeConsulta(
  lat: unknown,
  lon: unknown,
): CentroDeZona | null {
  if (typeof lat !== "string" || typeof lon !== "string") return null;
  if (!ENTERO.test(lat) || !ENTERO.test(lon)) return null;

  const centro = centroDeZona(Number(lat), Number(lon));

  return centro.lat === Number(lat) && centro.lon === Number(lon)
    ? centro
    : null;
}

/** La URL de la API para una zona. */
export function rutaDeZona({ lat, lon }: CentroDeZona): string {
  return `/api/vuelos/en-vivo?lat=${lat}&lon=${lon}`;
}
