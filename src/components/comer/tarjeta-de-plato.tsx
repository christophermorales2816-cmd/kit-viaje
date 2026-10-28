import Link from "next/link";
import { Flame, Star } from "lucide-react";

import { fotoDe } from "@/content/comidas/fotos";
import type { Picante, Plato } from "@/content/comidas/types";
import { NOMBRES_DE_PICANTE, PRECIOS } from "@/lib/comidas/etiquetas";
import { esVegano, esVegetariano } from "@/lib/comidas/filtros";

import { FotoDeComidaImagen } from "./foto-de-comida";

/** Las llamitas del picante: ninguna, una, dos o tres. */
export function NivelDePicante({ nivel }: { nivel: Picante }) {
  if (nivel === 0) return null;

  return (
    <span
      className="inline-flex items-center text-orange-600"
      title={`Picante: ${NOMBRES_DE_PICANTE[nivel].toLowerCase()}`}
    >
      {Array.from({ length: nivel }, (_, i) => (
        <Flame key={i} className="size-3.5" aria-hidden="true" />
      ))}
      <span className="sr-only">
        Picante: {NOMBRES_DE_PICANTE[nivel].toLowerCase()}
      </span>
    </span>
  );
}

/** "Vegano", "Vegetariano" o nada: lo que más busca quien filtra por dieta. */
export function etiquetaDeDieta(plato: Plato): string | null {
  if (esVegano(plato.contiene)) return "Vegano";
  if (esVegetariano(plato.contiene)) return "Vegetariano";

  return null;
}

/**
 * Un plato del catálogo (spec, 18.3): la foto con su precio, el nombre y una
 * línea. Es un link a su página, así que sin JavaScript también lleva a la
 * ficha; con JavaScript, la ficha se abre encima del catálogo.
 *
 * El link se nombra con el plato y se describe con el resto: sin eso, un
 * lector de pantalla diría primero el precio y "Imperdible", que en la
 * pantalla están arriba, sobre la foto.
 */
export function TarjetaDePlato({
  plato,
  href,
}: {
  plato: Plato;
  href: string;
}) {
  const foto = fotoDe(plato.foto);
  const dieta = etiquetaDeDieta(plato);
  const precio = PRECIOS[plato.precio];
  const id = `plato-${plato.id}`;

  return (
    <Link
      href={href}
      scroll={false}
      aria-labelledby={`${id}-nombre`}
      aria-describedby={`${id}-resumen ${id}-precio`}
      className="group bg-card hover:border-foreground/30 focus-visible:ring-ring flex h-full flex-col overflow-hidden rounded-xl border transition-colors focus-visible:ring-2 focus-visible:outline-none"
    >
      <div className="bg-muted relative aspect-[4/3] w-full overflow-hidden">
        {foto ? (
          <FotoDeComidaImagen
            foto={foto}
            alt={plato.nombre}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          // Sin foto con licencia, el nombre como lo vas a ver escrito allá:
          // también ayuda a reconocerlo en un menú.
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4 text-center">
            <span
              className="font-serif text-2xl text-balance text-orange-950/70"
              aria-hidden="true"
            >
              {plato.local ?? plato.nombre}
            </span>
          </div>
        )}

        <span className="absolute right-2 bottom-2 rounded-full bg-white/95 px-2 py-0.5 text-xs font-semibold text-slate-900 shadow-sm">
          <span aria-hidden="true">{precio.simbolo}</span>
          <span id={`${id}-precio`} className="sr-only">
            {plato.imperdible ? "Imperdible. " : ""}
            {precio.simbolo}, {precio.rango}.
          </span>
        </span>

        {plato.imperdible && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-slate-950/85 px-2 py-0.5 text-xs font-medium text-white">
            <Star className="size-3 fill-current" aria-hidden="true" />
            Imperdible
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3
            id={`${id}-nombre`}
            className="leading-snug font-semibold text-balance"
          >
            {plato.nombre}
          </h3>
          <NivelDePicante nivel={plato.picante} />
        </div>

        {plato.local && plato.local !== plato.nombre && (
          <p className="text-muted-foreground text-xs">{plato.local}</p>
        )}

        <p
          id={`${id}-resumen`}
          className="text-muted-foreground text-sm text-pretty"
        >
          {plato.resumen}
        </p>

        {dieta && (
          <p className="mt-auto pt-1 text-xs font-medium text-emerald-700">
            {dieta}
          </p>
        )}
      </div>
    </Link>
  );
}
