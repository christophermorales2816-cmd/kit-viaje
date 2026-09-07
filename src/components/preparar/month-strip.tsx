import type { MonthClimate, Season } from "@/lib/prepare/climate-year";

/**
 * La tira de doce meses (spec, sección 9).
 *
 * El color resume la temporada, pero nunca es el único canal: cada mes muestra
 * también su rango de temperatura y la leyenda nombra las tres temporadas. Un
 * lector daltónico —o cualquiera imprimiendo la página— lee lo mismo.
 */

const ESTILO: Record<Season, { chip: string; etiqueta: string }> = {
  ideal: {
    chip: "bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-50",
    etiqueta: "Ideal",
  },
  media: {
    chip: "bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-50",
    etiqueta: "Aceptable",
  },
  dificil: {
    chip: "bg-rose-100 text-rose-950 dark:bg-rose-950 dark:text-rose-50",
    etiqueta: "Exigente",
  },
};

const ORDEN: Season[] = ["ideal", "media", "dificil"];

function rango(mes: MonthClimate): string {
  if (mes.tempMin === null && mes.tempMax === null) return "s/d";
  if (mes.tempMin === null) return `${Math.round(mes.tempMax!)}°`;
  if (mes.tempMax === null) return `${Math.round(mes.tempMin)}°`;
  return `${Math.round(mes.tempMin)}–${Math.round(mes.tempMax)}°`;
}

export function MonthStrip({ months }: { months: MonthClimate[] }) {
  return (
    <section
      aria-labelledby="tira-meses"
      className="flex w-full max-w-5xl flex-col gap-4"
    >
      <h2 id="tira-meses" className="text-xl font-semibold tracking-tight">
        El año de un vistazo
      </h2>

      <ul className="grid grid-cols-6 gap-2 md:grid-cols-12">
        {months.map((mes) => (
          <li
            key={mes.month}
            className={`flex flex-col items-center gap-1 rounded-lg px-1 py-3 ${ESTILO[mes.season].chip}`}
          >
            <span className="text-xs font-medium">{mes.shortName}</span>
            <span className="text-[11px] tabular-nums opacity-80">
              {rango(mes)}
            </span>
            <span className="sr-only">{ESTILO[mes.season].etiqueta}</span>
          </li>
        ))}
      </ul>

      <ul className="text-muted-foreground flex flex-wrap gap-4 text-xs">
        {ORDEN.map((temporada) => (
          <li key={temporada} className="flex items-center gap-2">
            <span
              aria-hidden
              className={`size-3 rounded-full ${ESTILO[temporada].chip}`}
            />
            {ESTILO[temporada].etiqueta}
          </li>
        ))}
      </ul>
    </section>
  );
}
