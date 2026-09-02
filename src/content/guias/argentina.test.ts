import { describe, expect, it } from "vitest";

import { argentina } from "@/content/guias/argentina";
import { GUIDE_FACTS_MAX_AGE_DAYS } from "@/content/guias/types";
import { parseIsoDate, toUtcMillis } from "@/lib/packing/dates";

/**
 * Criterio de aceptación 12 (spec, sección 8.9).
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

  it("acredita la foto del bloque informativo si hay foto", () => {
    // image es null a propósito mientras no haya imagen con licencia (8.6).
    // El día que la haya, la atribución no es opcional.
    if (argentina.image === null) return;

    expect(argentina.image.src.trim()).not.toBe("");
    expect(argentina.image.alt.trim()).not.toBe("");
    expect(argentina.image.credit.trim()).not.toBe("");
    expect(argentina.image.creditUrl).toMatch(/^https:\/\//);
  });

  it("no repite destinos ni marca más de uno como destacado", () => {
    const ids = argentina.places.map((place) => place.id);
    expect(new Set(ids).size).toBe(ids.length);

    // Dos tarjetas grandes rompen el mosaico: la grilla reserva 2x2 para una.
    expect(argentina.places.filter((place) => place.featured)).toHaveLength(1);
  });

  it("pone cada destino en coordenadas que existen y caen en Argentina", () => {
    expect(argentina.places.length).toBeGreaterThan(0);

    for (const place of argentina.places) {
      const [lat, lon] = place.coords;

      // Rango del planeta, primero: un signo cambiado se ve acá.
      expect(lat).toBeGreaterThanOrEqual(-90);
      expect(lat).toBeLessThanOrEqual(90);
      expect(lon).toBeGreaterThanOrEqual(-180);
      expect(lon).toBeLessThanOrEqual(180);

      // Y después la caja del país, con margen. Sin esto, tipear -34 como 34
      // pasa el rango del planeta y planta el pin en China.
      expect(lat).toBeGreaterThan(-56);
      expect(lat).toBeLessThan(-21);
      expect(lon).toBeGreaterThan(-74);
      expect(lon).toBeLessThan(-53);
    }
  });

  it("no deja ningún texto de destino vacío", () => {
    for (const place of argentina.places) {
      expect(place.name.trim()).not.toBe("");
      expect(place.region.trim()).not.toBe("");
      expect(place.tag.trim()).not.toBe("");
      expect(place.blurb.trim()).not.toBe("");
    }
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
