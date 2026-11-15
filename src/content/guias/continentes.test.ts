import { describe, expect, it } from "vitest";

import {
  CONTINENTES,
  ZONAS,
  continenteDeLaZona,
  continentesDelMenu,
  getContinente,
  guiasDelContinente,
  guiasPorZona,
} from "./continentes";
import { allGuides } from "./index";

const GUIAS = allGuides();

describe("continentes", () => {
  it("son cinco, de oeste a este", () => {
    expect(CONTINENTES.map((continente) => continente.id)).toEqual([
      "america",
      "europa",
      "africa",
      "asia",
      "oceania",
    ]);
  });

  it("reparten las zonas sin repetir ninguna y sin dejar ninguna afuera", () => {
    const repartidas = CONTINENTES.flatMap((continente) => continente.zonas);

    expect(repartidas).toEqual(ZONAS);
    expect(new Set(ZONAS).size).toBe(ZONAS.length);
  });

  it("tienen a todas las guías, cada una en un solo continente", () => {
    for (const guia of GUIAS) {
      expect(ZONAS, guia.slug).toContain(guia.subregion);
    }

    const porContinente = CONTINENTES.map(
      (continente) => guiasDelContinente(continente.id).length,
    );

    expect(porContinente.reduce((a, b) => a + b, 0)).toBe(GUIAS.length);
    for (const cantidad of porContinente) expect(cantidad).toBeGreaterThan(0);
  });

  it("agrupan por zona sin perder guías, y por nombre adentro", () => {
    const grupos = guiasPorZona();

    expect(grupos.flatMap((grupo) => grupo.guias)).toHaveLength(GUIAS.length);

    for (const { guias } of grupos) {
      const nombres = guias.map((guia) => guia.country);
      expect(nombres).toEqual(
        [...nombres].sort((a, b) => a.localeCompare(b, "es")),
      );
    }
  });

  it("se encuentran por id, y uno inventado no existe", () => {
    expect(getContinente("asia")?.nombre).toBe("Asia");
    expect(getContinente("antartida")).toBeUndefined();
    expect(continenteDeLaZona("Caribe").id).toBe("america");
  });

  it("le pasan al menú la cantidad de destinos de cada uno", () => {
    const menu = continentesDelMenu();

    expect(menu.reduce((total, { cantidad }) => total + cantidad, 0)).toBe(
      GUIAS.length,
    );
    expect(menu[0]).toMatchObject({ id: "america", nombre: "América" });
  });
});
