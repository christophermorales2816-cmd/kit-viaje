import type { MonthClimate } from "@/lib/prepare/climate-year";
import { TEXTOS_DE_LA_GUIA } from "@/i18n/guia";
import { textos } from "@/i18n/servidor";

/**
 * Los dos gráficos del año: temperatura y probabilidad de lluvia.
 *
 * La lluvia va en PORCENTAJE, no en milímetros. climate_profiles solo tiene
 * precip_probability (0-100); dibujar "mm" sería inventar una unidad que no
 * está en la base.
 *
 * SVG inline y no una librería: son dos gráficos de barras de doce columnas en
 * un Server Component. Traerse un runtime de charts al cliente para esto es
 * peso sin nada a cambio.
 */

const ALTO = 120;
/**
 * Piso del 12%: la barra más baja tiene que verse. Sin él, el mes más frío del
 * año dibuja una barra de cero píxeles y parece un dato faltante.
 */
const PISO = 0.12;

function Barras({
  titulo,
  descripcion,
  meses,
  valor,
  formato,
  clase,
  sinDatos,
}: {
  titulo: string;
  descripcion: string;
  meses: MonthClimate[];
  valor: (mes: MonthClimate) => number | null;
  formato: (v: number) => string;
  clase: string;
  /** "Sin datos", para el mes que no tiene el valor. */
  sinDatos: string;
}) {
  const valores = meses.map(valor).filter((v): v is number => v !== null);

  if (valores.length === 0) return null;

  // La escala arranca en el mínimo del año, no en cero: entre 12 y 30 °C hay
  // una diferencia que se pierde si el eje empieza en 0.
  const min = Math.min(...valores);
  const max = Math.max(...valores);
  const rango = max - min || 1;

  return (
    <figure className="flex flex-col gap-3">
      <figcaption className="flex flex-col gap-1">
        <h3 className="font-medium">{titulo}</h3>
        <p className="text-muted-foreground text-sm text-pretty">
          {descripcion}
        </p>
      </figcaption>

      <ul className="flex items-end gap-1" style={{ height: ALTO }}>
        {meses.map((mes) => {
          const v = valor(mes);
          const alto = v === null ? 0 : ((v - min) / rango) * (1 - PISO) + PISO;

          return (
            <li
              key={mes.month}
              className="flex h-full flex-1 flex-col justify-end"
              title={v === null ? sinDatos : `${mes.longName}: ${formato(v)}`}
            >
              <span
                aria-hidden
                className={`w-full rounded-t-sm ${clase}`}
                style={{ height: `${alto * 100}%` }}
              />
              <span className="sr-only">
                {mes.longName}: {v === null ? sinDatos : formato(v)}
              </span>
            </li>
          );
        })}
      </ul>

      <ul aria-hidden className="text-muted-foreground flex gap-1 text-[10px]">
        {meses.map((mes) => (
          <li key={mes.month} className="flex-1 text-center">
            {mes.shortName.charAt(0)}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export async function ClimateBars({ months }: { months: MonthClimate[] }) {
  const t = (await textos(TEXTOS_DE_LA_GUIA)).graficos;

  return (
    <section
      aria-labelledby="graficos-clima"
      className="flex w-full max-w-5xl flex-col gap-8"
    >
      <h2
        id="graficos-clima"
        className="text-2xl font-semibold tracking-tight text-balance"
      >
        {t.titulo}
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <Barras
          titulo={t.maxima.titulo}
          descripcion={t.maxima.descripcion}
          sinDatos={t.sinDatos}
          meses={months}
          valor={(mes) => mes.tempMax}
          formato={(v) => `${Math.round(v)} °C`}
          clase="bg-orange-400/80 dark:bg-orange-500/80"
        />

        <Barras
          titulo={t.lluvia.titulo}
          descripcion={t.lluvia.descripcion}
          sinDatos={t.sinDatos}
          meses={months}
          valor={(mes) => mes.precipProbability}
          formato={(v) => `${Math.round(v)} %`}
          clase="bg-sky-400/80 dark:bg-sky-500/80"
        />
      </div>
    </section>
  );
}
