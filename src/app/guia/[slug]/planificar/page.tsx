import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { NewTripForm } from "@/components/landing/new-trip-form";
import { getGuide } from "@/content/guias";
import {
  getDestinationsByCorridor,
  pickDestination,
} from "@/lib/supabase/reference";

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
  searchParams,
}: PageProps<"/guia/[slug]/planificar">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) notFound();

  const { ciudad } = await searchParams;
  const destinos = await getDestinationsByCorridor(guia.slug);

  // La ciudad que traiga la URL arranca seleccionada: quien viene de leer el
  // año de Ushuaia no debería tener que elegirla otra vez.
  const inicial = pickDestination(
    destinos,
    typeof ciudad === "string" ? ciudad : undefined,
  );

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

      {/*
        Un formulario sin ciudades no puede crear nada: se manda a la base, la
        base rechaza y el lector se come un error después de cargar fechas. Si
        el país no tiene destinos cargados se dice antes, no después.
      */}
      {destinos.length === 0 ? (
        <div className="max-w-xl rounded-xl border border-dashed p-6">
          <p className="font-medium">
            Todavía no podemos armar listas para {guia.country}.
          </p>

          <p className="text-muted-foreground mt-2 text-sm text-pretty">
            Falta cargar las ciudades de este país en nuestra base. Es un
            problema nuestro, no del link. Mientras tanto, la guía tiene los
            consejos de equipaje y las preguntas frecuentes.
          </p>

          <Button asChild className="mt-4" variant="outline">
            <Link href={`/guia/${guia.slug}/preparar`}>
              Ver los consejos de {guia.country}
            </Link>
          </Button>
        </div>
      ) : (
        <div className="max-w-md">
          <NewTripForm
            corridor={guia.slug}
            destinations={destinos.map(({ id, name }) => ({ id, name }))}
            initialDestinationId={inicial?.id}
          />
        </div>
      )}
    </main>
  );
}
