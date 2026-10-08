import { describe, expect, it } from "vitest";

import { esRutaDeViaje, redactarUrl } from "./privacidad";

const TOKEN = "0123456789abcdef0123456789abcdef";
const SLUG = "0123456789abcdef";

describe("redactarUrl", () => {
  it("borra la llave de edición del link privado", () => {
    expect(redactarUrl(`https://kit.app/viaje/${TOKEN}`)).toBe(
      "https://kit.app/viaje/[link]",
    );
  });

  it("borra el slug del link compartido", () => {
    expect(redactarUrl(`https://kit.app/viaje/ver/${SLUG}`)).toBe(
      "https://kit.app/viaje/ver/[link]",
    );
  });

  it("conserva lo que viene después del token", () => {
    expect(redactarUrl(`/viaje/${TOKEN}?tab=presupuesto#total`)).toBe(
      "/viaje/[link]?tab=presupuesto#total",
    );
  });

  it("no toca las URLs que no son de un viaje", () => {
    const url = "https://kit.app/guia/argentina/preparar?ciudad=ushuaia";

    expect(redactarUrl(url)).toBe(url);
  });

  it("no confunde un token con un texto que solo empieza parecido", () => {
    // 33 caracteres: no es un token, y redactarlo a medias dejaría el resto.
    const url = `/viaje/${TOKEN}f`;

    expect(redactarUrl(url)).toBe(url);
  });
});

describe("esRutaDeViaje", () => {
  it("reconoce las dos rutas de un viaje", () => {
    expect(esRutaDeViaje(`/viaje/${TOKEN}`)).toBe(true);
    expect(esRutaDeViaje(`/viaje/ver/${SLUG}`)).toBe(true);
  });

  it("no confunde otras rutas", () => {
    expect(esRutaDeViaje("/")).toBe(false);
    expect(esRutaDeViaje("/guia/argentina")).toBe(false);
    expect(esRutaDeViaje("/viajes")).toBe(false);
    expect(esRutaDeViaje(null)).toBe(false);
  });
});
