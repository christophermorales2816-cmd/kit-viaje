import { afterEach, describe, expect, it, vi } from "vitest";

type Respuesta = { data: unknown; error: { message: string } | null };

interface Consulta {
  tabla: string;
  filtros: [string, unknown][];
  orden?: string;
  limite?: number;
}

const consultas: Consulta[] = [];
const respuestas = new Map<string, Respuesta>();

/** Un cliente de Supabase de mentira: anota cada consulta y contesta lo preparado. */
const cliente = {
  from(tabla: string) {
    const consulta: Consulta = { tabla, filtros: [] };
    consultas.push(consulta);
    const respuesta = async () =>
      respuestas.get(tabla) ?? { data: null, error: null };

    const constructor = {
      select: () => constructor,
      eq: (columna: string, valor: unknown) => {
        consulta.filtros.push([columna, valor]);
        return constructor;
      },
      order: (columna: string) => {
        consulta.orden = columna;
        return constructor;
      },
      limit: (n: number) => {
        consulta.limite = n;
        return constructor;
      },
      maybeSingle: respuesta,
      overrideTypes: respuesta,
    };

    return constructor;
  },
};

vi.mock("@/lib/supabase/client", () => ({ referenceClient: () => cliente }));

import { lugaresPropios } from "./base";
import { MAXIMO_POR_CELDA } from "./osm";

afterEach(() => {
  consultas.length = 0;
  respuestas.clear();
});

const CELDA = { fila: 356, columna: 1397 };

function lugar(n: number) {
  return { id: `node/${n}`, nombre: `Lugar ${n}`, lat: 35.68, lon: 139.76 };
}

describe("lugaresPropios", () => {
  it("si el país todavía no tiene datos propios, devuelve null y no busca lugares", async () => {
    expect(await lugaresPropios("japon", "ramen", CELDA)).toBeNull();
    expect(consultas.map((consulta) => consulta.tabla)).toEqual([
      "extractos_de_comida",
    ]);
  });

  it("trae los lugares del plato en la celda, con la fecha de los datos", async () => {
    respuestas.set("extractos_de_comida", {
      data: {
        datos_del: "2026-11-10T20:21:02+00:00",
        procesado: "2026-11-11T07:31:00+00:00",
      },
      error: null,
    });
    respuestas.set("lugares_de_comida", {
      data: [{ lugar: lugar(1) }, { lugar: lugar(2) }],
      error: null,
    });

    expect(await lugaresPropios("japon", "ramen", CELDA)).toEqual({
      celda: "356_1397",
      actualizado: "2026-11-11T07:31:00.000Z",
      datosDel: "2026-11-10T20:21:02.000Z",
      lugares: [lugar(1), lugar(2)],
      recortado: false,
    });

    const [, deLugares] = consultas;
    expect(deLugares.filtros).toEqual([
      ["pais", "japon"],
      ["plato", "ramen"],
      ["celda", "356_1397"],
    ]);
    expect(deLugares.orden).toBe("osm");
    expect(deLugares.limite).toBe(MAXIMO_POR_CELDA + 1);
  });

  it("avisa si había más de los que entran, y salta filas sin forma de lugar", async () => {
    respuestas.set("extractos_de_comida", {
      data: {
        datos_del: "2026-11-10T20:21:02Z",
        procesado: "2026-11-11T07:31:00Z",
      },
      error: null,
    });
    respuestas.set("lugares_de_comida", {
      data: [
        { lugar: { roto: true } },
        ...Array.from({ length: MAXIMO_POR_CELDA }, (_, n) => ({
          lugar: lugar(n + 1),
        })),
      ],
      error: null,
    });

    const leidos = await lugaresPropios("japon", "ramen", CELDA);

    expect(leidos?.recortado).toBe(true);
    expect(leidos?.lugares).toHaveLength(MAXIMO_POR_CELDA - 1);
  });

  it("si la base falla, lo dice: la API vuelve a Overpass", async () => {
    respuestas.set("extractos_de_comida", {
      data: null,
      error: { message: "connection refused" },
    });

    await expect(lugaresPropios("japon", "ramen", CELDA)).rejects.toThrow(
      "connection refused",
    );
  });
});
