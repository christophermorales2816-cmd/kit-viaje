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

/**
 * Espeja la forma del catálogo real: unos pocos ítems de un solo clima, varios
 * que abarcan dos, y genéricos con los tres. El tamaño importa — con cuatro
 * ítems y un límite de cuatro no se puede distinguir "quedó afuera por el
 * orden" de "entró porque no había con qué llenar".
 */
const CATALOGO: PackingCatalogItem[] = [
  item("cepillo", TODOS),
  item("remera", TODOS),
  item("campera", ["frio"]),
  item("short", ["calido"]),
  item("buzo", ["frio", "templado"]),
  item("pantalon", ["frio", "templado"]),
  item("ojotas", ["templado", "calido"]),
  item("lentes", ["templado", "calido"]),
  item("traje-de-bano", ["templado", "calido"]),
];

describe("suggestItemsForBuckets", () => {
  it("no sugiere abrigo en un mes cuyo calor es lo que lo define", () => {
    // Enero en Buenos Aires: 20 a 30 °C. Abarca templado (por la mínima) y
    // cálido (por la máxima), y el buzo está etiquetado [frio, templado], así
    // que matchea. Pero un polar no es lo que define un enero porteño.
    const ids = suggestItemsForBuckets(
      CATALOGO,
      ["templado", "calido"],
      "calido",
      4,
    ).map((i) => i.id);

    expect(ids).not.toContain("buzo");
    expect(ids).toContain("short");
  });

  it("sí sugiere abrigo cuando el frío es lo que define el mes", () => {
    const ids = suggestItemsForBuckets(
      CATALOGO,
      ["frio", "templado"],
      "frio",
      4,
    ).map((i) => i.id);

    expect(ids).toContain("campera");
    expect(ids).toContain("buzo");
    expect(ids).not.toContain("short");
  });

  it("prioriza lo específico sobre lo genérico", () => {
    const sugeridos = suggestItemsForBuckets(CATALOGO, ["frio"], "frio", 3);

    // campera solo sirve con frío; buzo y pantalón, con frío y templado; el
    // cepillo sirve para todo y por eso queda último.
    expect(sugeridos.map((i) => i.id)).toEqual(["campera", "buzo", "pantalon"]);
  });

  it("da listas distintas para climas distintos", () => {
    const frio = suggestItemsForBuckets(CATALOGO, ["frio"], "frio", 2);
    const calor = suggestItemsForBuckets(CATALOGO, ["calido"], "calido", 2);

    expect(frio.map((i) => i.id)).not.toEqual(calor.map((i) => i.id));
    expect(calor[0].id).toBe("short");
  });

  it("incluye lo que sirve para cualquiera de los buckets del mes", () => {
    // Con límite amplio entran los dos lados del rango: el buzo por templado y
    // el short por cálido. Lo que no entra nunca es lo que no toca ningún
    // bucket del mes.
    const ids = suggestItemsForBuckets(
      CATALOGO,
      ["templado", "calido"],
      "templado",
      9,
    ).map((i) => i.id);

    expect(ids).toContain("short");
    expect(ids).toContain("buzo");
    expect(ids).not.toContain("campera");
  });

  it("desempata por orden de catálogo entre ítems igual de específicos", () => {
    // Sin bucket principal la primera clave no aplica y queda a la vista el
    // desempate que este test mide.
    const ids = suggestItemsForBuckets(CATALOGO, TODOS, null, 2).map(
      (i) => i.id,
    );

    expect(ids).toEqual(["campera", "short"]);
  });

  it("respeta el límite", () => {
    expect(suggestItemsForBuckets(CATALOGO, TODOS, "templado", 2)).toHaveLength(
      2,
    );
  });

  it("devuelve vacío sin buckets", () => {
    expect(suggestItemsForBuckets(CATALOGO, [], null, 3)).toEqual([]);
  });

  it("devuelve vacío con un bucket que nadie cubre", () => {
    expect(suggestItemsForBuckets(CATALOGO, ["polar"], "polar", 3)).toEqual([]);
  });

  it("no muta el catálogo recibido", () => {
    const original = CATALOGO.map((i) => i.id);
    suggestItemsForBuckets(CATALOGO, TODOS, "templado", 5);

    expect(CATALOGO.map((i) => i.id)).toEqual(original);
  });
});
