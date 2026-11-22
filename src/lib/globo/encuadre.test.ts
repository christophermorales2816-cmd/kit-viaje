import { describe, expect, it } from "vitest";

import { encuadreDelPais, escalaParaElPais } from "./encuadre";
import { ESCALA_MAXIMA, type Coordenadas } from "./geometria";

describe("encuadreDelPais", () => {
  it("sin estados no hay encuadre", () => {
    expect(encuadreDelPais([0, 0], [])).toBeNull();
  });

  it("centra en los estados, no en la capital", () => {
    // Buenos Aires está en un borde; el centro de las provincias, más al oeste.
    const provincias: Coordenadas[] = [
      [-24, -65],
      [-31, -64],
      [-38, -69],
      [-46, -70],
      [-34, -60],
    ];
    const encuadre = encuadreDelPais([-34.6, -58.4], provincias);

    expect(encuadre?.centro[1]).toBeLessThan(-62);
    expect(encuadre?.radioEnGrados).toBeGreaterThan(5);
  });

  it("no se deja llevar por los territorios de ultramar", () => {
    const francia: Coordenadas[] = [
      [48.8, 2.3],
      [47, 0],
      [44, 1],
      [45.5, 4.6],
      [48.5, 7],
      [43.5, 6],
      [47.5, -3],
      [46.5, 2.5],
      [49.3, 0.5],
      [42.2, 9],
      // Las regiones de ultramar: la Guayana, Martinica, Guadalupe, la
      // Reunión y Mayotte.
      [4, -53],
      [14.6, -61],
      [16.2, -61.5],
      [-21, 55.5],
      [-12.8, 45.1],
    ];
    const encuadre = encuadreDelPais([48.8, 2.3], francia);

    expect(encuadre?.radioEnGrados).toBeLessThan(10);
  });

  it("un país que cruza el antimeridiano queda centrado en él", () => {
    const fiyi: Coordenadas[] = [
      [-17.8, 178],
      [-16.5, 179.5],
      [-17, -179.8],
    ];
    const encuadre = encuadreDelPais([-18.1, 178.4], fiyi);

    expect(Math.abs(encuadre?.centro[1] ?? 0)).toBeGreaterThan(178);
  });
});

describe("escalaParaElPais", () => {
  it("un país grande queda en la escala mínima, uno chico se acerca más", () => {
    expect(escalaParaElPais(25, 2.2)).toBe(2.2);
    expect(escalaParaElPais(5, 2.2)).toBeGreaterThan(escalaParaElPais(10, 2.2));
  });

  it("no pasa del zoom máximo", () => {
    expect(escalaParaElPais(0.1, 2.2)).toBe(ESCALA_MAXIMA);
  });
});
