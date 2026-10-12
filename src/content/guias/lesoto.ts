import type { DestinationGuide } from "./types";

/**
 * Guía de Lesoto.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el único país del mundo entero por encima de los mil
 * metros —su punto más bajo está a mil cuatrocientos—, y es el dato de su
 * portada. El invierno es frío de verdad: Maseru baja de cero en julio y
 * Afriski, a más de tres mil metros, ronda los ocho bajo cero, la mínima más
 * baja de África en el planificador. Se esquía de junio a agosto.
 * Casi todos entran por Sudáfrica, así que la visa sudafricana importa también
 * para Lesoto, y el enchufe es el M, como allá.
 */
export const lesoto: DestinationGuide = {
  slug: "lesoto",
  country: "Lesoto",
  subregion: "África Austral",
  subhead:
    "Montañas de más de tres mil metros, aldeas basotho, cabalgatas en pony, la cascada de Maletsunyane y el paso Sani. Un reino en las alturas, rodeado por Sudáfrica, con nieve en invierno.",

  image: null,

  highlights: [
    {
      value: "1.400 m",
      label: "el punto más bajo del país",
      note: "Lesoto es el único país del mundo que está entero por encima de los mil metros. El clima lo manda la altura: veranos templados e inviernos fríos, con heladas en todo el país.",
    },
    {
      value: "−8 °C",
      label: "de mínima en Afriski en julio",
      note: "En invierno nieva en la montaña, y Afriski, a más de tres mil metros, es de las pocas pistas de esquí de África. Abrigo de verdad: campera, gorro y guantes.",
    },
    {
      value: "Ponis",
      label: "basotho para recorrer la montaña",
      note: "En Malealea y en Semonkong se sale a caballo, con guía, por senderos adonde no llegan los autos.",
    },
    {
      value: "Mantas",
      label: "basotho, el abrigo de todo el país",
      note: "La manta de lana con dibujos se usa como abrigo en la calle y a caballo, y es también el mejor recuerdo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Lesoto",
      body: [
        "Muchos pasaportes entran sin visa; otros la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Lesoto está rodeado por Sudáfrica, y casi todos llegan por ahí, en avión a Johannesburgo o por tierra: si tu pasaporte necesita visa para Sudáfrica, la necesitás también para pasar. Llevá páginas en blanco para los sellos de ida y vuelta.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación, también en Sudáfrica.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Lesoto",
      body: [
        "La moneda es el loti, que vale lo mismo que el rand sudafricano. El rand se acepta en todo el país; el loti no se acepta en Sudáfrica, así que gastalo antes de salir.",
        "La tarjeta funciona en hoteles y supermercados de Maseru; en la montaña, efectivo. Hay cajeros en los pueblos grandes.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí la moneda local: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un reino en la altura",
      body: [
        "Lesoto está en el hemisferio sur y entero por encima de los mil cuatrocientos metros. Los veranos, de noviembre a marzo, son templados y con tormentas de tarde; los inviernos, de mayo a agosto, secos y fríos.",
        "En Maseru, las noches de julio bajan de cero; en Semonkong rondan los cuatro bajo cero, y en Afriski y en el paso Sani, los ocho.",
        "Nieva en la montaña casi todos los inviernos, y a veces en primavera: los pasos altos se pueden cerrar.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De septiembre a noviembre y de marzo a mayo: días templados, pocas lluvias y buena luz para caminar y cabalgar.",
        "De diciembre a febrero llueve por las tardes y el paisaje está verde. De junio a agosto hace frío y nieva en la montaña: es la temporada de esquí en Afriski.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Lesoto",
      body: [
        "Para la montaña conviene un auto alto o un 4x4: muchas rutas son de ripio y empinadas. El paso Sani, desde Sudáfrica, se sube solo en 4x4. Se maneja por la izquierda.",
        "Entre los pueblos hay combis y taxis compartidos, lentos y con horarios inciertos.",
        "En invierno, revisá el estado de las rutas antes de salir: la nieve corta los pasos altos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Thaba-Bosiu, la meseta fortaleza del rey Moshoeshoe, y la cultura basotho.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Papa —la polenta de maíz—, estofados, y la carne y las verduras de la montaña.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Montañas de más de tres mil metros, cascadas y valles con aldeas de piedra.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale: "Dormir y comer es barato; los lodges de montaña, razonables.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Rutas de montaña lentas y transporte público incierto: hace falta auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El loti vale lo mismo que el rand, que flota y se mueve bastante.",
    },
  ],

  shines: [
    "Montaña de verdad, con pocos turistas.",
    "Cabalgatas en pony por aldeas basotho.",
    "Nieve y esquí en África.",
  ],

  costs: [
    "Inviernos fríos, con heladas en todo el país.",
    "Rutas lentas y de ripio.",
    "Hay que pasar por Sudáfrica para llegar.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Maseru en enero que Afriski en julio. Los precios están en maloti y son órdenes de magnitud; no incluyen el auto, que en Lesoto es casi obligatorio.",

  places: [
    {
      id: "maseru",
      name: "Maseru",
      region: "Oeste",
      tag: "La capital",
      blurb:
        "Una capital chica sobre la frontera con Sudáfrica, con mercados, artesanía basotho y Thaba-Bosiu cerca. Es la base del planificador: veranos templados con tormentas e inviernos con noches bajo cero.",
      coords: [-29.3151, 27.4869],
      featured: true,
      image: null,
    },
    {
      id: "thaba-bosiu",
      name: "Thaba-Bosiu",
      region: "Oeste",
      tag: "La meseta del rey",
      blurb:
        "La meseta fortaleza desde donde Moshoeshoe fundó el reino, con las tumbas reales arriba y un centro cultural al pie.",
      coords: [-29.35, 27.68],
      image: null,
    },
    {
      id: "roma",
      name: "Roma",
      region: "Oeste",
      tag: "Valle y pinturas rupestres",
      blurb:
        "Un valle con la universidad nacional, misiones antiguas y pinturas rupestres en los alrededores.",
      coords: [-29.4486, 27.7189],
      image: null,
    },
    {
      id: "malealea",
      name: "Malealea",
      region: "Centro",
      tag: "Cabalgatas",
      blurb:
        "Un lodge en un valle de montaña, punto de partida de cabalgatas en pony y caminatas a aldeas y cascadas. Noches bajo cero en invierno.",
      coords: [-29.8, 27.6],
      image: null,
    },
    {
      id: "semonkong",
      name: "Semonkong (cataratas de Maletsunyane)",
      region: "Centro",
      tag: "La cascada",
      blurb:
        "Un pueblo de montaña junto a la cascada de Maletsunyane, de casi doscientos metros de caída, con cabalgatas y rappel. En julio, las noches rondan los cuatro bajo cero.",
      coords: [-29.8333, 28.05],
      image: null,
    },
    {
      id: "katse",
      name: "Represa de Katse",
      region: "Montañas Maluti",
      tag: "La represa",
      blurb:
        "Una represa enorme entre montañas, con un lago de agua turquesa y un jardín botánico de altura. Inviernos fríos y veranos con tormentas.",
      coords: [-29.3333, 28.5],
      image: null,
    },
    {
      id: "afriski",
      name: "Afriski (montañas Maluti)",
      region: "Montañas Maluti",
      tag: "Esquí en África",
      blurb:
        "Un centro de esquí a más de tres mil metros, con nieve de junio a agosto y noches que rondan los ocho bajo cero. En verano, caminatas y bicicleta.",
      coords: [-28.8167, 28.7167],
      image: null,
    },
    {
      id: "sani-top",
      name: "Sani Top (paso Sani)",
      region: "Este",
      tag: "El paso de montaña",
      blurb:
        "La cima del paso Sani, en la frontera con Sudáfrica, a casi tres mil metros, con vistas al Drakensberg y el que se presenta como el bar más alto de África. Desde Sudáfrica se sube solo en 4x4.",
      coords: [-29.585, 29.29],
      image: null,
    },
    {
      id: "tsehlanyane",
      name: "Parque Nacional Ts'ehlanyane",
      region: "Norte",
      tag: "Bosque de montaña",
      blurb:
        "Un parque de bosque nativo y ríos de montaña, con senderos y un lodge en el borde. Noches frías en invierno.",
      coords: [-28.8833, 28.4],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Lesoto es montaña, y el clima lo manda la altura. En verano, ropa liviana para el día y un buzo para la noche, con algo impermeable para las tormentas de la tarde. En invierno, de mayo a agosto, abrigo de verdad —campera, gorro, guantes y ropa térmica—, porque las noches bajan de cero en todo el país. Siempre, protector solar alto y un adaptador de tipo M.",
    keyPoints: [
      "Todo el país está por encima de los mil cuatrocientos metros: el sol quema y las noches son frías.",
      "Inviernos con noches bajo cero, y nieve en la montaña de junio a agosto.",
      "Tormentas de tarde de noviembre a marzo.",
      "Se llega por Sudáfrica: revisá la visa de los dos países.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector alto: en la altura, el sol quema más.",
      templado:
        "Ropa liviana para el día y un buzo para la noche, que en la montaña refresca rápido.",
      fresco:
        "Capas: un buzo abrigado y una campera para la noche y el viento de la montaña.",
      frio: "Abrigo de verdad: campera, gorro, guantes y ropa térmica. En invierno, las noches bajan de cero en todo el país.",
    },
    plug: {
      types: "Tipo M",
      voltage: "220 V, 50 Hz",
      note: "Tres patas redondas y gruesas, como en Sudáfrica, y casi ningún adaptador universal lo trae: se compra allá o en Sudáfrica. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Hacé una cabalgata en pony",
          body: "En Malealea o en Semonkong, con guía, por senderos adonde no llegan los autos.",
        },
        {
          title: "Llevá ropa térmica en invierno",
          body: "En los lodges de montaña no siempre hay calefacción.",
        },
        {
          title: "Comprá una manta basotho",
          body: "Abriga de verdad y es el mejor recuerdo.",
        },
        {
          title: "Cargá combustible antes de la montaña",
          body: "Fuera de Maseru y de los pueblos grandes, las estaciones de servicio son pocas.",
        },
        {
          title: "Subí al paso Sani en 4x4",
          body: "Desde Sudáfrica, con una excursión o con un auto adecuado: es uno de los caminos más impresionantes de la región.",
        },
        {
          title: "Elegí pagar en la moneda local",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el frío de la noche",
          body: "En invierno baja de cero en todo el país, y bastante más en la montaña.",
        },
        {
          title: "No manejes de noche",
          body: "Hay animales sueltos, curvas cerradas y casi nada de luz.",
        },
        {
          title: "No salgas a la montaña sin mirar el clima",
          body: "Las tormentas de verano y la nieve de invierno cortan los pasos de un día para el otro.",
        },
        {
          title: "No saques fotos de la gente sin preguntar",
          body: "En las aldeas, preguntá siempre antes.",
        },
        {
          title: "No te quedes con maloti",
          body: "No se aceptan en Sudáfrica, adonde casi seguro vas a volver.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "montana",
        title: "Para la montaña",
        notice: {
          tone: "info",
          title: "Sol fuerte y noches frías",
          body: "En la altura, el sol del mediodía quema y la noche hiela, en el mismo día.",
        },
        summary: "Lo que pide la altura",
        items: [
          "Campera abrigada",
          "Gorro, guantes y ropa térmica en invierno",
          "Protector solar alto y lentes de sol",
          "Calzado de trekking",
          "Algo impermeable para las tormentas de verano",
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
          "Una batería externa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa de los dos países",
          body: "Muchos pasaportes entran sin visa a Lesoto, pero casi todos llegan por Sudáfrica: revisá la visa de los dos. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y varias páginas en blanco",
          "La visa, si tu pasaporte la necesita, para Lesoto y para Sudáfrica",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Licencia de conducir y, si te la piden, la internacional",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Sin malaria",
          body: "No hay malaria en Lesoto. Lo que pide cuidado es la altura: protector alto y agua de sobra.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector solar alto y protector labial",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "En invierno, las noches bajan de cero en todo el país.",
        instead: "Campera, gorro y guantes.",
      },
      {
        leave: "Solo un adaptador universal",
        why: "Casi ninguno trae el enchufe de tipo M.",
        instead: "Un adaptador de tipo M, comprado allá.",
      },
      {
        leave: "Un auto bajo para la montaña",
        why: "Muchas rutas son de ripio y empinadas.",
        instead: "Un auto alto o un 4x4.",
      },
      {
        leave: "Sandalias para las caminatas",
        why: "Los senderos son de piedra y barro.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las cabalgatas y en las combis, un bolso blando es más práctico.",
        instead: "Una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Lesoto?",
        answer:
          "Muchos pasaportes entran sin visa; otros la tramitan online. Como casi todos llegan por Sudáfrica, revisá también la visa sudafricana.",
      },
      {
        question: "¿Hace frío en Lesoto?",
        answer:
          "En invierno, mucho: las noches bajan de cero en todo el país, y en la montaña rondan los ocho bajo cero. En verano, los días son templados.",
      },
      {
        question: "¿Se puede esquiar?",
        answer:
          "Sí, en Afriski, de junio a agosto, con nieve natural y artificial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De septiembre a noviembre y de marzo a mayo, con días templados y pocas lluvias. En invierno, para la nieve.",
      },
      {
        question: "¿Se puede pagar con rands?",
        answer:
          "Sí: el rand vale lo mismo que el loti y se acepta en todo el país. Al revés no: el loti no sirve en Sudáfrica.",
      },
      {
        question: "¿Hay malaria?",
        answer: "No.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, y casi seguro uno específico: el tipo M, de tres patas redondas grandes, no viene en los universales.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Maseru suele serlo; en la montaña, mejor hervida, filtrada o embotellada.",
      },
    ],
  },
};
