import { describe, expect, it } from "vitest";

import { generatePackingList } from "@/lib/packing/engine";
import { TRIP_TYPES } from "@/lib/packing/types";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  TripType,
} from "@/lib/packing/types";

const THRESHOLDS: ClimateThreshold[] = [
  { id: "frio", tempMax: 10 },
  { id: "templado", tempMax: 25 },
  { id: "calido", tempMax: null },
];

const BUCKETS = ["frio", "templado", "calido"] as const;

/** Promedios de Buenos Aires, redondeados para que cada mes caiga limpio en un bucket. */
const PROFILES: ClimateProfile[] = [
  { month: 1, tempMin: 26, tempMax: 32, precipProbability: 30 }, // cálido
  { month: 4, tempMin: 14, tempMax: 22, precipProbability: 40 }, // templado
  { month: 5, tempMin: 6, tempMax: 9, precipProbability: 45 }, //  frío
  { month: 7, tempMin: 5, tempMax: 9, precipProbability: 50 }, //  frío
  { month: 9, tempMin: 12, tempMax: 20, precipProbability: 40 }, // templado
  { month: 10, tempMin: 8, tempMax: 20, precipProbability: 40 }, // frío + templado
];

/** Un viaje corto que cae entero dentro de cada bucket. */
const TRIP_DATES: Record<(typeof BUCKETS)[number], [string, string]> = {
  frio: ["2026-07-05", "2026-07-10"],
  templado: ["2026-09-05", "2026-09-10"],
  calido: ["2026-01-05", "2026-01-10"],
};

function item(
  bucket: string,
  tripType: TripType,
  overrides: Partial<PackingCatalogItem> = {},
): PackingCatalogItem {
  return {
    id: `${bucket}-${tripType}`,
    category: "ropa",
    name: `Ítem ${bucket} ${tripType}`,
    weightG: 100,
    climateTags: [bucket],
    tripTypeTags: [tripType],
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
    ...overrides,
  };
}

/** Un ítem por cada combinación de bucket × tipo de viaje. */
const FULL_CATALOG: PackingCatalogItem[] = BUCKETS.flatMap((bucket) =>
  TRIP_TYPES.map((tripType) => item(bucket, tripType)),
);

function run(
  bucket: (typeof BUCKETS)[number],
  tripType: TripType,
  catalog = FULL_CATALOG,
) {
  const [startDate, endDate] = TRIP_DATES[bucket];
  return generatePackingList({
    trip: { startDate, endDate, tripType },
    climateProfiles: PROFILES,
    climateThresholds: THRESHOLDS,
    catalog,
  });
}

describe("cada bucket de clima × cada tipo de viaje", () => {
  const matriz = BUCKETS.flatMap((bucket) =>
    TRIP_TYPES.map((tripType) => ({ bucket, tripType })),
  );

  it.each(matriz)("$bucket + $tripType trae solo su ítem", ({ bucket, tripType }) => {
    const lista = run(bucket, tripType);

    expect(lista.climateBuckets).toEqual([bucket]);
    expect(lista.items.map((entry) => entry.item.id)).toEqual([`${bucket}-${tripType}`]);
  });

  it("cubre las 12 combinaciones", () => {
    expect(matriz).toHaveLength(12);
  });
});

describe("filtrado por las dos dimensiones", () => {
  it("descarta el ítem del clima correcto pero del viaje equivocado", () => {
    const lista = run("frio", "playa");
    expect(lista.items.map((e) => e.item.id)).not.toContain("frio-negocios");
  });

  it("descarta el ítem del viaje correcto pero del clima equivocado", () => {
    const lista = run("frio", "playa");
    expect(lista.items.map((e) => e.item.id)).not.toContain("calido-playa");
  });

  it("devuelve la lista vacía si nada matchea", () => {
    const soloCalido = [item("calido", "playa")];
    const lista = run("frio", "playa", soloCalido);
    expect(lista.items).toEqual([]);
    expect(lista.totalWeightG).toBe(0);
  });

  it("incluye un ítem multi-bucket una sola vez", () => {
    const abrigo = item("frio", "urbano", {
      id: "abrigo",
      climateTags: ["frio", "templado"],
    });
    const lista = generatePackingList({
      trip: { startDate: "2026-10-01", endDate: "2026-10-10", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [abrigo],
    });

    expect(lista.climateBuckets).toEqual(["frio", "templado"]);
    expect(lista.items).toHaveLength(1);
  });
});

describe("viaje que cruza más de un bucket (spec, sección 4, paso 2)", () => {
  // 30 días: arranca templado en abril y termina frío en mayo.
  const lista = generatePackingList({
    trip: { startDate: "2026-04-16", endDate: "2026-05-15", tripType: "urbano" },
    climateProfiles: PROFILES,
    climateThresholds: THRESHOLDS,
    catalog: FULL_CATALOG,
  });

  it("resuelve los dos buckets", () => {
    expect(lista.monthsCovered).toEqual([4, 5]);
    expect(lista.climateBuckets).toEqual(["frio", "templado"]);
  });

  it("incluye ítems de ambos", () => {
    expect(lista.items.map((e) => e.item.id).sort()).toEqual([
      "frio-urbano",
      "templado-urbano",
    ]);
  });

  it("no incluye el bucket que no toca", () => {
    expect(lista.climateBuckets).not.toContain("calido");
  });
});

describe("cantidades y peso", () => {
  const medias = item("frio", "urbano", {
    id: "medias",
    name: "Medias",
    weightG: 40,
    scalesWithDays: true,
    daysPerUnit: 1,
    maxQty: 10,
  });
  const campera = item("frio", "urbano", {
    id: "campera",
    name: "Campera",
    weightG: 800,
  });

  it("escala por duración y respeta el tope", () => {
    const lista = generatePackingList({
      trip: { startDate: "2026-07-01", endDate: "2026-07-30", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [medias, campera],
    });

    expect(lista.durationDays).toBe(30);
    const porId = new Map(lista.items.map((e) => [e.item.id, e.qty]));
    expect(porId.get("medias")).toBe(10); // 30 días, tope 10
    expect(porId.get("campera")).toBe(1); // no escala
  });

  it("suma el peso como weightG × qty", () => {
    const lista = generatePackingList({
      trip: { startDate: "2026-07-01", endDate: "2026-07-05", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [medias, campera],
    });

    // 5 medias × 40 g + 1 campera × 800 g
    expect(lista.totalWeightG).toBe(5 * 40 + 800);
  });
});

describe("determinismo y datos faltantes", () => {
  it("dos corridas iguales devuelven exactamente lo mismo", () => {
    expect(run("frio", "urbano")).toEqual(run("frio", "urbano"));
  });

  it("ordena por categoría y después por nombre", () => {
    const catalogo = [
      item("frio", "urbano", { id: "c", category: "ropa", name: "Zapatos" }),
      item("frio", "urbano", { id: "a", category: "botiquin", name: "Aspirinas" }),
      item("frio", "urbano", { id: "b", category: "ropa", name: "Bufanda" }),
    ];
    const lista = run("frio", "urbano", catalogo);
    expect(lista.items.map((e) => e.item.id)).toEqual(["a", "b", "c"]);
  });

  it("avisa qué mes se quedó sin datos de clima en vez de callarlo", () => {
    const lista = generatePackingList({
      // Mayo tiene perfil; junio no está en PROFILES.
      trip: { startDate: "2026-05-25", endDate: "2026-06-05", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: FULL_CATALOG,
    });

    expect(lista.monthsCovered).toEqual([5, 6]);
    expect(lista.monthsWithoutClimateData).toEqual([6]);
    expect(lista.climateBuckets).toEqual(["frio"]);
  });

  it("propaga el error de una fecha inválida", () => {
    expect(() =>
      generatePackingList({
        trip: { startDate: "2026-02-30", endDate: "2026-03-05", tripType: "urbano" },
        climateProfiles: PROFILES,
        climateThresholds: THRESHOLDS,
        catalog: FULL_CATALOG,
      }),
    ).toThrow(RangeError);
  });
});
