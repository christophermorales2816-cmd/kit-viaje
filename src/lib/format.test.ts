import { describe, expect, it } from "vitest";

import {
  formatAge,
  formatCategory,
  formatDate,
  formatDateRange,
  formatDuration,
  formatMoney,
  formatTripType,
  formatWeight,
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
