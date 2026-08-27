import { describe, expect, it } from "vitest";

import { calculateBudget, generateBudgetList } from "@/lib/budget/engine";
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
    includeByDefault: true,
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

  it("escala las cantidades por duración, igual que el motor de packing", () => {
    const porId = new Map(lista.map((linea) => [linea.product.id, linea.qty]));
    expect(porId.get("menu")).toBe(7); // uno por día
    expect(porId.get("tango")).toBe(1); // no escala
  });

  it("respeta el tope", () => {
    const corto = generateBudgetList(
      { startDate: "2026-09-01", endDate: "2026-09-30" }, // 30 días
      CATALOGO,
    );
    const sube = corto.find((linea) => linea.product.id === "sube");
    expect(sube?.qty).toBe(20); // 30 días, tope 20
  });

  it("calcula el subtotal como precio × cantidad", () => {
    const menu = lista.find((linea) => linea.product.id === "menu");
    expect(menu?.subtotal).toBe(8500 * 7);
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

  it("deja afuera los productos que no van por default", () => {
    const conAlternativas = [
      product("hotel3", "alojamiento", "Hotel 3 estrellas", 65_000, {
        scalesWithDays: true,
        daysPerUnit: 1,
      }),
      product("hotel4", "alojamiento", "Hotel 4 estrellas", 110_000, {
        scalesWithDays: true,
        daysPerUnit: 1,
        includeByDefault: false,
      }),
      product("hostel", "alojamiento", "Hostel", 22_000, {
        scalesWithDays: true,
        daysPerUnit: 1,
        includeByDefault: false,
      }),
    ];

    const generada = generateBudgetList(VIAJE, conAlternativas);
    expect(generada.map((linea) => linea.product.id)).toEqual(["hotel3"]);
  });

  it("cobra un solo alojamiento, no los tres", () => {
    const conAlternativas = [
      product("hotel3", "alojamiento", "Hotel 3 estrellas", 65_000, {
        scalesWithDays: true,
        daysPerUnit: 1,
      }),
      product("hotel4", "alojamiento", "Hotel 4 estrellas", 110_000, {
        scalesWithDays: true,
        daysPerUnit: 1,
        includeByDefault: false,
      }),
    ];

    const totales = calculateBudget(
      generateBudgetList(VIAJE, conAlternativas),
      selectQuote(QUOTES, "blue"),
    );
    expect(totales.totalBase).toBe(65_000 * 7);
  });

  it("si ningún producto va por default, la lista queda vacía", () => {
    const ninguno = CATALOGO.map((p) => ({ ...p, includeByDefault: false }));
    expect(generateBudgetList(VIAJE, ninguno)).toEqual([]);
  });

  it("calculateBudget no filtra: suma lo que le den", () => {
    // El filtro es de la generación. Si el usuario agrega a mano un producto que
    // no venía por default, el total tiene que incluirlo.
    const agregadoAMano = [
      {
        product: product("hostel", "alojamiento", "Hostel", 22_000, {
          includeByDefault: false,
        }),
        qty: 3,
        subtotal: 66_000,
      },
    ];
    const totales = calculateBudget(agregadoAMano, selectQuote(QUOTES, "blue"));
    expect(totales.totalBase).toBe(66_000);
  });

  it("con una lista vacía de productos no explota", () => {
    expect(generateBudgetList(VIAJE, [])).toEqual([]);
  });

  it("propaga el error de un rango de fechas inválido", () => {
    expect(() =>
      generateBudgetList({ startDate: "2026-09-10", endDate: "2026-09-01" }, CATALOGO),
    ).toThrow(RangeError);
  });

  /**
   * Nota de modelado, no bug del motor: un viaje del 1 al 7 son 7 días pero 6
   * noches. La regla del spec escala por días, así que un hotel con
   * daysPerUnit = 1 va a dar 7. Se resuelve al cargar el catálogo, no acá.
   */
  it("escala el hotel por días, que no es lo mismo que noches", () => {
    const hotel = lista.find((linea) => linea.product.id === "hotel");
    expect(hotel?.qty).toBe(7);
  });
});

describe("calculateBudget", () => {
  const lista = generateBudgetList(VIAJE, CATALOGO);

  it("suma el total en la moneda del destino", () => {
    const totales = calculateBudget(lista, selectQuote(QUOTES, "blue"));
    // 8500×7 + 3200×7 + 350×7 + 65000×7 + 45000×1
    const esperado = (8500 + 3200 + 350 + 65_000) * 7 + 45_000;
    expect(totales.totalBase).toBe(esperado);
    expect(totales.baseCurrency).toBe("ARS");
  });

  it("convierte dividiendo por la cotización elegida", () => {
    const totales = calculateBudget(
      [{ product: product("x", "comida", "X", 104_000), qty: 1, subtotal: 104_000 }],
      selectQuote(QUOTES, "blue"),
    );
    expect(totales.totalConverted).toBe(100); // 104000 / 1040
    expect(totales.convertedCurrency).toBe("USD");
    expect(totales.rate).toBe(1040);
  });

  it("redondea el convertido a dos decimales", () => {
    const totales = calculateBudget(
      [{ product: product("x", "comida", "X", 100_000), qty: 1, subtotal: 100_000 }],
      selectQuote(QUOTES, "blue"),
    );
    expect(totales.totalConverted).toBe(96.15); // 100000/1040 = 96.1538...
  });

  it("cambiar de cotización cambia el total y no toca el de pesos", () => {
    const linea = [
      { product: product("x", "comida", "X", 100_000), qty: 1, subtotal: 100_000 },
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
      { product: product("x", "comida", "X", 100_000), qty: 1, subtotal: 100_000 },
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
      { product: product("ars", "comida", "En pesos", 8500), qty: 1, subtotal: 8500 },
      {
        product: product("usd", "comida", "En dólares", 20, { currency: "USD" }),
        qty: 1,
        subtotal: 20,
      },
    ];
    expect(() => calculateBudget(mezcla, selectQuote(QUOTES, "blue"))).toThrow(/USD/);
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
