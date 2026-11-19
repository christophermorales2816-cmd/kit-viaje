import {
  CalendarClock,
  Database,
  EyeOff,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { estadisticasDelSitio } from "@/lib/sitio/estadisticas";
import { enriquecer } from "@/i18n/enriquecer";
import { TEXTOS_DE_NOSOTROS } from "@/i18n/nosotros";
import { textos } from "@/i18n/servidor";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Nosotros (spec, 19.4): qué es el sitio, cómo se hace y de dónde salen los
 * datos.
 *
 * Todo lo que dice esta página ya lo decía el sitio en algún lado —el pie, la
 * portada, cada guía—, y se puede verificar en el código: no hay promesas
 * nuevas. Los números de la portada se mudaron acá.
 */

export async function generateMetadata(): Promise<Metadata> {
  const t = await textos(TEXTOS_DE_NOSOTROS);

  return { title: t.titulo, description: t.descripcion };
}

/** El ícono de cada principio. Su título y su texto, en el diccionario. */
const PRINCIPIOS = [
  { id: "registro", icono: KeyRound },
  { id: "anuncios", icono: EyeOff },
  { id: "fechas", icono: CalendarClock },
  { id: "fuentes", icono: Database },
] as const satisfies readonly { id: string; icono: LucideIcon }[];

/** Las fuentes. Para qué sirve cada una, en el diccionario. */
const FUENTES = [
  {
    id: "openstreetmap",
    nombre: "OpenStreetMap",
    href: "https://www.openstreetmap.org/copyright",
  },
  {
    id: "wikimedia",
    nombre: "Wikimedia Commons",
    href: "https://commons.wikimedia.org",
  },
  { id: "dolarapi", nombre: "dolarapi.com", href: "https://dolarapi.com" },
  { id: "adsb", nombre: "adsb.lol", href: "https://adsb.lol" },
  { id: "ourairports", nombre: "OurAirports", href: "https://ourairports.com" },
  { id: "mosaicos", nombre: null, href: "https://openfreemap.org" },
  {
    id: "nasa",
    nombre: "NASA Visible Earth",
    href: "https://visibleearth.nasa.gov/collection/1484/blue-marble",
  },
] as const;

export default async function Nosotros() {
  const t = await textos(TEXTOS_DE_NOSOTROS);
  const estadisticas = estadisticasDelSitio(t.estadisticas);

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
        </div>
      </header>

      <section
        aria-labelledby="como"
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14"
      >
        <h2 id="como" className="text-3xl font-semibold tracking-tight">
          {t.comoLoHacemos}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PRINCIPIOS.map(({ id, icono: Icono }) => (
            <li key={id} className="flex gap-4 rounded-xl border p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                <Icono aria-hidden className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{t.principios[id].titulo}</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  {t.principios[id].texto}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="numeros"
        className="bg-muted/50 border-y px-6 py-14"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <h2 id="numeros" className="text-3xl font-semibold tracking-tight">
            {t.enNumeros}
          </h2>
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {estadisticas.map((stat) => (
              <div key={stat.etiqueta} className="flex flex-col gap-1">
                <dt className="text-3xl font-semibold tracking-tight tabular-nums">
                  {stat.valor}
                </dt>
                <dd className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{stat.etiqueta}</span>
                  <span className="text-muted-foreground text-xs text-pretty">
                    {stat.nota}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="fuentes"
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14"
      >
        <div className="flex flex-col gap-2">
          <h2 id="fuentes" className="text-3xl font-semibold tracking-tight">
            {t.deDondeSalen}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
            {t.deDondeSalenBajada}
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {FUENTES.map((fuente) => (
            <li key={fuente.id} className="flex flex-col gap-0.5">
              <a
                href={fuente.href}
                target="_blank"
                rel="noreferrer"
                className="self-start rounded-sm font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                {fuente.nombre ?? t.nombreDeLosMosaicos}
              </a>
              <span className="text-muted-foreground text-sm">
                {t.fuentes[fuente.id]}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground border-t pt-8 text-sm">
          {enriquecer(t.empezar, {
            enlace: (texto) => (
              <Link
                href="/destinos"
                className="text-foreground font-medium underline underline-offset-4"
              >
                {texto}
              </Link>
            ),
          })}
        </p>
      </section>
    </main>
  );
}
