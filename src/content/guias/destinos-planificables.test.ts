import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { allGuides } from "@/content/guias";

/**
 * Todo destino que una guía muestra tiene que poder planificarse.
 *
 * El mosaico de cada guía ofrece nueve lugares. Durante un tiempo la base tenía
 * seis y cinco, así que alguien veía Fernando de Noronha, hacía click en "armar
 * el viaje" y recibía la lista de la ciudad base. No fallaba: salía mal.
 *
 * El invariante cruza dos archivos del repo —el contenido editorial y las
 * migraciones— así que se verifica leyendo los dos. No es elegante leer SQL
 * desde un test de TypeScript, pero es la única forma de que la promesa y el
 * dato no se separen sin que nadie se entere, que es exactamente lo que pasó.
 */

/** Todos los slugs que las migraciones insertan en `destinations`. */
function slugsDeLasMigraciones(): Set<string> {
  const dir = "supabase/migrations";
  const slugs = new Set<string>();

  for (const archivo of readdirSync(dir)) {
    if (!archivo.endsWith(".sql")) continue;

    const sql = readFileSync(`${dir}/${archivo}`, "utf8");

    // Las filas de destinations terminan en el slug entre comillas simples,
    // que es la última columna del insert.
    for (const [, slug] of sql.matchAll(
      /'(?:argentina|brasil)',\s*'[A-Z]{3}',\s*(?:true|false),\s*'([a-z0-9-]+)'/g,
    )) {
      slugs.add(slug);
    }

    // El seed original y el de Río insertan sin slug; lo agrega después un
    // `update ... when '<uuid>' then '<slug>'`.
    for (const [, slug] of sql.matchAll(
      /when '[0-9a-f-]{36}' then '([a-z0-9-]+)'/g,
    )) {
      slugs.add(slug);
    }
  }

  return slugs;
}

describe("cada destino de una guía existe en la base", () => {
  const slugs = slugsDeLasMigraciones();

  it("las migraciones siembran destinos con slug", () => {
    // Si el regex dejara de encontrar filas, el test de abajo pasaría vacío y
    // no probaría nada. Esta es la guarda contra un test que se miente solo.
    expect(slugs.size).toBeGreaterThanOrEqual(18);
  });

  for (const guia of allGuides()) {
    it(`${guia.country}: los ${guia.places.length} destinos del mosaico son planificables`, () => {
      const faltan = guia.places
        .map((place) => place.id)
        .filter((id) => !slugs.has(id));

      expect(faltan).toEqual([]);
    });
  }

  it("no repite un id de destino entre guías", () => {
    // Los slugs son únicos por corredor, no globales, pero dos guías que usen
    // el mismo id harían ambiguo el enlace del mosaico.
    const todos = allGuides().flatMap((g) => g.places.map((p) => p.id));
    expect(new Set(todos).size).toBe(todos.length);
  });

  it("usa ids con forma de slug, que es lo que va en la URL", () => {
    for (const guia of allGuides()) {
      for (const place of guia.places) {
        expect(place.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      }
    }
  });
});
