import { describe, expect, it } from "vitest";

import { TripWriteError, messageForTripWriteFailure } from "@/lib/trips/errors";

describe("messageForTripWriteFailure", () => {
  it("no le dice 'reintentá' a un check violado", () => {
    // El caso real: qty = 0 contra una base que todavía tenía check (qty > 0).
    const error = new TripWriteError("check violado", "23514");

    const mensaje = messageForTripWriteFailure(error);

    expect(mensaje).toContain("desactualizada");
    expect(mensaje).not.toContain("Probá de nuevo");
  });

  it("trata la columna y la tabla inexistentes como el mismo problema", () => {
    for (const code of ["42703", "42P01", "42883", "23502", "23503"]) {
      expect(
        messageForTripWriteFailure(new TripWriteError("x", code)),
      ).toContain("desactualizada");
    }
  });

  it("sí ofrece reintentar cuando el fallo puede ser pasajero", () => {
    // Un timeout de red no trae SQLSTATE.
    expect(
      messageForTripWriteFailure(new TripWriteError("timeout", null)),
    ).toContain("Probá de nuevo");

    // Y un código que no es de esquema tampoco: 40001 es un serialization
    // failure, que es exactamente el caso donde reintentar sirve.
    expect(
      messageForTripWriteFailure(new TripWriteError("conflicto", "40001")),
    ).toContain("Probá de nuevo");
  });

  it("no se rompe con algo que ni siquiera es un TripWriteError", () => {
    expect(messageForTripWriteFailure(new Error("cualquiera"))).toContain(
      "Probá de nuevo",
    );
    expect(messageForTripWriteFailure(null)).toContain("Probá de nuevo");
  });
});
