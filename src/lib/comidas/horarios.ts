/**
 * El horario de OpenStreetMap, legible en castellano (spec, 18.4).
 *
 * OpenStreetMap lo guarda en un formato propio y en inglés: "Mo-Fr
 * 11:00-15:00,19:00-23:00; Sa 12:00-16:00; PH off". No se interpreta —para
 * decir "abierto ahora" haría falta un parser entero, y la zona horaria del
 * lugar—: se traducen las palabras y se separan los tramos. Sirve para leerlo
 * de un vistazo, que es lo que se necesita parado en la vereda.
 */

const PALABRAS: [RegExp, string][] = [
  [/\b24\/7\b/g, "todos los días, las 24 horas"],
  [/\bMo\b/g, "Lu"],
  [/\bTu\b/g, "Ma"],
  [/\bWe\b/g, "Mi"],
  [/\bTh\b/g, "Ju"],
  [/\bFr\b/g, "Vi"],
  [/\bSa\b/g, "Sá"],
  [/\bSu\b/g, "Do"],
  [/\bPH\b/g, "feriados"],
  [/\bSH\b/g, "vacaciones escolares"],
  [/\b(off|closed)\b/gi, "cerrado"],
  [/\bJan\b/g, "ene"],
  [/\bFeb\b/g, "feb"],
  [/\bMar\b/g, "mar"],
  [/\bApr\b/g, "abr"],
  [/\bMay\b/g, "may"],
  [/\bJun\b/g, "jun"],
  [/\bJul\b/g, "jul"],
  [/\bAug\b/g, "ago"],
  [/\bSep\b/g, "sep"],
  [/\bOct\b/g, "oct"],
  [/\bNov\b/g, "nov"],
  [/\bDec\b/g, "dic"],
  [/\bsunrise\b/g, "amanecer"],
  [/\bsunset\b/g, "atardecer"],
];

/** Un horario de OpenStreetMap con las palabras en castellano, o null. */
export function horarioEnCastellano(horario: string | null): string | null {
  const limpio = horario?.trim();
  if (!limpio) return null;

  // Lo que va entre comillas es un comentario de quien lo cargó, en el idioma
  // que sea: se deja como está.
  return limpio
    .split(/("[^"]*")/)
    .map((tramo) =>
      tramo.startsWith('"')
        ? tramo
        : PALABRAS.reduce(
            (texto, [patron, palabra]) => texto.replace(patron, palabra),
            tramo,
          )
            .replace(/\s*;\s*/g, " · ")
            .replace(/,(?=\S)/g, ", ")
            // "Sá cerrado" se lee como un nombre; "Sá: cerrado", como un horario.
            .replace(/([a-záéíóú])\s+cerrado\b/gi, "$1: cerrado"),
    )
    .join("");
}
