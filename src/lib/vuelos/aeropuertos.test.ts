import { describe, expect, it } from "vitest";

import {
  AEROPUERTOS,
  AEROPUERTOS_DESCARGADOS,
  FUENTE_DE_AEROPUERTOS,
  ORDEN_POR_TIPO,
  aeropuertoPorIata,
  nombreDePais,
  resumir,
} from "./aeropuertos";

describe("la lista de aeropuertos", () => {
  it("tiene los miles que deja el filtro del generador", () => {
    // Los mismos límites que herramientas/aeropuertos/generar.py: si OurAirports
    // cambia el formato y el filtro deja pasar todo o nada, falla acá también.
    expect(AEROPUERTOS.length).toBeGreaterThan(3500);
    expect(AEROPUERTOS.length).toBeLessThan(5000);
  });

  it("no repite ningún código IATA", () => {
    const codigos = AEROPUERTOS.map((aeropuerto) => aeropuerto.iata);

    expect(new Set(codigos).size).toBe(codigos.length);
  });

  it("tiene códigos, países, coordenadas y tipos válidos", () => {
    for (const aeropuerto of AEROPUERTOS) {
      expect(aeropuerto.iata).toMatch(/^[A-Z]{3}$/);
      expect(aeropuerto.icao).toMatch(/^([A-Z0-9]{4})?$/);
      expect(aeropuerto.pais).toMatch(/^[A-Z]{2}$/);
      expect(aeropuerto.nombre).not.toBe("");
      expect(Math.abs(aeropuerto.lat)).toBeLessThanOrEqual(90);
      expect(Math.abs(aeropuerto.lon)).toBeLessThanOrEqual(180);
      expect(Object.keys(ORDEN_POR_TIPO)).toContain(aeropuerto.tipo);
    }
  });

  it("tiene los aeropuertos de siempre y los de las islas más chicas", () => {
    for (const codigo of ["EZE", "AEP", "GRU", "MAD", "LHR", "JFK", "NRT"]) {
      expect(aeropuertoPorIata(codigo)?.tipo).toBe("grande");
    }

    // Tuvalu, Nauru y Kiritimati: si el filtro los pierde, pierde a sus
    // países enteros.
    for (const codigo of ["FUN", "INU", "CXI"]) {
      expect(aeropuertoPorIata(codigo)).toBeDefined();
    }
  });

  it("dice de dónde salió y cuándo", () => {
    expect(FUENTE_DE_AEROPUERTOS).toContain("OurAirports");
    expect(FUENTE_DE_AEROPUERTOS).toContain("dominio público");
    expect(AEROPUERTOS_DESCARGADOS).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe("aeropuertoPorIata", () => {
  it("encuentra el aeropuerto aunque el código venga en minúsculas o con espacios", () => {
    expect(aeropuertoPorIata("EZE")?.nombre).toContain("Ezeiza");
    expect(aeropuertoPorIata(" eze ")?.iata).toBe("EZE");
  });

  it("no inventa un aeropuerto con lo que no es un código", () => {
    expect(aeropuertoPorIata("XYZ")).toBeUndefined();
    expect(aeropuertoPorIata("")).toBeUndefined();
    expect(aeropuertoPorIata("EZE".repeat(10))).toBeUndefined();
    expect(aeropuertoPorIata(undefined)).toBeUndefined();
    expect(aeropuertoPorIata(null)).toBeUndefined();
    expect(aeropuertoPorIata(123)).toBeUndefined();
  });
});

describe("nombreDePais", () => {
  it("usa el castellano de Intl", () => {
    expect(nombreDePais("AR")).toBe("Argentina");
    expect(nombreDePais("FK")).toBe("Islas Malvinas");
  });

  it("escribe como las guías los países que Intl escribe distinto", () => {
    expect(nombreDePais("CI")).toBe("Costa de Marfil");
    expect(nombreDePais("RO")).toBe("Rumania");
    expect(nombreDePais("HK")).toBe("Hong Kong");
  });
});

describe("resumir", () => {
  it("manda al navegador lo justo, con el país en castellano", () => {
    expect(resumir(aeropuertoPorIata("AEP")!)).toEqual({
      iata: "AEP",
      nombre: "Aeroparque Jorge Newbery",
      ciudad: "Buenos Aires",
      pais: "Argentina",
      tipo: "grande",
    });
  });

  it("suma la distancia solo cuando la hay", () => {
    expect(resumir(aeropuertoPorIata("AEP")!, 6).distanciaKm).toBe(6);
    expect(resumir(aeropuertoPorIata("AEP")!)).not.toHaveProperty(
      "distanciaKm",
    );
  });
});
