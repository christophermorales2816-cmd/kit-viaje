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
  /**
   * Ids en orden de presentación. El Select se arma con esto.
   *
   * Vacío en un país dolarizado: no hay nada que cotizar (ver `isDollarized`).
   */
  quoteIds: readonly string[];
  /** `null` solo cuando no hay cotizaciones entre las que elegir. */
  defaultQuoteId: string | null;
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

/**
 * Un país dolarizado: la moneda local ES la moneda del resultado.
 *
 * Ecuador, El Salvador y Panamá cobran en dólares estadounidenses. No hay tipo
 * de cambio que traer ni brecha que medir, y eso tampoco es una versión pobre
 * de Argentina: es la otra punta del mismo eje. Para quien llega con dólares es
 * el caso más simple del continente, y la página tiene que decirlo así en vez
 * de mostrar "no pudimos traer las cotizaciones" por un número que no existe.
 *
 * Se define por las monedas y no con un flag aparte, para que no puedan
 * contradecirse: un corredor que dijera "dolarizado" con base en otra moneda
 * sería un estado que no debería poder escribirse.
 */
export function isDollarized(corridor: QuoteCorridor): boolean {
  return corridor.baseCurrency === corridor.quoteCurrency;
}

/**
 * Un tipo de cambio único, todavía sin fuente verificada.
 *
 * Es el caso de la mayoría del continente: una moneda que flota y una sola
 * cotización que importa. Ninguna de estas fuentes se pudo verificar contra una
 * respuesta real —la red de la sesión en que se cargaron bloqueaba dolarapi—, y
 * la regla después del `fechaAtualizacao` de Brasil es no adivinar: el
 * corredor queda declarado con `source: null` y la página dice que todavía no
 * hay cotización en vivo. Conectar una fuente es completar `source`.
 */
function unaCotizacion(
  corridor: string,
  baseCurrency: string,
  clock: QuoteCorridor["clock"],
): QuoteCorridor {
  return {
    corridor,
    baseCurrency,
    quoteCurrency: "USD",
    quoteIds: ["oficial"],
    defaultQuoteId: "oficial",
    referenceQuoteId: null,
    labels: { oficial: "Oficial" },
    clock,
    source: null,
  };
}

/** Un país dolarizado: no hay nada que cotizar (ver `isDollarized`). */
function dolarizado(
  corridor: string,
  clock: QuoteCorridor["clock"],
): QuoteCorridor {
  return {
    corridor,
    baseCurrency: "USD",
    quoteCurrency: "USD",
    quoteIds: [],
    defaultQuoteId: null,
    referenceQuoteId: null,
    labels: {},
    clock,
    source: null,
  };
}

/**
 * Venezuela y Cuba vuelven a la tesis de Argentina, más lejos todavía: la
 * cotización oficial y la que consigue un viajero en la calle pueden estar a
 * varias veces de distancia, y elegir mal cambia el tamaño del viaje entero.
 * Sin fuente verificada, por la misma regla que el resto.
 */
const VENEZUELA: QuoteCorridor = {
  corridor: "venezuela",
  baseCurrency: "VES",
  quoteCurrency: "USD",
  quoteIds: ["oficial", "paralelo"],
  defaultQuoteId: "paralelo",
  referenceQuoteId: "oficial",
  labels: { oficial: "Oficial (BCV)", paralelo: "Paralelo" },
  clock: { timeZone: "America/Caracas", label: "hora de Caracas" },
  source: null,
};

const CUBA: QuoteCorridor = {
  corridor: "cuba",
  baseCurrency: "CUP",
  quoteCurrency: "USD",
  quoteIds: ["oficial", "informal"],
  defaultQuoteId: "informal",
  referenceQuoteId: "oficial",
  labels: { oficial: "Oficial", informal: "Informal" },
  clock: { timeZone: "America/Havana", label: "hora de La Habana" },
  source: null,
};

const CORREDORES = [
  ARGENTINA,
  BRASIL,
  BOLIVIA,
  unaCotizacion("chile", "CLP", {
    timeZone: "America/Santiago",
    label: "hora de Santiago",
  }),
  unaCotizacion("uruguay", "UYU", {
    timeZone: "America/Montevideo",
    label: "hora de Montevideo",
  }),
  unaCotizacion("paraguay", "PYG", {
    timeZone: "America/Asuncion",
    label: "hora de Asunción",
  }),
  unaCotizacion("peru", "PEN", {
    timeZone: "America/Lima",
    label: "hora de Lima",
  }),
  dolarizado("ecuador", {
    timeZone: "America/Guayaquil",
    label: "hora de Quito",
  }),
  unaCotizacion("colombia", "COP", {
    timeZone: "America/Bogota",
    label: "hora de Bogotá",
  }),
  VENEZUELA,
  unaCotizacion("mexico", "MXN", {
    timeZone: "America/Mexico_City",
    label: "hora de Ciudad de México",
  }),
  unaCotizacion("guatemala", "GTQ", {
    timeZone: "America/Guatemala",
    label: "hora de Guatemala",
  }),
  unaCotizacion("honduras", "HNL", {
    timeZone: "America/Tegucigalpa",
    label: "hora de Tegucigalpa",
  }),
  dolarizado("el-salvador", {
    timeZone: "America/El_Salvador",
    label: "hora de San Salvador",
  }),
  unaCotizacion("nicaragua", "NIO", {
    timeZone: "America/Managua",
    label: "hora de Managua",
  }),
  unaCotizacion("costa-rica", "CRC", {
    timeZone: "America/Costa_Rica",
    label: "hora de San José",
  }),
  dolarizado("panama", {
    timeZone: "America/Panama",
    label: "hora de Panamá",
  }),
  CUBA,
  unaCotizacion("republica-dominicana", "DOP", {
    timeZone: "America/Santo_Domingo",
    label: "hora de Santo Domingo",
  }),
  // Europa. El euro, la libra, el franco suizo, las coronas, el zloty, el
  // forinto y el leu flotan y no tienen mercado paralelo: una sola cotización
  // contra el dólar, que es la moneda con la que se compara quien viaja desde
  // América Latina.
  unaCotizacion("espana", "EUR", {
    timeZone: "Europe/Madrid",
    label: "hora de Madrid",
  }),
  unaCotizacion("portugal", "EUR", {
    timeZone: "Europe/Lisbon",
    label: "hora de Lisboa",
  }),
  unaCotizacion("italia", "EUR", {
    timeZone: "Europe/Rome",
    label: "hora de Roma",
  }),
  unaCotizacion("francia", "EUR", {
    timeZone: "Europe/Paris",
    label: "hora de París",
  }),
  unaCotizacion("alemania", "EUR", {
    timeZone: "Europe/Berlin",
    label: "hora de Berlín",
  }),
  unaCotizacion("reino-unido", "GBP", {
    timeZone: "Europe/London",
    label: "hora de Londres",
  }),
  unaCotizacion("paises-bajos", "EUR", {
    timeZone: "Europe/Amsterdam",
    label: "hora de Ámsterdam",
  }),
  unaCotizacion("grecia", "EUR", {
    timeZone: "Europe/Athens",
    label: "hora de Atenas",
  }),
  unaCotizacion("suiza", "CHF", {
    timeZone: "Europe/Zurich",
    label: "hora de Zúrich",
  }),
  unaCotizacion("austria", "EUR", {
    timeZone: "Europe/Vienna",
    label: "hora de Viena",
  }),
  unaCotizacion("irlanda", "EUR", {
    timeZone: "Europe/Dublin",
    label: "hora de Dublín",
  }),
  unaCotizacion("belgica", "EUR", {
    timeZone: "Europe/Brussels",
    label: "hora de Bruselas",
  }),
  unaCotizacion("croacia", "EUR", {
    timeZone: "Europe/Zagreb",
    label: "hora de Zagreb",
  }),
  unaCotizacion("chequia", "CZK", {
    timeZone: "Europe/Prague",
    label: "hora de Praga",
  }),
  unaCotizacion("polonia", "PLN", {
    timeZone: "Europe/Warsaw",
    label: "hora de Varsovia",
  }),
  unaCotizacion("hungria", "HUF", {
    timeZone: "Europe/Budapest",
    label: "hora de Budapest",
  }),
  unaCotizacion("noruega", "NOK", {
    timeZone: "Europe/Oslo",
    label: "hora de Oslo",
  }),
  unaCotizacion("suecia", "SEK", {
    timeZone: "Europe/Stockholm",
    label: "hora de Estocolmo",
  }),
  unaCotizacion("dinamarca", "DKK", {
    timeZone: "Europe/Copenhagen",
    label: "hora de Copenhague",
  }),
  unaCotizacion("finlandia", "EUR", {
    timeZone: "Europe/Helsinki",
    label: "hora de Helsinki",
  }),
  unaCotizacion("islandia", "ISK", {
    timeZone: "Atlantic/Reykjavik",
    label: "hora de Reikiavik",
  }),
  unaCotizacion("eslovenia", "EUR", {
    timeZone: "Europe/Ljubljana",
    label: "hora de Liubliana",
  }),
  unaCotizacion("rumania", "RON", {
    timeZone: "Europe/Bucharest",
    label: "hora de Bucarest",
  }),
  unaCotizacion("bulgaria", "EUR", {
    timeZone: "Europe/Sofia",
    label: "hora de Sofía",
  }),
  unaCotizacion("estonia", "EUR", {
    timeZone: "Europe/Tallinn",
    label: "hora de Tallin",
  }),
  unaCotizacion("letonia", "EUR", {
    timeZone: "Europe/Riga",
    label: "hora de Riga",
  }),
  unaCotizacion("lituania", "EUR", {
    timeZone: "Europe/Vilnius",
    label: "hora de Vilna",
  }),
  unaCotizacion("eslovaquia", "EUR", {
    timeZone: "Europe/Bratislava",
    label: "hora de Bratislava",
  }),
  unaCotizacion("malta", "EUR", {
    timeZone: "Europe/Malta",
    label: "hora de La Valeta",
  }),
  unaCotizacion("luxemburgo", "EUR", {
    timeZone: "Europe/Luxembourg",
    label: "hora de Luxemburgo",
  }),
];

const POR_CORREDOR = new Map(CORREDORES.map((c) => [c.corridor, c]));

/** `undefined` cuando el corredor no tiene cotizaciones configuradas. */
export function getQuoteCorridor(corridor: string): QuoteCorridor | undefined {
  return POR_CORREDOR.get(corridor);
}

export function allQuoteCorridors(): QuoteCorridor[] {
  return [...CORREDORES];
}

/**
 * Qué puede decir la página sobre la conversión de un corredor.
 *
 *   en-vivo       hay fuente verificada: se traen las cotizaciones
 *   sin-fuente    hay cotizaciones pero ninguna API verificada todavía
 *   dolarizado    no hay nada que convertir
 *   sin-corredor  el slug no tiene corredor registrado (error de datos)
 *
 * Existe porque tres pantallas tenían que distinguir estos casos y cada una lo
 * hacía a su manera, o no lo hacía: el presupuesto de un viaje a Bolivia decía
 * "no pudimos traer las cotizaciones", que es afirmar una caída que no pasó.
 */
export type ConversionStatus =
  | "en-vivo"
  | "sin-fuente"
  | "dolarizado"
  | "sin-corredor";

/**
 * Lo mismo, para el presupuesto de un viaje: depende también de en qué moneda
 * están cargados los precios.
 *
 * Venezuela y Cuba tienen moneda propia y dos cotizaciones, pero sus precios
 * se cargan en dólares: con su inflación, un precio en bolívares o en pesos
 * cubanos queda viejo en semanas, y a un viajero ahí se le cobra en dólares.
 * Cuando los precios ya están en la moneda del resultado no hay nada que
 * convertir, tenga o no fuente el corredor — y si algún día la tiene,
 * convertir dólares "desde bolívares" daría un total sin sentido.
 */
export function budgetConversionStatus(
  corridor: string,
  priceCurrency: string,
): ConversionStatus {
  const config = POR_CORREDOR.get(corridor);

  if (config !== undefined && priceCurrency === config.quoteCurrency) {
    return "dolarizado";
  }

  return conversionStatus(corridor);
}

export function conversionStatus(corridor: string): ConversionStatus {
  const config = POR_CORREDOR.get(corridor);

  if (config === undefined) return "sin-corredor";
  if (isDollarized(config)) return "dolarizado";
  if (config.source === null) return "sin-fuente";
  return "en-vivo";
}

export {
  ARGENTINA as ARGENTINA_QUOTES,
  BOLIVIA as BOLIVIA_QUOTES,
  BRASIL as BRASIL_QUOTES,
};
