"use client";

import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_LA_PORTADA } from "@/i18n/portada";
import { cn } from "@/lib/utils";

/**
 * El cartel de lo que todavía no existe (spec, 19.6). Es el mismo "pronto" del
 * pie y de la barra: el sitio muestra lo que viene, sin enlace y sin mandar a
 * nadie a una página vacía.
 *
 * Cuando va antes de un título, el lector de pantalla lo escucha en el título
 * mismo (con `ProntoEnElTitulo`) y este cartel se le esconde: quien salta de
 * título en título no pasa por el cartel, y quien lee todo no lo escucha dos
 * veces.
 *
 * Es de cliente para leer su texto con `useTextos`: lo usan secciones del
 * servidor y también Imperdibles, que es de cliente, y un componente que se
 * usa en los dos lados no puede pedir los textos de forma asíncrona.
 */
export function Pronto({
  sobreFoto = false,
  oculto = false,
  className,
}: {
  /** Sobre una foto o un degradé oscuro, en vidrio claro. */
  sobreFoto?: boolean;
  /** Para el lector de pantalla ya lo dice el título. */
  oculto?: boolean;
  className?: string;
}) {
  const t = useTextos(TEXTOS_DE_LA_PORTADA).pronto;

  return (
    <span
      aria-hidden={oculto || undefined}
      className={cn(
        "inline-flex w-fit shrink-0 items-center rounded-full px-2 py-0.5 text-[0.68rem] font-semibold tracking-wide whitespace-nowrap uppercase",
        sobreFoto
          ? "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm"
          : "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
        className,
      )}
    >
      {t.cartel}
    </span>
  );
}

/** "Próximamente" dentro de un título, solo para el lector de pantalla. */
export function ProntoEnElTitulo() {
  const t = useTextos(TEXTOS_DE_LA_PORTADA).pronto;

  return <span className="sr-only">{t.enElTitulo}</span>;
}
