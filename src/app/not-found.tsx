import Link from "next/link";

import { Button } from "@/components/ui/button";
import { allGuides } from "@/content/guias";

/**
 * 404 propio (spec, sección 7).
 *
 * Sin esto, `notFound()` —que llaman las tres rutas de guía cuando el slug no
 * existe— cae en la página por defecto de Next: blanca, en inglés y sin
 * ninguna forma de volver. Es una ruta que un usuario alcanza tipeando mal una
 * URL o siguiendo un link viejo, así que la salida importa más que el aviso.
 *
 * QUÉ PAÍSES CUBRIMOS SE LEE DEL CONTENIDO, NO DE UNA FRASE ESCRITA A MANO.
 * Decía "por ahora el único corredor es Argentina" con Brasil y Bolivia ya
 * publicados: una página de error que miente sobre el estado del producto es
 * peor que no decir nada, porque el lector la cree y se va. Un dato que hay que
 * acordarse de actualizar en cada país es un dato que va a quedar viejo.
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
        todavía no cubrimos.
      </p>

      <nav aria-label="Guías disponibles" className="flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">
          Estas son las guías que sí tenemos:
        </p>

        <ul className="flex flex-wrap justify-center gap-2">
          {allGuides().map((guia) => (
            <li key={guia.slug}>
              <Link
                href={`/guia/${guia.slug}`}
                className="hover:bg-muted rounded-full border px-4 py-2 text-sm transition-colors"
              >
                {guia.country}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button asChild size="lg">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
