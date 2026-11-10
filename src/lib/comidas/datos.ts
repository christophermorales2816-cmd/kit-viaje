import "server-only";

import { notFound } from "next/navigation";

import {
  allCatalogos,
  getCatalogo,
  getPlato,
  guiaDelCatalogo,
} from "@/content/comidas";
import type { CatalogoDeComida, Mencion, Plato } from "@/content/comidas/types";
import type { DestinationGuide } from "@/content/guias";

import { mencionesVigentes } from "./menciones";

/**
 * Lo que necesitan las páginas de "Qué comer" (spec, 18.2), en un solo lugar:
 * la página del país, la del plato y la ventana que se abre encima del
 * catálogo leen lo mismo, y un slug que no existe es 404 en las tres.
 */

export interface DatosDelPais {
  catalogo: CatalogoDeComida;
  guia: DestinationGuide;
  /** Las que siguen abiertas en OpenStreetMap. */
  menciones: Mencion[];
}

export interface DatosDelPlato extends DatosDelPais {
  plato: Plato;
  /** Las vigentes que se mencionan por este plato. */
  mencionesDelPlato: Mencion[];
}

export async function datosDelPais(slug: string): Promise<DatosDelPais> {
  const catalogo = getCatalogo(slug);

  if (!catalogo) notFound();

  return {
    catalogo,
    guia: guiaDelCatalogo(catalogo),
    menciones: await mencionesVigentes(catalogo.menciones),
  };
}

export async function datosDelPlato(
  slug: string,
  id: string,
): Promise<DatosDelPlato> {
  const datos = await datosDelPais(slug);
  const plato = getPlato(datos.catalogo, id);

  if (!plato) notFound();

  return {
    ...datos,
    plato,
    mencionesDelPlato: datos.menciones.filter((mencion) =>
      mencion.platos.includes(plato.id),
    ),
  };
}

/** Los parámetros de todas las páginas de platos, para generarlas al construir. */
export function parametrosDePlatos(): { slug: string; plato: string }[] {
  return allCatalogos().flatMap((catalogo) =>
    catalogo.platos.map((plato) => ({ slug: catalogo.slug, plato: plato.id })),
  );
}
