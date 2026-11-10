import { describe, expect, it } from "vitest";

import {
  MAXIMO_POR_CELDA,
  cerrado,
  consultaDeOverpass,
  lugaresDeLaRespuesta,
  webSegura,
} from "./osm";

const TOKIO = { sur: 35.6, oeste: 139.7, norte: 35.7, este: 139.8 };
const HOY = new Date("2026-10-28T12:00:00Z");

describe("consultaDeOverpass", () => {
  it("busca por cocina o por nombre en los lugares del tipo, dentro de la celda", () => {
    const consulta = consultaDeOverpass(
      { cocinas: ["ramen"], nombres: ["ラーメン", "ramen"] },
      TOKIO,
    );

    expect(consulta).toBe(
      "[out:json][timeout:20][bbox:35.6,139.7,35.7,139.8];(" +
        'nwr["amenity"~"^(restaurant|fast_food|food_court)$"]["cuisine"~"(^|;) *(ramen) *(;|$)"];' +
        'nwr["amenity"~"^(restaurant|fast_food|food_court)$"]["name"~"ラーメン|ramen",i];' +
        `);out center meta qt ${MAXIMO_POR_CELDA + 1};`,
    );
  });

  it("sin cocina ni nombre trae todos los lugares del tipo", () => {
    const consulta = consultaDeOverpass(
      { en: ["panaderia", "heladeria"] },
      TOKIO,
    );

    expect(consulta).toContain('nwr["shop"~"^(bakery)$"];');
    expect(consulta).toContain('nwr["amenity"~"^(ice_cream)$"];');
    expect(consulta).toContain('nwr["shop"~"^(ice_cream)$"];');
  });

  it("no arma una consulta con algo que no sea una palabra", () => {
    expect(() =>
      consultaDeOverpass({ nombres: ['ramen"];out;'] }, TOKIO),
    ).toThrow();
    expect(() =>
      consultaDeOverpass({ cocinas: ["Ramen|.*"] }, TOKIO),
    ).toThrow();
  });
});

describe("cerrado", () => {
  it("reconoce las formas de decir que cerró", () => {
    expect(cerrado({ disused: "yes" }, HOY)).toBe(true);
    expect(cerrado({ opening_hours: "closed" }, HOY)).toBe(true);
    expect(cerrado({ operational_status: "Closed" }, HOY)).toBe(true);
    expect(cerrado({ end_date: "2025-03" }, HOY)).toBe(true);
    expect(cerrado({ name: "Ramen Taro (cerrado)" }, HOY)).toBe(true);
    expect(cerrado({ name: "ラーメン太郎 閉店しました" }, HOY)).toBe(true);
  });

  it("no se confunde con lo que sigue abierto", () => {
    expect(
      cerrado({ name: "Ramen Taro", opening_hours: "Mo-Su 11:00-23:00" }, HOY),
    ).toBe(false);
    expect(cerrado({ end_date: "2027-01-01" }, HOY)).toBe(false);
  });
});

describe("webSegura", () => {
  it("deja pasar http y https, y completa el esquema que falta", () => {
    expect(webSegura("https://ramen.example/menu")).toBe(
      "https://ramen.example/menu",
    );
    expect(webSegura("www.ramen.example")).toBe("https://www.ramen.example/");
    expect(webSegura("https://a.example;https://b.example")).toBe(
      "https://a.example/",
    );
  });

  it("descarta lo que no es una página", () => {
    expect(webSegura("javascript:alert(1)")).toBeNull();
    expect(webSegura("mailto:hola@example.com")).toBeNull();
    expect(webSegura(undefined)).toBeNull();
  });
});

describe("lugaresDeLaRespuesta", () => {
  const respuesta = {
    elements: [
      {
        type: "node",
        id: 101,
        lat: 35.68123456,
        lon: 139.76987654,
        timestamp: "2025-09-01T10:00:00Z",
        user: "alguien",
        uid: 42,
        tags: {
          amenity: "restaurant",
          cuisine: "ramen;japanese",
          name: "一蘭",
          "name:en": "Ichiran",
          "addr:street": "Shinjuku",
          "addr:housenumber": "3-34",
          opening_hours: "24/7",
          website: "ichiran.example",
          phone: "+81 3-1234-5678",
          check_date: "2025-08-30",
        },
      },
      {
        type: "way",
        id: 202,
        center: { lat: 35.69, lon: 139.71 },
        tags: { amenity: "fast_food", name: "Ramen sin fecha" },
      },
      {
        type: "node",
        id: 303,
        lat: 35.65,
        lon: 139.75,
        tags: { amenity: "restaurant", name: "Ya no está", disused: "yes" },
      },
      {
        type: "node",
        id: 404,
        tags: { amenity: "restaurant", name: "Sin lugar" },
      },
    ],
  };

  it("se queda con lo que el mapa necesita y nada más", () => {
    const leido = lugaresDeLaRespuesta(respuesta, HOY);

    expect(leido?.recortado).toBe(false);
    expect(leido?.lugares).toEqual([
      {
        id: "node/101",
        nombre: "一蘭",
        nombreLatino: "Ichiran",
        lat: 35.68123,
        lon: 139.76988,
        tipo: "comida",
        direccion: "Shinjuku 3-34",
        horario: "24/7",
        web: "https://ichiran.example/",
        telefono: "+81 3-1234-5678",
        verificado: "2025-08-30",
        editado: "2025-09-01",
      },
      {
        id: "way/202",
        nombre: "Ramen sin fecha",
        nombreLatino: null,
        lat: 35.69,
        lon: 139.71,
        tipo: "comida",
        direccion: null,
        horario: null,
        web: null,
        telefono: null,
        verificado: null,
        editado: null,
      },
    ]);
    // Quién lo editó no sale del servidor.
    expect(JSON.stringify(leido)).not.toContain("alguien");
  });

  it("avisa cuando había más de los que se traen", () => {
    const muchos = {
      elements: Array.from({ length: MAXIMO_POR_CELDA + 1 }, (_, i) => ({
        type: "node",
        id: i + 1,
        lat: 35.6,
        lon: 139.7,
        tags: { amenity: "restaurant" },
      })),
    };
    const leido = lugaresDeLaRespuesta(muchos, HOY);

    expect(leido?.recortado).toBe(true);
    expect(leido?.lugares).toHaveLength(MAXIMO_POR_CELDA);
  });

  it("trata un error de Overpass como una falla, no como un mapa vacío", () => {
    expect(
      lugaresDeLaRespuesta(
        { elements: [], remark: 'runtime error: Query timed out in "query"' },
        HOY,
      ),
    ).toBeNull();
    expect(lugaresDeLaRespuesta({ nada: true }, HOY)).toBeNull();
    expect(lugaresDeLaRespuesta(null, HOY)).toBeNull();
  });
});
