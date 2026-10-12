import type { DestinationGuide } from "./types";

/**
 * Guía de Botsuana.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el agua al revés. El delta del Okavango se inunda
 * en plena temporada seca, con lluvias que cayeron meses antes en Angola, y
 * eso va en la portada. El invierno es la temporada alta y es frío: el Kalahari
 * Central baja a dos grados en julio.
 * La base es Maun y no Gaborone, la capital, como Arusha en Tanzania: es la
 * puerta del delta. Los lodges del delta se venden en paquetes en dólares, muy
 * por encima de lo que muestra el presupuesto, y la nota de los datos lo dice.
 * Gaborone, Tsodilo y Serowe llevan una excepción en su migración: la entrada
 * a lo que se visita ahí es mucho más barata que la de los parques del norte.
 */
export const botsuana: DestinationGuide = {
  slug: "botsuana",
  country: "Botsuana",
  subregion: "África Austral",
  subhead:
    "El delta del Okavango en mokoro, los elefantes del Chobe, los salares de Makgadikgadi y el Kalahari. Safaris con pocos vehículos alrededor, en un invierno seco de noches frías.",

  image: null,

  highlights: [
    {
      value: "Okavango",
      label: "se inunda en plena temporada seca",
      note: "El agua llega desde las lluvias de Angola y llena el delta de junio a agosto, cuando en Botsuana no llueve. Es la mejor época para recorrerlo en mokoro, la canoa tradicional.",
    },
    {
      value: "Elefantes",
      label: "la población más grande del mundo, sobre todo en el norte",
      note: "En la temporada seca, las manadas bajan al río Chobe a tomar agua, y se ven desde un barco al atardecer.",
    },
    {
      value: "2 °C",
      label: "de mínima en el Kalahari en julio",
      note: "El invierno es seco, de días templados y noches frías. Los safaris salen al amanecer en vehículos abiertos: campera, gorro y guantes van en la valija.",
    },
    {
      value: "Salares",
      label: "los de Makgadikgadi, entre los más grandes del mundo",
      note: "Una llanura blanca hasta el horizonte en la temporada seca, con suricatas. Con las lluvias llegan las cebras y, cuando se inundan, los flamencos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Botsuana",
      body: [
        "Muchos pasaportes entran sin visa; el resto la tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Al entrar, los visitantes de fuera de la región pagan una tasa turística. El pasaporte tiene que tener vigencia de sobra y páginas en blanco: en el sur de África los controles las cuentan.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Botsuana",
      body: [
        "La moneda es la pula. La tarjeta funciona en hoteles, lodges y supermercados; en los pueblos y los mercados, efectivo.",
        "Los lodges, los safaris y las avionetas a los campamentos del delta se cotizan casi siempre en dólares, y muchas veces se pagan antes, desde casa. Si llevás dólares, que sean billetes nuevos y sanos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí pulas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "El invierno es la temporada alta",
      body: [
        "Botsuana está en el hemisferio sur. El verano, de noviembre a marzo, trae calor y tormentas de tarde; el invierno, de mayo a agosto, es seco, con días templados y noches frías.",
        "En el Kalahari, las madrugadas de julio rondan los dos grados; en Maun, los cinco. Octubre es el mes más caluroso: en Maun y en Kasane, el mediodía llega a los treinta y cinco.",
        "El delta del Okavango va al revés: el agua llega desde las lluvias de Angola y lo inunda de junio a agosto, en plena temporada seca.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: temporada seca y temporada alta. Los animales se juntan cerca del agua, el delta está lleno y los campamentos, también; se reservan con meses de anticipación.",
        "De noviembre a abril llueve, hace calor y los precios bajan. Es la época de los nacimientos, de los pájaros migratorios y de las cebras en los salares de Makgadikgadi.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Botsuana",
      body: [
        "A los campamentos del delta se llega en avioneta, desde Maun o Kasane, hasta la pista de cada uno; adentro, en mokoro, lancha o vehículo abierto. Las avionetas aceptan poco peso y piden bolsos blandos.",
        "Entre Maun, Kasane y los salares se puede manejar, en un 4x4 alquilado o en un safari organizado. Las rutas entre ciudades están asfaltadas; en los parques, hay arena profunda. Se maneja por la izquierda.",
        "En las rutas hay vacas, burros y, en el norte, elefantes: no se maneja de noche.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "Las pinturas rupestres de Tsodilo, patrimonio de la humanidad, y la historia de los Khama en Serowe. Lo de Botsuana son los animales.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Seswaa, la carne desmenuzada que es plato nacional, con pap; en los lodges, cocina internacional.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "El delta del Okavango, los salares de Makgadikgadi y la inmensidad del Kalahari.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar; el agua es la del delta y la de los ríos.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale:
        "El país eligió pocos visitantes que paguen mucho: los campamentos del delta están entre los más caros de África.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Avionetas a los campamentos y safaris bien organizados; por cuenta propia, hace falta un 4x4 y experiencia en arena.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "La pula es de las monedas más estables de África, y los lodges cotizan en dólares.",
    },
  ],

  shines: [
    "El delta del Okavango, en mokoro y en avioneta.",
    "Elefantes en cantidad, en el Chobe.",
    "Safaris con pocos vehículos alrededor.",
  ],

  costs: [
    "Campamentos y avionetas muy caros.",
    "Madrugadas frías en invierno, en vehículo abierto.",
    "Calor fuerte en octubre y noviembre.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Maun en julio que el Kalahari o Kasane. Los precios están en pulas y son órdenes de magnitud; los campamentos del delta se venden en paquetes en dólares, con avioneta incluida, que pueden costar varias veces más.",

  places: [
    {
      id: "maun",
      name: "Maun",
      region: "Noroeste",
      tag: "La puerta del delta",
      blurb:
        "El pueblo desde donde salen las avionetas y los mokoros al delta del Okavango, con lodges sobre el río Thamalakane. Es la base del planificador: veranos calurosos con tormentas e inviernos secos de noches frías.",
      coords: [-19.9833, 23.4167],
      featured: true,
      image: null,
    },
    {
      id: "okavango",
      name: "Delta del Okavango",
      region: "Noroeste",
      tag: "En mokoro",
      blurb:
        "Un delta en medio del desierto, con lagunas, islas y canales que se recorren en mokoro. Se llega en avioneta a los campamentos; el agua está alta de junio a agosto.",
      coords: [-19.3, 22.9],
      image: null,
    },
    {
      id: "kasane",
      name: "Kasane (Chobe)",
      region: "Chobe",
      tag: "Elefantes en el río",
      blurb:
        "La puerta del Parque Nacional Chobe, con paseos en barco al atardecer entre elefantes e hipopótamos. Las Cataratas Victoria quedan cerca, del otro lado de la frontera.",
      coords: [-17.8167, 25.15],
      image: null,
    },
    {
      id: "moremi",
      name: "Reserva de Moremi",
      region: "Noroeste",
      tag: "Tierra y agua",
      blurb:
        "La parte del delta que se recorre en vehículo, con leones, leopardos y perros salvajes, y lagunas que se navegan en lancha.",
      coords: [-19.2, 23.4],
      image: null,
    },
    {
      id: "makgadikgadi",
      name: "Salares de Makgadikgadi (Gweta)",
      region: "Central",
      tag: "Salares y suricatas",
      blurb:
        "Llanuras de sal hasta el horizonte, suricatas acostumbradas a la gente y baobabs gigantes. Con las lluvias, cebras y flamencos.",
      coords: [-20.2, 25.2667],
      image: null,
    },
    {
      id: "kalahari-central",
      name: "Kalahari Central",
      region: "Ghanzi",
      tag: "El desierto",
      blurb:
        "Una de las reservas más grandes de África, con leones de melena negra y valles de ríos secos como Deception Valley. Campamentos sin servicios, y madrugadas de julio que bajan a dos grados.",
      coords: [-22, 23.5],
      image: null,
    },
    {
      id: "gaborone",
      name: "Gaborone",
      region: "Sudeste",
      tag: "La capital",
      blurb:
        "Una capital joven y tranquila, con el monumento a los Tres Jefes y la reserva de Mokolodi a minutos. En invierno, noches más frías que en el norte.",
      coords: [-24.6282, 25.9231],
      image: null,
    },
    {
      id: "tsodilo",
      name: "Colinas de Tsodilo",
      region: "Noroeste",
      tag: "Pinturas rupestres",
      blurb:
        "Cuatro colinas sagradas para los san, con miles de pinturas en la roca. Patrimonio de la humanidad, al oeste del delta.",
      coords: [-18.7667, 21.7333],
      image: null,
    },
    {
      id: "serowe",
      name: "Serowe (Khama Rhino)",
      region: "Central",
      tag: "Rinocerontes",
      blurb:
        "Uno de los pueblos más grandes del país, cuna de los Khama, y el santuario de rinocerontes que la comunidad maneja en las afueras.",
      coords: [-22.3833, 26.7167],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para los safaris de Botsuana, ropa liviana de colores neutros para el día y abrigo de verdad para la madrugada y la noche: en invierno, los vehículos abiertos salen con cinco grados o menos. En verano, ropa fresca y algo impermeable para las tormentas. Todo el año, sombrero, protector, repelente y un bolso blando, que es lo que aceptan las avionetas.",
    keyPoints: [
      "Invierno seco de mayo a agosto, con madrugadas que en el Kalahari bajan a dos grados.",
      "El delta del Okavango se llena de junio a agosto, sin lluvia.",
      "A los campamentos del delta se llega en avioneta: bolso blando y poco peso.",
      "Malaria en el norte: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de colores neutros, sombrero, protector y repelente. Algo impermeable para las tormentas de verano.",
      templado:
        "Ropa liviana para el día y un buzo para la noche, que en el desierto refresca rápido.",
      fresco:
        "Capas: un buzo abrigado y una campera para los safaris del amanecer, que en el vehículo abierto son fríos.",
      frio: "Campera de abrigo, gorro y guantes para las madrugadas de invierno, en el Kalahari y en los vehículos abiertos.",
    },
    plug: {
      types: "Tipos D, G y M",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el británico, de tres patas rectangulares; en algunos lugares aparecen los de tres patas redondas, D y M. Un adaptador universal cubre el G y el D, pero casi nunca el M. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá con meses de anticipación",
          body: "Los campamentos del delta tienen pocas carpas y se llenan para la temporada seca.",
        },
        {
          title: "Llevá un bolso blando",
          body: "Las avionetas a los campamentos aceptan poco peso y no cargan valijas rígidas.",
        },
        {
          title: "Recorré el delta en mokoro",
          body: "Los canales en la canoa tradicional, con un guía que empuja con una vara, son lo más propio de Botsuana.",
        },
        {
          title: "Llevá binoculares",
          body: "Hacen la diferencia en un safari, sobre todo con los pájaros del delta.",
        },
        {
          title: "Combiná con las Cataratas Victoria",
          body: "Desde Kasane se cruza a Zimbabue o a Zambia, y se pueden visitar en el día.",
        },
        {
          title: "Elegí pagar en pulas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No bajes del vehículo en los parques",
          body: "Salvo donde el guía lo permita: los animales son salvajes.",
        },
        {
          title: "No camines solo de noche en el campamento",
          body: "Muchos no tienen cerco y los animales pasan entre las carpas: de noche, te acompaña alguien del personal.",
        },
        {
          title: "No manejes de noche",
          body: "Hay vacas, burros y elefantes en las rutas.",
        },
        {
          title: "No subestimes el frío del amanecer",
          body: "En invierno, el safari sale con cinco grados o menos y en vehículo abierto.",
        },
        {
          title: "No te quedes con pulas al final",
          body: "Fuera de la región cuesta cambiarlas.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Madrugadas frías",
          body: "Los safaris salen al amanecer en vehículos abiertos: en invierno hace frío de verdad temprano, y calor al mediodía.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Campera, gorro y guantes para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Un pañuelo para el polvo",
        ],
      },
      {
        id: "avioneta",
        title: "Para las avionetas",
        notice: {
          tone: "info",
          title: "Poco peso y bolso blando",
          body: "Los vuelos a los campamentos aceptan poco equipaje por persona, contando el de mano, y solo en bolsos blandos. Preguntá el límite al reservar.",
        },
        summary: "Viajar liviano",
        items: [
          "Bolso blando, sin ruedas ni estructura rígida",
          "Pocas mudas: casi todos los campamentos lavan la ropa",
          "Una mochila chica para el día",
          "Lo valioso y la medicación, en la mochila",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa según el pasaporte",
          body: "Muchos pasaportes entran sin visa y otros la tramitan online antes; al entrar se paga una tasa turística. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas en blanco",
          "La visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria en el norte",
          body: "Hay malaria en el norte —el delta, el Chobe y Maun—, sobre todo de noviembre a junio; el sur tiene poco riesgo. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una valija rígida",
        why: "Las avionetas a los campamentos solo aceptan bolsos blandos.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las madrugadas de invierno bajan a cinco grados, y el safari sale en vehículo abierto.",
        instead: "Campera, gorro y guantes.",
      },
      {
        leave: "Ropa blanca o de colores fuertes",
        why: "Llama la atención de los animales y se ensucia con el polvo.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Muchas mudas",
        why: "Casi todos los campamentos lavan la ropa, y las avionetas aceptan poco peso.",
        instead: "Pocas mudas, que se lavan allá.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en lodges y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "En muchos campamentos la electricidad es solar y no alcanza para él.",
        instead: "Una toalla de microfibra.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Botsuana?",
        answer:
          "Depende del pasaporte: muchos entran sin visa y otros la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuándo está inundado el delta del Okavango?",
        answer:
          "De junio a agosto, en plena temporada seca: el agua llega desde las lluvias de Angola, meses después de que cayeron.",
      },
      {
        question: "¿Hace frío en Botsuana?",
        answer:
          "En invierno, de mayo a agosto, las madrugadas son frías: en el Kalahari rondan los dos grados. En verano hace calor.",
      },
      {
        question: "¿Por qué los safaris son tan caros?",
        answer:
          "El país eligió pocos visitantes que paguen mucho: los parques y las concesiones del norte cobran tarifas altas para proteger la vida salvaje.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en el norte —el delta, el Chobe y Maun—, sobre todo de noviembre a junio. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí: lo más común es el británico, tipo G, a 230 V; en algunos lugares aparece el M, que los universales casi nunca traen.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí: a guías, rastreadores y a quien empuja el mokoro, y al personal del campamento, casi siempre en una caja común.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades suele serlo; en los campamentos, preguntá: casi todos dan agua filtrada.",
      },
    ],
  },
};
