import { describe, expect, it } from "vitest";

import { sinSaltoDeAntimeridiano } from "./antimeridiano";

/**
 * El mapa de cada guía encuadra sus destinos. Un país partido por el
 * antimeridiano no rompe nada que un test de contenido vea: el mapa sale, con
 * el planeta entero y un pin en cada borde. Por eso se prueba acá.
 */
describe("sinSaltoDeAntimeridiano", () => {
  it("deja igual un país que no cruza el antimeridiano", () => {
    const argentina: [number, number][] = [
      [-34.6, -58.4],
      [-54.8, -68.3],
      [-24.8, -65.4],
    ];

    expect(sinSaltoDeAntimeridiano(argentina)).toEqual(argentina);
  });

  it("deja igual un país entero del lado oeste, como Tonga", () => {
    const tonga: [number, number][] = [
      [-21.1, -175.2],
      [-18.65, -173.98],
    ];

    expect(sinSaltoDeAntimeridiano(tonga)).toEqual(tonga);
  });

  it("junta las islas de Fiyi que quedan de los dos lados", () => {
    // Nadi, al oeste del meridiano 180, y Lakeba, en el grupo Lau, al este.
    const [nadi, lakeba] = sinSaltoDeAntimeridiano([
      [-17.8, 177.42],
      [-18.2, -178.8],
    ]);

    expect(nadi).toEqual([-17.8, 177.42]);
    expect(lakeba[0]).toBe(-18.2);
    expect(lakeba[1]).toBeCloseTo(181.2, 10);
  });

  it("deja Kiritimati al este de Tarawa, y no en la otra punta del mapa", () => {
    const [tarawa, kiritimati] = sinSaltoDeAntimeridiano([
      [1.33, 172.98],
      [1.87, -157.4],
    ]);

    // Entre Tarawa y Kiritimati hay unos treinta grados, no trescientos.
    expect(kiritimati[1] - tarawa[1]).toBeCloseTo(29.62, 10);
  });

  it("no toca las coordenadas que recibe", () => {
    const original: [number, number][] = [
      [-17.8, 177.42],
      [-18.2, -178.8],
    ];
    const copia = structuredClone(original);

    sinSaltoDeAntimeridiano(original);

    expect(original).toEqual(copia);
  });

  it("devuelve una lista vacía para una lista vacía", () => {
    expect(sinSaltoDeAntimeridiano([])).toEqual([]);
  });
});
