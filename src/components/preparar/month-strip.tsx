import type { MonthClimate, Season } from "@/lib/prepare/climate-year";
import { TEXTOS_DE_LA_GUIA } from "@/i18n/guia";
import { textos } from "@/i18n/servidor";

/**
 * La tira de doce meses (spec, sección 9).
 *
 * El color resume la temporada, pero nunca es el único canal: cada mes muestra
 * también su rango de temperatura y la leyenda nombra las tres temporadas. Un
 * lector daltónico —o cualquiera imprimiendo la página— lee lo mismo.
 */

/** El color de cada temporada. Su nombre está en el diccionario de la guía. */
const ESTILO: Record<Season, { chip: string }> = {
  ideal: {
    chip: "bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-50",
  },
  media: {
    chip: "bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-50",
  },
  dificil: {
    chip: "bg-rose-100 text-rose-950 dark:bg-rose-950 dark:text-rose-50",
  },
};

const ORDEN: Season[] = ["ideal", "media", "dificil"];

function rango(mes: MonthClimate, sinDato: string): string {
  if (mes.tempMin === null && mes.tempMax === null) return sinDato;
  if (mes.tempMin === null) return `${Math.round(mes.tempMax!)}°`;
  if (mes.tempMax === null) return `${Math.round(mes.tempMin)}°`;
  return `${Math.round(mes.tempMin)}–${Math.round(mes.tempMax)}°`;
}

export async function MonthStrip({ months }: { months: MonthClimate[] }) {
  const { tira: t, preparar } = await textos(TEXTOS_DE_LA_GUIA);

  return (
    <section
      aria-labelledby="tira-meses"
      className="flex w-full max-w-5xl flex-col gap-4"
    >
      <h2 id="tira-meses" className="text-xl font-semibold tracking-tight">
        {t.titulo}
      </h2>

      <ul className="grid grid-cols-6 gap-2 md:grid-cols-12">
        {months.map((mes) => (
          <li
            key={mes.month}
            className={`flex flex-col items-center gap-1 rounded-lg px-1 py-3 ${ESTILO[mes.season].chip}`}
          >
            <span className="text-xs font-medium">{mes.shortName}</span>
            <span className="text-[11px] tabular-nums opacity-80">
              {rango(mes, preparar.sinDato)}
            </span>
            <span className="sr-only">{t.temporadas[mes.season]}</span>
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
            {t.temporadas[temporada]}
          </li>
        ))}
      </ul>
    </section>
  );
}
