import type { QuantityRule } from "@/lib/quantity";

/**
 * Tipos del dominio del motor de presupuesto (spec, sección 5).
 *
 * Igual que el de packing: funciones puras que reciben datos ya leídos. Las
 * cotizaciones entran como dato, no las va a buscar el motor — así el cálculo
 * se testea con valores fijos y no depende de una API externa.
 */

/** Las 4 cotizaciones que el spec trae en un solo request. */
export const QUOTE_IDS = ["oficial", "blue", "mep", "ccl"] as const;

export type QuoteId = (typeof QUOTE_IDS)[number];

/** El spec elige blue como default visible; el resto queda a un click. */
export const DEFAULT_QUOTE_ID: QuoteId = "blue";

export interface ExchangeQuote {
  id: QuoteId;
  /** Etiqueta para el Select: "Blue", "Oficial", "MEP", "CCL". */
  label: string;
  /**
   * Moneda que se convierte: la `base_currency` del destino (ARS para el
   * corredor del MVP). Se guarda en la cotización para que el motor pueda
   * rechazar un presupuesto en otra moneda en vez de sumar peras con manzanas.
   */
  baseCurrency: string;
  /** Moneda del resultado. USD para las 4 cotizaciones del MVP. */
  quoteCurrency: string;
  /** Unidades de baseCurrency que la casa PAGA por 1 de quoteCurrency. */
  buy: number;
  /** Unidades de baseCurrency que la casa COBRA por 1 de quoteCurrency. */
  sell: number;
  /** ISO 8601 con offset. */
  updatedAt: string;
}

export interface BudgetProduct extends QuantityRule {
  id: string;
  category: string;
  name: string;
  basePrice: number;
  /** ISO 4217. */
  currency: string;
  /** ISO 8601 con offset. Lo mantiene el trigger products_set_updated_at. */
  updatedAt: string;
}

export interface BudgetTrip {
  /** Formato yyyy-mm-dd. */
  startDate: string;
  /** Formato yyyy-mm-dd, inclusive. */
  endDate: string;
}
