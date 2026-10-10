import type { DestinationGuide } from "./types";

/**
 * Guía de Sri Lanka.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos monzones en una isla chica. El del sudoeste moja
 * la costa oeste y sur de mayo a septiembre; el del noreste, la costa este de
 * octubre a enero. Siempre hay una costa seca, y es el dato que va en la
 * portada. La rupia se devaluó fuerte en la crisis de 2022: los precios en
 * rupias pueden envejecer, y se dice sin números.
 */
export const sriLanka: DestinationGuide = {
  slug: "sri-lanka",
  country: "Sri Lanka",
  subregion: "Asia del Sur",
  subhead:
    "Una fortaleza sobre una roca, templos con dientes de Buda, el tren entre plantaciones de té, elefantes en libertad, ballenas frente a la costa y playas en dos mares. Una isla chica con muchísimo adentro.",

  image: null,

  highlights: [
    {
      value: "2 monzones",
      label: "y siempre una costa seca",
      note: "De diciembre a abril, la costa oeste y sur (Galle, Mirissa); de mayo a septiembre, la costa este (Trincomalee, Arugam Bay).",
    },
    {
      value: "Tren a Ella",
      label: "entre plantaciones de té y montañas",
      note: "De Kandy a Ella, uno de los recorridos en tren más lindos del mundo. Los asientos reservados se agotan: sacá con anticipación.",
    },
    {
      value: "Sigiriya",
      label: "la fortaleza sobre una roca",
      note: "Un palacio del siglo V en la cima de una roca enorme, con frescos y garras de león en la escalera. Patrimonio de la humanidad.",
    },
    {
      value: "Ballenas",
      label: "azules frente a Mirissa",
      note: "De noviembre a abril salen barcos a verlas. Y en Minneriya, en agosto y septiembre, se juntan cientos de elefantes.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Sri Lanka",
      body: [
        "Casi todos los pasaportes necesitan una autorización electrónica (ETA) o visa, que se tramita online antes del viaje en el sitio oficial. Algunos años se liberó para ciertos países: verificá el tuyo antes de comprar el pasaje.",
        "Usá solo el sitio oficial: hay páginas intermediarias que cobran de más por el mismo trámite.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Sri Lanka",
      body: [
        "La moneda es la rupia de Sri Lanka, que perdió mucho valor en la crisis de 2022: los precios de esta guía son órdenes de magnitud. La tarjeta funciona en hoteles y restaurantes más grandes; en tuk-tuks, puestos y pueblos, efectivo.",
        "Hay cajeros en todas las ciudades. Las casas de cambio de Colombo y Kandy dan buen cambio por dólares.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Dos monzones",
      body: [
        "Sri Lanka está cerca del ecuador: hace calor todo el año en la costa. Lo que cambia es la lluvia, con dos monzones que llegan a costas distintas.",
        "El del sudoeste, de mayo a septiembre, moja Colombo, Galle y Mirissa; el del noreste, de octubre a enero, Trincomalee y Arugam Bay. En octubre y noviembre llueve un poco en toda la isla.",
        "Las montañas del centro son más frescas: Kandy es templada, Ella fresca y Nuwara Eliya, a casi dos mil metros, tiene noches frías en enero y febrero.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril para la costa oeste y sur, el triángulo cultural y las montañas. De mayo a septiembre, para la costa este.",
        "Cada luna llena (poya) es feriado: no se vende alcohol y los templos se llenan. En agosto, la procesión del Esala Perahera llena Kandy de elefantes y tambores.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Sri Lanka",
      body: [
        "El tren une Colombo, Kandy, Ella y la costa sur, lento y con paisajes enormes; los asientos reservados se agotan. Los colectivos llegan a todos lados, rápidos y llenos.",
        "Muchos viajeros contratan un chofer con auto por varios días: sale razonable y las distancias, aunque cortas, son lentas. En las ciudades, tuk-tuks con taxímetro o por aplicación (PickMe, Uber).",
        "Las precauciones son las de cualquier destino turístico: acordar el precio del tuk-tuk antes de subir y desconfiar de quien te ofrece un desvío hacia una tienda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "El triángulo cultural: Sigiriya, Anuradhapura, Polonnaruwa, Dambulla y el templo del Diente en Kandy.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale: "Arroz con curry, hoppers, kottu y el té de las montañas.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Plantaciones de té, selva, montañas y costas en dos mares.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Mirissa, Unawatuna, Arugam Bay y Trincomalee, cada una en su temporada.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y moverse sale poco; los sitios del triángulo cultural cobran entradas altas.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Distancias cortas pero lentas; el tren y los choferes lo resuelven.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "La rupia se devaluó fuerte en 2022: los precios en rupias pueden envejecer rápido.",
    },
  ],

  shines: [
    "Mucha variedad en una isla chica.",
    "Elefantes, leopardos y ballenas en libertad.",
    "Siempre hay una costa en temporada.",
  ],

  costs: [
    "Viajes lentos aunque las distancias sean cortas.",
    "Entradas caras en los sitios principales.",
    "Calor húmedo en la costa todo el año.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Galle en junio que Trincomalee, y Nuwara Eliya es fresca todo el año. Los precios están en rupias de Sri Lanka y son órdenes de magnitud.",

  places: [
    {
      id: "colombo",
      name: "Colombo",
      region: "Occidental",
      tag: "La capital comercial",
      blurb:
        "El paseo Galle Face al atardecer, el templo Gangaramaya, el mercado de Pettah y barrios coloniales. Es la base del planificador: calor todo el año, con el monzón de mayo a septiembre.",
      coords: [6.9271, 79.8612],
      featured: true,
      image: null,
    },
    {
      id: "kandy",
      name: "Kandy",
      region: "Central",
      tag: "El templo del Diente",
      blurb:
        "La última capital de los reyes cingaleses, con el templo que guarda un diente de Buda, un lago en el centro y el jardín botánico de Peradeniya.",
      coords: [7.2906, 80.6337],
      image: null,
    },
    {
      id: "galle",
      name: "Galle",
      region: "Meridional",
      tag: "El fuerte holandés",
      blurb:
        "Una ciudad amurallada sobre el mar, con casas coloniales, iglesias y un faro. Patrimonio de la humanidad. Seca de diciembre a abril.",
      coords: [6.0535, 80.221],
      image: null,
    },
    {
      id: "sigiriya",
      name: "Sigiriya y Dambulla",
      region: "Central",
      tag: "La roca del león",
      blurb:
        "La fortaleza sobre la roca y, cerca, los templos en cuevas de Dambulla, llenos de budas pintados. Zona seca, calurosa casi todo el año.",
      coords: [7.957, 80.7603],
      image: null,
    },
    {
      id: "ella",
      name: "Ella",
      region: "Uva",
      tag: "Té y miradores",
      blurb:
        "Un pueblo entre plantaciones de té, con el puente de los Nueve Arcos, el Little Adam's Peak y el final del tren desde Kandy. Fresco de noche.",
      coords: [6.8667, 81.0466],
      image: null,
    },
    {
      id: "nuwara-eliya",
      name: "Nuwara Eliya",
      region: "Central",
      tag: "La pequeña Inglaterra",
      blurb:
        "A casi dos mil metros, entre plantaciones de té, con casas de estilo inglés y el parque nacional de Horton Plains. Fresca todo el año y fría de noche en invierno.",
      coords: [6.9497, 80.7891],
      image: null,
    },
    {
      id: "mirissa",
      name: "Mirissa",
      region: "Meridional",
      tag: "Ballenas y palmeras",
      blurb:
        "Una playa de palmeras, la salida de los barcos para ver ballenas azules de noviembre a abril y surf en la costa sur.",
      coords: [5.9483, 80.4716],
      image: null,
    },
    {
      id: "trincomalee",
      name: "Trincomalee",
      region: "Oriental",
      tag: "La costa este",
      blurb:
        "Playas de arena blanca en Nilaveli, snorkel en Pigeon Island y templos sobre el acantilado. Seca de mayo a septiembre.",
      coords: [8.5874, 81.2152],
      image: null,
    },
    {
      id: "arugam-bay",
      name: "Arugam Bay",
      region: "Oriental",
      tag: "Olas del este",
      blurb:
        "Un pueblo de surf con olas de nivel mundial de mayo a septiembre, cerca de los parques de Kumana y Yala.",
      coords: [6.84, 81.836],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Sri Lanka es calor en la costa todo el año: ropa liviana que se seque rápido, protector, repelente y sandalias, y un impermeable para el monzón de la costa a la que vayas. Para las montañas del centro, un buzo y una campera liviana; Nuwara Eliya es fría de noche. Para los templos, ropa que cubra hombros y rodillas, mejor clara.",
    keyPoints: [
      "Dos monzones: la costa oeste y sur, seca de diciembre a abril; la este, de mayo a septiembre.",
      "Hace falta la autorización electrónica (ETA) antes de viajar.",
      "Los templos piden hombros y rodillas cubiertos, sin zapatos ni sombrero.",
      "Los asientos reservados del tren se agotan.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector alto, sombrero, repelente y un impermeable liviano para el monzón.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el clima de Kandy y de Ella.",
      fresco:
        "Un buzo abrigado y una campera liviana para las noches y madrugadas de Ella y Nuwara Eliya.",
      frio: "Una campera abrigada para las madrugadas de Nuwara Eliya y Horton Plains en enero y febrero, que pueden bajar de diez grados.",
    },
    plug: {
      types: "Tipo D, tipo G y tipo M",
      voltage: "230 V, 50 Hz",
      note: "Conviven el británico, de tres patas rectangulares, y los de tres patas redondas gruesas. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá el tren de Kandy a Ella",
          body: "Los asientos reservados de las clases con vista se agotan con semanas de anticipación.",
        },
        {
          title: "Elegí la costa según el mes",
          body: "De diciembre a abril, oeste y sur; de mayo a septiembre, este.",
        },
        {
          title: "Subí a Sigiriya temprano",
          body: "Antes del calor y de los grupos, con agua y calzado cómodo: son cientos de escalones.",
        },
        {
          title: "Contratá un chofer para varios días",
          body: "Es habitual, sale razonable y ahorra horas en rutas lentas.",
        },
        {
          title: "Andá a un safari",
          body: "Yala para los leopardos, Udawalawe y Minneriya para los elefantes.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te saques fotos de espaldas a un Buda",
          body: "Se considera una falta de respeto, igual que tocar o subirse a las estatuas.",
        },
        {
          title: "No muestres tatuajes de Buda",
          body: "Pueden negarte la entrada al país o a los templos: cubrilos.",
        },
        {
          title: "No entres a un templo descubierto",
          body: "Hombros y rodillas cubiertos, sin zapatos ni sombrero. La ropa clara es la más habitual.",
        },
        {
          title: "No esperes alcohol en un día de poya",
          body: "Cada luna llena es feriado y no se vende.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada es barata y está en todos lados.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Playa y monzón",
        notice: {
          tone: "info",
          title: "Siempre hay una costa seca",
          body: "El monzón cambia de costa según el mes. Mirá el clima de la ciudad en el planificador.",
        },
        summary: "Lo que pide la costa",
        items: [
          "Protector solar alto y resistente al agua",
          "Sombrero y anteojos de sol",
          "Repelente de mosquitos",
          "Sandalias y ojotas",
          "Un impermeable liviano",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Tramitá la ETA antes de viajar",
          body: "Casi todos los pasaportes la necesitan, en el sitio oficial. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La ETA o la visa aprobada",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Ropa clara que cubra hombros y rodillas",
          "Calzado fácil de sacar",
          "Medias para el piso caliente de los patios",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación y algo para el estómago",
          "Repelente de mosquitos",
          "Algo para el mareo, si vas a ver ballenas",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo pesada",
        why: "En la costa hace calor todo el año; las montañas piden un buzo y una campera liviana.",
        instead: "Capas livianas.",
      },
      {
        leave: "Musculosas y shorts para los templos",
        why: "Piden hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo, mejor claros.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Tuk-tuks, puestos y pueblos cobran en efectivo.",
        instead: "Rupias en efectivo y una tarjeta.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "Con el calor y la lluvia, no se secan.",
        instead: "Sandalias de trekking y unas ojotas.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Las distancias son cortas pero los viajes, lentos.",
        instead: "Menos lugares y más tiempo en cada uno.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Sri Lanka?",
        answer:
          "Casi todos los pasaportes necesitan la autorización electrónica (ETA) o visa, que se tramita online en el sitio oficial. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Depende de la costa: de diciembre a abril para el oeste y el sur, de mayo a septiembre para el este.",
      },
      {
        question: "¿Cómo me muevo por la isla?",
        answer:
          "En tren, colectivo o con un chofer por varios días. En las ciudades, tuk-tuk con taxímetro o por aplicación.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Conviven el británico y los de tres patas redondas a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Qué ropa llevo para los templos?",
        answer:
          "Ropa que cubra hombros y rodillas, mejor clara, y calzado fácil de sacar. Sin sombrero.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es habitual: algo en restaurantes sin cargo por servicio, y a choferes y guías.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Cuándo se ven las ballenas?",
        answer:
          "De noviembre a abril, en barcos que salen de Mirissa a la mañana temprano.",
      },
    ],
  },
};
