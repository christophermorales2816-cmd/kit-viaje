/**
 * Las coordenadas de un país, sin el salto del antimeridiano (spec, 16.4).
 *
 * Fiyi y Kiribati cruzan el meridiano 180: un pueblo está en 179,9 y el de al
 * lado en -179,9. Para Leaflet son las dos puntas del mapa, y el encuadre de
 * esos dos pines muestra el planeta entero, con el país partido en los bordes.
 *
 * Si los destinos ocupan más de media vuelta de longitud, los del oeste se
 * corren una vuelta al este: -179,9 pasa a 180,1 y queda pegado a 179,9.
 * Leaflet acepta longitudes mayores que 180 y las dibuja sobre la copia del
 * mapa que sigue al este, así que los pines y el encuadre quedan juntos.
 *
 * Un país que no cruza el antimeridiano vuelve tal cual. El contenido guarda
 * siempre las coordenadas de verdad, entre -180 y 180: esto es solo para
 * dibujar.
 */
export function sinSaltoDeAntimeridiano(
  coords: readonly [number, number][],
): [number, number][] {
  if (coords.length === 0) return [];

  const longitudes = coords.map(([, lon]) => lon);
  const ancho = Math.max(...longitudes) - Math.min(...longitudes);

  if (ancho <= 180) return coords.map(([lat, lon]) => [lat, lon]);

  return coords.map(([lat, lon]) => [lat, lon < 0 ? lon + 360 : lon]);
}
