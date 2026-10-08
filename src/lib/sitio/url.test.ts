import { describe, expect, it } from "vitest";

import { urlDelSitio } from "./url";

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
