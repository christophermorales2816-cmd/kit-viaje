import type { Metadata } from "next";
import Link from "next/link";

import { allCatalogos, guiaDelCatalogo } from "@/content/comidas";
import type { CatalogoDeComida } from "@/content/comidas/types";
import { allGuides, type GuideSubregion } from "@/content/guias";
import { enumerar } from "@/lib/comidas/etiquetas";
import { formatCount } from "@/lib/format";

/**
 * Qué comer y beber: los países con catálogo (spec, 18.2).
 *
 * Solo aparecen los que ya tienen el suyo: una lista de 165 países con la
 * mayoría vacíos sería prometer lo que todavía no está. Se dice cuántos son y
 * que el resto se suma de a tandas.
 */

export const metadata: Metadata = {
  title: "Qué comer y beber en cada país — Kit de viaje",
  description:
    "Los platos y las bebidas de cada país: qué llevan, a qué saben, cuánto salen y dónde los sirven hoy, con filtros para tu dieta.",
};

const CATALOGOS = allCatalogos();

/** Tres imperdibles y el resto, para la tarjeta: "Sushi, ramen, okonomiyaki y 36 más". */
function resumen(catalogo: CatalogoDeComida): string {
  const nombres = catalogo.platos
    .filter((plato) => plato.imperdible)
    .slice(0, 3)
    .map((plato) => plato.nombre.toLowerCase());
  const resto = catalogo.platos.length - nombres.length;
  const texto = enumerar(resto > 0 ? [...nombres, `${resto} más`] : nombres);

  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/** Por zona, en el orden en que aparecen las guías. */
function porZona() {
  const zonas = new Map<GuideSubregion, CatalogoDeComida[]>();

  for (const catalogo of CATALOGOS) {
    const { subregion } = guiaDelCatalogo(catalogo);

    zonas.set(subregion, [...(zonas.get(subregion) ?? []), catalogo]);
  }

  return [...zonas];
}

export default function QueComer() {
  const platos = CATALOGOS.reduce(
    (total, catalogo) => total + catalogo.platos.length,
    0,
  );

  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-slate-950 px-6 py-14 text-slate-100 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-orange-300 uppercase">
            Kit de viaje
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Qué comer y beber
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-slate-300">
            En cada país, lo que no te podés ir sin probar: qué lleva, a qué
            sabe, cuánto sale y dónde lo sirven hoy. Con filtros para tu dieta y
            un mapa de los lugares que se renueva todos los días.
          </p>
          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">países</dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">
                {CATALOGOS.length}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">
                platos y bebidas
              </dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">
                {formatCount(platos)}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section
        aria-labelledby="paises"
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14"
      >
        <div className="flex flex-col gap-2">
          <h2 id="paises" className="text-3xl font-semibold tracking-tight">
            Elegí el país
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
            Por ahora, {CATALOGOS.length} de los {allGuides().length} destinos
            del sitio. Los demás se suman de a tandas.
          </p>
        </div>

        {porZona().map(([zona, catalogos]) => (
          <div key={zona} className="flex flex-col gap-4">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              {zona}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {catalogos.map((catalogo) => (
                <li key={catalogo.slug}>
                  <Link
                    href={`/que-comer/${catalogo.slug}`}
                    className="hover:bg-muted flex h-full flex-col gap-1 rounded-xl border p-4 transition-colors"
                  >
                    <span className="font-medium">
                      {guiaDelCatalogo(catalogo).country}
                    </span>
                    <span className="text-muted-foreground text-sm text-pretty">
                      {resumen(catalogo)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
