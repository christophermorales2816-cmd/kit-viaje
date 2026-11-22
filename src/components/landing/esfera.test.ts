import { describe, expect, it } from "vitest";

import { ESCALA_MAXIMA, ESCALA_MINIMA } from "@/lib/globo/geometria";

import { opacidadDeLosEstados } from "./esfera";

describe("opacidadDeLosEstados", () => {
  it("no muestra los estados con el globo entero", () => {
    expect(opacidadDeLosEstados(ESCALA_MINIMA)).toBe(0);
    expect(opacidadDeLosEstados(1.8)).toBe(0);
  });

  it("los va mostrando al acercar", () => {
    expect(opacidadDeLosEstados(2.2)).toBeCloseTo(0.5);
  });

  it("los muestra del todo antes del zoom máximo", () => {
    expect(opacidadDeLosEstados(2.6)).toBe(1);
    expect(opacidadDeLosEstados(ESCALA_MAXIMA)).toBe(1);
  });
});
