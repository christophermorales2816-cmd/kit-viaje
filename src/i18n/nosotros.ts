import type { PorIdioma } from "./idiomas";
import es from "./es/nosotros";

export type TextosDeNosotros = typeof es;

export const TEXTOS_DE_NOSOTROS: PorIdioma<TextosDeNosotros> = { es };
