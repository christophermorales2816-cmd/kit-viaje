import { describe, expect, it } from "vitest";

import { MAX_TRIP_DAYS, parseTripInput } from "@/lib/trips/input";

const VALIDO = {
  startDate: "2026-09-01",
  endDate: "2026-09-07",
  tripType: "urbano",
};

describe("parseTripInput", () => {
  it("acepta una entrada válida", () => {
    const resultado = parseTripInput(VALIDO);
    expect(resultado).toEqual({ ok: true, value: VALIDO });
  });

  it("acepta un viaje de un solo día", () => {
    const resultado = parseTripInput({ ...VALIDO, endDate: "2026-09-01" });
    expect(resultado.ok).toBe(true);
  });

  it("acepta exactamente el máximo de días", () => {
    // Del 16/4 al 15/5 son 30 días contando ambos extremos.
    const resultado = parseTripInput({
      ...VALIDO,
      startDate: "2026-04-16",
      endDate: "2026-05-15",
    });
    expect(resultado.ok).toBe(true);
  });

  it("recorta los espacios de los bordes", () => {
    const resultado = parseTripInput({
      startDate: "  2026-09-01 ",
      endDate: "2026-09-07  ",
      tripType: " urbano ",
    });
    expect(resultado).toEqual({ ok: true, value: VALIDO });
  });

  it("acepta los cuatro tipos de viaje", () => {
    for (const tripType of ["playa", "urbano", "aventura", "negocios"]) {
      expect(parseTripInput({ ...VALIDO, tripType }).ok).toBe(true);
    }
  });
});

describe("parseTripInput: qué rechaza", () => {
  function errores(raw: Parameters<typeof parseTripInput>[0]): string[] {
    const resultado = parseTripInput(raw);
    return resultado.ok ? [] : resultado.errors;
  }

  it("junta todos los campos que faltan en vez de parar en el primero", () => {
    expect(errores({})).toHaveLength(3);
  });

  it("pide cada campo por su nombre", () => {
    expect(errores({ ...VALIDO, startDate: "" }).join()).toMatch(/inicio/);
    expect(errores({ ...VALIDO, endDate: "" }).join()).toMatch(/fin/);
    expect(errores({ ...VALIDO, tripType: "" }).join()).toMatch(/tipo de viaje/);
  });

  it("rechaza fechas con formato equivocado", () => {
    expect(errores({ ...VALIDO, startDate: "01/09/2026" })).not.toHaveLength(0);
    expect(errores({ ...VALIDO, endDate: "2026-9-7" })).not.toHaveLength(0);
  });

  it("rechaza fechas que no existen en el calendario", () => {
    expect(errores({ ...VALIDO, startDate: "2026-02-30" })).not.toHaveLength(0);
  });

  it("rechaza un viaje que termina antes de empezar", () => {
    expect(
      errores({ ...VALIDO, startDate: "2026-09-10", endDate: "2026-09-01" }).join(),
    ).toMatch(/antes de empezar/);
  });

  it("rechaza pasarse del máximo y dice cuánto dura", () => {
    const mensaje = errores({
      ...VALIDO,
      startDate: "2026-09-01",
      endDate: "2026-10-15",
    }).join();
    expect(mensaje).toMatch(new RegExp(String(MAX_TRIP_DAYS)));
    expect(mensaje).toMatch(/45/); // la duración real del rango
  });

  it("rechaza un tipo de viaje fuera del enum", () => {
    expect(errores({ ...VALIDO, tripType: "safari" }).join()).toMatch(/safari/);
  });

  it("ignora valores que no son strings", () => {
    expect(errores({ startDate: 20260901, endDate: null, tripType: ["urbano"] })).toHaveLength(3);
  });
});
