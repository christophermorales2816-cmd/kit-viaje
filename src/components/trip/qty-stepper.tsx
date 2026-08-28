"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { MAX_ITEM_QTY } from "@/lib/trips/validate";

/**
 * Cantidad editable de un ítem.
 *
 * Los botones +/- confirman en el momento; el campo de texto recién al salir o
 * al apretar Enter. Es la diferencia entre una escritura por tap y una por
 * tecla: escribir "12" mandaría un guardado con 1 y otro con 12, y el primero
 * puede llegar después del segundo.
 */
export function QtyStepper({
  value,
  onCommit,
  label,
  disabled = false,
}: {
  value: number;
  onCommit: (qty: number) => void;
  /** Para el lector de pantalla: "Cantidad de Medias". */
  label: string;
  disabled?: boolean;
}) {
  // Borrador local mientras se escribe. Puede quedar vacío o a medias, así que
  // no es un number: forzarlo a número en cada tecla haría que borrar el campo
  // valga 0 y el input salte a "0".
  const [borrador, setBorrador] = useState<string | null>(null);

  const mostrado = borrador ?? String(value);

  function confirmar() {
    if (borrador === null) return;

    const parsed = Number(borrador);

    // Fuera de rango o basura: vuelve a lo que había, sin molestar con un error
    // por un tipeo. La cota real la ponen la Server Action y la base.
    if (
      Number.isInteger(parsed) &&
      parsed >= 1 &&
      parsed <= MAX_ITEM_QTY &&
      parsed !== value
    ) {
      onCommit(parsed);
    }

    setBorrador(null);
  }

  function ajustar(delta: number) {
    const siguiente = Math.min(Math.max(value + delta, 1), MAX_ITEM_QTY);

    if (siguiente !== value) onCommit(siguiente);
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => ajustar(-1)}
        disabled={disabled || value <= 1}
        aria-label={`Restar uno a ${label}`}
        className="flex size-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
      >
        <Minus className="size-3.5" />
      </button>

      <Input
        type="text"
        inputMode="numeric"
        value={mostrado}
        disabled={disabled}
        aria-label={`Cantidad de ${label}`}
        onChange={(event) => setBorrador(event.target.value)}
        onBlur={confirmar}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            event.currentTarget.blur();
          }

          if (event.key === "Escape") setBorrador(null);
        }}
        className="h-8 w-14 text-center tabular-nums"
      />

      <button
        type="button"
        onClick={() => ajustar(1)}
        disabled={disabled || value >= MAX_ITEM_QTY}
        aria-label={`Sumar uno a ${label}`}
        className="flex size-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
