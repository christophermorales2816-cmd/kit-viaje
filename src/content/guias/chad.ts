import type { DestinationGuide } from "./types";

/**
 * Guía de Chad.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: el calor del Sahel en la ciudad base —Yamena pasa
 * los cuarenta grados en abril, y es el dato de su portada— y los trámites de
 * llegada: visa online, registro en la policía y permiso para las fotos. Las
 * ciudades del planificador son la capital, Zakouma, el Guéra, el lago Fitri
 * y el sur. El Ennedi y los lagos de Ounianga, sus destinos más conocidos,
 * están en provincias del norte adonde las recomendaciones piden no ir: quedan
 * afuera, y la guía lo dice.
 */
export const chad: DestinationGuide = {
  slug: "chad",
  country: "Chad",
  subregion: "África Central",
  subhead:
    "Los elefantes de Zakouma, las montañas de granito del Guéra, el lago Fitri y la sabana del sur. Un país casi sin turistas, entre el Sahel y la sabana.",

  image: null,

  highlights: [
    {
      value: "+41 °C",
      label: "de máxima en Yamena en abril, antes de las lluvias",
      note: "Abril y mayo son los meses más calurosos del Sahel. De diciembre a febrero, en cambio, las noches son frescas y el aire, seco.",
    },
    {
      value: "Zakouma",
      label: "un parque donde los elefantes volvieron a crecer",
      note: "Uno de los parques mejor recuperados de África, con manadas de elefantes, búfalos y jirafas de Kordofán. Se visita de diciembre a mayo; con las lluvias, los campamentos cierran.",
    },
    {
      value: "Guéra",
      label: "montañas de granito en el centro del país",
      note: "Cerros y agujas de granito alrededor de Mongo y Bitkine, con pueblos al pie y caminatas con guía local.",
    },
    {
      value: "Registro",
      label: "en la policía, en los primeros días",
      note: "Si te quedás más de tres días, hay que registrarse en la policía, y para sacar fotos fuera de lo turístico puede hacer falta un permiso. El hotel o el operador suelen hacer el trámite.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Chad",
      body: [
        "Casi todos los pasaportes necesitan visa, que desde 2026 se tramita solo online, antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Chad pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y varios de Sudamérica están en esa lista; la vacuna se recomienda para todos. Vacunate al menos diez días antes y llevá el certificado.",
        "Si te quedás más de tres días, hay que registrarse en la policía, con una foto carnet; el hotel o el operador suelen hacer el trámite. Para sacar fotos fuera de lo turístico puede hacer falta un permiso.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Chad",
      body: [
        "La moneda es el franco CFA de África Central, el mismo de Camerún, atado al euro.",
        "Casi todo se paga en efectivo: la tarjeta funciona en pocos hoteles de Yamena. Los euros en billetes nuevos se cambian más fácil que los dólares.",
        "Hay pocos cajeros, casi todos en Yamena, y no siempre aceptan tarjetas extranjeras: llevá el efectivo del viaje.",
      ],
    },
    {
      id: "clima",
      title: "Sahel y sabana",
      body: [
        "Yamena y el centro son Sahel: un calor seco que pasa los cuarenta grados en abril y mayo, y lluvias cortas de junio a septiembre.",
        "El sur, en Sarh, Manda y Moundou, es sabana: llueve más y por más tiempo, de mayo a octubre.",
        "De diciembre a febrero las noches son frescas en todo el país, y sopla el harmattan, el viento del Sahara, con polvo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco y con noches frescas, la mejor época para recorrer.",
        "Zakouma se visita de diciembre a mayo; con las lluvias, los campamentos cierran. Abril y mayo son muy calurosos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Chad",
      body: [
        "A Zakouma se llega en avioneta desde Yamena, con el operador del parque; por tierra, el viaje es largo.",
        "Entre las ciudades hay buses y taxis colectivos, lentos y con controles en la ruta: lo común es viajar con chofer y un operador local.",
        "En Yamena hay taxis y motos: acordá el precio antes de subir. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte de Chad, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, Zakouma, el Guéra, el lago Fitri y el sur. El norte, con el Ennedi y los lagos de Ounianga, el lago Chad y las zonas de frontera no forman parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "Los antiguos sultanatos y el arte rupestre del norte, que queda fuera del planificador.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Boule de mijo con salsa, brochettes, pescado del Chari y té con menta.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Sabana, las montañas de granito del Guéra y los ríos del sur.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale:
        "Casi todo se hace con operador, y los campamentos de Zakouma son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale: "Visa previa, registro, controles y pocas rutas buenas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Zakouma, uno de los mejores parques de África.",
    "Un país casi sin turistas.",
    "El cielo y las noches del Sahel.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Calor extremo en abril y mayo.",
    "Trámites: visa, registro y permisos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Yamena en abril que Sarh o el Guéra. Los precios están en francos CFA y son órdenes de magnitud; los campamentos de Zakouma y los vuelos en avioneta cuestan bastante más.",

  places: [
    {
      id: "yamena",
      name: "Yamena",
      region: "Yamena",
      tag: "La capital sobre el Chari",
      blurb:
        "La capital, donde el Chari y el Logone se juntan, con el museo nacional, la gran mezquita y mercados grandes. Es la base del planificador: calor seco que pasa los cuarenta grados en abril y mayo, y lluvias de junio a septiembre.",
      coords: [12.1348, 15.0557],
      featured: true,
      image: null,
    },
    {
      id: "zakouma",
      name: "Parque Nacional Zakouma",
      region: "Salamat",
      tag: "Elefantes",
      blurb:
        "Uno de los parques mejor recuperados de África, con manadas de elefantes, búfalos, jirafas y leones. Se visita de diciembre a mayo, en la temporada seca.",
      coords: [10.88, 19.83],
      image: null,
    },
    {
      id: "am-timan",
      name: "Am Timan",
      region: "Salamat",
      tag: "La puerta de Zakouma",
      blurb:
        "La ciudad más cercana a Zakouma, sobre el río Bahr Salamat, con un mercado al que llegan pastores de toda la región.",
      coords: [10.9833, 20.2833],
      image: null,
    },
    {
      id: "sarh",
      name: "Sarh (río Chari)",
      region: "Moyen-Chari",
      tag: "La ciudad del sur",
      blurb:
        "Una de las ciudades más grandes del país, sobre el río Chari, con un museo regional, mercados y la sabana alrededor. Lluvias de mayo a octubre.",
      coords: [9.1429, 18.3923],
      image: null,
    },
    {
      id: "manda",
      name: "Parque Nacional de Manda",
      region: "Moyen-Chari",
      tag: "Sabana y río",
      blurb:
        "Un parque de sabana y bosque a orillas del Chari, cerca de Sarh, con antílopes, monos y muchas aves. Se recorre con guía.",
      coords: [9.45, 18.0],
      image: null,
    },
    {
      id: "moundou",
      name: "Moundou",
      region: "Logone Occidental",
      tag: "La ciudad del Logone",
      blurb:
        "La segunda ciudad del país, sobre el río Logone, con mercados grandes y la vida del sur. Lluvias de mayo a septiembre.",
      coords: [8.5667, 16.0833],
      image: null,
    },
    {
      id: "mongo",
      name: "Mongo (macizo del Guéra)",
      region: "Guéra",
      tag: "Montañas de granito",
      blurb:
        "La capital del Guéra, rodeada de cerros y agujas de granito, con caminatas y pueblos al pie de las montañas.",
      coords: [12.1833, 18.6833],
      image: null,
    },
    {
      id: "bitkine",
      name: "Bitkine (pico Abtouyour)",
      region: "Guéra",
      tag: "El pico Abtouyour",
      blurb:
        "Un pueblo al pie del Abtouyour, una aguja de granito que sale de la llanura, con caminatas con guía local.",
      coords: [11.9833, 18.2167],
      image: null,
    },
    {
      id: "fitri",
      name: "Lago Fitri",
      region: "Batha",
      tag: "El lago del Sahel",
      blurb:
        "Un lago de agua dulce en pleno Sahel, que crece con las lluvias, con muchas aves, pescadores y pastores que llegan con sus rebaños.",
      coords: [12.85, 17.55],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Chad, ropa liviana y holgada que cubra brazos y piernas, sombrero, lentes de sol y protector: el sol del Sahel es fuerte todo el año. De diciembre a febrero, un buzo para las noches. Un pañuelo para el polvo del harmattan, mucha agua, repelente y efectivo en euros o francos.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Visa online antes de viajar y registro en la policía al llegar.",
      "Calor extremo en abril y mayo; la mejor época es de noviembre a febrero.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, lentes de sol, protector y mucha agua.",
      templado:
        "Ropa liviana de día y un buzo para las noches de diciembre a febrero.",
      fresco:
        "Un buzo y una campera liviana para las noches de invierno, que en el Sahel refrescan.",
      frio: "No hace frío en Chad: un buzo alcanza para las noches de invierno.",
    },
    plug: {
      types: "Tipos C, D, E y F",
      voltage: "220 V, 50 Hz",
      note: "Lo más común son las dos patas redondas (C, E y F); también aparece el D, de tres patas redondas gruesas. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Viajá con un operador local",
          body: "Resuelve la logística, los permisos y los controles de ruta.",
        },
        {
          title: "Registrate en la policía al llegar",
          body: "Si te quedás más de tres días es obligatorio, y el hotel suele ayudar.",
        },
        {
          title: "Tomá agua todo el tiempo",
          body: "Con el calor seco no se siente la transpiración, y deshidratarse es fácil.",
        },
        {
          title: "Aceptá el té con menta",
          body: "Tres vasos, cada uno más dulce que el anterior, en cualquier reunión.",
        },
        {
          title: "Llevá euros en efectivo",
          body: "En billetes nuevos se cambian más fácil que los dólares.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No saques fotos sin permiso",
          body: "De edificios oficiales, militares o del aeropuerto está prohibido, y fuera de lo turístico puede hacer falta un permiso.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
        },
        {
          title: "No uses ropa corta",
          body: "En la calle se cubren hombros y rodillas, y más en las mezquitas.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Chad y si tu pasaporte necesita visa: casi todos la tramitan online.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica aprobada",
          "Certificado de la fiebre amarilla",
          "Fotos carnet para el registro en la policía",
          "Copias del pasaporte",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Sol del Sahel",
          body: "Seco y muy fuerte, sobre todo de marzo a mayo: cubrite y tomá agua aunque no tengas sed.",
        },
        summary: "Sol, polvo y calor",
        items: [
          "Ropa liviana y holgada que cubra",
          "Sombrero y lentes de sol",
          "Protector solar y bálsamo para los labios",
          "Un pañuelo para el polvo",
          "Una botella grande",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverte cómodo",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo para las mujeres en las mezquitas",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Ropa corta o ajustada",
        why: "En la calle se cubren hombros y rodillas.",
        instead: "Ropa liviana y holgada.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta fuera de los hoteles de Yamena.",
        instead: "Euros o francos en efectivo.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se cambian mal o se rechazan.",
        instead: "Euros en billetes nuevos.",
      },
      {
        leave: "Lentes de contacto sin anteojos de repuesto",
        why: "El polvo del harmattan irrita los ojos.",
        instead: "Anteojos y gotas lubricantes.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Chad y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Chad?",
        answer:
          "Casi todos los pasaportes la necesitan, y se tramita online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, te la pueden pedir, y se recomienda para todos. Llevá el certificado.",
      },
      {
        question: "¿Tengo que registrarme al llegar?",
        answer:
          "Sí, si te quedás más de tres días: en la policía, con una foto carnet. El hotel o el operador suelen ayudar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero, seco y con noches frescas. Zakouma, de diciembre a mayo.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés y el árabe son los oficiales; en la calle, el árabe chadiano y muchos idiomas locales.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
