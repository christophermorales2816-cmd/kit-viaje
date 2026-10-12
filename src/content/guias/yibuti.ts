import type { DestinationGuide } from "./types";

/**
 * Guía de Yibuti.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el lugar más caluroso de África en el planificador
 * —el lago Assal, con cuarenta y cinco grados de máxima en julio—, que le saca
 * el récord a Atar, en Mauritania, y una moneda atada al dólar desde 1949. El
 * dato de su portada son los tiburones ballena del golfo de Tadjoura. Ninguna
 * ciudad está cerca de la frontera con Eritrea, donde las recomendaciones de
 * viaje piden no ir, y al norte de Obock hace falta además un permiso: la guía
 * lo dice como dato de entrada.
 */
export const yibuti: DestinationGuide = {
  slug: "yibuti",
  country: "Yibuti",
  subregion: "África Oriental",
  subhead:
    "Tiburones ballena en el golfo de Tadjoura, el lago Assal en el punto más bajo de África, las chimeneas de piedra del lago Abbé y desiertos volcánicos, en uno de los países más calurosos del mundo.",

  image: null,

  highlights: [
    {
      value: "Tiburones ballena",
      label: "en el golfo de Tadjoura, de noviembre a enero",
      note: "Llegan cada año a la costa de Arta. Se nada con ellos con snorkel, desde un barco y con guía, sin tocarlos.",
    },
    {
      value: "+45 °C",
      label: "de máxima en el lago Assal en julio",
      note: "El lago, a más de ciento cincuenta metros bajo el nivel del mar, es el punto más bajo de África. De octubre a abril, en cambio, los días son agradables.",
    },
    {
      value: "Lago Abbé",
      label: "chimeneas de piedra que echan vapor al amanecer",
      note: "Cientos de chimeneas de piedra caliza en la orilla del lago, en un paisaje de otro planeta. Se llega en todoterreno y se duerme en un campamento para verlas al salir el sol.",
    },
    {
      value: "Franco",
      label: "atado al dólar desde 1949",
      note: "El franco yibutiano no cambia de valor frente al dólar, y en hoteles y agencias muchas veces se paga directamente en dólares o en euros.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Yibuti",
      body: [
        "Casi todos los pasaportes necesitan visa: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
        "Ninguna ciudad del planificador está cerca de la frontera con Eritrea, donde las recomendaciones de viaje piden no ir, y al norte de Obock hace falta además un permiso del gobierno. Si vas, revisá antes las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Yibuti",
      body: [
        "La moneda es el franco yibutiano, atado al dólar desde hace décadas.",
        "En hoteles, agencias y restaurantes de la capital se aceptan tarjetas, dólares y euros; afuera, efectivo en francos. Hay cajeros en la capital.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Uno de los países más calurosos del mundo",
      body: [
        "De octubre a abril, los días son cálidos y agradables, con el mar en calma: es la temporada para viajar.",
        "De junio a septiembre sopla el khamsin, un viento caliente y con polvo, y el calor pasa los cuarenta grados: el lago Assal llega a cuarenta y cinco en julio. Casi no llueve en todo el año.",
        "El bosque del Day, a más de mil quinientos metros en los montes Goda, es lo único fresco del país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a abril: la temporada fresca, la de los tiburones ballena —de noviembre a enero— y la mejor para el desierto y los lagos.",
        "De junio a septiembre, el calor es extremo: muchas excursiones se suspenden, y el viento agita el mar.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Yibuti",
      body: [
        "En la capital hay taxis, que se negocian antes de subir, y minibuses.",
        "A los lagos, al desierto y al bosque del Day se va en todoterreno con chofer, casi siempre con agencia: las rutas son de tierra en buena parte y no hay servicios en el camino. A las islas Moucha se va en barco desde la capital.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "La ciudad colonial francesa, el puerto y la cultura afar e issa.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Pescado a la yemení y cocina etíope, somalí y francesa en la capital.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "El lago Assal, las chimeneas del lago Abbé y desiertos volcánicos.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale: "Playas en las islas Moucha y en el golfo, con buen snorkel.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Hoteles y excursiones caros para lo que ofrecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Un país chico, pero casi todo se hace en todoterreno y con agencia.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El franco está atado al dólar.",
    },
  ],

  shines: [
    "Los tiburones ballena.",
    "Paisajes de otro planeta: el lago Assal y el lago Abbé.",
    "Un país chico, con mucho para ver en pocos días.",
  ],

  costs: [
    "Calor extremo de junio a septiembre.",
    "Caro, sobre todo para dormir.",
    "Casi todo en todoterreno y con agencia.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo la capital en enero que el lago Assal en julio o el bosque del Day. Los precios están en francos yibutianos y son órdenes de magnitud; las excursiones en todoterreno y los barcos cuestan bastante más.",

  places: [
    {
      id: "yibuti",
      name: "Yibuti",
      region: "Yibuti",
      tag: "La capital",
      blurb:
        "La capital y el puerto, con el barrio europeo de la época francesa, el mercado central y los cafés de la plaza Menelik. Es la base del planificador: días agradables de octubre a abril y calor extremo de junio a septiembre.",
      coords: [11.5886, 43.145],
      featured: true,
      image: null,
    },
    {
      id: "islas-moucha",
      name: "Islas Moucha",
      region: "Golfo de Tadjoura",
      tag: "Islas y arrecifes",
      blurb:
        "Islas de arena y manglares frente a la capital, con arrecifes de coral para snorkel y buceo. Se llega en barco en menos de una hora.",
      coords: [11.7167, 43.2],
      image: null,
    },
    {
      id: "arta",
      name: "Playa de Arta (tiburones ballena)",
      region: "Arta",
      tag: "Tiburones ballena",
      blurb:
        "La costa adonde llegan los tiburones ballena de noviembre a enero, con salidas en barco para nadar con ellos, y montañas que caen al mar.",
      coords: [11.59, 42.84],
      image: null,
    },
    {
      id: "ghoubbet",
      name: "Golfo de Ghoubbet",
      region: "Tadjoura",
      tag: "El golfo volcánico",
      blurb:
        "Un golfo cerrado entre volcanes, con la isla del Diablo en el medio y aguas profundas para bucear.",
      coords: [11.5667, 42.65],
      image: null,
    },
    {
      id: "lago-assal",
      name: "Lago Assal",
      region: "Tadjoura",
      tag: "El punto más bajo de África",
      blurb:
        "Un lago de sal a más de ciento cincuenta metros bajo el nivel del mar, con aguas turquesa y una orilla blanca de cristales. El lugar más caluroso de África en el planificador: en julio, cuarenta y cinco grados de máxima.",
      coords: [11.65, 42.4167],
      image: null,
    },
    {
      id: "lago-abbe",
      name: "Lago Abbé (chimeneas de piedra)",
      region: "Dikhil",
      tag: "Chimeneas de piedra",
      blurb:
        "Chimeneas de piedra caliza que echan vapor en la orilla del lago, con flamencos y pastores afar. Se duerme en un campamento para verlas al amanecer.",
      coords: [11.1167, 41.85],
      image: null,
    },
    {
      id: "tadjoura",
      name: "Tadjoura",
      region: "Tadjoura",
      tag: "La ciudad blanca",
      blurb:
        "La ciudad más antigua del país, de casas blancas y mezquitas, sobre el golfo y al pie de las montañas.",
      coords: [11.7833, 42.8833],
      image: null,
    },
    {
      id: "bosque-del-day",
      name: "Bosque del Day (montes Goda)",
      region: "Tadjoura",
      tag: "Lo único fresco",
      blurb:
        "Un bosque de enebros a más de mil quinientos metros, en los montes Goda, con caminatas y campamentos. El único lugar fresco del país.",
      coords: [11.7667, 42.66],
      image: null,
    },
    {
      id: "grand-bara",
      name: "Desierto del Grand Bara",
      region: "Arta",
      tag: "El desierto",
      blurb:
        "Una llanura enorme de arcilla blanca y plana entre montañas, con gacelas y espejismos, de camino al lago Abbé.",
      coords: [11.35, 42.7],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Yibuti, ropa liviana y fresca que cubra, sombrero de ala ancha, lentes de sol y protector: hace calor todo el año, y de junio a septiembre es extremo. Traje de baño y snorkel para el golfo, y un buzo para el bosque del Day y las noches del desierto.",
    keyPoints: [
      "De octubre a abril, días agradables; de junio a septiembre, calor extremo.",
      "Visa electrónica antes de viajar.",
      "Tiburones ballena de noviembre a enero, en el golfo de Tadjoura.",
      "Malaria en el país, también en la capital: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca que cubra, sombrero de ala ancha, lentes de sol y protector. Mucha agua.",
      templado:
        "Ropa liviana y un buzo para las noches del desierto y del bosque del Day.",
      fresco:
        "Un buzo y una campera liviana para las noches del bosque del Day y del lago Abbé.",
      frio: "No hace frío en Yibuti: un buzo y una campera liviana alcanzan.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en Francia. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá los tiburones ballena con tiempo",
          body: "La temporada es corta, y los barcos, pocos.",
        },
        {
          title: "Dormí en el lago Abbé",
          body: "Las chimeneas se ven mejor al amanecer.",
        },
        {
          title: "Tomá mucha agua",
          body: "Con el calor y el viento seco, la deshidratación llega rápido, aun en invierno.",
        },
        {
          title: "Vestite con ropa que cubra",
          body: "Es un país musulmán: fuera de la playa, hombros y rodillas cubiertos.",
        },
        {
          title: "Contratá las excursiones con agencia",
          body: "Al desierto y a los lagos se va en todoterreno, con un chofer que conozca el camino.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No toques a los tiburones ballena",
          body: "Se nada al lado, a distancia, y sin flash.",
        },
        {
          title: "No elijas el verano para el desierto",
          body: "De junio a septiembre, el calor pasa los cuarenta grados y muchas excursiones se suspenden.",
        },
        {
          title: "No camines descalzo sobre la sal del lago Assal",
          body: "Los cristales cortan, y el agua es tan salada que arde en cualquier herida.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de militares, del puerto o del aeropuerto: hay bases extranjeras, y está prohibido.",
        },
        {
          title: "No te salgas de los caminos en el desierto",
          body: "Sin un chofer que conozca la zona, es fácil perderse.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Sol y viento seco",
          body: "El calor deshidrata rápido: agua siempre a mano y la cabeza cubierta.",
        },
        summary: "Sol todo el año",
        items: [
          "Ropa liviana que cubra brazos y piernas",
          "Sombrero de ala ancha y lentes de sol",
          "Protector solar alto",
          "Una botella grande de agua",
          "Sales de rehidratación",
        ],
      },
      {
        id: "mar",
        title: "Para el golfo",
        notice: null,
        summary: "Snorkel, buceo y tiburones ballena",
        items: [
          "Traje de baño y una remera de lycra",
          "Máscara y snorkel propios",
          "Ojotas o zapatillas de agua",
          "Protector solar que no dañe el arrecife",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa electrónica",
          body: "Casi todos los pasaportes necesitan la visa electrónica, que se tramita online antes de viajar.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica, impresa",
          "Pasaje de salida del país",
          "Reserva de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en el país, también en la capital. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para la ciudad",
        why: "En un país musulmán, hombros y rodillas se cubren fuera de la playa.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Ropa sintética",
        why: "Con el calor, da más calor y no respira.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una sola botella chica de agua",
        why: "En el desierto no hay dónde comprar.",
        instead: "Varios litros por persona en cada excursión.",
      },
      {
        leave: "Ojotas para la sal y la roca",
        why: "La orilla del lago Assal y la lava cortan.",
        instead: "Zapatillas cerradas.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los todoterrenos hay poco lugar.",
        instead: "Un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Yibuti?",
        answer:
          "Casi todos los pasaportes la necesitan: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuándo se ven los tiburones ballena?",
        answer: "De noviembre a enero, en el golfo de Tadjoura, frente a Arta.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a abril, cuando los días son agradables. De junio a septiembre el calor es extremo.",
      },
      {
        question: "¿Hace falta ir con agencia?",
        answer:
          "Para el desierto y los lagos, casi siempre: se va en todoterreno, por rutas de tierra y sin servicios en el camino.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El franco yibutiano, atado al dólar. En hoteles y agencias se aceptan también dólares y euros.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, también en la capital. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés y el árabe son los oficiales; en la calle, el somalí y el afar.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada.",
      },
    ],
  },
};
