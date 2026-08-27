import { describe, expect, it } from "vitest";

import { conversionRate, hasAllQuotes, selectQuote } from "@/lib/budget/quotes";
import type { ExchangeQuote } from "@/lib/budget/types";

function quote(
  id: ExchangeQuote["id"],
  buy: number,
  sell: number,
): ExchangeQuote {
  return {
    id,
    label: id.toUpperCase(),
    baseCurrency: "ARS",
    quoteCurrency: "USD",
    buy,
    sell,
    updatedAt: "2026-08-26T12:00:00.000Z",
  };
}

/** Brecha del 2-6% entre blue y oficial, como describe el spec. */
const QUOTES: ExchangeQuote[] = [
  quote("oficial", 1000, 1050),
  quote("blue", 1040, 1060),
  quote("mep", 1030, 1050),
  quote("ccl", 1035, 1055),
];

describe("selectQuote", () => {
  it("encuentra la cotización pedida", () => {
    expect(selectQuote(QUOTES, "mep").buy).toBe(1030);
  });

  it("falla con un mensaje que dice qué había disponible", () => {
    expect(() => selectQuote([quote("blue", 1040, 1060)], "ccl")).toThrow(
      /Disponibles: blue/,
    );
  });

  it("falla si la lista viene vacía", () => {
    expect(() => selectQuote([], "blue")).toThrow(/ninguna/);
  });
});

describe("hasAllQuotes", () => {
  it("reconoce las 4 que el spec trae siempre", () => {
    expect(hasAllQuotes(QUOTES)).toBe(true);
  });

  it("detecta que falta alguna", () => {
    expect(hasAllQuotes(QUOTES.filter((q) => q.id !== "ccl"))).toBe(false);
  });
});

describe("conversionRate", () => {
  it("usa la compra, no la venta", () => {
    expect(conversionRate(quote("blue", 1040, 1060))).toBe(1040);
  });

  it("rechaza una cotización sin valor usable", () => {
    expect(() => conversionRate(quote("blue", 0, 1060))).toThrow(RangeError);
    expect(() => conversionRate(quote("blue", -5, 1060))).toThrow(RangeError);
    expect(() => conversionRate(quote("blue", Number.NaN, 1060))).toThrow(RangeError);
  });
});
