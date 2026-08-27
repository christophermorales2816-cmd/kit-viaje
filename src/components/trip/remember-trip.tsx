"use client";

import { useEffect } from "react";

import { remember } from "@/lib/trips/recent-store";

/**
 * Guarda el viaje en el historial del navegador (spec, sección 6C).
 *
 * Solo se monta en la ruta privada: la vista compartida no tiene edit_token, y
 * anotar un viaje ajeno en "Tus viajes recientes" ofrecería volver a un link
 * que no lleva a ningún lado editable.
 *
 * No renderiza nada. Escribir en localStorage desde un efecto es el caso para
 * el que están los efectos —sincronizar con un sistema externo—, a diferencia
 * de leerlo, que va por useSyncExternalStore.
 */
export function RememberTrip({
  id,
  destinationName,
  editToken,
}: {
  id: string;
  destinationName: string;
  editToken: string;
}) {
  useEffect(() => {
    remember({ id, destinationName, editToken });
  }, [id, destinationName, editToken]);

  return null;
}
