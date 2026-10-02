import type { DestinationGuide } from "./types";

/**
 * Guía de Nicaragua.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: lagos y volcanes en un Pacífico caluroso todo el
 * año, con las montañas del norte como única excepción templada, y una
 * moneda atada al dólar que convive con él.
 */
export const nicaragua: DestinationGuide = {
  slug: "nicaragua",
  country: "Nicaragua",
  subregion: "México y Centroamérica",
  subhead:
    "Lagos, volcanes y ciudades coloniales sobre un Pacífico caluroso todo el año. Las montañas del norte son lo único templado.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "lagos enormes",
      note: "El Cocibolca es el más grande de Centroamérica, con una isla de dos volcanes adentro.",
    },
    {
      value: "Abr",
      label: "el mes más caluroso",
      note: "Justo antes de las lluvias. En León la máxima pasa los treinta y cinco grados.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El córdoba está atado al dólar, y los dólares se aceptan en muchos lugares turísticos.",
    },
    {
      value: "Nov–Abr",
      label: "estación seca",
      note: "En el Pacífico. La costa caribe tiene una temporada seca más corta.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Nicaragua",
      body: [
        "El córdoba tiene un tipo de cambio atado al dólar, así que no hay sorpresas ni mercado paralelo. En lugares turísticos los precios aparecen en córdobas y en dólares, y se acepta cualquiera de los dos.",
        "Si pagás en dólares, el vuelto suele venir en córdobas. Llevá dólares en billetes chicos y en buen estado.",
        "La tarjeta funciona en hoteles y restaurantes de Granada, León y San Juan del Sur. Para buses, mercados y pueblos hace falta efectivo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril es la estación seca en el Pacífico, con cielos despejados. Marzo y abril son los meses más calurosos, sobre todo en León.",
        "De mayo a octubre llueve casi todas las tardes y el paisaje se pone verde. Los precios bajan y hay menos gente.",
        "La costa caribe y las Corn Islands llueven mucho más y tienen una estación seca corta, de febrero a abril.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "volcanes",
      title: "Volcanes",
      body: [
        "Nicaragua es una cadena de volcanes. En León se baja el Cerro Negro en tabla sobre la arena volcánica; en Masaya se mira dentro del cráter; en Ometepe se suben dos.",
        "Arriba de un volcán hace calor de día y el sol no perdona. Agua, gorro y protector, siempre.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los shuttles turísticos conectan Managua, Granada, León y San Juan del Sur. Son la forma más simple.",
        "Los buses locales son baratísimos y van a todos lados, pero son lentos y llenos.",
        "A Ometepe se llega en ferry desde San Jorge, y a las Corn Islands en avioneta desde Managua.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá los requisitos de ingreso para tu pasaporte: pueden pedir formularios previos o un registro anticipado según la nacionalidad.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada.",
        "Con el calor de la costa, la deshidratación llega rápido. Agua siempre y sombra al mediodía.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Volcanes y lagos",
      score: 9,
      rationale:
        "Ometepe, el Masaya, la laguna de Apoyo y el Cerro Negro. Paisajes volcánicos de todo tipo.",
    },
    {
      dimension: "Ciudades coloniales",
      score: 8,
      rationale:
        "Granada y León son dos de las ciudades coloniales más lindas de Centroamérica, y rivales de siempre.",
    },
    {
      dimension: "Playas y surf",
      score: 7.5,
      rationale:
        "Olas consistentes en el Pacífico sur y el Caribe de las Corn Islands.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Gallo pinto, quesillo y fritanga. Sencilla, rica y barata.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "De los países más baratos de la región para un viajero.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Los shuttles resuelven el circuito principal, pero fuera de él todo es más lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale: "Un córdoba atado al dólar, que también circula.",
    },
  ],

  shines: [
    "Una isla con dos volcanes en medio de un lago.",
    "Granada y León, dos ciudades coloniales a una hora de distancia.",
    "Precios que rinden como en pocos lugares de la región.",
  ],

  costs: [
    "El calor de marzo y abril, fuerte sobre todo en León.",
    "Los requisitos de ingreso, que conviene revisar antes de reservar.",
    "La lluvia de la costa caribe, mucho más larga que en el Pacífico.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Matagalpa no pide lo mismo que León. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "managua",
      name: "Managua",
      region: "Pacífico",
      tag: "Capital junto al lago",
      blurb:
        "La capital, a orillas del lago Xolotlán, y la puerta de entrada aérea. Muchos la usan de paso hacia Granada o León. Es la base del planificador.",
      coords: [12.115, -86.2362],
      featured: true,
      image: null,
    },
    {
      id: "granada",
      name: "Granada",
      region: "Pacífico",
      tag: "Colonial frente al lago",
      blurb:
        "Una ciudad colonial de casas de colores sobre el lago Cocibolca, con isletas para recorrer en lancha y el volcán Mombacho enfrente.",
      coords: [11.9344, -85.956],
      image: null,
    },
    {
      id: "leon",
      name: "León",
      region: "Pacífico",
      tag: "Iglesias y volcanes",
      blurb:
        "La ciudad universitaria y la más calurosa, con la catedral más grande de Centroamérica y el Cerro Negro cerca para bajarlo en tabla.",
      coords: [12.4379, -86.878],
      image: null,
    },
    {
      id: "san-juan-del-sur",
      name: "San Juan del Sur",
      region: "Pacífico sur",
      tag: "Bahía y surf",
      blurb:
        "Un pueblo de pescadores en una bahía del Pacífico, base para las playas de surf de la zona.",
      coords: [11.2529, -85.8706],
      image: null,
    },
    {
      id: "ometepe",
      name: "Isla de Ometepe",
      region: "Lago Cocibolca",
      tag: "Dos volcanes en un lago",
      blurb:
        "Una isla formada por dos volcanes en medio del lago más grande de Centroamérica. Se recorre en moto o en bici.",
      coords: [11.5, -85.5833],
      image: null,
    },
    {
      id: "laguna-de-apoyo",
      name: "Laguna de Apoyo",
      region: "Pacífico",
      tag: "Laguna de cráter",
      blurb:
        "Una laguna de agua tibia dentro de un cráter, entre Granada y Masaya. Para nadar y no hacer nada.",
      coords: [11.92, -86.04],
      image: null,
    },
    {
      id: "matagalpa",
      name: "Matagalpa",
      region: "Norte",
      tag: "Café de montaña",
      blurb:
        "Una ciudad de montaña rodeada de fincas de café y bosque nublado. Fresca de noche, y lluviosa.",
      coords: [12.9256, -85.9175],
      image: null,
    },
    {
      id: "esteli",
      name: "Estelí",
      region: "Norte",
      tag: "Tabaco y reservas",
      blurb:
        "La ciudad del tabaco, con reservas naturales cerca como el cañón de Somoto. Más fresca que el Pacífico.",
      coords: [13.0919, -86.3538],
      image: null,
    },
    {
      id: "corn-islands",
      name: "Corn Islands",
      region: "Caribe",
      tag: "Islas del Caribe",
      blurb:
        "Dos islas en el Caribe, con arrecifes, playas tranquilas y cultura creole. Se llega en avioneta desde Managua.",
      coords: [12.1694, -83.0418],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Nicaragua es calor todo el año en el Pacífico: ropa liviana, protector, gorro y mucha agua, sobre todo en marzo y abril. Para Matagalpa y Estelí, sumá algo de manga larga y una campera liviana. De mayo a octubre llueve casi todas las tardes, así que algo impermeable. Si podés elegir, de noviembre a febrero el clima es más amable.",
    keyPoints: [
      "El Pacífico es calor todo el año, y marzo y abril son los meses más duros.",
      "Las montañas del norte son lo único templado del país.",
      "De mayo a octubre llueve casi todas las tardes.",
      "Revisá los requisitos de ingreso para tu pasaporte antes de reservar.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y clara, gorro, protector y agua. En León el calor de abril es serio.",
      templado:
        "Remera y algo de manga larga, con una campera liviana para la noche. Es el clima de Matagalpa y Estelí.",
      fresco:
        "Buzo o polar para las noches de la montaña en temporada de lluvias.",
      frio: "Casi no aparece en Nicaragua.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Ropa liviana y clara",
          body: "Con el calor del Pacífico, lo que no respira se vuelve insoportable.",
        },
        {
          title: "Dólares chicos y en buen estado",
          body: "Se aceptan en muchos lugares turísticos, y el vuelto viene en córdobas.",
        },
        {
          title: "Botella reutilizable siempre a mano",
          body: "Con este calor se toma mucha más agua de lo que uno calcula.",
        },
        {
          title: "Revisá los requisitos de ingreso",
          body: "Según tu pasaporte pueden pedir formularios previos. Mejor saberlo antes de reservar.",
        },
        {
          title: "Shuttles para el circuito principal",
          body: "Granada, León, San Juan del Sur y Managua se conectan bien con shuttles turísticos.",
        },
        {
          title: "Calzado cerrado para los volcanes",
          body: "Para bajar el Cerro Negro o subir en Ometepe, zapatillas que aguanten arena y piedra.",
        },
      ],
      donts: [
        {
          title: "No subestimes el calor de abril",
          body: "En León la máxima pasa los treinta y cinco grados. Moverse temprano y tarde.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada.",
        },
        {
          title: "No cargues abrigo",
          body: "Ni en la montaña hace frío de verdad.",
        },
        {
          title: "No dependas de la tarjeta fuera de las ciudades",
          body: "En buses, mercados y pueblos se paga en efectivo.",
        },
        {
          title: "No vayas a las Corn Islands con valija grande",
          body: "La avioneta tiene límite de equipaje.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Calor y sol",
        notice: {
          tone: "warn",
          title: "Marzo y abril son muy calurosos",
          body: "En el Pacífico, y sobre todo en León, la máxima puede pasar los treinta y cinco grados. Agua, sombra y nada de actividad fuerte al mediodía.",
        },
        summary: "Lo que pide el Pacífico",
        items: [
          "Ropa liviana y clara",
          "Gorro de ala ancha y anteojos de sol",
          "Protector solar de factor alto",
          "Botella reutilizable",
          "Sales de rehidratación",
        ],
      },
      {
        id: "volcanes",
        title: "Volcanes",
        notice: null,
        summary: "Lo que pide una subida",
        items: [
          "Zapatillas cerradas",
          "Agua y algo para comer",
          "Gorro y protector",
          "Linterna frontal si subís de madrugada",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal",
          "Repelente de insectos",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Gorro, protector y mucha agua: los chicos se deshidratan antes",
          "Repelente apto para chicos",
          "Entretenimiento para los traslados",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "Ni en la montaña hace frío de verdad.",
        instead: "Una campera liviana.",
      },
      {
        leave: "Ropa oscura",
        why: "Absorbe el calor del Pacífico.",
        instead: "Colores claros.",
      },
      {
        leave: "Jeans pesados",
        why: "Con este calor no se aguantan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Billetes grandes",
        why: "En buses, mercados y pueblos no hay cambio.",
        instead: "Dólares y córdobas en billetes chicos.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Calles empedradas, volcanes y playa.",
        instead: "Zapatillas y ojotas.",
      },
      {
        leave: "Una valija enorme",
        why: "Shuttles, ferries y avionetas tienen poco espacio.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero: estación seca y menos calor que en marzo y abril.",
      },
      {
        question: "¿Puedo pagar en dólares?",
        answer: "En lugares turísticos, sí. El vuelto suele venir en córdobas.",
      },
      {
        question: "¿Hace mucho calor?",
        answer:
          "Sí, en el Pacífico todo el año, y sobre todo en marzo y abril. Las montañas del norte son más frescas.",
      },
      {
        question: "¿Cómo llego a Ometepe?",
        answer: "En ferry desde San Jorge, cerca de Rivas.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No para tomar. Agua embotellada o filtrada.",
      },
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "Los requisitos de ingreso para tu pasaporte, que pueden incluir formularios previos.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Chica o mediana. Con ropa liviana alcanza, y los traslados tienen poco espacio.",
      },
    ],
  },
};
