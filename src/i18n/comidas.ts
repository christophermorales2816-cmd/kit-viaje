import type { PorIdioma } from "./idiomas";
import es from "./es/comidas";

export type TextosDeComidas = typeof es;

export const TEXTOS_DE_COMIDAS: PorIdioma<TextosDeComidas> = { es };
