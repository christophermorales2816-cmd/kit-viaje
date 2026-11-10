import { describe, expect, it } from "vitest";

import {
  CELDAS_MAXIMAS,
  celdaDe,
  celdaDeClave,
  celdaDelPais,
  celdasVisibles,
  centroDeCelda,
  claveDeCelda,
  limitesDeCelda,
  rutaDeLugares,
} from "./celdas";

describe("celdaDe", () => {
  it("nombra la celda por su borde sur y su borde oeste", () => {
    // Tokio: 35,68° N, 139,76° E.
    expect(celdaDe(35.68, 139.76)).toEqual({ fila: 356, columna: 1397 });
    // Buenos Aires: 34,60° S, 58,38° O.
    expect(celdaDe(-34.6, -58.38)).toEqual({ fila: -346, columna: -584 });
  });

  it("no se equivoca en el borde por la coma flotante", () => {
    // 35,7 × 10 da 356,99999999999994.
    expect(celdaDe(35.7, 139.7)).toEqual({ fila: 357, columna: 1397 });
  });

  it("da la vuelta en el antimeridiano", () => {
    expect(celdaDe(-18.1, 180.05)).toEqual(celdaDe(-18.1, -179.95));
    expect(celdaDe(-18.1, 180.05).columna).toBe(-1800);
  });
});

describe("las claves", () => {
  it("van y vuelven", () => {
    const celda = { fila: -346, columna: -584 };

    expect(celdaDeClave(claveDeCelda(celda))).toEqual(celda);
  });

  it("aceptan una sola forma de escribir cada celda", () => {
    expect(celdaDeClave("356_1397")).toEqual({ fila: 356, columna: 1397 });
    expect(celdaDeClave("0_0")).toEqual({ fila: 0, columna: 0 });

    for (const mala of [
      "0356_1397",
      "-0_5",
      "356_1397 ",
      "356,1397",
      "900_0",
      "0_1800",
      356,
    ]) {
      expect(celdaDeClave(mala)).toBeNull();
    }
  });
});

describe("limitesDeCelda y centroDeCelda", () => {
  it("dan el rectángulo de una décima de grado", () => {
    expect(limitesDeCelda({ fila: -346, columna: -584 })).toEqual({
      sur: -34.6,
      oeste: -58.4,
      norte: -34.5,
      este: -58.3,
    });

    const [lat, lon] = centroDeCelda({ fila: -346, columna: -584 });
    expect(lat).toBeCloseTo(-34.55);
    expect(lon).toBeCloseTo(-58.35);
  });
});

describe("celdasVisibles", () => {
  it("da las celdas que toca la vista", () => {
    const celdas = celdasVisibles({
      sur: 35.65,
      oeste: 139.65,
      norte: 35.72,
      este: 139.82,
    });

    expect(celdas?.map(claveDeCelda)).toEqual([
      "356_1396",
      "356_1397",
      "356_1398",
      "357_1396",
      "357_1397",
      "357_1398",
    ]);
  });

  it("con el mapa muy alejado, no da ninguna", () => {
    expect(
      celdasVisibles({ sur: 35, oeste: 139, norte: 36, este: 140 }),
    ).toBeNull();
    expect(CELDAS_MAXIMAS).toBeLessThan(100);
  });

  it("sobre el antimeridiano, las columnas siguen del otro lado", () => {
    const celdas = celdasVisibles({
      sur: -18.15,
      oeste: 179.95,
      norte: -18.05,
      este: 180.05,
    });

    expect(celdas?.map((celda) => celda.columna)).toEqual([
      1799, -1800, 1799, -1800,
    ]);
  });
});

describe("celdaDelPais", () => {
  const ciudades = [
    {
      id: "tokio",
      nombre: "Tokio",
      coords: [35.68, 139.76] as [number, number],
    },
  ];

  it("acepta lo que está cerca de alguna ciudad del catálogo", () => {
    expect(celdaDelPais(celdaDe(35.0, 135.76), ciudades)).toBe(false);
    expect(celdaDelPais(celdaDe(35.44, 139.64), ciudades)).toBe(true);
  });
});

describe("rutaDeLugares", () => {
  it("arma la URL de la API", () => {
    expect(rutaDeLugares("japon", "ramen", { fila: 356, columna: 1397 })).toBe(
      "/api/que-comer/lugares?pais=japon&plato=ramen&celda=356_1397",
    );
  });
});
