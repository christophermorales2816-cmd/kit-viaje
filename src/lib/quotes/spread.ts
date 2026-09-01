import { QUOTE_IDS, type ExchangeQuote } from "@/lib/budget";

/**
 * Brecha de cada cotización contra la oficial (spec, sección 8.7).
 *
 * Es la lectura que le importa a un extranjero: no cuánto vale el dólar, sino
 * cuánto más rinde según dónde lo cambie. El número suelto no dice nada si no
 * se sabe contra qué compararlo.
 *
 * Función pura y sin fechas: recibe las cotizaciones ya traídas, igual que el
 * motor de presupuesto de la sección 5.
 */

export interface QuoteSpread {
  quote: ExchangeQuote;
  /**
   * Porcentaje por encima de la oficial. `null` cuando no se puede calcular:
   * es la oficial misma, no vino la oficial en el listado, o su venta no es un
   * divisor válido. Nunca 0 en esos casos — un 0 se lee como "no hay brecha",
   * que es una afirmación, y acá no hay dato.
   */
  premiumPercent: number | null;
}

const ORDEN = new Map(QUOTE_IDS.map((id, i) => [id, i]));

export function resolveQuoteSpreads(quotes: ExchangeQuote[]): QuoteSpread[] {
  const oficial = quotes.find((quote) => quote.id === "oficial");
  const base = oficial && oficial.sell > 0 ? oficial.sell : null;

  return [...quotes]
    .sort((a, b) => (ORDEN.get(a.id) ?? 0) - (ORDEN.get(b.id) ?? 0))
    .map((quote) => ({
      quote,
      premiumPercent:
        base === null || quote.id === "oficial"
          ? null
          : (quote.sell / base - 1) * 100,
    }));
}

/**
 * El `updatedAt` más reciente del listado, para el sello de hora del bloque.
 * Un número en vivo sin hora de consulta no es un dato en vivo, es un número.
 */
export function latestQuoteUpdate(quotes: ExchangeQuote[]): string | null {
  let ultima: string | null = null;

  for (const quote of quotes) {
    const instante = Date.parse(quote.updatedAt);
    if (Number.isNaN(instante)) continue;

    if (ultima === null || instante > Date.parse(ultima)) {
      ultima = quote.updatedAt;
    }
  }

  return ultima;
}
