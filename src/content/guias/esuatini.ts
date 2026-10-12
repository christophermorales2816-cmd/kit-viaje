import type { DestinationGuide } from "./types";

/**
 * Guía de Esuatini.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la última monarquía absoluta de África, que se ve en
 * las ceremonias reales, y es el dato de su portada. Un país chico con tres
 * climas de oeste a este: el highveld fresco y con niebla, el middleveld
 * templado —donde está la base, el valle de Ezulwini— y el lowveld caluroso de
 * Hlane y Mkhaya, donde el bucket de lluvia (spec, 14.12) no se activa nunca.
 * El lilangeni vale lo mismo que el rand, y el enchufe es el M, como en
 * Sudáfrica.
 */
export const esuatini: DestinationGuide = {
  slug: "esuatini",
  country: "Esuatini",
  subregion: "África Austral",
  subhead:
    "Rinocerontes en Hlane y Mkhaya, el santuario de Mlilwane, las montañas de Malolotja y las ceremonias reales de Lobamba. Un reino chico entre Sudáfrica y Mozambique, con tres climas en pocos kilómetros.",

  image: null,

  highlights: [
    {
      value: "Monarquía",
      label: "absoluta, la última de África",
      note: "El rey gobierna, y las ceremonias reales son parte de la vida del país. Hasta 2018, el país se llamaba Suazilandia.",
    },
    {
      value: "Umhlanga",
      label: "la danza de las cañas, en agosto o septiembre",
      note: "Miles de jóvenes llevan cañas a la reina madre en Lobamba, en una ceremonia de varios días. Se puede mirar, sin sacar fotos donde no se permite.",
    },
    {
      value: "Rinocerontes",
      label: "de cerca en Hlane y Mkhaya",
      note: "Reservas chicas donde se ven a pocos metros, en vehículo o caminando con guardaparques.",
    },
    {
      value: "3 climas",
      label: "de la montaña fresca al lowveld caluroso",
      note: "En una hora se pasa de la niebla de Mbabane al calor de Hlane. En invierno, las noches del oeste bajan a cuatro grados.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Esuatini",
      body: [
        "Muchos pasaportes entran sin visa; otros la tramitan antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Casi todos llegan por tierra desde Sudáfrica o Mozambique, o en vuelos desde Johannesburgo: si pasás por Sudáfrica, revisá también su visa, y llevá páginas en blanco para los sellos.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Esuatini",
      body: [
        "La moneda es el lilangeni —en plural, emalangeni—, que vale lo mismo que el rand. El rand se acepta en todo el país; el lilangeni no se acepta en Sudáfrica, así que gastalo antes de salir.",
        "La tarjeta funciona en hoteles, reservas y supermercados; en los mercados, efectivo. Hay cajeros en Mbabane, Manzini y Ezulwini.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí la moneda local: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Tres climas en un país chico",
      body: [
        "Esuatini está en el hemisferio sur, con lluvias de verano, de octubre a marzo, e inviernos secos, de mayo a agosto.",
        "De oeste a este, el país baja en escalones: el highveld —Mbabane, Malolotja, Piggs Peak— es fresco y con niebla; el middleveld, en Ezulwini y Manzini, templado; el lowveld del este, en Hlane y Mkhaya, caluroso y seco.",
        "En invierno, las noches de Ezulwini rondan los cuatro grados y las de Malolotja, los tres; en el lowveld, en enero, el mediodía pasa los treinta.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre: temporada seca, la mejor para ver animales en el lowveld, con días templados y noches frías.",
        "De noviembre a marzo llueve por las tardes, hace calor en el este y el paisaje está verde. La danza de las cañas es a fines de agosto o en septiembre, y el Incwala, la ceremonia del rey, en diciembre o enero.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Esuatini",
      body: [
        "Las distancias son cortas: el país se cruza de un extremo al otro en pocas horas. Las rutas principales están asfaltadas, y se maneja por la izquierda.",
        "Entre las ciudades hay combis baratas y frecuentes; para las reservas, auto propio, una excursión o el traslado del lodge.",
        "En la montaña, la niebla aparece rápido: manejá despacio en las curvas del highveld.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Las ceremonias reales, el museo nacional de Lobamba y una cultura swazi que sigue viva.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale: "Pap con carne, sishwala y la cocina de los lodges.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Montañas con niebla en el oeste y sabana en el este, a pocos kilómetros.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Reservas y alojamientos razonables, más baratos que en Sudáfrica.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale: "Un país chico, con buenas rutas y todo a pocas horas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El lilangeni vale lo mismo que el rand, que flota y se mueve bastante.",
    },
  ],

  shines: [
    "Rinocerontes y safaris tranquilos, a buen precio.",
    "Ceremonias reales que siguen vivas.",
    "Un país chico, fácil de recorrer.",
  ],

  costs: [
    "Noches frías en invierno.",
    "Tormentas de verano en la montaña.",
    "Pocos vuelos: casi siempre se llega por Sudáfrica.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo el valle de Ezulwini en julio que Hlane o Malolotja. Los precios están en emalangeni y son órdenes de magnitud; una reserva con todo incluido, como Mkhaya, cuesta bastante más.",

  places: [
    {
      id: "ezulwini",
      name: "Valle de Ezulwini",
      region: "Middleveld",
      tag: "El valle del cielo",
      blurb:
        "El valle entre Mbabane y Manzini, con hoteles, mercados de artesanía y el santuario de Mlilwane al lado. Es la base del planificador: veranos templados con lluvias e inviernos secos de noches frías.",
      coords: [-26.4167, 31.1667],
      featured: true,
      image: null,
    },
    {
      id: "mbabane",
      name: "Mbabane",
      region: "Highveld",
      tag: "La capital",
      blurb:
        "Una capital chica en las colinas, con el mercado y la fábrica de vidrio soplado de Ngwenya cerca. Fresca, con niebla y lluvias de verano.",
      coords: [-26.3054, 31.1367],
      image: null,
    },
    {
      id: "manzini",
      name: "Manzini",
      region: "Middleveld",
      tag: "La ciudad comercial",
      blurb:
        "La ciudad más grande, con el mercado más animado del país. Más calurosa que Mbabane.",
      coords: [-26.4833, 31.3667],
      image: null,
    },
    {
      id: "mlilwane",
      name: "Santuario de Mlilwane",
      region: "Middleveld",
      tag: "Cebras y bicicleta",
      blurb:
        "El santuario más antiguo del país, sin grandes depredadores, que se recorre a pie, a caballo o en bicicleta entre cebras y antílopes.",
      coords: [-26.4833, 31.2],
      image: null,
    },
    {
      id: "lobamba",
      name: "Lobamba (aldea real)",
      region: "Middleveld",
      tag: "La aldea real",
      blurb:
        "El corazón real del país, con el museo nacional, el parlamento y el escenario de la danza de las cañas, a fines de agosto o en septiembre.",
      coords: [-26.4667, 31.2],
      image: null,
    },
    {
      id: "hlane",
      name: "Parque Real Hlane",
      region: "Lowveld",
      tag: "Leones y rinocerontes",
      blurb:
        "El área protegida más grande del país, con leones, elefantes y rinocerontes alrededor de los pozos. Caluroso en verano; la mejor época es el invierno.",
      coords: [-26.25, 31.9],
      image: null,
    },
    {
      id: "mkhaya",
      name: "Reserva de Mkhaya",
      region: "Lowveld",
      tag: "Rinocerontes a pie",
      blurb:
        "Una reserva chica y exclusiva, conocida por los rinocerontes negros y blancos, que se buscan a pie con guardaparques.",
      coords: [-26.6833, 31.7667],
      image: null,
    },
    {
      id: "malolotja",
      name: "Reserva de Malolotja",
      region: "Highveld",
      tag: "Montaña y canopy",
      blurb:
        "Montañas con cascadas, flores silvestres y un canopy entre los árboles. Fresca y lluviosa en verano, con noches de invierno de tres grados.",
      coords: [-26.1167, 31.1167],
      image: null,
    },
    {
      id: "piggs-peak",
      name: "Piggs Peak",
      region: "Highveld",
      tag: "Bosques del norte",
      blurb:
        "Un pueblo entre plantaciones de pinos y montañas, con la cascada de Phophonyane cerca. Fresco y con niebla.",
      coords: [-25.9667, 31.25],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Esuatini, ropa liviana para el día y un buzo para la noche casi todo el año; en invierno, de mayo a agosto, una campera de verdad, porque las noches del oeste bajan a cuatro grados. Para el lowveld, ropa fresca, sombrero y protector. De octubre a marzo, algo impermeable para las tormentas de la tarde. Siempre, un adaptador de tipo M.",
    keyPoints: [
      "Tres climas en pocos kilómetros: montaña fresca al oeste, lowveld caluroso al este.",
      "Inviernos secos con noches frías; lluvias de verano de octubre a marzo.",
      "El enchufe es el M, que casi ningún adaptador universal trae.",
      "Malaria solo en el lowveld, y sobre todo en la temporada de lluvias.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente para el lowveld.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el clima de Ezulwini casi todo el año.",
      fresco:
        "Capas: un buzo abrigado y una campera para la niebla del highveld y los safaris del amanecer.",
      frio: "Campera de abrigo para las noches de invierno en Mbabane, Malolotja y Piggs Peak.",
    },
    plug: {
      types: "Tipo M",
      voltage: "230 V, 50 Hz",
      note: "Tres patas redondas y gruesas, como en Sudáfrica, y casi ningún adaptador universal lo trae: se compra allá o en Sudáfrica. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Caminá entre rinocerontes en Mkhaya",
          body: "Con guardaparques, es una de las pocas formas de ver rinocerontes negros a pie.",
        },
        {
          title: "Recorré Mlilwane en bicicleta",
          body: "No hay grandes depredadores, y las cebras pasan al lado.",
        },
        {
          title: "Mirá las fechas de las ceremonias",
          body: "La danza de las cañas y el Incwala se fijan cada año: si coinciden con tu viaje, valen la pena.",
        },
        {
          title: "Comprá artesanía en Ezulwini y Malkerns",
          body: "Velas, vidrio soplado y cestería, en talleres que se pueden visitar.",
        },
        {
          title: "Combiná con el Kruger",
          body: "El parque sudafricano está a pocas horas de la frontera norte.",
        },
        {
          title: "Elegí pagar en la moneda local",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No saques fotos en las ceremonias sin permiso",
          body: "En algunos momentos y lugares está prohibido: preguntá antes.",
        },
        {
          title: "No bajes del vehículo en Hlane",
          body: "Salvo donde está permitido: hay leones y elefantes.",
        },
        {
          title: "No manejes de noche",
          body: "Hay animales sueltos y peatones en las rutas, y casi nada de luz.",
        },
        {
          title: "No subestimes el frío de la noche",
          body: "En invierno, el highveld baja a pocos grados.",
        },
        {
          title: "No te quedes con emalangeni",
          body: "No se aceptan en Sudáfrica.",
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
        title: "Para las reservas",
        notice: {
          tone: "info",
          title: "Madrugadas frías en invierno",
          body: "Los safaris salen temprano: en invierno hace frío al amanecer y calor al mediodía en el lowveld.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Buzo o campera para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Calzado cerrado para caminar",
        ],
      },
      {
        id: "electricidad",
        title: "Electrónica",
        notice: {
          tone: "warn",
          title: "El enchufe es de tipo M",
          body: "Casi ningún adaptador universal lo trae: comprá uno allá o en Sudáfrica.",
        },
        summary: "Para cargar todo",
        items: [
          "Adaptador de tipo M",
          "Una zapatilla para cargar varias cosas con un solo adaptador",
          "Cargadores que digan 100-240 V",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa de los países del camino",
          body: "Muchos pasaportes entran sin visa, pero casi todos llegan por Sudáfrica o Mozambique: revisá también esa visa. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y varias páginas en blanco",
          "La visa, si tu pasaporte la necesita, para Esuatini y para los países del camino",
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
          title: "Malaria, solo en el este",
          body: "Hay malaria en el lowveld, en Hlane y Mkhaya, sobre todo de noviembre a mayo; el resto del país tiene poco riesgo. Consultá con un médico de viajes si vas al este.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente, para el lowveld",
          "Protector solar alto",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "Las noches de invierno en la montaña bajan a pocos grados.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Solo un adaptador universal",
        why: "Casi ninguno trae el enchufe de tipo M.",
        instead: "Un adaptador de tipo M, comprado allá.",
      },
      {
        leave: "Ropa blanca o de colores fuertes para el safari",
        why: "Llama la atención de los animales y se ensucia con el polvo.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Sandalias para las caminatas",
        why: "Los senderos de Malolotja y de las reservas son de piedra y pasto alto.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "Dólares para pagar",
        why: "Casi nada se cobra en dólares: se paga en la moneda local o en rands.",
        instead: "Rands o emalangeni.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Esuatini?",
        answer:
          "Muchos pasaportes entran sin visa; otros la tramitan antes. Si llegás por Sudáfrica o Mozambique, revisá también la de esos países.",
      },
      {
        question: "¿Es lo mismo que Suazilandia?",
        answer:
          "Sí: el país cambió de nombre en 2018, y Esuatini es el nombre en la lengua local.",
      },
      {
        question: "¿Se puede pagar con rands?",
        answer:
          "Sí: el rand vale lo mismo que el lilangeni y se acepta en todo el país. Al revés no: el lilangeni no sirve en Sudáfrica.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre, la temporada seca, para ver animales. En verano llueve por las tardes y hace calor en el este.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Solo en el lowveld del este, y sobre todo en la temporada de lluvias. Consultá con un médico de viajes si vas a Hlane o Mkhaya.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, y casi seguro uno específico: el tipo M, de tres patas redondas grandes, no viene en los universales.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El siswati y el inglés, que es oficial y se habla en todos lados.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades suele serlo; en el campo, mejor filtrada o embotellada.",
      },
    ],
  },
};
