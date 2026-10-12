import type { DestinationGuide } from "./types";

/**
 * Guía de Malaui.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la tesis de Venezuela en África. El kwacha tiene una
 * cotización oficial y otra en el mercado paralelo muy lejos entre sí, así que
 * los precios del presupuesto van en dólares y el corredor tiene las dos
 * cotizaciones, como Turkmenistán, Irán y Myanmar (spec, 15.7). Es el dato de
 * su portada.
 * El clima es el de Zambia con el lago en el medio: lluvias de noviembre a
 * abril, un invierno seco que en la meseta de Nyika baja a dos grados, y un
 * octubre caluroso antes de las lluvias.
 */
export const malaui: DestinationGuide = {
  slug: "malaui",
  country: "Malaui",
  subregion: "África Oriental",
  subhead:
    "El lago Malaui, con playas de agua dulce y peces de colores, los safaris en barco de Liwonde, las mesetas de Zomba y Nyika y el monte Mulanje. Un país chico que se presenta como el corazón cálido de África.",

  image: null,

  highlights: [
    {
      value: "2 cotizaciones",
      label: "del kwacha, muy lejos entre sí",
      note: "La oficial y la del mercado paralelo están muy lejos. Por eso los precios del planificador están en dólares, que es como se cobran los lodges y los safaris.",
    },
    {
      value: "Lago Malaui",
      label: "con más especies de peces que cualquier otro lago",
      note: "Un quinto del país es lago: playas de arena, agua dulce y transparente, y cientos de cíclidos de colores que se ven con snorkel en Cabo Maclear.",
    },
    {
      value: "Liwonde",
      label: "safaris en barco por el río Shire",
      note: "Hipopótamos, cocodrilos y elefantes desde el agua; en tierra, leones y guepardos, que volvieron al parque en los últimos años.",
    },
    {
      value: "2 °C",
      label: "de mínima en Nyika en julio",
      note: "La meseta de Nyika, a más de dos mil metros, tiene pastizales con cebras y antílopes, y noches de invierno de abrigo de verdad.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Malaui",
      body: [
        "Muchos pasaportes entran sin visa desde que Malaui la eliminó para decenas de países; el resto la tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra y páginas en blanco.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Malaui",
      body: [
        "La moneda es el kwacha, con una cotización oficial y otra en el mercado paralelo muy lejos entre sí. Por eso los precios del planificador están en dólares.",
        "Los lodges, los safaris y muchos hoteles se cotizan y se cobran en dólares. Llevá dólares en billetes nuevos y sanos, y cambiá solo en bancos o casas de cambio autorizadas: el cambio en la calle es ilegal.",
        "La tarjeta funciona en hoteles y lodges, y hay cajeros en las ciudades, que dan kwachas a la cotización oficial. En los pueblos y en el lago, efectivo.",
      ],
    },
    {
      id: "clima",
      title: "Lluvias, invierno y calor",
      body: [
        "Malaui está en el hemisferio sur. Llueve de noviembre a abril; de mayo a agosto, el invierno es seco, con días templados y noches frías en la meseta.",
        "En Lilongwe, las noches de julio rondan los siete grados, y en la meseta de Nyika, a más de dos mil metros, los dos. El lago y el valle del Shire son calurosos casi todo el año.",
        "Octubre, antes de las lluvias, es el mes más caluroso: en Liwonde, el mediodía pasa los treinta y cuatro grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: temporada seca, la mejor para los safaris y para el lago, con el agua más transparente. Septiembre y octubre son los meses de más animales y de más calor.",
        "De diciembre a marzo llueve mucho, algunos caminos de tierra se cortan y algunos lodges cierran; a cambio, el paisaje se pone verde y llegan los pájaros migratorios.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Malaui",
      body: [
        "Entre las ciudades hay buses y combis, lentos y llenos; para los parques y la costa del lago, lo habitual es un auto con chofer o el traslado del lodge. Se maneja por la izquierda.",
        "A Likoma y al norte del lago se puede ir en el Ilala, el barco que recorre el lago desde los años cincuenta, cuando está en servicio, o en avioneta.",
        "Las distancias son cortas en el mapa y largas en la ruta. De noche no se maneja: hay peatones, bicicletas y pozos, y casi nada de luz.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "Las misiones escocesas de Livingstonia y Blantyre, y el arte rupestre de Chongoni, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Nsima con relish, chambo —el pescado del lago— y frutas tropicales.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "El lago, las mesetas de Zomba y Nyika, el monte Mulanje y el valle del Shire.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Playas de arena sobre el lago, de agua dulce y transparente.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Comer y moverse es barato; los lodges de los parques se cobran en dólares y no lo son.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Un país chico y amable, pero con rutas lentas y transporte público incómodo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 3,
      rationale: "Dos cotizaciones muy lejos entre sí, y escasez de dólares.",
    },
  ],

  shines: [
    "El lago: playa, snorkel y kayak en agua dulce.",
    "Safaris tranquilos, con pocos vehículos.",
    "La gente, que le ganó al país el apodo de corazón cálido de África.",
  ],

  costs: [
    "Dos cotizaciones y escasez de dólares.",
    "Rutas lentas y transporte incómodo.",
    "Calor fuerte en octubre en el lago y en el valle.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Lilongwe en julio que el lago o la meseta de Nyika. Los precios están en dólares, que es como conviene pensarlos con un kwacha de dos cotizaciones, y son órdenes de magnitud; un lodge en los parques puede costar varias veces más.",

  places: [
    {
      id: "lilongwe",
      name: "Lilongwe",
      region: "Centro",
      tag: "La capital",
      blurb:
        "Una capital tranquila y extendida, con el mercado viejo, un centro de vida silvestre y la salida al lago y a los parques. Es la base del planificador: lluvias de diciembre a marzo e inviernos secos de noches frías.",
      coords: [-13.9626, 33.7741],
      featured: true,
      image: null,
    },
    {
      id: "cabo-maclear",
      name: "Cabo Maclear (lago Malaui)",
      region: "Sur del lago",
      tag: "Snorkel entre cíclidos",
      blurb:
        "Un pueblo de pescadores dentro del Parque Nacional del Lago Malaui, patrimonio de la humanidad, con kayak entre islas y peces de colores. Calor casi todo el año.",
      coords: [-14.0167, 34.8333],
      image: null,
    },
    {
      id: "nkhata-bay",
      name: "Nkhata Bay",
      region: "Norte del lago",
      tag: "Bahía y hamacas",
      blurb:
        "Una bahía de aguas profundas con alojamientos colgados de las rocas, kayak y saltos al agua. Más lluviosa que el sur del lago.",
      coords: [-11.6, 34.3],
      image: null,
    },
    {
      id: "likoma",
      name: "Isla Likoma",
      region: "Lago Malaui",
      tag: "Una isla en el lago",
      blurb:
        "Una isla cerca de la costa de Mozambique, con una catedral anglicana enorme, baobabs y playas tranquilas. Se llega en avioneta o en barco.",
      coords: [-12.0667, 34.7333],
      image: null,
    },
    {
      id: "liwonde",
      name: "Parque Nacional Liwonde",
      region: "Sur",
      tag: "Safari en barco",
      blurb:
        "Un parque sobre el río Shire con hipopótamos, cocodrilos, elefantes y leones, que se recorre en barco y en vehículo. En octubre, el mediodía pasa los treinta y cuatro grados.",
      coords: [-14.85, 35.35],
      image: null,
    },
    {
      id: "zomba",
      name: "Meseta de Zomba",
      region: "Sur",
      tag: "La meseta",
      blurb:
        "Una meseta de bosques, cascadas y miradores sobre la vieja capital colonial. Fresca casi todo el año, con noches frías en invierno.",
      coords: [-15.35, 35.3],
      image: null,
    },
    {
      id: "blantyre",
      name: "Blantyre",
      region: "Sur",
      tag: "La ciudad comercial",
      blurb:
        "La ciudad más antigua del país, con la iglesia de San Miguel y Todos los Ángeles, levantada por misioneros escoceses, y las plantaciones de té de Thyolo cerca.",
      coords: [-15.7861, 35.0058],
      image: null,
    },
    {
      id: "mulanje",
      name: "Monte Mulanje",
      region: "Sur",
      tag: "La montaña",
      blurb:
        "Un macizo de granito con el pico más alto del país, refugios para trekkings de varios días y plantaciones de té al pie.",
      coords: [-15.9333, 35.6],
      image: null,
    },
    {
      id: "nyika",
      name: "Meseta de Nyika",
      region: "Norte",
      tag: "Pastizales de altura",
      blurb:
        "Una meseta a más de dos mil metros, con cebras, antílopes y orquídeas, y noches de invierno que bajan a dos grados.",
      coords: [-10.6, 33.8],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Malaui, ropa liviana de colores neutros para el día y un buzo para la noche, que en invierno es fría en Lilongwe y en las mesetas; para Nyika, abrigo de verdad. Para el lago, traje de baño y protector. Todo el año, repelente, dólares en billetes nuevos y un adaptador para el enchufe británico.",
    keyPoints: [
      "Dos cotizaciones del kwacha, muy lejos entre sí: los precios van en dólares.",
      "Lluvias de noviembre a abril; invierno seco de mayo a agosto.",
      "Noches frías en la meseta en invierno: dos grados en Nyika en julio.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente. Algo impermeable de diciembre a marzo.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el clima de Lilongwe casi todo el año.",
      fresco:
        "Capas: un buzo abrigado y una campera para los safaris del amanecer y las mesetas.",
      frio: "Campera de abrigo, gorro y guantes para las noches de invierno en Nyika.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Tres patas rectangulares: es el enchufe británico. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes, y muchos alojamientos tienen generador o paneles solares. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares en billetes nuevos",
          body: "Los lodges y los safaris se pagan en dólares, y los billetes viejos o rotos se rechazan.",
        },
        {
          title: "Cambiá solo en bancos o casas de cambio",
          body: "El cambio en la calle es ilegal, y es donde están las estafas.",
        },
        {
          title: "Pensá cómo pagás con tarjeta",
          body: "Lo que se cobra en kwachas con una tarjeta extranjera se convierte a la cotización oficial; lo que se cobra en dólares, no.",
        },
        {
          title: "Hacé snorkel en Cabo Maclear",
          body: "El agua transparente del lago está llena de cíclidos de colores, a metros de la orilla.",
        },
        {
          title: "Recorré Liwonde en barco",
          body: "Los safaris por el río Shire muestran hipopótamos, cocodrilos y elefantes desde muy cerca.",
        },
        {
          title: "Llevá una batería externa",
          body: "Los cortes de luz son frecuentes, también en los alojamientos.",
        },
      ],
      donts: [
        {
          title: "No cambies plata en la calle",
          body: "Es ilegal, y los billetes falsos y las estafas son comunes.",
        },
        {
          title: "No te metas al lago en cualquier orilla",
          body: "Cerca de los juncos y de los pueblos hay riesgo de bilharzia: preguntá en el alojamiento dónde nadar.",
        },
        {
          title: "No bajes del vehículo en los parques",
          body: "Salvo donde el guía lo permita: los animales son salvajes.",
        },
        {
          title: "No manejes de noche",
          body: "Hay peatones, bicicletas y pozos en las rutas, y casi nada de luz.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos: está prohibido.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lago",
        title: "Para el lago",
        notice: {
          tone: "info",
          title: "Agua dulce y sol fuerte",
          body: "El sol pega fuerte sobre el agua, y algunas orillas tienen riesgo de bilharzia: preguntá dónde nadar.",
        },
        summary: "Playa de agua dulce",
        items: [
          "Traje de baño",
          "Protector solar alto",
          "Máscara y snorkel",
          "Calzado para el agua",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Dólares desde casa",
          body: "Los lodges se pagan en dólares, y los cajeros dan kwachas a la cotización oficial: llevá dólares en billetes nuevos.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes nuevos y sanos",
          "Una tarjeta para hoteles y lodges",
          "Kwachas en billetes chicos para los pueblos",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa depende del pasaporte",
          body: "Muchos pasaportes entran sin visa y otros la tramitan online antes. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas en blanco",
          "La visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en la temporada de lluvias y en el lago. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en lodges, bancos y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las noches de invierno en Lilongwe y en las mesetas son frías.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Una valija rígida para las avionetas",
        why: "Los vuelos a Likoma y a los parques piden bolsos blandos y con poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Ropa azul oscura o negra para el safari",
        why: "Atrae a las moscas tse-tsé en algunos parques.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Sandalias para el monte Mulanje",
        why: "Los senderos son de piedra y empinados.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Malaui?",
        answer:
          "Muchos pasaportes entran sin visa; otros la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Por qué los precios están en dólares?",
        answer:
          "Porque el kwacha tiene dos cotizaciones muy lejos entre sí, y en dólares es como se cobran los lodges y los safaris.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca. Septiembre y octubre son los de más animales y más calor.",
      },
      {
        question: "¿Se puede nadar en el lago?",
        answer:
          "Sí, y es una de las razones para ir. Preguntá en el alojamiento dónde: cerca de algunas orillas hay riesgo de bilharzia.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Es el británico, tipo G, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El chichewa y el inglés, que es oficial y se habla en todos lados.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada.",
      },
    ],
  },
};
