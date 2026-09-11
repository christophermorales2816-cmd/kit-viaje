import { describe, expect, it } from "vitest";

import type { Destination } from "@/lib/supabase/reference";

import { groupCitiesByRegion } from "./group-cities";

function ciudad(slug: string, isBase = false): Destination {
  return {
    id: slug,
    name: slug,
    slug,
    corridor: "bolivia",
    baseCurrency: "BOB",
    isBase,
  };
}

describe("groupCitiesByRegion", () => {
  it("junta ciudades de la misma región aunque lleguen intercaladas", () => {
    // Las ciudades llegan ordenadas por nombre, no por región: si el agrupado
    // solo mirara la anterior, Bolivia saldría con quince grupos de uno.
    const grupos = groupCitiesByRegion(
      [
        ciudad("la-paz", true),
        ciudad("cochabamba"),
        ciudad("coroico"),
        ciudad("oruro"),
        ciudad("sorata"),
        ciudad("sucre"),
      ],
      {
        "la-paz": "Altiplano",
        cochabamba: "Valles",
        coroico: "Yungas",
        oruro: "Altiplano",
        sorata: "Yungas",
        sucre: "Valles",
      },
    );

    expect(
      grupos.map((g) => [g.region, g.destinations.map((d) => d.slug)]),
    ).toEqual([
      ["Altiplano", ["la-paz", "oruro"]],
      ["Valles", ["cochabamba", "sucre"]],
      ["Yungas", ["coroico", "sorata"]],
    ]);
  });

  it("pone primero la región de la ciudad base", () => {
    // La base llega primera desde la base de datos y su región tiene que quedar
    // arriba: es la ciudad que la página muestra por defecto.
    const grupos = groupCitiesByRegion(
      [ciudad("santa-cruz", true), ciudad("la-paz")],
      { "santa-cruz": "Oriente", "la-paz": "Altiplano" },
    );

    expect(grupos[0]?.region).toBe("Oriente");
  });

  it("no esconde una ciudad que el contenido no nombró", () => {
    // Es el error de la sección 11 al revés: un destino planificable que
    // desaparece del selector porque falta una línea de contenido.
    const grupos = groupCitiesByRegion(
      [ciudad("la-paz", true), ciudad("villazon")],
      { "la-paz": "Altiplano" },
    );

    expect(grupos.at(-1)).toEqual({
      region: null,
      destinations: [ciudad("villazon")],
    });
  });

  it("manda el grupo sin región al final aunque aparezca primero", () => {
    const grupos = groupCitiesByRegion(
      [ciudad("villazon", true), ciudad("la-paz")],
      { "la-paz": "Altiplano" },
    );

    expect(grupos.map((g) => g.region)).toEqual(["Altiplano", null]);
  });

  it("devuelve una lista vacía sin ciudades", () => {
    expect(groupCitiesByRegion([], {})).toEqual([]);
  });
});
