import { describe, expect, it } from "vitest";

import {
  DURACION_DE_LA_COOKIE_S,
  opcionesDeLaCookie,
  origenGuardado,
} from "./origen";

describe("opcionesDeLaCookie", () => {
  it("dura un año, vale en todo el sitio y no viaja en requests de otros sitios", () => {
    expect(opcionesDeLaCookie("production")).toEqual({
      path: "/",
      maxAge: DURACION_DE_LA_COOKIE_S,
      sameSite: "lax",
      secure: true,
      httpOnly: false,
    });
    expect(DURACION_DE_LA_COOKIE_S).toBe(31_536_000);
  });

  it("solo en desarrollo, que corre por http, no es `secure`", () => {
    expect(opcionesDeLaCookie("development").secure).toBe(false);
    expect(opcionesDeLaCookie("test").secure).toBe(true);
    expect(opcionesDeLaCookie(undefined).secure).toBe(true);
  });
});

describe("origenGuardado", () => {
  it("devuelve el aeropuerto de la cookie", () => {
    expect(origenGuardado("EZE")?.iata).toBe("EZE");
  });

  it("ignora lo que no es un aeropuerto de la lista", () => {
    expect(origenGuardado(undefined)).toBeUndefined();
    expect(origenGuardado("")).toBeUndefined();
    expect(origenGuardado("XYZ")).toBeUndefined();
    expect(origenGuardado("<script>")).toBeUndefined();
  });
});
