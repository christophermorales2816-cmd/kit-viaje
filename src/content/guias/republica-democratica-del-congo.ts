import type { DestinationGuide } from "./types";

/**
 * Guía de la República Democrática del Congo.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: el caso de Camboya y Zimbabue en África Central.
 * La moneda es el franco congoleño, pero al viajero se le cobra en dólares
 * casi todo, así que los precios van en USD y el corredor sigue en CDF, que
 * es lo que la guía explica: el dato de su portada son los dólares, y que los
 * billetes viejos se rechazan. La vacuna de la fiebre amarilla es obligatoria
 * para todos. Las ciudades del planificador son Kinshasa, el Congo Central
 * hasta el Atlántico y Lubumbashi; ninguna está en el este ni en las
 * provincias que las recomendaciones desaconsejan.
 */
export const republicaDemocraticaDelCongo: DestinationGuide = {
  slug: "republica-democratica-del-congo",
  country: "República Democrática del Congo",
  subregion: "África Central",
  subhead:
    "El río Congo frente a Kinshasa, la rumba en vivo, los bonobos de Lola ya Bonobo, las cataratas de Zongo y el camino al Atlántico. Casi todo se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "Dólares",
      label: "para casi todo, y francos para el vuelto",
      note: "Hoteles, restaurantes y casi todo lo que paga un viajero se cobra en dólares, en billetes nuevos, sin marcas y de las series recientes: los viejos o manchados se rechazan. El franco congoleño queda para las compras chicas.",
    },
    {
      value: "Bonobos",
      label: "en Lola ya Bonobo, el único santuario del mundo para ellos",
      note: "Los bonobos viven solo en el Congo. El santuario, en las afueras de Kinshasa, recibe a los huérfanos de la caza y del tráfico.",
    },
    {
      value: "Rumba",
      label: "congoleña, patrimonio de la humanidad",
      note: "La música de Kinshasa, que se escucha en vivo en los bares de Matonge y que la UNESCO declaró patrimonio inmaterial.",
    },
    {
      value: "Río Congo",
      label: "el más profundo del mundo, frente a Kinshasa",
      note: "Kinshasa y Brazzaville se miran de una orilla a la otra: son las capitales más cercanas del mundo, después de Roma y el Vaticano.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a la RD del Congo",
      body: [
        "Casi todos los pasaportes necesitan visa, que se tramita antes de viajar, online o en un consulado; suelen pedir la reserva del hotel o una carta de invitación. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "La RD del Congo pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, vengan de donde vengan, y lo controla al llegar. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Llevá copias: hay controles en las rutas y en la ciudad.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en la RD del Congo",
      body: [
        "La moneda es el franco congoleño, pero al viajero se le cobra en dólares casi todo: hoteles, restaurantes, transporte y excursiones.",
        "Llevá los dólares desde casa, en billetes nuevos, sin marcas ni roturas y de las series recientes: los demás se rechazan. Los francos sirven para el vuelto y las compras chicas.",
        "La tarjeta funciona en pocos hoteles grandes de Kinshasa y Lubumbashi, a veces con recargo. Si una terminal te ofrece cobrarte en tu moneda, elegí dólares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y una estación seca",
      body: [
        "Kinshasa y el oeste tienen calor húmedo todo el año, con lluvias fuertes de octubre a mayo y una temporada seca, más fresca y nublada, de junio a septiembre.",
        "Hacia el Atlántico, en Matadi, Boma y Muanda, llueve menos; Muanda, sobre la costa, es lo más seco.",
        "Lubumbashi, en el sur y a más de mil doscientos metros, tiene un invierno seco de noches frías, de mayo a agosto, y lluvias de noviembre a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la temporada seca en Kinshasa y el Congo Central, con días nublados y algo más frescos. Es la mejor época para el camino al Atlántico.",
        "Para Lubumbashi, de mayo a octubre, con el invierno seco.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por la RD del Congo",
      body: [
        "Entre Kinshasa y Lubumbashi se vuela: no hay un camino práctico por tierra. Lubumbashi tiene una hora más que Kinshasa.",
        "De Kinshasa al Atlántico, por Kisantu, Mbanza-Ngungu, Matadi y Boma, va una ruta asfaltada; conviene hacerla con chofer.",
        "El tránsito de Kinshasa es muy lento: autos contratados por el hotel o aplicaciones como Yango. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte de la República Democrática del Congo, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son Kinshasa, el Congo Central hasta el Atlántico y Lubumbashi. Ninguna está en el este —Kivu del Norte, Kivu del Sur, Ituri—, donde están Goma, Bukavu y los parques de los gorilas, ni en las otras provincias que las recomendaciones desaconsejan.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Kinshasa, Boma, la primera capital, y la historia del río y de la colonia.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Fufu, pondu, pescado del río a la brasa, chikwangue y mucha cerveza local.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "El río Congo, sus rápidos y cataratas, la selva y la costa atlántica.",
    },
    {
      dimension: "Playas",
      score: 3,
      rationale: "Una costa corta, en Muanda; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Todo en dólares, y caro para lo que ofrece.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Visa previa, controles, tránsito pesado y distancias que solo se hacen en avión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale: "El viajero paga en dólares, aunque el franco pierda valor.",
    },
  ],

  shines: [
    "El río Congo, el más profundo del mundo.",
    "La música de Kinshasa.",
    "Los bonobos, que no viven en ningún otro país.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Todo en dólares, y caro.",
    "Visa previa, vacuna obligatoria y controles.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Kinshasa en julio que Lubumbashi o la costa. Los precios están en dólares, como se le cobra al viajero, y son órdenes de magnitud: el presupuesto no necesita convertirlos. Los hoteles de Kinshasa pueden costar bastante más.",

  places: [
    {
      id: "kinshasa",
      name: "Kinshasa",
      region: "Kinshasa",
      tag: "La capital sobre el río",
      blurb:
        "Una de las ciudades más grandes de África, frente a Brazzaville del otro lado del río, con la rumba en vivo de Matonge, el mercado central y la Academia de Bellas Artes. Es la base del planificador: calor húmedo todo el año, con una temporada seca de junio a septiembre.",
      coords: [-4.4419, 15.2663],
      featured: true,
      image: null,
    },
    {
      id: "lola-ya-bonobo",
      name: "Lola ya Bonobo",
      region: "Kinshasa",
      tag: "Bonobos",
      blurb:
        "El único santuario del mundo para bonobos huérfanos, en un bosque junto a las cascadas de la Lukaya, en las afueras de Kinshasa.",
      coords: [-4.48, 15.23],
      image: null,
    },
    {
      id: "kisantu",
      name: "Kisantu (jardín botánico)",
      region: "Congo Central",
      tag: "Jardín botánico",
      blurb:
        "Un jardín botánico centenario, de los más grandes de África, y una catedral de ladrillo, a pocas horas de Kinshasa.",
      coords: [-5.1333, 15.1],
      image: null,
    },
    {
      id: "zongo",
      name: "Cataratas de Zongo",
      region: "Congo Central",
      tag: "Cataratas",
      blurb:
        "Unas cataratas de más de sesenta metros sobre el río Inkisi, rodeadas de selva, a unas horas de Kinshasa.",
      coords: [-4.7833, 14.9167],
      image: null,
    },
    {
      id: "mbanza-ngungu",
      name: "Mbanza-Ngungu (grutas)",
      region: "Congo Central",
      tag: "Grutas",
      blurb:
        "Una ciudad de colinas sobre la ruta al Atlántico, con grutas y un clima algo más fresco que el de Kinshasa.",
      coords: [-5.25, 14.8667],
      image: null,
    },
    {
      id: "matadi",
      name: "Matadi",
      region: "Congo Central",
      tag: "El puerto del río",
      blurb:
        "El puerto principal del país, sobre colinas a orillas del río, con el gran puente colgante sobre el Congo.",
      coords: [-5.8167, 13.45],
      image: null,
    },
    {
      id: "boma",
      name: "Boma",
      region: "Congo Central",
      tag: "La primera capital",
      blurb:
        "La primera capital del país, con edificios coloniales y un baobab enorme a la orilla del río.",
      coords: [-5.85, 13.05],
      image: null,
    },
    {
      id: "muanda",
      name: "Muanda (costa atlántica)",
      region: "Congo Central",
      tag: "La costa atlántica",
      blurb:
        "El único tramo de costa del país, donde el río Congo llega al mar, con playas, manglares y un parque marino con manatíes.",
      coords: [-5.9333, 12.35],
      image: null,
    },
    {
      id: "lubumbashi",
      name: "Lubumbashi",
      region: "Alto Katanga",
      tag: "La ciudad del cobre",
      blurb:
        "Una de las ciudades más grandes del país, nacida con las minas de cobre, con el museo nacional y un clima de altura: invierno seco de noches frías.",
      coords: [-11.6609, 27.4794],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para la RD del Congo, ropa liviana y fresca, sombrero y protector: hace calor húmedo en Kinshasa y el oeste. De octubre a mayo, algo impermeable. Para Lubumbashi en invierno, un buzo y una campera. Siempre, dólares nuevos en efectivo, el certificado de la fiebre amarilla en el bolso de mano y repelente.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Dólares nuevos y sanos para casi todo: los billetes viejos se rechazan.",
      "Vacuna de la fiebre amarilla obligatoria para todos, y visa tramitada antes.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. Algo impermeable de octubre a mayo.",
      templado:
        "Ropa liviana de día y un buzo para la noche en la temporada seca.",
      fresco: "Un buzo y una campera liviana para las noches de Lubumbashi.",
      frio: "Una campera de abrigo para Lubumbashi en junio y julio, cuando de noche baja de los siete grados.",
    },
    plug: {
      types: "Tipos C, D y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas (C), el francés con una tercera pata macho (E) y el D, de tres patas redondas gruesas. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá dólares nuevos desde casa",
          body: "Sin marcas, sin roturas y de las series recientes: los demás se rechazan.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Escuchá rumba en vivo",
          body: "En los bares de Matonge, en Kinshasa, sobre todo los fines de semana.",
        },
        {
          title: "Movete con un auto contratado",
          body: "En Kinshasa, un chofer del hotel es lo más simple para el tránsito y los controles.",
        },
        {
          title: "Llevá copias del pasaporte",
          body: "En los controles, una copia agiliza.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No saques fotos sin permiso",
          body: "Edificios oficiales, puentes, el puerto y la policía están prohibidos, y en la calle conviene preguntar siempre.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Cambiá en bancos o en el hotel.",
        },
        {
          title: "No te bañes en ríos ni lagos",
          body: "Hay corrientes fuertes y bilharzia.",
        },
        {
          title: "No compres carne de monte ni marfil",
          body: "Son de animales protegidos, y sacarlos del país es ilegal.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en la RD del Congo y si tu pasaporte necesita visa: casi todos la tramitan antes, y todos necesitan la vacuna de la fiebre amarilla.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa aprobada",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Copias del pasaporte y de la visa",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Dólares desde casa",
          body: "Casi todo se paga en dólares en efectivo, y los billetes viejos, rotos o con marcas se rechazan.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes nuevos, de las series recientes",
          "Billetes chicos, de uno, cinco y diez",
          "Una tarjeta para los hoteles grandes",
          "Un lugar aparte para el vuelto en francos",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: null,
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Algo impermeable de octubre a mayo",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Dólares viejos, rotos o con marcas",
        why: "Se rechazan en todos lados.",
        instead: "Billetes nuevos, de las series recientes.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta fuera de los hoteles grandes.",
        instead: "Dólares en efectivo.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Joyas y relojes caros",
        why: "Llaman la atención en la calle.",
        instead: "Lo justo, y el teléfono guardado.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en la RD del Congo y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a la RD del Congo?",
        answer:
          "Casi todos los pasaportes la necesitan, y se tramita antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer: "Sí, para todos los viajeros, y se controla al llegar.",
      },
      {
        question: "¿Con qué moneda se paga?",
        answer:
          "Casi todo, en dólares: billetes nuevos, sanos y de las series recientes. Los francos congoleños, para el vuelto.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre, la temporada seca en Kinshasa; para Lubumbashi, de mayo a octubre.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés es el oficial; en la calle, el lingala en Kinshasa y el swahili en Lubumbashi.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
