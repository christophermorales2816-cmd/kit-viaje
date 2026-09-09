import { describe, expect, it } from "vitest";

import { ARGENTINA_QUOTES, BRASIL_QUOTES } from "@/lib/quotes/corridors";
import { mapQuotesResponse } from "@/lib/quotes/map";

/**
 * Payload con la forma real de https://dolarapi.com/v1/dolares: las 4 casas que
 * el MVP usa, más tres que hay que ignorar, y en un orden distinto al del spec
 * para que se note si el mapeo respeta el de la respuesta en vez del propio.
 */
const PAYLOAD = [
  {
    moneda: "USD",
    casa: "cripto",
    nombre: "Cripto",
    compra: 1180,
    venta: 1190,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "blue",
    nombre: "Blue",
    compra: 1040,
    venta: 1060,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "contadoconliqui",
    nombre: "Contado con liquidación",
    compra: 1035,
    venta: 1055,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "oficial",
    nombre: "Oficial",
    compra: 1000,
    venta: 1050,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "mayorista",
    nombre: "Mayorista",
    compra: 995,
    venta: 1005,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "bolsa",
    nombre: "Bolsa",
    compra: 1030,
    venta: 1050,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
  {
    moneda: "USD",
    casa: "tarjeta",
    nombre: "Tarjeta",
    compra: 1300,
    venta: 1400,
    fechaActualizacion: "2026-08-27T12:00:00.000Z",
  },
];

describe("mapQuotesResponse", () => {
  it("devuelve las 4 cotizaciones del spec y descarta el resto", () => {
    const quotes = mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES);

    expect(quotes.map((quote) => quote.id)).toEqual([
      "oficial",
      "blue",
      "mep",
      "ccl",
    ]);
  });

  it("traduce los nombres de mercado a las siglas del spec", () => {
    const quotes = mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES);

    // bolsa → mep y contadoconliqui → ccl es la parte que no se adivina
    // leyendo la respuesta.
    expect(quotes.find((quote) => quote.id === "mep")?.buy).toBe(1030);
    expect(quotes.find((quote) => quote.id === "ccl")?.buy).toBe(1035);
  });

  it("etiqueta para el Select en vez de usar el nombre de la API", () => {
    const ccl = mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES).find(
      (quote) => quote.id === "ccl",
    );

    expect(ccl?.label).toBe("CCL");
  });

  it("mapea compra y venta sin invertirlas", () => {
    const blue = mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES).find(
      (quote) => quote.id === "blue",
    );

    expect(blue).toMatchObject({ buy: 1040, sell: 1060 });
  });

  it("usa el orden de QUOTE_IDS, no el de la respuesta", () => {
    // En PAYLOAD, blue viene antes que oficial.
    expect(mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES)[0]?.id).toBe("oficial");
  });

  it("toma la moneda base del corredor y no de una constante", () => {
    // Antes la moneda base era un parámetro con default "ARS". Ahora la
    // declara el corredor, que es el único que sabe cuál corresponde.
    expect(mapQuotesResponse(PAYLOAD, ARGENTINA_QUOTES)[0]?.baseCurrency).toBe(
      "ARS",
    );
    expect(ARGENTINA_QUOTES.baseCurrency).toBe("ARS");
    expect(BRASIL_QUOTES.baseCurrency).toBe("BRL");
  });

  it("acepta que falte alguna de las 4 sin inventarla", () => {
    const quotes = mapQuotesResponse(
      PAYLOAD.filter((row) => row.casa !== "bolsa"),
      ARGENTINA_QUOTES,
    );

    expect(quotes.map((quote) => quote.id)).toEqual(["oficial", "blue", "ccl"]);
  });

  it("devuelve vacío si no hay ninguna casa reconocida", () => {
    expect(
      mapQuotesResponse(
        PAYLOAD.filter((row) => row.casa === "cripto"),
        ARGENTINA_QUOTES,
      ),
    ).toEqual([]);
  });

  it("rechaza un payload que no es un array", () => {
    expect(() => mapQuotesResponse("no soy json", ARGENTINA_QUOTES)).toThrow(
      TypeError,
    );
  });

  it("rechaza una cotización sin valor usable en vez de convertir con basura", () => {
    const roto = [{ ...PAYLOAD[1], compra: 0 }];

    expect(() => mapQuotesResponse(roto, ARGENTINA_QUOTES)).toThrow(RangeError);
  });

  it("rechaza una fecha de actualización inválida", () => {
    const roto = [{ ...PAYLOAD[1], fechaActualizacion: "ayer" }];

    expect(() => mapQuotesResponse(roto, ARGENTINA_QUOTES)).toThrow(RangeError);
  });

  it("ignora filas que no son objetos", () => {
    expect(
      mapQuotesResponse([null, "blue", 42, PAYLOAD[1]], ARGENTINA_QUOTES),
    ).toHaveLength(1);
  });
});
