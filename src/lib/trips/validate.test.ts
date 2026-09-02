import { describe, expect, it } from "vitest";

import {
  MAX_ITEM_QTY,
  MAX_TRIP_DAYS,
  isEditToken,
  isShareSlug,
  parseQty,
  parseTripInput,
} from "@/lib/trips/validate";

const VALIDO = {
  startDate: "2026-09-01",
  endDate: "2026-09-07",
  tripType: "urbano",
};

describe("parseTripInput", () => {
  it("acepta un viaje válido sin tocar los valores", () => {
    expect(parseTripInput(VALIDO)).toEqual({ ok: true, value: VALIDO });
  });

  it("acepta el viaje de un solo día", () => {
    const result = parseTripInput({
      ...VALIDO,
      startDate: "2026-09-01",
      endDate: "2026-09-01",
    });

    expect(result.ok).toBe(true);
  });

  it("acepta exactamente el máximo y rechaza uno más", () => {
    // 1 al 30 de septiembre son 30 días contando ambos extremos.
    expect(parseTripInput({ ...VALIDO, endDate: "2026-09-30" }).ok).toBe(true);
    expect(parseTripInput({ ...VALIDO, endDate: "2026-10-01" }).ok).toBe(false);
  });

  it("dice cuántos días dura cuando se pasa del máximo", () => {
    const result = parseTripInput({ ...VALIDO, endDate: "2026-10-05" });

    expect(result).toMatchObject({ ok: false });
    if (result.ok) return;
    expect(result.error).toContain("35");
    expect(result.error).toContain(String(MAX_TRIP_DAYS));
  });

  it("rechaza el rango invertido en vez de darlo vuelta en silencio", () => {
    const result = parseTripInput({
      ...VALIDO,
      startDate: "2026-09-07",
      endDate: "2026-09-01",
    });

    expect(result.ok).toBe(false);
  });

  it("rechaza un tipo de viaje que no está en el enum", () => {
    expect(parseTripInput({ ...VALIDO, tripType: "gastronomico" }).ok).toBe(
      false,
    );
    expect(parseTripInput({ ...VALIDO, tripType: null }).ok).toBe(false);
  });

  it("rechaza una fecha que no existe en el calendario", () => {
    expect(parseTripInput({ ...VALIDO, endDate: "2026-02-30" }).ok).toBe(false);
  });

  it("rechaza un formato que no es yyyy-mm-dd", () => {
    expect(parseTripInput({ ...VALIDO, startDate: "01/09/2026" }).ok).toBe(
      false,
    );
  });

  it("rechaza fechas ausentes con un mensaje para el usuario", () => {
    const result = parseTripInput({ ...VALIDO, startDate: undefined });

    expect(result).toMatchObject({ ok: false });
    if (result.ok) return;
    expect(result.error).toMatch(/fechas/i);
  });
});

describe("parseQty", () => {
  it("acepta un entero dentro del rango, venga como número o como string", () => {
    expect(parseQty(3)).toEqual({ ok: true, value: 3 });
    // Los inputs de un formulario llegan siempre como string.
    expect(parseQty("3")).toEqual({ ok: true, value: 3 });
  });

  it("acepta el cero: es cómo se saca un ítem sin sacarlo de la lista", () => {
    // Las listas se generan vacías y el usuario suma lo que necesita, así que
    // "ninguno" es una elección válida. La base acompaña con check (qty >= 0).
    expect(parseQty(0).ok).toBe(true);
  });

  it("rechaza los negativos, igual que el check de la base", () => {
    expect(parseQty(-1).ok).toBe(false);
  });

  it("rechaza decimales", () => {
    expect(parseQty(2.5).ok).toBe(false);
    expect(parseQty("2.5").ok).toBe(false);
  });

  it("rechaza lo que no es número", () => {
    expect(parseQty("dos").ok).toBe(false);
    expect(parseQty(null).ok).toBe(false);
    expect(parseQty(Number.NaN).ok).toBe(false);
    expect(parseQty(Number.POSITIVE_INFINITY).ok).toBe(false);
  });

  it("acepta el tope y rechaza uno más", () => {
    expect(parseQty(MAX_ITEM_QTY).ok).toBe(true);
    expect(parseQty(MAX_ITEM_QTY + 1).ok).toBe(false);
  });
});

describe("forma de los tokens", () => {
  const editToken = "0123456789abcdef0123456789abcdef";

  it("acepta los que genera la base", () => {
    expect(isEditToken(editToken)).toBe(true);
    expect(isShareSlug(editToken.slice(0, 16))).toBe(true);
  });

  it("rechaza el largo equivocado", () => {
    // Un share_slug no habilita edición aunque se lo pegue en /viaje/{token}.
    expect(isEditToken(editToken.slice(0, 16))).toBe(false);
    expect(isShareSlug(editToken)).toBe(false);
  });

  it("rechaza mayúsculas y caracteres fuera de hex", () => {
    expect(isEditToken(editToken.toUpperCase())).toBe(false);
    expect(isEditToken(`${editToken.slice(0, 31)}g`)).toBe(false);
  });

  it("rechaza lo que ni siquiera es string", () => {
    expect(isEditToken(undefined)).toBe(false);
    expect(isShareSlug(42)).toBe(false);
  });
});
