/**
 * Los países con catálogo y su extracto de OpenStreetMap, uno por línea:
 * "japon asia/japan". Lo usa procesar.sh.
 */
import { allCatalogos } from "@/content/comidas";

for (const catalogo of allCatalogos()) {
  console.log(`${catalogo.slug} ${catalogo.extracto}`);
}
