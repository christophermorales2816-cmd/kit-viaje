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
  /**
   * Huso con el que se muestra la hora de la cotización, y cómo nombrarlo.
   *
   * El sello decía "hora de Buenos Aires" en las dos guías. Para Brasil la hora
   * coincide —los dos husos son UTC−3 y ninguno de los dos países usa horario
   * de verano— pero la etiqueta afirmaba una ciudad que no era la del destino.
   * Que coincida hoy no la hace cierta.
   */
  clock: { timeZone: string; label: string };
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
  clock: {
    timeZone: "America/Argentina/Buenos_Aires",
    label: "hora de Buenos Aires",
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
 * VERIFICADO contra la respuesta real del endpoint. Devuelve un objeto suelto,
 * no un array:
 *
 *   {"moeda":"USD","nome":"Dólar","compra":5.1106,"venda":5.1114,
 *    "fechoAnterior":5.0852,"dataAtualizacao":"2023-10-01T21:59:59.000Z"}
 *
 * De los cuatro campos que había que adivinar, tres estaban bien y uno no:
 * la fecha es `dataAtualizacao`, no `fechaAtualizacao`. El error fue mezclar
 * el "fecha" del español con el portugués, que dice "data". Es exactamente el
 * tipo de detalle por el que los nombres de campo son configuración y no
 * código: corregirlo fue una palabra.
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
  clock: { timeZone: "America/Sao_Paulo", label: "hora de Brasilia" },
  source: {
    name: "dolarapi Brasil",
    url: "https://br.dolarapi.com/v1/cotacoes/usd",
    fields: {
      key: "moeda",
      buy: "compra",
      sell: "venda",
      updatedAt: "dataAtualizacao",
      currency: "moeda",
    },
    keyToQuoteId: { USD: "comercial" },
  },
};

/**
 * Bolivia vuelve a la tesis de Argentina: hay más de un tipo de cambio para la
 * misma moneda, y cuál conseguís cambia el tamaño del gasto.
 *
 * SIN FUENTE TODAVÍA. `source: null` no es un olvido: es el estado real. No se
 * verificó ningún endpoint que publique las dos cotizaciones bolivianas, y la
 * lección de la fuente brasileña —tres de cuatro nombres de campo bien, uno
 * mal— es que adivinar una API sale caro. Declarar el corredor sin fuente es
 * honesto y no rompe nada: la guía dice que todavía no hay cotización en vivo,
 * y el resto de la página funciona igual.
 *
 * Cuando haya un endpoint verificado, esto es completar `source` con sus
 * nombres de campo. No hace falta tocar código.
 */
const BOLIVIA: QuoteCorridor = {
  corridor: "bolivia",
  baseCurrency: "BOB",
  quoteCurrency: "USD",
  quoteIds: ["oficial", "paralelo"],
  defaultQuoteId: "paralelo",
  referenceQuoteId: "oficial",
  labels: {
    oficial: "Oficial",
    paralelo: "Paralelo",
  },
  clock: { timeZone: "America/La_Paz", label: "hora de La Paz" },
  source: null,
};

const CORREDORES = [ARGENTINA, BRASIL, BOLIVIA];

const POR_CORREDOR = new Map(CORREDORES.map((c) => [c.corridor, c]));

/** `undefined` cuando el corredor no tiene cotizaciones configuradas. */
export function getQuoteCorridor(corridor: string): QuoteCorridor | undefined {
  return POR_CORREDOR.get(corridor);
}

export function allQuoteCorridors(): QuoteCorridor[] {
  return [...CORREDORES];
}

export {
  ARGENTINA as ARGENTINA_QUOTES,
  BOLIVIA as BOLIVIA_QUOTES,
  BRASIL as BRASIL_QUOTES,
};
