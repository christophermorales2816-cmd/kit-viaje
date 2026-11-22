import { describe, expect, it } from "vitest";

import {
  MAXIMO_POR_TIPO,
  consultaDeServicios,
  servicioDelElemento,
  serviciosDeLaRespuesta,
  tipoDeServicio,
} from "./osm";

// La celda de Ushuaia.
const USHUAIA = { sur: -54.9, oeste: -68.4, norte: -54.8, este: -68.3 };
const HOY = new Date("2026-11-22T12:00:00Z");

/** Un nodo de OpenStreetMap con la forma en que lo da Overpass. */
function nodo(id: number, tags: Record<string, string>) {
  return { type: "node", id, lat: -54.8065, lon: -68.3046, tags };
}

describe("consultaDeServicios", () => {
  const consulta = consultaDeServicios(USHUAIA);

  it("pide la celda, con el tiempo de la consulta", () => {
    expect(
      consulta.startsWith(
        "[out:json][timeout:20][bbox:-54.9,-68.4,-54.8,-68.3];",
      ),
    ).toBe(true);
  });

  it("tiene una salida por tipo, cada una con su tope", () => {
    const salidas = consulta.match(/out center tags qt \d+;/g) ?? [];

    expect(salidas).toHaveLength(7);
    expect(new Set(salidas)).toEqual(
      new Set([`out center tags qt ${MAXIMO_POR_TIPO + 1};`]),
    );
  });

  it("pide las oficinas de turismo, no cada cartel", () => {
    expect(consulta).toContain(
      '(nwr["tourism"="information"]["information"~"^(office|visitor_centre)$"];nwr["amenity"="ranger_station"];);out center tags',
    );
  });

  it("pide los servicios de cada tipo", () => {
    expect(consulta).toContain(
      'nwr["amenity"~"^(hospital|clinic|doctors)$"];out',
    );
    expect(consulta).toContain('nwr["amenity"="pharmacy"];out');
    expect(consulta).toContain(
      '(nwr["amenity"="police"];nwr["emergency"="mountain_rescue"];);out',
    );
    expect(consulta).toContain('nwr["amenity"="fuel"];out');
    expect(consulta).toContain(
      'nwr["amenity"~"^(atm|bank|bureau_de_change)$"];out',
    );
    expect(consulta).toContain(
      'nwr["tourism"~"^(alpine_hut|wilderness_hut)$"];out',
    );
  });
});

describe("tipoDeServicio", () => {
  it("reconoce cada tipo por sus etiquetas", () => {
    expect(
      tipoDeServicio({ tourism: "information", information: "office" }),
    ).toBe("informacion");
    expect(tipoDeServicio({ amenity: "ranger_station" })).toBe("informacion");
    expect(tipoDeServicio({ amenity: "hospital" })).toBe("salud");
    expect(tipoDeServicio({ amenity: "doctors" })).toBe("salud");
    expect(tipoDeServicio({ amenity: "pharmacy" })).toBe("farmacia");
    expect(tipoDeServicio({ emergency: "mountain_rescue" })).toBe("policia");
    expect(tipoDeServicio({ amenity: "fuel" })).toBe("combustible");
    expect(tipoDeServicio({ amenity: "bureau_de_change" })).toBe("dinero");
    expect(tipoDeServicio({ tourism: "wilderness_hut" })).toBe("refugio");
  });

  it("deja afuera los carteles, los techos de las paradas y lo demás", () => {
    expect(
      tipoDeServicio({ tourism: "information", information: "board" }),
    ).toBeNull();
    expect(tipoDeServicio({ amenity: "shelter" })).toBeNull();
    expect(tipoDeServicio({ amenity: "restaurant" })).toBeNull();
    expect(tipoDeServicio({})).toBeNull();
  });
});

describe("servicioDelElemento", () => {
  it("lee el nombre, el teléfono, el horario, la web y la dirección", () => {
    expect(
      servicioDelElemento(
        nodo(1, {
          amenity: "hospital",
          name: "Hospital Regional Ushuaia",
          phone: "+54 2901 44-1000",
          opening_hours: "24/7",
          website: "hospitalushuaia.example",
          "addr:street": "Maipú",
          "addr:housenumber": "1202",
        }),
        HOY,
      ),
    ).toEqual({
      id: "node/1",
      tipo: "salud",
      nombre: "Hospital Regional Ushuaia",
      nombreLatino: null,
      lat: -54.8065,
      lon: -68.3046,
      telefono: "+54 2901 44-1000",
      horario: "24/7",
      web: "https://hospitalushuaia.example/",
      direccion: "Maipú 1202",
    });
  });

  it("usa el centro de un edificio", () => {
    const servicio = servicioDelElemento(
      {
        type: "way",
        id: 2,
        center: { lat: -54.81, lon: -68.33 },
        tags: { amenity: "fuel", name: "YPF" },
      },
      HOY,
    );

    expect(servicio).toMatchObject({ id: "way/2", lat: -54.81, lon: -68.33 });
  });

  it("da el nombre en alfabeto latino si el de allá no lo está", () => {
    const servicio = servicioDelElemento(
      nodo(3, {
        tourism: "information",
        information: "office",
        name: "ニセコビュープラザ",
        "name:en": "Niseko View Plaza",
      }),
      HOY,
    );

    expect(servicio?.nombreLatino).toBe("Niseko View Plaza");
  });

  it("descarta lo que cerró y lo que no es para el público", () => {
    expect(
      servicioDelElemento(nodo(4, { amenity: "fuel", disused: "yes" }), HOY),
    ).toBeNull();
    expect(
      servicioDelElemento(nodo(5, { amenity: "fuel", access: "private" }), HOY),
    ).toBeNull();
    expect(
      servicioDelElemento(
        nodo(6, { amenity: "atm", opening_hours: "closed" }),
        HOY,
      ),
    ).toBeNull();
  });

  it("no acepta una web que no sea http ni un teléfono que no lo parezca", () => {
    const servicio = servicioDelElemento(
      nodo(7, {
        amenity: "police",
        website: "javascript:alert(1)",
        phone: "101",
      }),
      HOY,
    );

    expect(servicio?.web).toBeNull();
    expect(servicio?.telefono).toBeNull();
  });

  it("descarta lo que no es un elemento de OpenStreetMap", () => {
    expect(
      servicioDelElemento(
        { type: "area", id: 8, tags: { amenity: "fuel" } },
        HOY,
      ),
    ).toBeNull();
    expect(
      servicioDelElemento(
        { type: "node", id: 9, tags: { amenity: "fuel" } },
        HOY,
      ),
    ).toBeNull();
  });
});

describe("serviciosDeLaRespuesta", () => {
  it("lee los servicios y la fecha de los datos", () => {
    const leido = serviciosDeLaRespuesta(
      {
        osm3s: { timestamp_osm_base: "2026-11-21T09:30:00Z" },
        elements: [
          nodo(1, { amenity: "hospital", name: "Hospital" }),
          nodo(2, { amenity: "restaurant", name: "Un restaurante" }),
          nodo(3, { amenity: "pharmacy", name: "Farmacia" }),
        ],
      },
      HOY,
    );

    expect(leido?.servicios.map((servicio) => servicio.id)).toEqual([
      "node/1",
      "node/3",
    ]);
    expect(leido?.recortado).toBe(false);
    expect(leido?.datosDel).toBe("2026-11-21T09:30:00.000Z");
  });

  it("deja una vez lo que sale en dos salidas", () => {
    const comisariaConOficina = nodo(1, {
      amenity: "police",
      tourism: "information",
      information: "office",
    });

    const leido = serviciosDeLaRespuesta(
      { elements: [comisariaConOficina, comisariaConOficina] },
      HOY,
    );

    expect(leido?.servicios).toHaveLength(1);
  });

  it("corta cada tipo en el tope y avisa que había más", () => {
    const cajeros = Array.from({ length: MAXIMO_POR_TIPO + 1 }, (_, i) =>
      nodo(100 + i, { amenity: "atm" }),
    );

    const leido = serviciosDeLaRespuesta(
      { elements: [...cajeros, nodo(1, { amenity: "hospital" })] },
      HOY,
    );

    expect(leido?.recortado).toBe(true);
    expect(
      leido?.servicios.filter((servicio) => servicio.tipo === "dinero"),
    ).toHaveLength(MAXIMO_POR_TIPO);
    // Los cajeros no dejan afuera al hospital.
    expect(leido?.servicios.some((servicio) => servicio.tipo === "salud")).toBe(
      true,
    );
  });

  it("cuenta el tope antes de descartar lo cerrado", () => {
    const cajeros = Array.from({ length: MAXIMO_POR_TIPO + 1 }, (_, i) =>
      nodo(100 + i, { amenity: "atm", ...(i === 0 ? { disused: "yes" } : {}) }),
    );

    expect(serviciosDeLaRespuesta({ elements: cajeros }, HOY)?.recortado).toBe(
      true,
    );
  });

  it("trata un error adentro de un 200 como una falla", () => {
    expect(
      serviciosDeLaRespuesta(
        {
          remark: 'runtime error: Query timed out in "query" at line 1',
          elements: [nodo(1, { amenity: "hospital" })],
        },
        HOY,
      ),
    ).toBeNull();
    expect(serviciosDeLaRespuesta({ nada: true }, HOY)).toBeNull();
    expect(serviciosDeLaRespuesta(null, HOY)).toBeNull();
  });
});
