import Link from "next/link";

import { Logo } from "@/components/sitio/logo";
import type { ContinenteDelMenu } from "@/content/guias/continentes";
import { textos } from "@/i18n/servidor";
import { TEXTOS_DEL_SITIO } from "@/i18n/sitio";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";
import {
  enlacesDelSitio,
  esPronto,
  type ItemDelSitio,
} from "@/lib/sitio/navegacion";
import { BUILD_ID, BUILD_URL } from "@/lib/version";

/**
 * El pie de todas las páginas (spec, 19.2).
 *
 * Columnas de enlaces como en los sitios de viajes de referencia: destinos,
 * herramientas, el sitio y lo legal. Lo que todavía no existe aparece en gris
 * con "pronto", sin enlace. Abajo siguen el aviso de analytics y el commit que
 * está corriendo, que estaban antes solos.
 *
 * `print:hidden`: el PDF de la lista de equipaje no lleva el pie.
 */
export async function Pie({
  continentes,
}: {
  continentes: ContinenteDelMenu[];
}) {
  const t = await textos(TEXTOS_DEL_SITIO);
  const total = continentes.reduce((suma, { cantidad }) => suma + cantidad, 0);

  const columnas: { titulo: string; items: ItemDelSitio[] }[] = [
    {
      titulo: t.pie.destinos,
      items: [
        ...continentes.map((continente) => ({
          id: continente.id,
          nombre: continente.nombre,
          href: `/destinos/${continente.id}`,
        })),
        {
          id: "todos",
          nombre: t.pie.todosLosDestinos(total),
          href: "/destinos",
        },
      ],
    },
    ...enlacesDelSitio(t).columnasDelPie,
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 print:hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-8">
        <div className="flex max-w-xs flex-col gap-4">
          <Link
            href="/"
            className="self-start rounded-md text-white outline-none focus-visible:ring-[3px] focus-visible:ring-orange-400/60"
          >
            <Logo className="h-7" />
          </Link>
          <p className="text-sm text-pretty text-slate-400">{t.pie.lema}</p>
        </div>

        {columnas.map((columna) => (
          <nav
            key={columna.titulo}
            aria-label={columna.titulo}
            className="flex flex-col gap-4"
          >
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              {columna.titulo}
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {columna.items.map((item) => (
                <li key={item.id}>
                  {esPronto(item) ? (
                    <span className="inline-flex items-center gap-2 text-slate-500">
                      {item.nombre}
                      <span className="rounded-full border border-slate-700 px-1.5 py-px text-[0.65rem] tracking-wide uppercase">
                        {t.pie.pronto}
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="rounded-sm transition-colors outline-none hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-orange-400/60"
                    >
                      {item.nombre}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          {/*
            Aviso de una línea, sin lógica de consentimiento (spec, sección 2).
            Vercel Web Analytics no usa cookies: identifica visitas con un hash
            del request entrante y no guarda nada que las reidentifique. Las
            páginas de un viaje no se miden (src/components/analytics.tsx). Sin
            cookies no hay nada que consentir, así que un banner de "Aceptar
            todo / Personalizar" sería resolver un problema que el proyecto no
            tiene. Se avisa igual, porque medir sin decirlo tampoco está bien.

            La única cookie del sitio es la del aeropuerto de salida
            (src/lib/vuelos/origen.ts): la pone quien elige uno con un botón, y
            /vuelos dice al lado qué guarda y cómo se borra (spec, 17.3).
          */}
          <p>{t.pie.aviso}</p>

          {/*
            El commit que está corriendo. Tres veces un arreglo estuvo en main
            y no en producción, y las tres se perdió tiempo discutiendo si el
            problema era el código o el deploy. Con esto se compara en vez de
            discutir.
          */}
          <p className="shrink-0">
            © {new Date().getFullYear()} {NOMBRE_DEL_SITIO} · {t.pie.build}{" "}
            {BUILD_URL ? (
              <a
                href={BUILD_URL}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-slate-300"
              >
                {BUILD_ID}
              </a>
            ) : (
              BUILD_ID
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
