import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { allGuides } from "@/content/guias";
import { getQuoteCorridor } from "@/lib/quotes/corridors";

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

/** Los corredores que aparecen en algún insert a `destinations`. */
function corredoresSembrados(): Set<string> {
  const dir = "supabase/migrations";
  const corredores = new Set<string>();

  for (const archivo of readdirSync(dir)) {
    if (!archivo.endsWith(".sql")) continue;

    const sql = readFileSync(`${dir}/${archivo}`, "utf8");

    // La columna corridor va siempre seguida de base_currency, que es lo que la
    // distingue de cualquier otro texto entre comillas de la migración.
    for (const [, corredor] of sql.matchAll(/'([a-z-]+)',\s*'[A-Z]{3}'/g)) {
      corredores.add(corredor);
    }
  }

  return corredores;
}

/** Moneda de cada corredor, tal como la siembran las migraciones. */
function monedasSembradas(): Map<string, Set<string>> {
  const dir = "supabase/migrations";
  const monedas = new Map<string, Set<string>>();

  for (const archivo of readdirSync(dir)) {
    if (!archivo.endsWith(".sql")) continue;

    const sql = readFileSync(`${dir}/${archivo}`, "utf8");

    for (const [, corredor, moneda] of sql.matchAll(
      /'([a-z-]+)',\s*'([A-Z]{3})'/g,
    )) {
      const actuales = monedas.get(corredor) ?? new Set<string>();
      actuales.add(moneda);
      monedas.set(corredor, actuales);
    }
  }

  return monedas;
}

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
      /'[a-z-]+',\s*'[A-Z]{3}',\s*(?:true|false),\s*'([a-z0-9-]+)'/g,
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
    expect(slugs.size).toBeGreaterThanOrEqual(27);
  });

  for (const guia of allGuides()) {
    it(`${guia.country}: los ${guia.places.length} destinos del mosaico son planificables`, () => {
      const faltan = guia.places
        .map((place) => place.id)
        .filter((id) => !slugs.has(id));

      expect(faltan).toEqual([]);
    });
  }

  it("acota cada id a su país, porque hay ciudades homónimas", () => {
    // Este test exigía ids únicos entre TODAS las guías, con el argumento de
    // que dos iguales harían ambiguo el enlace del mosaico. No era cierto: el
    // enlace es /guia/{país}/preparar?ciudad={id}, y la base declara el slug
    // único por corredor —el smoke de RLS verifica que el mismo slug vale en
    // otro corredor—. Con diecinueve países la premisa chocó con la realidad:
    // hay una Concepción en Bolivia y otra en Paraguay, y una Mérida en México
    // y otra en Venezuela. Renombrarlas para conformar al test habría
    // empeorado las URLs.
    //
    // Lo que sí tiene que valer es que dentro de un mismo país no se repitan,
    // que es lo que de verdad desambigua el enlace.
    for (const guia of allGuides()) {
      const ids = guia.places.map((p) => p.id);
      expect(new Set(ids).size, guia.slug).toBe(ids.length);
    }
  });

  it("usa ids con forma de slug, que es lo que va en la URL", () => {
    for (const guia of allGuides()) {
      for (const place of guia.places) {
        expect(place.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      }
    }
  });
});

/**
 * Publicar una guía sin su migración deja dos páginas sin nada que mostrar.
 *
 * `/guia/<país>/preparar` y `/guia/<país>/planificar` resuelven todo a partir
 * de las ciudades del corredor. Sin una sola fila en `destinations`, las dos
 * quedan en el modo degradado que ahora avisa que faltan datos — correcto como
 * red de seguridad, pero no es lo que queremos publicar.
 *
 * ESTO NO PRUEBA QUE LA MIGRACIÓN HAYA CORRIDO EN PRODUCCIÓN. Un test del repo
 * no puede saberlo, y justamente esa fue la falla que llevó a Bolivia a un 404:
 * la guía deployada y la migración sin aplicar porque el workflow venía
 * fallando. Lo que sí caza es el caso que está bajo nuestro control: publicar
 * contenido y olvidar el SQL.
 */
describe("cada guía publicada tiene su corredor en las migraciones", () => {
  const corredores = corredoresSembrados();

  it("las migraciones siembran corredores", () => {
    // La misma guarda contra un test que se miente solo: si el regex dejara de
    // encontrar filas, todo lo de abajo pasaría vacío.
    expect(corredores.size).toBeGreaterThanOrEqual(3);
  });

  for (const guia of allGuides()) {
    it(`${guia.country} tiene su corredor sembrado`, () => {
      expect(corredores).toContain(guia.slug);
    });
  }
});

/**
 * El otro sentido: nada en la base que la app no pueda mostrar.
 *
 * Un corredor sembrado sin guía no tiene ruta: sus ciudades y sus precios
 * ocupan la base sin que nadie pueda llegar a ellos. Y un corredor cuya moneda
 * en la base no es ninguna de las dos que conoce su cotización muestra precios
 * en una moneda y los convierte con la tasa de otra —el caso de Bulgaria, que
 * pasó del lev al euro: si la migración y corridors.ts no se mueven juntos, el
 * total sale mal sin fallar en ningún lado—.
 *
 * Las dos válidas son la moneda local y la del resultado. La segunda es la de
 * Venezuela y Cuba: precios cargados en dólares a propósito, porque ahí se le
 * cobra en dólares al viajero (ver budgetConversionStatus).
 */
describe("cada corredor sembrado es coherente con el código", () => {
  const monedas = monedasSembradas();
  const guias = new Set(allGuides().map((guia) => guia.slug));

  it("las migraciones siembran monedas", () => {
    expect(monedas.size).toBeGreaterThanOrEqual(3);
  });

  for (const [corredor, enLaBase] of monedas) {
    it(`${corredor}: tiene guía, una sola moneda y su cotización la conoce`, () => {
      expect(guias.has(corredor), `${corredor} no tiene guía`).toBe(true);
      expect([...enLaBase]).toHaveLength(1);

      const cotizacion = getQuoteCorridor(corredor);
      expect([cotizacion?.baseCurrency, cotizacion?.quoteCurrency]).toContain(
        [...enLaBase][0],
      );
    });
  }
});
