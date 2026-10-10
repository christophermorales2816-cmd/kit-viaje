import type { DestinationGuide } from "./types";

/**
 * Guía de Bután.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la tasa diaria de desarrollo sostenible, que se
 * paga por noche y no entra en el planificador —se dice su existencia, no su
 * monto, que cambia por decreto—, y el guía con licencia fuera de Timbu y
 * Paro. Los precios del planificador son lo que se gasta por fuera de eso. El
 * ngultrum está atado a la rupia india, uno a uno.
 */
export const butan: DestinationGuide = {
  slug: "butan",
  country: "Bután",
  subregion: "Asia del Sur",
  subhead:
    "Fortalezas monasterio en valles del Himalaya, un templo colgado de un acantilado, banderas de oración en cada paso de montaña y un país que mide su progreso por la felicidad. Pocos visitantes, a propósito.",

  image: null,

  highlights: [
    {
      value: "Tasa diaria",
      label: "de desarrollo sostenible, por cada noche",
      note: "Cada visitante la paga en dólares al tramitar la visa, además del alojamiento y el guía. Es la forma del país de limitar el turismo.",
    },
    {
      value: "Taktsang",
      label: "el Nido del Tigre, colgado de un acantilado",
      note: "Un monasterio a cientos de metros sobre el valle de Paro, al que se sube caminando en unas horas.",
    },
    {
      value: "Ema datshi",
      label: "ajíes con queso, el plato nacional",
      note: "Los ajíes no son el condimento: son la verdura. Se come con arroz rojo.",
    },
    {
      value: "Felicidad",
      label: "la medida oficial del progreso",
      note: "Bután mide su desarrollo con un índice de Felicidad Nacional Bruta, que pesa la cultura y el ambiente junto con la economía.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Bután",
      body: [
        "Todos los pasaportes latinoamericanos necesitan visa, que se tramita online antes de viajar junto con el pago de la tasa diaria de desarrollo sostenible.",
        "Para visitar templos y fortalezas, y para viajar fuera de Timbu y Paro, se va con un guía con licencia. La mayoría contrata el viaje con una agencia local.",
        "Se entra en avión por Paro o por tierra desde la India, por Phuentsholing.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Bután",
      body: [
        "La moneda es el ngultrum, atado a la rupia india. La rupia también circula, aunque algunos billetes grandes no se aceptan.",
        "La tarjeta funciona en hoteles y algunos negocios de Timbu y Paro. En el resto del país, efectivo; hay cajeros en las ciudades.",
        "La tasa diaria, el guía y el alojamiento suelen pagarse antes, con la agencia. Los precios del planificador son lo que se gasta por fuera de eso.",
      ],
    },
    {
      id: "clima",
      title: "Himalaya con monzón",
      body: [
        "Bután es hemisferio norte. Timbu y Paro, a más de dos mil metros, tienen inviernos secos y soleados, con heladas de noche, y veranos templados y lluviosos.",
        "Punakha y Wangdue, en valles más bajos, son templados en invierno. Phobjikha, Bumthang y Haa, más arriba, son fríos.",
        "El monzón va de junio a septiembre: llueve casi todos los días, las montañas se tapan y las rutas pueden cortarse. Phuentsholing, en la frontera con la India, es subtropical y muy lluvioso.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Marzo, abril y mayo, con los rododendros en flor, y octubre y noviembre, con el cielo más claro del año. Son las temporadas de los grandes festivales religiosos.",
        "En invierno los días son claros y fríos, y las grullas de cuello negro llegan a Phobjikha. En el monzón hay pocos visitantes.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Bután",
      body: [
        "Casi todos los viajeros se mueven en auto con chofer y guía, contratado con la agencia. Las rutas de montaña son angostas y lentas.",
        "Los vuelos a Paro dependen del tiempo, y el aterrizaje entre montañas solo se hace de día. Dejá margen antes de un vuelo de conexión.",
        "Entre Timbu y Paro hay alrededor de una hora; hacia Bumthang, en el centro, un día entero de ruta.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Fortalezas monasterio, templos antiguos y una cultura budista viva.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Ema datshi, arroz rojo, momos y té con manteca.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Valles del Himalaya, bosques y picos nevados en casi todo el país.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "Bután no tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "La tasa diaria y el guía hacen caro cada día de viaje.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "La agencia resuelve casi todo, pero las rutas son lentas y los vuelos dependen del tiempo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El ngultrum está atado a la rupia india; la tasa diaria se fija en dólares.",
    },
  ],

  shines: [
    "Paisajes del Himalaya casi sin turistas.",
    "Una cultura budista viva.",
    "Todo organizado por la agencia.",
  ],

  costs: [
    "La tasa diaria encarece cada noche.",
    "Guía con licencia para casi todo.",
    "Rutas de montaña lentas.",
  ],

  dataScopeNote:
    "Elegís el valle en el planificador y los cálculos se hacen con su clima: no es lo mismo Punakha que Phobjikha o Bumthang. Los precios están en ngultrums y son órdenes de magnitud; no incluyen la tasa diaria ni el paquete con guía.",

  places: [
    {
      id: "timbu",
      name: "Timbu",
      region: "Timbu",
      tag: "La capital sin semáforos",
      blurb:
        "La fortaleza de Tashichho, un Buda gigante sobre el valle, mercados de artesanías y un policía que dirige el tránsito con las manos. Es la base del planificador: inviernos secos y fríos de noche, veranos lluviosos.",
      coords: [27.4728, 89.639],
      featured: true,
      image: null,
    },
    {
      id: "paro",
      name: "Paro",
      region: "Paro",
      tag: "El Nido del Tigre",
      blurb:
        "El valle del aeropuerto, con la fortaleza de Rinpung, el museo nacional y la subida al monasterio de Taktsang, colgado de un acantilado.",
      coords: [27.4305, 89.4133],
      image: null,
    },
    {
      id: "punakha",
      name: "Punakha",
      region: "Punakha",
      tag: "La fortaleza entre dos ríos",
      blurb:
        "La fortaleza de Punakha, en la unión de dos ríos, con jacarandás en flor en primavera, y un puente colgante largo. Templado en invierno.",
      coords: [27.5916, 89.8774],
      image: null,
    },
    {
      id: "phobjikha",
      name: "Valle de Phobjikha (Gangtey)",
      region: "Wangdue Phodrang",
      tag: "Las grullas de cuello negro",
      blurb:
        "Un valle glaciar abierto, con el monasterio de Gangtey, donde pasan el invierno las grullas de cuello negro. Frío de noviembre a febrero.",
      coords: [27.4614, 90.1778],
      image: null,
    },
    {
      id: "bumthang",
      name: "Bumthang (Jakar)",
      region: "Bumthang",
      tag: "El corazón espiritual",
      blurb:
        "Cuatro valles con algunos de los templos más antiguos del país, granjas y queso, en el centro de Bután. Inviernos fríos.",
      coords: [27.5492, 90.7525],
      image: null,
    },
    {
      id: "trongsa",
      name: "Trongsa",
      region: "Trongsa",
      tag: "La fortaleza del centro",
      blurb:
        "Una de las fortalezas más grandes del país, sobre una ladera que domina el valle, y una torre de vigía convertida en museo.",
      coords: [27.5022, 90.5064],
      image: null,
    },
    {
      id: "haa",
      name: "Valle de Haa",
      region: "Haa",
      tag: "El valle escondido",
      blurb:
        "Un valle alto y poco visitado al oeste, con templos antiguos, granjas tradicionales y caminatas. Frío en invierno.",
      coords: [27.3667, 89.2833],
      image: null,
    },
    {
      id: "wangdue",
      name: "Wangdue Phodrang",
      region: "Wangdue Phodrang",
      tag: "El valle templado",
      blurb:
        "Un valle bajo entre Punakha y el centro del país, con una fortaleza reconstruida sobre el río.",
      coords: [27.4861, 89.9],
      image: null,
    },
    {
      id: "phuentsholing",
      name: "Phuentsholing",
      region: "Chukha",
      tag: "La frontera con la India",
      blurb:
        "La ciudad del paso de frontera terrestre con la India, en el llano, subtropical y muy lluviosa en el monzón.",
      coords: [26.8516, 89.3884],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bután depende de la altura y la estación. Capas siempre: los días pueden ser templados y las noches, frías. Para las fortalezas y templos, ropa formal que cubra brazos y piernas. Calzado cómodo para la subida a Taktsang. En el monzón, campera impermeable. Y la visa y la tasa diaria tramitadas antes de viajar.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de marzo a mayo y octubre y noviembre.",
      "Visa online y tasa diaria por noche, antes de viajar.",
      "Guía con licencia para templos y para salir de Timbu y Paro.",
      "En las fortalezas, mangas y piernas cubiertas, sin gorra.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y una campera impermeable para Punakha y Phuentsholing en verano, con monzón.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño de los valles.",
      fresco:
        "Capas, un polar y una campera para Timbu, Paro y los valles altos.",
      frio: "Campera de abrigo, gorro y guantes para Phobjikha, Bumthang y Haa en invierno, y para las noches de Timbu y Paro.",
    },
    plug: {
      types: "Tipo D, tipo F y tipo G",
      voltage: "230 V, 50 Hz",
      note: "Conviven el enchufe indio de tres patas redondas, el europeo y el británico. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Contratá con una agencia local",
          body: "Resuelve la visa, la tasa, el guía, el auto y los hoteles en un solo paso.",
        },
        {
          title: "Vestite formal para las fortalezas",
          body: "Mangas largas, pantalón o pollera larga, sin gorra. Muchos guías prestan una faja ceremonial.",
        },
        {
          title: "Subí a Taktsang temprano",
          body: "La caminata lleva unas horas de ida, con menos gente y menos sol a la mañana.",
        },
        {
          title: "Caminá las estupas en sentido horario",
          body: "Templos, estupas y ruedas de oración se rodean como lo hacen los fieles.",
        },
        {
          title: "Planeá con los festivales",
          body: "Los tsechus, con danzas de máscaras, son lo mejor del año. Las fechas siguen el calendario lunar.",
        },
        {
          title: "Llevá efectivo fuera de Timbu y Paro",
          body: "En los valles del centro la tarjeta casi no funciona.",
        },
      ],
      donts: [
        {
          title: "No entres a una fortaleza con ropa informal",
          body: "Nada de pantalón corto, musculosa ni gorra.",
        },
        {
          title: "No señales las imágenes sagradas con el dedo",
          body: "Se señala con la mano abierta, y no se le da la espalda a un altar.",
        },
        {
          title: "No fotografíes dentro de los templos",
          body: "Está prohibido en la mayoría. Preguntale al guía.",
        },
        {
          title: "No pongas vuelos con poco margen",
          body: "Los vuelos a Paro dependen del tiempo.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada o hervida.",
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
        title: "Documentos y tasa",
        notice: {
          tone: "warn",
          title: "Visa y tasa diaria",
          body: "Todos los pasaportes latinoamericanos tramitan la visa online antes de viajar, junto con la tasa diaria por noche.",
        },
        summary: "Lo que te van a pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Aprobación de la visa impresa",
          "Comprobante de la tasa diaria",
          "Seguro de viaje",
        ],
      },
      {
        id: "templos",
        title: "Fortalezas y templos",
        notice: {
          tone: "info",
          title: "Ropa formal",
          body: "En las fortalezas y templos se entra con mangas largas, piernas cubiertas y sin gorra.",
        },
        summary: "Para entrar sin problemas",
        items: [
          "Una camisa de manga larga",
          "Pantalón o pollera larga",
          "Calzado fácil de sacar",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña",
        notice: null,
        summary: "Lo que pide la altura",
        items: [
          "Calzado de caminata ya usado",
          "Polar y campera",
          "Campera impermeable",
          "Protector solar y anteojos de sol",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el mareo en las rutas de montaña",
          "Algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa informal para todo el viaje",
        why: "En las fortalezas y templos se pide ropa formal.",
        instead: "Mangas largas y pantalón o pollera larga.",
      },
      {
        leave: "Un solo abrigo pesado",
        why: "Los días son templados y las noches, frías.",
        instead: "Capas: polar y campera.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Timbu y Paro casi todo se paga en efectivo.",
        instead: "Ngultrums o rupias en billetes chicos.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas de montaña son lentas y los vuelos dependen del tiempo.",
        instead: "Días de margen.",
      },
      {
        leave: "Bolsas de plástico",
        why: "En Bután están prohibidas.",
        instead: "Una bolsa de tela.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Bután?",
        answer:
          "Sí: se tramita online antes de viajar, junto con la tasa diaria de desarrollo sostenible.",
      },
      {
        question: "¿Qué es la tasa diaria?",
        answer:
          "Un pago en dólares por cada noche en el país, además del alojamiento y el guía. Su monto lo fija el gobierno y cambia: verificalo al planificar.",
      },
      {
        question: "¿Puedo viajar sin guía?",
        answer:
          "Por Timbu y Paro, en parte. Para templos, fortalezas y el resto del país, hace falta un guía con licencia.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De marzo a mayo y octubre y noviembre. En invierno, días claros y fríos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Bután usa los tipos D, F y G a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es habitual dejar algo al guía y al chofer al final del viaje.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada o hervida.",
      },
      {
        question: "¿Cuánto se tarda en subir a Taktsang?",
        answer:
          "Unas horas de ida por un sendero empinado, con un café a mitad de camino. Se baja más rápido.",
      },
    ],
  },
};
