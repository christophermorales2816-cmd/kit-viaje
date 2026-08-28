import { describe, expect, it } from "vitest";

import type { BudgetLineItem } from "@/lib/budget";
import { budgetCsv, csvFilename, packingCsv, toCsv } from "@/lib/export/csv";
import type { TripPackingEntry } from "@/lib/trips/types";

describe("toCsv", () => {
  it("separa con comas y termina las filas con CRLF", () => {
    expect(toCsv([["a", "b"], ["c", "d"]])).toBe("a,b\r\nc,d");
  });

  it("entrecomilla la celda que tiene el separador adentro", () => {
    expect(toCsv([["Remis, corto"]])).toBe('"Remis, corto"');
  });

  it("duplica las comillas de adentro", () => {
    expect(toCsv([['Hotel 3"']])).toBe('"Hotel 3"""');
  });

  it("entrecomilla los saltos de línea en vez de romper la fila", () => {
    expect(toCsv([["dos\nlíneas"]])).toBe('"dos\nlíneas"');
  });

  it("no entrecomilla lo que no lo necesita", () => {
    expect(toCsv([["simple", 42]])).toBe("simple,42");
  });

  it("neutraliza las celdas que Excel tomaría como fórmula", () => {
    // El nombre sigue siendo legible; deja de ser ejecutable.
    expect(toCsv([["=1+1"]])).toBe("'=1+1");
    expect(toCsv([["-500"]])).toBe("'-500");
    expect(toCsv([["@casa"]])).toBe("'@casa");
  });

  it("no toca un número negativo, que llega como number y no como texto", () => {
    expect(toCsv([[-500]])).toBe("'-500");
  });
});

const entrada = (over: Partial<TripPackingEntry["item"]> = {}) => ({
  id: "i1",
  category: "ropa",
  name: "Remera de algodón",
  weightG: 150,
  climateTags: ["templado"],
  tripTypeTags: ["urbano" as const],
  baseQty: 1,
  scalesWithDays: true,
  daysPerUnit: 2,
  maxQty: 10,
  ...over,
});

describe("packingCsv", () => {
  const entries: TripPackingEntry[] = [
    { item: entrada(), qty: 4, checked: true, totalWeightG: 600 },
    {
      item: entrada({ id: "i2", name: "Medias", weightG: 50 }),
      qty: 7,
      checked: false,
      totalWeightG: 350,
    },
  ];

  it("abre con la fila de encabezados", () => {
    expect(packingCsv(entries).split("\r\n")[0]).toBe(
      "Categoría,Ítem,Cantidad,Peso unitario (g),Peso total (g),Listo",
    );
  });

  it("escribe una fila por ítem, con el tildado en castellano", () => {
    const filas = packingCsv(entries).split("\r\n");

    expect(filas).toHaveLength(3);
    expect(filas[1]).toBe("ropa,Remera de algodón,4,150,600,sí");
    expect(filas[2]).toBe("ropa,Medias,7,50,350,no");
  });

  it("con la lista vacía deja solo los encabezados", () => {
    expect(packingCsv([]).split("\r\n")).toHaveLength(1);
  });
});

describe("budgetCsv", () => {
  const items: BudgetLineItem[] = [
    {
      product: {
        id: "p1",
        category: "comida",
        name: "Menú ejecutivo (almuerzo)",
        basePrice: 8500,
        currency: "ARS",
        updatedAt: "2026-08-27T00:00:00.000Z",
        baseQty: 1,
        scalesWithDays: true,
        daysPerUnit: 1,
        maxQty: 30,
      },
      qty: 7,
      subtotal: 59500,
    },
  ];

  it("escribe precio unitario, subtotal y moneda", () => {
    const filas = budgetCsv(items).split("\r\n");

    expect(filas[0]).toBe(
      "Categoría,Gasto,Cantidad,Precio unitario,Subtotal,Moneda",
    );
    expect(filas[1]).toBe("comida,Menú ejecutivo (almuerzo),7,8500,59500,ARS");
  });

  it("no incluye el total convertido: depende de una cotización que no se persiste", () => {
    expect(budgetCsv(items)).not.toMatch(/USD/);
  });
});

describe("csvFilename", () => {
  it("arma un nombre con destino, fecha y qué lista es", () => {
    expect(csvFilename("Buenos Aires", "2026-09-01", "equipaje")).toBe(
      "kit-viaje-buenos-aires-2026-09-01-equipaje.csv",
    );
  });

  it("saca los acentos sin comerse la letra", () => {
    expect(csvFilename("Bogotá", "2026-09-01", "presupuesto")).toContain(
      "bogota",
    );
  });

  it("cae en un nombre usable si el destino no deja nada", () => {
    expect(csvFilename("!!!", "2026-09-01", "equipaje")).toBe(
      "kit-viaje-viaje-2026-09-01-equipaje.csv",
    );
  });
});
