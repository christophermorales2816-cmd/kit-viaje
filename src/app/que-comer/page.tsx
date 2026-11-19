import type { Metadata } from "next";
import Link from "next/link";

import { allCatalogos, guiaDelCatalogo } from "@/content/comidas";
import type { CatalogoDeComida } from "@/content/comidas/types";
import { allGuides, type GuideSubregion } from "@/content/guias";
import { enumerar } from "@/lib/comidas/etiquetas";
import { formatCount } from "@/lib/format";
import { TEXTOS_DE_COMIDAS } from "@/i18n/comidas";
import { textos } from "@/i18n/servidor";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Qué comer y beber: los países con catálogo (spec, 18.2).
 *
 * Solo aparecen los que ya tienen el suyo: una lista de 165 países con la
 * mayoría vacíos sería prometer lo que todavía no está. Se dice cuántos son y
 * que el resto se suma de a tandas.
 */

export async function generateMetadata(): Promise<Metadata> {
  const { metadatos } = (await textos(TEXTOS_DE_COMIDAS)).indice;

  return { title: metadatos.titulo, description: metadatos.descripcion };
}

const CATALOGOS = allCatalogos();

/** Tres imperdibles y el resto, para la tarjeta: "Sushi, ramen, okonomiyaki y 36 más". */
function resumen(
  catalogo: CatalogoDeComida,
  yMas: (cantidad: number) => string,
): string {
  const nombres = catalogo.platos
    .filter((plato) => plato.imperdible)
    .slice(0, 3)
    .map((plato) => plato.nombre.toLowerCase());
  const resto = catalogo.platos.length - nombres.length;
  const texto = enumerar(resto > 0 ? [...nombres, yMas(resto)] : nombres);

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

export default async function QueComer() {
  const t = (await textos(TEXTOS_DE_COMIDAS)).indice;
  const platos = CATALOGOS.reduce(
    (total, catalogo) => total + catalogo.platos.length,
    0,
  );

  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-slate-950 px-6 py-14 text-slate-100 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-orange-300 uppercase">
            {NOMBRE_DEL_SITIO}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {t.titulo}
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-slate-300">
            {t.bajada}
          </p>
          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">
                {t.paises(CATALOGOS.length)}
              </dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">
                {CATALOGOS.length}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">
                {t.platosYBebidas}
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
            {t.eligeElPais}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
            {t.porAhora(CATALOGOS.length, allGuides().length)}
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
                      {resumen(catalogo, t.yMas)}
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
