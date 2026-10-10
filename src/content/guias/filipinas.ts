import type { DestinationGuide } from "./types";

/**
 * Guía de Filipinas.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: los tifones, que se dicen como clima —qué meses,
 * qué hacer con el itinerario— y no como alerta. Siargao, en la costa del
 * Pacífico, tiene la lluvia en los meses en que Palawan está seco. El viaje se
 * arma con vuelos entre islas, así que el bolso de mano y el margen entre
 * conexiones pesan más que en otros países.
 */
export const filipinas: DestinationGuide = {
  slug: "filipinas",
  country: "Filipinas",
  subregion: "Sudeste Asiático",
  subhead:
    "Lagunas entre acantilados en Palawan, playas de arena blanca en Boracay, olas en Siargao, las colinas de chocolate de Bohol y terrazas de arroz en la cordillera. Siete mil islas para armar el viaje a medida.",

  image: null,

  highlights: [
    {
      value: "+7.000",
      label: "islas, unidas por vuelos y ferris",
      note: "Casi todo viaje combina Manila o Cebú con dos o tres islas. Conviene dejar margen entre un vuelo y el siguiente.",
    },
    {
      value: "El Nido",
      label: "lagunas entre acantilados de piedra",
      note: "Paseos en bote por las islas del archipiélago de Bacuit, con lagunas que se recorren en kayak. Un área protegida en Palawan.",
    },
    {
      value: "Tifones",
      label: "de julio a octubre",
      note: "Son parte de la temporada de lluvias: pueden suspender ferris y vuelos un día o dos. Diciembre a mayo es la época seca en casi todo el país.",
    },
    {
      value: "Español",
      label: "en cientos de palabras del tagalo",
      note: "Fueron más de trescientos años de colonia: mesa, silla, cuchara y los números se reconocen enseguida.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Filipinas",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan visa electrónica o del consulado. Verificá el tuyo antes de comprar el pasaje.",
        "Filipinas pide completar un registro digital de llegada (eTravel) online en los días previos al viaje, en el sitio oficial. Fijate qué rige cuando viajes.",
        "En la frontera pueden pedirte el pasaje de salida del país y las reservas. El pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Filipinas",
      body: [
        "La moneda es el peso filipino. La tarjeta funciona en hoteles, centros comerciales y restaurantes de ciudad; en las islas, los mercados, los triciclos y los jeepneys, efectivo.",
        "En islas como El Nido o Siargao hay pocos cajeros y a veces se quedan sin plata: conviene llegar con efectivo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí pesos filipinos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Seco, lluvioso y tifones",
      body: [
        "Filipinas está en el trópico: hace calor todo el año. En el oeste —Manila, Palawan, Boracay— la estación seca va de diciembre a mayo y la de lluvias, de junio a noviembre.",
        "Los tifones llegan sobre todo de julio a octubre. Cuando hay uno, se suspenden ferris y vuelos un día o dos: es la razón para no encadenar conexiones justas.",
        "Siargao, en la costa del Pacífico, tiene la lluvia al revés, de noviembre a febrero. Banaue, en la cordillera del norte, es fresca de noche.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a mayo para casi todo el país: seco y con mar calmo. Marzo, abril y mayo son los meses más calurosos.",
        "Semana Santa y Navidad son las fechas más llenas: viaja todo el país y los vuelos internos se agotan.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Filipinas",
      body: [
        "Entre islas, vuelos internos desde Manila y Cebú, y ferris en los tramos cortos. Las aerolíneas de bajo costo cobran aparte el equipaje en bodega.",
        "En las ciudades, Grab para autos; en las islas, triciclos y vans, con precio acordado antes de subir. El jeepney es el colectivo local.",
        "Las precauciones son las de cualquier destino turístico: la mochila adelante en Manila y el celular firme en la mano en la vereda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Intramuros en Manila, las iglesias barrocas y Vigan, la ciudad colonial española mejor conservada de Asia.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Adobo, sinigang, lechón y mariscos frescos en las islas.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Acantilados de Palawan, las Colinas de Chocolate y las terrazas de arroz de Banaue.",
    },
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "Boracay, El Nido, Coron y Siargao: algunas de las playas más lindas del mundo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Comer y dormir sale poco; los vuelos entre islas y las excursiones en bote, algo más.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Todo se habla en inglés, pero los vuelos y ferris entre islas piden planificar y dejar margen.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Precios estables; en triciclos y mercados, el precio se acuerda antes.",
    },
  ],

  shines: [
    "Playas e islas de las más lindas del mundo.",
    "Gente cálida y el inglés en todos lados.",
    "Buceo y snorkel de primer nivel.",
  ],

  costs: [
    "Vuelos y ferris entre islas que hay que encadenar.",
    "Tifones de julio a octubre.",
    "Manila, ruidosa y con mucho tránsito.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Manila en agosto que Siargao, que tiene la lluvia en otros meses. Los precios están en pesos filipinos y son órdenes de magnitud.",

  places: [
    {
      id: "manila",
      name: "Manila",
      region: "Luzón",
      tag: "La puerta de entrada",
      blurb:
        "Intramuros, la ciudad amurallada española, la iglesia de San Agustín y el paseo de la bahía al atardecer. Es la base del planificador: seca de diciembre a mayo y lluviosa de junio a noviembre.",
      coords: [14.5995, 120.9842],
      featured: true,
      image: null,
    },
    {
      id: "el-nido",
      name: "El Nido (Palawan)",
      region: "Palawan",
      tag: "Lagunas y acantilados",
      blurb:
        "El archipiélago de Bacuit, con lagunas entre acantilados, playas escondidas y paseos en bote de isla en isla.",
      coords: [11.1956, 119.4075],
      image: null,
    },
    {
      id: "coron",
      name: "Coron (Palawan)",
      region: "Palawan",
      tag: "Lagos y naufragios",
      blurb:
        "Lagos de agua transparente entre rocas, como el Kayangan, y barcos hundidos de la Segunda Guerra Mundial para bucear.",
      coords: [11.9986, 120.2043],
      image: null,
    },
    {
      id: "cebu",
      name: "Cebú",
      region: "Bisayas",
      tag: "La ciudad más antigua del país",
      blurb:
        "La cruz de Magallanes, la basílica del Santo Niño y la base para nadar con tiburones ballena, ver cascadas y saltar a Bohol.",
      coords: [10.3157, 123.8854],
      image: null,
    },
    {
      id: "bohol",
      name: "Bohol (Panglao)",
      region: "Bisayas",
      tag: "Colinas de chocolate",
      blurb:
        "Más de mil colinas que se ponen marrones en la estación seca, los tarseros, unos de los primates más chicos del mundo, y las playas de Panglao.",
      coords: [9.58, 123.75],
      image: null,
    },
    {
      id: "boracay",
      name: "Boracay",
      region: "Bisayas",
      tag: "La playa blanca",
      blurb:
        "White Beach, kilómetros de arena blanca y fina, y atardeceres con barcos de vela. La más turística y la más cara del país.",
      coords: [11.9674, 121.9248],
      image: null,
    },
    {
      id: "siargao",
      name: "Siargao",
      region: "Mindanao",
      tag: "La isla del surf",
      blurb:
        "Olas de nivel mundial en Cloud 9, palmeras y lagunas. En la costa del Pacífico: su temporada de lluvias va de noviembre a febrero.",
      coords: [9.784, 126.156],
      image: null,
    },
    {
      id: "banaue",
      name: "Banaue",
      region: "Cordillera",
      tag: "Terrazas de arroz",
      blurb:
        "Terrazas talladas en la montaña hace siglos por el pueblo ifugao, patrimonio de la humanidad. Fresca de noche, lejos de todo.",
      coords: [16.911, 121.059],
      image: null,
    },
    {
      id: "vigan",
      name: "Vigan",
      region: "Ilocos",
      tag: "La ciudad colonial",
      blurb:
        "Calles empedradas, casas españolas de piedra y madera y carruajes a caballo. Patrimonio de la humanidad. Seca de noviembre a abril.",
      coords: [17.5747, 120.3869],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Filipinas es calor todo el año: ropa liviana que se seque rápido, traje de baño, protector alto, repelente y sandalias. De junio a noviembre, un impermeable y una bolsa estanca para el celular en los botes. Para Banaue, un buzo. Y efectivo en pesos para las islas, donde hay pocos cajeros.",
    keyPoints: [
      "Trópico: seco de diciembre a mayo en casi todo el país, tifones de julio a octubre.",
      "Siargao tiene la lluvia de noviembre a febrero.",
      "Hay que completar el registro digital de llegada antes de viajar.",
      "En las islas hay pocos cajeros: llegá con efectivo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, traje de baño, protector alto, sombrero y repelente. En la temporada de lluvias, un impermeable liviano y una bolsa estanca.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el clima de Banaue en la cordillera.",
      fresco:
        "Un buzo abrigado y una campera liviana para las noches de diciembre y enero en las terrazas de Banaue.",
      frio: "No hay ciudades con frío en el planificador; en la cordillera, de madrugada, un buzo abrigado alcanza.",
    },
    plug: {
      types: "Tipo A, tipo B y tipo C",
      voltage: "220 V, 60 Hz",
      note: "Muchos tomas aceptan patas planas, como en Estados Unidos, pero el voltaje es de 220 V. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dejá margen entre vuelos y ferris",
          body: "Un tifón o el mar bravo suspenden conexiones: no encadenes un ferry con un vuelo internacional el mismo día.",
        },
        {
          title: "Llevá una bolsa estanca",
          body: "Los paseos en bote de El Nido y Coron mojan todo; el celular adentro de la bolsa.",
        },
        {
          title: "Llegá a las islas con efectivo",
          body: "En El Nido, Siargao o Coron hay pocos cajeros y a veces se quedan sin plata.",
        },
        {
          title: "Pagá el equipaje con el pasaje",
          body: "Las aerolíneas de bajo costo cobran la valija aparte, y más caro en el aeropuerto.",
        },
        {
          title: "Probá el jeepney",
          body: "El colectivo filipino, pintado a mano: barato y una experiencia en sí misma.",
        },
        {
          title: "Elegí pagar en pesos filipinos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes en tifón sin plan B",
          body: "De julio a octubre, dejá días libres en el itinerario y fijate el pronóstico antes de cada tramo.",
        },
        {
          title: "No toques los corales",
          body: "Ni pises el arrecife: en varias islas se multa y se rompe lo que se fue a ver.",
        },
        {
          title: "No uses protector común en el mar",
          body: "Algunas islas piden protector que no dañe los corales.",
        },
        {
          title: "No subas a un triciclo sin precio",
          body: "Acordalo antes de subir; en las ciudades, Grab.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada o la filtrada están en todos lados.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Playa e islas",
        notice: {
          tone: "info",
          title: "Seco de diciembre a mayo",
          body: "Salvo en Siargao, que tiene la lluvia de noviembre a febrero. Mirá el clima de la isla en el planificador.",
        },
        summary: "Lo que piden las islas",
        items: [
          "Traje de baño y una toalla de secado rápido",
          "Protector que no dañe los corales",
          "Bolsa estanca para el celular",
          "Sandalias de agua",
          "Un impermeable liviano de junio a noviembre",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Completá el registro de llegada",
          body: "El eTravel se completa online en los días previos al viaje, en el sitio oficial. Y verificá si tu pasaporte necesita visa.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "El registro eTravel completado",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "vuelos",
        title: "Vuelos entre islas",
        notice: null,
        summary: "Para que una conexión no arruine el viaje",
        items: [
          "Equipaje en bodega pagado con el pasaje",
          "Un día libre antes del vuelo internacional",
          "Lo esencial en el bolso de mano",
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
          "Algo para el mareo en los botes",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo",
        why: "Hace calor todo el año; solo Banaue pide un buzo de noche.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En las islas hay pocos cajeros y casi todo se paga en efectivo.",
        instead: "Pesos filipinos en efectivo y una tarjeta.",
      },
      {
        leave: "Una valija enorme",
        why: "Los botes y los vuelos de bajo costo tienen poco lugar, y la valija se paga aparte.",
        instead: "Una mochila o valija mediana.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "En los botes se baja por el agua y nada se seca.",
        instead: "Sandalias de agua y unas ojotas.",
      },
      {
        leave: "Un itinerario sin días libres",
        why: "Un tifón o el mar bravo suspenden vuelos y ferris.",
        instead: "Uno o dos días de margen.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Filipinas?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas, y todos completan el registro eTravel antes de llegar. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a mayo para casi todo el país. Siargao, de marzo a octubre.",
      },
      {
        question: "¿Qué pasa si hay un tifón?",
        answer:
          "Se suspenden ferris y vuelos un día o dos. Por eso conviene dejar días libres de julio a octubre.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Filipinas usa los tipos A, B y C a 220 V: muchos tomas aceptan patas planas.",
      },
      {
        question: "¿Cómo me muevo entre islas?",
        answer:
          "En vuelos internos desde Manila y Cebú, y en ferris para los tramos cortos.",
      },
      {
        question: "¿Se habla inglés?",
        answer: "Sí, en todo el país: es idioma oficial junto con el filipino.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria, pero es habitual: en restaurantes sin cargo por servicio, y a guías y botes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada o la filtrada están en todos lados.",
      },
    ],
  },
};
