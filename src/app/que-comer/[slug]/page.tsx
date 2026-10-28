import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Catalogo } from "@/components/comer/catalogo";
import {
  CreditoDeFoto,
  FotoDeComidaImagen,
} from "@/components/comer/foto-de-comida";
import {
  Despensa,
  MencionesDeHonor,
  ParaNegocios,
} from "@/components/comer/secciones-del-pais";
import { allCatalogos, getCatalogo, guiaDelCatalogo } from "@/content/comidas";
import { fotoDe } from "@/content/comidas/fotos";
import { datosDelPais } from "@/lib/comidas/datos";
import { opcionesDelCatalogo } from "@/lib/comidas/filtros";
import { formatDate } from "@/lib/format";

/**
 * Qué comer y beber en un país (spec, sección 18.2).
 *
 * El encabezado con la foto del país, la introducción, la despensa y el
 * catálogo con sus filtros. Al tocar un plato, su ficha se abre encima
 * (@ficha/(.)[plato]) y la URL pasa a ser la del plato.
 *
 * Estática: el contenido vive en el repo. Lo único que se pregunta afuera son
 * las menciones de honor, a OpenStreetMap, una vez por día (menciones.ts): la
 * página se regenera con esa frecuencia.
 */

export function generateStaticParams() {
  return allCatalogos().map((catalogo) => ({ slug: catalogo.slug }));
}

/** Un país sin catálogo es 404, no una página vacía. */
export const dynamicParams = false;

/** Un día, lo mismo que se guardan las menciones vigentes. */
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: PageProps<"/que-comer/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const catalogo = getCatalogo(slug);

  if (!catalogo) return {};

  const { country } = guiaDelCatalogo(catalogo);

  return {
    title: `Qué comer y beber en ${country} — Kit de viaje`,
    description: catalogo.intro[0],
  };
}

export default async function QueComerEnElPais({
  params,
}: PageProps<"/que-comer/[slug]">) {
  const { slug } = await params;
  const { catalogo, guia, menciones } = await datosDelPais(slug);
  const foto = fotoDe(catalogo.foto);
  const imperdibles = catalogo.platos.filter(
    (plato) => plato.imperdible,
  ).length;
  const [primero, ...resto] = catalogo.intro;

  return (
    <main className="flex flex-1 flex-col">
      <header className="relative isolate overflow-hidden bg-slate-950 text-white">
        {foto ? (
          <FotoDeComidaImagen
            foto={foto}
            alt=""
            prioridad
            grande
            className="absolute inset-0 -z-10 h-full w-full opacity-45"
          />
        ) : (
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950"
            aria-hidden="true"
          />
        )}

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14 md:py-20">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <Link
              href="/que-comer"
              className="flex items-center gap-2 hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Qué comer en otros países
            </Link>
            <Link href={`/guia/${guia.slug}`} className="hover:text-white">
              La guía de {guia.country}
            </Link>
          </nav>

          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-medium tracking-wide text-orange-300 uppercase">
              Qué comer y beber
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-balance md:text-7xl">
              {guia.country}
            </h1>
            <p className="text-lg text-pretty text-slate-200 md:text-xl">
              {primero}
            </p>
          </div>

          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            <Numero
              valor={catalogo.platos.length}
              etiqueta="platos y bebidas"
            />
            <Numero valor={imperdibles} etiqueta="imperdibles" />
            {catalogo.regiones.length > 0 && (
              <Numero valor={catalogo.regiones.length} etiqueta="regiones" />
            )}
          </dl>

          {foto && <CreditoDeFoto foto={foto} className="text-slate-400" />}
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:gap-20">
        <section aria-labelledby="cocina" className="flex flex-col gap-6">
          <h2 id="cocina" className="text-3xl font-semibold tracking-tight">
            La despensa
          </h2>
          {resto.length > 0 && (
            <div className="flex max-w-3xl flex-col gap-3 text-lg text-pretty">
              {resto.map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}
            </div>
          )}
          <Despensa catalogo={catalogo} />
        </section>

        <section aria-labelledby="menu" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 id="menu" className="text-3xl font-semibold tracking-tight">
              El menú
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
              Tocá un plato para ver qué lleva, a qué sabe y dónde lo sirven
              cerca tuyo. Los precios son por porción, en dólares, para comparar
              entre países.
            </p>
          </div>
          <Catalogo
            slug={catalogo.slug}
            platos={catalogo.platos}
            opciones={opcionesDelCatalogo(catalogo)}
            regiones={catalogo.regiones}
            nombresDeLugares={catalogo.nombresDeLugares}
          />
        </section>

        {menciones.length > 0 && (
          <section aria-labelledby="menciones" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2
                id="menciones"
                className="text-3xl font-semibold tracking-tight"
              >
                Menciones de honor
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
                Puestitos de barrio, lugares con historia y mesas de alta
                cocina. Si alguno cierra, deja de aparecer solo.
              </p>
            </div>
            <MencionesDeHonor catalogo={catalogo} menciones={menciones} />
          </section>
        )}

        <ParaNegocios pais={guia.country} />

        <footer className="text-muted-foreground border-t pt-6 text-xs text-pretty">
          Lugares: © colaboradores de{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            OpenStreetMap
          </a>{" "}
          (ODbL), que se renuevan cada doce horas. Fotos: Wikimedia Commons, con
          su autor y su licencia al lado de cada una. Catálogo revisado el{" "}
          {formatDate(catalogo.revisado)}.
        </footer>
      </div>
    </main>
  );
}

function Numero({ valor, etiqueta }: { valor: number; etiqueta: string }) {
  return (
    <div className="flex flex-col">
      <dt className="order-2 text-sm text-slate-300">{etiqueta}</dt>
      <dd className="order-1 text-3xl font-semibold tabular-nums">{valor}</dd>
    </div>
  );
}
