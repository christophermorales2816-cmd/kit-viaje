import { afterEach, describe, expect, it, vi } from "vitest";

import {
  POSICION_VIEJA_S,
  SEGUNDOS_EN_CACHE_DE_ZONA,
  SEGUNDOS_EN_CACHE_DEL_TOTAL,
  avionesDeLaRespuesta,
  totalGlobalDeLaRespuesta,
  traerZona,
} from "./adsb";

/**
 * Un avión con la forma de la respuesta de adsb.lol (readsb), con datos
 * inventados: el código, el vuelo y la matrícula no son de ningún avión real.
 */
const EN_VUELO = {
  hex: "e0abcd",
  type: "adsb_icao",
  flight: "ARG1302 ",
  r: "LV-ZZZ",
  t: "B738",
  alt_baro: 35000,
  gs: 450,
  track: 141.4,
  lat: -34.123456,
  lon: -58.987654,
  seen_pos: 0.6,
};

/** Los aviones que deja pasar el filtro, con el cambio aplicado a EN_VUELO. */
function filtrar(cambios: Record<string, unknown>) {
  return avionesDeLaRespuesta({ ac: [{ ...EN_VUELO, ...cambios }] });
}

describe("avionesDeLaRespuesta", () => {
  it("pasa todo a las unidades del sitio", () => {
    expect(avionesDeLaRespuesta({ ac: [EN_VUELO] })).toEqual([
      {
        hex: "e0abcd",
        vuelo: "ARG1302",
        modelo: "B738",
        matricula: "LV-ZZZ",
        lat: -34.1235,
        lon: -58.9877,
        rumbo: 141,
        // 35.000 pies son 10.668 m; se redondea a la decena.
        altitudM: 10670,
        // 450 nudos.
        velocidadKmH: 833,
      },
    ]);
  });

  it("deja afuera los aviones en tierra y los que no dicen su altitud", () => {
    expect(filtrar({ alt_baro: "ground" })).toEqual([]);
    expect(filtrar({ alt_baro: undefined })).toEqual([]);
  });

  it("deja afuera una posición vieja o que no existe", () => {
    expect(filtrar({ seen_pos: POSICION_VIEJA_S + 1 })).toEqual([]);
    expect(filtrar({ lat: undefined })).toEqual([]);
    expect(filtrar({ lon: 200 })).toEqual([]);
  });

  it("no muestra los aviones que pidieron no aparecer (LADD y PIA)", () => {
    expect(filtrar({ dbFlags: 8 })).toEqual([]);
    expect(filtrar({ dbFlags: 4 })).toEqual([]);
    expect(filtrar({ dbFlags: 9 })).toEqual([]);
    // Los militares (1) no pidieron nada: se muestran como cualquiera.
    expect(filtrar({ dbFlags: 1 })).toHaveLength(1);
  });

  it("toma el rumbo del track y, si no está, del heading", () => {
    expect(filtrar({ track: undefined, true_heading: 90.2 })?.[0].rumbo).toBe(
      90,
    );
    expect(filtrar({ track: 359.7 })?.[0].rumbo).toBe(0);
    expect(filtrar({ track: undefined })?.[0].rumbo).toBeNull();
  });

  it("no muestra textos que no tienen la forma de un vuelo, un modelo o una matrícula", () => {
    const [avion] = filtrar({
      flight: "<script>",
      t: "BOEING 737",
      r: "LV ZZZ",
    })!;

    expect(avion).toMatchObject({ vuelo: null, modelo: null, matricula: null });
  });

  it("descarta un código de transpondedor raro y acepta los de TIS-B", () => {
    expect(filtrar({ hex: "nada" })).toEqual([]);
    expect(filtrar({ hex: "~1A2B3C" })?.[0].hex).toBe("~1a2b3c");
  });

  it("dice que no entendió la respuesta, en vez de devolver cero aviones", () => {
    expect(avionesDeLaRespuesta(null)).toBeNull();
    expect(avionesDeLaRespuesta({})).toBeNull();
    expect(avionesDeLaRespuesta({ ac: "nada" })).toBeNull();
    expect(avionesDeLaRespuesta({ ac: [] })).toEqual([]);
  });
});

describe("totalGlobalDeLaRespuesta", () => {
  it("lee el total de /0/me", () => {
    expect(totalGlobalDeLaRespuesta({ global: { aircraft: 6145 } })).toBe(6145);
  });

  it("no inventa un total", () => {
    expect(totalGlobalDeLaRespuesta({})).toBeNull();
    expect(totalGlobalDeLaRespuesta({ global: { aircraft: -1 } })).toBeNull();
    expect(totalGlobalDeLaRespuesta("6145")).toBeNull();
  });
});

type Respuesta = { status?: number; datos?: unknown; error?: Error };

/** Lo que usa traerZona de `fetch`: la URL, las opciones y una respuesta mínima. */
type FetchFalso = (
  url: string,
  opciones?: RequestInit,
) => Promise<{ ok: boolean; status: number; json: () => Promise<unknown> }>;

/** `fetch` que contesta según la ruta pedida a adsb.lol. */
function responde(rutas: Record<string, Respuesta>) {
  const espia = vi.fn<FetchFalso>(async (url) => {
    const respuesta = rutas[new URL(url).pathname];

    if (respuesta === undefined) throw new Error(`Ruta inesperada: ${url}`);
    if (respuesta.error) throw respuesta.error;

    const status = respuesta.status ?? 200;

    return { ok: status < 400, status, json: async () => respuesta.datos };
  });

  vi.stubGlobal("fetch", espia);

  return espia;
}

const ZONA = "/v2/point/-35/-59/250";
const TOTAL = "/0/me";
const AHORA = Date.UTC(2026, 9, 18, 2, 19, 38);

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("traerZona", () => {
  it("junta la zona, el total del mundo y el aeropuerto que la nombra", async () => {
    responde({
      [ZONA]: { datos: { ac: [EN_VUELO], now: AHORA } },
      [TOTAL]: { datos: { global: { aircraft: 6145 } } },
    });

    const resultado = await traerZona({ lat: -35, lon: -59 });

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.zona).toMatchObject({
      centro: { lat: -35, lon: -59 },
      radioKm: 463,
      actualizado: "2026-10-18T02:19:38.000Z",
      totalGlobal: 6145,
    });
    expect(resultado.zona.aviones).toHaveLength(1);
    expect(resultado.zona.referencia?.pais).toBe("Argentina");
  });

  it("pide con tiempo máximo, caché y nombre propio", async () => {
    const espia = responde({
      [ZONA]: { datos: { ac: [] } },
      [TOTAL]: { datos: { global: { aircraft: 1 } } },
    });

    await traerZona({ lat: -35, lon: -59 });

    const opciones = new Map(
      espia.mock.calls.map(([url, init]) => [new URL(url).pathname, init]),
    );

    expect(opciones.get(ZONA)).toMatchObject({
      next: { revalidate: SEGUNDOS_EN_CACHE_DE_ZONA },
      headers: { "user-agent": expect.stringContaining("kit-viaje") },
    });
    expect(opciones.get(ZONA)?.signal).toBeInstanceOf(AbortSignal);
    expect(opciones.get(TOTAL)).toMatchObject({
      next: { revalidate: SEGUNDOS_EN_CACHE_DEL_TOTAL },
    });
  });

  it("sin el total, la zona igual sirve", async () => {
    responde({
      [ZONA]: { datos: { ac: [EN_VUELO] } },
      [TOTAL]: { status: 500 },
    });

    const resultado = await traerZona({ lat: -35, lon: -59 });

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.zona.totalGlobal).toBeNull();
    expect(resultado.zona.aviones).toHaveLength(1);
  });

  it("sin la zona no hay radar, y lo dice", async () => {
    responde({
      [ZONA]: { status: 503 },
      [TOTAL]: { datos: { global: { aircraft: 1 } } },
    });

    expect(await traerZona({ lat: -35, lon: -59 })).toEqual({
      ok: false,
      motivo: "adsb.lol respondió 503.",
      saturado: false,
    });
  });

  it("avisa cuando adsb.lol pide esperar", async () => {
    responde({
      [ZONA]: { status: 429 },
      [TOTAL]: { status: 429 },
    });

    expect(await traerZona({ lat: -35, lon: -59 })).toMatchObject({
      ok: false,
      saturado: true,
    });
  });

  it("una fuente colgada o caída es un aviso, no una excepción", async () => {
    responde({
      [ZONA]: { error: new Error("The operation was aborted due to timeout") },
      [TOTAL]: { error: new Error("fetch failed") },
    });

    const resultado = await traerZona({ lat: -35, lon: -59 });

    expect(resultado.ok).toBe(false);
    if (resultado.ok) return;

    expect(resultado.motivo).toContain("No se pudo contactar a adsb.lol");
  });

  it("una respuesta con otra forma es un aviso, no un cielo vacío", async () => {
    responde({
      [ZONA]: { datos: { aircraft: [] } },
      [TOTAL]: { datos: { global: { aircraft: 1 } } },
    });

    expect((await traerZona({ lat: -35, lon: -59 })).ok).toBe(false);
  });

  it("en medio del océano, la zona no tiene aeropuerto que la nombre", async () => {
    responde({
      "/v2/point/-40/-130/250": { datos: { ac: [] } },
      [TOTAL]: { datos: { global: { aircraft: 1 } } },
    });

    const resultado = await traerZona({ lat: -40, lon: -130 });

    expect(resultado.ok && resultado.zona.referencia).toBeNull();
  });
});
