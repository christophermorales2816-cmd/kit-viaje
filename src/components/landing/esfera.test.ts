import { describe, expect, it } from "vitest";

import { ESCALA_MAXIMA, ESCALA_MINIMA } from "@/lib/globo/geometria";

import { opacidadDeLosEstados } from "./esfera";

describe("opacidadDeLosEstados", () => {
  it("no muestra los estados con el globo entero", () => {
    expect(opacidadDeLosEstados(ESCALA_MINIMA)).toBe(0);
    expect(opacidadDeLosEstados(1.5)).toBe(0);
  });

  it("los va mostrando al acercar", () => {
    expect(opacidadDeLosEstados(1.8)).toBeCloseTo(0.5);
  });

  it("los muestra del todo al elegir un país, antes del zoom máximo", () => {
    expect(opacidadDeLosEstados(2.1)).toBe(1);
    expect(opacidadDeLosEstados(ESCALA_MAXIMA)).toBe(1);
  });
});
