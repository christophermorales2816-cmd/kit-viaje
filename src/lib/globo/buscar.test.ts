import { describe, expect, it } from "vitest";

import { buscarDestinos, normalizar } from "./buscar";

const DESTINOS = [
  "Perú",
  "Costa Rica",
  "Costa de Marfil",
  "Japón",
  "Puerto Rico",
  "República Dominicana",
  "Emiratos Árabes Unidos",
].map((label) => ({ label }));

const nombres = (consulta: string) =>
  buscarDestinos(DESTINOS, consulta).map(({ label }) => label);

describe("buscarDestinos", () => {
  it("encuentra sin tildes ni mayúsculas", () => {
    expect(normalizar("  PERÚ ")).toBe("peru");
    expect(nombres("peru")).toEqual(["Perú"]);
    expect(nombres("JAPON")).toEqual(["Japón"]);
  });

  it("pone primero lo que empieza con lo escrito", () => {
    expect(nombres("costa")).toEqual(["Costa de Marfil", "Costa Rica"]);
    expect(nombres("rica")).toEqual(["Costa Rica"]);
  });

  it("después, lo que empieza una palabra, y al final lo que lo contiene", () => {
    expect(nombres("arab")).toEqual(["Emiratos Árabes Unidos"]);
    expect(nombres("ica")).toEqual(["Costa Rica", "República Dominicana"]);
  });

  it("sin nada escrito no muestra nada, y respeta el límite", () => {
    expect(nombres("   ")).toEqual([]);
    expect(buscarDestinos(DESTINOS, "a", 2)).toHaveLength(2);
  });
});
