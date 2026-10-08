import path from "node:path";

import type { NextConfig } from "next";

import {
  VIAJE_HEADERS,
  entornoActual,
  securityHeaders,
} from "./src/lib/seguridad/headers";

const nextConfig: NextConfig = {
  // Que la respuesta no anuncie el framework: no frena a nadie decidido, pero
  // tampoco hay por qué regalar el dato.
  poweredByHeader: false,

  turbopack: {
    /**
     * Ancla la raíz al proyecto.
     *
     * Turbopack la infiere buscando el lockfile más arriba en el árbol, y si el
     * usuario tiene un package-lock.json suelto en su home —cosa bastante
     * común— termina eligiendo el home como raíz: avisa por consola y se pone a
     * mirar el sistema de archivos entero. Con esto la raíz es la del repo,
     * donde está el lockfile que importa.
     */
    root: path.join(__dirname),
  },

  /** Ver src/lib/seguridad/headers.ts: qué hace cada uno y por qué. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders(entornoActual(process.env)),
      },
      {
        // El último que coincide gana: estas reemplazan el Referrer-Policy
        // general solo en las páginas de un viaje.
        source: "/viaje/:path*",
        headers: VIAJE_HEADERS,
      },
    ];
  },
};

export default nextConfig;
