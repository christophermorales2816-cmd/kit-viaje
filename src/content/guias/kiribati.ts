import type { DestinationGuide } from "./types";

/**
 * Guía de Kiribati.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el segundo país del planificador partido por el
 * antimeridiano, y el más extremo. Tarawa está al oeste del meridiano 180 y
 * Kiritimati, a más de tres mil kilómetros al este, con dos horas más: UTC+14,
 * el dato de su portada. Su caja del test cruza la línea y el mapa junta los
 * pines con `sinSaltoDeAntimeridiano` (spec, 16.4). Usa el dólar australiano,
 * con centavos (spec, 16.3).
 */
export const kiribati: DestinationGuide = {
  slug: "kiribati",
  country: "Kiribati",
  subregion: "Micronesia",
  subhead:
    "Los restos de la batalla de Tarawa, los pueblos y las maneaba de las islas Gilbert, la pesca con mosca y las aves de Kiritimati, y el primer amanecer del mundo.",

  image: null,

  highlights: [
    {
      value: "UTC+14",
      label: "en Kiritimati, el primer lugar del mundo en empezar el día",
      note: "Kiribati movió la línea de cambio de fecha en 1995 para que todo el país tuviera el mismo día. Kiritimati quedó con la misma hora que Hawái, pero un día adelante.",
    },
    {
      value: "Tres grupos",
      label: "de islas, separados por miles de kilómetros",
      note: "Las islas Gilbert, con Tarawa; las Fénix, casi deshabitadas y área protegida, y las de la Línea, con Kiritimati. Kiribati es el único país que está en los cuatro hemisferios.",
    },
    {
      value: "Kiritimati",
      label: "el atolón con más tierra del mundo",
      note: "Famoso por la pesca con mosca en sus bajíos y por millones de aves marinas.",
    },
    {
      value: "Betio",
      label: "y la batalla de 1943, con cañones en la playa",
      note: "En la punta de Tarawa se peleó en 1943 una de las batallas más duras del Pacífico. Todavía hay cañones, búnkeres y restos de tanques en la costa.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Kiribati",
      body: [
        "Según el pasaporte, se entra sin visa por estadías cortas o con una visa que se tramita antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia, y en la frontera piden el pasaje de salida.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Kiribati",
      body: [
        "La moneda es el dólar australiano, con monedas propias de Kiribati que valen lo mismo y solo se aceptan en el país.",
        "Casi todo se paga en efectivo. Hay pocos cajeros, en Tarawa del Sur, y las tarjetas se aceptan en muy pocos lugares: llevá dólares australianos desde afuera.",
        "En Kiritimati, los alojamientos de pesca suelen cobrar todo junto, antes del viaje.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, sobre el ecuador",
      body: [
        "Calor húmedo y parejo todo el año, sobre el ecuador: las máximas rondan los treinta y un grados y las mínimas, los veinticinco.",
        "En Tarawa llueve más de diciembre a abril, sobre todo en enero; Kiritimati, en una franja seca del Pacífico, llueve poco, salvo los años de El Niño.",
        "Kiritimati tiene dos horas más que Tarawa, y es el primer lugar del mundo en empezar el día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier época sirve: no hay estaciones de temperatura, y los ciclones casi no llegan tan cerca del ecuador.",
        "El 12 de julio es el día de la independencia, con fiestas y danzas en Tarawa.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Kiribati",
      body: [
        "A Tarawa se llega desde Fiyi o Nauru, y a Kiritimati, desde Fiyi o Hawái: son dos puertas de entrada distintas, con pocos vuelos por semana.",
        "En Tarawa del Sur hay minibuses que recorren la ruta del atolón, y taxis. A las otras islas de las Gilbert se va en vuelo interno o en barco.",
        "Se maneja por la izquierda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La batalla de Tarawa de 1943 y la cultura de las maneaba, las casas de reunión.",
    },
    {
      dimension: "Gastronomía",
      score: 3,
      rationale: "Pescado, coco y fruta del pan; poca variedad.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Atolones, lagunas y las aves de Kiritimati.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Islotes de arena en las lagunas, lejos de Tarawa del Sur.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Alojamiento sencillo y caro para lo que ofrece.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Pocos vuelos, dos entradas separadas y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "Usa el dólar australiano.",
    },
  ],

  shines: [
    "La pesca con mosca de Kiritimati.",
    "Los restos de la batalla de Tarawa.",
    "La vida de los atolones, lejos de todo.",
  ],

  costs: [
    "Pocos vuelos, y caros.",
    "Tarawa del Sur, poblada y con poca playa.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Tarawa en enero que Kiritimati, del otro lado del antimeridiano. Los precios están en dólares australianos y son órdenes de magnitud; los alojamientos de pesca de Kiritimati cuestan bastante más.",

  places: [
    {
      id: "tarawa",
      name: "Tarawa",
      region: "Islas Gilbert",
      tag: "La capital",
      blurb:
        "La capital, una cadena de islotes unidos por calzadas sobre el borde sur de una laguna, con el parlamento y los pueblos de Bairiki y Bikenibeu. Es la base del planificador: calor parejo todo el año; llueve más de diciembre a abril, sobre todo en enero.",
      coords: [1.33, 172.98],
      featured: true,
      image: null,
    },
    {
      id: "betio",
      name: "Betio (la batalla de 1943)",
      region: "Islas Gilbert",
      tag: "La batalla",
      blurb:
        "La punta oeste de Tarawa, donde se peleó en 1943 una de las batallas más duras del Pacífico, con cañones, búnkeres y restos de tanques en la costa.",
      coords: [1.36, 172.93],
      image: null,
    },
    {
      id: "tarawa-norte",
      name: "Tarawa Norte",
      region: "Islas Gilbert",
      tag: "La Tarawa tranquila",
      blurb:
        "El lado norte del atolón, sin rutas, con pueblos tradicionales, islotes y la laguna, a un rato de lancha o caminando con la marea baja.",
      coords: [1.58, 172.98],
      image: null,
    },
    {
      id: "abaiang",
      name: "Abaiang",
      region: "Islas Gilbert",
      tag: "La primera misión",
      blurb:
        "Un atolón al norte de Tarawa, con pueblos de maneaba, la primera misión de las islas y una laguna para el snorkel.",
      coords: [1.84, 172.96],
      image: null,
    },
    {
      id: "marakei",
      name: "Marakei",
      region: "Islas Gilbert",
      tag: "La vuelta sagrada",
      blurb:
        "Un atolón casi cerrado alrededor de su laguna, al que el que llega por primera vez le da la vuelta como un rito, pidiendo permiso a los espíritus.",
      coords: [2, 173.27],
      image: null,
    },
    {
      id: "abemama",
      name: "Abemama",
      region: "Islas Gilbert",
      tag: "La isla de la luz de luna",
      blurb:
        "La isla de la luz de luna, donde vivió Robert Louis Stevenson, con una laguna grande y pueblos tradicionales.",
      coords: [0.4, 173.87],
      image: null,
    },
    {
      id: "butaritari",
      name: "Butaritari",
      region: "Islas Gilbert",
      tag: "La isla verde",
      blurb:
        "La isla más lluviosa y verde de las Gilbert, con bosque de fruta del pan, restos de la guerra y una laguna grande.",
      coords: [3.07, 172.78],
      image: null,
    },
    {
      id: "kiritimati",
      name: "Kiritimati (isla de Navidad)",
      region: "Islas de la Línea",
      tag: "El atolón más grande",
      blurb:
        "El atolón con más tierra del mundo, famoso por la pesca con mosca y por millones de aves marinas. Tiene dos horas más que Tarawa: es el primer lugar del mundo en empezar el día.",
      coords: [1.87, -157.4],
      image: null,
    },
    {
      id: "tabuaeran",
      name: "Tabuaeran (Fanning)",
      region: "Islas de la Línea",
      tag: "La laguna remota",
      blurb:
        "Un atolón remoto de las islas de la Línea, con una laguna enorme y pueblos casi sin servicios. Llueve más que en Kiritimati.",
      coords: [3.86, -159.36],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Kiribati, ropa liviana y fresca, traje de baño, protector, sombrero y repelente: hace calor parejo todo el año. Dólares australianos en efectivo desde afuera, días de margen para los vuelos y ropa que tape hombros y rodillas fuera de la playa.",
    keyPoints: [
      "Según el pasaporte, sin visa o con visa tramitada antes: verificá el tuyo.",
      "Tarawa y Kiritimati son dos entradas distintas, con pocos vuelos.",
      "Casi todo se paga en efectivo, en dólares australianos.",
      "Kiritimati tiene dos horas más que Tarawa: revisá la hora de cada vuelo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo fino para el avión y las lanchas.",
      fresco: "Un buzo liviano para las noches de viento y las lanchas.",
      frio: "No hace frío en Kiribati: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares australianos desde afuera",
          body: "Hay pocos cajeros, y las tarjetas se aceptan en muy pocos lugares.",
        },
        {
          title: "Recorré los restos de la batalla en Betio",
          body: "Cañones, búnkeres y tanques, en la costa de la punta de Tarawa.",
        },
        {
          title: "Pedí permiso para entrar a una maneaba",
          body: "La casa de reunión de cada pueblo: se entra con permiso, y se sienta en el piso.",
        },
        {
          title: "Reservá la pesca con tiempo",
          body: "Los alojamientos de pesca de Kiritimati tienen pocos lugares, y se llenan.",
        },
        {
          title: "Dejá días de margen",
          body: "Hay pocos vuelos por semana.",
        },
        {
          title: "Andá a Tarawa Norte",
          body: "Pueblos tradicionales e islotes, sin autos, a un rato de lancha.",
        },
      ],
      donts: [
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "En los pueblos se tapan hombros y rodillas.",
        },
        {
          title: "No te bañes en la laguna de Tarawa del Sur",
          body: "Cerca de los pueblos el agua no está limpia: mejor en Tarawa Norte o en las otras islas.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Casi nadie la acepta.",
        },
        {
          title: "No te confundas con la fecha",
          body: "Al volar de Hawái a Kiritimati se pierde un día: la hora es la misma, pero la fecha no.",
        },
        {
          title: "No dejes basura",
          body: "En un atolón no hay dónde ponerla: lo que traés, te lo llevás.",
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
          title: "Visa según el pasaporte",
          body: "Según el pasaporte, se entra sin visa o con una visa tramitada antes. En la frontera piden el pasaje de salida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "La visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "efectivo",
        title: "Para el atolón",
        notice: {
          tone: "warn",
          title: "Efectivo para todo",
          body: "Hay pocos cajeros, y las tarjetas se aceptan en muy pocos lugares: llevá dólares australianos suficientes desde afuera.",
        },
        summary: "Lo que no se consigue allá",
        items: [
          "Dólares australianos en efectivo",
          "Una linterna y una batería externa",
          "Una botella para cargar agua",
          "Calzado para el agua",
        ],
      },
      {
        id: "sol",
        title: "Para el sol y la pesca",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "Sobre el ecuador, el sol quema en minutos: protector alto, sombrero y una remera de lycra o de manga larga.",
        },
        summary: "Bajíos, lagunas y lancha",
        items: [
          "Protector solar alto",
          "Sombrero y lentes de sol polarizados",
          "Una remera de lycra o de manga larga",
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
        leave: "Ropa corta para los pueblos",
        why: "Fuera de la playa se tapan hombros y rodillas.",
        instead: "Remeras y pantalones o polleras livianas.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los barcos y las lanchas hay poco lugar.",
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
        question: "¿Necesito visa para entrar a Kiribati?",
        answer:
          "Depende del pasaporte: algunos entran sin visa por estadías cortas, y otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cómo se llega?",
        answer:
          "A Tarawa, desde Fiyi o Nauru; a Kiritimati, desde Fiyi o Hawái. Son dos entradas distintas, con pocos vuelos por semana.",
      },
      {
        question: "¿Qué hora es en Kiribati?",
        answer:
          "En Tarawa, doce horas más que Greenwich; en Kiritimati, catorce: es el primer lugar del mundo en empezar el día.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar australiano, con monedas propias de Kiribati que valen lo mismo. Casi todo se paga en efectivo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Cualquiera: no hay estaciones de temperatura. El 12 de julio es el día de la independencia.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El gilbertés y el inglés, que se entiende en Tarawa.",
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
