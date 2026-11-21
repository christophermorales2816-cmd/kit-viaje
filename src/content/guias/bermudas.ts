import type { DestinationGuide } from "./types";

/**
 * Guía de Bermudas.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Un territorio británico de ultramar que cumple el criterio de 16.2 (spec,
 * 22.8). Va en Norteamérica y no en el Caribe: está en el Atlántico, frente a
 * las Carolinas, y la ONU lo pone ahí.
 *
 * Lo que este país aporta: una isla de playa con invierno. De diciembre a
 * marzo hace fresco y sopla el viento, y la guía lo dice antes que nada,
 * porque quien llega pensando en el Caribe arma mal la maleta. Y la única
 * guía donde quien visita no puede alquilar un auto común.
 */
export const bermudas: DestinationGuide = {
  slug: "bermudas",
  country: "Bermudas",
  subregion: "Norteamérica",
  subhead:
    "Playas de arena rosa, casas pastel con techos blancos y un pueblo colonial patrimonio de la humanidad, en medio del Atlántico. No es el Caribe: en invierno refresca.",

  image: null,

  highlights: [
    {
      value: "Arena rosa",
      label: "en las playas de la costa sur",
      note: "El color viene de los restos de un organismo diminuto que vive en el arrecife.",
    },
    {
      value: "Sin auto",
      label: "de alquiler para visitantes",
      note: "Se alquilan miniautos eléctricos o motos, y hay buses y ferris.",
    },
    {
      value: "1 = 1",
      label: "dólar de Bermudas y estadounidense",
      note: "Por paridad fija. Los dos circulan, pero el cambio suele llegar en moneda local.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica, con un límite de velocidad bajo en toda la isla.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Bermudas es un territorio británico de ultramar con sus propias reglas de entrada. Muchos pasaportes entran sin visa; otros la necesitan, y algunos pueden entrar con ciertas visas vigentes de Estados Unidos, Canadá o el Reino Unido. Verifica el tuyo.",
        "Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
      ],
    },
    {
      id: "clima",
      title: "No es el Caribe",
      body: [
        "Bermudas está en el Atlántico, frente a las Carolinas. De mayo a octubre es verano, con calor húmedo y el agua tibia. De diciembre a marzo hace fresco, con viento y lluvias cortas, y el mar está frío para la mayoría.",
        "La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Quienes visitan no pueden alquilar un auto común. Se alquilan miniautos eléctricos de dos plazas o motos, y se conduce por la izquierda, despacio y con casco en moto.",
        "Los buses rosados y azules y los ferris unen casi toda la isla, con pases de uno o varios días.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar de Bermudas vale lo mismo que el estadounidense, por paridad fija, y los dos se aceptan en todos lados. El cambio suele llegar en moneda local.",
        "Es uno de los destinos más caros del mundo: casi todo se importa, y muchas cuentas suman un cargo por servicio.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las normales: atención a las pertenencias y cuidado en las carreteras, que son angostas, con curvas y casi sin espacio a los costados.",
        "Las casas recogen el agua de lluvia en sus techos blancos escalonados. En los hoteles, el agua corriente suele ser potable; si dudas, pregunta.",
        "Fuera de la playa no se anda en traje de baño: en la ciudad y en los pueblos se considera de mala educación.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 9,
      rationale: "Arena rosa y calas entre rocas en la costa sur.",
    },
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "St. George's, uno de los pueblos ingleses más antiguos de América, patrimonio de la humanidad.",
    },
    {
      dimension: "Clima para playa",
      score: 6,
      rationale: "Verano de mayo a octubre; en invierno, fresco y con viento.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "De los destinos más caros del mundo.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Vuelos directos desde la costa este de Norteamérica, y buses y ferris que unen casi todo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en todos lados.",
    },
  ],

  shines: [
    "Playas de arena rosa.",
    "Un pueblo colonial patrimonio de la humanidad.",
    "Una isla pequeña que se recorre en bus y en ferry.",
  ],

  costs: [
    "El precio: de los destinos más caros del mundo.",
    "Sin auto de alquiler: miniautos eléctricos, motos, bus o ferry.",
    "El invierno, fresco y ventoso para la playa.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco en toda la isla. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares de Bermudas.",

  places: [
    {
      id: "hamilton",
      name: "Hamilton",
      region: "Pembroke",
      tag: "Capital",
      blurb:
        "La capital, con las casas pastel de Front Street, el puerto y la terminal de buses y ferris. Es la base del planificador.",
      coords: [32.2939, -64.7828],
      featured: true,
      image: null,
    },
    {
      id: "st-georges",
      name: "St. George's",
      region: "St. George's",
      tag: "Patrimonio de la humanidad",
      blurb:
        "Uno de los pueblos ingleses más antiguos de América, con calles coloniales, fuertes junto al mar y Tobacco Bay a un paseo.",
      coords: [32.3808, -64.6778],
      image: null,
    },
    {
      id: "dockyard",
      name: "Royal Naval Dockyard",
      region: "Sandys",
      tag: "Fortaleza y museo",
      blurb:
        "Una antigua base naval británica en el extremo oeste, con el museo nacional, tiendas y el puerto de los cruceros.",
      coords: [32.3274, -64.8339],
      image: null,
    },
    {
      id: "somerset",
      name: "Somerset",
      region: "Sandys",
      tag: "Pueblo tranquilo",
      blurb:
        "Un pueblo del oeste con calas tranquilas, el parque de Hog Bay y un puente levadizo diminuto, de los más pequeños del mundo.",
      coords: [32.3096, -64.8625],
      image: null,
    },
    {
      id: "horseshoe-bay",
      name: "Horseshoe Bay",
      region: "Southampton",
      tag: "Arena rosa",
      blurb:
        "La playa más famosa de la isla, una media luna de arena rosa, con un sendero por la costa que pasa por calas entre rocas.",
      coords: [32.2539, -64.8243],
      image: null,
    },
    {
      id: "elbow-beach",
      name: "Elbow Beach",
      region: "Paget",
      tag: "Playa cerca de la capital",
      blurb:
        "Una playa larga de arena rosa a pocos minutos de Hamilton, con arrecifes para el snorkel cerca de la orilla.",
      coords: [32.2698, -64.7671],
      image: null,
    },
    {
      id: "spittal-pond",
      name: "Spittal Pond",
      region: "Smith's",
      tag: "Reserva natural",
      blurb:
        "La reserva natural más grande de la isla, con un sendero sobre los acantilados y aves migratorias en invierno.",
      coords: [32.3101, -64.7259],
      image: null,
    },
    {
      id: "flatts",
      name: "Flatts",
      region: "Parroquia de Hamilton",
      tag: "Acuario",
      blurb:
        "Un pueblo junto a una ensenada, con el acuario, museo y zoológico de la isla: el mejor plan con niños.",
      coords: [32.3226, -64.7368],
      image: null,
    },
    {
      id: "crystal-caves",
      name: "Crystal Caves",
      region: "Parroquia de Hamilton",
      tag: "Cuevas",
      blurb:
        "Cuevas con lagos subterráneos de agua transparente, que se recorren por pasarelas, cerca del aeropuerto.",
      coords: [32.3436, -64.7019],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bermudas no es el Caribe: de mayo a octubre, ropa de verano y traje de baño; de diciembre a marzo, capas y una chaqueta ligera contra el viento. Todo el año, calzado cómodo para caminar y subir a los buses.",
    keyPoints: [
      "Verano de mayo a octubre; invierno fresco y ventoso.",
      "Quienes visitan no pueden alquilar un auto común.",
      "Es uno de los destinos más caros del mundo.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el verano, de mayo a octubre.",
      templado: "Camiseta de día y una capa ligera para la noche y el viento.",
      fresco:
        "Capas y una chaqueta ligera contra el viento: el invierno de la isla es fresco y húmedo.",
      frio: "En Bermudas no hace frío de verdad, pero el viento de invierno se siente: una chaqueta y un suéter.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Compra un pase de transporte",
          body: "Sirve para los buses y los ferris, y sale más barato que pagar cada viaje.",
        },
        {
          title: "Pregunta qué incluye la cuenta",
          body: "Muchos restaurantes suman un cargo por servicio.",
        },
        {
          title: "Camina por la costa sur",
          body: "Entre Horseshoe Bay y Warwick Long Bay hay un sendero con calas.",
        },
        {
          title: "Usa casco en moto",
          body: "Es obligatorio, y las carreteras son angostas.",
        },
        {
          title: "Lleva una capa si vas en invierno",
          body: "El viento del Atlántico se siente, sobre todo de noche.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No cuentes con alquilar un auto",
          body: "Quienes visitan no pueden: miniautos eléctricos, motos, bus o ferry.",
        },
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "En la ciudad y en los pueblos se considera de mala educación.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña.",
        },
        {
          title: "No subestimes el sol de verano",
          body: "Con la brisa no se siente, y quema igual.",
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
          "Seguro de viaje con cobertura médica",
          "Licencia de conducir, si vas a alquilar un miniauto",
        ],
      },
      {
        id: "playa",
        title: "Playa y verano",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "De mayo a octubre",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias y calzado para el agua",
          "Snorkel propio, si tienes",
        ],
      },
      {
        id: "invierno",
        title: "Invierno",
        notice: null,
        summary: "De diciembre a marzo",
        items: [
          "Chaqueta ligera contra el viento",
          "Un suéter o un polar fino",
          "Pantalón largo",
          "Paraguas plegable",
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
          "Una capa de abrigo para el ferry y las noches de invierno",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "El invierno es fresco, no frío.",
        instead: "Capas y una chaqueta ligera contra el viento.",
      },
      {
        leave: "Jeans pesados",
        why: "En verano, con el calor húmedo, no se aguantan.",
        instead: "Pantalones ligeros, y uno largo para el invierno.",
      },
      {
        leave: "Tacones altos",
        why: "Las calles y los senderos de la costa tienen subidas y piedras.",
        instead: "Calzado cómodo y sandalias.",
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
        question: "¿Bermudas está en el Caribe?",
        answer:
          "No: está en el Atlántico, frente a las Carolinas. Por eso tiene un invierno fresco, de diciembre a marzo.",
      },
      {
        question: "¿Puedo alquilar un auto?",
        answer:
          "No: quienes visitan no pueden alquilar autos comunes. Se alquilan miniautos eléctricos o motos, y hay buses y ferris.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer: "Sí, en todos lados: valen lo mismo que el dólar de Bermudas.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre para la playa; de diciembre a marzo, para caminar, con menos gente.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En los hoteles suele ser potable. Las casas recogen el agua de lluvia en sus techos: si dudas, pregunta.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
