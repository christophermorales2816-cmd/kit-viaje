import { describe, expect, it } from "vitest";

import {
  allQuoteCorridors,
  ARGENTINA_QUOTES,
  BRASIL_QUOTES,
  getQuoteCorridor,
} from "./corridors";
import { mapQuotesResponse } from "./map";
import { resolveQuoteSpreads } from "./spread";

/**
 * Lo que tiene que seguir siendo cierto al sumar un corredor (spec, 10).
 *
 * El valor de estos tests no es cubrir `corridors.ts`, que es casi todo dato:
 * es que el mapper y la brecha funcionen con un corredor de UNA cotización y
 * otro dialecto, que es lo que la generalización promete.
 */

describe("registro de corredores", () => {
  it("resuelve por nombre y devuelve undefined para uno que no existe", () => {
    expect(getQuoteCorridor("argentina")).toBe(ARGENTINA_QUOTES);
    expect(getQuoteCorridor("brasil")).toBe(BRASIL_QUOTES);
    expect(getQuoteCorridor("uruguay")).toBeUndefined();
  });

  it("no repite nombres de corredor", () => {
    const nombres = allQuoteCorridors().map((c) => c.corridor);
    expect(new Set(nombres).size).toBe(nombres.length);
  });

  it("declara un default que existe entre sus propias cotizaciones", () => {
    // Un default que no está en quoteIds deja el Select sin selección inicial.
    for (const corredor of allQuoteCorridors()) {
      expect(corredor.quoteIds).toContain(corredor.defaultQuoteId);
      expect(corredor.quoteIds.length).toBeGreaterThan(0);
    }
  });

  it("etiqueta todas sus cotizaciones", () => {
    for (const corredor of allQuoteCorridors()) {
      for (const id of corredor.quoteIds) {
        expect(corredor.labels[id]?.trim()).not.toBe("");
      }
    }
  });

  it("mide la brecha contra una cotización que existe, o contra ninguna", () => {
    for (const corredor of allQuoteCorridors()) {
      if (corredor.referenceQuoteId === null) continue;
      expect(corredor.quoteIds).toContain(corredor.referenceQuoteId);
    }
  });

  it("traduce a ids que el propio corredor reconoce", () => {
    for (const corredor of allQuoteCorridors()) {
      if (corredor.source === null) continue;
      for (const id of Object.values(corredor.source.keyToQuoteId)) {
        expect(corredor.quoteIds).toContain(id);
      }
    }
  });
});

describe("mapper con el dialecto de Brasil", () => {
  // Nombres de campo distintos a los de Argentina: es exactamente lo que la
  // configuración por corredor tiene que absorber sin un mapper nuevo.
  const FILA = {
    moeda: "USD",
    compra: 5.38,
    venda: 5.39,
    fechaAtualizacao: "2026-09-09T12:00:00.000Z",
  };

  it("lee una fila con otros nombres de campo", () => {
    const [quote] = mapQuotesResponse([FILA], BRASIL_QUOTES);

    expect(quote.id).toBe("comercial");
    expect(quote.label).toBe("Comercial");
    expect(quote.baseCurrency).toBe("BRL");
    expect(quote.quoteCurrency).toBe("USD");
    expect(quote.buy).toBe(5.38);
    expect(quote.sell).toBe(5.39);
  });

  it("acepta un objeto suelto y no solo un array", () => {
    // Una fuente con una sola cotización suele devolver el objeto sin envolver.
    expect(mapQuotesResponse(FILA, BRASIL_QUOTES)).toHaveLength(1);
  });

  it("rechaza una fila sin fecha válida en vez de inventarla", () => {
    expect(() =>
      mapQuotesResponse([{ ...FILA, fechaAtualizacao: "ayer" }], BRASIL_QUOTES),
    ).toThrow(RangeError);
  });

  it("rechaza un valor de compra que no sirve para dividir", () => {
    expect(() =>
      mapQuotesResponse([{ ...FILA, compra: 0 }], BRASIL_QUOTES),
    ).toThrow(RangeError);
  });

  it("ignora una moneda que el corredor no pidió", () => {
    expect(
      mapQuotesResponse([{ ...FILA, moeda: "EUR" }], BRASIL_QUOTES),
    ).toEqual([]);
  });
});

describe("brecha en un corredor de una sola cotización", () => {
  it("no inventa una brecha donde no hay contra qué comparar", () => {
    const quotes = mapQuotesResponse(
      [
        {
          moeda: "USD",
          compra: 5.38,
          venda: 5.39,
          fechaAtualizacao: "2026-09-09T12:00:00.000Z",
        },
      ],
      BRASIL_QUOTES,
    );

    const [spread] = resolveQuoteSpreads(quotes, BRASIL_QUOTES);

    // null, no 0: un 0 se lee como "no hay brecha", que es una afirmación.
    expect(spread.premiumPercent).toBeNull();
  });
});
