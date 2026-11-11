import { afterEach, describe, expect, it, vi } from "vitest";

// Sin la caché de Next: cada llamada va directo a la función.
vi.mock("next/cache", () => ({
  unstable_cache: <T>(funcion: T) => funcion,
}));

import {
  A_LA_VEZ,
  FallaDeOverpass,
  SEGUNDOS_DE_PAUSA,
  SEGUNDOS_DE_PAUSA_POR_RECHAZO,
  encabezadosParaOverpass,
  arrancarDeCero,
  pedirAOverpass,
  traerLugares,
} from "./overpass";

type FetchFalso = (url: string, opciones: RequestInit) => Promise<Response>;

function conFetch(respuesta: () => Promise<Response>) {
  const falso = vi.fn<FetchFalso>(respuesta);
  vi.stubGlobal("fetch", falso);
  return falso;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.useRealTimers();
  vi.restoreAllMocks();
  arrancarDeCero();
});

const CELDA = { fila: 356, columna: 1397 };
const RAMEN = { cocinas: ["ramen"] };

describe("traerLugares", () => {
  it("le pregunta a Overpass la consulta de la celda y devuelve los lugares", async () => {
    const falso = conFetch(async () =>
      Response.json({
        osm3s: { timestamp_osm_base: "2026-11-08T14:02:00Z" },
        elements: [
          {
            type: "node",
            id: 1,
            lat: 35.65,
            lon: 139.75,
            tags: { amenity: "restaurant", cuisine: "ramen", name: "Taro" },
          },
        ],
      }),
    );

    const resultado = await traerLugares(RAMEN, CELDA);

    expect(resultado.ok).toBe(true);
    if (!resultado.ok) return;

    expect(resultado.datos.celda).toBe("356_1397");
    expect(resultado.datos.lugares.map((lugar) => lugar.nombre)).toEqual([
      "Taro",
    ]);
    // La fecha de los datos es la del servidor, no la de la consulta.
    expect(resultado.datos.datosDel).toBe("2026-11-08T14:02:00.000Z");
    expect(resultado.datos.actualizado).not.toBe(resultado.datos.datosDel);

    const [url, opciones] = falso.mock.calls[0];
    // No overpass-api.de: bloqueó al sitio (QUÉ SERVIDOR, en overpass.ts).
    expect(url).toBe("https://overpass.private.coffee/api/interpreter");
    expect(opciones.method).toBe("POST");

    const consulta = new URLSearchParams(String(opciones.body)).get("data");
    expect(consulta).toContain("[bbox:35.6,139.7,35.7,139.8]");
    expect(consulta).toContain("ramen");
  });

  it("se presenta como pide Overpass, y no como un script anónimo", async () => {
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "kit-viaje.vercel.app");
    const falso = conFetch(async () => Response.json({ elements: [] }));

    await traerLugares(RAMEN, CELDA);

    const encabezados = new Headers(falso.mock.calls[0][1].headers);
    // Un Accept que solo admite JSON es lo que Overpass rechaza con 406.
    expect(encabezados.get("accept")).toBe("*/*");
    expect(encabezados.get("accept-language")).toBe("es");
    expect(encabezados.get("user-agent")).toBe(
      "kit-viaje/1.0 (+https://kit-viaje.vercel.app/que-comer)",
    );
    expect(encabezados.get("referer")).toBe(
      "https://kit-viaje.vercel.app/que-comer",
    );
  });

  it("sin dominio, igual se presenta con nombre y versión", () => {
    expect(encabezadosParaOverpass(null)).toEqual({
      accept: "*/*",
      "accept-language": "es",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "kit-viaje/1.0",
    });
  });

  it("si Overpass pide esperar, nadie le pregunta nada por un minuto", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-11-10T12:00:00Z"));
    const falso = conFetch(
      async () => new Response("Too Many Requests", { status: 429 }),
    );

    expect(await traerLugares(RAMEN, CELDA)).toMatchObject({
      ok: false,
      esperaS: SEGUNDOS_DE_PAUSA,
    });

    // Otra celda, a los veinte segundos: ni pregunta, y dice cuánto falta.
    vi.setSystemTime(new Date("2026-11-10T12:00:20Z"));
    expect(
      await traerLugares(RAMEN, { fila: 356, columna: 1398 }),
    ).toMatchObject({ ok: false, esperaS: 40 });
    expect(falso).toHaveBeenCalledTimes(1);

    // Pasado el minuto, vuelve a preguntar.
    vi.setSystemTime(new Date("2026-11-10T12:01:01Z"));
    await traerLugares(RAMEN, CELDA);
    expect(falso).toHaveBeenCalledTimes(2);
  });

  it("si Overpass rechaza al sitio, deja de preguntar un buen rato y lo deja en el log", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const falso = conFetch(
      async () => new Response("Not Acceptable", { status: 406 }),
    );

    expect(await traerLugares(RAMEN, CELDA)).toEqual({
      ok: false,
      motivo: "Overpass respondió 406.",
      esperaS: SEGUNDOS_DE_PAUSA_POR_RECHAZO,
    });
    expect(log).toHaveBeenCalledTimes(1);
    expect(String(log.mock.calls[0][0])).toContain("docs/administrar.md");

    // El segundo pedido ni sale, y no repite el aviso.
    const segundo = await traerLugares(RAMEN, CELDA);
    expect(segundo).toMatchObject({ ok: false });
    if (!segundo.ok) expect(segundo.esperaS).toBeGreaterThan(0);
    expect(falso).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledTimes(1);
  });

  it("otro error no frena a nadie", async () => {
    const falso = conFetch(
      async () => new Response("Internal Server Error", { status: 500 }),
    );

    expect(await traerLugares(RAMEN, CELDA)).toEqual({
      ok: false,
      motivo: "Overpass respondió 500.",
      esperaS: null,
    });
    await traerLugares(RAMEN, CELDA);
    expect(falso).toHaveBeenCalledTimes(2);
  });

  it("no confunde un error con un mapa vacío", async () => {
    conFetch(async () =>
      Response.json({ elements: [], remark: "runtime error: out of memory" }),
    );

    expect(await traerLugares(RAMEN, CELDA)).toMatchObject({
      ok: false,
      esperaS: null,
    });
  });

  it("sobrevive a que Overpass no conteste", async () => {
    conFetch(async () => {
      throw new TypeError("fetch failed");
    });

    const resultado = await traerLugares(RAMEN, CELDA);

    expect(resultado).toMatchObject({ ok: false, esperaS: null });
    if (!resultado.ok) expect(resultado.motivo).toContain("fetch failed");
  });
});

describe("pedirAOverpass", () => {
  /** Un Overpass falso que contesta cuando el test quiere. */
  function overpassALaEspera() {
    const pendientes: ((respuesta: Response) => void)[] = [];
    let enCurso = 0;
    let maximo = 0;

    const falso = conFetch(
      () =>
        new Promise<Response>((responder) => {
          enCurso += 1;
          maximo = Math.max(maximo, enCurso);
          pendientes.push((respuesta) => {
            enCurso -= 1;
            responder(respuesta);
          });
        }),
    );

    return { falso, pendientes, maximo: () => maximo };
  }

  const unRato = () => new Promise((listo) => setTimeout(listo, 0));

  it("manda de a A_LA_VEZ pedidos, y los demás esperan su turno", async () => {
    const { pendientes, maximo } = overpassALaEspera();
    let terminados = 0;

    const pedidos = Array.from({ length: 5 }, () =>
      pedirAOverpass("[out:json];", 1000).then((datos) => {
        terminados += 1;
        return datos;
      }),
    );

    // Overpass contesta de a uno; cada uno que termina le pasa el turno al
    // siguiente.
    for (let vuelta = 0; vuelta < 50 && terminados < 5; vuelta++) {
      await unRato();
      pendientes.shift()?.(Response.json({ elements: [] }));
    }

    expect(terminados).toBe(5);
    expect(maximo()).toBe(A_LA_VEZ);
    await Promise.all(pedidos);
  });

  it("si mientras esperaba turno empezó una pausa, ni pregunta", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const { falso, pendientes } = overpassALaEspera();

    // Dos ocupan los turnos; el tercero espera.
    const primero = pedirAOverpass("[out:json];", 1000);
    const segundo = pedirAOverpass("[out:json];", 1000);
    const tercero = pedirAOverpass("[out:json];", 1000).catch(
      (error: unknown) => error,
    );
    await unRato();
    expect(falso).toHaveBeenCalledTimes(2);

    // El primero vuelve rechazado: empieza la pausa y le pasa el turno.
    pendientes[0](new Response("Not Acceptable", { status: 406 }));
    await expect(primero).rejects.toThrow("406");

    const falla = await tercero;
    expect(falla).toBeInstanceOf(FallaDeOverpass);
    expect((falla as FallaDeOverpass).esperaS).toBeGreaterThan(0);
    expect(falso).toHaveBeenCalledTimes(2);

    pendientes[1](Response.json({ elements: [] }));
    await segundo;
  });
});
