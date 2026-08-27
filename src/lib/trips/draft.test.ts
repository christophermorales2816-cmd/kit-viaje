import { describe, expect, it } from "vitest";

import type { BudgetProduct } from "@/lib/budget";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
} from "@/lib/packing";
import { buildTripDraft } from "@/lib/trips/draft";
import type { TripDraftSources } from "@/lib/trips/draft";

const THRESHOLDS: ClimateThreshold[] = [
  { id: "frio", tempMax: 10 },
  { id: "templado", tempMax: 25 },
  { id: "calido", tempMax: null },
];

const PROFILES: ClimateProfile[] = [
  { month: 7, tempMin: 7.6, tempMax: 15.4, precipProbability: 25 },
  { month: 9, tempMin: 10.6, tempMax: 19, precipProbability: 27 },
];

const CATALOG: PackingCatalogItem[] = [
  {
    id: "campera", category: "ropa", name: "Campera", weightG: 900,
    climateTags: ["frio"], tripTypeTags: ["urbano"],
    baseQty: 1, scalesWithDays: false, daysPerUnit: null, maxQty: null,
  },
  {
    id: "medias", category: "ropa", name: "Medias", weightG: 50,
    climateTags: ["frio", "templado"], tripTypeTags: ["urbano"],
    baseQty: 1, scalesWithDays: true, daysPerUnit: 1, maxQty: 10,
  },
  {
    id: "ojotas", category: "calzado", name: "Ojotas", weightG: 200,
    climateTags: ["calido"], tripTypeTags: ["playa"],
    baseQty: 1, scalesWithDays: false, daysPerUnit: null, maxQty: null,
  },
];

const PRODUCTS: BudgetProduct[] = [
  {
    id: "hotel", category: "alojamiento", name: "Hotel 3 estrellas",
    basePrice: 65_000, currency: "ARS", updatedAt: "2026-08-27T12:00:00.000Z",
    includeByDefault: true,
    baseQty: 1, scalesWithDays: true, daysPerUnit: 1, maxQty: 30,
  },
  {
    id: "hostel", category: "alojamiento", name: "Hostel",
    basePrice: 22_000, currency: "ARS", updatedAt: "2026-08-27T12:00:00.000Z",
    includeByDefault: false,
    baseQty: 1, scalesWithDays: true, daysPerUnit: 1, maxQty: 30,
  },
];

const SOURCES: TripDraftSources = {
  climateProfiles: PROFILES,
  climateThresholds: THRESHOLDS,
  catalog: CATALOG,
  products: PRODUCTS,
};

const VIAJE = {
  startDate: "2026-07-10",
  endDate: "2026-07-14",
  tripType: "urbano",
} as const;

describe("buildTripDraft", () => {
  const draft = buildTripDraft(VIAJE, SOURCES);

  it("cuenta la duración con ambos extremos", () => {
    expect(draft.durationDays).toBe(5);
  });

  it("resuelve el clima de los meses que toca", () => {
    expect(draft.monthsCovered).toEqual([7]);
    expect(draft.climateBuckets).toEqual(["frio", "templado"]);
  });

  it("devuelve solo los ids y cantidades que van a la base", () => {
    expect(draft.packingItems).toEqual([
      { itemId: "campera", qty: 1 },
      { itemId: "medias", qty: 5 },
    ]);
  });

  it("no incluye lo que no matchea el clima ni el tipo de viaje", () => {
    expect(draft.packingItems.map((i) => i.itemId)).not.toContain("ojotas");
  });

  it("aplica el filtro de includeByDefault al presupuesto", () => {
    expect(draft.budgetItems).toEqual([{ productId: "hotel", qty: 5 }]);
  });

  it("suma el peso total", () => {
    expect(draft.totalWeightG).toBe(900 + 50 * 5);
  });

  it("propaga los meses sin datos de clima en vez de tragárselos", () => {
    const conMesFaltante = buildTripDraft(
      { startDate: "2026-07-28", endDate: "2026-08-03", tripType: "urbano" },
      SOURCES,
    );
    expect(conMesFaltante.monthsCovered).toEqual([7, 8]);
    expect(conMesFaltante.monthsWithoutClimateData).toEqual([8]);
  });

  it("es determinístico", () => {
    expect(buildTripDraft(VIAJE, SOURCES)).toEqual(buildTripDraft(VIAJE, SOURCES));
  });

  it("con catálogos vacíos devuelve listas vacías, no falla", () => {
    const vacio = buildTripDraft(VIAJE, { ...SOURCES, catalog: [], products: [] });
    expect(vacio.packingItems).toEqual([]);
    expect(vacio.budgetItems).toEqual([]);
    expect(vacio.totalWeightG).toBe(0);
  });
});
