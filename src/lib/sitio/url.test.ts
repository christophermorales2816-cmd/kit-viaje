import { describe, expect, it } from "vitest";

import { ALIAS_DE_VERCEL, redireccionesAlDominio, urlDelSitio } from "./url";

describe("urlDelSitio", () => {
  it("arma la URL con https a partir del dominio de Vercel", () => {
    expect(
      urlDelSitio({ VERCEL_PROJECT_PRODUCTION_URL: "kit-viaje.vercel.app" }),
    ).toBe("https://kit-viaje.vercel.app");
  });

  it("respeta una URL que ya trae el protocolo", () => {
    expect(
      urlDelSitio({ VERCEL_PROJECT_PRODUCTION_URL: "https://kitdeviaje.com" }),
    ).toBe("https://kitdeviaje.com");
  });

  it("fuera de Vercel no inventa un dominio", () => {
    expect(urlDelSitio({})).toBeNull();
    expect(urlDelSitio({ VERCEL_PROJECT_PRODUCTION_URL: " " })).toBeNull();
  });
});

describe("redireccionesAlDominio", () => {
  it("con dominio propio, el alias de Vercel redirige a él", () => {
    expect(
      redireccionesAlDominio({
        VERCEL_ENV: "production",
        VERCEL_PROJECT_PRODUCTION_URL: "tukitdeviaje.com",
      }),
    ).toEqual([
      {
        source: "/:path*",
        has: [{ type: "host", value: ALIAS_DE_VERCEL }],
        destination: "https://tukitdeviaje.com/:path*",
        permanent: true,
      },
    ]);
  });

  it("sin dominio propio no hay nada que redirigir", () => {
    expect(
      redireccionesAlDominio({
        VERCEL_ENV: "production",
        VERCEL_PROJECT_PRODUCTION_URL: ALIAS_DE_VERCEL,
      }),
    ).toEqual([]);
  });

  it("en los previews y en local no redirige nunca", () => {
    expect(
      redireccionesAlDominio({
        VERCEL_ENV: "preview",
        VERCEL_PROJECT_PRODUCTION_URL: "tukitdeviaje.com",
      }),
    ).toEqual([]);
    expect(redireccionesAlDominio({})).toEqual([]);
  });
});
