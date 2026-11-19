import { ArrowRight, ArrowUpRight, Earth } from "lucide-react";
import Link from "next/link";

import { CONTINENTES, guiasDelContinente } from "@/content/guias/continentes";
import type { DestinationGuide } from "@/content/guias";
import { FOTOS_DE_CONTINENTES } from "@/content/portada";
import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import { textos } from "@/i18n/servidor";
import { cn } from "@/lib/utils";

import { EncabezadoDeSeccion } from "./encabezado-de-seccion";
import { FondoDeTarjeta } from "./tarjeta-de-la-portada";

/**
 * Por continente (spec, 19.6): las cinco puertas a /destinos/{continente}.
 * Es de las secciones que ya funcionan enteras: las páginas existen (19.3) y
 * los números salen de las guías.
 *
 * Un mosaico y no una fila de cinco iguales: América va grande porque es lo
 * más cercano para quien usa el sitio, que sale desde la Argentina (las
 * cotizaciones son las del dólar allá).
 */

export async function PorContinente({ guias }: { guias: DestinationGuide[] }) {
  const t = (await textos(TEXTOS_DE_LA_PORTADA)).porContinente;

  return (
    <section aria-labelledby="continentes-titulo" className="bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:py-20">
        <EncabezadoDeSeccion
          id="continentes-titulo"
          antetitulo={t.antetitulo}
          titulo={t.titulo}
          accion={
            <Link
              href="/destinos"
              className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors outline-none hover:decoration-orange-500 focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
            >
              {t.verTodos(guias.length)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          }
        >
          {t.bajada}
        </EncabezadoDeSeccion>

        <ul className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-3">
          {CONTINENTES.map((continente) => {
            const cantidad = guiasDelContinente(continente.id, guias).length;
            const { imagen, tono } = FOTOS_DE_CONTINENTES[continente.id];
            const grande = continente.id === "america";

            return (
              <li
                key={continente.id}
                className={cn(
                  "min-h-56",
                  grande && "sm:col-span-2 lg:col-span-1 lg:row-span-2",
                )}
              >
                <Link
                  href={`/destinos/${continente.id}`}
                  className="group/tarjeta relative isolate flex h-full flex-col justify-end gap-2 overflow-hidden rounded-2xl p-6 text-white shadow-sm transition-[translate,box-shadow] duration-200 outline-none hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-[3px] focus-visible:ring-orange-400/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <FondoDeTarjeta
                    imagen={imagen}
                    tono={tono}
                    icono={Earth}
                    sizes={
                      grande
                        ? "(min-width: 1024px) 360px, 100vw"
                        : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    }
                  />

                  <p className="text-xs font-semibold tracking-[0.14em] text-white/75 uppercase">
                    {t.resumen(cantidad, continente.zonas.length)}
                  </p>
                  <h3
                    className={cn(
                      "flex items-center gap-2 font-semibold tracking-tight",
                      grande ? "text-3xl md:text-4xl" : "text-2xl",
                    )}
                  >
                    {continente.nombre}
                    <ArrowUpRight
                      aria-hidden
                      className="size-6 shrink-0 transition-transform group-hover/tarjeta:translate-x-0.5 group-hover/tarjeta:-translate-y-0.5"
                    />
                  </h3>
                  <p className="max-w-sm text-sm text-pretty text-white/80">
                    {continente.resumen}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
