import type { DestinationGuide } from "./types";

/**
 * Guía de Nauru.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el país más chico del planificador —21 km², el
 * dato de su portada—, sin capital oficial, con visa previa para todos y la
 * reserva del hotel como requisito para pedirla. Las nueve "ciudades" son los
 * distritos y lugares de la vuelta a la isla, a pocos kilómetros entre sí: su
 * caja del test es la más chica de todas. Usa el dólar australiano, con
 * centavos (spec, 16.3).
 */
export const nauru: DestinationGuide = {
  slug: "nauru",
  country: "Nauru",
  subregion: "Micronesia",
  subhead:
    "Una isla que se rodea en media hora, la meseta de pináculos que dejó el fosfato, los cañones japoneses de Command Ridge y la bahía de Anibare, en el tercer país más chico del mundo.",

  image: null,

  highlights: [
    {
      value: "21 km²",
      label: "de país: el tercero más chico del mundo",
      note: "Después del Vaticano y Mónaco, Nauru es el país más chico del mundo: una sola isla que se rodea en auto en menos de media hora.",
    },
    {
      value: "Visa antes",
      label: "de viajar, con la reserva del hotel",
      note: "Todos los visitantes tramitan la visa antes de viajar, y para pedirla hace falta la reserva del alojamiento. Hay muy pocos hoteles, así que conviene reservar primero.",
    },
    {
      value: "Fosfato",
      label: "un siglo de minería que vació el centro de la isla",
      note: "La meseta central quedó cubierta de pináculos de coral después de un siglo de minería de fosfato, que hizo de Nauru uno de los países más ricos del mundo por habitante.",
    },
    {
      value: "Sin capital",
      label: "oficial: el gobierno está en Yaren",
      note: "Nauru no tiene capital oficial. El parlamento y el gobierno están en Yaren, junto al aeropuerto.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Nauru",
      body: [
        "Todos los pasaportes necesitan visa, que se tramita antes de viajar: para pedirla hace falta la reserva del alojamiento y el pasaje de salida. Verificá los requisitos en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Solo se llega en avión, con la aerolínea del país, desde Brisbane, Fiyi y otras islas del Pacífico, con pocos vuelos por semana.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Nauru",
      body: [
        "La moneda es el dólar australiano. Casi todo se paga en efectivo; las tarjetas se aceptan en los hoteles y en pocos comercios.",
        "Hay muy pocos cajeros: llevá dólares australianos suficientes desde afuera.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí dólares australianos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, sobre el ecuador",
      body: [
        "Calor húmedo y parejo todo el año: las máximas rondan los treinta y un grados y las mínimas, los veinticinco.",
        "Llueve más de diciembre a febrero, y hay años enteros de sequía, según el ciclo de El Niño.",
        "La meseta del centro, sin árboles, es más calurosa que la costa.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier época sirve: no hay estaciones de temperatura, y los ciclones no llegan tan cerca del ecuador.",
        "El 31 de enero es el día de la independencia, y el 26 de octubre, Angam, la fiesta que recuerda que la población volvió a crecer después de las guerras.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Nauru",
      body: [
        "Una sola ruta rodea la isla, en menos de media hora en auto. Hay pocos taxis: lo práctico es alquilar un auto o una bici, o pedirle el traslado al hotel.",
        "La vuelta se puede hacer caminando o en bici en un día, y a la meseta del centro se sube por los caminos de la minería.",
        "Se maneja por la izquierda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "La minería del fosfato y los cañones japoneses de la Segunda Guerra.",
    },
    {
      dimension: "Gastronomía",
      score: 3,
      rationale: "Pescado y comida china al paso; poca variedad.",
    },
    {
      dimension: "Paisaje",
      score: 4,
      rationale: "La costa de coral y los pináculos de la meseta minada.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale: "La bahía de Anibare; el resto, coral y rocas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Pocos hoteles, caros para lo que ofrecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Visa previa, pocos vuelos y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "Usa el dólar australiano.",
    },
  ],

  shines: [
    "Uno de los países menos visitados del mundo.",
    "Una isla que se recorre en un día.",
    "La historia del fosfato, a la vista.",
  ],

  costs: [
    "Visa previa y pocos vuelos.",
    "Pocos hoteles, y caros.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima, que casi no cambia en una isla tan chica. Los precios están en dólares australianos y son órdenes de magnitud; hay pocos hoteles, y casi todo llega importado.",

  places: [
    {
      id: "yaren",
      name: "Yaren",
      region: "Yaren",
      tag: "El gobierno",
      blurb:
        "El distrito del parlamento, del gobierno y del aeropuerto, en la costa sur. Es la base del planificador: calor parejo todo el año, con más lluvia en enero y febrero.",
      coords: [-0.5477, 166.9209],
      featured: true,
      image: null,
    },
    {
      id: "anibare",
      name: "Bahía de Anibare",
      region: "Anibare",
      tag: "La playa",
      blurb:
        "La bahía más linda de la isla, en la costa este, con arena blanca y el puerto chico de donde salen las lanchas de pesca.",
      coords: [-0.53, 166.95],
      image: null,
    },
    {
      id: "laguna-buada",
      name: "Laguna de Buada",
      region: "Buada",
      tag: "La laguna",
      blurb:
        "Una laguna de agua salobre en una hondonada del interior, rodeada de palmeras y casas: el lugar más verde de la isla.",
      coords: [-0.531, 166.921],
      image: null,
    },
    {
      id: "command-ridge",
      name: "Command Ridge (cañones japoneses)",
      region: "Meseta central",
      tag: "El punto más alto",
      blurb:
        "El punto más alto de la isla, con cañones y búnkeres japoneses de la Segunda Guerra y vista a toda la costa.",
      coords: [-0.545, 166.93],
      image: null,
    },
    {
      id: "meneng",
      name: "Meneng (costa sudeste)",
      region: "Meneng",
      tag: "El hotel y la costa",
      blurb:
        "La costa sudeste, con el hotel Menen, el estadio y pozas en el arrecife que se llenan con la marea.",
      coords: [-0.546, 166.94],
      image: null,
    },
    {
      id: "anabar",
      name: "Anabar",
      region: "Anabar",
      tag: "La costa noreste",
      blurb:
        "Un distrito tranquilo de la costa noreste, con un estanque y casas entre las palmeras.",
      coords: [-0.51, 166.95],
      image: null,
    },
    {
      id: "aiwo",
      name: "Aiwo (el puerto del fosfato)",
      region: "Aiwo",
      tag: "El puerto del fosfato",
      blurb:
        "La costa oeste, con los muelles de carga del fosfato, la planta de secado y muchos de los comercios de la isla.",
      coords: [-0.53, 166.91],
      image: null,
    },
    {
      id: "ewa",
      name: "Ewa (costa norte)",
      region: "Ewa",
      tag: "La punta norte",
      blurb:
        "La punta norte de la isla, con pozas en el coral, la costa más tranquila y caminos que suben a la meseta.",
      coords: [-0.49, 166.935],
      image: null,
    },
    {
      id: "meseta-del-fosfato",
      name: "La meseta del fosfato (Topside)",
      region: "Meseta central",
      tag: "Los pináculos",
      blurb:
        "El centro de la isla, vaciado por un siglo de minería, con pináculos de coral de varios metros que parecen de otro planeta. Más caluroso que la costa.",
      coords: [-0.525, 166.93],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Nauru, ropa liviana y fresca, traje de baño, protector, sombrero y repelente: hace calor parejo todo el año. La visa, tramitada antes y con la reserva del hotel, dólares australianos en efectivo y días de margen para los vuelos.",
    keyPoints: [
      "Visa antes de viajar para todos, con la reserva del alojamiento.",
      "Pocos vuelos por semana, desde Brisbane, Fiyi y las islas vecinas.",
      "Casi todo se paga en efectivo, en dólares australianos.",
      "La isla se recorre en un día: una sola ruta la rodea.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo fino para el avión.",
      fresco: "Un buzo liviano para las noches de viento.",
      frio: "No hace frío en Nauru: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá el alojamiento antes que nada",
          body: "Hay muy pocos hoteles, y la reserva hace falta para pedir la visa.",
        },
        {
          title: "Dá la vuelta a la isla",
          body: "En auto, en bici o caminando, por la única ruta que la rodea.",
        },
        {
          title: "Subí a la meseta",
          body: "Los pináculos que dejó la minería, y los cañones de Command Ridge.",
        },
        {
          title: "Pasá una tarde en Anibare",
          body: "La bahía de arena blanca de la costa este.",
        },
        {
          title: "Salí a pescar",
          body: "Desde el puerto de Anibare salen lanchas para pescar atún y marlín.",
        },
        {
          title: "Llevá dólares australianos desde afuera",
          body: "Casi todo se paga en efectivo, y hay muy pocos cajeros.",
        },
      ],
      donts: [
        {
          title: "No viajes sin la visa",
          body: "No se da al llegar: se tramita antes, con la reserva del alojamiento.",
        },
        {
          title: "No fotografíes edificios oficiales",
          body: "Ni instalaciones del gobierno: pedí permiso antes.",
        },
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "Fuera de la playa se tapan hombros y rodillas.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Casi nadie la acepta.",
        },
        {
          title: "No te metas al mar en cualquier lado",
          body: "El arrecife corta y las corrientes son fuertes: preguntá dónde se puede nadar.",
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
          tone: "warn",
          title: "Visa antes de viajar",
          body: "Todos los pasaportes tramitan la visa antes de viajar, con la reserva del alojamiento y el pasaje de salida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "La visa, aprobada antes de viajar",
          "Reserva del alojamiento",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "efectivo",
        title: "Para la isla",
        notice: {
          tone: "warn",
          title: "Efectivo para todo",
          body: "Hay muy pocos cajeros, y casi todo se paga en efectivo: llevá dólares australianos suficientes desde afuera.",
        },
        summary: "Lo que no se consigue allá",
        items: [
          "Dólares australianos en efectivo",
          "Una botella para cargar agua",
          "Calzado para el coral",
          "Una batería externa",
        ],
      },
      {
        id: "sol",
        title: "Para el sol",
        notice: null,
        summary: "Sobre el ecuador, con poca sombra",
        items: [
          "Protector solar alto",
          "Sombrero y lentes de sol",
          "Traje de baño y una remera de lycra",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Atención básica",
          body: "La atención médica es básica, y hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y para todo el viaje",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin la visa",
        why: "No se da al llegar.",
        instead: "La visa tramitada antes, con la reserva del hotel.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta.",
        instead: "Dólares australianos en efectivo.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Hay pocos vuelos por semana.",
        instead: "Días libres antes de la conexión internacional.",
      },
      {
        leave: "Ropa corta para el pueblo",
        why: "Fuera de la playa se tapan hombros y rodillas.",
        instead: "Remeras y pantalones o polleras livianas.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Nauru?",
        answer:
          "Sí: todos los pasaportes la tramitan antes de viajar, con la reserva del alojamiento y el pasaje de salida.",
      },
      {
        question: "¿Cómo se llega?",
        answer:
          "Con la aerolínea del país, desde Brisbane, Fiyi y otras islas del Pacífico, con pocos vuelos por semana.",
      },
      {
        question: "¿Cuál es la capital?",
        answer:
          "No tiene capital oficial: el gobierno y el parlamento están en Yaren.",
      },
      {
        question: "¿Qué se hace en Nauru?",
        answer:
          "Dar la vuelta a la isla, subir a la meseta del fosfato y a Command Ridge, pasar la tarde en Anibare y salir a pescar.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer: "El dólar australiano. Casi todo se paga en efectivo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El nauruano y el inglés, que se entiende en todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 240 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada.",
      },
    ],
  },
};
