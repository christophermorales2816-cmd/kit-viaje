import { describe, expect, it } from "vitest";

import {
  toBudgetLine,
  calculateBudget,
  generateBudgetList,
} from "@/lib/budget/engine";
import { selectQuote } from "@/lib/budget/quotes";
import type { BudgetProduct, ExchangeQuote } from "@/lib/budget/types";

function quote(
  id: ExchangeQuote["id"],
  buy: number,
  sell: number,
): ExchangeQuote {
  return {
    id,
    label: id.toUpperCase(),
    baseCurrency: "ARS",
    quoteCurrency: "USD",
    buy,
    sell,
    updatedAt: "2026-08-26T12:00:00.000Z",
  };
}

const QUOTES: ExchangeQuote[] = [
  quote("oficial", 1000, 1050),
  quote("blue", 1040, 1060),
  quote("mep", 1030, 1050),
  quote("ccl", 1035, 1055),
];

function product(
  id: string,
  category: string,
  name: string,
  basePrice: number,
  overrides: Partial<BudgetProduct> = {},
): BudgetProduct {
  return {
    id,
    category,
    name,
    basePrice,
    currency: "ARS",
    updatedAt: "2026-08-20T12:00:00.000Z",
    baseQty: 1,
    scalesWithDays: false,
    daysPerUnit: null,
    maxQty: null,
    ...overrides,
  };
}

/** Las filas de ejemplo de la sección 5 del spec. */
const CATALOGO: BudgetProduct[] = [
  product("menu", "comida", "Menú ejecutivo (almuerzo)", 8500, {
    scalesWithDays: true,
    daysPerUnit: 1,
  }),
  product("cafe", "comida", "Café con leche + medialuna", 3200, {
    scalesWithDays: true,
    daysPerUnit: 1,
  }),
  product("sube", "transporte", "Viaje en SUBE", 350, {
    scalesWithDays: true,
    daysPerUnit: 1,
    maxQty: 20,
  }),
  product("hotel", "alojamiento", "Hotel 3★, noche", 65_000, {
    scalesWithDays: true,
    daysPerUnit: 1,
  }),
  product("tango", "entretenimiento", "Entrada show de tango", 45_000),
];

const VIAJE = { startDate: "2026-09-01", endDate: "2026-09-07" }; // 7 días

describe("generateBudgetList", () => {
  const lista = generateBudgetList(VIAJE, CATALOGO);

  it("arranca con una lista, no vacía", () => {
    expect(lista).toHaveLength(CATALOGO.length);
  });

  it("genera todo en cero, igual que el motor de packing", () => {
    const porId = new Map(lista.map((linea) => [linea.product.id, linea.qty]));
    expect(porId.get("menu")).toBe(0);
    expect(porId.get("tango")).toBe(0);
  });

  it("no llega con un subtotal que el usuario no eligió", () => {
    const menu = lista.find((linea) => linea.product.id === "menu");
    expect(menu?.subtotal).toBe(0);
  });

  it("la duración deja de mover las cantidades generadas", () => {
    // Antes, 30 días llenaban la SUBE hasta su tope de 20. Ahora la duración
    // define qué se puede necesitar, no cuánto se compra.
    const largo = generateBudgetList(
      { startDate: "2026-09-01", endDate: "2026-09-30" }, // 30 días
      CATALOGO,
    );

    expect(largo.map((linea) => linea.qty)).toEqual(lista.map(() => 0));
  });

  it("sí calcula el subtotal como precio × cantidad al elegir", () => {
    // La aritmética no cambió, solo el punto de partida: es la misma cuenta
    // que corre cuando el usuario sube la cantidad en el dashboard.
    expect(toBudgetLine(CATALOGO[0], 7).subtotal).toBe(
      CATALOGO[0].basePrice * 7,
    );
  });

  it("ordena por categoría y después por nombre", () => {
    expect(lista.map((linea) => linea.product.category)).toEqual([
      "alojamiento",
      "comida",
      "comida",
      "entretenimiento",
      "transporte",
    ]);
    expect(lista[1].product.name).toBe("Café con leche + medialuna");
  });

  it("con una lista vacía de productos no explota", () => {
    expect(generateBudgetList(VIAJE, [])).toEqual([]);
  });

  it("propaga el error de un rango de fechas inválido", () => {
    expect(() =>
      generateBudgetList(
        { startDate: "2026-09-10", endDate: "2026-09-01" },
        CATALOGO,
      ),
    ).toThrow(RangeError);
  });

  it("igual sigue armando la lista completa del destino", () => {
    // Que todo arranque en cero no es lo mismo que no generar nada.
    expect(lista.map((linea) => linea.product.id).sort()).toEqual(
      CATALOGO.map((p) => p.id).sort(),
    );
  });
});

describe("calculateBudget", () => {
  const lista = generateBudgetList(VIAJE, CATALOGO);

  it("arranca en cero, porque todavía no se eligió nada", () => {
    const totales = calculateBudget(lista, selectQuote(QUOTES, "blue"));

    expect(totales.totalBase).toBe(0);
    expect(totales.baseCurrency).toBe("ARS");
  });

  it("suma el total en la moneda del destino con cantidades elegidas", () => {
    // El caso que importa después de que el usuario arma su viaje: la suma es
    // la misma de siempre.
    const elegido = [
      toBudgetLine(CATALOGO[0], 7),
      toBudgetLine(CATALOGO[4], 1),
    ];
    const totales = calculateBudget(elegido, selectQuote(QUOTES, "blue"));

    expect(totales.totalBase).toBe(8500 * 7 + 45_000);
    expect(totales.baseCurrency).toBe("ARS");
  });

  it("convierte dividiendo por la cotización elegida", () => {
    const totales = calculateBudget(
      [
        {
          product: product("x", "comida", "X", 104_000),
          qty: 1,
          subtotal: 104_000,
        },
      ],
      selectQuote(QUOTES, "blue"),
    );
    expect(totales.totalConverted).toBe(100); // 104000 / 1040
    expect(totales.convertedCurrency).toBe("USD");
    expect(totales.rate).toBe(1040);
  });

  it("redondea el convertido a dos decimales", () => {
    const totales = calculateBudget(
      [
        {
          product: product("x", "comida", "X", 100_000),
          qty: 1,
          subtotal: 100_000,
        },
      ],
      selectQuote(QUOTES, "blue"),
    );
    expect(totales.totalConverted).toBe(96.15); // 100000/1040 = 96.1538...
  });

  it("cambiar de cotización cambia el total y no toca el de pesos", () => {
    const linea = [
      {
        product: product("x", "comida", "X", 100_000),
        qty: 1,
        subtotal: 100_000,
      },
    ];
    const resultados = (["oficial", "blue", "mep", "ccl"] as const).map((id) =>
      calculateBudget(linea, selectQuote(QUOTES, id)),
    );

    expect(resultados.map((r) => r.totalBase)).toEqual([
      100_000, 100_000, 100_000, 100_000,
    ]);
    expect(resultados.map((r) => r.totalConverted)).toEqual([
      100, 96.15, 97.09, 96.62,
    ]);
  });

  it("el oficial da más dólares que el blue, con la brecha del spec", () => {
    const linea = [
      {
        product: product("x", "comida", "X", 100_000),
        qty: 1,
        subtotal: 100_000,
      },
    ];
    const oficial = calculateBudget(linea, selectQuote(QUOTES, "oficial"));
    const blue = calculateBudget(linea, selectQuote(QUOTES, "blue"));
    expect(oficial.totalConverted).toBeGreaterThan(blue.totalConverted);
  });

  it("no acumula error de punto flotante", () => {
    const centavos = [
      { product: product("a", "comida", "A", 0.1), qty: 1, subtotal: 0.1 },
      { product: product("b", "comida", "B", 0.2), qty: 1, subtotal: 0.2 },
    ];
    const totales = calculateBudget(centavos, selectQuote(QUOTES, "oficial"));
    expect(totales.totalBase).toBe(0.3);
  });

  it("una lista vacía da cero, no NaN", () => {
    const totales = calculateBudget([], selectQuote(QUOTES, "blue"));
    expect(totales.totalBase).toBe(0);
    expect(totales.totalConverted).toBe(0);
  });

  it("rechaza mezclar monedas en vez de sumar peras con manzanas", () => {
    const mezcla = [
      {
        product: product("ars", "comida", "En pesos", 8500),
        qty: 1,
        subtotal: 8500,
      },
      {
        product: product("usd", "comida", "En dólares", 20, {
          currency: "USD",
        }),
        qty: 1,
        subtotal: 20,
      },
    ];
    expect(() => calculateBudget(mezcla, selectQuote(QUOTES, "blue"))).toThrow(
      /USD/,
    );
  });

  it("no muta las líneas que recibe", () => {
    const lineas = generateBudgetList(VIAJE, CATALOGO);
    const copia = structuredClone(lineas);
    calculateBudget(lineas, selectQuote(QUOTES, "blue"));
    expect(lineas).toEqual(copia);
  });

  it("es determinístico: mismas entradas, mismo resultado", () => {
    const blue = selectQuote(QUOTES, "blue");
    expect(calculateBudget(lista, blue)).toEqual(calculateBudget(lista, blue));
  });
});
