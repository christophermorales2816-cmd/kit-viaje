import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { AvoidTable } from "@/components/preparar/avoid-table";
import { ChecklistSections } from "@/components/preparar/checklist-sections";
import { CitySwitcher } from "@/components/preparar/city-switcher";
import { ClimateBars } from "@/components/preparar/climate-bars";
import { FaqList } from "@/components/preparar/faq-list";
import { MonthCards } from "@/components/preparar/month-cards";
import { MonthStrip } from "@/components/preparar/month-strip";
import { PackingTips } from "@/components/preparar/packing-tips";
import { Button } from "@/components/ui/button";
import { getGuide } from "@/content/guias";
import { resolveClimateYear, summarizeYear } from "@/lib/prepare/climate-year";
import {
  getClimateProfiles,
  getClimateThresholds,
  getDestinationsByCorridor,
  getPackingCatalog,
  pickDestination,
} from "@/lib/supabase/reference";

/**
 * Página 3 — "Condiciones actuales" (spec, sección 9).
 *
 * Va entre la guía y el planificador. La guía dice a qué país vas; esta dice
 * cuándo conviene ir y qué clima te toca cada mes. Recién después se eligen
 * fechas.
 *
 * ES POR CIUDAD, no por país (11.4). Antes mostraba siempre la ciudad base, así
 * que alguien leía "el mejor mes es mayo" pensando en Ushuaia y estaba leyendo
 * Buenos Aires. La ciudad va en la URL —`?ciudad=ushuaia`— para que la elección
 * se pueda compartir y para que el enlace al planificador la arrastre.
 *
 * DINÁMICA CON ISR, no prerenderizada (9.4). La guía sí es estática porque su
 * contenido vive en el repo; esta lee cuatro tablas de Supabase. Con
 * generateStaticParams, un hipo de Supabase durante el build no rompe una
 * request: rompe el deploy entero. Con revalidate, rompe un render y el
 * siguiente lo reintenta.
 */
export const revalidate = 3600;

export async function generateMetadata({
  params,
  searchParams,
}: PageProps<"/guia/[slug]/preparar">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) return {};

  // El título nombra la ciudad: dos links a esta página con distinta ciudad son
  // dos páginas distintas, y compartir una debería decir de cuál habla.
  const { ciudad } = await searchParams;
  const destinos = await getDestinationsByCorridor(guia.slug);
  const destino = pickDestination(
    destinos,
    typeof ciudad === "string" ? ciudad : undefined,
  );

  return {
    title: `${destino?.name ?? guia.country}: condiciones actuales — Kit de viaje`,
    description: guia.preparation.quickAnswer,
  };
}

export default async function PrepararPage({
  params,
  searchParams,
}: PageProps<"/guia/[slug]/preparar">) {
  const { slug } = await params;
  const guia = getGuide(slug);

  if (!guia) notFound();

  const { ciudad } = await searchParams;
  const destinos = await getDestinationsByCorridor(guia.slug);
  const destino = pickDestination(
    destinos,
    typeof ciudad === "string" ? ciudad : undefined,
  );

  // Sin ciudades no hay clima que mostrar, y es un problema de datos, no de la
  // URL que pidió el usuario.
  if (!destino) notFound();

  // En paralelo: son cuatro lecturas independientes y encadenarlas suma cuatro
  // round-trips a un render que igual va a cachearse una hora.
  const [perfiles, umbrales, catalogo] = await Promise.all([
    getClimateProfiles(destino.id),
    getClimateThresholds(),
    getPackingCatalog(),
  ]);

  const meses = resolveClimateYear(perfiles, umbrales);
  const resumen = summarizeYear(meses);

  return (
    <main className="flex flex-1 flex-col items-center gap-14 px-6 py-12 md:gap-20 md:py-16">
      <header className="flex w-full max-w-5xl flex-col gap-8">
        <Link
          href={`/guia/${guia.slug}`}
          className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Volver a la guía de {guia.country}
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {destino.name}: condiciones actuales
        </h1>

        <CitySwitcher
          guideSlug={guia.slug}
          destinations={destinos}
          current={destino}
          regionBySlug={Object.fromEntries(
            guia.places.map((place) => [place.id, place.region]),
          )}
        />

        <p className="bg-muted/40 rounded-2xl border p-6 text-lg text-pretty">
          {guia.preparation.quickAnswer}
        </p>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border md:grid-cols-4">
          <Dato
            termino="Rango del año"
            valor={
              resumen.tempMin === null || resumen.tempMax === null
                ? "s/d"
                : `${Math.round(resumen.tempMin)}° a ${Math.round(resumen.tempMax)}°`
            }
          />
          {/*
            "Ninguno" y "s/d" no son lo mismo, y confundirlos es afirmar que
            falta un dato que sí está: Ushuaia tiene los doce meses cargados y
            ninguno califica como ideal, porque la mínima nunca llega a 10 °C.

            No se elige un "mejor entre los no ideales": cualquier ranking de
            eso sería inventado. La tira de temporadas y los gráficos están
            justo abajo para que el lector decida con los números a la vista.
          */}
          <Dato
            termino="Mejor mes"
            valor={
              resumen.bestMonth?.longName ??
              (resumen.hasData ? "Ninguno ideal" : "s/d")
            }
          />
          <Dato termino="Meses ideales" valor={String(resumen.idealCount)} />
          <Dato termino="Enchufe" valor={guia.preparation.plug.types} />
        </dl>
      </header>

      <section
        aria-labelledby="claves"
        className="flex w-full max-w-5xl flex-col gap-4"
      >
        <h2 id="claves" className="text-2xl font-semibold tracking-tight">
          Lo que cambia cómo armás la valija
        </h2>

        <ul className="flex flex-col gap-3">
          {guia.preparation.keyPoints.map((punto, i) => (
            <li
              key={i}
              className="text-muted-foreground border-l-2 pl-4 text-pretty"
            >
              {punto}
            </li>
          ))}
        </ul>
      </section>

      <MonthStrip months={meses} />

      <ClimateBars months={meses} />

      <MonthCards
        months={meses}
        catalog={catalogo}
        adviceByBucket={guia.preparation.adviceByBucket}
      />

      <PackingTips
        dos={guia.preparation.tips.dos}
        donts={guia.preparation.tips.donts}
        country={guia.country}
      />

      <ChecklistSections sections={guia.preparation.checklists} />

      <AvoidTable rows={guia.preparation.avoid} country={guia.country} />

      <FaqList faq={guia.preparation.faq} country={guia.country} />

      <section className="bg-muted/40 flex w-full max-w-5xl flex-col items-center gap-4 rounded-2xl border p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-balance">
          Creá tu lista para {destino.name}
        </h2>

        <p className="text-muted-foreground max-w-xl text-sm text-pretty">
          Ya sabés qué mes te conviene. Poné las fechas y el tipo de viaje, y
          armamos la lista de equipaje y el presupuesto sobre el clima de{" "}
          {destino.name} en esos días concretos.
        </p>

        {/*
          La ciudad viaja al planificador en la URL: quien acaba de leer el año
          de Ushuaia no tiene por qué volver a elegirla en la pantalla siguiente.
        */}
        <Button asChild size="lg">
          <Link href={`/guia/${guia.slug}/planificar?ciudad=${destino.slug}`}>
            Iniciar generador de lista
          </Link>
        </Button>

        <p className="text-muted-foreground text-xs text-pretty">
          {guia.dataScopeNote}
        </p>
      </section>
    </main>
  );
}

function Dato({ termino, valor }: { termino: string; valor: string }) {
  return (
    <div className="bg-background flex flex-col gap-1 p-5">
      <dt className="text-muted-foreground text-xs">{termino}</dt>
      <dd className="text-lg font-medium">{valor}</dd>
    </div>
  );
}
