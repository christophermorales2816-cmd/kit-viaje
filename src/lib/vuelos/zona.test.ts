import { describe, expect, it } from "vitest";

import { centroDeConsulta, centroDeZona, rutaDeZona } from "./zona";

describe("centroDeZona", () => {
  it("lleva un punto al centro de la grilla más cercano", () => {
    // Ezeiza.
    expect(centroDeZona(-34.8222, -58.5358)).toEqual({ lat: -35, lon: -59 });
    // Heathrow.
    expect(centroDeZona(51.4707, -0.4599)).toEqual({ lat: 51, lon: 0 });
  });

  it("no deja un -0, que en la URL se escribiría distinto que 0", () => {
    const centro = centroDeZona(-0.2, -0.3);

    expect(Object.is(centro.lat, 0)).toBe(true);
    expect(Object.is(centro.lon, 0)).toBe(true);
  });

  it("da la vuelta en el antimeridiano y frena antes de los polos", () => {
    expect(centroDeZona(10, 179.6)).toEqual({ lat: 10, lon: -180 });
    expect(centroDeZona(10, -180)).toEqual({ lat: 10, lon: -180 });
    expect(centroDeZona(10, 200)).toEqual({ lat: 10, lon: -160 });
    expect(centroDeZona(89.9, 0).lat).toBe(85);
    expect(centroDeZona(-89.9, 0).lat).toBe(-85);
  });
});

describe("centroDeConsulta", () => {
  it("acepta un centro de la grilla escrito como lo escribe el radar", () => {
    expect(centroDeConsulta("-35", "-59")).toEqual({ lat: -35, lon: -59 });
    expect(centroDeConsulta("0", "0")).toEqual({ lat: 0, lon: 0 });
  });

  it("rechaza la misma zona escrita de otra forma: cada URL nueva saltea la caché", () => {
    for (const [lat, lon] of [
      ["-35.0", "-59"],
      ["-035", "-59"],
      ["-0", "0"],
      ["+35", "59"],
      [" -35", "-59"],
    ]) {
      expect(centroDeConsulta(lat, lon), `${lat},${lon}`).toBeNull();
    }
  });

  it("rechaza lo que está fuera de la grilla o no es un número", () => {
    expect(centroDeConsulta("86", "0")).toBeNull();
    expect(centroDeConsulta("0", "180")).toBeNull();
    expect(centroDeConsulta("abc", "0")).toBeNull();
    expect(centroDeConsulta(null, "0")).toBeNull();
    expect(centroDeConsulta("0", undefined)).toBeNull();
  });

  it("vuelve a leer lo que escribe rutaDeZona", () => {
    const centro = centroDeZona(-34.82, -58.54);
    const url = new URL(rutaDeZona(centro), "https://kit.app");

    expect(url.pathname).toBe("/api/vuelos/en-vivo");
    expect(
      centroDeConsulta(
        url.searchParams.get("lat"),
        url.searchParams.get("lon"),
      ),
    ).toEqual(centro);
  });
});
