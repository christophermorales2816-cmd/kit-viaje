/**
 * Escalado de cantidades por duración del viaje.
 *
 * Vive fuera de los dos motores porque el spec aplica exactamente la misma
 * regla en dos lugares: a `packing_catalog` en la sección 4 y a `products` en
 * la sección 5. Las columnas son las mismas y la cuenta también.
 */

export interface QuantityRule {
  baseQty: number;
  scalesWithDays: boolean;
  /** Días que cubre una unidad. Requerido si `scalesWithDays`. */
  daysPerUnit: number | null;
  /** Tope de unidades. `null` = sin tope. */
  maxQty: number | null;
}

/**
 * Cantidad para un ítem dada la duración del viaje.
 *
 *   scalesWithDays = false → qty = baseQty
 *   scalesWithDays = true  → qty = min(ceil(durationDays / daysPerUnit), maxQty)
 *
 * Nota sobre `baseQty`: el spec lo ignora cuando el ítem escala. Se respeta tal
 * cual — un ítem que escala arranca en la cuenta por días, no en baseQty × días.
 */
export function resolveQuantity(rule: QuantityRule, durationDays: number): number {
  if (!Number.isFinite(durationDays) || durationDays < 1) {
    throw new RangeError(`Duración inválida: ${durationDays} días.`);
  }

  if (!rule.scalesWithDays) {
    return rule.baseQty;
  }

  // La base ya lo garantiza (constraints *_days_per_unit_required), pero los
  // motores no dependen de que los datos vengan de esa base.
  if (rule.daysPerUnit === null || rule.daysPerUnit <= 0) {
    throw new RangeError(
      "Un ítem con scalesWithDays necesita daysPerUnit mayor que cero.",
    );
  }

  const scaled = Math.ceil(durationDays / rule.daysPerUnit);

  return rule.maxQty === null ? scaled : Math.min(scaled, rule.maxQty);
}
