import { describe, expect, it } from "vitest";

import { type BaseDeLugares, FILAS_POR_TANDA, cargarLugares } from "./carga";
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
function baseFalsa(anteriores: number | null) {
  const pasos: string[] = [];
  const subidas: number[] = [];

  const base: BaseDeLugares = {
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
});
