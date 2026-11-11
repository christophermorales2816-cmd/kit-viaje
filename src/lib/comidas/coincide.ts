import type { BusquedaEnElMapa } from "@/content/comidas/types";

import { ETIQUETAS } from "./osm";

/**
 * Si un lugar de OpenStreetMap es de los que busca un plato (spec, 18.4).
 *
 * Es la misma regla que arma `consultaDeOverpass`, escrita para leer los
 * extractos diarios sin preguntarle a nadie (18.10):
 *
 * - el lugar tiene que ser de uno de los tipos de la búsqueda (`en`, o comida
 *   si no dice), con el valor exacto de su etiqueta: `amenity=restaurant`;
 * - si la búsqueda no pide cocinas ni nombres, con eso alcanza;
 * - si pide, tiene que tener una de esas cocinas —`cuisine` puede traer
 *   varias, separadas por punto y coma: "ramen;japanese"— o una de esas
 *   palabras en el nombre, sin importar mayúsculas.
 *
 * Los tests de este archivo comparan las dos lecturas con los mismos casos.
 */
export function coincide(
  busqueda: BusquedaEnElMapa,
  etiquetas: Readonly<Record<string, string>>,
): boolean {
  const delTipo = (busqueda.en ?? ["comida"]).some((tipo) =>
    ETIQUETAS[tipo].some(([clave, valores]) =>
      valores.includes(etiquetas[clave]),
    ),
  );

  if (!delTipo) return false;

  const cocinas = busqueda.cocinas ?? [];
  const nombres = busqueda.nombres ?? [];

  if (cocinas.length === 0 && nombres.length === 0) return true;

  const cocinasDelLugar = (etiquetas.cuisine ?? "")
    .split(";")
    .map((cocina) => cocina.trim());

  if (cocinas.some((cocina) => cocinasDelLugar.includes(cocina))) return true;

  const nombre = etiquetas.name?.toLowerCase();

  return (
    nombre !== undefined &&
    nombres.some((palabra) => nombre.includes(palabra.toLowerCase()))
  );
}
