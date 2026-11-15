import {
  ArrowRight,
  CalendarDays,
  FileSpreadsheet,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import {
  BuscadorDeDestinos,
  type DestinoBuscable,
} from "@/components/landing/buscador-de-destinos";

import { EncabezadoDeSeccion } from "./encabezado-de-seccion";

/**
 * Planificá tu viaje (spec, 19.6): la puerta al planificador, que es lo que el
 * sitio hace y ningún otro hace igual. Funciona entero: el buscador lleva al
 * planificador de cada destino (/guia/{slug}/planificar).
 *
 * Va en una franja oscura, la única entre el hero y el pie, para que se vea
 * como lo principal y no como una sección más.
 */

const PASOS = [
  {
    icono: MapPin,
    titulo: "Elegí el destino y la ciudad",
    detalle:
      "El clima y los precios son los de esa ciudad, no un promedio del país.",
  },
  {
    icono: CalendarDays,
    titulo: "Poné las fechas y el tipo de viaje",
    detalle: "No es lo mismo una semana de playa que una de trabajo.",
  },
  {
    icono: FileSpreadsheet,
    titulo: "Llevate la lista y el presupuesto",
    detalle: "Para editar, compartir con un enlace y bajar en CSV.",
  },
];

export function PlanificaTuViaje({
  destinos,
}: {
  /** Cada destino, con el enlace a su planificador. */
  destinos: DestinoBuscable[];
}) {
  return (
    <section
      aria-labelledby="planificar-titulo"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      {/* La trama del globo, del lado del buscador. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(255 255 255 / 0.12) 1px, transparent 1.6px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(ellipse at 80% 50%, black, transparent 65%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <EncabezadoDeSeccion
            id="planificar-titulo"
            antetitulo="Planificá tu viaje"
            titulo="Qué llevar y cuánto vas a gastar, para tus fechas"
            oscuro
          >
            La lista de equipaje sale del clima de esas fechas, y el
            presupuesto, de la cotización que elijas. Sin registrarte.
          </EncabezadoDeSeccion>

          <ol className="flex flex-col gap-5">
            {PASOS.map(({ icono: Icono, titulo, detalle }, i) => (
              <li key={titulo} className="flex gap-4">
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <Icono aria-hidden className="size-5 text-orange-400" />
                  <span
                    aria-hidden
                    className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-orange-500 text-[0.7rem] font-semibold"
                  >
                    {i + 1}
                  </span>
                </span>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <p className="font-medium">{titulo}</p>
                  <p className="text-sm text-pretty text-white/70">{detalle}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-5 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm md:p-8">
          <BuscadorDeDestinos
            destinos={destinos}
            etiqueta="¿Adónde viajás?"
            etiquetaVisible
            placeholder="Buscá un país"
          />
          <p className="text-sm text-white/70">
            Te lleva al planificador de ese destino, donde elegís la ciudad y
            las fechas.
          </p>
          <Link
            href="/destinos"
            className="inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors outline-none hover:decoration-orange-400 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
          >
            ¿Todavía no sabés adónde? Mirá todos los destinos
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
