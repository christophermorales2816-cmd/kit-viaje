import { describe, expect, it } from "vitest";

import { getCatalogo } from "@/content/comidas";

import {
  elementoDeLaLinea,
  filasDelExtracto,
  filtroDeOsmium,
} from "./extracto";

const HOY = new Date("2026-11-11T06:00:00Z");
const JAPON = getCatalogo("japon")!;

/**
 * Líneas como las da `osmium export -f geojsonseq -a type,id,timestamp` sobre
 * un extracto de prueba de Tokio: cada una empieza con el separador U+001E, y
 * el edificio (way/100) viene dos veces, como línea y como área.
 */
const LINEAS = [
  '\u001e{"type":"Feature","geometry":{"type":"Point","coordinates":[139.7671,35.6812]},"properties":{"@type":"node","@id":1,"@timestamp":1756720800,"amenity":"restaurant","cuisine":"ramen;japanese","name":"一蘭","opening_hours":"24/7"}}',
  '\u001e{"type":"Feature","geometry":{"type":"Point","coordinates":[139.7,35.69]},"properties":{"@type":"node","@id":2,"@timestamp":1546336800,"amenity":"fast_food","name":"すき家 新宿店"}}',
  '\u001e{"type":"Feature","geometry":{"type":"Point","coordinates":[139.701,35.695]},"properties":{"@type":"node","@id":3,"@timestamp":1714557600,"shop":"bakery","name":"Pan"}}',
  '\u001e{"type":"Feature","geometry":{"type":"LineString","coordinates":[[139.73,35.66],[139.731,35.66],[139.731,35.661],[139.73,35.661],[139.73,35.66]]},"properties":{"@type":"way","@id":100,"@timestamp":1677812583,"building":"yes","amenity":"restaurant","name":"らーめん 太郎"}}',
  '\u001e{"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[139.73,35.66],[139.731,35.66],[139.731,35.661],[139.73,35.661],[139.73,35.66]]]]},"properties":{"@type":"way","@id":100,"@timestamp":1677812583,"building":"yes","amenity":"restaurant","name":"らーめん 太郎"}}',
];

async function todas<T>(filas: AsyncIterable<T>): Promise<T[]> {
  const lista: T[] = [];
  for await (const fila of filas) lista.push(fila);
  return lista;
}

describe("filtroDeOsmium", () => {
  it("deja pasar todos los tipos de lugar de comida, agrupados por etiqueta", () => {
    const filtro = filtroDeOsmium();

    expect(filtro).toContain(
      "nwr/amenity=restaurant,fast_food,food_court,cafe,bar,pub,biergarten,ice_cream,marketplace",
    );
    expect(filtro.find((regla) => regla.startsWith("nwr/shop="))).toContain(
      "bakery",
    );
    expect(filtro).toHaveLength(2);
  });
});

describe("elementoDeLaLinea", () => {
  it("lee un nodo como lo daría Overpass", () => {
    expect(elementoDeLaLinea(LINEAS[0])).toEqual({
      type: "node",
      id: 1,
      lat: 35.6812,
      lon: 139.7671,
      tags: {
        amenity: "restaurant",
        cuisine: "ramen;japanese",
        name: "一蘭",
        opening_hours: "24/7",
      },
      timestamp: "2025-09-01T10:00:00.000Z",
    });
  });

  it("a un edificio le pone el centro de su caja, como `out center`", () => {
    expect(elementoDeLaLinea(LINEAS[4])).toMatchObject({
      type: "way",
      id: 100,
      center: { lat: 35.6605, lon: 139.7305 },
    });
  });

  it("no se rompe con una línea vacía o rota", () => {
    expect(elementoDeLaLinea("")).toBeNull();
    expect(elementoDeLaLinea("\u001e{roto")).toBeNull();
    expect(
      elementoDeLaLinea('{"type":"Feature","geometry":null,"properties":{}}'),
    ).toBeNull();
  });
});

describe("filasDelExtracto", () => {
  it("da una fila por cada plato que busca cada lugar, una sola vez por lugar", async () => {
    const filas = await todas(filasDelExtracto(LINEAS, JAPON, HOY));

    expect(
      filas.map(({ plato, osm, celda }) => `${plato} ${osm} ${celda}`).sort(),
    ).toEqual([
      "gyudon node/2 356_1397",
      "melon-pan node/3 356_1397",
      "ramen node/1 356_1397",
      "ramen way/100 356_1397",
    ]);

    const ichiran = filas.find((fila) => fila.osm === "node/1")!;
    expect(ichiran.lugar).toMatchObject({
      id: "node/1",
      nombre: "一蘭",
      tipo: "comida",
      horario: "24/7",
      editado: "2025-09-01",
    });
  });

  it("deja afuera lo que el mapa del país nunca va a pedir", async () => {
    // Un ramen en Buenos Aires no es parte del mapa de Japón.
    const lejos =
      '\u001e{"type":"Feature","geometry":{"type":"Point","coordinates":[-58.38,-34.6]},"properties":{"@type":"node","@id":9,"amenity":"restaurant","cuisine":"ramen"}}';

    expect(await todas(filasDelExtracto([lejos], JAPON, HOY))).toEqual([]);
  });

  it("deja afuera lo cerrado, igual que con Overpass", async () => {
    const cerrado =
      '\u001e{"type":"Feature","geometry":{"type":"Point","coordinates":[139.7671,35.6812]},"properties":{"@type":"node","@id":7,"amenity":"restaurant","cuisine":"ramen","disused:amenity":"restaurant","end_date":"2025-01-01"}}';

    expect(await todas(filasDelExtracto([cerrado], JAPON, HOY))).toEqual([]);
  });
});
