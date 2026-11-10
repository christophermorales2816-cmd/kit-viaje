import { describe, expect, it } from "vitest";

import type { CatalogoDeComida, Plato } from "@/content/comidas/types";

import {
  SIN_FILTROS,
  TODO_EL_PAIS,
  busquedaDeFiltros,
  cantidadDeFiltros,
  contarOpcion,
  esVegano,
  esVegetariano,
  filtrar,
  filtrosDeLaUrl,
  opcionesDelCatalogo,
  sinCerdoNiAlcohol,
  type Filtros,
} from "./filtros";

function plato(id: string, cambios: Partial<Plato> = {}): Plato {
  return {
    id,
    nombre: id,
    resumen: "",
    descripcion: "",
    sabor: "",
    ingredientes: [],
    contiene: [],
    picante: 0,
    precio: 1,
    momentos: ["almuerzo"],
    lugares: ["casual"],
    aventura: "para-todos",
    regiones: [],
    imperdible: false,
    paraComerSolo: false,
    sinMapa: "En casa.",
    foto: null,
    ...cambios,
  };
}

const ramen = plato("ramen", {
  contiene: ["cerdo", "huevo", "gluten", "soja"],
  precio: 2,
  imperdible: true,
  paraComerSolo: true,
});
const misoshiru = plato("misoshiru", { contiene: ["pescado", "soja"] });
const edamame = plato("edamame", {
  contiene: ["soja"],
  lugares: ["bar"],
  momentos: ["snack"],
});
const tamagoyaki = plato("tamagoyaki", {
  contiene: ["huevo"],
  regiones: ["kanto"],
});
const sake = plato("sake", {
  contiene: ["alcohol"],
  momentos: ["bebida"],
  lugares: ["bar", "tienda"],
});
const jingisukan = plato("jingisukan", {
  contiene: ["carne"],
  regiones: ["hokkaido"],
  precio: 3,
  picante: 1,
});

const PLATOS = [ramen, misoshiru, edamame, tamagoyaki, sake, jingisukan];

function con(cambios: Partial<Filtros>): Filtros {
  return { ...SIN_FILTROS, ...cambios };
}

const ids = (platos: Plato[]) => platos.map((p) => p.id);

describe("la dieta sale de lo que lleva el plato", () => {
  it("el caldo de pescado no es vegetariano", () => {
    expect(esVegetariano(misoshiru.contiene)).toBe(false);
  });

  it("el huevo es vegetariano y no vegano", () => {
    expect(esVegetariano(tamagoyaki.contiene)).toBe(true);
    expect(esVegano(tamagoyaki.contiene)).toBe(false);
  });

  it("sin cerdo ni alcohol deja afuera las dos cosas", () => {
    expect(sinCerdoNiAlcohol(ramen.contiene)).toBe(false);
    expect(sinCerdoNiAlcohol(sake.contiene)).toBe(false);
    expect(sinCerdoNiAlcohol(jingisukan.contiene)).toBe(true);
  });
});

describe("filtrar", () => {
  it("sin filtros deja todo, en el orden del catálogo", () => {
    expect(ids(filtrar(PLATOS, SIN_FILTROS))).toEqual(ids(PLATOS));
  });

  it("suma las opciones de un grupo", () => {
    expect(
      ids(filtrar(PLATOS, con({ dieta: ["vegano", "con-carne"] }))),
    ).toEqual(["ramen", "edamame", "sake", "jingisukan"]);
  });

  it("cruza los grupos entre sí", () => {
    expect(
      ids(filtrar(PLATOS, con({ dieta: ["vegano"], lugares: ["bar"] }))),
    ).toEqual(["edamame", "sake"]);
  });

  it("una región muestra lo típico de ahí, no lo de todo el país", () => {
    expect(ids(filtrar(PLATOS, con({ regiones: ["hokkaido"] })))).toEqual([
      "jingisukan",
    ]);
    expect(ids(filtrar(PLATOS, con({ regiones: [TODO_EL_PAIS] })))).toEqual([
      "ramen",
      "misoshiru",
      "edamame",
      "sake",
    ]);
  });

  it("los interruptores solo dejan lo que cumple", () => {
    expect(
      ids(filtrar(PLATOS, con({ imperdibles: true, paraComerSolo: true }))),
    ).toEqual(["ramen"]);
  });
});

describe("contarOpcion", () => {
  it("cuenta la opción sola dentro de su grupo, con el resto como está", () => {
    const filtros = con({ dieta: ["vegano"] });

    // Con "Vegano" elegido, "Con carne" igual dice cuántos platos con carne
    // hay: la opción se suma, no se cruza con su propio grupo.
    expect(contarOpcion(PLATOS, filtros, "dieta", "con-carne")).toBe(2);
    expect(contarOpcion(PLATOS, filtros, "lugares", "bar")).toBe(2);
    expect(contarOpcion(PLATOS, filtros, "precio", 3)).toBe(0);
  });

  it("cuenta los interruptores", () => {
    expect(contarOpcion(PLATOS, SIN_FILTROS, "sinCerdoNiAlcohol", true)).toBe(
      4,
    );
  });
});

describe("cantidadDeFiltros", () => {
  it("cuenta cada opción y cada interruptor", () => {
    expect(cantidadDeFiltros(SIN_FILTROS)).toBe(0);
    expect(
      cantidadDeFiltros(
        con({ dieta: ["vegano", "vegetariano"], imperdibles: true }),
      ),
    ).toBe(3);
  });
});

describe("opcionesDelCatalogo", () => {
  const catalogo = {
    regiones: [
      { id: "hokkaido", nombre: "Hokkaido" },
      { id: "kanto", nombre: "Kanto" },
      { id: "kyushu", nombre: "Kyushu" },
    ],
    platos: PLATOS,
  } as CatalogoDeComida;

  it("solo ofrece lo que tiene algún plato, en orden", () => {
    const opciones = opcionesDelCatalogo(catalogo);

    expect(opciones.lugares).toEqual(["casual", "bar", "tienda"]);
    expect(opciones.precio).toEqual([1, 2, 3]);
    expect(opciones.picante).toEqual([0, 1]);
    // Kyushu no tiene platos; "todo el país", sí.
    expect(opciones.regiones).toEqual(["hokkaido", "kanto", TODO_EL_PAIS]);
  });

  it("solo ofrece los interruptores que dejan afuera algún plato", () => {
    const todoParaSolo = {
      ...catalogo,
      platos: PLATOS.map((plato) => ({ ...plato, paraComerSolo: true })),
    };

    expect(opcionesDelCatalogo(catalogo).interruptores).toEqual([
      "imperdibles",
      "paraComerSolo",
      "sinCerdoNiAlcohol",
    ]);
    expect(opcionesDelCatalogo(todoParaSolo).interruptores).not.toContain(
      "paraComerSolo",
    );
  });
});

describe("los filtros en la URL", () => {
  it("van y vuelven", () => {
    const filtros = con({
      dieta: ["vegano"],
      precio: [1, 2],
      regiones: ["kanto"],
      paraComerSolo: true,
    });
    const busqueda = busquedaDeFiltros(filtros);

    expect(busqueda).toBe(
      "?dieta=vegano&precio=1,2&region=kanto&para-comer-solo=1",
    );
    expect(
      filtrosDeLaUrl(new URLSearchParams(busqueda), ["kanto", "hokkaido"]),
    ).toEqual(filtros);
  });

  it("ignora lo que no existe", () => {
    expect(
      filtrosDeLaUrl(
        new URLSearchParams("dieta=carnivoro,vegano&precio=9&region=marte"),
        ["kanto"],
      ),
    ).toEqual(con({ dieta: ["vegano"] }));
  });

  it("sin filtros no agrega nada a la URL", () => {
    expect(busquedaDeFiltros(SIN_FILTROS)).toBe("");
  });
});
