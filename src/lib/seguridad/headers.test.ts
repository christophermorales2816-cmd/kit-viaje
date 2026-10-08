import { describe, expect, it } from "vitest";

import {
  VIAJE_HEADERS,
  contentSecurityPolicy,
  entornoActual,
  securityHeaders,
} from "./headers";

function directiva(csp: string, nombre: string): string[] {
  const encontrada = csp
    .split(";")
    .map((parte) => parte.trim().split(/\s+/))
    .find(([clave]) => clave === nombre);

  return encontrada ? encontrada.slice(1) : [];
}

describe("contentSecurityPolicy", () => {
  it("no deja embeber la app en otro sitio", () => {
    // Es la defensa contra el clickjacking del dashboard de un viaje.
    for (const entorno of ["development", "preview", "production"] as const) {
      expect(
        directiva(contentSecurityPolicy(entorno), "frame-ancestors"),
      ).toEqual(["'none'"]);
    }
  });

  it("no habilita eval en producción", () => {
    expect(contentSecurityPolicy("production")).not.toContain("unsafe-eval");
    expect(contentSecurityPolicy("preview")).not.toContain("unsafe-eval");
  });

  it("habilita eval solo en desarrollo, que React lo necesita ahí", () => {
    expect(
      directiva(contentSecurityPolicy("development"), "script-src"),
    ).toContain("'unsafe-eval'");
  });

  it("solo carga scripts del propio dominio y de analytics", () => {
    const fuentes = directiva(
      contentSecurityPolicy("production"),
      "script-src",
    );

    expect(fuentes.filter((f) => f.startsWith("https://"))).toEqual([
      "https://va.vercel-scripts.com",
    ]);
  });

  it("los dominios de la barra de Vercel entran solo en preview", () => {
    expect(contentSecurityPolicy("preview")).toContain("https://vercel.live");
    expect(contentSecurityPolicy("production")).not.toContain("vercel.live");
  });

  it("deja cargar los mosaicos del mapa", () => {
    expect(directiva(contentSecurityPolicy("production"), "img-src")).toContain(
      "https://*.basemaps.cartocdn.com",
    );
  });

  it("no manda formularios ni la base de URLs a otro dominio", () => {
    const csp = contentSecurityPolicy("production");

    expect(directiva(csp, "form-action")).toEqual(["'self'"]);
    expect(directiva(csp, "base-uri")).toEqual(["'self'"]);
    expect(directiva(csp, "object-src")).toEqual(["'none'"]);
  });

  it("fuerza https fuera de desarrollo", () => {
    expect(contentSecurityPolicy("production")).toContain(
      "upgrade-insecure-requests",
    );
    expect(contentSecurityPolicy("development")).not.toContain(
      "upgrade-insecure-requests",
    );
  });
});

describe("securityHeaders", () => {
  it("trae los headers básicos, sin repetir ninguno", () => {
    const claves = securityHeaders("production").map((h) => h.key);

    expect(claves).toEqual(
      expect.arrayContaining([
        "Content-Security-Policy",
        "X-Frame-Options",
        "X-Content-Type-Options",
        "Referrer-Policy",
        "Permissions-Policy",
        "Strict-Transport-Security",
      ]),
    );
    expect(new Set(claves).size).toBe(claves.length);
  });

  it("en las páginas de un viaje no manda el link a ningún lado", () => {
    expect(VIAJE_HEADERS).toContainEqual({
      key: "Referrer-Policy",
      value: "no-referrer",
    });
  });
});

describe("entornoActual", () => {
  it("lee el entorno con los nombres de Vercel", () => {
    expect(entornoActual({ NODE_ENV: "development" })).toBe("development");
    expect(
      entornoActual({ NODE_ENV: "production", VERCEL_ENV: "preview" }),
    ).toBe("preview");
    expect(
      entornoActual({ NODE_ENV: "production", VERCEL_ENV: "production" }),
    ).toBe("production");
  });

  it("ante la duda, aplica las reglas de producción", () => {
    expect(entornoActual({})).toBe("production");
  });
});
