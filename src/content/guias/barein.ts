import type { DestinationGuide } from "./types";

/**
 * Guía de Baréin.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una isla chica como Catar o Singapur, donde las
 * nueve "ciudades" comparten casi el mismo clima, y el dinar con centavos
 * (fils). A diferencia de sus vecinos, el alcohol se vende en hoteles y bares
 * con licencia: se dice como dato, porque cambia qué se puede llevar.
 */
export const barein: DestinationGuide = {
  slug: "barein",
  country: "Baréin",
  subregion: "Asia Occidental",
  subhead:
    "Una isla del Golfo con cuatro mil años de historia: el fuerte de la antigua Dilmun, miles de túmulos en el desierto, el camino de los perleros de Muharraq y un zoco junto a torres de vidrio. Chica, abierta y fácil de recorrer.",

  image: null,

  highlights: [
    {
      value: "+35 °C",
      label: "de junio a septiembre, con humedad",
      note: "El verano es caluroso y húmedo. De noviembre a marzo, en cambio, el clima es templado y agradable.",
    },
    {
      value: "Dilmun",
      label: "túmulos funerarios de miles de años",
      note: "Miles de montículos en el desierto, de una civilización de la Edad de Bronce, patrimonio de la humanidad, igual que el fuerte de Qal'at al-Bahrain.",
    },
    {
      value: "Perlas",
      label: "el camino de los perleros, en Muharraq",
      note: "Casas de mercaderes, almacenes y bancos de ostras que cuentan la economía de la isla antes del petróleo. Patrimonio de la humanidad.",
    },
    {
      value: "Calzada",
      label: "de veinticinco kilómetros a Arabia Saudita",
      note: "La calzada del rey Fahd une la isla con el continente, con un puesto de frontera en el medio del mar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Baréin",
      body: [
        "Muchos pasaportes sacan la visa electrónica online o a la llegada; otros necesitan tramitarla antes. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida y la reserva del hotel.",
        "Si pensás cruzar a Arabia Saudita por la calzada, necesitás también la visa saudita.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Baréin",
      body: [
        "La moneda es el dinar bareiní, que se divide en mil fils y está atado al dólar. La tarjeta funciona en casi todos lados.",
        "Hay cajeros en toda la isla. Algo de efectivo sirve para el zoco y los taxis de calle.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dinares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Una isla en el Golfo",
      body: [
        "Baréin es hemisferio norte. De noviembre a marzo el clima es templado, con noches frescas y algo de lluvia en invierno.",
        "De junio a septiembre hace calor y mucha humedad, con máximas cerca de los cuarenta grados.",
        "El interior, en Sakhir y Riffa, es un poco más seco y caluroso que la costa. Casi no llueve.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: días templados y la temporada de terrazas y eventos al aire libre.",
        "En verano la vida pasa adentro y a la noche. Durante el Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Baréin",
      body: [
        "La isla es chica: casi todo queda a menos de media hora en auto.",
        "No hay metro. Se anda en taxi por app, en taxi de calle o en los buses públicos, y muchos visitantes alquilan auto.",
        "A las islas Hawar se llega en lancha desde la costa sur.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "El fuerte de Dilmun, los túmulos y el camino de los perleros, los tres patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Machboos, pescado del Golfo, halwa y la cocina de todo el mundo de Adliya.",
    },
    {
      dimension: "Paisaje",
      score: 3,
      rationale:
        "Desierto llano y costa; el paisaje no es el motivo del viaje.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Agua cálida y playas de hoteles y clubes; las islas Hawar son lo más natural.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Hoteles y restaurantes caros; comer en la calle y moverse en taxi es razonable.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale: "Una isla chica, con tarjeta en todos lados y todo cerca.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El dinar está atado al dólar.",
    },
  ],

  shines: [
    "Mucha historia en una isla chica.",
    "Todo queda cerca.",
    "Más abierto que sus vecinos del Golfo.",
  ],

  costs: ["El verano caluroso y húmedo.", "Caro.", "Poco transporte público."],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima: la isla es chica y el clima casi no cambia, salvo un poco más de calor en el interior. Los precios están en dinares bareiníes, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "manama",
      name: "Manama",
      region: "Capital",
      tag: "El zoco y las torres",
      blurb:
        "La puerta de Bab al-Bahrain y su zoco, la Gran Mezquita Al Fateh, el museo nacional y torres de vidrio sobre el mar. Es la base del planificador: inviernos templados, veranos calurosos y húmedos.",
      coords: [26.2285, 50.586],
      featured: true,
      image: null,
    },
    {
      id: "muharraq",
      name: "Muharraq",
      region: "Muharraq",
      tag: "El camino de los perleros",
      blurb:
        "Callecitas con casas de mercaderes de perlas restauradas, patrimonio de la humanidad, y cafés tradicionales. La antigua capital.",
      coords: [26.2572, 50.6119],
      image: null,
    },
    {
      id: "qalat-al-bahrain",
      name: "Qal'at al-Bahrain",
      region: "Norte",
      tag: "El fuerte de Dilmun",
      blurb:
        "Un fuerte portugués sobre capas de ciudades de cuatro mil años, patrimonio de la humanidad, con museo y atardeceres sobre el mar.",
      coords: [26.2333, 50.52],
      image: null,
    },
    {
      id: "adliya",
      name: "Adliya",
      region: "Capital",
      tag: "Restaurantes y galerías",
      blurb:
        "El barrio de restaurantes, cafés, bares y galerías de arte de Manama. La vida nocturna de la isla.",
      coords: [26.2111, 50.5939],
      image: null,
    },
    {
      id: "amwaj",
      name: "Islas Amwaj",
      region: "Muharraq",
      tag: "Islas artificiales",
      blurb:
        "Islas construidas sobre el mar, con playas, una marina y una plaza de restaurantes junto al agua.",
      coords: [26.29, 50.66],
      image: null,
    },
    {
      id: "sakhir",
      name: "Sakhir y el Árbol de la Vida",
      region: "Sur",
      tag: "Fórmula 1 y desierto",
      blurb:
        "El circuito internacional, donde se corre la Fórmula 1, y en el desierto, un árbol solitario de cientos de años. Más seco y caluroso que la costa.",
      coords: [26.0325, 50.5106],
      image: null,
    },
    {
      id: "zallaq",
      name: "Zallaq",
      region: "Sur",
      tag: "Playas del oeste",
      blurb:
        "La costa oeste de la isla, con resorts, playas y atardeceres sobre el Golfo.",
      coords: [26.05, 50.48],
      image: null,
    },
    {
      id: "islas-hawar",
      name: "Islas Hawar",
      region: "Sur",
      tag: "Islas y aves",
      blurb:
        "Un archipiélago casi deshabitado frente a Catar, con playas, aves marinas y dugongos en el mar. Se llega en lancha.",
      coords: [25.65, 50.78],
      image: null,
    },
    {
      id: "riffa",
      name: "Riffa",
      region: "Sur",
      tag: "El fuerte del jeque",
      blurb:
        "El fuerte de Riffa, sobre un valle, con vista a la isla, y el interior más tranquilo de Baréin.",
      coords: [26.13, 50.555],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Baréin depende de la estación. De noviembre a marzo, ropa liviana y un buzo para la noche. En verano, ropa liviana y holgada, sombrero y protector, y un abrigo liviano para el aire acondicionado. Siempre, algo que cubra hombros y rodillas para las mezquitas y el zoco, y traje de baño para las playas de hoteles.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de noviembre a marzo.",
      "Verano caluroso y húmedo, cerca de los cuarenta grados.",
      "La isla es chica: casi todo queda a media hora.",
      "La tarjeta funciona en casi todos lados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada, sombrero, protector y agua, y un abrigo liviano para los interiores con aire acondicionado.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno de la isla, la mejor época.",
      fresco:
        "Un polar y una campera liviana para las noches de diciembre y enero.",
      frio: "Un abrigo para las noches más frescas del invierno.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "El tipo G es el británico, de tres patas planas. Un adaptador universal lo resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Visitá la Gran Mezquita Al Fateh",
          body: "Abre a visitantes fuera de los horarios de oración y presta ropa para cubrirse.",
        },
        {
          title: "Caminá Muharraq al atardecer",
          body: "El camino de los perleros se recorre a pie, y con menos sol es mucho mejor.",
        },
        {
          title: "Andá al fuerte al atardecer",
          body: "Qal'at al-Bahrain tiene una de las mejores puestas de sol de la isla.",
        },
        {
          title: "Pedí taxi por app",
          body: "Es lo más simple para moverse; los taxis de calle no siempre usan taxímetro.",
        },
        {
          title: "Pagá con tarjeta",
          body: "Funciona en casi todos lados.",
        },
        {
          title: "Elegí pagar en dinares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros, rodillas y, para las mujeres, el pelo. Sin zapatos adentro.",
        },
        {
          title: "No caminés al mediodía en verano",
          body: "Con calor y humedad, cualquier trayecto se hace en auto.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No cruces a Arabia Saudita sin visa",
          body: "La calzada tiene frontera, y la visa saudita es aparte.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Es agua desalinizada; casi todos toman embotellada.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos",
        notice: {
          tone: "warn",
          title: "Verificá la visa",
          body: "Muchos pasaportes sacan la visa online o a la llegada, pero no todos. Confirmalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Reserva del hotel",
          "Pasaje de salida",
        ],
      },
      {
        id: "calor",
        title: "Para el verano",
        notice: {
          tone: "info",
          title: "Calor húmedo",
          body: "De junio a septiembre hace calor y mucha humedad. Ropa que respire y un abrigo liviano para el aire acondicionado.",
        },
        summary: "Lo que pide el verano",
        items: [
          "Ropa liviana y holgada",
          "Sombrero y anteojos de sol",
          "Protector solar",
          "Un abrigo liviano para los interiores",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para la cabeza",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación para el calor",
          "Protector solar",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa muy corta para la calle",
        why: "En el zoco y las mezquitas se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Planes a pie en verano",
        why: "El calor húmedo hace pesado caminar al mediodía.",
        instead: "Taxi por app y salidas a la tarde.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El aire acondicionado de los interiores es fuerte.",
        instead: "Un abrigo liviano.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta.",
        instead: "La tarjeta, y algo de efectivo para el zoco.",
      },
      {
        leave: "Un cruce a Arabia Saudita sin planear",
        why: "La calzada tiene frontera y pide visa saudita.",
        instead: "La visa saudita tramitada antes.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Baréin?",
        answer:
          "Muchos pasaportes la sacan online o a la llegada; otros, antes. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a marzo. En verano hace calor y mucha humedad.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí, en hoteles, bares y restaurantes con licencia. En la calle no se toma.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Baréin usa el tipo G, de tres patas planas, a 230 V.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Muchas cuentas ya suman un cargo por servicio. Si no, alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Es desalinizada y tratada, pero casi todos toman embotellada.",
      },
      {
        question: "¿Se puede ir a Arabia Saudita en el día?",
        answer:
          "Por la calzada del rey Fahd, sí, con visa saudita y pasando la frontera, que en fin de semana puede demorar.",
      },
      {
        question: "¿Cómo llego a las islas Hawar?",
        answer: "En lancha desde la costa sur de la isla principal.",
      },
    ],
  },
};
