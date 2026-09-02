/**
 * Clasificación de fallos al escribir un viaje.
 *
 * Existe por un incidente concreto: la migración que permitía `qty = 0` estaba
 * en el repo y aplicada en CI, pero nunca se había aplicado a la base real. El
 * código insertaba ceros, Postgres los rechazaba con un check violado, y el
 * usuario leía "Probá de nuevo en un momento" — un consejo que nunca iba a
 * funcionar, porque no había nada transitorio que esperar.
 *
 * La diferencia importa: un fallo de red se reintenta, un desajuste entre el
 * esquema y el código se arregla aplicando migraciones. Decirle "esperá" a
 * alguien que tiene que hacer un deploy le hace perder la tarde.
 */

/** Códigos de Postgres que significan "la base no coincide con el código". */
const CODIGOS_DE_ESQUEMA = new Set([
  "23514", // check_violation
  "23502", // not_null_violation
  "23503", // foreign_key_violation
  "42703", // undefined_column
  "42P01", // undefined_table
  "42883", // undefined_function
]);

export class TripWriteError extends Error {
  /** SQLSTATE que devolvió PostgREST, si vino. */
  readonly code: string | null;

  constructor(message: string, code: string | null, options?: ErrorOptions) {
    super(message, options);
    this.name = "TripWriteError";
    this.code = code;
  }

  /**
   * `true` cuando reintentar no puede ayudar porque el esquema de la base no
   * soporta lo que el código intenta escribir.
   */
  get isSchemaMismatch(): boolean {
    return this.code !== null && CODIGOS_DE_ESQUEMA.has(this.code);
  }
}

/** Mensaje para el usuario según qué clase de fallo fue. */
export function messageForTripWriteFailure(error: unknown): string {
  if (error instanceof TripWriteError && error.isSchemaMismatch) {
    return (
      "No pudimos crear el viaje: la base de datos está desactualizada " +
      "respecto de la aplicación. Reintentar no ayuda — hay migraciones sin " +
      "aplicar."
    );
  }

  return "No pudimos crear el viaje. Probá de nuevo en un momento.";
}
