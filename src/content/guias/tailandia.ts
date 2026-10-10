import type { DestinationGuide } from "./types";

/**
 * Guía de Tailandia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero donde el clima se lee en la lluvia y no
 * en la temperatura. Casi todas las ciudades caen en `calido` los doce meses;
 * lo que cambia es el monzón, y en Ko Samui llega en otra época que en el resto.
 * Los consejos por bucket hablan de la lluvia aunque el bucket sea siempre el
 * mismo. Ninguna ciudad llega a `frio`: el norte en enero tiene noches frescas
 * y nada más.
 */
export const tailandia: DestinationGuide = {
  slug: "tailandia",
  country: "Tailandia",
  subregion: "Sudeste Asiático",
  subhead:
    "Templos dorados en Bangkok, playas de agua turquesa entre acantilados, el norte de montañas y mercados nocturnos, y una de las mejores comidas callejeras del mundo.",

  image: null,

  highlights: [
    {
      value: "Islas",
      label: "en dos mares",
      note: "Phuket y Krabi en el mar de Andamán, Ko Samui en el golfo de Tailandia. Cada costa tiene su temporada seca en meses distintos.",
    },
    {
      value: "Bangkok",
      label: "templos dorados y mercados flotantes",
      note: "El Gran Palacio, el Buda reclinado de Wat Pho y el templo del Amanecer, sobre el río.",
    },
    {
      value: "Comida callejera",
      label: "a toda hora, en cada esquina",
      note: "Pad thai, curry verde, som tam y mango con arroz glutinoso. Los puestos con más gente local son la mejor guía.",
    },
    {
      value: "3 estaciones",
      label: "fresca, calurosa y de lluvias",
      note: "La fresca y seca, de noviembre a febrero, es la más buscada. Ko Samui tiene su temporada de lluvias de octubre a diciembre.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Tailandia",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; la cantidad de días permitidos cambió más de una vez. Otros necesitan visa, que se tramita online. Verificá el tuyo antes de comprar el pasaje.",
        "Tailandia pide completar una tarjeta de llegada digital online en los días previos al viaje, en el sitio oficial. Fijate qué rige cuando viajes.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida y las reservas.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Tailandia",
      body: [
        "La moneda es el baht. La tarjeta funciona en hoteles, centros comerciales y restaurantes más grandes; en mercados, puestos, taxis y tuk-tuks, efectivo.",
        "Los cajeros cobran un cargo fijo por cada extracción con tarjeta extranjera: conviene sacar menos veces y más plata. Las casas de cambio de las ciudades suelen dar buen cambio por dólares.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí bahts: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor todo el año, lluvia según la época",
      body: [
        "Tailandia es trópico: hace calor los doce meses y lo que cambia es la lluvia. La estación fresca y seca va de noviembre a febrero; la calurosa, de marzo a mayo; la de lluvias, de junio a octubre, con chaparrones fuertes y cortos.",
        "Ko Samui y el golfo son la excepción: su temporada de lluvias va de octubre a diciembre, justo cuando la costa de Andamán (Phuket, Krabi) está seca.",
        "En el norte —Chiang Mai, Chiang Rai, Pai— las noches de diciembre y enero son frescas. De febrero a abril, la quema agrícola llena de humo el aire del norte.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco y menos caluroso en casi todo el país. Es también la temporada más llena y cara en las islas.",
        "De junio a octubre llueve, pero rara vez todo el día: hay menos gente y mejores precios. En la costa de Andamán el mar se pone bravo y algunas excursiones en barco se suspenden.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Tailandia",
      body: [
        "Entre regiones, vuelos internos baratos y frecuentes, o buses y trenes nocturnos. A las islas, ferris y lanchas.",
        "En Bangkok, el tren elevado (BTS), el metro y los barcos del río esquivan el tránsito. Para autos y motos, las aplicaciones Grab o Bolt, con precio fijo antes de subir.",
        "Las precauciones son las de cualquier destino turístico: acordar el precio del tuk-tuk antes de subir y desconfiar de quien te dice que un templo está cerrado y te ofrece llevarte a otro lado.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Las ruinas de Ayutthaya y Sukhothai, y templos budistas en cada ciudad.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Una de las cocinas callejeras más famosas del mundo, picante, fresca y barata.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Acantilados de piedra caliza sobre el mar, islas y las montañas verdes del norte.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Agua turquesa y arena blanca en el mar de Andamán y en el golfo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer, dormir y moverse sale poco; las islas en temporada alta, algo más.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos internos, ferris y aplicaciones de transporte; el inglés alcanza en las zonas turísticas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Precios estables; en mercados y tuk-tuks, el precio se acuerda antes.",
    },
  ],

  shines: [
    "Playas e islas de las mejores del mundo.",
    "Comida excelente y barata a toda hora.",
    "Fácil de recorrer por primera vez en Asia.",
  ],

  costs: [
    "Calor húmedo casi todo el año.",
    "Las islas famosas, llenas en temporada alta.",
    "Humo en el norte de febrero a abril.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Chiang Mai en enero que Phuket en septiembre, y Ko Samui tiene la lluvia en otros meses. Los precios están en bahts y son órdenes de magnitud.",

  places: [
    {
      id: "bangkok",
      name: "Bangkok",
      region: "Centro",
      tag: "Templos y mercados",
      blurb:
        "El Gran Palacio, Wat Pho, Wat Arun sobre el río, el mercado de fin de semana de Chatuchak y la comida de Yaowarat, el barrio chino. Es la base del planificador: calurosa todo el año, con lluvias de junio a octubre.",
      coords: [13.7563, 100.5018],
      featured: true,
      image: null,
    },
    {
      id: "chiang-mai",
      name: "Chiang Mai",
      region: "Norte",
      tag: "Templos y montañas",
      blurb:
        "Una ciudad amurallada con más de trescientos templos, mercados nocturnos, cursos de cocina y santuarios de elefantes que no ofrecen montarlos. Noches frescas en diciembre y enero.",
      coords: [18.7883, 98.9853],
      image: null,
    },
    {
      id: "phuket",
      name: "Phuket",
      region: "Mar de Andamán",
      tag: "La isla más grande",
      blurb:
        "Playas para todos los gustos, el casco antiguo de casas chino-portuguesas y la base para ir a las islas Phi Phi. Seca de noviembre a abril.",
      coords: [7.8804, 98.3923],
      image: null,
    },
    {
      id: "krabi",
      name: "Krabi y Ao Nang",
      region: "Mar de Andamán",
      tag: "Acantilados sobre el mar",
      blurb:
        "Railay, una playa a la que solo se llega en lancha, acantilados para escalar y islas a un rato de bote. Seca de noviembre a abril.",
      coords: [8.0325, 98.8189],
      image: null,
    },
    {
      id: "ko-samui",
      name: "Ko Samui",
      region: "Golfo de Tailandia",
      tag: "La isla del golfo",
      blurb:
        "Palmeras, playas largas y el parque marino de Ang Thong. Su temporada de lluvias va de octubre a diciembre, al revés que la costa de Andamán.",
      coords: [9.512, 100.0136],
      image: null,
    },
    {
      id: "ayutthaya",
      name: "Ayutthaya",
      region: "Centro",
      tag: "La antigua capital",
      blurb:
        "Las ruinas de la capital del reino de Siam, con la cabeza de Buda entre las raíces de un árbol. Patrimonio de la humanidad, a un rato de tren desde Bangkok.",
      coords: [14.3532, 100.5689],
      image: null,
    },
    {
      id: "chiang-rai",
      name: "Chiang Rai",
      region: "Norte",
      tag: "El Templo Blanco",
      blurb:
        "El Templo Blanco, el Templo Azul y el Triángulo de Oro, donde se juntan Tailandia, Laos y Myanmar. Noches frescas en invierno.",
      coords: [19.9105, 99.8406],
      image: null,
    },
    {
      id: "kanchanaburi",
      name: "Kanchanaburi",
      region: "Oeste",
      tag: "El puente sobre el río Kwai",
      blurb:
        "El puente y el ferrocarril de la Segunda Guerra Mundial, y las cascadas de turquesa de Erawan. De las más calurosas en abril.",
      coords: [14.0228, 99.5328],
      image: null,
    },
    {
      id: "pai",
      name: "Pai",
      region: "Norte",
      tag: "Pueblo de montaña",
      blurb:
        "Un valle entre montañas, con cañones, aguas termales y miradores. Se llega por una ruta de muchas curvas desde Chiang Mai. Sus noches de enero son las más frescas de Tailandia en el planificador.",
      coords: [19.3589, 98.4402],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Tailandia es calor todo el año: ropa liviana que se seque rápido, protector alto, repelente y sandalias. Lo que cambia es la lluvia: de junio a octubre, un impermeable liviano o un paraguas. Para los templos, algo que cubra hombros y rodillas; para el norte en diciembre y enero, un buzo para la noche.",
    keyPoints: [
      "Trópico: calor todo el año, seco de noviembre a febrero y lluvias de junio a octubre.",
      "Ko Samui tiene la lluvia de octubre a diciembre, al revés que Phuket y Krabi.",
      "Los templos piden hombros y rodillas cubiertos.",
      "Los cajeros cobran un cargo fijo por extracción: sacá menos veces.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector alto, sombrero, repelente y mucha agua. De junio a octubre, un impermeable liviano: los chaparrones son fuertes y cortos.",
      templado:
        "Ropa liviana de día y un buzo para la noche: son las noches de diciembre y enero en el norte.",
      fresco:
        "Un buzo abrigado y una campera liviana para la noche y la madrugada en las montañas del norte, que pueden ser frías.",
      frio: "No hay ciudades con frío en el planificador; en las cumbres del norte, de madrugada, una campera alcanza.",
    },
    plug: {
      types: "Tipos A, B, C y O",
      voltage: "220 V, 50 Hz",
      note: "Muchos tomas aceptan varios tipos, de patas planas y redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Usá Grab o Bolt para los autos",
          body: "El precio se ve antes de subir. Para el tuk-tuk, acordalo antes.",
        },
        {
          title: "Movete por el río en Bangkok",
          body: "Los barcos del río Chao Phraya llegan a los templos grandes y esquivan el tránsito.",
        },
        {
          title: "Elegí la costa según el mes",
          body: "De noviembre a abril, Andamán (Phuket, Krabi); de enero a septiembre, el golfo (Ko Samui).",
        },
        {
          title: "Comé en los mercados nocturnos",
          body: "Es la mejor comida y la más barata. Los puestos con más gente local son la mejor guía.",
        },
        {
          title: "Sacá plata menos veces",
          body: "Cada extracción con tarjeta extranjera cobra un cargo fijo: conviene sacar más de una vez.",
        },
        {
          title: "Elegí pagar en bahts",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a un templo descubierto",
          body: "Hombros y rodillas cubiertos y sin zapatos. En el Gran Palacio no te dejan pasar en musculosa o short.",
        },
        {
          title: "No hables mal de la familia real",
          body: "Es un delito con penas severas, también para turistas, y alcanza a lo que se dice en redes.",
        },
        {
          title: "No toques la cabeza de nadie ni señales con el pie",
          body: "La cabeza es la parte más respetada del cuerpo y los pies, la menos.",
        },
        {
          title: "No montes elefantes",
          body: "Los santuarios serios no lo ofrecen: se los ve, se los alimenta y se los baña.",
        },
        {
          title: "No subas a un tuk-tuk sin acordar el precio",
          body: "Y desconfiá de quien te dice que el templo está cerrado y te ofrece llevarte a otro lado.",
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
        title: "Playa y sol",
        notice: {
          tone: "info",
          title: "La costa según el mes",
          body: "Phuket y Krabi están secos de noviembre a abril; Ko Samui, de enero a septiembre. Mirá el clima de la ciudad en el planificador.",
        },
        summary: "Lo que pide el trópico",
        items: [
          "Protector solar alto y resistente al agua",
          "Sombrero y anteojos de sol",
          "Repelente de mosquitos",
          "Sandalias y ojotas",
          "Un impermeable liviano para la temporada de lluvias",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Los días sin visa cambiaron más de una vez y hay una tarjeta de llegada digital que se completa antes. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La tarjeta de llegada digital completada",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Una camisa liviana o un pañuelo para los hombros",
          "Pantalón largo o pollera larga",
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
          "Sales de rehidratación y algo para el estómago",
          "Crema para después del sol y para las picaduras",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo",
        why: "Hace calor todo el año; solo el norte tiene noches frescas en invierno.",
        instead: "Un buzo liviano, y nada más.",
      },
      {
        leave: "Musculosas y shorts para los templos",
        why: "Los templos piden hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Mercados, puestos, taxis y tuk-tuks aceptan efectivo.",
        instead: "Bahts en efectivo y una tarjeta.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "Con el calor y la lluvia, no se secan.",
        instead: "Sandalias de trekking y unas ojotas.",
      },
      {
        leave: "Un paraguas grande",
        why: "Los chaparrones son cortos y el calor sigue.",
        instead: "Un impermeable liviano o un paraguas plegable.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Tailandia?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas, y los días permitidos cambiaron más de una vez. Verificalo antes de viajar, y completá la tarjeta de llegada digital.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero para casi todo el país. Ko Samui está mejor de enero a septiembre.",
      },
      {
        question: "¿Se puede viajar en temporada de lluvias?",
        answer:
          "Sí: llueve fuerte pero poco rato, hay menos gente y los precios bajan. Algunas excursiones en barco se suspenden por el mar.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas aceptan patas planas y redondas a 220 V. Un adaptador universal resuelve cualquier caso.",
      },
      {
        question: "¿Cómo me muevo entre Bangkok, el norte y las islas?",
        answer:
          "En vuelos internos, que son baratos y frecuentes, o en buses y trenes nocturnos. A las islas, ferris y lanchas.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En restaurantes y masajes, redondear o dejar algo es bien recibido.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Qué ropa llevo para los templos?",
        answer: "Algo que cubra hombros y rodillas, y calzado fácil de sacar.",
      },
    ],
  },
};
