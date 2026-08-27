import type { ExchangeQuote } from "@/lib/budget";

import { mapDolarApiResponse, type MapQuotesOptions } from "./map";

/**
 * Fuente de cotización del MVP (spec, sección 5): las 4 en un solo request.
 */
export const DOLARAPI_URL = "https://dolarapi.com/v1/dolares";

/**
 * Diez minutos.
 *
 * En Next 16 el cacheo de `fetch` es opt-in: sin `next.revalidate` la respuesta
 * se pide de nuevo en cada request. Diez minutos alcanzan para que la brecha
 * entre cotizaciones se mueva y no convierten la landing en un proxy de
 * dolarapi. El monto convertido no se persiste (sección 5), así que el próximo
 * render ya toma el valor nuevo.
 */
export const QUOTES_REVALIDATE_SECONDS = 600;

/**
 * Resultado explícito en vez de excepción.
 *
 * Una API externa caída es un caso esperable, no un bug, y la vista de
 * presupuesto tiene que poder decir "no pudimos traer la cotización" en lugar
 * de mostrar un total en cero o romper la página entera. Quien llama decide
 * cómo mostrarlo.
 */
export type QuotesResult =
  | { ok: true; quotes: ExchangeQuote[] }
  | { ok: false; reason: string };

export async function fetchQuotes(
  options: MapQuotesOptions = {},
): Promise<QuotesResult> {
  let payload: unknown;

  try {
    const response = await fetch(DOLARAPI_URL, {
      headers: { accept: "application/json" },
      next: { revalidate: QUOTES_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: `dolarapi respondió ${response.status}.`,
      };
    }

    payload = await response.json();
  } catch (error) {
    return {
      ok: false,
      reason:
        error instanceof Error
          ? `No se pudo contactar a dolarapi: ${error.message}`
          : "No se pudo contactar a dolarapi.",
    };
  }

  try {
    const quotes = mapDolarApiResponse(payload, options);

    // Cero cotizaciones reconocidas no es "una lista vacía": es que la fuente
    // cambió de formato. Sin ninguna tasa no hay nada que convertir.
    if (quotes.length === 0) {
      return {
        ok: false,
        reason: "dolarapi no devolvió ninguna de las cotizaciones esperadas.",
      };
    }

    return { ok: true, quotes };
  } catch (error) {
    return {
      ok: false,
      reason:
        error instanceof Error
          ? `Respuesta de dolarapi inesperada: ${error.message}`
          : "Respuesta de dolarapi inesperada.",
    };
  }
}
