import type { BudgetProduct } from "./types";

/**
 * Antigüedad de los precios del catálogo (spec, sección 5).
 *
 * "La vista de presupuesto muestra la antigüedad del precio más viejo del
 * listado; si supera un umbral (ej. 30 días), warning visual. No se oculta el
 * problema, se lo muestra."
 *
 * Acá sí se usan Date e instantes: `updatedAt` es un timestamptz, un punto en
 * la línea de tiempo. Es lo contrario del caso de las fechas del motor de
 * packing, que son fechas de calendario sin hora y por eso no pasan por Date.
 */

/** El "ej. 30 días" del spec. */
export const DEFAULT_STALE_AFTER_DAYS = 30;

const MS_PER_DAY = 86_400_000;

export interface PriceFreshness {
  /** ISO del precio más viejo del listado, o null si no hay productos. */
  oldestUpdatedAt: string | null;
  /** Días completos desde esa fecha. null si no hay productos. */
  ageDays: number | null;
  isStale: boolean;
  staleAfterDays: number;
}

export interface FreshnessOptions {
  /** Inyectable para que los tests no dependan del reloj. */
  now?: Date;
  staleAfterDays?: number;
}

export function resolvePriceFreshness(
  products: BudgetProduct[],
  options: FreshnessOptions = {},
): PriceFreshness {
  const { now = new Date(), staleAfterDays = DEFAULT_STALE_AFTER_DAYS } = options;

  const timestamps = products.map((product) => {
    const parsed = Date.parse(product.updatedAt);
    if (Number.isNaN(parsed)) {
      throw new RangeError(
        `El producto "${product.id}" tiene updatedAt inválido: "${product.updatedAt}".`,
      );
    }
    return parsed;
  });

  if (timestamps.length === 0) {
    return {
      oldestUpdatedAt: null,
      ageDays: null,
      isStale: false,
      staleAfterDays,
    };
  }

  const oldest = Math.min(...timestamps);
  // Días completos: un precio de hace 29 h es "hace 1 día", no "hace 2".
  const ageDays = Math.max(0, Math.floor((now.getTime() - oldest) / MS_PER_DAY));

  return {
    oldestUpdatedAt: new Date(oldest).toISOString(),
    ageDays,
    isStale: ageDays > staleAfterDays,
    staleAfterDays,
  };
}
