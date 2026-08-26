import { describe, expect, it } from "vitest";

import { durationInDays, monthsCovered, parseIsoDate } from "@/lib/packing/dates";

describe("parseIsoDate", () => {
  it("parsea una fecha válida", () => {
    expect(parseIsoDate("2026-09-01")).toEqual({ year: 2026, month: 9, day: 1 });
  });

  it("rechaza formatos que no son yyyy-mm-dd", () => {
    expect(() => parseIsoDate("1/9/2026")).toThrow(RangeError);
    expect(() => parseIsoDate("2026-9-1")).toThrow(RangeError);
    expect(() => parseIsoDate("")).toThrow(RangeError);
  });

  it("rechaza fechas que pasan la regex pero no existen", () => {
    expect(() => parseIsoDate("2026-02-30")).toThrow(/inexistente/);
    expect(() => parseIsoDate("2026-13-01")).toThrow(/inexistente/);
  });

  it("acepta el 29 de febrero de un año bisiesto", () => {
    expect(parseIsoDate("2028-02-29").day).toBe(29);
  });
});

describe("la trampa de zona horaria", () => {
  // Estos tests corren con TZ=America/Argentina/Buenos_Aires (vitest.config.mts).
  it("new Date(iso) efectivamente corre la fecha un día para atrás", () => {
    // Si esto falla, la zona no se aplicó y el test de abajo no prueba nada.
    expect(new Date("2026-09-01").getMonth()).toBe(7); // agosto, no septiembre
    expect(new Date("2026-09-01").getDate()).toBe(31);
  });

  it("monthsCovered no se come el corrimiento", () => {
    expect(monthsCovered("2026-09-01", "2026-09-01")).toEqual([9]);
  });
});

describe("durationInDays", () => {
  it("cuenta ambos extremos", () => {
    expect(durationInDays("2026-09-01", "2026-09-07")).toBe(7);
    expect(durationInDays("2026-09-01", "2026-09-01")).toBe(1);
  });

  it("cruza meses y años", () => {
    expect(durationInDays("2026-12-28", "2027-01-03")).toBe(7);
  });

  it("cuenta bien el 29 de febrero", () => {
    expect(durationInDays("2028-02-28", "2028-03-01")).toBe(3);
  });

  it("llega al máximo que permite el constraint de la base", () => {
    expect(durationInDays("2026-04-16", "2026-05-15")).toBe(30);
  });

  it("rechaza un viaje que termina antes de empezar", () => {
    expect(() => durationInDays("2026-09-10", "2026-09-01")).toThrow(RangeError);
  });
});

describe("monthsCovered", () => {
  it("devuelve un solo mes cuando el viaje no lo cruza", () => {
    expect(monthsCovered("2026-09-02", "2026-09-20")).toEqual([9]);
  });

  it("devuelve los meses en orden cronológico", () => {
    expect(monthsCovered("2026-04-16", "2026-05-15")).toEqual([4, 5]);
  });

  it("no reordena al cruzar de diciembre a enero", () => {
    expect(monthsCovered("2026-12-28", "2027-01-03")).toEqual([12, 1]);
  });

  it("cubre tres meses cuando el rango los toca", () => {
    // 31 de enero + 29 días = 1 de marzo: toca enero, febrero y marzo.
    expect(monthsCovered("2026-01-31", "2026-03-01")).toEqual([1, 2, 3]);
  });

  it("rechaza un rango invertido", () => {
    expect(() => monthsCovered("2026-09-10", "2026-09-01")).toThrow(RangeError);
  });
});
