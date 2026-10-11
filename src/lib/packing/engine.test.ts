import { describe, expect, it } from "vitest";

import { generatePackingList } from "@/lib/packing/engine";
import { TRIP_TYPES } from "@/lib/packing/types";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
  PrecipThreshold,
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

  it("genera todo en cero, escale por duración o no", () => {
    const lista = generatePackingList({
      trip: { startDate: "2026-07-01", endDate: "2026-07-30", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [medias, campera],
    });

    expect(lista.durationDays).toBe(30);

    // La generación decide QUÉ entra en la lista, no CUÁNTO. Ni siquiera los
    // ítems que escalan por duración llegan con una cantidad puesta: 30 días
    // de viaje no eligen por el usuario cuántas medias lleva.
    const porId = new Map(lista.items.map((e) => [e.item.id, e.qty]));
    expect(porId.get("medias")).toBe(0);
    expect(porId.get("campera")).toBe(0);
  });

  it("no le pone peso a una valija que todavía está vacía", () => {
    const lista = generatePackingList({
      trip: { startDate: "2026-07-01", endDate: "2026-07-05", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [medias, campera],
    });

    expect(lista.totalWeightG).toBe(0);

    // El peso sigue saliendo de weightG × qty, que es lo que se recalcula
    // cuando el usuario elige: con qty en cero, cero.
    for (const entrada of lista.items) {
      expect(entrada.totalWeightG).toBe(entrada.item.weightG * entrada.qty);
    }
  });

  it("igual sigue eligiendo qué ítems entran", () => {
    // Que todo arranque en cero no es lo mismo que no generar nada: el filtro
    // por clima y tipo de viaje es el trabajo real del motor.
    const lista = generatePackingList({
      trip: { startDate: "2026-07-01", endDate: "2026-07-05", tripType: "urbano" },
      climateProfiles: PROFILES,
      climateThresholds: THRESHOLDS,
      catalog: [medias, campera],
    });

    expect(lista.items.map((e) => e.item.id).sort()).toEqual([
      "campera",
      "medias",
    ]);
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

describe("la lluvia (sección 14.12)", () => {
  const LLUVIA: PrecipThreshold[] = [{ id: "lluvia", precipMin: 40 }];

  /** Bali: enero en pleno monzón, julio seco. Cálido los dos. */
  const BALI: ClimateProfile[] = [
    { month: 1, tempMin: 24, tempMax: 31, precipProbability: 62 },
    { month: 7, tempMin: 23, tempMax: 30, precipProbability: 18 },
  ];

  const TODOS = ["frio", "templado", "calido"];

  // Los dos ítems de lluvia tal como quedan en la migración 20261011120000:
  // todas las temperaturas más 'lluvia', y los tipos de viaje de siempre.
  const paraguas = item("calido", "urbano", {
    id: "paraguas",
    name: "Paraguas compacto",
    climateTags: [...TODOS, "lluvia"],
    tripTypeTags: ["urbano", "negocios"],
  });
  const impermeable = item("calido", "urbano", {
    id: "impermeable",
    name: "Impermeable liviano",
    climateTags: [...TODOS, "lluvia"],
    tripTypeTags: ["urbano", "aventura"],
  });
  const short = item("calido", "playa", { id: "short", name: "Short" });
  const CATALOGO = [paraguas, impermeable, short];

  function ids(
    month: "enero" | "julio",
    tripType: TripType,
    precipThresholds: PrecipThreshold[] = LLUVIA,
  ) {
    const fechas =
      month === "enero"
        ? { startDate: "2027-01-10", endDate: "2027-01-17" }
        : { startDate: "2027-07-10", endDate: "2027-07-17" };

    return generatePackingList({
      trip: { ...fechas, tripType },
      climateProfiles: BALI,
      climateThresholds: THRESHOLDS,
      precipThresholds,
      catalog: CATALOGO,
    }).items.map((entrada) => entrada.item.id);
  }

  it("la playa en pleno monzón lleva paraguas e impermeable", () => {
    // El caso que abrió el tema: antes salía sin nada para la lluvia.
    expect(ids("enero", "playa").sort()).toEqual([
      "impermeable",
      "paraguas",
      "short",
    ]);
  });

  it("la misma playa en el mes seco no lleva nada para la lluvia", () => {
    expect(ids("julio", "playa")).toEqual(["short"]);
  });

  it("con lluvia entra en cualquier tipo de viaje", () => {
    // Los negocios llevaban paraguas y ahora suman el impermeable; la aventura
    // llevaba impermeable y suma el paraguas.
    expect(ids("enero", "negocios").sort()).toEqual(["impermeable", "paraguas"]);
    expect(ids("enero", "aventura").sort()).toEqual(["impermeable", "paraguas"]);
  });

  it("suma y nunca resta: la ciudad los lleva aunque no llueva", () => {
    // La lista arranca en cero: un ítem de más no cuesta nada, y uno de menos
    // no se puede agregar a mano.
    expect(ids("julio", "urbano").sort()).toEqual(["impermeable", "paraguas"]);
    expect(ids("julio", "negocios")).toEqual(["paraguas"]);
    expect(ids("julio", "aventura")).toEqual(["impermeable"]);
  });

  it("un ítem que solo es de lluvia no entra en un mes seco", () => {
    const poncho = item("calido", "playa", {
      id: "poncho",
      climateTags: ["lluvia"],
      tripTypeTags: ["playa"],
    });
    const lista = generatePackingList({
      trip: { startDate: "2027-07-10", endDate: "2027-07-17", tripType: "playa" },
      climateProfiles: BALI,
      climateThresholds: THRESHOLDS,
      precipThresholds: LLUVIA,
      catalog: [poncho],
    });

    expect(lista.items).toEqual([]);
  });

  it("informa los buckets de lluvia aparte de los de temperatura", () => {
    const lista = generatePackingList({
      trip: { startDate: "2027-01-10", endDate: "2027-01-17", tripType: "playa" },
      climateProfiles: BALI,
      climateThresholds: THRESHOLDS,
      precipThresholds: LLUVIA,
      catalog: CATALOGO,
    });

    expect(lista.climateBuckets).toEqual(["templado", "calido"]);
    expect(lista.rainBuckets).toEqual(["lluvia"]);
  });

  it("sin umbrales de lluvia la lista sale como antes", () => {
    // Es lo que pasa contra una base sin la migración: la lectura devuelve una
    // lista vacía de umbrales y nada se rompe.
    expect(ids("enero", "playa", [])).toEqual(["short"]);

    const sinElCampo = generatePackingList({
      trip: { startDate: "2027-01-10", endDate: "2027-01-17", tripType: "playa" },
      climateProfiles: BALI,
      climateThresholds: THRESHOLDS,
      catalog: CATALOGO,
    });
    expect(sinElCampo.items.map((entrada) => entrada.item.id)).toEqual(["short"]);
    expect(sinElCampo.rainBuckets).toEqual([]);
  });
});
