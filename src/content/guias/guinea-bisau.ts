import type { DestinationGuide } from "./types";

/**
 * Guía de Guinea-Bisáu.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que las secciones 15.8 y 15.9 decidieron para los países en duda
 * de África: entra con aviso, como Pakistán. La entrada "tener-en-cuenta"
 * manda a revisar la recomendación de viaje del propio país y qué cubre el
 * seguro.
 *
 * Lo que este país aporta: un archipiélago entero —las ochenta y ocho islas de
 * las Bijagós, el dato de su portada— al que se llega en barco, sin cajeros y
 * con lanchas que hay que contratar. Pide la vacuna de la fiebre amarilla a
 * todos, como Ghana. Ninguna ciudad del planificador está a menos de veinte
 * kilómetros de la frontera con Senegal, así que Varela y São Domingos no
 * están.
 */
export const guineaBisau: DestinationGuide = {
  slug: "guinea-bisau",
  country: "Guinea-Bisáu",
  subregion: "África Occidental",
  subhead:
    "El archipiélago de las Bijagós, con playas vacías, hipopótamos que nadan en el mar y tortugas que desovan en Poilão, la fortaleza de Cacheu y la Bolama colonial que se lleva la selva.",

  image: null,

  highlights: [
    {
      value: "88 islas",
      label: "en el archipiélago de las Bijagós, reserva de la biosfera",
      note: "Islas de arena, manglares y pueblos bijagós, muchas sin habitar. Se llega en barco desde Bisáu, y entre ellas se va en lancha contratada.",
    },
    {
      value: "Hipopótamos",
      label: "que nadan en el mar, en Orango",
      note: "En el parque de Orango viven hipopótamos que salen al agua salada, algo que casi no pasa en otro lugar del mundo.",
    },
    {
      value: "Tortugas",
      label: "verdes que desovan en Poilão",
      note: "Poilão es una de las mayores zonas de desove de la tortuga verde de África, de julio a noviembre. Se visita con permiso, desde João Vieira.",
    },
    {
      value: "Portugués",
      label: "y kriol: con español te arreglás",
      note: "El oficial es el portugués, y en la calle se habla kriol, un criollo de base portuguesa. Con español y paciencia, te entendés.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Guinea-Bisáu",
      body: [
        "Casi todos los pasaportes necesitan visa: la electrónica se tramita online antes de viajar, y la visa al llegar pide una autorización previa. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Guinea-Bisáu pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Guinea-Bisáu",
      body: [
        "La moneda es el franco CFA de África Occidental, el mismo de Senegal, atado al euro.",
        "Casi todo se paga en efectivo: hay pocos cajeros, casi todos en Bisáu, y no siempre aceptan tarjetas extranjeras. En las islas no hay ninguno.",
        "Los euros en billetes nuevos se cambian fácil en bancos y casas de cambio de Bisáu.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y una lluvia larga",
      body: [
        "Calor húmedo todo el año. La temporada de lluvias, fuerte, va de junio a octubre; la seca, de noviembre a mayo, con el harmattan.",
        "En las Bijagós, el mar modera el calor. Tierra adentro, en Bafatá, abril y mayo pasan los treinta y cinco grados.",
        "En agosto llueve casi todos los días, y los caminos de tierra se cortan.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a mayo: la temporada seca, la mejor para las islas y los parques.",
        "Las tortugas desovan en Poilão de julio a noviembre, en plena temporada de lluvias. El carnaval de Bisáu es en febrero.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Guinea-Bisáu",
      body: [
        "A las Bijagós se va en barco desde Bisáu: el ferry a Bubaque sale pocas veces por semana, y entre las islas se va en lancha contratada, que conviene reservar con el alojamiento.",
        "En Bisáu hay taxis y toca-tocas, las combis colectivas. Las rutas al interior son de tierra en buena parte.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos piden extremar la precaución en Guinea-Bisáu, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Ninguna ciudad del planificador está a menos de veinte kilómetros de la frontera con Senegal: Varela y São Domingos no forman parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Cacheu y Bolama, de la época colonial y de la trata, y la memoria de la independencia.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Pescado y mariscos, arroz con caldo de maní o de palma, y castañas de cajú.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Manglares, islas, playas vacías y selva en el sur.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Playas largas y vacías en las Bijagós.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer es barato; los lodges de las islas, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Barcos poco frecuentes, rutas de tierra y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Las islas Bijagós.",
    "Hipopótamos de mar y tortugas.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Barcos poco frecuentes y caminos de tierra.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Bisáu en agosto que las Bijagós o Bafatá. Los precios están en francos CFA y son órdenes de magnitud; las lanchas entre islas y los lodges cuestan bastante más.",

  places: [
    {
      id: "bisau",
      name: "Bisáu",
      region: "Bisáu",
      tag: "La capital",
      blurb:
        "Una capital chica sobre el estuario del Geba, con el barrio colonial de Bissau Velho, el mercado de Bandim y música en vivo. Es la base del planificador: calor húmedo todo el año, con lluvias de junio a octubre.",
      coords: [11.8636, -15.5977],
      featured: true,
      image: null,
    },
    {
      id: "quinhamel",
      name: "Quinhámel",
      region: "Biombo",
      tag: "Telares y manglares",
      blurb:
        "Un pueblo a media hora de Bisáu, conocido por sus telares tradicionales, rodeado de manglares.",
      coords: [11.8833, -15.85],
      image: null,
    },
    {
      id: "cacheu",
      name: "Cacheu (fortaleza)",
      region: "Cacheu",
      tag: "La fortaleza",
      blurb:
        "La fortaleza portuguesa y el memorial de la trata, sobre el río Cacheu, con un parque de manglares cerca.",
      coords: [12.2725, -16.165],
      image: null,
    },
    {
      id: "bolama",
      name: "Bolama (la antigua capital)",
      region: "Bolama",
      tag: "La antigua capital",
      blurb:
        "La primera capital, en una isla, con edificios coloniales abandonados que la selva va tomando.",
      coords: [11.5783, -15.4769],
      image: null,
    },
    {
      id: "bubaque",
      name: "Bubaque (Bijagós)",
      region: "Bijagós",
      tag: "La puerta de las islas",
      blurb:
        "La isla con más servicios de las Bijagós, con playas, mercado y lanchas al resto del archipiélago.",
      coords: [11.2833, -15.8333],
      image: null,
    },
    {
      id: "orango",
      name: "Orango (hipopótamos de mar)",
      region: "Bijagós",
      tag: "Hipopótamos de mar",
      blurb:
        "Un parque nacional en islas y manglares, con hipopótamos que nadan en el mar y pueblos bijagós.",
      coords: [11.05, -16.13],
      image: null,
    },
    {
      id: "joao-vieira",
      name: "João Vieira (tortugas marinas)",
      region: "Bijagós",
      tag: "Tortugas marinas",
      blurb:
        "Islas protegidas, con playas vírgenes y la cercana Poilão, donde desovan las tortugas verdes de julio a noviembre.",
      coords: [11.06, -15.66],
      image: null,
    },
    {
      id: "cantanhez",
      name: "Parque Nacional de Cantanhez",
      region: "Tombali",
      tag: "Selva y chimpancés",
      blurb:
        "Bosques en el sur, con chimpancés, monos y muchas aves, cuidados por los pueblos del parque.",
      coords: [11.18, -15.03],
      image: null,
    },
    {
      id: "bafata",
      name: "Bafatá",
      region: "Bafatá",
      tag: "La ciudad del interior",
      blurb:
        "Una ciudad colonial sobre el río Geba, donde nació Amílcar Cabral. Lo más caluroso del planificador en abril y mayo.",
      coords: [12.1667, -14.6667],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Guinea-Bisáu, ropa liviana y fresca, traje de baño, sombrero y protector: hace calor húmedo todo el año. De junio a octubre, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla y efectivo para las islas.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Vacuna de la fiebre amarilla para todos, y visa tramitada antes.",
      "Temporada seca de noviembre a mayo; lluvias fuertes de junio a octubre.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para las lanchas y el aire acondicionado.",
      fresco: "Un buzo liviano para las noches del harmattan y las lanchas.",
      frio: "No hace frío en Guinea-Bisáu: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo C",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas. Si tu enchufe es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes, y en las islas la luz depende de generadores o paneles solares. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Reservá las lanchas con el alojamiento",
          body: "Entre las islas no hay transporte público, y el ferry a Bubaque sale pocas veces.",
        },
        {
          title: "Llevá efectivo a las islas",
          body: "En las Bijagós no hay cajeros.",
        },
        {
          title: "Probá el caldo de mancarra",
          body: "Un guiso de maní con pescado o pollo, servido con arroz.",
        },
        {
          title: "Entrá a los pueblos bijagós con permiso",
          body: "Hay lugares sagrados en las islas: andá con guía o con permiso del pueblo.",
        },
        {
          title: "Llevá euros para cambiar",
          body: "En billetes nuevos, se cambian fácil en Bisáu.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No vayas a las islas sagradas sin permiso",
          body: "Algunas están vedadas a los visitantes.",
        },
        {
          title: "No te acerques a los hipopótamos",
          body: "En Orango, la distancia la marca el guía.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de militares o del aeropuerto.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Guinea-Bisáu y si tu pasaporte necesita visa: casi todos la tramitan antes, y todos necesitan la vacuna de la fiebre amarilla.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica o la autorización previa",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Reserva de alojamiento y pasaje de salida",
        ],
      },
      {
        id: "islas",
        title: "Para las islas",
        notice: {
          tone: "info",
          title: "Sin cajeros ni tiendas",
          body: "En las Bijagós no hay cajeros y hay poco para comprar: llevá efectivo y lo que vayas a necesitar.",
        },
        summary: "Lo que pide el archipiélago",
        items: [
          "Efectivo para todo",
          "Traje de baño y una remera de lycra",
          "Protector y sombrero",
          "Una linterna",
          "Una bolsa estanca para las lanchas",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer",
        notice: null,
        summary: "Selva, islas y caminos de tierra",
        items: [
          "Calzado cerrado para la selva",
          "Billetes chicos",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta, y en las islas no hay cajeros.",
        instead: "Efectivo.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las lanchas y los taxis hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Un itinerario apretado entre islas",
        why: "Los barcos salen pocas veces y dependen de la marea.",
        instead: "Días de margen.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro en Guinea-Bisáu y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Guinea-Bisáu?",
        answer:
          "Casi todos los pasaportes la necesitan: la electrónica se tramita online, y la visa al llegar pide una autorización previa. Verificá el tuyo.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer: "Sí, para todos los viajeros.",
      },
      {
        question: "¿Cómo llego a las Bijagós?",
        answer:
          "En barco desde Bisáu hasta Bubaque, y de ahí en lancha contratada al resto de las islas.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a mayo, la temporada seca.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El portugués es el oficial; en la calle se habla kriol. Con español te arreglás bastante.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
