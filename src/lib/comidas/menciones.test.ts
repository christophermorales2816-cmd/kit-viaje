import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/cache", () => ({
  unstable_cache: <T>(funcion: T) => funcion,
}));

import type { Mencion } from "@/content/comidas/types";

import {
  abiertasDeLaRespuesta,
  consultaDeMenciones,
  mencionesVigentes,
} from "./menciones";

const HOY = new Date("2026-10-28T12:00:00Z");

function mencion(id: string, osm: string): Mencion {
  return {
    id,
    nombre: id,
    ciudad: "tokio",
    tipo: "puestito",
    porQue: "Porque sí.",
    platos: ["ramen"],
    osm,
    coords: [35.68, 139.76],
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("consultaDeMenciones", () => {
  it("pregunta por todas juntas, agrupadas por tipo", () => {
    expect(consultaDeMenciones(["node/1", "way/2", "node/3", "algo/4"])).toBe(
      "[out:json][timeout:20];(node(id:1,3);way(id:2););out tags;",
    );
  });
});

describe("abiertasDeLaRespuesta", () => {
  it("cuenta como abierta solo la que sigue siendo un lugar de comida", () => {
    const abiertas = abiertasDeLaRespuesta(
      {
        elements: [
          {
            type: "node",
            id: 1,
            tags: { amenity: "restaurant", name: "Taro" },
          },
          {
            type: "node",
            id: 3,
            tags: { amenity: "restaurant", disused: "yes" },
          },
          { type: "way", id: 2, tags: { "disused:amenity": "cafe" } },
        ],
      },
      HOY,
    );

    expect(abiertas).toEqual(new Set(["node/1"]));
  });
});

describe("mencionesVigentes", () => {
  const menciones = [mencion("taro", "node/1"), mencion("cerro", "node/2")];

  it("deja afuera las que OpenStreetMap ya no tiene abiertas", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        Response.json({
          elements: [{ type: "node", id: 1, tags: { amenity: "restaurant" } }],
        }),
      ),
    );

    const vigentes = await mencionesVigentes(menciones);

    expect(vigentes.map((m) => m.id)).toEqual(["taro"]);
  });

  it("si Overpass no contesta, las muestra todas", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("", { status: 504 })),
    );

    expect((await mencionesVigentes(menciones)).map((m) => m.id)).toEqual([
      "taro",
      "cerro",
    ]);
  });

  it("sin menciones no pregunta nada", async () => {
    const falso = vi.fn();
    vi.stubGlobal("fetch", falso);

    expect(await mencionesVigentes([])).toEqual([]);
    expect(falso).not.toHaveBeenCalled();
  });
});
