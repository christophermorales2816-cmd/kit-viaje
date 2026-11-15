import { describe, expect, it } from "vitest";

import {
  colocarEtiquetas,
  masCercano,
  vecinosCercanos,
  type CandidatoDeEtiqueta,
} from "./etiquetas";

const LIMITES = { cx: 200, cy: 200, radio: 200 };

function candidato(
  i: number,
  x: number,
  y: number,
  prioridad: number,
  ancho = 60,
): CandidatoDeEtiqueta {
  return { i, x, y, ancho, alto: 18, prioridad };
}

describe("colocarEtiquetas", () => {
  it("si dos nombres se pisan, se muestra el de más prioridad", () => {
    const colocadas = colocarEtiquetas(
      [candidato(1, 100, 200, 1), candidato(2, 104, 204, 5)],
      [],
      LIMITES,
    );

    expect(colocadas.has(2)).toBe(true);
    // El otro prueba del otro lado del punto antes de rendirse.
    expect(colocadas.get(1)).toBe("izquierda");
  });

  it("cerca del borde derecho, el nombre va a la izquierda del punto", () => {
    const colocadas = colocarEtiquetas(
      [candidato(1, 340, 200, 1)],
      [],
      LIMITES,
    );
    expect(colocadas.get(1)).toBe("izquierda");
  });

  it("no deja un nombre cortado por el borde del globo", () => {
    // Pegado arriba: ni a la derecha ni a la izquierda entra en el círculo.
    const colocadas = colocarEtiquetas([candidato(1, 200, 3, 1)], [], LIMITES);
    expect(colocadas.size).toBe(0);
  });

  it("no tapa el punto de otro destino", () => {
    const colocadas = colocarEtiquetas(
      [candidato(1, 100, 200, 1)],
      [
        { i: 1, x: 100, y: 200, radio: 4 },
        { i: 2, x: 130, y: 200, radio: 4 },
        { i: 3, x: 70, y: 200, radio: 4 },
      ],
      LIMITES,
    );

    expect(colocadas.size).toBe(0);
  });

  it("separados, entran todos", () => {
    const colocadas = colocarEtiquetas(
      [
        candidato(1, 100, 120, 1),
        candidato(2, 100, 200, 1),
        candidato(3, 100, 280, 1),
      ],
      [],
      LIMITES,
    );

    expect(colocadas.size).toBe(3);
  });
});

describe("masCercano", () => {
  const puntos = [
    { i: 1, x: 100, y: 100 },
    { i: 2, x: 120, y: 100 },
  ];

  it("elige el punto más cercano al toque", () => {
    expect(masCercano(puntos, 103, 102, 20)).toBe(1);
    expect(masCercano(puntos, 116, 99, 20)).toBe(2);
  });

  it("lejos de todo, no elige nada", () => {
    expect(masCercano(puntos, 300, 300, 20)).toBeNull();
  });
});

describe("vecinosCercanos", () => {
  // Las cataratas Victoria, desde cada lado de la frontera, y dos capitales
  // lejos de todo.
  const ZIMBABUE: [number, number] = [-17.93, 25.84];
  const ZAMBIA: [number, number] = [-17.85, 25.86];
  const LIVINGSTONE: [number, number] = [-17.84, 25.85];
  const LIMA: [number, number] = [-12.05, -77.04];
  const TOKIO: [number, number] = [35.68, 139.65];

  it("dos puntos que ningún zoom separa se ofrecen uno al otro", () => {
    const vecinos = vecinosCercanos([ZIMBABUE, ZAMBIA, LIMA]);

    expect(vecinos[0]).toEqual([1]);
    expect(vecinos[1]).toEqual([0]);
  });

  it("lejos de todo, no hay vecinos", () => {
    expect(vecinosCercanos([ZIMBABUE, LIMA, TOKIO])).toEqual([[], [], []]);
  });

  it("van del más cercano al más lejano, sin pasarse del máximo", () => {
    const vecinos = vecinosCercanos([ZIMBABUE, ZAMBIA, LIVINGSTONE], 1.5, 1);

    // De Livingstone, Zambia está más cerca que Zimbabue.
    expect(vecinos[2]).toEqual([1]);
  });
});
