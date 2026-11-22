import { NextRequest } from "next/server";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ResultadoDeServicios } from "@/lib/servicios/overpass";

const traerServicios = vi.fn<() => Promise<ResultadoDeServicios>>();

vi.mock("@/lib/servicios/overpass", () => ({
  traerServicios: (...args: unknown[]) => traerServicios(...(args as [])),
}));

import { GET } from "./route";

function pedir(busqueda: string) {
  return GET(new NextRequest(`http://localhost/api/servicios?${busqueda}`));
}

// La celda de Ushuaia, que es un destino de la guía de Argentina.
const BIEN = "guia=argentina&celda=-549_-684";

function datos(actualizado: Date) {
  return {
    ok: true as const,
    datos: {
      celda: "-549_-684",
      actualizado: actualizado.toISOString(),
      datosDel: actualizado.toISOString(),
      servicios: [],
      recortado: false,
    },
  };
}

afterEach(() => {
  traerServicios.mockReset();
  vi.restoreAllMocks();
});

describe("GET /api/servicios", () => {
  it("sirve los servicios de la celda, con un día de CDN", async () => {
    traerServicios.mockResolvedValue(datos(new Date()));

    const respuesta = await pedir(BIEN);
    const cuerpo = await respuesta.json();

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=86400");
    expect(cuerpo.renovando).toBe(false);
    expect(traerServicios).toHaveBeenCalledWith({
      fila: -549,
      columna: -684,
    });
  });

  it("los de más de una semana salen sin caché y diciendo que se renuevan", async () => {
    traerServicios.mockResolvedValue(
      datos(new Date(Date.now() - 8 * 86_400_000)),
    );

    const respuesta = await pedir(BIEN);
    const cuerpo = await respuesta.json();

    expect(respuesta.status).toBe(200);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
    expect(cuerpo.renovando).toBe(true);
  });

  it("no le pregunta a OpenStreetMap por una guía que no existe", async () => {
    const respuesta = await pedir("guia=atlantida&celda=-549_-684");

    expect(respuesta.status).toBe(404);
    expect(traerServicios).not.toHaveBeenCalled();
  });

  it("no acepta una celda que no es de la grilla", async () => {
    for (const celda of ["", "abc", "-0549_-684", "-549_-684;out"]) {
      const respuesta = await pedir(`guia=argentina&celda=${celda}`);

      expect(respuesta.status, celda).toBe(400);
    }

    expect(traerServicios).not.toHaveBeenCalled();
  });

  it("no acepta una celda lejos de los destinos de la guía", async () => {
    // El centro de Tokio, pedido como si fuera de la guía de Argentina.
    const respuesta = await pedir("guia=argentina&celda=356_1397");

    expect(respuesta.status).toBe(400);
    expect(traerServicios).not.toHaveBeenCalled();
  });

  it("si Overpass frenó al sitio, contesta 503 con lo que hay que esperar", async () => {
    traerServicios.mockResolvedValue({
      ok: false,
      motivo: "Overpass respondió 429.",
      esperaS: 60,
    });

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(503);
    expect(respuesta.headers.get("retry-after")).toBe("60");
    expect(respuesta.headers.get("cache-control")).toContain("s-maxage=60");
  });

  it("si Overpass falla de otra forma, contesta 502 sin caché", async () => {
    traerServicios.mockResolvedValue({
      ok: false,
      motivo: "No se pudo contactar a Overpass.",
      esperaS: null,
    });

    const respuesta = await pedir(BIEN);

    expect(respuesta.status).toBe(502);
    expect(respuesta.headers.get("cache-control")).toBe("no-store");
  });
});
