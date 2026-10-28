import type { MetadataRoute } from "next";

import { allCatalogos } from "@/content/comidas";
import { allGuides } from "@/content/guias";
import { urlDelSitio } from "@/lib/sitio/url";

/**
 * Las páginas públicas del sitio, para los buscadores.
 *
 * Sale del índice de guías, el mismo que genera las rutas: un país nuevo entra
 * al sitemap sin tocar este archivo. El planificador no entra —es un
 * formulario, no contenido— y los viajes tampoco (ver robots.ts). Vuelos sí:
 * el radar cambia todo el día (spec, 17.5). Y "Qué comer", con la página de
 * cada plato: "qué es el takoyaki" es una búsqueda (spec, 18.3).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sitio = urlDelSitio() ?? "";

  return [
    { url: `${sitio}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${sitio}/vuelos`, changeFrequency: "daily", priority: 0.7 },
    { url: `${sitio}/que-comer`, changeFrequency: "weekly", priority: 0.7 },
    ...allCatalogos().flatMap((catalogo) => [
      {
        url: `${sitio}/que-comer/${catalogo.slug}`,
        lastModified: catalogo.revisado,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      ...catalogo.platos.map((plato) => ({
        url: `${sitio}/que-comer/${catalogo.slug}/${plato.id}`,
        lastModified: catalogo.revisado,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ]),
    ...allGuides().flatMap((guia) => [
      {
        url: `${sitio}/guia/${guia.slug}`,
        lastModified: guia.factsUpdatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${sitio}/guia/${guia.slug}/preparar`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
    ]),
  ];
}
