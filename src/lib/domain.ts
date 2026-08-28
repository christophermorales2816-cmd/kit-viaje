/** Tipos de dominio que no pertenecen a un motor en particular. */

export interface Destination {
  id: string;
  name: string;
  corridor: string;
  /** ISO 4217. Define contra qué cotizaciones se convierte el presupuesto. */
  baseCurrency: string;
}

/** Único corredor del MVP (spec, sección 2). */
export const MVP_CORRIDOR = "argentina";
