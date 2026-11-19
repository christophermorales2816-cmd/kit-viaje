import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { enriquecer } from "./enriquecer";

const html = (nodo: React.ReactNode) => renderToStaticMarkup(<>{nodo}</>);

describe("enriquecer", () => {
  it("dibuja cada marca con su función y deja el resto como texto", () => {
    const nodo = enriquecer("Estos números son de <ciudad>Ushuaia</ciudad>.", {
      ciudad: (contenido) => <strong>{contenido}</strong>,
    });

    expect(html(nodo)).toBe("Estos números son de <strong>Ushuaia</strong>.");
  });

  it("respeta el orden de la frase de cada idioma", () => {
    const nodo = enriquecer("<enlace>Lee la guía</enlace> antes de salir", {
      enlace: (contenido) => <em>{contenido}</em>,
    });

    expect(html(nodo)).toBe("<em>Lee la guía</em> antes de salir");
  });

  it("muestra como texto una marca que no sabe dibujar", () => {
    expect(html(enriquecer("Hola <x>mundo</x>", {}))).toBe("Hola mundo");
  });

  it("deja igual un texto sin marcas", () => {
    expect(html(enriquecer("Sin marcas", {}))).toBe("Sin marcas");
  });
});
