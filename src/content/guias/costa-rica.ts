import type { DestinationGuide } from "./types";

/**
 * Guía de Costa Rica.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos costas que no comparten temporada. El Pacífico
 * tiene una estación seca clara; el Caribe llueve casi todo el año y sus
 * meses buenos son justo los peores del Pacífico.
 */
export const costaRica: DestinationGuide = {
  slug: "costa-rica",
  country: "Costa Rica",
  subregion: "México y Centroamérica",
  subhead:
    "Volcanes, bosque nuboso y dos costas que no comparten temporada. Naturaleza bien cuidada y bien organizada, al precio más alto de Centroamérica.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "costas, 2 calendarios",
      note: "El Pacífico es seco de diciembre a abril; el Caribe tiene sus mejores meses en marzo y en septiembre-octubre.",
    },
    {
      value: "25 %",
      label: "del país protegido",
      note: "Parques nacionales y reservas cubren alrededor de un cuarto del territorio.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El colón flota sin mercado paralelo, y los dólares se aceptan en casi todos lados.",
    },
    {
      value: "Época verde",
      label: "de mayo a noviembre",
      note: "Así le dicen a la temporada de lluvias. Menos gente, más verde y precios más bajos.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Costa Rica",
      body: [
        "El colón tiene un solo tipo de cambio. Los dólares se aceptan en casi todos los lugares turísticos y muchos precios se publican directamente en dólares.",
        "La cuenta de un restaurante ya incluye el servicio y el impuesto, que figuran aparte en el ticket. La propina adicional es opcional.",
        "La tarjeta funciona en casi todos lados. Para buses, sodas chicas y puestos de fruta conviene tener colones.",
      ],
    },
    {
      id: "dos-costas",
      title: "Dos costas, dos calendarios",
      body: [
        "En el Pacífico —Guanacaste, Nicoya, Manuel Antonio— la estación seca va de diciembre a abril, y de mayo a noviembre llueve casi todas las tardes, más fuerte en septiembre y octubre.",
        "El Caribe —Puerto Viejo, Tortuguero— llueve casi todo el año, pero tiene dos ventanas más secas: marzo y septiembre-octubre. Justo cuando el Pacífico está en su peor momento.",
        "Si vas en septiembre u octubre, el Caribe es la mejor apuesta. Si vas de diciembre a abril, el Pacífico.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la temporada alta: seca en el Pacífico y en el valle central, con precios más altos y reservas con anticipación.",
        "La época verde, de mayo a noviembre, tiene mañanas de sol y lluvia de tarde, el paisaje más verde y precios más bajos. Para ver tortugas en Tortuguero, de julio a octubre.",
        "En el bosque nuboso de Monteverde hace fresco todo el año, y hay neblina y llovizna casi siempre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "El país es chico, pero las rutas de montaña son lentas: un trayecto corto en el mapa puede llevar cuatro o cinco horas.",
        "Los shuttles turísticos conectan los destinos principales, y alquilar un auto da mucha libertad, aunque algunos caminos piden doble tracción.",
        "A Tortuguero solo se llega en lancha o en avioneta.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier país: no dejes nada a la vista en el auto, y atención a las pertenencias en la playa.",
        "En muchas playas del Pacífico hay corrientes de resaca fuertes. Nadá donde haya guardavidas o donde nade la gente local.",
        "En casi todo el país el agua de la canilla es potable. En zonas rurales o de playa, preguntá en el alojamiento.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Naturaleza y biodiversidad",
      score: 10,
      rationale:
        "Volcanes, bosque nuboso, selva y dos costas, con fauna que se ve sin buscarla.",
    },
    {
      dimension: "Aventura al aire libre",
      score: 9.5,
      rationale:
        "Tirolesas, rafting, surf, trekking y puentes colgantes, todo bien organizado.",
    },
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "Pacífico de surf y atardeceres, y un Caribe de selva hasta el mar.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "El casado y el gallo pinto, sencillos y ricos. Fruta tropical en todos lados.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Bien hecho y confiable, pero el país más caro de Centroamérica.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Shuttles, autos de alquiler e infraestructura turística en todos lados. Las rutas de montaña son lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Un tipo de cambio y dólares aceptados en casi todos lados.",
    },
  ],

  shines: [
    "Ver fauna sin buscarla: perezosos, monos, tucanes.",
    "Turismo de naturaleza bien hecho y bien cuidado.",
    "Poder elegir costa según el mes.",
  ],

  costs: [
    "Los precios más altos de Centroamérica.",
    "Las rutas de montaña, lentas aunque las distancias sean cortas.",
    "La lluvia de la época verde en el Pacífico, fuerte en septiembre y octubre.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Monteverde no pide lo mismo que Tamarindo. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "san-jose",
      name: "San José",
      region: "Valle Central",
      tag: "Capital templada",
      blurb:
        "La capital, en un valle a más de mil metros con clima templado todo el año, y el punto de partida hacia todo el país. Es la base del planificador.",
      coords: [9.9281, -84.0907],
      featured: true,
      image: null,
    },
    {
      id: "la-fortuna",
      name: "La Fortuna y el Arenal",
      region: "Zona Norte",
      tag: "Volcán y aguas termales",
      blurb:
        "Un pueblo al pie del volcán Arenal, con aguas termales, cascadas y puentes colgantes. Llueve buena parte del año.",
      coords: [10.471, -84.6453],
      image: null,
    },
    {
      id: "monteverde",
      name: "Monteverde",
      region: "Cordillera de Tilarán",
      tag: "Bosque nuboso",
      blurb:
        "Bosque nuboso a 1.400 metros, con neblina casi permanente, puentes colgantes y quetzales con suerte. Fresco todo el año.",
      coords: [10.3, -84.8167],
      image: null,
    },
    {
      id: "manuel-antonio",
      name: "Manuel Antonio",
      region: "Pacífico central",
      tag: "Parque y playa",
      blurb:
        "Un parque nacional chico donde la selva llega a playas de arena blanca, con monos y perezosos a la vista.",
      coords: [9.3923, -84.137],
      image: null,
    },
    {
      id: "puerto-viejo",
      name: "Puerto Viejo",
      region: "Caribe sur",
      tag: "Caribe afrocaribeño",
      blurb:
        "Un pueblo caribeño de cultura afrocaribeña, con playas de selva y el parque Cahuita cerca. Sus mejores meses son marzo y septiembre-octubre.",
      coords: [9.656, -82.753],
      image: null,
    },
    {
      id: "tamarindo",
      name: "Tamarindo",
      region: "Guanacaste",
      tag: "Playas secas",
      blurb:
        "El pueblo de playa más desarrollado de Guanacaste, con surf para todos los niveles y la región más seca del país.",
      coords: [10.2993, -85.8371],
      image: null,
    },
    {
      id: "santa-teresa",
      name: "Santa Teresa",
      region: "Península de Nicoya",
      tag: "Surf y selva",
      blurb:
        "Playas de surf con selva detrás en la punta de la península de Nicoya. Caminos de tierra y mucho polvo en la estación seca.",
      coords: [9.645, -85.169],
      image: null,
    },
    {
      id: "tortuguero",
      name: "Tortuguero",
      region: "Caribe norte",
      tag: "Canales y tortugas",
      blurb:
        "Canales en la selva y una playa de anidación de tortugas marinas. Solo se llega en lancha o en avioneta.",
      coords: [10.5425, -83.5021],
      image: null,
    },
    {
      id: "uvita",
      name: "Uvita",
      region: "Pacífico sur",
      tag: "La cola de ballena",
      blurb:
        "Una playa con forma de cola de ballena y ballenas jorobadas que pasan dos veces al año. Más tranquila que el Pacífico central.",
      coords: [9.1617, -83.74],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Costa Rica pide ropa liviana y algo impermeable casi siempre. Para las playas, calor todo el año; para San José, templado; para Monteverde, fresco y con neblina, así que un polar. Elegí la costa según el mes: el Pacífico de diciembre a abril, el Caribe en marzo y en septiembre-octubre. En época verde, mañanas de sol y lluvia de tarde.",
    keyPoints: [
      "El Pacífico y el Caribe no comparten temporada. Elegí costa según el mes.",
      "Monteverde es fresco y húmedo todo el año: polar y campera impermeable.",
      "En la época verde llueve casi todas las tardes; las mañanas suelen ser buenas.",
      "Una campera impermeable liviana se usa en todo el país.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, traje de baño, protector y repelente. En la selva, manga larga liviana al atardecer.",
      templado:
        "Remera y algo de manga larga, con una campera liviana. Es el clima de San José todo el año.",
      fresco:
        "Polar y campera impermeable. Es el clima de Monteverde, con neblina y llovizna casi siempre.",
      frio: "Solo en la cima de los volcanes más altos, de madrugada. Un abrigo medio alcanza.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Elegí la costa según el mes",
          body: "Pacífico de diciembre a abril; Caribe en marzo y en septiembre-octubre.",
        },
        {
          title: "Campera impermeable liviana siempre",
          body: "Se usa en Monteverde, en el Arenal y en cualquier tarde de época verde.",
        },
        {
          title: "Polar para Monteverde",
          body: "El bosque nuboso es fresco y húmedo todo el año, aunque vengas de la playa.",
        },
        {
          title: "Calzado que aguante barro",
          body: "Los senderos de los parques suelen estar embarrados. Zapatillas de trekking o sandalias de río.",
        },
        {
          title: "Binoculares si te gustan los animales",
          body: "La fauna está en todos lados, pero muchas veces arriba de un árbol.",
        },
        {
          title: "Reservá con tiempo en temporada alta",
          body: "De diciembre a abril, y sobre todo en Semana Santa y fin de año, todo se llena.",
        },
      ],
      donts: [
        {
          title: "No vayas al Pacífico en octubre esperando sol",
          body: "Es el mes más lluvioso en esa costa. El Caribe, en cambio, está en uno de sus mejores momentos.",
        },
        {
          title: "No calcules los traslados por el mapa",
          body: "Las rutas de montaña son lentas. Un trayecto corto puede llevar cinco horas.",
        },
        {
          title: "No dejes nada a la vista en el auto",
          body: "Ni en el estacionamiento de un parque.",
        },
        {
          title: "No nades donde no nada nadie",
          body: "En muchas playas del Pacífico hay corrientes de resaca fuertes.",
        },
        {
          title: "No alimentes a los animales",
          body: "Está prohibido y les hace mal. Mirá y fotografiá.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y humedad",
        notice: {
          tone: "info",
          title: "Mañanas de sol, tardes de lluvia",
          body: "En la época verde, lo que se hace al aire libre conviene hacerlo de mañana.",
        },
        summary: "Lo que se usa casi todos los días",
        items: [
          "Campera impermeable liviana",
          "Bolsa seca para el teléfono y los documentos",
          "Ropa de secado rápido",
          "Calzado que aguante barro",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Corrientes de resaca",
          body: "Muchas playas del Pacífico tienen corrientes fuertes. Nadá donde haya guardavidas o donde nade la gente local.",
        },
        summary: "Lo específico de las costas",
        items: [
          "Traje de baño y remera con protección UV",
          "Protector solar biodegradable",
          "Ojotas",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "bosque",
        title: "Bosque nuboso",
        notice: null,
        summary: "Para Monteverde y la montaña",
        items: [
          "Polar o buzo abrigado",
          "Pantalón largo liviano",
          "Binoculares",
          "Linterna para los tours nocturnos",
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
          "Algo para el mareo en las rutas de montaña",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Repelente y protector aptos para chicos",
          "Algo para el mareo en los traslados",
          "Una muda extra: entre lluvia y barro, se usa",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "Ni en Monteverde hace frío de verdad.",
        instead: "Un polar y una campera impermeable.",
      },
      {
        leave: "Jeans pesados",
        why: "Con la humedad no se secan nunca.",
        instead: "Pantalones livianos de secado rápido.",
      },
      {
        leave: "El paraguas grande",
        why: "En los senderos estorba.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Zapatos de vestir",
        why: "El país es de senderos, barro y playa.",
        instead: "Zapatillas de trekking y sandalias de río.",
      },
      {
        leave: "Protector solar común para el mar",
        why: "Daña los arrecifes del Caribe.",
        instead: "Protector biodegradable.",
      },
      {
        leave: "Muchos colones",
        why: "Los dólares y la tarjeta se aceptan en casi todos lados.",
        instead: "Algo de efectivo en colones para buses y sodas.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en un viaje de naturaleza.",
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
          "De diciembre a abril para el Pacífico. Para el Caribe, marzo y septiembre-octubre.",
      },
      {
        question: "¿Vale la pena ir en época verde?",
        answer:
          "Sí, si te organizás de mañana: hay menos gente, todo está verde y los precios bajan. Evitá el Pacífico en septiembre y octubre.",
      },
      {
        question: "¿Puedo pagar en dólares?",
        answer:
          "En casi todos los lugares turísticos. Para buses y lugares chicos, mejor colones.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "La cuenta ya incluye el servicio. La propina adicional es opcional.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En casi todo el país sí. En zonas rurales o de playa, preguntá en el alojamiento.",
      },
      {
        question: "¿Hace frío en Monteverde?",
        answer:
          "Fresco, no frío, y húmedo. Un polar y una campera impermeable alcanzan.",
      },
      {
        question: "¿Conviene alquilar auto?",
        answer:
          "Da mucha libertad, pero algunos caminos piden doble tracción y las rutas de montaña son lentas. Los shuttles turísticos son una buena alternativa.",
      },
    ],
  },
};
