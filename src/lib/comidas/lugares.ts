import type { TipoDeLugarOsm } from "@/content/comidas/types";

/**
 * Un lugar que sirve un plato, tal como llega de OpenStreetMap (spec, 18.4).
 *
 * Es lo que viaja del servidor al mapa: lo justo para dibujarlo, nombrarlo y
 * decir cuán al día está. Lo demás de OpenStreetMap —quién lo editó, sus
 * etiquetas internas— no sale del servidor.
 */
export interface LugarDeComida {
  /** Como en la URL de OpenStreetMap: "node/123", "way/456". */
  id: string;
  /** null si en OpenStreetMap no tiene nombre: pasa con muchos puestos. */
  nombre: string | null;
  /** El nombre en alfabeto latino, si el de allá no lo está: "Ichiran". */
  nombreLatino: string | null;
  lat: number;
  lon: number;
  tipo: TipoDeLugarOsm;
  direccion: string | null;
  /** El horario tal como está en OpenStreetMap ("Mo-Fr 11:00-22:00"). */
  horario: string | null;
  /** Solo http o https. */
  web: string | null;
  telefono: string | null;
  /** Cuándo alguien fue y confirmó que sigue ahí (`check_date`): YYYY-MM-DD o YYYY-MM. */
  verificado: string | null;
  /** La última edición en OpenStreetMap: YYYY-MM-DD. */
  editado: string | null;
}

/** Los lugares de una celda, con la hora en que se le preguntaron a OpenStreetMap. */
export interface LugaresDeLaCelda {
  celda: string;
  /** ISO. */
  actualizado: string;
  lugares: LugarDeComida[];
  /** Si había más de los que se traen por celda: el mapa lo avisa. */
  recortado: boolean;
}

/**
 * Hasta qué edad los lugares de una celda se consideran al día: un día.
 *
 * Más viejos se muestran igual, con su fecha, mientras se renuevan: la API los
 * sirve sin caché y el mapa los vuelve a pedir (src/app/api/que-comer/lugares).
 */
export const VIGENCIA_S = 86_400;

/**
 * Cuántos años sin ningún cambio hacen dudar de que un lugar siga abierto.
 *
 * OpenStreetMap no se entera solo de que algo cerró: alguien tiene que ir y
 * cambiarlo. Un lugar que nadie tocó en años puede estar perfecto o puede ser
 * una persiana baja. No se esconde —sería esconder la mayoría en muchas
 * ciudades—, pero se dice.
 */
export const ANOS_SIN_NOVEDADES = 4;

/**
 * Si conviene avisar que un lugar puede haber cerrado: nadie lo confirmó y no
 * se tocó en ANOS_SIN_NOVEDADES años.
 */
export function sinNovedades(lugar: LugarDeComida, hoy: Date): boolean {
  if (lugar.verificado) return false;
  if (!lugar.editado) return true;

  const limite = new Date(hoy);
  limite.setUTCFullYear(limite.getUTCFullYear() - ANOS_SIN_NOVEDADES);

  return new Date(`${lugar.editado}T00:00:00Z`) < limite;
}

/** El año de la última novedad: de la verificación o, si no hay, de la edición. */
export function anoDeLaUltimaNovedad(lugar: LugarDeComida): string | null {
  return (lugar.verificado ?? lugar.editado)?.slice(0, 4) ?? null;
}

/** Su ficha en OpenStreetMap, donde cualquiera puede corregirlo. */
export function urlEnOpenStreetMap(lugar: Pick<LugarDeComida, "id">): string {
  return `https://www.openstreetmap.org/${lugar.id}`;
}

/**
 * Para dejar una nota en OpenStreetMap en ese punto: "esto cerró", "acá abrió
 * una taquería". No hace falta cuenta, y un voluntario la revisa.
 */
export function urlParaAvisar(lat: number, lon: number): string {
  return `https://www.openstreetmap.org/note/new#map=18/${lat.toFixed(5)}/${lon.toFixed(5)}`;
}

/**
 * Cómo llegar, en el mapa que cada uno tenga en el teléfono.
 *
 * Es un link común a Google Maps con las coordenadas, no su API: abrir un mapa
 * con un punto no tiene costo ni pide clave.
 */
export function urlParaLlegar(lat: number, lon: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat.toFixed(6)},${lon.toFixed(6)}`;
}
