import { describe, expect, it } from "vitest";

import estados from "@/assets/globo/estados.json";
import { allGuides } from "@/content/guias";
import { distanciaKm } from "@/lib/geo";

/**
 * Los nombres de estados del globo (herramientas/globo/estados.py, spec 27):
 * que cada guía tenga los suyos y que sean de su país.
 */
const POR_GUIA = estados as unknown as Record<
  string,
  [string, number, number][]
>;

describe("los estados del globo", () => {
  it("hay una lista por guía, y ninguna de más", () => {
    const slugs = allGuides().map((guia) => guia.slug);

    expect(Object.keys(POR_GUIA).sort()).toEqual([...slugs].sort());
  });

  it("cada estado tiene nombre y un punto válido, sin repetirse", () => {
    for (const [slug, lista] of Object.entries(POR_GUIA)) {
      const nombres = lista.map(([nombre]) => nombre);

      expect(new Set(nombres).size, slug).toBe(nombres.length);

      for (const [nombre, lat, lon] of lista) {
        expect(nombre.trim(), slug).not.toBe("");
        expect(Math.abs(lat), `${slug}: ${nombre}`).toBeLessThanOrEqual(90);
        expect(Math.abs(lon), `${slug}: ${nombre}`).toBeLessThanOrEqual(180);
      }
    }
  });

  it("los países con más de un destino tienen sus estados", () => {
    for (const guia of allGuides()) {
      if (guia.places.length < 2) continue;

      expect(POR_GUIA[guia.slug]?.length ?? 0, guia.slug).toBeGreaterThan(0);
    }
  });

  it("los estados quedan cerca de los destinos de su guía, no en otro país", () => {
    // El estado más importante de cada guía, a menos de 3.000 km de alguno de
    // sus destinos: un país mal asignado cae mucho más lejos. Francia, con
    // sus departamentos de ultramar, se mira por el primero, que es de
    // Francia metropolitana.
    for (const guia of allGuides()) {
      const primero = POR_GUIA[guia.slug]?.[0];
      if (!primero) continue;

      const [, lat, lon] = primero;
      const cerca = guia.places.some(
        (place) => distanciaKm(place.coords, [lat, lon]) < 3000,
      );

      expect(cerca, `${guia.slug}: ${primero[0]}`).toBe(true);
    }
  });

  it("usa los nombres en castellano", () => {
    const nombres = (slug: string) => POR_GUIA[slug].map(([nombre]) => nombre);

    expect(nombres("francia")).toContain("Bretaña");
    expect(nombres("italia")).toContain("Toscana");
    expect(nombres("reino-unido")).toEqual(
      expect.arrayContaining(["Inglaterra", "Escocia", "Gales"]),
    );
    expect(nombres("estados-unidos")).toContain("Luisiana");
  });
});
