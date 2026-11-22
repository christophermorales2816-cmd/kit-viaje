import { describe, expect, it } from "vitest";

import { allGuides } from "@/content/guias";
import { celdaDe, claveDeCelda } from "@/lib/comidas/celdas";

import {
  DIBUJO_DEL_SERVICIO,
  TIPOS_DE_SERVICIO,
  celdaCercaDeLaGuia,
  hrefDeTelefono,
  rutaDeServicios,
} from "./servicios";

/** El contraste entre un color y el blanco, como lo mide WCAG. */
function contrasteConBlanco(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const canal = parseInt(hex.slice(i, i + 2), 16) / 255;

    return canal <= 0.03928 ? canal / 12.92 : ((canal + 0.055) / 1.055) ** 2.4;
  });
  const luminancia = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return 1.05 / (luminancia + 0.05);
}

describe("DIBUJO_DEL_SERVICIO", () => {
  it("cada tipo tiene su color y su letra, sin repetir", () => {
    const colores = TIPOS_DE_SERVICIO.map(
      (tipo) => DIBUJO_DEL_SERVICIO[tipo].color,
    );
    const letras = TIPOS_DE_SERVICIO.map(
      (tipo) => DIBUJO_DEL_SERVICIO[tipo].letra,
    );

    expect(new Set(colores).size).toBe(TIPOS_DE_SERVICIO.length);
    expect(new Set(letras).size).toBe(TIPOS_DE_SERVICIO.length);
  });

  it("la letra blanca se lee sobre cada color", () => {
    for (const tipo of TIPOS_DE_SERVICIO) {
      expect(
        contrasteConBlanco(DIBUJO_DEL_SERVICIO[tipo].color),
        tipo,
      ).toBeGreaterThanOrEqual(4.5);
    }
  });
});

describe("hrefDeTelefono", () => {
  it("deja solo los dígitos, con el + si lo tiene", () => {
    expect(hrefDeTelefono("+54 2901 44-1000")).toBe("tel:+542901441000");
    expect(hrefDeTelefono("(02901) 421-315")).toBe("tel:02901421315");
  });

  it("no arma un enlace con algo que no es un número", () => {
    expect(hrefDeTelefono(null)).toBeNull();
    expect(hrefDeTelefono("")).toBeNull();
    expect(hrefDeTelefono("101")).toBeNull();
    expect(hrefDeTelefono("+1 234 567 890 123 456 789")).toBeNull();
  });
});

describe("celdaCercaDeLaGuia", () => {
  const ushuaia = { coords: [-54.8019, -68.303] as [number, number] };

  it("acepta la celda del destino y las de alrededor", () => {
    expect(celdaCercaDeLaGuia(celdaDe(-54.8, -68.3), [ushuaia])).toBe(true);
    // Tolhuin, a unos 80 km, y Río Grande, a unos 120.
    expect(celdaCercaDeLaGuia(celdaDe(-54.51, -67.19), [ushuaia])).toBe(true);
    expect(celdaCercaDeLaGuia(celdaDe(-53.79, -67.71), [ushuaia])).toBe(true);
  });

  it("no acepta una celda lejos de todos los destinos", () => {
    // Río Gallegos, a unos 360 km.
    expect(celdaCercaDeLaGuia(celdaDe(-51.62, -69.22), [ushuaia])).toBe(false);
    expect(celdaCercaDeLaGuia(celdaDe(35.6, 139.7), [ushuaia])).toBe(false);
  });

  it("acepta la celda de cada destino de cada guía", () => {
    for (const guia of allGuides()) {
      for (const place of guia.places) {
        const [lat, lon] = place.coords;

        expect(
          celdaCercaDeLaGuia(celdaDe(lat, lon), guia.places),
          `${guia.slug}: ${place.id}`,
        ).toBe(true);
      }
    }
  });
});

describe("rutaDeServicios", () => {
  it("lleva la guía y la clave de la celda", () => {
    const celda = celdaDe(-54.8, -68.3);

    expect(rutaDeServicios("argentina", celda)).toBe(
      `/api/servicios?guia=argentina&celda=${encodeURIComponent(claveDeCelda(celda))}`,
    );
  });
});
