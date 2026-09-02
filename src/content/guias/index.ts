import { argentina } from "./argentina";
import type { DestinationGuide } from "./types";

export type {
  DestinationGuide,
  GuideFact,
  GuideHighlight,
  GuideImage,
  GuideScore,
} from "./types";
export { GUIDE_FACTS_MAX_AGE_DAYS } from "./types";

/**
 * Índice de guías por slug (spec, sección 8.2).
 *
 * Con las rutas por destino (`/guia/{slug}`) el contenido deja de ser un
 * singleton importado a mano: la página necesita resolver el slug de la URL.
 * Hoy hay una sola entrada, pero la forma ya es la definitiva — sumar un
 * corredor es agregar un archivo y una línea acá.
 */
const GUIAS: DestinationGuide[] = [argentina];

const POR_SLUG = new Map(GUIAS.map((guia) => [guia.slug, guia]));

/** Slug del corredor que el globo trae preseleccionado (spec, sección 8.1). */
export const CORREDOR_INICIAL = argentina.slug;

export function allGuides(): DestinationGuide[] {
  return [...GUIAS];
}

/** `undefined` cuando el slug no existe: la ruta responde 404, no adivina. */
export function getGuide(slug: string): DestinationGuide | undefined {
  return POR_SLUG.get(slug);
}

export { argentina };
