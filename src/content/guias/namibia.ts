import type { DestinationGuide } from "./types";

/**
 * Guía de Namibia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el desierto frío. El Namib pasa los treinta y cinco
 * grados en verano y baja a cinco en las noches de julio, y la costa es fresca
 * y con niebla todo el año por la corriente de Benguela, así que el dato de la
 * portada es el abrigo y no el calor. Casi no llueve: el bucket de lluvia
 * (spec, 14.12) solo se activa en el Zambeze, en enero y febrero.
 * Es también un país que se recorre en auto propio y por ripio. El auto no
 * entra en el presupuesto, y la nota de los datos lo dice.
 * La entrada pide visa, desde 2025, a los pasaportes de los países que se la
 * piden a los namibios: se describe el mecanismo y no la lista.
 */
export const namibia: DestinationGuide = {
  slug: "namibia",
  country: "Namibia",
  subregion: "África Austral",
  subhead:
    "Las dunas rojas de Sossusvlei, los animales de Etosha, la costa de niebla de Swakopmund y los grabados de Twyfelfontein. Un desierto con noches frías y rutas de ripio.",

  image: null,

  highlights: [
    {
      value: "Desierto",
      label: "con noches de cinco grados en invierno",
      note: "En Sossusvlei, de junio a agosto, el día llega a los veinticinco grados y la madrugada baja a cinco. Aunque sea desierto, el buzo y la campera van en la valija.",
    },
    {
      value: "Dunas",
      label: "rojas de más de trescientos metros en Sossusvlei",
      note: "Se suben al amanecer, antes del calor. Al lado está Deadvlei, una hondonada blanca con árboles secos desde hace siglos.",
    },
    {
      value: "Etosha",
      label: "los animales alrededor de los pozos de agua",
      note: "En la temporada seca, elefantes, leones y rinocerontes se juntan en los pozos. Los campamentos del parque tienen pozos iluminados para mirar de noche.",
    },
    {
      value: "Ripio",
      label: "en la mayoría de las rutas",
      note: "Namibia se recorre en auto propio, casi siempre por caminos de ripio y con distancias largas entre una estación de servicio y otra. Se maneja por la izquierda.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Namibia",
      body: [
        "Desde 2025, la regla es la reciprocidad: Namibia les pide visa a los pasaportes de los países que se la piden a los namibios. Se tramita online antes de viajar o, en los aeropuertos y pasos principales, al llegar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra y páginas en blanco: en el sur de África los controles las cuentan.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Namibia",
      body: [
        "La moneda es el dólar namibio, que vale lo mismo que el rand sudafricano. El rand se acepta en todo el país; el dólar namibio no se acepta en Sudáfrica, así que gastalo antes de cruzar.",
        "La tarjeta funciona en hoteles, lodges, supermercados y en las estaciones de servicio de las ciudades. En el interior, llevá efectivo para el combustible y las compras chicas.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares namibios: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un desierto con invierno",
      body: [
        "Namibia está en el hemisferio sur: el verano va de noviembre a marzo y el invierno, de junio a agosto. Casi todo el país es desierto o semidesierto, con sol casi todos los días y mucha diferencia entre el día y la noche.",
        "En Sossusvlei, las madrugadas de julio rondan los cinco grados, y en el Kalahari, los tres; en enero, el mediodía pasa los treinta y cinco.",
        "La costa —Swakopmund, Lüderitz— es otra cosa: fresca y con niebla todo el año por la corriente fría de Benguela, con máximas de poco más de veinte grados hasta en verano. Las lluvias de verano llegan al norte, y solo en el Zambeze son fuertes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: temporada seca, cielos limpios y los animales juntos en los pozos de Etosha. Junio, julio y agosto son los meses de noches más frías; septiembre y octubre, los de más calor en el norte.",
        "De noviembre a abril es verano: calor fuerte en el interior y tormentas de tarde en Windhoek y el norte, que ponen verde el paisaje. Después de una tormenta, los ríos secos que cruzan los caminos pueden crecer de golpe.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Namibia",
      body: [
        "Casi todo el mundo recorre Namibia en un auto alquilado, muchas veces un 4x4 con carpa en el techo. Las rutas principales están asfaltadas; el resto, la mayoría, es ripio: manejá despacio, porque los vuelcos por velocidad son el accidente más común entre los viajeros.",
        "Las distancias son largas y las estaciones de servicio, pocas: cargá combustible cada vez que puedas y no manejes de noche, cuando hay animales en la ruta. Se maneja por la izquierda.",
        "Sin auto, hay buses entre Windhoek y la costa, vuelos internos y safaris organizados, con chofer y guía.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Los grabados en roca de Twyfelfontein, patrimonio de la humanidad, y los edificios de la época alemana en Swakopmund y Lüderitz.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Braai, carne de caza, kapana al paso en Windhoek y panaderías de tradición alemana en la costa.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Las dunas de Sossusvlei, el cañón del río Fish, la sabana de Etosha y una costa de desierto contra el Atlántico.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "Una costa fría y con niebla: el mar se mira más de lo que se nada.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Alojamiento y comida razonables; el auto, el combustible y los lodges hacen subir la cuenta.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Rutas señalizadas y buena red de alojamientos, pero hay que manejar mucho y casi todo por ripio.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El dólar namibio vale lo mismo que el rand, que flota y se mueve bastante.",
    },
  ],

  shines: [
    "Paisajes de desierto únicos: Sossusvlei, Deadvlei y el cañón del río Fish.",
    "Un safari por cuenta propia en Etosha, con el auto alquilado.",
    "Cielos limpios y noches de estrellas.",
  ],

  costs: [
    "Distancias largas, casi todas por ripio.",
    "Noches frías en invierno, aunque sea desierto.",
    "El auto de alquiler, casi obligatorio y caro.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Windhoek en julio que Sossusvlei o Swakopmund. Los precios están en dólares namibios y son órdenes de magnitud; no incluyen el auto de alquiler ni el combustible, que en Namibia son buena parte del viaje.",

  places: [
    {
      id: "windhoek",
      name: "Windhoek",
      region: "Centro",
      tag: "La capital",
      blurb:
        "Una capital chica y ordenada en la meseta, con la Christuskirche y los edificios de la época alemana. Es la base del planificador: veranos calurosos con tormentas e inviernos secos de noches frías.",
      coords: [-22.5609, 17.0658],
      featured: true,
      image: null,
    },
    {
      id: "sossusvlei",
      name: "Sossusvlei (Sesriem)",
      region: "Desierto del Namib",
      tag: "Las dunas rojas",
      blurb:
        "Dunas de arena roja que llegan a más de trescientos metros, Deadvlei y el cañón de Sesriem. Se entra al amanecer; en verano, el mediodía pasa los treinta y cinco grados.",
      coords: [-24.487, 15.801],
      image: null,
    },
    {
      id: "swakopmund",
      name: "Swakopmund",
      region: "Costa",
      tag: "Entre el desierto y el mar",
      blurb:
        "Una ciudad de aire alemán entre las dunas y el Atlántico, con sandboard, kayak entre focas en Walvis Bay y niebla casi todas las mañanas. Fresca todo el año.",
      coords: [-22.6784, 14.5266],
      image: null,
    },
    {
      id: "etosha",
      name: "Parque Etosha (Okaukuejo)",
      region: "Norte",
      tag: "Safari por cuenta propia",
      blurb:
        "Un salar enorme rodeado de pozos de agua, que se recorre en el auto propio. Okaukuejo, el campamento principal, tiene un pozo iluminado donde de noche bajan elefantes y rinocerontes.",
      coords: [-19.1785, 15.92],
      image: null,
    },
    {
      id: "damaraland",
      name: "Damaraland (Twyfelfontein)",
      region: "Noroeste",
      tag: "Grabados y elefantes del desierto",
      blurb:
        "Montañas de piedra rojiza, los grabados rupestres de Twyfelfontein, patrimonio de la humanidad, y elefantes adaptados al desierto. Calor seco casi todo el año.",
      coords: [-20.588, 14.37],
      image: null,
    },
    {
      id: "fish-river",
      name: "Cañón del río Fish (Ai-Ais)",
      region: "Sur",
      tag: "El cañón",
      blurb:
        "Uno de los cañones más grandes del mundo, con un trekking de varios días que solo se hace en invierno, y las aguas termales de Ai-Ais en el fondo. En verano, de lo más caluroso del país.",
      coords: [-27.9216, 17.4893],
      image: null,
    },
    {
      id: "luderitz",
      name: "Lüderitz",
      region: "Costa sur",
      tag: "El pueblo fantasma",
      blurb:
        "Un puerto de casas alemanas sobre una costa ventosa, y Kolmanskop, el pueblo minero de diamantes que tapa la arena. Fresco y seco todo el año.",
      coords: [-26.6481, 15.1594],
      image: null,
    },
    {
      id: "zambezi",
      name: "Katima Mulilo (Zambeze)",
      region: "Noreste",
      tag: "Ríos y humedales",
      blurb:
        "La franja verde del noreste, entre los ríos Zambeze y Chobe, con hipopótamos, pesca y parques chicos. Es la zona más lluviosa del país, sobre todo en enero y febrero.",
      coords: [-17.5, 24.2667],
      image: null,
    },
    {
      id: "kalahari",
      name: "Kalahari (Mariental)",
      region: "Centro-sur",
      tag: "Dunas rojas y lodges",
      blurb:
        "El borde oeste del Kalahari, con dunas rojas bajas y lodges en reservas privadas. En invierno, las madrugadas bajan a tres grados.",
      coords: [-24.6333, 17.9667],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Namibia es desierto, pero no siempre hace calor. Para el día, ropa liviana, sombrero y protector; para la madrugada y la noche, un buzo y una campera, que en invierno son de abrigo de verdad. En la costa, capas para la niebla y el viento. Todo el año, lentes de sol, mucha agua en el auto y un adaptador de tipo M, que casi ningún adaptador universal trae.",
    keyPoints: [
      "Mucha diferencia entre el día y la noche: en invierno, las madrugadas del desierto bajan a cinco grados.",
      "La costa es fresca y con niebla todo el año.",
      "Se recorre en auto propio, casi siempre por ripio y por la izquierda.",
      "La visa depende del pasaporte desde 2025: verificá el tuyo antes de viajar.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de manga larga, sombrero, lentes y protector: el sol del desierto quema. Mucha agua en el auto.",
      templado:
        "Ropa liviana para el día y un buzo para la noche, que en el desierto refresca rápido.",
      fresco:
        "Capas: un buzo abrigado y una campera rompevientos, para la costa y para las madrugadas.",
      frio: "Campera de abrigo, gorro y guantes para las madrugadas de invierno en el desierto y en los campamentos.",
    },
    plug: {
      types: "Tipos D y M",
      voltage: "220 V, 50 Hz",
      note: "Los de Sudáfrica: tres patas redondas, el M más grande. Casi ningún adaptador universal trae el M; se compra en el aeropuerto o en un supermercado. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Verificá si tu pasaporte necesita visa",
          body: "Desde 2025 depende del país. Si la necesitás, tramitala online antes de viajar.",
        },
        {
          title: "Subí las dunas al amanecer",
          body: "El parque abre con la salida del sol: la luz es la mejor y el calor todavía no empezó.",
        },
        {
          title: "Cargá combustible cada vez que puedas",
          body: "Entre una estación y otra puede haber cientos de kilómetros de ripio.",
        },
        {
          title: "Reservá los campamentos de los parques",
          body: "Los de Etosha y Sossusvlei se llenan en la temporada seca, meses antes.",
        },
        {
          title: "Llevá agua de sobra en el auto",
          body: "Varios litros por persona, por si el auto se queda en el camino.",
        },
        {
          title: "Elegí pagar en dólares namibios",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No manejes rápido en el ripio",
          body: "Los vuelcos por exceso de velocidad son el accidente más común entre los viajeros.",
        },
        {
          title: "No manejes de noche",
          body: "Hay animales en la ruta y casi nada de luz.",
        },
        {
          title: "No bajes del auto en Etosha",
          body: "Salvo en los campamentos y en los lugares marcados: hay leones.",
        },
        {
          title: "No subestimes el frío de la noche",
          body: "En invierno, la madrugada del desierto baja a cinco grados.",
        },
        {
          title: "No te quedes con dólares namibios",
          body: "No se aceptan fuera del país, ni siquiera en Sudáfrica.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "ruta",
        title: "Para la ruta",
        notice: {
          tone: "info",
          title: "Ripio y distancias",
          body: "Las rutas son largas y casi todas de ripio, con poca señal de teléfono. Salí temprano y llegá antes de que oscurezca.",
        },
        summary: "Lo que pide el auto",
        items: [
          "Licencia de conducir y, si te la piden, la internacional",
          "Mapas descargados en el teléfono",
          "Agua de sobra",
          "Un cargador para el auto",
          "Lentes de sol",
        ],
      },
      {
        id: "electricidad",
        title: "Electrónica",
        notice: {
          tone: "warn",
          title: "El enchufe es de tipo M",
          body: "Casi ningún adaptador universal lo trae: comprá uno al llegar, en el aeropuerto o en un supermercado.",
        },
        summary: "Para cargar todo",
        items: [
          "Adaptador de tipo M, comprado allá",
          "Una zapatilla para cargar varias cosas con un solo adaptador",
          "Cargadores que digan 100-240 V",
          "Linterna o frontal para los campamentos",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa depende del pasaporte",
          body: "Desde 2025, Namibia les pide visa a los países que se la piden a los namibios. Verificá el tuyo antes de viajar y, si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
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
          tone: "info",
          title: "Malaria, solo en el norte",
          body: "Hay malaria en el norte —el Zambeze, el Kavango y la zona de Etosha—, sobre todo en la temporada de lluvias. El centro, el sur y la costa no tienen. Consultá con un médico de viajes si vas al norte.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector solar alto y protector labial",
          "Repelente, para el norte",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "Las noches del desierto son frías, y en invierno bajan a cinco grados.",
        instead: "Un buzo y una campera de abrigo.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En el baúl de un 4x4 y en las avionetas entra mejor un bolso blando.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Solo un adaptador universal",
        why: "Casi ninguno trae el enchufe de tipo M.",
        instead: "Un adaptador de tipo M, comprado allá.",
      },
      {
        leave: "Ropa blanca para todo el viaje",
        why: "El polvo del ripio y de las dunas la tiñe en un día.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Sandalias para las dunas",
        why: "La arena quema al mediodía y se llenan.",
        instead: "Zapatillas cerradas.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Namibia?",
        answer:
          "Depende del pasaporte: desde 2025, Namibia les pide visa a los países que se la piden a los namibios. Se tramita online o al llegar. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Hace frío en el desierto?",
        answer:
          "De noche, sí. En invierno, de junio a agosto, las madrugadas de Sossusvlei rondan los cinco grados, y la costa es fresca todo el año.",
      },
      {
        question: "¿Hace falta un 4x4?",
        answer:
          "Para las rutas principales y casi todo el ripio alcanza un auto alto; para la arena y los caminos de montaña, sí hace falta. Consultalo con la agencia según el recorrido.",
      },
      {
        question: "¿Se puede pagar con rands?",
        answer:
          "Sí, el rand vale lo mismo que el dólar namibio y se acepta en todo el país. Al revés no: el dólar namibio no sirve en Sudáfrica.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Solo en el norte, sobre todo en la temporada de lluvias. El centro, el sur y la costa no tienen. Si vas al norte, consultá con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, y casi seguro uno específico: el tipo M, de tres patas redondas grandes, no viene en los universales. Se compra allá.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca: cielos limpios y los animales juntos en los pozos de Etosha.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Windhoek y en las ciudades, en general sí; en el campo y en los lodges, mejor preguntar o tomar embotellada.",
      },
    ],
  },
};
