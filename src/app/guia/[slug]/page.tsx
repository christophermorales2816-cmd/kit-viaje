import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { FactsBoard } from "@/components/guia/facts-board";
import { GuideHighlights } from "@/components/guia/guide-highlights";
import { LiveQuotes, LiveQuotesSkeleton } from "@/components/guia/live-quotes";
import { PlacesGrid } from "@/components/guia/places-grid";
import { PlacesMap } from "@/components/guia/places-map";
import { ScoreBars } from "@/components/guia/score-bars";
import { Button } from "@/components/ui/button";
import { allGuides, getGuide } from "@/content/guias";

/**
 * Página 2 — la guía del país (spec, sección 8.1).
 *
 * Adónde llega el click en el globo. Cuatro bloques: los números, las
 * cotizaciones en vivo, el tablero informativo y los puntajes. Cierra con el
 * paso al planificador, que es la página 3.
 *
 * Estática: el contenido vive en el repo (8.2) y las cotizaciones las trae un
 * componente asíncrono dentro de un <Suspense>, así el encabezado no espera a
 * dolarapi.
 *
 * La revalidación de la ruta (600s) no se declara acá: Next la infiere del
 * `next.revalidate` de fetchQuotes, y verificarlo es leer
 * `.next/prerender-manifest.json`, no la tabla de rutas del build — esa tabla
 * omite la columna Revalidate y hace parecer que la página quedó congelada.
 * Un `export const revalidate` acá sería un segundo lugar donde mantener el
 * mismo número.
 */

export function generateStaticParams() {
  return allGuides().map((guia) => ({ slug: guia.slug }));
}

/** Un slug que no existe es 404, no una guía vacía ni un redirect silencioso. */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/guia/[slug]">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) return {};

  return {
    title: `${guia.country} — Kit de viaje`,
    description: guia.subhead,
  };
}

export default async function GuidePage({ params }: PageProps<"/guia/[slug]">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) notFound();

  return (
    <main className="flex flex-1 flex-col items-center gap-16 px-6 py-12 md:gap-24 md:py-16">
      <header className="flex w-full max-w-5xl flex-col gap-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Elegir otro destino
        </Link>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {guia.country}
          </h1>

          <p className="text-muted-foreground max-w-2xl text-lg text-pretty">
            {guia.subhead}
          </p>
        </div>

        <GuideHighlights highlights={guia.highlights} />
      </header>

      <Suspense fallback={<LiveQuotesSkeleton />}>
        <LiveQuotes />
      </Suspense>

      <FactsBoard facts={guia.facts} updatedAt={guia.factsUpdatedAt} />

      <ScoreBars scores={guia.scores} shines={guia.shines} costs={guia.costs} />

      <PlacesGrid places={guia.places} />

      <PlacesMap places={guia.places} />

      <section className="bg-muted/40 flex w-full max-w-5xl flex-col items-center gap-4 rounded-2xl border p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          Ya sabés a qué vas. Ahora armemos el viaje.
        </h2>

        <p className="text-muted-foreground max-w-xl text-sm text-pretty">
          Con las fechas y el tipo de viaje alcanza: la lista de equipaje sale
          del clima de esos meses y el presupuesto se convierte a la cotización
          que elijas.
        </p>

        <Button asChild size="lg">
          <Link href={`/guia/${guia.slug}/planificar`}>Planificá tu viaje</Link>
        </Button>

        <p className="text-muted-foreground text-xs text-pretty">
          {guia.dataScopeNote}
        </p>
      </section>
    </main>
  );
}
