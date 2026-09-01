import { describe, expect, it } from "vitest";

import type { ExchangeQuote, QuoteId } from "@/lib/budget";
import { latestQuoteUpdate, resolveQuoteSpreads } from "@/lib/quotes/spread";

function quote(
  id: QuoteId,
  sell: number,
  updatedAt = "2026-09-01T12:00:00-03:00",
): ExchangeQuote {
  return {
    id,
    label: id,
    baseCurrency: "ARS",
    quoteCurrency: "USD",
    buy: sell - 10,
    sell,
    updatedAt,
  };
}

describe("resolveQuoteSpreads", () => {
  it("mide cada cotización contra la venta de la oficial", () => {
    const spreads = resolveQuoteSpreads([
      quote("oficial", 1000),
      quote("blue", 1250),
      quote("mep", 1100),
    ]);

    const porId = new Map(spreads.map((s) => [s.quote.id, s.premiumPercent]));

    expect(porId.get("blue")).toBeCloseTo(25);
    expect(porId.get("mep")).toBeCloseTo(10);
  });

  it("no le pone brecha a la oficial contra sí misma", () => {
    const [oficial] = resolveQuoteSpreads([quote("oficial", 1000)]);

    expect(oficial.premiumPercent).toBeNull();
  });

  it("devuelve null y no 0 cuando no hay oficial", () => {
    const spreads = resolveQuoteSpreads([quote("blue", 1250)]);

    // 0 se leería como "no hay brecha", que es una afirmación. Acá no hay dato.
    expect(spreads[0].premiumPercent).toBeNull();
  });

  it("no divide por una oficial en cero", () => {
    const spreads = resolveQuoteSpreads([
      quote("oficial", 0),
      quote("blue", 1250),
    ]);

    for (const spread of spreads) {
      expect(spread.premiumPercent).toBeNull();
    }
  });

  it("ordena como el spec: oficial, blue, MEP, CCL", () => {
    const spreads = resolveQuoteSpreads([
      quote("ccl", 1300),
      quote("blue", 1250),
      quote("oficial", 1000),
      quote("mep", 1100),
    ]);

    expect(spreads.map((s) => s.quote.id)).toEqual([
      "oficial",
      "blue",
      "mep",
      "ccl",
    ]);
  });

  it("no muta el arreglo recibido", () => {
    const entrada = [quote("ccl", 1300), quote("oficial", 1000)];

    resolveQuoteSpreads(entrada);

    expect(entrada.map((q) => q.id)).toEqual(["ccl", "oficial"]);
  });
});

describe("latestQuoteUpdate", () => {
  it("toma la marca más reciente, no la primera", () => {
    const ultima = latestQuoteUpdate([
      quote("oficial", 1000, "2026-09-01T10:00:00-03:00"),
      quote("blue", 1250, "2026-09-01T14:00:00-03:00"),
      quote("mep", 1100, "2026-09-01T11:00:00-03:00"),
    ]);

    expect(ultima).toBe("2026-09-01T14:00:00-03:00");
  });

  it("compara instantes y no strings, aunque cambie el offset", () => {
    // Mismo instante escrito en dos husos: 14:00-03:00 es 17:00Z. Comparado
    // como texto, "2026-09-01T16:00:00Z" ganaría por orden alfabético.
    const ultima = latestQuoteUpdate([
      quote("oficial", 1000, "2026-09-01T16:00:00Z"),
      quote("blue", 1250, "2026-09-01T14:00:00-03:00"),
    ]);

    expect(ultima).toBe("2026-09-01T14:00:00-03:00");
  });

  it("ignora marcas ilegibles en vez de romper el bloque", () => {
    const ultima = latestQuoteUpdate([
      quote("oficial", 1000, "no es una fecha"),
      quote("blue", 1250, "2026-09-01T14:00:00-03:00"),
    ]);

    expect(ultima).toBe("2026-09-01T14:00:00-03:00");
  });

  it("devuelve null sin cotizaciones", () => {
    expect(latestQuoteUpdate([])).toBeNull();
  });
});
