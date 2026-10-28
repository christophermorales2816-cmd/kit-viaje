import { afterEach, describe, expect, it, vi } from "vitest";

// Sin la caché de Next: cada llamada va directo a la función.
vi.mock("next/cache", () => ({
  unstable_cache: <T>(funcion: T) => funcion,
}));

import { traerLugares } from "./overpass";

type FetchFalso = (url: string, opciones: RequestInit) => Promise<Response>;

function conFetch(respuesta: () => Promise<Response>) {
  const falso = vi.fn<FetchFalso>(respuesta);
  vi.stubGlobal("fetch", falso);
  return falso;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

const CELDA = { fila: 356, columna: 1397 };
const RAMEN = { cocinas: ["ramen"] };

describe("traerLugares", () => {
  it("le pregunta a Overpass la consulta de la celda y devuelve los lugares", async () => {
    const falso = conFetch(async () =>
      Response.json({
        elements: [
          {
            type: "node",
            id: 1,
            lat: 35.65,
            lon: 139.75,
            tags: { amenity: "restaurant", cuisine: "ramen", name: "Taro" },
          },
        ],
      }),
    );

    const resultado = await traerLugares(RAMEN, CELDA);

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.datos.celda).toBe("356_1397");
    expect(resultado.datos.lugares.map((lugar) => lugar.nombre)).toEqual([
      "Taro",
    ]);

    const [url, opciones] = falso.mock.calls[0];
    expect(url).toBe("https://overpass-api.de/api/interpreter");
    expect(opciones.method).toBe("POST");

    const consulta = new URLSearchParams(String(opciones.body)).get("data");
    expect(consulta).toContain("[bbox:35.6,139.7,35.7,139.8]");
    expect(consulta).toContain("ramen");
  });

  it("avisa que Overpass pidió esperar", async () => {
    conFetch(async () => new Response("Too Many Requests", { status: 429 }));

    const resultado = await traerLugares(RAMEN, CELDA);

    expect(resultado).toMatchObject({ ok: false, saturado: true });
  });

  it("no confunde un error con un mapa vacío", async () => {
    conFetch(async () =>
      Response.json({ elements: [], remark: "runtime error: out of memory" }),
    );

    expect(await traerLugares(RAMEN, CELDA)).toMatchObject({
      ok: false,
      saturado: false,
    });
  });

  it("sobrevive a que Overpass no conteste", async () => {
    conFetch(async () => {
      throw new TypeError("fetch failed");
    });

    const resultado = await traerLugares(RAMEN, CELDA);

    expect(resultado).toMatchObject({ ok: false, saturado: false });
    if (!resultado.ok) expect(resultado.motivo).toContain("fetch failed");
  });
});
