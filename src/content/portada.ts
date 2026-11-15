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
 * el texto, el ícono y la foto de cada una.
 *
 * LAS FOTOS
 *
 * Las elige el dueño del sitio. Mientras no haya, cada tarjeta se ve con un
 * degradé de su tono y su ícono, que es un diseño terminado y no un hueco.
 * Para poner una:
 *
 *   1. Guardala en src/assets/portada/, en JPG, de unos 1600 px de ancho y
 *      sin metadatos (las fotos de un teléfono traen la ubicación).
 *   2. Importala acá arriba: `import castillos from "@/assets/portada/castillos.jpg";`
 *   3. En su tarjeta, cambiá `imagen: null` por `imagen: castillos`.
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

export interface TarjetaDeLaPortada {
  id: string;
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  tono: Tono;
  imagen: StaticImageData | null;
  /** Adónde lleva. null: todavía no hay, y dice "Próximamente". */
  href: string | null;
}

export interface OpcionDeLaPortada {
  id: string;
  titulo: string;
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
  titulo: "En tendencia",
  descripcion:
    "Los destinos que más se están mirando en el sitio, semana a semana.",
  icono: TrendingUp,
  tono: "naranja",
  imagen: null,
  href: null,
};

export const OFERTAS: TarjetaDeLaPortada = {
  id: "ofertas",
  titulo: "Ofertas de último momento",
  descripcion:
    "Las mejores tarifas de vuelos y hoteles para salir pronto, con el precio y la hora en que se vio.",
  icono: TicketsPlane,
  tono: "mar",
  imagen: null,
  href: null,
};

// IMPERDIBLES

export const IMPERDIBLES_DE_CULTURA: TarjetaDeLaPortada[] = [
  {
    id: "edificios-historicos",
    titulo: "Edificios históricos y cascos antiguos",
    descripcion: "Plazas, palacios y calles que cuentan la historia del lugar.",
    icono: Landmark,
    tono: "ambar",
    imagen: null,
    href: null,
  },
  {
    id: "sitios-arqueologicos",
    titulo: "Sitios arqueológicos",
    descripcion:
      "Ciudades mayas e incas, templos romanos y ruinas frente al mar.",
    icono: Pyramid,
    tono: "arena",
    imagen: null,
    href: null,
  },
  {
    id: "espacios-sagrados",
    titulo: "Espacios religiosos y sagrados",
    descripcion: "Catedrales, mezquitas, templos y monasterios.",
    icono: Dome,
    tono: "violeta",
    imagen: null,
    href: null,
  },
  {
    id: "castillos",
    titulo: "Castillos y fortalezas",
    descripcion: "Murallas, ciudadelas y castillos sobre lagos y colinas.",
    icono: Castle,
    tono: "pizarra",
    imagen: null,
    href: null,
  },
  {
    id: "museos",
    titulo: "Museos",
    descripcion: "Los que justifican el viaje por sí solos.",
    icono: Amphora,
    tono: "rosa",
    imagen: null,
    href: null,
  },
  {
    id: "arte-y-espectaculos",
    titulo: "Arte y espectáculos",
    descripcion: "Teatros, salas de música y festivales.",
    icono: Drama,
    tono: "fucsia",
    imagen: null,
    href: null,
  },
];

export const IMPERDIBLES_DE_NATURALEZA: TarjetaDeLaPortada[] = [
  {
    id: "elegidos-por-la-comunidad",
    titulo: "Los elegidos por la comunidad",
    descripcion: "Los lugares que más recomiendan quienes ya fueron.",
    icono: Award,
    tono: "esmeralda",
    imagen: null,
    href: null,
  },
  {
    id: "paisajes",
    titulo: "Paisajes",
    descripcion: "Glaciares, desiertos, fiordos y volcanes.",
    icono: MountainSnow,
    tono: "cielo",
    imagen: null,
    href: null,
  },
  {
    id: "que-hacer",
    titulo: "Qué hacer",
    descripcion:
      "Caminatas, buceo, safaris y todo lo que se hace al aire libre.",
    icono: Compass,
    tono: "verde",
    imagen: null,
    href: null,
  },
];

export const VACACIONES: TarjetaConOpciones = {
  id: "vacaciones",
  titulo: "Vacaciones",
  descripcion: "Playas, islas y lugares para no hacer nada.",
  icono: TreePalm,
  tono: "mar",
  imagen: null,
  opciones: [
    {
      id: "ultimas-ofertas",
      titulo: "Últimas ofertas",
      icono: TicketPercent,
      href: null,
    },
    {
      id: "mejores-hoteles",
      titulo: "Mejores hoteles",
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
