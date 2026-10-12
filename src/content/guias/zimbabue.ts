import type { DestinationGuide } from "./types";

/**
 * Guía de Zimbabue.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dólares sin ser un país dolarizado. La moneda
 * oficial es el ZiG, pero al viajero se le cobra en dólares, como en Camboya:
 * los precios del presupuesto están en dólares y el corredor sigue en ZiG, que
 * es lo que la guía explica (spec, 15.6). El dato de la portada es ese, y los
 * billetes chicos, porque no circulan monedas de dólar.
 * La base es Cataratas Victoria y no Harare, la capital, como Siem Reap en
 * Camboya: es por donde entra casi todo el que viaja. Los parques y Gran
 * Zimbabue llevan una excepción en su migración: su entrada es más barata que
 * la del sendero de las cataratas.
 * La ONU pone a Zimbabue en África Oriental, aunque se viaje junto con
 * Botsuana y Namibia, y la portada sigue a la ONU (ver GuideSubregion).
 */
export const zimbabue: DestinationGuide = {
  slug: "zimbabue",
  country: "Zimbabue",
  subregion: "África Oriental",
  subhead:
    "Las Cataratas Victoria desde el lado con más vista, los elefantes de Hwange, los safaris a pie de Mana Pools y la ciudad de piedra de Gran Zimbabue. Todo se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "Dólares",
      label: "para casi todo, en billetes chicos",
      note: "La moneda oficial es el ZiG, pero al viajero se le cobra en dólares: alojamiento, parques, actividades y casi todos los comercios. No circulan monedas de dólar, así que el vuelto es un problema: llevá billetes de uno, cinco y diez.",
    },
    {
      value: "Cataratas Victoria",
      label: "de frente, desde el lado de Zimbabue",
      note: "El sendero del parque corre por el borde de enfrente, con miradores a casi todo el frente de agua. De marzo a mayo, con el río crecido, la bruma empapa: piloto o poncho.",
    },
    {
      value: "Gran Zimbabue",
      label: "la ciudad de piedra que le dio nombre al país",
      note: "Las ruinas de la capital de un reino de hace más de seis siglos, con murallas de piedra levantadas sin argamasa. Patrimonio de la humanidad, cerca de Masvingo.",
    },
    {
      value: "Mana Pools",
      label: "safaris a pie y en canoa por el Zambeze",
      note: "Uno de los pocos parques de África donde se camina fuera del vehículo, y el río se baja en canoa entre hipopótamos y elefantes. Casi todos los campamentos cierran en la temporada de lluvias.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Zimbabue",
      body: [
        "Según el pasaporte, se entra sin visa, con visa al llegar o con una visa electrónica que se tramita antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Si vas a ir también a Zambia, en las cataratas suele venderse la KAZA Univisa, que cubre los dos países y las visitas por el día a Botsuana. No todos los pasaportes pueden pedirla, y no siempre está disponible.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Zimbabue",
      body: [
        "La moneda oficial es el ZiG, pero al viajero se le cobra en dólares: hoteles, parques, actividades, restaurantes y la mayoría de los comercios.",
        "Llevá los dólares desde casa, en billetes chicos, nuevos y sanos. Los cajeros no siempre tienen, y como no circulan monedas de dólar, el vuelto chico puede venir en ZiG o no venir.",
        "La tarjeta funciona en hoteles, lodges y restaurantes de Cataratas Victoria y Harare, a veces con recargo; en el resto, efectivo. Si una terminal te ofrece cobrarte en tu moneda, elegí dólares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Una meseta templada y valles calurosos",
      body: [
        "Zimbabue está en el hemisferio sur. Llueve de noviembre a marzo, con tormentas de tarde; de mayo a agosto, el invierno es seco, con días templados y noches frías.",
        "Casi todo el país está en una meseta, así que Harare y Bulawayo son templados todo el año. El valle del Zambeze —Mana Pools, Kariba— es otro clima: en octubre, el mediodía pasa los treinta y cinco grados.",
        "Nyanga, en las tierras altas del este, es lo más fresco y lluvioso del país: las noches de julio bajan a cuatro grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: temporada seca, la mejor para los safaris, con los animales cerca del agua. Septiembre y octubre son los meses de más calor.",
        "Las cataratas cambian con el río. De marzo a mayo llevan más agua y la bruma tapa parte de la vista; de septiembre a diciembre llevan menos, se ve la roca, y del lado de Zambia pueden quedar casi secas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Zimbabue",
      body: [
        "Entre las cataratas y los parques, safari organizado o traslados de los lodges; a Mana Pools y a Kariba se llega en avioneta o en 4x4. Entre las ciudades hay buses y vuelos internos.",
        "En las rutas hay controles policiales frecuentes: llevá los papeles del auto a mano y respetá los límites de velocidad. Se maneja por la izquierda, y de noche no se maneja.",
        "Cataratas Victoria se camina de día, y a Zambia se cruza a pie por el puente sobre el Zambeze.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Gran Zimbabue, las ruinas de piedra más grandes al sur del Sahara, y las pinturas rupestres de Matobo.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale:
        "Sadza con carne o verduras, carne a la parrilla y, para los curiosos, gusanos de mopane.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Las Cataratas Victoria, el valle del Zambeze, los granitos de Matobo y las tierras altas del este.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale:
        "No tiene mar; el agua es la del lago Kariba y la del Zambeze.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "En dólares, casi todo cuesta como afuera, y Cataratas Victoria es cara; los parques, en cambio, son razonables.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Cataratas Victoria es fácil; el resto pide avionetas, 4x4 o un safari organizado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "Los precios en dólares son estables, pero la moneda local cambió varias veces y el efectivo escasea.",
    },
  ],

  shines: [
    "Las Cataratas Victoria, desde el lado con más vista.",
    "Safaris a pie y en canoa en Mana Pools.",
    "Gran Zimbabue y la historia del sur de África.",
  ],

  costs: [
    "Efectivo en dólares, y el vuelto chico que nunca hay.",
    "Lluvias de diciembre a febrero, y bruma que empapa en las cataratas de marzo a mayo.",
    "Distancias largas entre los parques.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Cataratas Victoria en octubre que Harare o Nyanga. Los precios están en dólares, como se le cobra al viajero, y son órdenes de magnitud: el presupuesto no necesita convertirlos. Un lodge en los parques puede costar varias veces más.",

  places: [
    {
      id: "cataratas-victoria",
      name: "Cataratas Victoria",
      region: "Matabeleland Norte",
      tag: "Las cataratas",
      blurb:
        "El pueblo junto a las cataratas, con el sendero del parque frente al agua, el puente sobre el Zambeze y cruceros al atardecer. Es la base del planificador: calor casi todo el año y lluvias de diciembre a febrero.",
      coords: [-17.9318, 25.8307],
      featured: true,
      image: null,
    },
    {
      id: "hwange",
      name: "Parque Nacional Hwange",
      region: "Matabeleland Norte",
      tag: "Elefantes",
      blurb:
        "El parque más grande del país, con manadas enormes de elefantes alrededor de los pozos en la temporada seca. A pocas horas de las cataratas.",
      coords: [-18.73, 26.95],
      image: null,
    },
    {
      id: "harare",
      name: "Harare",
      region: "Harare",
      tag: "La capital",
      blurb:
        "Una capital de avenidas con jacarandás, el mercado de Mbare y la escultura en piedra shona de la Galería Nacional. Templada todo el año, por la altura.",
      coords: [-17.8292, 31.0522],
      image: null,
    },
    {
      id: "gran-zimbabue",
      name: "Gran Zimbabue (Masvingo)",
      region: "Masvingo",
      tag: "La ciudad de piedra",
      blurb:
        "Las ruinas de la capital de un reino de hace más de seis siglos, con murallas de piedra sin argamasa. Patrimonio de la humanidad, cerca del lago Mutirikwi.",
      coords: [-20.2674, 30.9338],
      image: null,
    },
    {
      id: "bulawayo",
      name: "Bulawayo",
      region: "Bulawayo",
      tag: "La segunda ciudad",
      blurb:
        "Avenidas anchas, edificios de principios del siglo veinte y el Museo de Historia Natural. La puerta de entrada a Matobo.",
      coords: [-20.1325, 28.6265],
      image: null,
    },
    {
      id: "matobo",
      name: "Parque Nacional Matobo",
      region: "Matabeleland Sur",
      tag: "Granito y rinocerontes",
      blurb:
        "Colinas de granito con rocas en equilibrio, pinturas rupestres y rinocerontes que se rastrean a pie. Patrimonio de la humanidad.",
      coords: [-20.55, 28.5],
      image: null,
    },
    {
      id: "mana-pools",
      name: "Mana Pools",
      region: "Mashonaland Oeste",
      tag: "A pie y en canoa",
      blurb:
        "Llanuras sobre el Zambeze con elefantes bajo los árboles, safaris a pie y en canoa. Patrimonio de la humanidad. En octubre, el mediodía pasa los treinta y cinco grados.",
      coords: [-15.75, 29.35],
      image: null,
    },
    {
      id: "kariba",
      name: "Lago Kariba",
      region: "Mashonaland Oeste",
      tag: "El lago",
      blurb:
        "Uno de los lagos artificiales más grandes del mundo, con casas flotantes, atardeceres entre árboles muertos y el parque de Matusadona enfrente. Caluroso casi todo el año.",
      coords: [-16.5167, 28.8],
      image: null,
    },
    {
      id: "nyanga",
      name: "Nyanga (Tierras Altas del Este)",
      region: "Manicaland",
      tag: "Montaña y niebla",
      blurb:
        "Montañas verdes, cascadas, truchas y el monte Nyangani, el más alto del país. Lo más fresco y lluvioso de Zimbabue.",
      coords: [-18.2167, 32.75],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Zimbabue, ropa liviana de colores neutros para el día y un buzo o una campera para la noche y el amanecer, que en invierno son fríos. Para las cataratas, de marzo a mayo, un piloto o un poncho: la bruma empapa. En el valle del Zambeze, ropa fresca, sombrero y protector. Todo el año, repelente, dólares en billetes chicos y un adaptador para el enchufe británico.",
    keyPoints: [
      "Se paga en dólares: llevalos desde casa, en billetes chicos.",
      "Lluvias de noviembre a marzo; invierno seco de mayo a agosto, con noches frías.",
      "En las cataratas, la bruma empapa de marzo a mayo.",
      "Malaria en el valle del Zambeze: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de colores neutros, sombrero, protector y repelente. En las cataratas, algo que se pueda mojar.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el clima de Harare todo el año y de las cataratas en invierno.",
      fresco:
        "Capas: un buzo abrigado y una campera para los safaris del amanecer, que en el vehículo abierto son fríos.",
      frio: "Campera de abrigo, gorro y guantes para las madrugadas de invierno en los parques y en Nyanga.",
    },
    plug: {
      types: "Tipos D y G",
      voltage: "220 V, 50 Hz",
      note: "Conviven el británico, de tres patas rectangulares, y otro de tres patas redondas. Un adaptador universal resuelve los dos. Los cortes de luz son frecuentes, y casi todos los hoteles tienen generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá dólares en billetes chicos",
          body: "Como no circulan monedas, el vuelto es un problema: los billetes de uno, cinco y diez resuelven casi todo.",
        },
        {
          title: "Mirá las cataratas desde los dos lados",
          body: "Desde Zimbabue se ve más frente; desde Zambia se llega al borde. Se cruza a pie por el puente.",
        },
        {
          title: "Llevá piloto a las cataratas",
          body: "De marzo a mayo la bruma moja como la lluvia; en la entrada alquilan ponchos.",
        },
        {
          title: "Elegí la temporada seca para el safari",
          body: "De mayo a octubre los animales se juntan en los pozos y en el río.",
        },
        {
          title: "Llevá una batería externa",
          body: "Los cortes de luz son frecuentes, y no todos los alojamientos tienen generador.",
        },
        {
          title: "Mirá si te conviene la KAZA Univisa",
          body: "Si vas a cruzar a Zambia y tu pasaporte necesita visa en los dos países, una sola cubre los dos.",
        },
      ],
      donts: [
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos: está prohibido.",
        },
        {
          title: "No uses ropa de camuflaje",
          body: "Está prohibida para civiles.",
        },
        {
          title: "No bajes del vehículo en los parques",
          body: "Salvo donde está permitido, como en Mana Pools: los animales son salvajes.",
        },
        {
          title: "No camines de noche por Cataratas Victoria",
          body: "Elefantes y búfalos cruzan el pueblo después de que oscurece.",
        },
        {
          title: "No cambies plata en la calle",
          body: "El cambio informal está prohibido, y es la estafa más común.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Dólares desde casa",
          body: "Los cajeros no siempre tienen dólares y no circulan monedas: llevá el efectivo del viaje en billetes chicos, nuevos y sanos.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Dólares en billetes de uno, cinco y diez",
          "Billetes nuevos y sanos",
          "Una tarjeta para hoteles y restaurantes",
          "Un lugar aparte para el vuelto en ZiG",
        ],
      },
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Madrugadas y polvo",
          body: "Los safaris salen al amanecer en vehículos abiertos: en invierno hace frío temprano, y calor al mediodía.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Buzo o campera para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Una batería externa",
        ],
      },
      {
        id: "cataratas",
        title: "Para las cataratas",
        notice: null,
        summary: "Agua por todos lados",
        items: [
          "Piloto o poncho, de marzo a mayo",
          "Funda impermeable para el teléfono",
          "Calzado que se pueda mojar",
          "Una bolsa seca para la cámara",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La visa depende del pasaporte",
          body: "Según el país, se entra sin visa, con visa al llegar o con visa electrónica. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
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
          title: "Malaria",
          body: "Hay malaria en las zonas bajas —el valle del Zambeze, Hwange y las cataratas—, sobre todo en la temporada de lluvias; Harare y Bulawayo tienen poco riesgo. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Billetes grandes",
        why: "Casi nadie tiene vuelto para un billete de cien.",
        instead: "Billetes de uno, cinco y diez.",
      },
      {
        leave: "Ropa de camuflaje",
        why: "Está prohibida para civiles.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en casi todos lados.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las noches de invierno son frías en la meseta y en los parques.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Una valija rígida para las avionetas",
        why: "Los vuelos a Mana Pools y a los parques piden bolsos blandos y con poco peso.",
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
        question: "¿En qué moneda se paga en Zimbabue?",
        answer:
          "En dólares, casi todo. La moneda oficial es el ZiG, que aparece en el vuelto y en algunos comercios.",
      },
      {
        question: "¿Necesito visa para entrar a Zimbabue?",
        answer:
          "Depende del pasaporte: sin visa, con visa al llegar o con visa electrónica. Si también vas a Zambia, mirá la KAZA Univisa. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Desde qué lado se ven mejor las cataratas?",
        answer:
          "Desde Zimbabue se ve la mayor parte del frente; desde Zambia se llega al borde. Se pueden hacer los dos lados, cruzando el puente.",
      },
      {
        question: "¿Cuándo llevan más agua las cataratas?",
        answer:
          "De marzo a mayo, después de las lluvias. De septiembre a diciembre llevan menos, y del lado de Zambia pueden quedar casi secas.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, sobre todo en las zonas bajas: el valle del Zambeze, Hwange y las cataratas. Harare y Bulawayo tienen poco riesgo. Consultá con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Conviven el británico y otro de tres patas redondas, a 220 V; un adaptador universal resuelve los dos.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, en dólares: a guías y choferes de safari, al personal de los lodges y algo en restaurantes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada; los lodges suelen darla.",
      },
    ],
  },
};
