import { describe, expect, it } from "vitest";

import {
  mapClimateProfile,
  mapClimateThreshold,
  mapDestination,
  mapPackingCatalogItem,
  mapProduct,
  toNullableNumber,
  toNumber,
} from "@/lib/supabase/mappers";

describe("normalización de numeric", () => {
  it("acepta el numeric como número o como string", () => {
    // PostgREST puede serializar numeric de las dos formas.
    expect(toNumber(8500, "base_price")).toBe(8500);
    expect(toNumber("8500", "base_price")).toBe(8500);
    expect(toNumber("8500.50", "base_price")).toBe(8500.5);
  });

  it("acepta negativos y cero", () => {
    expect(toNumber("-3.5", "temp_min")).toBe(-3.5);
    expect(toNumber("0", "temp_min")).toBe(0);
  });

  it("falla nombrando el campo cuando no es un número", () => {
    expect(() => toNumber("ocho mil", "base_price")).toThrow(/base_price/);
    expect(() => toNumber(Number.NaN, "base_price")).toThrow(TypeError);
  });

  it("rechaza el string vacío en vez de leerlo como cero", () => {
    // Number("") es 0. Un precio vacío convertido en 0 sería un producto
    // gratis, y un temp_min vacío caería en el bucket 'frio'.
    expect(() => toNumber("", "base_price")).toThrow(/vacío/);
    expect(() => toNumber("   ", "temp_min")).toThrow(/vacío/);
    expect(() => toNullableNumber("", "temp_max")).toThrow(/vacío/);
  });

  it("deja pasar el null solo en los campos que lo permiten", () => {
    expect(toNullableNumber(null, "temp_max")).toBeNull();
    expect(toNullableNumber("25", "temp_max")).toBe(25);
  });
});

describe("mapDestination", () => {
  it("pasa a camelCase", () => {
    expect(
      mapDestination({
        id: "a1",
        name: "Buenos Aires",
        corridor: "argentina",
        base_currency: "ARS",
      }),
    ).toEqual({
      id: "a1",
      name: "Buenos Aires",
      corridor: "argentina",
      baseCurrency: "ARS",
    });
  });
});

describe("mapClimateProfile", () => {
  it("convierte los numeric que llegan como string", () => {
    expect(
      mapClimateProfile({
        month: 7,
        temp_min: "7.6",
        temp_max: "15.4",
        precip_probability: "25",
      }),
    ).toEqual({ month: 7, tempMin: 7.6, tempMax: 15.4, precipProbability: 25 });
  });

  it("mantiene los nulls, que el motor sabe manejar", () => {
    expect(
      mapClimateProfile({
        month: 3,
        temp_min: null,
        temp_max: null,
        precip_probability: null,
      }),
    ).toEqual({ month: 3, tempMin: null, tempMax: null, precipProbability: null });
  });
});

describe("mapClimateThreshold", () => {
  it("conserva el null de 'calido' como sin límite superior", () => {
    expect(mapClimateThreshold({ id: "calido", temp_max: null })).toEqual({
      id: "calido",
      tempMax: null,
    });
  });
});

describe("mapPackingCatalogItem", () => {
  const fila = {
    id: "b1",
    category: "ropa",
    name: "Campera de abrigo",
    weight_g: 900,
    climate_tags: ["frio"],
    trip_type_tags: ["urbano", "negocios"],
    base_qty: 1,
    scales_with_days: false,
    days_per_unit: null,
    max_qty: null,
  };

  it("traduce la fila al ítem del motor", () => {
    expect(mapPackingCatalogItem(fila)).toEqual({
      id: "b1",
      category: "ropa",
      name: "Campera de abrigo",
      weightG: 900,
      climateTags: ["frio"],
      tripTypeTags: ["urbano", "negocios"],
      baseQty: 1,
      scalesWithDays: false,
      daysPerUnit: null,
      maxQty: null,
    });
  });

  it("rechaza un tipo de viaje fuera del enum nombrando el ítem", () => {
    expect(() =>
      mapPackingCatalogItem({ ...fila, trip_type_tags: ["urbano", "safari"] }),
    ).toThrow(/Campera de abrigo[\s\S]*safari/);
  });

  it("no valida los climate_tags: los buckets son parametrizables", () => {
    const conBucketNuevo = { ...fila, climate_tags: ["glacial"] };
    expect(mapPackingCatalogItem(conBucketNuevo).climateTags).toEqual(["glacial"]);
  });
});

describe("mapProduct", () => {
  it("traduce la fila al producto del motor de presupuesto", () => {
    expect(
      mapProduct({
        id: "c1",
        category: "comida",
        name: "Menú ejecutivo (almuerzo)",
        base_price: "8500.00",
        currency: "ARS",
        updated_at: "2026-08-27T12:00:00.000Z",
        include_by_default: true,
        base_qty: 1,
        scales_with_days: true,
        days_per_unit: 1,
        max_qty: 30,
      }),
    ).toEqual({
      id: "c1",
      category: "comida",
      name: "Menú ejecutivo (almuerzo)",
      basePrice: 8500,
      currency: "ARS",
      updatedAt: "2026-08-27T12:00:00.000Z",
      includeByDefault: true,
      baseQty: 1,
      scalesWithDays: true,
      daysPerUnit: 1,
      maxQty: 30,
    });
  });
});
