import { albania } from "./albania";
import { alemania } from "./alemania";
import { andorra } from "./andorra";
import { arabiaSaudita } from "./arabia-saudita";
import { argentina } from "./argentina";
import { armenia } from "./armenia";
import { austria } from "./austria";
import { azerbaiyan } from "./azerbaiyan";
import { banglades } from "./banglades";
import { barein } from "./barein";
import { belgica } from "./belgica";
import { bolivia } from "./bolivia";
import { bosniaYHerzegovina } from "./bosnia-y-herzegovina";
import { brasil } from "./brasil";
import { brunei } from "./brunei";
import { bulgaria } from "./bulgaria";
import { butan } from "./butan";
import { camboya } from "./camboya";
import { catar } from "./catar";
import { chequia } from "./chequia";
import { chile } from "./chile";
import { china } from "./china";
import { chipre } from "./chipre";
import { colombia } from "./colombia";
import { coreaDelSur } from "./corea-del-sur";
import { costaRica } from "./costa-rica";
import { croacia } from "./croacia";
import { cuba } from "./cuba";
import { dinamarca } from "./dinamarca";
import { ecuador } from "./ecuador";
import { elSalvador } from "./el-salvador";
import { emiratosArabesUnidos } from "./emiratos-arabes-unidos";
import { eslovaquia } from "./eslovaquia";
import { eslovenia } from "./eslovenia";
import { espana } from "./espana";
import { estonia } from "./estonia";
import { filipinas } from "./filipinas";
import { finlandia } from "./finlandia";
import { francia } from "./francia";
import { georgia } from "./georgia";
import { grecia } from "./grecia";
import { guatemala } from "./guatemala";
import { honduras } from "./honduras";
import { hongKong } from "./hong-kong";
import { hungria } from "./hungria";
import { india } from "./india";
import { indonesia } from "./indonesia";
import { irak } from "./irak";
import { iran } from "./iran";
import { irlanda } from "./irlanda";
import { islandia } from "./islandia";
import { israelYPalestina } from "./israel-y-palestina";
import { italia } from "./italia";
import { japon } from "./japon";
import { jordania } from "./jordania";
import { kazajistan } from "./kazajistan";
import { kirguistan } from "./kirguistan";
import { kuwait } from "./kuwait";
import { laos } from "./laos";
import { letonia } from "./letonia";
import { libano } from "./libano";
import { lituania } from "./lituania";
import { luxemburgo } from "./luxemburgo";
import { macao } from "./macao";
import { macedoniaDelNorte } from "./macedonia-del-norte";
import { malasia } from "./malasia";
import { maldivas } from "./maldivas";
import { malta } from "./malta";
import { mexico } from "./mexico";
import { moldavia } from "./moldavia";
import { mongolia } from "./mongolia";
import { montenegro } from "./montenegro";
import { myanmar } from "./myanmar";
import { nepal } from "./nepal";
import { nicaragua } from "./nicaragua";
import { noruega } from "./noruega";
import { oman } from "./oman";
import { paisesBajos } from "./paises-bajos";
import { pakistan } from "./pakistan";
import { panama } from "./panama";
import { paraguay } from "./paraguay";
import { peru } from "./peru";
import { polonia } from "./polonia";
import { portugal } from "./portugal";
import { reinoUnido } from "./reino-unido";
import { republicaDominicana } from "./republica-dominicana";
import { rumania } from "./rumania";
import { serbia } from "./serbia";
import { singapur } from "./singapur";
import { sriLanka } from "./sri-lanka";
import { suecia } from "./suecia";
import { suiza } from "./suiza";
import { tailandia } from "./tailandia";
import { taiwan } from "./taiwan";
import { tayikistan } from "./tayikistan";
import { timorOriental } from "./timor-oriental";
import { turkmenistan } from "./turkmenistan";
import { turquia } from "./turquia";
import type { DestinationGuide } from "./types";
import { uruguay } from "./uruguay";
import { uzbekistan } from "./uzbekistan";
import { venezuela } from "./venezuela";
import { vietnam } from "./vietnam";

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
  dinamarca,
  finlandia,
  islandia,
  eslovenia,
  rumania,
  bulgaria,
  estonia,
  letonia,
  lituania,
  eslovaquia,
  malta,
  luxemburgo,
  montenegro,
  albania,
  serbia,
  bosniaYHerzegovina,
  macedoniaDelNorte,
  andorra,
  moldavia,
  chipre,
  turquia,
  japon,
  coreaDelSur,
  china,
  tailandia,
  vietnam,
  india,
  indonesia,
  malasia,
  singapur,
  filipinas,
  camboya,
  laos,
  emiratosArabesUnidos,
  catar,
  oman,
  jordania,
  nepal,
  sriLanka,
  georgia,
  armenia,
  azerbaiyan,
  uzbekistan,
  kazajistan,
  kirguistan,
  arabiaSaudita,
  kuwait,
  barein,
  tayikistan,
  turkmenistan,
  maldivas,
  butan,
  banglades,
  brunei,
  timorOriental,
  mongolia,
  irak,
  iran,
  israelYPalestina,
  libano,
  myanmar,
  pakistan,
  hongKong,
  macao,
  taiwan,
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
  albania,
  alemania,
  andorra,
  arabiaSaudita,
  argentina,
  armenia,
  austria,
  azerbaiyan,
  banglades,
  barein,
  belgica,
  bolivia,
  bosniaYHerzegovina,
  brasil,
  brunei,
  bulgaria,
  butan,
  camboya,
  catar,
  chequia,
  chile,
  china,
  chipre,
  colombia,
  coreaDelSur,
  costaRica,
  croacia,
  cuba,
  dinamarca,
  ecuador,
  elSalvador,
  emiratosArabesUnidos,
  eslovaquia,
  eslovenia,
  espana,
  estonia,
  filipinas,
  finlandia,
  francia,
  georgia,
  grecia,
  guatemala,
  honduras,
  hongKong,
  hungria,
  india,
  indonesia,
  irak,
  iran,
  irlanda,
  islandia,
  israelYPalestina,
  italia,
  japon,
  jordania,
  kazajistan,
  kirguistan,
  kuwait,
  laos,
  letonia,
  libano,
  lituania,
  luxemburgo,
  macao,
  macedoniaDelNorte,
  malasia,
  maldivas,
  malta,
  mexico,
  moldavia,
  mongolia,
  montenegro,
  myanmar,
  nepal,
  nicaragua,
  noruega,
  oman,
  paisesBajos,
  pakistan,
  panama,
  paraguay,
  peru,
  polonia,
  portugal,
  reinoUnido,
  republicaDominicana,
  rumania,
  serbia,
  singapur,
  sriLanka,
  suecia,
  suiza,
  tailandia,
  taiwan,
  tayikistan,
  timorOriental,
  turkmenistan,
  turquia,
  uruguay,
  uzbekistan,
  venezuela,
  vietnam,
};
