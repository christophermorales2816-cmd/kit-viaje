import type { ReactNode } from "react";
import { prerenderToNodeStream } from "react-dom/static";

/**
 * El HTML de un árbol de componentes, esperando a los que son asíncronos.
 *
 * `renderToStaticMarkup` no espera: un Server Component asíncrono —los que
 * piden sus textos con `textos()` (spec, 21.1)— lo hace fallar.
 * `prerenderToNodeStream` sí espera, y se usa igual en los tests.
 *
 * Saca los `<!-- -->` que React pone entre dos textos seguidos ("Cómo puntúa
 * <!-- -->Argentina"), que no se ven y no están en el HTML que llega al
 * navegador después de hidratar: así los tests buscan la frase como se lee.
 */
export async function renderizar(nodo: ReactNode): Promise<string> {
  const { prelude } = await prerenderToNodeStream(nodo);
  let html = "";

  for await (const parte of prelude) html += parte;

  return html.replaceAll("<!-- -->", "");
}
