import type { QuantityRule } from "@/lib/quantity";

/**
 * Tipos del dominio del motor de presupuesto (spec, sección 5).
 *
 * Igual que el de packing: funciones puras que reciben datos ya leídos. Las
 * cotizaciones entran como dato, no las va a buscar el motor — así el cálculo
 * se testea con valores fijos y no depende de una API externa.
 */

/**
 * Identificador de cotización.
 *
 * Es `string` y no una unión cerrada, por lo mismo que `ClimateBucketId`: el
 * conjunto válido depende del corredor y no del código. Argentina tiene cuatro
 * —oficial, blue, MEP, CCL—; Brasil tiene una sola, y "blue" no significa nada
 * ahí. Clavar las cuatro acá haría que sumar un país necesite tocar el motor de
 * presupuesto, que es justamente la parte que no debería enterarse.
 *
 * Quién tiene cuáles vive en `src/lib/quotes/corridors.ts`.
 */
export type QuoteId = string;

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
