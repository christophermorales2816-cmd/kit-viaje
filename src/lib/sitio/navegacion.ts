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

/** Las herramientas del sitio, las dos que no son una guía. */
export const HERRAMIENTAS: EnlaceDelSitio[] = [
  {
    id: "vuelos",
    nombre: "Radar de vuelos",
    href: "/vuelos",
    descripcion: "Qué está volando ahora cerca tuyo.",
  },
  {
    id: "que-comer",
    nombre: "Qué comer y beber",
    href: "/que-comer",
    descripcion: "Los platos de cada país y dónde probarlos.",
  },
];

export const BLOG: EnlacePronto = {
  id: "blog",
  nombre: "Blog",
  pronto: "Próximamente",
};

export const NOSOTROS: EnlaceDelSitio = {
  id: "nosotros",
  nombre: "Nosotros",
  href: "/nosotros",
};

export const CONTACTO: EnlacePronto = {
  id: "contacto",
  nombre: "Contacto",
  pronto: "Próximamente",
};

export const INGRESAR: EnlacePronto = {
  id: "ingresar",
  nombre: "Ingresar",
  pronto: "Muy pronto: tu cuenta y los foros",
};

/** Las columnas del pie que no son de destinos, en orden. */
export const COLUMNAS_DEL_PIE: { titulo: string; items: ItemDelSitio[] }[] = [
  {
    titulo: "Herramientas",
    items: [
      ...HERRAMIENTAS,
      {
        id: "planificar",
        nombre: "Planificá tu viaje",
        href: "/destinos",
      },
    ],
  },
  {
    titulo: "Kit de viaje",
    items: [
      NOSOTROS,
      CONTACTO,
      BLOG,
      { id: "foros", nombre: "Foros", pronto: "Próximamente" },
    ],
  },
  {
    titulo: "Legal",
    items: [
      { id: "privacidad", nombre: "Privacidad", pronto: "Próximamente" },
      { id: "terminos", nombre: "Términos de uso", pronto: "Próximamente" },
      { id: "mapa", nombre: "Mapa del sitio", pronto: "Próximamente" },
    ],
  },
];

export type SeccionDelSitio = "destinos" | "herramientas" | "nosotros";

/**
 * A qué parte del menú pertenece una página, para marcarla en la barra. Las
 * guías son destinos: se llega a ellas desde ahí.
 */
export function seccionActiva(pathname: string): SeccionDelSitio | null {
  if (pathname.startsWith("/destinos") || pathname.startsWith("/guia/")) {
    return "destinos";
  }

  if (HERRAMIENTAS.some(({ href }) => estaEn(pathname, href))) {
    return "herramientas";
  }

  if (estaEn(pathname, NOSOTROS.href)) return "nosotros";

  return null;
}

/** Si `pathname` es `href` o una página adentro de `href`. */
export function estaEn(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}
