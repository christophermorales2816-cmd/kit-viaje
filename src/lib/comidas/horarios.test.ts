import { describe, expect, it } from "vitest";

import { enumerar } from "./etiquetas";
import { horarioEnCastellano } from "./horarios";

describe("horarioEnCastellano", () => {
  it("traduce los días y separa los tramos", () => {
    expect(
      horarioEnCastellano(
        "Mo-Fr 11:00-15:00,19:00-23:00; Sa 12:00-16:00; PH off",
      ),
    ).toBe(
      "Lu-Vi 11:00-15:00, 19:00-23:00 · Sá 12:00-16:00 · feriados: cerrado",
    );
  });

  it("entiende el abierto siempre", () => {
    expect(horarioEnCastellano("24/7")).toBe("todos los días, las 24 horas");
  });

  it("deja como están los comentarios de quien lo cargó", () => {
    expect(
      horarioEnCastellano('Tu-Su 08:00-14:00 "Mo closed for holidays"'),
    ).toBe('Ma-Do 08:00-14:00 "Mo closed for holidays"');
  });

  it("no inventa un horario que no hay", () => {
    expect(horarioEnCastellano(null)).toBeNull();
    expect(horarioEnCastellano("  ")).toBeNull();
  });
});

describe("enumerar", () => {
  it("separa con comas y cierra con y", () => {
    expect(enumerar(["gluten", "soja", "huevo"])).toBe("gluten, soja y huevo");
    expect(enumerar(["maní"])).toBe("maní");
    expect(enumerar([])).toBe("");
  });

  it("cambia la y por e delante del sonido i", () => {
    expect(enumerar(["soja", "hinojo"])).toBe("soja e hinojo");
    expect(enumerar(["agua", "hielo"])).toBe("agua y hielo");
  });

  it("también enumera opciones, con u delante del sonido o", () => {
    expect(enumerar(["mercado", "restaurante"], "o")).toBe(
      "mercado o restaurante",
    );
    expect(enumerar(["bar", "hostería"], "o")).toBe("bar u hostería");
  });
});
