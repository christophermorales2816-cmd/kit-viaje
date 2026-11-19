import type { PorIdioma } from "./idiomas";
import es from "./es/destinos";

export type TextosDeDestinos = typeof es;

export const TEXTOS_DE_DESTINOS: PorIdioma<TextosDeDestinos> = { es };
