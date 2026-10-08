import type { MetadataRoute } from "next";

import { urlDelSitio } from "@/lib/sitio/url";

/**
 * Qué pueden recorrer los buscadores.
 *
 * Todo, menos los viajes: `/viaje/{edit_token}` es la llave de edición de
 * alguien y `/viaje/ver/{slug}` es un link que su dueño compartió con quien
 * quiso, no con un buscador. Las dos páginas ya llevan `noindex`; esto evita
 * además que un buscador las visite.
 */
export default function robots(): MetadataRoute.Robots {
  const sitio = urlDelSitio();

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/viaje/" },
    ...(sitio ? { sitemap: `${sitio}/sitemap.xml` } : {}),
  };
}
