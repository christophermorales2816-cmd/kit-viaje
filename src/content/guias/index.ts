import { alemania } from "./alemania";
import { argentina } from "./argentina";
import { austria } from "./austria";
import { belgica } from "./belgica";
import { bolivia } from "./bolivia";
import { brasil } from "./brasil";
import { chequia } from "./chequia";
import { chile } from "./chile";
import { colombia } from "./colombia";
import { costaRica } from "./costa-rica";
import { croacia } from "./croacia";
import { cuba } from "./cuba";
import { ecuador } from "./ecuador";
import { elSalvador } from "./el-salvador";
import { espana } from "./espana";
import { francia } from "./francia";
import { grecia } from "./grecia";
import { guatemala } from "./guatemala";
import { honduras } from "./honduras";
import { hungria } from "./hungria";
import { irlanda } from "./irlanda";
import { italia } from "./italia";
import { mexico } from "./mexico";
import { nicaragua } from "./nicaragua";
import { noruega } from "./noruega";
import { paisesBajos } from "./paises-bajos";
import { panama } from "./panama";
import { paraguay } from "./paraguay";
import { peru } from "./peru";
import { polonia } from "./polonia";
import { portugal } from "./portugal";
import { reinoUnido } from "./reino-unido";
import { republicaDominicana } from "./republica-dominicana";
import { suecia } from "./suecia";
import { suiza } from "./suiza";
import type { DestinationGuide } from "./types";
import { uruguay } from "./uruguay";
import { venezuela } from "./venezuela";

export type {
  DestinationGuide,
  GuideAvoidRow,
  GuideChecklistSection,
  GuideFact,
  GuideFaq,
  GuideHighlight,
  GuideImage,
  GuideNotice,
  GuidePlace,
  GuidePreparation,
  GuideScore,
  GuideSubregion,
  GuideTip,
} from "./types";
export { GUIDE_FACTS_MAX_AGE_DAYS } from "./types";

/**
 * Índice de guías por slug (spec, secciones 8.2 y 10).
 *
 * Con las rutas por destino (`/guia/{slug}`) el contenido deja de ser un
 * singleton importado a mano: la página necesita resolver el slug de la URL.
 * La forma se diseñó para esto y se cumplió: sumar Brasil fue agregar un
 * archivo y una línea acá.
 */
const GUIAS: DestinationGuide[] = [
  argentina,
  brasil,
  bolivia,
  chile,
  uruguay,
  paraguay,
  peru,
  ecuador,
  colombia,
  venezuela,
  mexico,
  guatemala,
  honduras,
  elSalvador,
  nicaragua,
  costaRica,
  panama,
  cuba,
  republicaDominicana,
  espana,
  portugal,
  italia,
  francia,
  alemania,
  reinoUnido,
  paisesBajos,
  grecia,
  suiza,
  austria,
  irlanda,
  belgica,
  croacia,
  chequia,
  polonia,
  hungria,
  noruega,
  suecia,
];

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

export {
  alemania,
  argentina,
  austria,
  belgica,
  bolivia,
  brasil,
  chequia,
  chile,
  colombia,
  costaRica,
  croacia,
  cuba,
  ecuador,
  elSalvador,
  espana,
  francia,
  grecia,
  guatemala,
  honduras,
  hungria,
  irlanda,
  italia,
  mexico,
  nicaragua,
  noruega,
  paisesBajos,
  panama,
  paraguay,
  peru,
  polonia,
  portugal,
  reinoUnido,
  republicaDominicana,
  suecia,
  suiza,
  uruguay,
  venezuela,
};
