import Link from "next/link";

import { groupCitiesByRegion } from "@/lib/prepare/group-cities";
import type { Destination } from "@/lib/supabase/reference";

/**
 * Elegir de qué ciudad habla la página (spec, sección 11.4).
 *
 * Son enlaces y no un control con JavaScript: la ciudad va en la URL, así que
 * el estado es compartible, indexable y sobrevive a recargar. Poner esto en un
 * `<select>` con estado de cliente convertiría un link en algo que no se puede
 * mandar por WhatsApp.
 *
 * `scroll={false}` porque el lector ya está mirando esta zona: saltar arriba al
 * cambiar de ciudad le esconde justo lo que quería comparar.
 *
 * Las ciudades van agrupadas por región (12.4). Con seis, una sola tira se leía
 * de un vistazo; con quince era un bloque en el que no se encontraba nada, y la
 * región es además el dato que ayuda a elegir: Yungas contra Altiplano dice más
 * que los dos nombres juntos.
 */
export function CitySwitcher({
  guideSlug,
  destinations,
  current,
  regionBySlug,
}: {
  guideSlug: string;
  destinations: Destination[];
  current: Destination;
  regionBySlug: Record<string, string>;
}) {
  if (destinations.length < 2) return null;

  return (
    <nav aria-label="Ciudad" className="flex flex-col gap-4">
      <p className="text-muted-foreground text-sm">
        El clima cambia mucho dentro del país. Estos números son de{" "}
        <strong className="text-foreground font-medium">{current.name}</strong>.
      </p>

      {groupCitiesByRegion(destinations, regionBySlug).map((grupo) => (
        <div key={grupo.region ?? "sin-region"} className="flex flex-col gap-2">
          {grupo.region !== null && (
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              {grupo.region}
            </p>
          )}

          <ul className="flex flex-wrap gap-2">
            {grupo.destinations.map((destino) => {
              const elegida = destino.id === current.id;

              return (
                <li key={destino.id}>
                  <Link
                    href={`/guia/${guideSlug}/preparar?ciudad=${destino.slug}`}
                    scroll={false}
                    aria-current={elegida ? "page" : undefined}
                    className={
                      elegida
                        ? "border-foreground bg-foreground text-background rounded-full border px-4 py-2 text-sm"
                        : "hover:bg-muted rounded-full border px-4 py-2 text-sm transition-colors"
                    }
                  >
                    {destino.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
