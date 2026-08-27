import { durationInDays } from "@/lib/packing/dates";
import { resolveQuantity } from "@/lib/quantity";

import { fromCents, roundToCents, toCents } from "./money";
import { conversionRate } from "./quotes";
import type { BudgetProduct, BudgetTrip, ExchangeQuote } from "./types";

/**
 * Motor de presupuesto (spec, sección 5).
 *
 * Dos operaciones distintas, a propósito separadas:
 *
 *   generateBudgetList  corre una vez, al crear el viaje: arma la lista con
 *                       cantidades default escaladas por duración.
 *   calculateBudget     corre en cada render: convierte contra la cotización
 *                       elegida. El monto convertido NUNCA se persiste.
 */

export interface BudgetLineItem {
  product: BudgetProduct;
  qty: number;
  /** basePrice × qty, en la moneda del producto. */
  subtotal: number;
}

export interface BudgetTotals {
  /** Total en la moneda del destino. */
  totalBase: number;
  baseCurrency: string;
  /** Total convertido. Se recalcula siempre, no se guarda. */
  totalConverted: number;
  convertedCurrency: string;
  quote: ExchangeQuote;
  rate: number;
}

/**
 * Lista default al crear el viaje, con el mismo patrón de escalado que el motor
 * de packing (spec, sección 5: "Así el motor de presupuesto genera una lista
 * default al crear el trip, en vez de arrancar vacío").
 *
 * `products` llega ya filtrado por destino: ese filtro es de la query. El de
 * `includeByDefault` sí es del motor, porque define qué es un presupuesto
 * inicial razonable y no qué productos existen.
 */
export function generateBudgetList(
  trip: BudgetTrip,
  products: BudgetProduct[],
): BudgetLineItem[] {
  const durationDays = durationInDays(trip.startDate, trip.endDate);

  return products
    // Sin este filtro el presupuesto suma las alternativas excluyentes de cada
    // categoría: cuatro alojamientos a la vez eran el 76% del total.
    .filter((product) => product.includeByDefault)
    .map((product) => {
      const qty = resolveQuantity(product, durationDays);
      return {
        product,
        qty,
        subtotal: fromCents(toCents(product.basePrice) * qty),
      };
    })
    .sort(
      (a, b) =>
        a.product.category.localeCompare(b.product.category, "es") ||
        a.product.name.localeCompare(b.product.name, "es") ||
        a.product.id.localeCompare(b.product.id),
    );
}

/**
 *   total_base      = Σ (basePrice × qty)
 *   total_convertido = total_base / cotización
 */
export function calculateBudget(
  items: BudgetLineItem[],
  quote: ExchangeQuote,
): BudgetTotals {
  const rate = conversionRate(quote);

  // Sumar monedas distintas daría un número con apariencia de total y sin
  // significado. La base permite un currency por producto, así que el motor no
  // puede asumir que son todos iguales.
  const monedasDistintas = [
    ...new Set(items.map((item) => item.product.currency)),
  ].filter((currency) => currency !== quote.baseCurrency);

  if (monedasDistintas.length > 0) {
    throw new RangeError(
      `El presupuesto se convierte desde ${quote.baseCurrency}, pero hay productos en ${monedasDistintas.join(", ")}.`,
    );
  }

  const totalCents = items.reduce(
    (sum, item) => sum + toCents(item.product.basePrice) * item.qty,
    0,
  );
  const totalBase = fromCents(totalCents);

  return {
    totalBase,
    baseCurrency: quote.baseCurrency,
    totalConverted: roundToCents(totalBase / rate),
    convertedCurrency: quote.quoteCurrency,
    quote,
    rate,
  };
}
