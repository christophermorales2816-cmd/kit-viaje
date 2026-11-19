import type { TextosDelSitio } from "@/i18n/sitio";
import { NOMBRE_DEL_SITIO } from "@/lib/sitio/marca";

/**
 * Los enlaces del menú y del pie (spec, sección 19).
 *
 * Una sola lista para los dos y para el menú del teléfono: un enlace que se
 * agrega acá aparece en los tres, y uno que todavía no existe se marca una vez
 * como "pronto" en vez de decidirlo en cada lugar.
 *
 * Lo que todavía no existe se muestra igual, en gris y sin enlace: el sitio
 * dice lo que viene sin mandar a nadie a una página vacía. Los continentes no
 * están acá: salen de las guías (src/content/guias/continentes.ts).
 *
 * Los nombres salen del diccionario del sitio (src/i18n/es/sitio.ts). Acá
 * quedan las rutas y qué existe y qué no, que no dependen del idioma.
 */

export interface EnlaceDelSitio {
  /** Para las claves de React y los íconos. */
  id: string;
  nombre: string;
  href: string;
  /** Una línea, para el menú desplegable. */
  descripcion?: string;
}

export interface EnlacePronto {
  id: string;
  nombre: string;
  /** Lo que se lee al pasar el mouse o llegar con Tab. */
  pronto: string;
}

export type ItemDelSitio = EnlaceDelSitio | EnlacePronto;

export function esPronto(item: ItemDelSitio): item is EnlacePronto {
  return "pronto" in item;
}

/** Las rutas que el menú conoce. */
const RUTAS = {
  destinos: "/destinos",
  vuelos: "/vuelos",
  queComer: "/que-comer",
  nosotros: "/nosotros",
} as const;

export interface EnlacesDelSitio {
  /** Las herramientas del sitio, las dos que no son una guía. */
  herramientas: EnlaceDelSitio[];
  blog: EnlacePronto;
  nosotros: EnlaceDelSitio;
  contacto: EnlacePronto;
  ingresar: EnlacePronto;
  /** Las columnas del pie que no son de destinos, en orden. */
  columnasDelPie: { titulo: string; items: ItemDelSitio[] }[];
}

/** Los enlaces con sus nombres en el idioma de `t`. */
export function enlacesDelSitio(t: TextosDelSitio): EnlacesDelSitio {
  const { enlaces, barra, pie } = t;

  const pronto = (id: string, nombre: string): EnlacePronto => ({
    id,
    nombre,
    pronto: barra.proximamente,
  });

  const herramientas: EnlaceDelSitio[] = [
    { id: "vuelos", href: RUTAS.vuelos, ...enlaces.vuelos },
    { id: "que-comer", href: RUTAS.queComer, ...enlaces.queComer },
  ];
  const blog = pronto("blog", enlaces.blog);
  const nosotros: EnlaceDelSitio = {
    id: "nosotros",
    nombre: enlaces.nosotros,
    href: RUTAS.nosotros,
  };
  const contacto = pronto("contacto", enlaces.contacto);
  const ingresar: EnlacePronto = {
    id: "ingresar",
    nombre: enlaces.ingresar,
    pronto: enlaces.ingresarPronto,
  };

  return {
    herramientas,
    blog,
    nosotros,
    contacto,
    ingresar,
    columnasDelPie: [
      {
        titulo: pie.herramientas,
        items: [
          ...herramientas,
          {
            id: "planificar",
            nombre: enlaces.planificar,
            href: RUTAS.destinos,
          },
        ],
      },
      {
        titulo: NOMBRE_DEL_SITIO,
        items: [nosotros, contacto, blog, pronto("foros", enlaces.foros)],
      },
      {
        titulo: pie.legal,
        items: [
          pronto("privacidad", enlaces.privacidad),
          pronto("terminos", enlaces.terminos),
          pronto("mapa", enlaces.mapaDelSitio),
        ],
      },
    ],
  };
}

export type SeccionDelSitio = "destinos" | "herramientas" | "nosotros";

/**
 * A qué parte del menú pertenece una página, para marcarla en la barra. Las
 * guías son destinos: se llega a ellas desde ahí.
 */
export function seccionActiva(pathname: string): SeccionDelSitio | null {
  if (estaEn(pathname, RUTAS.destinos) || pathname.startsWith("/guia/")) {
    return "destinos";
  }

  if ([RUTAS.vuelos, RUTAS.queComer].some((href) => estaEn(pathname, href))) {
    return "herramientas";
  }

  if (estaEn(pathname, RUTAS.nosotros)) return "nosotros";

  return null;
}

/** Si `pathname` es `href` o una página adentro de `href`. */
export function estaEn(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
