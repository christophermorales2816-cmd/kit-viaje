import { describe, expect, it } from "vitest";

import type { PackingCatalogItem } from "@/lib/packing";

import { suggestItemsForBuckets } from "./suggest-items";

function item(id: string, climateTags: string[]): PackingCatalogItem {
  return {
    id,
    category: "ropa",
    name: id,
    weightG: 100,
    climateTags,
    tripTypeTags: ["urbano"],
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
  };
}

const TODOS = ["frio", "templado", "calido"];

const CATALOGO: PackingCatalogItem[] = [
  item("cepillo", TODOS),
  item("remera", TODOS),
  item("campera", ["frio"]),
  item("short", ["calido"]),
  item("buzo", ["frio", "templado"]),
];

describe("suggestItemsForBuckets", () => {
  it("prioriza lo específico sobre lo genérico", () => {
    const sugeridos = suggestItemsForBuckets(CATALOGO, ["frio"], 3);

    expect(sugeridos.map((i) => i.id)).toEqual(["campera", "buzo", "cepillo"]);
  });

  it("da listas distintas para climas distintos", () => {
    const frio = suggestItemsForBuckets(CATALOGO, ["frio"], 2);
    const calor = suggestItemsForBuckets(CATALOGO, ["calido"], 2);

    expect(frio.map((i) => i.id)).not.toEqual(calor.map((i) => i.id));
    expect(calor[0].id).toBe("short");
  });

  it("incluye lo que sirve para cualquiera de los buckets del mes", () => {
    const ids = suggestItemsForBuckets(CATALOGO, ["templado", "calido"], 5).map(
      (i) => i.id,
    );

    expect(ids).toContain("short");
    expect(ids).toContain("buzo");
    expect(ids).not.toContain("campera");
  });

  it("desempata por orden de catálogo", () => {
    const ids = suggestItemsForBuckets(CATALOGO, TODOS, 2).map((i) => i.id);

    expect(ids).toEqual(["campera", "short"]);
  });

  it("respeta el límite", () => {
    expect(suggestItemsForBuckets(CATALOGO, TODOS, 2)).toHaveLength(2);
  });

  it("devuelve vacío sin buckets", () => {
    expect(suggestItemsForBuckets(CATALOGO, [], 3)).toEqual([]);
  });

  it("devuelve vacío con un bucket que nadie cubre", () => {
    expect(suggestItemsForBuckets(CATALOGO, ["polar"], 3)).toEqual([]);
  });

  it("no muta el catálogo recibido", () => {
    const original = CATALOGO.map((i) => i.id);
    suggestItemsForBuckets(CATALOGO, TODOS, 5);

    expect(CATALOGO.map((i) => i.id)).toEqual(original);
  });
});
