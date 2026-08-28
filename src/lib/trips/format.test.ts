import { describe, expect, it } from "vitest";

import { countDays, toIsoDate } from "@/lib/trips/format";

describe("toIsoDate", () => {
  it("devuelve la fecha del calendario del usuario", () => {
    expect(toIsoDate(new Date(2026, 8, 1))).toBe("2026-09-01");
  });

  it("rellena mes y día con cero", () => {
    expect(toIsoDate(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  it("sobrevive al cambio de año", () => {
    expect(toIsoDate(new Date(2026, 11, 31))).toBe("2026-12-31");
  });

  it("no se va a UTC cuando la hora local cruza el día", () => {
    // Las 23:00 del 1 de septiembre en Buenos Aires ya son las 02:00 del 2 en
    // UTC. El atajo toISOString().slice(0,10) devolvería el día siguiente; esta
    // función sigue el calendario de quien elige la fecha.
    const tarde = new Date(2026, 8, 1, 23, 0, 0);
    expect(toIsoDate(tarde)).toBe("2026-09-01");
    expect(tarde.toISOString().slice(0, 10)).toBe("2026-09-02");
  });

  it("coincide siempre con los componentes locales de la fecha", () => {
    for (const fecha of [
      new Date(2026, 0, 1),
      new Date(2026, 5, 15, 12),
      new Date(2026, 11, 31, 23, 59),
      new Date(2028, 1, 29),
    ]) {
      const [year, month, day] = toIsoDate(fecha).split("-").map(Number);
      expect([year, month, day]).toEqual([
        fecha.getFullYear(),
        fecha.getMonth() + 1,
        fecha.getDate(),
      ]);
    }
  });
});

describe("countDays", () => {
  it("cuenta ambos extremos, igual que el motor", () => {
    expect(countDays(new Date(2026, 8, 1), new Date(2026, 8, 7))).toBe(7);
    expect(countDays(new Date(2026, 8, 1), new Date(2026, 8, 1))).toBe(1);
  });

  it("cruza meses y llega al máximo de 30", () => {
    expect(countDays(new Date(2026, 3, 16), new Date(2026, 4, 15))).toBe(30);
  });

  it("no se descuadra con el horario de verano", () => {
    // Si contara con restas de milisegundos sobre fechas locales, un cambio de
    // hora metería un día de 23 o 25 horas y el redondeo se iría por uno.
    expect(countDays(new Date(2026, 9, 1), new Date(2026, 10, 1))).toBe(32);
  });
});
