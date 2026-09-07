import { describe, expect, it } from "vitest";

import { TripWriteError, messageForTripWriteFailure } from "@/lib/trips/errors";

describe("messageForTripWriteFailure", () => {
  it("siempre deja ver el código y el detalle de Postgres", () => {
    // Es lo que permite arreglar el problema sin entrar a los logs. La primera
    // versión clasificaba y se tragaba la evidencia, y eso costó dos rondas.
    const mensaje = messageForTripWriteFailure(
      new TripWriteError(
        "x",
        "23514",
        'violates check constraint "trips_max_duration"',
      ),
    );

    expect(mensaje).toContain("23514");
    expect(mensaje).toContain("trips_max_duration");
  });

  it("no afirma que falten migraciones ante un check violado", () => {
    // Un check se viola con el esquema al día si el dato rompe una regla
    // vigente. Mandar a mirar migraciones ahí hace perder la tarde.
    const mensaje = messageForTripWriteFailure(
      new TripWriteError("x", "23514", "detalle"),
    );

    expect(mensaje).toContain("rechazó los datos");
    expect(mensaje).not.toContain("Reintentar no ayuda");
  });

  it("sí afirma esquema viejo cuando falta una columna o una tabla", () => {
    // Acá no hay ambigüedad posible: ningún dato de entrada crea una columna.
    for (const code of ["42703", "42P01", "42883"]) {
      const mensaje = messageForTripWriteFailure(
        new TripWriteError("x", code, "detalle"),
      );

      expect(mensaje).toContain("migraciones sin aplicar");
    }
  });

  it("ofrece reintentar cuando el fallo puede ser pasajero", () => {
    expect(messageForTripWriteFailure(new TripWriteError("x", null))).toContain(
      "Probá de nuevo",
    );

    // 40001 es un serialization failure: el caso donde reintentar sirve.
    expect(
      messageForTripWriteFailure(new TripWriteError("x", "40001", "conflicto")),
    ).toContain("Probá de nuevo");
  });

  it("no se rompe con algo que ni siquiera es un TripWriteError", () => {
    expect(messageForTripWriteFailure(new Error("cualquiera"))).toContain(
      "Probá de nuevo",
    );
    expect(messageForTripWriteFailure(null)).toContain("Probá de nuevo");
  });

  it("no deja paréntesis vacíos cuando no vino ni código ni detalle", () => {
    expect(
      messageForTripWriteFailure(new TripWriteError("x", null)),
    ).not.toContain("()");
  });
});
