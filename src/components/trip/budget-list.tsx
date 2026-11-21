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
import type { ConversionStatus } from "@/lib/quotes";
import {
  formatAge,
  formatCategory,
  formatMoney,
  formatRate,
  formatTimestamp,
} from "@/lib/format";

import { QtyStepper } from "./qty-stepper";
import { enriquecer } from "@/i18n/enriquecer";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DEL_VIAJE } from "@/i18n/viaje";

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

/**
 * Lo que se dice sobre la conversión a dólares, según el caso.
 *
 * Decía siempre "no pudimos traer las cotizaciones — el total en pesos es
 * correcto". Era falso dos veces fuera de Argentina: la moneda no eran pesos, y
 * en Bolivia no había fallado nada, simplemente no hay fuente todavía. En un
 * país dolarizado habría sido falso tres veces: ahí no hay nada que convertir.
 */
function AvisoDeConversion({
  conversion,
  quotesError,
  baseCurrency,
}: {
  conversion: ConversionStatus;
  quotesError: string | null;
  baseCurrency: string;
}) {
  const t = useTextos(TEXTOS_DEL_VIAJE).presupuesto;

  if (conversion === "dolarizado") {
    return <p className="text-sm text-muted-foreground">{t.dolarizado}</p>;
  }

  if (conversion === "sin-fuente") {
    return (
      <p className="flex items-start gap-2 text-sm text-muted-foreground">
        <TriangleAlert className="mt-0.5 size-4 shrink-0" />
        {t.sinFuente(baseCurrency)}
      </p>
    );
  }

  if (quotesError === null) return null;

  return (
    <p className="flex items-start gap-2 text-sm text-muted-foreground">
      <TriangleAlert className="mt-0.5 size-4 shrink-0" />
      {/*
        El total en moneda local se muestra igual: la conversión es lo único
        que depende de la API externa.
      */}
      {t.sinCotizaciones(quotesError)}
    </p>
  );
}

export function BudgetList({
  items,
  quotes,
  quoteId,
  onQuoteChange,
  totals,
  totalsError,
  quotesError,
  conversion,
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
  /** Qué se puede decir sobre la conversión de este destino. */
  conversion: ConversionStatus;
  freshness: PriceFreshness;
  baseCurrency: string;
  isReadOnly: boolean;
  onQty: (productId: string, qty: number) => void;
}) {
  const textosDelViaje = useTextos(TEXTOS_DEL_VIAJE);
  const t = textosDelViaje.presupuesto;

  if (items.length === 0) {
    return (
      <p className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
        {t.vacio}
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
            <span className="text-xs text-muted-foreground">{t.total}</span>
            <span className="text-2xl font-semibold tabular-nums">
              {formatMoney(totalBase, baseCurrency)}
            </span>
          </div>

          {quotes.length > 0 && conversion !== "dolarizado" ? (
            <div className="flex flex-col items-end gap-1 print:hidden">
              <Select
                value={quoteId ?? undefined}
                onValueChange={(value) => onQuoteChange(value as QuoteId)}
              >
                <SelectTrigger size="sm" aria-label={t.cotizacionParaConvertir}>
                  <SelectValue placeholder={t.cotizacion} />
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
                  {t.actualizada(formatTimestamp(quote.updatedAt))}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        {totals ? (
          <p className="text-sm text-muted-foreground">
            {enriquecer(
              t.convertido(
                formatMoney(totals.totalConverted, totals.convertedCurrency),
                totals.quote.label,
                formatRate(totals.rate),
              ),
              {
                monto: (monto) => (
                  <span className="font-medium text-foreground tabular-nums">
                    {monto}
                  </span>
                ),
              },
            )}
          </p>
        ) : null}

        <AvisoDeConversion
          conversion={conversion}
          quotesError={quotesError}
          baseCurrency={baseCurrency}
        />

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
          {freshness.isStale
            ? t.preciosViejos(
                formatAge(freshness.ageDays),
                freshness.staleAfterDays,
              )
            : t.preciosActualizados(formatAge(freshness.ageDays))}
        </p>
      </div>

      {agruparPorCategoria(items).map(([categoria, lineas]) => (
        <section key={categoria} className="flex flex-col gap-2">
          <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {formatCategory(categoria, textosDelViaje.categorias)}
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
                    {t.cadaUno(
                      formatMoney(
                        line.product.basePrice,
                        line.product.currency,
                      ),
                    )}
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
