import type { DestinationGuide } from "./types";

/**
 * Guía de Camboya.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el caso de Venezuela y Cuba sin inflación de por
 * medio. Al viajero se le cobra en dólares y el riel es el vuelto, así que el
 * corredor queda en rieles y los precios van en USD, con centavos; el
 * presupuesto lo reconoce y no intenta convertir. La base es Siem Reap y no
 * Phnom Penh, como Antigua en Guatemala: es donde se duerme para ver Angkor.
 */
export const camboya: DestinationGuide = {
  slug: "camboya",
  country: "Camboya",
  subregion: "Sudeste Asiático",
  subhead:
    "Los templos de Angkor entre la selva, pueblos flotantes en el lago Tonlé Sap, la capital sobre el Mekong, pimienta en Kampot e islas tranquilas en el golfo. Un país chico, con una historia enorme y dura.",

  image: null,

  highlights: [
    {
      value: "US$",
      label: "es la moneda del viajero",
      note: "Hoteles, restaurantes, tuk-tuks y entradas cobran en dólares; el riel es el vuelto por debajo de un dólar. Los billetes rotos o escritos no se aceptan.",
    },
    {
      value: "Angkor",
      label: "la ciudad de templos del imperio jemer",
      note: "Angkor Wat al amanecer, las caras de piedra del Bayón y Ta Prohm entre raíces. Patrimonio de la humanidad, con pases de uno, tres o siete días.",
    },
    {
      value: "Tonlé Sap",
      label: "el lago que cambia de tamaño",
      note: "Con las lluvias, el Mekong lo hace crecer varias veces. Pueblos flotantes y casas sobre pilotes, a un rato de Siem Reap.",
    },
    {
      value: "Abril",
      label: "el mes más caluroso",
      note: "La estación seca va de noviembre a abril, y cierra con el calor más fuerte del año. De noviembre a enero es más fresco.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Camboya",
      body: [
        "Casi todos los pasaportes latinoamericanos necesitan visa: se tramita online como visa electrónica, en el sitio oficial, o se paga a la llegada en los aeropuertos y algunos pasos de frontera. Verificá el tuyo antes de comprar el pasaje.",
        "Usá solo el sitio oficial para la visa electrónica: hay páginas intermediarias que cobran de más. Camboya pide además un formulario digital de llegada: fijate qué rige cuando viajes.",
        "El pasaporte tiene que tener vigencia de sobra y páginas libres. Para la visa a la llegada, una foto carnet ayuda.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Camboya",
      body: [
        "Al viajero se le cobra en dólares: hoteles, restaurantes, tuk-tuks y entradas. El riel, la moneda local, aparece como vuelto por debajo de un dólar y en mercados y puestos chicos.",
        "Llevá billetes de dólar nuevos y sanos: los rotos, manchados o escritos no se aceptan. Los cajeros entregan dólares y cobran un cargo por extracción.",
        "La tarjeta funciona en hoteles y restaurantes más grandes. Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Seco y lluvioso",
      body: [
        "Camboya está en el trópico: hace calor todo el año. La estación seca va de noviembre a abril; de noviembre a enero es más fresca y agradable, y abril es el mes más caluroso.",
        "La de lluvias va de mayo a octubre, con chaparrones fuertes por la tarde. El paisaje se pone verde, el Tonlé Sap crece y algunos caminos rurales se embarran.",
        "Mondulkiri, en la meseta del este, tiene noches frescas. La costa de Kampot y Kep es la que más llueve.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco, menos caluroso y la mejor luz para Angkor. Es también la temporada más llena.",
        "En la temporada de lluvias hay menos gente en los templos y el campo está verde; los chaparrones suelen ser cortos. El Año Nuevo jemer, a mediados de abril, cierra negocios varios días.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Camboya",
      body: [
        "Entre ciudades, buses y minivans, y vuelos entre Phnom Penh y Siem Reap. A Koh Rong se llega en ferry desde Sihanoukville.",
        "En las ciudades, tuk-tuk: con aplicación (PassApp o Grab) el precio se ve antes de subir. Para los templos de Angkor, un tuk-tuk con chofer por el día.",
        "Las precauciones son las de cualquier destino turístico: la mochila adelante en los mercados y el celular firme en la mano en el tuk-tuk.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Angkor, una de las maravillas arqueológicas del mundo, y la memoria de la historia reciente en Phnom Penh.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Amok de pescado, lok lak, el cangrejo con pimienta de Kep y los mercados.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "El lago Tonlé Sap, los arrozales, el Mekong y las colinas de Mondulkiri.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Koh Rong y las islas del golfo, tranquilas; no son el motivo principal del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Siem Reap y Phnom Penh son fáciles; el resto pide buses largos y caminos lentos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Los precios están en dólares: lo que ves es lo que pagás, sin conversión.",
    },
  ],

  shines: [
    "Angkor, que justifica el viaje por sí solo.",
    "Muy barato, y en dólares.",
    "Gente cálida y un ritmo tranquilo.",
  ],

  costs: [
    "Calor fuerte en marzo y abril.",
    "Caminos lentos fuera de las ciudades principales.",
    "Billetes de dólar que tienen que estar impecables.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima. La base es Siem Reap, por Angkor. Los precios están en dólares, como se le cobra al viajero, y son órdenes de magnitud: el presupuesto no necesita convertirlos.",

  places: [
    {
      id: "siem-reap",
      name: "Siem Reap",
      region: "Siem Reap",
      tag: "La puerta de Angkor",
      blurb:
        "Angkor Wat, el Bayón, Ta Prohm y decenas de templos más, el mercado nocturno y los pueblos flotantes del Tonlé Sap. Es la base del planificador: caluroso todo el año, seco de noviembre a abril.",
      coords: [13.3633, 103.8564],
      featured: true,
      image: null,
    },
    {
      id: "phnom-penh",
      name: "Phnom Penh",
      region: "Phnom Penh",
      tag: "La capital sobre el Mekong",
      blurb:
        "El Palacio Real y la Pagoda de Plata, el Museo Nacional, el mercado central y los sitios de memoria del genocidio jemer rojo, que se visitan con respeto.",
      coords: [11.5564, 104.9282],
      image: null,
    },
    {
      id: "battambang",
      name: "Battambang",
      region: "Battambang",
      tag: "El tren de bambú",
      blurb:
        "Arquitectura colonial francesa, templos en las colinas, el tren de bambú y un circo social reconocido en el mundo.",
      coords: [13.0957, 103.2022],
      image: null,
    },
    {
      id: "kampot",
      name: "Kampot",
      region: "Kampot",
      tag: "La pimienta y el río",
      blurb:
        "Un pueblo junto al río, plantaciones de la famosa pimienta de Kampot y el parque nacional de Bokor en la montaña.",
      coords: [10.6104, 104.1815],
      image: null,
    },
    {
      id: "kep",
      name: "Kep",
      region: "Kep",
      tag: "El cangrejo con pimienta",
      blurb:
        "Un balneario tranquilo con su mercado de cangrejos, villas antiguas y la isla del Conejo enfrente.",
      coords: [10.4829, 104.3167],
      image: null,
    },
    {
      id: "koh-rong",
      name: "Koh Rong",
      region: "Preah Sihanouk",
      tag: "Islas del golfo",
      blurb:
        "Playas de arena blanca, plancton luminoso de noche y pueblos de pescadores. Se llega en ferry desde Sihanoukville; la temporada de lluvias es la más intensa del país.",
      coords: [10.7, 103.25],
      image: null,
    },
    {
      id: "kratie",
      name: "Kratie",
      region: "Kratie",
      tag: "Los delfines del Mekong",
      blurb:
        "Un pueblo sobre el Mekong donde se ven los delfines del Irrawaddy desde un bote, y paseos en bicicleta por las islas del río.",
      coords: [12.4881, 106.0188],
      image: null,
    },
    {
      id: "mondulkiri",
      name: "Mondulkiri",
      region: "Mondulkiri",
      tag: "Colinas y elefantes",
      blurb:
        "Colinas verdes, cascadas y santuarios de elefantes sin montarlos, en la meseta del este. Noches frescas en diciembre y enero.",
      coords: [12.4558, 107.1881],
      image: null,
    },
    {
      id: "kampong-thom",
      name: "Kampong Thom y Sambor Prei Kuk",
      region: "Kampong Thom",
      tag: "Templos anteriores a Angkor",
      blurb:
        "Templos de ladrillo entre el bosque, de antes de Angkor y patrimonio de la humanidad, casi sin visitantes.",
      coords: [12.7111, 104.8887],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Camboya es calor todo el año: ropa liviana que se seque rápido, sombrero, protector, repelente y mucha agua. Para Angkor, algo que cubra hombros y rodillas, que en los templos se exige, y calzado cómodo para escalones altos. De mayo a octubre, un impermeable liviano. Y dólares en billetes nuevos y sanos.",
    keyPoints: [
      "Trópico: seco de noviembre a abril, lluvias de mayo a octubre; abril es el mes más caluroso.",
      "Al viajero se le cobra en dólares: llevá billetes nuevos y sanos.",
      "Los templos piden hombros y rodillas cubiertos.",
      "La visa electrónica, solo en el sitio oficial.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido que cubra hombros y rodillas, sombrero, protector, repelente y mucha agua. De mayo a octubre, un impermeable liviano.",
      templado:
        "Ropa liviana y un buzo para la noche: son las noches de diciembre y enero en Mondulkiri.",
      fresco:
        "Un buzo abrigado para las madrugadas de la meseta del este, que en enero pueden ser frías.",
      frio: "No hay ciudades con frío en el planificador; un buzo alcanza en cualquier época.",
    },
    plug: {
      types: "Tipo A, tipo C y tipo G",
      voltage: "230 V, 50 Hz",
      note: "Muchos tomas aceptan patas planas y redondas; algunos hoteles nuevos tienen el británico. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares nuevos y sanos",
          body: "Los billetes rotos, manchados o escritos no se aceptan. Pedí billetes chicos: el vuelto en dólares a veces no existe.",
        },
        {
          title: "Recorré Angkor con un tuk-tuk por el día",
          body: "El chofer espera en cada templo. Empezá al amanecer, descansá al mediodía y volvé a la tarde.",
        },
        {
          title: "Comprá el pase de Angkor en la boletería oficial",
          body: "O en el sitio oficial. Lleva tu foto y se controla en cada templo.",
        },
        {
          title: "Usá PassApp o Grab",
          body: "Tuk-tuks y autos con precio fijo antes de subir.",
        },
        {
          title: "Andá a Kratie a ver los delfines",
          body: "Los delfines del Mekong se ven desde un bote, a la mañana temprano o al atardecer.",
        },
        {
          title: "Elegí pagar en dólares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a los templos descubierto",
          body: "En Angkor Wat no te dejan subir a la parte alta con musculosa o short.",
        },
        {
          title: "No toques a un monje",
          body: "Las mujeres no deben tocarlos ni darles algo en la mano: se apoya cerca y ellos lo toman.",
        },
        {
          title: "No salgas de los senderos en templos alejados",
          body: "En el campo todavía se limpian restos de la guerra: los senderos marcados son los que se usan.",
        },
        {
          title: "No uses billetes rotos",
          body: "Nadie te los va a aceptar, y te los pueden dar de vuelto: revisá antes de guardarlos.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada es barata y está en todos lados.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "angkor",
        title: "Para Angkor",
        notice: {
          tone: "info",
          title: "Temprano y cubierto",
          body: "El amanecer es la mejor hora y el mediodía, la peor. Hombros y rodillas cubiertos para entrar a los templos.",
        },
        summary: "Lo que pide un día de templos",
        items: [
          "Ropa liviana que cubra hombros y rodillas",
          "Sombrero, protector y mucha agua",
          "Calzado cómodo para escalones altos",
          "Linterna o frontal para el amanecer",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Tramitá la visa antes de viajar",
          body: "Casi todos los pasaportes latinoamericanos la necesitan: visa electrónica en el sitio oficial o visa a la llegada. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas libres",
          "La visa electrónica impresa, o una foto carnet para la visa a la llegada",
          "El formulario digital de llegada completado",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes nuevos, sanos y chicos",
          "Una tarjeta para hoteles y restaurantes grandes",
          "Un lugar aparte para los rieles del vuelto",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación y algo para el estómago",
          "Repelente de mosquitos",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo",
        why: "Hace calor todo el año; solo la meseta del este tiene noches frescas.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Billetes de dólar gastados",
        why: "Los rotos, manchados o escritos no se aceptan.",
        instead: "Billetes nuevos y sanos, de valores chicos.",
      },
      {
        leave: "Musculosas y shorts para Angkor",
        why: "En los templos se exigen hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo de tela fresca.",
      },
      {
        leave: "Ojotas para los templos",
        why: "Los escalones de Angkor son altos, empinados y gastados.",
        instead: "Zapatillas livianas o sandalias de trekking.",
      },
      {
        leave: "Un paraguas grande",
        why: "Los chaparrones son cortos y el calor sigue.",
        instead: "Un impermeable liviano.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Camboya?",
        answer:
          "Casi todos los pasaportes latinoamericanos sí: visa electrónica en el sitio oficial o visa a la llegada. Verificalo antes de viajar.",
      },
      {
        question: "¿En qué moneda se paga?",
        answer:
          "En dólares, en casi todo lo que usa un viajero. El riel aparece como vuelto por debajo de un dólar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero: seco y menos caluroso. Marzo y abril son muy calurosos.",
      },
      {
        question: "¿Cuántos días hacen falta para Angkor?",
        answer:
          "Dos o tres días alcanzan para los templos principales sin correr. Hay pases de uno, tres y siete días.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas aceptan patas planas y redondas a 230 V. Un adaptador universal resuelve cualquier caso.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria, pero es bien recibida: a guías, choferes y en restaurantes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Qué ropa llevo para los templos?",
        answer:
          "Algo que cubra hombros y rodillas, y calzado cómodo para escalones altos.",
      },
    ],
  },
};
