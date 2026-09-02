import { byCatalogEntry } from "@/lib/catalog-order";
import { durationInDays } from "@/lib/packing/dates";

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
 * `products` llega ya filtrado por destino: el filtro es de la query, no del
 * motor.
 */
export function generateBudgetList(
  trip: BudgetTrip,
  products: BudgetProduct[],
): BudgetLineItem[] {
  // Se llama por lo que valida, no por lo que devuelve: un rango de fechas al
  // revés tiene que fallar acá y no llegar como un presupuesto vacío que
  // parece válido. Desde que las cantidades arrancan en cero, la duración ya
  // no entra en la cuenta — pero sigue siendo la puerta de entrada.
  durationInDays(trip.startDate, trip.endDate);

  return (
    products
      // Cantidad cero por el mismo motivo que el equipaje: el presupuesto se
      // construye sumando lo que el viaje realmente incluye, no restando lo
      // que no. Un total inflado de arranque es peor que un total en cero,
      // porque se parece a una respuesta.
      .map((product) => toBudgetLine(product, 0))
      .sort(byCatalogEntry((line) => line.product))
  );
}

/**
 * Una línea con su subtotal ya calculado.
 *
 * Se exporta porque la lectura de un viaje guardado arma las mismas líneas con
 * las cantidades que el usuario editó, y el subtotal tiene que salir de la
 * misma cuenta en centavos que usa la generación.
 */
export function toBudgetLine(
  product: BudgetProduct,
  qty: number,
): BudgetLineItem {
  return {
    product,
    qty,
    subtotal: fromCents(toCents(product.basePrice) * qty),
  };
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
