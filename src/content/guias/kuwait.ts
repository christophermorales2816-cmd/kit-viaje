import type { DestinationGuide } from "./types";

/**
 * Guía de Kuwait.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el verano más caluroso del planificador junto con
 * Irak, y la moneda que más vale del mundo, que lleva centavos (fils) y hace
 * que todos los precios parezcan chicos. Un país de ciudad: siete de sus nueve
 * lugares están en la costa o alrededor de la capital.
 */
export const kuwait: DestinationGuide = {
  slug: "kuwait",
  country: "Kuwait",
  subregion: "Asia Occidental",
  subhead:
    "Las Torres de Kuwait sobre el Golfo, un zoco antiguo en el centro, una isla con ruinas griegas a una hora de lancha y centros comerciales enormes para escapar del calor. Un país chico, rico y de veranos extremos.",

  image: null,

  highlights: [
    {
      value: "+45 °C",
      label: "de máxima de junio a agosto",
      note: "De los veranos más calurosos del mundo. De noviembre a marzo, en cambio, el clima es templado y agradable.",
    },
    {
      value: "Dinar",
      label: "la moneda que más vale del mundo",
      note: "Por eso los precios parecen chicos: un café cuesta menos de un dinar. Se divide en mil fils.",
    },
    {
      value: "Torres de Kuwait",
      label: "el símbolo del país, sobre el Golfo",
      note: "Tres torres con esferas cubiertas de discos azules y verdes, con un mirador sobre la ciudad y el mar.",
    },
    {
      value: "Failaka",
      label: "una isla con ruinas griegas",
      note: "A una hora de lancha, con restos de un asentamiento de la época de Alejandro Magno y un pueblo abandonado.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Kuwait",
      body: [
        "Algunos pasaportes sacan la visa electrónica online; otros necesitan tramitarla con un hotel o un patrocinador en Kuwait. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida y la reserva del hotel.",
        "El alcohol está prohibido en el país, también en la valija.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Kuwait",
      body: [
        "La moneda es el dinar kuwaití, que se divide en mil fils. La tarjeta y el pago con el teléfono funcionan en casi todos lados.",
        "Hay cajeros en toda la ciudad. Algo de efectivo sirve para el zoco y los taxis.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dinares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Desierto junto al Golfo",
      body: [
        "Kuwait es hemisferio norte y desierto. De junio a agosto las máximas pasan los cuarenta y cinco grados, más en el interior, como en Jahra, y el polvo y el viento son comunes.",
        "De noviembre a marzo el clima es templado, con noches frescas y algo de lluvia en invierno.",
        "La costa, en Salmiya, Fahaheel o Failaka, es un poco menos extrema pero más húmeda.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: días templados, terrazas abiertas y la temporada de acampar en el desierto.",
        "En verano la vida pasa adentro, con aire acondicionado, y a la noche. Durante el Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Kuwait",
      body: [
        "No hay metro: la ciudad se recorre en taxi, en auto o en los buses públicos.",
        "Los taxis por app y los de calle son la forma más simple. Muchos visitantes alquilan auto.",
        "A Failaka se llega en lancha o ferry desde la ciudad, en alrededor de una hora.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "El zoco Mubarakiya, el Fuerte Rojo de Jahra y las ruinas de Failaka.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Machboos, pescado del Golfo y cocina de todo el mundo en los centros comerciales.",
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
        "Playas en la costa y en Al Khiran, con agua cálida; muchas son de hoteles o clubes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Hoteles y restaurantes caros; comer en la calle y moverse en taxi es razonable.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Un país chico, con tarjeta en todos lados; sin metro, en auto o taxi.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El dinar es una moneda fuerte y estable.",
    },
  ],

  shines: [
    "Un país chico y fácil de recorrer.",
    "La tarjeta sirve para todo.",
    "Inviernos templados y agradables.",
  ],

  costs: [
    "El calor extremo de junio a agosto.",
    "Caro, y con poco para ver.",
    "Sin transporte público rápido.",
  ],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima: la costa es un poco menos extrema que el interior. Los precios están en dinares kuwaitíes, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "ciudad-de-kuwait",
      name: "Ciudad de Kuwait",
      region: "Capital",
      tag: "La capital sobre el Golfo",
      blurb:
        "La Gran Mezquita, el museo nacional, el centro cultural Sheikh Jaber y el paseo costero. Es la base del planificador: inviernos templados, veranos de calor extremo.",
      coords: [29.3759, 47.9774],
      featured: true,
      image: null,
    },
    {
      id: "salmiya",
      name: "Salmiya",
      region: "Hawalli",
      tag: "La costa y el acuario",
      blurb:
        "El barrio costero de cafés y restaurantes, con el Centro Científico y su acuario sobre el mar.",
      coords: [29.3339, 48.0761],
      image: null,
    },
    {
      id: "sharq",
      name: "Sharq y las Torres de Kuwait",
      region: "Capital",
      tag: "El símbolo del país",
      blurb:
        "Las Torres de Kuwait, con su mirador, y el mercado de pescado de Sharq, sobre la costa.",
      coords: [29.3897, 48.0029],
      image: null,
    },
    {
      id: "failaka",
      name: "Isla Failaka",
      region: "Capital",
      tag: "Ruinas griegas en el Golfo",
      blurb:
        "Restos de un asentamiento griego, un pueblo abandonado y playas tranquilas, a una hora de lancha de la ciudad.",
      coords: [29.44, 48.33],
      image: null,
    },
    {
      id: "fahaheel",
      name: "Fahaheel",
      region: "Ahmadi",
      tag: "El sur costero",
      blurb:
        "Una ciudad costera del sur con un zoco moderno, paseo marítimo y restaurantes de pescado.",
      coords: [29.0825, 48.1303],
      image: null,
    },
    {
      id: "jahra",
      name: "Jahra",
      region: "Jahra",
      tag: "El Fuerte Rojo",
      blurb:
        "El Fuerte Rojo, de adobe, escenario de una batalla de 1920, y la reserva natural junto a la bahía. De lo más caluroso del país en verano.",
      coords: [29.3375, 47.6581],
      image: null,
    },
    {
      id: "al-khiran",
      name: "Al Khiran",
      region: "Ahmadi",
      tag: "Chalés y marina",
      blurb:
        "La zona de playas, marinas y chalés del sur, cerca de la frontera con Arabia Saudita. Fin de semana kuwaití.",
      coords: [28.65, 48.38],
      image: null,
    },
    {
      id: "ahmadi",
      name: "Ahmadi",
      region: "Ahmadi",
      tag: "La ciudad del petróleo",
      blurb:
        "Una ciudad jardín construida para la industria petrolera, con un centro de exhibición sobre la historia del petróleo kuwaití.",
      coords: [29.0769, 48.0839],
      image: null,
    },
    {
      id: "mubarakiya",
      name: "Zoco Mubarakiya",
      region: "Capital",
      tag: "El mercado antiguo",
      blurb:
        "El zoco tradicional del centro, con puestos de dátiles, especias, perfumes y restaurantes de cocina kuwaití.",
      coords: [29.3697, 47.9733],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Kuwait depende de la estación. De noviembre a marzo, ropa liviana que cubra hombros y rodillas y un buzo para la noche. En verano, ropa liviana y holgada, sombrero y protector, y un abrigo liviano para el aire acondicionado. Siempre, ropa discreta en la calle, y nada de alcohol en la valija.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de noviembre a marzo.",
      "De junio a agosto, más de cuarenta y cinco grados.",
      "El alcohol está prohibido, también en la valija.",
      "La tarjeta funciona en casi todos lados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, protector y agua, y un abrigo liviano para el aire acondicionado de los interiores.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno kuwaití, la mejor época.",
      fresco:
        "Un polar y una campera para las noches de diciembre y enero, sobre todo en el desierto.",
      frio: "Una campera abrigada para las noches más frías del invierno en el desierto.",
    },
    plug: {
      types: "Tipo G y tipo C",
      voltage: "240 V, 50 Hz",
      note: "El tipo G es el británico, de tres patas planas; el C, el de dos patas redondas. Un adaptador universal resuelve los dos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vestite con discreción",
          body: "Hombros y rodillas cubiertos en la calle. En la Gran Mezquita, las mujeres se cubren el pelo.",
        },
        {
          title: "Visitá la Gran Mezquita con guía",
          body: "Tiene visitas guiadas gratuitas para quienes no son musulmanes, con horario.",
        },
        {
          title: "Salí a la tarde y a la noche",
          body: "En verano la ciudad se activa cuando baja el sol: zocos, paseos y restaurantes abren hasta tarde.",
        },
        {
          title: "Andá a Failaka temprano",
          body: "La lancha sale a la mañana y la isla tiene poca sombra.",
        },
        {
          title: "Pagá con tarjeta",
          body: "Funciona en casi todos lados, también en los taxis por app.",
        },
        {
          title: "Elegí pagar en dinares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No lleves alcohol",
          body: "Está prohibido en el país, también en la valija.",
        },
        {
          title: "No caminés al mediodía en verano",
          body: "Con más de cuarenta y cinco grados, cualquier trayecto se hace en auto.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No fotografíes a la gente sin preguntar",
          body: "Sobre todo a las mujeres. Preguntá antes.",
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
          body: "Algunos pasaportes sacan la visa online y otros necesitan un patrocinador en Kuwait. Confirmalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa impresa",
          "Reserva del hotel",
          "Pasaje de salida",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Afuera, horno; adentro, heladera",
          body: "En verano se pasa del calor extremo al aire acondicionado fuerte. Un abrigo liviano en la mochila.",
        },
        summary: "Lo que pide el verano",
        items: [
          "Ropa liviana y holgada que cubra",
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
          "Protector solar y labial",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para la calle",
        why: "En público se cubren hombros y rodillas.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Alcohol en la valija",
        why: "Está prohibido en el país.",
        instead: "Nada: no se puede entrar.",
      },
      {
        leave: "Planes a pie en verano",
        why: "El calor hace imposible caminar al mediodía.",
        instead: "Taxis por app y salidas a la noche.",
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
        leave: "El secador de pelo de 110 V",
        why: "A 240 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Kuwait?",
        answer:
          "Sí. Algunos pasaportes la sacan online y otros con un patrocinador en Kuwait. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a marzo. En verano hace un calor extremo.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer: "No: está prohibido en el país.",
      },
      {
        question: "¿Por qué los precios parecen tan bajos?",
        answer:
          "Porque el dinar vale varias veces más que el dólar: un café de un dinar es, en realidad, un café caro.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Kuwait usa los tipos G y C a 240 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En restaurantes, alrededor del diez por ciento si la cuenta no incluye servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Es desalinizada y tratada, pero casi todos toman embotellada.",
      },
      {
        question: "¿Cómo llego a Failaka?",
        answer:
          "En lancha o ferry desde la ciudad, en alrededor de una hora. Conviene ir temprano.",
      },
    ],
  },
};
