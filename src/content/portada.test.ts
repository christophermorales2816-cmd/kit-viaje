import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  EN_TENDENCIA,
  IMPERDIBLES_DE_CULTURA,
  IMPERDIBLES_DE_NATURALEZA,
  OFERTAS,
  VACACIONES,
} from "./portada";

/**
 * Las tarjetas de la portada (spec, 19.6). Hoy casi todas dicen
 * "Próximamente"; estos tests cuidan el momento en que dejen de decirlo.
 */

const TARJETAS = [
  EN_TENDENCIA,
  OFERTAS,
  ...IMPERDIBLES_DE_CULTURA,
  ...IMPERDIBLES_DE_NATURALEZA,
];

const ENLACES = [
  ...TARJETAS.map(({ id, href }) => ({ id, href })),
  ...VACACIONES.opciones.map(({ id, href }) => ({ id, href })),
];

/** La página de Next que atiende una ruta sin parámetros. */
function paginaDe(href: string): string {
  return path.join(process.cwd(), "src/app", href, "page.tsx");
}

describe("tarjetas de la portada", () => {
  it("no repiten id: son las claves de React y los ids de los títulos", () => {
    const ids = [...ENLACES.map(({ id }) => id), VACACIONES.id];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cuando tienen enlace, llevan a una página que existe", () => {
    for (const { id, href } of ENLACES) {
      if (href === null) continue;
      expect(href.startsWith("/"), id).toBe(true);
      expect(existsSync(paginaDe(href)), `${id}: ${href}`).toBe(true);
    }
  });

  it("todas tienen título y una línea que dice qué va a haber", () => {
    for (const { id, titulo, descripcion } of [...TARJETAS, VACACIONES]) {
      expect(titulo.trim().length, id).toBeGreaterThan(0);
      expect(descripcion.trim().length, id).toBeGreaterThan(0);
    }
  });
});
