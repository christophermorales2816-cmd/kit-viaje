import type { PorIdioma } from "./idiomas";
import es from "./es/mapa";

export type TextosDelMapa = typeof es;

export const TEXTOS_DEL_MAPA: PorIdioma<TextosDelMapa> = { es };
