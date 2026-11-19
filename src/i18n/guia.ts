import type { PorIdioma } from "./idiomas";
import es from "./es/guia";

export type TextosDeLaGuia = typeof es;

export const TEXTOS_DE_LA_GUIA: PorIdioma<TextosDeLaGuia> = { es };
