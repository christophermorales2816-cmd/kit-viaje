import { describe, expect, it } from "vitest";

import { proyectar } from "./globe-hero";

const BUENOS_AIRES: [number, number] = [-34.6037, -58.3816];
const RIO: [number, number] = [-22.9068, -43.1729];

/**
 * La proyección de los marcadores sobre el globo.
 *
 * Antes no hacía falta: con un solo país el globo se centraba en él y el
 * marcador iba al centro exacto del canvas, sin cuentas. Con dos hay que
 * proyectar de verdad, y una proyección mal hecha no rompe nada — pone el pin
 * sobre el océano equivocado y nadie se entera.
 */
describe("proyectar", () => {
  it("pone el punto enfocado en el centro exacto", () => {
    const { x, y, visible } = proyectar(BUENOS_AIRES, BUENOS_AIRES);

    expect(x).toBeCloseTo(0, 10);
    expect(y).toBeCloseTo(0, 10);
    expect(visible).toBe(true);
  });

  it("manda al este lo que está al este del foco", () => {
    // Río está al noreste de Buenos Aires: x positivo, y positivo.
    const { x, y, visible } = proyectar(RIO, BUENOS_AIRES);

    expect(x).toBeGreaterThan(0);
    expect(y).toBeGreaterThan(0);
    expect(visible).toBe(true);
  });

  it("esconde lo que quedó del otro lado del planeta", () => {
    // Tokio, con el globo mirando a Buenos Aires.
    const { visible } = proyectar([35.6762, 139.6503], BUENOS_AIRES);

    expect(visible).toBe(false);
  });

  it("esconde el punto apenas pasa el borde del disco", () => {
    // Noventa grados de longitud sobre el ecuador es el limbo exacto. Ahí el
    // resultado depende de que cos(π/2) no es exactamente cero en coma
    // flotante, así que no se afirma nada sobre ese punto: no existe en la
    // práctica y agregar un épsilon para domarlo sería código defensivo contra
    // un caso que nadie puede producir. Lo que sí importa es que un pelo más
    // allá ya no se vea.
    expect(proyectar([0, 90.001], [0, 0]).visible).toBe(false);
    expect(proyectar([0, 89.999], [0, 0]).visible).toBe(true);
  });

  it("no se sale del disco", () => {
    // El radio no puede pasar de 1: si pasa, el marcador se dibuja afuera del
    // globo y queda flotando sobre el fondo.
    for (const lat of [-80, -34, 0, 34, 80]) {
      for (const lon of [-180, -90, -43, 0, 90, 180]) {
        const { x, y } = proyectar([lat, lon], BUENOS_AIRES);
        expect(Math.hypot(x, y)).toBeLessThanOrEqual(1.0000001);
      }
    }
  });

  it("da la misma distancia al centro mirando desde cualquiera de los dos", () => {
    // La primera versión de este test pedía que invertir foco y punto reflejara
    // la posición (x → −x). Es falso: las dos vistas se relacionan por una
    // rotación, no por un espejo, y la componente x no se conserva. Lo que sí
    // se conserva es la distancia angular, y por lo tanto el radio.
    const ida = proyectar(RIO, BUENOS_AIRES);
    const vuelta = proyectar(BUENOS_AIRES, RIO);

    expect(Math.hypot(vuelta.x, vuelta.y)).toBeCloseTo(
      Math.hypot(ida.x, ida.y),
      12,
    );
    expect(vuelta.visible).toBe(ida.visible);
  });
});
