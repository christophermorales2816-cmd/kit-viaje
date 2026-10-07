import type { DestinationGuide } from "./types";

/**
 * Guía de Chequia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero de Europa del Este, con moneda propia
 * dentro de Schengen y un problema práctico que en el oeste no existe: las
 * casas de cambio del centro que anuncian cero comisión y cambian mal. Y un
 * invierno continental de verdad, bajo cero de noche.
 */
export const chequia: DestinationGuide = {
  slug: "chequia",
  country: "Chequia",
  subregion: "Europa del Este",
  subhead:
    "Praga, castillos, pueblos medievales y la mejor cerveza del mundo para muchos. Inviernos fríos de verdad, veranos templados con tormentas de tarde, y coronas, no euros.",

  image: null,

  highlights: [
    {
      value: "N.º 1",
      label: "en cerveza por habitante",
      note: "Los checos toman más cerveza que nadie en el mundo, y la rubia tipo pilsner nació acá, en Pilsen.",
    },
    {
      value: "CZK",
      label: "coronas, no euros",
      note: "Chequia no usa el euro. Algunos lugares turísticos lo aceptan, pero a un cambio peor: pagá en coronas o con tarjeta.",
    },
    {
      value: "−5 °C",
      label: "de mínima en Český Krumlov en enero",
      note: "Los inviernos son fríos de verdad, sobre todo en el sur y en las zonas altas. Praga es algo más suave.",
    },
    {
      value: "Mediodía",
      label: "el menú que más rinde",
      note: "De lunes a viernes, muchos restaurantes ofrecen sopa y plato principal a precio cerrado al mediodía.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Chequia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Chequia, Austria y Alemania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Coronas, no euros",
      body: [
        "La moneda es la corona checa. La tarjeta se acepta en casi todos lados, también sin contacto; algunos lugares turísticos aceptan euros, pero a un cambio peor y con el vuelto en coronas.",
        "Muchas casas de cambio del centro de Praga anuncian cero comisión y aplican un cambio muy malo. Para el efectivo, usá un cajero de banco, y revisá cuánto vas a recibir antes de entregar nada.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí coronas: la conversión del comercio suele ser peor que la de tu banco. La propina se da redondeando al pagar.",
      ],
    },
    {
      id: "clima",
      title: "Continental",
      body: [
        "Chequia es hemisferio norte: enero es invierno y julio, verano. El clima es continental: inviernos fríos y grises, bajo cero de noche de diciembre a febrero, y veranos templados a cálidos.",
        "En verano, las tardes calurosas terminan seguido en tormenta. El sur de Bohemia y las zonas altas son más frías que Praga; Moravia del Sur, la región del vino, es lo más cálido del país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre los días son largos y templados. Praga se llena en verano: primavera y principios de otoño tienen buen clima y menos gente.",
        "Desde fines de noviembre hasta Navidad, los mercados navideños llenan las plazas de Praga y de las ciudades grandes, con frío de verdad. Enero y febrero son grises y tranquilos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Chequia",
      body: [
        "Trenes y buses unen Praga con las ciudades principales en pocas horas; para Český Krumlov, el bus suele ser lo más práctico. Praga tiene un transporte excelente, con metro, tranvías y buses.",
        "En Praga el boleto de papel se valida en la máquina al subir al tranvía o al entrar al metro, y hay controles: viajar con uno sin validar se multa.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el puente de Carlos, en la plaza de la Ciudad Vieja y en el transporte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades y arquitectura",
      score: 9.5,
      rationale:
        "Praga es de las ciudades históricas mejor conservadas de Europa, y Český Krumlov y Kutná Hora parecen de otra época.",
    },
    {
      dimension: "Cerveza y gastronomía",
      score: 8.5,
      rationale:
        "La mejor cerveza del mundo para muchos y una cocina contundente de carnes, salsas y knedlíky.",
    },
    {
      dimension: "Castillos y pueblos",
      score: 9,
      rationale:
        "Cientos de castillos y pueblos medievales a pocas horas de Praga.",
    },
    {
      dimension: "Naturaleza",
      score: 7,
      rationale:
        "La Suiza checa y los bosques de Bohemia, lindos pero sin la escala de los Alpes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Más accesible que Europa occidental, con buena calidad. El centro de Praga es la excepción.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Buenos trenes y buses entre ciudades, y un transporte excelente en Praga.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Una moneda estable y tarjeta en casi todos lados. Hay que cuidarse de las casas de cambio del centro.",
    },
  ],

  shines: [
    "Praga, una de las ciudades más lindas de Europa.",
    "Castillos y pueblos medievales a pocas horas.",
    "Más accesible que Europa occidental.",
  ],

  costs: [
    "El centro de Praga, lleno de gente en verano.",
    "Inviernos fríos y grises.",
    "Casas de cambio que cambian mal en las zonas turísticas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Český Krumlov en enero no pide lo mismo que Mikulov en julio. Los precios están en coronas checas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "praga",
      name: "Praga",
      region: "Bohemia",
      tag: "Ciudad de las cien torres",
      blurb:
        "El puente de Carlos, el castillo sobre el río y una ciudad vieja casi intacta. Es la base del planificador: inviernos bajo cero de noche, veranos templados a cálidos.",
      coords: [50.0755, 14.4378],
      featured: true,
      image: null,
    },
    {
      id: "cesky-krumlov",
      name: "Český Krumlov",
      region: "Bohemia",
      tag: "Pueblo de cuento",
      blurb:
        "Un pueblo medieval en un meandro del río Moldava, con un castillo enorme. De los rincones más fríos del país en invierno.",
      coords: [48.8127, 14.3175],
      image: null,
    },
    {
      id: "kutna-hora",
      name: "Kutná Hora",
      region: "Bohemia",
      tag: "Catedral y osario",
      blurb:
        "Una ciudad de la plata con una catedral gótica y el osario de Sedlec, decorado con huesos. A una hora de Praga.",
      coords: [49.9484, 15.2682],
      image: null,
    },
    {
      id: "karlovy-vary",
      name: "Karlovy Vary",
      region: "Bohemia",
      tag: "Ciudad termal",
      blurb:
        "Columnatas, fuentes de aguas termales que se toman en tacitas especiales y hoteles de la Belle Époque.",
      coords: [50.2318, 12.872],
      image: null,
    },
    {
      id: "brno",
      name: "Brno",
      region: "Moravia",
      tag: "Segunda ciudad",
      blurb:
        "La capital de Moravia, joven y universitaria, con una villa modernista patrimonio de la humanidad y menos turistas que Praga.",
      coords: [49.1951, 16.6068],
      image: null,
    },
    {
      id: "olomouc",
      name: "Olomouc",
      region: "Moravia",
      tag: "Barroco sin multitudes",
      blurb:
        "Plazas barrocas, una columna de la Santísima Trinidad patrimonio de la humanidad y vida estudiantil, casi sin turistas.",
      coords: [49.5938, 17.2509],
      image: null,
    },
    {
      id: "pilsen",
      name: "Pilsen",
      region: "Bohemia",
      tag: "Cuna de la pilsner",
      blurb:
        "La ciudad donde nació la cerveza rubia que hoy se toma en todo el mundo, con su cervecería histórica abierta a visitas.",
      coords: [49.7384, 13.3736],
      image: null,
    },
    {
      id: "suiza-checa",
      name: "Suiza checa",
      region: "Bohemia",
      tag: "Arcos de piedra",
      blurb:
        "Un parque nacional de rocas de arenisca, gargantas y el arco natural de piedra más grande de Europa, junto a la frontera alemana.",
      coords: [50.873, 14.2448],
      image: null,
    },
    {
      id: "mikulov",
      name: "Mikulov y los viñedos de Moravia",
      region: "Moravia",
      tag: "Vino y castillo",
      blurb:
        "Un pueblo con castillo entre viñedos, en la región más cálida del país. Es la tierra del vino checo.",
      coords: [48.8056, 16.6378],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Chequia tiene un clima continental: inviernos fríos, bajo cero de noche de diciembre a febrero, y veranos templados a cálidos con tormentas de tarde. En invierno, abrigo, gorro, guantes y calzado que no resbale; en verano, ropa liviana, una campera fina y algo impermeable. En cualquier estación, calzado cómodo: Praga se recorre a pie, sobre adoquines y en subida al castillo.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero y es frío; el verano, de junio a agosto, templado a cálido.",
      "En verano las tardes calurosas terminan seguido en tormenta: una campera impermeable liviana alcanza.",
      "El sur de Bohemia y las zonas altas son más frías que Praga; Moravia del Sur es lo más cálido.",
      "Praga se camina sobre adoquines y con subidas: el calzado importa más que la ropa.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y una campera fina. Las tardes de verano pueden terminar en tormenta, y muchas casas viejas no tienen aire acondicionado.",
      templado:
        "Capas y una campera liviana. Es el clima de la primavera y el otoño: ideal para caminar.",
      fresco:
        "Sweater o polar y una campera que corte el viento. Las noches refrescan rápido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. De noche baja de cero y los adoquines se congelan.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "El tipo E es el europeo de dos patas redondas, con una tercera pata que sale del toma; los enchufes tipo C entran sin problema. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pagá con tarjeta o en coronas",
          body: "Es lo más conveniente. Si necesitás efectivo, usá un cajero de banco y no una casa de cambio del centro.",
        },
        {
          title: "Aprovechá el menú del mediodía",
          body: "De lunes a viernes, muchos restaurantes ofrecen sopa y plato principal a precio cerrado. Es la comida que más rinde.",
        },
        {
          title: "Subí al castillo temprano",
          body: "El castillo de Praga y el puente de Carlos se llenan desde media mañana. Al amanecer son otra cosa.",
        },
        {
          title: "Validá el boleto de papel",
          body: "En Praga el boleto en papel se marca en la máquina al subir al tranvía o al entrar al metro. Viajar con uno sin validar se multa.",
        },
        {
          title: "Salí de Praga",
          body: "Kutná Hora, Český Krumlov u Olomouc tienen la misma belleza con mucha menos gente.",
        },
        {
          title: "Elegí pagar en coronas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cambies plata en el centro",
          body: "Muchas casas de cambio de las zonas turísticas anuncian cero comisión y aplican un cambio muy malo. Revisá cuánto vas a recibir antes de entregar nada.",
        },
        {
          title: "No pagues en euros",
          body: "Algunos lugares los aceptan, pero a un cambio peor y con el vuelto en coronas.",
        },
        {
          title: "No subestimes el frío del invierno",
          body: "De diciembre a febrero baja de cero de noche, y en el sur de Bohemia todavía más.",
        },
        {
          title: "No camines los adoquines con suela lisa",
          body: "Resbalan con lluvia o con hielo, y la subida al castillo es empinada.",
        },
        {
          title: "No descuides la mochila en el centro",
          body: "En el puente de Carlos, la plaza de la Ciudad Vieja y el transporte hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno es frío de verdad",
          body: "De diciembre a febrero la temperatura baja de cero de noche, y en el sur de Bohemia queda bajo cero muchos días. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide noviembre a febrero",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "pagos",
        title: "Plata y pagos",
        notice: {
          tone: "info",
          title: "Coronas, no euros",
          body: "La tarjeta se acepta en casi todos lados. Para el efectivo, cajeros de banco: las casas de cambio del centro suelen cambiar mal.",
        },
        summary: "Para pagar sin perder en el cambio",
        items: [
          "Tarjeta que no cobre comisión en el exterior, si tenés",
          "Algo de efectivo en coronas para puestos y propinas",
          "La app del transporte de Praga, para comprar boletos",
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
          body: "Los tomas son tipo E, donde entran los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes y los buses",
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
          "Curitas y algo para ampollas: se camina mucho sobre adoquines",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Euros para pagar",
        why: "Se aceptan poco y a un cambio peor.",
        instead: "Tarjeta o coronas.",
      },
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Zapatos de taco o de suela lisa",
        why: "Adoquines y subidas en todo el centro de Praga.",
        instead: "Zapatillas cómodas con buena suela.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de coronas para puestos y propinas.",
      },
      {
        leave: "Una valija enorme",
        why: "Adoquines, escaleras y edificios viejos sin ascensor.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En las zonas más turísticas de Praga llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Chequia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo E, donde entran los europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Chequia usa el euro?",
        answer:
          "No: la moneda es la corona checa. Algunos lugares turísticos aceptan euros, pero a un cambio peor. Lo más conveniente es la tarjeta.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos y templados, aunque en pleno verano Praga se llena. Diciembre tiene los mercados navideños, con frío de verdad.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Redondear o dejar algo si te atendieron bien es lo habitual. Se le dice al mozo el total al momento de pagar.",
      },
      {
        question: "¿Cómo llego a Český Krumlov?",
        answer:
          "En bus o en tren desde Praga, en unas tres horas. Conviene dormir ahí una noche: de día se llena de excursiones.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí. En los restaurantes, igual, lo habitual es pedir agua embotellada.",
      },
      {
        question: "¿Es cara Praga?",
        answer:
          "Menos que París o Londres, pero el centro histórico es bastante más caro que el resto del país. Comer donde comen los locales cambia mucho la cuenta.",
      },
    ],
  },
};
