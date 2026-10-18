import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

/**
 * El contrato del endpoint con la CDN y con el radar: qué acepta, y qué se
 * guarda y cuánto. Se mockea `fetch`; la validación y el armado son de verdad.
 */

function pedido(consulta: string) {
  return new NextRequest(`https://kit.app/api/vuelos/en-vivo${consulta}`);
}

function adsbResponde(status: number, datos: unknown = {}) {
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok: status < 400, status, json: async () => datos })),
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("GET /api/vuelos/en-vivo", () => {
  it("rechaza lo que no es un centro de la grilla, sin preguntarle a adsb.lol", async () => {
    adsbResponde(200);

    for (const consulta of [
      "",
      "?lat=-34.6&lon=-58.4",
      "?lat=-35",
      "?lat=99&lon=0",
    ]) {
      const respuesta = await GET(pedido(consulta));

      expect(respuesta.status, consulta).toBe(400);
    }

    expect(fetch).not.toHaveBeenCalled();
  });

  it("devuelve la zona y deja que la CDN la guarde unos segundos", async () => {
    adsbResponde(200, { ac: [], global: { aircraft: 10 } });

    const respuesta = await GET(pedido("?lat=-35&lon=-59"));

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toBe(
      "public, max-age=0, s-maxage=15, stale-while-revalidate=30",
    );
    expect(await respuesta.json()).toMatchObject({
      centro: { lat: -35, lon: -59 },
      aviones: [],
    });
  });

  it("si adsb.lol pide esperar, todos los de la zona esperan un minuto", async () => {
    adsbResponde(429);

    const respuesta = await GET(pedido("?lat=-35&lon=-59"));

    expect(respuesta.status).toBe(503);
    expect(respuesta.headers.get("retry-after")).toBe("60");
    expect(respuesta.headers.get("cache-control")).toBe(
      "public, max-age=0, s-maxage=60",
    );
  });

  it("si adsb.lol falla, avisa y no guarda el error en ningún lado", async () => {
    adsbResponde(503);

    const respuesta = await GET(pedido("?lat=-35&lon=-59"));

    expect(respuesta.status).toBe(502);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
    expect(await respuesta.json()).toEqual({
      error: "adsb.lol respondió 503.",
    });
  });
});
