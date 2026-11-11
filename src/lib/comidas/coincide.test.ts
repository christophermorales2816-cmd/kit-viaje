import { describe, expect, it } from "vitest";

import { allCatalogos } from "@/content/comidas";
import type { BusquedaEnElMapa } from "@/content/comidas/types";

import { coincide } from "./coincide";
import { ETIQUETAS } from "./osm";

/**
 * La misma regla, leída como la lee Overpass: las expresiones regulares que
 * arma `consultaDeOverpass` (osm.ts), aplicadas acá. Si `coincide` se aparta de
 * Overpass en algún caso, el mapa con datos propios mostraría otros lugares.
 */
function comoOverpass(
  busqueda: BusquedaEnElMapa,
  etiquetas: Record<string, string>,
): boolean {
  const delTipo = (busqueda.en ?? ["comida"]).some((tipo) =>
    ETIQUETAS[tipo].some(([clave, valores]) =>
      new RegExp(`^(${valores.join("|")})$`).test(etiquetas[clave] ?? "\u0000"),
    ),
  );

  if (!delTipo) return false;

  const condiciones: RegExp[] = [];
  const claves: string[] = [];

  if (busqueda.cocinas?.length) {
    condiciones.push(
      new RegExp(`(^|;) *(${busqueda.cocinas.join("|")}) *(;|$)`),
    );
    claves.push("cuisine");
  }

  if (busqueda.nombres?.length) {
    condiciones.push(new RegExp(busqueda.nombres.join("|"), "iu"));
    claves.push("name");
  }

  if (condiciones.length === 0) return true;

  return condiciones.some((condicion, i) => {
    const valor = etiquetas[claves[i]];
    return valor !== undefined && condicion.test(valor);
  });
}

/** Lugares de prueba para una búsqueda: los que deberían entrar y los que no. */
function casos(busqueda: BusquedaEnElMapa): Record<string, string>[] {
  const tipos = (busqueda.en ?? ["comida"]).flatMap((tipo) =>
    ETIQUETAS[tipo].map(([clave, valores]) => ({ [clave]: valores[0] })),
  );
  const otroTipo = { amenity: "bench" };
  const lista: Record<string, string>[] = [];

  for (const tipo of [...tipos, otroTipo]) {
    lista.push({ ...tipo });
    lista.push({ ...tipo, name: "Lugar sin nada que ver" });

    for (const cocina of busqueda.cocinas ?? []) {
      lista.push({ ...tipo, cuisine: cocina });
      lista.push({ ...tipo, cuisine: `japanese; ${cocina} ;local` });
      lista.push({ ...tipo, cuisine: `${cocina}_shop` });
      lista.push({ ...tipo, cuisine: cocina.toUpperCase() });
    }

    for (const nombre of busqueda.nombres ?? []) {
      lista.push({ ...tipo, name: `Casa ${nombre} del centro` });
      lista.push({ ...tipo, name: nombre.toUpperCase() });
      lista.push({ ...tipo, "name:en": nombre });
    }
  }

  return lista;
}

describe("coincide", () => {
  it("dice lo mismo que la consulta de Overpass, para cada plato del catálogo", () => {
    let comparados = 0;

    for (const catalogo of allCatalogos()) {
      for (const plato of catalogo.platos) {
        if (!plato.buscar) continue;

        for (const etiquetas of casos(plato.buscar)) {
          expect(
            coincide(plato.buscar, etiquetas),
            `${catalogo.slug}/${plato.id} con ${JSON.stringify(etiquetas)}`,
          ).toBe(comoOverpass(plato.buscar, etiquetas));
          comparados += 1;
        }
      }
    }

    // Que la comparación haya mirado de verdad muchos casos.
    expect(comparados).toBeGreaterThan(1000);
  });

  it("busca por cocina dentro de la lista, no por pedazos", () => {
    const ramen = { cocinas: ["ramen"] };

    expect(coincide(ramen, { amenity: "restaurant", cuisine: "ramen" })).toBe(
      true,
    );
    expect(
      coincide(ramen, { amenity: "restaurant", cuisine: "japanese;ramen" }),
    ).toBe(true);
    expect(
      coincide(ramen, { amenity: "restaurant", cuisine: "ramen_bar" }),
    ).toBe(false);
  });

  it("busca palabras en el nombre sin importar mayúsculas", () => {
    const parrilla = { nombres: ["parrilla"] };

    expect(
      coincide(parrilla, {
        amenity: "restaurant",
        name: "La Parrilla de Juan",
      }),
    ).toBe(true);
    expect(coincide(parrilla, { amenity: "restaurant", name: "Bodegón" })).toBe(
      false,
    );
  });

  it("solo en los tipos de lugar de la búsqueda", () => {
    const helado = { en: ["heladeria" as const] };

    expect(coincide(helado, { amenity: "ice_cream" })).toBe(true);
    expect(coincide(helado, { shop: "ice_cream" })).toBe(true);
    expect(coincide(helado, { amenity: "restaurant" })).toBe(false);
    // Sin `en`, es comida.
    expect(
      coincide({ nombres: ["sushi"] }, { shop: "bakery", name: "Sushi" }),
    ).toBe(false);
  });
});
