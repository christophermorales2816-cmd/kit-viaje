import { describe, expect, it } from "vitest";

import { circulo, distanciaKm, longitudCercaDe } from "./geo";

const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];
const MADRID: [number, number] = [40.4168, -3.7038];

describe("distanciaKm", () => {
  it("mide Buenos Aires–Madrid como el resto del mundo", () => {
    expect(distanciaKm(BUENOS_AIRES, MADRID)).toBeCloseTo(10_045, -1);
  });

  it("es cero de un punto a sí mismo y no depende del sentido", () => {
    expect(distanciaKm(MADRID, MADRID)).toBe(0);
    expect(distanciaKm(MADRID, BUENOS_AIRES)).toBeCloseTo(
      distanciaKm(BUENOS_AIRES, MADRID),
    );
  });

  it("cruza el antimeridiano por el camino corto", () => {
    // Funafuti y Apia, a cada lado de la línea: unos mil kilómetros, no la
    // vuelta al mundo.
    expect(distanciaKm([-8.52, 179.2], [-13.83, -171.76])).toBeLessThan(1_200);
  });
});

describe("longitudCercaDe", () => {
  it("deja igual una longitud que ya está cerca", () => {
    expect(longitudCercaDe(-58.4, -59)).toBe(-58.4);
  });

  it("corre 360° la que quedó del otro lado del antimeridiano", () => {
    expect(longitudCercaDe(-179, 179)).toBe(181);
    expect(longitudCercaDe(179, -179)).toBe(-181);
  });
});

describe("circulo", () => {
  it("cierra el anillo y deja todos los puntos a la misma distancia", () => {
    const anillo = circulo(-35, -59, 463, 32);

    expect(anillo).toHaveLength(33);
    expect(anillo[0]).toEqual(anillo[32]);

    for (const [lon, lat] of anillo) {
      expect(distanciaKm([-35, -59], [lat, lon])).toBeCloseTo(463, 0);
    }
  });

  it("no se aplasta lejos del ecuador: es más ancho en grados que alto", () => {
    const anillo = circulo(-55, -68, 463);
    const longitudes = anillo.map(([lon]) => lon);
    const latitudes = anillo.map(([, lat]) => lat);
    const ancho = Math.max(...longitudes) - Math.min(...longitudes);
    const alto = Math.max(...latitudes) - Math.min(...latitudes);

    // A 55° de latitud, un grado de longitud mide 0,57 de uno de latitud.
    expect(ancho / alto).toBeCloseTo(1 / Math.cos((55 * Math.PI) / 180), 0);
  });

  it("sobre el antimeridiano sigue de corrido, sin saltar a -180", () => {
    const longitudes = circulo(0, 179, 463).map(([lon]) => lon);

    expect(Math.max(...longitudes)).toBeGreaterThan(180);
    expect(Math.min(...longitudes)).toBeGreaterThan(170);
  });
});
