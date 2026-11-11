import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { LugaresDeLaCelda } from "@/lib/comidas/lugares";
import type { ResultadoDeLugares } from "@/lib/comidas/overpass";

const traerLugares = vi.fn<() => Promise<ResultadoDeLugares>>();
const lugaresPropios = vi.fn<() => Promise<LugaresDeLaCelda | null>>();

vi.mock("@/lib/comidas/overpass", () => ({
  traerLugares: (...args: unknown[]) => traerLugares(...(args as [])),
}));

vi.mock("@/lib/comidas/base", () => ({
  lugaresPropios: (...args: unknown[]) => lugaresPropios(...(args as [])),
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

beforeEach(() => {
  // Por defecto, el país todavía no tiene datos propios: va a Overpass.
  lugaresPropios.mockResolvedValue(null);
});

afterEach(() => {
  traerLugares.mockReset();
  lugaresPropios.mockReset();
  vi.restoreAllMocks();
});

describe("GET /api/que-comer/lugares", () => {
  it("con datos propios, los sirve con una hora de CDN y sin preguntarle a Overpass", async () => {
    lugaresPropios.mockResolvedValue({
      ...datos(new Date(Date.now() - 2 * 86_400_000)).datos,
      datosDel: "2026-11-10T20:21:02.000Z",
    });

    const respuesta = await pedir(BIEN);
    const cuerpo = await respuesta.json();

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=3600");
    // Pedirlos de nuevo no trae nada más nuevo: no se están renovando.
    expect(cuerpo.renovando).toBe(false);
    expect(cuerpo.datosDel).toBe("2026-11-10T20:21:02.000Z");
    expect(lugaresPropios).toHaveBeenCalledWith("japon", "ramen", {
      fila: 356,
      columna: 1397,
    });
    expect(traerLugares).not.toHaveBeenCalled();
  });

  it("si la base falla, vuelve a Overpass", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    lugaresPropios.mockRejectedValue(new Error("connection refused"));
    traerLugares.mockResolvedValue(datos(new Date()));

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(200);
    expect(traerLugares).toHaveBeenCalledTimes(1);
  });

  it("responde con caché en la CDN lo que está al día", async () => {
    traerLugares.mockResolvedValue(datos(new Date()));

    const respuesta = await pedir(BIEN);
    const cuerpo = await respuesta.json();

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=600");
    expect(cuerpo.celda).toBe("356_1397");
    expect(cuerpo.renovando).toBe(false);
  });

  it("lo que tiene más de un día sale igual, pero sin caché y avisando que se renueva", async () => {
    traerLugares.mockResolvedValue(
      datos(new Date(Date.now() - 2 * 86_400_000)),
    );

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
    expect((await respuesta.json()).renovando).toBe(true);
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
