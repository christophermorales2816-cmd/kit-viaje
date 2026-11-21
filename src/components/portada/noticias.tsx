import {
  CloudLightning,
  Megaphone,
  Newspaper,
  Stamp,
  TrainFront,
} from "lucide-react";

import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import { textos } from "@/i18n/servidor";

import { EncabezadoDeSeccion } from "./encabezado-de-seccion";

/**
 * Noticias para viajeros (spec, 19.6): lo primero debajo del hero.
 *
 * Por ahora es el lugar reservado y nada más. Va a ser una herramienta con su
 * propia lógica —de qué fuentes, cada cuánto, cómo se verifica—, que se piensa
 * aparte. Mientras tanto no se muestra ninguna noticia de ejemplo: una
 * noticia inventada en un sitio de viajes es información falsa, aunque diga
 * "ejemplo" en chiquito.
 */

const TEMAS = [
  { id: "requisitos", icono: Stamp },
  { id: "transporte", icono: TrainFront },
  { id: "clima", icono: CloudLightning },
  { id: "avisos", icono: Megaphone },
] as const;

export async function Noticias() {
  const t = (await textos(TEXTOS_DE_LA_PORTADA)).noticias;

  return (
    <section aria-labelledby="noticias-titulo" className="bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:py-20">
        <EncabezadoDeSeccion
          id="noticias-titulo"
          antetitulo={t.antetitulo}
          titulo={t.titulo}
          pronto
        >
          {t.bajada}
        </EncabezadoDeSeccion>

        <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          {/* La trama del globo, apenas. */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgb(148 163 184 / 0.35) 1px, transparent 1.6px)",
              backgroundSize: "16px 16px",
              maskImage: "linear-gradient(to left, black, transparent 70%)",
            }}
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
              <Newspaper aria-hidden className="size-7" strokeWidth={1.75} />
            </span>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-slate-950">
                  {t.enConstruccion}
                </p>
                <p className="max-w-2xl text-sm text-pretty text-slate-600">
                  {t.queVaASer}
                </p>
              </div>

              <ul aria-label={t.temasDelPanel} className="flex flex-wrap gap-2">
                {TEMAS.map(({ id, icono: Icono }) => (
                  <li
                    key={id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    <Icono aria-hidden className="size-4 text-slate-500" />
                    {t.temas[id]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
