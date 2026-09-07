import "server-only";

import { adminClient } from "@/lib/supabase/admin";
import { getDestination } from "@/lib/supabase/reference";

import { TripWriteError } from "./errors";
import type { TripRecord } from "./types";
import type { TripInput } from "./validate";

/**
 * Creación de un viaje (spec, sección 6A, paso 2).
 *
 * Crea la fila de `trips` y nada más.
 *
 * NO GUARDA ÍTEMS, Y ESO ES EL DISEÑO
 *
 * Antes insertaba las dos listas completas —unas cincuenta filas por viaje—
 * todas con cantidad cero. Cincuenta filas que dicen "ninguno" no son datos:
 * son el estado inicial escrito a mano. Y además obligaban a que la base
 * aceptara `qty = 0`, que es exactamente el check que rompía la creación
 * cuando la migración no estaba aplicada.
 *
 * Ahora una fila existe solo si el usuario eligió algo. La lista se genera al
 * leer el viaje (`read.ts`) y las filas guardadas se superponen encima. Nunca
 * se escribe un cero, así que el `check (qty > 0)` viejo no se puede disparar
 * y el viaje se crea igual contra una base sin migrar.
 *
 * Como no hay segundo insert, tampoco hace falta el borrado compensatorio que
 * limpiaba un viaje a medias.
 */

const TRIP_COLUMNS =
  "id, destination_id, start_date, end_date, trip_type, edit_token, share_slug";

interface TripRow {
  id: string;
  destination_id: string;
  start_date: string;
  end_date: string;
  trip_type: string;
  edit_token: string;
  share_slug: string;
}

export function toTripRecord(row: TripRow): TripRecord {
  return {
    id: row.id,
    destinationId: row.destination_id,
    startDate: row.start_date,
    endDate: row.end_date,
    // El check trip_type de la tabla espeja TRIP_TYPES, así que el cast no
    // esconde nada que la base no garantice ya.
    tripType: row.trip_type as TripRecord["tripType"],
    editToken: row.edit_token,
    shareSlug: row.share_slug,
  };
}

export { TRIP_COLUMNS };
export type { TripRow };

export async function createTrip(input: TripInput): Promise<TripRecord> {
  const destination = await getDestination();

  const { data, error } = await adminClient()
    .from("trips")
    .insert({
      destination_id: destination.id,
      start_date: input.startDate,
      end_date: input.endDate,
      trip_type: input.tripType,
    })
    // edit_token y share_slug los genera la base (defaults de la migración),
    // así que hay que leerlos de vuelta: son el único modo de volver al viaje.
    .select(TRIP_COLUMNS)
    .single();

  if (error || !data) {
    throw new TripWriteError(
      `No se pudo crear el viaje: ${error?.message ?? "la base no devolvió la fila."}`,
      error?.code ?? null,
    );
  }

  return toTripRecord(data);
}
