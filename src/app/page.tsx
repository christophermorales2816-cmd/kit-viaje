import { Luggage, Wallet } from "lucide-react";

import { CreateTripPanel } from "@/components/landing/create-trip-panel";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12">
      <div className="flex max-w-lg flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Qué llevar y cuánto vas a gastar
        </h1>
        <p className="text-muted-foreground text-balance">
          Decinos cuándo viajás a Buenos Aires y qué tipo de viaje es. Armamos el
          equipaje según el clima de esas fechas y el presupuesto convertido a la
          cotización que quieras mirar. Sin registro.
        </p>
      </div>

      <CreateTripPanel />

      <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <span className="flex items-center gap-2">
          <Luggage className="size-4" />
          Equipaje por clima y tipo de viaje
        </span>
        <span className="flex items-center gap-2">
          <Wallet className="size-4" />
          Presupuesto en oficial, blue, MEP o CCL
        </span>
      </div>
    </main>
  );
}
