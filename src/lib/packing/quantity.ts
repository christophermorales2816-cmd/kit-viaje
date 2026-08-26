import type { QuantityRule } from "./types";

/**
 * Cantidad por ítem según la duración del viaje (spec, sección 4, paso 4).
 *
 *   scalesWithDays = false → qty = baseQty
 *   scalesWithDays = true  → qty = min(ceil(durationDays / daysPerUnit), maxQty)
 *
 * Nota sobre `baseQty`: el spec lo ignora cuando el ítem escala. Se respeta tal
 * cual — un ítem que escala arranca en la cuenta por días, no en baseQty × días.
 *
 * La misma regla la usa el motor de presupuesto sobre `products` (sección 5),
 * por eso vive acá y no adentro del motor de packing.
 */
export function resolveQuantity(rule: QuantityRule, durationDays: number): number {
  if (!Number.isFinite(durationDays) || durationDays < 1) {
    throw new RangeError(`Duración inválida: ${durationDays} días.`);
  }

  if (!rule.scalesWithDays) {
    return rule.baseQty;
  }

  // La base ya lo garantiza (constraint packing_catalog_days_per_unit_required),
  // pero el motor no depende de que los datos vengan de esa base.
  if (rule.daysPerUnit === null || rule.daysPerUnit <= 0) {
    throw new RangeError(
      "Un ítem con scalesWithDays necesita daysPerUnit mayor que cero.",
    );
  }

  const scaled = Math.ceil(durationDays / rule.daysPerUnit);

  return rule.maxQty === null ? scaled : Math.min(scaled, rule.maxQty);
}
