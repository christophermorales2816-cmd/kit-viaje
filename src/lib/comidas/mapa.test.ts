import { describe, expect, it } from "vitest";

import type { LugarDeComida } from "./lugares";
import { sinNovedades, urlParaAvisar, urlParaLlegar } from "./lugares";
import {
  ciudadInicial,
  geojsonDeLugares,
  juntarLugares,
  porCercania,
} from "./mapa";

const HOY = new Date("2026-10-28T12:00:00Z");

function lugar(
  id: string,
  cambios: Partial<LugarDeComida> = {},
): LugarDeComida {
  return {
    id,
    nombre: id,
    nombreLatino: null,
    lat: 35.68,
    lon: 139.76,
    tipo: "comida",
    direccion: null,
    horario: null,
    web: null,
    telefono: null,
    verificado: null,
    editado: "2026-01-01",
    ...cambios,
  };
}

describe("ciudadInicial", () => {
  const catalogo = {
    ciudades: [
      {
        id: "tokio",
        nombre: "Tokio",
        coords: [35.68, 139.76] as [number, number],
        region: "kanto",
      },
      {
        id: "osaka",
        nombre: "Osaka",
        coords: [34.67, 135.5] as [number, number],
        region: "kansai",
      },
    ],
  };

  it("arranca en la región del plato, o en la primera ciudad", () => {
    expect(ciudadInicial(catalogo, { regiones: ["kansai"] }).id).toBe("osaka");
    expect(ciudadInicial(catalogo, { regiones: [] }).id).toBe("tokio");
    expect(ciudadInicial(catalogo, { regiones: ["okinawa"] }).id).toBe("tokio");
  });
});

describe("juntarLugares", () => {
  it("no repite un lugar que tocan dos celdas", () => {
    const mercado = lugar("way/1");

    expect(
      juntarLugares([[mercado, lugar("node/2")], [mercado]]).map((l) => l.id),
    ).toEqual(["way/1", "node/2"]);
  });
});

describe("sinNovedades y geojsonDeLugares", () => {
  it("marca como dudoso lo que nadie tocó en años y nadie confirmó", () => {
    expect(sinNovedades(lugar("a", { editado: "2019-05-01" }), HOY)).toBe(true);
    expect(sinNovedades(lugar("b", { editado: "2024-05-01" }), HOY)).toBe(
      false,
    );
    expect(
      sinNovedades(
        lugar("c", { editado: "2015-05-01", verificado: "2015-05" }),
        HOY,
      ),
    ).toBe(false);
    expect(sinNovedades(lugar("d", { editado: null }), HOY)).toBe(true);
  });

  it("arma un punto por lugar, con el elegido marcado", () => {
    const geojson = geojsonDeLugares(
      [lugar("node/1"), lugar("node/2", { editado: "2010-01-01" })],
      HOY,
      "node/2",
    );

    expect(geojson.features.map((f) => f.properties)).toEqual([
      { id: "node/1", dudoso: false, elegido: false },
      { id: "node/2", dudoso: true, elegido: true },
    ]);
    expect(geojson.features[0].geometry.coordinates).toEqual([139.76, 35.68]);
  });
});

describe("porCercania", () => {
  it("ordena del más cercano al más lejano", () => {
    const lista = porCercania(
      [lugar("lejos", { lat: 35.9 }), lugar("cerca", { lat: 35.681 })],
      [35.68, 139.76],
    );

    expect(lista.map(({ lugar }) => lugar.id)).toEqual(["cerca", "lejos"]);
  });
});

describe("los links de cada lugar", () => {
  it("llevan a una nota de OpenStreetMap y a cómo llegar", () => {
    expect(urlParaAvisar(35.681234567, 139.76)).toBe(
      "https://www.openstreetmap.org/note/new#map=18/35.68123/139.76000",
    );
    expect(urlParaLlegar(35.68, 139.76)).toBe(
      "https://www.google.com/maps/dir/?api=1&destination=35.680000,139.760000",
    );
  });
});
