"use client";

import { TriangleAlert } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  BudgetLineItem,
  BudgetTotals,
  ExchangeQuote,
  PriceFreshness,
  QuoteId,
} from "@/lib/budget";
import {
  formatAge,
  formatCategory,
  formatMoney,
  formatRate,
  formatTimestamp,
} from "@/lib/format";

import { QtyStepper } from "./qty-stepper";

/**
 * Presupuesto (spec, sección 6B).
 *
 * El Select de cotización pivotea el total en tiempo real y no escribe nada: el
 * monto convertido no se persiste (sección 5), así que elegir otra tasa es
 * estado de cliente. Por eso sigue habilitado en la vista compartida.
 */

function agruparPorCategoria(
  items: BudgetLineItem[],
): [string, BudgetLineItem[]][] {
  const grupos = new Map<string, BudgetLineItem[]>();

  for (const line of items) {
    const grupo = grupos.get(line.product.category);

    if (grupo) grupo.push(line);
    else grupos.set(line.product.category, [line]);
  }

  return [...grupos];
}

export function BudgetList({
  items,
  quotes,
  quoteId,
  onQuoteChange,
  totals,
  totalsError,
  quotesError,
  freshness,
  baseCurrency,
  isReadOnly,
  onQty,
}: {
  items: BudgetLineItem[];
  quotes: ExchangeQuote[];
  quoteId: QuoteId | null;
  onQuoteChange: (id: QuoteId) => void;
  totals: BudgetTotals | null;
  totalsError: string | null;
  /** Por qué no hay cotizaciones, si no las hay. */
  quotesError: string | null;
  freshness: PriceFreshness;
  baseCurrency: string;
  isReadOnly: boolean;
  onQty: (productId: string, qty: number) => void;
}) {
  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
        No hay gastos cargados para este destino.
      </p>
    );
  }

  const totalBase = items.reduce((sum, line) => sum + line.subtotal, 0);
  const quote = quotes.find((candidate) => candidate.id === quoteId) ?? null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg border bg-muted/40 px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">
              Total del viaje
            </span>
            <span className="text-2xl font-semibold tabular-nums">
              {formatMoney(totalBase, baseCurrency)}
            </span>
          </div>

          {quotes.length > 0 ? (
            <div className="flex flex-col items-end gap-1 print:hidden">
              <Select
                value={quoteId ?? undefined}
                onValueChange={(value) => onQuoteChange(value as QuoteId)}
              >
                <SelectTrigger
                  size="sm"
                  aria-label="Cotización para convertir el total"
                >
                  <SelectValue placeholder="Cotización" />
                </SelectTrigger>
                <SelectContent>
                  {quotes.map((candidate) => (
                    <SelectItem key={candidate.id} value={candidate.id}>
                      {candidate.label} · {formatRate(candidate.buy)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {quote ? (
                <span className="text-xs text-muted-foreground">
                  actualizada {formatTimestamp(quote.updatedAt)}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        {totals ? (
          <p className="text-sm text-muted-foreground">
            Son{" "}
            <span className="font-medium text-foreground tabular-nums">
              {formatMoney(totals.totalConverted, totals.convertedCurrency)}
            </span>{" "}
            al {totals.quote.label} ({formatRate(totals.rate)} por dólar).
          </p>
        ) : null}

        {quotesError ? (
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            {/*
              El total en pesos se muestra igual: la conversión es lo único que
              depende de la API externa.
            */}
            No pudimos traer las cotizaciones ({quotesError}) — el total en
            pesos es correcto, la conversión a dólares no está disponible.
          </p>
        ) : null}

        {totalsError ? (
          <p className="flex items-start gap-2 text-sm text-destructive">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            {totalsError}
          </p>
        ) : null}

        <p
          className={
            freshness.isStale
              ? "flex items-start gap-2 text-sm text-destructive"
              : "text-xs text-muted-foreground"
          }
        >
          {freshness.isStale ? (
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          ) : null}
          Precios actualizados {formatAge(freshness.ageDays)}
          {freshness.isStale
            ? ` — más de ${freshness.staleAfterDays} días. Tomalos como referencia vieja.`
            : "."}
        </p>
      </div>

      {agruparPorCategoria(items).map(([categoria, lineas]) => (
        <section key={categoria} className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {formatCategory(categoria)}
          </h3>

          <ul className="divide-y rounded-lg border">
            {lineas.map((line) => (
              <li
                key={line.product.id}
                className="flex items-center gap-3 px-4 py-3"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm">{line.product.name}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {formatMoney(line.product.basePrice, line.product.currency)}{" "}
                    c/u
                  </span>
                </div>

                {isReadOnly ? (
                  <span className="text-sm tabular-nums">×{line.qty}</span>
                ) : (
                  <QtyStepper
                    value={line.qty}
                    label={line.product.name}
                    onCommit={(qty) => onQty(line.product.id, qty)}
                  />
                )}

                <span className="w-28 text-right text-sm font-medium tabular-nums">
                  {formatMoney(line.subtotal, line.product.currency)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
