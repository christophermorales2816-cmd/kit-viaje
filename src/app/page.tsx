import { Luggage, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Placeholder de scaffold. La landing real (globo interactivo + slide-over de
 * fechas y tipo de viaje) se implementa en la sección 6 del spec.
 */
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border bg-card p-8 text-card-foreground">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Kit de viaje
          </h1>
          <p className="text-sm text-muted-foreground">
            Equipaje y presupuesto para Buenos Aires, sin registro. Proyecto
            inicializado — todavía sin lógica de negocio.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Luggage className="text-foreground" />
            <span>Motor de equipaje — pendiente (sección 4)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="text-foreground" />
            <span>Motor de presupuesto — pendiente (sección 5)</span>
          </div>
        </div>

        <Button disabled>Empezar un viaje</Button>
      </div>
    </main>
  );
}
