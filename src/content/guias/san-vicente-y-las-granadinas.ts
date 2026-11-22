import type { DestinationGuide } from "./types";

/**
 * Guía de San Vicente y las Granadinas.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el contraste más grande de precios de todo el
 * planificador. San Vicente es una isla volcánica, verde y barata; Mustique,
 * a media hora de avioneta, es una isla privada de lujo. El factor de Mustique
 * es el máximo que acepta el generador (2,5), y aun así se queda corto.
 *
 * Y un volcán activo: La Soufrière entró en erupción en 2021. La guía manda a
 * revisar el nivel de alerta antes de subir; no lo describe, porque cambia.
 */
export const sanVicenteYLasGranadinas: DestinationGuide = {
  slug: "san-vicente-y-las-granadinas",
  country: "San Vicente y las Granadinas",
  subregion: "Caribe",
  subhead:
    "Una isla volcánica y verde, y al sur una cadena de islas chicas para navegar: Bequia, Mustique, Canouan y los cayos de Tobago.",

  image: null,

  highlights: [
    {
      value: "32",
      label: "islas y cayos",
      note: "San Vicente, volcánica y verde, y las Granadinas, una cadena de islas chicas hacia el sur.",
    },
    {
      value: "1.234 m",
      label: "en La Soufrière",
      note: "Un volcán activo, que entró en erupción en 2021. Se sube a pie, con guía.",
    },
    {
      value: "Parque marino",
      label: "en los cayos de Tobago",
      note: "Agua turquesa, tortugas y arena blanca, en islotes deshabitados.",
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
        "Al llegar se completa la tarjeta de migración. Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles y restaurantes. En las Granadinas hay pocos cajeros: conviene llevar efectivo desde San Vicente.",
        "Muchas cuentas suman un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "granadinas",
      title: "Las Granadinas",
      body: [
        "Bequia, a una hora de ferry desde Kingstown, es la más visitada: un puerto de veleros con playas a pie. Mustique y Canouan son islas de lujo; Union Island y Mayreau, la base para los cayos de Tobago.",
        "Entre las islas se viaja en ferry, en avioneta o en barco alquilado. Fuera de Bequia, los servicios son pocos: efectivo, medicamentos y agua se resuelven antes.",
        "El huracán Beryl golpeó de lleno a Union Island en 2024. Antes de reservar, confirma que tu alojamiento esté abierto.",
      ],
    },
    {
      id: "volcan",
      title: "La Soufrière",
      body: [
        "El volcán del norte de San Vicente se sube a pie desde el lado este, con guía, en unas tres horas de ida. Arriba hace fresco y suele haber nubes.",
        "Entró en erupción en 2021. Antes de subir, revisa el nivel de alerta del volcán, que publica el centro de investigación sísmica de la región.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a mayo es la época seca y la mejor para navegar. De junio a noviembre llueve más y es temporada de huracanes.",
        "Las Granadinas son más secas que San Vicente, que llueve bastante en su interior de montaña.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena.",
        "En Kingstown el agua corriente está tratada. En las Granadinas viene de cisternas de lluvia o de plantas desalinizadoras: agua embotellada.",
        "Se conduce por la izquierda, y para alquilar un auto hace falta un permiso local.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["Policía 911 / 999"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Navegación",
      score: 10,
      rationale:
        "Las Granadinas son de las mejores aguas del mundo para navegar a vela.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Las de Bequia, Canouan y los cayos de Tobago; San Vicente tiene arena volcánica oscura.",
    },
    {
      dimension: "Volcán y selva",
      score: 8.5,
      rationale:
        "La subida a La Soufrière, cascadas y el bosque del interior de San Vicente.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "San Vicente y Bequia son accesibles; Mustique y Canouan, de las islas más caras del mundo.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Aeropuerto internacional nuevo, pero entre islas hay que combinar ferries y avionetas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Islas chicas para recorrer en barco, cada una distinta.",
    "Los cayos de Tobago, agua turquesa sin nadie alrededor.",
    "Un volcán activo que se sube en el día.",
  ],

  costs: [
    "Combinar ferries y avionetas entre islas.",
    "Pocos servicios fuera de San Vicente y Bequia.",
    "Mustique y Canouan, a precio de lujo.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: la subida a La Soufrière no pide lo mismo que la playa de Bequia. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "kingstown",
      name: "Kingstown",
      region: "San Vicente",
      tag: "Capital y jardín botánico",
      blurb:
        "La capital, con calles de piedra, el mercado, el puerto de los ferries y uno de los jardines botánicos más antiguos de América. Es la base del planificador.",
      coords: [13.16, -61.2248],
      featured: true,
      image: null,
    },
    {
      id: "villa",
      name: "Villa y la costa sur",
      region: "San Vicente",
      tag: "Playas y hoteles",
      blurb:
        "La zona de hoteles del sur de San Vicente, con playas de arena oscura y la isla Young enfrente.",
      coords: [13.135, -61.205],
      image: null,
    },
    {
      id: "la-soufriere",
      name: "La Soufrière",
      region: "San Vicente",
      tag: "Volcán",
      blurb:
        "El volcán activo del norte, de 1.234 metros, que se sube a pie con guía. Arriba hace fresco y suele haber nubes.",
      coords: [13.33, -61.18],
      image: null,
    },
    {
      id: "sotavento",
      name: "La costa de sotavento",
      region: "San Vicente",
      tag: "Bahías y cascadas",
      blurb:
        "La costa oeste de San Vicente, con bahías como Wallilabou, la cascada de Dark View y los barcos a la de Baleine, a la que solo se llega por mar.",
      coords: [13.247, -61.27],
      image: null,
    },
    {
      id: "bequia",
      name: "Bequia",
      region: "Granadinas",
      tag: "Puerto de veleros",
      blurb:
        "La más visitada de las Granadinas: el puerto de Admiralty Bay lleno de veleros, playas a pie y una tradición de constructores de barcos.",
      coords: [13.01, -61.24],
      image: null,
    },
    {
      id: "mustique",
      name: "Mustique",
      region: "Granadinas",
      tag: "Isla privada",
      blurb:
        "Una isla privada de lujo, con villas, un par de hoteles y el bar de Basil's. De las más caras del mundo.",
      coords: [12.879, -61.186],
      image: null,
    },
    {
      id: "canouan",
      name: "Canouan",
      region: "Granadinas",
      tag: "Laguna y resort",
      blurb:
        "Una isla con una laguna protegida por arrecife y resorts de lujo en el norte.",
      coords: [12.71, -61.33],
      image: null,
    },
    {
      id: "mayreau",
      name: "Mayreau",
      region: "Granadinas",
      tag: "Isla sin autos",
      blurb:
        "Una isla chica sin aeropuerto ni casi autos, con la playa de Salt Whistle Bay, a minutos de los cayos de Tobago.",
      coords: [12.64, -61.39],
      image: null,
    },
    {
      id: "union-island",
      name: "Union Island y los cayos de Tobago",
      region: "Granadinas",
      tag: "Cayos de Tobago",
      blurb:
        "La isla del sur, con aeropuerto, kitesurf y la salida de los barcos al parque marino de los cayos de Tobago. El huracán de 2024 la golpeó de lleno.",
      coords: [12.6, -61.43],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "San Vicente y las Granadinas son calor todo el año: ropa ligera, traje de baño, protector y repelente. Si subes a La Soufrière, suma calzado de trekking y una capa abrigada: arriba hace fresco y hay viento. De enero a mayo es la época seca.",
    keyPoints: [
      "Calor todo el año, con más lluvia de junio a noviembre.",
      "La cumbre de La Soufrière es fresca, ventosa y con nubes.",
      "Fuera de San Vicente y Bequia hay pocos servicios: efectivo y lo esencial, antes.",
      "El enchufe más común es el británico, de tres patas rectangulares.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa y de las Granadinas todo el año.",
      templado:
        "Camiseta, una capa y un impermeable. Es el clima de la subida a La Soufrière.",
      fresco:
        "Un suéter o una chaqueta ligera para la cumbre del volcán, con viento y nubes.",
      frio: "En San Vicente no hace frío de verdad: con una chaqueta ligera alcanza para la cumbre.",
    },
    plug: {
      types: "Tipo G, y en algunos hoteles tipo A y B",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el enchufe británico, de tres patas rectangulares. Lleva un adaptador universal, y si vienes de un país con 110 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Lleva efectivo a las Granadinas",
          body: "Fuera de Bequia hay pocos cajeros.",
        },
        {
          title: "Revisa el nivel de alerta antes de subir al volcán",
          body: "Y sube con guía, temprano, antes de que lleguen las nubes.",
        },
        {
          title: "Combina ferry y avioneta con tiempo",
          body: "Los horarios entre islas son pocos y cambian con el mar.",
        },
        {
          title: "Confirma que tu alojamiento esté abierto",
          body: "Sobre todo en Union Island, golpeada por el huracán de 2024.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "El parque marino de los cayos de Tobago lo agradece.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No subas al volcán sin guía",
          body: "El sendero cambia con las lluvias y arriba las nubes desorientan.",
        },
        {
          title: "No toques a las tortugas ni al coral",
          body: "En el parque marino se miran de lejos.",
        },
        {
          title: "No tomes agua de cisterna",
          body: "En las Granadinas, agua embotellada.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
        },
        {
          title: "No subestimes el sol en el barco",
          body: "Sobre el agua clara, quema el doble.",
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
          body: "Muchos pasaportes entran sin visa; otros la necesitan. Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Ferries o avionetas entre islas, reservados",
          "Seguro de viaje con cobertura médica y traslado",
        ],
      },
      {
        id: "playa",
        title: "Playa y barco",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico de las islas",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Snorkel propio, si tienes",
          "Pastillas para el mareo, si vas a navegar",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "volcan",
        title: "Volcán",
        notice: {
          tone: "info",
          title: "Arriba hace fresco",
          body: "La cumbre de La Soufrière tiene viento y nubes, aunque abajo haga calor.",
        },
        summary: "Para subir a La Soufrière",
        items: [
          "Calzado de trekking",
          "Una capa abrigada y un impermeable",
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
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Chaleco salvavidas a su medida para los barcos, si el operador no tiene",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "Ni en la cumbre del volcán hace falta.",
        instead: "Una capa abrigada ligera y un impermeable.",
      },
      {
        leave: "Solo tarjeta para las Granadinas",
        why: "Fuera de Bequia hay pocos cajeros.",
        instead: "Efectivo, sacado en San Vicente.",
      },
      {
        leave: "Una maleta rígida grande",
        why: "Entre islas se viaja en ferries y avionetas, con poco lugar.",
        instead: "Un bolso blando.",
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
        why: "No se usan en la playa ni en el barco.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
      },
      {
        question: "¿Cómo se viaja entre las islas?",
        answer:
          "En ferry desde Kingstown a Bequia y al sur, en avioneta a las islas con aeropuerto, o en barco alquilado.",
      },
      {
        question: "¿Se puede subir a La Soufrière?",
        answer:
          "Sí, con guía, en unas tres horas de ida desde el lado este. Antes, revisa el nivel de alerta del volcán.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De enero a mayo, la época seca y la mejor para navegar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: tienen paridad fija con el dólar del Caribe Oriental. El cambio suele llegar en moneda local.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En Kingstown está tratada. En las Granadinas, agua embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Conviene uno universal: lo común es el enchufe británico de tres patas, a 230 V. Revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
