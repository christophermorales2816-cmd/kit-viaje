"use client";

import { useState } from "react";
import { Check, Copy, Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Compartir y guardar el link (spec, secciones 6B y 6C).
 *
 * Dos links distintos y con permisos distintos:
 *
 *   share_slug  el que se comparte. Solo lectura.
 *   edit_token  el del usuario. Es la única forma real de volver a editar.
 *
 * El segundo se muestra con una advertencia porque no hay cuenta que lo
 * recupere: el historial de localStorage no viaja entre dispositivos.
 */

function useCopiar() {
  const [copiado, setCopiado] = useState<string | null>(null);

  async function copiar(url: string, id: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(id);
      window.setTimeout(() => setCopiado(null), 2000);
    } catch {
      // El portapapeles necesita contexto seguro y permiso. Si no se puede, el
      // link está igual en pantalla para copiarlo a mano — no hay nada que
      // avisar que el usuario no esté viendo ya.
    }
  }

  return { copiado, copiar };
}

export function ShareControls({
  shareSlug,
  editToken,
}: {
  shareSlug: string;
  /** null en la vista compartida: ahí no hay link privado que ofrecer. */
  editToken: string | null;
}) {
  const { copiado, copiar } = useCopiar();

  // El origin sale del browser y no de una env var: el mismo viaje se abre en
  // localhost, en el preview de Vercel y en producción, y el link tiene que
  // apuntar a donde está parado el usuario.
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const linkCompartir = `${origin}/viaje/ver/${shareSlug}`;

  return (
    <div className="flex flex-col gap-3 print:hidden">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => copiar(linkCompartir, "share")}
        >
          {copiado === "share" ? <Check /> : <Link2 />}
          {copiado === "share" ? "Link copiado" : "Compartir solo lectura"}
        </Button>

        {editToken ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => copiar(`${origin}/viaje/${editToken}`, "edit")}
          >
            {copiado === "edit" ? <Check /> : <Copy />}
            {copiado === "edit" ? "Link copiado" : "Copiar mi link"}
          </Button>
        ) : null}
      </div>

      {editToken ? (
        <p className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm">
          <strong className="font-medium">Guardá este link.</strong> Es la única
          forma de volver a tu viaje: no hay cuenta ni mail para recuperarlo.
        </p>
      ) : null}
    </div>
  );
}
