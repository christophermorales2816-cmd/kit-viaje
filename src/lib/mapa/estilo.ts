import type { TextosDelMapa } from "@/i18n/mapa";

/**
 * Lo que comparten los mapas de MapLibre del sitio: el radar de vuelos
 * (spec, 17.5), el de los lugares de cada plato (18.4) y el de cada guía
 * (24).
 *
 * Sin MapLibre adentro, para que se pueda probar y usar en cualquier lado:
 * la librería se carga en el navegador (src/components/mapa/maplibre.ts).
 */

/** OpenFreeMap: mosaicos de OpenStreetMap, gratis y con uso comercial. */
export const ESTILO_DEL_MAPA = "https://tiles.openfreemap.org/styles/positron";

/**
 * Los textos de los controles de MapLibre, en castellano.
 *
 * `titulo` es lo que el lector de pantalla anuncia al llegar al mapa: tiene
 * que decir qué muestra y dónde está lo mismo en texto.
 */
export function textosDelMapa(
  titulo: string,
  t: TextosDelMapa,
): Record<string, string> {
  return {
    "Map.Title": titulo,
    "NavigationControl.ZoomIn": t.acercar,
    "NavigationControl.ZoomOut": t.alejar,
    "AttributionControl.ToggleAttribution": t.verLasFuentes,
    "CooperativeGesturesHandler.WindowsHelpText": t.ayudaEnWindows,
    "CooperativeGesturesHandler.MacHelpText": t.ayudaEnMac,
    "CooperativeGesturesHandler.MobileHelpText": t.ayudaEnElTelefono,
  };
}

/**
 * La etiqueta de un lugar del mapa en castellano, si OpenStreetMap la tiene:
 * "Londres" y no "London", "Alemania" y no "Germany". Si no la tiene, queda la
 * del estilo.
 *
 * Solo se tocan las etiquetas que muestran nombres, que en el estilo son
 * expresiones: las patentes de las rutas (`ref`) quedan como están.
 */
export function etiquetaEnCastellano<Campo>(campo: Campo): Campo {
  if (!Array.isArray(campo) || !JSON.stringify(campo).includes('"name')) {
    return campo;
  }

  // Sigue siendo una expresión de texto, como la que entró.
  return ["coalesce", ["get", "name:es"], campo] as unknown as Campo;
}

/**
 * Desde qué zoom se ven los estados y las provincias (spec, 24).
 *
 * El estilo los muestra desde el zoom 5 (los nombres) y el 8 (los límites),
 * pensando en un mapa que se mira de cerca. El de la guía encuadra el país
 * entero, entre el zoom 2 de Rusia o Canadá y el 7 de un país chico, y ahí
 * los estados no salían: el mapa mostraba el contorno del país y nada adentro.
 * Los mosaicos los traen desde el zoom 2, con el nombre en castellano.
 */
export const ESTADOS_DESDE_EL_ZOOM = 2;

/** Lo que se lee de una capa del estilo: el resto pasa tal como viene. */
export interface CapaDelEstilo {
  id: string;
  type: string;
  minzoom?: number;
  maxzoom?: number;
  filter?: unknown;
  [clave: string]: unknown;
}

/** La capa de los nombres de estados y provincias, en el estilo positron. */
export const CAPA_DE_NOMBRES_DE_ESTADOS = "label_state";

/** La capa de límites administrativos del estilo, del nivel 3 al 6. */
const CAPA_DE_LIMITES_ADMINISTRATIVOS = "boundary_3";

/**
 * Los límites de estados y provincias para el zoom bajo, armados sobre los
 * del estilo: el mismo trazo, desde `ESTADOS_DESDE_EL_ZOOM` y solo hasta
 * donde el estilo empieza a dibujarlos él.
 *
 * Una capa aparte y no la del estilo con otro rango, porque la del estilo
 * dibuja también los niveles 5 y 6 —departamentos, condados—, que en un mapa
 * del país entero serían una telaraña. Acá va solo el nivel 4.
 *
 * Devuelve `null` si el estilo no la tiene: si mañana cambia, el mapa sigue
 * funcionando, sin los límites.
 */
export function capaDeLimitesDeEstados(
  capas: readonly CapaDelEstilo[],
): CapaDelEstilo | null {
  const base = capas.find(
    (capa) => capa.id === CAPA_DE_LIMITES_ADMINISTRATIVOS,
  );

  if (!base || base.type !== "line") return null;

  return {
    ...base,
    id: "limites_de_estados",
    minzoom: ESTADOS_DESDE_EL_ZOOM,
    maxzoom: base.minzoom ?? 8,
    filter: ["all", base.filter ?? true, ["==", ["get", "admin_level"], 4]],
  };
}
