import type { LayerSpecification, Map as MapaDeMapLibre } from "maplibre-gl";

import {
  CAPA_DE_NOMBRES_DE_ESTADOS,
  type CapaDelEstilo,
  ESTADOS_DESDE_EL_ZOOM,
  capaDeLimitesDeEstados,
  etiquetaEnCastellano,
} from "@/lib/mapa/estilo";

/**
 * MapLibre, cargado en el navegador y con su worker en su lugar.
 *
 * SE IMPORTA ADENTRO DE UN EFECTO
 *
 * Lee `window` al evaluarse, y un componente de cliente también se renderiza
 * en el servidor. Y su worker, que dibuja los mosaicos, no lo encuentra solo
 * cuando Next empaqueta la librería: busca un archivo al lado de sí misma, y
 * ese archivo no está. Se lo da `setWorkerUrl` con la dirección que arma el
 * bundler con `new URL`.
 */
export async function cargarMapLibre() {
  const maplibregl = await import("maplibre-gl");

  maplibregl.setWorkerUrl(
    new URL("maplibre-gl/dist/maplibre-gl-worker.mjs", import.meta.url).href,
  );

  return maplibregl;
}

/** Pasa a castellano las etiquetas del estilo (src/lib/mapa/estilo.ts). */
export function ponerEtiquetasEnCastellano(mapa: MapaDeMapLibre): void {
  for (const capa of mapa.getStyle().layers) {
    if (capa.type !== "symbol") continue;

    const campo = mapa.getLayoutProperty(capa.id, "text-field");
    const enCastellano = etiquetaEnCastellano(campo);

    if (enCastellano !== campo) {
      mapa.setLayoutProperty(capa.id, "text-field", enCastellano);
    }
  }
}

/**
 * Los estados y las provincias, visibles desde que se ve el país entero
 * (src/lib/mapa/estilo.ts). Los nombres usan la capa del estilo con otro
 * rango; los límites, una capa propia debajo de la del estilo.
 */
export function mostrarEstados(mapa: MapaDeMapLibre): void {
  const capas = mapa.getStyle().layers as unknown as CapaDelEstilo[];
  const nombres = capas.find((capa) => capa.id === CAPA_DE_NOMBRES_DE_ESTADOS);

  if (nombres) {
    mapa.setLayerZoomRange(
      nombres.id,
      ESTADOS_DESDE_EL_ZOOM,
      nombres.maxzoom ?? 24,
    );
  }

  const limites = capaDeLimitesDeEstados(capas);

  if (limites && !mapa.getLayer(limites.id)) {
    mapa.addLayer(limites as unknown as LayerSpecification, "boundary_3");
  }
}
