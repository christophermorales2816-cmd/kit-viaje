import Link from "next/link";

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
 */
export function CitySwitcher({
  guideSlug,
  destinations,
  current,
}: {
  guideSlug: string;
  destinations: Destination[];
  current: Destination;
}) {
  if (destinations.length < 2) return null;

  return (
    <nav aria-label="Ciudad" className="flex flex-col gap-2">
      <p className="text-muted-foreground text-sm">
        El clima cambia mucho dentro del país. Estos números son de{" "}
        <strong className="text-foreground font-medium">{current.name}</strong>.
      </p>

      <ul className="flex flex-wrap gap-2">
        {destinations.map((destino) => {
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
    </nav>
  );
}
