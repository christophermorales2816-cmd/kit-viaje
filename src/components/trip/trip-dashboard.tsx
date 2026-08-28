"use client";

import { useOptimistic, useState, useTransition } from "react";
import { Eye, Luggage, TriangleAlert, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DEFAULT_QUOTE_ID,
  calculateBudget,
  toBudgetLine,
  type BudgetLineItem,
  type BudgetTotals,
  type ExchangeQuote,
  type PriceFreshness,
  type QuoteId,
} from "@/lib/budget";
import { budgetCsv, csvFilename, packingCsv } from "@/lib/export/csv";
import {
  formatDateRange,
  formatDuration,
  formatTripType,
} from "@/lib/format";
import { durationInDays } from "@/lib/packing";
import {
  setBudgetQtyAction,
  setPackingQtyAction,
  togglePackingItemAction,
} from "@/lib/trips/actions";
import type { TripPackingEntry, TripView } from "@/lib/trips/types";

import { BudgetList } from "./budget-list";
import { ExportButtons } from "./export-buttons";
import { PackingList } from "./packing-list";
import { RememberTrip } from "./remember-trip";
import { ShareControls } from "./share-controls";

/**
 * Dashboard del viaje (spec, secciones 6B y 6D).
 *
 * Un solo componente para las dos rutas. Dos tabs sobre la misma página —
 * Equipaje y Presupuesto— reforzando que pesan igual: es un kit de viaje, no
 * una lista de equipaje con un anexo de gastos.
 *
 * EL MODO SOLO LECTURA SE DERIVA, NO SE PASA
 *
 * El spec propone un prop `isReadOnly`. Acá sale de `view.editToken === null`,
 * que es el mismo dato del que depende poder escribir. Un booleano aparte puede
 * quedar en desacuerdo con el token —pasar isReadOnly={false} sin token, o al
 * revés— y entonces la UI promete algo que la Server Action va a rechazar.
 *
 * En cualquier caso es presentacional: la seguridad la resuelve la sección 3.
 * Forzar el prop desde devtools muestra los controles, y no habilita ninguna
 * escritura, porque sin edit_token no hay mutación que pase.
 *
 * SIN BOTÓN DE GUARDAR
 *
 * Cada interacción dispara una Server Action y useOptimistic actualiza la UI al
 * instante. Si la acción falla, el estado optimista se descarta solo al cerrar
 * la transición y el error se muestra arriba: sin eso el usuario podría quedar
 * mirando un tilde que nunca se guardó.
 */

interface PackingPatch {
  itemId: string;
  qty?: number;
  checked?: boolean;
}

function aplicarPacking(
  state: TripPackingEntry[],
  patch: PackingPatch,
): TripPackingEntry[] {
  return state.map((entry) => {
    if (entry.item.id !== patch.itemId) return entry;

    // ?? y no ||: `checked: false` es un valor, no una ausencia.
    const qty = patch.qty ?? entry.qty;

    return {
      ...entry,
      qty,
      checked: patch.checked ?? entry.checked,
      totalWeightG: entry.item.weightG * qty,
    };
  });
}

function aplicarBudget(
  state: BudgetLineItem[],
  patch: { productId: string; qty: number },
): BudgetLineItem[] {
  return state.map((line) =>
    line.product.id === patch.productId
      ? // El subtotal se recalcula con la misma función que usa el motor, para
        // que el número optimista sea idéntico al que va a devolver el servidor.
        toBudgetLine(line.product, patch.qty)
      : line,
  );
}

function elegirCotizacionInicial(quotes: ExchangeQuote[]): QuoteId | null {
  if (quotes.some((quote) => quote.id === DEFAULT_QUOTE_ID)) {
    return DEFAULT_QUOTE_ID;
  }

  // El spec elige blue como default visible. Si justo esa no vino, mostrar la
  // primera disponible es mejor que dejar el Select vacío.
  return quotes[0]?.id ?? null;
}

export function TripDashboard({
  view,
  quotes,
  quotesError,
  freshness,
}: {
  view: TripView;
  quotes: ExchangeQuote[];
  quotesError: string | null;
  freshness: PriceFreshness;
}) {
  const { trip, destination, editToken } = view;
  const isReadOnly = editToken === null;

  const [packing, patchPacking] = useOptimistic(view.packing, aplicarPacking);
  const [budget, patchBudget] = useOptimistic(view.budget, aplicarBudget);
  const [quoteId, setQuoteId] = useState<QuoteId | null>(() =>
    elegirCotizacionInicial(quotes),
  );
  const [error, setError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const totalWeightG = packing.reduce(
    (sum, entry) => sum + entry.totalWeightG,
    0,
  );

  const quote = quotes.find((candidate) => candidate.id === quoteId) ?? null;

  let totals: BudgetTotals | null = null;
  let totalsError: string | null = null;

  if (quote) {
    try {
      totals = calculateBudget(budget, quote);
    } catch (cause) {
      // Un producto en otra moneda es un error de datos, no del usuario. Se
      // muestra en el tab del presupuesto en vez de tirar abajo la página
      // entera: la lista de equipaje no tiene nada que ver.
      totalsError =
        cause instanceof Error ? cause.message : "No se pudo calcular el total.";
    }
  }

  /**
   * Envuelve una mutación: pinta el estado optimista, llama, y si falla muestra
   * el error. El estado optimista se descarta solo cuando termina la
   * transición, así que no hay nada que revertir a mano.
   */
  function mutar(
    optimista: () => void,
    llamar: (token: string) => Promise<{ ok: boolean; error?: string }>,
  ) {
    if (editToken === null) return;

    startTransition(async () => {
      optimista();

      const result = await llamar(editToken);

      setError(result.ok ? null : (result.error ?? "No se pudo guardar."));
    });
  }

  const nombreCsv = (what: "equipaje" | "presupuesto") =>
    csvFilename(destination.name, trip.startDate, what);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 md:px-6">
      {editToken ? (
        <RememberTrip
          id={trip.id}
          destinationName={destination.name}
          editToken={editToken}
        />
      ) : null}

      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              {destination.name}
            </h1>
            <Badge variant="secondary">{formatTripType(trip.tripType)}</Badge>
            {isReadOnly ? (
              <Badge variant="outline" className="gap-1">
                <Eye className="size-3" />
                Solo lectura
              </Badge>
            ) : null}
          </div>

          <p className="text-sm text-muted-foreground">
            {formatDateRange(trip.startDate, trip.endDate)} ·{" "}
            {formatDuration(durationInDays(trip.startDate, trip.endDate))}
          </p>
        </div>

        <ShareControls shareSlug={trip.shareSlug} editToken={editToken} />
      </header>

      {error ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive print:hidden"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      ) : null}

      <Tabs defaultValue="equipaje" className="gap-6">
        <TabsList className="print:hidden">
          <TabsTrigger value="equipaje">
            <Luggage className="size-4" />
            Equipaje
          </TabsTrigger>
          <TabsTrigger value="presupuesto">
            <Wallet className="size-4" />
            Presupuesto
          </TabsTrigger>
        </TabsList>

        <TabsContent value="equipaje" className="flex flex-col gap-4">
          <ExportButtons
            filename={nombreCsv("equipaje")}
            csv={() => packingCsv(packing)}
            what="equipaje"
          />

          <PackingList
            entries={packing}
            totalWeightG={totalWeightG}
            isReadOnly={isReadOnly}
            onToggle={(itemId, checked) =>
              mutar(
                () => patchPacking({ itemId, checked }),
                (token) => togglePackingItemAction(token, itemId, checked),
              )
            }
            onQty={(itemId, qty) =>
              mutar(
                () => patchPacking({ itemId, qty }),
                (token) => setPackingQtyAction(token, itemId, qty),
              )
            }
          />
        </TabsContent>

        <TabsContent value="presupuesto" className="flex flex-col gap-4">
          <ExportButtons
            filename={nombreCsv("presupuesto")}
            csv={() => budgetCsv(budget)}
            what="presupuesto"
          />

          <BudgetList
            items={budget}
            quotes={quotes}
            quoteId={quoteId}
            onQuoteChange={setQuoteId}
            totals={totals}
            totalsError={totalsError}
            quotesError={quotesError}
            freshness={freshness}
            baseCurrency={destination.baseCurrency}
            isReadOnly={isReadOnly}
            onQty={(productId, qty) =>
              mutar(
                () => patchBudget({ productId, qty }),
                (token) => setBudgetQtyAction(token, productId, qty),
              )
            }
          />
        </TabsContent>
      </Tabs>
    </main>
  );
}
