import { describe, expect, it } from "vitest";

import {
  bucketIndexForTemperature,
  orderThresholds,
  resolveClimateBuckets,
} from "@/lib/packing/climate";
import type { ClimateProfile, ClimateThreshold } from "@/lib/packing/types";

/** El seed de la migración 20260826120300 (spec, sección 4). */
const THRESHOLDS: ClimateThreshold[] = [
  { id: "calido", tempMax: null },
  { id: "frio", tempMax: 10 },
  { id: "templado", tempMax: 25 },
];

function profile(month: number, tempMin: number, tempMax: number): ClimateProfile {
  return { month, tempMin, tempMax, precipProbability: 40 };
}

describe("orderThresholds", () => {
  it("ordena de más frío a más cálido con el abierto al final", () => {
    expect(orderThresholds(THRESHOLDS).map((t) => t.id)).toEqual([
      "frio",
      "templado",
      "calido",
    ]);
  });

  it("no muta el array recibido", () => {
    const original = [...THRESHOLDS];
    orderThresholds(THRESHOLDS);
    expect(THRESHOLDS).toEqual(original);
  });
});

describe("bucketIndexForTemperature", () => {
  const ordered = orderThresholds(THRESHOLDS);
  const bucket = (t: number) => ordered[bucketIndexForTemperature(t, ordered)].id;

  it("mapea cada rango a su bucket", () => {
    expect(bucket(-5)).toBe("frio");
    expect(bucket(3)).toBe("frio");
    expect(bucket(18)).toBe("templado");
    expect(bucket(40)).toBe("calido");
  });

  it("trata el límite como inclusive", () => {
    expect(bucket(10)).toBe("frio");
    expect(bucket(10.1)).toBe("templado");
    expect(bucket(25)).toBe("templado");
    expect(bucket(25.1)).toBe("calido");
  });

  it("devuelve -1 si no hay umbrales configurados", () => {
    expect(bucketIndexForTemperature(15, [])).toBe(-1);
  });

  it("cae en el más cálido si falta el bucket abierto", () => {
    const acotados = orderThresholds([
      { id: "frio", tempMax: 10 },
      { id: "templado", tempMax: 25 },
    ]);
    expect(acotados[bucketIndexForTemperature(40, acotados)].id).toBe("templado");
  });
});

describe("resolveClimateBuckets", () => {
  it("un mes enteramente frío resuelve solo frío", () => {
    const { buckets } = resolveClimateBuckets([7], [profile(7, 5, 9)], THRESHOLDS);
    expect(buckets).toEqual(["frio"]);
  });

  it("un mes enteramente templado resuelve solo templado", () => {
    const { buckets } = resolveClimateBuckets([9], [profile(9, 12, 20)], THRESHOLDS);
    expect(buckets).toEqual(["templado"]);
  });

  it("un mes enteramente cálido resuelve solo cálido", () => {
    const { buckets } = resolveClimateBuckets([1], [profile(1, 26, 32)], THRESHOLDS);
    expect(buckets).toEqual(["calido"]);
  });

  it("un mes con noches frías y tardes templadas resuelve los dos", () => {
    const { buckets } = resolveClimateBuckets([10], [profile(10, 8, 20)], THRESHOLDS);
    expect(buckets).toEqual(["frio", "templado"]);
  });

  it("el ejemplo del spec: arranca templado y termina frío", () => {
    const { buckets } = resolveClimateBuckets(
      [4, 5],
      [profile(4, 14, 22), profile(5, 6, 9)],
      THRESHOLDS,
    );
    expect(buckets).toEqual(["frio", "templado"]);
  });

  it("un rango que abarca todo devuelve los tres, de frío a cálido", () => {
    const { buckets } = resolveClimateBuckets([3], [profile(3, 5, 30)], THRESHOLDS);
    expect(buckets).toEqual(["frio", "templado", "calido"]);
  });

  it("no repite un bucket que aportan dos meses", () => {
    const { buckets } = resolveClimateBuckets(
      [6, 7],
      [profile(6, 6, 9), profile(7, 5, 8)],
      THRESHOLDS,
    );
    expect(buckets).toEqual(["frio"]);
  });

  it("sirve con un solo extremo de temperatura cargado", () => {
    const parcial: ClimateProfile = {
      month: 7,
      tempMin: null,
      tempMax: 8,
      precipProbability: null,
    };
    expect(resolveClimateBuckets([7], [parcial], THRESHOLDS).buckets).toEqual(["frio"]);
  });

  it("reporta el mes sin fila en vez de ignorarlo", () => {
    const resultado = resolveClimateBuckets([4, 5], [profile(4, 14, 22)], THRESHOLDS);
    expect(resultado.buckets).toEqual(["templado"]);
    expect(resultado.monthsWithoutData).toEqual([5]);
  });

  it("reporta el mes cuyas temperaturas están las dos en null", () => {
    const vacio: ClimateProfile = {
      month: 5,
      tempMin: null,
      tempMax: null,
      precipProbability: 50,
    };
    const resultado = resolveClimateBuckets([5], [vacio], THRESHOLDS);
    expect(resultado.buckets).toEqual([]);
    expect(resultado.monthsWithoutData).toEqual([5]);
  });

  it("sin umbrales no resuelve nada y reporta todos los meses", () => {
    const resultado = resolveClimateBuckets([7, 8], [profile(7, 5, 9)], []);
    expect(resultado.buckets).toEqual([]);
    expect(resultado.monthsWithoutData).toEqual([7, 8]);
  });
});
