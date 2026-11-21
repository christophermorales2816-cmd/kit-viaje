import { describe, expect, it } from "vitest";

import { IDIOMA_POR_DEFECTO } from "./idiomas";
import { idiomaActual, textos } from "./servidor";

describe("idioma en el servidor", () => {
  it("es el idioma por defecto mientras no salga de la ruta", async () => {
    expect(await idiomaActual()).toBe(IDIOMA_POR_DEFECTO);
  });

  it("devuelve los textos de ese idioma", async () => {
    const diccionario = { es: { hola: "Hola" } };

    expect(await textos(diccionario)).toEqual({ hola: "Hola" });
  });
});
