export { generatePackingList } from "./engine";
export type {
  GeneratedPackingItem,
  PackingEngineInput,
  PackingList,
} from "./engine";

export { durationInDays, monthsCovered, parseIsoDate } from "./dates";
export {
  bucketIndexForTemperature,
  orderThresholds,
  resolveClimateBuckets,
} from "./climate";
export type { ResolvedClimate } from "./climate";
export { resolveQuantity } from "@/lib/quantity";

export { TRIP_TYPES } from "./types";
export type {
  ClimateBucketId,
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  PackingTrip,
  QuantityRule,
  TripType,
} from "./types";
