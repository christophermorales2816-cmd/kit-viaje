import { describe, expect, it } from "vitest";

import { TEXTOS_DEL_MAPA } from "@/i18n/mapa";

import {
  ESTADOS_DESDE_EL_ZOOM,
  capaDeLimitesDeEstados,
  etiquetaEnCastellano,
  textosDelMapa,
} from "./estilo";

describe("etiquetaEnCastellano", () => {
  it("pone primero el nombre en castellano y deja el del estilo de respaldo", () => {
    const delEstilo = ["coalesce", ["get", "name_en"], ["get", "name"]];

    expect(etiquetaEnCastellano(delEstilo)).toEqual([
      "coalesce",
      ["get", "name:es"],
      delEstilo,
    ]);
  });

  it("no toca lo que no es un nombre", () => {
    const patente = ["to-string", ["get", "ref"]];

    expect(etiquetaEnCastellano(patente)).toBe(patente);
    expect(etiquetaEnCastellano("{name}")).toBe("{name}");
    expect(etiquetaEnCastellano(undefined)).toBeUndefined();
  });
});

describe("textosDelMapa", () => {
  it("pone el título del mapa y los controles en castellano", () => {
    const textos = textosDelMapa("Mapa de prueba.", TEXTOS_DEL_MAPA.es);

    expect(textos["Map.Title"]).toBe("Mapa de prueba.");
    expect(textos["NavigationControl.ZoomIn"]).toBe("Acercar");
  });
});

describe("capaDeLimitesDeEstados", () => {
  // Como viene en el estilo positron de OpenFreeMap.
  const limitesDelEstilo = {
    id: "boundary_3",
    type: "line",
    source: "openmaptiles",
    "source-layer": "boundary",
    minzoom: 8,
    filter: [
      "all",
      [">=", ["get", "admin_level"], 3],
      ["<=", ["get", "admin_level"], 6],
      ["!=", ["get", "maritime"], 1],
    ],
    paint: { "line-color": "hsl(0, 0%, 70%)", "line-dasharray": [1, 1] },
  };

  it("dibuja los estados desde que se ve el país, hasta donde empieza el estilo", () => {
    const capa = capaDeLimitesDeEstados([limitesDelEstilo]);

    expect(capa).toMatchObject({
      id: "limites_de_estados",
      type: "line",
      source: "openmaptiles",
      "source-layer": "boundary",
      minzoom: ESTADOS_DESDE_EL_ZOOM,
      maxzoom: 8,
      paint: limitesDelEstilo.paint,
    });
  });

  it("deja solo el nivel 4, sin perder lo que filtraba el estilo", () => {
    const capa = capaDeLimitesDeEstados([limitesDelEstilo]);

    expect(capa?.filter).toEqual([
      "all",
      limitesDelEstilo.filter,
      ["==", ["get", "admin_level"], 4],
    ]);
  });

  it("no rompe el mapa si el estilo cambia y la capa ya no está", () => {
    expect(capaDeLimitesDeEstados([{ id: "water", type: "fill" }])).toBeNull();
    expect(
      capaDeLimitesDeEstados([{ id: "boundary_3", type: "symbol" }]),
    ).toBeNull();
  });
});
