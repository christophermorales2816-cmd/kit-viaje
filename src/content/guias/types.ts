/**
 * Contenido editorial de las guías de destino (spec, sección 8.2).
 *
 * Vive en el repo y no en Postgres a propósito. La razón de más peso es la
 * fecha de `factsUpdatedAt`: es lo único que hace defendible el tablero
 * informativo, y en la base nadie impide editar el texto sin moverla. Acá,
 * cambiar el texto sin tocar la fecha es un diff visible en un PR y lo caza
 * un test (`argentina.test.ts`).
 */

/** Un número del hero. `value` es texto, no número: "UTC−3", "90 días". */
export interface GuideHighlight {
  value: string;
  label: string;
  note: string;
}

/** Una entrada del tablero "todo lo que hay que saber antes de reservar". */
export interface GuideFact {
  id: string;
  title: string;
  /** Párrafos. Texto plano, sin markdown ni HTML: no hay renderer y no hace falta. */
  body: string[];
}

/** Una dimensión puntuada. 0-10, un decimal como máximo. */
export interface GuideScore {
  dimension: string;
  score: number;
  rationale: string;
}

export interface GuideImage {
  src: string;
  alt: string;
  /** Atribución al autor. Obligatoria aunque la licencia no la exija. */
  credit: string;
  creditUrl: string;
}

/**
 * Un destino dentro del país (spec, sección 8.8).
 *
 * Alimenta dos bloques a la vez: el mosaico "Adónde ir" y el mapa. Que salgan
 * de la misma lista no es una economía de código, es lo que evita que el mapa
 * marque un lugar que el mosaico no menciona.
 */
export interface GuidePlace {
  id: string;
  name: string;
  /** Agrupa el filtro del mosaico. Ej: "Patagonia". */
  region: string;
  /** Etiqueta corta de la tarjeta. Ej: "Glaciares". */
  tag: string;
  blurb: string;
  /** [latitud, longitud] en grados decimales. */
  coords: [number, number];
  /** Tarjeta grande en el mosaico. Como mucho una por guía. */
  featured?: boolean;
  /** null hasta que haya foto con licencia y atribución (spec, 8.6). */
  image: GuideImage | null;
}

/**
 * Contenido de la página "Condiciones actuales" (spec, sección 9).
 *
 * Es lo editorial de esa página; los números salen de climate_profiles. La
 * separación importa: el clima cambia con la base, el consejo cambia con un PR.
 */
export interface GuidePreparation {
  /** La respuesta corta, arriba de todo, antes de cualquier gráfico. */
  quickAnswer: string;
  /** Tres o cuatro cosas que cambian cómo se arma la valija. */
  keyPoints: string[];
  /**
   * Consejo por bucket de clima, indexado por el id de climate_thresholds.
   * Es Record<string, string> y no una unión cerrada por lo mismo que
   * ClimateBucketId es string: los buckets se agregan desde Studio.
   */
  adviceByBucket: Record<string, string>;
  plug: { types: string; voltage: string; note: string };
}

export interface DestinationGuide {
  slug: string;
  country: string;
  subhead: string;
  /**
   * Foto del país, cabecera del bloque informativo — no del hero, que es el
   * globo (spec, 8.1 y 8.6). null hasta que haya una imagen con licencia libre
   * y atribución: el bloque abre con su título y nada más, que es preferible a
   * un placeholder de stock que nadie recuerde reemplazar.
   */
  image: GuideImage | null;
  /** Exactamente 4 (spec, 8.3). Lo verifica el test, no el tipo. */
  highlights: GuideHighlight[];
  facts: GuideFact[];
  /** ISO date (YYYY-MM-DD) de la última revisión de `facts`. */
  factsUpdatedAt: string;
  scores: GuideScore[];
  shines: string[];
  costs: string[];
  /** Alcance real de los cálculos del planner, dicho en la página. */
  dataScopeNote: string;
  /** Destinos del país: alimentan el mosaico y el mapa (8.8). */
  places: GuidePlace[];
  /** Contenido de la página "Condiciones actuales" (9). */
  preparation: GuidePreparation;
}

/** Ventana de revisión del tablero informativo (spec, 8.9, criterio 12). */
export const GUIDE_FACTS_MAX_AGE_DAYS = 180;
