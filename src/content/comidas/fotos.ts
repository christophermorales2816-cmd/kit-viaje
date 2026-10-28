import fotos from "./fotos.json";

/**
 * Las fotos de los platos y de los encabezados, de Wikimedia Commons
 * (spec, 18.6).
 *
 * El catálogo solo nombra el archivo (`foto: "Shoyu_ramen.jpg"`); lo demás —la
 * dirección de la miniatura, el tamaño, el autor y la licencia— lo trae
 * herramientas/comidas/fotos.py de la API de Commons y lo deja en fotos.json.
 * Así el autor y la licencia salen de la fuente y no de lo que alguien copió a
 * mano, y una foto sin licencia libre no entra: el script la rechaza.
 *
 * Las miniaturas se sirven desde upload.wikimedia.org y no desde el sitio: es
 * la CDN de Wikimedia, gratis, y no gasta las optimizaciones de imágenes del
 * plan de Vercel.
 */
export interface FotoDeComida {
  /** La miniatura de las tarjetas y las fichas, de 960 de ancho. */
  src: string;
  /** La de los encabezados, de 1920. */
  srcGrande: string;
  ancho: number;
  alto: number;
  autor: string;
  /** "CC BY-SA 4.0", "Dominio público". */
  licencia: string;
  licenciaUrl: string | null;
  /** La página del archivo en Commons: ahí están el autor y la licencia completos. */
  pagina: string;
}

const FOTOS = fotos as Record<string, FotoDeComida>;

/** La foto de un archivo de Commons, o null si no hay una con licencia libre. */
export function fotoDe(archivo: string | null): FotoDeComida | null {
  return archivo ? (FOTOS[archivo] ?? null) : null;
}
