/**
 * Descarga de un CSV generado en el browser.
 *
 * El archivo no existe en el servidor: se arma en memoria y se entrega con un
 * <a download> sintético. No hace falta una ruta que lo sirva —la lista ya está
 * toda del lado del cliente— y así la descarga no cuesta un round-trip.
 */
export function downloadCsv(filename: string, csv: string): void {
  const blob = new Blob(
    // BOM al principio. Sin él, Excel abre el CSV en la codificación del
    // sistema y "Menú ejecutivo" aparece como "MenÃº ejecutivo". El BOM va en
    // el archivo, no en el string que devuelven las funciones de csv.ts, para
    // que esas se puedan testear por lo que dicen y no por cómo las lee Excel.
    ["\uFEFF", csv],
    { type: "text/csv;charset=utf-8" },
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  link.style.display = "none";

  document.body.append(link);
  link.click();
  link.remove();

  // Sin esto el blob queda vivo hasta que se cierre la pestaña.
  URL.revokeObjectURL(url);
}
