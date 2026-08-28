/**
 * Historial de viajes en el browser (spec, sección 6C).
 *
 * "Un array [{ id, destination_name, edit_token }] — no solo el último trip."
 *
 * Es CONVENIENCIA, NO AUTENTICACIÓN. Vive en el localStorage de un navegador:
 * si el usuario cambia de dispositivo, entra en incógnito o limpia el sitio, se
 * pierde. El link guardado es la única vía real de volver, y por eso el
 * dashboard lo dice en pantalla.
 *
 * Las funciones son puras y reciben el storage como argumento: así se testean
 * sin browser, y el módulo no explota si alguien lo importa desde el servidor.
 */

export interface RecentTrip {
  id: string;
  destinationName: string;
  /** El token privado. Sí, en localStorage: es exactamente el link del usuario. */
  editToken: string;
}

export const RECENT_TRIPS_KEY = "kit-viaje:trips";

/**
 * Tope del historial. No hay razón de negocio; es para que un usuario que crea
 * viajes de prueba no termine con una landing que es una lista de 40 links.
 */
export const MAX_RECENT_TRIPS = 8;

function isRecentTrip(value: unknown): value is RecentTrip {
  if (!value || typeof value !== "object") return false;

  const trip = value as Record<string, unknown>;

  return (
    typeof trip.id === "string" &&
    typeof trip.destinationName === "string" &&
    typeof trip.editToken === "string" &&
    trip.editToken.length > 0
  );
}

/**
 * Lee el historial descartando lo que no tenga la forma esperada.
 *
 * Nunca tira. El contenido lo escribió una versión anterior de esta misma app o
 * un usuario con la consola abierta: que un JSON corrupto rompa la landing
 * entera sería peor que perder el historial.
 */
export function readRecentTrips(storage: Pick<Storage, "getItem">): RecentTrip[] {
  let raw: string | null;

  try {
    raw = storage.getItem(RECENT_TRIPS_KEY);
  } catch {
    // Safari en modo privado tira al tocar localStorage.
    return [];
  }

  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed.filter(isRecentTrip) : [];
  } catch {
    return [];
  }
}

/**
 * Agrega o actualiza un viaje y lo deja primero.
 *
 * Dedup por id y no por token: si un viaje se abre dos veces la entrada tiene
 * que ser una sola, y el token es el mismo dato con otra forma.
 */
export function upsertRecentTrip(
  trips: RecentTrip[],
  trip: RecentTrip,
): RecentTrip[] {
  const resto = trips.filter((candidate) => candidate.id !== trip.id);

  return [trip, ...resto].slice(0, MAX_RECENT_TRIPS);
}

/** Guarda, tragándose el fallo: quedarse sin historial no rompe nada. */
export function writeRecentTrips(
  storage: Pick<Storage, "setItem">,
  trips: RecentTrip[],
): void {
  try {
    storage.setItem(RECENT_TRIPS_KEY, JSON.stringify(trips));
  } catch {
    // Cuota llena o storage bloqueado. No hay nada que el usuario pueda hacer
    // y el viaje sigue existiendo del lado del servidor.
  }
}

export function rememberTrip(
  storage: Pick<Storage, "getItem" | "setItem">,
  trip: RecentTrip,
): RecentTrip[] {
  const actualizado = upsertRecentTrip(readRecentTrips(storage), trip);

  writeRecentTrips(storage, actualizado);

  return actualizado;
}

export function forgetTrip(
  storage: Pick<Storage, "getItem" | "setItem">,
  id: string,
): RecentTrip[] {
  const restante = readRecentTrips(storage).filter((trip) => trip.id !== id);

  writeRecentTrips(storage, restante);

  return restante;
}
