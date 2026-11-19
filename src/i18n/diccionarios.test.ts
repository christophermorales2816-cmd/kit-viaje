import { describe, expect, it } from "vitest";

import { IDIOMAS, type PorIdioma } from "./idiomas";

/**
 * Las reglas de todos los diccionarios, que se encuentran solos: un
 * diccionario nuevo en src/i18n/ entra a estos tests sin anotarlo en ningún
 * lado.
 */
const MODULOS = import.meta.glob<Record<string, unknown>>("./*.ts", {
  eager: true,
});

/** Los exports que son un diccionario: un objeto con un valor por idioma. */
const DICCIONARIOS: [string, PorIdioma<unknown>][] = Object.entries(MODULOS)
  .filter(([ruta]) => !ruta.endsWith(".test.ts"))
  .flatMap(([ruta, modulo]) =>
    Object.entries(modulo)
      .filter(
        ([, valor]) =>
          typeof valor === "object" &&
          valor !== null &&
          IDIOMAS.every((idioma) => idioma in valor),
      )
      .map(([nombre, valor]): [string, PorIdioma<unknown>] => [
        `${ruta} ${nombre}`,
        valor as PorIdioma<unknown>,
      ]),
  );

/**
 * Cada texto del diccionario con su clave. Las funciones se llaman con números
 * de prueba: un plural o un texto con un número adentro tiene que dar algo
 * legible con uno y con varios.
 */
function textosDe(valor: unknown, clave = ""): [string, string][] {
  if (typeof valor === "string") return [[clave, valor]];

  if (typeof valor === "function") {
    const argumentos = (n: number) =>
      Array.from({ length: valor.length }, () => n);

    return [1, 3].map((n): [string, string] => [
      `${clave}(${n})`,
      String(valor(...argumentos(n))),
    ]);
  }

  if (Array.isArray(valor)) {
    return valor.flatMap((item, i) => textosDe(item, `${clave}[${i}]`));
  }

  if (typeof valor === "object" && valor !== null) {
    return Object.entries(valor).flatMap(([k, v]) =>
      textosDe(v, clave ? `${clave}.${k}` : k),
    );
  }

  return [];
}

/**
 * Formas del voseo que no van en el español del sitio, que es de tuteo neutro
 * (spec, 19.9): las que más aparecían cuando el sitio estaba en voseo. No es
 * la conjugación entera; es la red que ataja a las que se escapan por
 * costumbre.
 */
const VOSEO = new Set([
  "vos",
  "sos",
  "tenés",
  "podés",
  "querés",
  "sabés",
  "hacés",
  "decís",
  "necesitás",
  "llevás",
  "buscás",
  "viajás",
  "gastás",
  "pagás",
  "elegís",
  "preferís",
  "conocés",
  "encontrás",
  "probá",
  "elegí",
  "volvé",
  "mirá",
  "fijate",
  "andá",
  "hacé",
  "decí",
  "poné",
  "salí",
  "vení",
  "planificá",
  "buscá",
  "llevá",
  "llevate",
  "armá",
  "tocá",
  "escribí",
  "sumá",
  "cambiá",
  "agregá",
  "compartí",
  "guardá",
  "abrí",
  "cerrá",
  "seguí",
  "usá",
  "revisá",
  "consultá",
  "descubrí",
  "explorá",
  "encontrá",
  "reservá",
  "pedí",
  "empezá",
  "arrancá",
  "entrá",
  "ingresá",
  "copiá",
  "descargá",
  "imprimí",
  "borrá",
  "sacá",
  "dejá",
  "contá",
  "avisá",
  "viajá",
  "comé",
  "tomá",
  "acordate",
  "animate",
]);

describe("diccionarios", () => {
  it("encuentra los diccionarios del sitio", () => {
    expect(DICCIONARIOS.length).toBeGreaterThan(0);
  });

  it.each(DICCIONARIOS)("%s no tiene textos vacíos", (_, diccionario) => {
    for (const idioma of IDIOMAS) {
      for (const [clave, texto] of textosDe(diccionario[idioma])) {
        expect(texto.trim(), `${idioma}: ${clave}`).not.toBe("");
        expect(texto, `${idioma}: ${clave}`).not.toMatch(/undefined|NaN/);
      }
    }
  });

  it.each(DICCIONARIOS)(
    "%s tiene las mismas claves en cada idioma",
    (_, diccionario) => {
      const claves = (idioma: (typeof IDIOMAS)[number]) =>
        textosDe(diccionario[idioma]).map(([clave]) => clave);

      for (const idioma of IDIOMAS) {
        expect(claves(idioma), idioma).toEqual(claves("es"));
      }
    },
  );

  it.each(DICCIONARIOS)("%s habla de tú, no de vos", (_, diccionario) => {
    for (const [clave, texto] of textosDe(diccionario.es)) {
      const voseo = texto
        .toLowerCase()
        .split(/[^\p{L}]+/u)
        .filter((palabra) => VOSEO.has(palabra));

      expect(voseo, clave).toEqual([]);
    }
  });
});
