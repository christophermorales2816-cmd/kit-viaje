import type { FilaDeLugar } from "./extracto";

/**
 * La carga de los lugares de un país en la base, una vez por día (spec, 18.10).
 *
 * Sube las filas de a tandas, con la corrida de hoy, y recién al final borra
 * lo que quedó de corridas anteriores —los lugares que ya no están o
 * cerraron— y anota de cuándo son los datos. Si algo falla en el medio, el
 * mapa sigue con lo de ayer más lo que ya se subió, nunca vacío.
 *
 * UN EXTRACTO ROTO NO BORRA EL MAPA
 *
 * Si el extracto trae muchos menos lugares que la vez anterior —menos de
 * PARTE_MINIMA—, lo más probable es que haya bajado mal o que algo cambió en
 * el camino, no que media ciudad haya cerrado en un día. Entonces no se toca
 * nada y la carga falla: GitHub le avisa a quien mantiene el sitio, y el mapa
 * sigue con los datos anteriores y su fecha. Si la baja es a propósito —un PR
 * sacó platos del catálogo—, se corre a mano aceptando menos lugares
 * (docs/administrar.md).
 */

/** Lo que la carga necesita de la base. Así se prueba sin Supabase. */
export interface BaseDeLugares {
  /** Cuántos lugares tenía el país en la última carga; null si nunca tuvo. */
  lugaresAnteriores(pais: string): Promise<number | null>;
  subir(
    pais: string,
    filas: readonly FilaDeLugar[],
    corrida: string,
  ): Promise<void>;
  /** Borra las filas del país de corridas anteriores a esta. */
  borrarAnteriores(pais: string, corrida: string): Promise<void>;
  registrar(extracto: {
    pais: string;
    datosDel: string;
    procesado: string;
    lugares: number;
  }): Promise<void>;
}

/** Por debajo de esta parte de los lugares de la vez anterior, el extracto se toma como roto. */
export const PARTE_MINIMA = 0.5;

/** Filas por pedido a la base: lejos del límite de tamaño de un pedido. */
export const FILAS_POR_TANDA = 500;

export async function cargarLugares(
  base: BaseDeLugares,
  pais: string,
  filas: readonly FilaDeLugar[],
  {
    datosDel,
    corrida,
    aceptarMenos = false,
  }: { datosDel: Date; corrida: Date; aceptarMenos?: boolean },
): Promise<{ filas: number; lugares: number }> {
  const lugares = new Set(filas.map((fila) => fila.osm)).size;
  const anteriores = await base.lugaresAnteriores(pais);

  if (lugares === 0) {
    throw new Error(
      `${pais}: el extracto no trajo ningún lugar. Parece roto: no se toca lo que había.`,
    );
  }

  if (
    !aceptarMenos &&
    anteriores !== null &&
    lugares < anteriores * PARTE_MINIMA
  ) {
    throw new Error(
      `${pais}: el extracto trajo ${lugares} lugares y la vez anterior había ${anteriores}. Parece roto: no se toca lo que había. Si la baja es a propósito, correlo aceptando menos lugares.`,
    );
  }

  const deEstaCorrida = corrida.toISOString();

  for (let desde = 0; desde < filas.length; desde += FILAS_POR_TANDA) {
    await base.subir(
      pais,
      filas.slice(desde, desde + FILAS_POR_TANDA),
      deEstaCorrida,
    );
  }

  await base.borrarAnteriores(pais, deEstaCorrida);
  await base.registrar({
    pais,
    datosDel: datosDel.toISOString(),
    procesado: new Date().toISOString(),
    lugares,
  });

  return { filas: filas.length, lugares };
}
