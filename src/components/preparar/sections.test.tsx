import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { argentina } from "@/content/guias/argentina";

import { AvoidTable } from "./avoid-table";
import { ChecklistSections } from "./checklist-sections";
import { FaqList } from "./faq-list";
import { PackingTips } from "./packing-tips";

/**
 * Humo de las cuatro secciones de la página de preparación.
 *
 * No verifican estilos: verifican que el contenido real llegue al HTML y que
 * la semántica que se eligió a propósito siga ahí. Un <table> que alguien
 * cambie por divs pasa el typecheck y rompe el lector de pantalla en silencio;
 * acá no.
 */

const prep = argentina.preparation;

describe("secciones de preparación", () => {
  it("pone en el HTML los consejos de las dos columnas", () => {
    const html = renderToStaticMarkup(
      <PackingTips
        dos={prep.tips.dos}
        donts={prep.tips.donts}
        country="Argentina"
      />,
    );

    expect(html).toContain(prep.tips.dos[0].title);
    expect(html).toContain(prep.tips.donts[0].title);
    // Verde y rojo no pueden ser el único canal.
    expect(html).toContain(">Sí");
    expect(html).toContain(">No");
  });

  it("pliega cada checklist en un <details> y lista todos sus ítems", () => {
    const html = renderToStaticMarkup(
      <ChecklistSections sections={prep.checklists} />,
    );

    expect(html.match(/<details/g) ?? []).toHaveLength(prep.checklists.length);

    for (const seccion of prep.checklists) {
      expect(html).toContain(seccion.title);
      for (const item of seccion.items) {
        expect(html).toContain(item);
      }
    }
  });

  it("no dibuja un aviso donde el contenido no lo tiene", () => {
    const conAviso = prep.checklists.filter((s) => s.notice !== null);
    const html = renderToStaticMarkup(
      <ChecklistSections sections={prep.checklists} />,
    );

    expect(html.match(/border-l-4/g) ?? []).toHaveLength(conAviso.length);
  });

  it("arma la tabla con encabezados de fila y de columna", () => {
    const html = renderToStaticMarkup(
      <AvoidTable rows={prep.avoid} country="Argentina" />,
    );

    expect(html).toContain("<table");
    expect(html).toContain('scope="col"');
    // Cada fila tiene su propio th: es lo que ata el porqué a lo que se deja.
    expect(html.match(/scope="row"/g) ?? []).toHaveLength(prep.avoid.length);

    for (const fila of prep.avoid) {
      expect(html).toContain(fila.instead);
    }
  });

  it("numera las preguntas con un contador y no a mano", () => {
    const html = renderToStaticMarkup(
      <FaqList faq={prep.faq} country="Argentina" />,
    );

    expect(html).toContain("<ol");
    expect(html).toContain("counter(faq)");
    // Ningún "1." escrito en el texto: agregar una pregunta en el medio no
    // debería obligar a renumerar nada.
    expect(html).not.toContain(`1. ${prep.faq[0].question}`);

    for (const entrada of prep.faq) {
      expect(html).toContain(entrada.answer);
    }
  });
});
