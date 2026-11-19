import type { PorIdioma } from "./idiomas";
import es from "./es/viaje";

export type TextosDelViaje = typeof es;

export const TEXTOS_DEL_VIAJE: PorIdioma<TextosDelViaje> = { es };
