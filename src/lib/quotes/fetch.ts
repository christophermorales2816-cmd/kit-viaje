import type { ExchangeQuote } from "@/lib/budget";

import { getQuoteCorridor, type QuoteCorridor } from "./corridors";
import { mapQuotesResponse } from "./map";

/**
 * Trae las cotizaciones de un corredor (spec, secciones 5 y 10).
 *
 * La URL y el dialecto de la fuente los declara el corredor; acá solo queda el
 * I/O y la traducción de fallas a un resultado que la vista pueda mostrar.
 */

/**
 * Diez minutos.
 *
 * En Next 16 el cacheo de `fetch` es opt-in: sin `next.revalidate` la respuesta
 * se pide de nuevo en cada request. Diez minutos alcanzan para que la brecha
 * entre cotizaciones se mueva y no convierten la landing en un proxy de la
 * fuente. El monto convertido no se persiste (sección 5), así que el próximo
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
 *
 * Esto es también lo que hace seguro sumar un corredor cuya fuente todavía no
 * se pudo verificar: si el dialecto no coincide, la página lo dice y sigue
 * funcionando en todo lo demás.
 */
export type QuotesResult =
  | { ok: true; quotes: ExchangeQuote[]; corridor: QuoteCorridor }
  | { ok: false; reason: string };

export async function fetchQuotes(corridor: string): Promise<QuotesResult> {
  const config = getQuoteCorridor(corridor);

  if (config === undefined) {
    return {
      ok: false,
      reason: `No hay corredor de cotizaciones "${corridor}".`,
    };
  }

  if (config.source === null) {
    return {
      ok: false,
      reason: `El corredor "${corridor}" todavía no tiene fuente de cotizaciones.`,
    };
  }

  const { source } = config;
  let payload: unknown;

  try {
    const response = await fetch(source.url, {
      headers: { accept: "application/json" },
      next: { revalidate: QUOTES_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: `${source.name} respondió ${response.status}.`,
      };
    }

    payload = await response.json();
  } catch (error) {
    return {
      ok: false,
      reason:
        error instanceof Error
          ? `No se pudo contactar a ${source.name}: ${error.message}`
          : `No se pudo contactar a ${source.name}.`,
    };
  }

  try {
    const quotes = mapQuotesResponse(payload, config);

    // Cero cotizaciones reconocidas no es "una lista vacía": es que la fuente
    // cambió de formato. Sin ninguna tasa no hay nada que convertir.
    if (quotes.length === 0) {
      return {
        ok: false,
        reason: `${source.name} no devolvió ninguna de las cotizaciones esperadas.`,
      };
    }

    return { ok: true, quotes, corridor: config };
  } catch (error) {
    return {
      ok: false,
      reason:
        error instanceof Error
          ? `Respuesta de ${source.name} inesperada: ${error.message}`
          : `Respuesta de ${source.name} inesperada.`,
    };
  }
}
