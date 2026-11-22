import type { DestinationGuide } from "./types";

/**
 * Guía de Santa Lucía.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero de los seis países del dólar del Caribe
 * Oriental, con paridad fija; los precios del planificador van en XCD y
 * enteros, porque la unidad vale menos de medio dólar (spec, 22). Y un
 * aeropuerto internacional lejos de donde duerme casi todo el mundo: la base
 * es Rodney Bay, en el norte, y la mayoría de los vuelos llega a Hewanorra, en
 * el extremo sur.
 */
export const santaLucia: DestinationGuide = {
  slug: "santa-lucia",
  country: "Santa Lucía",
  subregion: "Caribe",
  subhead:
    "Los dos Pitons saliendo del mar, selva volcánica, fuentes de azufre y bahías escondidas. Una isla de montaña con playas en las calas.",

  image: null,

  highlights: [
    {
      value: "2 Pitons",
      label: "patrimonio de la UNESCO",
      note: "Dos picos volcánicos que salen del mar junto a Soufrière. El más alto se sube a pie, con guía.",
    },
    {
      value: "1 volcán",
      label: "al que se llega en auto",
      note: "Las fuentes sulfurosas de Soufrière, con pozas de barro caliente para bañarse.",
    },
    {
      value: "2,70 = 1",
      label: "dólares del Caribe Oriental por dólar",
      note: "Una paridad fija que comparten seis países. El dólar estadounidense se acepta en casi todos lados.",
    },
    {
      value: "Dic–May",
      label: "época seca",
      note: "De junio a noviembre llueve más y es temporada de huracanes.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "Antes de llegar en avión se completa en línea el formulario de migración y aduana. Usa solo el sitio del gobierno: hay páginas que cobran por hacerlo.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los minibuses, los puestos y la fiesta de los viernes en Gros Islet, efectivo.",
        "Muchas cuentas suman un cargo por servicio, además del impuesto. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "aeropuertos",
      title: "Dos aeropuertos",
      body: [
        "Casi todos los vuelos internacionales llegan a Hewanorra, en el extremo sur, a una hora y media de ruta de Rodney Bay y del norte, donde duerme la mayoría.",
        "El aeropuerto de Castries recibe vuelos regionales y queda a minutos del norte. Si vienes de otra isla del Caribe, suele ser la mejor opción.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a mayo es la época seca y la temporada alta.",
        "De junio a noviembre llueve más, en chaparrones, y es temporada de huracanes, con el pico entre agosto y octubre.",
        "En mayo, el festival de jazz y artes llena la isla.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los minibuses recorren la isla desde Castries, baratos y en efectivo. Los taxis tienen tarifas fijas: acuerda el precio antes de subir.",
        "La ruta de la costa oeste, de Castries a Soufrière, es de curvas y lleva más tiempo de lo que dice el mapa. Hay taxis acuáticos que la hacen por mar.",
        "Se conduce por la izquierda, y para alquilar un auto hace falta un permiso local, que tramita la empresa de alquiler.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias, nada de dejar cosas solas en la arena y taxis de confianza de noche.",
        "La subida al Gros Piton se hace con guía y temprano: es empinada y hace calor.",
        "En hoteles y ciudades el agua corriente está tratada. Si tienes el estómago sensible, embotellada.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["Policía 999 · Ambulancia 911"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Los Pitons, la selva de montaña y las bahías: de las islas más bonitas del Caribe.",
    },
    {
      dimension: "Playas",
      score: 7.5,
      rationale:
        "Calas de arena entre montañas más que playas largas. Reduit y Anse Chastanet, las más conocidas.",
    },
    {
      dimension: "Naturaleza y senderos",
      score: 9,
      rationale:
        "El Gros Piton, la selva del centro, cascadas y el volcán de Soufrière.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Isla de resorts y luna de miel, con precios a tono. Lo local es más barato.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "El aeropuerto internacional queda lejos del norte, y la ruta de la costa es lenta.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Un paisaje volcánico que no tiene ninguna otra isla.",
    "Senderos de selva y cascadas a minutos de la playa.",
    "La fiesta callejera de los viernes en Gros Islet.",
  ],

  costs: [
    "El precio de los resorts, que son la mayoría del alojamiento.",
    "La distancia entre el aeropuerto internacional y el norte.",
    "La temporada de lluvias y huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: la selva del centro no pide lo mismo que la playa de Rodney Bay. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "rodney-bay",
      name: "Rodney Bay",
      region: "Norte",
      tag: "Playa y marina",
      blurb:
        "La bahía del norte, con la playa de Reduit, la marina y casi todos los hoteles. Al lado, Gros Islet y su fiesta de los viernes. Es la base del planificador.",
      coords: [14.0717, -60.9483],
      featured: true,
      image: null,
    },
    {
      id: "isla-pigeon",
      name: "Isla Pigeon",
      region: "Norte",
      tag: "Fuerte y playa",
      blurb:
        "Una antigua isla unida a tierra, con las ruinas de un fuerte británico, senderos y playas tranquilas.",
      coords: [14.09, -60.96],
      image: null,
    },
    {
      id: "castries",
      name: "Castries",
      region: "Norte",
      tag: "Capital y mercado",
      blurb:
        "La capital, con el mercado central, la catedral y el puerto de cruceros. A minutos, el aeropuerto regional.",
      coords: [14.0101, -60.9875],
      image: null,
    },
    {
      id: "marigot",
      name: "Bahía Marigot",
      region: "Oeste",
      tag: "Bahía escondida",
      blurb:
        "Una bahía honda rodeada de palmeras y colinas, de las más fotografiadas del Caribe.",
      coords: [13.9653, -61.0244],
      image: null,
    },
    {
      id: "anse-la-raye",
      name: "Anse La Raye",
      region: "Oeste",
      tag: "Pueblo de pescadores",
      blurb:
        "Un pueblo de pescadores de la costa oeste, con la noche de pescado de los viernes y cascadas cerca.",
      coords: [13.9417, -61.0389],
      image: null,
    },
    {
      id: "soufriere",
      name: "Soufrière y los Pitons",
      region: "Suroeste",
      tag: "Volcán y Pitons",
      blurb:
        "El pueblo al pie de los Pitons, con el volcán de las fuentes sulfurosas, jardines botánicos, cascadas y buen snorkel en Anse Chastanet.",
      coords: [13.8566, -61.0564],
      image: null,
    },
    {
      id: "selva-central",
      name: "La selva del centro",
      region: "Centro",
      tag: "Selva y senderos",
      blurb:
        "La reserva forestal del interior, con senderos, aves endémicas como la amazona de Santa Lucía y más lluvia y fresco que la costa.",
      coords: [13.88, -60.99],
      image: null,
    },
    {
      id: "vieux-fort",
      name: "Vieux Fort",
      region: "Sur",
      tag: "Kitesurf",
      blurb:
        "El extremo sur, junto al aeropuerto internacional, con viento constante para el kitesurf y las islas María frente a la costa.",
      coords: [13.7246, -60.949],
      image: null,
    },
    {
      id: "dennery",
      name: "Dennery y la costa este",
      region: "Este",
      tag: "Costa atlántica",
      blurb:
        "La costa atlántica, de olas y pueblos de pescadores, lejos de los resorts. Para recorrer, no para nadar.",
      coords: [13.9133, -60.8908],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Santa Lucía es calor todo el año: ropa ligera, traje de baño, protector y repelente. Si vas a la selva del centro o subes al Gros Piton, suma calzado de trekking y un impermeable. De diciembre a mayo es la época seca.",
    keyPoints: [
      "Calor todo el año, con más lluvia de junio a noviembre.",
      "La selva del centro es más fresca y lluviosa que la costa.",
      "El aeropuerto internacional está en el sur, lejos de los hoteles del norte.",
      "El enchufe es el británico, de tres patas rectangulares.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa todo el año.",
      templado:
        "Camiseta, una capa ligera y un impermeable. Es el clima de la selva del centro.",
      fresco: "Un suéter ligero para la noche en la montaña.",
      frio: "En Santa Lucía no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Si el tuyo es distinto, lleva adaptador, y si vienes de un país con 110 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Calcula el traslado desde Hewanorra",
          body: "Hay una hora y media de ruta hasta el norte. Algunos hoteles lo hacen en helicóptero o en taxi acuático.",
        },
        {
          title: "Completa el formulario de llegada en el sitio oficial",
          body: "Es gratis; las páginas que cobran por hacerlo no son del gobierno.",
        },
        {
          title: "Sube al Gros Piton con guía y temprano",
          body: "Es empinado y el calor de mediodía lo hace mucho más duro.",
        },
        {
          title: "Lleva efectivo para lo local",
          body: "Minibuses, puestos de comida y la fiesta de Gros Islet se pagan en efectivo.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "El arrecife de Anse Chastanet lo agradece.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No calcules la ruta de la costa por el mapa",
          body: "Las curvas duplican el tiempo: de Castries a Soufrière hay más de una hora.",
        },
        {
          title: "No te bañes en la costa este",
          body: "El Atlántico tiene olas y corrientes fuertes.",
        },
        {
          title: "No te refugies bajo un manzanillo",
          body: "Es un árbol de playa venenoso: su savia quema la piel.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
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
          body: "Muchos pasaportes entran sin visa; otros la necesitan. El formulario de migración y aduana se completa en línea antes de llegar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "El formulario de llegada, completado en el sitio oficial",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "El traslado desde Hewanorra, reservado",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "senderos",
        title: "Senderos y volcán",
        notice: {
          tone: "info",
          title: "Con guía",
          body: "El Gros Piton y algunos senderos de la selva se hacen con guía. El barro del volcán mancha la ropa.",
        },
        summary: "Para la selva, los Pitons y Soufrière",
        items: [
          "Calzado de trekking o deportivo con buena suela",
          "Impermeable ligero",
          "Agua y algo para comer",
          "Un traje de baño viejo para el barro del volcán",
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
          "Algo para las quemaduras de sol",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador al enchufe británico de tres patas",
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
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En Santa Lucía no hay un mes frío.",
        instead: "Una capa ligera y un impermeable para la montaña.",
      },
      {
        leave: "Un adaptador de clavijas planas",
        why: "El enchufe es el británico, de tres patas rectangulares.",
        instead: "Un adaptador tipo G o uno universal.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Tu mejor traje de baño para el volcán",
        why: "El barro de las fuentes sulfurosas lo mancha.",
        instead: "Uno viejo.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y completa el formulario de llegada en línea.",
      },
      {
        question: "¿A qué aeropuerto conviene llegar?",
        answer:
          "Los vuelos internacionales llegan casi todos a Hewanorra, en el sur. Si vienes de otra isla del Caribe, el de Castries queda a minutos del norte.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: tienen paridad fija con el dólar del Caribe Oriental. El cambio suele llegar en moneda local.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a mayo, la época seca y fuera de la temporada de huracanes.",
      },
      {
        question: "¿Se puede subir a los Pitons?",
        answer:
          "Al Gros Piton, sí, con guía: son unas cuatro horas de ida y vuelta, empinadas. El Petit Piton es más peligroso y no se recomienda.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En hoteles y ciudades está tratada. Si tienes el estómago sensible, embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, salvo que el tuyo sea el británico de tres patas. El voltaje es 240 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
