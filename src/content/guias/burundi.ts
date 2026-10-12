import type { DestinationGuide } from "./types";

/**
 * Guía de Burundi.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que las secciones 15.8 y 15.9 decidieron para los países en duda
 * de África: entra con aviso, como Pakistán. La entrada "tener-en-cuenta"
 * manda a revisar la recomendación de viaje del propio país y qué cubre el
 * seguro.
 *
 * Lo que este país aporta: el caso de Malaui otra vez. El franco burundés
 * tiene una cotización oficial y otra paralela muy lejos entre sí, así que
 * los precios van en dólares y el corredor muestra las dos (spec, 15.9). El
 * dato de su portada es el lago Tanganica. Ninguna ciudad del planificador
 * está en Cibitoke ni en Bubanza, en el parque de la Kibira ni sobre la
 * frontera con el Congo, al oeste de Buyumbura.
 */
export const burundi: DestinationGuide = {
  slug: "burundi",
  country: "Burundi",
  subregion: "África Oriental",
  subhead:
    "Playas de arena sobre el lago Tanganica, colinas verdes cultivadas hasta la cima, los tambores reales de Gishora y la fuente más austral del Nilo. Un país chico, casi sin turistas.",

  image: null,

  highlights: [
    {
      value: "Lago",
      label:
        "Tanganica, el segundo más profundo del mundo, con playas de arena",
      note: "Buyumbura, Rumonge y Nyanza-Lac tienen playas sobre el lago, con agua dulce y montañas del otro lado.",
    },
    {
      value: "Tambores",
      label: "reales, patrimonio de la humanidad",
      note: "La danza de los tambores sagrados, que la UNESCO declaró patrimonio inmaterial, se ve en el santuario de Gishora, cerca de Gitega.",
    },
    {
      value: "Fuente del Nilo",
      label: "la más austral, en las colinas de Rutovu",
      note: "Un manantial en las colinas del sur, señalado con una pequeña pirámide como la fuente más austral del Nilo.",
    },
    {
      value: "2 cotizaciones",
      label: "del franco, muy lejos entre sí",
      note: "La oficial y la del mercado paralelo están muy lejos. Por eso los precios del planificador están en dólares, que es como cobran los hoteles y las excursiones.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Burundi",
      body: [
        "Casi todos los pasaportes necesitan visa: se pide online antes de viajar y se retira al llegar al aeropuerto de Buyumbura. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Burundi pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y en la práctica puede pedírselo a cualquiera. Vacunate al menos diez días antes y llevalo en el bolso de mano.",
        "El pasaporte tiene que tener al menos seis meses de vigencia y una página libre.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Burundi",
      body: [
        "La moneda es el franco burundés, con una cotización oficial y otra en el mercado paralelo muy lejos entre sí. Por eso los precios del planificador están en dólares.",
        "Los hoteles y las excursiones suelen cobrar en dólares. Llevá dólares en billetes nuevos y de las series recientes, y cambiá solo en bancos o casas de cambio autorizadas: el cambio en la calle es ilegal.",
        "Casi todo se paga en efectivo: la tarjeta funciona en pocos hoteles de Buyumbura, y los cajeros no siempre aceptan tarjetas extranjeras.",
      ],
    },
    {
      id: "clima",
      title: "Entre el lago y las colinas",
      body: [
        "Burundi está cerca del ecuador. Buyumbura, a orillas del lago Tanganica, es calurosa todo el año, con lluvias de octubre a mayo.",
        "Las tierras altas —Gitega, Bururi, la fuente del Nilo— son templadas, con noches frescas; en Rutovu, a más de dos mil metros, refresca de verdad.",
        "De junio a septiembre es la temporada seca, la más cómoda para recorrer.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la temporada seca, sin barro en los caminos.",
        "De octubre a mayo llueve seguido, sobre todo en las tierras altas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Burundi",
      body: [
        "Burundi es chico: de Buyumbura a Gitega, Rumonge o la fuente del Nilo hay pocas horas de ruta, con chofer o en buses de línea.",
        "En Buyumbura hay taxis y buses; las motos taxi no pueden circular por el centro.",
        "En las rutas hay controles: llevá el pasaporte siempre. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Burundi, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Ninguna ciudad del planificador está en Cibitoke ni en Bubanza, en el parque de la Kibira ni sobre la frontera con el Congo, al oeste de Buyumbura. El parque de la Rusizi, sobre esa frontera, no forma parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La monarquía tradicional, los tambores reales y el museo de Gitega.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Brochettes, mukeke y ndagala del lago, porotos y banana cocida.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Colinas verdes, el lago Tanganica y cascadas.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale: "Playas de arena sobre el lago Tanganica; no tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer es barato; los hoteles, para lo que ofrecen, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale: "Visa previa, efectivo y pocos servicios turísticos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 2,
      rationale: "Dos cotizaciones muy lejos entre sí.",
    },
  ],

  shines: [
    "El lago Tanganica.",
    "Los tambores reales.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Dos cotizaciones y casi todo en efectivo.",
    "Pocos servicios turísticos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Buyumbura que Gitega o la fuente del Nilo. Los precios están en dólares, que es como conviene pensarlos con un franco de dos cotizaciones, y son órdenes de magnitud.",

  places: [
    {
      id: "buyumbura",
      name: "Buyumbura",
      region: "Buyumbura",
      tag: "La ciudad del lago",
      blurb:
        "La ciudad más grande, entre las colinas y el lago Tanganica, con playas de arena, el mercado y una vida nocturna junto al agua. Es la base del planificador: calurosa todo el año, con lluvias de octubre a mayo.",
      coords: [-3.3614, 29.3599],
      featured: true,
      image: null,
    },
    {
      id: "gitega",
      name: "Gitega",
      region: "Gitega",
      tag: "La capital política",
      blurb:
        "La capital política, en las colinas, con el museo nacional y el santuario de los tambores de Gishora cerca. Templada, con noches frescas.",
      coords: [-3.4271, 29.9246],
      image: null,
    },
    {
      id: "rumonge",
      name: "Rumonge (lago Tanganica)",
      region: "Rumonge",
      tag: "El lago",
      blurb:
        "Un pueblo de pescadores sobre el lago Tanganica, con playas y el bosque de Kigwena cerca.",
      coords: [-3.9736, 29.4386],
      image: null,
    },
    {
      id: "nyanza-lac",
      name: "Nyanza-Lac (playas del sur)",
      region: "Makamba",
      tag: "Playas del sur",
      blurb:
        "Playas tranquilas sobre el sur del lago, con palmeras y pescadores.",
      coords: [-4.3167, 29.6],
      image: null,
    },
    {
      id: "fuente-del-nilo",
      name: "Fuente del Nilo (Rutovu)",
      region: "Bururi",
      tag: "La fuente más austral",
      blurb:
        "Un manantial en las colinas, señalado con una pequeña pirámide como la fuente más austral del Nilo. A más de dos mil metros: fresco y lluvioso.",
      coords: [-3.9333, 29.8333],
      image: null,
    },
    {
      id: "karera",
      name: "Cataratas de Karera (Rutana)",
      region: "Rutana",
      tag: "Cascadas",
      blurb:
        "Saltos de agua entre colinas, con la falla de Nyakazu, un cañón profundo, a pocos kilómetros.",
      coords: [-3.98, 30.18],
      image: null,
    },
    {
      id: "ruvubu",
      name: "Parque Nacional de la Ruvubu",
      region: "Este",
      tag: "Sabana y río",
      blurb:
        "El parque más grande del país, a lo largo del río Ruvubu, con hipopótamos, búfalos y monos. Se recorre con guía.",
      coords: [-3.15, 30.25],
      image: null,
    },
    {
      id: "bururi",
      name: "Bosque de Bururi",
      region: "Bururi",
      tag: "Bosque de montaña",
      blurb:
        "Una reserva de bosque de montaña con monos, muchas aves, senderos y miradores. Fresco y lluvioso.",
      coords: [-3.95, 29.6167],
      image: null,
    },
    {
      id: "kirundo",
      name: "Lagos de Kirundo (aves)",
      region: "Kirundo",
      tag: "Lagos y aves",
      blurb:
        "Los lagos del norte, como el Rwihinda, el lago de los pájaros, con garzas, cormoranes y pescadores.",
      coords: [-2.5847, 30.0972],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Burundi, ropa liviana para Buyumbura y el lago, y un buzo para las colinas, que refrescan de noche. De octubre a mayo, algo impermeable. Siempre, dólares nuevos en efectivo, el certificado de la fiebre amarilla, repelente y un adaptador.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Dos cotizaciones y casi todo en efectivo: dólares nuevos desde casa.",
      "Calor en el lago y frescura en las colinas; lluvias de octubre a mayo.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y repelente para Buyumbura y el lago.",
      templado: "Ropa liviana de día y un buzo para la noche en las colinas.",
      fresco:
        "Capas, un polar y una campera impermeable para Gitega, Bururi y la fuente del Nilo.",
      frio: "Un abrigo liviano para las noches de la fuente del Nilo, a más de dos mil metros.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas (C) o el francés, con una tercera pata macho (E); las de dos patas entran en los dos. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá dólares nuevos desde casa",
          body: "Sin roturas y de las series recientes, para cambiar en bancos o casas de cambio.",
        },
        {
          title: "Mirá a los tamborileros de Gishora",
          body: "Cerca de Gitega; conviene avisar antes para ver la danza.",
        },
        {
          title: "Probá el mukeke",
          body: "El pescado del lago Tanganica, a la parrilla, en Buyumbura o Rumonge.",
        },
        {
          title: "Llevá el pasaporte siempre",
          body: "Hay controles en las rutas y en la ciudad.",
        },
        {
          title: "Si pagás con tarjeta, elegí francos",
          body: "Cuando una terminal te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Es ilegal, y es donde están las estafas.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o puentes.",
        },
        {
          title: "No te bañes en el lago sin preguntar",
          body: "Hay zonas con hipopótamos, cocodrilos y bilharzia: preguntá en el alojamiento.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Burundi y si tu pasaporte necesita visa: casi todos la piden online antes de viajar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa, pedida online",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de salida y reserva de hotel",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Dólares desde casa",
          body: "Casi todo se paga en efectivo, y los cajeros no siempre aceptan tarjetas extranjeras.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes nuevos, de las series recientes",
          "Billetes chicos",
          "Una tarjeta para los hoteles grandes",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia y las colinas",
        notice: null,
        summary: "Capas",
        items: [
          "Una campera impermeable",
          "Un buzo o un polar",
          "Calzado cerrado que aguante el barro",
          "Protector solar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Dólares viejos o rotos",
        why: "Se rechazan o se cambian peor.",
        instead: "Billetes nuevos, de las series recientes.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta.",
        instead: "Efectivo.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las colinas son frescas de noche.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas son de montaña y con controles.",
        instead: "Días de margen.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro en Burundi y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Burundi?",
        answer:
          "Casi todos los pasaportes la piden online antes de viajar y la retiran al llegar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Te la pueden controlar al llegar: vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Con qué moneda se paga?",
        answer:
          "Con francos burundeses, que tienen dos cotizaciones; los hoteles y las excursiones suelen cobrar en dólares.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De junio a septiembre, la temporada seca.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El kirundi es el de todos; el francés sirve en hoteles y oficinas, y el swahili, en el comercio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
