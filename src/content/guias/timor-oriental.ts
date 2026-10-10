import type { DestinationGuide } from "./types";

/**
 * Guía de Timor Oriental.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer dolarizado de Asia, como Ecuador, El
 * Salvador y Panamá —el dólar es la moneda oficial y hay monedas propias para
 * los centavos—, y el portugués como idioma oficial, que para quien habla
 * español acorta mucho la distancia. La infraestructura turística es mínima:
 * se dice como dato de logística, no como alerta.
 */
export const timorOriental: DestinationGuide = {
  slug: "timor-oriental",
  country: "Timor Oriental",
  subregion: "Sudeste Asiático",
  subhead:
    "Uno de los países más jóvenes del mundo: arrecifes de coral entre los más ricos del planeta, montañas de café, una cumbre sagrada para ver el amanecer sobre dos mares y pueblos donde se habla portugués. Casi sin turistas.",

  image: null,

  highlights: [
    {
      value: "US$",
      label: "es la moneda oficial",
      note: "El país está dolarizado, como Ecuador o Panamá. Las monedas para los centavos son propias.",
    },
    {
      value: "Portugués",
      label: "idioma oficial, junto con el tetun",
      note: "Muchos hablan también indonesio e inglés. Con español, en Dili uno se hace entender bastante.",
    },
    {
      value: "Atauro",
      label: "uno de los arrecifes con más especies del mundo",
      note: "Una isla frente a Dili, con buceo y snorkel en algunos de los arrecifes con más variedad de peces que se hayan relevado.",
    },
    {
      value: "Ramelau",
      label: "la montaña más alta, a casi 3.000 m",
      note: "Se sube de madrugada desde Hato Builico para ver el amanecer sobre las dos costas de la isla.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Timor Oriental",
      body: [
        "Muchos pasaportes sacan la visa a la llegada en el aeropuerto de Dili; otros la tramitan antes. Verificá el tuyo antes de comprar el pasaje.",
        "Se llega en avión, casi siempre desde Bali, Darwin o Singapur, o por tierra desde Timor Occidental, en Indonesia, con la visa tramitada antes.",
        "El pasaporte tiene que tener vigencia de sobra, y pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Timor Oriental",
      body: [
        "La moneda es el dólar estadounidense, con monedas propias para los centavos. Llevá billetes chicos: el cambio escasea.",
        "Hay cajeros en Dili, y casi ninguno fuera de la capital. La tarjeta funciona en algunos hoteles y restaurantes de Dili.",
        "Fuera de Dili, todo en efectivo: llevá lo necesario antes de salir.",
      ],
    },
    {
      id: "clima",
      title: "Tropical, con estación seca larga",
      body: [
        "Timor Oriental es hemisferio sur. En la costa norte, en Dili, Baucau y Atauro, hace calor todo el año.",
        "Llueve sobre todo de diciembre a marzo; de mayo a octubre casi no llueve en la costa.",
        "Las montañas del centro, en Maubisse y al pie del Ramelau, son frescas, con noches frías en julio y agosto y más lluvia.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a noviembre: la estación seca, con rutas transitables y mar calmo para bucear.",
        "En octubre y noviembre pasan ballenas frente a la costa norte.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Timor Oriental",
      body: [
        "Las rutas son lentas y, en la temporada de lluvias, algunas se cortan. Para la montaña y el este conviene un todoterreno con chofer.",
        "En Dili se anda en taxi y en microlets, minibuses que recorren rutas fijas.",
        "A Atauro se llega en ferry o en lancha desde Dili.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Fuertes portugueses, el museo de la resistencia y una independencia reciente.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Pescado a la parrilla, cocina con influencia portuguesa y café de montaña.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Montañas verdes, costa y arrecifes casi intactos.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Playas casi vacías y arrecifes a pasos de la orilla en Atauro y Jaco.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Comer sale poco; la poca oferta de hoteles y el todoterreno encarecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Rutas lentas, pocos cajeros fuera de Dili y poca infraestructura turística.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El país está dolarizado.",
    },
  ],

  shines: [
    "Arrecifes casi intactos.",
    "Casi sin turistas.",
    "El portugués y el español acercan.",
  ],

  costs: [
    "Rutas lentas y pocas opciones de alojamiento.",
    "Pocos cajeros fuera de Dili.",
    "Vuelos con pocas conexiones.",
  ],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima: no es lo mismo Dili que Maubisse o el Ramelau. Los precios están en dólares, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "dili",
      name: "Dili",
      region: "Dili",
      tag: "La capital frente al mar",
      blurb:
        "El Cristo Rei sobre un cabo, el museo de la resistencia, playas y cafés con aire portugués. Es la base del planificador: calor todo el año, lluvias de diciembre a marzo.",
      coords: [-8.5569, 125.5603],
      featured: true,
      image: null,
    },
    {
      id: "atauro",
      name: "Isla de Atauro",
      region: "Atauro",
      tag: "Arrecifes enormes",
      blurb:
        "Una isla de pueblos de pescadores frente a Dili, con algunos de los arrecifes más ricos del mundo y alojamientos simples.",
      coords: [-8.2667, 125.6],
      image: null,
    },
    {
      id: "baucau",
      name: "Baucau",
      region: "Baucau",
      tag: "La segunda ciudad",
      blurb:
        "Un casco viejo portugués sobre una meseta frente al mar, con un mercado antiguo y playas abajo.",
      coords: [-8.4667, 126.45],
      image: null,
    },
    {
      id: "maubisse",
      name: "Maubisse",
      region: "Ainaro",
      tag: "El pueblo de montaña",
      blurb:
        "Un pueblo entre montañas de café, con una posada colonial y noches frescas. Más lluvia que la costa.",
      coords: [-8.8367, 125.6],
      image: null,
    },
    {
      id: "ramelau",
      name: "Monte Ramelau (Hato Builico)",
      region: "Ainaro",
      tag: "El amanecer sobre dos mares",
      blurb:
        "La montaña más alta del país, con una Virgen en la cumbre y la subida de madrugada desde Hato Builico. Frío de noche, sobre todo en julio y agosto.",
      coords: [-8.9, 125.5],
      image: null,
    },
    {
      id: "com",
      name: "Com",
      region: "Lautém",
      tag: "La costa del este",
      blurb:
        "Un pueblo de pescadores con playa y arrecife en el extremo este de la isla, puerta a Tutuala.",
      coords: [-8.36, 127.05],
      image: null,
    },
    {
      id: "tutuala",
      name: "Tutuala e isla de Jaco",
      region: "Lautém",
      tag: "La isla sagrada",
      blurb:
        "Jaco, una isla deshabitada y sagrada de arena blanca, a pocos minutos en bote desde la playa de Tutuala.",
      coords: [-8.43, 127.3],
      image: null,
    },
    {
      id: "ermera",
      name: "Ermera (café)",
      region: "Ermera",
      tag: "El café de Timor",
      blurb:
        "Montañas cubiertas de cafetales a la sombra de árboles altos, de donde sale buena parte del café del país.",
      coords: [-8.75, 125.4],
      image: null,
    },
    {
      id: "balibo",
      name: "Balibó",
      region: "Bobonaro",
      tag: "El fuerte de la frontera",
      blurb:
        "Un fuerte portugués sobre una colina, cerca de la frontera con Indonesia, con vista al valle y al mar.",
      coords: [-8.97, 125.05],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Timor Oriental es calor en la costa y fresco en la montaña. Ropa liviana, traje de baño, protector y repelente para Dili y Atauro; un buzo y una campera para Maubisse y el Ramelau, que de noche son fríos. En la temporada de lluvias, campera impermeable. Siempre, dólares en billetes chicos.",
    keyPoints: [
      "Hemisferio sur: la estación seca va de mayo a noviembre.",
      "Dolarizado: llevá billetes chicos.",
      "Fuera de Dili casi no hay cajeros.",
      "Las montañas del centro son frías de noche.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector, repelente y sombrero para la costa.",
      templado: "Ropa liviana de día y un buzo para la noche en la montaña.",
      fresco:
        "Un polar y una campera para Maubisse y Ermera, y para la lluvia de la montaña.",
      frio: "Campera de abrigo, gorro y guantes para la subida de madrugada al Ramelau.",
    },
    plug: {
      types: "Tipo C, tipo E, tipo F y tipo I",
      voltage: "220 V, 50 Hz",
      note: "Conviven el enchufe europeo y el australiano, de patas planas en ángulo. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares en billetes chicos",
          body: "El cambio escasea y fuera de Dili no hay cajeros.",
        },
        {
          title: "Probá hablar en portugués o en español",
          body: "Muchos entienden, y en Dili es fácil hacerse entender.",
        },
        {
          title: "Andá a Atauro con equipo de snorkel",
          body: "El arrecife empieza en la orilla, y en la isla hay poco para alquilar.",
        },
        {
          title: "Contratá un todoterreno para la montaña",
          body: "Las rutas son lentas y se cortan con lluvia.",
        },
        {
          title: "Subí al Ramelau de madrugada",
          body: "Para ver el amanecer sobre las dos costas, con abrigo.",
        },
        {
          title: "Probá el café de Timor",
          body: "Se cultiva en las montañas de Ermera y es de los mejores productos del país.",
        },
      ],
      donts: [
        {
          title: "No cuentes con la tarjeta",
          body: "Fuera de algunos hoteles de Dili, todo es en efectivo.",
        },
        {
          title: "No viajes por tierra en plena lluvia sin margen",
          body: "De diciembre a marzo algunas rutas se cortan.",
        },
        {
          title: "No toques el coral",
          body: "Ni con las manos ni con las patas de rana.",
        },
        {
          title: "No entres a lugares sagrados sin preguntar",
          body: "La isla de Jaco y algunas casas tradicionales tienen reglas propias: consultá antes.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada o filtrada.",
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
          body: "Muchos pasaportes la sacan al llegar a Dili; si entrás por tierra desde Indonesia, tramitala antes.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida",
          "Dólares para la visa a la llegada",
          "Seguro de viaje",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "info",
          title: "Billetes chicos",
          body: "El cambio escasea y fuera de Dili no hay cajeros.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes de uno, cinco, diez y veinte",
          "Todo el efectivo para el viaje fuera de Dili",
        ],
      },
      {
        id: "mar",
        title: "Para el mar",
        notice: null,
        summary: "Lo que conviene llevar",
        items: [
          "Máscara y snorkel",
          "Protector solar que no dañe el arrecife",
          "Remera de lycra para el sol",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
          "Las vacunas y la profilaxis que te indique tu médico",
        ],
      },
    ],
    avoid: [
      {
        leave: "Billetes grandes",
        why: "Casi nadie tiene cambio.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Dili todo se paga en efectivo.",
        instead: "Dólares para todo el viaje.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las montañas del centro son frías de noche.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas son lentas.",
        instead: "Días de margen.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral.",
        instead: "Uno que no dañe el arrecife.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Timor Oriental?",
        answer:
          "Muchos pasaportes la sacan al llegar a Dili; otros la tramitan antes. Verificá el tuyo.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar estadounidense, con monedas propias para los centavos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a noviembre, la estación seca. En octubre y noviembre pasan ballenas.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Tetun y portugués, los oficiales, e indonesio e inglés. Con español, uno se hace entender.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: se usan los tipos C, E, F e I a 220 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es habitual, pero se agradece en restaurantes y excursiones.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada o filtrada.",
      },
      {
        question: "¿Cómo llego a Atauro?",
        answer: "En ferry o en lancha desde Dili, en un par de horas o menos.",
      },
    ],
  },
};
