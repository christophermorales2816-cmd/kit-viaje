import { redirect } from "next/navigation";

import { TripDashboard } from "@/components/trip/trip-dashboard";
import { resolvePriceFreshness } from "@/lib/budget";
import { fetchQuotes } from "@/lib/quotes";
import { getTripByShareSlug } from "@/lib/trips/read";

/**
 * Vista compartida, solo lectura (spec, sección 6D).
 *
 * Mismo componente que el dashboard. La diferencia no es un prop: es que
 * getTripByShareSlug devuelve `editToken: null` y el viaje sin ese campo en el
 * tipo, así que el token no llega al payload RSC ni por accidente.
 *
 * La ruta no colisiona con /viaje/{edit_token}: son tres segmentos contra dos,
 * y Next resuelve el segmento estático "ver" antes que el dinámico.
 */

export const metadata = {
  title: "Kit de viaje compartido",
  robots: { index: false, follow: false },
};

export default async function SharedTripPage({
  params,
}: PageProps<"/viaje/ver/[shareSlug]">) {
  const { shareSlug } = await params;

  const view = await getTripByShareSlug(shareSlug);

  if (!view) redirect("/");

  const quotes = await fetchQuotes({
    baseCurrency: view.destination.baseCurrency,
  });

  return (
    <TripDashboard
      view={view}
      quotes={quotes.ok ? quotes.quotes : []}
      quotesError={quotes.ok ? null : quotes.reason}
      freshness={resolvePriceFreshness(view.budget.map((line) => line.product))}
    />
  );
}
