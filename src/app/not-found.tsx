import Link from "next/link";

import { Button } from "@/components/ui/button";
import { allGuides } from "@/content/guias";
import { idiomaActual, textos } from "@/i18n/servidor";
import { TEXTOS_DEL_SITIO } from "@/i18n/sitio";

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
export default async function NotFound() {
  const idioma = await idiomaActual();
  const { noEncontrada: t, error } = await textos(TEXTOS_DEL_SITIO);

  // Las guías por nombre, como un índice: con más de cien destinos, el orden
  // en que se sumaron no le sirve a nadie para encontrar el suyo. El orden
  // alfabético es el del idioma de la página.
  const guiasPorNombre = [...allGuides()].sort((a, b) =>
    a.country.localeCompare(b.country, idioma),
  );

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium">{t.codigo}</p>

      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {t.titulo}
      </h1>

      <p className="text-muted-foreground max-w-md text-pretty">
        {t.explicacion}
      </p>

      <nav aria-label={t.guiasDisponibles} className="flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">{t.estasSonLasGuias}</p>

        <ul className="flex flex-wrap justify-center gap-2">
          {guiasPorNombre.map((guia) => (
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
        <Link href="/">{error.volverAlInicio}</Link>
      </Button>
    </main>
  );
}
