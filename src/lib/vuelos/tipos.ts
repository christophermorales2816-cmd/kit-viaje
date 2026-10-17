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
