/**
 * Clasificación de fallos al escribir un viaje.
 *
 * Existe por un incidente concreto: una migración estaba en el repo y aplicada
 * en CI, pero nunca en la base real. El usuario leía "Probá de nuevo en un
 * momento" — un consejo que nunca iba a funcionar, porque no había nada
 * transitorio que esperar.
 *
 * LA PRIMERA VERSIÓN SE PASÓ PARA EL OTRO LADO
 *
 * Metía seis códigos en una sola bolsa llamada "faltan migraciones" y no
 * mostraba nunca el mensaje de Postgres. Eso convirtió un diagnóstico en una
 * afirmación: un check violado también puede ser un dato que la base rechaza
 * con el esquema perfectamente al día, y ahí el mensaje mandaba a mirar
 * migraciones que no tenían nada que ver.
 *
 * Ahora son dos familias distintas, y el detalle técnico viaja siempre. Un
 * mensaje que dice qué constraint falló se puede arreglar; uno que dice
 * "está desactualizada" solo se puede creer.
 */

/**
 * La base no tiene lo que el código nombra. Esto sí es, sin ambigüedad, un
 * esquema viejo: no hay dato de entrada que arregle una columna inexistente.
 */
const CODIGOS_DE_ESQUEMA_VIEJO = new Set([
  "42703", // undefined_column
  "42P01", // undefined_table
  "42883", // undefined_function
]);

/**
 * La base rechazó los datos. Puede ser un esquema viejo o puede ser un valor
 * que viola una regla vigente — el código solo no alcanza para distinguirlo,
 * así que el mensaje no elige por el lector.
 */
const CODIGOS_DE_RESTRICCION = new Set([
  "23514", // check_violation
  "23502", // not_null_violation
  "23503", // foreign_key_violation
  "23505", // unique_violation
]);

export class TripWriteError extends Error {
  /** SQLSTATE que devolvió PostgREST, si vino. */
  readonly code: string | null;
  /** Texto que devolvió Postgres, para mostrarlo tal cual. */
  readonly detail: string | null;

  constructor(
    message: string,
    code: string | null,
    detail: string | null = null,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "TripWriteError";
    this.code = code;
    this.detail = detail;
  }

  get isSchemaMismatch(): boolean {
    return this.code !== null && CODIGOS_DE_ESQUEMA_VIEJO.has(this.code);
  }

  get isConstraintViolation(): boolean {
    return this.code !== null && CODIGOS_DE_RESTRICCION.has(this.code);
  }
}

/**
 * El detalle técnico, entre paréntesis y al final.
 *
 * No es ruido: es lo único que permite arreglar el problema sin entrar a los
 * logs del servidor. Un nombre de constraint no es información sensible —
 * describe una regla del esquema, no datos de nadie.
 */
function conDetalle(base: string, error: TripWriteError): string {
  const partes = [error.code, error.detail].filter(Boolean);

  return partes.length > 0 ? `${base} (${partes.join(": ")})` : base;
}

/** Mensaje para el usuario según qué clase de fallo fue. */
export function messageForTripWriteFailure(error: unknown): string {
  if (!(error instanceof TripWriteError)) {
    return "No pudimos crear el viaje. Probá de nuevo en un momento.";
  }

  if (error.isSchemaMismatch) {
    return conDetalle(
      "No pudimos crear el viaje: la base de datos no tiene algo que la " +
        "aplicación necesita. Reintentar no ayuda — hay migraciones sin aplicar.",
      error,
    );
  }

  if (error.isConstraintViolation) {
    return conDetalle(
      "No pudimos crear el viaje: la base rechazó los datos. Puede ser una " +
        "regla del esquema o una migración sin aplicar.",
      error,
    );
  }

  return conDetalle(
    "No pudimos crear el viaje. Probá de nuevo en un momento.",
    error,
  );
}
