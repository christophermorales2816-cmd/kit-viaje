import { HeartHandshake } from "lucide-react";

import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import { textos } from "@/i18n/servidor";

import { Pronto, ProntoEnElTitulo } from "./pronto";

/**
 * ONGs (spec, 19.6): todavía no existe, y lo dice. Es una franja angosta y no
 * una sección grande, para no ocupar con una promesa el lugar de algo que ya
 * se puede usar.
 */
export async function Ongs() {
  const t = (await textos(TEXTOS_DE_LA_PORTADA)).ongs;

  return (
    <section aria-labelledby="ongs-titulo" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 p-6 sm:flex-row sm:items-center sm:gap-6 md:p-8">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
            <HeartHandshake aria-hidden className="size-7" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h2
                id="ongs-titulo"
                className="text-2xl font-semibold tracking-tight"
              >
                {t.titulo}
                <ProntoEnElTitulo />
              </h2>
              <Pronto oculto />
            </div>
            <p className="max-w-2xl text-pretty text-slate-600">{t.bajada}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
