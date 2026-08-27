"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { formatCategory, formatWeight } from "@/lib/format";
import type { TripPackingEntry } from "@/lib/trips/types";

import { QtyStepper } from "./qty-stepper";

/**
 * Lista de equipaje (spec, sección 6B).
 *
 * "checkbox + cantidad editables, peso total informativo". El peso no trunca la
 * lista ni bloquea nada (sección 4): dice cuánto pesa lo que ya está.
 */

function agruparPorCategoria(
  entries: TripPackingEntry[],
): [string, TripPackingEntry[]][] {
  const grupos = new Map<string, TripPackingEntry[]>();

  // Las entradas ya vienen ordenadas por categoría y nombre desde el motor y
  // desde la lectura, así que recorrerlas en orden alcanza para que los grupos
  // salgan en orden y sin ordenar de nuevo.
  for (const entry of entries) {
    const grupo = grupos.get(entry.item.category);

    if (grupo) grupo.push(entry);
    else grupos.set(entry.item.category, [entry]);
  }

  return [...grupos];
}

export function PackingList({
  entries,
  totalWeightG,
  isReadOnly,
  onToggle,
  onQty,
}: {
  entries: TripPackingEntry[];
  totalWeightG: number;
  isReadOnly: boolean;
  onToggle: (itemId: string, checked: boolean) => void;
  onQty: (itemId: string, qty: number) => void;
}) {
  if (entries.length === 0) {
    return (
      <p className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
        No se generó ningún ítem para este viaje. Puede que falten datos de
        clima o de catálogo para el mes y el tipo de viaje elegidos.
      </p>
    );
  }

  const listos = entries.filter((entry) => entry.checked).length;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border bg-muted/40 px-4 py-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {listos} de {entries.length}
          </span>{" "}
          {listos === 1 ? "ítem listo" : "ítems listos"}
        </p>
        <p className="text-sm text-muted-foreground">
          Peso total{" "}
          <span className="font-medium text-foreground tabular-nums">
            {formatWeight(totalWeightG)}
          </span>
        </p>
      </div>

      {agruparPorCategoria(entries).map(([categoria, items]) => (
        <section key={categoria} className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {formatCategory(categoria)}
          </h3>

          <ul className="divide-y rounded-lg border">
            {items.map((entry) => (
              <li
                key={entry.item.id}
                className="flex items-center gap-3 px-4 py-3"
              >
                {isReadOnly ? (
                  // En solo lectura el estado se muestra como texto, no como un
                  // control apagado: un checkbox deshabilitado invita a
                  // clickearlo (spec, sección 6D).
                  <span
                    aria-hidden
                    className="w-4 text-center text-sm text-muted-foreground"
                  >
                    {entry.checked ? "✓" : "·"}
                  </span>
                ) : (
                  <Checkbox
                    checked={entry.checked}
                    onCheckedChange={(checked) =>
                      onToggle(entry.item.id, checked === true)
                    }
                    aria-label={`Marcar ${entry.item.name} como listo`}
                  />
                )}

                <div className="flex min-w-0 flex-1 flex-col">
                  <span
                    className={
                      entry.checked
                        ? "text-sm line-through opacity-60"
                        : "text-sm"
                    }
                  >
                    {entry.item.name}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {formatWeight(entry.totalWeightG)}
                    {entry.qty > 1 ? ` · ${formatWeight(entry.item.weightG)} c/u` : ""}
                  </span>
                </div>

                {isReadOnly ? (
                  <span className="text-sm tabular-nums">×{entry.qty}</span>
                ) : (
                  <QtyStepper
                    value={entry.qty}
                    label={entry.item.name}
                    onCommit={(qty) => onQty(entry.item.id, qty)}
                  />
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
