import type { DestinationGuide } from "./types";

/**
 * Guía de Maldivas.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el caso que la sección 14.3 anticipó. Moneda propia
 * —la rufiyaa— pero al viajero se le cobra en dólares, como en Camboya: los
 * precios van en USD y el corredor, en MVR. Y dos viajes distintos en un mismo
 * país: el de resort y el de isla local, con reglas distintas para el alcohol
 * y la ropa. Los precios son de isla local; los atolones de resorts llevan el
 * factor más alto que admite el planificador, y aun así se quedan cortos.
 */
export const maldivas: DestinationGuide = {
  slug: "maldivas",
  country: "Maldivas",
  subregion: "Asia del Sur",
  subhead:
    "Atolones de coral en medio del océano Índico, agua turquesa a treinta grados todo el año, tiburones ballena y mantas, y la elección entre un resort en una isla privada o una casa de huéspedes en una isla de pescadores.",

  image: null,

  highlights: [
    {
      value: "Bikini",
      label: "solo en las playas para turistas de las islas locales",
      note: "En las islas donde vive gente se viste con discreción y hay playas señaladas para el traje de baño. En los resorts, no hay reglas.",
    },
    {
      value: "1.190 islas",
      label: "repartidas en veintiséis atolones",
      note: "Unas doscientas están habitadas y otras tantas son resorts, cada uno en su propia isla.",
    },
    {
      value: "Tiburones ballena",
      label: "todo el año en el sur del atolón Ari",
      note: "Y mantas en la bahía de Hanifaru, en el atolón Baa, de mayo a noviembre.",
    },
    {
      value: "2,4 m",
      label: "el punto más alto del país",
      note: "Maldivas es el país más bajo del mundo: casi toda la tierra está a uno o dos metros sobre el mar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Maldivas",
      body: [
        "Todos los pasaportes reciben la visa de turista gratis al llegar, con el pasaje de salida y la reserva del alojamiento.",
        "Antes del vuelo hay que completar una declaración online del viajero, en los días previos a la llegada.",
        "No se puede entrar alcohol ni productos de cerdo: los retienen en el aeropuerto.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Maldivas",
      body: [
        "La moneda es la rufiyaa, pero los resorts, las lanchas, el buceo y muchas casas de huéspedes cobran en dólares. Los precios del planificador están en dólares.",
        "En los resorts y en Malé la tarjeta funciona en todos lados. En las islas locales, algo de efectivo en dólares o rufiyaas.",
        "Las cuentas de resorts y casas de huéspedes suman un cargo por servicio y los impuestos al final. Cuando una terminal te ofrece cobrarte en tu moneda, elegí dólares.",
      ],
    },
    {
      id: "clima",
      title: "Ecuatorial, con dos monzones",
      body: [
        "Maldivas está sobre el ecuador: calor parejo todo el año, alrededor de treinta grados, y el agua igual.",
        "De diciembre a abril sopla el monzón del noreste: es la época seca, con mar calmo y cielo claro.",
        "De mayo a noviembre, el del sudoeste trae más lluvia, viento y mar movido, aunque con muchos días de sol. Addu y Fuvahmulah, en el sur, tienen lluvia todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril: la temporada seca y la más cara.",
        "De mayo a noviembre los precios bajan, llueve más y es la época de las mantas en el atolón Baa.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Maldivas",
      body: [
        "Desde el aeropuerto, en la isla de Hulhulé, se sigue en lancha rápida, en hidroavión o en vuelo interno, según dónde esté la isla.",
        "Los hidroaviones vuelan solo de día: si llegás de noche, se duerme en Malé o Hulhumalé.",
        "Entre islas locales hay ferris públicos, baratos y lentos, que casi no salen los viernes. Las lanchas rápidas son más caras y más frecuentes.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 3,
      rationale:
        "La mezquita de coral de Malé y poco más; el motivo es el mar.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Atún de todas las formas, curry de pescado y garudhiya; en los resorts, de todo.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Atolones, bancos de arena y lagunas turquesa vistos desde el aire.",
    },
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "Arena blanca, agua turquesa y arrecifes a pasos de la orilla.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale:
        "Los resorts son de lo más caro del mundo; las islas locales bajan mucho el costo.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Visa al llegar para todos, pero cada isla pide lancha, hidroavión o vuelo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "Al viajero se le cobra en dólares.",
    },
  ],

  shines: [
    "Las playas y el mar.",
    "Vida marina enorme a pasos de la orilla.",
    "Visa al llegar para todos.",
  ],

  costs: [
    "Muy caro en los resorts.",
    "Moverse entre islas cuesta y lleva tiempo.",
    "Reglas estrictas en las islas locales.",
  ],

  dataScopeNote:
    "Elegís la isla o el atolón en el planificador y los cálculos se hacen con su clima, que casi no cambia en el año. Los precios están en dólares y son de isla local; los atolones de resorts llevan el factor más alto, y un resort puede costar varias veces más.",

  places: [
    {
      id: "male",
      name: "Malé",
      region: "Atolón Kaafu",
      tag: "La capital en una isla",
      blurb:
        "Una de las capitales más densas del mundo, con la antigua mezquita de coral, el mercado de pescado y lanchas por todos lados. Es la base del planificador: calor parejo todo el año.",
      coords: [4.1755, 73.5093],
      featured: true,
      image: null,
    },
    {
      id: "hulhumale",
      name: "Hulhumalé",
      region: "Atolón Kaafu",
      tag: "Junto al aeropuerto",
      blurb:
        "Una isla ganada al mar junto al aeropuerto, con playa, hoteles para la primera o la última noche y restaurantes.",
      coords: [4.2167, 73.54],
      image: null,
    },
    {
      id: "maafushi",
      name: "Maafushi (isla local)",
      region: "Atolón Kaafu",
      tag: "La isla de las casas de huéspedes",
      blurb:
        "Una de las primeras islas locales abiertas a casas de huéspedes, con playa para turistas, excursiones de snorkel y bancos de arena cerca.",
      coords: [3.9433, 73.49],
      image: null,
    },
    {
      id: "thoddoo",
      name: "Thoddoo (isla local)",
      region: "Atolón Alif Alif",
      tag: "Huertas y playa",
      blurb:
        "Una isla local de huertas de sandía y papaya, con playa para turistas y arrecife.",
      coords: [4.4383, 72.9583],
      image: null,
    },
    {
      id: "atolon-ari",
      name: "Atolón Ari (resorts)",
      region: "Atolón Ari",
      tag: "Tiburones ballena",
      blurb:
        "Uno de los atolones de resorts más grandes, con tiburones ballena todo el año en el sur y buceo con mantas.",
      coords: [3.86, 72.83],
      image: null,
    },
    {
      id: "atolon-baa",
      name: "Atolón Baa (resorts)",
      region: "Atolón Baa",
      tag: "Las mantas de Hanifaru",
      blurb:
        "Reserva de la biosfera, con la bahía de Hanifaru, donde se juntan mantas y tiburones ballena de mayo a noviembre.",
      coords: [5.15, 73.03],
      image: null,
    },
    {
      id: "lhaviyani",
      name: "Atolón Lhaviyani (resorts)",
      region: "Atolón Lhaviyani",
      tag: "Resorts del norte",
      blurb:
        "Un atolón de resorts al norte, con arrecifes y naufragios para bucear, a un vuelo corto en hidroavión.",
      coords: [5.33, 73.55],
      image: null,
    },
    {
      id: "addu",
      name: "Atolón Addu",
      region: "Atolón Addu",
      tag: "Al sur del ecuador",
      blurb:
        "El atolón más austral, con islas unidas por rutas, una antigua base británica en Gan y lluvia repartida todo el año.",
      coords: [-0.6301, 73.1586],
      image: null,
    },
    {
      id: "fuvahmulah",
      name: "Fuvahmulah",
      region: "Fuvahmulah",
      tag: "Tiburones tigre",
      blurb:
        "Una isla sola en el océano, con lagos de agua dulce y buceo con tiburones tigre, para buzos con experiencia.",
      coords: [-0.2985, 73.4239],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Maldivas es verano todo el año. Traje de baño, ropa liviana, protector solar que no dañe el arrecife, anteojos y sombrero. Para las islas locales, ropa que cubra hombros y rodillas. Una campera liviana para la lluvia de mayo a noviembre. Nada de alcohol ni cerdo en la valija.",
    keyPoints: [
      "Calor parejo todo el año; la época seca va de diciembre a abril.",
      "Visa gratis al llegar para todos, con la declaración online previa.",
      "En las islas locales: sin alcohol, ropa discreta y bikini solo en playas para turistas.",
      "Los precios se cobran en dólares.",
    ],
    adviceByBucket: {
      calido:
        "Traje de baño, ropa liviana, protector solar que no dañe el arrecife, sombrero y anteojos. Para las islas locales, algo que cubra hombros y rodillas.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado o la lancha de noche.",
      fresco: "Un buzo liviano para el viento en la lancha.",
      frio: "No hace frío en Maldivas: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo D y tipo G",
      voltage: "230 V, 50 Hz",
      note: "El tipo G es el británico, de tres patas planas; el D, de tres patas redondas. Un adaptador universal resuelve los dos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Completá la declaración antes de volar",
          body: "Es online y se hace en los días previos a la llegada.",
        },
        {
          title: "Coordiná el traslado con el alojamiento",
          body: "Cada isla tiene su lancha, su hidroavión o su vuelo, y el hotel lo organiza.",
        },
        {
          title: "Llevá protector que no dañe el arrecife",
          body: "El coral es lo que hace a Maldivas; el protector común lo daña.",
        },
        {
          title: "Combiná isla local y resort",
          body: "Unas noches en una casa de huéspedes bajan mucho el costo del viaje.",
        },
        {
          title: "Buscá la temporada de cada animal",
          body: "Tiburones ballena en Ari todo el año; mantas en Baa de mayo a noviembre.",
        },
        {
          title: "Elegí pagar en dólares",
          body: "Es la moneda en que están los precios. Cuando una terminal te ofrece cobrarte en tu moneda, decí que no.",
        },
      ],
      donts: [
        {
          title: "No lleves alcohol ni cerdo",
          body: "Los retienen en el aeropuerto. En los resorts sí se vende alcohol.",
        },
        {
          title: "No uses bikini fuera de las playas para turistas",
          body: "En las islas locales se viste con discreción.",
        },
        {
          title: "No toques el coral ni a los animales",
          body: "Ni con las manos ni con las patas de rana. Mirá desde arriba.",
        },
        {
          title: "No planees ferris públicos un viernes",
          body: "Casi no salen ese día.",
        },
        {
          title: "No llegues de noche sin plan",
          body: "Los hidroaviones vuelan solo de día: la primera noche puede ser en Malé.",
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
        title: "Documentos",
        notice: {
          tone: "info",
          title: "Visa al llegar",
          body: "Todos los pasaportes la reciben gratis, con la declaración online completa, el pasaje de salida y la reserva del alojamiento.",
        },
        summary: "Lo que te piden al llegar",
        items: [
          "Pasaporte con vigencia de sobra",
          "Declaración online del viajero",
          "Reserva del alojamiento",
          "Pasaje de salida",
        ],
      },
      {
        id: "mar",
        title: "Para el mar",
        notice: {
          tone: "info",
          title: "El arrecife empieza en la orilla",
          body: "Con un equipo de snorkel propio se aprovecha cada día, sin depender de excursiones.",
        },
        summary: "Lo que conviene llevar",
        items: [
          "Máscara y snorkel",
          "Protector solar que no dañe el arrecife",
          "Remera de lycra para el sol",
          "Bolsa estanca para el teléfono",
        ],
      },
      {
        id: "islas-locales",
        title: "Para las islas locales",
        notice: null,
        summary: "Para estar cómodo y respetar",
        items: [
          "Ropa liviana que cubra hombros y rodillas",
          "Un pareo para ir y volver de la playa",
          "Algo de efectivo",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el mareo en lancha",
          "Repelente",
          "Algo para el sol y las quemaduras",
        ],
      },
    ],
    avoid: [
      {
        leave: "Alcohol en la valija",
        why: "Lo retienen en el aeropuerto.",
        instead: "Nada: en los resorts se vende.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral.",
        instead: "Uno que no dañe el arrecife, y remera de lycra.",
      },
      {
        leave: "Solo bikinis para las islas locales",
        why: "Fuera de las playas para turistas se viste con discreción.",
        instead: "Un pareo y ropa liviana que cubra.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En lanchas e hidroaviones el espacio y el peso son limitados.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Abrigo",
        why: "Hace calor todo el año.",
        instead: "Un buzo liviano para el aire acondicionado.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. Los hoteles tienen uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Maldivas?",
        answer:
          "No hace falta tramitarla: todos los pasaportes la reciben gratis al llegar, con la declaración online, el pasaje de salida y la reserva.",
      },
      {
        question: "¿Resort o isla local?",
        answer:
          "El resort es una isla para vos, con todo incluido y caro. La isla local es más barata y real, sin alcohol y con ropa discreta. Se pueden combinar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la época seca. De mayo a noviembre llueve más y los precios bajan.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "En los resorts y los barcos de buceo, sí. En las islas locales, no.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Maldivas usa los tipos D y G a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Las cuentas suman un cargo por servicio. Además, es habitual dejar algo al personal del resort al final de la estadía.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Es desalinizada; los alojamientos dan agua embotellada o filtrada.",
      },
      {
        question: "¿Cómo llego a mi isla?",
        answer:
          "En lancha rápida, hidroavión o vuelo interno desde el aeropuerto de Malé, según la isla. Lo coordina el alojamiento.",
      },
    ],
  },
};
