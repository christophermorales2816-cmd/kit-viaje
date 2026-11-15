/**
 * La búsqueda de destinos del globo (spec, 19.5): "peru" encuentra Perú,
 * "costa" encuentra Costa Rica y Costa de Marfil.
 *
 * Sin tildes ni mayúsculas, porque nadie escribe "Perú" con tilde en un
 * buscador. Primero lo que empieza con lo escrito, después lo que empieza una
 * palabra con eso ("rica" → Costa Rica), y después lo que lo contiene en
 * cualquier lado. Adentro de cada grupo, por nombre.
 */

export function normalizar(texto: string): string {
  // NFD separa cada letra de su tilde ("é" → "e" + "´"), y la tilde se va.
  return texto
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function buscarDestinos<T extends { label: string }>(
  destinos: T[],
  consulta: string,
  limite = 8,
): T[] {
  const q = normalizar(consulta);
  if (q.length === 0) return [];

  const puntaje = (nombre: string): number | null => {
    const n = normalizar(nombre);
    if (n.startsWith(q)) return 0;
    if (n.split(/[\s-]+/).some((palabra) => palabra.startsWith(q))) return 1;
    if (n.includes(q)) return 2;
    return null;
  };

  return destinos
    .map((destino) => ({ destino, puntaje: puntaje(destino.label) }))
    .filter((r): r is { destino: T; puntaje: number } => r.puntaje !== null)
    .sort(
      (a, b) =>
        a.puntaje - b.puntaje ||
        a.destino.label.localeCompare(b.destino.label, "es"),
    )
    .slice(0, limite)
    .map(({ destino }) => destino);
}
