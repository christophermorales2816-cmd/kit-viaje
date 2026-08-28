import { describe, expect, it } from "vitest";

import {
  DEFAULT_STALE_AFTER_DAYS,
  resolvePriceFreshness,
} from "@/lib/budget/freshness";
import type { BudgetProduct } from "@/lib/budget/types";

const AHORA = new Date("2026-08-26T12:00:00.000Z");

function product(id: string, updatedAt: string): BudgetProduct {
  return {
    id,
    category: "comida",
    name: `Producto ${id}`,
    basePrice: 8500,
    currency: "ARS",
    updatedAt,
    includeByDefault: true,
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
  };
}

describe("resolvePriceFreshness", () => {
  it("mira el precio más viejo, no el promedio ni el más nuevo", () => {
    const resultado = resolvePriceFreshness(
      [
        product("a", "2026-08-25T12:00:00.000Z"), // 1 día
        product("b", "2026-07-27T12:00:00.000Z"), // 30 días
        product("c", "2026-08-26T09:00:00.000Z"), // hoy
      ],
      { now: AHORA },
    );

    expect(resultado.ageDays).toBe(30);
    expect(resultado.oldestUpdatedAt).toBe("2026-07-27T12:00:00.000Z");
  });

  it("cuenta días completos: 29 horas es 1 día, no 2", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-08-25T07:00:00.000Z")],
      { now: AHORA },
    );
    expect(resultado.ageDays).toBe(1);
  });

  it("no marca stale justo en el umbral", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-07-27T12:00:00.000Z")],
      { now: AHORA },
    );
    expect(resultado.ageDays).toBe(DEFAULT_STALE_AFTER_DAYS);
    expect(resultado.isStale).toBe(false);
  });

  it("marca stale un día después del umbral", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-07-26T12:00:00.000Z")],
      { now: AHORA },
    );
    expect(resultado.ageDays).toBe(31);
    expect(resultado.isStale).toBe(true);
  });

  it("acepta un umbral distinto", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-08-19T12:00:00.000Z")],
      { now: AHORA, staleAfterDays: 5 },
    );
    expect(resultado.ageDays).toBe(7);
    expect(resultado.isStale).toBe(true);
    expect(resultado.staleAfterDays).toBe(5);
  });

  it("sin productos no hay nada viejo que avisar", () => {
    const resultado = resolvePriceFreshness([], { now: AHORA });
    expect(resultado).toEqual({
      oldestUpdatedAt: null,
      ageDays: null,
      isStale: false,
      staleAfterDays: DEFAULT_STALE_AFTER_DAYS,
    });
  });

  it("no devuelve edad negativa si un precio quedó en el futuro", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-09-01T12:00:00.000Z")],
      { now: AHORA },
    );
    expect(resultado.ageDays).toBe(0);
    expect(resultado.isStale).toBe(false);
  });

  it("acepta timestamptz con offset, no solo UTC", () => {
    const resultado = resolvePriceFreshness(
      [product("a", "2026-08-25T09:00:00-03:00")], // = 12:00Z
      { now: AHORA },
    );
    expect(resultado.ageDays).toBe(1);
  });

  it("falla claro si un updatedAt no se puede parsear", () => {
    expect(() =>
      resolvePriceFreshness([product("roto", "ayer")], { now: AHORA }),
    ).toThrow(/roto/);
  });
});
