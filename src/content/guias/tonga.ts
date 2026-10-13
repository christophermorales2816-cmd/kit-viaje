import type { DestinationGuide } from "./types";

/**
 * Guía de Tonga.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el domingo sagrado por ley —cierran los comercios
 * y no hay vuelos, el dato de su portada—, que obliga a planear el fin de
 * semana, y el nado con ballenas jorobadas de julio a octubre. Tonga está al
 * oeste de la línea de cambio de fecha: tiene trece horas más que Greenwich,
 * como Samoa (spec, 16.4). El pa'anga no lleva centavos (spec, 16.3).
 */
export const tonga: DestinationGuide = {
  slug: "tonga",
  country: "Tonga",
  subregion: "Polinesia",
  subhead:
    "Las ballenas jorobadas de Vava'u, las islas vacías de Ha'apai, el trilito de Ha'amonga, los acantilados de 'Eua y un reino donde el domingo todo se detiene.",

  image: null,

  highlights: [
    {
      value: "Domingo sagrado",
      label: "por ley: cierran los comercios y no hay vuelos",
      note: "La constitución prohíbe trabajar y comerciar el domingo: cierran los negocios y los bancos, no hay vuelos y casi no hay taxis. Los hoteles atienden a sus huéspedes.",
    },
    {
      value: "Ballenas",
      label: "jorobadas, con las que se nada de julio a octubre",
      note: "Llegan a criar a Vava'u y Ha'apai, y Tonga es uno de los pocos lugares del mundo donde se puede nadar con ellas, con operadores autorizados.",
    },
    {
      value: "Reino",
      label: "que nunca fue colonia",
      note: "Tonga fue protectorado británico, pero nunca perdió su rey ni su gobierno propio. El palacio real, de madera, está frente al mar, en Nukualofa.",
    },
    {
      value: "Trilito",
      label: "de coral en Ha'amonga, el Stonehenge del Pacífico",
      note: "Tres bloques de coral de varias toneladas levantados hace unos ochocientos años, en la punta este de Tongatapu.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Tonga",
      body: [
        "Muchos pasaportes reciben al llegar un permiso de visitante, con el pasaje de salida y fondos para la estadía; otros tramitan la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Tonga",
      body: [
        "La moneda es el pa'anga. En Nukualofa y Neiafu, los hoteles, algunos restaurantes y los supermercados aceptan tarjeta; en el resto se paga en efectivo.",
        "Hay cajeros en Nukualofa y Neiafu, y muy pocos en el resto. El domingo cierran los comercios y los bancos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí pa'angas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico, con un invierno templado",
      body: [
        "Calor húmedo de diciembre a abril, la temporada de lluvias y ciclones, y un invierno templado de junio a septiembre, con noches de dieciocho grados.",
        "Vava'u, más al norte, es un poco más cálido y más lluvioso que Tongatapu.",
        "Tonga está al oeste de la línea de cambio de fecha: tiene trece horas más que Greenwich, y es de los primeros países en empezar el día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a octubre: la temporada seca y fresca. De julio a octubre llegan las ballenas jorobadas a Vava'u y Ha'apai.",
        "De diciembre a abril hace más calor y llueve más, y algunos años hay ciclones.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Tonga",
      body: [
        "Entre los grupos de islas se va en vuelo interno, desde Nukualofa a Vava'u, Ha'apai y 'Eua, o en ferry, más lento y que depende del mar.",
        "En Tongatapu hay taxis y unos pocos buses; para recorrer la isla, lo mejor es un auto o una bici. Para manejar hace falta un permiso local, que se saca con la licencia de tu país.",
        "Se maneja por la izquierda. El domingo no hay vuelos, y casi todo se para.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La única monarquía del Pacífico, con tumbas reales y el trilito de Ha'amonga.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Lu pulu, pescado crudo, el umu de los domingos y frutas tropicales.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale: "Islas bajas, los acantilados de 'Eua y las bahías de Vava'u.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Playas vacías en Ha'apai y en las islas de Vava'u.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale: "Alojamiento sencillo y precios moderados.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Vuelos internos y ferris que dependen del mar; domingos parados.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "El pa'anga se mueve poco y hay precios a la vista.",
    },
  ],

  shines: [
    "Nadar con ballenas jorobadas.",
    "Islas casi sin turistas en Ha'apai.",
    "Un reino que conserva sus costumbres.",
  ],

  costs: [
    "Domingos con todo cerrado.",
    "Vuelos internos que cambian.",
    "Lluvias y ciclones de diciembre a abril.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Nukualofa en enero que Vava'u o Ha'apai. Los precios están en pa'angas y son órdenes de magnitud; las salidas para nadar con ballenas cuestan bastante más.",

  places: [
    {
      id: "nukualofa",
      name: "Nukualofa",
      region: "Tongatapu",
      tag: "La capital del reino",
      blurb:
        "La capital, frente al mar, con el palacio real de madera, las tumbas reales, el mercado de Talamahu y las iglesias de los coros. Es la base del planificador: calor húmedo con lluvias de diciembre a mayo, e inviernos templados.",
      coords: [-21.1393, -175.2049],
      featured: true,
      image: null,
    },
    {
      id: "haamonga",
      name: "Ha'amonga 'a Maui (el trilito)",
      region: "Tongatapu",
      tag: "El trilito",
      blurb:
        "Tres bloques de coral levantados hace unos ochocientos años en la punta este de Tongatapu, con un sendero hasta la costa.",
      coords: [-21.13, -175.05],
      image: null,
    },
    {
      id: "haatafu",
      name: "Ha'atafu (playa)",
      region: "Tongatapu",
      tag: "La playa del oeste",
      blurb:
        "La playa de la punta oeste de Tongatapu, con snorkel en la reserva marina y el atardecer sobre el mar.",
      coords: [-21.07, -175.34],
      image: null,
    },
    {
      id: "mapua-a-vaea",
      name: "Mapu'a 'a Vaea (agujeros sopladores)",
      region: "Tongatapu",
      tag: "Los silbidos del jefe",
      blurb:
        "Cientos de agujeros en la costa sur de Tongatapu por donde el mar sale en chorros cuando rompe la ola.",
      coords: [-21.19, -175.28],
      image: null,
    },
    {
      id: "eua",
      name: "Isla 'Eua (acantilados y selva)",
      region: "'Eua",
      tag: "Acantilados y selva",
      blurb:
        "La isla más antigua del reino, con acantilados, selva tropical, cuevas y senderos, a un vuelo corto o un ferry de Tongatapu.",
      coords: [-21.37, -174.93],
      image: null,
    },
    {
      id: "neiafu",
      name: "Neiafu (Vava'u)",
      region: "Vava'u",
      tag: "El puerto de los veleros",
      blurb:
        "El pueblo de Vava'u, sobre una bahía protegida llena de veleros, base para nadar con ballenas y recorrer las islas en barco.",
      coords: [-18.65, -173.98],
      image: null,
    },
    {
      id: "islas-vavau",
      name: "Islas de Vava'u (ballenas)",
      region: "Vava'u",
      tag: "Las ballenas",
      blurb:
        "Decenas de islas con playas, cuevas como la de las Golondrinas y aguas donde las ballenas jorobadas crían de julio a octubre.",
      coords: [-18.7, -174.05],
      image: null,
    },
    {
      id: "pangai",
      name: "Pangai (Ha'apai)",
      region: "Ha'apai",
      tag: "El pueblo de Ha'apai",
      blurb:
        "El pueblo principal de Ha'apai, en la isla de Lifuka, entre islas bajas y playas vacías, donde el capitán Cook fue recibido como amigo.",
      coords: [-19.81, -174.35],
      image: null,
    },
    {
      id: "uoleva",
      name: "Uoleva (Ha'apai)",
      region: "Ha'apai",
      tag: "La isla de las cabañas",
      blurb:
        "Una isla sin pueblos, con cabañas sobre la playa, snorkel y ballenas que pasan cerca de la costa.",
      coords: [-19.85, -174.41],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Tonga, ropa liviana, traje de baño, protector y repelente; de junio a septiembre, un buzo para la noche. Ropa que tape hombros y rodillas para la calle y la iglesia, efectivo para las islas y el domingo libre: ese día todo cierra.",
    keyPoints: [
      "Muchos pasaportes reciben el permiso al llegar: verificá el tuyo antes.",
      "El domingo es sagrado por ley: cierran los comercios y no hay vuelos.",
      "Se nada con ballenas de julio a octubre, en Vava'u y Ha'apai.",
      "En público se tapan hombros y rodillas, y no se anda sin remera.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo para las noches de invierno.",
      fresco: "Un buzo y una campera liviana para las noches y los barcos.",
      frio: "No hace frío en Tonga: un buzo y una campera liviana alcanzan.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. En las islas chicas, la luz puede depender de un generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá el nado con ballenas con tiempo",
          body: "Los cupos de los operadores autorizados se llenan, sobre todo en agosto y septiembre.",
        },
        {
          title: "Andá a misa un domingo",
          body: "Los coros de las iglesias tonganas se escuchan desde la calle, y se recibe bien a los visitantes.",
        },
        {
          title: "Probá el lu pulu",
          body: "Carne con leche de coco, envuelta en hojas de taro y cocida en el umu.",
        },
        {
          title: "Hacé las compras el sábado",
          body: "El domingo cierran los comercios y casi no hay transporte.",
        },
        {
          title: "Usá protector que no dañe el coral",
          body: "Y una remera de lycra para el snorkel: el sol quema rápido en el agua.",
        },
        {
          title: "Elegí pagar en pa'angas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No andes sin remera en público",
          body: "Es contra la ley, aun para los hombres: el traje de baño, solo en la playa.",
        },
        {
          title: "No planees viajar el domingo",
          body: "No hay vuelos y casi no hay taxis.",
        },
        {
          title: "No toques a las ballenas",
          body: "Se nada cerca, con el guía, y sin tocarlas.",
        },
        {
          title: "No cuentes con la tarjeta en las islas",
          body: "Fuera de Nukualofa y Neiafu, todo se paga en efectivo.",
        },
        {
          title: "No entres a una casa con zapatos",
          body: "Se dejan en la puerta.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "info",
          title: "Permiso al llegar",
          body: "Muchos pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida y el pasaporte con seis meses de vigencia. Verificá el tuyo.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "mar",
        title: "Para el mar y las ballenas",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "En el agua, el sol quema en minutos, aun con nubes: protector alto, sombrero y una remera de lycra.",
        },
        summary: "Snorkel, barcos y ballenas",
        items: [
          "Protector solar que no dañe el arrecife",
          "Traje de baño y una remera de lycra",
          "Máscara, snorkel y aletas",
          "Una campera para el barco, en invierno",
        ],
      },
      {
        id: "domingo",
        title: "Para el domingo",
        notice: {
          tone: "info",
          title: "Un día de descanso",
          body: "El domingo cierran los comercios, los bancos y casi todos los restaurantes, y no hay vuelos. Los hoteles atienden a sus huéspedes.",
        },
        summary: "Lo que conviene resolver el sábado",
        items: [
          "Efectivo",
          "Algo para comer",
          "El traslado del lunes, confirmado",
          "Ropa prolija para la misa",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "Hay dengue, sobre todo en la temporada de lluvias: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para la calle",
        why: "En público se tapan hombros y rodillas, y andar sin remera es contra la ley.",
        instead: "Remeras y pantalones o polleras livianas.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Nukualofa y Neiafu casi nadie la acepta.",
        instead: "Efectivo en pa'angas.",
      },
      {
        leave: "Un vuelo el domingo",
        why: "No hay: el domingo es sagrado.",
        instead: "Viajar el sábado o el lunes.",
      },
      {
        leave: "Solo ropa de verano",
        why: "En invierno, las noches y los barcos refrescan.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los vuelos internos el equipaje tiene un límite bajo.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Tonga?",
        answer:
          "Muchos pasaportes reciben el permiso de visitante al llegar; otros tramitan la visa antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué pasa el domingo?",
        answer:
          "Es sagrado por ley: cierran los comercios y los bancos, no hay vuelos y casi no hay taxis. Los hoteles atienden a sus huéspedes.",
      },
      {
        question: "¿Cuándo se nada con ballenas?",
        answer:
          "De julio a octubre, en Vava'u y Ha'apai, con operadores autorizados.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a octubre, la temporada seca y fresca, que coincide con las ballenas.",
      },
      {
        question: "¿Cómo me visto?",
        answer:
          "En público, con hombros y rodillas tapados; el traje de baño, solo en la playa. Andar sin remera es contra la ley.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El tongano y el inglés, que se entiende en casi todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 240 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o hervida.",
      },
    ],
  },
};
