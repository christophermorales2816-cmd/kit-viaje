import type { DestinationGuide } from "./types";

/**
 * Guía de El Salvador.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el segundo dolarizado, y el país más chico del
 * continente. De la capital a la playa de surf hay una hora y a la montaña,
 * dos: el mismo día puede pedir traje de baño y campera.
 */
export const elSalvador: DestinationGuide = {
  slug: "el-salvador",
  country: "El Salvador",
  subregion: "México y Centroamérica",
  subhead:
    "El país más chico del continente, con playas de surf, volcanes y pueblos de montaña a una o dos horas entre sí. Se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "US$",
      label: "es la moneda",
      note: "Dólar estadounidense: no hay cotización que seguir ni brecha que medir.",
    },
    {
      value: "1 hora",
      label: "de la capital al mar",
      note: "El país entero se cruza en un día. Playa, volcán y montaña caben en el mismo viaje corto.",
    },
    {
      value: "May–Oct",
      label: "lluvias de tarde",
      note: "La estación seca va de noviembre a abril, y es la mejor para recorrer.",
    },
    {
      value: "+20",
      label: "volcanes",
      note: "Algunos se suben en una mañana, como el de Santa Ana, con una laguna turquesa en el cráter.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Se paga en dólares",
      body: [
        "El Salvador usa el dólar estadounidense como moneda. No hay tipo de cambio que seguir: lo único que cambia el costo es lo que cobre tu banco por usar la tarjeta afuera.",
        "El bitcoin tuvo curso legal durante algunos años; hoy su aceptación es voluntaria y en la práctica todo se paga en dólares, en efectivo o con tarjeta.",
        "Llevá billetes chicos: en pupuserías, buses y puestos de playa no siempre hay cambio para billetes grandes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril es la estación seca: cielos despejados y la mejor época para todo, de las playas a los volcanes.",
        "De mayo a octubre llueve casi todas las tardes, a veces fuerte. Las mañanas suelen ser buenas, y para el surf algunas de las mejores olas llegan en esos meses.",
        "En la costa hace calor todo el año. En la Ruta de las Flores y en La Palma, arriba de los mil metros, las noches son frescas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "surf",
      title: "Un país de surf",
      body: [
        "La costa del Bálsamo, con El Tunco y El Zonte, tiene olas de nivel mundial a una hora del aeropuerto. Hay escuelas para aprender y olas para quien ya sabe.",
        "La arena de muchas playas es volcánica y oscura, y se calienta mucho al mediodía. Ojotas siempre.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "El país es tan chico que casi todo está a menos de dos o tres horas. Los shuttles turísticos conectan la capital, la costa y la Ruta de las Flores.",
        "Los buses locales son baratos y van a todos lados, pero son lentos. En la capital funcionan las aplicaciones de transporte.",
        "Para recorrer la Ruta de las Flores a tu ritmo, alquilar un auto es una buena opción.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad de América Latina: atención a las pertenencias en zonas concurridas y traslados por aplicación o pedidos por el alojamiento.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada.",
        "El sol de la costa pega fuerte y la arena oscura quema. Protector, gorro y ojotas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Surf y playas",
      score: 9,
      rationale:
        "Olas de nivel mundial a una hora de la capital, y playas tranquilas en el oriente.",
    },
    {
      dimension: "Volcanes y naturaleza",
      score: 8,
      rationale:
        "Volcanes que se suben en una mañana, lagos de cráter y la Ruta de las Flores.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "La pupusa es una institución nacional, y la feria gastronómica de Juayúa vale el viaje de fin de semana.",
    },
    {
      dimension: "Compacidad",
      score: 10,
      rationale: "Todo está cerca. Es el país donde un viaje corto rinde más.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Barato en comida y transporte, sin sorpresas en la conversión.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Distancias mínimas y shuttles turísticos, aunque los buses locales son lentos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale: "Se paga en dólares. No hay conversión que hacer.",
    },
  ],

  shines: [
    "Playa, volcán y pueblo de montaña en un mismo día.",
    "Olas de nivel mundial a una hora del aeropuerto.",
    "Pagar en dólares sin pensar en el cambio.",
  ],

  costs: [
    "La lluvia de tarde de mayo a octubre.",
    "La arena volcánica, que quema al mediodía.",
    "Los buses locales, lentos aunque las distancias sean cortas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Juayúa no pide lo mismo que El Tunco. Los precios están en dólares y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "san-salvador",
      name: "San Salvador",
      region: "Centro",
      tag: "Capital bajo el volcán",
      blurb:
        "Una capital a 670 metros al pie del volcán de San Salvador, con un centro histórico renovado. A una hora del mar. Es la base del planificador.",
      coords: [13.6929, -89.2182],
      featured: true,
      image: null,
    },
    {
      id: "el-tunco",
      name: "El Tunco",
      region: "Costa del Bálsamo",
      tag: "Surf y atardeceres",
      blurb:
        "El pueblo de surf más conocido del país, con una roca en el mar que le da nombre y una vida nocturna chica pero animada.",
      coords: [13.493, -89.383],
      image: null,
    },
    {
      id: "el-zonte",
      name: "El Zonte",
      region: "Costa del Bálsamo",
      tag: "Playa de surf",
      blurb:
        "Una playa de surf más tranquila que El Tunco, con buena ola de derecha y pocos alojamientos.",
      coords: [13.495, -89.438],
      image: null,
    },
    {
      id: "suchitoto",
      name: "Suchitoto",
      region: "Centro",
      tag: "Pueblo colonial y lago",
      blurb:
        "Un pueblo colonial de calles empedradas sobre el lago Suchitlán, con galerías de arte y talleres de añil.",
      coords: [13.9381, -89.0278],
      image: null,
    },
    {
      id: "juayua",
      name: "Juayúa y la Ruta de las Flores",
      region: "Occidente",
      tag: "Café y feria gastronómica",
      blurb:
        "Pueblos de montaña entre cafetales, cascadas y murales. La feria gastronómica de Juayúa, los fines de semana, es el plan clásico.",
      coords: [13.8411, -89.7456],
      image: null,
    },
    {
      id: "santa-ana",
      name: "Santa Ana",
      region: "Occidente",
      tag: "Volcán y catedral",
      blurb:
        "La segunda ciudad del país, con una catedral neogótica y el volcán de Santa Ana cerca, que se sube en una mañana.",
      coords: [13.9942, -89.5597],
      image: null,
    },
    {
      id: "coatepeque",
      name: "Lago de Coatepeque",
      region: "Occidente",
      tag: "Lago de cráter",
      blurb:
        "Un lago dentro de un cráter volcánico, de agua azul, con casas y restaurantes sobre la orilla.",
      coords: [13.8667, -89.55],
      image: null,
    },
    {
      id: "la-palma",
      name: "La Palma",
      region: "Norte",
      tag: "Montaña y artesanía",
      blurb:
        "Un pueblo de montaña cerca de la frontera con Honduras, conocido por su artesanía de colores. Fresco de noche todo el año.",
      coords: [14.3167, -89.1667],
      image: null,
    },
    {
      id: "el-cuco",
      name: "Playa El Cuco",
      region: "Oriente",
      tag: "Playa tranquila",
      blurb:
        "Una playa larga y tranquila del oriente, lejos del circuito del surf, con la bahía de Jiquilisco cerca.",
      coords: [13.1833, -88.1167],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "El Salvador es calor en la costa todo el año: ropa liviana, traje de baño, protector y ojotas. Para la Ruta de las Flores, La Palma o un volcán, sumá algo de manga larga y una campera liviana, porque arriba de los mil metros refresca. De mayo a octubre llueve casi todas las tardes, así que algo impermeable. Y llevá dólares en billetes chicos.",
    keyPoints: [
      "La costa es calor todo el año; la montaña, fresca de noche.",
      "De mayo a octubre llueve casi todas las tardes. Las mañanas suelen ser buenas.",
      "La arena volcánica de muchas playas quema al mediodía.",
      "Se paga en dólares: billetes chicos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector y ojotas. Es el clima de la costa y de la capital casi todo el año.",
      templado:
        "Remera y algo de manga larga. Es el clima de los pueblos de montaña de día.",
      fresco:
        "Buzo o polar para las noches de Juayúa, La Palma y la cima de los volcanes.",
      frio: "Casi no aparece. Un abrigo medio para la madrugada en la cima de un volcán.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "115-120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares en billetes chicos",
          body: "En pupuserías, buses y puestos de playa no siempre hay cambio.",
        },
        {
          title: "Ojotas para la arena volcánica",
          body: "La arena oscura de muchas playas quema al mediodía.",
        },
        {
          title: "Una campera liviana para la montaña",
          body: "En la Ruta de las Flores y en la cima de los volcanes refresca de verdad.",
        },
        {
          title: "Organizá el día temprano en temporada de lluvias",
          body: "Las mañanas suelen ser buenas y la lluvia llega de tarde.",
        },
        {
          title: "Probá la feria de Juayúa un fin de semana",
          body: "Es el plan gastronómico clásico del país, y se combina con la Ruta de las Flores.",
        },
        {
          title: "Protector y gorro para la costa",
          body: "El sol pega fuerte y con el agua no se siente.",
        },
      ],
      donts: [
        {
          title: "No lleves billetes grandes",
          body: "En muchos lugares no hay cambio para un billete de cincuenta o de cien.",
        },
        {
          title: "No camines descalzo por la arena al mediodía",
          body: "La arena volcánica se calienta muchísimo.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada.",
        },
        {
          title: "No cargues abrigo pesado",
          body: "Ni en la montaña hace frío de verdad. Una campera liviana alcanza.",
        },
        {
          title: "No subas un volcán sin agua",
          body: "La subida es corta pero el sol pega fuerte.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Playa y surf",
        notice: {
          tone: "warn",
          title: "La arena volcánica quema",
          body: "Muchas playas tienen arena oscura que se calienta mucho al mediodía. Ojotas siempre, y cuidado con los chicos.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y remera con protección UV",
          "Ojotas",
          "Protector solar de factor alto",
          "Gorro y anteojos de sol",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "montana",
        title: "Montaña y volcanes",
        notice: null,
        summary: "Para la Ruta de las Flores y las subidas",
        items: [
          "Campera liviana",
          "Zapatillas cómodas que aguanten tierra suelta",
          "Agua y algo para comer en la subida",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal y sales de rehidratación",
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
          "Ojotas: la arena quema",
          "Protector solar de factor alto y remera con protección UV",
          "Repelente apto para chicos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Billetes grandes",
        why: "En muchos lugares no hay cambio.",
        instead: "Dólares en billetes chicos.",
      },
      {
        leave: "Abrigo pesado",
        why: "Ni en la montaña hace frío de verdad.",
        instead: "Una campera liviana.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor de la costa no se aguantan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Zapatos de vestir",
        why: "La vida es de playa y de pueblo.",
        instead: "Ojotas y zapatillas cómodas.",
      },
      {
        leave: "El paraguas grande",
        why: "La lluvia de tarde es corta y una campera alcanza.",
        instead: "Una campera liviana con capucha.",
      },
      {
        leave: "Una valija enorme",
        why: "Los shuttles tienen poco espacio y el viaje es corto.",
        instead: "Un carry-on o una mochila.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito cambiar plata?",
        answer:
          "No. El Salvador usa el dólar estadounidense. Llevá billetes chicos.",
      },
      {
        question: "¿Se puede pagar con bitcoin?",
        answer:
          "Algunos lugares lo aceptan, pero ya no es obligatorio y en la práctica todo se paga en dólares.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 115-120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a abril, la estación seca. Para surf, algunas de las mejores olas llegan entre mayo y octubre.",
      },
      {
        question: "¿Hace frío en la montaña?",
        answer:
          "Fresco de noche, no frío. Una campera liviana alcanza para la Ruta de las Flores y La Palma.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No para tomar. Agua embotellada o filtrada.",
      },
      {
        question: "¿Se puede aprender a surfear?",
        answer:
          "Sí. En El Tunco y El Zonte hay escuelas para todos los niveles.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Chica. Con ropa liviana y un viaje que suele ser corto, un carry-on alcanza.",
      },
    ],
  },
};
