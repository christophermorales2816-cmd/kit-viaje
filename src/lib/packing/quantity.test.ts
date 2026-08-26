import { describe, expect, it } from "vitest";

import { resolveQuantity } from "@/lib/packing/quantity";
import type { QuantityRule } from "@/lib/packing/types";

function rule(overrides: Partial<QuantityRule> = {}): QuantityRule {
  return {
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
    ...overrides,
  };
}

describe("resolveQuantity", () => {
  it("usa baseQty cuando el ítem no escala", () => {
    expect(resolveQuantity(rule({ baseQty: 3 }), 14)).toBe(3);
  });

  it("ignora la duración cuando el ítem no escala", () => {
    const fijo = rule({ baseQty: 1 });
    expect(resolveQuantity(fijo, 1)).toBe(1);
    expect(resolveQuantity(fijo, 30)).toBe(1);
  });

  it("redondea para arriba: 7 días con 1 unidad cada 2 días son 4", () => {
    expect(resolveQuantity(rule({ scalesWithDays: true, daysPerUnit: 2 }), 7)).toBe(4);
  });

  it("una unidad por día da una por día", () => {
    expect(resolveQuantity(rule({ scalesWithDays: true, daysPerUnit: 1 }), 5)).toBe(5);
  });

  it("aplica el tope: las medias no pasan de 10", () => {
    const medias = rule({ scalesWithDays: true, daysPerUnit: 1, maxQty: 10 });
    expect(resolveQuantity(medias, 30)).toBe(10);
    expect(resolveQuantity(medias, 4)).toBe(4);
  });

  it("sin maxQty no hay tope", () => {
    expect(resolveQuantity(rule({ scalesWithDays: true, daysPerUnit: 1 }), 30)).toBe(30);
  });

  it("ignora baseQty cuando el ítem escala, como pide el spec", () => {
    expect(
      resolveQuantity(rule({ baseQty: 99, scalesWithDays: true, daysPerUnit: 3 }), 6),
    ).toBe(2);
  });

  it("nunca devuelve menos de una unidad", () => {
    expect(resolveQuantity(rule({ scalesWithDays: true, daysPerUnit: 30 }), 1)).toBe(1);
  });

  it("falla si el ítem escala sin daysPerUnit", () => {
    expect(() => resolveQuantity(rule({ scalesWithDays: true }), 7)).toThrow(RangeError);
    expect(() =>
      resolveQuantity(rule({ scalesWithDays: true, daysPerUnit: 0 }), 7),
    ).toThrow(RangeError);
  });

  it("rechaza duraciones inválidas", () => {
    expect(() => resolveQuantity(rule(), 0)).toThrow(RangeError);
    expect(() => resolveQuantity(rule(), -3)).toThrow(RangeError);
  });
});
