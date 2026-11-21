import type { DestinationGuide } from "./types";

/**
 * Guía de Dominica.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: la isla más lluviosa y montañosa del planificador
 * en el Caribe. En el parque Morne Trois Pitons, a unos setecientos metros,
 * llueve más de dos días de cada tres, y las mínimas bajan de 18 grados: el
 * motor pide capas. Y un aeropuerto internacional lejos de la capital, como
 * en Santa Lucía: el traslado de los pueblos del norte, que quedan cerca, se
 * corrige al final de la migración.
 *
 * No confundir con la República Dominicana: la guía lo dice una vez.
 */
export const dominica: DestinationGuide = {
  slug: "dominica",
  country: "Dominica",
  subregion: "Caribe",
  subhead:
    "La isla naturaleza del Caribe: selva de montaña, un lago que hierve, ríos y cascadas por todos lados y cachalotes frente a la costa todo el año.",

  image: null,

  highlights: [
    {
      value: "365",
      label: "ríos",
      note: "Uno para cada día del año, dice la isla. Selva, cascadas y pozas por todos lados.",
    },
    {
      value: "2.º",
      label: "lago hirviente más grande del mundo",
      note: "El Boiling Lake, a unas tres horas de caminata por la selva del parque Morne Trois Pitons.",
    },
    {
      value: "Todo el año",
      label: "cachalotes",
      note: "Dominica es de los pocos lugares del mundo donde viven frente a la costa los doce meses.",
    },
    {
      value: "2,70 = 1",
      label: "dólares del Caribe Oriental por dólar",
      note: "Una paridad fija con el dólar estadounidense, que se acepta en casi todos lados.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "La tarjeta de migración se completa en línea, en los días antes de llegar. Pueden pedirte el pasaje de salida.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
        "Dominica no es la República Dominicana: es una isla del Caribe Oriental, entre Guadalupe y Martinica.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles y restaurantes de Roseau. Para los minibuses, los guías y los pueblos, efectivo.",
        "Para entrar a los sitios naturales —el Boiling Lake, las cascadas, los senderos— se compra un pase de los parques, por día o por semana.",
      ],
    },
    {
      id: "naturaleza",
      title: "Selva, senderos y mar",
      body: [
        "El parque Morne Trois Pitons, patrimonio de la UNESCO, tiene el Boiling Lake, el Valle de la Desolación, lagos de montaña y cascadas como las de Trafalgar.",
        "El sendero Waitukubuli cruza la isla de punta a punta en catorce tramos. Los más largos se hacen con guía.",
        "En la costa oeste salen barcos a ver cachalotes y delfines, y en Champagne Reef el agua burbujea por los gases del volcán.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a abril es la época más seca. De junio a noviembre llueve mucho, sobre todo en la montaña, y es temporada de huracanes.",
        "A fines de octubre, el festival mundial de música criolla llena Roseau.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "El aeropuerto internacional está en la costa noreste, a más de una hora de Roseau por una ruta de montaña.",
        "Los minibuses salen de Roseau a los pueblos, de día. Las rutas son angostas y con curvas, y se conduce por la izquierda; para alquilar un auto hace falta un permiso local.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de siempre: atención a las pertenencias y nada de dejar cosas solas en la playa.",
        "Los ríos crecen en minutos cuando llueve en la montaña: no se cruzan crecidos, y las caminatas largas se hacen con guía.",
        "En Roseau el agua corriente está tratada. En el campo, mejor embotellada o hervida.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Selva y senderos",
      score: 10,
      rationale:
        "El Boiling Lake, el sendero Waitukubuli y cascadas a minutos de cualquier pueblo.",
    },
    {
      dimension: "Mar y buceo",
      score: 9,
      rationale:
        "Cachalotes todo el año, Champagne Reef y paredes de coral en Scotts Head.",
    },
    {
      dimension: "Playas",
      score: 5.5,
      rationale:
        "Pocas y de arena oscura: no es una isla de playa. Las mejores, en el norte.",
    },
    {
      dimension: "Cultura",
      score: 8,
      rationale:
        "El territorio kalinago, el pueblo originario del Caribe, y la música criolla.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Más barata que las islas de resorts, con alojamientos chicos en la selva.",
    },
    {
      dimension: "Facilidad logística",
      score: 5.5,
      rationale:
        "Pocos vuelos, con escala en otra isla, y rutas de montaña lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "La selva y los senderos más salvajes del Caribe.",
    "Cachalotes frente a la costa todo el año.",
    "Una isla sin turismo masivo.",
  ],

  costs: [
    "Llegar: pocos vuelos y casi siempre con escala.",
    "Las playas, pocas y de arena oscura.",
    "La lluvia, que en la montaña es casi diaria.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: el parque Morne Trois Pitons no pide lo mismo que la costa de Mero. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "roseau",
      name: "Roseau",
      region: "Suroeste",
      tag: "Capital criolla",
      blurb:
        "La capital, con casas criollas de madera, el mercado, el jardín botánico y la salida de los barcos de avistaje de cachalotes. Es la base del planificador.",
      coords: [15.301, -61.387],
      featured: true,
      image: null,
    },
    {
      id: "valle-de-roseau",
      name: "Valle de Roseau",
      region: "Suroeste",
      tag: "Cascadas y aguas termales",
      blurb:
        "El valle de las cascadas de Trafalgar, las aguas termales de Wotten Waven y alojamientos en la selva, a minutos de la capital.",
      coords: [15.32, -61.345],
      image: null,
    },
    {
      id: "morne-trois-pitons",
      name: "Parque Morne Trois Pitons",
      region: "Centro",
      tag: "Boiling Lake",
      blurb:
        "La selva de montaña del centro, patrimonio de la UNESCO, con el Boiling Lake, lagos de cráter y la cascada del Titou Gorge. Fresco y muy lluvioso.",
      coords: [15.34, -61.32],
      image: null,
    },
    {
      id: "scotts-head",
      name: "Scotts Head y Soufrière",
      region: "Sur",
      tag: "Buceo",
      blurb:
        "El extremo sur, donde el Caribe y el Atlántico se juntan, con Champagne Reef y sus burbujas volcánicas.",
      coords: [15.2167, -61.3667],
      image: null,
    },
    {
      id: "mero",
      name: "Mero y la costa oeste",
      region: "Oeste",
      tag: "Playa",
      blurb:
        "Una de las pocas playas largas de la isla, de arena gris, con bares los fines de semana.",
      coords: [15.41, -61.42],
      image: null,
    },
    {
      id: "portsmouth",
      name: "Portsmouth y el río Indio",
      region: "Norte",
      tag: "Río y fuerte",
      blurb:
        "La segunda ciudad, con el paseo en bote por el río Indio entre manglares y el fuerte del parque Cabrits.",
      coords: [15.58, -61.46],
      image: null,
    },
    {
      id: "calibishie",
      name: "Calibishie",
      region: "Norte",
      tag: "Playas del norte",
      blurb:
        "Un pueblo de la costa norte con las mejores playas de la isla, como Batibou, cerca del aeropuerto.",
      coords: [15.59, -61.35],
      image: null,
    },
    {
      id: "territorio-kalinago",
      name: "Territorio kalinago",
      region: "Este",
      tag: "Pueblo originario",
      blurb:
        "La tierra de los kalinagos, el pueblo originario del Caribe, con una aldea que muestra su cultura y artesanía.",
      coords: [15.5, -61.26],
      image: null,
    },
    {
      id: "rosalie",
      name: "Rosalie y la costa este",
      region: "Este",
      tag: "Costa salvaje",
      blurb:
        "La costa atlántica, de ríos que llegan al mar, tortugas que desovan en primavera y olas fuertes. Remota y tranquila.",
      coords: [15.37, -61.26],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Dominica es calor en la costa y fresco y lluvia en la montaña: ropa ligera, impermeable, calzado de trekking que se pueda mojar y repelente. Si vas al Boiling Lake o al parque Morne Trois Pitons, suma una capa abrigada. De enero a abril es la época más seca.",
    keyPoints: [
      "Calor en la costa todo el año; fresco y lluvia casi diaria en la montaña.",
      "Los senderos son de barro y ríos: calzado que se pueda mojar.",
      "Los ríos crecen rápido con la lluvia: las caminatas largas, con guía.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa todo el año.",
      templado:
        "Camiseta, una capa ligera y un impermeable. Es el clima de los valles de la montaña.",
      fresco:
        "Una capa abrigada y un impermeable para el parque Morne Trois Pitons y el Boiling Lake.",
      frio: "En Dominica no hace frío de verdad: con una capa abrigada alcanza para la montaña.",
    },
    plug: {
      types: "Tipo D y tipo G",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el enchufe británico, de tres patas rectangulares. Lleva un adaptador universal, y si vienes de un país con 110 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Compra el pase de los parques",
          body: "El semanal sale más barato si vas a varios sitios naturales.",
        },
        {
          title: "Haz el Boiling Lake con guía",
          body: "Son unas seis horas de ida y vuelta, con barro, ríos y vapor.",
        },
        {
          title: "Lleva calzado que se pueda mojar",
          body: "Casi todos los senderos cruzan ríos.",
        },
        {
          title: "Sal a ver cachalotes desde Roseau",
          body: "Están todo el año; de noviembre a marzo, el mar está más calmo.",
        },
        {
          title: "Reserva el traslado desde el aeropuerto",
          body: "Hay más de una hora de ruta de montaña hasta Roseau.",
        },
        {
          title: "Completa la tarjeta de migración en línea",
          body: "En los días antes de llegar, en el sitio del gobierno.",
        },
      ],
      donts: [
        {
          title: "No cruces un río crecido",
          body: "Con lluvia en la montaña, el agua sube en minutos.",
        },
        {
          title: "No esperes playas de arena blanca",
          body: "Dominica es selva y río; las playas son pocas y de arena oscura.",
        },
        {
          title: "No confundas Dominica con la República Dominicana",
          body: "Al reservar vuelos, revisa el aeropuerto de destino.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña.",
        },
        {
          title: "No reserves en septiembre sin seguro",
          body: "Es el pico de la temporada de huracanes.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "info",
          title: "Entrada",
          body: "Muchos pasaportes entran sin visa; otros la necesitan. La tarjeta de migración se completa en línea antes de llegar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "La tarjeta de migración, completada en línea",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica y traslado",
        ],
      },
      {
        id: "selva",
        title: "Selva y senderos",
        notice: {
          tone: "warn",
          title: "Ríos que crecen",
          body: "Con lluvia en la montaña, los ríos suben en minutos. No se cruzan crecidos, y las caminatas largas se hacen con guía.",
        },
        summary: "Para los senderos y el Boiling Lake",
        items: [
          "Calzado de trekking que se pueda mojar",
          "Impermeable y una capa abrigada",
          "Bolsa impermeable para el teléfono",
          "Agua y algo para comer",
        ],
      },
      {
        id: "mar",
        title: "Mar",
        notice: null,
        summary: "Para la costa y los barcos",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Pastillas para el mareo, para los barcos de cachalotes",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos: hay dengue",
          "Algo para las ampollas y los raspones",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal: lo común es el enchufe británico",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Calzado que se pueda mojar, a su medida",
          "Repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "Ni en la montaña hace frío de verdad.",
        instead: "Una capa abrigada ligera y un impermeable.",
      },
      {
        leave: "Sandalias para los senderos",
        why: "Se camina por barro, piedras y ríos.",
        instead: "Calzado de trekking que se pueda mojar.",
      },
      {
        leave: "Algodón para caminar",
        why: "Con la lluvia y la humedad no se seca.",
        instead: "Ropa sintética que seque rápido.",
      },
      {
        leave: "Un adaptador de clavijas planas",
        why: "Lo común es el enchufe británico, de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No sirven en la selva ni en el río.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Es lo mismo que la República Dominicana?",
        answer:
          "No. Dominica es una isla del Caribe Oriental, entre Guadalupe y Martinica, con otro idioma oficial, el inglés, y otra moneda.",
      },
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y completa la tarjeta de migración en línea.",
      },
      {
        question: "¿Cómo llego?",
        answer:
          "Casi siempre con escala en otra isla del Caribe o en Miami. El aeropuerto internacional está a más de una hora de Roseau.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De enero a abril, la época más seca. Los cachalotes están todo el año.",
      },
      {
        question: "¿Se puede ir solo al Boiling Lake?",
        answer:
          "Conviene ir con guía: son unas seis horas de ida y vuelta, con ríos, barro y vapor, y el camino no siempre está marcado.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En Roseau está tratada. En el campo, mejor embotellada o hervida.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Conviene uno universal: lo común es el enchufe británico de tres patas, a 230 V. Revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
