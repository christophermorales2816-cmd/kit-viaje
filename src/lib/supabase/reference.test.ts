import { describe, expect, it } from "vitest";

import { pickDestination, type Destination } from "./reference";

/**
 * Qué ciudad mira la página cuando la URL trae una (spec, 11.4).
 *
 * Es la única lógica de este módulo —todo lo demás es I/O y mapeo— y decide
 * algo que se ve: si el slug no resuelve, la página muestra otra ciudad. Que
 * caiga en la base y no en "la primera que devuelva Postgres" es justamente lo
 * que se arregló al agregar `is_base`.
 */

function ciudad(slug: string, isBase = false): Destination {
  return {
    id: `id-${slug}`,
    name: slug,
    corridor: "argentina",
    baseCurrency: "ARS",
    isBase,
    slug,
  };
}

const CIUDADES = [
  ciudad("buenos-aires", true),
  ciudad("ushuaia"),
  ciudad("mendoza"),
];

describe("pickDestination", () => {
  it("devuelve la ciudad que pide el slug", () => {
    expect(pickDestination(CIUDADES, "ushuaia")?.slug).toBe("ushuaia");
  });

  it("sin slug devuelve la base", () => {
    expect(pickDestination(CIUDADES, undefined)?.slug).toBe("buenos-aires");
  });

  it("con un slug que no existe devuelve la base, no un error", () => {
    // La página sigue siendo la del país: mostrar su ciudad base es más útil
    // que un 404 por una letra mal tipeada en la URL.
    expect(pickDestination(CIUDADES, "cordoba")?.slug).toBe("buenos-aires");
    expect(pickDestination(CIUDADES, "")?.slug).toBe("buenos-aires");
  });

  it("no depende del orden de la lista para encontrar la base", () => {
    // El orden lo decide Postgres. Si la base no viniera primera, tomar el
    // primer elemento mostraría una ciudad al azar — que es el bug que motivó
    // la columna is_base.
    const desordenadas = [ciudad("ushuaia"), ciudad("buenos-aires", true)];

    expect(pickDestination(desordenadas, undefined)?.slug).toBe("buenos-aires");
  });

  it("sin ninguna base marcada cae en la primera, sin romperse", () => {
    const sinBase = [ciudad("ushuaia"), ciudad("mendoza")];

    expect(pickDestination(sinBase, undefined)?.slug).toBe("ushuaia");
  });

  it("devuelve undefined solo cuando no hay ninguna ciudad", () => {
    expect(pickDestination([], "ushuaia")).toBeUndefined();
    expect(pickDestination([], undefined)).toBeUndefined();
  });
});
