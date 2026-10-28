import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { FichaDePlato } from "@/components/comer/ficha-de-plato";
import { getCatalogo, getPlato, guiaDelCatalogo } from "@/content/comidas";
import { datosDelPlato, parametrosDePlatos } from "@/lib/comidas/datos";

/**
 * La página de un plato (spec, 18.3).
 *
 * Es adonde llega un link compartido, quien recarga con la ficha abierta y
 * quien no tiene JavaScript. Desde el catálogo, la misma ficha se abre en una
 * ventana (@ficha/(.)[plato]). También es la que encuentra un buscador: "qué es
 * el takoyaki" tiene respuesta en una página propia.
 */

export function generateStaticParams() {
  return parametrosDePlatos();
}

export const dynamicParams = false;

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: PageProps<"/que-comer/[slug]/[plato]">): Promise<Metadata> {
  const { slug, plato: id } = await params;
  const catalogo = getCatalogo(slug);
  const plato = catalogo && getPlato(catalogo, id);

  if (!catalogo || !plato) return {};

  const { country } = guiaDelCatalogo(catalogo);

  return {
    title: `${plato.nombre}: qué es y dónde comerlo en ${country} — Kit de viaje`,
    description: plato.resumen,
  };
}

export default async function PaginaDelPlato({
  params,
}: PageProps<"/que-comer/[slug]/[plato]">) {
  const { slug, plato: id } = await params;
  const { catalogo, guia, plato, mencionesDelPlato } = await datosDelPlato(
    slug,
    id,
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-12">
      <Link
        href={`/que-comer/${catalogo.slug}`}
        className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Qué comer y beber en {guia.country}
      </Link>

      <FichaDePlato
        catalogo={catalogo}
        pais={guia.country}
        plato={plato}
        menciones={mencionesDelPlato}
        enVentana={false}
      />
    </main>
  );
}
