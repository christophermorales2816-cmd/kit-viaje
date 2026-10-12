import type { DestinationGuide } from "./types";

/**
 * Guía de Mauritania.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que las secciones 15.8 y 15.9 decidieron para los países en duda
 * de África: entra con aviso, como Pakistán. La entrada "tener-en-cuenta"
 * manda a revisar la recomendación de viaje del propio país y qué cubre el
 * seguro.
 *
 * Lo que este país aporta: el calor del Sahara —Atar llega a cuarenta y tres
 * grados en junio—, que es el dato de su portada. Fue la máxima de África en
 * el planificador hasta que la sexta tanda sumó el lago Assal, en Yibuti
 * (spec, 15.10). Es una república islámica: no se vende alcohol. Las ciudades
 * del planificador son la capital, el Banc d'Arguin, el Adrar y el río
 * Senegal; ninguna está al norte del trópico de Cáncer, en el este ni cerca de
 * las fronteras con Malí, Argelia o el Sahara Occidental, así que Nuadibú,
 * pegada a esa frontera, no está.
 */
export const mauritania: DestinationGuide = {
  slug: "mauritania",
  country: "Mauritania",
  subregion: "África Occidental",
  subhead:
    "El Sahara del Adrar, las ciudades caravaneras de Chinguetti y Uadane con sus bibliotecas de manuscritos, el Ojo del Sahara y las aves del Banc d'Arguin, donde el desierto llega al mar.",

  image: null,

  highlights: [
    {
      value: "+43 °C",
      label: "de máxima en Atar en junio",
      note: "El Adrar, en el Sahara, pasa los cuarenta grados de mayo a septiembre. De noviembre a febrero, en cambio, los días son agradables y las noches del desierto, frescas.",
    },
    {
      value: "Chinguetti",
      label: "bibliotecas de manuscritos en una ciudad de piedra",
      note: "Una ciudad caravanera, patrimonio de la humanidad, con bibliotecas familiares que guardan manuscritos de hace siglos y dunas que avanzan sobre las casas.",
    },
    {
      value: "Banc d'Arguin",
      label: "millones de aves donde el desierto llega al mar",
      note: "Uno de los lugares de invernada de aves más importantes del mundo, patrimonio de la humanidad, con los pescadores imraguen y sus lanchas a vela.",
    },
    {
      value: "Ojo del Sahara",
      label: "anillos de roca que se ven desde el espacio",
      note: "La estructura de Richat, cerca de Uadane: círculos de roca de unos cuarenta kilómetros de diámetro, que los astronautas usaban de referencia.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Mauritania",
      body: [
        "Casi todos los pasaportes tramitan la visa electrónica online antes de viajar; se paga y se completa con las huellas al llegar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Mauritania pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y varios de Sudamérica están en esa lista. Si tu viaje pasa por uno, vacunate al menos diez días antes y llevá el certificado.",
        "Es una república islámica: no se vende alcohol, y no conviene llevarlo.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Mauritania",
      body: [
        "La moneda es la uguiya. Casi todo se paga en efectivo: la tarjeta funciona en pocos hoteles de Nuakchot.",
        "Hay cajeros en Nuakchot y en Atar, pero no siempre aceptan tarjetas extranjeras. Llevá euros o dólares en billetes nuevos y cambialos en bancos o casas de cambio.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí uguiyas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Desierto con costa",
      body: [
        "Nuakchot y el Banc d'Arguin tienen el calor templado por el Atlántico y el viento del mar, y casi no ven lluvia.",
        "El Adrar —Atar, Chinguetti, Uadane, Terjit— es Sahara: de mayo a septiembre pasa los cuarenta grados, y Atar llega a cuarenta y tres en junio. En invierno, los días son agradables y las noches, frescas.",
        "El río Senegal, en Rosso y el Diawling, tiene una temporada de lluvias corta, de julio a septiembre, con calor húmedo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: la mejor época para el desierto, con días templados y noches frescas. De octubre a marzo, el Banc d'Arguin se llena de aves.",
        "De mayo a septiembre, el Adrar es muy caluroso. En Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Mauritania",
      body: [
        "Entre Nuakchot y Atar hay vuelos y buses por una ruta asfaltada. De Atar a Chinguetti, Uadane y el Ojo del Sahara conviene ir en todoterreno, con chofer y guía.",
        "Al Banc d'Arguin se entra en todoterreno, con el permiso del parque y, mejor, con un operador local.",
        "En las rutas hay controles: llevá copias del pasaporte y de la visa. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Mauritania, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, el Banc d'Arguin, el Adrar y el río Senegal. Ninguna está al norte del trópico de Cáncer, en el este ni cerca de las fronteras con Malí, Argelia o el Sahara Occidental; por eso Nuadibú no forma parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Chinguetti y Uadane, ciudades caravaneras patrimonio de la humanidad, y sus manuscritos.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Thieboudienne, cordero asado, dátiles, leche de camella y té a la menta.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Dunas, mesetas, oasis y el desierto que llega al mar.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Una costa atlántica larga y casi vacía, con mar fuerte y viento.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer y dormir simple es barato; el desierto se hace con operador.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Distancias largas, todoterreno y controles.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "La uguiya es bastante estable.",
    },
  ],

  shines: [
    "El desierto del Adrar.",
    "Las ciudades caravaneras y sus bibliotecas.",
    "Las aves del Banc d'Arguin.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Calor extremo de mayo a septiembre.",
    "Casi todo en efectivo, y nada de alcohol.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Nuakchot en julio que Atar o el Banc d'Arguin. Los precios están en uguiyas y son órdenes de magnitud; el todoterreno con chofer y los campamentos del desierto cuestan bastante más.",

  places: [
    {
      id: "nuakchot",
      name: "Nuakchot",
      region: "Nuakchot",
      tag: "La capital sobre el Atlántico",
      blurb:
        "Una capital nueva junto al mar, con el mercado de pescado en la playa, donde las piraguas descargan al atardecer, y el museo nacional. Es la base del planificador: calor templado por el Atlántico y casi nada de lluvia.",
      coords: [18.0735, -15.9582],
      featured: true,
      image: null,
    },
    {
      id: "banc-darguin",
      name: "Parque Nacional del Banc d'Arguin (Iwik)",
      region: "Costa norte",
      tag: "Aves y desierto",
      blurb:
        "Un parque donde el desierto llega al mar, con millones de aves en invierno y los pescadores imraguen y sus lanchas a vela. Se entra en todoterreno.",
      coords: [19.88, -16.3],
      image: null,
    },
    {
      id: "atar",
      name: "Atar",
      region: "Adrar",
      tag: "La puerta del desierto",
      blurb:
        "La ciudad del Adrar, entre palmeras, con el mercado y el aeropuerto de los vuelos al desierto. Calor extremo de mayo a septiembre; inviernos agradables.",
      coords: [20.5167, -13.05],
      image: null,
    },
    {
      id: "chinguetti",
      name: "Chinguetti",
      region: "Adrar",
      tag: "Las bibliotecas del desierto",
      blurb:
        "Una ciudad caravanera de piedra, patrimonio de la humanidad, con bibliotecas de manuscritos y dunas al borde del pueblo.",
      coords: [20.4631, -12.3632],
      image: null,
    },
    {
      id: "uadane",
      name: "Uadane",
      region: "Adrar",
      tag: "La ciudad de piedra",
      blurb:
        "Las ruinas de una ciudad caravanera sobre una ladera, patrimonio de la humanidad, al borde del gran desierto.",
      coords: [20.9283, -11.6206],
      image: null,
    },
    {
      id: "ojo-del-sahara",
      name: "Ojo del Sahara (Guelb er Richât)",
      region: "Adrar",
      tag: "Anillos que se ven desde el espacio",
      blurb:
        "La estructura de Richat, anillos de roca de unos cuarenta kilómetros de diámetro, a una hora de Uadane en todoterreno.",
      coords: [21.1236, -11.4017],
      image: null,
    },
    {
      id: "terjit",
      name: "Terjit (oasis)",
      region: "Adrar",
      tag: "El oasis del cañón",
      blurb:
        "Un oasis de palmeras en un cañón, con agua que brota de la roca y una pileta natural para refrescarse.",
      coords: [20.2539, -13.0844],
      image: null,
    },
    {
      id: "rosso",
      name: "Rosso (río Senegal)",
      region: "Trarza",
      tag: "El río Senegal",
      blurb:
        "La ciudad del cruce a Senegal, sobre el río, con mercados y el verde que el desierto no tiene. Calor húmedo en verano, con lluvias de julio a septiembre.",
      coords: [16.5138, -15.805],
      image: null,
    },
    {
      id: "diawling",
      name: "Parque Nacional del Diawling",
      region: "Trarza",
      tag: "El delta",
      blurb:
        "Un parque en el delta del río Senegal, con lagunas, flamencos y pelícanos, frente al parque senegalés del Djoudj.",
      coords: [16.37, -16.4],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Mauritania, ropa liviana y holgada que cubra brazos y piernas, sombrero, lentes de sol y protector: el sol del desierto es fuerte todo el año. De noviembre a febrero, un buzo para las noches del Adrar. Un pañuelo para el viento y la arena, mucha agua y efectivo en euros o dólares.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Visa electrónica antes de viajar, y casi todo en efectivo.",
      "Calor extremo de mayo a septiembre en el Adrar; la mejor época es de noviembre a febrero.",
      "Una república islámica: ropa que cubra y nada de alcohol.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, lentes de sol, protector y mucha agua.",
      templado:
        "Ropa liviana de día y un buzo para la noche, que en el desierto refresca rápido.",
      fresco:
        "Un buzo y una campera liviana para las noches de invierno en el Adrar.",
      frio: "No hace frío en Mauritania: un buzo y una campera liviana alcanzan para las noches del desierto.",
    },
    plug: {
      types: "Tipo C",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas. Si tu enchufe es de otro tipo, llevá adaptador. Fuera de la capital, la luz puede depender de un generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Viajá al desierto con chofer y guía",
          body: "Las rutas del Adrar son de arena y piedra, y un operador local resuelve todo.",
        },
        {
          title: "Aceptá el té a la menta",
          body: "Tres vasos, cada uno más dulce que el anterior: es la forma de recibir a alguien.",
        },
        {
          title: "Llevá euros o dólares en efectivo",
          body: "En billetes nuevos, para cambiar en bancos o casas de cambio.",
        },
        {
          title: "Cubrite del sol y de la arena",
          body: "Un pañuelo largo, como el que usan allá, sirve para las dos cosas.",
        },
        {
          title: "Llevá copias del pasaporte",
          body: "En las rutas hay controles, y una copia agiliza.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No lleves alcohol",
          body: "No se vende, y en una república islámica no conviene llevarlo.",
        },
        {
          title: "No fotografíes a la gente sin preguntar",
          body: "Y menos a las mujeres: preguntá siempre antes.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de militares, controles o el aeropuerto.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Mauritania y si tu pasaporte necesita visa: casi todos la tramitan online antes.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica aprobada, impresa",
          "Copias del pasaporte y de la visa",
          "El certificado de la fiebre amarilla, si tu viaje pasa por un país con riesgo",
        ],
      },
      {
        id: "desierto",
        title: "Para el desierto",
        notice: {
          tone: "info",
          title: "Sol, arena y noches frescas",
          body: "Días muy calurosos y noches que refrescan rápido: capas, un pañuelo y agua siempre.",
        },
        summary: "Lo que pide el Adrar",
        items: [
          "Ropa liviana y holgada que cubra",
          "Un pañuelo largo para la arena",
          "Lentes de sol y protector",
          "Un buzo para la noche",
          "Una linterna",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverte cómodo",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo para las mujeres",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria en el sur",
          body: "Hay malaria en el sur, sobre el río Senegal, sobre todo en la temporada de lluvias. Consultá con un médico de viajes, con semanas de anticipación.",
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
        why: "Fuera de los hoteles se cubren brazos y piernas.",
        instead: "Ropa liviana y holgada.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta fuera de los hoteles de la capital.",
        instead: "Uguiyas, euros o dólares en efectivo.",
      },
      {
        leave: "Lentes de contacto sin anteojos de repuesto",
        why: "La arena y el viento irritan los ojos.",
        instead: "Anteojos y gotas lubricantes.",
      },
      {
        leave: "Solo ropa de verano para el desierto",
        why: "Las noches de invierno son frescas.",
        instead: "Un buzo y una campera liviana.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro en Mauritania y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Mauritania?",
        answer:
          "Casi todos los pasaportes la tramitan online antes de viajar, y se paga al llegar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, te la pueden pedir. Vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a febrero, con días templados en el desierto.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer: "No: es una república islámica y no se vende.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El árabe es el oficial, y en la calle se habla hasanía; el francés sirve en hoteles y oficinas.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Mauritania usa el tipo C, de dos patas redondas, a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
