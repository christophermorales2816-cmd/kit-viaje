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
      Próximamente
    </span>
  );
}

/** "Próximamente" dentro de un título, solo para el lector de pantalla. */
export function ProntoEnElTitulo() {
  return <span className="sr-only"> (próximamente)</span>;
}
