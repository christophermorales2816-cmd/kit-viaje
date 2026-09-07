import { ChevronDown } from "lucide-react";

import type { GuideFaq } from "@/content/guias/types";

/**
 * Preguntas frecuentes (spec, sección 9.6).
 *
 * <details> por lo mismo que la checklist: plegable sin JavaScript, con teclado
 * y lector de pantalla ya resueltos.
 *
 * La numeración sale de <ol> y de un contador CSS, no de escribir "1." en cada
 * pregunta: agregar una en el medio no obliga a renumerar todo a mano.
 */
export function FaqList({
  faq,
  country,
}: {
  faq: GuideFaq[];
  country: string;
}) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-4"
    >
      <h2
        id="faq-titulo"
        className="text-2xl font-semibold tracking-tight text-balance"
      >
        Preguntas frecuentes sobre {country}
      </h2>

      <ol className="flex list-none flex-col gap-2 [counter-reset:faq]">
        {faq.map((entrada) => (
          <li key={entrada.question} className="[counter-increment:faq]">
            <details className="group rounded-xl border">
              <summary className="hover:bg-muted/40 flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-colors">
                <span
                  aria-hidden
                  className="bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs tabular-nums before:content-[counter(faq)]"
                />

                <span className="flex-1 text-sm font-medium text-pretty">
                  {entrada.question}
                </span>

                <ChevronDown
                  aria-hidden
                  className="size-4 shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="text-muted-foreground border-t p-4 text-sm text-pretty">
                {entrada.answer}
              </p>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
