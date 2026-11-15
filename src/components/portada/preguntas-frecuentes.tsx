import { ChevronDown } from "lucide-react";

import { EncabezadoDeSeccion } from "./encabezado-de-seccion";

/**
 * Preguntas frecuentes (spec, 19.6): en gris hasta que estén las preguntas,
 * que las escribe el dueño del sitio aparte. Se ve la forma que va a tener
 * —una lista que se despliega— y nada más: las filas no tienen texto, para no
 * inventar preguntas que nadie hizo.
 */

/** Anchos distintos, para que se lea como una lista y no como una grilla. */
const FILAS = ["w-3/4", "w-2/3", "w-4/5", "w-1/2"];

export function PreguntasFrecuentes() {
  return (
    <section aria-labelledby="preguntas-titulo" className="bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:py-20 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-12">
        <EncabezadoDeSeccion
          id="preguntas-titulo"
          antetitulo="Ayuda"
          titulo="Preguntas frecuentes"
          pronto
        >
          Las dudas que más llegan, con su respuesta.
        </EncabezadoDeSeccion>

        <ul
          aria-hidden
          className="flex flex-col divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white"
        >
          {FILAS.map((ancho) => (
            <li key={ancho} className="flex items-center gap-4 px-5 py-5">
              <span className={`h-2.5 rounded-full bg-slate-200 ${ancho}`} />
              <ChevronDown className="ml-auto size-5 shrink-0 text-slate-300" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
