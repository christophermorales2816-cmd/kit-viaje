"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";

import { esRutaDeViaje, redactarUrl } from "@/lib/seguridad/privacidad";

/**
 * Vercel Web Analytics sin los links privados de los viajes.
 *
 * DOS CAPAS, PORQUE UNA SOLA NO SE PUEDE VERIFICAR
 *
 * El paquete le pasa al script remoto de Vercel la ruta y el path completo de
 * cada página. `beforeSend` permite reescribir la URL del evento, pero el
 * script es de Vercel y no se puede leer qué más manda. Así que:
 *
 *   1. En las páginas de un viaje el componente no se monta: no hay evento que
 *      redactar porque no hay evento.
 *   2. En el resto, `beforeSend` borra cualquier token que aparezca en la URL,
 *      por si algún día una página nueva lo lleva en otro lado.
 *
 * Se pierde el conteo de visitas al dashboard. Es el precio de que la llave de
 * edición de cada viaje no termine en un panel de terceros.
 */
export function Analytics() {
  const pathname = usePathname();

  if (esRutaDeViaje(pathname)) return null;

  return (
    <VercelAnalytics
      beforeSend={(event) => ({ ...event, url: redactarUrl(event.url) })}
    />
  );
}
