"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { aeropuertoPorIata } from "./aeropuertos";
import { COOKIE_DE_ORIGEN, opcionesDeLaCookie } from "./origen";

/**
 * Elegir y olvidar el aeropuerto de salida (spec, 17.3).
 *
 * Son formularios comunes con una Server Action: funcionan aunque la página
 * todavía no haya terminado de cargar el JavaScript. Como toda Server Action,
 * son endpoints públicos, así que lo que llega se valida contra la lista: un
 * código que no existe no se guarda.
 *
 * Las dos terminan en `/vuelos`, que es donde está el selector. El redirect
 * también limpia la búsqueda de la URL: después de elegir, la lista de
 * resultados ya no tiene sentido.
 */

export async function elegirOrigenAction(formData: FormData): Promise<void> {
  const aeropuerto = aeropuertoPorIata(formData.get("iata"));

  if (aeropuerto) {
    (await cookies()).set(
      COOKIE_DE_ORIGEN,
      aeropuerto.iata,
      opcionesDeLaCookie(),
    );
  }

  redirect("/vuelos");
}

export async function olvidarOrigenAction(): Promise<void> {
  (await cookies()).delete(COOKIE_DE_ORIGEN);

  redirect("/vuelos");
}
