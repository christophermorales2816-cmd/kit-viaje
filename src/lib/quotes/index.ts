export { QUOTES_REVALIDATE_SECONDS, fetchQuotes } from "./fetch";
export type { QuotesResult } from "./fetch";

export {
  allQuoteCorridors,
  getQuoteCorridor,
  ARGENTINA_QUOTES,
  BRASIL_QUOTES,
} from "./corridors";
export type {
  QuoteCorridor,
  QuoteSource,
  QuoteSourceFields,
} from "./corridors";

export { mapQuotesResponse } from "./map";

export { latestQuoteUpdate, resolveQuoteSpreads } from "./spread";
export type { QuoteSpread } from "./spread";
