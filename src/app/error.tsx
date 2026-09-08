"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

/**
 * Red de contención de las rutas (spec, sección 7).
 *
 * Cuatro rutas leen Supabase en cada request: la guía de preparación, el
 * planificador, el dashboard privado y la vista compartida. Sin este archivo,
 * cualquier hipo de la base cae en la pantalla por defecto de Next
 * —"Application error: a server-side exception has occurred"—, en inglés y sin
 * salida.
 *
 * NO se muestra `error.message`. En producción Next ya lo reemplaza por uno
 * genérico, pero en desarrollo llega entero: los errores de escritura de viajes
 * incluyen a propósito el SQLSTATE y el texto de Postgres (`conDetalle`), y eso
 * es para los logs del servidor, no para la pantalla de alguien que solo quiere
 * armar una valija. El `digest` sí se muestra: es el identificador con el que
 * se encuentra el error real en los logs, y no dice nada de la base.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // El servidor ya lo registró; esto cubre los errores que ocurren en el
    // cliente, que de otro modo no dejan rastro en ningún lado.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        Algo se rompió de nuestro lado
      </h1>

      <p className="text-muted-foreground max-w-md text-pretty">
        No es algo que hayas hecho mal. Probá de nuevo: si el problema era
        pasajero, con eso alcanza.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button type="button" size="lg" onClick={reset}>
          Reintentar
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>

      {error.digest ? (
        <p className="text-muted-foreground text-xs">
          Referencia: <code className="font-mono">{error.digest}</code>
        </p>
      ) : null}
    </main>
  );
}
