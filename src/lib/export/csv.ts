import type { BudgetLineItem } from "@/lib/budget";
import type { TripPackingEntry } from "@/lib/trips/types";

/**
 * Exportación a CSV (spec, sección 7, criterio 4).
 *
 * Funciones puras: reciben las listas ya cargadas y devuelven un string. El
 * botón que dispara la descarga es otra cosa y vive en el componente.
 */

/**
 * Escapa una celda según RFC 4180: comillas dobles alrededor si el valor tiene
 * separador, comillas o salto de línea, y las comillas de adentro duplicadas.
 */
function cell(value: string | number): string {
  const texto = String(value);

  // Excel y Sheets ejecutan como fórmula cualquier celda que arranque con
  // =, +, - o @. Ningún nombre del catálogo empieza así hoy, pero el catálogo
  // se edita desde Studio y el archivo se abre con doble click.
  const seguro = /^[=+\-@]/.test(texto) ? `'${texto}` : texto;

  return /[",\n\r]/.test(seguro) ? `"${seguro.replaceAll('"', '""')}"` : seguro;
}

/**
 * CRLF y no LF: es lo que pide el RFC y lo que Excel espera. Un CSV con LF
 * solo se abre igual en casi todos lados, pero "casi" no es gratis cuando el
 * usuario abre el archivo una sola vez y decide si la app sirve.
 */
export function toCsv(rows: (string | number)[][]): string {
  return rows.map((row) => row.map(cell).join(",")).join("\r\n");
}

export function packingCsv(entries: TripPackingEntry[]): string {
  return toCsv([
    ["Categoría", "Ítem", "Cantidad", "Peso unitario (g)", "Peso total (g)", "Listo"],
    ...entries.map((entry) => [
      entry.item.category,
      entry.item.name,
      entry.qty,
      entry.item.weightG,
      entry.totalWeightG,
      entry.checked ? "sí" : "no",
    ]),
  ]);
}

/**
 * El CSV del presupuesto NO lleva el total convertido.
 *
 * El monto en dólares depende de la cotización del momento y no se persiste
 * (spec, sección 5). Un archivo que se guarda en Descargas y se abre en tres
 * semanas mostraría una conversión vieja como si fuera un dato del viaje. Los
 * precios en moneda local sí son del viaje.
 */
export function budgetCsv(items: BudgetLineItem[]): string {
  return toCsv([
    ["Categoría", "Gasto", "Cantidad", "Precio unitario", "Subtotal", "Moneda"],
    ...items.map((line) => [
      line.product.category,
      line.product.name,
      line.qty,
      line.product.basePrice,
      line.subtotal,
      line.product.currency,
    ]),
  ]);
}

/** Nombre de archivo estable y sin caracteres que molesten en Windows. */
export function csvFilename(
  destination: string,
  startDate: string,
  what: "equipaje" | "presupuesto",
): string {
  const destino = destination
    .toLowerCase()
    .normalize("NFD")
    // Las marcas diacríticas que NFD dejó sueltas: "Bogotá" tiene que quedar
    // "bogota", no "bogot".
    .replaceAll(/\p{Diacritic}/gu, "")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");

  return `kit-viaje-${destino || "viaje"}-${startDate}-${what}.csv`;
}
