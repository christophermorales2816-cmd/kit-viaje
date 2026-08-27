import { describe, expect, it } from "vitest";

import { fromCents, roundToCents, toCents } from "@/lib/budget/money";

describe("aritmética en centavos", () => {
  it("convierte ida y vuelta", () => {
    expect(toCents(8500)).toBe(850_000);
    expect(fromCents(850_000)).toBe(8500);
  });

  it("redondea el centavo al más cercano", () => {
    expect(toCents(0.005)).toBe(1);
    expect(toCents(0.004)).toBe(0);
    expect(roundToCents(96.153_846)).toBe(96.15);
    expect(roundToCents(96.155)).toBe(96.16);
  });

  it("evita la deriva de sumar floats", () => {
    // La suma directa da 0.30000000000000004.
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(fromCents(toCents(0.1) + toCents(0.2))).toBe(0.3);
  });

  it("rechaza importes que no son números finitos", () => {
    expect(() => toCents(Number.NaN)).toThrow(RangeError);
    expect(() => toCents(Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
