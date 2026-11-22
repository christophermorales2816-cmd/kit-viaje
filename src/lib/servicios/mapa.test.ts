import { describe, expect, it } from "vitest";

import {
  geojsonDeServicios,
  juntarServicios,
  serviciosPorCercania,
  vistaDeServicios,
} from "./mapa";
import type { ServicioCercano } from "./servicios";

const USHUAIA = { coords: [-54.8019, -68.303] as [number, number] };

// Lo que se ve del mapa alrededor de Ushuaia, acercado: dos celdas.
const CERCA = { sur: -54.83, oeste: -68.35, norte: -54.78, este: -68.25 };

function servicio(
  id: string,
  lat: number,
  lon: number,
  tipo: ServicioCercano["tipo"] = "salud",
): ServicioCercano {
  return {
    id,
    tipo,
    nombre: id,
    nombreLatino: null,
    lat,
    lon,
    telefono: null,
    horario: null,
    web: null,
    direccion: null,
  };
}

describe("vistaDeServicios", () => {
  it("apagados, no pide nada", () => {
    expect(
      vistaDeServicios({
        activo: false,
        zoom: 13,
        limites: CERCA,
        places: [USHUAIA],
      }),
    ).toEqual({ tipo: "apagado" });
  });

  it("muy alejado, pide acercar", () => {
    expect(
      vistaDeServicios({
        activo: true,
        zoom: 9,
        limites: CERCA,
        places: [USHUAIA],
      }),
    ).toEqual({ tipo: "lejos" });

    // Con el zoom alcanzaría, pero lo que se ve son demasiadas celdas.
    expect(
      vistaDeServicios({
        activo: true,
        zoom: 12,
        limites: { sur: -55, oeste: -69, norte: -54, este: -68 },
        places: [USHUAIA],
      }),
    ).toEqual({ tipo: "lejos" });
  });

  it("pide las celdas que se ven", () => {
    expect(
      vistaDeServicios({
        activo: true,
        zoom: 12,
        limites: CERCA,
        places: [USHUAIA],
      }),
    ).toEqual({
      tipo: "celdas",
      claves: ["-549_-684", "-549_-683", "-548_-684", "-548_-683"],
    });
  });

  it("lejos de los destinos de la guía, no pide nada", () => {
    expect(
      vistaDeServicios({
        activo: true,
        zoom: 12,
        limites: { sur: 35.6, oeste: 139.7, norte: 35.65, este: 139.75 },
        places: [USHUAIA],
      }),
    ).toEqual({ tipo: "fuera" });
  });
});

describe("juntarServicios", () => {
  it("deja una vez lo que está en dos celdas", () => {
    const hospital = servicio("way/1", -54.8, -68.3);

    expect(
      juntarServicios([
        [hospital],
        [hospital, servicio("node/2", -54.8, -68.31)],
      ]),
    ).toHaveLength(2);
  });
});

describe("serviciosPorCercania", () => {
  it("ordena del más cercano al más lejano", () => {
    const lejos = servicio("node/1", -54.7, -68.3);
    const cerca = servicio("node/2", -54.8, -68.3);

    expect(
      serviciosPorCercania([lejos, cerca], [-54.8, -68.3]).map(
        ({ servicio }) => servicio.id,
      ),
    ).toEqual(["node/2", "node/1"]);
  });
});

describe("geojsonDeServicios", () => {
  it("lleva el color y la letra de cada tipo", () => {
    const geojson = geojsonDeServicios([
      servicio("node/1", -54.8, -68.3, "farmacia"),
    ]);

    expect(geojson.features[0]).toEqual({
      type: "Feature",
      geometry: { type: "Point", coordinates: [-68.3, -54.8] },
      properties: { id: "node/1", color: "#15803d", letra: "+" },
    });
  });
});
