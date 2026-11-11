import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ResultadoDeLugares } from "@/lib/comidas/overpass";

const traerLugares = vi.fn<() => Promise<ResultadoDeLugares>>();

vi.mock("@/lib/comidas/overpass", () => ({
  traerLugares: (...args: unknown[]) => traerLugares(...(args as [])),
}));

import { GET } from "./route";

function pedir(busqueda: string) {
  return GET(
    new NextRequest(`http://localhost/api/que-comer/lugares?${busqueda}`),
  );
}

// Una celda del centro de Tokio, y ramen, que en el catálogo tiene búsqueda.
const BIEN = "pais=japon&plato=ramen&celda=356_1397";

function datos(actualizado: Date) {
  return {
    ok: true as const,
    datos: {
      celda: "356_1397",
      actualizado: actualizado.toISOString(),
      datosDel: actualizado.toISOString(),
      lugares: [],
      recortado: false,
    },
  };
}

afterEach(() => {
  traerLugares.mockReset();
});

describe("GET /api/que-comer/lugares", () => {
  it("responde con caché en la CDN lo que está al día", async () => {
    traerLugares.mockResolvedValue(datos(new Date()));

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=600");
    expect((await respuesta.json()).celda).toBe("356_1397");
  });

  it("lo que tiene más de un día sale igual, pero sin caché", async () => {
    traerLugares.mockResolvedValue(
      datos(new Date(Date.now() - 2 * 86_400_000)),
    );

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
  });

  it("no acepta un plato que no está en el catálogo, ni uno sin mapa", async () => {
    expect((await pedir("pais=japon&plato=pizza&celda=356_1397")).status).toBe(
      404,
    );
    expect(
      (await pedir("pais=atlantida&plato=ramen&celda=356_1397")).status,
    ).toBe(404);
    // El onigiri lo tiene cualquier konbini: no hay mapa.
    expect(
      (await pedir("pais=japon&plato=onigiri&celda=356_1397")).status,
    ).toBe(404);
    expect(traerLugares).not.toHaveBeenCalled();
  });

  it("solo acepta celdas de la grilla, dentro del país", async () => {
    expect((await pedir("pais=japon&plato=ramen&celda=0356_1397")).status).toBe(
      400,
    );
    expect(
      (await pedir("pais=japon&plato=ramen&celda=35.6,139.7")).status,
    ).toBe(400);
    // Buenos Aires no es Japón.
    expect((await pedir("pais=japon&plato=ramen&celda=-346_-584")).status).toBe(
      400,
    );
    expect(traerLugares).not.toHaveBeenCalled();
  });

  it("cuando Overpass pide esperar, contesta 503 con Retry-After", async () => {
    traerLugares.mockResolvedValue({
      ok: false,
      motivo: "Overpass respondió 429.",
      esperaS: 60,
    });

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(503);
    expect(respuesta.headers.get("retry-after")).toBe("60");
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=60");
  });

  it("si Overpass rechazó al sitio, pide esperar lo que falta de la pausa", async () => {
    traerLugares.mockResolvedValue({
      ok: false,
      motivo: "Overpass respondió 406.",
      esperaS: 845,
    });

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(503);
    expect(respuesta.headers.get("retry-after")).toBe("845");
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=845");
  });

  it("otra falla no se guarda en ningún lado", async () => {
    traerLugares.mockResolvedValue({
      ok: false,
      motivo: "Overpass respondió 500.",
      esperaS: null,
    });

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(502);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
  });
});
