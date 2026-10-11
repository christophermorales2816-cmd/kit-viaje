import type { DestinationGuide } from "./types";

/**
 * Guía de Hong Kong.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este destino aporta: el primer territorio del sitio que no es un país
 * (spec, 14.11). Tiene moneda, reglas de entrada y control de fronteras
 * propios, distintos de los de China continental, y eso es lo que el modelo
 * llama un corredor. Como Singapur, las nueve "ciudades" son barrios e islas.
 * Y las señales de tifón, que cierran la ciudad entera.
 */
export const hongKong: DestinationGuide = {
  slug: "hong-kong",
  country: "Hong Kong",
  subregion: "Asia Oriental",
  subhead:
    "Rascacielos sobre una bahía llena de barcos, mercados nocturnos, dim sum a toda hora, un Buda gigante en una isla y montañas con senderos a minutos del centro. Buena parte del territorio son parques naturales.",

  image: null,

  highlights: [
    {
      value: "Tarjeta Octopus",
      label: "para el metro, el ferry y hasta el supermercado",
      note: "Una tarjeta recargable que sirve en todo el transporte y en muchos negocios. Se compra en el aeropuerto.",
    },
    {
      value: "Victoria Peak",
      label: "la bahía y los rascacielos desde arriba",
      note: "Se sube en un funicular centenario, y de noche la vista de la ciudad iluminada es lo más conocido de Hong Kong.",
    },
    {
      value: "Dim sum",
      label: "bocados al vapor, de la mañana al mediodía",
      note: "Con té, en mesas compartidas. Y a cualquier hora, tartas de huevo y té con leche en un cha chaan teng.",
    },
    {
      value: "Señal 8",
      label: "de tifón: la ciudad entera cierra",
      note: "De junio a octubre, cuando el observatorio la levanta, cierran oficinas, negocios y parte del transporte. Conviene seguir los avisos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Hong Kong",
      body: [
        "Hong Kong tiene control de fronteras propio, distinto del de China continental. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros necesitan tramitarla. Verificá el tuyo antes de comprar el pasaje.",
        "Para cruzar a China continental hace falta la visa china, que es otra. Macao también tiene su propio control.",
        "El pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Hong Kong",
      body: [
        "La moneda es el dólar de Hong Kong, atado al estadounidense. La tarjeta y el pago con el teléfono funcionan en casi todos lados, y la Octopus, en el resto.",
        "Algunos puestos de comida y mercados chicos solo aceptan efectivo o Octopus. Hay cajeros en todas partes.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares de Hong Kong: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Subtropical y húmedo",
      body: [
        "Hong Kong es hemisferio norte. De noviembre a febrero el clima es templado y seco, con noches frescas.",
        "De mayo a septiembre hace calor y mucha humedad, con lluvias fuertes y tifones, sobre todo de julio a septiembre.",
        "Victoria Peak, a más de quinientos metros, es un poco más fresco que el centro.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a diciembre: templado, seco y con cielo claro. Es la mejor época.",
        "El Año Nuevo chino, entre enero y febrero, trae fuegos artificiales y algunos negocios cerrados. En verano conviene seguir el pronóstico de tifones.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Hong Kong",
      body: [
        "El metro llega a casi todos lados, también al aeropuerto. Los tranvías de dos pisos y el Star Ferry son parte del paseo.",
        "A Lantau, Lamma y Cheung Chau se va en ferry desde el muelle de Central.",
        "A Macao se llega en ferry o en bus por el puente, en alrededor de una hora, pasando la frontera.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Templos, el pasado colonial y aldeas de pescadores como Tai O.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Dim sum, ganso asado, fideos con wantán y comida de todo el mundo.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "La bahía y los rascacielos entre montañas, y senderos en los parques naturales.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Playas chicas en el sur de la isla y en las islas, con agua templada en verano.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Los hoteles son caros y chicos; comer en la calle sale poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 10,
      rationale: "Uno de los transportes públicos más fáciles del mundo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El dólar de Hong Kong está atado al estadounidense.",
    },
  ],

  shines: [
    "La comida.",
    "Transporte fácil y rápido.",
    "Ciudad y naturaleza a minutos.",
  ],

  costs: [
    "Hoteles caros y chicos.",
    "Calor húmedo y tifones en verano.",
    "Muchedumbres.",
  ],

  dataScopeNote:
    "Elegís el barrio o la isla en el planificador y los cálculos se hacen con su clima, que casi no cambia en el territorio. Los precios están en dólares de Hong Kong y son órdenes de magnitud.",

  places: [
    {
      id: "central",
      name: "Central y Sheung Wan",
      region: "Isla de Hong Kong",
      tag: "El centro sobre la bahía",
      blurb:
        "Rascacielos, la escalera mecánica más larga al aire libre, el templo Man Mo y las calles de antigüedades y frutos secos de Sheung Wan. Es la base del planificador: inviernos templados, veranos húmedos.",
      coords: [22.281, 114.1589],
      featured: true,
      image: null,
    },
    {
      id: "tsim-sha-tsui",
      name: "Tsim Sha Tsui (Kowloon)",
      region: "Kowloon",
      tag: "La bahía desde enfrente",
      blurb:
        "El paseo frente a la bahía con la mejor vista de la isla, museos y el muelle del Star Ferry.",
      coords: [22.2988, 114.1722],
      image: null,
    },
    {
      id: "mong-kok",
      name: "Mong Kok",
      region: "Kowloon",
      tag: "Mercados y neón",
      blurb:
        "Uno de los barrios más densos del mundo, con el mercado de las mujeres, el de los pájaros y el mercado nocturno de Temple Street cerca.",
      coords: [22.3193, 114.1694],
      image: null,
    },
    {
      id: "victoria-peak",
      name: "Victoria Peak",
      region: "Isla de Hong Kong",
      tag: "La vista",
      blurb:
        "El mirador sobre la bahía, al que se sube en funicular, con un sendero circular alrededor de la cima. Un poco más fresco que el centro.",
      coords: [22.2759, 114.1455],
      image: null,
    },
    {
      id: "lantau",
      name: "Lantau: el Gran Buda y Tai O",
      region: "Islas",
      tag: "El Buda gigante",
      blurb:
        "El Buda de Tian Tan y el monasterio de Po Lin, al que se sube en teleférico, y Tai O, un pueblo de pescadores sobre pilotes.",
      coords: [22.254, 113.905],
      image: null,
    },
    {
      id: "sai-kung",
      name: "Sai Kung",
      region: "Nuevos Territorios",
      tag: "Playas y geoparque",
      blurb:
        "Un pueblo de pescadores con restaurantes de mariscos, islas y playas, y columnas de roca volcánica en el geoparque.",
      coords: [22.3814, 114.27],
      image: null,
    },
    {
      id: "lamma",
      name: "Isla de Lamma",
      region: "Islas",
      tag: "Sin autos",
      blurb:
        "Una isla sin autos, con senderos entre playas y restaurantes de mariscos junto al muelle.",
      coords: [22.21, 114.125],
      image: null,
    },
    {
      id: "stanley",
      name: "Stanley y Repulse Bay",
      region: "Isla de Hong Kong",
      tag: "El sur de la isla",
      blurb:
        "Playas en el sur de la isla, un mercado y un paseo junto al mar, a media hora del centro.",
      coords: [22.219, 114.212],
      image: null,
    },
    {
      id: "cheung-chau",
      name: "Isla de Cheung Chau",
      region: "Islas",
      tag: "La isla de los pescadores",
      blurb:
        "Una isla de pescadores con templos, comida de calle y el festival de los bollos en primavera.",
      coords: [22.21, 114.028],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Hong Kong depende de la estación. De noviembre a febrero, ropa liviana y un buzo o campera liviana para la noche. De mayo a septiembre, ropa que respire, paraguas y un abrigo liviano para el aire acondicionado, que es fuerte. Siempre, calzado cómodo para escaleras y senderos, y la tarjeta Octopus.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de octubre a diciembre.",
      "Calor húmedo y tifones de junio a septiembre.",
      "Control de fronteras propio, distinto del de China continental.",
      "La tarjeta Octopus sirve para casi todo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que respire, paraguas, protector y un abrigo liviano para el aire acondicionado.",
      templado:
        "Ropa liviana y un buzo para la noche: es el otoño y la primavera, la mejor época.",
      fresco:
        "Un buzo y una campera liviana para las noches de enero y febrero.",
      frio: "Una campera para los días más frescos del invierno, que rara vez bajan de diez grados.",
    },
    plug: {
      types: "Tipo G",
      voltage: "220 V, 50 Hz",
      note: "El tipo G es el británico, de tres patas planas. Un adaptador universal lo resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá la Octopus en el aeropuerto",
          body: "Sirve para el tren al centro, el metro, los ferris y muchos negocios.",
        },
        {
          title: "Cruzá la bahía en el Star Ferry",
          body: "Es barato, corto y tiene la mejor vista.",
        },
        {
          title: "Caminá un sendero",
          body: "El Dragon's Back o los de las islas están a minutos del centro.",
        },
        {
          title: "Seguí los avisos de tifón",
          body: "Con señal 8 o más, la ciudad cierra: el observatorio los publica con anticipación.",
        },
        {
          title: "Andá temprano al dim sum",
          body: "Los lugares populares se llenan a media mañana.",
        },
        {
          title: "Elegí pagar en dólares de Hong Kong",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No confundas Hong Kong con China continental",
          body: "Para cruzar hace falta otra visa.",
        },
        {
          title: "No subestimes la humedad",
          body: "En verano, cualquier caminata cansa el doble: agua y descansos.",
        },
        {
          title: "No comas ni tomes en el metro",
          body: "Está prohibido y se multa.",
        },
        {
          title: "No te quedes solo en el centro",
          body: "Lantau, Sai Kung y las islas son otro Hong Kong.",
        },
        {
          title: "No olvides el abrigo liviano",
          body: "El aire acondicionado de los interiores es muy fuerte.",
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
          body: "Hong Kong tiene control de fronteras propio. Muchos pasaportes entran sin visa, pero no todos; para China continental hace falta otra.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida",
          "Visa china, si pensás cruzar",
          "Seguro de viaje",
        ],
      },
      {
        id: "verano",
        title: "Para el verano",
        notice: {
          tone: "info",
          title: "Humedad y tifones",
          body: "De junio a septiembre, calor húmedo, lluvias fuertes y tifones. Ropa que respire y un plan para los días de señal 8.",
        },
        summary: "Lo que pide el verano",
        items: [
          "Paraguas",
          "Ropa liviana que respire",
          "Un abrigo liviano para los interiores",
          "Protector solar",
        ],
      },
      {
        id: "senderos",
        title: "Para los senderos",
        notice: null,
        summary: "Lo que conviene llevar",
        items: ["Zapatillas con buen agarre", "Agua", "Gorra y protector"],
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
        ],
      },
    ],
    avoid: [
      {
        leave: "Una valija enorme",
        why: "Los hoteles son chicos y el metro tiene escaleras.",
        instead: "Una valija mediana o un bolso.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El aire acondicionado es muy fuerte.",
        instead: "Un abrigo liviano.",
      },
      {
        leave: "Zapatos nuevos",
        why: "Se camina mucho y hay escaleras por todos lados.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Un plan sin margen en verano",
        why: "Un tifón puede cerrar la ciudad un día entero.",
        instead: "Un día libre en el itinerario.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta y la Octopus sirven para casi todo.",
        instead: "La tarjeta, la Octopus y algo de efectivo.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. Los hoteles tienen uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Hong Kong?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros la necesitan. Verificá el tuyo.",
      },
      {
        question: "¿Puedo cruzar a China continental?",
        answer: "Sí, con visa china, que es aparte de la entrada a Hong Kong.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De octubre a diciembre. En verano hay calor húmedo y tifones.",
      },
      {
        question: "¿Qué pasa si hay un tifón?",
        answer:
          "Con señal 8 o más, cierran oficinas, negocios y parte del transporte hasta que pasa. Los hoteles avisan.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Hong Kong usa el tipo G, de tres patas planas, a 220 V.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Los restaurantes suman un cargo por servicio; más allá de eso, no es necesario.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Es tratada, pero muchos la hierven o toman embotellada.",
      },
      {
        question: "¿Cómo llego a Macao?",
        answer:
          "En ferry o en bus por el puente, en alrededor de una hora, pasando la frontera.",
      },
    ],
  },
};
