import { albania } from "./albania";
import { alemania } from "./alemania";
import { andorra } from "./andorra";
import { angola } from "./angola";
import { arabiaSaudita } from "./arabia-saudita";
import { argelia } from "./argelia";
import { argentina } from "./argentina";
import { armenia } from "./armenia";
import { austria } from "./austria";
import { azerbaiyan } from "./azerbaiyan";
import { banglades } from "./banglades";
import { barein } from "./barein";
import { belgica } from "./belgica";
import { bolivia } from "./bolivia";
import { bosniaYHerzegovina } from "./bosnia-y-herzegovina";
import { botsuana } from "./botsuana";
import { brasil } from "./brasil";
import { brunei } from "./brunei";
import { bulgaria } from "./bulgaria";
import { burundi } from "./burundi";
import { butan } from "./butan";
import { caboVerde } from "./cabo-verde";
import { camboya } from "./camboya";
import { camerun } from "./camerun";
import { catar } from "./catar";
import { chad } from "./chad";
import { chequia } from "./chequia";
import { chile } from "./chile";
import { china } from "./china";
import { chipre } from "./chipre";
import { colombia } from "./colombia";
import { coreaDelSur } from "./corea-del-sur";
import { costaDeMarfil } from "./costa-de-marfil";
import { costaRica } from "./costa-rica";
import { croacia } from "./croacia";
import { cuba } from "./cuba";
import { dinamarca } from "./dinamarca";
import { ecuador } from "./ecuador";
import { egipto } from "./egipto";
import { elSalvador } from "./el-salvador";
import { emiratosArabesUnidos } from "./emiratos-arabes-unidos";
import { eslovaquia } from "./eslovaquia";
import { eslovenia } from "./eslovenia";
import { espana } from "./espana";
import { estonia } from "./estonia";
import { esuatini } from "./esuatini";
import { etiopia } from "./etiopia";
import { filipinas } from "./filipinas";
import { finlandia } from "./finlandia";
import { francia } from "./francia";
import { gabon } from "./gabon";
import { gambia } from "./gambia";
import { georgia } from "./georgia";
import { ghana } from "./ghana";
import { grecia } from "./grecia";
import { guatemala } from "./guatemala";
import { guineaBisau } from "./guinea-bisau";
import { guineaEcuatorial } from "./guinea-ecuatorial";
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
import { kenia } from "./kenia";
import { kirguistan } from "./kirguistan";
import { kuwait } from "./kuwait";
import { laos } from "./laos";
import { lesoto } from "./lesoto";
import { letonia } from "./letonia";
import { libano } from "./libano";
import { lituania } from "./lituania";
import { luxemburgo } from "./luxemburgo";
import { macao } from "./macao";
import { macedoniaDelNorte } from "./macedonia-del-norte";
import { madagascar } from "./madagascar";
import { malasia } from "./malasia";
import { malaui } from "./malaui";
import { maldivas } from "./maldivas";
import { malta } from "./malta";
import { marruecos } from "./marruecos";
import { mauricio } from "./mauricio";
import { mauritania } from "./mauritania";
import { mexico } from "./mexico";
import { moldavia } from "./moldavia";
import { mongolia } from "./mongolia";
import { montenegro } from "./montenegro";
import { mozambique } from "./mozambique";
import { myanmar } from "./myanmar";
import { namibia } from "./namibia";
import { nepal } from "./nepal";
import { nicaragua } from "./nicaragua";
import { nigeria } from "./nigeria";
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
import { republicaDelCongo } from "./republica-del-congo";
import { republicaDemocraticaDelCongo } from "./republica-democratica-del-congo";
import { republicaDominicana } from "./republica-dominicana";
import { ruanda } from "./ruanda";
import { rumania } from "./rumania";
import { santoTomeYPrincipe } from "./santo-tome-y-principe";
import { senegal } from "./senegal";
import { serbia } from "./serbia";
import { seychelles } from "./seychelles";
import { singapur } from "./singapur";
import { sriLanka } from "./sri-lanka";
import { sudafrica } from "./sudafrica";
import { suecia } from "./suecia";
import { suiza } from "./suiza";
import { tailandia } from "./tailandia";
import { taiwan } from "./taiwan";
import { tanzania } from "./tanzania";
import { tayikistan } from "./tayikistan";
import { timorOriental } from "./timor-oriental";
import { tunez } from "./tunez";
import { turkmenistan } from "./turkmenistan";
import { turquia } from "./turquia";
import type { DestinationGuide } from "./types";
import { uganda } from "./uganda";
import { uruguay } from "./uruguay";
import { uzbekistan } from "./uzbekistan";
import { venezuela } from "./venezuela";
import { vietnam } from "./vietnam";
import { zambia } from "./zambia";
import { zimbabue } from "./zimbabue";

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
  marruecos,
  egipto,
  tunez,
  sudafrica,
  kenia,
  tanzania,
  namibia,
  botsuana,
  zimbabue,
  zambia,
  mauricio,
  seychelles,
  caboVerde,
  senegal,
  madagascar,
  malaui,
  ghana,
  costaDeMarfil,
  gambia,
  lesoto,
  esuatini,
  santoTomeYPrincipe,
  nigeria,
  etiopia,
  uganda,
  ruanda,
  mozambique,
  camerun,
  republicaDemocraticaDelCongo,
  chad,
  mauritania,
  burundi,
  guineaBisau,
  argelia,
  angola,
  gabon,
  guineaEcuatorial,
  republicaDelCongo,
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
  angola,
  arabiaSaudita,
  argelia,
  argentina,
  armenia,
  austria,
  azerbaiyan,
  banglades,
  barein,
  belgica,
  bolivia,
  bosniaYHerzegovina,
  botsuana,
  brasil,
  brunei,
  bulgaria,
  burundi,
  butan,
  caboVerde,
  camboya,
  camerun,
  catar,
  chad,
  chequia,
  chile,
  china,
  chipre,
  colombia,
  coreaDelSur,
  costaDeMarfil,
  costaRica,
  croacia,
  cuba,
  dinamarca,
  ecuador,
  egipto,
  elSalvador,
  emiratosArabesUnidos,
  eslovaquia,
  eslovenia,
  espana,
  estonia,
  esuatini,
  etiopia,
  filipinas,
  finlandia,
  francia,
  gabon,
  gambia,
  georgia,
  ghana,
  grecia,
  guatemala,
  guineaBisau,
  guineaEcuatorial,
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
  kenia,
  kirguistan,
  kuwait,
  laos,
  lesoto,
  letonia,
  libano,
  lituania,
  luxemburgo,
  macao,
  macedoniaDelNorte,
  madagascar,
  malasia,
  malaui,
  maldivas,
  malta,
  marruecos,
  mauricio,
  mauritania,
  mexico,
  moldavia,
  mongolia,
  montenegro,
  mozambique,
  myanmar,
  namibia,
  nepal,
  nicaragua,
  nigeria,
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
  republicaDelCongo,
  republicaDemocraticaDelCongo,
  republicaDominicana,
  ruanda,
  rumania,
  santoTomeYPrincipe,
  senegal,
  serbia,
  seychelles,
  singapur,
  sriLanka,
  sudafrica,
  suecia,
  suiza,
  tailandia,
  taiwan,
  tanzania,
  tayikistan,
  timorOriental,
  tunez,
  turkmenistan,
  turquia,
  uganda,
  uruguay,
  uzbekistan,
  venezuela,
  vietnam,
  zambia,
  zimbabue,
};
