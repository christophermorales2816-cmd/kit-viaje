import type { Lugar, Precio } from "@/content/comidas/types";

/**
 * Cómo se lee cada valor del catálogo en la página (spec, 18.3).
 *
 * Los nombres de cada valor (lugares, momentos, picante, alérgenos…) están en
 * el diccionario de comidas (src/i18n/es/comidas.ts), en un Record sobre cada
 * tipo: un valor nuevo no puede llegar a la página sin su texto, el
 * compilador lo exige.
 */

/**
 * El símbolo de cada precio. El rango que significa ("de 5 a 15 USD") está en
 * el diccionario de comidas (src/i18n/es/comidas.ts).
 */
export const SIMBOLOS_DE_PRECIO: Record<Precio, string> = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
};

/** El nombre de un tipo de lugar en un país: el propio si lo tiene. */
export function nombreDeLugar(
  lugar: Lugar,
  delPais: Partial<Record<Lugar, string>> | undefined,
  nombres: Readonly<Record<Lugar, string>>,
): string {
  return delPais?.[lugar] ?? nombres[lugar];
}

/**
 * "gluten, soja y huevo", o "mercado o restaurante".
 *
 * Con "e" delante del sonido "i" ("soja e hinojo"), pero no delante de "hie"
 * o "hia", que suenan a "y" ("agua y hielo"); y con "u" delante del sonido "o"
 * ("bar u hostería"), como pide la gramática.
 *
 * Si alguna ya trae la conjunción adentro —un lugar que en México se llama
 * "puesto o taquería"—, va una coma antes de la última, para que se lea dónde
 * termina cada una: "puesto o taquería, o restaurante".
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

  const yaLaTrae = conjuncion === "y" ? /\s[ye]\s/i : /\s[ou]\s/i;
  const coma = palabras.some((palabra) => yaLaTrae.test(palabra)) ? "," : "";

  return `${palabras.slice(0, -1).join(", ")}${coma} ${nexo} ${ultima}`;
}
