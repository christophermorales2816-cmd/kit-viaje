import { describe, expect, it } from "vitest";

import type { ClimateProfile, ClimateThreshold } from "@/lib/packing";

import {
  CALOR_EXIGENTE,
  FRIO_EXIGENTE,
  IDEAL_LLUVIA,
  IDEAL_MAX,
  IDEAL_MIN,
  LLUVIA_ALTA,
  resolveClimateYear,
  resolveSeason,
  summarizeYear,
} from "./climate-year";

const UMBRALES: ClimateThreshold[] = [
  { id: "frio", tempMax: 10 },
  { id: "templado", tempMax: 24 },
  { id: "calido", tempMax: null },
];

function perfil(
  month: number,
  tempMin: number | null,
  tempMax: number | null,
  precipProbability: number | null = 30,
): ClimateProfile {
  return { month, tempMin, tempMax, precipProbability };
}

describe("resolveSeason", () => {
  it("marca difícil un mes con tardes de calor exigente aunque las noches sean templadas", () => {
    expect(resolveSeason(20, CALOR_EXIGENTE, 20)).toBe("dificil");
  });

  it("marca difícil un mes con noches frías aunque las tardes sean agradables", () => {
    expect(resolveSeason(FRIO_EXIGENTE, 18, 20)).toBe("dificil");
  });

  it("marca difícil un mes muy lluvioso aunque la temperatura sea perfecta", () => {
    expect(resolveSeason(15, 22, LLUVIA_ALTA)).toBe("dificil");
  });

  it("marca ideal un mes templado y seco", () => {
    expect(resolveSeason(15, 22, 30)).toBe("ideal");
  });

  it("acepta los límites justos de lo ideal", () => {
    expect(resolveSeason(IDEAL_MIN, IDEAL_MAX, IDEAL_LLUVIA - 1)).toBe("ideal");
  });

  it("degrada a media un mes que no es exigente pero se pasa de lo ideal", () => {
    expect(resolveSeason(15, IDEAL_MAX + 1, 30)).toBe("media");
  });

  it("degrada a media un mes templado con lluvia intermedia", () => {
    expect(resolveSeason(15, 22, IDEAL_LLUVIA)).toBe("media");
  });

  it("devuelve media sin ningún dato de temperatura", () => {
    expect(resolveSeason(null, null, 10)).toBe("media");
  });

  it("no exige el dato que falta: solo la máxima, y es ideal", () => {
    expect(resolveSeason(null, 22, 20)).toBe("ideal");
  });

  it("clasifica igual con un solo dato si ese dato es exigente", () => {
    expect(resolveSeason(null, CALOR_EXIGENTE + 5, null)).toBe("dificil");
  });
});

describe("resolveClimateYear", () => {
  it("devuelve los doce meses con nombre, aunque falten perfiles", () => {
    const año = resolveClimateYear([], UMBRALES);

    expect(año).toHaveLength(12);
    expect(año[0].shortName).toBe("Ene");
    expect(año[0].longName).toBe("Enero");
    expect(año[11].longName).toBe("Diciembre");
    expect(año.every((mes) => mes.season === "media")).toBe(true);
    expect(año[0].buckets).toEqual([]);
    expect(año[0].primaryBucket).toBeNull();
  });

  it("clasifica un enero caluroso como difícil y un abril templado como ideal", () => {
    const año = resolveClimateYear(
      [perfil(1, 20, 30, 30), perfil(4, 14, 22, 30)],
      UMBRALES,
    );

    expect(año[0].season).toBe("dificil");
    expect(año[3].season).toBe("ideal");
  });

  it("da a cada mes sus propios buckets en vez de unir el año entero", () => {
    const año = resolveClimateYear(
      [perfil(1, 20, 30, 30), perfil(7, 8, 15, 30)],
      UMBRALES,
    );

    expect(año[0].buckets).toEqual(["templado", "calido"]);
    expect(año[6].buckets).toEqual(["frio", "templado"]);
  });

  it("elige como bucket principal el que obliga a empacar algo, no el neutro", () => {
    const año = resolveClimateYear(
      [perfil(1, 20, 30, 30), perfil(7, 8, 15, 30)],
      UMBRALES,
    );

    expect(año[0].primaryBucket).toBe("calido");
    expect(año[6].primaryBucket).toBe("frio");
  });

  it("usa templado como principal cuando es el único bucket del mes", () => {
    const año = resolveClimateYear([perfil(4, 14, 22, 30)], UMBRALES);

    expect(año[3].buckets).toEqual(["templado"]);
    expect(año[3].primaryBucket).toBe("templado");
  });
});

describe("summarizeYear", () => {
  it("toma los extremos del año, no los del mes más templado", () => {
    const resumen = summarizeYear(
      resolveClimateYear(
        [perfil(1, 20, 30, 30), perfil(4, 14, 22, 30), perfil(7, 8, 15, 30)],
        UMBRALES,
      ),
    );

    expect(resumen.tempMin).toBe(8);
    expect(resumen.tempMax).toBe(30);
  });

  it("elige como mejor mes el ideal más seco", () => {
    const resumen = summarizeYear(
      resolveClimateYear(
        [perfil(4, 14, 22, 40), perfil(10, 14, 22, 20)],
        UMBRALES,
      ),
    );

    expect(resumen.idealCount).toBe(2);
    expect(resumen.bestMonth?.longName).toBe("Octubre");
  });

  it("no inventa un mejor mes cuando ninguno es ideal", () => {
    const resumen = summarizeYear(
      resolveClimateYear([perfil(1, 20, 32, 30)], UMBRALES),
    );

    expect(resumen.idealCount).toBe(0);
    expect(resumen.bestMonth).toBeNull();
  });

  it("devuelve extremos nulos sin ningún dato", () => {
    const resumen = summarizeYear(resolveClimateYear([], UMBRALES));

    expect(resumen.tempMin).toBeNull();
    expect(resumen.tempMax).toBeNull();
    expect(resumen.bestMonth).toBeNull();
  });
});
