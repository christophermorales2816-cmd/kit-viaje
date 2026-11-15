import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Pronto, ProntoEnElTitulo } from "./pronto";

/**
 * El encabezado de cada sección de la portada (spec, 19.6): un antetítulo
 * naranja que dice de qué se trata, el título y una línea. Todas las
 * secciones lo usan, así la portada se lee como una sola cosa.
 */
export function EncabezadoDeSeccion({
  id,
  antetitulo,
  titulo,
  children,
  pronto = false,
  accion,
  oscuro = false,
  className,
}: {
  /** El id del título, para el `aria-labelledby` de la sección. */
  id: string;
  antetitulo: string;
  titulo: string;
  /** La línea debajo del título. */
  children?: ReactNode;
  pronto?: boolean;
  /** Un enlace a la derecha, como "Ver todos los destinos". */
  accion?: ReactNode;
  oscuro?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-2">
        {/*
          El cartel va en la línea del antetítulo y no al lado del título: con
          un título largo, al lado se caía solo a la línea de abajo.
        */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.14em] uppercase",
              oscuro ? "text-orange-400" : "text-orange-600",
            )}
          >
            {antetitulo}
          </p>
          {pronto ? <Pronto sobreFoto={oscuro} oculto /> : null}
        </div>
        <h2
          id={id}
          className="text-3xl font-semibold tracking-tight text-balance md:text-4xl"
        >
          {titulo}
          {pronto ? <ProntoEnElTitulo /> : null}
        </h2>
        {children ? (
          <p
            className={cn(
              "text-pretty",
              oscuro ? "text-white/75" : "text-slate-600",
            )}
          >
            {children}
          </p>
        ) : null}
      </div>
      {accion ? <div className="shrink-0">{accion}</div> : null}
    </header>
  );
}
