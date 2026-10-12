import type { DestinationGuide } from "./types";

/**
 * Guía de Nigeria.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: una visa que ya no se da al llegar. Desde 2025 casi
 * todos los pasaportes de fuera de África Occidental la tramitan online antes
 * de viajar, y las aerolíneas no embarcan a quien no la tiene: es el dato de
 * su portada. La base es Lagos y no Abuja, la capital, como Duala en Camerún.
 * Las ciudades del planificador son las del suroeste, Benin City, Abuja y
 * Calabar; ninguna está en el norte ni en el delta del Níger.
 */
export const nigeria: DestinationGuide = {
  slug: "nigeria",
  country: "Nigeria",
  subregion: "África Occidental",
  subhead:
    "Lagos, la ciudad de la música y de Nollywood, el bosque sagrado de Osun en Osogbo, los bronces del reino de Benín y la meseta fresca de Obudu. Calor húmedo todo el año en el sur.",

  image: null,

  highlights: [
    {
      value: "Visa",
      label: "electrónica antes de viajar: ya no se da al llegar",
      note: "Casi todos los pasaportes de fuera de África Occidental la tramitan online, y las aerolíneas no embarcan a quien no la tiene aprobada. También hay que completar una tarjeta de llegada online.",
    },
    {
      value: "Afrobeats",
      label: "la música que Lagos le llevó al mundo",
      note: "En Lagos se escucha en vivo en clubes y bares, y en el New Afrika Shrine, el lugar que abrieron los hijos de Fela Kuti, creador del afrobeat.",
    },
    {
      value: "Osun",
      label: "el bosque sagrado de Osogbo, patrimonio de la humanidad",
      note: "Uno de los últimos bosques sagrados de la cultura yoruba, con santuarios y esculturas a orillas del río Osun. En agosto se hace su festival.",
    },
    {
      value: "Bronces",
      label: "del antiguo reino de Benín, en Benin City",
      note: "El arte en bronce de una de las cortes más famosas de África, que se sigue fundiendo en los talleres de la calle Igun. Benin City está en Nigeria: no hay que confundirla con el país Benín.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Nigeria",
      body: [
        "Casi todos los pasaportes de fuera de África Occidental necesitan la visa electrónica, que se tramita online antes de viajar: ya no se da al llegar, y las aerolíneas no embarcan a quien no la tiene. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Antes de llegar y antes de salir hay que completar una tarjeta online de entrada y salida.",
        "Nigeria puede pedir el certificado internacional de vacunación contra la fiebre amarilla al llegar. Vacunate al menos diez días antes y llevalo en el bolso de mano.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Nigeria",
      body: [
        "La moneda es la naira. En Lagos y Abuja la tarjeta funciona en hoteles, restaurantes y supermercados grandes; en el resto, efectivo o transferencia, que es como paga todo el país.",
        "Hay cajeros en las ciudades, pero muchos tienen límites bajos por extracción. Si llevás dólares para cambiar, que sean billetes nuevos y sanos, y cambialos en el hotel o en casas de cambio autorizadas.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí nairas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y lluvias",
      body: [
        "Nigeria está cerca del ecuador: en el sur hace calor húmedo todo el año, con dos temporadas de lluvia, de abril a julio y de septiembre a octubre, y una pausa en agosto. Calabar, al este, es de lo más lluvioso del país.",
        "Abuja, en el centro, tiene una sola temporada de lluvias, de mayo a octubre, y un invierno seco con el harmattan, el viento del Sahara, de diciembre a febrero.",
        "La meseta de Obudu, a más de mil quinientos metros, es lo más fresco del país: noches templadas todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temporada seca en todo el país. En diciembre y enero llega el harmattan, con polvo y cielos blancos, y Lagos y Calabar tienen sus fiestas de fin de año.",
        "De abril a octubre llueve, con chaparrones fuertes que inundan calles en Lagos. Agosto es más seco en el sur.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Nigeria",
      body: [
        "Entre Lagos, Abuja, Benin City y Calabar conviene volar: los vuelos internos son frecuentes y las rutas, largas y lentas.",
        "En Lagos, aplicaciones como Uber y Bolt. Los danfos, las combis amarillas, y los buses BRT son baratos pero confusos para el que llega; el tránsito es lento a cualquier hora.",
        "Las distancias cortas desde Lagos —Badagry, Abeokuta, Ibadan, Osogbo— se hacen por tierra, con chofer o en bus. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Nigeria, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son las del suroeste, Benin City, Abuja y Calabar. Ninguna está en el norte ni en el delta del Níger.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "El reino de Benín, la cultura yoruba de Osogbo e Ife y el puerto de la trata en Badagry.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Jollof, suya, sopa egusi, pepper soup y puff-puff en la calle.",
    },
    {
      dimension: "Paisaje",
      score: 5,
      rationale:
        "Selva, la roca Olumo y la meseta de Obudu; la costa es de lagunas.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Lagos tiene playas en las afueras, con mar fuerte y poca infraestructura.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale:
        "Comer en la calle es barato; los hoteles de Lagos y Abuja, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Visa previa, tránsito lento y distancias que conviene hacer en avión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 3,
      rationale: "La naira se mueve mucho contra el dólar.",
    },
  ],

  shines: [
    "La música y la energía de Lagos.",
    "La cultura yoruba y el arte de Benín.",
    "La comida de la calle.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Visa previa y tarjeta de llegada online.",
    "El tránsito de Lagos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Lagos en junio que Abuja o la meseta de Obudu. Los precios están en nairas y son órdenes de magnitud; los hoteles de Lagos y Abuja pueden costar bastante más.",

  places: [
    {
      id: "lagos",
      name: "Lagos",
      region: "Lagos",
      tag: "La ciudad más grande",
      blurb:
        "Mercados, galerías de arte, la música en vivo de Ikeja y las playas de las afueras, sobre una laguna enorme. Es la base del planificador: calor húmedo todo el año, con lluvias de abril a julio y en septiembre y octubre.",
      coords: [6.5244, 3.3792],
      featured: true,
      image: null,
    },
    {
      id: "badagry",
      name: "Badagry",
      region: "Lagos",
      tag: "La memoria de la trata",
      blurb:
        "Un antiguo puerto de la trata de esclavos, con museos, el Punto sin Retorno sobre la playa y la primera casa de dos pisos del país, a un par de horas de Lagos.",
      coords: [6.4153, 2.8813],
      image: null,
    },
    {
      id: "abeokuta",
      name: "Abeokuta (roca Olumo)",
      region: "Suroeste",
      tag: "La roca refugio",
      blurb:
        "La roca Olumo, que sirvió de refugio en las guerras del siglo XIX, con vista a toda la ciudad, y los talleres de tela teñida con índigo.",
      coords: [7.1475, 3.3619],
      image: null,
    },
    {
      id: "ibadan",
      name: "Ibadan",
      region: "Suroeste",
      tag: "La ciudad yoruba",
      blurb:
        "Una de las ciudades más grandes del país, con la primera universidad de Nigeria, la torre Cocoa House y un mercado enorme.",
      coords: [7.3775, 3.947],
      image: null,
    },
    {
      id: "osogbo",
      name: "Osogbo (bosque sagrado de Osun)",
      region: "Suroeste",
      tag: "El bosque sagrado",
      blurb:
        "El bosque sagrado de Osun, patrimonio de la humanidad, con santuarios y esculturas a orillas del río. Festival en agosto, en plena temporada de lluvias.",
      coords: [7.7827, 4.5418],
      image: null,
    },
    {
      id: "benin-city",
      name: "Benin City",
      region: "Sur",
      tag: "Los bronces",
      blurb:
        "La capital del antiguo reino de Benín, con el palacio del oba, el museo nacional y los fundidores de bronce de la calle Igun. Más lluviosa que Lagos.",
      coords: [6.335, 5.6037],
      image: null,
    },
    {
      id: "abuja",
      name: "Abuja",
      region: "Centro",
      tag: "La capital",
      blurb:
        "La capital planificada, con la roca Aso, la Mezquita Nacional y la roca Zuma a la entrada. Una sola temporada de lluvias, de mayo a octubre, y harmattan en invierno.",
      coords: [9.0765, 7.3986],
      image: null,
    },
    {
      id: "calabar",
      name: "Calabar",
      region: "Sureste",
      tag: "Primates y carnaval",
      blurb:
        "Una ciudad tranquila con un centro de rescate de primates, el museo de la antigua residencia colonial y un carnaval en diciembre. De lo más lluvioso del país.",
      coords: [4.9757, 8.3417],
      image: null,
    },
    {
      id: "obudu",
      name: "Meseta de Obudu",
      region: "Sureste",
      tag: "La meseta fresca",
      blurb:
        "Un antiguo rancho ganadero a más de mil quinientos metros, con teleférico, senderos y piletas naturales. Lo más fresco del país, con niebla en la temporada de lluvias.",
      coords: [6.3675, 9.37],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Nigeria, ropa liviana y fresca, de algodón o lino, sombrero y protector: hace calor húmedo todo el año en el sur. De abril a octubre, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y un adaptador para el enchufe británico. Para Obudu, un buzo.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Visa electrónica antes de viajar: ya no se da al llegar.",
      "Calor húmedo todo el año en el sur; lluvias de abril a octubre, con una pausa en agosto.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente. Algo impermeable en las temporadas de lluvia.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado o las noches del harmattan.",
      fresco:
        "Un buzo y una campera liviana para la meseta de Obudu, que de noche refresca.",
      frio: "No hace frío en Nigeria: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipos D y G",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el británico, de tres patas rectangulares; también aparece otro de tres patas redondas. Un adaptador universal resuelve los dos. Los cortes de luz son frecuentes, y muchos hoteles funcionan con generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Tramitá la visa con anticipación",
          body: "Se hace online antes de viajar, y sin ella la aerolínea no te embarca.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Probá la suya",
          body: "Carne asada en brochetas con especias de maní, en los puestos de la noche.",
        },
        {
          title: "Volá entre ciudades lejanas",
          body: "Lagos, Abuja y Calabar están a un vuelo corto y a un día de ruta.",
        },
        {
          title: "Elegí pagar en nairas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos.",
        },
        {
          title: "No te metas al mar sin preguntar",
          body: "Las corrientes de la costa de Lagos son fuertes, y casi no hay guardavidas.",
        },
        {
          title: "No calcules los traslados de Lagos a ojo",
          body: "El tránsito puede triplicar cualquier tiempo de viaje: salí al aeropuerto con horas de margen.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Nigeria y si tu pasaporte necesita visa: casi todos la necesitan, tramitada antes.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica aprobada, impresa",
          "La tarjeta de llegada online, completa",
          "Certificado internacional de vacunación contra la fiebre amarilla",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Humedad todo el año",
          body: "Calor húmedo de día y de noche: ropa que se seque rápido y agua siempre a mano.",
        },
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Algo impermeable en las temporadas de lluvia",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Una tarjeta de débito y una de crédito",
          "Algo de efectivo en nairas para los primeros días",
          "Dólares nuevos y sanos, si vas a cambiar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Joyas y relojes caros",
        why: "Llaman la atención en la calle y en el tránsito.",
        instead: "Lo justo, y el teléfono guardado.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan al cambiar.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los autos y en los buses hay poco lugar.",
        instead: "Una mochila o un bolso mediano.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Nigeria y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Nigeria?",
        answer:
          "Casi todos los pasaportes de fuera de África Occidental la necesitan, y se tramita online antes de viajar: ya no se da al llegar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Te la pueden pedir al llegar. Vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo, la temporada seca. De diciembre a febrero sopla el harmattan.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial; en la calle, también yoruba, igbo, hausa y el pidgin nigeriano.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Lo más común es el británico, tipo G, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
