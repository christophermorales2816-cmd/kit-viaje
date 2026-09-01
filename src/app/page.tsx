import { Suspense } from "react";

import { FactsBoard } from "@/components/guia/facts-board";
import { GuideHighlights } from "@/components/guia/guide-highlights";
import { LiveQuotes, LiveQuotesSkeleton } from "@/components/guia/live-quotes";
import { ScoreBars } from "@/components/guia/score-bars";
import { GlobeHero } from "@/components/landing/globe-hero";
import { NewTripForm } from "@/components/landing/new-trip-form";
import { RecentTrips } from "@/components/landing/recent-trips";
import { argentina } from "@/content/guias/argentina";

/**
 * Landing (spec, sección 8.1).
 *
 * Cinco bloques: el globo, las cotizaciones en vivo, el tablero informativo,
 * los puntajes y el planner. El globo sigue siendo la entrada y el selector de
 * destino; lo que cambió es qué despliega el marcador.
 *
 * Server Component: todo el contenido de la guía es estático (vive en el repo,
 * spec 8.2) y las cotizaciones las trae un componente asíncrono aparte, dentro
 * de un <Suspense>, para que el hero no espere a dolarapi.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="flex w-full max-w-5xl flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-between md:gap-16">
          <div className="flex max-w-md flex-col gap-5 text-center md:text-left">
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              El mundo en tus manos: empezá por {argentina.country}
            </h1>

            <p className="text-muted-foreground text-lg text-pretty">
              {argentina.subhead}
            </p>

            <p className="text-muted-foreground text-sm">
              Tocá el marcador y te contamos lo que hay que saber antes de
              reservar. Al final armás tu equipaje y tu presupuesto.
            </p>
          </div>

          {/*
            El panel oscuro no es decoración suelta: cobe dibuja el globo con
            iluminación para fondo oscuro, y sobre el fondo claro de la app el
            borde de la esfera se pierde.
          */}
          <div className="w-full max-w-[460px] rounded-2xl bg-slate-950 p-6 md:p-8">
            <GlobeHero />

            {/*
              Dicho de frente (spec, 8.1): el globo insinúa "elegí cualquier
              país" y el MVP tiene uno. Esconderlo sería peor que decirlo.
            */}
            <p className="mt-2 text-center text-sm text-slate-400 text-balance">
              Un corredor por ahora: Argentina. El motor está hecho para sumar
              más.
            </p>
          </div>
        </div>

        <GuideHighlights highlights={argentina.highlights} />
      </section>

      <Suspense fallback={<LiveQuotesSkeleton />}>
        <LiveQuotes />
      </Suspense>

      <FactsBoard
        facts={argentina.facts}
        updatedAt={argentina.factsUpdatedAt}
      />

      <ScoreBars
        scores={argentina.scores}
        shines={argentina.shines}
        costs={argentina.costs}
      />

      <section
        id="planificar"
        aria-labelledby="planificar-titulo"
        className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-8"
      >
        <header className="flex flex-col gap-2">
          <h2
            id="planificar-titulo"
            className="text-3xl font-semibold tracking-tight text-balance"
          >
            Planificá tu viaje
          </h2>

          <p className="text-muted-foreground text-sm text-pretty">
            Elegí las fechas y el tipo de viaje: armamos la lista de equipaje
            según el clima de esos meses y el presupuesto en la cotización que
            quieras. Sin registro, y te llevás la planilla en CSV.
          </p>

          <p className="text-muted-foreground text-xs text-pretty">
            {argentina.dataScopeNote}
          </p>
        </header>

        <div className="max-w-md">
          <NewTripForm />
        </div>

        <RecentTrips />
      </section>
    </main>
  );
}
