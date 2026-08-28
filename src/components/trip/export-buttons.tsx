"use client";

import { Download, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { downloadCsv } from "@/lib/export/download";

/**
 * Exportar (spec, sección 7, criterio 4).
 *
 * PDF vía CSS de impresión: `window.print()` y que el usuario elija "Guardar
 * como PDF". Sin librería de PDF del lado del cliente —serían cientos de kB
 * para reproducir peor lo que el navegador ya hace bien— y sin render en el
 * servidor, que necesitaría un Chrome headless en Vercel.
 *
 * Los botones van por tab, no globales: cada uno exporta la lista que se está
 * mirando. Radix desmonta el panel inactivo, así que la impresión sale con esa
 * misma lista sin que haya que filtrar nada.
 */
export function ExportButtons({
  filename,
  csv,
  what,
}: {
  filename: string;
  /** Se arma en el momento del click: la lista cambia con cada edición. */
  csv: () => string;
  what: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => window.print()}
      >
        <Printer />
        Imprimir o PDF
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => downloadCsv(filename, csv())}
      >
        <Download />
        Descargar {what} (CSV)
      </Button>
    </div>
  );
}
