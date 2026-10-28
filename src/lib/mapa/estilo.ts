/**
 * Lo que comparten los mapas de MapLibre del sitio: el radar de vuelos
 * (spec, 17.5) y el de los lugares de cada plato (18.4).
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
export function textosDelMapa(titulo: string): Record<string, string> {
  return {
    "Map.Title": titulo,
    "NavigationControl.ZoomIn": "Acercar",
    "NavigationControl.ZoomOut": "Alejar",
    "AttributionControl.ToggleAttribution": "Ver las fuentes del mapa",
    "CooperativeGesturesHandler.WindowsHelpText":
      "Usá Ctrl y la rueda del mouse para acercar o alejar el mapa",
    "CooperativeGesturesHandler.MacHelpText":
      "Usá ⌘ y la rueda del mouse para acercar o alejar el mapa",
    "CooperativeGesturesHandler.MobileHelpText":
      "Usá dos dedos para mover el mapa",
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
