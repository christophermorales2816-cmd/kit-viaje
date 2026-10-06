import type { DestinationGuide } from "./types";

/**
 * Guía de Cuba.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el caso extremo de multiplicidad cambiaria, y el de
 * un país donde la valija tiene que traer lo que allá falta. Como Venezuela,
 * los precios del planificador van en DÓLARES: es como se cobra en casas
 * particulares y paladares, y en pesos cubanos quedarían viejos en semanas.
 */
export const cuba: DestinationGuide = {
  slug: "cuba",
  country: "Cuba",
  subregion: "Caribe",
  subhead:
    "La Habana, Trinidad y Viñales, Caribe todo el año y una economía con varias cotizaciones a la vez. Acá la valija tiene que traer lo que allá falta.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "cotizaciones del peso",
      note: "La oficial y la informal pueden estar muy lejos. A un viajero se le cobra casi todo en divisas.",
    },
    {
      value: "Jun–Nov",
      label: "temporada de huracanes",
      note: "Con el pico entre agosto y octubre. De diciembre a abril es la mejor época.",
    },
    {
      value: "Efectivo",
      label: "en divisas",
      note: "Las tarjetas emitidas por bancos de Estados Unidos no funcionan, y otras fallan seguido.",
    },
    {
      value: "Lo justo",
      label: "de internet",
      note: "Hay datos móviles y wifi, pero lentos e intermitentes. Descargá todo antes de ir.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Varias cotizaciones, y efectivo en divisas",
      body: [
        "El peso cubano tiene una cotización oficial y otra informal que pueden estar muy lejos entre sí. Es la tesis de Argentina llevada al extremo: el mismo gasto cambia mucho de tamaño según cómo pagues.",
        "En la práctica, en casas particulares, paladares y taxis a un viajero se le cobra en dólares o en euros, y por eso los precios del planificador están en dólares. Pagar con tarjeta, cuando funciona, suele liquidarse a una cotización oficial menos conveniente.",
        "Las tarjetas emitidas por bancos de Estados Unidos no funcionan en Cuba, y las demás fallan seguido. Llevá efectivo suficiente para todo el viaje, en billetes chicos y en buen estado.",
      ],
    },
    {
      id: "llevar",
      title: "La valija trae lo que falta",
      body: [
        "Hay escasez de muchas cosas: medicamentos, protector solar, artículos de higiene, pilas. Llevá todo lo que vayas a necesitar, y un poco más.",
        "Hay cortes de luz frecuentes en buena parte del país. Linterna, batería portátil y cargadores que no dependan de un solo enchufe ayudan mucho.",
        "Internet existe pero es lento e intermitente. Descargá mapas, traductor, reservas y documentos antes de salir.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación seca: calor amable, menos humedad y el mejor clima del año. Es también la temporada alta.",
        "De mayo a octubre hace más calor, más humedad y llueve en chaparrones de tarde. Coincide con la temporada de huracanes, de junio a noviembre, con el pico entre agosto y octubre.",
        "En invierno, cuando entra un frente frío del norte, las noches de La Habana pueden ser frescas. Un buzo liviano alcanza.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Entre ciudades, los buses Víazul son la opción para viajeros: cómodos y con horarios, pero se llenan, así que conviene reservar. Los taxis colectivos compartidos son más rápidos y no mucho más caros.",
        "En las ciudades, taxis y almendrones, los autos clásicos que hacen recorridos fijos. Acordá el precio antes de subir.",
        "El alojamiento más común y recomendable son las casas particulares, que además suelen ayudar a organizar traslados y excursiones.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Para entrar suele pedirse una tarjeta de turista o visa según el pasaporte, un seguro de viaje con cobertura médica y un formulario en línea previo al vuelo. Revisalo con tiempo.",
        "Las precauciones son las de cualquier ciudad: atención a las pertenencias en zonas concurridas y precios acordados antes de cualquier servicio.",
        "El agua de la canilla no es para tomar. Agua embotellada o hervida.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Historia y arquitectura",
      score: 9.5,
      rationale:
        "La Habana Vieja y Trinidad son patrimonio de la UNESCO, y caminarlas es viajar en el tiempo.",
    },
    {
      dimension: "Música y cultura",
      score: 10,
      rationale:
        "Son, salsa y rumba en vivo todas las noches, en cualquier ciudad. Es parte de la vida, no un show.",
    },
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "Varadero y los cayos del norte tienen playas de primer nivel del Caribe.",
    },
    {
      dimension: "Gastronomía",
      score: 5.5,
      rationale:
        "Los paladares mejoraron mucho, pero la escasez limita la variedad.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Depende enteramente de cómo pagues. Con efectivo en divisas rinde; con tarjeta, bastante menos.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Internet limitado, cortes de luz, tarjetas que no funcionan y transporte que se llena. Pide planificar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 2.5,
      rationale:
        "Varias cotizaciones, escasez y un sistema que cambia seguido. Es el extremo opuesto de los dolarizados.",
    },
  ],

  shines: [
    "Música en vivo en cualquier esquina, cualquier noche.",
    "Ciudades coloniales donde el tiempo parece haberse detenido.",
    "Dormir en casas particulares, con la familia que te recibe.",
  ],

  costs: [
    "Tener que traer todo: efectivo, medicamentos, protector, pilas.",
    "Internet limitado y cortes de luz.",
    "Un sistema cambiario que hay que entender antes de llegar.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Viñales no pide lo mismo que Santiago de Cuba. Los precios están en dólares, que es como se cobra a un viajero, y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "la-habana",
      name: "La Habana",
      region: "Occidente",
      tag: "Malecón y Habana Vieja",
      blurb:
        "Una capital de fachadas coloniales, autos clásicos y música en la calle, con el Malecón frente al mar. Es la base del planificador.",
      coords: [23.1136, -82.3666],
      featured: true,
      image: null,
    },
    {
      id: "vinales",
      name: "Viñales",
      region: "Occidente",
      tag: "Mogotes y tabaco",
      blurb:
        "Un valle de campos de tabaco y montañas de piedra caliza redondeadas, los mogotes. Se recorre a caballo o caminando.",
      coords: [22.6167, -83.7167],
      image: null,
    },
    {
      id: "trinidad",
      name: "Trinidad",
      region: "Centro",
      tag: "Ciudad colonial detenida",
      blurb:
        "Una ciudad colonial de calles empedradas y casas de colores, patrimonio de la UNESCO, con playa y montaña cerca.",
      coords: [21.8019, -79.9847],
      image: null,
    },
    {
      id: "cienfuegos",
      name: "Cienfuegos",
      region: "Centro",
      tag: "La perla del sur",
      blurb:
        "Una ciudad de trazado francés sobre una bahía del Caribe, más tranquila y ordenada que La Habana.",
      coords: [22.1461, -80.4356],
      image: null,
    },
    {
      id: "varadero",
      name: "Varadero",
      region: "Occidente",
      tag: "Península de playa",
      blurb:
        "Una península de veinte kilómetros de playa de arena blanca, con hoteles grandes y todo incluido. Es el destino más turístico del país.",
      coords: [23.1544, -81.2448],
      image: null,
    },
    {
      id: "santa-clara",
      name: "Santa Clara",
      region: "Centro",
      tag: "Ciudad universitaria",
      blurb:
        "Una ciudad del centro de la isla con vida universitaria y el memorial al Che Guevara. Punto de paso hacia los cayos.",
      coords: [22.4069, -79.9644],
      image: null,
    },
    {
      id: "cayo-santa-maria",
      name: "Cayo Santa María",
      region: "Centro",
      tag: "Cayos al norte",
      blurb:
        "Cayos unidos a la isla por un pedraplén sobre el mar, con playas de arena blanca y agua turquesa. Casi todo es hotel de todo incluido.",
      coords: [22.6667, -79.0],
      image: null,
    },
    {
      id: "santiago-de-cuba",
      name: "Santiago de Cuba",
      region: "Oriente",
      tag: "Son y Caribe",
      blurb:
        "La segunda ciudad del país y la cuna del son, la más caribeña y la más calurosa. Montañas de la Sierra Maestra cerca.",
      coords: [20.0247, -75.8219],
      image: null,
    },
    {
      id: "baracoa",
      name: "Baracoa",
      region: "Oriente",
      tag: "Primera villa y cacao",
      blurb:
        "La primera villa fundada en la isla, aislada entre montañas, ríos y cacao. Llueve más que en el resto del país.",
      coords: [20.3467, -74.4958],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Cuba es Caribe todo el año: ropa liviana, traje de baño, protector y repelente, con un buzo para alguna noche fresca de invierno. Pero lo que define la valija es lo que allá falta: efectivo en divisas para todo el viaje, medicamentos, protector solar, artículos de higiene, linterna y batería portátil. De diciembre a abril es la mejor época, fuera de la temporada de huracanes.",
    keyPoints: [
      "Llevá efectivo en divisas para todo el viaje: muchas tarjetas no funcionan.",
      "Traé lo que necesites de farmacia y de higiene: hay escasez.",
      "Puede haber cortes de luz: linterna y batería portátil.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y clara, traje de baño, protector y repelente. De mayo a octubre la humedad hace que se sienta más calor.",
      templado:
        "Remera y algo de manga larga. Es el clima de las noches de invierno.",
      fresco:
        "Un buzo liviano para las noches en que entra un frente frío del norte, en enero o febrero.",
      frio: "No aparece en Cuba.",
    },
    plug: {
      types: "Tipo A, B, C y L",
      voltage: "110 V y 220 V, 60 Hz",
      note: "Conviven los dos voltajes y varios tipos de enchufe, a veces en el mismo cuarto. Adaptador universal, y cargadores que digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá todo el efectivo que vas a necesitar",
          body: "En dólares o euros, en billetes chicos y en buen estado. Las tarjetas de bancos estadounidenses no funcionan y las demás fallan seguido.",
        },
        {
          title: "Traé tu farmacia completa",
          body: "Medicamentos, protector solar, repelente, analgésicos. Hay escasez y no siempre se consiguen.",
        },
        {
          title: "Linterna y batería portátil",
          body: "Los cortes de luz son frecuentes. Ocupan poco y resuelven mucho.",
        },
        {
          title: "Descargá todo antes de salir",
          body: "Mapas, traductor, reservas y documentos. Internet es lento e intermitente.",
        },
        {
          title: "Quedate en casas particulares",
          body: "Son la mejor opción de alojamiento, y las familias ayudan con traslados, excursiones y dónde comer.",
        },
        {
          title: "Reservá el Víazul con anticipación",
          body: "Los buses entre ciudades se llenan, sobre todo en temporada alta.",
        },
      ],
      donts: [
        {
          title: "No cuentes con tu tarjeta",
          body: "Si es de un banco de Estados Unidos, no funciona. Si no, puede fallar. El efectivo es la norma.",
        },
        {
          title: "No asumas que vas a conseguir lo que te falte",
          body: "Desde una aspirina hasta un cargador. Lo que no traés, puede no estar.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Las ofertas a la pasada no siempre son lo que parecen.",
        },
        {
          title: "No subas a un taxi sin acordar el precio",
          body: "Es lo normal y evita discusiones al llegar.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o hervida.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, efectivo, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "warn",
          title: "La tarjeta puede no servir",
          body: "Las tarjetas emitidas por bancos de Estados Unidos no funcionan en Cuba, y otras fallan seguido. Llevá efectivo en divisas para todo el viaje.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares o euros para todo el viaje, y un margen",
          "Billetes chicos y en buen estado",
          "Una riñonera o bolsillo interno",
          "Una tarjeta de respaldo de un banco no estadounidense",
        ],
      },
      {
        id: "lo-que-falta",
        title: "Lo que allá falta",
        notice: {
          tone: "warn",
          title: "Hay escasez",
          body: "Medicamentos, artículos de higiene, protector solar y pilas pueden no conseguirse. Traé lo que vayas a usar.",
        },
        summary: "Lo que conviene traer de casa",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico, antiácido y algo para el malestar estomacal",
          "Protector solar y repelente",
          "Artículos de higiene personal",
          "Pilas y cargadores de repuesto",
        ],
      },
      {
        id: "cortes",
        title: "Luz e internet",
        notice: {
          tone: "info",
          title: "Cortes y conexión lenta",
          body: "Puede haber cortes de luz, e internet es lento e intermitente. Con un par de cosas no te afectan.",
        },
        summary: "Lo que resuelve un corte",
        items: [
          "Linterna o frontal",
          "Batería portátil grande",
          "Mapas y traductor descargados para uso offline",
          "Reservas y documentos guardados en el teléfono",
        ],
      },
      {
        id: "documentos",
        title: "Documentos de ingreso",
        notice: null,
        summary: "Lo que suelen pedir al entrar",
        items: [
          "Pasaporte vigente",
          "Tarjeta de turista o visa, según tu pasaporte",
          "Seguro de viaje con cobertura médica",
          "Formulario de ingreso en línea, completado antes del vuelo",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal",
          "Cargadores que digan 100-240 V",
          "Zapatilla chica: los enchufes por cuarto son pocos",
        ],
      },
    ],
    avoid: [
      {
        leave: "La confianza en la tarjeta",
        why: "Puede no funcionar, y las de bancos estadounidenses no funcionan nunca.",
        instead: "Efectivo en divisas para todo el viaje.",
      },
      {
        leave: "Billetes grandes o dañados",
        why: "Muchos lugares no tienen cambio y un billete roto puede ser rechazado.",
        instead: "Billetes chicos y en buen estado.",
      },
      {
        leave: "El botiquín para comprar allá",
        why: "Hay escasez de medicamentos.",
        instead: "Todo lo que uses, traído de casa.",
      },
      {
        leave: "Abrigo",
        why: "En Cuba no hace frío.",
        instead: "Un buzo liviano para alguna noche de invierno.",
      },
      {
        leave: "Jeans pesados",
        why: "Con la humedad no se secan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "La dependencia del wifi",
        why: "Internet es lento e intermitente.",
        instead: "Todo descargado en el teléfono.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿En qué moneda pago?",
        answer:
          "En la práctica, en dólares o euros en efectivo en casas particulares, paladares y taxis. El peso cubano se usa para gastos chicos.",
      },
      {
        question: "¿Funciona mi tarjeta?",
        answer:
          "Si es de un banco de Estados Unidos, no. Las demás pueden funcionar en algunos lugares, pero fallan seguido. Llevá efectivo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente sí. Conviven varios tipos y dos voltajes, 110 y 220 V. Adaptador universal y cargadores que digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la estación seca, fuera de la temporada de huracanes.",
      },
      {
        question: "¿Qué documentos necesito?",
        answer:
          "Suele pedirse tarjeta de turista o visa según el pasaporte, seguro de viaje con cobertura médica y un formulario en línea previo. Revisalo con tiempo.",
      },
      {
        question: "¿Hay internet?",
        answer:
          "Sí, con datos móviles y wifi, pero lento e intermitente. Descargá todo antes de ir.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No. Agua embotellada o hervida.",
      },
      {
        question: "¿Qué tengo que traer sí o sí?",
        answer:
          "Efectivo para todo el viaje, tu medicación, protector solar, repelente, linterna y batería portátil.",
      },
    ],
  },
};
