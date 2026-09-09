import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * El viaje se crea para el país que pidió el usuario.
 *
 * Este archivo existe por un bug concreto: `createTrip` llamaba a
 * `getDestination()` sin argumento, o sea que caía siempre al corredor por
 * defecto. Con un solo país daba igual. Con dos, armar un viaje desde la guía
 * de Brasil creaba un viaje a Buenos Aires — precios en pesos, clima argentino
 * y las cuatro cotizaciones argentinas, para alguien que va a Río.
 *
 * Ese bug no rompía nada: no había excepción, ni fila inválida, ni error en
 * los logs. Simplemente salía mal. Por eso el test mira EL ARGUMENTO con el que
 * se llama a `getDestination`, que es lo único que lo distingue.
 *
 * Se mockea el I/O y no la lógica: `createTrip` es la costura entre validación
 * y base, y no hay nada puro que extraerle sin inventar una capa.
 */

const getDestination = vi.fn();
const getDestinationById = vi.fn();
const single = vi.fn();

vi.mock("@/lib/supabase/reference", () => ({
  getDestination: (corridor?: string) => getDestination(corridor),
  getDestinationById: (id: string) => getDestinationById(id),
}));

vi.mock("@/lib/supabase/admin", () => ({
  adminClient: () => ({
    from: () => ({
      insert: () => ({ select: () => ({ single }) }),
    }),
  }),
}));

const { createTrip } = await import("./create");

const RIO = "22222222-2222-4222-8222-222222222222";
const USHUAIA = "33333333-3333-4333-8333-333333333333";

const VIAJE = {
  startDate: "2026-07-10",
  endDate: "2026-07-17",
  tripType: "playa" as const,
  corridor: "brasil",
  destinationId: null,
};

const FILA = {
  id: "11111111-1111-4111-8111-111111111111",
  destination_id: "22222222-2222-4222-8222-222222222222",
  start_date: "2026-07-10",
  end_date: "2026-07-17",
  trip_type: "playa",
  edit_token: "0123456789abcdef0123456789abcdef",
  share_slug: "0123456789abcdef",
};

beforeEach(() => {
  getDestination.mockReset();
  getDestinationById.mockReset();
  single.mockReset();
  getDestination.mockImplementation((corridor: string) => ({
    id: corridor === "brasil" ? RIO : "44444444-4444-4444-8444-444444444444",
    name: corridor === "brasil" ? "Río de Janeiro" : "Buenos Aires",
    corridor,
    baseCurrency: corridor === "brasil" ? "BRL" : "ARS",
    isBase: true,
  }));
  getDestinationById.mockResolvedValue({
    id: USHUAIA,
    name: "Ushuaia",
    corridor: "argentina",
    baseCurrency: "ARS",
    isBase: false,
  });
  single.mockResolvedValue({ data: FILA, error: null });
});

describe("createTrip", () => {
  it("busca el destino del corredor que trae el viaje", async () => {
    await createTrip(VIAJE);

    expect(getDestination).toHaveBeenCalledWith("brasil");
  });

  it("no cae al corredor por defecto para el otro país", async () => {
    await createTrip({ ...VIAJE, corridor: "argentina" });

    expect(getDestination).toHaveBeenCalledWith("argentina");
  });

  it("nunca llama sin corredor", async () => {
    // La forma exacta del bug: `getDestination()` pelado resuelve al default y
    // manda todos los viajes al mismo país sin fallar en ningún lado.
    await createTrip(VIAJE);

    expect(getDestination).not.toHaveBeenCalledWith(undefined);
  });

  it("devuelve los tokens que generó la base", async () => {
    const trip = await createTrip(VIAJE);

    expect(trip.editToken).toBe(FILA.edit_token);
    expect(trip.shareSlug).toBe(FILA.share_slug);
  });

  it("avisa con el detalle de Postgres cuando la inserción falla", async () => {
    single.mockResolvedValue({
      data: null,
      error: { message: "violates foreign key", code: "23503" },
    });

    await expect(createTrip(VIAJE)).rejects.toThrow(/violates foreign key/);
  });
});

/**
 * La ciudad elegida es la que decide el clima.
 *
 * Sin esto el planificador calculaba todo con la ciudad base del corredor: la
 * guía ofrecía Ushuaia y la lista salía con la de Buenos Aires, o sea sin
 * campera de abrigo y con ojotas.
 */
describe("createTrip con una ciudad elegida", () => {
  it("usa la ciudad, no la base del corredor", async () => {
    await createTrip({
      ...VIAJE,
      corridor: "argentina",
      destinationId: USHUAIA,
    });

    expect(getDestinationById).toHaveBeenCalledWith(USHUAIA);
    expect(getDestination).not.toHaveBeenCalled();
  });

  it("cae a la ciudad base solo cuando no se eligió ninguna", async () => {
    await createTrip(VIAJE);

    expect(getDestination).toHaveBeenCalledWith("brasil");
    expect(getDestinationById).not.toHaveBeenCalled();
  });

  it("rechaza una ciudad que no es del país del viaje", async () => {
    // Solo llega con el formulario manipulado, pero el resultado sería un
    // viaje a Ushuaia presentado como si fuera a Brasil.
    await expect(
      createTrip({ ...VIAJE, corridor: "brasil", destinationId: USHUAIA }),
    ).rejects.toThrow(/no pertenece a brasil/i);
  });

  it("no escribe la fila cuando la ciudad es de otro país", async () => {
    await expect(
      createTrip({ ...VIAJE, corridor: "brasil", destinationId: USHUAIA }),
    ).rejects.toThrow();

    expect(single).not.toHaveBeenCalled();
  });
});
