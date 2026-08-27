import { redirect } from "next/navigation";

import { TripDashboard } from "@/components/trip/trip-dashboard";
import { resolvePriceFreshness } from "@/lib/budget";
import { fetchQuotes } from "@/lib/quotes";
import { getTripByEditToken } from "@/lib/trips/read";

/**
 * Dashboard privado (spec, sección 6B).
 *
 * Server Component: valida el edit_token contra Supabase y, si no existe,
 * redirige a la landing. Las tablas de sesión están cerradas al cliente, así
 * que esta lectura no se podría hacer desde el browser aunque se quisiera.
 */

/** El token no es contenido público: que no se indexe ni quede en un caché. */
export const metadata = {
  title: "Tu kit de viaje",
  robots: { index: false, follow: false },
};

export default async function TripPage({
  params,
}: PageProps<"/viaje/[editToken]">) {
  const { editToken } = await params;

  const view = await getTripByEditToken(editToken);

  // Un token inválido y uno inexistente se tratan igual, y sin decir cuál fue:
  // la diferencia solo le sirve a quien esté probando tokens.
  if (!view) redirect("/");

  // En paralelo con nada más: las cotizaciones son lo único que falta y su
  // fallo no puede dejar sin lista de equipaje al usuario, por eso fetchQuotes
  // devuelve un resultado en vez de tirar.
  const quotes = await fetchQuotes({
    baseCurrency: view.destination.baseCurrency,
  });

  return (
    <TripDashboard
      view={view}
      quotes={quotes.ok ? quotes.quotes : []}
      quotesError={quotes.ok ? null : quotes.reason}
      // La antigüedad se calcula acá y no en el componente: depende de
      // `new Date()`, y calcularla durante el render del cliente daría un valor
      // distinto al del HTML del servidor.
      freshness={resolvePriceFreshness(view.budget.map((line) => line.product))}
    />
  );
}
