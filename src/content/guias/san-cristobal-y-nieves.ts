import type { DestinationGuide } from "./types";

/**
 * Guía de San Cristóbal y Nieves.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: la única isla de la tanda que pide una
 * autorización electrónica (eTA) a casi todos los visitantes, desde 2025,
 * como Kenia o Seychelles en África (docs/agregar-un-pais.md). La guía la
 * pone en los números de arriba y en la checklist de documentos.
 *
 * Dos islas separadas por un canal de tres kilómetros: San Cristóbal, con la
 * capital, la fortaleza y los resorts de la península; Nieves, más tranquila,
 * alrededor de su volcán.
 */
export const sanCristobalYNieves: DestinationGuide = {
  slug: "san-cristobal-y-nieves",
  country: "San Cristóbal y Nieves",
  subregion: "Caribe",
  subhead:
    "Dos islas volcánicas separadas por un canal: una fortaleza británica sobre un cerro, plantaciones de caña, playas de los dos mares y la tranquilidad de Nieves.",

  image: null,

  highlights: [
    {
      value: "eTA",
      label: "para casi todos",
      note: "Una autorización electrónica antes de viajar, salvo para los ciudadanos del Caribe Oriental.",
    },
    {
      value: "1690",
      label: "empezó Brimstone Hill",
      note: "Una fortaleza británica sobre un cerro volcánico, patrimonio de la UNESCO.",
    },
    {
      value: "2 islas",
      label: "separadas por 3 km",
      note: "San Cristóbal y Nieves, con ferries varias veces por día.",
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
        "Casi todos los visitantes necesitan una eTA, una autorización electrónica que se pide antes de viajar, en la aplicación o el sitio del gobierno. Los ciudadanos del Caribe Oriental no, aunque completan un formulario de llegada.",
        "Además, algunos pasaportes necesitan visa. Verifica el tuyo antes de reservar, y usa solo los canales oficiales: hay páginas que cobran de más por el trámite.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los buses y los puestos, efectivo.",
        "Muchas cuentas suman un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "nieves",
      title: "Nieves",
      body: [
        "Nieves es una isla redonda alrededor de un volcán, con Charlestown, donde nació Alexander Hamilton, aguas termales y la playa de Pinney's.",
        "Se llega en ferry desde Basseterre, en menos de una hora, o en el ferry de autos desde la península del sureste.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la época seca y la temporada alta. De junio a noviembre es la temporada de huracanes.",
        "En junio, el festival de música de San Cristóbal; a fines de julio, el Culturama de Nieves; y entre diciembre y enero, el carnaval.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los buses, minibuses privados, recorren la ruta de la costa desde Basseterre. Son baratos y en efectivo.",
        "Los taxis tienen tarifas fijas: acuerda el precio antes de subir. Se conduce por la izquierda, y para alquilar un auto hace falta un permiso local.",
        "El tren panorámico de las viejas plantaciones de caña recorre buena parte de la isla en una vuelta de unas tres horas.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena.",
        "La costa atlántica tiene olas y corrientes: se nada en la del Caribe.",
        "El agua corriente es potable en la mayor parte de las dos islas. Si tienes el estómago sensible, embotellada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "La fortaleza de Brimstone Hill, las plantaciones de caña y la casa natal de Hamilton.",
    },
    {
      dimension: "Playas",
      score: 7.5,
      rationale:
        "Las de la península del sureste y Pinney's, en Nieves; en el norte, arena volcánica.",
    },
    {
      dimension: "Montaña y selva",
      score: 8,
      rationale:
        "La subida al volcán Liamuiga y al pico de Nieves, entre bosque y nubes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Accesible en Basseterre y Frigate Bay; caro en los resorts de la península y de Nieves.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos directos desde Norteamérica, buses en la costa y ferries frecuentes a Nieves.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Una fortaleza del siglo XVII con vista a cinco islas.",
    "Nieves: tranquila, chica y a minutos en ferry.",
    "Volcanes con selva para subir en el día.",
  ],

  costs: [
    "La eTA, que hay que tramitar antes de viajar.",
    "Los resorts de la península y de Nieves, caros.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: la subida al Liamuiga no pide lo mismo que la playa de Frigate Bay. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "basseterre",
      name: "Basseterre",
      region: "San Cristóbal",
      tag: "Capital colonial",
      blurb:
        "La capital, con el Circus, su reloj victoriano, la plaza de la Independencia y el puerto de cruceros. Es la base del planificador.",
      coords: [17.3026, -62.7177],
      featured: true,
      image: null,
    },
    {
      id: "frigate-bay",
      name: "Frigate Bay",
      region: "San Cristóbal",
      tag: "Playa y bares",
      blurb:
        "Un istmo con una playa de cada mar: la del Caribe, calma y con bares; la del Atlántico, con olas.",
      coords: [17.2867, -62.6833],
      image: null,
    },
    {
      id: "peninsula-sureste",
      name: "La península del sureste",
      region: "San Cristóbal",
      tag: "Calas y resorts",
      blurb:
        "Colinas secas, monos verdes y calas como Cockleshell Bay, frente a Nieves, con resorts de lujo y el ferry de autos.",
      coords: [17.219, -62.626],
      image: null,
    },
    {
      id: "brimstone-hill",
      name: "Fortaleza de Brimstone Hill",
      region: "San Cristóbal",
      tag: "Patrimonio UNESCO",
      blurb:
        "Una fortaleza británica sobre un cerro volcánico, con vista a Sint Eustatius, Saba y otras islas en días claros.",
      coords: [17.3472, -62.8378],
      image: null,
    },
    {
      id: "romney-manor",
      name: "Romney Manor y Old Road",
      region: "San Cristóbal",
      tag: "Jardines y batik",
      blurb:
        "Una vieja casa de plantación con jardines, un árbol centenario y talleres de batik, junto a petroglifos de los pueblos originarios.",
      coords: [17.322, -62.792],
      image: null,
    },
    {
      id: "monte-liamuiga",
      name: "Monte Liamuiga",
      region: "San Cristóbal",
      tag: "Volcán",
      blurb:
        "El volcán dormido de San Cristóbal, de más de mil metros, que se sube con guía entre bosque de nubes hasta el borde del cráter.",
      coords: [17.37, -62.8],
      image: null,
    },
    {
      id: "charlestown",
      name: "Charlestown (Nieves)",
      region: "Nieves",
      tag: "Pueblo de Hamilton",
      blurb:
        "El puerto de Nieves, con la casa natal de Alexander Hamilton, edificios de piedra y aguas termales a un paso.",
      coords: [17.138, -62.623],
      image: null,
    },
    {
      id: "pinneys-beach",
      name: "Pinney's Beach (Nieves)",
      region: "Nieves",
      tag: "Playa",
      blurb:
        "La playa larga de Nieves, de arena dorada y palmeras, con bares de playa y vista a San Cristóbal.",
      coords: [17.16, -62.63],
      image: null,
    },
    {
      id: "pico-de-nieves",
      name: "Pico de Nieves",
      region: "Nieves",
      tag: "Bosque de nubes",
      blurb:
        "El volcán que forma la isla, casi siempre con nubes en la cima, que se sube con guía por un sendero empinado.",
      coords: [17.15, -62.58],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "San Cristóbal y Nieves son calor todo el año: ropa ligera, traje de baño, protector y repelente. Si subes al Liamuiga o al pico de Nieves, suma calzado de trekking y una capa: arriba hay nubes y fresco. Antes de viajar, tramita la eTA.",
    keyPoints: [
      "Calor todo el año, con más lluvia de junio a noviembre.",
      "Los volcanes son frescos y nublados en la cima.",
      "Casi todos los visitantes necesitan la eTA antes de viajar.",
      "El enchufe más común es el británico, de tres patas rectangulares.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa todo el año.",
      templado:
        "Camiseta, una capa ligera y un impermeable. Es el clima de la subida a los volcanes.",
      fresco: "Un suéter ligero para la cima de los volcanes, entre nubes.",
      frio: "En San Cristóbal y Nieves no hace frío: con un suéter ligero alcanza para la cima.",
    },
    plug: {
      types: "Tipo D y tipo G, y en algunos hoteles tipo A y B",
      voltage: "230 V, 60 Hz",
      note: "Lo más común es el enchufe británico, de tres patas rectangulares. Lleva un adaptador universal, y si vienes de un país con 110 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramita la eTA antes de viajar",
          body: "En la aplicación o el sitio del gobierno, no en páginas de terceros que cobran de más.",
        },
        {
          title: "Sube a Brimstone Hill temprano",
          body: "Hay menos gente y más posibilidades de ver las islas vecinas.",
        },
        {
          title: "Cruza a Nieves por el día",
          body: "El ferry desde Basseterre tarda menos de una hora.",
        },
        {
          title: "Sube a los volcanes con guía",
          body: "Los senderos son empinados, resbalosos y entre nubes.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la península lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No viajes sin la eTA aprobada",
          body: "Sin ella, la aerolínea puede no dejarte embarcar.",
        },
        {
          title: "No te bañes en la costa atlántica",
          body: "Tiene olas y corrientes: se nada en la del Caribe.",
        },
        {
          title: "No alimentes a los monos",
          body: "Son silvestres y se acostumbran a robar comida.",
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
          tone: "warn",
          title: "eTA obligatoria",
          body: "Casi todos los visitantes necesitan la eTA aprobada antes de viajar. Algunos pasaportes, además, necesitan visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "eTA aprobada, pedida en los canales oficiales",
          "Pasaporte vigente y pasaje de salida",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: null,
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "volcanes",
        title: "Volcanes",
        notice: {
          tone: "info",
          title: "Con guía",
          body: "El Liamuiga y el pico de Nieves se suben con guía: son empinados y casi siempre tienen nubes arriba.",
        },
        summary: "Para subir a los volcanes",
        items: [
          "Calzado de trekking",
          "Impermeable y una capa ligera",
          "Guantes de trabajo para las partes con cuerdas",
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
          "eTA y pasaporte de cada menor",
          "Si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin la eTA",
        why: "Casi todos los visitantes la necesitan, y se revisa antes de embarcar.",
        instead: "La eTA aprobada, pedida en los canales oficiales.",
      },
      {
        leave: "Abrigo",
        why: "En las islas no hay un mes frío.",
        instead: "Una capa ligera para la cima de los volcanes.",
      },
      {
        leave: "Un adaptador de clavijas planas",
        why: "Lo común es el enchufe británico, de tres patas rectangulares.",
        instead: "Un adaptador universal.",
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
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito eTA o visa?",
        answer:
          "Casi todos los visitantes necesitan la eTA, que se pide antes de viajar. Algunos pasaportes, además, necesitan visa: verifica el tuyo.",
      },
      {
        question: "¿Cómo se llega a Nieves?",
        answer:
          "En ferry desde Basseterre, en menos de una hora, o en el ferry de autos desde la península del sureste.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: tienen paridad fija con el dólar del Caribe Oriental. El cambio suele llegar en moneda local.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la época seca y fuera de la temporada de huracanes.",
      },
      {
        question: "¿Se puede subir a los volcanes?",
        answer:
          "Sí, con guía: el Liamuiga hasta el borde del cráter y el pico de Nieves, más empinado. Se sale temprano, antes de que suban las nubes.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "Es potable en la mayor parte de las dos islas. Si tienes el estómago sensible, embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Conviene uno universal: lo común es el enchufe británico de tres patas, a 230 V. Revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
