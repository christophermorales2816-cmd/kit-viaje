import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { NewTripForm } from "@/components/landing/new-trip-form";
import { getGuide } from "@/content/guias";
import { getDestinationsByCorridor } from "@/lib/supabase/reference";

/**
 * Página 4 — el planificador (spec, secciones 8.1 y 11).
 *
 * Deja de ser estática: ahora lee las ciudades del corredor para armar el
 * selector. Dinámica con ISR y no prerenderizada, por lo mismo que la página de
 * preparación (9.4): con generateStaticParams, un hipo de Supabase durante el
 * build no rompe una request, rompe el deploy entero.
 *
 * Un slug inexistente sigue siendo 404: lo decide getGuide, no dynamicParams.
 */
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageProps<"/guia/[slug]/planificar">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) return {};

  return {
    title: `Planificá tu viaje a ${guia.country}`,
    description: `Equipaje y presupuesto para tu viaje a ${guia.country}, sin registro.`,
  };
}

export default async function PlannerPage({
  params,
}: PageProps<"/guia/[slug]/planificar">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) notFound();

  const destinos = await getDestinationsByCorridor(guia.slug);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <Link
        href={`/guia/${guia.slug}`}
        className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        Volver a la guía de {guia.country}
      </Link>

      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          Planificá tu viaje
        </h1>

        <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
          Elegí las fechas y el tipo de viaje: armamos la lista de equipaje
          según el clima de esos meses y el presupuesto en la cotización que
          quieras. Sin registro, y te llevás la planilla en CSV.
        </p>

        <p className="text-muted-foreground text-xs text-pretty">
          {guia.dataScopeNote}
        </p>
      </header>

      <div className="max-w-md">
        <NewTripForm
          corridor={guia.slug}
          destinations={destinos.map(({ id, name }) => ({ id, name }))}
        />
      </div>
    </main>
  );
}
