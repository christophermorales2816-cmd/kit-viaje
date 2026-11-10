import { describe, expect, it } from "vitest";

import { distanciaKm } from "@/lib/geo";
import { COCINA_VALIDA, PALABRA_VALIDA } from "@/lib/comidas/osm";

import { fotoDe } from "./fotos";
import { allCatalogos, getCatalogo, guiaDelCatalogo } from "./index";
import type { Contiene, TipoDeLugarOsm } from "./types";

const CATALOGOS = allCatalogos();

/** Cuánto puede pasar sin revisar un catálogo: los precios cambian. */
const DIAS_SIN_REVISAR = 365;

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const TIPOS_OSM: TipoDeLugarOsm[] = [
  "comida",
  "cafe",
  "bar",
  "heladeria",
  "panaderia",
  "dulceria",
  "mercado",
  "almacen",
  "bebidas",
];

/**
 * Lo que un ingrediente obliga a marcar en `contiene`.
 *
 * Es la red que caza el error más caro del catálogo: un plato con huevo o con
 * caldo de pescado que el filtro muestra como vegano. No cubre todo —"dashi"
 * sí, "salsa" no—, pero cubre lo que más se escribe.
 */
const INGREDIENTE_OBLIGA: [RegExp, Contiene][] = [
  [/\bcerdo|panceta|jam[oó]n|chorizo|chicharr[oó]n|chashu|asiento/i, "cerdo"],
  [
    /pescado|dashi|bonito|katsuobushi|anguila|at[uú]n|salm[oó]n|huevas|abadejo|surub[ií]|huachinango|pez globo/i,
    "pescado",
  ],
  [
    /langostino|camar[oó]n|pulpo|centolla|cangrejo|erizo|marisco|almeja/i,
    "mariscos",
  ],
  [/\bhuevo/i, "huevo"],
  [
    /\bleche\b|queso|\bcrema\b|manteca(?! de cerdo)|muzzarella|provolone|quesillo/i,
    "lacteos",
  ],
  [
    /harina(?! de (maíz|garbanzo))|trigo|\bpan\b|panko|birote|galleta|cerveza/i,
    "gluten",
  ],
  [/\bsake\b|mirin|cerveza|\bvino\b|fernet/i, "alcohol"],
  [/soja|\bmiso\b|tofu|natto/i, "soja"],
  [/s[eé]samo/i, "sesamo"],
  [/\bman[ií]\b|cacahuate/i, "mani"],
  [/almendra|\bnuez|nueces/i, "frutos-secos"],
  [
    /\bvaca\b|\bres\b|\bpollo\b|cordero|borrego|chivo|cabrito|guajolote|\blomo\b|carne(?! de cerdo)/i,
    "carne",
  ],
];

/** Lo que tiene que ser una oración: mayúscula al principio, punto al final. */
const ORACION = /^[¡¿"'A-ZÁÉÍÓÚÑ0-9].*[.!?)"]$/;

describe("los catálogos de Qué comer", () => {
  it("hay al menos uno, y cada uno es de un país con guía", () => {
    expect(CATALOGOS.length).toBeGreaterThan(0);

    for (const catalogo of CATALOGOS) {
      expect(() => guiaDelCatalogo(catalogo)).not.toThrow();
      expect(getCatalogo(catalogo.slug)).toBe(catalogo);
    }
  });

  it("no tienen slugs repetidos", () => {
    const slugs = CATALOGOS.map((catalogo) => catalogo.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe.each(CATALOGOS.map((catalogo) => [catalogo.slug, catalogo] as const))(
  "el catálogo de %s",
  (_slug, catalogo) => {
    const regiones = new Set(catalogo.regiones.map((region) => region.id));
    const ciudades = new Map(
      catalogo.ciudades.map((ciudad) => [ciudad.id, ciudad]),
    );

    it("fue revisado hace menos de un año, y no en el futuro", () => {
      const revisado = Date.parse(`${catalogo.revisado}T00:00:00Z`);
      const dias = (Date.now() - revisado) / 86_400_000;

      expect(Number.isNaN(revisado)).toBe(false);
      expect(dias).toBeGreaterThanOrEqual(-1);
      expect(dias).toBeLessThan(DIAS_SIN_REVISAR);
    });

    it("tiene introducción y despensa", () => {
      expect(catalogo.intro.length).toBeGreaterThanOrEqual(1);
      expect(catalogo.despensa.ingredientes.length).toBeGreaterThanOrEqual(4);

      for (const texto of [
        ...catalogo.intro,
        catalogo.despensa.intro,
        ...catalogo.despensa.ingredientes.map(
          (ingrediente) => ingrediente.descripcion,
        ),
      ]) {
        expect(texto).toMatch(ORACION);
      }
    });

    it("tiene regiones y ciudades sin repetir, y las ciudades existen", () => {
      expect(regiones.size).toBe(catalogo.regiones.length);
      expect(ciudades.size).toBe(catalogo.ciudades.length);
      expect(catalogo.ciudades.length).toBeGreaterThan(0);

      for (const ciudad of catalogo.ciudades) {
        expect(ciudad.id).toMatch(SLUG);
        if (ciudad.region) expect(regiones).toContain(ciudad.region);

        const [lat, lon] = ciudad.coords;
        expect(Math.abs(lat)).toBeLessThanOrEqual(90);
        expect(Math.abs(lon)).toBeLessThanOrEqual(180);
      }
    });

    it("tiene platos de sobra, con ids únicos que sirven de URL", () => {
      const ids = catalogo.platos.map((plato) => plato.id);

      expect(catalogo.platos.length).toBeGreaterThanOrEqual(8);
      expect(new Set(ids).size).toBe(ids.length);

      for (const id of ids) expect(id).toMatch(SLUG);
    });

    it("no hace imperdible más de un tercio del catálogo", () => {
      const imperdibles = catalogo.platos.filter((plato) => plato.imperdible);

      expect(imperdibles.length).toBeGreaterThan(0);
      expect(imperdibles.length).toBeLessThanOrEqual(
        Math.ceil(catalogo.platos.length / 3),
      );
    });

    it.each(catalogo.platos.map((plato) => [plato.id, plato] as const))(
      "%s está completo y es coherente",
      (_id, plato) => {
        for (const texto of [
          plato.resumen,
          plato.descripcion,
          plato.sabor,
          ...(plato.nota ? [plato.nota] : []),
          ...(plato.sinMapa ? [plato.sinMapa] : []),
        ]) {
          expect(texto).toMatch(ORACION);
          expect(texto).not.toMatch(/ {2}|\s$/);
        }

        expect(plato.ingredientes.length).toBeGreaterThan(0);
        expect(new Set(plato.contiene).size).toBe(plato.contiene.length);
        expect(plato.momentos.length).toBeGreaterThan(0);
        expect(plato.lugares.length).toBeGreaterThan(0);

        for (const region of plato.regiones) expect(regiones).toContain(region);

        // Exactamente uno: o se busca en el mapa, o se dice por qué no.
        expect(Boolean(plato.buscar) !== Boolean(plato.sinMapa)).toBe(true);
      },
    );

    it.each(catalogo.platos.map((plato) => [plato.id, plato] as const))(
      "%s marca en 'contiene' lo que dicen sus ingredientes",
      (_id, plato) => {
        const texto = plato.ingredientes.join(" · ");

        for (const [patron, contiene] of INGREDIENTE_OBLIGA) {
          if (patron.test(texto)) {
            expect(plato.contiene, `"${texto}" lleva ${contiene}`).toContain(
              contiene,
            );
          }
        }
      },
    );

    it("busca en el mapa con valores que OpenStreetMap entiende", () => {
      for (const plato of catalogo.platos) {
        const { buscar } = plato;
        if (!buscar) continue;

        for (const tipo of buscar.en ?? []) expect(TIPOS_OSM).toContain(tipo);
        for (const cocina of buscar.cocinas ?? []) {
          expect(cocina).toMatch(COCINA_VALIDA);
        }
        for (const nombre of buscar.nombres ?? []) {
          expect(nombre).toMatch(PALABRA_VALIDA);
        }

        // Sin cocina ni nombre entra todo lo del tipo: sirve para "cualquier
        // panadería", no para "cualquier restaurante".
        if (!buscar.cocinas?.length && !buscar.nombres?.length) {
          expect(buscar.en?.length, plato.id).toBeGreaterThan(0);
          expect(buscar.en).not.toContain("comida");
          expect(buscar.en).not.toContain("bar");
        }
      }
    });

    it("nombra solo fotos que pasaron por herramientas/comidas/fotos.py", () => {
      for (const archivo of [
        catalogo.foto,
        ...catalogo.platos.map((plato) => plato.foto),
      ]) {
        if (archivo) expect(fotoDe(archivo), archivo).not.toBeNull();
      }
    });

    it("tiene menciones atadas a OpenStreetMap, a sus platos y cerca de su ciudad", () => {
      const platos = new Set(catalogo.platos.map((plato) => plato.id));
      const ids = catalogo.menciones.map((mencion) => mencion.id);

      expect(new Set(ids).size).toBe(ids.length);

      for (const mencion of catalogo.menciones) {
        expect(mencion.id).toMatch(SLUG);
        expect(mencion.osm).toMatch(/^(node|way|relation)\/[1-9]\d*$/);
        expect(mencion.porQue).toMatch(ORACION);
        expect(mencion.platos.length).toBeGreaterThan(0);
        for (const plato of mencion.platos) expect(platos).toContain(plato);

        const ciudad = ciudades.get(mencion.ciudad);
        expect(ciudad, mencion.id).toBeDefined();
        expect(distanciaKm(mencion.coords, ciudad!.coords)).toBeLessThan(100);
      }
    });
  },
);
