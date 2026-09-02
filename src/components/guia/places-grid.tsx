"use client";

import { useMemo, useState } from "react";

import type { GuidePlace } from "@/content/guias";
import { cn } from "@/lib/utils";

/**
 * "Adónde ir" (spec, sección 8.8).
 *
 * Mosaico de destinos con filtro por región. El filtro es estado de cliente y
 * nada más: no toca la URL ni pide datos, así que un click no cuesta una
 * navegación.
 *
 * LAS TARJETAS NO SON ENLACES, Y ES A PROPÓSITO
 *
 * En el patrón de referencia cada tarjeta abre la guía de ese destino. Acá esas
 * páginas no existen: hay una guía por país. Poner un enlace que lleva a
 * ninguna parte, o que rebota al mismo lugar, es peor que no ponerlo — el
 * usuario aprende que los clicks de esta página no hacen nada. Cuando haya
 * guías por destino, las tarjetas se vuelven enlaces sin tocar el resto.
 */

/** Tinte por región. Sin fotos todavía (8.6), el color es lo que distingue. */
const TINTES: Record<string, string> = {
  "Buenos Aires": "from-slate-800 to-slate-950",
  Patagonia: "from-sky-900 to-slate-950",
  "Norte y Litoral": "from-amber-900 to-slate-950",
  Cuyo: "from-rose-900 to-slate-950",
};

const TINTE_POR_DEFECTO = "from-slate-800 to-slate-950";

const TODAS = "Todas";

export function PlacesGrid({ places }: { places: GuidePlace[] }) {
  // El orden de las regiones sale del contenido, no de una lista aparte: si
  // alguien suma un destino de una región nueva, el filtro aparece solo.
  const regiones = useMemo(
    () => [TODAS, ...new Set(places.map((place) => place.region))],
    [places],
  );

  const [region, setRegion] = useState(TODAS);

  const visibles =
    region === TODAS
      ? places
      : places.filter((place) => place.region === region);

  return (
    <section
      aria-labelledby="destinos-titulo"
      className="flex w-full max-w-5xl flex-col gap-6"
    >
      <header className="flex flex-col gap-2">
        <h2
          id="destinos-titulo"
          className="text-3xl font-semibold tracking-tight text-balance"
        >
          Adónde ir
        </h2>

        <p className="text-muted-foreground text-sm text-pretty">
          Nueve destinos que anclan la mayoría de los viajes. Filtrá por región
          para armar tu ruta.
        </p>
      </header>

      <div
        role="group"
        aria-label="Filtrar por región"
        className="flex flex-wrap gap-2"
      >
        {regiones.map((nombre) => (
          <button
            key={nombre}
            type="button"
            onClick={() => setRegion(nombre)}
            aria-pressed={region === nombre}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors",
              region === nombre
                ? "bg-foreground text-background border-transparent"
                : "hover:bg-accent",
            )}
          >
            {nombre}
          </button>
        ))}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((place) => (
          <li
            key={place.id}
            className={cn(
              // La destacada ocupa dos columnas y dos filas, como en el
              // mosaico de referencia. En una sola columna no aplica.
              place.featured && "sm:col-span-2 sm:row-span-2",
            )}
          >
            <article
              className={cn(
                "flex h-full flex-col justify-end gap-2 rounded-xl bg-gradient-to-br p-5 text-slate-100",
                TINTES[place.region] ?? TINTE_POR_DEFECTO,
                place.featured ? "min-h-56" : "min-h-40",
              )}
            >
              <span className="w-fit rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase">
                {place.tag}
              </span>

              <h3
                className={cn(
                  "font-semibold tracking-tight",
                  place.featured ? "text-2xl" : "text-lg",
                )}
              >
                {place.name}
              </h3>

              <p className="text-sm text-pretty text-slate-300">
                {place.blurb}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
