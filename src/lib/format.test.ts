import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  formatAge,
  formatCategory,
  formatDate,
  formatDateRange,
  formatDuration,
  formatMoney,
  formatQuote,
  formatRate,
  formatTripType,
  formatWeight,
  MONEDAS_CON_CENTAVOS,
  toIsoDate,
} from "@/lib/format";

/**
 * Los tests corren con TZ=America/Argentina/Buenos_Aires (vitest.config.mts),
 * que es justamente donde se rompen las conversiones ingenuas: UTC-3.
 */

describe("toIsoDate", () => {
  it("devuelve el día que el usuario tocó, no el de UTC", () => {
    // Medianoche local del 1 de septiembre. toISOString() daría 2026-08-31.
    const elegido = new Date(2026, 8, 1);

    expect(toIsoDate(elegido)).toBe("2026-09-01");
  });

  it("rellena mes y día con cero", () => {
    expect(toIsoDate(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  it("sobrevive a una hora del día que cruzaría a UTC", () => {
    // 21:30 local del 30 de septiembre es 00:30 UTC del 1 de octubre.
    expect(toIsoDate(new Date(2026, 8, 30, 21, 30))).toBe("2026-09-30");
  });
});

describe("formatDate", () => {
  it("no corre la fecha un día para atrás", () => {
    expect(formatDate("2026-09-01")).toContain("1");
    expect(formatDate("2026-09-01")).toContain("septiembre");
    expect(formatDate("2026-09-01")).not.toContain("agosto");
  });
});

describe("formatDateRange", () => {
  it("no repite el mes cuando el viaje no lo cruza", () => {
    expect(formatDateRange("2026-09-01", "2026-09-07")).toBe(
      "1 al 7 de septiembre de 2026",
    );
  });

  it("escribe los dos extremos completos cuando cruza de mes", () => {
    const texto = formatDateRange("2026-09-28", "2026-10-03");

    expect(texto).toContain("septiembre");
    expect(texto).toContain("octubre");
  });

  it("escribe los dos años cuando cruza de año", () => {
    const texto = formatDateRange("2026-12-28", "2027-01-03");

    expect(texto).toContain("2026");
    expect(texto).toContain("2027");
  });

  it("el viaje de un día se muestra una sola vez", () => {
    expect(formatDateRange("2026-09-01", "2026-09-01")).toBe(
      formatDate("2026-09-01"),
    );
  });
});

describe("formatDuration", () => {
  it("usa el singular para un día", () => {
    expect(formatDuration(1)).toBe("1 día");
    expect(formatDuration(7)).toBe("7 días");
  });
});

describe("formatWeight", () => {
  it("muestra gramos abajo del kilo", () => {
    expect(formatWeight(400)).toBe("400 g");
    expect(formatWeight(999)).toBe("999 g");
  });

  it("pasa a kilos con un decimal desde el kilo", () => {
    expect(formatWeight(1000)).toBe("1,0 kg");
    expect(formatWeight(7450)).toBe("7,5 kg");
  });
});

describe("formatMoney", () => {
  it("muestra los pesos sin centavos", () => {
    const texto = formatMoney(65000, "ARS");

    expect(texto).toContain("65.000");
    expect(texto).not.toContain(",00");
  });

  it("muestra los dólares con centavos", () => {
    expect(formatMoney(939.42, "USD")).toContain("939,42");
  });

  it("muestra sin centavos cualquier moneda local, no solo el peso argentino", () => {
    // La regla era "sin decimales solo para ARS": reales, bolivianos y cada
    // moneda nueva salían con ",00" en todos sus precios.
    for (const [monto, moneda] of [
      [20, "BRL"],
      [12, "BOB"],
      [9000, "CLP"],
      [45000, "PYG"],
    ] as const) {
      expect(formatMoney(monto, moneda)).not.toMatch(/,\d\d/);
    }
  });

  it("muestra los centavos de un precio en dólares", () => {
    // Ecuador, El Salvador y Panamá cobran en dólares: un café cuesta 2,50.
    expect(formatMoney(2.5, "USD")).toContain("2,50");
  });

  it("muestra los centavos en euros, libras, francos suizos y marcos bosnios", () => {
    // En Europa los precios de todos los días llevan centavos: un café a 3,50
    // redondeado a 4 es otro precio.
    for (const moneda of ["EUR", "GBP", "CHF", "BAM"]) {
      expect(formatMoney(3.5, moneda)).toContain("3,50");
    }
  });

  it("muestra los centavos en las monedas de Asia que valen más de medio dólar", () => {
    // Un kopi en Singapur cuesta 1,80; un viaje en el metro de Bakú, 0,40
    // manat. Redondeado a la unidad, el boleto de Bakú sería gratis.
    for (const moneda of ["SGD", "BND", "AZN", "JOD", "KWD", "BHD", "OMR"]) {
      expect(formatMoney(0.4, moneda)).toContain("0,40");
    }
  });

  it("no agrega centavos a las monedas de Asia que valen poco", () => {
    // Un café en Tokio cuesta cientos de yenes; en Hanói, decenas de miles de
    // dongs. El dírham y el ringgit valen un cuarto de dólar, como el zloty.
    for (const moneda of ["JPY", "KRW", "CNY", "THB", "VND", "IDR", "INR"]) {
      expect(formatMoney(12500, moneda)).not.toMatch(/,\d\d/);
    }
    for (const moneda of ["AED", "SAR", "QAR", "ILS", "MYR", "GEL"]) {
      expect(formatMoney(18, moneda)).not.toMatch(/,\d\d/);
    }
  });

  it("dice lo mismo que el generador de migraciones", () => {
    // generar.py redondea los precios de las ciudades derivadas al centavo o
    // a la unidad con su propia lista. Si las dos se separan, la pantalla
    // muestra ",00" en precios que la base guardó redondeados, o esconde los
    // centavos que sí guardó.
    const generador = readFileSync(
      path.join(process.cwd(), "herramientas/corredor/generar.py"),
      "utf8",
    );
    const lista = generador.match(/^CON_CENTAVOS = \{([^}]*)\}/m);
    expect(lista, "CON_CENTAVOS en generar.py").not.toBeNull();
    const delGenerador = [...lista![1].matchAll(/"([A-Z]{3})"/g)].map(
      ([, moneda]) => moneda,
    );
    expect(delGenerador.toSorted()).toEqual(
      [...MONEDAS_CON_CENTAVOS].toSorted(),
    );
  });
});

describe("formatRate y formatQuote", () => {
  it("no borra los centavos de una cotización chica", () => {
    // El selector del presupuesto de Brasil mostraba 5,1114 como "5".
    expect(formatRate(5.1114)).toBe("5,11");
    expect(formatQuote(5.1114, "BRL")).toContain("5,11");
  });

  it("muestra tres decimales en una cotización menor que uno", () => {
    // Un dólar vale 0,307 dinares kuwaitíes: con dos decimales, "0,31", y la
    // diferencia entre un día y otro desaparece.
    expect(formatRate(0.3071)).toBe("0,307");
    expect(formatQuote(0.3071, "KWD")).toContain("0,307");
    expect(formatRate(0.8612)).toBe("0,861");
  });

  it("no agrega centavos a una cotización grande", () => {
    expect(formatRate(1220)).toBe("1.220");
    expect(formatQuote(1220, "ARS")).not.toMatch(/,\d\d/);
  });
});

describe("formatAge", () => {
  it("dice hoy, ayer y el resto en días", () => {
    expect(formatAge(0)).toBe("hoy");
    expect(formatAge(1)).toBe("ayer");
    expect(formatAge(45)).toBe("hace 45 días");
  });

  it("dice que no hay datos cuando el listado está vacío", () => {
    expect(formatAge(null)).toBe("sin datos");
  });
});

describe("formatTripType / formatCategory", () => {
  it("capitaliza los valores conocidos", () => {
    expect(formatTripType("negocios")).toBe("Negocios");
    expect(formatCategory("documentacion")).toBe("Documentación");
  });

  it("no esconde una categoría nueva agregada desde Studio", () => {
    expect(formatCategory("mascotas")).toBe("Mascotas");
    expect(formatTripType("gastronomico")).toBe("gastronomico");
  });
});
