import { describe, expect, it } from "vitest";

import { generatePackingList } from "./engine";
import type {
  ClimateProfile,
  ClimateThreshold,
  PackingCatalogItem,
} from "./types";

/**
 * La regla que este proyecto no puede romper: la ropa la decide la CIUDAD.
 *
 * Nace de un pedido literal — "no tiene sentido recomendarle equipaje de nieve
 * para Río, ni sandalias y bloqueador si va a Ushuaia"— y de dos causas
 * distintas que había que arreglar juntas:
 *
 * 1. El viaje no guardaba la ciudad, así que todo se calculaba con la ciudad
 *    base del país. Eso se arregla en `createTrip`.
 * 2. El bucket 'templado' iba de 10 a 25 grados, o sea que una noche de 23 en
 *    Río entraba en el mismo cajón que una de 12 en Bariloche, y arrastraba el
 *    buzo polar. Eso se arregla partiendo el bucket en 'fresco' y 'templado'.
 *
 * El test usa los MISMOS umbrales y etiquetas que siembra la migración: si
 * alguien los cambia sin pensar, esto falla antes que un usuario reciba una
 * campera para el Amazonas.
 */

const UMBRALES: ClimateThreshold[] = [
  { id: "frio", tempMax: 10 },
  { id: "fresco", tempMax: 18 },
  { id: "templado", tempMax: 25 },
  { id: "calido", tempMax: null },
];

function item(
  id: string,
  name: string,
  climateTags: string[],
): PackingCatalogItem {
  return {
    id,
    category: "ropa",
    name,
    weightG: 300,
    climateTags,
    tripTypeTags: ["aventura", "playa", "urbano", "negocios"],
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
  };
}

/** Espeja el catálogo real después del reetiquetado de la migración. */
const CATALOGO: PackingCatalogItem[] = [
  item("campera", "Campera de abrigo", ["frio"]),
  item("bufanda", "Bufanda y gorro de lana", ["frio"]),
  item("buzo", "Buzo o polar", ["frio", "fresco"]),
  item("botas", "Botas de trekking", ["frio", "fresco"]),
  item("remera", "Remera de algodón", ["templado", "calido"]),
  item("ojotas", "Ojotas", ["templado", "calido"]),
  item("protector", "Protector solar FPS 50", ["templado", "calido"]),
  item("short", "Short o bermuda", ["calido"]),
  item("pasaporte", "Pasaporte o DNI", [
    "frio",
    "fresco",
    "templado",
    "calido",
  ]),
];

function mes(month: number, tempMin: number, tempMax: number): ClimateProfile {
  return { month, tempMin, tempMax, precipProbability: 40 };
}

function listaPara(
  profile: ClimateProfile,
  startDate: string,
  endDate: string,
) {
  return generatePackingList({
    trip: { startDate, endDate, tripType: "aventura" },
    climateProfiles: [profile],
    climateThresholds: UMBRALES,
    catalog: CATALOGO,
  }).items.map((linea) => linea.item.id);
}

const ABRIGO = ["campera", "bufanda", "buzo", "botas"];
const PLAYA = ["ojotas", "protector", "short"];

describe("la lista depende de la ciudad, no del país", () => {
  it("Ushuaia en julio no lleva nada de playa", () => {
    const ids = listaPara(mes(7, -1.3, 3.9), "2026-07-10", "2026-07-17");

    expect(ids).toContain("campera");
    for (const playero of PLAYA) expect(ids).not.toContain(playero);
  });

  it("Ushuaia en pleno verano tampoco lleva ojotas ni protector", () => {
    // 5,9 a 14,5: es su mes más cálido y sigue siendo frío + fresco.
    const ids = listaPara(mes(1, 5.9, 14.5), "2026-01-10", "2026-01-17");

    expect(ids).toContain("buzo");
    for (const playero of PLAYA) expect(ids).not.toContain(playero);
  });

  it("Río en enero no lleva NADA de abrigo", () => {
    // El bug original: 23,3 de mínima caía en 'templado', que llegaba hasta 25,
    // y arrastraba el buzo polar y las botas de trekking a un enero de 30 °C.
    const ids = listaPara(mes(1, 23.3, 30.2), "2026-01-10", "2026-01-17");

    expect(ids).toContain("short");
    for (const abrigado of ABRIGO) expect(ids).not.toContain(abrigado);
  });

  it("Manaos no lleva abrigo en ningún mes del año", () => {
    for (const [min, max] of [
      [22.8, 31.9],
      [23.7, 31.0],
      [23.6, 30.9],
    ]) {
      const ids = listaPara(mes(7, min, max), "2026-07-10", "2026-07-17");
      for (const abrigado of ABRIGO) expect(ids).not.toContain(abrigado);
    }
  });

  it("Salta en julio lleva las dos cosas, y está bien", () => {
    // 4,6 de mínima y 21,9 de máxima: amanece helando y a la tarde hay 22.
    // Recortar una de las dos puntas sería perder información real.
    const ids = listaPara(mes(7, 4.6, 21.9), "2026-07-10", "2026-07-17");

    expect(ids).toContain("campera");
    expect(ids).toContain("remera");
  });

  it("dos ciudades del mismo país en el mismo mes dan listas distintas", () => {
    // Es la frase corta de todo esto: sin ciudad, las dos daban lo mismo.
    const ushuaia = listaPara(mes(1, 5.9, 14.5), "2026-01-10", "2026-01-17");
    const buenosAires = listaPara(
      mes(1, 20.4, 30.4),
      "2026-01-10",
      "2026-01-17",
    );

    expect(ushuaia).not.toEqual(buenosAires);
    expect(ushuaia).toContain("campera");
    expect(buenosAires).toContain("short");
  });

  it("lo genérico va siempre, vaya donde vaya", () => {
    for (const [min, max] of [
      [-1.3, 3.9],
      [23.3, 30.2],
    ]) {
      expect(listaPara(mes(1, min, max), "2026-01-10", "2026-01-17")).toContain(
        "pasaporte",
      );
    }
  });
});
