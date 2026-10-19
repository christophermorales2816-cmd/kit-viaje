import { describe, expect, it } from "vitest";

import {
  etiquetaEnCastellano,
  geojsonDeAviones,
  geojsonDeZona,
  limitesDeZona,
  porCercania,
  puntoCardinal,
} from "./radar";
import type { AvionEnVuelo } from "./tipos";

function avion(cambios: Partial<AvionEnVuelo>): AvionEnVuelo {
  return {
    hex: "e0abcd",
    vuelo: "ARG1302",
    modelo: "B738",
    matricula: "LV-ZZZ",
    lat: -34.8,
    lon: -58.5,
    rumbo: 141,
    altitudM: 10670,
    velocidadKmH: 833,
    ...cambios,
  };
}

describe("geojsonDeAviones", () => {
  it("arma un punto por avión y marca el elegido", () => {
    const geojson = geojsonDeAviones(
      [avion({ hex: "aaaaaa" }), avion({ hex: "bbbbbb", lon: -60 })],
      { lat: -35, lon: -59 },
      "bbbbbb",
    );

    expect(geojson.features.map((f) => f.geometry.coordinates)).toEqual([
      [-58.5, -34.8],
      [-60, -34.8],
    ]);
    expect(geojson.features.map((f) => f.properties.elegido)).toEqual([
      false,
      true,
    ]);
  });

  it("deja del mismo lado del mapa a un avión que cruzó el antimeridiano", () => {
    const geojson = geojsonDeAviones(
      [avion({ lon: -179.5 })],
      { lat: -18, lon: 179 },
      null,
    );

    expect(geojson.features[0].geometry.coordinates[0]).toBe(180.5);
  });
});

describe("geojsonDeZona y limitesDeZona", () => {
  it("dibujan el mismo círculo", () => {
    const centro = { lat: -35, lon: -59 };
    const borde = geojsonDeZona(centro, 463).geometry.coordinates;
    const [[oeste, sur], [este, norte]] = limitesDeZona(centro, 463);

    for (const [lon, lat] of borde) {
      expect(lon).toBeGreaterThanOrEqual(oeste);
      expect(lon).toBeLessThanOrEqual(este);
      expect(lat).toBeGreaterThanOrEqual(sur);
      expect(lat).toBeLessThanOrEqual(norte);
    }

    // 463 km son unos 4,2 grados de latitud hacia cada lado.
    expect(norte - sur).toBeCloseTo(8.3, 1);
  });
});

describe("porCercania", () => {
  it("ordena del más cercano al más lejano del centro", () => {
    const lista = porCercania(
      [
        avion({ hex: "lejano", lat: -38 }),
        avion({ hex: "cerca", lat: -35.1, lon: -59 }),
        avion({ hex: "medio", lat: -36 }),
      ],
      { lat: -35, lon: -59 },
    );

    expect(lista.map(({ avion }) => avion.hex)).toEqual([
      "cerca",
      "medio",
      "lejano",
    ]);
    expect(lista[0].distanciaKm).toBeCloseTo(11, 0);
  });
});

describe("puntoCardinal", () => {
  it("nombra hacia dónde va un avión", () => {
    expect(puntoCardinal(0)).toBe("norte");
    expect(puntoCardinal(141)).toBe("sureste");
    expect(puntoCardinal(270)).toBe("oeste");
    expect(puntoCardinal(350)).toBe("norte");
    expect(puntoCardinal(-90)).toBe("oeste");
  });
});

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
