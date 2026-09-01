import type { GuideFact } from "@/content/guias/types";

/**
 * "Todo lo que hay que saber antes de reservar" (spec, sección 8.4).
 *
 * La fecha va arriba y visible, no al pie en gris: es lo único que hace
 * defendible este bloque. Sin ella, el lector asume vigencia de un texto que
 * puede tener meses.
 */

const formatoFecha = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function FactsBoard({
  facts,
  updatedAt,
}: {
  facts: GuideFact[];
  /** ISO date (yyyy-mm-dd). */
  updatedAt: string;
}) {
  // Mediodía UTC: la fecha es de calendario, no un instante. Parsear
  // "2026-09-01" da medianoche UTC, que en cualquier huso al oeste cae el día
  // anterior — y acá se está formateando con timeZone UTC, pero el mediodía
  // deja el margen igual por si alguien cambia ese formateador.
  const revisado = new Date(`${updatedAt}T12:00:00Z`);

  return (
    <section
      id="antes-de-reservar"
      aria-labelledby="guia-titulo"
      className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-8"
    >
      <header className="flex flex-col gap-2">
        <h2
          id="guia-titulo"
          className="text-3xl font-semibold tracking-tight text-balance"
        >
          Todo lo que hay que saber antes de reservar
        </h2>

        <p className="text-muted-foreground text-sm">
          Revisado el{" "}
          <time dateTime={updatedAt}>{formatoFecha.format(revisado)}</time>
        </p>
      </header>

      <div className="grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-2">
        {facts.map((fact) => (
          <article
            key={fact.id}
            className="flex flex-col gap-3 bg-background p-6"
          >
            <h3 className="font-medium">{fact.title}</h3>

            {fact.body.map((parrafo, i) => (
              <p key={i} className="text-muted-foreground text-sm text-pretty">
                {parrafo}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
