import { allGuides, getGuide, type DestinationGuide } from "@/content/guias";

import { argentina } from "./argentina";
import { bolivia } from "./bolivia";
import { brasil } from "./brasil";
import { chile } from "./chile";
import { colombia } from "./colombia";
import { costaRica } from "./costa-rica";
import { cuba } from "./cuba";
import { ecuador } from "./ecuador";
import { elSalvador } from "./el-salvador";
import { guatemala } from "./guatemala";
import { honduras } from "./honduras";
import { japon } from "./japon";
import { mexico } from "./mexico";
import { nicaragua } from "./nicaragua";
import { panama } from "./panama";
import { paraguay } from "./paraguay";
import { peru } from "./peru";
import { republicaDominicana } from "./republica-dominicana";
import { uruguay } from "./uruguay";
import { venezuela } from "./venezuela";
import type { CatalogoDeComida, Plato } from "./types";

export type {
  Aventura,
  BusquedaEnElMapa,
  CatalogoDeComida,
  CiudadDelMapa,
  Contiene,
  IngredienteDeLaDespensa,
  Lugar,
  Mencion,
  Momento,
  Picante,
  Plato,
  Precio,
  Region,
  TipoDeLugarOsm,
  TipoDeMencion,
} from "./types";

/**
 * Los catálogos de "Qué comer y beber", por slug (spec, sección 18).
 *
 * Un país tiene catálogo cuando tiene su archivo y su línea acá: los demás no
 * aparecen en /que-comer hasta que lo tengan, en vez de mostrar una página
 * vacía. El orden no importa: se muestran en el de las guías.
 */
const CATALOGOS: CatalogoDeComida[] = [
  argentina,
  bolivia,
  brasil,
  chile,
  colombia,
  costaRica,
  cuba,
  ecuador,
  elSalvador,
  guatemala,
  honduras,
  japon,
  mexico,
  nicaragua,
  panama,
  paraguay,
  peru,
  republicaDominicana,
  uruguay,
  venezuela,
];

const POR_SLUG = new Map(
  CATALOGOS.map((catalogo) => [catalogo.slug, catalogo]),
);

/** Los catálogos, en el orden de las guías: por continente y de oeste a este. */
export function allCatalogos(): CatalogoDeComida[] {
  return allGuides()
    .map((guia) => POR_SLUG.get(guia.slug))
    .filter((catalogo): catalogo is CatalogoDeComida => catalogo !== undefined);
}

/** `undefined` cuando el país no tiene catálogo: la ruta responde 404. */
export function getCatalogo(slug: string): CatalogoDeComida | undefined {
  return POR_SLUG.get(slug);
}

export function getPlato(
  catalogo: CatalogoDeComida,
  id: string,
): Plato | undefined {
  return catalogo.platos.find((plato) => plato.id === id);
}

/**
 * La guía del país de un catálogo, de donde salen su nombre y su zona. El test
 * de contenido garantiza que existe.
 */
export function guiaDelCatalogo(catalogo: CatalogoDeComida): DestinationGuide {
  const guia = getGuide(catalogo.slug);

  if (!guia) {
    throw new Error(`El catálogo "${catalogo.slug}" no tiene guía.`);
  }

  return guia;
}
