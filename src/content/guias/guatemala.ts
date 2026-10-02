import type { DestinationGuide } from "./types";

/**
 * Guía de Guatemala.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: es la única base que NO es la capital. El
 * aeropuerto está en Ciudad de Guatemala, pero casi todos los viajeros duermen
 * en Antigua, a una hora, y planificar con el clima y los precios de la
 * capital habría sido calcular para el lugar equivocado.
 */
export const guatemala: DestinationGuide = {
  slug: "guatemala",
  country: "Guatemala",
  subregion: "México y Centroamérica",
  subhead:
    "Volcanes, lagos y la cultura maya viva en un país chico. El altiplano es templado de día y frío de madrugada; Tikal y el Caribe son selva y calor.",

  image: null,

  highlights: [
    {
      value: "37",
      label: "volcanes",
      note: "Algunos activos. Desde Antigua se ven tres, y se puede subir a uno que echa humo.",
    },
    {
      value: "1.530 m",
      label: "en Antigua",
      note: "La base del planificador está en el altiplano: días templados y madrugadas frías.",
    },
    {
      value: "May–Oct",
      label: "lluvias de tarde",
      note: "Llueve casi todas las tardes. Las mañanas suelen ser despejadas.",
    },
    {
      value: "+20",
      label: "idiomas mayas",
      note: "Además del español. En el altiplano se escuchan en los mercados todos los días.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Guatemala",
      body: [
        "El quetzal es una moneda estable, con un solo tipo de cambio. En Antigua y en lugares turísticos se aceptan dólares, aunque el cambio del comercio no siempre conviene.",
        "La tarjeta funciona en hoteles y restaurantes de Antigua y la capital. Para mercados, tuk-tuks, buses y pueblos del altiplano hace falta efectivo en quetzales.",
        "Los cajeros están en las ciudades. En pueblos chicos y alrededor del lago de Atitlán puede no haber, así que conviene llevar efectivo de antemano.",
      ],
    },
    {
      id: "antigua",
      title: "Por qué la base es Antigua y no la capital",
      body: [
        "El aeropuerto internacional está en Ciudad de Guatemala, pero casi todos los viajeros van directo a Antigua, a una hora. Es una ciudad colonial chica, caminable y rodeada de volcanes, y es el punto de partida hacia el resto del país.",
        "Por eso el planificador usa el clima y los precios de Antigua como base. Si tu viaje empieza en la capital, elegila en el planificador: los números cambian.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril es la estación seca: cielos despejados y la mejor vista de los volcanes. Diciembre y enero tienen las madrugadas más frías en el altiplano.",
        "De mayo a octubre llueve casi todas las tardes, normalmente después del mediodía. Las mañanas suelen ser buenas, así que se puede viajar igual organizando el día temprano.",
        "Semana Santa en Antigua es una de las celebraciones más grandes del continente, con alfombras de flores en las calles. Es también cuando más se llena y más se reserva.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los shuttles turísticos conectan Antigua con el lago de Atitlán, Chichicastenango y la capital. Son la forma más simple y se reservan en cualquier agencia o en el alojamiento.",
        "Los buses locales, los chicken buses, son baratos y una experiencia, pero lentos y llenos. Para Tikal, lo más práctico es volar a Flores.",
        "En Antigua todo se camina, y para trayectos cortos están los tuk-tuks.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad de América Latina: atención a las pertenencias en mercados y buses, y traslados por shuttle o pedidos por el alojamiento.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada, también para lavarse los dientes si tenés el estómago sensible.",
        "Para subir volcanes, siempre con guía y con abrigo: arriba hace frío aunque abajo haga calor.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Cultura maya viva",
      score: 10,
      rationale:
        "Mercados, trajes, idiomas y ceremonias que no son un espectáculo para turistas. Es el país donde la cultura maya más se ve.",
    },
    {
      dimension: "Paisajes de volcanes y lagos",
      score: 9.5,
      rationale:
        "El lago de Atitlán rodeado de volcanes está entre los paisajes más lindos del continente.",
    },
    {
      dimension: "Historia y arqueología",
      score: 9,
      rationale:
        "Tikal, en medio de la selva, y Antigua, una de las ciudades coloniales mejor conservadas de América.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "Cocina sencilla y sabrosa, con buen café de altura. Sin la fama de México.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Rinde mucho, sobre todo en comida, transporte y alojamiento fuera de Antigua.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Los shuttles turísticos resuelven casi todo, aunque las rutas de montaña son lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Un tipo de cambio y una moneda estable desde hace años.",
    },
  ],

  shines: [
    "El lago de Atitlán al amanecer, con los volcanes reflejados.",
    "Subir a un volcán activo y ver lava desde arriba.",
    "Una cultura maya que no es un museo sino la vida de todos los días.",
  ],

  costs: [
    "Las lluvias de tarde de mayo a octubre, que obligan a organizar el día temprano.",
    "Las rutas de montaña, lentas y con curvas.",
    "Las madrugadas frías del altiplano, que sorprenden a quien espera trópico.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Quetzaltenango no pide lo mismo que Tikal. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "antigua",
      name: "Antigua Guatemala",
      region: "Altiplano central",
      tag: "Ciudad entre volcanes",
      blurb:
        "Una ciudad colonial de calles empedradas y ruinas de iglesias, rodeada de volcanes. Casi todos los viajeros duermen acá: es la base del planificador.",
      coords: [14.5586, -90.7295],
      featured: true,
      image: null,
    },
    {
      id: "ciudad-de-guatemala",
      name: "Ciudad de Guatemala",
      region: "Altiplano central",
      tag: "Capital y aeropuerto",
      blurb:
        "La capital y la puerta de entrada aérea, con buenos museos sobre la cultura maya. La mayoría solo pasa por el aeropuerto.",
      coords: [14.6349, -90.5069],
      image: null,
    },
    {
      id: "atitlan",
      name: "Lago de Atitlán",
      region: "Altiplano occidental",
      tag: "Lago y volcanes",
      blurb:
        "Un lago rodeado de tres volcanes y pueblos mayas, cada uno con su carácter. Se recorre en lancha entre los pueblos.",
      coords: [14.7408, -91.159],
      image: null,
    },
    {
      id: "tikal",
      name: "Tikal y Flores",
      region: "Petén",
      tag: "Selva maya",
      blurb:
        "Una de las grandes ciudades mayas, con templos que sobresalen de la selva. Se duerme en Flores, una isla sobre el lago Petén Itzá.",
      coords: [16.93, -89.8916],
      image: null,
    },
    {
      id: "chichicastenango",
      name: "Chichicastenango",
      region: "Altiplano occidental",
      tag: "Mercado maya",
      blurb:
        "El mercado más grande del altiplano, los jueves y domingos, con ceremonias mayas en las escalinatas de la iglesia.",
      coords: [14.944, -91.111],
      image: null,
    },
    {
      id: "semuc-champey",
      name: "Semuc Champey",
      region: "Verapaz",
      tag: "Pozas turquesa",
      blurb:
        "Pozas de agua turquesa escalonadas sobre un río que pasa por debajo, en medio de la selva. Se llega por caminos lentos.",
      coords: [15.5333, -89.9611],
      image: null,
    },
    {
      id: "quetzaltenango",
      name: "Quetzaltenango",
      region: "Altiplano occidental",
      tag: "Volcanes y frío",
      blurb:
        "Xela, la segunda ciudad del país, a 2.330 metros. Base para subir volcanes y estudiar español, con las madrugadas más frías del país.",
      coords: [14.8347, -91.518],
      image: null,
    },
    {
      id: "rio-dulce",
      name: "Río Dulce y Livingston",
      region: "Caribe",
      tag: "Río y cultura garífuna",
      blurb:
        "Un río entre paredes de selva que baja hasta el Caribe, donde está Livingston, un pueblo garífuna al que solo se llega en lancha.",
      coords: [15.66, -88.99],
      image: null,
    },
    {
      id: "monterrico",
      name: "Monterrico",
      region: "Pacífico",
      tag: "Arena negra y tortugas",
      blurb:
        "Playa de arena volcánica negra sobre el Pacífico, con manglares y liberación de tortugas marinas en temporada.",
      coords: [13.8925, -90.4806],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Guatemala la valija depende de dónde vas a dormir. En el altiplano —Antigua, Atitlán, Xela— los días son templados y las madrugadas frías, sobre todo de noviembre a febrero: capas y una campera. En Tikal, el Caribe y el Pacífico hace calor todo el año. De mayo a octubre llueve casi todas las tardes, así que algo impermeable siempre.",
    keyPoints: [
      "El altiplano es templado de día y frío de madrugada. Mucha gente se sorprende del frío en Antigua.",
      "De mayo a octubre llueve casi todas las tardes. Las mañanas suelen ser despejadas.",
      "Tikal, el Caribe y el Pacífico son calor y humedad todo el año.",
      "Arriba de un volcán hace frío aunque abajo haga calor.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, repelente y protector para Tikal, el Caribe y el Pacífico. En la selva, manga larga liviana al atardecer.",
      templado:
        "Remera y algo de manga larga. Es el clima de los días de Antigua y Atitlán.",
      fresco:
        "Buzo o polar para las noches del altiplano, y una campera impermeable en temporada de lluvias.",
      frio: "Campera de abrigo, gorro y guantes para las madrugadas de Xela y Chichicastenango y para subir volcanes.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá una campera para el altiplano",
          body: "Antigua, Atitlán y Xela tienen madrugadas frías, sobre todo de noviembre a febrero.",
        },
        {
          title: "Algo impermeable de mayo a octubre",
          body: "Llueve casi todas las tardes. Una campera liviana con capucha alcanza.",
        },
        {
          title: "Organizá el día temprano en temporada de lluvias",
          body: "Las mañanas suelen ser despejadas. Lo que se hace al aire libre, antes del mediodía.",
        },
        {
          title: "Llevá efectivo en quetzales",
          body: "Mercados, tuk-tuks, lanchas y pueblos funcionan en efectivo, y alrededor del lago puede no haber cajero.",
        },
        {
          title: "Reservá los shuttles con el alojamiento",
          body: "Son la forma más simple y previsible de moverse entre Antigua, Atitlán y la capital.",
        },
        {
          title: "Calzado para empedrado y volcanes",
          body: "Antigua es todo adoquín y los volcanes son arena suelta. Zapatillas de trekking cómodas resuelven las dos cosas.",
        },
      ],
      donts: [
        {
          title: "No asumas que el trópico es siempre calor",
          body: "En el altiplano, a más de 1.500 metros, las noches son frías. Una valija solo de verano se queda corta.",
        },
        {
          title: "No subas un volcán sin abrigo",
          body: "Arriba hace frío y viento aunque abajo haga calor.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, siempre.",
        },
        {
          title: "No dependas de la tarjeta fuera de Antigua",
          body: "En pueblos y mercados se paga en efectivo.",
        },
        {
          title: "No calcules las distancias por el mapa",
          body: "Las rutas de montaña son lentas. Lo que parece cerca puede llevar medio día.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "altiplano",
        title: "Ropa para el altiplano",
        notice: {
          tone: "info",
          title: "Las madrugadas son frías",
          body: "Antigua está a 1.530 metros y Xela a 2.330. De noviembre a febrero las noches pueden acercarse a cero en las zonas más altas.",
        },
        summary: "Lo que cubre un día de Antigua",
        items: [
          "Remera y algo de manga larga",
          "Buzo o polar",
          "Campera impermeable con capucha",
          "Gorro y guantes livianos para los volcanes",
        ],
      },
      {
        id: "volcanes",
        title: "Volcanes",
        notice: {
          tone: "warn",
          title: "Siempre con guía y con abrigo",
          body: "Arriba hace frío y viento, y el terreno es arena suelta. Los volcanes activos se suben con guía autorizado.",
        },
        summary: "Lo que pide una subida",
        items: [
          "Zapatillas de trekking",
          "Campera de abrigo y cortaviento",
          "Linterna frontal si salís de madrugada",
          "Agua y algo para comer",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Repelente para Tikal, el Caribe y el Pacífico",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Capas extra para las noches del altiplano",
          "Repelente apto para chicos",
          "Entretenimiento para los traslados por ruta de montaña",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "Las noches del altiplano son frías.",
        instead: "Capas y una campera.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Antigua es empedrado y los volcanes son arena.",
        instead: "Zapatillas de trekking cómodas.",
      },
      {
        leave: "El paraguas grande",
        why: "En el empedrado y los mercados estorba.",
        instead: "Una campera con capucha.",
      },
      {
        leave: "Billetes grandes",
        why: "En mercados y tuk-tuks no siempre hay cambio.",
        instead: "Quetzales en billetes chicos.",
      },
      {
        leave: "Jeans pesados para Tikal",
        why: "Con el calor húmedo de la selva no se secan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Una valija enorme",
        why: "Los shuttles y las lanchas del lago tienen poco espacio.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en mercados conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a abril, la estación seca. Semana Santa en Antigua es espectacular, pero hay que reservar con mucha anticipación.",
      },
      {
        question: "¿Hace frío en Antigua?",
        answer:
          "Los días son templados y las madrugadas frías, sobre todo de noviembre a febrero. Capas y una campera alcanzan.",
      },
      {
        question: "¿Por qué el planificador usa Antigua y no la capital?",
        answer:
          "Porque casi todos los viajeros duermen en Antigua. Si tu viaje es en la capital, elegila en el planificador.",
      },
      {
        question: "¿Cómo llego a Tikal?",
        answer:
          "Lo más práctico es volar a Flores. Por tierra desde Antigua es un día entero de viaje.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No. Agua embotellada o filtrada.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "En Antigua y la capital, en hoteles y restaurantes. Para mercados, transporte y pueblos, efectivo.",
      },
      {
        question: "¿Es difícil subir un volcán?",
        answer:
          "Depende del volcán. Algunos son una caminata de pocas horas y otros piden pasar la noche arriba. Siempre con guía y con abrigo.",
      },
    ],
  },
};
