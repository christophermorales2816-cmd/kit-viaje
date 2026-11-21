import type { DestinationGuide } from "./types";

/**
 * Guía de las Islas Caimán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Un territorio británico de ultramar que cumple el criterio de 16.2 (spec,
 * 22.8): moneda y reglas de entrada propias, y se viaja a él como a un país.
 *
 * Lo que este país aporta: una moneda que vale más que el dólar
 * estadounidense, por paridad fija, con precios —de los más altos del
 * Caribe— en KYD y con centavos. Y dos islas pequeñas, Caimán Brac y
 * Pequeño Caimán, que son de lo más remoto y tranquilo de la región.
 */
export const islasCaiman: DestinationGuide = {
  slug: "islas-caiman",
  country: "Islas Caimán",
  subregion: "Caribe",
  subhead:
    "Seven Mile Beach, mantarrayas en un banco de arena en medio del mar y paredes de coral que caen a pique. Tres islas: una animada y dos casi vacías.",

  image: null,

  highlights: [
    {
      value: "Stingray City",
      label: "mantarrayas en un banco de arena",
      note: "Se nada entre decenas de mantarrayas, con el agua a la cintura, en medio del North Sound.",
    },
    {
      value: "1 KYD",
      label: "vale más que un dólar",
      note: "Por paridad fija. El dólar estadounidense se acepta en todos lados, pero rinde menos.",
    },
    {
      value: "3 islas",
      label: "Gran Caimán, Caimán Brac y Pequeño Caimán",
      note: "Las dos pequeñas, a menos de una hora de avioneta, tienen pocos habitantes y mucho buceo.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica, como el críquet. El volante va a la derecha.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Las Islas Caimán son un territorio británico de ultramar con sus propias reglas de entrada. Muchos pasaportes entran sin visa; otros la necesitan, y algunos pueden entrar con ciertas visas vigentes de Estados Unidos, Canadá o el Reino Unido. Verifica el tuyo.",
        "Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar de las Islas Caimán vale más que el estadounidense, por paridad fija. Los precios pueden estar en cualquiera de los dos: pregunta siempre cuál. El cambio suele llegar en moneda local.",
        "Es uno de los destinos más caros del Caribe: casi todo se importa. La tarjeta funciona en todos lados, y muchas cuentas suman un cargo por servicio.",
      ],
    },
    {
      id: "islas-hermanas",
      title: "Caimán Brac y Pequeño Caimán",
      body: [
        "Las islas hermanas están a menos de una hora de avioneta de Gran Caimán. Caimán Brac tiene acantilados, cuevas y escalada; Pequeño Caimán, pocos habitantes, muchas iguanas y la pared de Bloody Bay, de las mejores del mundo para bucear.",
        "Tienen pocos servicios y casi todo se reserva con el alojamiento: efectivo, medicamentos y lo esencial se resuelven antes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la temporada seca y alta. De mayo a noviembre hace más calor y llueve en chaparrones.",
        "La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "En Gran Caimán hay minibuses públicos que recorren las rutas principales, y taxis con tarifas fijas. Se conduce por la izquierda.",
        "A las islas hermanas se vuela en avioneta desde George Town.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena.",
        "El agua corriente es potable: sale de plantas desalinizadoras.",
        "El manzanillo es un árbol de playa venenoso: su savia quema la piel. No conviene refugiarse debajo cuando llueve.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Buceo",
      score: 10,
      rationale:
        "Paredes de coral que caen al abismo, barcos hundidos y la pared de Bloody Bay.",
    },
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "Seven Mile Beach, de arena blanca y agua calma, y Starfish Point.",
    },
    {
      dimension: "Islas remotas",
      score: 8.5,
      rationale:
        "Caimán Brac y Pequeño Caimán, casi vacías, a media hora de avioneta.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "De los destinos más caros del Caribe.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Vuelos directos desde Norteamérica, todo funciona y con tarjeta.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en todos lados.",
    },
  ],

  shines: [
    "Uno de los mejores lugares del mundo para bucear.",
    "Nadar entre mantarrayas en un banco de arena.",
    "Islas hermanas casi vacías.",
  ],

  costs: [
    "El precio: de los destinos más caros del Caribe.",
    "Las islas hermanas, con pocos servicios.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco entre las tres islas. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares de las Islas Caimán.",

  places: [
    {
      id: "george-town",
      name: "George Town",
      region: "Gran Caimán",
      tag: "Capital y puerto",
      blurb:
        "La capital, con el puerto de cruceros, el museo nacional y la salida de los barcos de buceo. Es la base del planificador.",
      coords: [19.2869, -81.3674],
      featured: true,
      image: null,
    },
    {
      id: "seven-mile-beach",
      name: "Seven Mile Beach",
      region: "Gran Caimán",
      tag: "Playa larga",
      blurb:
        "Una playa larga de arena blanca y agua calma, con la mayoría de los hoteles y restaurantes de la isla.",
      coords: [19.3359, -81.3848],
      image: null,
    },
    {
      id: "west-bay",
      name: "West Bay",
      region: "Gran Caimán",
      tag: "Tortugas",
      blurb:
        "El extremo oeste, con el centro de tortugas, las rocas negras de Hell y calas para el snorkel.",
      coords: [19.3747, -81.4158],
      image: null,
    },
    {
      id: "rum-point",
      name: "Rum Point y North Side",
      region: "Gran Caimán",
      tag: "Stingray City",
      blurb:
        "La costa norte, tranquila, con la playa de Rum Point y la salida de los barcos a Stingray City.",
      coords: [19.3714, -81.2717],
      image: null,
    },
    {
      id: "starfish-point",
      name: "Starfish Point",
      region: "Gran Caimán",
      tag: "Estrellas de mar",
      blurb:
        "Una playa de agua poco profunda donde se ven estrellas de mar en la arena. Se miran sin sacarlas del agua.",
      coords: [19.3561, -81.2775],
      image: null,
    },
    {
      id: "bodden-town",
      name: "Bodden Town",
      region: "Gran Caimán",
      tag: "Primera capital",
      blurb:
        "La primera capital de la isla, con su costa sur tranquila, casas de huéspedes y menos turismo.",
      coords: [19.2828, -81.2506],
      image: null,
    },
    {
      id: "east-end",
      name: "East End",
      region: "Gran Caimán",
      tag: "Costa salvaje",
      blurb:
        "El extremo este, con los géiseres de agua que salen entre las rocas, el jardín botánico cerca y buceo en barcos hundidos.",
      coords: [19.3011, -81.1103],
      image: null,
    },
    {
      id: "caiman-brac",
      name: "Caimán Brac",
      region: "Islas hermanas",
      tag: "Acantilados",
      blurb:
        "Una isla de acantilados, cuevas y escalada, con buceo en un barco hundido. Remota y tranquila.",
      coords: [19.7167, -79.8],
      image: null,
    },
    {
      id: "pequeno-caiman",
      name: "Pequeño Caimán",
      region: "Islas hermanas",
      tag: "Pared de Bloody Bay",
      blurb:
        "Pocos habitantes, más iguanas que personas y una de las paredes de coral más famosas del mundo.",
      coords: [19.68, -80.05],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Las Islas Caimán son verano todo el año: ropa ligera, traje de baño, protector y repelente. En invierno, una capa ligera para la noche. Si vas a las islas hermanas, resuelve antes lo esencial.",
    keyPoints: [
      "Calor todo el año, con más lluvia de mayo a noviembre.",
      "Es uno de los destinos más caros del Caribe.",
      "Las islas hermanas tienen pocos servicios.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de las islas casi todo el año.",
      templado: "Camiseta y una capa ligera para las noches de invierno.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En las Islas Caimán no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pregunta en qué dólares es el precio",
          body: "El local vale más que el estadounidense, y la diferencia suma.",
        },
        {
          title: "Ve a Stingray City temprano",
          body: "Antes de que lleguen los barcos de los cruceros.",
        },
        {
          title: "Reserva la avioneta a las islas hermanas con tiempo",
          body: "Hay pocos vuelos y pocos asientos.",
        },
        {
          title: "Bucea con operadores con licencia",
          body: "Las paredes de coral son profundas: con guía y equipo revisado.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de las tres islas lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No saques a las estrellas de mar del agua",
          body: "Se mueren en minutos fuera del agua.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña.",
        },
        {
          title: "No te refugies bajo un manzanillo",
          body: "Su savia quema la piel, también cuando gotea con la lluvia.",
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
          body: "Muchos pasaportes entran sin visa; otros la necesitan. Algunos entran con ciertas visas vigentes de Estados Unidos, Canadá o el Reino Unido.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "Visa, si tu pasaporte la necesita",
          "Seguro de viaje con cobertura médica y de buceo",
          "Avioneta a las islas hermanas, reservada",
        ],
      },
      {
        id: "playa",
        title: "Playa y buceo",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico del mar",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Certificado de buceo, si vas a bucear",
          "Snorkel propio, si tienes",
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
        leave: "Abrigo",
        why: "En las islas no hay un mes frío.",
        instead: "Una capa ligera para las noches de invierno.",
      },
      {
        leave: "Muchos dólares estadounidenses en efectivo",
        why: "Rinden menos que la moneda local, y la tarjeta funciona en todos lados.",
        instead: "Una tarjeta sin cargos en el exterior.",
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
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en todos lados, pero el dólar local vale más: pregunta en qué moneda está cada precio.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la temporada seca y fuera de la de huracanes.",
      },
      {
        question: "¿Qué es Stingray City?",
        answer:
          "Un banco de arena en medio del North Sound donde se nada entre mantarrayas, con el agua a la cintura. Se llega en barco desde la costa norte.",
      },
      {
        question: "¿Vale la pena ir a las islas hermanas?",
        answer:
          "Sí, para bucear y para estar lejos de todo. Se llega en avioneta en media hora.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí: sale de plantas desalinizadoras.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
