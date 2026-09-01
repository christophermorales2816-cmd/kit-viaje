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

export interface DestinationGuide {
  slug: string;
  country: string;
  subhead: string;
  /**
   * null hasta que haya una foto con licencia libre y atribución (spec, 8.6).
   * El hero renderiza un fondo neutro mientras tanto: preferimos un hero sin
   * foto a un placeholder de stock que nadie recuerde reemplazar.
   */
  hero: GuideImage | null;
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
}

/** Ventana de revisión del tablero informativo (spec, 8.7, criterio 10). */
export const GUIDE_FACTS_MAX_AGE_DAYS = 180;
