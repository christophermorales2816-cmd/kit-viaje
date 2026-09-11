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

  it("dice con qué huso y con qué nombre muestra la hora", () => {
    // El sello decía "hora de Buenos Aires" en las dos guías. En Brasil la hora
    // coincide —los dos husos son UTC−3 y ninguno usa horario de verano— pero
    // la etiqueta nombraba una ciudad que no era la del destino.
    for (const corredor of allQuoteCorridors()) {
      expect(corredor.clock.label.trim()).not.toBe("");
      // Que el huso exista de verdad: un IANA inventado tira acá y no en la
      // página de alguien.
      expect(() =>
        new Intl.DateTimeFormat("es-AR", {
          timeZone: corredor.clock.timeZone,
        }).format(new Date()),
      ).not.toThrow();
    }

    expect(BRASIL_QUOTES.clock.timeZone).not.toBe(
      ARGENTINA_QUOTES.clock.timeZone,
    );
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
  /**
   * COPIADO TAL CUAL DE LA RESPUESTA REAL del endpoint. No es un fixture
   * inventado, y esa es toda la diferencia: la primera versión de esta
   * configuración adivinó los cuatro nombres de campo y falló uno —puso
   * `fechaAtualizacao`, mezclando el "fecha" del español con el portugués, que
   * dice "data"—. Un fixture inventado habría confirmado la adivinanza en vez
   * de contradecirla.
   *
   * Si el día de mañana la fuente cambia de dialecto, este objeto deja de
   * parecerse a lo que llega y el test lo dice antes que un usuario.
   */
  const FILA = {
    moeda: "USD",
    nome: "Dólar",
    compra: 5.1106,
    venda: 5.1114,
    fechoAnterior: 5.0852,
    dataAtualizacao: "2023-10-01T21:59:59.000Z",
  };

  it("lee la respuesta real con otros nombres de campo", () => {
    const [quote] = mapQuotesResponse([FILA], BRASIL_QUOTES);

    expect(quote.id).toBe("comercial");
    expect(quote.label).toBe("Comercial");
    expect(quote.baseCurrency).toBe("BRL");
    expect(quote.quoteCurrency).toBe("USD");
    expect(quote.buy).toBe(5.1106);
    expect(quote.sell).toBe(5.1114);
    expect(quote.updatedAt).toBe("2023-10-01T21:59:59.000Z");
  });

  it("no confunde la compra con la venta", () => {
    // En Brasil las dos están a milésimas de distancia, así que invertirlas no
    // se nota mirando el total: 5,1106 y 5,1114 dan casi lo mismo. Con el blue
    // argentino el error saltaría a la vista; acá no, y por eso se afirma.
    const [quote] = mapQuotesResponse([FILA], BRASIL_QUOTES);

    expect(quote.buy).toBeLessThan(quote.sell);
  });

  it("ignora los campos que la fuente publica de más", () => {
    // `nome` y `fechoAnterior` vienen en la respuesta y no se usan. Que estén
    // no tiene que cambiar nada.
    const [quote] = mapQuotesResponse([FILA], BRASIL_QUOTES);

    expect(Object.keys(quote).sort()).toEqual([
      "baseCurrency",
      "buy",
      "id",
      "label",
      "quoteCurrency",
      "sell",
      "updatedAt",
    ]);
  });

  it("acepta un objeto suelto y no solo un array", () => {
    // Una fuente con una sola cotización suele devolver el objeto sin envolver.
    expect(mapQuotesResponse(FILA, BRASIL_QUOTES)).toHaveLength(1);
  });

  it("rechaza una fila sin fecha válida en vez de inventarla", () => {
    expect(() =>
      mapQuotesResponse([{ ...FILA, dataAtualizacao: "ayer" }], BRASIL_QUOTES),
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
          compra: 5.1106,
          venda: 5.1114,
          dataAtualizacao: "2023-10-01T21:59:59.000Z",
        },
      ],
      BRASIL_QUOTES,
    );

    const [spread] = resolveQuoteSpreads(quotes, BRASIL_QUOTES);

    // null, no 0: un 0 se lee como "no hay brecha", que es una afirmación.
    expect(spread.premiumPercent).toBeNull();
  });
});
