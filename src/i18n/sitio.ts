import type { PorIdioma } from "./idiomas";
import es from "./es/sitio";

export type TextosDelSitio = typeof es;

export const TEXTOS_DEL_SITIO: PorIdioma<TextosDelSitio> = { es };
