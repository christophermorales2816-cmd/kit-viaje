import type { DestinationGuide } from "./types";

/**
 * Guía de Hungría.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el traje de baño como prenda de invierno. Los baños
 * termales funcionan todo el año, algunos al aire libre, y entran en la valija
 * aunque afuera nieve. Y la cuenta que ya trae el servicio cobrado.
 */
export const hungria: DestinationGuide = {
  slug: "hungria",
  country: "Hungría",
  subregion: "Europa del Este",
  subhead:
    "Budapest sobre el Danubio, baños termales todo el año y vinos que sorprenden. Veranos calurosos con tormentas de tarde, inviernos fríos, y forintos, no euros.",

  image: null,

  highlights: [
    {
      value: "+100",
      label: "fuentes termales bajo Budapest",
      note: "Los baños termales, algunos de la época otomana, son parte de la vida de la ciudad. Llevá traje de baño y ojotas, también en invierno.",
    },
    {
      value: "HUF",
      label: "forintos, no euros",
      note: "Hungría no usa el euro. Muchos lugares lo aceptan, pero a un cambio peor: tarjeta o forintos.",
    },
    {
      value: "28 °C",
      label: "de máxima en Budapest en julio",
      note: "Los veranos son calurosos y las tardes pueden terminar en tormenta. El lago Balatón es el veraneo del país.",
    },
    {
      value: "Magyar",
      label: "un idioma sin parientes cerca",
      note: "El húngaro no se parece a ningún idioma de alrededor. Aprender a decir gracias, köszönöm, abre puertas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Hungría es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Hungría, Austria y Chequia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Forintos, y la cuenta con servicio",
      body: [
        "La moneda es el forinto. La tarjeta se acepta en casi todos lados; muchos lugares aceptan euros, pero a un cambio peor y con el vuelto en forintos.",
        "Muchos restaurantes suman un cargo por servicio a la cuenta. Fijate antes de dejar propina: si ya está, no hace falta dejar más.",
        "Las casas de cambio del centro y del aeropuerto suelen cambiar mal. Para el efectivo, un cajero de banco; y cuando una terminal te ofrece cobrarte en tu moneda, elegí forintos.",
      ],
    },
    {
      id: "clima",
      title: "Veranos calurosos, inviernos fríos",
      body: [
        "Hungría es hemisferio norte: enero es invierno y julio, verano. El clima es continental: veranos calurosos —Budapest y el sur pasan los veintiocho grados en julio— con tormentas de tarde, e inviernos fríos, cerca de cero y bajo cero de noche.",
        "El sur, con Pécs y Szeged, es lo más cálido y soleado del país. El norte, con Eger y Tokaj, tiene inviernos más duros.",
        "Los baños termales y el lago de Hévíz, tibio todo el año, hacen que el invierno también sea temporada.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Primavera y otoño son lo mejor para caminar Budapest: días templados y menos gente. El verano es caluroso y es la temporada del Balatón.",
        "Desde fines de noviembre hasta Navidad, los mercados navideños llenan las plazas de Budapest. En pleno invierno, un baño termal al aire libre con nieve es de lo mejor del viaje.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Hungría",
      body: [
        "Budapest tiene metro, tranvías y buses. Los boletos en papel se validan al subir o al entrar al metro, y hay controles: viajar con uno sin validar se multa.",
        "Los trenes llegan a Eger, Pécs, el Balatón y Szeged, y Viena está a menos de tres horas. Para los taxis, pedilos por app o en paradas oficiales: las tarifas son reguladas.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el centro de Budapest y en el transporte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Baños termales",
      score: 10,
      rationale:
        "Budapest es la capital termal de Europa: baños otomanos, palacios de agua caliente y lagos termales como el de Hévíz.",
    },
    {
      dimension: "Ciudades y arquitectura",
      score: 9,
      rationale:
        "Budapest sobre el Danubio, con el Parlamento, el castillo y el art nouveau, y ciudades como Eger y Pécs.",
    },
    {
      dimension: "Gastronomía y vino",
      score: 8.5,
      rationale:
        "Gulash, lángos y pastelería, y vinos como el Tokaji y los tintos de Eger.",
    },
    {
      dimension: "Vida nocturna",
      score: 9,
      rationale:
        "Los bares en ruinas del barrio judío de Budapest no se parecen a nada.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Más accesible que Europa occidental, con buena calidad. El centro de Budapest es la excepción.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Buen transporte en Budapest y trenes a las ciudades principales; el resto del país, más lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "El forinto se mueve más que el euro, pero los precios son claros y la tarjeta se acepta en todos lados.",
    },
  ],

  shines: [
    "Baños termales como en ningún otro lado.",
    "Budapest, de las capitales más lindas de Europa.",
    "Buena comida y buen vino a precios accesibles.",
  ],

  costs: [
    "Veranos calurosos y tardes de tormenta.",
    "Inviernos fríos y grises.",
    "Cuentas que ya traen el servicio y casas de cambio que cambian mal.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Tokaj en enero no pide lo mismo que Szeged en julio. Los precios están en forintos y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "budapest",
      name: "Budapest",
      region: "Budapest y el Danubio",
      tag: "Termas y Danubio",
      blurb:
        "El Parlamento sobre el Danubio, el castillo de Buda, baños termales y bares en ruinas. Es la base del planificador: inviernos fríos, veranos calurosos.",
      coords: [47.4979, 19.0402],
      featured: true,
      image: null,
    },
    {
      id: "balaton",
      name: "Lago Balatón",
      region: "Oeste",
      tag: "El mar de Hungría",
      blurb:
        "El lago más grande de Europa central, con playas, viñedos y la península de Tihany. El veraneo de los húngaros.",
      coords: [46.9128, 17.8876],
      image: null,
    },
    {
      id: "eger",
      name: "Eger",
      region: "Norte",
      tag: "Castillo y vino",
      blurb:
        "Una ciudad barroca con castillo, baños turcos y bodegas de vino tinto en el Valle de las Bellas Mujeres.",
      coords: [47.9025, 20.3772],
      image: null,
    },
    {
      id: "pecs",
      name: "Pécs",
      region: "Sur",
      tag: "Ciudad mediterránea",
      blurb:
        "La ciudad más cálida del país, con una mezquita otomana convertida en iglesia y un cementerio paleocristiano patrimonio de la humanidad.",
      coords: [46.0727, 18.2323],
      image: null,
    },
    {
      id: "szentendre",
      name: "Szentendre y el recodo del Danubio",
      region: "Budapest y el Danubio",
      tag: "Pueblo de artistas",
      blurb:
        "Un pueblo de artistas a orillas del Danubio, a menos de una hora de Budapest, en la puerta del recodo del río.",
      coords: [47.6694, 19.0757],
      image: null,
    },
    {
      id: "tokaj",
      name: "Tokaj",
      region: "Norte",
      tag: "Vino dulce",
      blurb:
        "La región del Tokaji, el vino dulce que en la corte de Francia llamaban el vino de los reyes. Bodegas excavadas en la roca.",
      coords: [48.1221, 21.4108],
      image: null,
    },
    {
      id: "sopron",
      name: "Sopron",
      region: "Oeste",
      tag: "Ciudad medieval",
      blurb:
        "Una ciudad medieval junto a la frontera con Austria, rodeada de viñedos.",
      coords: [47.6817, 16.5845],
      image: null,
    },
    {
      id: "heviz",
      name: "Hévíz",
      region: "Oeste",
      tag: "Lago termal",
      blurb:
        "El lago termal natural más grande del mundo donde se puede nadar: el agua está tibia todo el año, incluso en invierno.",
      coords: [46.7903, 17.1897],
      image: null,
    },
    {
      id: "szeged",
      name: "Szeged",
      region: "Sur",
      tag: "Ciudad del sol",
      blurb:
        "La ciudad más soleada del país, con art nouveau, una catedral enorme y la paprika más famosa de Hungría.",
      coords: [46.253, 20.1414],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Hungría tiene veranos calurosos —Budapest y el sur pasan los veintiocho grados en julio, con tormentas de tarde— e inviernos fríos, cerca de cero y bajo cero de noche. En verano, ropa liviana, sombrero y algo impermeable; en invierno, abrigo, gorro y guantes. En cualquier estación, traje de baño y ojotas: los baños termales se disfrutan todo el año, también con nieve.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso; el invierno, de diciembre a febrero, frío.",
      "Las tardes calurosas de verano terminan seguido en tormenta.",
      "Los baños termales funcionan todo el año: el traje de baño va en la valija aunque sea invierno.",
      "El sur, con Pécs y Szeged, es lo más cálido y soleado del país.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. Las tardes calurosas pueden terminar en tormenta: sumá algo impermeable.",
      templado:
        "Capas y una campera liviana. Es el clima de la primavera y el otoño: ideal para caminar Budapest.",
      fresco:
        "Sweater o polar y una campera que corte el viento. Las noches refrescan rápido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. Bajo cero de noche: el mejor momento para un baño termal al aire libre.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá traje de baño y ojotas",
          body: "Los baños termales son parte de la vida de Budapest, en invierno y en verano. Las ojotas y una toalla te ahorran alquilarlas.",
        },
        {
          title: "Revisá si la cuenta trae el servicio",
          body: "Muchos restaurantes suman un cargo por servicio. Si ya está, no hace falta dejar más.",
        },
        {
          title: "Validá el boleto de papel",
          body: "En Budapest el boleto en papel se marca al subir o al entrar al metro, y hay controles. Viajar con uno sin validar se multa.",
        },
        {
          title: "Pagá con tarjeta o en forintos",
          body: "Es lo más conveniente. Las casas de cambio del centro y del aeropuerto suelen cambiar mal.",
        },
        {
          title: "Conocé un bar en ruinas",
          body: "En el barrio judío, edificios abandonados se convirtieron en bares llenos de objetos y patios. No se parecen a nada.",
        },
        {
          title: "Elegí pagar en forintos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No pagues en euros",
          body: "Muchos lugares los aceptan, pero a un cambio peor y con el vuelto en forintos.",
        },
        {
          title: "No subestimes el calor de julio",
          body: "Budapest pasa seguido los treinta grados en pleno verano. Agua, sombra, y las horas del medio del día para un baño termal o un museo.",
        },
        {
          title: "No esperes entender los carteles",
          body: "El húngaro no se parece a nada conocido. En Budapest el inglés funciona; en el interior, menos.",
        },
        {
          title: "No subas a cualquier taxi",
          body: "Pedilo por app o en las paradas oficiales: las tarifas son reguladas y sabés cuánto vas a pagar.",
        },
        {
          title: "No descuides la mochila en el centro",
          body: "En el centro de Budapest y en el transporte hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "termas",
        title: "Baños termales",
        notice: {
          tone: "info",
          title: "Todo el año",
          body: "Los baños funcionan en invierno y en verano, y algunos tienen piletas al aire libre. Con nieve, son todavía mejores.",
        },
        summary: "Lo que va al baño termal",
        items: [
          "Traje de baño",
          "Ojotas",
          "Toalla de microfibra",
          "Gorra de baño, que algunas piletas exigen",
        ],
      },
      {
        id: "verano",
        title: "Verano",
        notice: {
          tone: "info",
          title: "Calor y tormentas de tarde",
          body: "En julio y agosto Budapest y el sur pasan seguido los treinta grados, y las tardes pueden terminar en tormenta.",
        },
        summary: "Lo que pide julio y agosto",
        items: [
          "Ropa liviana",
          "Sombrero y protector solar",
          "Botella reutilizable",
          "Campera impermeable liviana para las tormentas",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Funda resistente al agua para el teléfono, para los baños",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago",
          "Curitas y algo para ampollas: se camina mucho",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Euros para pagar",
        why: "Se aceptan, pero a un cambio peor.",
        instead: "Tarjeta o forintos.",
      },
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero de noche.",
        instead: "Abrigo, gorro y guantes.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Adoquines y subidas en Buda, que resbalan con lluvia o hielo.",
        instead: "Calzado con buena suela.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de forintos para puestos y mercados.",
      },
      {
        leave: "Una valija enorme",
        why: "Edificios viejos sin ascensor y transporte con escaleras.",
        instead: "Una valija mediana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho, y para los baños termales una de microfibra alcanza.",
        instead: "Una toalla de microfibra.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Hungría?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Hungría usa el euro?",
        answer:
          "No: la moneda es el forinto. Muchos lugares aceptan euros, pero a un cambio peor. Lo más conveniente es la tarjeta.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Primavera y otoño: días templados y menos gente. El verano es caluroso; el invierno, frío, e ideal para los baños termales.",
      },
      {
        question: "¿Qué hay que llevar a los baños termales?",
        answer:
          "Traje de baño, ojotas y toalla. Algunas piletas piden gorra de baño. Se puede alquilar todo, pero sale más caro.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Fijate primero si la cuenta trae un cargo por servicio: muchas veces ya está incluido. Si no, dejar algo es lo habitual.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Se puede combinar con Viena o Praga?",
        answer:
          "Sí: Viena está a menos de tres horas en tren y Praga, a unas siete. Bratislava queda en el camino a Viena.",
      },
    ],
  },
};
