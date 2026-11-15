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

/**
 * Nosotros (spec, 19.4): qué es el sitio, cómo se hace y de dónde salen los
 * datos.
 *
 * Todo lo que dice esta página ya lo decía el sitio en algún lado —el pie, la
 * portada, cada guía—, y se puede verificar en el código: no hay promesas
 * nuevas. Los números de la portada se mudaron acá.
 */

export const metadata: Metadata = {
  title: "Nosotros — Kit de viaje",
  description:
    "Qué es Kit de viaje, cómo se hace y de dónde salen sus datos: sin registro, sin anuncios y con fuentes abiertas.",
};

const PRINCIPIOS: { icono: LucideIcon; titulo: string; texto: string }[] = [
  {
    icono: KeyRound,
    titulo: "Sin registro",
    texto:
      "Armás tu viaje sin cuenta y sin mail. Se guarda con un enlace privado, que es tuyo y de nadie más.",
  },
  {
    icono: EyeOff,
    titulo: "Sin anuncios ni venta de datos",
    texto:
      "El sitio es gratis. Para saber qué páginas se usan medimos visitas con analytics sin cookies.",
  },
  {
    icono: CalendarClock,
    titulo: "Cada dato, con su fecha",
    texto:
      "El clima es el promedio histórico de cada ciudad, los precios dicen cuándo se revisaron y las cotizaciones en vivo se actualizan cada pocos minutos. Lo que no es en vivo no se presenta como si lo fuera.",
  },
  {
    icono: Database,
    titulo: "Fuentes abiertas",
    texto:
      "Los mapas y los lugares salen de OpenStreetMap, y las fotos de los platos, de Wikimedia Commons, con su licencia.",
  },
];

const FUENTES: { nombre: string; href: string; para: string }[] = [
  {
    nombre: "OpenStreetMap",
    href: "https://www.openstreetmap.org/copyright",
    para: "Los lugares de comida y los mapas",
  },
  {
    nombre: "Wikimedia Commons",
    href: "https://commons.wikimedia.org",
    para: "Las fotos de los platos",
  },
  {
    nombre: "dolarapi.com",
    href: "https://dolarapi.com",
    para: "Las cotizaciones de Argentina y Brasil",
  },
  {
    nombre: "adsb.lol",
    href: "https://adsb.lol",
    para: "Los aviones del radar",
  },
  {
    nombre: "OurAirports",
    href: "https://ourairports.com",
    para: "Los aeropuertos",
  },
  {
    nombre: "OpenFreeMap y CARTO",
    href: "https://openfreemap.org",
    para: "Los mosaicos de los mapas",
  },
];

export default function Nosotros() {
  const estadisticas = estadisticasDelSitio();

  return (
    <main className="flex flex-1 flex-col">
      <header className="bg-slate-950 px-6 py-14 text-slate-100 md:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <p className="text-sm font-medium tracking-wide text-orange-300 uppercase">
            Kit de viaje
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Nosotros
          </h1>
          <p className="max-w-2xl text-lg text-pretty text-slate-300">
            Kit de viaje es una guía para preparar el viaje: elegís un destino y
            te decimos qué llevar según el clima de tus fechas, cuánto vas a
            gastar en la moneda de allá y qué comer cuando llegues.
          </p>
        </div>
      </header>

      <section
        aria-labelledby="como"
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14"
      >
        <h2 id="como" className="text-3xl font-semibold tracking-tight">
          Cómo lo hacemos
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PRINCIPIOS.map(({ icono: Icono, titulo, texto }) => (
            <li key={titulo} className="flex gap-4 rounded-xl border p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                <Icono aria-hidden className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{titulo}</h3>
                <p className="text-muted-foreground text-sm text-pretty">
                  {texto}
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
            En números
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
            De dónde salen los datos
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm text-pretty">
            Servicios abiertos o gratuitos, cada uno con su licencia. Las guías
            y los catálogos de comida los escribimos nosotros, con la fecha de
            su última revisión.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {FUENTES.map((fuente) => (
            <li key={fuente.nombre} className="flex flex-col gap-0.5">
              <a
                href={fuente.href}
                target="_blank"
                rel="noreferrer"
                className="self-start rounded-sm font-medium underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                {fuente.nombre}
              </a>
              <span className="text-muted-foreground text-sm">
                {fuente.para}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground border-t pt-8 text-sm">
          ¿Querés empezar?{" "}
          <Link
            href="/destinos"
            className="text-foreground font-medium underline underline-offset-4"
          >
            Elegí un destino
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
