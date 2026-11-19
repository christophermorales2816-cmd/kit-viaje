import { describe, expect, it } from "vitest";

import type { BudgetLineItem } from "@/lib/budget";
import type { TripPackingEntry } from "@/lib/trips/types";
import { renderizar } from "@/test/renderizar";

import { BudgetList } from "./budget-list";
import { ExportButtons } from "./export-buttons";
import { PackingList } from "./packing-list";
import { ShareControls } from "./share-controls";

/**
 * Humo de los textos del viaje (spec, 21.2): que cada componente arme sus
 * frases con el diccionario, con las partes resaltadas en su lugar, y que no
 * quede ninguna marca de enriquecer() a la vista.
 */

const item = (id: string, name: string, category = "ropa") => ({
  id,
  category,
  name,
  weightG: 150,
  climateTags: ["templado"],
  tripTypeTags: ["urbano" as const],
  baseQty: 1,
  scalesWithDays: true,
  daysPerUnit: 2,
  maxQty: 10,
});

const EQUIPAJE: TripPackingEntry[] = [
  { item: item("i1", "Remera"), qty: 2, checked: true, totalWeightG: 300 },
  { item: item("i2", "Medias"), qty: 1, checked: false, totalWeightG: 150 },
];

const PRESUPUESTO: BudgetLineItem[] = [
  {
    product: {
      id: "p1",
      category: "comida",
      name: "Menú del día",
      basePrice: 12,
      currency: "USD",
      updatedAt: "2026-08-27T00:00:00.000Z",
      baseQty: 1,
      scalesWithDays: true,
      daysPerUnit: 1,
      maxQty: 30,
    },
    qty: 3,
    subtotal: 36,
  },
];

const nada = () => {};

describe("textos del viaje", () => {
  it("la lista de equipaje cuenta los listos y nombra la categoría", async () => {
    const html = await renderizar(
      <PackingList
        entries={EQUIPAJE}
        totalWeightG={450}
        isReadOnly={false}
        onToggle={nada}
        onQty={nada}
      />,
    );

    expect(html).toContain(
      '<span class="font-medium text-foreground">1 de 2</span> ítem listo',
    );
    expect(html).toContain("Peso total");
    expect(html).toContain(">Ropa<");
    expect(html).toContain('aria-label="Marcar Remera como listo"');
    expect(html).toContain('aria-label="Sumar uno a Medias"');
    expect(html).not.toMatch(/<\/?cifra>/);
  });

  it("el aviso de compartir resalta lo que hay que hacer", async () => {
    const html = await renderizar(
      <ShareControls shareSlug="abc" editToken="token" />,
    );

    expect(html).toContain(
      '<strong class="font-medium">Guarda este enlace.</strong>',
    );
    expect(html).toContain("Copiar mi enlace");
    expect(html).not.toMatch(/<\/?fuerte>/);
  });

  it("los botones de exportar dicen qué lista descargan", async () => {
    const html = await renderizar(
      <ExportButtons filename="x.csv" csv={() => ""} what="equipaje" />,
    );

    expect(html).toContain("Imprimir o PDF");
    expect(html).toContain("Descargar equipaje (CSV)");
  });

  it("el presupuesto en dólares no ofrece cotización", async () => {
    const html = await renderizar(
      <BudgetList
        items={PRESUPUESTO}
        quotes={[]}
        quoteId={null}
        onQuoteChange={nada}
        totals={null}
        totalsError={null}
        quotesError={null}
        conversion="dolarizado"
        freshness={{
          oldestUpdatedAt: "2026-08-27T00:00:00.000Z",
          ageDays: 3,
          isStale: false,
          staleAfterDays: 90,
        }}
        baseCurrency="USD"
        isReadOnly
        onQty={nada}
      />,
    );

    expect(html).toContain("Total del viaje");
    expect(html).toContain("Los precios de este destino están en dólares");
    expect(html).toContain(">Comida<");
    expect(html).toMatch(/Precios actualizados .+\./);
  });
});
