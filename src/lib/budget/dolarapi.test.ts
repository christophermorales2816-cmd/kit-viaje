import { describe, expect, it } from "vitest";

import { fetchDolarApiQuotes, parseDolarApiQuotes } from "@/lib/budget/dolarapi";

/**
 * Fixture con la forma real de dolarapi: las siete casas que devuelve la API,
 * con la brecha blue/oficial del 2-6% que describe el spec.
 */
function respuestaCompleta() {
  const fecha = "2026-08-27T15:00:00.000Z";
  return [
    { moneda: "USD", casa: "oficial", nombre: "Oficial", compra: 1445, venta: 1495, fechaActualizacion: fecha },
    { moneda: "USD", casa: "blue", nombre: "Blue", compra: 1510, venta: 1530, fechaActualizacion: fecha },
    { moneda: "USD", casa: "bolsa", nombre: "Bolsa", compra: 1495, venta: 1505, fechaActualizacion: fecha },
    { moneda: "USD", casa: "contadoconliqui", nombre: "Contado con liquidación", compra: 1520, venta: 1530, fechaActualizacion: fecha },
    { moneda: "USD", casa: "mayorista", nombre: "Mayorista", compra: 1465, venta: 1475, fechaActualizacion: fecha },
    { moneda: "USD", casa: "cripto", nombre: "Cripto", compra: 1515, venta: 1525, fechaActualizacion: fecha },
    { moneda: "USD", casa: "tarjeta", nombre: "Tarjeta", compra: 1930.5, venta: 1995.5, fechaActualizacion: fecha },
  ];
}

describe("parseDolarApiQuotes", () => {
  it("traduce los nombres de casa a los del spec", () => {
    const quotes = parseDolarApiQuotes(respuestaCompleta());
    expect(quotes.map((q) => q.id)).toEqual(["oficial", "blue", "mep", "ccl"]);
  });

  it("descarta mayorista, cripto y tarjeta", () => {
    expect(parseDolarApiQuotes(respuestaCompleta())).toHaveLength(4);
  });

  it("mapea compra y venta sin invertirlas", () => {
    const blue = parseDolarApiQuotes(respuestaCompleta()).find((q) => q.id === "blue");
    expect(blue?.buy).toBe(1510);
    expect(blue?.sell).toBe(1530);
  });

  it("marca la moneda base y la cotizada", () => {
    const [oficial] = parseDolarApiQuotes(respuestaCompleta());
    expect(oficial.baseCurrency).toBe("ARS");
    expect(oficial.quoteCurrency).toBe("USD");
  });

  it("devuelve siempre el mismo orden", () => {
    const alReves = respuestaCompleta().reverse();
    expect(parseDolarApiQuotes(alReves).map((q) => q.id)).toEqual([
      "oficial",
      "blue",
      "mep",
      "ccl",
    ]);
  });

  it("falla nombrando la cotización que falta", () => {
    const sinCcl = respuestaCompleta().filter((e) => e.casa !== "contadoconliqui");
    expect(() => parseDolarApiQuotes(sinCcl)).toThrow(/ccl/);
  });

  it("trata una compra en cero como cotización faltante", () => {
    const blueRoto = respuestaCompleta().map((e) =>
      e.casa === "blue" ? { ...e, compra: 0 } : e,
    );
    expect(() => parseDolarApiQuotes(blueRoto)).toThrow(/blue/);
  });

  it("ignora entradas con la forma equivocada en vez de romper", () => {
    const conBasura = [...respuestaCompleta(), null, 42, { casa: "blue" }];
    expect(parseDolarApiQuotes(conBasura)).toHaveLength(4);
  });

  it("rechaza una respuesta que no es un array", () => {
    expect(() => parseDolarApiQuotes({ error: "rate limited" })).toThrow(TypeError);
    expect(() => parseDolarApiQuotes(null)).toThrow(TypeError);
  });
});

describe("fetchDolarApiQuotes", () => {
  it("parsea la respuesta cuando la llamada sale bien", async () => {
    const fetchImpl = (async () =>
      new Response(JSON.stringify(respuestaCompleta()), {
        status: 200,
        headers: { "content-type": "application/json" },
      })) as unknown as typeof fetch;

    const quotes = await fetchDolarApiQuotes({ fetchImpl });
    expect(quotes.map((q) => q.id)).toEqual(["oficial", "blue", "mep", "ccl"]);
  });

  it("informa el status cuando la API responde con error", async () => {
    const fetchImpl = (async () =>
      new Response("nope", { status: 503, statusText: "Service Unavailable" })) as unknown as typeof fetch;

    await expect(fetchDolarApiQuotes({ fetchImpl })).rejects.toThrow(/503/);
  });
});
