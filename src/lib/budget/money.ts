/**
 * Aritmética de dinero en centavos enteros.
 *
 * Sumar precios como float acumula error: 0.1 + 0.2 no da 0.3 en binario, y un
 * presupuesto de 20 líneas termina en 184999.99999999997. Con ARS de cinco
 * cifras el error no cambia lo que se muestra, pero la cuenta que sale mal
 * cuesta lo mismo que la que sale bien.
 */

const CENTS_PER_UNIT = 100;

export function toCents(amount: number): number {
  if (!Number.isFinite(amount)) {
    throw new RangeError(`Importe inválido: ${amount}.`);
  }
  return Math.round(amount * CENTS_PER_UNIT);
}

export function fromCents(cents: number): number {
  return cents / CENTS_PER_UNIT;
}

/** Redondea a dos decimales pasando por centavos. */
export function roundToCents(amount: number): number {
  return fromCents(toCents(amount));
}
