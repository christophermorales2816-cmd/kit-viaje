import { describe, expect, it } from "vitest";

import {
  type BaseDeLugares,
  BYTES_POR_FILA,
  cargarLugares,
  FILAS_POR_TANDA,
  MB,
  megas,
  TAMANO_MAXIMO,
} from "./carga";
import type { FilaDeLugar } from "./extracto";

function fila(plato: string, n: number): FilaDeLugar {
  return {
    plato,
    osm: `node/${n}`,
    celda: "356_1397",
    lugar: {
      id: `node/${n}`,
      nombre: `Lugar ${n}`,
      nombreLatino: null,
      lat: 35.68,
      lon: 139.76,
      tipo: "comida",
      direccion: null,
      horario: null,
      web: null,
      telefono: null,
      verificado: null,
      editado: null,
    },
  };
}

/** Una base de mentira que anota lo que le piden. */
function baseFalsa(anteriores: number | null, ocupa = 120 * MB) {
  const pasos: string[] = [];
  const subidas: number[] = [];

  const base: BaseDeLugares = {
    tamano: async () => ocupa,
    lugaresAnteriores: async () => anteriores,
    subir: async (_pais, filas) => {
      pasos.push("subir");
      subidas.push(filas.length);
    },
    borrarAnteriores: async (_pais, corrida) => {
      pasos.push(`borrar antes de ${corrida}`);
    },
    registrar: async ({ lugares, datosDel }) => {
      pasos.push(`registrar ${lugares} del ${datosDel}`);
    },
  };

  return { base, pasos, subidas };
}

const FECHAS = {
  datosDel: new Date("2026-11-10T20:21:02Z"),
  corrida: new Date("2026-11-11T07:23:00Z"),
};

describe("cargarLugares", () => {
  it("sube de a tandas y recién al final borra lo viejo y anota la fecha", async () => {
    const { base, pasos, subidas } = baseFalsa(1000);
    // 1200 lugares, uno de ellos en dos platos.
    const filas = [
      ...Array.from({ length: 1200 }, (_, n) => fila("ramen", n + 1)),
      fila("gyoza", 1),
    ];

    expect(await cargarLugares(base, "japon", filas, FECHAS)).toEqual({
      filas: 1201,
      lugares: 1200,
    });
    expect(subidas).toEqual([FILAS_POR_TANDA, FILAS_POR_TANDA, 201]);
    expect(pasos.slice(-2)).toEqual([
      "borrar antes de 2026-11-11T07:23:00.000Z",
      "registrar 1200 del 2026-11-10T20:21:02.000Z",
    ]);
  });

  it("la primera vez carga sin comparar con nada", async () => {
    const { base, pasos } = baseFalsa(null);

    await cargarLugares(base, "japon", [fila("ramen", 1)], FECHAS);

    expect(pasos).toContain("registrar 1 del 2026-11-10T20:21:02.000Z");
  });

  it("un extracto sin lugares no borra el mapa", async () => {
    const { base, pasos } = baseFalsa(null);

    await expect(cargarLugares(base, "japon", [], FECHAS)).rejects.toThrow(
      "no trajo ningún lugar",
    );
    expect(pasos).toEqual([]);
  });

  it("si trae menos de la mitad que la vez anterior, no toca nada", async () => {
    const { base, pasos } = baseFalsa(1000);
    const pocas = Array.from({ length: 499 }, (_, n) => fila("ramen", n + 1));

    await expect(cargarLugares(base, "japon", pocas, FECHAS)).rejects.toThrow(
      "Parece roto",
    );
    expect(pasos).toEqual([]);

    // A propósito, sí.
    await cargarLugares(base, "japon", pocas, {
      ...FECHAS,
      aceptarMenos: true,
    });
    expect(pasos).toContain("registrar 499 del 2026-11-10T20:21:02.000Z");
  });

  describe("el tamaño de la base", () => {
    const muchas = Array.from({ length: 10_000 }, (_, n) =>
      fila("ramen", n + 1),
    );
    const loQueSuman = muchas.length * BYTES_POR_FILA;

    it("no sube un país que la llevaría más allá del tope, y dice por qué", async () => {
      const { base, pasos } = baseFalsa(null, TAMANO_MAXIMO - loQueSuman + 1);

      await expect(
        cargarLugares(base, "brasil", muchas, FECHAS),
      ).rejects.toThrow(
        "brasil: la base ocupa 390 MB y esta carga puede sumarle hasta 10 MB: pasaría de 400 MB",
      );
      expect(pasos).toEqual([]);
    });

    it("tampoco aceptando menos lugares: no hay forma de forzarlo", async () => {
      const { base, pasos } = baseFalsa(20_000, TAMANO_MAXIMO);

      await expect(
        cargarLugares(base, "brasil", muchas, {
          ...FECHAS,
          aceptarMenos: true,
        }),
      ).rejects.toThrow("docs/administrar.md");
      expect(pasos).toEqual([]);
    });

    it("hasta el tope justo, carga", async () => {
      const { base, pasos } = baseFalsa(null, TAMANO_MAXIMO - loQueSuman);

      await cargarLugares(base, "brasil", muchas, FECHAS);

      expect(pasos).toContain("registrar 10000 del 2026-11-10T20:21:02.000Z");
    });

    it("deja el tope lejos de los 500 MB del plan gratis de Supabase", () => {
      expect(TAMANO_MAXIMO).toBeLessThanOrEqual(400 * MB);
      expect(megas(123_456_789)).toBe("123 MB");
    });
  });
});
