import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
