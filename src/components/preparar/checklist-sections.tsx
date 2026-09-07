import { ChevronDown } from "lucide-react";

import type { GuideChecklistSection } from "@/content/guias/types";

/**
 * Las secciones plegables de la checklist (spec, sección 9.6).
 *
 * <details> y no un acordeón de React: es plegable sin una línea de JavaScript,
 * llega con el teclado y el lector de pantalla ya resueltos, y deja que la
 * página siga siendo un Server Component entero. El único costo es que la
 * flecha se anima con CSS en vez de con estado, que es exactamente lo que hay
 * que pagar por esto.
 */

const TONO = {
  info: "border-sky-500/40 bg-sky-50 dark:bg-sky-950/40",
  warn: "border-rose-500/40 bg-rose-50 dark:bg-rose-950/40",
} as const;

export function ChecklistSections({
  sections,
}: {
  sections: GuideChecklistSection[];
}) {
  return (
    <div className="flex w-full max-w-5xl flex-col gap-10">
      {sections.map((seccion) => (
        <section
          key={seccion.id}
          id={seccion.id}
          aria-labelledby={`${seccion.id}-titulo`}
          className="flex scroll-mt-8 flex-col gap-4"
        >
          <h2
            id={`${seccion.id}-titulo`}
            className="text-2xl font-semibold tracking-tight text-balance"
          >
            {seccion.title}
          </h2>

          {seccion.notice ? (
            <div
              className={`flex flex-col gap-1 rounded-lg border-l-4 p-4 ${TONO[seccion.notice.tone]}`}
            >
              <p className="text-sm font-medium">{seccion.notice.title}</p>
              <p className="text-sm text-pretty">{seccion.notice.body}</p>
            </div>
          ) : null}

          <details className="group rounded-xl border">
            <summary className="hover:bg-muted/40 flex cursor-pointer items-center justify-between gap-4 rounded-xl p-4 text-sm font-medium transition-colors">
              {seccion.summary}
              <ChevronDown
                aria-hidden
                className="size-4 shrink-0 transition-transform group-open:rotate-180"
              />
            </summary>

            <ul className="flex flex-col gap-2 border-t p-4">
              {seccion.items.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex gap-2 text-sm text-pretty"
                >
                  <span aria-hidden className="text-foreground/40">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </details>
        </section>
      ))}
    </div>
  );
}
