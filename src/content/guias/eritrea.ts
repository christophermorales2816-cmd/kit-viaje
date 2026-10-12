import type { DestinationGuide } from "./types";

/**
 * Guía de Eritrea.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.10 decidió para este país: entra con aviso, como
 * Pakistán y los países en duda de África. La entrada "tener-en-cuenta" manda
 * a revisar la recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: un permiso para cada destino fuera de la región de
 * Asmara —el dato de su portada—, una visa que solo se tramita en una
 * embajada y un país sin cajeros para tarjetas extranjeras. Ninguna ciudad del
 * planificador está a menos de veinticinco kilómetros de una frontera
 * terrestre. Asmara, a más de dos mil trescientos metros, tiene noches de
 * siete grados en enero: el bucket frío entra en una guía del mar Rojo.
 */
export const eritrea: DestinationGuide = {
  slug: "eritrea",
  country: "Eritrea",
  subregion: "África Oriental",
  subhead:
    "Asmara, una ciudad modernista entera a más de dos mil metros, el camino de curvas que baja de la meseta al mar Rojo, la Massawa de piedra de coral y las islas Dahlak.",

  image: null,

  highlights: [
    {
      value: "Permiso",
      label: "para salir de Asmara, uno por cada destino",
      note: "Fuera de la región de la capital, los extranjeros viajan con un permiso del Ministerio de Turismo que dice adónde van. Se tramita en Asmara, con unos días de margen, y se controla en las rutas.",
    },
    {
      value: "Asmara",
      label: "una ciudad modernista entera, patrimonio de la humanidad",
      note: "Cines, bares, estaciones de servicio y edificios de los años treinta, de la época italiana. La postal es el Fiat Tagliero, una estación de servicio con forma de avión.",
    },
    {
      value: "Macchiato",
      label: "y pasta: la herencia italiana, en cada bar",
      note: "Los bares de la avenida Harnet sirven macchiato y capuchino, y los restaurantes, pasta y pizza junto al zigni con injera.",
    },
    {
      value: "Dahlak",
      label: "islas de coral en el mar Rojo, casi sin visitantes",
      note: "Un archipiélago de más de cien islas frente a Massawa, con arrecifes para bucear y playas vacías. Se llega en barco, con permiso.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Eritrea",
      body: [
        "Todos los pasaportes necesitan visa, que se tramita antes de viajar en una embajada o un consulado de Eritrea: no hay visa al llegar ni electrónica. Averiguá los requisitos con tiempo, antes de comprar el pasaje.",
        "Para salir de la región de Asmara hace falta un permiso del Ministerio de Turismo, uno por cada destino, que se tramita en la capital con unos días de margen y se controla en las rutas.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Eritrea",
      body: [
        "La moneda es el nakfa. Al llegar se declara la moneda extranjera que traés, y se cambia solo en bancos y casas de cambio oficiales: guardá los comprobantes.",
        "No hay cajeros que acepten tarjetas extranjeras, y casi nadie las cobra: llevá todo el efectivo que vayas a necesitar, en euros o dólares.",
        "Algunos hoteles les cobran a los extranjeros directamente en dólares o en euros.",
      ],
    },
    {
      id: "clima",
      title: "Fresco en la meseta, caluroso en la costa",
      body: [
        "Asmara está a más de dos mil trescientos metros: días templados todo el año, noches frescas en invierno —en enero rondan los siete grados— y lluvias cortas en julio y agosto.",
        "Bajando hacia el mar Rojo el clima cambia por completo: Massawa y las islas Dahlak son de lo más caluroso del mundo en verano, con cuarenta grados en julio, y agradables en invierno.",
        "La escarpa del este, en Filfil y Ghinda, recibe lluvia en las dos temporadas y se mantiene verde casi todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a abril: la costa y las islas están agradables, y en Asmara los días son secos y templados.",
        "En julio y agosto llueve en la meseta, y la costa es muy calurosa. El día de la independencia, el 24 de mayo, se festeja en Asmara con desfiles y música.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Eritrea",
      body: [
        "Asmara se recorre a pie, y hay taxis compartidos y buses.",
        "Fuera de la capital, cada viaje necesita su permiso, con el destino y el auto en que vas. Se viaja en auto con chofer o con agencia: a veces, a los extranjeros no los dejan usar el transporte público.",
        "En las rutas hay controles: llevá el pasaporte y el permiso. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte de Eritrea, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, el camino al mar —Debre Bizen, Filfil y Ghinda—, Massawa y las islas Dahlak, Keren y Nakfa. Ninguna está a menos de veinticinco kilómetros de una frontera terrestre: las zonas de frontera con Sudán, Etiopía y Yibuti no forman parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Asmara, ciudad modernista patrimonio de la humanidad, la Massawa otomana y los monasterios ortodoxos.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Zigni con injera, pasta y pizza de herencia italiana, y pescado del mar Rojo.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "La meseta, la escarpa verde que cae al mar y las islas de coral.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Gurgusum y las islas Dahlak, con buen snorkel y pocos servicios.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Hoteles caros para lo que ofrecen, y todo en efectivo.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Visa en embajada, un permiso para cada destino y nada de tarjetas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El nakfa tiene un cambio oficial fijo frente al dólar.",
    },
  ],

  shines: [
    "Asmara y su arquitectura modernista.",
    "El camino de la meseta al mar.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Visa en embajada y un permiso para cada destino.",
    "Todo en efectivo, sin cajeros.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Asmara en enero que Massawa en julio. Los precios están en nakfas y son órdenes de magnitud; los hoteles que cobran en dólares o en euros y las salidas a las islas cuestan bastante más.",

  places: [
    {
      id: "asmara",
      name: "Asmara",
      region: "Maekel",
      tag: "La ciudad modernista",
      blurb:
        "Una capital a más de dos mil trescientos metros, con edificios art déco y futuristas de la época italiana, los bares de la avenida Harnet, la catedral y el mercado. Es la base del planificador: días templados todo el año, noches frescas en invierno y lluvias cortas en julio y agosto.",
      coords: [15.3229, 38.9251],
      featured: true,
      image: null,
    },
    {
      id: "massawa",
      name: "Massawa",
      region: "Mar Rojo Septentrional",
      tag: "El puerto otomano",
      blurb:
        "Una ciudad de piedra de coral sobre islas unidas por terraplenes, con casas otomanas y egipcias, muchas todavía marcadas por la guerra. Puerta de las islas Dahlak.",
      coords: [15.6097, 39.45],
      image: null,
    },
    {
      id: "gurgusum",
      name: "Playa de Gurgusum",
      region: "Mar Rojo Septentrional",
      tag: "La playa",
      blurb:
        "La playa de Massawa, al norte de la ciudad, con hoteles sencillos y el mar Rojo tibio casi todo el año.",
      coords: [15.66, 39.43],
      image: null,
    },
    {
      id: "dahlak",
      name: "Islas Dahlak",
      region: "Mar Rojo Septentrional",
      tag: "Islas de coral",
      blurb:
        "Un archipiélago de más de cien islas frente a Massawa, con arrecifes de coral, playas vacías y aves marinas. Se llega en barco, con permiso. Lo más caluroso del planificador en julio.",
      coords: [15.7, 40.1],
      image: null,
    },
    {
      id: "keren",
      name: "Keren",
      region: "Anseba",
      tag: "Mercados y baobabs",
      blurb:
        "La segunda ciudad, en un valle rodeado de montañas, con el mercado de animales de los lunes y el santuario de la Virgen dentro de un baobab.",
      coords: [15.7778, 38.4511],
      image: null,
    },
    {
      id: "filfil",
      name: "Bosque de Filfil",
      region: "Mar Rojo Septentrional",
      tag: "El bosque verde",
      blurb:
        "Un bosque siempre verde en la escarpa del este, con monos, aves y plantaciones de café, en un camino de curvas entre la meseta y el mar.",
      coords: [15.62, 38.95],
      image: null,
    },
    {
      id: "debre-bizen",
      name: "Monasterio de Debre Bizen",
      region: "Mar Rojo Septentrional",
      tag: "El monasterio",
      blurb:
        "Un monasterio ortodoxo del siglo XIV en la cima de una montaña, sobre el camino de Asmara al mar, con una biblioteca de manuscritos antiguos. Solo entran hombres, y se sube a pie. Lo más frío del planificador en enero.",
      coords: [15.3833, 39.05],
      image: null,
    },
    {
      id: "ghinda",
      name: "Ghinda",
      region: "Mar Rojo Septentrional",
      tag: "La escarpa",
      blurb:
        "Un pueblo verde a mitad de camino entre la meseta y el mar, entre plantaciones de frutas, con lluvia en las dos temporadas.",
      coords: [15.45, 39.0833],
      image: null,
    },
    {
      id: "nakfa",
      name: "Nakfa",
      region: "Mar Rojo Septentrional",
      tag: "La memoria de la independencia",
      blurb:
        "El pueblo de las montañas del norte que resistió durante la guerra de independencia, con sus trincheras convertidas en monumento. Le dio su nombre a la moneda.",
      coords: [16.6667, 38.4833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Eritrea, ropa en capas para Asmara —días templados y noches frescas, sobre todo en invierno— y ropa liviana, traje de baño y protector para la costa, que es muy calurosa. Siempre, todo el efectivo que vayas a necesitar, y el pasaporte y los permisos a mano.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Visa en embajada antes de viajar, y un permiso para cada destino fuera de Asmara.",
      "Todo en efectivo: no hay cajeros para tarjetas extranjeras.",
      "Asmara es fresca de noche todo el año; la costa, muy calurosa de mayo a septiembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca que cubra, sombrero, protector y mucha agua para la costa.",
      templado:
        "Ropa en capas para Asmara: remera, buzo y una campera liviana.",
      fresco: "Un buzo y una campera para las noches de Asmara y de la meseta.",
      frio: "Para las noches de invierno en la meseta, un abrigo: muchos hoteles no tienen calefacción.",
    },
    plug: {
      types: "Tipos C y L",
      voltage: "230 V, 50 Hz",
      note: "Dos patas redondas, y a veces tres en línea, como en Italia. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Pedí los permisos apenas llegues",
          body: "Se tramitan en Asmara, uno por destino, y pueden tardar varios días.",
        },
        {
          title: "Llevá todo el efectivo",
          body: "En euros o dólares, en billetes nuevos: no hay cajeros para tarjetas extranjeras.",
        },
        {
          title: "Recorré Asmara a pie",
          body: "El Fiat Tagliero, el cine Impero y los bares de la avenida Harnet se ven caminando.",
        },
        {
          title: "Tomá un macchiato",
          body: "En cualquier bar de Asmara, como en Italia.",
        },
        {
          title: "Guardá los comprobantes de cambio",
          body: "Te los pueden pedir al salir del país.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No salgas de Asmara sin permiso",
          body: "Hay controles en las rutas, y el permiso vale solo para el destino que dice.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Es ilegal: solo en bancos y casas de cambio oficiales.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de militares, puentes o del aeropuerto: está prohibido.",
        },
        {
          title: "No entres a iglesias y mezquitas con ropa corta",
          body: "Hombros y rodillas cubiertos, y descalzo en las iglesias ortodoxas.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Eritrea y la visa, que se tramita antes en una embajada; fuera de Asmara, además, hace falta un permiso para cada destino.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa, tramitada en una embajada",
          "Copias del pasaporte para los permisos",
          "Reserva de alojamiento y pasaje de salida",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Todo en efectivo",
          body: "No hay cajeros para tarjetas extranjeras: llevá todo lo que vayas a gastar, y declaralo al llegar.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Euros o dólares en billetes nuevos",
          "Los comprobantes de cambio, guardados",
          "Billetes chicos de nakfa",
        ],
      },
      {
        id: "capas",
        title: "Para la meseta y la costa",
        notice: null,
        summary: "Del fresco de Asmara al calor del mar",
        items: [
          "Un buzo y una campera liviana",
          "Ropa liviana para Massawa",
          "Traje de baño",
          "Sombrero y protector",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria en las tierras bajas",
          body: "Hay malaria en las tierras bajas y en la costa; en Asmara, por la altura, casi no. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
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
        leave: "Solo la tarjeta",
        why: "No hay cajeros para tarjetas extranjeras, y casi nadie las acepta.",
        instead: "Todo el efectivo, en euros o dólares.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Los permisos pueden tardar varios días.",
        instead: "Días de margen en Asmara.",
      },
      {
        leave: "Ropa solo de verano",
        why: "Asmara es fresca de noche todo el año.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Ropa corta para iglesias y mezquitas",
        why: "Hombros y rodillas se cubren.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Eritrea y la visa, que se tramita antes en una embajada.",
      },
      {
        question: "¿Necesito visa para entrar a Eritrea?",
        answer:
          "Sí, todos los pasaportes: se tramita antes de viajar en una embajada o un consulado. No hay visa al llegar ni electrónica.",
      },
      {
        question: "¿Qué es el permiso para salir de Asmara?",
        answer:
          "Un papel del Ministerio de Turismo que necesitan los extranjeros para ir a cualquier lugar fuera de la región de la capital. Se pide en Asmara, uno por destino, y se controla en las rutas.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "Casi en ningún lado, y no hay cajeros para tarjetas extranjeras: llevá todo el efectivo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a abril: la costa está agradable, y Asmara, seca y templada.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "En las tierras bajas y en la costa, sí; en Asmara, casi no. Consultá con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El tigriña y el árabe son los más usados; el inglés se entiende en hoteles y agencias, y muchos mayores hablan italiano.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
