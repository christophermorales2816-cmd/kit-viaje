import type { DestinationGuide } from "./types";

/**
 * Guía de Portugal.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el clima es amable y el que manda es el terreno.
 * Lisboa y Oporto se caminan en subida, sobre veredas de piedra pulida que
 * resbalan, así que lo primero de la valija es el calzado. Y el Atlántico, que
 * es frío también en agosto y refresca las noches de toda la costa.
 */
export const portugal: DestinationGuide = {
  slug: "portugal",
  country: "Portugal",
  subregion: "Europa del Sur",
  subhead:
    "Un país chico y sin apuro sobre el Atlántico, con ciudades en cuesta, buena comida accesible e islas volcánicas en pleno océano. El clima es suave; el calzado es lo que importa.",

  image: null,

  highlights: [
    {
      value: "7",
      label: "colinas en Lisboa",
      note: "La ciudad se camina en subida, sobre veredas de piedra que con lluvia resbalan. El calzado importa más que la ropa.",
    },
    {
      value: "−1 h",
      label: "respecto de España",
      note: "Portugal tiene la hora de Londres, no la de Madrid. Si cruzás la frontera, ajustá el reloj y los horarios.",
    },
    {
      value: "1.400 km",
      label: "hasta las Azores",
      note: "En pleno Atlántico, con un clima propio que cambia varias veces en el día. Es un viaje aparte, no una escapada.",
    },
    {
      value: "Atlántico",
      label: "agua fría también en verano",
      note: "Frente a Lisboa y en el norte el mar es frío aun en agosto. En el Algarve está algo más templado.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Portugal es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Portugal y España en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Portugal",
      body: [
        "La moneda es el euro y la tarjeta se acepta casi en todos lados, aunque algún café, mercado o comercio de pueblo todavía prefiere efectivo.",
        "En muchos restaurantes llegan a la mesa panes, aceitunas o quesos que nadie pidió: es el couvert, y se cobra si lo tocás. Si no lo querés, pedí que lo retiren. La propina es opcional.",
        "Lisboa, Oporto y otras ciudades cobran una tasa turística por noche que se paga en el alojamiento. Y cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Atlántico, no Mediterráneo",
      body: [
        "Portugal es hemisferio norte: enero es invierno y julio, verano. Y su clima lo marca el Atlántico, que lo hace más suave y más fresco que el de España a la misma altura.",
        "La costa tiene inviernos templados y lluviosos y veranos secos con brisa; las noches refrescan aun en agosto. El interior —el Alentejo, el valle del Duero— es otra cosa: veranos muy calurosos y noches de invierno que bajan a pocos grados.",
        "Las islas tienen su propio clima. Madeira es templada los doce meses; las Azores, húmedas y cambiantes, pueden pasar del sol a la lluvia varias veces en el mismo día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y en septiembre y octubre el clima es ideal para recorrer ciudades y la costa, con menos gente que en verano.",
        "Julio y agosto son secos y soleados, buenos para la playa, pero Lisboa y el Algarve se llenan. En el valle del Duero, septiembre es el mes de la vendimia.",
        "El invierno es suave y lluvioso, con poca gente y precios más bajos. Madeira es buena todo el año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Portugal",
      body: [
        "Es un país chico. Los trenes unen Lisboa, Coimbra y Oporto en pocas horas, y los buses llegan a casi todo el resto. Para el Alentejo, el Algarve o el Duero, el auto da más libertad.",
        "En Lisboa, el tranvía y el metro te ahorran las subidas más empinadas; con la tarjeta recargable del transporte sale más barato que pagando a bordo. A Madeira y a las Azores se llega en avión.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en los tranvías más turísticos de Lisboa y en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades y patrimonio",
      score: 9,
      rationale:
        "Lisboa y Oporto, Sintra, Coimbra y Évora: ciudades con carácter, azulejos y miradores.",
    },
    {
      dimension: "Gastronomía y vino",
      score: 9,
      rationale:
        "Pescados y mariscos de primera, una pastelería famosa y los vinos del Duero. Comer bien es accesible.",
    },
    {
      dimension: "Costa y naturaleza",
      score: 9,
      rationale:
        "Los acantilados del Algarve, las olas de la costa atlántica y las islas: Madeira y las Azores están entre lo mejor de Europa en naturaleza.",
    },
    {
      dimension: "Tranquilidad",
      score: 9,
      rationale:
        "Un país amable y sin apuro, con ciudades que se recorren sin estrés y distancias cortas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "De lo más accesible de Europa occidental, con buena calidad. Lisboa y el Algarve en verano son la excepción.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Trenes entre Lisboa, Coimbra y Oporto, buses para el resto y vuelos cortos a las islas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios estables y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Un país chico que se recorre sin apuro, con mucho para ver a pocas horas de viaje.",
    "De lo más accesible de Europa occidental, sin resignar calidad.",
    "Las islas: Madeira y las Azores son naturaleza de primer nivel.",
  ],

  costs: [
    "Lisboa y Oporto se caminan en subida, sobre piedra que resbala.",
    "El mar es frío en casi toda la costa, aun en verano.",
    "Lisboa y el Algarve en julio y agosto, llenos y más caros.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: el valle del Duero en julio no pide lo mismo que las Azores. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "lisboa",
      name: "Lisboa",
      region: "Lisboa y alrededores",
      tag: "Colinas y tranvías",
      blurb:
        "Siete colinas con miradores, tranvías amarillos, barrios como Alfama y el Bairro Alto y el río Tajo enfrente. Es la base del planificador: invierno suave y lluvioso, verano seco y soleado.",
      coords: [38.7223, -9.1393],
      featured: true,
      image: null,
    },
    {
      id: "oporto",
      name: "Oporto",
      region: "Norte",
      tag: "Río y bodegas",
      blurb:
        "Una ciudad de puentes y casas sobre el río Duero, con las bodegas de vino de Oporto en la otra orilla. Más lluviosa y fresca que Lisboa.",
      coords: [41.1579, -8.6291],
      image: null,
    },
    {
      id: "sintra",
      name: "Sintra",
      region: "Lisboa y alrededores",
      tag: "Palacios en el bosque",
      blurb:
        "Palacios de cuento entre bosques y niebla, a menos de una hora de Lisboa. Es más fresca y húmeda que la capital: llevá una capa más.",
      coords: [38.8029, -9.3817],
      image: null,
    },
    {
      id: "algarve",
      name: "Lagos y el Algarve",
      region: "Sur",
      tag: "Acantilados y playas",
      blurb:
        "Acantilados dorados, grutas y playas de arena en el sur. Es la costa más soleada del país, con el agua menos fría, y la más llena en verano.",
      coords: [37.1028, -8.673],
      image: null,
    },
    {
      id: "madeira",
      name: "Madeira",
      region: "Islas",
      tag: "Primavera todo el año",
      blurb:
        "Una isla volcánica en el Atlántico, con jardines, acantilados y senderos junto a las levadas, los viejos canales de riego. Templada los doce meses.",
      coords: [32.6669, -16.9241],
      image: null,
    },
    {
      id: "azores",
      name: "Azores",
      region: "Islas",
      tag: "Volcanes en el Atlántico",
      blurb:
        "Nueve islas volcánicas con lagunas en cráteres, aguas termales y ballenas. El clima cambia varias veces en el día: impermeable siempre a mano.",
      coords: [37.7412, -25.6756],
      image: null,
    },
    {
      id: "evora",
      name: "Évora",
      region: "Sur",
      tag: "Templo romano",
      blurb:
        "Una ciudad amurallada con un templo romano en el centro, rodeada de llanuras de alcornoques y viñedos del Alentejo. Muy calurosa en verano.",
      coords: [38.5714, -7.9135],
      image: null,
    },
    {
      id: "coimbra",
      name: "Coimbra",
      region: "Centro",
      tag: "Ciudad universitaria",
      blurb:
        "Una de las universidades más antiguas de Europa, con una biblioteca barroca y calles en cuesta. Entre Lisboa y Oporto, una buena parada en el camino.",
      coords: [40.2033, -8.4103],
      image: null,
    },
    {
      id: "valle-del-duero",
      name: "Valle del Duero",
      region: "Norte",
      tag: "Viñedos en terrazas",
      blurb:
        "Laderas de viñedos en terrazas sobre el río, donde se hace el vino de Oporto. Veranos muy calurosos y la vendimia en septiembre.",
      coords: [41.1905, -7.546],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Portugal tiene un clima atlántico suave: inviernos templados y lluviosos y veranos secos y soleados, más calurosos en el interior que en la costa. Lo que define la valija es el terreno: Lisboa y Oporto se caminan en subida, sobre veredas de piedra que resbalan, así que el calzado con buena suela va primero. Sumá una campera liviana para la brisa del Atlántico, también en verano, y algo impermeable si vas a las Azores.",
    keyPoints: [
      "Hemisferio norte: el verano va de junio a septiembre, y el invierno, de diciembre a febrero, es suave y lluvioso.",
      "La costa es más fresca que el interior: en julio, Évora y el valle del Duero pasan los treinta grados mientras Lisboa tiene brisa.",
      "El Atlántico es frío también en verano. En el Algarve está algo más templado.",
      "Las islas tienen su propio clima: Madeira es templada todo el año y las Azores cambian varias veces en el día.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. En el interior el calor es seco y fuerte; en la costa, la brisa del Atlántico refresca al atardecer, así que sumá algo de manga larga.",
      templado:
        "Capas livianas y una campera fina para el viento. Es el clima de Lisboa buena parte del año.",
      fresco:
        "Sweater, campera impermeable y calzado que no se moje. El invierno lisboeta es suave pero lluvioso, y las casas viejas no siempre tienen calefacción.",
      frio: "Abrigo medio, gorro y guantes. En la costa pasa poco, pero en el interior y en el norte las noches de invierno bajan a pocos grados.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá calzado con buena suela",
          body: "La calçada portuguesa, el empedrado blanco y negro de las veredas, es linda y resbala, sobre todo con lluvia y en bajada.",
        },
        {
          title: "Usá el tranvía para las subidas",
          body: "En Lisboa, el tranvía te ahorra las cuestas más empinadas. Con la tarjeta recargable del transporte sale más barato que pagando a bordo.",
        },
        {
          title: "Reservá Sintra con tiempo",
          body: "Los palacios de Sintra venden entradas con horario y en verano se llenan. Ir temprano y entre semana cambia la visita.",
        },
        {
          title: "Probá el plato del día",
          body: "Al mediodía, muchos restaurantes ofrecen un prato do dia a precio cerrado. Es la forma más accesible de comer bien.",
        },
        {
          title: "Llevá una capa para la noche",
          body: "Aun en verano, la brisa del Atlántico refresca al atardecer en Lisboa y en toda la costa.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No toques lo que llega a la mesa sin pedirlo",
          body: "Panes, aceitunas y quesos que traen al sentarte se cobran si los tocás. Si no los querés, pedí que los retiren.",
        },
        {
          title: "No te metas al mar sin mirar las banderas",
          body: "El Atlántico portugués es frío y en muchas playas tiene corrientes fuertes. Respetá las indicaciones de los guardavidas.",
        },
        {
          title: "No subestimes las cuestas",
          body: "Lisboa y Oporto son ciudades de subidas empinadas. Un recorrido que en el mapa son diez cuadras puede llevar el doble de tiempo.",
        },
        {
          title: "No descuides la mochila en el tranvía",
          body: "Los tranvías más turísticos de Lisboa van llenos y atraen carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No vayas a las Azores sin impermeable",
          body: "El clima cambia varias veces en el día, y la niebla y la lluvia pueden tapar los miradores en minutos.",
        },
        {
          title: "No des por hecho que te entienden en español",
          body: "Muchos portugueses lo entienden, pero el portugués no es español con acento. Empezar con un obrigado, o en inglés, es más amable.",
        },
      ],
    },
    checklists: [
      {
        id: "calzado",
        title: "Calzado y capas",
        notice: {
          tone: "info",
          title: "La vereda resbala",
          body: "La calçada portuguesa es de piedra pulida: con lluvia o en bajada, un zapato de suela lisa es una caída asegurada.",
        },
        summary: "Lo que pide caminar Lisboa y Oporto",
        items: [
          "Zapatillas con buena suela de goma",
          "Campera liviana para el viento del Atlántico",
          "Sweater o buzo para la noche",
          "Campera impermeable de octubre a abril",
          "Traje de baño y ojotas para la playa",
        ],
      },
      {
        id: "islas",
        title: "Madeira y Azores",
        notice: {
          tone: "warn",
          title: "El clima de las islas cambia en minutos",
          body: "En las Azores y en las montañas de Madeira se puede pasar del sol a la niebla y la lluvia en el mismo paseo, y los senderos se vuelven barrosos. Sin impermeable, se termina mojado.",
        },
        summary: "Si vas a las islas",
        items: [
          "Campera impermeable con capucha",
          "Calzado de trekking",
          "Polar o buzo abrigado",
          "Traje de baño para las piletas naturales y las aguas termales",
          "Linterna frontal para los senderos de levadas con túneles",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes y los vuelos",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago",
          "Curitas y algo para ampollas: las cuestas se sienten",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de suela lisa",
        why: "La calçada portuguesa resbala, sobre todo con lluvia y en bajada.",
        instead: "Zapatillas con suela de goma.",
      },
      {
        leave: "Una valija grande de ruedas chicas",
        why: "Empedrado y cuestas en Lisboa y Oporto: arrastrarla es una pelea.",
        instead: "Una mochila o una valija chica de ruedas grandes.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "La brisa del Atlántico refresca al atardecer en toda la costa.",
        instead: "Un buzo liviano o una campera fina.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para cafés, mercados y pueblos chicos.",
      },
      {
        leave: "El paraguas para las Azores",
        why: "Con el viento de las islas dura poco.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra para la playa.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Portugal?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y en septiembre y octubre: buen clima y menos gente. El verano es seco y soleado, ideal para la playa, pero Lisboa y el Algarve se llenan. El invierno es suave y lluvioso.",
      },
      {
        question: "¿Se puede nadar en el mar?",
        answer:
          "Sí, pero el Atlántico es frío también en verano, sobre todo frente a Lisboa y en el norte. El Algarve tiene el agua más templada del país.",
      },
      {
        question: "¿Qué hora es en Portugal?",
        answer:
          "Una hora menos que en España: la misma que en Londres. Las Azores tienen, además, una hora menos que el continente.",
      },
      {
        question: "¿Me entienden si hablo en español?",
        answer:
          "Muchos portugueses lo entienden, sobre todo en las ciudades. Empezar con un obrigado ayuda, y el inglés también es una buena opción.",
      },
      {
        question: "¿Qué son los panes y aceitunas que traen sin pedir?",
        answer:
          "Es el couvert, y se cobra si lo tocás. Si no lo querés, podés pedir que lo retiren.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país, incluidas las islas.",
      },
    ],
  },
};
