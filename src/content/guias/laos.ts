import type { DestinationGuide } from "./types";

/**
 * Guía de Laos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el único del Sudeste Asiático sin mar, así que las
 * "playas" son ríos y cascadas. El kip perdió valor rápido en los últimos años
 * y los precios en kips envejecen como los de la lira turca: se dice sin
 * números. Los restos de bombas de la guerra se mencionan como lo que son en la
 * práctica —seguir los senderos marcados—, igual que en Camboya. La base es
 * Luang Prabang y no Vientián, como Antigua en Guatemala.
 */
export const laos: DestinationGuide = {
  slug: "laos",
  country: "Laos",
  subregion: "Sudeste Asiático",
  subhead:
    "Monjes de túnica naranja al amanecer en Luang Prabang, cascadas turquesa, el Mekong lento, montañas de piedra caliza y la misteriosa Llanura de las Jarras. El país más tranquilo de la región.",

  image: null,

  highlights: [
    {
      value: "0 km",
      label: "de costa: el único país del Sudeste Asiático sin mar",
      note: "El agua es de ríos, cascadas y lagunas: el Mekong, las piletas de Kuang Si y el río de Vang Vieng.",
    },
    {
      value: "Tak bat",
      label: "la limosna de los monjes al amanecer",
      note: "En Luang Prabang, cientos de monjes recorren las calles en silencio recibiendo arroz. Se mira de lejos, sin flash.",
    },
    {
      value: "Kuang Si",
      label: "cascadas de agua turquesa",
      note: "A menos de una hora de Luang Prabang: piletas naturales escalonadas para bañarse y un santuario de osos.",
    },
    {
      value: "Tren rápido",
      label: "de Vientián a Luang Prabang en unas dos horas",
      note: "Une la capital, Vang Vieng y Luang Prabang. Los pasajes se agotan: compralos con anticipación, con el pasaporte.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Laos",
      body: [
        "Casi todos los pasaportes latinoamericanos necesitan visa: se tramita online como visa electrónica, en el sitio oficial, o se paga a la llegada en los aeropuertos y en los pasos de frontera principales. Verificá el tuyo antes de comprar el pasaje.",
        "Usá solo el sitio oficial para la visa electrónica, y fijate en qué pasos de frontera se acepta: no vale en todos.",
        "Para la visa a la llegada, llevá una foto carnet y dólares en billetes sanos. El pasaporte tiene que tener vigencia de sobra y páginas libres.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Laos",
      body: [
        "La moneda es el kip, con muchos ceros, que perdió valor rápido en los últimos años: los precios de esta guía son órdenes de magnitud. En las zonas turísticas a veces se aceptan dólares o bahts tailandeses, pero en kips suele salir mejor.",
        "El efectivo manda: la tarjeta funciona en pocos hoteles y restaurantes. Los cajeros entregan poco por extracción y cobran un cargo cada vez.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí kips: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Seco, caluroso y lluvioso",
      body: [
        "Laos está en el trópico, con tres estaciones: la seca y fresca de noviembre a febrero, la calurosa de marzo a mayo y la de lluvias de mayo a octubre.",
        "En las montañas del norte —Phonsavan, Luang Namtha, Nong Khiaw— las madrugadas de diciembre y enero son frías. De febrero a abril, la quema agrícola llena de humo el aire del norte.",
        "Las Cuatro Mil Islas, en el sur sobre el Mekong, son lo más caluroso del país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco, fresco y con cielo claro. Es la mejor época para casi todo el país.",
        "En la temporada de lluvias el paisaje está verde y las cascadas, llenas, pero algunos caminos rurales se cortan. El Año Nuevo lao (Pi Mai), a mediados de abril, se festeja tirándose agua durante días.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Laos",
      body: [
        "El tren rápido une Vientián, Vang Vieng y Luang Prabang en pocas horas; los pasajes se compran con el pasaporte y se agotan. El resto del país se recorre en minibuses por rutas de montaña lentas, o en bote por el Mekong.",
        "En las ciudades, tuk-tuks con precio acordado antes de subir, y bicicletas para recorrer Luang Prabang y las islas del sur.",
        "En el campo quedan restos de bombas de la guerra. En la Llanura de las Jarras y alrededor de cuevas y templos alejados, se sigue por los senderos marcados.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Los templos de Luang Prabang, la Llanura de las Jarras y Vat Phou, el templo jemer del sur.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Larb, arroz glutinoso, sopas de fideos y el pan francés de los desayunos.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Montañas de piedra caliza, el Mekong, cascadas turquesa y arrozales.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "Laos no tiene mar: el agua es de ríos, cascadas y piletas naturales.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "El tren rápido ayuda en el centro; el resto son rutas de montaña lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El kip perdió valor rápido en los últimos años: los precios en kips envejecen.",
    },
  ],

  shines: [
    "Luang Prabang, una de las ciudades más lindas de Asia.",
    "Paisajes de montaña y río sin multitudes.",
    "Un ritmo tranquilo que no se encuentra en los países vecinos.",
  ],

  costs: [
    "Rutas lentas fuera del tren rápido.",
    "Poca aceptación de tarjetas.",
    "Humo en el norte de febrero a abril.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Phonsavan en enero que las Cuatro Mil Islas en abril. La base es Luang Prabang. Los precios están en kips y son órdenes de magnitud; con el kip perdiendo valor, envejecen más rápido que en otros países.",

  places: [
    {
      id: "luang-prabang",
      name: "Luang Prabang",
      region: "Luang Prabang",
      tag: "La ciudad de los templos",
      blurb:
        "Templos dorados, casas coloniales y la limosna de los monjes al amanecer, entre el Mekong y el río Nam Khan. Patrimonio de la humanidad. Es la base del planificador: seca y fresca de noviembre a febrero, lluviosa de mayo a octubre.",
      coords: [19.8856, 102.1347],
      featured: true,
      image: null,
    },
    {
      id: "vientian",
      name: "Vientián",
      region: "Vientián",
      tag: "La capital tranquila",
      blurb:
        "La estupa dorada de Pha That Luang, el arco Patuxai, el mercado nocturno sobre el Mekong y el centro COPE, que cuenta la historia de las bombas de la guerra.",
      coords: [17.9757, 102.6331],
      image: null,
    },
    {
      id: "vang-vieng",
      name: "Vang Vieng",
      region: "Vientián",
      tag: "Ríos y montañas",
      blurb:
        "Montañas de piedra caliza sobre el río Nam Song, cuevas, lagunas azules, kayak y globos al amanecer.",
      coords: [18.9235, 102.4478],
      image: null,
    },
    {
      id: "si-phan-don",
      name: "Cuatro Mil Islas (Si Phan Don)",
      region: "Champasak",
      tag: "Islas en el Mekong",
      blurb:
        "Islas en el Mekong con hamacas, bicicletas, las cascadas más anchas del Sudeste Asiático y, a veces, delfines del Irrawaddy. Lo más caluroso del país.",
      coords: [14, 105.92],
      image: null,
    },
    {
      id: "pakse",
      name: "Pakse y la meseta de Bolaven",
      region: "Champasak",
      tag: "Café y cascadas",
      blurb:
        "Plantaciones de café en la meseta, cascadas y, cerca, Vat Phou, un templo jemer en la ladera de una montaña, patrimonio de la humanidad.",
      coords: [15.1202, 105.799],
      image: null,
    },
    {
      id: "nong-khiaw",
      name: "Nong Khiaw",
      region: "Luang Prabang",
      tag: "Miradores sobre el río",
      blurb:
        "Un pueblo sobre el río Nam Ou entre montañas, con miradores para el amanecer y paseos en bote hacia aldeas. Madrugadas frías en invierno.",
      coords: [20.57, 102.61],
      image: null,
    },
    {
      id: "phonsavan",
      name: "Phonsavan y la Llanura de las Jarras",
      region: "Xieng Khouang",
      tag: "Jarras de piedra",
      blurb:
        "Cientos de jarras de piedra milenarias en las colinas, patrimonio de la humanidad, que se recorren por senderos marcados. Por la altura, las madrugadas de enero son las más frías de Laos.",
      coords: [19.45, 103.2],
      image: null,
    },
    {
      id: "luang-namtha",
      name: "Luang Namtha",
      region: "Luang Namtha",
      tag: "Selva y aldeas",
      blurb:
        "La base para caminatas por el área protegida de Nam Ha y aldeas de minorías étnicas del norte. Noches frescas en invierno.",
      coords: [20.95, 101.4],
      image: null,
    },
    {
      id: "thakhek",
      name: "Thakhek",
      region: "Khammouane",
      tag: "El circuito de las cuevas",
      blurb:
        "El punto de partida del circuito en moto por montañas y cuevas, con la cueva de Kong Lor, un río subterráneo que se recorre en bote.",
      coords: [17.41, 104.83],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Laos es calor casi todo el año: ropa liviana que se seque rápido, protector, repelente y sandalias. De noviembre a febrero, un buzo y una campera liviana para las madrugadas del norte, que son frías. De mayo a octubre, un impermeable. Para los templos, hombros y rodillas cubiertos, y efectivo en kips para casi todo.",
    keyPoints: [
      "Trópico: seco y fresco de noviembre a febrero, lluvias de mayo a octubre.",
      "Las madrugadas del norte en diciembre y enero son frías.",
      "El efectivo manda: la tarjeta funciona en pocos lugares.",
      "Los pasajes del tren rápido se agotan: comprá con anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector, sombrero, repelente y mucha agua. De mayo a octubre, un impermeable liviano.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno de Luang Prabang y Vientián.",
      fresco:
        "Capas, un buzo abrigado y una campera liviana para las mañanas del norte en invierno, que arrancan frías.",
      frio: "Campera de abrigo, gorro y medias gruesas para las madrugadas de Phonsavan y la montaña en diciembre y enero; los alojamientos casi nunca tienen calefacción.",
    },
    plug: {
      types: "Tipos A, B, C, E y F",
      voltage: "230 V, 50 Hz",
      note: "Muchos tomas aceptan patas planas y redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá el tren rápido con anticipación",
          body: "Con el pasaporte, en la estación o por la aplicación oficial: los pasajes se agotan.",
        },
        {
          title: "Mirá el tak bat con respeto",
          body: "Desde la vereda de enfrente, en silencio y sin flash. Si querés participar, sentado y con el arroz comprado en un lugar de confianza.",
        },
        {
          title: "Recorré Luang Prabang en bicicleta",
          body: "El centro es chico y plano, y entre templos se llega pedaleando.",
        },
        {
          title: "Bajá el Mekong en bote lento",
          body: "Dos días entre Luang Prabang y la frontera con Tailandia, con noche en un pueblo del río.",
        },
        {
          title: "Llevá kips en efectivo",
          body: "Los cajeros dan poco por vez y cobran cada extracción: sacá en las ciudades grandes.",
        },
        {
          title: "Elegí pagar en kips",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No salgas de los senderos marcados",
          body: "En la Llanura de las Jarras y alrededor de cuevas y templos alejados todavía se limpian restos de bombas de la guerra.",
        },
        {
          title: "No le pongas flash a los monjes",
          body: "Ni te pares en el camino del tak bat: es una ceremonia religiosa, no un espectáculo.",
        },
        {
          title: "No entres a un templo descubierto",
          body: "Hombros y rodillas cubiertos, y sin zapatos.",
        },
        {
          title: "No toques la cabeza de nadie",
          body: "Es la parte más respetada del cuerpo, también en los chicos.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada es barata y muchos alojamientos tienen bidones para recargar.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "climas",
        title: "Según la época",
        notice: {
          tone: "info",
          title: "Madrugadas frías en el norte",
          body: "De diciembre a febrero, Phonsavan y las montañas del norte amanecen frías aunque el día sea caluroso. Mirá el clima de la ciudad en el planificador.",
        },
        summary: "Lo que cambia con la época",
        items: [
          "Ropa liviana de secado rápido",
          "Un buzo y una campera liviana para el invierno del norte",
          "Un impermeable de mayo a octubre",
          "Sandalias de trekking",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Tramitá la visa antes de viajar",
          body: "Casi todos los pasaportes latinoamericanos la necesitan: visa electrónica en el sitio oficial o visa a la llegada. Fijate en qué frontera vale la electrónica.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas libres",
          "La visa electrónica impresa, o foto carnet para la visa a la llegada",
          "Dólares en billetes sanos para pagar la visa",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Calzado fácil de sacar",
          "Un pañuelo liviano",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación y algo para el estómago",
          "Repelente de mosquitos",
          "Algo para el mareo en las rutas de montaña",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Traje de playa de más",
        why: "Laos no tiene mar: el agua es de ríos y cascadas.",
        instead: "Un traje de baño y sandalias de agua.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi todo se paga en efectivo y los cajeros dan poco por vez.",
        instead: "Kips en efectivo y algunos dólares de reserva.",
      },
      {
        leave: "Musculosas y shorts para los templos",
        why: "Piden hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "Las madrugadas del norte de diciembre y enero son frías.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Una valija enorme",
        why: "Botes, minibuses y pueblos de montaña tienen poco lugar.",
        instead: "Una mochila o valija mediana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Laos?",
        answer:
          "Casi todos los pasaportes latinoamericanos sí: visa electrónica en el sitio oficial o visa a la llegada en aeropuertos y pasos principales. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero: seco y fresco. Marzo y abril son calurosos y con humo en el norte.",
      },
      {
        question: "¿Conviene el tren rápido?",
        answer:
          "Sí: une Vientián, Vang Vieng y Luang Prabang en pocas horas. Comprá con anticipación, con el pasaporte.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas aceptan patas planas y redondas a 230 V. Un adaptador universal resuelve cualquier caso.",
      },
      {
        question: "¿Se puede pagar con dólares?",
        answer:
          "A veces, en zonas turísticas, pero en kips suele salir mejor. Para la visa a la llegada sí se usan dólares.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria; redondear o dejar algo a guías y choferes es bien recibido.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Cómo veo la limosna de los monjes?",
        answer:
          "Al amanecer, en el centro de Luang Prabang, desde la vereda de enfrente, en silencio y sin flash.",
      },
    ],
  },
};
