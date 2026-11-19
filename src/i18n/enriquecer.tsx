import { Fragment, type ReactNode } from "react";

/** `<nombre>contenido</nombre>`, sin anidar. */
const MARCA = /<(\w+)>([\s\S]*?)<\/\1>/g;

/**
 * Un texto del diccionario con partes que se dibujan aparte: un nombre en
 * negrita, un enlace adentro de una frase.
 *
 * El diccionario guarda el texto entero, con las partes entre marcas
 * (`"Estos números son de <ciudad>${ciudad}</ciudad>."`), y quien lo muestra
 * dice cómo se dibuja cada marca. Así cada idioma ordena la frase como le
 * corresponde, que no siempre es el orden del español, y el texto de un enlace
 * se traduce con el resto de la frase.
 *
 * Una marca que no está en `marcas` se muestra como texto común. No usa
 * hooks, así que sirve en el servidor y en el cliente.
 */
export function enriquecer(
  texto: string,
  marcas: Record<string, (contenido: string) => ReactNode>,
): ReactNode {
  const partes: ReactNode[] = [];
  let desde = 0;

  for (const coincidencia of texto.matchAll(MARCA)) {
    const [entera, nombre, contenido] = coincidencia;
    const inicio = coincidencia.index;

    if (inicio > desde) partes.push(texto.slice(desde, inicio));
    partes.push(marcas[nombre]?.(contenido) ?? contenido);
    desde = inicio + entera.length;
  }

  if (desde < texto.length) partes.push(texto.slice(desde));

  return partes.map((parte, i) => <Fragment key={i}>{parte}</Fragment>);
}
