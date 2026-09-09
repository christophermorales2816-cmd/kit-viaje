/**
 * Qué cotizaciones tiene cada corredor, y de dónde salen (spec, sección 10).
 *
 * Hasta el MVP las cuatro cotizaciones argentinas estaban escritas como una
 * unión cerrada en el motor de presupuesto. Eso alcanzaba con un solo corredor
 * y deja de alcanzar con dos: Brasil tiene un único tipo de cambio, y "blue"
 * o "MEP" no significan nada ahí.
 *
 * La salida es la misma que ya se había tomado para los buckets de clima
 * (`ClimateBucketId` es `string` y no una unión cerrada, justamente para no
 * necesitar un deploy por cada bucket nuevo): el id de cotización pasa a ser
 * `string` y el conjunto válido lo define el corredor.
 *
 * LOS NOMBRES DE LOS CAMPOS TAMBIÉN SON DATO. No es adorno: cada fuente
 * publica el mismo contenido con otro dialecto —`venta` acá, `venda` allá— y
 * con esto un mapper genérico sirve para las dos. Corregir un campo mal
 * adivinado es editar tres strings de este archivo, no escribir otro mapper.
 */

/** Cómo se llaman los campos en las filas que publica la fuente. */
export interface QuoteSourceFields {
  /** Campo que identifica de qué cotización se trata. */
  key: string;
  buy: string;
  sell: string;
  updatedAt: string;
  /** Campo con la moneda cotizada. Ausente ⇒ se asume `quoteCurrency`. */
  currency?: string;
}

export interface QuoteSource {
  name: string;
  url: string;
  fields: QuoteSourceFields;
  /** Valor de `fields.key` → id de cotización. Lo que no está, se ignora. */
  keyToQuoteId: Record<string, string>;
}

export interface QuoteCorridor {
  corridor: string;
  /** Moneda local, la que se convierte. ISO 4217. */
  baseCurrency: string;
  /** Moneda del resultado. ISO 4217. */
  quoteCurrency: string;
  /** Ids en orden de presentación. El Select se arma con esto. */
  quoteIds: readonly string[];
  defaultQuoteId: string;
  /**
   * Contra qué cotización se mide la brecha. `null` cuando el corredor tiene
   * una sola y la brecha no significa nada — que es el caso de Brasil, y la
   * razón por la que esto es un campo y no una constante "oficial".
   */
  referenceQuoteId: string | null;
  labels: Record<string, string>;
  source: QuoteSource | null;
}

const ARGENTINA: QuoteCorridor = {
  corridor: "argentina",
  baseCurrency: "ARS",
  quoteCurrency: "USD",
  quoteIds: ["oficial", "blue", "mep", "ccl"],
  defaultQuoteId: "blue",
  referenceQuoteId: "oficial",
  labels: {
    oficial: "Oficial",
    blue: "Blue",
    mep: "MEP",
    ccl: "CCL",
  },
  source: {
    name: "dolarapi",
    url: "https://dolarapi.com/v1/dolares",
    fields: {
      key: "casa",
      buy: "compra",
      sell: "venta",
      updatedAt: "fechaActualizacion",
      currency: "moneda",
    },
    // mayorista, cripto y tarjeta no son parte del producto.
    keyToQuoteId: {
      oficial: "oficial",
      blue: "blue",
      bolsa: "mep",
      contadoconliqui: "ccl",
    },
  },
};

/**
 * Brasil tiene UNA cotización, y eso no es una versión pobre de Argentina: es
 * lo que hay. Inventar una segunda para que la pantalla se vea igual sería
 * mostrar un número que no existe.
 *
 * ADVERTENCIA: el `source` de este corredor está escrito contra la forma
 * documentada del endpoint, pero no se pudo verificar contra la API real —
 * el entorno donde se escribió no tiene salida a internet. Si los nombres de
 * los campos no coinciden, `fetchQuotes` devuelve `ok: false` y la página
 * dice que no pudo traer la cotización: no rompe nada. Corregirlo es editar
 * `fields` acá arriba.
 */
const BRASIL: QuoteCorridor = {
  corridor: "brasil",
  baseCurrency: "BRL",
  quoteCurrency: "USD",
  quoteIds: ["comercial"],
  defaultQuoteId: "comercial",
  referenceQuoteId: null,
  labels: {
    comercial: "Comercial",
  },
  source: {
    name: "dolarapi Brasil",
    url: "https://br.dolarapi.com/v1/cotacoes/usd",
    fields: {
      key: "moeda",
      buy: "compra",
      sell: "venda",
      updatedAt: "fechaAtualizacao",
      currency: "moeda",
    },
    keyToQuoteId: { USD: "comercial" },
  },
};

const CORREDORES = [ARGENTINA, BRASIL];

const POR_CORREDOR = new Map(CORREDORES.map((c) => [c.corridor, c]));

/** `undefined` cuando el corredor no tiene cotizaciones configuradas. */
export function getQuoteCorridor(corridor: string): QuoteCorridor | undefined {
  return POR_CORREDOR.get(corridor);
}

export function allQuoteCorridors(): QuoteCorridor[] {
  return [...CORREDORES];
}

export { ARGENTINA as ARGENTINA_QUOTES, BRASIL as BRASIL_QUOTES };
