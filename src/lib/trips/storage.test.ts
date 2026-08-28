import { describe, expect, it } from "vitest";

import {
  MAX_RECENT_TRIPS,
  RECENT_TRIPS_KEY,
  forgetTrip,
  readRecentTrips,
  rememberTrip,
  upsertRecentTrip,
  writeRecentTrips,
  type RecentTrip,
} from "@/lib/trips/storage";

/** localStorage de mentira: un Map con la misma superficie que usa el módulo. */
function fakeStorage(inicial?: string) {
  const datos = new Map<string, string>();

  if (inicial !== undefined) datos.set(RECENT_TRIPS_KEY, inicial);

  return {
    getItem: (key: string) => datos.get(key) ?? null,
    setItem: (key: string, value: string) => void datos.set(key, value),
    raw: () => datos.get(RECENT_TRIPS_KEY),
  };
}

const viaje = (id: string): RecentTrip => ({
  id,
  destinationName: "Buenos Aires",
  editToken: `token-${id}`,
});

describe("readRecentTrips", () => {
  it("devuelve vacío cuando no hay nada guardado", () => {
    expect(readRecentTrips(fakeStorage())).toEqual([]);
  });

  it("lee lo que escribió writeRecentTrips", () => {
    const storage = fakeStorage();
    writeRecentTrips(storage, [viaje("a"), viaje("b")]);

    expect(readRecentTrips(storage)).toEqual([viaje("a"), viaje("b")]);
  });

  it("no tira con JSON corrupto", () => {
    expect(readRecentTrips(fakeStorage("{no es json"))).toEqual([]);
  });

  it("no tira si lo guardado no es un array", () => {
    expect(readRecentTrips(fakeStorage('{"id":"a"}'))).toEqual([]);
  });

  it("descarta las entradas con la forma equivocada y conserva el resto", () => {
    const storage = fakeStorage(
      JSON.stringify([viaje("a"), { id: "b" }, null, "c", viaje("d")]),
    );

    expect(readRecentTrips(storage).map((t) => t.id)).toEqual(["a", "d"]);
  });

  it("descarta una entrada con token vacío: no lleva a ningún lado", () => {
    const storage = fakeStorage(
      JSON.stringify([{ ...viaje("a"), editToken: "" }]),
    );

    expect(readRecentTrips(storage)).toEqual([]);
  });

  it("devuelve vacío si el storage tira al leer", () => {
    const roto = {
      getItem() {
        throw new Error("SecurityError");
      },
    };

    expect(readRecentTrips(roto)).toEqual([]);
  });
});

describe("upsertRecentTrip", () => {
  it("pone el viaje nuevo primero", () => {
    const lista = upsertRecentTrip([viaje("a")], viaje("b"));

    expect(lista.map((t) => t.id)).toEqual(["b", "a"]);
  });

  it("no duplica: mueve el existente al frente", () => {
    const lista = upsertRecentTrip([viaje("a"), viaje("b")], viaje("b"));

    expect(lista.map((t) => t.id)).toEqual(["b", "a"]);
  });

  it("actualiza los datos del viaje que ya estaba", () => {
    const renombrado = { ...viaje("a"), destinationName: "Montevideo" };
    const lista = upsertRecentTrip([viaje("a")], renombrado);

    expect(lista).toEqual([renombrado]);
  });

  it("corta en el tope y descarta el más viejo", () => {
    const llena = Array.from({ length: MAX_RECENT_TRIPS }, (_, i) =>
      viaje(`v${i}`),
    );
    const lista = upsertRecentTrip(llena, viaje("nuevo"));

    expect(lista).toHaveLength(MAX_RECENT_TRIPS);
    expect(lista[0].id).toBe("nuevo");
    // El último de la lista llena era el más viejo.
    expect(lista.map((t) => t.id)).not.toContain(`v${MAX_RECENT_TRIPS - 1}`);
  });
});

describe("rememberTrip / forgetTrip", () => {
  it("guarda y devuelve la lista actualizada", () => {
    const storage = fakeStorage();

    rememberTrip(storage, viaje("a"));
    const lista = rememberTrip(storage, viaje("b"));

    expect(lista.map((t) => t.id)).toEqual(["b", "a"]);
    expect(readRecentTrips(storage).map((t) => t.id)).toEqual(["b", "a"]);
  });

  it("abrir dos veces el mismo viaje deja una sola entrada", () => {
    const storage = fakeStorage();

    rememberTrip(storage, viaje("a"));
    rememberTrip(storage, viaje("a"));

    expect(readRecentTrips(storage)).toHaveLength(1);
  });

  it("olvida solo el viaje pedido", () => {
    const storage = fakeStorage();
    rememberTrip(storage, viaje("a"));
    rememberTrip(storage, viaje("b"));

    expect(forgetTrip(storage, "a").map((t) => t.id)).toEqual(["b"]);
  });

  it("olvidar algo que no está no rompe nada", () => {
    const storage = fakeStorage();
    rememberTrip(storage, viaje("a"));

    expect(forgetTrip(storage, "z").map((t) => t.id)).toEqual(["a"]);
  });
});
