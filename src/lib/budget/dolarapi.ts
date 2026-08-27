import { QUOTE_IDS } from "./types";
import type { ExchangeQuote, QuoteId } from "./types";

/**
 * Cliente de dolarapi.com (spec, sección 5).
 *
 * El parseo va separado del fetch: `parseDolarApiQuotes` es pura y se testea
 * con fixtures, `fetchDolarApiQuotes` solo hace la llamada.
 *
 * FORMA DE LA RESPUESTA, verificada contra la API real:
 *
 *   [{ "moneda": "USD", "casa": "tarjeta", "nombre": "Tarjeta",
 *      "compra": 1930.5, "venta": 1995.5,
 *      "fechaActualizacion": "2026-08-27T15:00:00.000Z" }, ...]
 *
 * La API devuelve siete casas. El MVP usa cuatro y descarta mayorista, cripto y
 * tarjeta.
 */

export const DOLARAPI_URL = "https://dolarapi.com/v1/dolares";

/** Las casas de dolarapi no se llaman igual que las cotizaciones del spec. */
const CASA_TO_QUOTE_ID: Record<string, QuoteId> = {
  oficial: "oficial",
  blue: "blue",
  bolsa: "mep",
  contadoconliqui: "ccl",
};

const LABELS: Record<QuoteId, string> = {
  oficial: "Oficial",
  blue: "Blue",
  mep: "MEP",
  ccl: "CCL",
};

/** dolarapi publica pesos argentinos por unidad de `moneda`. */
const BASE_CURRENCY = "ARS";

interface DolarApiEntry {
  moneda: string;
  casa: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

function isEntry(value: unknown): value is DolarApiEntry {
  if (typeof value !== "object" || value === null) return false;

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.moneda === "string" &&
    typeof entry.casa === "string" &&
    typeof entry.compra === "number" &&
    typeof entry.venta === "number" &&
    typeof entry.fechaActualizacion === "string"
  );
}

export function parseDolarApiQuotes(payload: unknown): ExchangeQuote[] {
  if (!Array.isArray(payload)) {
    throw new TypeError(
      `dolarapi devolvió ${typeof payload} en vez de un array de cotizaciones.`,
    );
  }

  const porId = new Map<QuoteId, ExchangeQuote>();

  for (const raw of payload) {
    if (!isEntry(raw)) continue;

    const id = CASA_TO_QUOTE_ID[raw.casa];
    if (!id) continue; // mayorista, cripto y tarjeta quedan afuera del MVP

    // Una casa con compra en 0 o negativa no sirve para convertir, y dejarla
    // pasar rompería recién al dividir.
    if (!Number.isFinite(raw.compra) || raw.compra <= 0) continue;

    porId.set(id, {
      id,
      label: LABELS[id],
      baseCurrency: BASE_CURRENCY,
      quoteCurrency: raw.moneda,
      buy: raw.compra,
      sell: raw.venta,
      updatedAt: raw.fechaActualizacion,
    });
  }

  const faltantes = QUOTE_IDS.filter((id) => !porId.has(id));

  if (faltantes.length > 0) {
    throw new Error(
      `dolarapi no devolvió cotizaciones utilizables para: ${faltantes.join(", ")}.`,
    );
  }

  // Orden fijo, el mismo del spec, para que el Select no baile entre renders.
  return QUOTE_IDS.map((id) => porId.get(id)!);
}

export interface FetchQuotesOptions {
  signal?: AbortSignal;
  /** Inyectable para tests; por defecto el fetch global. */
  fetchImpl?: typeof fetch;
}

export async function fetchDolarApiQuotes(
  options: FetchQuotesOptions = {},
): Promise<ExchangeQuote[]> {
  const { signal, fetchImpl = fetch } = options;

  const response = await fetchImpl(DOLARAPI_URL, {
    signal,
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`dolarapi respondió ${response.status} ${response.statusText}.`);
  }

  return parseDolarApiQuotes(await response.json());
}
