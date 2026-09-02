"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowRight, X } from "lucide-react";

import {
  forget,
  getRecentTripsServerSnapshot,
  getRecentTripsSnapshot,
  subscribeRecentTrips,
} from "@/lib/trips/recent-store";

/**
 * "Tus viajes recientes" (spec, sección 6C).
 *
 * Es conveniencia de cliente, no autenticación: si el usuario cambia de
 * navegador o de dispositivo, esto no lo sigue. Por eso el dashboard insiste
 * con guardar el link.
 *
 * useSyncExternalStore y no useEffect + useState: localStorage no existe en el
 * servidor, así que el HTML se renderiza con el snapshot vacío y recién después
 * de hidratar aparece el historial. Es el mismo resultado visual que un efecto,
 * sin el render en cascada — y de paso la lista se actualiza si el usuario crea
 * un viaje en otra pestaña.
 */
export function RecentTrips() {
  const trips = useSyncExternalStore(
    subscribeRecentTrips,
    getRecentTripsSnapshot,
    getRecentTripsServerSnapshot,
  );

  if (trips.length === 0) return null;

  // El espaciado va adentro y no en quien lo usa: este componente devuelve
  // null cuando no hay historial, y un contenedor con padding por fuera deja
  // una franja vacía para quien entra por primera vez.
  return (
    <section className="w-full max-w-md pt-4">
      <h2 className="mb-3 text-sm font-medium text-muted-foreground">
        Tus viajes recientes
      </h2>

      <ul className="flex flex-col gap-2">
        {trips.map((trip) => (
          <li key={trip.id} className="flex items-center gap-1">
            <Link
              href={`/viaje/${trip.editToken}`}
              className="flex flex-1 items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:bg-accent"
            >
              <span className="font-medium">{trip.destinationName}</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Link>

            <button
              type="button"
              onClick={() => forget(trip.id)}
              // Saca el viaje de ESTA lista. El viaje sigue existiendo y el
              // link sigue funcionando: borrar de verdad no es del MVP, y una X
              // que destruye datos sin confirmación sería otra cosa.
              aria-label={`Sacar ${trip.destinationName} de la lista`}
              title="Sacar de la lista"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
