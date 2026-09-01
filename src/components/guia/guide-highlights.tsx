import type { GuideHighlight } from "@/content/guias/types";

/**
 * Los cuatro números debajo del globo (spec, sección 8.3).
 *
 * Contenido estático, sin llamadas de red: el hero es lo primero que se pinta
 * y no debe depender de una API de terceros. El dato en vivo tiene su propio
 * bloque más abajo, donde un error se puede mostrar sin arruinar la entrada.
 */
export function GuideHighlights({
  highlights,
}: {
  highlights: GuideHighlight[];
}) {
  return (
    <dl className="grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl bg-border md:grid-cols-4">
      {highlights.map((highlight) => (
        <div
          key={highlight.label}
          className="flex flex-col gap-1 bg-background p-5"
        >
          <dt className="text-3xl font-semibold tracking-tight tabular-nums">
            {highlight.value}
          </dt>
          <dd className="flex flex-col gap-1">
            <span className="text-sm font-medium">{highlight.label}</span>
            <span className="text-muted-foreground text-xs text-pretty">
              {highlight.note}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
