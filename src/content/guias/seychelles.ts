import type { DestinationGuide } from "./types";

/**
 * Guía de Seychelles.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una autorización sin visa. Ningún pasaporte
 * necesita visa, pero todos tramitan online una autorización antes de volar, y
 * sin ella no se embarca: es el dato de la portada, como la eTA de Kenia.
 * El clima no tiene invierno —la mínima nunca baja de veinticuatro grados—; lo
 * que cambia son los vientos, y con ellos qué playas están calmas. El bucket de
 * lluvia (spec, 14.12) se activa en Victoria en noviembre, diciembre, enero y
 * abril.
 * Desroches y Bird son islas con un resort, a las que se llega en avioneta:
 * entran porque mucha gente viaja a eso, y el factor de precios lo refleja.
 */
export const seychelles: DestinationGuide = {
  slug: "seychelles",
  country: "Seychelles",
  subregion: "África Oriental",
  subhead:
    "Playas de granito rosado en La Digue, el coco de mar de Praslin, tortugas gigantes sueltas y agua tibia todo el año. Islas en medio del Índico, casi sobre el ecuador.",

  image: null,

  highlights: [
    {
      value: "Autorización",
      label: "online obligatoria antes de volar",
      note: "Seychelles no le pide visa a ningún pasaporte, pero todos los visitantes tramitan antes una autorización de viaje en el sitio oficial del gobierno. Sin ella no te dejan embarcar.",
    },
    {
      value: "Granito",
      label: "rocas rosadas sobre playas blancas",
      note: "Las islas interiores son de granito, algo raro en medio de un océano. Las rocas de Anse Source d'Argent, en La Digue, están entre las playas más fotografiadas del mundo.",
    },
    {
      value: "Coco de mar",
      label: "en la Vallée de Mai, en Praslin",
      note: "La semilla más grande del mundo vegetal crece solo en Praslin y en Curieuse. El bosque de la Vallée de Mai, patrimonio de la humanidad, se recorre por senderos.",
    },
    {
      value: "Tortugas",
      label: "gigantes, sueltas en varias islas",
      note: "Las tortugas de Aldabra caminan libres en Curieuse, Bird, Desroches y otras islas, y algunas pasan los cien años.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Seychelles",
      body: [
        "Seychelles no le pide visa a ningún pasaporte: el permiso de visitante se da al llegar, con el pasaje de vuelta, la reserva del alojamiento y fondos para la estadía.",
        "Antes de volar, todos los visitantes tramitan online una autorización de viaje, en el sitio oficial del gobierno. Hacela con días de anticipación y desconfiá de los sitios que cobran de más por el mismo trámite.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Seychelles",
      body: [
        "La moneda es la rupia de Seychelles. Muchos hoteles, excursiones y alquileres de auto se cotizan en euros o en dólares; el planificador los lleva a rupias.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados de Mahé y Praslin; en La Digue y en los puestos chicos, mejor efectivo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor todo el año, con dos vientos",
      body: [
        "Seychelles está casi sobre el ecuador: hace calor todo el año, sin invierno, y el mar está tibio los doce meses.",
        "Lo que cambia son los vientos. De diciembre a marzo sopla el monzón del noroeste, con más lluvia y el mar calmo; de mayo a septiembre, los alisios del sudeste, más secos y con mar movido en algunas playas.",
        "Los meses de cambio —abril y mayo, octubre y noviembre— son los de menos viento y agua más transparente, aunque con chaparrones. Las islas exteriores, como Desroches, son más secas que las de granito.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril, mayo, octubre y noviembre: poco viento, mar calmo y la mejor visibilidad para el buceo y el snorkel.",
        "De mayo a septiembre, algunas playas que miran al sudeste tienen olas y algas, y las del noroeste, como Beau Vallon, están calmas. De diciembre a marzo llueve más, y es al revés.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Seychelles",
      body: [
        "Entre Mahé, Praslin y La Digue hay ferries rápidos varias veces por día, y vuelos cortos entre Mahé y Praslin. A las islas exteriores, como Desroches y Bird, se llega en avioneta.",
        "En Mahé y en Praslin hay colectivos y autos de alquiler; se maneja por la izquierda, por caminos angostos y con curvas. En La Digue, casi todo el mundo anda en bicicleta.",
        "Con los alisios, los ferries pueden moverse mucho: si te mareás, llevá algo.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 3,
      rationale:
        "Victoria, una de las capitales más chicas del mundo, con su torre del reloj y su mercado.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Cocina criolla de pescado, curry de pulpo, frutas tropicales y pescado a la parrilla.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Montañas de granito cubiertas de selva, sobre lagunas turquesas.",
    },
    {
      dimension: "Playas",
      score: 10,
      rationale:
        "Anse Source d'Argent, Anse Lazio y Beau Vallon, entre las más lindas del mundo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale:
        "Uno de los destinos más caros del Índico; las casas de huéspedes de dueños locales bajan la cuenta.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Ferries y vuelos cortos entre las islas principales; a las exteriores, solo en avioneta.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "La rupia es bastante estable, y mucho se cotiza en euros o en dólares.",
    },
  ],

  shines: [
    "Playas de granito rosado, de las más lindas del mundo.",
    "Snorkel y buceo en agua tibia todo el año.",
    "Islas sin tránsito: La Digue en bicicleta.",
  ],

  costs: [
    "De los destinos más caros del Índico.",
    "Ferries que se mueven con los alisios.",
    "Más lluvia y humedad de diciembre a marzo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Victoria en enero que La Digue o Desroches. Los precios están en rupias de Seychelles y son órdenes de magnitud; los resorts de las islas privadas, como Desroches y Bird, cuestan varias veces más.",

  places: [
    {
      id: "victoria",
      name: "Victoria (Mahé)",
      region: "Mahé",
      tag: "La capital",
      blurb:
        "Una de las capitales más chicas del mundo, con la torre del reloj, el mercado y un templo hindú, a pocos kilómetros del único aeropuerto internacional. Es la base del planificador: calor todo el año, y la lluvia más fuerte de noviembre a enero.",
      coords: [-4.6191, 55.4513],
      featured: true,
      image: null,
    },
    {
      id: "beau-vallon",
      name: "Beau Vallon (Mahé)",
      region: "Mahé",
      tag: "La playa de Mahé",
      blurb:
        "Una bahía larga de arena blanca en el noroeste de la isla, calma en los meses de los alisios, con restaurantes y deportes de agua.",
      coords: [-4.62, 55.43],
      image: null,
    },
    {
      id: "sur-de-mahe",
      name: "Sur de Mahé (Anse Royale y Takamaka)",
      region: "Mahé",
      tag: "Calas y montaña",
      blurb:
        "Playas tranquilas y calas entre rocas de granito, y el jardín de especias de Anse Royale. Menos gente que en el norte.",
      coords: [-4.74, 55.51],
      image: null,
    },
    {
      id: "silhouette",
      name: "Silhouette",
      region: "Islas interiores",
      tag: "Selva y montaña",
      blurb:
        "Una isla de montaña que es casi toda parque nacional, con selva, senderos y muy pocos alojamientos. Se llega en barco desde Mahé.",
      coords: [-4.4833, 55.2333],
      image: null,
    },
    {
      id: "praslin",
      name: "Praslin (Anse Volbert)",
      region: "Praslin",
      tag: "Coco de mar",
      blurb:
        "La segunda isla, con la Vallée de Mai y su coco de mar, Anse Lazio y la playa larga de Anse Volbert, frente a la isla Curieuse y sus tortugas.",
      coords: [-4.32, 55.73],
      image: null,
    },
    {
      id: "grand-anse-praslin",
      name: "Grand Anse (Praslin)",
      region: "Praslin",
      tag: "El lado oeste",
      blurb:
        "La costa oeste de Praslin, cerca del aeródromo, con alojamientos chicos y atardeceres. En los meses de los alisios, el mar trae algas.",
      coords: [-4.32, 55.7],
      image: null,
    },
    {
      id: "la-digue",
      name: "La Digue",
      region: "La Digue",
      tag: "En bicicleta",
      blurb:
        "Una isla chica casi sin autos, que se recorre en bicicleta, con Anse Source d'Argent y sus rocas de granito rosado.",
      coords: [-4.359, 55.841],
      image: null,
    },
    {
      id: "desroches",
      name: "Desroches (Amirantes)",
      region: "Amirantes",
      tag: "Isla de coral",
      blurb:
        "Una isla de coral de las exteriores, con un resort, buceo en paredes de coral y tortugas gigantes. Más seca que las islas de granito.",
      coords: [-5.697, 53.655],
      image: null,
    },
    {
      id: "bird",
      name: "Isla Bird",
      region: "Norte del archipiélago",
      tag: "Aves marinas",
      blurb:
        "Una isla de coral en el borde norte del banco de Seychelles, con colonias enormes de gaviotines de mayo a octubre y tortugas gigantes. Se llega en avioneta.",
      coords: [-3.721, 55.205],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Seychelles, ropa liviana y fresca, traje de baño, protector y calzado para el agua: hace calor todo el año. De diciembre a marzo, algo impermeable para los chaparrones. Para los ferries, algo contra el mareo. Todo el año, repelente y un adaptador para el enchufe británico.",
    keyPoints: [
      "Calor todo el año: la mínima nunca baja de veinticuatro grados.",
      "La autorización de viaje se tramita online antes de volar.",
      "Dos vientos: el monzón del noroeste, de diciembre a marzo, y los alisios del sudeste, de mayo a septiembre.",
      "Sin malaria; con dengue en algunas temporadas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero y protector que no dañe el coral. Algo impermeable para los chaparrones.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado o el ferry de la tarde.",
      fresco: "Un buzo liviano para el viento en el barco.",
      frio: "No hace frío en Seychelles: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "Tres patas rectangulares: es el enchufe británico. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la autorización en el sitio oficial",
          body: "Con días de anticipación. Los sitios que se parecen al oficial cobran de más.",
        },
        {
          title: "Elegí la playa según el viento",
          body: "Con los alisios, de mayo a septiembre, las del noroeste están calmas; con el monzón, de diciembre a marzo, las del sudeste.",
        },
        {
          title: "Recorré La Digue en bicicleta",
          body: "Es como se mueve casi todo el mundo en la isla, y se alquilan al bajar del ferry.",
        },
        {
          title: "Llevá máscara y snorkel",
          body: "En muchas playas hay corales y peces a pocos metros de la orilla.",
        },
        {
          title: "Comé en los take-away",
          body: "Los puestos de comida criolla para llevar son la forma barata de comer bien.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin la autorización",
          body: "Sin ella no te dejan embarcar.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Con los alisios, algunas playas tienen corrientes fuertes.",
        },
        {
          title: "No compres un coco de mar sin certificado",
          body: "Para sacarlo del país hace falta un permiso oficial; los que se venden en regla lo traen.",
        },
        {
          title: "No toques ni pises los corales",
          body: "Están vivos y se rompen; además, cortan.",
        },
        {
          title: "No te olvides del repelente",
          body: "En algunas temporadas hay dengue, y los mosquitos que lo transmiten pican de día.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Para la playa",
        notice: {
          tone: "info",
          title: "Sol fuerte todo el año",
          body: "Casi sobre el ecuador, el sol quema en cualquier mes: protector todos los días.",
        },
        summary: "Granito, arena y coral",
        items: [
          "Traje de baño",
          "Protector solar que no dañe el coral",
          "Calzado para el agua",
          "Máscara y snorkel",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "islas",
        title: "Entre islas",
        notice: null,
        summary: "Ferries y avionetas",
        items: [
          "Algo contra el mareo, para los ferries",
          "Un bolso blando para las avionetas",
          "Una mochila chica para el día",
          "Funda impermeable para el teléfono",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La autorización, antes de volar",
          body: "Sin la autorización de viaje no te dejan embarcar. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La autorización de viaje aprobada",
          "Pasaje de vuelta y reserva del alojamiento",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Sin malaria",
          body: "No hay malaria, pero en algunas temporadas hay dengue: repelente igual.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Protector solar con oxibenzona",
        why: "Daña el coral.",
        instead: "Un protector que no dañe el coral, o ropa con filtro UV.",
      },
      {
        leave: "Ropa de abrigo",
        why: "La mínima nunca baja de veinticuatro grados.",
        instead: "Un buzo liviano para el avión y el aire acondicionado.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las avionetas a las islas exteriores entra mejor un bolso blando, con poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Sandalias para nadar entre las rocas",
        why: "El fondo tiene corales, piedras y erizos.",
        instead: "Calzado para el agua.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta funciona en Mahé y en Praslin.",
        instead: "Una tarjeta y algo de efectivo para La Digue.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Seychelles?",
        answer:
          "No, ningún pasaporte la necesita. Pero antes de volar hay que tramitar online la autorización de viaje, en el sitio oficial del gobierno.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Abril, mayo, octubre y noviembre: poco viento y mar calmo. Igual, hace calor todo el año.",
      },
      {
        question: "¿Cómo se va de una isla a otra?",
        answer:
          "Entre Mahé, Praslin y La Digue, en ferry rápido o en vuelos cortos. A las islas exteriores, en avioneta.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "No. En algunas temporadas hay dengue, así que el repelente va igual.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Es el británico, tipo G, a 240 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El criollo seychellense en la calle, y el inglés y el francés en todos lados.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria, y muchos hoteles y restaurantes suman un cargo por servicio. Si no lo suman, algo por un buen servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada; los hoteles suelen darla.",
      },
    ],
  },
};
