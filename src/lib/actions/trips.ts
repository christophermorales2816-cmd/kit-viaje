"use server";

import { redirect } from "next/navigation";

import { MVP_CORRIDOR } from "@/lib/domain";
import { fetchReferenceData } from "@/lib/supabase/reference";
import { createTrip } from "@/lib/supabase/trips";
import type { CreatedTrip } from "@/lib/supabase/trips";
import { buildTripDraft } from "@/lib/trips/draft";
import { parseTripInput } from "@/lib/trips/input";

/**
 * Server Action de la landing (spec, sección 6A).
 *
 * Valida, corre los dos motores, persiste y redirige a /viaje/{edit_token}.
 * Toda la lógica que se puede testear vive afuera: acá solo queda el pegamento
 * y la I/O.
 */

export interface CreateTripState {
  errors: string[];
}

export const EMPTY_CREATE_TRIP_STATE: CreateTripState = { errors: [] };

export async function createTripAction(
  _previous: CreateTripState,
  formData: FormData,
): Promise<CreateTripState> {
  const parsed = parseTripInput({
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    tripType: formData.get("tripType"),
  });

  if (!parsed.ok) {
    return { errors: parsed.errors };
  }

  let created: CreatedTrip;

  try {
    const reference = await fetchReferenceData(MVP_CORRIDOR);
    const draft = buildTripDraft(parsed.value, reference);

    created = await createTrip({
      destinationId: reference.destination.id,
      input: parsed.value,
      draft,
    });
  } catch (error) {
    // El detalle va al log del servidor; al usuario le llega algo accionable.
    console.error("Falló la creación del viaje", error);
    return {
      errors: ["No pudimos crear el viaje. Probá de nuevo en un momento."],
    };
  }

  // redirect() FUERA del try. Señaliza tirando una excepción, así que
  // atraparla arriba convertiría un redirect exitoso en un mensaje de error
  // con el viaje ya creado en la base.
  redirect(`/viaje/${created.editToken}`);
}
