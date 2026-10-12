import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { argentina } from "@/content/guias/argentina";

import type { PackingCatalogItem } from "@/lib/packing";
import type { MonthClimate } from "@/lib/prepare/climate-year";

import { AvoidTable } from "./avoid-table";
import { ChecklistSections } from "./checklist-sections";
import { FaqList } from "./faq-list";
import { MonthCards } from "./month-cards";
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

describe("tarjetas por mes", () => {
  function mes(
    month: number,
    primaryBucket: string | null,
    rainBuckets: string[] = [],
  ): MonthClimate {
    return {
      month,
      shortName: "Ene",
      longName: "Enero",
      tempMin: 20,
      tempMax: 30,
      precipProbability: 30,
      season: "media",
      buckets: primaryBucket ? [primaryBucket] : [],
      primaryBucket,
      rainBuckets,
    };
  }

  const AVISO = "se empaca parecido los doce meses";

  it("avisa cuando los doce meses piden lo mismo", () => {
    // Es el caso de Iquitos: calor y lluvia todo el año, así que las doce
    // tarjetas salen iguales. Decirlo es mejor que dejar que el título prometa
    // una variación que no existe.
    const html = renderToStaticMarkup(
      <MonthCards
        months={Array.from({ length: 12 }, (_, i) => mes(i + 1, "calido"))}
        catalog={[]}
        adviceByBucket={{ calido: "Ropa liviana." }}
      />,
    );

    expect(html).toContain(AVISO);
  });

  it("no avisa cuando los meses sí difieren", () => {
    const html = renderToStaticMarkup(
      <MonthCards
        months={Array.from({ length: 12 }, (_, i) =>
          mes(i + 1, i < 6 ? "calido" : "frio"),
        )}
        catalog={[]}
        adviceByBucket={{ calido: "Ropa liviana.", frio: "Abrigo." }}
      />,
    );

    expect(html).not.toContain(AVISO);
  });

  it("no avisa cuando la ropa es la misma pero la lluvia cambia", () => {
    // Río: cálido los doce meses, pero de noviembre a marzo llueve y el resto
    // del año no. Las tarjetas de esos meses suman el paraguas.
    const html = renderToStaticMarkup(
      <MonthCards
        months={Array.from({ length: 12 }, (_, i) =>
          mes(i + 1, "calido", i < 3 || i > 9 ? ["lluvia"] : []),
        )}
        catalog={[]}
        adviceByBucket={{ calido: "Ropa liviana." }}
      />,
    );

    expect(html).not.toContain(AVISO);
  });

  it("en un mes de lluvia muestra primero lo de la lluvia", () => {
    const paraguas: PackingCatalogItem = {
      id: "paraguas",
      category: "accesorios",
      name: "Paraguas compacto",
      weightG: 350,
      climateTags: ["frio", "fresco", "templado", "calido", "lluvia"],
      tripTypeTags: ["urbano", "negocios"],
      baseQty: 1,
      scalesWithDays: false,
      daysPerUnit: null,
      maxQty: null,
    };
    const short: PackingCatalogItem = {
      ...paraguas,
      id: "short",
      category: "ropa",
      name: "Short o bermuda",
      climateTags: ["calido"],
    };

    const html = renderToStaticMarkup(
      <MonthCards
        months={[mes(1, "calido", ["lluvia"]), mes(7, "calido")]}
        catalog={[short, paraguas]}
        adviceByBucket={{ calido: "Ropa liviana." }}
      />,
    );

    const [lluvioso, seco] = html.split("<article").slice(1);
    expect(lluvioso.indexOf("Paraguas compacto")).toBeGreaterThan(-1);
    expect(lluvioso.indexOf("Paraguas compacto")).toBeLessThan(
      lluvioso.indexOf("Short o bermuda"),
    );
    expect(seco.indexOf("Short o bermuda")).toBeLessThan(
      seco.indexOf("Paraguas compacto"),
    );
  });

  it("no avisa cuando no hay datos de clima en ningún mes", () => {
    // Doce meses sin bucket también son "todos iguales", pero ahí el problema
    // es que falta el dato, no que el clima sea parejo. Decir que se empaca
    // igual todo el año sería una afirmación sin respaldo.
    const html = renderToStaticMarkup(
      <MonthCards
        months={Array.from({ length: 12 }, (_, i) => mes(i + 1, null))}
        catalog={[]}
        adviceByBucket={{}}
      />,
    );

    expect(html).not.toContain(AVISO);
  });
});
