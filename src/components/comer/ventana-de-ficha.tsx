"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";

/**
 * La ficha de un plato abierta encima del catálogo (spec, 18.3).
 *
 * La URL ya es la del plato —se puede copiar y compartir—, y cerrar la
 * ventana es volver atrás: el botón de volver del teléfono la cierra, como
 * se espera. Con un link directo o al recargar no hay ventana: se ve la
 * página del plato entera (src/app/que-comer/[slug]/[plato]).
 */
export function VentanaDeFicha({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(abierta) => {
        if (!abierta) router.back();
      }}
    >
      <DialogContent
        // El título de la ficha es el del diálogo; la descripción es la ficha
        // entera, que se lee siguiendo.
        aria-describedby={undefined}
        // Una sola columna que no crece más que la ventana: sin esto, la fila
        // de ciudades del mapa la ensancha y la ficha se corre de costado.
        className="top-0 left-0 h-dvh max-w-none translate-x-0 translate-y-0 grid-cols-[minmax(0,1fr)] overflow-x-hidden overflow-y-auto rounded-none p-5 sm:top-[50%] sm:left-[50%] sm:h-auto sm:max-h-[90dvh] sm:max-w-2xl sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-xl sm:p-8"
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
