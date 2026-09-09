import type { ExchangeQuote } from "@/lib/budget";

import type { QuoteCorridor } from "./corridors";

/**
 * Traducción de la respuesta de la fuente al dominio (spec, secciones 5 y 10).
 *
 * Es una función pura y separada del fetch a propósito: el I/O queda fuera del
 * foco de testing (spec, sección 7), pero decidir que `bolsa` es MEP y que el
 * dato viene mal formado sí es lógica, y se testea con un payload fijo.
 *
 * Un solo mapper para todos los corredores. Los nombres de los campos y la
 * traducción de claves a ids salen del corredor (`corridors.ts`), no de
 * constantes acá: dos fuentes publican el mismo contenido en otro dialecto
 * —`venta` acá, `venda` allá— y escribir un mapper por fuente duplicaría toda
 * la validación, que es la parte que importa.
 */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function positiveNumber(value: unknown, campo: string, clave: string): number {
  const parsed = typeof value === "string" ? Number(value) : value;

  if (typeof parsed !== "number" || !Number.isFinite(parsed) || parsed <= 0) {
    throw new RangeError(
      `La cotización "${clave}" trae ${campo} inválido: ${JSON.stringify(value)}.`,
    );
  }

  return parsed;
}

/**
 * Devuelve las cotizaciones reconocidas, en el orden de `quoteIds`.
 *
 * El orden es el del corredor y no el de la respuesta: el Select se arma con
 * esta lista y no debería reordenarse porque la API cambió de opinión.
 *
 * Tira si el payload no es un array o si una cotización que sí interesa viene
 * con valores que no se pueden usar. Callar eso mostraría un presupuesto
 * convertido con una tasa inventada.
 */
export function mapQuotesResponse(
  payload: unknown,
  corridor: QuoteCorridor,
): ExchangeQuote[] {
  const { source } = corridor;

  if (source === null) {
    throw new Error(
      `El corredor "${corridor.corridor}" no tiene fuente de cotizaciones.`,
    );
  }

  // Una fuente puede publicar un objeto suelto cuando hay una sola cotización,
  // en vez de un array de uno. Envolverlo es más barato que pedirle a cada
  // corredor que declare la forma del sobre.
  const filas = Array.isArray(payload)
    ? payload
    : isRecord(payload)
      ? [payload]
      : null;

  if (filas === null) {
    throw new TypeError(
      `Se esperaba un array de cotizaciones y llegó ${typeof payload}.`,
    );
  }

  const { fields } = source;
  const porId = new Map<string, ExchangeQuote>();

  for (const row of filas) {
    if (!isRecord(row)) continue;

    const clave = row[fields.key];
    if (typeof clave !== "string") continue;

    const id = source.keyToQuoteId[clave];
    // Lo que la fuente publica de más y el producto no usa.
    if (id === undefined) continue;

    // Si la fuente empezara a publicar otra moneda bajo la misma clave, sumarla
    // como si fuera la esperada daría un total mal sin fallar en ningún lado.
    const monedaCruda =
      fields.currency === undefined ? undefined : row[fields.currency];
    const quoteCurrency =
      typeof monedaCruda === "string" ? monedaCruda : corridor.quoteCurrency;

    const updatedAt = row[fields.updatedAt];

    if (typeof updatedAt !== "string" || Number.isNaN(Date.parse(updatedAt))) {
      throw new RangeError(
        `La cotización "${clave}" trae ${fields.updatedAt} inválido: ${JSON.stringify(updatedAt)}.`,
      );
    }

    porId.set(id, {
      id,
      label: corridor.labels[id] ?? id,
      baseCurrency: corridor.baseCurrency,
      quoteCurrency,
      buy: positiveNumber(row[fields.buy], fields.buy, clave),
      sell: positiveNumber(row[fields.sell], fields.sell, clave),
      updatedAt,
    });
  }

  return corridor.quoteIds
    .map((id) => porId.get(id))
    .filter((quote): quote is ExchangeQuote => quote !== undefined);
}
