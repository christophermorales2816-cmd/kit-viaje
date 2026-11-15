import Link from "next/link";

import {
  rasgoDeLaGuia,
  type GuiasDeUnaZona,
} from "@/content/guias/continentes";

/**
 * Las guías de una o varias zonas, en tarjetas (spec, 19.3).
 *
 * Es la lista que estaba en la portada bajo "Elegí tu destino". Se mudó a
 * /destinos y a la página de cada continente: la portada ahora invita a
 * explorar, y la lista completa vive en su propia página.
 *
 * Al lado del nombre va el primer número de la guía, lo que más cambia cómo se
 * prepara ese viaje ("3.600 m sobre el mar en La Paz").
 */
export function ListaDeDestinos({
  grupos,
  nivel,
}: {
  grupos: GuiasDeUnaZona[];
  /** El nivel del título de cada zona, según dónde esté la lista. */
  nivel: 2 | 3;
}) {
  const Titulo = nivel === 2 ? "h2" : "h3";

  return (
    <div className="flex flex-col gap-10">
      {grupos.map(({ zona, guias }) => (
        <div key={zona} className="flex flex-col gap-4">
          <Titulo className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            {zona}
          </Titulo>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guias.map((guia) => (
              <li key={guia.slug}>
                <Link
                  href={`/guia/${guia.slug}`}
                  className="hover:bg-muted focus-visible:ring-ring/50 flex h-full flex-col gap-1 rounded-xl border p-4 transition-colors outline-none focus-visible:ring-[3px]"
                >
                  <span className="font-medium">{guia.country}</span>
                  <span className="text-muted-foreground text-sm text-pretty">
                    {rasgoDeLaGuia(guia)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
