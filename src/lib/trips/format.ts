/**
 * Formateo de fechas del lado del cliente.
 *
 * POR QUÉ NO `date.toISOString().slice(0, 10)`
 *
 * Ese atajo convierte a UTC antes de cortar, así que devuelve la fecha del
 * calendario UTC, no la del usuario. El datepicker entrega fechas a medianoche
 * local: para alguien en Madrid (UTC+2) la medianoche del 1 de septiembre es
 * las 22:00 del 31 de agosto en UTC, y el viaje entero se correría un día — el
 * motor resolvería el clima del mes equivocado.
 *
 * Lo traicionero es que en Buenos Aires (UTC−3) el atajo funciona: medianoche
 * local es la misma fecha en UTC. O sea que pasaría todos los tests corridos
 * acá y fallaría solo para quien planea el viaje desde el otro hemisferio, que
 * es exactamente el usuario del producto.
 *
 * Es el mismo problema que resuelve src/lib/packing/dates.ts en el servidor,
 * del otro lado del cable y en la dirección opuesta.
 */
export function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const FORMATTER = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "short",
});

export function formatShortDate(date: Date): string {
  return FORMATTER.format(date);
}

/** Días contando ambos extremos, igual que el motor y que la base. */
export function countDays(from: Date, to: Date): number {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / 86_400_000) + 1;
}
