import type { DestinationGuide } from "./types";

/**
 * Guía de Papúa Nueva Guinea.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 16.2 decidió: entra con aviso, como Pakistán y los
 * países en duda de África. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: más de ochocientas lenguas —el dato de su
 * portada— y un país donde se vuela entre casi todas las ciudades, porque
 * desde la capital no hay ruta a la costa norte ni a las tierras altas: el
 * tramo largo del presupuesto es un vuelo interno. Ninguna ciudad del
 * planificador está en Hela, Southern Highlands, Enga ni el centro de
 * Bougainville, ni en las tierras altas fuera de Goroka.
 */
export const papuaNuevaGuinea: DestinationGuide = {
  slug: "papua-nueva-guinea",
  country: "Papúa Nueva Guinea",
  subregion: "Melanesia",
  subhead:
    "El camino de Kokoda, los fiordos de Tufi, los volcanes de Rabaul, el buceo de la bahía de Kimbe y los sing-sing de las tierras altas, en el país con más lenguas del mundo.",

  image: null,

  highlights: [
    {
      value: "Más de 800",
      label: "lenguas en un solo país, más que en ningún otro",
      note: "Cada valle tiene la suya. Para entenderse, el país usa el tok pisin, un criollo de base inglesa, además del inglés y el hiri motu.",
    },
    {
      value: "En avión",
      label: "entre casi todas las ciudades",
      note: "Desde Port Moresby no hay ruta a la costa norte ni a las tierras altas, y las islas quedan lejos: entre las ciudades del planificador se vuela, y el tramo largo del presupuesto es un vuelo interno.",
    },
    {
      value: "Kokoda",
      label: "el camino de la Segunda Guerra, a pie por la selva",
      note: "Noventa y seis kilómetros de selva y montaña entre Owers' Corner, cerca de Sogeri, y el pueblo de Kokoda, por donde pasó la batalla de 1942. Se camina en unos diez días, con guía y porteadores.",
    },
    {
      value: "Aves del paraíso",
      label: "en los trajes del sing-sing",
      note: "Decenas de especies viven en la isla, y sus plumas adornan los trajes de los sing-sing, los festivales donde se juntan grupos de todo el país, como el de Goroka, en septiembre.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Papúa Nueva Guinea",
      body: [
        "Casi todos los pasaportes necesitan visa, que se tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia, y en la frontera pueden pedirte el pasaje de salida y la reserva del alojamiento.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Papúa Nueva Guinea",
      body: [
        "La moneda es la kina. Los hoteles grandes y algunos comercios de Port Moresby aceptan tarjeta; en el resto se paga en efectivo.",
        "Hay cajeros en las ciudades, aunque no siempre aceptan tarjetas extranjeras ni tienen billetes. Sacá en la capital lo que vayas a necesitar afuera.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí kinas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor en la costa, fresco en las tierras altas",
      body: [
        "En la costa, calor húmedo todo el año. Port Moresby tiene una temporada seca de mayo a noviembre; Madang, Kimbe y Kavieng llueven casi todo el año.",
        "Goroka, a más de mil quinientos metros, tiene días templados y noches frescas todo el año.",
        "De diciembre a abril llueve más en casi todo el país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada seca en Port Moresby y el sur, la mejor para el camino de Kokoda.",
        "El sing-sing de Goroka es en septiembre, en los días de la independencia, y el festival de las máscaras de Kokopo, en julio.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Papúa Nueva Guinea",
      body: [
        "Entre las ciudades se vuela: desde Port Moresby no hay ruta a la costa norte ni a las tierras altas, y las islas quedan lejos. Los vuelos internos se cancelan o cambian de horario seguido, así que conviene dejar días de margen.",
        "En las ciudades, lo práctico es el auto con chofer del hotel o un taxi que te recomiende el alojamiento.",
        "A Tufi, a las islas y a los lugares de buceo se llega en avioneta o en barco, que suele organizar el alojamiento. Se maneja por la izquierda.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Papúa Nueva Guinea, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, el comienzo del camino de Kokoda, Tufi, Alotau, Madang, Rabaul, Kavieng, Kimbe y Goroka. Las provincias de Hela, Southern Highlands y Enga, el centro de Bougainville y el resto de las tierras altas no forman parte del planificador.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Culturas milenarias, sitios de la Segunda Guerra y el camino de Kokoda.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Mumu cocido bajo tierra, batata y pescado; poca variedad fuera de los hoteles.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Selva, volcanes, fiordos y arrecifes casi sin tocar.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Playas e islas en el norte y en Milne Bay, lejos de todo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Hoteles y vuelos caros para lo que ofrecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale: "Sin rutas entre las ciudades y vuelos que cambian seguido.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "La kina baja de a poco, sin saltos.",
    },
  ],

  shines: [
    "Culturas y lenguas que no se ven en otro lado.",
    "Buceo y naufragios casi sin turistas.",
    "Selva, volcanes y aves del paraíso.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Vuelos internos caros y poco previsibles.",
    "Hoteles caros para lo que ofrecen.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Port Moresby en enero que Goroka o Kavieng. Los precios están en kinas y son órdenes de magnitud; los lodges de buceo y los vuelos internos cuestan bastante más.",

  places: [
    {
      id: "port-moresby",
      name: "Port Moresby",
      region: "Distrito de la Capital Nacional",
      tag: "La capital",
      blurb:
        "La capital, sobre una bahía, con el Museo Nacional, el Parlamento con la fachada de una casa de los espíritus y el parque natural, con aves del paraíso. Es la base del planificador: calor todo el año, con lluvias de diciembre a abril y una temporada seca de mayo a noviembre.",
      coords: [-9.4438, 147.1803],
      featured: true,
      image: null,
    },
    {
      id: "sogeri",
      name: "Sogeri (camino de Kokoda)",
      region: "Provincia Central",
      tag: "El comienzo de Kokoda",
      blurb:
        "Una meseta a una hora de la capital, con el comienzo del camino de Kokoda en Owers' Corner, el cementerio de guerra de Bomana y plantaciones de caucho. Más fresca que la costa.",
      coords: [-9.4167, 147.4333],
      image: null,
    },
    {
      id: "tufi",
      name: "Tufi (fiordos)",
      region: "Oro",
      tag: "Fiordos tropicales",
      blurb:
        "Fiordos de origen volcánico cubiertos de selva, con buceo en los arrecifes y pueblos donde se hace la tapa, la tela de corteza.",
      coords: [-9.0833, 149.3167],
      image: null,
    },
    {
      id: "alotau",
      name: "Alotau (bahía Milne)",
      region: "Milne Bay",
      tag: "La bahía de la batalla",
      blurb:
        "La capital de Milne Bay, donde en 1942 el ejército japonés sufrió su primera derrota en tierra, con islas, buceo y el festival de canoas de noviembre.",
      coords: [-10.3167, 150.45],
      image: null,
    },
    {
      id: "madang",
      name: "Madang",
      region: "Madang",
      tag: "La ciudad de las islas",
      blurb:
        "Una ciudad de la costa norte con islas frente al puerto, buceo en naufragios de la Segunda Guerra y la ruta a las tierras altas. Llueve casi todo el año.",
      coords: [-5.2246, 145.7966],
      image: null,
    },
    {
      id: "rabaul",
      name: "Rabaul y Kokopo (volcanes)",
      region: "Nueva Bretaña Oriental",
      tag: "La ciudad de los volcanes",
      blurb:
        "Una ciudad cubierta de ceniza por la erupción de 1994, junto al volcán Tavurvur, que sigue humeando, con túneles japoneses y el festival de las máscaras de Kokopo.",
      coords: [-4.2, 152.1667],
      image: null,
    },
    {
      id: "kavieng",
      name: "Kavieng (Nueva Irlanda)",
      region: "Nueva Irlanda",
      tag: "Surf y buceo",
      blurb:
        "Un pueblo tranquilo en la punta de Nueva Irlanda, con surf de noviembre a abril, buceo en canales llenos de vida y una ruta que sigue la costa.",
      coords: [-2.5744, 150.7967],
      image: null,
    },
    {
      id: "kimbe",
      name: "Kimbe (Walindi, buceo)",
      region: "Nueva Bretaña Occidental",
      tag: "El buceo",
      blurb:
        "La bahía de Kimbe, con cientos de especies de coral, y Walindi, uno de los lugares de buceo más famosos del país. Llueve casi todo el año.",
      coords: [-5.55, 150.15],
      image: null,
    },
    {
      id: "goroka",
      name: "Goroka (tierras altas)",
      region: "Tierras Altas Orientales",
      tag: "Las tierras altas",
      blurb:
        "Un pueblo a más de mil quinientos metros, con el sing-sing de septiembre, los hombres de barro de Asaro y plantaciones de café. Días templados y noches frescas todo el año.",
      coords: [-6.0833, 145.3833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Papúa Nueva Guinea, ropa liviana y fresca que tape brazos y piernas, algo impermeable y repelente: hace calor húmedo en la costa y llueve seguido. Para Goroka, un buzo. Antes que nada, la recomendación de viaje de tu país, el seguro, la visa y la consulta por la malaria.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Visa tramitada online antes de viajar, para casi todos.",
      "Entre las ciudades se vuela, y los vuelos cambian seguido: dejá días de margen.",
      "Malaria en casi todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca que tape brazos y piernas, sombrero, protector y repelente.",
      templado:
        "Ropa liviana de día y un buzo para las noches de las tierras altas.",
      fresco:
        "Un buzo y una campera liviana para Goroka y las noches de montaña.",
      frio: "No hace frío en Papúa Nueva Guinea: un buzo alcanza, aun en las tierras altas.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Organizá los traslados con el alojamiento",
          body: "En las ciudades, lo práctico es el auto con chofer del hotel.",
        },
        {
          title: "Dejá días de margen",
          body: "Los vuelos internos se cancelan o cambian de horario seguido.",
        },
        {
          title: "Pedí permiso antes de sacar una foto",
          body: "Sobre todo a la gente, en los pueblos y los mercados.",
        },
        {
          title: "Andá a un sing-sing",
          body: "Los festivales juntan grupos de todo el país, con trajes de plumas y pintura.",
        },
        {
          title: "Sacá efectivo en la capital",
          body: "Afuera hay pocos cajeros, y no siempre andan.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No entres a una tierra sin permiso",
          body: "Casi toda la tierra es de los clanes: playas, cascadas y senderos se visitan con permiso, a veces pagando.",
        },
        {
          title: "No uses ropa corta fuera de los resorts",
          body: "En los pueblos se tapan rodillas y hombros.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Fuera de los hoteles grandes, todo se paga en efectivo.",
        },
        {
          title: "No armes un itinerario apretado",
          body: "Entre vuelos que cambian y barcos que dependen del mar, perder un día es normal.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Papúa Nueva Guinea y la visa, que casi todos tramitan online antes de viajar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa, aprobada",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Reserva de alojamiento y pasaje de salida",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer",
        notice: {
          tone: "info",
          title: "Vuelos que cambian",
          body: "Los vuelos internos se cancelan o cambian de horario seguido: confirmalos el día antes y dejá margen para el vuelo internacional.",
        },
        summary: "Selva, islas y vuelos internos",
        items: [
          "Calzado cerrado para la selva y una campera impermeable",
          "Ropa liviana que tape brazos y piernas",
          "Efectivo en kinas, en billetes chicos",
          "Una linterna y una batería externa",
        ],
      },
      {
        id: "mar",
        title: "Para el mar",
        notice: null,
        summary: "Buceo, snorkel y barcos",
        items: [
          "Traje de baño y una remera de lycra",
          "Protector solar que no dañe el arrecife",
          "Una bolsa estanca para los barcos",
          "La certificación de buceo, si buceás",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en casi todo el país, todo el año, salvo en las zonas más altas. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Solo la tarjeta",
        why: "Fuera de los hoteles grandes casi nadie la acepta, y hay pocos cajeros.",
        instead: "Efectivo, sacado en la capital.",
      },
      {
        leave: "Ropa corta",
        why: "En los pueblos se tapan rodillas y hombros, y la ropa larga protege de los mosquitos.",
        instead: "Pantalones y camisas livianas.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Los vuelos internos cambian seguido.",
        instead: "Días libres antes del vuelo internacional.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las avionetas y los barcos hay poco lugar, y el peso tiene límite.",
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
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Papúa Nueva Guinea y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Papúa Nueva Guinea?",
        answer:
          "Casi todos los pasaportes la necesitan, y se tramita online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cómo me muevo entre las ciudades?",
        answer:
          "En avión: desde Port Moresby no hay ruta a la costa norte ni a las tierras altas, y a las islas se vuela o se va en barco.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca en el sur. El sing-sing de Goroka es en septiembre.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en casi todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Hay más de ochocientas lenguas. Para entenderse se usan el tok pisin, el inglés y el hiri motu; con inglés te arreglás en los hoteles y las ciudades.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 240 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
