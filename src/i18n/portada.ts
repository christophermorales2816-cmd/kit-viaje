import type { PorIdioma } from "./idiomas";
import es from "./es/portada";

export type TextosDeLaPortada = typeof es;

export const TEXTOS_DE_LA_PORTADA: PorIdioma<TextosDeLaPortada> = { es };
