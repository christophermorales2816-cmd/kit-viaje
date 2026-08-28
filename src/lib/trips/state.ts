/**
 * Estado del formulario de creación de viaje.
 *
 * Vive acá y no en el archivo de la Server Action porque un módulo con
 * `"use server"` solo puede exportar funciones async: Next convierte cada
 * export en una referencia RPC. Una constante exportada desde ahí llega como
 * `undefined` al cliente, y el error recién aparece al renderizar —el build
 * fallaba con "Cannot read properties of undefined (reading 'length')"—, no al
 * compilar. Los tipos sí pueden vivir en el archivo de la acción porque se
 * borran, pero tenerlos juntos evita la pregunta.
 */

export interface CreateTripState {
  errors: string[];
}

export const EMPTY_CREATE_TRIP_STATE: CreateTripState = { errors: [] };
