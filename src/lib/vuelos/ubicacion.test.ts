import { describe, expect, it } from "vitest";

import { ubicacionAproximada } from "./ubicacion";

/** Los encabezados de una request, como los arma Vercel. */
function encabezados(valores: Record<string, string>) {
  return new Headers(valores);
}

const BUENOS_AIRES = {
  "x-vercel-ip-latitude": "-34.6",
  "x-vercel-ip-longitude": "-58.38",
  "x-vercel-ip-city": "Buenos%20Aires",
  "x-vercel-ip-country": "AR",
};

describe("ubicacionAproximada", () => {
  it("lee la ubicación que agrega Vercel", () => {
    expect(ubicacionAproximada(encabezados(BUENOS_AIRES))).toEqual({
      lat: -34.6,
      lon: -58.38,
      ciudad: "Buenos Aires",
      pais: "AR",
    });
  });

  it("decodifica la ciudad, que llega codificada para URL", () => {
    const ubicacion = ubicacionAproximada(
      encabezados({ ...BUENOS_AIRES, "x-vercel-ip-city": "S%C3%A3o%20Paulo" }),
    );

    expect(ubicacion?.ciudad).toBe("São Paulo");
  });

  it("sin coordenadas no hay ubicación: es lo que pasa fuera de Vercel", () => {
    expect(ubicacionAproximada(encabezados({}))).toBeNull();
    expect(
      ubicacionAproximada(encabezados({ "x-vercel-ip-latitude": "-34.6" })),
    ).toBeNull();
  });

  it("descarta coordenadas que no son números o están fuera de rango", () => {
    for (const [lat, lon] of [
      ["abc", "-58.38"],
      ["-34.6", ""],
      ["91", "0"],
      ["0", "-181"],
      ["Infinity", "0"],
    ]) {
      expect(
        ubicacionAproximada(
          encabezados({
            "x-vercel-ip-latitude": lat,
            "x-vercel-ip-longitude": lon,
          }),
        ),
      ).toBeNull();
    }
  });

  it("descarta el punto 0, 0, que es lo que devuelve quien no sabe", () => {
    expect(
      ubicacionAproximada(
        encabezados({
          "x-vercel-ip-latitude": "0",
          "x-vercel-ip-longitude": "0",
        }),
      ),
    ).toBeNull();
  });

  it("sin ciudad ni país, igual sirve para sugerir un aeropuerto", () => {
    const ubicacion = ubicacionAproximada(
      encabezados({
        "x-vercel-ip-latitude": "-34.6",
        "x-vercel-ip-longitude": "-58.38",
      }),
    );

    expect(ubicacion).toEqual({
      lat: -34.6,
      lon: -58.38,
      ciudad: null,
      pais: null,
    });
  });

  it("no muestra una ciudad mal codificada o con caracteres que no son de un nombre", () => {
    for (const ciudad of ["%E0%A4%A", "%3Cscript%3E", "Buenos%20Aires%3B"]) {
      expect(
        ubicacionAproximada(
          encabezados({ ...BUENOS_AIRES, "x-vercel-ip-city": ciudad }),
        )?.ciudad,
      ).toBeNull();
    }
  });

  it("no acepta un país que no sea un código de dos letras", () => {
    for (const pais of ["ar", "ARG", "A1"]) {
      expect(
        ubicacionAproximada(
          encabezados({ ...BUENOS_AIRES, "x-vercel-ip-country": pais }),
        )?.pais,
      ).toBeNull();
    }
  });
});
