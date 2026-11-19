import type { PorIdioma } from "./idiomas";
import es from "./es/vuelos";

export type TextosDeVuelos = typeof es;

export const TEXTOS_DE_VUELOS: PorIdioma<TextosDeVuelos> = { es };
