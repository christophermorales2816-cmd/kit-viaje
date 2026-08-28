import { generateBudgetList } from "@/lib/budget";
import type { BudgetProduct } from "@/lib/budget";
import { generatePackingList } from "@/lib/packing";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
} from "@/lib/packing";

import type { TripInput } from "./input";

/**
 * Orquesta los dos motores para armar el viaje inicial (spec, sección 6A).
 *
 * Sigue siendo pura: no toca la base ni la red. Devuelve las filas que hay que
 * persistir, y quien la llama decide cómo. Eso permite testear la combinación
 * de los dos motores sin levantar nada.
 */

export interface TripDraftSources {
  climateProfiles: ClimateProfile[];
  climateThresholds: ClimateThreshold[];
  catalog: PackingCatalogItem[];
  products: BudgetProduct[];
}

export interface DraftPackingItem {
  itemId: string;
  qty: number;
}

export interface DraftBudgetItem {
  productId: string;
  qty: number;
}

export interface TripDraft {
  durationDays: number;
  monthsCovered: number[];
  climateBuckets: string[];
  /**
   * Meses del viaje sin datos de clima. La lista de equipaje sale más corta de
   * lo que debería y la UI tiene que poder avisarlo.
   */
  monthsWithoutClimateData: number[];
  totalWeightG: number;
  packingItems: DraftPackingItem[];
  budgetItems: DraftBudgetItem[];
}

export function buildTripDraft(
  input: TripInput,
  sources: TripDraftSources,
): TripDraft {
  const packing = generatePackingList({
    trip: input,
    climateProfiles: sources.climateProfiles,
    climateThresholds: sources.climateThresholds,
    catalog: sources.catalog,
  });

  const budget = generateBudgetList(
    { startDate: input.startDate, endDate: input.endDate },
    sources.products,
  );

  return {
    durationDays: packing.durationDays,
    monthsCovered: packing.monthsCovered,
    climateBuckets: packing.climateBuckets,
    monthsWithoutClimateData: packing.monthsWithoutClimateData,
    totalWeightG: packing.totalWeightG,
    packingItems: packing.items.map((entry) => ({
      itemId: entry.item.id,
      qty: entry.qty,
    })),
    budgetItems: budget.map((linea) => ({
      productId: linea.product.id,
      qty: linea.qty,
    })),
  };
}
