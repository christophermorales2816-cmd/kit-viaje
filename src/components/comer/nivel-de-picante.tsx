"use client";

import { Flame } from "lucide-react";

import type { Picante } from "@/content/comidas/types";
import { useTextos } from "@/i18n/cliente";
import { TEXTOS_DE_COMIDAS } from "@/i18n/comidas";

/**
 * Las llamitas del picante: ninguna, una, dos o tres.
 *
 * Es de cliente para leer su texto con `useTextos`: la usan la ficha, que es
 * del servidor, y la tarjeta del catálogo, que es de cliente.
 */
export function NivelDePicante({ nivel }: { nivel: Picante }) {
  const { etiquetas, tarjeta } = useTextos(TEXTOS_DE_COMIDAS);

  if (nivel === 0) return null;

  const texto = tarjeta.picante(etiquetas.picante[nivel].toLowerCase());

  return (
    <span className="inline-flex items-center text-orange-600" title={texto}>
      {Array.from({ length: nivel }, (_, i) => (
        <Flame key={i} className="size-3.5" aria-hidden="true" />
      ))}
      <span className="sr-only">{texto}</span>
    </span>
  );
}
