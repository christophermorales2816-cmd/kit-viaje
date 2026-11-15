import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import {
  BLOG,
  COLUMNAS_DEL_PIE,
  CONTACTO,
  HERRAMIENTAS,
  INGRESAR,
  NOSOTROS,
  esPronto,
  estaEn,
  seccionActiva,
  type ItemDelSitio,
} from "./navegacion";

const TODOS: ItemDelSitio[] = [
  ...HERRAMIENTAS,
  BLOG,
  NOSOTROS,
  CONTACTO,
  INGRESAR,
  ...COLUMNAS_DEL_PIE.flatMap((columna) => columna.items),
];

/** La página de Next que atiende una ruta sin parámetros. */
function paginaDe(href: string): string {
  return path.join(process.cwd(), "src/app", href, "page.tsx");
}

describe("navegación del sitio", () => {
  it("lleva solo a páginas que existen", () => {
    for (const item of TODOS) {
      if (esPronto(item)) continue;
      expect(existsSync(paginaDe(item.href)), item.href).toBe(true);
    }
  });

  it("dice qué viene en lo que todavía no existe, y no le pone enlace", () => {
    for (const item of TODOS.filter(esPronto)) {
      expect(item.pronto.length, item.id).toBeGreaterThan(0);
      expect("href" in item, item.id).toBe(false);
    }
  });

  it("no repite ids dentro de una columna del pie", () => {
    for (const { titulo, items } of COLUMNAS_DEL_PIE) {
      const ids = items.map((item) => item.id);
      expect(new Set(ids).size, titulo).toBe(ids.length);
    }
  });

  it("marca la sección de cada página", () => {
    expect(seccionActiva("/")).toBeNull();
    expect(seccionActiva("/destinos")).toBe("destinos");
    expect(seccionActiva("/destinos/asia")).toBe("destinos");
    expect(seccionActiva("/guia/japon")).toBe("destinos");
    expect(seccionActiva("/vuelos")).toBe("herramientas");
    expect(seccionActiva("/que-comer/peru/ceviche")).toBe("herramientas");
    expect(seccionActiva("/nosotros")).toBe("nosotros");
    expect(seccionActiva("/viaje/abc")).toBeNull();
  });

  it("no confunde una ruta con otra que empieza igual", () => {
    expect(estaEn("/vuelos", "/vuelos")).toBe(true);
    expect(estaEn("/vuelos/algo", "/vuelos")).toBe(true);
    expect(estaEn("/vuelosx", "/vuelos")).toBe(false);
  });
});
