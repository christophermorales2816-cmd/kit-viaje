import { describe, expect, it } from "vitest";

import {
  longitudTrasArrastre,
  normalizarLongitud,
  proyectar,
} from "./globe-hero";

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

/**
 * El giro. La longitud que mira la cámara se mueve sin parar, y lo que puede
 * salir mal es aritmético: que crezca sin tope, que salte al cruzar el
 * antimeridiano, o que arrastrar gire para el lado contrario a la mano.
 */
describe("normalizarLongitud", () => {
  it("deja igual lo que ya está en rango", () => {
    expect(normalizarLongitud(-58.38)).toBeCloseTo(-58.38, 10);
    expect(normalizarLongitud(0)).toBe(0);
    expect(normalizarLongitud(179.5)).toBeCloseTo(179.5, 10);
  });

  it("da la vuelta en el antimeridiano para los dos lados", () => {
    expect(normalizarLongitud(181)).toBeCloseTo(-179, 10);
    expect(normalizarLongitud(-181)).toBeCloseTo(179, 10);
    expect(normalizarLongitud(180)).toBe(-180);
  });

  it("no se va de rango después de muchas vueltas", () => {
    // Un minuto por vuelta: una pestaña abierta un día entero son 1440.
    expect(normalizarLongitud(-15 - 360 * 1440)).toBeCloseTo(-15, 6);
    expect(normalizarLongitud(-15 + 360 * 1440)).toBeCloseTo(-15, 6);
  });

  it("no cambia lo que se ve: la proyección da lo mismo", () => {
    const sinNormalizar = proyectar(BUENOS_AIRES, [10, -58.38 - 720]);
    const normalizado = proyectar(BUENOS_AIRES, [
      10,
      normalizarLongitud(-58.38 - 720),
    ]);

    expect(normalizado.x).toBeCloseTo(sinNormalizar.x, 10);
    expect(normalizado.y).toBeCloseTo(sinNormalizar.y, 10);
  });
});

describe("longitudTrasArrastre", () => {
  it("sin moverse, la cámara no se mueve", () => {
    expect(longitudTrasArrastre(-15, 0, 400)).toBeCloseTo(-15, 10);
  });

  it("arrastrar el ancho entero gira media vuelta", () => {
    expect(longitudTrasArrastre(0, 400, 400)).toBe(-180);
    expect(longitudTrasArrastre(0, -400, 400)).toBe(-180);
    expect(longitudTrasArrastre(0, 200, 400)).toBeCloseTo(-90, 10);
  });

  it("arrastrar a la derecha trae a la vista lo que estaba a la izquierda", () => {
    // Con la cámara en el Atlántico, Buenos Aires está a la izquierda del
    // centro. Arrastrar a la derecha lo tiene que acercar al centro, como
    // empujar una pelota con la mano.
    const antes = proyectar(BUENOS_AIRES, [0, -15]);
    const despues = proyectar(BUENOS_AIRES, [
      0,
      longitudTrasArrastre(-15, 50, 400),
    ]);

    expect(antes.x).toBeLessThan(0);
    expect(despues.x).toBeGreaterThan(antes.x);
  });

  it("no depende de cuánto mide el globo, sino de la fracción arrastrada", () => {
    expect(longitudTrasArrastre(30, 100, 400)).toBeCloseTo(
      longitudTrasArrastre(30, 50, 200),
      10,
    );
  });

  it("con un globo sin medida todavía, no gira ni devuelve NaN", () => {
    // Antes del primer layout offsetWidth es 0, y dx / 0 es Infinity.
    expect(longitudTrasArrastre(-15, 30, 0)).toBeCloseTo(-15, 10);
  });

  it("cruza el antimeridiano sin salto", () => {
    expect(longitudTrasArrastre(170, -100, 400)).toBeCloseTo(-145, 10);
  });
});
