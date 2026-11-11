/**
 * Las expresiones de `osmium tags-filter` que dejan solo los lugares de comida,
 * una por línea. Salen de las mismas etiquetas que busca el mapa
 * (src/lib/comidas/osm.ts), así no hay dos listas que mantener. Lo usa
 * procesar.sh.
 */
import { filtroDeOsmium } from "@/lib/comidas/extracto";

for (const expresion of filtroDeOsmium()) console.log(expresion);
