/**
 * Geometría sobre la esfera, sin datos (spec, 17 y 18).
 *
 * Vive aparte para que la use también el navegador: el radar decide en el
 * cliente cuándo el mapa se movió a otra zona y dibuja su borde, y
 * cercanos.ts —que carga la lista de aeropuertos— es solo del servidor. El
 * mapa de "Qué comer" la usa para saber si una zona queda dentro del país.
 */

const RADIO_DE_LA_TIERRA_KM = 6371;
const RAD = Math.PI / 180;

/**
 * Distancia sobre la esfera, en kilómetros (fórmula del haversine).
 *
 * La Tierra no es una esfera, pero para elegir aeropuerto o zona el error
 * —menos del medio por ciento— no cambia nada.
 */
export function distanciaKm(
  [lat1, lon1]: readonly [number, number],
  [lat2, lon2]: readonly [number, number],
): number {
  const dLat = (lat2 - lat1) * RAD;
  const dLon = (lon2 - lon1) * RAD;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * RAD) * Math.cos(lat2 * RAD) * Math.sin(dLon / 2) ** 2;

  return 2 * RADIO_DE_LA_TIERRA_KM * Math.asin(Math.min(1, Math.sqrt(a)));
}

/**
 * Una longitud del mismo lado del mundo que `referencia`.
 *
 * Cerca del antimeridiano, un avión en -179° y el centro de su zona en 179°
 * están a doscientos kilómetros, pero el mapa los dibujaría en las dos puntas
 * del planeta. Corriendo la longitud 360° queda al lado: el mapa entiende
 * longitudes más allá de 180.
 */
export function longitudCercaDe(lon: number, referencia: number): number {
  return lon + 360 * Math.round((referencia - lon) / 360);
}

/**
 * El borde de un círculo de `radioKm` alrededor de un punto: `puntos` vértices
 * [lon, lat] —el orden de GeoJSON— y el primero repetido al final para
 * cerrarlo.
 *
 * Se calcula sobre la esfera y no como un círculo en grados: a la latitud de
 * Ushuaia un grado de longitud mide la mitad que en el ecuador, y el círculo
 * saldría aplastado. Las longitudes no se recortan a ±180, por lo mismo que
 * en longitudCercaDe: una zona sobre el antimeridiano sigue siendo un círculo.
 */
export function circulo(
  lat: number,
  lon: number,
  radioKm: number,
  puntos = 64,
): [number, number][] {
  const angulo = radioKm / RADIO_DE_LA_TIERRA_KM;
  const lat1 = lat * RAD;
  const anillo: [number, number][] = [];

  for (let i = 0; i < puntos; i++) {
    const rumbo = (2 * Math.PI * i) / puntos;
    const lat2 = Math.asin(
      Math.sin(lat1) * Math.cos(angulo) +
        Math.cos(lat1) * Math.sin(angulo) * Math.cos(rumbo),
    );
    const lon2 =
      lon * RAD +
      Math.atan2(
        Math.sin(rumbo) * Math.sin(angulo) * Math.cos(lat1),
        Math.cos(angulo) - Math.sin(lat1) * Math.sin(lat2),
      );

    anillo.push([lon2 / RAD, lat2 / RAD]);
  }

  return [...anillo, anillo[0]];
}
