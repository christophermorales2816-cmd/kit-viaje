import type {
  Aventura,
  Contiene,
  Lugar,
  Momento,
  Picante,
  Precio,
  TipoDeMencion,
} from "@/content/comidas/types";

/**
 * Cómo se lee cada valor del catálogo en la página (spec, 18.3).
 *
 * Están juntos y en un Record sobre cada tipo para que un valor nuevo no pueda
 * llegar a la página sin su texto: el compilador lo exige.
 */

export const NOMBRES_DE_LUGAR: Record<Lugar, string> = {
  puesto: "Puesto callejero",
  mercado: "Mercado",
  panaderia: "Panadería",
  dulceria: "Pastelería",
  almacen: "Almacén o kiosco",
  tienda: "Tienda especializada",
  casual: "Comedor sencillo",
  restaurante: "Restaurante",
  "alta-cocina": "Alta cocina",
  bar: "Bar",
  cafe: "Café",
  heladeria: "Heladería",
  casa: "En casa",
};

export const NOMBRES_DE_MOMENTO: Record<Momento, string> = {
  desayuno: "Desayuno",
  almuerzo: "Almuerzo",
  cena: "Cena",
  snack: "Para picar",
  postre: "Postre",
  bebida: "Bebida",
};

export const NOMBRES_DE_PICANTE: Record<Picante, string> = {
  0: "Nada",
  1: "Suave",
  2: "Medio",
  3: "Picante",
};

export const NOMBRES_DE_AVENTURA: Record<Aventura, string> = {
  "para-todos": "Para todos",
  "para-animarse": "Para animarse",
  "gusto-adquirido": "Gusto adquirido",
};

/**
 * Los rangos de precio, por porción y en dólares.
 *
 * Son los del pedido original. Se escriben con el rango al lado porque "$$"
 * solo no dice nada a quien no conoce la convención.
 */
export const PRECIOS: Record<Precio, { simbolo: string; rango: string }> = {
  1: { simbolo: "$", rango: "menos de 5 USD" },
  2: { simbolo: "$$", rango: "de 5 a 15 USD" },
  3: { simbolo: "$$$", rango: "de 15 a 40 USD" },
  4: { simbolo: "$$$$", rango: "más de 40 USD" },
};

/** En minúscula: van en una frase ("Lleva gluten, soja y huevo"). */
export const NOMBRES_DE_CONTIENE: Record<Contiene, string> = {
  carne: "carne",
  cerdo: "cerdo",
  pescado: "pescado",
  mariscos: "mariscos",
  insectos: "insectos",
  huevo: "huevo",
  lacteos: "lácteos",
  miel: "miel",
  alcohol: "alcohol",
  gluten: "gluten",
  mani: "maní",
  "frutos-secos": "frutos secos",
  soja: "soja",
  sesamo: "sésamo",
};

export const NOMBRES_DE_MENCION: Record<TipoDeMencion, string> = {
  puestito: "Puestito",
  emblematico: "Emblemático",
  "alta-cocina": "Alta cocina",
  mercado: "Mercado",
};

/** El nombre de un tipo de lugar en un país: el propio si lo tiene. */
export function nombreDeLugar(
  lugar: Lugar,
  delPais: Partial<Record<Lugar, string>> | undefined,
): string {
  return delPais?.[lugar] ?? NOMBRES_DE_LUGAR[lugar];
}

/**
 * "gluten, soja y huevo", o "mercado o restaurante".
 *
 * Con "e" delante del sonido "i" ("soja e hinojo"), pero no delante de "hie"
 * o "hia", que suenan a "y" ("agua y hielo"); y con "u" delante del sonido "o"
 * ("bar u hostería"), como pide la gramática.
 */
export function enumerar(
  palabras: readonly string[],
  conjuncion: "y" | "o" = "y",
): string {
  if (palabras.length <= 1) return palabras.join("");

  const ultima = palabras.at(-1)!;
  const nexo =
    conjuncion === "y"
      ? /^h?[ií](?![aeoáéó])/i.test(ultima)
        ? "e"
        : "y"
      : /^h?[oó]/i.test(ultima)
        ? "u"
        : "o";

  return `${palabras.slice(0, -1).join(", ")} ${nexo} ${ultima}`;
}
