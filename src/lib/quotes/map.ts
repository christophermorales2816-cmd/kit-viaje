import { QUOTE_IDS, type ExchangeQuote, type QuoteId } from "@/lib/budget";

/**
 * Traducción de la respuesta de dolarapi.com al dominio (spec, sección 5).
 *
 * Es una función pura y separada del fetch a propósito: el I/O queda fuera del
 * foco de testing (spec, sección 7), pero decidir que `bolsa` es MEP y que el
 * dato viene mal formado sí es lógica, y se testea con un payload fijo.
 */

/** La API devuelve más casas de las que el MVP usa; el resto se descarta. */
const CASA_TO_QUOTE_ID: Record<string, QuoteId> = {
  oficial: "oficial",
  blue: "blue",
  // dolarapi las nombra por el mercado, el spec por la sigla.
  bolsa: "mep",
  contadoconliqui: "ccl",
};

/** Etiquetas del Select. El `nombre` de la API es largo y no coincide con el spec. */
const QUOTE_LABELS: Record<QuoteId, string> = {
  oficial: "Oficial",
  blue: "Blue",
  mep: "MEP",
  ccl: "CCL",
};

export interface MapQuotesOptions {
  /**
   * Moneda que se convierte: la `base_currency` del destino. Default ARS, que
   * es la del único corredor del MVP — dolarapi publica exclusivamente pesos
   * argentinos, así que no hay otro valor posible mientras la fuente sea esta.
   */
  baseCurrency?: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function positiveNumber(value: unknown, campo: string, casa: string): number {
  const parsed = typeof value === "string" ? Number(value) : value;

  if (typeof parsed !== "number" || !Number.isFinite(parsed) || parsed <= 0) {
    throw new RangeError(
      `La cotización "${casa}" trae ${campo} inválido: ${JSON.stringify(value)}.`,
    );
  }

  return parsed;
}

/**
 * Devuelve las cotizaciones reconocidas, en el orden de QUOTE_IDS.
 *
 * El orden es fijo y no el de la respuesta: el Select se arma con esta lista y
 * no debería reordenarse porque la API cambió de opinión.
 *
 * Tira si el payload no es un array o si una de las 4 cotizaciones que sí
 * interesan viene con valores que no se pueden usar. Callar eso mostraría un
 * presupuesto convertido con una tasa inventada.
 */
export function mapDolarApiResponse(
  payload: unknown,
  options: MapQuotesOptions = {},
): ExchangeQuote[] {
  const { baseCurrency = "ARS" } = options;

  if (!Array.isArray(payload)) {
    throw new TypeError(
      `Se esperaba un array de cotizaciones y llegó ${typeof payload}.`,
    );
  }

  const porId = new Map<QuoteId, ExchangeQuote>();

  for (const row of payload) {
    if (!isRecord(row)) continue;

    const casa = typeof row.casa === "string" ? row.casa : null;
    if (casa === null) continue;

    const id = CASA_TO_QUOTE_ID[casa];
    // mayorista, cripto y tarjeta no son parte del MVP.
    if (id === undefined) continue;

    // Si la fuente empezara a publicar otra moneda bajo la misma casa, sumarla
    // como si fuera dólar daría un total mal sin fallar en ningún lado.
    const quoteCurrency = typeof row.moneda === "string" ? row.moneda : "USD";

    const updatedAt =
      typeof row.fechaActualizacion === "string" ? row.fechaActualizacion : null;

    if (updatedAt === null || Number.isNaN(Date.parse(updatedAt))) {
      throw new RangeError(
        `La cotización "${casa}" trae fechaActualizacion inválida: ${JSON.stringify(row.fechaActualizacion)}.`,
      );
    }

    porId.set(id, {
      id,
      label: QUOTE_LABELS[id],
      baseCurrency,
      quoteCurrency,
      buy: positiveNumber(row.compra, "compra", casa),
      sell: positiveNumber(row.venta, "venta", casa),
      updatedAt,
    });
  }

  return QUOTE_IDS.map((id) => porId.get(id)).filter(
    (quote): quote is ExchangeQuote => quote !== undefined,
  );
}
