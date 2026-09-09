import type { PackingCatalogItem } from "@/lib/packing";
import type { MonthClimate } from "@/lib/prepare/climate-year";
import { suggestItemsForBuckets } from "@/lib/prepare/suggest-items";

/**
 * Una tarjeta por mes: qué clima toca y qué define empacar (spec, sección 9).
 *
 * Los chips salen del catálogo real, filtrados por los buckets DE ESE MES y
 * ordenados primero por el bucket que define el mes. Las tres cosas hicieron
 * falta: sin buckets por mes las doce tarjetas mostraban lo mismo; sin el orden
 * por especificidad también, porque los ítems genéricos llevan las tres
 * etiquetas; y sin priorizar el bucket principal, enero sugería un polar.
 */

const CHIPS_POR_MES = 4;

function temperatura(mes: MonthClimate): string {
  if (mes.tempMin === null && mes.tempMax === null) return "Sin datos de clima";
  if (mes.tempMin === null) return `Hasta ${Math.round(mes.tempMax!)} °C`;
  if (mes.tempMax === null) return `Desde ${Math.round(mes.tempMin)} °C`;
  return `${Math.round(mes.tempMin)} a ${Math.round(mes.tempMax)} °C`;
}

export function MonthCards({
  months,
  catalog,
  adviceByBucket,
}: {
  months: MonthClimate[];
  catalog: PackingCatalogItem[];
  adviceByBucket: Record<string, string>;
}) {
  return (
    <section
      aria-labelledby="mes-a-mes"
      className="flex w-full max-w-5xl flex-col gap-6"
    >
      <h2
        id="mes-a-mes"
        className="text-2xl font-semibold tracking-tight text-balance"
      >
        Qué llevar según el mes
      </h2>

      <div className="grid gap-px overflow-hidden rounded-xl bg-border md:grid-cols-2 lg:grid-cols-3">
        {months.map((mes) => {
          const sugeridos = suggestItemsForBuckets(
            catalog,
            mes.buckets,
            mes.primaryBucket,
            CHIPS_POR_MES,
          );
          const consejo = mes.primaryBucket
            ? adviceByBucket[mes.primaryBucket]
            : undefined;

          return (
            <article
              key={mes.month}
              className="bg-background flex flex-col gap-3 p-5"
            >
              <header className="flex items-baseline justify-between gap-2">
                <h3 className="font-medium">{mes.longName}</h3>
                <span className="text-muted-foreground text-xs tabular-nums">
                  {temperatura(mes)}
                </span>
              </header>

              {consejo ? (
                <p className="text-muted-foreground text-sm text-pretty">
                  {consejo}
                </p>
              ) : null}

              {sugeridos.length > 0 ? (
                <ul className="flex flex-wrap gap-1.5">
                  {sugeridos.map((item) => (
                    <li
                      key={item.id}
                      className="bg-muted rounded-full px-2.5 py-1 text-xs"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
