import { describe, expect, it } from "vitest";

import { TEXTOS_DEL_VIAJE } from "@/i18n/viaje";
import { TripWriteError, problemaDeEscritura } from "@/lib/trips/errors";
import { describirProblema } from "@/lib/trips/problemas";

/** El problema contado en español, como lo lee el usuario. */
const enEspanol = (error: unknown) =>
  describirProblema(TEXTOS_DEL_VIAJE.es, problemaDeEscritura(error));

describe("problemaDeEscritura", () => {
  it("deja ver el código de Postgres pero no su texto", () => {
    // El código dice qué clase de fallo fue: la primera versión se lo tragaba
    // y eso costó dos rondas. El texto nombra columnas y reglas del esquema, y
    // va a los logs del servidor, no a la pantalla.
    const error = new TripWriteError(
      "x",
      "23514",
      'violates check constraint "trips_max_duration"',
    );

    expect(problemaDeEscritura(error)).toEqual({
      codigo: "datos-rechazados",
      codigoDeLaBase: "23514",
    });

    const mensaje = enEspanol(error);
    expect(mensaje).toContain("23514");
    expect(mensaje).not.toContain("trips_max_duration");
    expect(mensaje).not.toContain("violates");
  });

  it("no afirma que falten migraciones ante un check violado", () => {
    // Un check se viola con el esquema al día si el dato rompe una regla
    // vigente. Mandar a mirar migraciones ahí hace perder la tarde.
    const mensaje = enEspanol(new TripWriteError("x", "23514", "detalle"));

    expect(mensaje).toContain("rechazó los datos");
    expect(mensaje).not.toContain("Reintentar no ayuda");
  });

  it("sí afirma esquema viejo cuando falta una columna o una tabla", () => {
    // Acá no hay ambigüedad posible: ningún dato de entrada crea una columna.
    for (const code of ["42703", "42P01", "42883"]) {
      const error = new TripWriteError("x", code, "detalle");

      expect(problemaDeEscritura(error)).toEqual({
        codigo: "esquema-viejo",
        codigoDeLaBase: code,
      });
      expect(enEspanol(error)).toContain("migraciones sin aplicar");
    }
  });

  it("ofrece reintentar cuando el fallo puede ser pasajero", () => {
    expect(enEspanol(new TripWriteError("x", null))).toContain(
      "Prueba de nuevo",
    );

    // 40001 es un serialization failure: el caso donde reintentar sirve.
    expect(enEspanol(new TripWriteError("x", "40001", "conflicto"))).toContain(
      "Prueba de nuevo",
    );
  });

  it("no se rompe con algo que ni siquiera es un TripWriteError", () => {
    expect(problemaDeEscritura(new Error("cualquiera"))).toEqual({
      codigo: "fallo-al-crear",
      codigoDeLaBase: null,
    });
    expect(enEspanol(null)).toContain("Prueba de nuevo");
  });

  it("no deja paréntesis vacíos cuando no vino ni código ni detalle", () => {
    expect(enEspanol(new TripWriteError("x", null))).not.toContain("()");
  });
});
