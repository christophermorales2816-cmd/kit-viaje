import Link from "next/link";
import { notFound } from "next/navigation";

import { ListaDeDestinos } from "@/components/destinos/lista-de-destinos";
import {
  CONTINENTES,
  getContinente,
  guiasDelContinente,
  guiasPorZona,
} from "@/content/guias/continentes";

/**
 * Los destinos de un continente (spec, 19.3). Es adonde lleva cada continente
 * del menú "Destinos" y de la portada.
 */

export function generateStaticParams() {
  return CONTINENTES.map((continente) => ({ continente: continente.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/destinos/[continente]">) {
  const { continente: id } = await params;
  const continente = getContinente(id);

  if (!continente) return {};

  return {
    title: `Destinos en ${continente.nombre} — Kit de viaje`,
    description: `${continente.resumen} Los ${guiasDelContinente(continente.id).length} destinos de ${continente.nombre}, cada uno con su guía, su clima y su presupuesto.`,
  };
}

export default async function DestinosDelContinente({
  params,
}: PageProps<"/destinos/[continente]">) {
  const { continente: id } = await params;
  const continente = getContinente(id);

  if (!continente) notFound();

  const guias = guiasDelContinente(continente.id);
  const grupos = guiasPorZona(guias);

  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-slate-950 px-6 py-14 text-slate-100 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <nav aria-label="Ruta de navegación">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/destinos"
                  className="rounded-sm underline-offset-4 outline-none hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-orange-400/60"
                >
                  Destinos
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-slate-200">
                {continente.nombre}
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            {continente.nombre}
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-slate-300">
            {continente.resumen}
          </p>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">destinos</dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">
                {guias.length}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="order-2 text-sm text-slate-400">
                {grupos.length === 1 ? "zona" : "zonas"}
              </dt>
              <dd className="order-1 text-3xl font-semibold tabular-nums">
                {grupos.length}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section
        aria-label={`Destinos en ${continente.nombre}`}
        className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14"
      >
        <ListaDeDestinos grupos={grupos} nivel={2} />
      </section>

      <nav
        aria-label="Otros continentes"
        className="mx-auto flex w-full max-w-5xl flex-col gap-4 border-t px-6 py-10"
      >
        <h2 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
          Otros continentes
        </h2>
        <ul className="flex flex-wrap gap-2">
          {CONTINENTES.filter((otro) => otro.id !== continente.id).map(
            (otro) => (
              <li key={otro.id}>
                <Link
                  href={`/destinos/${otro.id}`}
                  className="hover:bg-muted focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px]"
                >
                  {otro.nombre}
                  <span className="text-muted-foreground text-xs tabular-nums">
                    {guiasDelContinente(otro.id).length}
                  </span>
                </Link>
              </li>
            ),
          )}
          <li>
            <Link
              href="/destinos"
              className="hover:bg-muted focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px]"
            >
              Todos
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
