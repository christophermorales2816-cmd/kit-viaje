import {
  forgetTrip,
  rememberTrip,
  readRecentTrips,
  type RecentTrip,
} from "./storage";

/**
 * El historial de localStorage como store externo, para useSyncExternalStore.
 *
 * Leerlo con un useEffect + setState funciona, pero es exactamente el patrón
 * que React desaconseja: dispara un render en cascada después de cada montaje y
 * no tiene forma de enterarse si el valor cambia en otra pestaña.
 *
 * El snapshot va CACHEADO porque useSyncExternalStore compara por identidad:
 * si getSnapshot devolviera un array nuevo en cada llamada, React vería un
 * cambio en cada render y se quedaría en un loop infinito.
 */

const VACIO: RecentTrip[] = [];

let cache: RecentTrip[] | null = null;

const listeners = new Set<() => void>();

function invalidar(): void {
  cache = null;

  for (const listener of listeners) listener();
}

/** Otra pestaña escribió. Solo llega desde OTROS documentos, nunca del propio. */
function onStorage(): void {
  invalidar();
}

export function subscribeRecentTrips(listener: () => void): () => void {
  listeners.add(listener);

  if (listeners.size === 1) {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0) {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function getRecentTripsSnapshot(): RecentTrip[] {
  cache ??= readRecentTrips(window.localStorage);

  return cache;
}

/**
 * En el servidor no hay historial. Devuelve la MISMA referencia siempre: React
 * también compara por identidad el snapshot del servidor.
 */
export function getRecentTripsServerSnapshot(): RecentTrip[] {
  return VACIO;
}

/** Las dos escrituras, avisando a quien esté suscrito en esta misma pestaña. */

export function remember(trip: RecentTrip): void {
  rememberTrip(window.localStorage, trip);
  invalidar();
}

export function forget(id: string): void {
  forgetTrip(window.localStorage, id);
  invalidar();
}
