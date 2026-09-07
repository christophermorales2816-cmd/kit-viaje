import { Check, X } from "lucide-react";

import type { GuideTip } from "@/content/guias/types";

/**
 * Consejos de empaque en dos columnas (spec, sección 9.6).
 *
 * El ícono y la palabra van juntos en el encabezado de cada columna: verde y
 * rojo no pueden ser el único canal que distinga "hacé esto" de "no hagas
 * esto", que es justo la distinción que más caro sale confundir.
 */

function Columna({
  titulo,
  tips,
  icono: Icono,
  clase,
}: {
  titulo: string;
  tips: GuideTip[];
  icono: typeof Check;
  clase: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-6">
      <h3 className={`flex items-center gap-2 font-semibold ${clase}`}>
        <Icono className="size-5" aria-hidden />
        {titulo}
      </h3>

      <ul className="flex flex-col gap-3">
        {tips.map((tip) => (
          <li
            key={tip.title}
            className="bg-muted/40 flex flex-col gap-1 rounded-lg p-4"
          >
            <h4 className="text-sm font-medium">{tip.title}</h4>
            <p className="text-muted-foreground text-sm text-pretty">
              {tip.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PackingTips({
  dos,
  donts,
  country,
}: {
  dos: GuideTip[];
  donts: GuideTip[];
  country: string;
}) {
  return (
    <section
      id="consejos"
      aria-labelledby="consejos-titulo"
      className="flex w-full max-w-5xl scroll-mt-8 flex-col gap-6"
    >
      <h2
        id="consejos-titulo"
        className="text-2xl font-semibold tracking-tight text-balance"
      >
        Consejos de empaque para {country}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Columna
          titulo="Sí"
          tips={dos}
          icono={Check}
          clase="text-emerald-700 dark:text-emerald-400"
        />
        <Columna
          titulo="No"
          tips={donts}
          icono={X}
          clase="text-rose-700 dark:text-rose-400"
        />
      </div>
    </section>
  );
}
