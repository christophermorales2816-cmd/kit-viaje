import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchQuotes } from "./fetch";

/**
 * El camino completo: traer, traducir y decidir qué devolver.
 *
 * `fetchQuotes` no tenía ni una línea cubierta por ser I/O, y es justo donde
 * viven las dos promesas que este proyecto le hizo al usuario: que una fuente
 * caída no rompa la página, y que un dialecto que no coincide se note como un
 * aviso y no como una pantalla en blanco.
 *
 * Se mockea `fetch` y nada más. El mapeo, el corredor y la validación corren de
 * verdad.
 */

/** Copiado tal cual de la respuesta real de br.dolarapi.com. */
const BRASIL = {
  moeda: "USD",
  nome: "Dólar",
  compra: 5.1106,
  venda: 5.1114,
  fechoAnterior: 5.0852,
  dataAtualizacao: "2023-10-01T21:59:59.000Z",
};

/** La forma de dolarapi.com, que sí es un array. */
const ARGENTINA = [
  {
    casa: "blue",
    moneda: "USD",
    compra: 1200,
    venta: 1220,
    fechaActualizacion: "2026-09-10T12:00:00.000Z",
  },
];

function responde(payload: unknown, ok = true, status = 200) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok, status, json: async () => payload })),
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("fetchQuotes", () => {
  it("lee la respuesta real de Brasil, que es un objeto y no un array", async () => {
    responde(BRASIL);

    const resultado = await fetchQuotes("brasil");

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.quotes).toHaveLength(1);
    expect(resultado.quotes[0]).toMatchObject({
      id: "comercial",
      baseCurrency: "BRL",
      quoteCurrency: "USD",
      buy: 5.1106,
      sell: 5.1114,
    });
    expect(resultado.corridor.corridor).toBe("brasil");
  });

  it("sigue leyendo el array de Argentina con el mismo mapper", async () => {
    responde(ARGENTINA);

    const resultado = await fetchQuotes("argentina");

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.quotes[0]).toMatchObject({
      id: "blue",
      baseCurrency: "ARS",
      buy: 1200,
      sell: 1220,
    });
  });

  it("avisa en vez de tirar cuando el dialecto no coincide", async () => {
    // Es la promesa que sostiene haber configurado una fuente sin poder
    // probarla: si los nombres de campo están mal, la página lo dice y el
    // resto sigue funcionando. Acá la fecha viene con el nombre equivocado.
    responde({ ...BRASIL, dataAtualizacao: undefined, fechaAtualizacao: "x" });

    const resultado = await fetchQuotes("brasil");

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;
    expect(resultado.reason).toContain("dolarapi Brasil");
  });

  it("avisa cuando la fuente responde con un error HTTP", async () => {
    responde(null, false, 503);

    const resultado = await fetchQuotes("brasil");

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;
    expect(resultado.reason).toContain("503");
  });

  it("avisa cuando no se puede contactar a la fuente", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("getaddrinfo ENOTFOUND");
      }),
    );

    const resultado = await fetchQuotes("brasil");

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;
    expect(resultado.reason).toContain("ENOTFOUND");
  });

  it("avisa cuando la respuesta no trae ninguna cotización esperada", async () => {
    // Cero reconocidas no es "una lista vacía": es que la fuente cambió de
    // formato, y sin ninguna tasa no hay nada que convertir.
    responde({ ...BRASIL, moeda: "EUR" });

    const resultado = await fetchQuotes("brasil");

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;
    expect(resultado.reason).toContain("ninguna");
  });

  it("no inventa un corredor que no existe", async () => {
    responde(BRASIL);

    const resultado = await fetchQuotes("uruguay");

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;
    expect(resultado.reason).toContain("uruguay");
  });
});
