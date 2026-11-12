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
 *
 * LOS LUGARES NO LLENAN LA BASE
 *
 * La base es la misma de los viajes, y en el plan gratis de Supabase pasa a
 * solo lectura cuando llega a 500 MB: no se rompería solo el mapa, dejarían de
 * guardarse los viajes. Antes de subir un país se mide lo que ocupa la base y
 * se le suma lo que puede agregar la carga; si pasa de TAMANO_MAXIMO, no se
 * toca nada y la carga falla, como con un extracto roto. No hay forma de
 * forzarla: los 100 MB que quedan son para que quien mantiene el sitio se
 * entere y decida.
 */

/** Lo que la carga necesita de la base. Así se prueba sin Supabase. */
export interface BaseDeLugares {
  /** Lo que ocupa hoy toda la base, en bytes. */
  tamano(): Promise<number>;
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

export const MB = 1_000_000;

/**
 * Hasta dónde puede llegar la base con una carga: 100 MB antes de los 500 en
 * los que el plan gratis de Supabase la pasa a solo lectura.
 */
export const TAMANO_MAXIMO = 400 * MB;

/**
 * Lo que puede sumar cada fila mientras se carga, contando sus índices y la
 * versión vieja que queda hasta que Postgres la limpia. Una fila ronda la
 * mitad: la cuenta es a propósito por arriba, mejor frenar un día antes que
 * uno tarde.
 */
export const BYTES_POR_FILA = 1000;

/** "123 MB", para los mensajes. */
export function megas(bytes: number): string {
  return `${Math.round(bytes / MB)} MB`;
}

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

  const ocupa = await base.tamano();
  const puedeSumar = filas.length * BYTES_POR_FILA;

  if (ocupa + puedeSumar > TAMANO_MAXIMO) {
    throw new Error(
      `${pais}: la base ocupa ${megas(ocupa)} y esta carga puede sumarle hasta ${megas(puedeSumar)}: pasaría de ${megas(TAMANO_MAXIMO)}, el tope para no acercarse a los 500 MB en los que el plan gratis de Supabase la pasa a solo lectura. No se toca lo que había. Qué hacer está en "La base se está llenando", en docs/administrar.md.`,
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
