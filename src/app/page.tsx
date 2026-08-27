import { Luggage, Wallet } from "lucide-react";

import { GlobeHero } from "@/components/landing/globe-hero";
import { RecentTrips } from "@/components/landing/recent-trips";

/**
 * Landing (spec, sección 6A).
 *
 * Server Component sin formulario tradicional: el globo es la entrada. Todo lo
 * interactivo vive en GlobeHero y RecentTrips.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-12 px-6 py-12 md:py-20">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="flex max-w-md flex-col gap-5 text-center md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Tu kit de viaje a Buenos Aires
          </h1>

          <p className="text-lg text-pretty text-muted-foreground">
            Qué llevar y cuánto vas a gastar, en la misma pantalla. Elegí las
            fechas y el tipo de viaje: el resto lo armamos nosotros.
          </p>

          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Luggage className="size-4 shrink-0 text-foreground" />
              Equipaje según el clima del mes y el tipo de viaje
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Wallet className="size-4 shrink-0 text-foreground" />
              Presupuesto en pesos, convertido a la cotización que elijas
            </li>
          </ul>
        </div>

        {/*
          El panel oscuro no es decoración suelta: cobe dibuja el globo con
          iluminación para fondo oscuro, y sobre el fondo claro de la app el
          borde de la esfera se pierde.
        */}
        <div className="w-full max-w-[460px] rounded-2xl bg-slate-950 p-6 md:p-8">
          <GlobeHero />

          <p className="mt-2 text-center text-sm text-slate-400">
            Tocá el marcador para empezar
          </p>
        </div>
      </div>

      <RecentTrips />
    </main>
  );
}
