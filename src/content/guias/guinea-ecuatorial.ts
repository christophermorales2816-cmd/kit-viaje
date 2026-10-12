import type { DestinationGuide } from "./types";

/**
 * Guía de Guinea Ecuatorial.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el español. Es el único país de África con el
 * español como idioma oficial, y es el dato de su portada. Es también de los
 * más caros del continente. Tiene dos partes que se viajan por separado: la
 * isla de Bioko, con la capital, y el continente, con Bata; entre las dos se
 * vuela. Para el sur de Bioko hace falta un permiso, y la guía lo dice.
 */
export const guineaEcuatorial: DestinationGuide = {
  slug: "guinea-ecuatorial",
  country: "Guinea Ecuatorial",
  subregion: "África Central",
  subhead:
    "Malabo y la isla volcánica de Bioko, playas donde desovan las tortugas, las tierras altas de Moka, la selva de Monte Alén y la isla de Corisco. Se habla español.",

  image: null,

  highlights: [
    {
      value: "Español",
      label: "como idioma oficial, el único de África",
      note: "Junto al francés y el portugués. Lo habla casi todo el mundo, con palabras y tonadas propias.",
    },
    {
      value: "Ureca",
      label: "tortugas en una de las playas más lluviosas del mundo",
      note: "En el sur de Bioko desovan cuatro especies de tortugas marinas, de noviembre a febrero. Se llega con permiso y caminando por la playa.",
    },
    {
      value: "Moka",
      label: "tierras altas frescas en una isla tropical",
      note: "A más de mil metros, con lagos de cráter, cascadas y noches frescas, a un par de horas de Malabo.",
    },
    {
      value: "Visa",
      label: "electrónica antes de viajar, con reserva y pasaje",
      note: "Casi todos los pasaportes la tramitan online; piden reserva de alojamiento, pasaje de salida y, a veces, prueba de fondos. Verificá el tuyo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Guinea Ecuatorial",
      body: [
        "Casi todos los pasaportes tramitan la visa electrónica online antes de viajar, con reserva de alojamiento, pasaje de salida y, a veces, prueba de fondos. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Guinea Ecuatorial puede pedir el certificado de la fiebre amarilla al llegar: vacunate al menos diez días antes y llevalo.",
        "Para ir al sur de Bioko, como Ureca, hace falta un permiso; los operadores locales lo tramitan.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Guinea Ecuatorial",
      body: [
        "La moneda es el franco CFA de África Central, el mismo de Camerún y Gabón, atado al euro.",
        "Casi todo se paga en efectivo: la tarjeta funciona en pocos hoteles grandes de Malabo y Bata, y los cajeros no siempre aceptan tarjetas extranjeras. Llevá euros en billetes nuevos.",
        "Es de los países más caros de África: hoteles y restaurantes cuestan como en Europa.",
      ],
    },
    {
      id: "clima",
      title: "Una isla y un continente",
      body: [
        "Guinea Ecuatorial está cerca del ecuador: calor húmedo todo el año.",
        "En Bioko, Malabo tiene su temporada seca de diciembre a febrero; el sur de la isla, en Ureca, es de los lugares más lluviosos del mundo, y Moka, a más de mil metros, es fresco.",
        "En el continente, en Bata y Monte Alén, la temporada seca va de junio a agosto, como en Gabón.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a febrero para Bioko: seco en Malabo y temporada de tortugas en Ureca.",
        "De junio a agosto para el continente.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Guinea Ecuatorial",
      body: [
        "Entre Malabo y Bata hay vuelos cortos; en barco, el viaje es largo.",
        "En Bioko y en el continente las rutas son buenas, pero hay controles: llevá el pasaporte siempre.",
        "En las ciudades hay taxis compartidos. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "La Malabo colonial, con su catedral, y la cultura bubi de Bioko.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale: "Pescado a la brasa, plátano, mandioca y cocina española.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Volcanes, selva, playas y una isla verde.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Playas en Bioko, en Corisco y en la costa continental.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 2,
      rationale: "De los países más caros de África.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Visa previa, permisos y controles.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Se habla español.",
    "Las tortugas y la selva de Bioko.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Muy caro.",
    "Visa, permisos y controles.",
    "Lluvia buena parte del año.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Malabo que Moka o Bata. Los precios están en francos CFA y son órdenes de magnitud: Guinea Ecuatorial es de los países más caros de África.",

  places: [
    {
      id: "malabo",
      name: "Malabo",
      region: "Bioko",
      tag: "La capital en la isla",
      blurb:
        "Una capital colonial sobre la bahía, con la catedral de Santa Isabel, la plaza de la Independencia y el paseo marítimo. Es la base del planificador: calor húmedo todo el año, con una temporada seca de diciembre a febrero.",
      coords: [3.7504, 8.7371],
      featured: true,
      image: null,
    },
    {
      id: "sipopo",
      name: "Sipopo (playas)",
      region: "Bioko",
      tag: "Playas y hoteles",
      blurb:
        "Un complejo frente al mar, al este de Malabo, con playas, un campo de golf y el hotel de las cumbres.",
      coords: [3.8167, 8.8],
      image: null,
    },
    {
      id: "luba",
      name: "Luba",
      region: "Bioko",
      tag: "La bahía del oeste",
      blurb:
        "Un pueblo sobre una bahía en el oeste de la isla, con playas de arena negra y la puerta hacia el sur.",
      coords: [3.4567, 8.5547],
      image: null,
    },
    {
      id: "ureca",
      name: "Ureca (tortugas marinas)",
      region: "Bioko",
      tag: "Tortugas marinas",
      blurb:
        "Un pueblo en el sur de Bioko, en una de las zonas más lluviosas del mundo, con playas donde desovan cuatro especies de tortugas. Se llega con permiso.",
      coords: [3.2667, 8.5667],
      image: null,
    },
    {
      id: "moka",
      name: "Moka (tierras altas de Bioko)",
      region: "Bioko",
      tag: "Las tierras altas",
      blurb:
        "Un pueblo de las tierras altas, con lagos de cráter, cascadas y noches frescas.",
      coords: [3.35, 8.65],
      image: null,
    },
    {
      id: "bata",
      name: "Bata",
      region: "Litoral",
      tag: "La ciudad del continente",
      blurb:
        "La ciudad más grande del continente, con el paseo marítimo, la torre de la Libertad y playas largas.",
      coords: [1.8639, 9.7658],
      image: null,
    },
    {
      id: "mbini",
      name: "Mbini (desembocadura del Benito)",
      region: "Litoral",
      tag: "El río Benito",
      blurb:
        "Un pueblo en la desembocadura del río Benito, con un puente largo sobre el río y playas tranquilas.",
      coords: [1.5833, 9.6167],
      image: null,
    },
    {
      id: "monte-alen",
      name: "Parque Nacional de Monte Alén",
      region: "Centro Sur",
      tag: "Selva",
      blurb:
        "La selva más grande del país, con gorilas, chimpancés y elefantes de bosque, cascadas y senderos.",
      coords: [1.6667, 10.3],
      image: null,
    },
    {
      id: "corisco",
      name: "Isla de Corisco",
      region: "Litoral",
      tag: "La isla de arena",
      blurb:
        "Una isla chica de playas blancas y agua turquesa, frente a la costa del continente.",
      coords: [0.9167, 9.3333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Guinea Ecuatorial, ropa liviana y fresca, algo impermeable y calzado que se seque rápido: hace calor húmedo y llueve buena parte del año. Para Moka, un buzo. Repelente, el certificado de la fiebre amarilla y euros en efectivo.",
    keyPoints: [
      "Visa electrónica antes de viajar, con reserva y pasaje de salida.",
      "Calor húmedo todo el año; en Bioko, temporada seca de diciembre a febrero.",
      "Muy caro, y casi todo en efectivo.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector, repelente y algo impermeable.",
      templado: "Ropa liviana y un buzo para Moka y el aire acondicionado.",
      fresco: "Un buzo y una campera impermeable para las noches de Moka.",
      frio: "No hace frío en Guinea Ecuatorial: un buzo alcanza para Moka.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas (C) o el francés, con una tercera pata macho (E); las de dos patas entran en los dos. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la visa con anticipación",
          body: "Online, con reserva, pasaje de salida y, a veces, prueba de fondos.",
        },
        {
          title: "Pedí el permiso para el sur de Bioko",
          body: "Para Ureca y sus playas, con tiempo y con un operador local.",
        },
        {
          title: "Hablá en español",
          body: "Es idioma oficial, y lo habla casi todo el mundo.",
        },
        {
          title: "Llevá euros en efectivo",
          body: "En billetes nuevos: las tarjetas extranjeras casi no funcionan.",
        },
        {
          title: "Probá el pescado a la brasa",
          body: "Con plátano y salsa picante, en los puestos del paseo marítimo.",
        },
        {
          title: "Llevá el pasaporte siempre",
          body: "Hay controles en las rutas y en la ciudad.",
        },
      ],
      donts: [
        {
          title: "No saques fotos sin preguntar",
          body: "A edificios oficiales está prohibido, y en la calle conviene preguntar siempre.",
        },
        {
          title: "No vayas al sur de Bioko sin permiso",
          body: "Te pueden hacer volver en el control.",
        },
        {
          title: "No te metas al mar sin preguntar",
          body: "Las corrientes de la costa son fuertes.",
        },
        {
          title: "No compres carne de monte",
          body: "Muchas veces es de animales protegidos, como los monos de Bioko.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Cambiá en bancos o en el hotel.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes necesitan la visa electrónica, tramitada antes, y te pueden pedir el certificado de la fiebre amarilla al llegar.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica aprobada, impresa",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Reserva de alojamiento y pasaje de salida",
          "Copias del pasaporte",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: {
          tone: "info",
          title: "Agua casi todo el año",
          body: "En Bioko llueve buena parte del año, y en Ureca casi todos los días.",
        },
        summary: "Agua y humedad",
        items: [
          "Una campera impermeable liviana",
          "Calzado que se seque rápido",
          "Bolsas secas para el teléfono y los documentos",
          "Ropa de secado rápido",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Euros en billetes nuevos",
          "Billetes chicos",
          "Una tarjeta para los hoteles grandes",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa gruesa o de jean",
        why: "Con la humedad no se seca nunca.",
        instead: "Ropa de secado rápido.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta.",
        instead: "Euros o francos en efectivo.",
      },
      {
        leave: "Ropa de colores fuertes para la selva",
        why: "Espanta a los animales.",
        instead: "Colores neutros.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Los permisos y los traslados llevan tiempo.",
        instead: "Días de margen.",
      },
      {
        leave: "Zapatillas de lona para la selva",
        why: "El barro las destroza.",
        instead: "Calzado de trekking ya usado.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Guinea Ecuatorial?",
        answer:
          "Casi todos los pasaportes la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Te la pueden pedir al llegar: vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Sí: es idioma oficial, junto al francés y el portugués, y lo habla casi todo el mundo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a febrero para Bioko; de junio a agosto para el continente.",
      },
      {
        question: "¿Es caro?",
        answer: "Sí: hoteles y restaurantes cuestan como en Europa.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer: "Probablemente: Guinea Ecuatorial usa los tipos C y E a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
