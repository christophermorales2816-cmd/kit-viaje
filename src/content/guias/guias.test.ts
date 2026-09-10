import { describe, expect, it } from "vitest";

import { allGuides } from "@/content/guias";
import { GUIDE_FACTS_MAX_AGE_DAYS } from "@/content/guias/types";
import { parseIsoDate, toUtcMillis } from "@/lib/packing/dates";

/**
 * Criterio de aceptación 12 (spec, sección 8.9), para TODAS las guías.
 *
 * El contenido vive en el repo y no en la base (8.2). Estas aserciones son la
 * contraparte de esa decisión: lo que en Postgres serían check constraints acá
 * son tests, y lo que ninguna base haría —fallar cuando el texto envejece—
 * también.
 *
 * Corre sobre `allGuides()` y no sobre una guía puntual. Eso es deliberado:
 * cuando se sumó Brasil no hubo que copiar este archivo, y el tercer país va a
 * heredar las mismas garantías sin que nadie se acuerde de pedirlas.
 */

const MS_PER_DAY = 86_400_000;

/**
 * Caja geográfica de cada país, con margen. Vive acá y no en el contenido
 * porque es una herramienta del test, no un dato del producto.
 *
 * Brasil cruza el ecuador: su límite norte es positivo. Una caja "hemisferio
 * sur" heredada de Argentina habría marcado media docena de destinos válidos
 * como errores.
 */
const CAJAS: Record<string, { lat: [number, number]; lon: [number, number] }> =
  {
    argentina: { lat: [-56, -21], lon: [-74, -53] },
    // El límite este llega a -28 y no a -34 por Fernando de Noronha, que está
    // mar adentro, bastante más al este que el continente. La primera versión de
    // esta caja lo dejaba afuera y el test lo cazó.
    brasil: { lat: [-34, 6], lon: [-74, -28] },
  };

describe.each(allGuides().map((guia) => [guia.country, guia] as const))(
  "guía de %s",
  (_nombre, argentina) => {
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
      expect(argentina.places.filter((place) => place.featured)).toHaveLength(
        1,
      );
    });

    it("pone cada destino en coordenadas que existen y caen en el país", () => {
      expect(argentina.places.length).toBeGreaterThan(0);

      const caja = CAJAS[argentina.slug];
      expect(
        caja,
        `falta la caja geográfica de "${argentina.slug}"`,
      ).toBeDefined();

      for (const place of argentina.places) {
        const [lat, lon] = place.coords;

        // Rango del planeta, primero: un signo cambiado se ve acá.
        expect(lat).toBeGreaterThanOrEqual(-90);
        expect(lat).toBeLessThanOrEqual(90);
        expect(lon).toBeGreaterThanOrEqual(-180);
        expect(lon).toBeLessThanOrEqual(180);

        // Y después la caja del país, con margen. Sin esto, tipear -34 como 34
        // pasa el rango del planeta y planta el pin en China.
        expect(lat).toBeGreaterThan(caja.lat[0]);
        expect(lat).toBeLessThan(caja.lat[1]);
        expect(lon).toBeGreaterThan(caja.lon[0]);
        expect(lon).toBeLessThan(caja.lon[1]);
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
     * Contenido de la página de preparación (spec, sección 9.6).
     *
     * Las tres columnas de la tabla y las dos partes de un consejo son
     * obligatorias por la misma razón: decirle a alguien que deje algo sin
     * decirle con qué reemplazarlo, o titular un consejo sin explicarlo, es un
     * consejo a medias. El tipo no puede exigir que un string no esté vacío;
     * esto sí.
     */
    describe("página de preparación", () => {
      const prep = argentina.preparation;

      it("da consejos en las dos columnas, con título y cuerpo", () => {
        expect(prep.tips.dos.length).toBeGreaterThan(0);
        expect(prep.tips.donts.length).toBeGreaterThan(0);

        for (const tip of [...prep.tips.dos, ...prep.tips.donts]) {
          expect(tip.title.trim()).not.toBe("");
          expect(tip.body.trim()).not.toBe("");
        }
      });

      it("no repite el título de un consejo, que es la key de la lista", () => {
        const titulos = [...prep.tips.dos, ...prep.tips.donts].map(
          (t) => t.title,
        );
        expect(new Set(titulos).size).toBe(titulos.length);
      });

      it("da un consejo por cada bucket de clima del seed", () => {
        // Sin esto, un mes cuyo bucket principal no tenga entrada acá sale con la
        // tarjeta muda y nadie se entera hasta verla.
        for (const bucket of ["frio", "fresco", "templado", "calido"]) {
          expect(prep.adviceByBucket[bucket]?.trim()).not.toBe("");
        }
      });

      it("no deja ninguna sección de checklist vacía ni con id repetido", () => {
        expect(prep.checklists.length).toBeGreaterThan(0);

        const ids = prep.checklists.map((s) => s.id);
        expect(new Set(ids).size).toBe(ids.length);

        for (const seccion of prep.checklists) {
          expect(seccion.title.trim()).not.toBe("");
          expect(seccion.summary.trim()).not.toBe("");
          expect(seccion.items.length).toBeGreaterThan(0);

          for (const item of seccion.items) {
            expect(item.trim()).not.toBe("");
          }
        }
      });

      it("no deja un aviso a medias cuando hay aviso", () => {
        for (const seccion of prep.checklists) {
          if (seccion.notice === null) continue;

          expect(seccion.notice.title.trim()).not.toBe("");
          expect(seccion.notice.body.trim()).not.toBe("");
        }
      });

      it("reserva el tono de advertencia para unas pocas secciones", () => {
        // Si todo grita, nada grita. No es una regla de estilo: es la única
        // manera de que el rojo signifique algo.
        const warns = prep.checklists.filter((s) => s.notice?.tone === "warn");
        expect(warns.length).toBeLessThanOrEqual(
          Math.ceil(prep.checklists.length / 2),
        );
      });

      it("nunca dice qué dejar sin decir con qué reemplazarlo", () => {
        expect(prep.avoid.length).toBeGreaterThan(0);

        for (const fila of prep.avoid) {
          expect(fila.leave.trim()).not.toBe("");
          expect(fila.why.trim()).not.toBe("");
          expect(fila.instead.trim()).not.toBe("");
        }
      });

      it("no repite filas de la tabla, que se indexan por lo que se deja", () => {
        const claves = prep.avoid.map((fila) => fila.leave);
        expect(new Set(claves).size).toBe(claves.length);
      });

      it("responde cada pregunta frecuente y no repite ninguna", () => {
        expect(prep.faq.length).toBeGreaterThan(0);

        for (const entrada of prep.faq) {
          expect(entrada.question.trim()).not.toBe("");
          expect(entrada.answer.trim()).not.toBe("");
          // Una pregunta que no termina en signo de cierre casi siempre es una
          // frase que se coló en el campo equivocado.
          expect(entrada.question.endsWith("?")).toBe(true);
        }

        const preguntas = prep.faq.map((e) => e.question);
        expect(new Set(preguntas).size).toBe(preguntas.length);
      });

      it("no deja vacíos los datos del enchufe, que salen en el resumen", () => {
        expect(prep.plug.types.trim()).not.toBe("");
        expect(prep.plug.voltage.trim()).not.toBe("");
        expect(prep.plug.note.trim()).not.toBe("");
      });

      it("abre con una respuesta corta y con puntos clave", () => {
        expect(prep.quickAnswer.trim()).not.toBe("");
        expect(prep.keyPoints.length).toBeGreaterThan(0);

        for (const punto of prep.keyPoints) {
          expect(punto.trim()).not.toBe("");
        }
      });
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
  },
);
