import "server-only";

import { referenceClient } from "@/lib/supabase/client";

import { type Celda, claveDeCelda } from "./celdas";
import type { LugarDeComida, LugaresDeLaCelda } from "./lugares";
import { MAXIMO_POR_CELDA } from "./osm";

/**
 * Los lugares de una celda, con datos propios (spec, 18.10): los que carga
 * una vez por día el workflow de lugares, del extracto de OpenStreetMap de
 * cada país.
 *
 * Devuelve null si el país todavía no tiene datos propios —el workflow nunca
 * lo cargó—, y entonces el mapa le pregunta a Overpass, como antes. Se leen
 * con la anon key, como los datos de referencia: son públicos.
 */
export async function lugaresPropios(
  pais: string,
  plato: string,
  celda: Celda,
): Promise<LugaresDeLaCelda | null> {
  const base = referenceClient();

  const { data: extracto, error: errorDelExtracto } = await base
    .from("extractos_de_comida")
    .select("datos_del, procesado")
    .eq("pais", pais)
    .maybeSingle<{ datos_del: string; procesado: string }>();

  if (errorDelExtracto) {
    throw new Error(
      `No se pudo leer de cuándo son los datos: ${errorDelExtracto.message}`,
    );
  }

  if (!extracto) return null;

  const clave = claveDeCelda(celda);

  // Uno más del máximo, para saber si había más; ordenados, para que el corte
  // sea siempre el mismo.
  const { data: filas, error } = await base
    .from("lugares_de_comida")
    .select("lugar")
    .eq("pais", pais)
    .eq("plato", plato)
    .eq("celda", clave)
    .order("osm")
    .limit(MAXIMO_POR_CELDA + 1)
    .overrideTypes<{ lugar: unknown }[], { merge: false }>();

  if (error)
    throw new Error(`No se pudieron leer los lugares: ${error.message}`);

  const lugares = (filas ?? [])
    .slice(0, MAXIMO_POR_CELDA)
    .map((fila) => fila.lugar)
    .filter(esLugar);

  return {
    celda: clave,
    actualizado: new Date(extracto.procesado).toISOString(),
    datosDel: new Date(extracto.datos_del).toISOString(),
    lugares,
    recortado: (filas?.length ?? 0) > MAXIMO_POR_CELDA,
  };
}

/** Lo justo para que el mapa no se rompa con una fila que no tiene forma de lugar. */
function esLugar(valor: unknown): valor is LugarDeComida {
  const lugar = valor as Partial<LugarDeComida> | null;

  return (
    typeof lugar === "object" &&
    lugar !== null &&
    typeof lugar.id === "string" &&
    typeof lugar.lat === "number" &&
    typeof lugar.lon === "number"
  );
}
