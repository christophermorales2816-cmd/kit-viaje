import { describe, expect, it } from "vitest";

import { argentina } from "@/content/guias/argentina";
import { GUIDE_FACTS_MAX_AGE_DAYS } from "@/content/guias/types";
import { parseIsoDate, toUtcMillis } from "@/lib/packing/dates";

/**
 * Criterio de aceptación 10 (spec, sección 8.7).
 *
 * El contenido de la guía vive en el repo y no en la base (8.2). Estas
 * aserciones son la contraparte de esa decisión: lo que en Postgres serían
 * check constraints acá son tests, y lo que ninguna base haría —fallar cuando
 * el texto envejece— también.
 */

const MS_PER_DAY = 86_400_000;

describe("guía de Argentina", () => {
  it("tiene exactamente cuatro números en el hero", () => {
    expect(argentina.highlights).toHaveLength(4);
  });

  it("no deja vacío ningún texto visible del hero", () => {
    for (const highlight of argentina.highlights) {
      expect(highlight.value.trim()).not.toBe("");
      expect(highlight.label.trim()).not.toBe("");
      expect(highlight.note.trim()).not.toBe("");
    }
  });

  it("puntúa cada dimensión entre 0 y 10, con un decimal como máximo", () => {
    expect(argentina.scores.length).toBeGreaterThan(0);

    for (const score of argentina.scores) {
      expect(score.score).toBeGreaterThanOrEqual(0);
      expect(score.score).toBeLessThanOrEqual(10);
      // Un decimal: 9,5 sí; 9,55 no. Las barras no distinguen esa diferencia.
      expect(Math.round(score.score * 10)).toBe(score.score * 10);
      expect(score.rationale.trim()).not.toBe("");
    }
  });

  it("no repite dimensiones ni ids de entradas del tablero", () => {
    const dimensions = argentina.scores.map((score) => score.dimension);
    expect(new Set(dimensions).size).toBe(dimensions.length);

    const ids = argentina.facts.map((fact) => fact.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("no deja ninguna entrada del tablero sin cuerpo", () => {
    expect(argentina.facts.length).toBeGreaterThan(0);

    for (const fact of argentina.facts) {
      expect(fact.title.trim()).not.toBe("");
      expect(fact.body.length).toBeGreaterThan(0);

      for (const paragraph of fact.body) {
        expect(paragraph.trim()).not.toBe("");
      }
    }
  });

  it("dice dónde brilla y dónde cuesta", () => {
    expect(argentina.shines.length).toBeGreaterThan(0);
    expect(argentina.costs.length).toBeGreaterThan(0);
    expect(argentina.dataScopeNote.trim()).not.toBe("");
  });

  it("acredita la foto del hero si hay foto", () => {
    // hero es null a propósito mientras no haya imagen con licencia (8.6).
    // El día que la haya, la atribución no es opcional.
    if (argentina.hero === null) return;

    expect(argentina.hero.src.trim()).not.toBe("");
    expect(argentina.hero.alt.trim()).not.toBe("");
    expect(argentina.hero.credit.trim()).not.toBe("");
    expect(argentina.hero.creditUrl).toMatch(/^https:\/\//);
  });

  /**
   * Este test falla con el paso del tiempo, y eso es la feature: es el único
   * mecanismo que obliga a releer el tablero informativo. Si algún día molesta,
   * la respuesta es revisar el contenido y mover la fecha — no subir el umbral.
   */
  it("tiene el tablero informativo revisado hace menos de la ventana", () => {
    const revisadoMs = toUtcMillis(parseIsoDate(argentina.factsUpdatedAt));
    const ageDays = (Date.now() - revisadoMs) / MS_PER_DAY;

    expect(ageDays).toBeGreaterThan(-1);
    expect(ageDays).toBeLessThan(GUIDE_FACTS_MAX_AGE_DAYS);
  });
});
