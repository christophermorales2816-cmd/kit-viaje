import type { MetadataRoute } from "next";

import { allGuides } from "@/content/guias";
import { urlDelSitio } from "@/lib/sitio/url";

/**
 * Las páginas públicas del sitio, para los buscadores.
 *
 * Sale del índice de guías, el mismo que genera las rutas: un país nuevo entra
 * al sitemap sin tocar este archivo. El planificador no entra —es un
 * formulario, no contenido— y los viajes tampoco (ver robots.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sitio = urlDelSitio() ?? "";

  return [
    { url: `${sitio}/`, changeFrequency: "weekly", priority: 1 },
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
