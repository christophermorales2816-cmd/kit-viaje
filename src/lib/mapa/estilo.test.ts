import { describe, expect, it } from "vitest";

import { etiquetaEnCastellano, textosDelMapa } from "./estilo";

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

describe("textosDelMapa", () => {
  it("pone el título del mapa y los controles en castellano", () => {
    const textos = textosDelMapa("Mapa de prueba.");

    expect(textos["Map.Title"]).toBe("Mapa de prueba.");
    expect(textos["NavigationControl.ZoomIn"]).toBe("Acercar");
  });
});
