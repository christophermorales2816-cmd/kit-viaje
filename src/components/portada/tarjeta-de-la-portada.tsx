import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { TarjetaDeLaPortada, Tono } from "@/content/portada";
import type { TextosDeLaPortada } from "@/i18n/portada";
import { cn } from "@/lib/utils";

import { Pronto, ProntoEnElTitulo } from "./pronto";

/**
 * Las clases de cada tono. Van escritas enteras, y no armadas con el nombre
 * del tono, porque Tailwind solo genera las clases que encuentra literales en
 * el código.
 */
const DEGRADES: Record<Tono, string> = {
  ambar: "from-amber-600 via-orange-800 to-stone-950",
  arena: "from-yellow-700 via-amber-900 to-stone-950",
  violeta: "from-violet-600 via-indigo-900 to-slate-950",
  pizarra: "from-slate-500 via-slate-800 to-slate-950",
  rosa: "from-rose-600 via-rose-900 to-slate-950",
  fucsia: "from-fuchsia-600 via-purple-900 to-slate-950",
  esmeralda: "from-emerald-600 via-teal-900 to-slate-950",
  cielo: "from-sky-500 via-sky-800 to-slate-950",
  verde: "from-lime-600 via-green-800 to-slate-950",
  mar: "from-cyan-600 via-blue-900 to-slate-950",
  naranja: "from-orange-500 via-red-800 to-slate-950",
};

/** La trama de puntos del globo, para que los degradés sean de la casa. */
const TRAMA = {
  backgroundImage:
    "radial-gradient(circle, rgb(255 255 255 / 0.16) 1px, transparent 1.6px)",
  backgroundSize: "14px 14px",
};

/**
 * El fondo de una tarjeta: su foto, o mientras no haya, un degradé de su tono
 * con la trama del globo y el ícono en grande. Abajo, un velo para que el
 * texto blanco se lea sobre cualquier foto.
 */
export function FondoDeTarjeta({
  imagen,
  tono,
  icono: Icono,
  sizes,
}: {
  imagen: StaticImageData | null;
  tono: Tono;
  icono: LucideIcon;
  /** El ancho que ocupa la tarjeta, para que Next elija el tamaño de la foto. */
  sizes: string;
}) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      {imagen ? (
        <Image
          src={imagen}
          alt=""
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover transition-transform duration-500 group-hover/tarjeta:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <div className={cn("absolute inset-0 bg-linear-to-br", DEGRADES[tono])}>
          <div className="absolute inset-0 opacity-70" style={TRAMA} />
          <Icono
            strokeWidth={1}
            className="absolute -right-6 -bottom-8 size-44 text-white/10"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
    </div>
  );
}

/**
 * Una tarjeta de la portada (spec, 19.6). Con `href` es un enlace; sin él,
 * dice "Próximamente" y no responde al mouse, para que nadie la confunda con
 * algo que se puede usar.
 *
 * El texto llega armado (`texto`) porque la usan secciones del servidor y una
 * de cliente: cada una lo saca del diccionario a su manera.
 */
export function TarjetaDeLaPortadaVista({
  tarjeta,
  texto,
  sizes,
  titulo: Titulo = "h3",
  idDelTitulo,
  className,
  children,
}: {
  tarjeta: TarjetaDeLaPortada;
  texto: TextosDeLaPortada["tarjetas"][TarjetaDeLaPortada["id"]];
  sizes: string;
  titulo?: "h2" | "h3";
  /** Cuando la tarjeta es una sección entera, su título la nombra. */
  idDelTitulo?: string;
  /** El alto: un `aspect-*` o un `min-h-*`. */
  className?: string;
  /** Lo que va debajo de la descripción. */
  children?: ReactNode;
}) {
  const { icono: Icono, href } = tarjeta;
  const { titulo, descripcion } = texto;

  const contenido = (
    <>
      <FondoDeTarjeta
        imagen={tarjeta.imagen}
        tono={tarjeta.tono}
        icono={tarjeta.icono}
        sizes={sizes}
      />

      <div className="flex items-start gap-3">
        {href ? null : <Pronto sobreFoto oculto />}
        <span className="ml-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
          <Icono aria-hidden className="size-5" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Titulo
          id={idDelTitulo}
          className="flex items-start gap-1.5 text-lg leading-snug font-semibold text-balance"
        >
          {titulo}
          {href ? null : <ProntoEnElTitulo />}
          {href ? (
            <ArrowUpRight
              aria-hidden
              className="mt-0.5 size-5 shrink-0 transition-transform group-hover/tarjeta:translate-x-0.5 group-hover/tarjeta:-translate-y-0.5"
            />
          ) : null}
        </Titulo>
        <p className="text-sm text-pretty text-white/80">{descripcion}</p>
        {children}
      </div>
    </>
  );

  const clases = cn(
    "group/tarjeta relative isolate flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl p-5 text-white shadow-sm",
    className,
  );

  if (!href) return <div className={clases}>{contenido}</div>;

  return (
    <Link
      href={href}
      className={cn(
        clases,
        "transition-[translate,box-shadow] duration-200 outline-none hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-[3px] focus-visible:ring-orange-400/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      )}
    >
      {contenido}
    </Link>
  );
}
