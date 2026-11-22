import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { FactsBoard } from "@/components/guia/facts-board";
import { GuideHighlights } from "@/components/guia/guide-highlights";
import { LiveQuotes, LiveQuotesSkeleton } from "@/components/guia/live-quotes";
import { PlacesGrid } from "@/components/guia/places-grid";
import { PlacesMap } from "@/components/guia/places-map";
import { ScoreBars } from "@/components/guia/score-bars";
import { Button } from "@/components/ui/button";
import { getCatalogo } from "@/content/comidas";
import { allGuides, getGuide } from "@/content/guias";
import { continenteDeLaZona } from "@/content/guias/continentes";
import { TEXTOS_DE_DESTINOS } from "@/i18n/destinos";
import { TEXTOS_DE_LA_GUIA } from "@/i18n/guia";
import { textos } from "@/i18n/servidor";

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
    title: `${guia.country}`,
    description: guia.subhead,
  };
}

export default async function GuidePage({ params }: PageProps<"/guia/[slug]">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) notFound();

  // "Qué comer" se suma de a tandas (spec, 18): el link, solo si ya está.
  const comida = getCatalogo(guia.slug);
  // La vuelta es a los destinos de su continente: la lista de la portada se
  // mudó ahí (spec, 19.3).
  const continente = continenteDeLaZona(guia.subregion);
  const { pagina: t } = await textos(TEXTOS_DE_LA_GUIA);
  const { continente: destinos } = await textos(TEXTOS_DE_DESTINOS);
  return (
    <main className="flex flex-1 flex-col items-center gap-16 px-6 py-12 md:gap-24 md:py-16">
      <header className="flex w-full max-w-5xl flex-col gap-8">
        <Link
          href={`/destinos/${continente.id}`}
          className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          {destinos.titulo(continente.nombre)}
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

      <Suspense fallback={<LiveQuotesSkeleton corridor={guia.slug} />}>
        <LiveQuotes corridor={guia.slug} />
      </Suspense>

      <FactsBoard facts={guia.facts} updatedAt={guia.factsUpdatedAt} />

      <ScoreBars
        country={guia.country}
        scores={guia.scores}
        shines={guia.shines}
        costs={guia.costs}
      />

      <PlacesGrid places={guia.places} guideSlug={guia.slug} />

      {/*
        Con la clave, ir de una guía a otra arma un mapa nuevo: los servicios
        prendidos, la vista y las celdas pedidas son de cada guía.
      */}
      <PlacesMap
        key={guia.slug}
        guia={guia.slug}
        country={guia.country}
        places={guia.places}
      />

      {comida && (
        <Link
          href={`/que-comer/${guia.slug}`}
          className="group flex w-full max-w-5xl items-center justify-between gap-6 rounded-2xl border bg-amber-50/60 p-6 transition-colors hover:bg-amber-50 md:p-8"
        >
          <span className="flex flex-col gap-1">
            <span className="text-sm font-medium text-orange-700">
              {t.queComer.antetitulo}
            </span>
            <span className="text-xl font-semibold tracking-tight text-balance md:text-2xl">
              {t.queComer.titulo(comida.platos.length, guia.country)}
            </span>
            <span className="text-muted-foreground text-sm text-pretty">
              {t.queComer.bajada}
            </span>
          </span>
          <ArrowRight
            className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      )}

      <section className="bg-muted/40 flex w-full max-w-5xl flex-col items-center gap-4 rounded-2xl border p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          {t.cierre.titulo}
        </h2>

        <p className="text-muted-foreground max-w-xl text-sm text-pretty">
          {t.cierre.bajada}
        </p>

        <Button asChild size="lg">
          <Link href={`/guia/${guia.slug}/preparar`}>{t.cierre.boton}</Link>
        </Button>

        <p className="text-muted-foreground text-xs text-pretty">
          {guia.dataScopeNote}
        </p>
      </section>
    </main>
  );
}
