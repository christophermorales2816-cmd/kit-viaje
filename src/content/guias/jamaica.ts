import type { DestinationGuide } from "./types";

/**
 * Guía de Jamaica.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Entra con aviso, como Pakistán (spec, 14.2 y 22): varios gobiernos
 * desaconsejan ir a algunos barrios de Kingston, Montego Bay y otras
 * ciudades, aunque no al país. La entrada "tener-en-cuenta" manda a revisar
 * la recomendación de viaje del propio país y qué cubre el seguro. Ninguna
 * ciudad del planificador es uno de esos barrios.
 *
 * Lo que este país aporta: el huracán Melissa, que en octubre de 2025 golpeó
 * el oeste y el sur. La guía lo nombra una vez, con su fecha, y manda a
 * confirmar que el alojamiento esté abierto; no describe la reconstrucción,
 * que cambia más rápido que el texto. Y las Montañas Azules: café de altura y
 * madrugadas frías en el pico, a una hora de la playa.
 */
export const jamaica: DestinationGuide = {
  slug: "jamaica",
  country: "Jamaica",
  subregion: "Caribe",
  subhead:
    "Reggae, playas de arena blanca, cascadas y montañas de café a una hora del mar. Caribe todo el año, con su temporada de huracanes.",

  image: null,

  highlights: [
    {
      value: "2.256 m",
      label: "en el pico Blue Mountain",
      note: "En el Caribe, sí: café de altura y madrugadas frías en las Montañas Azules.",
    },
    {
      value: "JMD y USD",
      label: "dos monedas en la calle",
      note: "Lo turístico suele cobrarse en dólares estadounidenses; lo local, en dólares jamaiquinos.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica: el volante va a la derecha y las rutas son angostas y con curvas.",
    },
    {
      value: "Jun–Nov",
      label: "temporada de huracanes",
      note: "Con el pico entre agosto y octubre. De diciembre a abril es la mejor época.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta, y el tiempo permitido cambia según la nacionalidad. Otros necesitan visa. Verifica el tuyo antes de reservar.",
        "Antes de llegar se completa en línea el formulario de migración y aduana. Pueden pedirte el pasaje de salida y la dirección del alojamiento.",
        "Si llegas desde un país con riesgo de fiebre amarilla, o pasaste más de doce horas en el aeropuerto de uno, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar jamaiquino flota, sin mercado paralelo. En hoteles, excursiones y zonas turísticas muchos precios están en dólares estadounidenses y se aceptan, pero el cambio suele llegar en dólares jamaiquinos.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para mercados, puestos de comida y taxis colectivos hace falta efectivo.",
        "Muchos restaurantes suman a la cuenta un cargo por servicio, además del impuesto. Si no lo hacen, se deja entre un 10 y un 15 %.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación seca y la temporada alta.",
        "De mayo a noviembre hace más calor y llueve en chaparrones, sobre todo de tarde. La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El huracán Melissa golpeó el oeste y el sur de la isla en octubre de 2025. Antes de reservar, confirma que tu alojamiento esté abierto.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Se conduce por la izquierda, en rutas angostas y con curvas. De noche no conviene viajar entre ciudades.",
        "Entre las ciudades grandes hay buses de empresa, cómodos y con horario. Los taxis colectivos son baratos y llegan a todos lados, pero van llenos.",
        "Usa taxis con licencia, de los que trabajan para el turismo o los que pide tu hotel, y acuerda el precio antes de subir.",
      ],
    },
    {
      id: "montanas",
      title: "Las Montañas Azules",
      body: [
        "A una hora de Kingston, las Montañas Azules tienen plantaciones de café, bosque nuboso y senderos. Arriba las noches son frescas.",
        "La subida clásica al pico Blue Mountain arranca de madrugada para ver el amanecer desde la cima, y ahí hace frío de verdad: hace falta abrigo.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisa la recomendación de viaje de tu propio país: varios gobiernos desaconsejan ir a algunos barrios de Kingston, Montego Bay y otras ciudades, y la lista cambia.",
        "Fíjate también qué cubre tu seguro, y que incluya atención médica: fuera de las ciudades grandes, los hospitales son básicos.",
        "Ninguna ciudad del planificador es uno de esos barrios. En la playa y en la calle, las precauciones son las de siempre: atención a las pertenencias y nada de seguir a quien ofrece llevarte a algún lado.",
        "En hoteles y ciudades el agua corriente suele ser potable. Fuera de ellos, y después de un huracán, agua embotellada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Los acantilados y la playa de siete millas de Negril, Montego Bay y la costa norte.",
    },
    {
      dimension: "Música y cultura",
      score: 10,
      rationale:
        "La cuna del reggae, con el museo de Bob Marley y sonido en vivo cada noche.",
    },
    {
      dimension: "Montaña y naturaleza",
      score: 8,
      rationale:
        "Las Montañas Azules, cascadas como Dunn's River y la selva de Port Antonio.",
    },
    {
      dimension: "Gastronomía",
      score: 8.5,
      rationale:
        "El jerk, el ackee con pescado salado y los patties de cada esquina.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Barato en lo local y caro en los resorts y las excursiones, que se cobran en dólares.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Buses de empresa entre ciudades, pero rutas lentas y nada de viajar de noche.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Un dólar jamaiquino que flota sin mercado paralelo, y dólares estadounidenses aceptados en lo turístico.",
    },
  ],

  shines: [
    "Playa de primer nivel y la música que nació en la isla.",
    "Montañas de café y bosque fresco a una hora del mar.",
    "Una cocina propia, picante y de la calle.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "La temporada de huracanes, de junio a noviembre.",
    "Rutas lentas y nada de viajar de noche entre ciudades.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: las Montañas Azules no piden lo mismo que Negril. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "montego-bay",
      name: "Montego Bay",
      region: "Costa norte",
      tag: "Playas y resorts",
      blurb:
        "La puerta de entrada de casi todos los viajeros, con el aeropuerto principal, playas y resorts sobre la costa norte. Es la base del planificador.",
      coords: [18.4762, -77.8939],
      featured: true,
      image: null,
    },
    {
      id: "negril",
      name: "Negril",
      region: "Oeste",
      tag: "Siete millas de arena",
      blurb:
        "Una playa de siete millas en el extremo oeste y acantilados para ver el atardecer. Fue de las zonas más golpeadas por el huracán de 2025.",
      coords: [18.2683, -78.3481],
      image: null,
    },
    {
      id: "falmouth",
      name: "Falmouth",
      region: "Costa norte",
      tag: "Laguna luminosa",
      blurb:
        "Un pueblo georgiano con la laguna luminosa al lado, donde el agua brilla de noche por el plancton.",
      coords: [18.4936, -77.6559],
      image: null,
    },
    {
      id: "ocho-rios",
      name: "Ocho Ríos",
      region: "Costa norte",
      tag: "Cascadas",
      blurb:
        "Las cascadas de Dunn's River, que se suben a pie por el agua, el Blue Hole y playas tranquilas.",
      coords: [18.4074, -77.1031],
      image: null,
    },
    {
      id: "port-antonio",
      name: "Port Antonio",
      region: "Noreste",
      tag: "Selva y laguna",
      blurb:
        "El rincón más verde y lluvioso de la isla, con la Laguna Azul, ríos para bajar en balsa de bambú y playas sin multitud.",
      coords: [18.1765, -76.4504],
      image: null,
    },
    {
      id: "montanas-azules",
      name: "Montañas Azules",
      region: "Este",
      tag: "Café y bosque",
      blurb:
        "Plantaciones de café de altura, bosque nuboso y la subida de madrugada al pico Blue Mountain, a 2.256 metros. Noches frescas todo el año.",
      coords: [18.0468, -76.5781],
      image: null,
    },
    {
      id: "kingston",
      name: "Kingston",
      region: "Sureste",
      tag: "Reggae",
      blurb:
        "La capital, con el museo de Bob Marley, Devon House, la escena musical más viva de la isla y la puerta a las Montañas Azules.",
      coords: [17.9712, -76.7936],
      image: null,
    },
    {
      id: "treasure-beach",
      name: "Treasure Beach",
      region: "Costa sur",
      tag: "Pueblo de pescadores",
      blurb:
        "Una costa seca y tranquila de pueblos de pescadores, lejos de los resorts. El huracán de 2025 la golpeó de lleno.",
      coords: [17.889, -77.7596],
      image: null,
    },
    {
      id: "cockpit-country",
      name: "Cockpit Country",
      region: "Interior",
      tag: "Selva y cimarrones",
      blurb:
        "Colinas de piedra caliza cubiertas de selva en el centro de la isla, tierra de los cimarrones que resistieron a los británicos. Un rincón remoto, para ir con guía.",
      coords: [18.2306, -77.7469],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Jamaica es Caribe todo el año en la costa: ropa ligera, traje de baño, protector y repelente. Si vas a las Montañas Azules, suma un suéter y una chaqueta: arriba las noches son frescas, y en el pico, de madrugada, hace frío. De diciembre a abril es la mejor época, fuera de la temporada de huracanes.",
    keyPoints: [
      "Antes de reservar, revisa la recomendación de viaje de tu país y tu seguro.",
      "Calor todo el año en la costa, con más lluvia de mayo a noviembre.",
      "Las Montañas Azules tienen noches frescas, y frío en el pico de madrugada.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de toda la costa todo el año.",
      templado:
        "Camiseta y algo de manga larga. Es el clima de los días en las Montañas Azules.",
      fresco:
        "Suéter y chaqueta ligera para las noches de las Montañas Azules.",
      frio: "Una chaqueta abrigada, gorro y guantes para subir al pico Blue Mountain de madrugada.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "110 V, 50 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Confirma que tu alojamiento esté abierto",
          body: "El huracán de 2025 golpeó el oeste y el sur, y algunos lugares tardaron en reabrir.",
        },
        {
          title: "Usa taxis con licencia y acuerda el precio",
          body: "Los que pide el hotel o los de la asociación de turismo. No hay taxímetro.",
        },
        {
          title: "Lleva abrigo a las Montañas Azules",
          body: "Arriba las noches son frescas, y en el pico, de madrugada, hace frío.",
        },
        {
          title: "Ten efectivo en dólares jamaiquinos",
          body: "Para mercados, puestos de comida y taxis colectivos.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la costa norte lo agradecen.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Que cubra este destino y la atención médica.",
        },
        {
          title: "No viajes de noche entre ciudades",
          body: "Las rutas son angostas, con curvas y sin luz.",
        },
        {
          title: "No sigas a quien ofrece llevarte a algún lado",
          body: "Las excursiones y los traslados, con empresas con licencia.",
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
          title: "Recomendación de viaje, seguro y entrada",
          body: "Revisa la recomendación de viaje de tu país, qué cubre tu seguro en Jamaica y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro con cobertura médica que cubra este destino",
          "El formulario de migración y aduana, completado en línea",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
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
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias y calzado para el agua, para subir las cascadas",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "montana",
        title: "Montaña",
        notice: {
          tone: "info",
          title: "En el Caribe también hace frío",
          body: "En el pico Blue Mountain, de madrugada, la temperatura baja a pocos grados.",
        },
        summary: "Para las Montañas Azules",
        items: [
          "Suéter o chaqueta abrigada",
          "Chaqueta impermeable",
          "Calzado que aguante barro",
          "Linterna frontal para la subida de madrugada",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos: hay dengue",
          "Algo para el malestar estomacal y sales de rehidratación",
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
          "Repelente apto para niños",
          "Un abrigo si van a la montaña",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La lista de zonas desaconsejadas cambia, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Abrigo pesado para la costa",
        why: "En la costa no hay un mes frío.",
        instead: "Solo un suéter y una chaqueta si vas a la montaña.",
      },
      {
        leave: "Billetes grandes de dólar",
        why: "En lo local cuesta cambiarlos, y el cambio llega en dólares jamaiquinos.",
        instead: "Billetes chicos o dólares jamaiquinos para mercados y taxis.",
      },
      {
        leave: "Jeans pesados",
        why: "Con la humedad del Caribe no se aguantan.",
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
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Jamaica y las reglas de entrada para tu pasaporte.",
      },
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y completa en línea el formulario de migración y aduana antes de llegar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "En lo turístico sí, pero el cambio suele llegar en dólares jamaiquinos. Para lo local conviene tener moneda del país.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la estación seca y fuera de la temporada de huracanes.",
      },
      {
        question: "¿Cómo está la isla después del huracán Melissa?",
        answer:
          "El huracán de octubre de 2025 golpeó sobre todo el oeste y el sur. Muchos hoteles reabrieron durante 2026 y otros siguen en obras: confirma que el tuyo esté abierto antes de reservar.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En los buses de empresa que unen las ciudades grandes, o en taxis con licencia con el precio acordado antes. De noche, mejor no viajar.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En hoteles y ciudades suele ser potable. Fuera de ellos, y después de un huracán, agua embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 110 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
