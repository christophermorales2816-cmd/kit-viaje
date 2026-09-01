export {
  DOLARAPI_URL,
  QUOTES_REVALIDATE_SECONDS,
  fetchQuotes,
} from "./dolarapi";
export type { QuotesResult } from "./dolarapi";

export { mapDolarApiResponse } from "./map";
export type { MapQuotesOptions } from "./map";

export { latestQuoteUpdate, resolveQuoteSpreads } from "./spread";
export type { QuoteSpread } from "./spread";
