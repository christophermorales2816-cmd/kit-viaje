import type { DestinationGuide } from "./types";

/**
 * Guía de las Islas Turcas y Caicos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Un territorio británico de ultramar que cumple el criterio de 16.2 (spec,
 * 22.8). Usa el dólar estadounidense: corredor dolarizado.
 *
 * Lo que este país aporta: una ley de armas que se aplica a turistas. Tener
 * munición es delito aunque sea una bala olvidada en una mochila, y se
 * castiga con cárcel. No es una alerta de seguridad sino una regla de entrada,
 * y va arriba de todo: en los números, en la checklist de documentos, en lo
 * que no hay que llevar y en las preguntas.
 */
export const turcasYCaicos: DestinationGuide = {
  slug: "turcas-y-caicos",
  country: "Islas Turcas y Caicos",
  subregion: "Caribe",
  subhead:
    "Grace Bay, cayos de arena blanca y un mar turquesa poco profundo. De Providenciales, la isla de los hoteles, a Grand Turk y Salt Cay, donde pasan las ballenas jorobadas.",

  image: null,

  highlights: [
    {
      value: "Grace Bay",
      label: "arena blanca y agua turquesa",
      note: "Una de las playas más famosas del Caribe, con arrecifes a nado desde la orilla.",
    },
    {
      value: "Ni una bala",
      label: "en el equipaje",
      note: "Tener munición es delito, aunque sea una bala olvidada, y se castiga con cárcel.",
    },
    {
      value: "Ene–Abr",
      label: "ballenas jorobadas",
      note: "Pasan frente a Grand Turk y Salt Cay en su migración.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica, aunque muchos autos tienen el volante a la izquierda, como en Estados Unidos.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Las Islas Turcas y Caicos son un territorio británico de ultramar con sus propias reglas de entrada. Muchos pasaportes entran sin visa; otros la necesitan, y algunos pueden entrar con ciertas visas vigentes de Estados Unidos, Canadá o el Reino Unido. Verifica el tuyo.",
        "Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
      ],
    },
    {
      id: "municion",
      title: "Armas y munición: ni una bala",
      body: [
        "La ley de las islas castiga con cárcel la tenencia de armas o de munición sin permiso, y se aplica a turistas: alcanza con una sola bala olvidada en el bolsillo de una mochila. El equipaje pasa por escáner en el aeropuerto.",
        "Antes de hacer la maleta, revisa cada bolsillo, y sobre todo los bolsos que hayas usado para cazar, acampar o ir a un campo de tiro.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Se usa el dólar estadounidense. En Providenciales la tarjeta funciona en casi todos lados; en las otras islas conviene llevar efectivo.",
        "Es uno de los destinos más caros del Caribe: casi todo se importa, y muchas cuentas suman un impuesto y un cargo por servicio.",
      ],
    },
    {
      id: "otras-islas",
      title: "Las otras islas",
      body: [
        "Providenciales tiene casi todos los hoteles. North Caicos está a un ferry corto, y se une por un terraplén con Middle Caicos, la isla más grande y menos poblada. Grand Turk, la capital, Salt Cay y South Caicos están a un vuelo corto.",
        "Fuera de Providenciales hay pocos servicios: efectivo, medicamentos y lo esencial se resuelven antes de salir.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la temporada seca y alta, con brisa. De junio a octubre hace más calor, y el otoño es lo más lluvioso del año.",
        "La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "En Providenciales no hay buses de línea: se usan taxis, que cobran por persona, o un auto de alquiler. Se conduce por la izquierda.",
        "Entre islas se viaja en avioneta o en ferry.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena ni a la vista en el auto.",
        "En los hoteles de Providenciales, el agua sale de plantas desalinizadoras. En las otras islas, mejor embotellada.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["911"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Playas",
      score: 10,
      rationale: "Grace Bay y los cayos, de arena blanca y agua poco profunda.",
    },
    {
      dimension: "Buceo y snorkel",
      score: 8.5,
      rationale:
        "Arrecifes a nado desde la orilla y paredes de coral frente a Grand Turk.",
    },
    {
      dimension: "Islas remotas",
      score: 8,
      rationale:
        "Middle Caicos, South Caicos y Salt Cay, con muy pocos visitantes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "De los destinos más caros del Caribe.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos directos desde Norteamérica a Providenciales; a las otras islas, avioneta o ferry.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale: "Usa el dólar estadounidense.",
    },
  ],

  shines: [
    "Una de las playas más famosas del Caribe.",
    "Arrecifes a nado desde la orilla.",
    "Ballenas jorobadas en invierno, desde Grand Turk y Salt Cay.",
  ],

  costs: [
    "La ley de armas: una bala olvidada se castiga con cárcel.",
    "El precio: de los destinos más caros del Caribe.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco entre las islas. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares estadounidenses.",

  places: [
    {
      id: "grace-bay",
      name: "Grace Bay",
      region: "Providenciales",
      tag: "Playa y base",
      blurb:
        "Una playa larga de arena blanca y agua turquesa, con la mayoría de los hoteles y restaurantes de las islas y arrecifes a nado desde la orilla. Es la base del planificador.",
      coords: [21.7958, -72.1733],
      featured: true,
      image: null,
    },
    {
      id: "long-bay",
      name: "Long Bay",
      region: "Providenciales",
      tag: "Kitesurf",
      blurb:
        "Una playa de agua baja y viento constante, la preferida para el kitesurf, con menos gente que Grace Bay.",
      coords: [21.7699, -72.1563],
      image: null,
    },
    {
      id: "chalk-sound",
      name: "Chalk Sound y Sapodilla Bay",
      region: "Providenciales",
      tag: "Laguna turquesa",
      blurb:
        "Una laguna de color turquesa salpicada de islotes y, al lado, Sapodilla y Taylor Bay, playas de agua baja y calma, buenas con niños.",
      coords: [21.7441, -72.2898],
      image: null,
    },
    {
      id: "cayos-del-norte",
      name: "Los cayos del norte",
      region: "Caicos",
      tag: "Iguanas y cayos",
      blurb:
        "Little Water Cay, con sus iguanas de roca, y una cadena de cayos de arena hacia North Caicos. Se recorren en barco desde Providenciales.",
      coords: [21.8327, -72.1404],
      image: null,
    },
    {
      id: "north-caicos",
      name: "North Caicos",
      region: "Caicos",
      tag: "La isla verde",
      blurb:
        "La isla más verde, con lagunas de flamencos y playas vacías como Whitby, a un ferry corto de Providenciales.",
      coords: [21.9076, -71.9634],
      image: null,
    },
    {
      id: "middle-caicos",
      name: "Middle Caicos",
      region: "Caicos",
      tag: "Cuevas y acantilados",
      blurb:
        "La isla más grande y menos poblada, con las cuevas de Conch Bar y Mudjin Harbour, una playa al pie de los acantilados. Se llega por un terraplén desde North Caicos.",
      coords: [21.835, -71.79],
      image: null,
    },
    {
      id: "south-caicos",
      name: "South Caicos",
      region: "Caicos",
      tag: "Pesca y buceo",
      blurb:
        "Un puerto de pescadores, con salinas antiguas, paredes de coral para bucear y muy pocos visitantes.",
      coords: [21.4932, -71.5294],
      image: null,
    },
    {
      id: "grand-turk",
      name: "Grand Turk",
      region: "Turcas",
      tag: "La capital",
      blurb:
        "La capital, Cockburn Town, con casas coloniales, burros sueltos y una pared de coral a pocos metros de la costa. En invierno, las ballenas se ven desde la orilla.",
      coords: [21.4675, -71.1389],
      image: null,
    },
    {
      id: "salt-cay",
      name: "Salt Cay",
      region: "Turcas",
      tag: "Salinas y ballenas",
      blurb:
        "Una isla diminuta de salinas antiguas, calles de arena y carritos de golf. De enero a abril, el mejor lugar para ver ballenas.",
      coords: [21.3317, -71.2003],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Las Islas Turcas y Caicos son verano todo el año: ropa ligera, traje de baño, protector y repelente. Y antes de cerrar la maleta, revisa cada bolsillo: una sola bala olvidada se castiga con cárcel.",
    keyPoints: [
      "Calor todo el año, con brisa en invierno y más lluvia en otoño.",
      "Tener munición es delito, aunque sea una bala olvidada.",
      "Es uno de los destinos más caros del Caribe.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de las islas casi todo el año.",
      templado:
        "Camiseta y una capa ligera para las noches de invierno, con brisa.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En las Islas Turcas y Caicos no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa cada bolsillo del equipaje",
          body: "Mochilas, estuches y bolsos de caza o de campamento: que no quede ni una bala.",
        },
        {
          title: "Lleva efectivo a las otras islas",
          body: "En Providenciales la tarjeta funciona en casi todos lados; fuera, no siempre.",
        },
        {
          title: "Haz snorkel desde la orilla",
          body: "En The Bight y Smith's Reef, el arrecife empieza a pocos metros de la arena.",
        },
        {
          title: "Reserva el ferry o la avioneta con tiempo",
          body: "Hay pocos viajes por día a las otras islas.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de las islas lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No lleves armas ni munición",
          body: "Ni una bala: la ley no distingue el olvido, y la pena es de cárcel.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña.",
        },
        {
          title: "No alimentes a las iguanas",
          body: "En Little Water Cay se miran desde las pasarelas.",
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
          title: "Armas y munición",
          body: "Tener munición es delito, aunque sea una sola bala olvidada, y se castiga con cárcel. Revisa cada bolsillo de cada bolso antes de salir.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "Visa, si tu pasaporte la necesita",
          "Equipaje revisado: ni una bala, ni en el fondo de una mochila",
          "Seguro de viaje con cobertura médica",
          "Ferry o avioneta a las otras islas, reservados",
        ],
      },
      {
        id: "playa",
        title: "Playa y snorkel",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico del mar",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Snorkel propio, si tienes",
          "Calzado para el agua, para los cayos con piedras",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos",
          "Algo para las quemaduras de sol",
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
          "Chaleco salvavidas a su medida para los barcos, si el operador no tiene",
        ],
      },
    ],
    avoid: [
      {
        leave: "Munición, aunque sea una bala",
        why: "Es delito, y se castiga con cárcel aunque haya sido un olvido.",
        instead: "Revisar cada bolsillo antes de salir.",
      },
      {
        leave: "Abrigo",
        why: "En las islas no hay un mes frío.",
        instead: "Una capa ligera para las noches de invierno.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Los hoteles dan toallas de playa.",
        instead: "Nada, o una de microfibra.",
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
          "Depende del pasaporte. Muchos entran sin visa, otros la necesitan, y algunos pueden entrar con ciertas visas vigentes de Estados Unidos, Canadá o el Reino Unido. Verifica el tuyo.",
      },
      {
        question: "¿Qué pasa si llevo una bala en el equipaje sin saberlo?",
        answer:
          "Es delito igual: la ley castiga la tenencia de munición aunque haya sido un olvido, y hubo turistas detenidos por eso. Revisa cada bolsillo antes de salir.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer: "El dólar estadounidense.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la temporada seca y fuera de la de huracanes. De enero a abril, además, pasan las ballenas.",
      },
      {
        question: "¿Cómo se va a las otras islas?",
        answer:
          "En avioneta desde Providenciales, o en ferry a North Caicos. Middle Caicos se une a North Caicos por un terraplén.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En los hoteles de Providenciales sale de plantas desalinizadoras. En las otras islas, mejor embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
