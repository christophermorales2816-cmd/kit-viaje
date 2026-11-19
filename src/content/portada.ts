import {
  Amphora,
  Award,
  Castle,
  Compass,
  Dome,
  Drama,
  Hotel,
  Landmark,
  MountainSnow,
  Pyramid,
  TicketPercent,
  TicketsPlane,
  TreePalm,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";

import type { ContinenteId } from "@/content/guias/continentes";

/**
 * Las tarjetas de las secciones de la portada, debajo del hero (spec, 19.6):
 * el ícono, la foto y el enlace de cada una. El título y la descripción están
 * en el diccionario de la portada (src/i18n/es/portada.ts), con el mismo id.
 *
 * LAS FOTOS
 *
 * Las elige el dueño del sitio. Mientras no haya, cada tarjeta se ve con un
 * degradé de su tono y su ícono, que es un diseño terminado y no un hueco.
 * Para poner una:
 *
 *   1. Guárdala en src/assets/portada/, en JPG, de unos 1600 px de ancho y
 *      sin metadatos (las fotos de un teléfono traen la ubicación).
 *   2. Impórtala aquí arriba: `import castillos from "@/assets/portada/castillos.jpg";`
 *   3. En su tarjeta, cambia `imagen: null` por `imagen: castillos`.
 *
 * Next genera los tamaños y el borroso mientras carga. La foto va debajo del
 * texto con un velo oscuro, así que cualquier foto se lee.
 *
 * LO QUE TODAVÍA NO EXISTE
 *
 * `href: null` es "Próximamente": la tarjeta se ve, sin enlace y con el
 * cartel. Cuando haya adónde llevar, se pone el enlace y la tarjeta pasa a
 * ser un enlace, sin tocar nada más.
 */

/** Los degradés de las tarjetas sin foto. Las clases, en el componente. */
export type Tono =
  | "ambar"
  | "arena"
  | "violeta"
  | "pizarra"
  | "rosa"
  | "fucsia"
  | "esmeralda"
  | "cielo"
  | "verde"
  | "mar"
  | "naranja";

/** Las tarjetas. Cada una tiene su título y su descripción en el diccionario. */
export type IdDeTarjeta =
  | "en-tendencia"
  | "ofertas"
  | "edificios-historicos"
  | "sitios-arqueologicos"
  | "espacios-sagrados"
  | "castillos"
  | "museos"
  | "arte-y-espectaculos"
  | "elegidos-por-la-comunidad"
  | "paisajes"
  | "que-hacer"
  | "vacaciones";

/** Las opciones que despliega una tarjeta, con su nombre en el diccionario. */
export type IdDeOpcion = "ultimas-ofertas" | "mejores-hoteles";

export interface TarjetaDeLaPortada {
  id: IdDeTarjeta;
  icono: LucideIcon;
  tono: Tono;
  imagen: StaticImageData | null;
  /** Adónde lleva. null: todavía no hay, y dice "Próximamente". */
  href: string | null;
}

export interface OpcionDeLaPortada {
  id: IdDeOpcion;
  icono: LucideIcon;
  href: string | null;
}

/** Una tarjeta que despliega opciones en vez de llevar a un lugar. */
export interface TarjetaConOpciones extends Omit<TarjetaDeLaPortada, "href"> {
  opciones: OpcionDeLaPortada[];
}

// EN TENDENCIA Y OFERTAS

export const EN_TENDENCIA: TarjetaDeLaPortada = {
  id: "en-tendencia",
  icono: TrendingUp,
  tono: "naranja",
  imagen: null,
  href: null,
};

export const OFERTAS: TarjetaDeLaPortada = {
  id: "ofertas",
  icono: TicketsPlane,
  tono: "mar",
  imagen: null,
  href: null,
};

// IMPERDIBLES

export const IMPERDIBLES_DE_CULTURA: TarjetaDeLaPortada[] = [
  {
    id: "edificios-historicos",
    icono: Landmark,
    tono: "ambar",
    imagen: null,
    href: null,
  },
  {
    id: "sitios-arqueologicos",
    icono: Pyramid,
    tono: "arena",
    imagen: null,
    href: null,
  },
  {
    id: "espacios-sagrados",
    icono: Dome,
    tono: "violeta",
    imagen: null,
    href: null,
  },
  {
    id: "castillos",
    icono: Castle,
    tono: "pizarra",
    imagen: null,
    href: null,
  },
  {
    id: "museos",
    icono: Amphora,
    tono: "rosa",
    imagen: null,
    href: null,
  },
  {
    id: "arte-y-espectaculos",
    icono: Drama,
    tono: "fucsia",
    imagen: null,
    href: null,
  },
];

export const IMPERDIBLES_DE_NATURALEZA: TarjetaDeLaPortada[] = [
  {
    id: "elegidos-por-la-comunidad",
    icono: Award,
    tono: "esmeralda",
    imagen: null,
    href: null,
  },
  {
    id: "paisajes",
    icono: MountainSnow,
    tono: "cielo",
    imagen: null,
    href: null,
  },
  {
    id: "que-hacer",
    icono: Compass,
    tono: "verde",
    imagen: null,
    href: null,
  },
];

export const VACACIONES: TarjetaConOpciones = {
  id: "vacaciones",
  icono: TreePalm,
  tono: "mar",
  imagen: null,
  opciones: [
    {
      id: "ultimas-ofertas",
      icono: TicketPercent,
      href: null,
    },
    {
      id: "mejores-hoteles",
      icono: Hotel,
      href: null,
    },
  ],
};

// POR CONTINENTE

/** La foto de cada continente, para la sección "Por continente". */
export const FOTOS_DE_CONTINENTES: Record<
  ContinenteId,
  { imagen: StaticImageData | null; tono: Tono }
> = {
  america: { imagen: null, tono: "esmeralda" },
  europa: { imagen: null, tono: "violeta" },
  africa: { imagen: null, tono: "ambar" },
  asia: { imagen: null, tono: "rosa" },
  oceania: { imagen: null, tono: "mar" },
};
