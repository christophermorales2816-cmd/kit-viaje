/**
 * La geometría del globo de la portada (spec, 14.9 y 19.5): de coordenadas a
 * la pantalla y de vuelta, el arrastre, el zoom y el vuelo hacia un destino.
 *
 * Funciones puras, sin DOM: el componente (src/components/landing/globe-hero)
 * las llama en cada frame y los tests las verifican sin navegador.
 *
 * LA PROYECCIÓN
 *
 * La esfera se ve de frente, sin perspectiva: una proyección ortográfica.
 * Ocupa `RADIO_DE_LA_ESFERA` de la mitad del canvas y la escala la agranda
 * desde el centro. La Tierra la dibuja un shader con estas mismas cuentas
 * (src/components/landing/esfera.ts), y los puntos de los destinos son HTML
 * ubicados con `proyectar`: los dos lados usan la misma geometría, así que
 * coinciden a cualquier zoom (spec, 19.7).
 */

const RAD = Math.PI / 180;

/**
 * El radio de la esfera, en fracción de la mitad del canvas: deja lugar
 * alrededor para el halo de la atmósfera.
 */
export const RADIO_DE_LA_ESFERA = 0.8;

/** Hasta dónde se inclina el globo al arrastrar: más allá, los polos marean. */
export const LATITUD_MAXIMA = 75;

export const ESCALA_MINIMA = 1;

/**
 * Hasta dónde se acerca. A 4, la foto de 4096 px de la Tierra todavía se ve
 * nítida en un globo de escritorio, y dos destinos a 160 km quedan a 14
 * píxeles en el teléfono, que el dedo distingue; los que están más cerca los
 * resuelve la tarjeta ("Muy cerca").
 */
export const ESCALA_MAXIMA = 4;

/** Arrastrar el ancho entero del globo, sin zoom, lo gira media vuelta. */
const GRADOS_POR_ANCHO = 180;

export type Coordenadas = [lat: number, lon: number];

export interface Vista {
  /** Adónde mira la cámara: el punto del centro del globo. */
  lat: number;
  lon: number;
  /** 1 es el globo entero; 2, el doble de cerca. */
  escala: number;
}

/** Una longitud cualquiera, llevada a [-180, 180). */
export function normalizarLongitud(lon: number): number {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}

export function acotar(valor: number, minimo: number, maximo: number): number {
  return Math.min(maximo, Math.max(minimo, valor));
}

/**
 * Proyección ortográfica de una coordenada, vista desde `centro`.
 *
 * `x` e `y` van de -1 a 1 sobre el radio de la esfera (y crece hacia arriba);
 * `visible` es falso cuando el punto quedó del otro lado del planeta: ahí no
 * hay que dibujar nada, porque un marcador flotando sobre el océano
 * equivocado miente.
 *
 * El shader de la Tierra hace la cuenta inversa (`desproyectar`) para cada
 * píxel: por eso un destino cae sobre su lugar de la foto a cualquier zoom.
 */
export function proyectar(
  [lat, lon]: Coordenadas,
  [lat0, lon0]: Coordenadas,
): { x: number; y: number; z: number; visible: boolean } {
  const dLon = (lon - lon0) * RAD;
  const la = lat * RAD;
  const la0 = lat0 * RAD;

  const x = Math.cos(la) * Math.sin(dLon);
  const y =
    Math.cos(la0) * Math.sin(la) -
    Math.sin(la0) * Math.cos(la) * Math.cos(dLon);
  const z =
    Math.sin(la0) * Math.sin(la) +
    Math.cos(la0) * Math.cos(la) * Math.cos(dLon);

  return { x, y, z, visible: z > 0 };
}

/**
 * Lo inverso de `proyectar`: qué coordenada hay debajo de un punto de la
 * esfera. `x` e `y` sobre el radio, como los devuelve `proyectar`; null si el
 * punto cae afuera del disco.
 */
export function desproyectar(
  x: number,
  y: number,
  [lat0, lon0]: Coordenadas,
): Coordenadas | null {
  const r2 = x * x + y * y;
  if (r2 > 1) return null;

  const z = Math.sqrt(1 - r2);
  const la0 = lat0 * RAD;
  const lat = Math.asin(acotar(y * Math.cos(la0) + z * Math.sin(la0), -1, 1));
  const dLon = Math.atan2(x, z * Math.cos(la0) - y * Math.sin(la0));

  return [lat / RAD, normalizarLongitud(lon0 + dLon / RAD)];
}

/**
 * Dónde cae, en píxeles desde el centro del contenedor, un punto proyectado.
 * `lado` es el ancho del contenedor (el globo es cuadrado).
 */
export function aPixeles(
  x: number,
  y: number,
  lado: number,
  escala: number,
): { px: number; py: number } {
  const radio = (lado / 2) * RADIO_DE_LA_ESFERA * escala;
  return { px: x * radio, py: -y * radio };
}

/**
 * La vista después de arrastrar `dx`, `dy` píxeles sobre un globo de `lado`
 * píxeles. Arrastrar a la derecha lleva la superficie a la derecha, como con
 * la mano sobre una pelota: la cámara mira más al oeste. Arrastrar hacia abajo
 * la lleva hacia abajo: la cámara mira más al norte.
 *
 * Con zoom se gira menos por píxel: lo que se mueve bajo el dedo es la
 * superficie, que ahora está más cerca.
 */
export function vistaTrasArrastre(
  inicial: Vista,
  dx: number,
  dy: number,
  lado: number,
): Vista {
  if (lado <= 0) {
    return { ...inicial, lon: normalizarLongitud(inicial.lon) };
  }

  const grados = GRADOS_POR_ANCHO / (lado * inicial.escala);

  return {
    escala: inicial.escala,
    lon: normalizarLongitud(inicial.lon - dx * grados),
    lat: acotar(inicial.lat + dy * grados, -LATITUD_MAXIMA, LATITUD_MAXIMA),
  };
}

/** La longitud después de arrastrar `dx` píxeles, sin zoom. */
export function longitudTrasArrastre(
  lonInicial: number,
  dx: number,
  ancho: number,
): number {
  return vistaTrasArrastre({ lat: 0, lon: lonInicial, escala: 1 }, dx, 0, ancho)
    .lon;
}

/**
 * El centro que deja `destino` derecho hacia arriba del centro, a `altura`
 * sobre el radio de la esfera. Al elegir un destino se lo sube así para
 * dejarle lugar abajo a su tarjeta, como hace cualquier mapa con un panel.
 *
 * Es el punto que queda debajo de `destino`, sobre su meridiano: centrado
 * ahí, `destino` se ve en (0, `altura`).
 */
export function centroConDestinoArriba(
  destino: Coordenadas,
  altura: number,
): Coordenadas {
  const centro = desproyectar(0, -acotar(altura, 0, 0.99), destino) ?? destino;
  return [acotar(centro[0], -LATITUD_MAXIMA, LATITUD_MAXIMA), centro[1]];
}

/** La distancia angular entre dos coordenadas, en grados. */
export function distanciaAngular(a: Coordenadas, b: Coordenadas): number {
  const { z } = proyectar(a, b);
  return Math.acos(acotar(z, -1, 1)) / RAD;
}

/**
 * El centro que deja quieto, bajo el cursor, el punto `bajoElCursor` cuando
 * la escala pasa de `escalaVieja` a `escalaNueva`. Así el zoom con la rueda
 * acerca hacia donde apunta el mouse, como en cualquier mapa.
 *
 * El punto tiene que terminar en la misma posición de la pantalla: sobre la
 * esfera, eso es la posición vieja por `escalaVieja / escalaNueva`. Correr el
 * centro por el gran círculo hacia el punto da bien la distancia pero no la
 * dirección —los grandes círculos cambian de rumbo y el norte de la pantalla
 * es el del centro—, así que se corrige con unas pocas iteraciones: en cada
 * una, el centro se mueve lo que le falta al punto para llegar. Converge en
 * dos o tres.
 */
export function centroTrasZoom(
  centro: Coordenadas,
  bajoElCursor: Coordenadas,
  escalaVieja: number,
  escalaNueva: number,
): Coordenadas {
  const antes = proyectar(bajoElCursor, centro);
  if (!antes.visible) return centro;

  let objetivoX = (antes.x * escalaVieja) / escalaNueva;
  let objetivoY = (antes.y * escalaVieja) / escalaNueva;

  // Al alejar, el punto puede tener que quedar más allá del borde de la
  // esfera: se lo deja en el borde.
  const largo = Math.hypot(objetivoX, objetivoY);
  if (largo > 0.999) {
    objetivoX *= 0.999 / largo;
    objetivoY *= 0.999 / largo;
  }

  let actual = centro;

  for (let vuelta = 0; vuelta < 8; vuelta++) {
    const { x, y } = proyectar(bajoElCursor, actual);
    const ex = objetivoX - x;
    const ey = objetivoY - y;

    if (Math.hypot(ex, ey) < 1e-10) break;

    // Mover el centro al punto que hoy está en (-ex, -ey) corre todo lo
    // demás (ex, ey): justo lo que le falta.
    const siguiente = desproyectar(-ex, -ey, actual);
    if (!siguiente) break;
    actual = siguiente;
  }

  return [acotar(actual[0], -LATITUD_MAXIMA, LATITUD_MAXIMA), actual[1]];
}

/**
 * El punto a una `fraccion` del camino de `a` a `b` por el gran círculo:
 * 0 es `a`, 1 es `b`. Es el camino más corto sobre la esfera.
 */
export function sobreElGranCirculo(
  a: Coordenadas,
  b: Coordenadas,
  fraccion: number,
): Coordenadas {
  const va = aVector(a);
  const vb = aVector(b);
  const coseno = acotar(va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2], -1, 1);
  const angulo = Math.acos(coseno);

  if (angulo < 1e-9) return a;

  const s = Math.sin(angulo);
  const ka = Math.sin((1 - fraccion) * angulo) / s;
  const kb = Math.sin(fraccion * angulo) / s;

  return deVector([
    ka * va[0] + kb * vb[0],
    ka * va[1] + kb * vb[1],
    ka * va[2] + kb * vb[2],
  ]);
}

function aVector([lat, lon]: Coordenadas): [number, number, number] {
  const la = lat * RAD;
  const lo = lon * RAD;
  return [
    Math.cos(la) * Math.cos(lo),
    Math.cos(la) * Math.sin(lo),
    Math.sin(la),
  ];
}

function deVector([x, y, z]: [number, number, number]): Coordenadas {
  const largo = Math.hypot(x, y, z) || 1;
  return [
    Math.asin(acotar(z / largo, -1, 1)) / RAD,
    normalizarLongitud(Math.atan2(y, x) / RAD),
  ];
}

/**
 * La vista intermedia de un vuelo de `desde` a `hasta`, con `t` de 0 a 1. El
 * centro va por el gran círculo y la escala, en proporción (de 1 a 4 pasa por
 * 2 a mitad de camino, no por 2,5): así el zoom se siente parejo.
 */
export function vistaIntermedia(desde: Vista, hasta: Vista, t: number): Vista {
  const [lat, lon] = sobreElGranCirculo(
    [desde.lat, desde.lon],
    [hasta.lat, hasta.lon],
    t,
  );

  return {
    lat,
    lon,
    escala: desde.escala * Math.pow(hasta.escala / desde.escala, t),
  };
}

/** Arranca y llega despacio: un vuelo, no un salto. */
export function suavizar(t: number): number {
  const u = acotar(t, 0, 1);
  return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
}
