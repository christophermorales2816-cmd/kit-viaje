import type { DestinationGuide } from "./types";

/**
 * Guía de Catar.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: casi una ciudad-estado. Las nueve "ciudades" del
 * planificador son barrios de Doha y los pocos lugares del resto de la
 * península, como en Singapur; la costa comparte el clima y el desierto del sur
 * se aparta. El riyal va sin centavos por la regla del medio dólar. Las
 * costumbres se dicen como reglas del país, igual que en los Emiratos.
 */
export const catar: DestinationGuide = {
  slug: "catar",
  country: "Catar",
  subregion: "Asia Occidental",
  subhead:
    "El Museo de Arte Islámico sobre la bahía, el Souq Waqif de noche, rascacielos en West Bay, dunas que llegan al mar en el sur y el fuerte de Al Zubarah. Una península chica, moderna y ordenada, que muchos conocen en una escala larga.",

  image: null,

  highlights: [
    {
      value: "+40 °C",
      label: "de junio a agosto, con humedad de costa",
      note: "Doha es de las ciudades más calurosas y húmedas del Golfo en verano. De noviembre a marzo, en cambio, los días son agradables.",
    },
    {
      value: "Museo Nacional",
      label: "una rosa del desierto hecha edificio",
      note: "El edificio imita los cristales que forma la arena del desierto; adentro, la historia de la península y de la pesca de perlas.",
    },
    {
      value: "Souq Waqif",
      label: "el mercado viejo de Doha",
      note: "Especias, telas, halcones y restaurantes en callejones restaurados. Se recorre de noche, cuando baja el calor.",
    },
    {
      value: "Mar Interior",
      label: "donde las dunas llegan al agua",
      note: "Khor Al Adaid, en el sur, sobre la frontera con Arabia Saudita. Se llega en 4x4, con un chofer que sepa manejar en la arena.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Catar",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan tramitarla antes, online. Verificá el tuyo antes de comprar el pasaje.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas de alojamiento y un seguro médico. El pasaporte tiene que tener vigencia de sobra.",
        "Las escalas largas en Doha permiten salir del aeropuerto con las mismas reglas de entrada.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Catar",
      body: [
        "La moneda es el riyal catarí, atado al dólar. La tarjeta sin contacto funciona en casi todo; algo de efectivo sirve para el Souq Waqif y los puestos chicos.",
        "El metro de Doha se paga con una tarjeta recargable que se compra en las estaciones.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí riyales: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "costumbres",
      title: "Reglas y costumbres",
      body: [
        "En lugares públicos, centros comerciales y museos, hombros y rodillas cubiertos; en las mezquitas, las mujeres también el pelo.",
        "El alcohol se sirve en bares y restaurantes de hoteles con licencia, no en la calle. Las demostraciones de afecto en público se miran mal, y sacarle fotos a una persona sin su permiso no corresponde.",
        "El fin de semana es viernes y sábado. Durante el Ramadán, comer y tomar en público de día no corresponde y los horarios cambian.",
      ],
    },
    {
      id: "clima",
      title: "Desierto junto al mar",
      body: [
        "De noviembre a marzo, días templados y noches frescas, con algún chaparrón: es la temporada para estar afuera.",
        "De mayo a septiembre, calor extremo y húmedo, con máximas de más de cuarenta grados. La vida se hace adentro, con aire acondicionado, y lo de afuera queda para la noche.",
        "El desierto del sur, con el Mar Interior, es más seco y caluroso de día y más fresco de noche que Doha.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temperaturas agradables para el desierto, la costa y los paseos de noche.",
        "En verano los hoteles bajan precios, pero afuera se está poco tiempo. El Ramadán cambia horarios y la fecha se corre cada año.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Catar",
      body: [
        "En Doha, un metro moderno con tres líneas que llega al aeropuerto, a los museos y a Lusail. Taxis y aplicaciones (Uber, Careem) para el resto.",
        "Fuera de Doha no hay transporte público: auto de alquiler o excursión. Al Mar Interior solo se llega en 4x4 con alguien que conozca la arena.",
        "Las precauciones son las de cualquier gran ciudad. En verano, la principal es el calor: agua, sombra y nada de caminatas al mediodía.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "El fuerte de Al Zubarah y la historia de las perlas; casi todo lo demás es reciente.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Machboos, comida del Golfo, india y libanesa, y el karak, el té con leche que se toma a toda hora.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "Las dunas del Mar Interior y el skyline de la bahía; el resto es desierto plano.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Playas tranquilas y agua calma; en verano, el agua está tibia y afuera hace demasiado calor.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer en el zoco y en los barrios es razonable; hoteles y salidas, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale: "Metro nuevo, taxis, todo en inglés y distancias cortas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale:
        "El riyal está atado al dólar y los precios no se negocian fuera del zoco.",
    },
  ],

  shines: [
    "Museos de primer nivel.",
    "Una escala larga que vale la pena.",
    "Ordenado y fácil de recorrer.",
  ],

  costs: [
    "Calor extremo y húmedo de mayo a septiembre.",
    "Caro para dormir y salir.",
    "Se conoce en pocos días.",
  ],

  dataScopeNote:
    "Catar es casi una ciudad: las nueve opciones del planificador son barrios de Doha y los pocos lugares del resto de la península. La costa comparte el clima; el desierto del sur es más extremo. Los precios están en riyales cataríes y son órdenes de magnitud.",

  places: [
    {
      id: "doha",
      name: "Doha: Souq Waqif y el centro",
      region: "Doha",
      tag: "El zoco y la bahía",
      blurb:
        "El Souq Waqif, el Museo de Arte Islámico sobre el agua y la Corniche al atardecer. Es la base del planificador: inviernos templados y veranos de calor extremo y húmedo.",
      coords: [25.2867, 51.5333],
      featured: true,
      image: null,
    },
    {
      id: "west-bay",
      name: "West Bay y la Corniche",
      region: "Doha",
      tag: "Los rascacielos",
      blurb:
        "Torres de vidrio frente a la bahía, hoteles y el paseo de la Corniche, que se camina de noche.",
      coords: [25.3208, 51.526],
      image: null,
    },
    {
      id: "the-pearl",
      name: "The Pearl y Lusail",
      region: "Doha",
      tag: "Islas y marinas",
      blurb:
        "Una isla artificial de marinas y restaurantes, y Lusail, la ciudad nueva del estadio de la final del Mundial.",
      coords: [25.37, 51.551],
      image: null,
    },
    {
      id: "katara",
      name: "Katara",
      region: "Doha",
      tag: "La aldea cultural",
      blurb:
        "Un barrio cultural con anfiteatro, galerías, una mezquita de mosaicos y playa.",
      coords: [25.36, 51.525],
      image: null,
    },
    {
      id: "al-wakrah",
      name: "Al Wakrah",
      region: "Al Wakrah",
      tag: "El zoco junto al mar",
      blurb:
        "Un pueblo de pescadores al sur de Doha, con un zoco restaurado frente a la playa.",
      coords: [25.166, 51.603],
      image: null,
    },
    {
      id: "al-khor",
      name: "Al Khor",
      region: "Al Khor",
      tag: "Manglares del norte",
      blurb:
        "Un puerto de dhows, los manglares de Purple Island para el kayak y playas tranquilas.",
      coords: [25.6839, 51.5058],
      image: null,
    },
    {
      id: "khor-al-adaid",
      name: "Mar Interior (Khor Al Adaid)",
      region: "Al Wakrah",
      tag: "Dunas y mar",
      blurb:
        "Dunas altas que bajan hasta un brazo de mar, con campamentos para dormir en el desierto. Solo se llega en 4x4.",
      coords: [24.6, 51.33],
      image: null,
    },
    {
      id: "zubarah",
      name: "Al Zubarah",
      region: "Al Shamal",
      tag: "El fuerte",
      blurb:
        "Un fuerte de piedra y las ruinas de un puerto perlero del siglo XVIII, patrimonio de la humanidad, en la costa noroeste.",
      coords: [25.978, 51.029],
      image: null,
    },
    {
      id: "dukhan",
      name: "Dukhan",
      region: "Al Shahaniya",
      tag: "La costa oeste",
      blurb:
        "Playas casi vacías, las formaciones de roca de Zekreet y la escultura East-West/West-East en medio del desierto.",
      coords: [25.424, 50.786],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Catar depende del mes. De noviembre a marzo, ropa liviana de día y un buzo para la noche y el desierto. De mayo a septiembre, la ropa más fresca que tengas, sombrero, protector y un buzo para el aire acondicionado, que es helado. Siempre, algo que cubra hombros y rodillas para museos, centros comerciales y mezquitas.",
    keyPoints: [
      "Inviernos templados de noviembre a marzo; calor extremo y húmedo de mayo a septiembre.",
      "Hombros y rodillas cubiertos en lugares públicos.",
      "El fin de semana es viernes y sábado.",
      "Fuera de Doha no hay transporte público.",
    ],
    adviceByBucket: {
      calido:
        "La ropa más fresca que tengas, de algodón o lino y que cubra, sombrero, protector alto y mucha agua. Y un buzo liviano para el aire acondicionado.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno, la mejor época para el desierto y los paseos.",
      fresco:
        "Un buzo abrigado y una campera liviana para las noches del desierto en enero y febrero.",
      frio: "No hay frío en Catar; en el desierto, en las noches de enero, un buzo abrigado alcanza.",
    },
    plug: {
      types: "Tipo G y tipo D",
      voltage: "240 V, 50 Hz",
      note: "Casi todos los tomas son británicos, de tres patas rectangulares; algunos, de tres patas redondas. Hace falta adaptador casi siempre. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Recorré el Souq Waqif de noche",
          body: "Cuando baja el calor se llena de gente, con restaurantes en los callejones.",
        },
        {
          title: "Usá el metro de Doha",
          body: "Llega al aeropuerto, a los museos, al Souq y a Lusail, con aire acondicionado.",
        },
        {
          title: "Dormí en el desierto del sur",
          body: "Un campamento en el Mar Interior, con la excursión en 4x4 incluida.",
        },
        {
          title: "Dedicale medio día al Museo de Arte Islámico",
          body: "La colección es de las mejores del mundo, y el parque de al lado tiene la mejor vista de la bahía.",
        },
        {
          title: "Aprovechá la escala larga",
          body: "Con varias horas entre vuelos, el metro te deja en el centro en poco tiempo.",
        },
        {
          title: "Elegí pagar en riyales",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No vayas descubierto a lugares públicos",
          body: "En museos, zocos y centros comerciales se esperan hombros y rodillas cubiertos.",
        },
        {
          title: "No tomes alcohol fuera de lugares con licencia",
          body: "Se sirve en bares y restaurantes de hoteles; en la calle, no.",
        },
        {
          title: "No le saques fotos a la gente sin permiso",
          body: "Sobre todo a mujeres y familias.",
        },
        {
          title: "No manejes en la arena sin experiencia",
          body: "Para el Mar Interior, excursión con chofer: las dunas no se improvisan.",
        },
        {
          title: "No subestimes el sol de verano",
          body: "Con más de cuarenta grados y humedad, una caminata al mediodía es un problema de salud.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Calor y aire acondicionado",
        notice: {
          tone: "info",
          title: "Afuera, cuarenta grados; adentro, frío",
          body: "De mayo a septiembre, capas livianas: se pasa del calor húmedo al aire acondicionado todo el día.",
        },
        summary: "Lo que pide el desierto junto al mar",
        items: [
          "Ropa liviana de algodón o lino que cubra",
          "Sombrero, anteojos de sol y protector alto",
          "Un buzo liviano para el aire acondicionado",
          "Traje de baño",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes entran sin visa, pero no todos, y pueden pedirte reservas y seguro médico. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Reservas de alojamiento",
          "Seguro médico",
          "Pasaje de salida del país",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverse sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para el pelo en las mezquitas",
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
          "Crema para después del sol",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa ajustada o muy corta",
        why: "En lugares públicos se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta sin contacto sirve para casi todo.",
        instead: "Una tarjeta y algo de efectivo para el zoco.",
      },
      {
        leave: "Un adaptador de patas redondas finas",
        why: "Catar usa el enchufe británico de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Ropa de abrigo",
        why: "Nunca hace frío; solo las noches del desierto en invierno piden un buzo.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Ropa sintética para el verano",
        why: "Con calor y humedad, no respira.",
        instead: "Algodón o lino.",
      },
      {
        leave: "Planear todo afuera en verano",
        why: "De mayo a septiembre, el día se pasa adentro.",
        instead: "Museos de día, zoco y Corniche de noche.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Catar?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo: días agradables y noches frescas. De mayo a septiembre hace calor extremo y húmedo.",
      },
      {
        question: "¿Qué ropa llevo?",
        answer:
          "Ropa liviana que cubra hombros y rodillas en lugares públicos. En la playa de los hoteles, ropa de playa común.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí, en bares y restaurantes de hoteles con licencia. En la calle, no.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi seguro que sí. Catar usa sobre todo el tipo G, británico, de tres patas rectangulares, a 240 V.",
      },
      {
        question: "¿Puedo salir del aeropuerto en una escala?",
        answer:
          "Sí, con las mismas reglas de entrada. El metro te deja en el centro de Doha en poco tiempo.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria; muchos restaurantes suman servicio. Redondear es bien recibido.",
      },
      {
        question: "¿Cuántos días hacen falta?",
        answer:
          "Dos o tres alcanzan para Doha, los museos y una noche en el desierto.",
      },
    ],
  },
};
