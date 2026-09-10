import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { LiveQuotesSkeleton } from "./live-quotes";

/**
 * El encabezado del bloque de cotizaciones cuenta cuántas hay.
 *
 * Decía "Las cuatro cotizaciones, ahora" escrito a mano, de cuando había un
 * solo país. En la guía de Brasil, que tiene una sola, era literalmente falso —y
 * encima contradecía el número del hero, que dice "1 cotización, no cuatro" dos
 * pantallas más arriba.
 *
 * Se testea a través del esqueleto porque es la única de las tres ramas que no
 * hace I/O; las otras dos comparten exactamente el mismo componente de marco.
 */
describe("encabezado de cotizaciones", () => {
  it("habla en singular para un corredor de una sola cotización", () => {
    const html = renderToStaticMarkup(<LiveQuotesSkeleton corridor="brasil" />);

    expect(html).toContain("La cotización, ahora");
    expect(html).not.toContain("cuatro");
    // La bajada tampoco puede invitar a comparar cuando no hay con qué.
    expect(html).not.toContain("según cuál mires");
  });

  it("cuenta las que tiene el corredor en vez de decir un número fijo", () => {
    const html = renderToStaticMarkup(
      <LiveQuotesSkeleton corridor="argentina" />,
    );

    expect(html).toContain("Las 4 cotizaciones, ahora");
    expect(html).toContain("según cuál mires");
  });

  it("no afirma un número cuando todavía no sabe cuál es", () => {
    const html = renderToStaticMarkup(<LiveQuotesSkeleton />);

    expect(html).toContain("Las cotizaciones, ahora");
  });

  it("no deja tres huecos al lado de una sola cotización", () => {
    // La grilla estaba fija en cuatro columnas, así que la única de Brasil
    // salía ocupando un cuarto del ancho.
    const uno = renderToStaticMarkup(<LiveQuotesSkeleton corridor="brasil" />);
    const cuatro = renderToStaticMarkup(
      <LiveQuotesSkeleton corridor="argentina" />,
    );

    expect(uno).toContain("grid-cols-1");
    expect(uno).not.toContain("md:grid-cols-4");
    expect(cuatro).toContain("md:grid-cols-4");
  });
});
