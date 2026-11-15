import { allCatalogos } from "@/content/comidas";
import { allGuides, getGuide } from "@/content/guias";
import { continentesDelMenu } from "@/content/guias/continentes";
import { allQuoteCorridors } from "@/lib/quotes";

/**
 * Los números del sitio, contados del contenido (spec, 8.1 y 19.4).
 *
 * Estaban en la portada; ahora están en /nosotros. Ninguno se escribe a mano:
 * "2 países" estuvo fijo mientras había tres, y un dato que hay que acordarse
 * de actualizar en cada país es un dato que va a quedar viejo.
 */

export interface Estadistica {
  valor: string;
  etiqueta: string;
  nota: string;
}

export function estadisticasDelSitio(): Estadistica[] {
  const guias = allGuides();

  /**
   * Las cotizaciones que de verdad se traen en vivo, por país: solo los
   * corredores que tienen `source`.
   */
  const enVivo = allQuoteCorridors()
    .filter((corredor) => corredor.source !== null)
    .map((corredor) => ({
      pais: getGuide(corredor.corridor)?.country ?? corredor.corridor,
      cuantas: corredor.quoteIds.length,
    }));

  const catalogos = allCatalogos();
  const platos = catalogos.reduce(
    (total, catalogo) => total + catalogo.platos.length,
    0,
  );

  return [
    {
      // "Destinos" y no "países" desde que entraron Hong Kong, Macao y Taiwán
      // (spec, 14.11): tienen moneda y frontera propias, que es lo que el
      // modelo llama un corredor.
      valor: String(guias.length),
      etiqueta: guias.length === 1 ? "destino" : "destinos",
      nota: continentesDelMenu(guias)
        .filter(({ cantidad }) => cantidad > 0)
        .map(({ nombre, cantidad }) => `${cantidad} en ${nombre}`)
        .join(", "),
    },
    {
      valor: String(platos),
      etiqueta: "platos y bebidas",
      nota: `De ${catalogos.length} países, con dónde probarlos`,
    },
    {
      valor: String(enVivo.reduce((total, { cuantas }) => total + cuantas, 0)),
      etiqueta: "cotizaciones en vivo",
      nota: enVivo
        .map(({ pais, cuantas }) => `${cuantas} en ${pais}`)
        .join(", "),
    },
    { valor: "0", etiqueta: "registros", nota: "Sin cuenta y sin mail" },
  ];
}
