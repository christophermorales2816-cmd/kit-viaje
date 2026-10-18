/**
 * Los tipos de la sección de vuelos que cruzan al navegador (spec, 17).
 *
 * Viven aparte de aeropuertos.ts a propósito: ese módulo carga la lista entera
 * y es solo del servidor, y un componente de cliente que importara de ahí un
 * tipo arrastraría el riesgo de importar también los datos. Acá no hay nada que
 * pese.
 */

/** Los tipos de OurAirports que entran a la lista, con nombre propio. */
export type TipoDeAeropuerto =
  | "grande"
  | "mediano"
  | "chico"
  | "hidroaeropuerto";

/** Lo que el navegador necesita para mostrar un aeropuerto y elegirlo. */
export interface AeropuertoResumido {
  iata: string;
  nombre: string;
  /** La ciudad como la escribe OurAirports; puede venir vacía. */
  ciudad: string;
  /** El nombre del país en castellano, listo para mostrar. */
  pais: string;
  tipo: TipoDeAeropuerto;
  /** Solo cuando el aeropuerto sale de una búsqueda por cercanía. */
  distanciaKm?: number;
}

/** Un punto de la grilla de zonas del radar (zona.ts). */
export interface CentroDeZona {
  lat: number;
  lon: number;
}

/** Un avión en el aire, como lo muestra el radar (spec, 17.5). */
export interface AvionEnVuelo {
  /** El código de su transpondedor. Lo tiene aunque no transmita su vuelo. */
  hex: string;
  /** El vuelo o indicativo que transmite: "ARG1302". */
  vuelo: string | null;
  /** El modelo, con su código OACI: "A320", "B738". */
  modelo: string | null;
  matricula: string | null;
  lat: number;
  lon: number;
  /** Hacia dónde va, en grados desde el norte. */
  rumbo: number | null;
  altitudM: number;
  velocidadKmH: number | null;
}

/** Lo que vuela en una zona en este momento, y cuánto vuela en el mundo. */
export interface ZonaEnVivo {
  centro: CentroDeZona;
  radioKm: number;
  /** El aeropuerto que le da nombre a la zona, si hay uno grande cerca. */
  referencia: AeropuertoResumido | null;
  /** Cuándo armó adsb.lol estos datos, en ISO 8601. */
  actualizado: string;
  /** Los aviones que ve adsb.lol en todo el mundo, si respondió. */
  totalGlobal: number | null;
  aviones: AvionEnVuelo[];
}
