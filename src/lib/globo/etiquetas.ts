/**
 * Qué nombres de países se muestran en el globo, y de qué lado del punto
 * (spec, 19.5).
 *
 * Con 165 destinos, mostrar todos los nombres los encima en un bloque
 * ilegible —Europa y el Caribe son una mancha a cualquier zoom—, y no mostrar
 * ninguno obliga a pasar el mouse punto por punto para saber qué es cada uno,
 * que era la queja: "es muy difícil saber dónde clico".
 *
 * Así que se muestran los que entran sin pisarse, de mayor a menor prioridad:
 * el elegido, el que está bajo el mouse, los que ya se veían (para que no
 * titilen al girar) y los más cercanos al centro. Al acercar, los puntos se
 * separan y entran más nombres. Es el algoritmo goloso de cualquier mapa:
 * simple, estable y con 165 puntos sobra para cada frame.
 */

import { distanciaAngular, type Coordenadas } from "./geometria";

/**
 * De qué lado del punto va el nombre. "centro" es para los nombres de
 * estados, que van sobre su lugar y no al costado de un punto.
 */
export type Lado = "derecha" | "izquierda" | "centro";

export interface CandidatoDeEtiqueta {
  /** El índice del destino. */
  i: number;
  /** El centro del punto, en píxeles desde la esquina del globo. */
  x: number;
  y: number;
  /** El tamaño de la etiqueta, en píxeles. */
  ancho: number;
  alto: number;
  /** Cuanto más alta, antes se coloca. */
  prioridad: number;
  /** Centrada sobre el punto, sin probar los costados. */
  centrada?: boolean;
}

export interface Obstaculo {
  /** El destino al que pertenece: su propia etiqueta sí lo puede tocar. */
  i: number;
  x: number;
  y: number;
  radio: number;
}

/** El círculo adentro del cual tiene que quedar cada etiqueta entera. */
export interface Limites {
  cx: number;
  cy: number;
  radio: number;
}

/** Entre el punto y su etiqueta. */
export const SEPARACION_DEL_PUNTO = 7;

/** Aire mínimo entre dos etiquetas. */
const AIRE = 3;

interface Rectangulo {
  izq: number;
  der: number;
  arriba: number;
  abajo: number;
}

function rectanguloDe(candidato: CandidatoDeEtiqueta, lado: Lado): Rectangulo {
  const arriba = candidato.y - candidato.alto / 2;
  const izq =
    lado === "centro"
      ? candidato.x - candidato.ancho / 2
      : lado === "derecha"
        ? candidato.x + SEPARACION_DEL_PUNTO
        : candidato.x - SEPARACION_DEL_PUNTO - candidato.ancho;

  return {
    izq,
    der: izq + candidato.ancho,
    arriba,
    abajo: arriba + candidato.alto,
  };
}

function seTocan(a: Rectangulo, b: Rectangulo, aire: number): boolean {
  return (
    a.izq < b.der + aire &&
    b.izq < a.der + aire &&
    a.arriba < b.abajo + aire &&
    b.arriba < a.abajo + aire
  );
}

function adentro(rect: Rectangulo, { cx, cy, radio }: Limites): boolean {
  const r2 = radio * radio;
  return [
    [rect.izq, rect.arriba],
    [rect.der, rect.arriba],
    [rect.izq, rect.abajo],
    [rect.der, rect.abajo],
  ].every(([x, y]) => (x - cx) ** 2 + (y - cy) ** 2 <= r2);
}

/**
 * Las etiquetas que entran, con su lado. La que no entra no está en el mapa
 * devuelto: ese punto queda sin nombre hasta que haya lugar.
 *
 * Primero se prueba el lado que mira al centro del globo: un punto pegado al
 * borde derecho lleva el nombre a la izquierda, que es donde hay lugar.
 */
export function colocarEtiquetas(
  candidatos: CandidatoDeEtiqueta[],
  obstaculos: Obstaculo[],
  limites: Limites,
): Map<number, Lado> {
  const colocadas = new Map<number, Lado>();
  const ocupado: Rectangulo[] = [];
  const ordenados = [...candidatos].sort((a, b) => b.prioridad - a.prioridad);

  for (const candidato of ordenados) {
    const lados: Lado[] = candidato.centrada
      ? ["centro"]
      : candidato.x > limites.cx
        ? ["izquierda", "derecha"]
        : ["derecha", "izquierda"];

    for (const lado of lados) {
      const rect = rectanguloDe(candidato, lado);

      if (!adentro(rect, limites)) continue;
      if (ocupado.some((otro) => seTocan(rect, otro, AIRE))) continue;

      const tapaUnPunto = obstaculos.some(
        (punto) =>
          punto.i !== candidato.i &&
          seTocan(
            rect,
            {
              izq: punto.x - punto.radio,
              der: punto.x + punto.radio,
              arriba: punto.y - punto.radio,
              abajo: punto.y + punto.radio,
            },
            0,
          ),
      );
      if (tapaUnPunto) continue;

      ocupado.push(rect);
      colocadas.set(candidato.i, lado);
      break;
    }
  }

  return colocadas;
}

/**
 * Hasta dónde un destino está "muy cerca" de otro, en grados: unos 160 km.
 * Por debajo, en el teléfono los dos puntos se tocan aun con todo el zoom.
 */
export const GRADOS_DE_MUY_CERCA = 1.5;

/**
 * Para cada destino, los otros que están muy cerca, del más cercano al más
 * lejano y como mucho `maximo`.
 *
 * Hay puntos que ningún zoom separa: Zambia y Zimbabue comparten las
 * cataratas Victoria, y Kinshasa y Brazzaville se miran desde las dos orillas
 * del río Congo. Tocar ahí elige uno de los dos, y la tarjeta ofrece el otro:
 * es la forma de llegar a él sin adivinar.
 */
export function vecinosCercanos(
  coordenadas: Coordenadas[],
  grados = GRADOS_DE_MUY_CERCA,
  maximo = 3,
): number[][] {
  return coordenadas.map((a, i) =>
    coordenadas
      .map((b, j) => ({ j, d: j === i ? Infinity : distanciaAngular(a, b) }))
      .filter(({ d }) => d < grados)
      .sort((x, y) => x.d - y.d)
      .slice(0, maximo)
      .map(({ j }) => j),
  );
}

/**
 * El destino más cercano a un punto de la pantalla, dentro de `alcance`
 * píxeles. Es lo que se elige al tocar el globo: no hace falta acertarle al
 * punto, alcanza con tocar cerca. En el teléfono el alcance es mayor, porque
 * el dedo tapa lo que toca.
 */
export function masCercano(
  puntos: { i: number; x: number; y: number }[],
  x: number,
  y: number,
  alcance: number,
): number | null {
  let mejor: number | null = null;
  let mejorDistancia = alcance * alcance;

  for (const punto of puntos) {
    const d = (punto.x - x) ** 2 + (punto.y - y) ** 2;
    if (d <= mejorDistancia) {
      mejor = punto.i;
      mejorDistancia = d;
    }
  }

  return mejor;
}
