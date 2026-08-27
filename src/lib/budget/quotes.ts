import { QUOTE_IDS } from "./types";
import type { ExchangeQuote, QuoteId } from "./types";

/**
 * Selección de cotización y tasa de conversión (spec, sección 5).
 */

export function selectQuote(
  quotes: ExchangeQuote[],
  id: QuoteId,
): ExchangeQuote {
  const quote = quotes.find((candidate) => candidate.id === id);

  if (!quote) {
    const disponibles = quotes.map((q) => q.id).join(", ") || "ninguna";
    throw new RangeError(
      `No hay cotización "${id}". Disponibles: ${disponibles}.`,
    );
  }

  return quote;
}

/** true si están las 4 cotizaciones que el spec pide traer siempre. */
export function hasAllQuotes(quotes: ExchangeQuote[]): boolean {
  const ids = new Set(quotes.map((quote) => quote.id));
  return QUOTE_IDS.every((id) => ids.has(id));
}

/**
 * Tasa con la que se convierte el presupuesto.
 *
 * DECISIÓN: se usa `buy` (la compra), no `sell`.
 *
 * El spec dice `total_usuario = total_ars / cotización_seleccionada.valor`, en
 * singular, pero las fuentes publican dos valores. El que corresponde sale de
 * qué hace realmente el viajero: llega con dólares y los cambia por pesos, o
 * sea que la casa le COMPRA los dólares. Con blue en 1000/1050, entrega un
 * dólar y recibe 1000 pesos, no 1050.
 *
 *   pesos_recibidos = dólares × buy   →   dólares_necesarios = pesos / buy
 *
 * Como `buy` es siempre el menor de los dos, además da la estimación más
 * conservadora: dice que hacen falta más dólares, no menos.
 */
export function conversionRate(quote: ExchangeQuote): number {
  if (!Number.isFinite(quote.buy) || quote.buy <= 0) {
    throw new RangeError(
      `Cotización "${quote.id}" con valor de compra inválido: ${quote.buy}.`,
    );
  }

  return quote.buy;
}
