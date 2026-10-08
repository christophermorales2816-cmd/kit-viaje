/**
 * Lo que sale de la app hacia servicios de terceros no lleva llaves.
 *
 * El link privado de un viaje ES la llave de edición: `/viaje/{edit_token}`.
 * Cualquier cosa que registre URLs —analytics, logs, un reporte de errores— la
 * guardaría en texto plano, y quien tenga acceso a ese panel podría editar el
 * viaje de cualquiera. Esta función reemplaza los tokens por un marcador antes
 * de que la URL salga del navegador.
 *
 * Las rutas se reconocen por la forma exacta del token (32 o 16 hex, ver
 * src/lib/trips/validate.ts), no por el prefijo: así `/viaje/ver/...` no se
 * confunde con `/viaje/{edit_token}`.
 */
export function redactarUrl(url: string): string {
  return url
    .replace(/\/viaje\/ver\/[0-9a-f]{16}(?=$|[/?#])/gi, "/viaje/ver/[link]")
    .replace(/\/viaje\/[0-9a-f]{32}(?=$|[/?#])/gi, "/viaje/[link]");
}

/** Las rutas donde no se carga ningún script de terceros. */
export function esRutaDeViaje(pathname: string | null): boolean {
  return pathname !== null && /^\/viaje(\/|$)/.test(pathname);
}
