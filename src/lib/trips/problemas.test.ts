import { describe, expect, it } from "vitest";

import { IDIOMAS } from "@/i18n/idiomas";
import { TEXTOS_DEL_VIAJE } from "@/i18n/viaje";
import { TRIP_TYPES } from "@/lib/packing";

import { describirProblema, type ProblemaDelViaje } from "./problemas";

/** Uno de cada código: si se suma uno, el `satisfies` obliga a sumarlo acá. */
const UNO_DE_CADA = {
  "faltan-fechas": { codigo: "faltan-fechas" },
  "destino-desconocido": { codigo: "destino-desconocido" },
  "falta-tipo": { codigo: "falta-tipo", tipos: TRIP_TYPES },
  "fechas-invalidas": { codigo: "fechas-invalidas" },
  "vuelta-antes-que-ida": { codigo: "vuelta-antes-que-ida" },
  duracion: { codigo: "duracion", minimo: 1, maximo: 30, dias: 35 },
  "ciudad-desconocida": { codigo: "ciudad-desconocida" },
  "cantidad-no-entera": { codigo: "cantidad-no-entera" },
  "cantidad-fuera-de-rango": {
    codigo: "cantidad-fuera-de-rango",
    minimo: 0,
    maximo: 999,
  },
  "nada-que-cambiar": { codigo: "nada-que-cambiar" },
  "item-inexistente": { codigo: "item-inexistente" },
  "gasto-inexistente": { codigo: "gasto-inexistente" },
  "sin-permiso": { codigo: "sin-permiso" },
  "fallo-al-guardar": { codigo: "fallo-al-guardar" },
  "demasiados-viajes": { codigo: "demasiados-viajes" },
  "fallo-al-crear": { codigo: "fallo-al-crear", codigoDeLaBase: "40001" },
  "esquema-viejo": { codigo: "esquema-viejo", codigoDeLaBase: "42703" },
  "datos-rechazados": { codigo: "datos-rechazados", codigoDeLaBase: null },
} satisfies {
  [C in ProblemaDelViaje["codigo"]]: ProblemaDelViaje & { codigo: C };
};

describe("describirProblema", () => {
  it("cuenta cada problema en cada idioma", () => {
    for (const idioma of IDIOMAS) {
      for (const problema of Object.values(UNO_DE_CADA)) {
        const texto = describirProblema(TEXTOS_DEL_VIAJE[idioma], problema);

        expect(texto.trim(), `${idioma}: ${problema.codigo}`).not.toBe("");
      }
    }
  });

  it("pone los datos del problema en el texto", () => {
    const t = TEXTOS_DEL_VIAJE.es;

    expect(describirProblema(t, UNO_DE_CADA.duracion)).toContain("35");
    expect(describirProblema(t, UNO_DE_CADA["fallo-al-crear"])).toContain(
      "40001",
    );
  });

  it("nombra los tipos de viaje como se leen, no como se guardan", () => {
    const texto = describirProblema(
      TEXTOS_DEL_VIAJE.es,
      UNO_DE_CADA["falta-tipo"],
    );

    expect(texto).toContain("Playa");
    expect(texto).not.toContain("playa,");
  });
});
