import { describe, expect, it } from "vitest";

import { byCatalogEntry, compareCatalogEntries } from "@/lib/catalog-order";

const entry = (category: string, name: string, id = "z") => ({
  id,
  category,
  name,
});

describe("compareCatalogEntries", () => {
  it("ordena por categoría antes que por nombre", () => {
    // "Zapatillas" en calzado va antes que "Abrigo" en ropa.
    expect(
      compareCatalogEntries(entry("calzado", "Zapatillas"), entry("ropa", "Abrigo")),
    ).toBeLessThan(0);
  });

  it("ordena por nombre dentro de la misma categoría", () => {
    expect(
      compareCatalogEntries(entry("ropa", "Abrigo"), entry("ropa", "Bufanda")),
    ).toBeLessThan(0);
  });

  it("desempata por id para que el orden sea total", () => {
    const a = entry("ropa", "Remera", "a");
    const b = entry("ropa", "Remera", "b");

    expect(compareCatalogEntries(a, b)).toBeLessThan(0);
    expect(compareCatalogEntries(a, a)).toBe(0);
  });

  it("ordena los acentos como el castellano y no por code point", () => {
    // Con una comparación binaria "Ñ" (U+00D1) caería después de "Z".
    const ordenado = [entry("a", "Zapatos"), entry("a", "Ñandú")]
      .sort(compareCatalogEntries)
      .map((e) => e.name);

    expect(ordenado).toEqual(["Ñandú", "Zapatos"]);
  });
});

describe("byCatalogEntry", () => {
  it("ordena estructuras que envuelven la entrada de catálogo", () => {
    const lineas = [
      { qty: 1, product: entry("transporte", "Remis", "1") },
      { qty: 2, product: entry("comida", "Café", "2") },
    ];

    expect(
      lineas.sort(byCatalogEntry((linea) => linea.product)).map((l) => l.qty),
    ).toEqual([2, 1]);
  });
});
