import type { DestinationGuide } from "./types";

/**
 * Guía de Lituania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el más continental de los tres bálticos, con
 * inviernos bajo cero en Vilna y Kaunas, y una costa de dunas en el istmo de
 * Curlandia que es otro clima: más suave en invierno, fresca y ventosa en
 * verano.
 */
export const lituania: DestinationGuide = {
  slug: "lituania",
  country: "Lituania",
  subregion: "Europa del Norte",
  subhead:
    "Vilna barroca, un castillo en un lago, dunas enormes junto al Báltico y una colina con más de cien mil cruces. Inviernos bajo cero y veranos templados con días largos.",

  image: null,

  highlights: [
    {
      value: "+100.000",
      label: "cruces en la Colina de las Cruces",
      note: "Cerca de Šiauliai, un lugar de peregrinación que se fue llenando de cruces durante siglos, también cuando estaba prohibido.",
    },
    {
      value: "98 km",
      label: "de istmo de dunas en Curlandia",
      note: "Dunas altísimas, pinos y pueblos de pescadores entre la laguna y el mar, patrimonio de la humanidad.",
    },
    {
      value: "Užupis",
      label: "una república de artistas en Vilna",
      note: "Un barrio que se declaró república independiente, con su propia constitución escrita en una pared.",
    },
    {
      value: "Básquet",
      label: "la otra religión",
      note: "Es el deporte nacional. Si juega la selección, el país se detiene a mirar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Lituania es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Lituania, Letonia y Polonia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Lituania",
      body: [
        "La moneda es el euro y la tarjeta se acepta casi en todos lados; en mercados y pueblos chicos, el efectivo sigue siendo útil.",
        "La propina es opcional: redondear o dejar algo si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "El más continental de los bálticos",
      body: [
        "Lituania es hemisferio norte: enero es invierno y julio, verano. Vilna y Kaunas tienen inviernos bajo cero de diciembre a febrero y veranos templados, a veces cálidos.",
        "La costa —Klaipėda, Palanga y el istmo de Curlandia— es más suave en invierno y más fresca y ventosa en verano. El este, con los lagos de Aukštaitija, es el rincón más frío.",
        "En verano los días son larguísimos, y en los bosques y lagos hay mosquitos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la mejor época: la costa, las dunas, los lagos y las ciudades al aire libre.",
        "Mayo y septiembre tienen buen clima y menos gente. Diciembre trae mercados navideños en Vilna, con frío de verdad.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Lituania",
      body: [
        "Trenes y buses unen Vilna con Kaunas y Klaipėda en pocas horas; desde Klaipėda, un ferry corto cruza al istmo de Curlandia. Hay buses a Riga y a Varsovia.",
        "Trakai está a media hora de Vilna en tren o en bus, y se puede ir y volver en el día.",
        "Las precauciones son las de cualquier ciudad visitada: atención al celular y a la mochila en el casco viejo y en el transporte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades e historia",
      score: 8.5,
      rationale:
        "El casco viejo barroco de Vilna, la arquitectura de entreguerras de Kaunas y el castillo de Trakai.",
    },
    {
      dimension: "Naturaleza y costa",
      score: 8.5,
      rationale:
        "Las dunas del istmo de Curlandia, playas largas y lagos y bosques en el este.",
    },
    {
      dimension: "Cultura y curiosidades",
      score: 8.5,
      rationale:
        "Užupis, la Colina de las Cruces y un país con una identidad muy propia.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Cepelinai, sopa fría de remolacha y kibinai: cocina contundente y barata.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Accesible, con buena calidad. Nida en pleno verano es lo más caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Trenes y buses entre ciudades, y conexiones fáciles con Riga y Varsovia.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Vilna, una capital barroca con un barrio que se declaró república.",
    "Las dunas del istmo de Curlandia.",
    "Accesible y fácil de combinar con Letonia y Polonia.",
  ],

  costs: [
    "Inviernos fríos y grises.",
    "Un mar fresco aun en pleno verano.",
    "Nida se llena y se encarece en julio y agosto.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Aukštaitija en febrero no pide lo mismo que Nida en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "vilna",
      name: "Vilna",
      region: "Vilna",
      tag: "Barroco y Užupis",
      blurb:
        "Un casco viejo barroco enorme, patrimonio de la humanidad, y Užupis, el barrio de artistas que se declaró república. Es la base del planificador: inviernos bajo cero, veranos templados.",
      coords: [54.6872, 25.2797],
      featured: true,
      image: null,
    },
    {
      id: "kaunas",
      name: "Kaunas",
      region: "Centro",
      tag: "Arquitectura de entreguerras",
      blurb:
        "La capital de entreguerras, con un centro de arquitectura moderna de los años treinta reconocido como patrimonio de la humanidad.",
      coords: [54.8985, 23.9036],
      image: null,
    },
    {
      id: "trakai",
      name: "Trakai",
      region: "Vilna",
      tag: "Castillo en un lago",
      blurb:
        "Un castillo de ladrillo rojo en una isla del lago, a media hora de Vilna. Se recorre en bote y se comen kibinai, las empanadas locales.",
      coords: [54.6378, 24.9343],
      image: null,
    },
    {
      id: "klaipeda",
      name: "Klaipėda",
      region: "Costa",
      tag: "Puerto del Báltico",
      blurb:
        "La ciudad portuaria del país, con casas de entramado y el ferry al istmo de Curlandia.",
      coords: [55.7033, 21.1443],
      image: null,
    },
    {
      id: "nida",
      name: "Nida y el istmo de Curlandia",
      region: "Costa",
      tag: "Dunas y pinos",
      blurb:
        "Un pueblo de pescadores de casas de colores, entre dunas enormes y la laguna, en el istmo de Curlandia.",
      coords: [55.3039, 21.0056],
      image: null,
    },
    {
      id: "palanga",
      name: "Palanga",
      region: "Costa",
      tag: "Playa del verano",
      blurb:
        "La playa de verano de los lituanos, con un muelle largo y un jardín botánico con un museo del ámbar.",
      coords: [55.9175, 21.0686],
      image: null,
    },
    {
      id: "druskininkai",
      name: "Druskininkai",
      region: "Sur",
      tag: "Spa y bosques",
      blurb:
        "Una ciudad termal entre bosques, con spas y un parque de esculturas de la era soviética cerca.",
      coords: [54.0154, 23.9667],
      image: null,
    },
    {
      id: "siauliai",
      name: "Šiauliai y la Colina de las Cruces",
      region: "Norte",
      tag: "Colina de las Cruces",
      blurb:
        "La Colina de las Cruces, con más de cien mil cruces dejadas durante siglos, a pocos kilómetros de la ciudad.",
      coords: [56.0153, 23.4167],
      image: null,
    },
    {
      id: "aukstaitija",
      name: "Parque Nacional de Aukštaitija",
      region: "Este",
      tag: "Lagos",
      blurb:
        "El parque nacional más antiguo del país, con decenas de lagos unidos por ríos, ideal para la canoa en verano.",
      coords: [55.33, 26.1],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Lituania tiene inviernos bajo cero de diciembre a febrero en Vilna y Kaunas, y veranos templados con días largos, a veces cálidos. En invierno, abrigo de verdad, gorro, guantes y calzado que no resbale; en verano, ropa liviana con capas para la noche, una campera que corte el viento para la costa y repelente para los lagos y bosques.",
    keyPoints: [
      "Hemisferio norte: el invierno, de diciembre a febrero, es bajo cero; el verano, de junio a agosto, templado.",
      "La costa es más suave en invierno y más fresca y ventosa en verano.",
      "El este, con los lagos de Aukštaitija, es lo más frío del país.",
      "En verano, en los lagos y bosques, hay mosquitos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. En la costa, el viento del Báltico refresca.",
      templado:
        "Capas y una campera liviana. Es el verano lituano: largo y luminoso.",
      fresco: "Sweater o polar, campera impermeable y calzado que no se moje.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. Bajo cero, gris y con días cortos.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Leé la constitución de Užupis",
          body: "Está escrita en una pared del barrio, en decenas de idiomas, español incluido. Tiene artículos como el derecho a ser feliz y a no serlo.",
        },
        {
          title: "Andá a Trakai en el día",
          body: "Media hora desde Vilna, el castillo en el lago y un almuerzo de kibinai.",
        },
        {
          title: "Dormí en Nida una noche",
          body: "De día llegan las excursiones; al atardecer, las dunas y la laguna quedan para pocos.",
        },
        {
          title: "Probá los cepelinai",
          body: "Los dumplings de papa rellenos son el plato nacional: contundentes, ideales para el frío.",
        },
        {
          title: "Combiná con Riga o Varsovia",
          body: "Hay buses cómodos a las dos, a pocas horas.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno",
          body: "De diciembre a febrero baja de cero, con días cortos y grises.",
        },
        {
          title: "No salgas de los senderos en las dunas",
          body: "Las dunas del istmo son frágiles y están protegidas: se caminan por los senderos marcados.",
        },
        {
          title: "No vayas a los lagos sin repelente",
          body: "En verano los mosquitos de los bosques y lagos son parte del paisaje.",
        },
        {
          title: "No camines los adoquines con suela lisa",
          body: "En el casco viejo de Vilna resbalan con lluvia y con hielo.",
        },
        {
          title: "No descuides la mochila en el casco viejo",
          body: "En las zonas más concurridas hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno es frío de verdad",
          body: "De diciembre a febrero la temperatura queda bajo cero muchos días, con días cortos y grises. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide diciembre a febrero",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "costa",
        title: "Costa y dunas",
        notice: {
          tone: "info",
          title: "Otro clima a pocas horas",
          body: "En el istmo de Curlandia y en Palanga el viento del Báltico refresca incluso en pleno verano.",
        },
        summary: "Si vas a la costa",
        items: [
          "Campera que corte el viento",
          "Traje de baño y toalla de microfibra",
          "Protector solar y anteojos: la arena refleja",
          "Repelente para los bosques de pinos",
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
          "Auriculares para los buses",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el resfrío",
          "Protector labial y crema para el frío",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Adoquines en el casco viejo, que resbalan con lluvia o hielo.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Solo ropa de verano para la costa",
        why: "El viento del Báltico refresca incluso en julio.",
        instead: "Capas y una campera que corte el viento.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para mercados y pueblos chicos.",
      },
      {
        leave: "Una valija enorme",
        why: "Adoquines, buses y edificios viejos sin ascensor.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En las zonas más concurridas llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Lituania?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para la costa, las dunas y los lagos; mayo y septiembre, con buen clima y menos gente. Diciembre tiene mercados navideños, con frío de verdad.",
      },
      {
        question: "¿Cómo llego al istmo de Curlandia?",
        answer:
          "Desde Klaipėda, en un ferry corto, y después en bus o en bici hasta Nida.",
      },
      {
        question: "¿Qué es Užupis?",
        answer:
          "Un barrio de artistas de Vilna que se declaró república independiente en broma y en serio, con su propia constitución escrita en una pared.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Casi todo. Llevá algo de efectivo para mercados y pueblos chicos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es opcional. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
