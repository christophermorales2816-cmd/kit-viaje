import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * 404 propio (spec, sección 7).
 *
 * Sin esto, `notFound()` —que llaman las tres rutas de guía cuando el slug no
 * existe— cae en la página por defecto de Next: blanca, en inglés y sin
 * ninguna forma de volver. Es una ruta que un usuario alcanza tipeando mal una
 * URL o siguiendo un link viejo, así que la salida importa más que el aviso.
 */
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium">Error 404</p>

      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        Esta página no existe
      </h1>

      <p className="text-muted-foreground max-w-md text-pretty">
        Puede que el link esté mal escrito, o que apunte a un destino que
        todavía no cubrimos. Por ahora el único corredor es Argentina.
      </p>

      <Button asChild size="lg">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
