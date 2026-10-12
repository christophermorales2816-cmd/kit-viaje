import type { DestinationGuide } from "./types";

/**
 * Guía de Etiopía.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: un calendario y una hora propios. El año etíope
 * tiene trece meses y va siete u ocho años atrás, y la hora se cuenta desde
 * que sale el sol: es el dato de su portada, porque cambia cómo se lee un
 * horario. Las ciudades del planificador son la capital, el sur, Harar y Dire
 * Dawa; ninguna está en Amhara, Tigray, Afar ni Oromía, así que el norte
 * histórico —Lalibela, Gondar, Axum— queda afuera, y la guía lo dice.
 */
export const etiopia: DestinationGuide = {
  slug: "etiopia",
  country: "Etiopía",
  subregion: "África Oriental",
  subhead:
    "Un calendario propio, la ceremonia del café en la tierra donde nació, Lucy en el museo de Adís Abeba, la ciudad amurallada de Harar y los pueblos del valle del Omo.",

  image: null,

  highlights: [
    {
      value: "13 meses",
      label: "en el calendario etíope, que va siete u ocho años atrás",
      note: "El año empieza en septiembre, y la hora se cuenta desde que sale el sol: las siete de la mañana son la una. Cuando te den un horario, preguntá si es etíope o internacional.",
    },
    {
      value: "Café",
      label: "en ceremonia, en la tierra donde nació",
      note: "El café arábica es originario de los bosques del suroeste de Etiopía. La ceremonia, con los granos tostados en el momento y tres rondas, es la forma de recibir a alguien.",
    },
    {
      value: "Lucy",
      label: "en el Museo Nacional de Adís Abeba",
      note: "Uno de los esqueletos de homínido más famosos, de hace más de tres millones de años, encontrado en el desierto de Afar.",
    },
    {
      value: "Harar",
      label: "la ciudad amurallada, con hienas al caer la noche",
      note: "Una de las ciudades santas del islam, patrimonio de la humanidad, con un laberinto de callejones dentro de la muralla. De noche, en las afueras, los hombres hiena les dan de comer a hienas salvajes.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Etiopía",
      body: [
        "Casi todos los pasaportes tramitan la visa electrónica online antes de viajar, en el sitio oficial, y entran por el aeropuerto de Adís Abeba. Verificá el tuyo antes de comprar el pasaje.",
        "Etiopía pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y varios de Sudamérica están en esa lista. Si tu viaje pasa por uno, vacunate al menos diez días antes y llevá el certificado.",
        "El pasaporte tiene que tener al menos seis meses de vigencia al llegar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Etiopía",
      body: [
        "La moneda es el birr. La tarjeta funciona en hoteles grandes y en algunos restaurantes de Adís Abeba; en el resto del país, efectivo.",
        "Hay cajeros en las ciudades. Si llevás dólares o euros, cambialos en bancos o en el hotel y guardá los comprobantes: te los pueden pedir para volver a cambiar los birrs que sobren.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí birrs: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Altura y valles calurosos",
      body: [
        "Adís Abeba está a más de dos mil trescientos metros: días templados y noches frescas todo el año, sin verano caluroso. La lluvia larga, el kiremt, cae de junio a septiembre, casi todos los días.",
        "El sur tiene dos lluvias, en abril y mayo y otra vez en octubre. Los montes Gamo, en Dorze, son frescos todo el año; el valle del Omo, en Jinka y Turmi, es caluroso.",
        "Harar, en las tierras altas del este, es templada; Dire Dawa, a sus pies, pasa los treinta grados de marzo a octubre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a marzo: temporada seca en las tierras altas, la mejor para recorrer. En enero, Timkat, la Epifanía ortodoxa, llena las calles de procesiones.",
        "En septiembre empieza el año etíope, y a fin de mes se festeja el Meskel con fogatas. De junio a septiembre llueve casi todos los días en la capital; el sur tiene sus lluvias en abril y mayo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Etiopía",
      body: [
        "Para el sur y el este conviene volar: Ethiopian Airlines tiene vuelos internos a Hawassa, Arba Minch, Jinka y Dire Dawa, y las rutas por tierra desde Adís Abeba cruzan zonas que varias recomendaciones de viaje desaconsejan.",
        "En el sur, entre Arba Minch, Dorze, Konso, Jinka y Turmi, lo común es moverse con chofer y guía local. En Adís Abeba hay aplicaciones de taxi locales, como Ride y Feres, y minibuses baratos.",
        "Las distancias son largas y las rutas, lentas: calculá días enteros de viaje entre regiones. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Etiopía, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, el sur, Harar y Dire Dawa. Ninguna está en Amhara, Tigray, Afar ni Oromía, así que Lalibela, Gondar, Axum y el desierto de Danakil no forman parte del planificador. A Harar se llega por ruta desde Dire Dawa: revisá también qué dice la recomendación sobre ese camino.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Harar, Lucy, la iglesia ortodoxa y un calendario propio; Lalibela y Axum, en el norte, no están en el planificador.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale: "Injera con wat, tibs, kitfo, shiro y el café en ceremonia.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Tierras altas, los lagos del sur, los montes Gamo y el valle del Omo.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y moverse sale poco; los hoteles buenos de la capital, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Buenos vuelos internos; las rutas son lentas, y el sur se recorre con chofer.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 4,
      rationale: "El birr pierde valor contra el dólar.",
    },
  ],

  shines: [
    "Una cultura que no se parece a ninguna otra.",
    "El café y la comida.",
    "Los pueblos y los mercados del valle del Omo.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "El norte histórico, fuera del planificador.",
    "Distancias que conviene hacer en avión.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Adís Abeba en julio que el valle del Omo o Dire Dawa. Los precios están en birrs y son órdenes de magnitud; recorrer el sur con chofer y guía cuesta bastante más que el bus.",

  places: [
    {
      id: "adis-abeba",
      name: "Adís Abeba",
      region: "Adís Abeba",
      tag: "La capital en la altura",
      blurb:
        "El Museo Nacional con Lucy, la catedral de la Santísima Trinidad, el Merkato, uno de los mercados al aire libre más grandes de África, y el monte Entoto. Es la base del planificador: días templados y noches frescas todo el año, con lluvia de junio a septiembre.",
      coords: [9.03, 38.74],
      featured: true,
      image: null,
    },
    {
      id: "hawassa",
      name: "Hawassa",
      region: "Sidama",
      tag: "El lago y el mercado de pescado",
      blurb:
        "Una ciudad junto al lago Hawassa, con el mercado de pescado al amanecer, monos en la costanera y cafetales cerca. Templada, con lluvias en abril y mayo y de julio a septiembre.",
      coords: [7.0621, 38.4764],
      image: null,
    },
    {
      id: "arba-minch",
      name: "Arba Minch (lagos Abaya y Chamo)",
      region: "Sur",
      tag: "Cocodrilos y lagos",
      blurb:
        "Entre los lagos Abaya y Chamo, con los cocodrilos gigantes del Chamo, el parque Nechisar y el bosque de manantiales que le da nombre. Calurosa, con lluvias en abril, mayo y octubre.",
      coords: [6.0333, 37.55],
      image: null,
    },
    {
      id: "dorze",
      name: "Dorze (montes Gamo)",
      region: "Sur",
      tag: "Casas de bambú en la montaña",
      blurb:
        "Un pueblo de los montes Gamo, a más de dos mil quinientos metros sobre Arba Minch, famoso por sus casas de bambú con forma de colmena y sus tejidos. Fresco todo el año.",
      coords: [6.2, 37.5667],
      image: null,
    },
    {
      id: "konso",
      name: "Konso",
      region: "Sur",
      tag: "Terrazas de piedra",
      blurb:
        "Un paisaje de terrazas de piedra y pueblos amurallados, patrimonio de la humanidad, con las waka, las estatuas de madera que recuerdan a los muertos. Lluvias en abril, mayo y octubre.",
      coords: [5.2833, 37.4833],
      image: null,
    },
    {
      id: "jinka",
      name: "Jinka (valle del Omo)",
      region: "Valle del Omo",
      tag: "La puerta del Omo",
      blurb:
        "El pueblo base del valle del Omo, con un museo de los pueblos de la región y mercados semanales a los que llegan desde los pueblos de alrededor. Calurosa, con lluvias de marzo a mayo y en septiembre y octubre.",
      coords: [5.7833, 36.5667],
      image: null,
    },
    {
      id: "turmi",
      name: "Turmi (pueblo hamer)",
      region: "Valle del Omo",
      tag: "El pueblo hamer",
      blurb:
        "Un pueblo de los hamer, con mercado los lunes y, si coincide, la ceremonia del salto del toro. Calor seco casi todo el año.",
      coords: [4.9667, 36.4833],
      image: null,
    },
    {
      id: "harar",
      name: "Harar",
      region: "Harar",
      tag: "La ciudad amurallada",
      blurb:
        "La ciudad vieja amurallada, patrimonio de la humanidad, con callejones de colores, la casa de Rimbaud y los hombres hiena al caer la noche. Templada todo el año.",
      coords: [9.3126, 42.1227],
      image: null,
    },
    {
      id: "dire-dawa",
      name: "Dire Dawa",
      region: "Dire Dawa",
      tag: "La ciudad del tren",
      blurb:
        "Una ciudad nacida con el ferrocarril a Yibuti, con el mercado Kafira y el tren nuevo a la costa. La puerta para Harar, y lo más caluroso del este.",
      coords: [9.6009, 41.8501],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Etiopía es altura o calor, según la zona. Para Adís Abeba y Dorze, capas: días templados, noches frescas y, de junio a septiembre, lluvia casi todos los días. Para el valle del Omo y Dire Dawa, ropa liviana, sombrero y protector. Siempre, ropa que cubra hombros y rodillas para iglesias y mezquitas, repelente y un adaptador universal.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Lluvia larga de junio a septiembre; la mejor época es de octubre a marzo.",
      "Calendario y hora propios: preguntá si un horario es etíope o internacional.",
      "Malaria en las zonas bajas, no en Adís Abeba: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada, sombrero, protector y repelente para el valle del Omo y Dire Dawa.",
      templado:
        "Ropa liviana de día y un buzo para la noche: en la altura refresca rápido.",
      fresco:
        "Capas: remera, buzo y una campera liviana para Adís Abeba y Dorze.",
      frio: "Un buzo de abrigo y una campera para las noches de Adís Abeba y Dorze, que en diciembre y enero bajan de los diez grados.",
    },
    plug: {
      types: "Tipos C, E, F y L",
      voltage: "220 V, 50 Hz",
      note: "Lo más común son las dos patas redondas finas, que entran en casi todos; el L, italiano, tiene tres patas en línea. Un adaptador universal resuelve todo. Fuera de la capital, los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Preguntá si el horario es etíope",
          body: "La hora local se cuenta desde que sale el sol: las siete de la mañana son la una.",
        },
        {
          title: "Volá al sur y al este",
          body: "Los vuelos internos ahorran días de ruta, y si llegás al país con Ethiopian suelen tener descuento.",
        },
        {
          title: "Aceptá la ceremonia del café",
          body: "Tres rondas, con incienso y a veces pochoclo: es la forma de recibir visitas.",
        },
        {
          title: "Cubrí hombros y rodillas",
          body: "En las iglesias ortodoxas se entra descalzo, y las mujeres se cubren la cabeza.",
        },
        {
          title: "Elegí pagar en birrs",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No fotografíes a la gente sin preguntar",
          body: "En el valle del Omo se cobra por cada foto: acordá antes.",
        },
        {
          title: "No subestimes la altura",
          body: "El primer día en Adís Abeba cansa: tomá agua y andá despacio.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de puentes, aeropuertos, policías o militares.",
        },
        {
          title: "No comas con la mano izquierda",
          body: "La injera se corta y se come con la derecha.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Etiopía y si tu pasaporte necesita visa: casi todos la tramitan online.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica, impresa",
          "El certificado de la fiebre amarilla, si tu viaje pasa por un país con riesgo",
        ],
      },
      {
        id: "altura",
        title: "Para la altura",
        notice: {
          tone: "info",
          title: "Días templados, noches frescas",
          body: "Adís Abeba y Dorze refrescan apenas baja el sol, todo el año.",
        },
        summary: "Capas",
        items: [
          "Un buzo y una campera liviana",
          "Algo impermeable de junio a septiembre",
          "Protector solar: en la altura el sol quema más",
          "Calzado cerrado y cómodo",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para iglesias, mezquitas y pueblos",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo para cubrirse la cabeza",
          "Calzado fácil de sacar",
          "Billetes chicos para las fotos en el sur",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en las zonas bajas, como el valle del Omo y Dire Dawa; en Adís Abeba, no. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Solo ropa de verano",
        why: "Adís Abeba es fresca de noche todo el año.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Ropa corta para las iglesias",
        why: "En iglesias y mezquitas se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en los bancos.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Un itinerario apretado por tierra",
        why: "Las distancias son enormes y las rutas, lentas.",
        instead: "Vuelos internos y días de margen.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro en Etiopía y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Etiopía?",
        answer:
          "Casi todos los pasaportes la tramitan online como visa electrónica antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, te la pueden pedir. Vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a marzo, la temporada seca en las tierras altas. En enero se festeja Timkat.",
      },
      {
        question: "¿Por qué los horarios no coinciden?",
        answer:
          "La hora etíope se cuenta desde que sale el sol: las siete de la mañana son la una. Preguntá siempre cuál te están diciendo.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "En las zonas bajas, sí; en Adís Abeba, no. Consultá con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Etiopía usa los tipos C, E, F y L a 220 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
