import type { DestinationGuide } from "./types";

/**
 * Guía de las Bahamas.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: un archipiélago donde casi todos los destinos son
 * islas remotas. Fuera de Nasáu y Gran Bahama hay pocos cajeros, pocos
 * médicos y vuelos en avioneta, y la guía lo dice como lo que es: lo que hay
 * que resolver antes de salir de la isla grande. Y un invierno que sorprende:
 * con los frentes fríos, las noches del norte bajan a 15 grados.
 *
 * El dólar bahameño vale uno estadounidense y los dos circulan a la par, así
 * que los precios del planificador van en BSD, que se leen igual.
 */
export const bahamas: DestinationGuide = {
  slug: "bahamas",
  country: "Bahamas",
  subregion: "Caribe",
  subhead:
    "Setecientas islas y cayos de agua turquesa, arena rosada y bancos de arena que se ven desde el avión. Un archipiélago donde casi todo queda lejos de todo.",

  image: null,

  highlights: [
    {
      value: "700",
      label: "islas y cayos",
      note: "Unas treinta están habitadas. Entre ellas se viaja en avioneta o en ferry.",
    },
    {
      value: "1 = 1",
      label: "dólar bahameño por dólar",
      note: "Los dos circulan a la par, y los precios son los mismos en una moneda o en la otra.",
    },
    {
      value: "Izquierda",
      label: "se conduce por la",
      note: "Aunque muchos autos tienen el volante a la izquierda, como en Estados Unidos.",
    },
    {
      value: "Jun–Nov",
      label: "temporada de huracanes",
      note: "Con el pico entre agosto y octubre. De diciembre a abril, el clima es seco y templado.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar. Pueden pedirte el pasaje de salida.",
        "Si llegas desde un país con riesgo de fiebre amarilla, o pasaste más de doce horas en el aeropuerto de uno, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
        "Si sigues viaje a Estados Unidos, el control migratorio estadounidense se hace en el aeropuerto de Nasáu, antes de embarcar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar bahameño vale uno estadounidense, y los dos se aceptan en todos lados. El cambio puede llegar en cualquiera de los dos.",
        "Todo es caro: casi todo se importa. La tarjeta funciona en Nasáu, Isla Paraíso y Freeport; en las islas remotas hay pocos cajeros y algunos lugares solo aceptan efectivo.",
        "Muchos restaurantes suman la propina a la cuenta automáticamente. Revísala antes de dejar otra.",
      ],
    },
    {
      id: "islas",
      title: "Las islas remotas",
      body: [
        "Fuera de Nasáu y Gran Bahama están las llamadas islas de la familia: Exuma, Eleuthera, Ábaco, Andros, Bimini y decenas más. Tienen pocos habitantes, pocos servicios y mucho mar.",
        "Antes de ir a una, conviene resolver en Nasáu el efectivo, los medicamentos y lo que no se consigue en un almacén chico. Los médicos son pocos y, para algo serio, hay que volver en avioneta.",
        "Entre islas se viaja en avionetas de línea, con pocos asientos, o en ferry. Los barcos correo, que llevan pasajeros y carga, son lentos pero llegan a todas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación seca y la temporada alta. Cuando pasan frentes fríos, las noches del norte bajan a unos 15 grados.",
        "De mayo a noviembre hace calor húmedo y llueve en chaparrones. La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El planificador usa el clima histórico de cada isla, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "En Nasáu hay minibuses baratos que recorren las rutas principales de día. Los taxis tienen tarifas fijas por zona: acuerda el precio antes de subir.",
        "En las islas remotas se alquila un auto o un carrito de golf. Se conduce por la izquierda.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "En Nasáu y Freeport, las precauciones son las de cualquier ciudad: atención a las pertenencias y, de noche, taxis en vez de caminar por zonas que no conoces.",
        "El mar pide cuidado: contrata las excursiones con empresas con licencia, chalecos salvavidas y seguro. Las motos de agua que se alquilan en la playa tienen mala fama.",
        "En Nasáu el agua corriente está tratada, pero mucha gente toma embotellada. En las islas remotas, agua embotellada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "La arena rosada de Harbour Island, los bancos de arena de Exuma y kilómetros de playa vacía.",
    },
    {
      dimension: "Mar y buceo",
      score: 9.5,
      rationale:
        "Agujeros azules, arrecifes y el agua más transparente del Caribe.",
    },
    {
      dimension: "Islas remotas",
      score: 9,
      rationale:
        "Decenas de islas con pocos habitantes, para quien busca estar lejos de todo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4.5,
      rationale: "De los destinos más caros del Caribe: casi todo se importa.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Vuelos directos a Nasáu desde muchos lados, pero entre islas hay pocos asientos y poca frecuencia.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El dólar bahameño vale uno estadounidense, y los dos circulan a la par.",
    },
  ],

  shines: [
    "Agua turquesa, arena rosada y bancos de arena en medio del mar.",
    "Islas remotas donde no hay nadie más.",
    "A menos de una hora de vuelo de Florida.",
  ],

  costs: [
    "El precio: de los destinos más caros del Caribe.",
    "Las islas remotas, con pocos servicios y vuelos caros.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges la isla en el planificador y los cálculos se hacen con su clima: Ábaco en enero no pide lo mismo que Exuma en agosto. Los precios son órdenes de magnitud, no cotizaciones, y valen igual en dólares bahameños o estadounidenses.",

  places: [
    {
      id: "nasau",
      name: "Nasáu",
      region: "New Providence",
      tag: "Capital y puerto",
      blurb:
        "La capital, con el centro colonial, el mercado de artesanías, la playa de Cable Beach y la puerta a las demás islas. Es la base del planificador.",
      coords: [25.0443, -77.3504],
      featured: true,
      image: null,
    },
    {
      id: "isla-paraiso",
      name: "Isla Paraíso",
      region: "New Providence",
      tag: "Resorts",
      blurb:
        "Una isla frente a Nasáu, unida por puentes, con los resorts más grandes del país y la playa de Cabbage Beach.",
      coords: [25.0866, -77.3233],
      image: null,
    },
    {
      id: "freeport",
      name: "Freeport (Gran Bahama)",
      region: "Gran Bahama",
      tag: "Parques y cuevas",
      blurb:
        "La segunda ciudad del país, con el parque nacional Lucayan, sus cuevas submarinas y playas largas. En invierno, las noches más frescas.",
      coords: [26.5333, -78.7],
      image: null,
    },
    {
      id: "exuma",
      name: "Exuma",
      region: "Exumas",
      tag: "Bancos de arena",
      blurb:
        "Una cadena de cayos con bancos de arena, la gruta de Thunderball y los cerdos que nadan en Big Major Cay.",
      coords: [23.525, -75.7833],
      image: null,
    },
    {
      id: "eleuthera",
      name: "Eleuthera",
      region: "Eleuthera",
      tag: "Playas vacías",
      blurb:
        "Una isla larga y angosta, con el Atlántico de un lado y el mar calmo del otro, y el puente de cristal donde se ven los dos a la vez.",
      coords: [25.1981, -76.24],
      image: null,
    },
    {
      id: "harbour-island",
      name: "Harbour Island",
      region: "Eleuthera",
      tag: "Arena rosada",
      blurb:
        "Una isla chica frente a Eleuthera, famosa por su playa de arena rosada y su pueblo de casas de colores. Se recorre en carrito de golf.",
      coords: [25.5, -76.6333],
      image: null,
    },
    {
      id: "abaco",
      name: "Ábaco",
      region: "Ábaco",
      tag: "Navegar",
      blurb:
        "Un grupo de islas y cayos para navegar a vela, con pueblos de pescadores y un faro a rayas rojas y blancas.",
      coords: [26.5412, -77.0636],
      image: null,
    },
    {
      id: "andros",
      name: "Andros",
      region: "Andros",
      tag: "Agujeros azules",
      blurb:
        "La isla más grande y menos poblada, con agujeros azules en la selva y en el mar, pesca con mosca y una de las barreras de coral más largas del mundo. Remota de verdad.",
      coords: [24.7, -77.77],
      image: null,
    },
    {
      id: "bimini",
      name: "Bimini",
      region: "Bimini",
      tag: "Pesca y Hemingway",
      blurb:
        "Las islas más cercanas a Florida, a unos ochenta kilómetros de Miami, con pesca de altura, buceo y la historia de Hemingway.",
      coords: [25.7266, -79.2969],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Las Bahamas son verano casi todo el año: ropa ligera, traje de baño, protector y repelente. De diciembre a marzo, cuando pasan frentes fríos, las noches del norte bajan a unos 15 grados: suma un suéter ligero. De junio a noviembre es la temporada de huracanes.",
    keyPoints: [
      "Calor todo el año, más suave y seco de diciembre a abril.",
      "Los frentes fríos del invierno refrescan las noches del norte.",
      "Las islas remotas tienen pocos servicios: efectivo y lo esencial, desde Nasáu.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de las islas casi todo el año.",
      templado:
        "Camiseta y una capa ligera para la noche. Es el invierno, cuando pasan los frentes fríos.",
      fresco:
        "Un suéter y una chaqueta ligera para las noches más frescas del invierno en Gran Bahama y Ábaco.",
      frio: "En las Bahamas no hace frío de verdad: con un suéter alcanza para la noche más fresca del año.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Lleva efectivo a las islas remotas",
          body: "Hay pocos cajeros, y algunos lugares no aceptan tarjeta.",
        },
        {
          title: "Revisa si la propina ya está en la cuenta",
          body: "Muchos restaurantes la suman automáticamente.",
        },
        {
          title: "Contrata el mar con empresas con licencia",
          body: "Con chalecos salvavidas y seguro. Las motos de agua de la playa tienen mala fama.",
        },
        {
          title: "Reserva los vuelos entre islas con tiempo",
          body: "Son avionetas con pocos asientos y poca frecuencia.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes y los agujeros azules lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No pagues la propina dos veces",
          body: "Si la cuenta ya la incluye, no hace falta dejar otra.",
        },
        {
          title: "No toques ni alimentes a los animales",
          body: "Ni a los cerdos de Exuma, ni a las rayas, ni a los tiburones nodriza.",
        },
        {
          title: "No subestimes el sol",
          body: "Sobre el agua clara, quema el doble.",
        },
        {
          title: "No vayas a una isla remota sin lo esencial",
          body: "Medicamentos, efectivo y lo que no se consigue en un almacén chico.",
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
          body: "Muchos pasaportes entran sin visa; otros la necesitan. Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica y traslado",
          "Vuelos o ferries entre islas, reservados",
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
        summary: "Lo específico de las islas",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Repelente para el atardecer",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "islas-remotas",
        title: "Islas remotas",
        notice: {
          tone: "info",
          title: "Pocos servicios",
          body: "Hay pocos cajeros, pocos médicos y almacenes chicos. Lo esencial se resuelve antes, en Nasáu.",
        },
        summary: "Para Exuma, Andros, Eleuthera y las demás",
        items: [
          "Efectivo en dólares",
          "Medicación de más, por si el vuelo de vuelta se atrasa",
          "Linterna",
          "Un botiquín con lo básico",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para las quemaduras de sol",
          "Repelente de insectos",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
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
          "Chaleco salvavidas a su medida para las lanchas, si el operador no tiene",
          "Repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "En las Bahamas no hay un mes frío.",
        instead: "Un suéter ligero para las noches de invierno.",
      },
      {
        leave: "Solo tarjeta para las islas remotas",
        why: "Hay pocos cajeros y algunos lugares solo aceptan efectivo.",
        instead: "Efectivo en dólares, sacado en Nasáu.",
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
      {
        leave: "La toalla grande de casa",
        why: "Hoteles y resorts dan toallas de playa.",
        instead: "Nada, o una de microfibra.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en todos lados: valen lo mismo que los bahameños, y los dos circulan a la par.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la estación seca y fuera de la temporada de huracanes.",
      },
      {
        question: "¿Cómo se viaja entre islas?",
        answer:
          "En avionetas de línea o en ferry desde Nasáu. Los barcos correo son lentos, pero llegan a todas.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Muchos restaurantes ya la suman a la cuenta. Si no lo hacen, se deja alrededor de un 15 %.",
      },
      {
        question: "¿Dónde están los cerdos que nadan?",
        answer:
          "En Big Major Cay, en las Exumas. Se llega en excursión desde Staniel Cay o desde Nasáu. Mejor no darles de comer ni tocarlos.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En Nasáu está tratada, pero mucha gente toma embotellada. En las islas remotas, agua embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
