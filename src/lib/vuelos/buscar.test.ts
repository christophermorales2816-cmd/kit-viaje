import { describe, expect, it } from "vitest";

import { allGuides } from "@/content/guias";

import { ORDEN_POR_TIPO, aeropuertoPorIata } from "./aeropuertos";
import {
  RESULTADOS_POR_BUSQUEDA,
  buscarAeropuertos,
  normalizar,
} from "./buscar";
import { RADIO_KM, distanciaKm } from "./cercanos";
import { NOMBRES_EN_CASTELLANO } from "./nombres-en-castellano";

/** Los códigos que devuelve una búsqueda, en orden. */
function codigos(texto: string): string[] {
  return buscarAeropuertos(texto).map((aeropuerto) => aeropuerto.iata);
}

describe("normalizar", () => {
  it("saca acentos, mayúsculas y signos", () => {
    expect(normalizar("São Paulo")).toBe("sao paulo");
    expect(normalizar("  Zürich-Kloten ")).toBe("zurich kloten");
  });

  it("borra los apóstrofos en vez de separar la palabra", () => {
    expect(normalizar("Nuku'alofa")).toBe("nukualofa");
    expect(normalizar("Nukuʻalofa")).toBe("nukualofa");
  });
});

describe("buscarAeropuertos", () => {
  it("pone primero el código exacto, IATA u OACI", () => {
    expect(codigos("eze")[0]).toBe("EZE");
    expect(codigos("SAEZ")[0]).toBe("EZE");
    expect(codigos("lhr ")[0]).toBe("LHR");
  });

  it("busca por el comienzo de cada palabra", () => {
    expect(codigos("bue")).toEqual(expect.arrayContaining(["AEP", "EZE"]));
    expect(codigos("aires")).toEqual(expect.arrayContaining(["AEP", "EZE"]));
    expect(codigos("ires")).toEqual([]);
  });

  it("no le importan los acentos", () => {
    expect(codigos("Sao Paulo")).toEqual(codigos("São Paulo"));
    expect(codigos("cordoba")[0]).toBe("COR");
  });

  it("busca por el nombre del aeropuerto", () => {
    expect(codigos("jorge newbery")).toEqual(["AEP"]);
  });

  it("encuentra las ciudades por su nombre en castellano", () => {
    expect(codigos("Londres")[0]).toBe("LHR");
    expect(codigos("Nueva York").slice(0, 3)).toEqual(["JFK", "LGA", "EWR"]);
    expect(codigos("Pekín")[0]).toBe("PEK");
    expect(codigos("Tokio")).toEqual(["HND", "NRT"]);
    expect(codigos("Atenas")).toEqual(["ATH"]);
    expect(codigos("San Pablo").slice(0, 2)).toEqual(["GRU", "CGH"]);
  });

  it("ordena una ciudad con varios aeropuertos como la lista de nombres", () => {
    expect(codigos("Londres").slice(0, 4)).toEqual([
      "LHR",
      "LGW",
      "STN",
      "LTN",
    ]);
  });

  it("pone la ciudad que empieza con lo pedido antes que la que lo tiene en otra palabra", () => {
    const londres = codigos("london");

    expect(londres.indexOf("LHR")).toBeLessThan(londres.indexOf("ELS"));
  });

  it("pone el aeropuerto grande de la ciudad antes que uno chico con el mismo nombre", () => {
    // Tocumen figura con el nombre de su municipio, no con el de la ciudad.
    expect(codigos("panama")[0]).toBe("PTY");
  });

  it("con el nombre de un país, trae sus aeropuertos, los grandes primero", () => {
    // Ushuaia se llama "Malvinas Argentinas", pero quien escribe "Argentina"
    // busca el país.
    const argentina = buscarAeropuertos("Argentina");
    const tamaños = argentina.map((a) => ORDEN_POR_TIPO[a.tipo]);

    expect(argentina.slice(0, 2).map((a) => a.iata)).toEqual(["AEP", "EZE"]);
    expect(argentina.every((a) => a.pais === "AR")).toBe(true);
    expect(tamaños).toEqual([...tamaños].sort((a, b) => a - b));
  });

  it("no trae más de lo que entra en la lista", () => {
    expect(buscarAeropuertos("san")).toHaveLength(RESULTADOS_POR_BUSQUEDA);
    expect(buscarAeropuertos("san", 3)).toHaveLength(3);
  });

  it("no busca con menos de dos letras ni con lo que no es texto", () => {
    expect(buscarAeropuertos("b")).toEqual([]);
    expect(buscarAeropuertos("   ")).toEqual([]);
    expect(buscarAeropuertos("<>")).toEqual([]);
    expect(buscarAeropuertos(undefined)).toEqual([]);
    expect(buscarAeropuertos(null)).toEqual([]);
    expect(buscarAeropuertos(["eze"])).toEqual([]);
  });

  it("corta lo que es demasiado largo para ser una ciudad", () => {
    expect(buscarAeropuertos("x".repeat(10_000))).toEqual([]);
  });
});

describe("NOMBRES_EN_CASTELLANO", () => {
  it("solo nombra aeropuertos que existen", () => {
    for (const [ciudad, lista] of Object.entries(NOMBRES_EN_CASTELLANO)) {
      for (const codigo of lista) {
        expect(aeropuertoPorIata(codigo), `${ciudad}: ${codigo}`).toBeDefined();
      }
    }
  });

  it("no repite un aeropuerto en la lista de una ciudad", () => {
    for (const lista of Object.values(NOMBRES_EN_CASTELLANO)) {
      expect(new Set(lista).size).toBe(lista.length);
    }
  });
});

/**
 * Las ciudades base que no se buscan por su nombre: son un barrio, una zona o
 * el país entero, y quien sale de ahí escribe la ciudad o la isla.
 */
const BUSQUEDA_POR_GUIA: Record<string, string> = {
  singapur: "Singapur",
  "hong-kong": "Hong Kong",
  macao: "Macao",
  indonesia: "Bali",
  mauricio: "Mauricio",
  gambia: "Banjul",
  esuatini: "Esuatini",
};

describe("las ciudades de las guías", () => {
  it.each(allGuides().map((guia) => [guia.slug, guia] as const))(
    "%s: su ciudad base se encuentra por su nombre",
    (slug, guia) => {
      // La ciudad base es el destino destacado (src/app/page.tsx), y su nombre
      // es lo que va antes del paréntesis o los dos puntos: "Cusco (Valle
      // Sagrado)" se busca como "Cusco".
      const base = guia.places.find((lugar) => lugar.featured)!;
      const nombre =
        BUSQUEDA_POR_GUIA[slug] ?? base.name.split(" (")[0].split(":")[0];

      const cerca = buscarAeropuertos(nombre).filter(
        (aeropuerto) =>
          distanciaKm(base.coords, [aeropuerto.lat, aeropuerto.lon]) <=
          RADIO_KM,
      );

      expect(cerca, `"${nombre}" no trae ningún aeropuerto cerca`).not.toEqual(
        [],
      );
    },
  );
});
