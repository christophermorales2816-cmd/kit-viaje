import type { DestinationGuide } from "./types";

/**
 * Guía de República Dominicana.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el Caribe de todo incluido y el Caribe de moverse
 * por el país, que son dos viajes distintos. Y una sorpresa del motor: en
 * Constanza, a 1.200 metros, las madrugadas de invierno bajan de diez grados.
 */
export const republicaDominicana: DestinationGuide = {
  slug: "republica-dominicana",
  country: "República Dominicana",
  subregion: "Caribe",
  subhead:
    "Playas de todo incluido, la ciudad colonial más antigua de América y montañas con madrugadas frías. Caribe todo el año, con su temporada de huracanes.",

  image: null,

  highlights: [
    {
      value: "1.ª",
      label: "ciudad europea de América",
      note: "Santo Domingo es la más antigua que sigue habitada. Su Zona Colonial es patrimonio de la UNESCO.",
    },
    {
      value: "1.200 m",
      label: "en Constanza",
      note: "En el Caribe, sí: madrugadas de menos de diez grados en invierno.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El peso dominicano flota sin mercado paralelo. En zonas turísticas se aceptan dólares.",
    },
    {
      value: "Jun–Nov",
      label: "temporada de huracanes",
      note: "Con el pico entre agosto y octubre. De diciembre a abril es la mejor época.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El peso dominicano tiene un solo tipo de cambio. En Punta Cana y en zonas turísticas muchos precios aparecen en dólares y se aceptan, aunque pagar en pesos suele salir más barato.",
        "La cuenta de un restaurante incluye por ley un recargo por servicio, además del impuesto. Dejar algo más es costumbre si el servicio fue bueno.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para colmados, guaguas y motoconchos hace falta efectivo.",
      ],
    },
    {
      id: "dos-viajes",
      title: "Todo incluido o moverse: dos viajes distintos",
      body: [
        "Buena parte de los viajeros va a un resort de todo incluido en Punta Cana y no sale de ahí. Es un viaje válido, pero es otro: la valija es de playa y poco más.",
        "Moverse por el país —la Zona Colonial, Samaná, la costa norte, las montañas de Jarabacoa y Constanza— pide una valija más variada, incluido algo de abrigo para la montaña.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación más seca y fresca, fuera de la temporada de huracanes. Es también la temporada alta.",
        "De enero a marzo llegan las ballenas jorobadas a la bahía de Samaná.",
        "De mayo a noviembre hace más calor y llueve en chaparrones. La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre. En la costa norte, en cambio, los meses más lluviosos son de noviembre a enero.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Entre ciudades, los buses de empresas como las de primera clase son cómodos y baratos. Las guaguas locales llegan a todos lados, pero son lentas y llenas.",
        "En Santo Domingo hay metro y aplicaciones de transporte. En pueblos y playas, taxis y motoconchos, acordando el precio antes.",
        "Alquilar un auto da libertad para la costa norte y las montañas, aunque el tránsito es intenso.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en zonas concurridas y precios acordados antes de subir a un taxi o motoconcho.",
        "El agua de la canilla no es para tomar. Agua embotellada, que se consigue en todos lados.",
        "El sargazo, un alga que llega a algunas playas del este en ciertos meses, puede aparecer en grandes cantidades. Revisá los reportes antes de elegir playa.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Punta Cana, Samaná, Bayahíbe y Bahía de las Águilas. Caribe de primer nivel.",
    },
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "La Zona Colonial de Santo Domingo tiene la primera catedral y la primera universidad de América.",
    },
    {
      dimension: "Montaña y naturaleza",
      score: 7.5,
      rationale:
        "Jarabacoa y Constanza, con ríos, cascadas y el pico Duarte, el más alto del Caribe.",
    },
    {
      dimension: "Música y vida nocturna",
      score: 9,
      rationale:
        "Merengue y bachata en cada colmado y cada esquina. Se baila todas las noches.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Barato fuera de los resorts. El todo incluido tiene precios de otro país.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Buenos buses entre ciudades y vuelos directos desde todo el continente.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Un tipo de cambio que flota, sin mercado paralelo, y dólares aceptados en zonas turísticas.",
    },
  ],

  shines: [
    "Playa de primer nivel, con vuelos directos desde casi todo el continente.",
    "La Zona Colonial, donde empezó la historia europea en América.",
    "Montañas con clima fresco a pocas horas de la playa.",
  ],

  costs: [
    "La temporada de huracanes, de junio a noviembre.",
    "El sargazo en algunas playas del este, en ciertos meses.",
    "El todo incluido, que es caro y no muestra el país.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Constanza no pide lo mismo que Punta Cana. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "santo-domingo",
      name: "Santo Domingo",
      region: "Sur",
      tag: "Zona Colonial",
      blurb:
        "La capital, con la Zona Colonial más antigua de América, el malecón y la vida de una ciudad grande del Caribe. Es la base del planificador.",
      coords: [18.4861, -69.9312],
      featured: true,
      image: null,
    },
    {
      id: "punta-cana",
      name: "Punta Cana",
      region: "Este",
      tag: "Playas y resorts",
      blurb:
        "Kilómetros de playa de arena blanca con palmeras y resorts de todo incluido. Es el destino más visitado del país.",
      coords: [18.5601, -68.3725],
      image: null,
    },
    {
      id: "las-terrenas",
      name: "Las Terrenas y Samaná",
      region: "Noreste",
      tag: "Ballenas y cocoteros",
      blurb:
        "Un pueblo de playa en la península de Samaná, con cocoteros, cascadas y ballenas jorobadas en la bahía de enero a marzo.",
      coords: [19.311, -69.543],
      image: null,
    },
    {
      id: "puerto-plata",
      name: "Puerto Plata",
      region: "Costa norte",
      tag: "Teleférico y ámbar",
      blurb:
        "Una ciudad de la costa norte con casas victorianas, un teleférico que sube al monte Isabel de Torres y museo de ámbar.",
      coords: [19.7934, -70.6884],
      image: null,
    },
    {
      id: "cabarete",
      name: "Cabarete",
      region: "Costa norte",
      tag: "Kitesurf",
      blurb:
        "Una de las capitales mundiales del kitesurf, con viento constante y vida de pueblo de playa.",
      coords: [19.75, -70.4167],
      image: null,
    },
    {
      id: "jarabacoa",
      name: "Jarabacoa",
      region: "Cordillera Central",
      tag: "Ríos y montaña",
      blurb:
        "Un pueblo de montaña entre pinos y ríos, con rafting, cascadas y punto de partida hacia el pico Duarte.",
      coords: [19.1167, -70.6333],
      image: null,
    },
    {
      id: "constanza",
      name: "Constanza",
      region: "Cordillera Central",
      tag: "Valle frío",
      blurb:
        "Un valle agrícola a 1.200 metros con las madrugadas más frías del país: en invierno bajan de diez grados. Sorpresa garantizada en el Caribe.",
      coords: [18.9097, -70.7444],
      image: null,
    },
    {
      id: "bayahibe",
      name: "Bayahíbe",
      region: "Sureste",
      tag: "Isla Saona",
      blurb:
        "Un pueblo de pescadores con agua calma y la isla Saona enfrente. Buen buceo y menos multitud que Punta Cana.",
      coords: [18.3667, -68.8333],
      image: null,
    },
    {
      id: "pedernales",
      name: "Pedernales y Bahía de las Águilas",
      region: "Suroeste",
      tag: "Playa virgen",
      blurb:
        "En el extremo suroeste, una de las playas más vírgenes del Caribe, dentro de un parque nacional. Seco y caluroso.",
      coords: [18.0383, -71.7442],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "República Dominicana es Caribe todo el año al nivel del mar: ropa liviana, traje de baño, protector y repelente. Si vas a Jarabacoa o Constanza, sumá un polar y una campera: en invierno las madrugadas de Constanza bajan de diez grados. De diciembre a abril es la mejor época, fuera de la temporada de huracanes.",
    keyPoints: [
      "Calor todo el año en la costa, con más humedad de mayo a octubre.",
      "Las montañas de la Cordillera Central tienen noches frescas, y frías en Constanza en invierno.",
      "La temporada de huracanes va de junio a noviembre.",
      "Un viaje de todo incluido y un viaje por el país piden valijas distintas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector y repelente. Es el clima de toda la costa todo el año.",
      templado:
        "Remera y algo de manga larga. Es el clima de los días en Jarabacoa y Constanza.",
      fresco: "Buzo o polar para las noches de Jarabacoa y Constanza.",
      frio: "Una campera de abrigo para las madrugadas de invierno en Constanza y para subir al pico Duarte.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Un polar si vas a la montaña",
          body: "En Constanza y Jarabacoa las noches son frescas, y en invierno frías de verdad.",
        },
        {
          title: "Pagá en pesos fuera del resort",
          body: "En zonas turísticas aceptan dólares, pero en pesos casi siempre sale más barato.",
        },
        {
          title: "Revisá el sargazo antes de elegir playa",
          body: "En algunos meses llega a las playas del este. Hay reportes que ayudan a elegir.",
        },
        {
          title: "Acordá el precio antes de subir",
          body: "Taxis y motoconchos no tienen taxímetro. Acordar antes evita discusiones.",
        },
        {
          title: "Reservá con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
        {
          title: "Protector biodegradable",
          body: "Los arrecifes de Bayahíbe y Samaná lo agradecen.",
        },
      ],
      donts: [
        {
          title: "No asumas que todo el país es calor",
          body: "En Constanza las madrugadas de invierno bajan de diez grados.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada, que se consigue en todos lados.",
        },
        {
          title: "No cargues abrigo pesado para la playa",
          body: "En la costa no hay un mes frío.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
        },
        {
          title: "No reserves el Caribe en septiembre sin seguro",
          body: "Es el pico de la temporada de huracanes.",
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
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Seguí los avisos locales y preferí reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y remera con protección UV",
          "Protector solar biodegradable",
          "Ojotas",
          "Repelente para el atardecer",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "montana",
        title: "Montaña",
        notice: {
          tone: "info",
          title: "En el Caribe también hace frío",
          body: "Constanza está a 1.200 metros. En invierno, las madrugadas bajan de diez grados.",
        },
        summary: "Para Jarabacoa y Constanza",
        items: [
          "Polar o buzo abrigado",
          "Campera liviana",
          "Zapatillas que aguanten barro y ríos",
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
          "Protector solar de factor alto y remera con protección UV",
          "Repelente apto para chicos",
          "Un abrigo si van a la montaña",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado para la costa",
        why: "En la costa no hay un mes frío.",
        instead: "Solo un polar si vas a la montaña.",
      },
      {
        leave: "Jeans pesados",
        why: "Con la humedad del Caribe no se aguantan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Muchos dólares",
        why: "Fuera del resort, pagar en pesos sale más barato.",
        instead: "Pesos en efectivo y tarjeta.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector biodegradable.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Salvo alguna cena, no se usan.",
        instead: "Algo liviano y cómodo para salir.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Hoteles y resorts dan toallas de playa.",
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
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, fuera de la temporada de huracanes. De enero a marzo, ballenas en Samaná.",
      },
      {
        question: "¿Hace frío en algún lugar?",
        answer:
          "Sí: en Constanza, a 1.200 metros, las madrugadas de invierno bajan de diez grados. Llevá un polar si vas a la montaña.",
      },
      {
        question: "¿Puedo pagar en dólares?",
        answer:
          "En zonas turísticas sí, pero pagar en pesos casi siempre sale más barato.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "La cuenta ya incluye un recargo por servicio. Dejar algo más es costumbre si el servicio fue bueno.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No para tomar. Agua embotellada.",
      },
      {
        question: "¿Qué es el sargazo?",
        answer:
          "Un alga que en algunos meses llega a las playas del este. Hay reportes actualizados que ayudan a elegir playa.",
      },
      {
        question: "¿Vale la pena salir del resort?",
        answer:
          "Sí. La Zona Colonial, Samaná y las montañas muestran un país que el todo incluido no muestra.",
      },
    ],
  },
};
