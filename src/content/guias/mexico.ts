import type { DestinationGuide } from "./types";

/**
 * Guía de México.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer corredor del hemisferio norte, con las
 * estaciones al revés que el Cono Sur, y una capital de altura con noches
 * frías a dos horas de vuelo de un Caribe que nunca baja de veinte grados.
 */
export const mexico: DestinationGuide = {
  slug: "mexico",
  country: "México",
  subregion: "México y Centroamérica",
  subhead:
    "Una capital de altura con noches frías, un Caribe que nunca baja de veinte grados y la cocina más rica del continente. Hemisferio norte: enero es invierno.",

  image: null,

  highlights: [
    {
      value: "2.240 m",
      label: "en Ciudad de México",
      note: "Días templados y noches frías en invierno. A dos horas de vuelo, Cancún no baja de veinte grados.",
    },
    {
      value: "Jun–Oct",
      label: "lluvias de tarde",
      note: "En el centro del país llueve casi todas las tardes. En el Caribe, coincide con la temporada de huracanes.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El peso mexicano flota sin mercado paralelo. En zonas turísticas también se aceptan dólares.",
    },
    {
      value: "Dic–Feb",
      label: "es invierno",
      note: "Hemisferio norte: las estaciones van al revés que en el Cono Sur.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en México",
      body: [
        "Hay un solo tipo de cambio. En Cancún, Tulum y Los Cabos muchos precios aparecen también en dólares, pero pagar en pesos casi siempre sale más barato.",
        "La tarjeta funciona en ciudades y zonas turísticas. Para mercados, puestos de comida y transporte local hace falta efectivo.",
        "La propina es parte del precio en la práctica: en restaurantes se deja entre el diez y el quince por ciento.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "México está en el hemisferio norte: diciembre y enero son invierno. En la capital eso significa días templados y noches frías, a veces cerca de cero.",
        "De noviembre a abril es la estación seca en casi todo el país, con cielos despejados. Es la mejor época para la capital, Oaxaca y el sur.",
        "De junio a octubre llueve casi todas las tardes en el centro y el sur, normalmente un chaparrón fuerte y corto. En el Caribe y el Pacífico es también la temporada de huracanes, más intensa entre agosto y octubre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "altura",
      title: "La capital está alta",
      body: [
        "Ciudad de México está a 2.240 metros, y San Cristóbal de las Casas a 2.200. Se nota al subir escaleras el primer día, y en las noches de invierno, que son frías aunque el día haya sido agradable.",
        "El aire seco y la altura hacen que el sol queme más de lo que se siente. Protector y agua, aunque haga fresco.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Es un país enorme. Entre regiones, el avión es lo más práctico y los vuelos internos son frecuentes.",
        "Los buses de larga distancia de primera clase son cómodos y puntuales, y sirven bien para trayectos de hasta seis u ocho horas.",
        "En las ciudades funcionan las aplicaciones de transporte. En la capital, el metro es enorme y barato, aunque en hora pico se llena.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en el metro y en zonas concurridas, y taxis por aplicación o de sitio.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada, que se consigue en todos lados.",
        "El sargazo, un alga que llega a las playas del Caribe, puede aparecer en grandes cantidades en algunos meses. Si vas por la playa, revisá los reportes antes de elegir dónde quedarte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Patrimonio de la humanidad y se nota: de un puesto de tacos a un restaurante de autor, se come extraordinariamente bien.",
    },
    {
      dimension: "Historia y arqueología",
      score: 10,
      rationale:
        "Teotihuacan, Chichén Itzá, Palenque, Monte Albán y cientos de sitios más. Pocos países tienen tanto.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "El Caribe de Quintana Roo y el Pacífico de Puerto Vallarta y Los Cabos. Para todos los estilos.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 9.5,
      rationale:
        "La capital es una de las ciudades más intensas del mundo en museos, arte y vida de barrio.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Muy buena fuera de los destinos de playa más conocidos, que tienen precios de otro país.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Vuelos internos frecuentes, buenos buses y mucha infraestructura turística.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Un tipo de cambio que flota, sin mercado paralelo y con precios estables.",
    },
  ],

  shines: [
    "Comer muy bien en cualquier esquina y a cualquier precio.",
    "Ruinas prehispánicas que en otros países serían la atracción principal.",
    "Una capital que alcanza para un viaje entero.",
  ],

  costs: [
    "Cancún, Tulum y Los Cabos, con precios de otro país.",
    "La temporada de huracanes en el Caribe y el Pacífico.",
    "Las distancias, que obligan a volar entre regiones.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: San Cristóbal de las Casas no pide lo mismo que Mérida. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "ciudad-de-mexico",
      name: "Ciudad de México",
      region: "Centro",
      tag: "Megaciudad en altura",
      blurb:
        "Una de las ciudades más grandes del mundo, a 2.240 metros, con museos de primer nivel, barrios para caminar y una cocina que justifica el viaje. Es la base del planificador.",
      coords: [19.4326, -99.1332],
      featured: true,
      image: null,
    },
    {
      id: "oaxaca",
      name: "Oaxaca",
      region: "Sur",
      tag: "Cocina y mezcal",
      blurb:
        "Una ciudad colonial en un valle templado, con mercados, mole y mezcal, y Monte Albán a la vuelta. Sol casi todo el año fuera de las lluvias.",
      coords: [17.0732, -96.7266],
      image: null,
    },
    {
      id: "cancun",
      name: "Cancún",
      region: "Caribe",
      tag: "Mar turquesa",
      blurb:
        "El Caribe mexicano en su versión más desarrollada: hoteles sobre la playa, mar turquesa y aeropuerto internacional. Puerta a la Riviera Maya.",
      coords: [21.1619, -86.8515],
      image: null,
    },
    {
      id: "tulum",
      name: "Tulum",
      region: "Caribe",
      tag: "Ruinas frente al mar",
      blurb:
        "Una ciudad maya amurallada sobre un acantilado frente al Caribe, rodeada de cenotes. El destino de playa más caro de la península.",
      coords: [20.2114, -87.4654],
      image: null,
    },
    {
      id: "merida",
      name: "Mérida",
      region: "Península de Yucatán",
      tag: "Cenotes y casonas",
      blurb:
        "La capital de Yucatán, con casonas coloniales, cocina propia y cenotes y ruinas mayas a una hora. El calor de abril y mayo es fuerte.",
      coords: [20.9674, -89.5926],
      image: null,
    },
    {
      id: "san-cristobal-de-las-casas",
      name: "San Cristóbal de las Casas",
      region: "Sur",
      tag: "Montaña chiapaneca",
      blurb:
        "Un pueblo colonial a 2.200 metros en las montañas de Chiapas, con comunidades indígenas y mercados. Las noches son frías todo el año.",
      coords: [16.737, -92.6376],
      image: null,
    },
    {
      id: "guanajuato",
      name: "Guanajuato",
      region: "Bajío",
      tag: "Callejones y túneles",
      blurb:
        "Una ciudad minera colonial en una quebrada, con callejones, túneles y casas de colores. Seca y soleada, fresca en invierno.",
      coords: [21.019, -101.2574],
      image: null,
    },
    {
      id: "puerto-vallarta",
      name: "Puerto Vallarta",
      region: "Pacífico",
      tag: "Bahía de Banderas",
      blurb:
        "Un pueblo de pescadores que creció entre la sierra y el Pacífico, sobre una bahía con ballenas en invierno. Seco de noviembre a mayo.",
      coords: [20.6534, -105.2253],
      image: null,
    },
    {
      id: "los-cabos",
      name: "Los Cabos",
      region: "Baja California",
      tag: "Desierto y mar",
      blurb:
        "La punta de la península de Baja California, donde el desierto llega al mar. Casi no llueve, y es de los destinos más caros del país.",
      coords: [22.8905, -109.9167],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "México está en el hemisferio norte: en diciembre y enero la capital tiene días templados y noches frías, así que llevá capas y una campera. El Caribe y el Pacífico son calor todo el año, con lluvias y huracanes de junio a octubre. Si podés elegir, de noviembre a abril es la estación seca en casi todo el país.",
    keyPoints: [
      "Las estaciones van al revés que en el Cono Sur: diciembre y enero son invierno.",
      "Ciudad de México y San Cristóbal de las Casas tienen noches frías en invierno por la altura.",
      "De junio a octubre llueve casi todas las tardes en el centro y el sur, en chaparrones cortos.",
      "En el Caribe y el Pacífico, la temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector y repelente. En la península de Yucatán la humedad hace que se sienta más calor.",
      templado:
        "Remera y algo de manga larga, con una campera liviana para la noche. Es el clima de los días de la capital casi todo el año.",
      fresco:
        "Buzo o polar y campera. Las noches de la capital en invierno lo piden.",
      frio: "Campera de abrigo para las noches de invierno en la capital y en San Cristóbal de las Casas, que pueden acercarse a cero.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "127 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá capas para la capital",
          body: "En invierno el mediodía es agradable y la noche fría. Una campera liviana y un buzo cubren las dos cosas.",
        },
        {
          title: "Paraguas o campera para las tardes de lluvia",
          body: "De junio a octubre llueve casi todas las tardes en el centro. Es un chaparrón corto: con algo a mano no te arruina el día.",
        },
        {
          title: "Pagá en pesos aunque te ofrezcan dólares",
          body: "En zonas turísticas aceptan dólares, pero al cambio del comercio casi siempre sale más caro.",
        },
        {
          title: "Llevá efectivo para la comida de la calle",
          body: "Los puestos de tacos y los mercados, que es donde mejor se come, funcionan en efectivo.",
        },
        {
          title: "Revisá el sargazo antes de elegir playa",
          body: "En algunos meses llega en grandes cantidades al Caribe. Hay reportes actualizados que ayudan a elegir dónde quedarse.",
        },
        {
          title: "Protector solar aunque haga fresco",
          body: "En la capital el sol de altura quema más de lo que se siente.",
        },
      ],
      donts: [
        {
          title: "No asumas que diciembre es verano",
          body: "Es invierno: en la capital las noches son frías.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, que se consigue en todos lados.",
        },
        {
          title: "No reserves el Caribe en septiembre sin seguro",
          body: "Es el pico de la temporada de huracanes. Si vas, que la reserva se pueda cambiar.",
        },
        {
          title: "No cruces el país por tierra en un viaje corto",
          body: "Las distancias son enormes. Entre regiones, el avión ahorra días.",
        },
        {
          title: "No dejes la propina afuera de la cuenta",
          body: "En restaurantes se espera entre el diez y el quince por ciento.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "capas",
        title: "Ropa para la capital",
        notice: {
          tone: "info",
          title: "La altura enfría las noches",
          body: "Ciudad de México está a 2.240 metros. En invierno, el día es templado y la noche fría.",
        },
        summary: "Lo que cubre un día de invierno en la capital",
        items: [
          "Remera y algo de manga larga",
          "Buzo o polar",
          "Campera liviana",
          "Paraguas chico si vas de junio a octubre",
        ],
      },
      {
        id: "playa",
        title: "Caribe y Pacífico",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Seguí los avisos locales y preferí reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la playa",
        items: [
          "Protector solar biodegradable: muchos cenotes y arrecifes lo exigen",
          "Traje de baño y ojotas",
          "Repelente",
          "Bolsa impermeable para el teléfono",
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
          "Capas para las noches de la capital",
          "Entretenimiento offline para vuelos y traslados largos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano en invierno",
        why: "En la capital y en San Cristóbal las noches de diciembre y enero son frías.",
        instead: "Capas y una campera.",
      },
      {
        leave: "Abrigo pesado para la playa",
        why: "En el Caribe y el Pacífico no hay un mes frío.",
        instead: "Solo una campera liviana para el aire acondicionado.",
      },
      {
        leave: "Protector solar común para los cenotes",
        why: "Muchos cenotes y arrecifes exigen protector biodegradable, o directamente nada.",
        instead: "Protector biodegradable o remera con protección UV.",
      },
      {
        leave: "Muchos dólares",
        why: "Pagar en pesos casi siempre sale más barato.",
        instead: "Pesos en efectivo y tarjeta.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Se camina mucho, sobre piedra y en ruinas.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Jeans pesados para la península",
        why: "Con el calor húmedo de Yucatán no se aguantan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en el metro conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 127 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a abril, la estación seca. En la capital, las noches de diciembre y enero son frías.",
      },
      {
        question: "¿Hace frío en Ciudad de México?",
        answer:
          "En invierno las noches pueden acercarse a cero, aunque el día sea agradable. Capas y una campera alcanzan.",
      },
      {
        question: "¿Cuándo es la temporada de huracanes?",
        answer:
          "De junio a noviembre en el Caribe y el Pacífico, con el pico entre agosto y octubre.",
      },
      {
        question: "¿Puedo pagar en dólares?",
        answer:
          "En zonas turísticas sí, pero casi siempre sale más caro que pagar en pesos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No para tomar. Agua embotellada o filtrada.",
      },
      {
        question: "¿Cuánto se deja de propina?",
        answer: "En restaurantes, entre el diez y el quince por ciento.",
      },
      {
        question: "¿Qué es el sargazo?",
        answer:
          "Un alga que en algunos meses llega en grandes cantidades a las playas del Caribe. Hay reportes actualizados que ayudan a elegir dónde quedarse.",
      },
    ],
  },
};
