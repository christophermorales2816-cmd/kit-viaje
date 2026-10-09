import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Las escrituras de un viaje: quién puede, qué puede y qué ve si falla.
 *
 * Se mockea el I/O —el viaje que resuelve el token, las listas de referencia y
 * el cliente admin— y se prueba la decisión, que es lo que importa: con un
 * token válido no alcanza para escribir cualquier cosa.
 */

const TOKEN = "0123456789abcdef0123456789abcdef";
const VIAJE = { id: "viaje-1", destinationId: "destino-propio" };
const ITEM = "22222222-2222-4222-8222-222222222222";
const GASTO_PROPIO = "33333333-3333-4333-8333-333333333333";
const GASTO_AJENO = "44444444-4444-4444-8444-444444444444";

const resolveTripByEditToken = vi.fn();
const getProducts = vi.fn();
const getPackingCatalog = vi.fn();
const upsert = vi.fn();
const borrar = vi.fn();

vi.mock("./read", () => ({
  resolveTripByEditToken: (token: string) => resolveTripByEditToken(token),
}));

vi.mock("@/lib/supabase/cached", () => ({
  getProducts: (destino: string) => getProducts(destino),
  getPackingCatalog: () => getPackingCatalog(),
}));

vi.mock("@/lib/supabase/admin", () => {
  // Lo justo de la API de supabase-js que usa mutate.ts.
  const consulta = {
    select: () => consulta,
    eq: () => consulta,
    maybeSingle: async () => ({ data: null, error: null }),
    upsert: (...args: unknown[]) => upsert(...args),
    delete: () => ({
      eq: () => ({ eq: async () => borrar() }),
    }),
  };

  return { adminClient: () => ({ from: () => consulta }) };
});

const { setBudgetItemQty, setPackingItem } = await import("./mutate");

beforeEach(() => {
  vi.clearAllMocks();
  resolveTripByEditToken.mockResolvedValue(VIAJE);
  getProducts.mockImplementation(async (destino: string) =>
    destino === VIAJE.destinationId ? [{ id: GASTO_PROPIO }] : [],
  );
  getPackingCatalog.mockResolvedValue([{ id: ITEM }]);
  upsert.mockResolvedValue({ error: null });
  borrar.mockResolvedValue({ error: null });
});

describe("setBudgetItemQty", () => {
  it("guarda un gasto de la ciudad del viaje", async () => {
    await expect(setBudgetItemQty(TOKEN, GASTO_PROPIO, 2)).resolves.toEqual({
      ok: true,
    });
    expect(upsert).toHaveBeenCalledOnce();
  });

  it("rechaza un gasto de otra ciudad sin tocar la base", async () => {
    // Antes la FK lo dejaba pasar: el producto existía, solo que era de otro
    // país. La fila quedaba guardada sin aparecer nunca en pantalla.
    const resultado = await setBudgetItemQty(TOKEN, GASTO_AJENO, 2);

    expect(resultado.ok).toBe(false);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("sin token válido no escribe nada", async () => {
    resolveTripByEditToken.mockResolvedValue(null);

    const resultado = await setBudgetItemQty(TOKEN, GASTO_PROPIO, 2);

    expect(resultado.ok).toBe(false);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("si la base falla, la pantalla no ve el texto de Postgres", async () => {
    upsert.mockResolvedValue({
      error: {
        code: "23503",
        message:
          'insert violates foreign key constraint "trip_budget_items_product_id_fkey"',
      },
    });
    vi.spyOn(console, "error").mockImplementation(() => {});

    const resultado = await setBudgetItemQty(TOKEN, GASTO_PROPIO, 2);

    expect(resultado.ok).toBe(false);
    expect(JSON.stringify(resultado)).not.toContain("fkey");
    expect(JSON.stringify(resultado)).not.toContain("violates");
  });
});

describe("setPackingItem", () => {
  it("tilda un ítem del catálogo", async () => {
    await expect(
      setPackingItem(TOKEN, ITEM, { checked: true }),
    ).resolves.toEqual({ ok: true });
  });

  it("rechaza un ítem que no está en el catálogo", async () => {
    const resultado = await setPackingItem(
      TOKEN,
      "55555555-5555-4555-8555-555555555555",
      { qty: 1 },
    );

    expect(resultado.ok).toBe(false);
    expect(upsert).not.toHaveBeenCalled();
  });

  it("no acepta un tilde que no es booleano", async () => {
    // El tipo de TypeScript no llega al cable: la Server Action puede recibir
    // cualquier cosa desde afuera.
    const resultado = await setPackingItem(TOKEN, ITEM, {
      checked: "true" as unknown as boolean,
    });

    expect(resultado.ok).toBe(false);
    expect(upsert).not.toHaveBeenCalled();
  });
});
