import { describe, expect, it } from "vitest";

import { ORDEN_POR_TIPO } from "./aeropuertos";
import {
  ALTERNATIVAS,
  RADIO_KM,
  aeropuertosCercanos,
  distanciaKm,
  sugerirOrigen,
} from "./cercanos";

const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];
const MADRID: [number, number] = [40.4168, -3.7038];
const LONDRES: [number, number] = [51.5074, -0.1278];
const TRISTAN_DA_CUNHA: [number, number] = [-37.1, -12.3];

/** Los códigos de una lista de cercanos, en orden. */
function codigos(lista: { aeropuerto: { iata: string } }[]): string[] {
  return lista.map(({ aeropuerto }) => aeropuerto.iata);
}

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

describe("aeropuertosCercanos", () => {
  it("trae los del radio, del más cercano al más lejano", () => {
    const cerca = aeropuertosCercanos(...LONDRES);
    const distancias = cerca.map(({ distanciaKm }) => distanciaKm);

    expect(distancias.length).toBeGreaterThan(1);
    expect(distancias).toEqual([...distancias].sort((a, b) => a - b));
    expect(Math.max(...distancias)).toBeLessThanOrEqual(RADIO_KM);
  });
});

describe("sugerirOrigen", () => {
  it("en Buenos Aires sugiere Aeroparque y ofrece Ezeiza", () => {
    const { sugerido, otros } = sugerirOrigen(...BUENOS_AIRES);

    expect(sugerido.aeropuerto.iata).toBe("AEP");
    expect(codigos(otros)).toContain("EZE");
  });

  it("prefiere un aeropuerto grande aunque haya uno más cerca", () => {
    // London City queda más cerca del centro, pero vuela a pocos lugares.
    const { sugerido, otros } = sugerirOrigen(...LONDRES);

    expect(sugerido.aeropuerto.iata).toBe("LHR");
    expect(sugerido.distanciaKm).toBeGreaterThan(
      aeropuertosCercanos(...LONDRES)[0].distanciaKm,
    );
    expect(codigos(otros)).toContain("LGW");
  });

  it("ordena las alternativas como la sugerencia: por tamaño y distancia", () => {
    const { otros } = sugerirOrigen(...LONDRES);
    const orden = otros.map(({ aeropuerto, distanciaKm }) => [
      ORDEN_POR_TIPO[aeropuerto.tipo],
      distanciaKm,
    ]);

    expect(otros.length).toBeLessThanOrEqual(ALTERNATIVAS);
    expect(orden).toEqual(
      [...orden].sort((a, b) => a[0] - b[0] || a[1] - b[1]),
    );
  });

  it("lejos de todo, agranda el radio y sigue prefiriendo un aeropuerto grande", () => {
    // El más cercano es Santa Elena, a 2.400 km; Ciudad del Cabo, a 2.800,
    // es el que de verdad sirve.
    const { sugerido, otros } = sugerirOrigen(...TRISTAN_DA_CUNHA);

    expect(aeropuertosCercanos(...TRISTAN_DA_CUNHA)).toEqual([]);
    expect(sugerido.aeropuerto.iata).toBe("CPT");
    expect(otros.length).toBeGreaterThan(0);
  });
});
