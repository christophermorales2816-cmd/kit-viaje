import type { GuideScore } from "@/content/guias/types";

/**
 * Puntajes por dimensión (spec, sección 8.5).
 *
 * El disclaimer no es letra chica opcional: son opiniones fundamentadas, no un
 * índice medido, y presentarlas como otra cosa sería exactamente la
 * imprecisión que este producto dice combatir.
 */

const formatoPuntaje = new Intl.NumberFormat("es-AR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function ScoreBars({
  scores,
  shines,
  costs,
}: {
  scores: GuideScore[];
  shines: string[];
  costs: string[];
}) {
  return (
    <section
      aria-labelledby="puntajes-titulo"
      className="flex w-full max-w-5xl flex-col gap-8"
    >
      <header className="flex flex-col gap-2">
        <h2
          id="puntajes-titulo"
          className="text-3xl font-semibold tracking-tight text-balance"
        >
          Cómo puntúa Argentina
        </h2>

        <p className="text-muted-foreground text-sm">
          Valoración editorial, no un índice oficial. Es una opinión
          fundamentada, no una medición.
        </p>
      </header>

      <ul className="flex flex-col gap-5">
        {scores.map((score) => (
          <li key={score.dimension} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium">{score.dimension}</span>
              <span className="text-sm tabular-nums">
                {formatoPuntaje.format(score.score)}
                <span className="text-muted-foreground"> / 10</span>
              </span>
            </div>

            {/*
              La barra es decorativa: el número ya está en el texto de arriba,
              así que repetirlo en un role="meter" solo agrega ruido al lector
              de pantalla.
            */}
            <div
              aria-hidden
              className="bg-muted h-2 overflow-hidden rounded-full"
            >
              <div
                className="bg-foreground h-full rounded-full"
                style={{ width: `${score.score * 10}%` }}
              />
            </div>

            <p className="text-muted-foreground text-sm text-pretty">
              {score.rationale}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-2">
        <div className="flex flex-col gap-3 bg-background p-6">
          <h3 className="font-medium">Dónde brilla</h3>
          <ul className="text-muted-foreground flex list-disc flex-col gap-2 pl-4 text-sm">
            {shines.map((texto) => (
              <li key={texto} className="text-pretty">
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 bg-background p-6">
          <h3 className="font-medium">Dónde te cuesta</h3>
          <ul className="text-muted-foreground flex list-disc flex-col gap-2 pl-4 text-sm">
            {costs.map((texto) => (
              <li key={texto} className="text-pretty">
                {texto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
