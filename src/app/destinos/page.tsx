import type { Metadata } from "next";

import { ListaDeDestinos } from "@/components/destinos/lista-de-destinos";
import { allGuides } from "@/content/guias";
import {
  CONTINENTES,
  guiasDelContinente,
  guiasPorZona,
} from "@/content/guias/continentes";

/**
 * Todos los destinos, por continente y zona (spec, 19.3).
 *
 * Es la lista que estaba en la portada. Desde acá se elige cualquier país sin
 * depender del globo, que muestra un lado a la vez.
 */

const GUIAS = allGuides();

export const metadata: Metadata = {
  title: "Destinos",
  description: `Los ${GUIAS.length} destinos de GlobalSunstone, por continente: cada uno con su guía, su clima mes a mes y su presupuesto en moneda local.`,
};

export default function Destinos() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-slate-950 px-6 py-14 text-slate-100 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-orange-300 uppercase">
            GlobalSunstone
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Destinos
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-slate-300">
            {GUIAS.length} destinos en cinco continentes. Cada uno tiene su
            guía, su clima mes a mes por ciudad y su presupuesto en moneda
            local; al lado del nombre, lo que más cambia cómo se prepara ese
            viaje.
          </p>

          <nav aria-label="Continentes" className="pt-2">
            <ul className="flex flex-wrap gap-2">
              {CONTINENTES.map((continente) => (
                <li key={continente.id}>
                  <a
                    href={`#${continente.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition-colors outline-none hover:bg-white/10 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
                  >
                    {continente.nombre}
                    <span className="text-xs text-slate-400 tabular-nums">
                      {guiasDelContinente(continente.id, GUIAS).length}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {CONTINENTES.map((continente) => (
        <section
          key={continente.id}
          id={continente.id}
          aria-labelledby={`${continente.id}-titulo`}
          className="mx-auto flex w-full max-w-5xl scroll-mt-20 flex-col gap-8 border-b px-6 py-14 last:border-b-0"
        >
          <header className="flex flex-col gap-1">
            <h2
              id={`${continente.id}-titulo`}
              className="text-3xl font-semibold tracking-tight"
            >
              {continente.nombre}
            </h2>
            <p className="text-muted-foreground text-sm text-pretty">
              {continente.resumen}
            </p>
          </header>

          <ListaDeDestinos
            grupos={guiasPorZona(guiasDelContinente(continente.id, GUIAS))}
            nivel={3}
          />
        </section>
      ))}
    </main>
  );
}
