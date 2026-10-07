import type { DestinationGuide } from "./types";

/**
 * Guía de Noruega.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero por encima del círculo polar. La luz
 * entra en la valija —antifaz en junio, linterna en diciembre—, y el norte en
 * invierno pide ropa de nieve de verdad para salir de noche a ver auroras. La
 * costa oeste, en cambio, es suave y lluviosa: ahí manda lo impermeable.
 */
export const noruega: DestinationGuide = {
  slug: "noruega",
  country: "Noruega",
  subregion: "Europa del Norte",
  subhead:
    "Fiordos, montañas que caen al mar, auroras boreales y sol de medianoche. Un país largo, caro y sin efectivo, donde la valija depende de la latitud y de la estación.",

  image: null,

  highlights: [
    {
      value: "24 h",
      label: "de luz en Tromsø en junio",
      note: "Y casi nada en diciembre, con la noche polar. Antifaz en verano, linterna en invierno.",
    },
    {
      value: "NOK",
      label: "coronas, casi sin efectivo",
      note: "Noruega no usa el euro, y casi todo se paga con tarjeta o teléfono, hasta el baño de una estación.",
    },
    {
      value: "Sep–Mar",
      label: "auroras boreales en el norte",
      note: "Se ven con noche oscura y cielo despejado en Tromsø y Lofoten. Ninguna fecha las garantiza.",
    },
    {
      value: "+1.000",
      label: "fiordos",
      note: "El de Geiranger y el Nærøyfjord son patrimonio de la humanidad. Se recorren en barco, en tren y por ruta.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: Schengen, sin ser Unión Europea",
      body: [
        "Noruega no es parte de la Unión Europea, pero sí del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Noruega, Suecia y Dinamarca en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Coronas, tarjeta y precios altos",
      body: [
        "La moneda es la corona noruega, y casi todo se paga con tarjeta o con el teléfono: algunos lugares no aceptan efectivo.",
        "Es de los países más caros del mundo, sobre todo para comer afuera y para el alcohol. Los supermercados venden solo cerveza liviana, en horario limitado; el resto se vende en tiendas estatales con horario reducido.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí coronas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un país largo, de norte a sur",
      body: [
        "Noruega es hemisferio norte: enero es invierno y julio, verano. Como Chile al revés, es tan larga que el mismo mes pide valijas distintas en cada punta.",
        "Oslo tiene inviernos bajo cero y veranos templados. La costa oeste —Bergen, Stavanger, Ålesund— es más suave en invierno y muy lluviosa todo el año. El norte, con Tromsø y Lofoten, pasa el invierno cerca o debajo de cero.",
        "Por encima del círculo polar hay sol de medianoche de mayo a julio y noche polar en diciembre y enero. La luz cambia el viaje tanto como la temperatura.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la temporada de los fiordos, las caminatas y el sol de medianoche. Las rutas de montaña abren y los días no terminan.",
        "De septiembre a marzo, en el norte, es la temporada de auroras boreales. Diciembre y enero tienen pocas horas de luz, y febrero y marzo combinan nieve, luz y auroras.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Noruega",
      body: [
        "El tren de Oslo a Bergen es de los recorridos más lindos del mundo. Entre fiordos se combinan trenes, barcos y buses, y para el norte se vuela o se navega por la costa.",
        "El auto da libertad en los fiordos, pero en invierno las rutas de montaña cierran y las demás tienen hielo y pocas horas de luz.",
        "El derecho a recorrer la naturaleza viene con la obligación de no dejar rastro. Las precauciones en las ciudades son las de cualquier lugar concurrido.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Fiordos y naturaleza",
      score: 10,
      rationale:
        "Fiordos patrimonio de la humanidad, glaciares, montañas que caen al mar y las islas Lofoten.",
    },
    {
      dimension: "Auroras y luz",
      score: 9.5,
      rationale:
        "Auroras boreales en invierno y sol de medianoche en verano: la luz es parte del viaje.",
    },
    {
      dimension: "Actividades al aire libre",
      score: 9.5,
      rationale:
        "Caminatas de todos los niveles, kayak en los fiordos y esquí, con libre acceso a la naturaleza.",
    },
    {
      dimension: "Ciudades",
      score: 7.5,
      rationale:
        "Oslo y Bergen son agradables y tienen buenos museos, pero la estrella es el paisaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4.5,
      rationale:
        "De los países más caros del mundo: comer afuera, el alcohol y dormir cuestan mucho.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Trenes, barcos y vuelos internos que funcionan, pero las distancias son enormes y el clima manda.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Una moneda estable y todo con tarjeta. Caro, pero sin sorpresas.",
    },
  ],

  shines: [
    "Paisajes de fiordos que no tienen comparación.",
    "Auroras en invierno y sol de medianoche en verano.",
    "Todo funciona, y todo se paga con tarjeta.",
  ],

  costs: [
    "Uno de los países más caros del mundo.",
    "Lluvia frecuente en la costa oeste.",
    "Distancias enormes y días muy cortos en invierno.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Tromsø en enero no pide lo mismo que Bergen en julio. Los precios están en coronas noruegas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "oslo",
      name: "Oslo",
      region: "Sur",
      tag: "Capital y museos",
      blurb:
        "Una capital sobre un fiordo, con una ópera que se camina por el techo, museos vikingos y bosques al alcance del metro. Es la base del planificador: inviernos bajo cero, veranos templados.",
      coords: [59.9139, 10.7522],
      featured: true,
      image: null,
    },
    {
      id: "bergen",
      name: "Bergen",
      region: "Fiordos del oeste",
      tag: "Puerta de los fiordos",
      blurb:
        "Casas de madera de colores en el muelle hanseático, montañas alrededor y lluvia casi todos los días. La puerta de entrada a los fiordos.",
      coords: [60.3913, 5.3221],
      image: null,
    },
    {
      id: "tromso",
      name: "Tromsø",
      region: "Norte",
      tag: "Auroras",
      blurb:
        "La gran ciudad del norte, por encima del círculo polar. Auroras boreales de septiembre a marzo y sol de medianoche en junio.",
      coords: [69.6492, 18.9553],
      image: null,
    },
    {
      id: "lofoten",
      name: "Islas Lofoten",
      region: "Norte",
      tag: "Montañas en el mar",
      blurb:
        "Picos que salen del mar, pueblos de pescadores en casas rojas sobre pilotes y playas de arena blanca. Más templadas de lo que su latitud sugiere.",
      coords: [68.2343, 14.5683],
      image: null,
    },
    {
      id: "geiranger",
      name: "Geiranger y su fiordo",
      region: "Fiordos del oeste",
      tag: "El fiordo famoso",
      blurb:
        "Un fiordo patrimonio de la humanidad, con cascadas que caen de paredes de roca. Las rutas de montaña que llegan cierran en invierno.",
      coords: [62.1008, 7.2059],
      image: null,
    },
    {
      id: "stavanger",
      name: "Stavanger y el Preikestolen",
      region: "Fiordos del oeste",
      tag: "Roca sobre el fiordo",
      blurb:
        "Una ciudad de casas blancas de madera y, cerca, el Preikestolen, una roca plana a seiscientos metros sobre el fiordo.",
      coords: [58.97, 5.7331],
      image: null,
    },
    {
      id: "alesund",
      name: "Ålesund",
      region: "Fiordos del oeste",
      tag: "Art nouveau",
      blurb:
        "Una ciudad reconstruida en art nouveau sobre islas, después de un incendio. Ventosa y lluviosa, puerta a los fiordos del norte.",
      coords: [62.4722, 6.1495],
      image: null,
    },
    {
      id: "trondheim",
      name: "Trondheim",
      region: "Centro",
      tag: "Catedral medieval",
      blurb:
        "La catedral medieval más al norte de Europa y casas de colores sobre el río. Ciudad universitaria, entre el sur y el norte.",
      coords: [63.4305, 10.3951],
      image: null,
    },
    {
      id: "flam",
      name: "Flåm y el Sognefjord",
      region: "Fiordos del oeste",
      tag: "Tren y fiordo",
      blurb:
        "Un pueblo al fondo del Sognefjord, de donde sale uno de los trenes de montaña más empinados del mundo.",
      coords: [60.8628, 7.1137],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Noruega la valija depende de dónde y cuándo: la costa oeste es suave pero lluviosa todo el año, Oslo tiene inviernos bajo cero y veranos templados, y el norte, con Tromsø y Lofoten, pasa el invierno cerca o debajo de cero, con noche polar. En verano, capas, una campera impermeable de verdad y calzado para caminar; en invierno, ropa térmica, abrigo de nieve, gorro y guantes. Y un antifaz para el sol de medianoche.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es templado; el invierno, de noviembre a marzo, largo y oscuro.",
      "La costa oeste —Bergen, Stavanger, Ålesund— tiene inviernos suaves, pero llueve casi todos los días.",
      "Por encima del círculo polar hay sol de medianoche en junio y noche polar en diciembre.",
      "Las auroras boreales se ven de septiembre a marzo en el norte, con noche oscura y cielo despejado.",
    ],
    adviceByBucket: {
      calido:
        "Pasa poco. Ropa liviana para el día, pero siempre una campera en la mochila: en los fiordos y en la montaña refresca rápido.",
      templado:
        "Capas y una campera impermeable de verdad. Es el mejor clima noruego: el de julio en los fiordos.",
      fresco:
        "Polar, campera impermeable con capucha y calzado que no se moje. En la costa oeste la lluvia es casi diaria.",
      frio: "Ropa térmica, abrigo de nieve, gorro, guantes y botas. Para salir a ver auroras de noche, más capas de las que creés necesitar.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá una campera impermeable de verdad",
          body: "En Bergen y en los fiordos llueve casi todos los días. Una campera y un pantalón impermeables valen más que cualquier abrigo.",
        },
        {
          title: "Comprá comida en el supermercado",
          body: "Comer afuera es muy caro. Los supermercados y las panaderías resuelven el almuerzo de un día de caminata.",
        },
        {
          title: "Tomá el tren de Oslo a Bergen",
          body: "Es uno de los recorridos en tren más lindos del mundo, entre montañas y mesetas nevadas. Conviene reservar.",
        },
        {
          title: "Llevá antifaz en verano",
          body: "En junio, en el norte, el sol no se pone. Para dormir, un antifaz ayuda mucho.",
        },
        {
          title: "Buscá auroras lejos de las luces",
          body: "Con cielo despejado, alejarse de la ciudad cambia todo. Las excursiones nocturnas salen a buscarlas según el pronóstico.",
        },
        {
          title: "Elegí pagar en coronas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cuentes con pagar en efectivo",
          body: "Casi todo se paga con tarjeta o con el teléfono, y algunos lugares no aceptan billetes.",
        },
        {
          title: "No subestimes el clima de la montaña",
          body: "En los senderos el tiempo cambia en minutos, incluso en verano. Salí con capas, agua y el pronóstico revisado.",
        },
        {
          title: "No esperes comprar alcohol en el supermercado",
          body: "Los supermercados venden solo cerveza liviana, en horario limitado. El resto se vende en tiendas estatales, con horario reducido.",
        },
        {
          title: "No manejes de noche en invierno sin experiencia",
          body: "Hielo, nieve y oscuridad en rutas angostas. Si no estás acostumbrado, mejor el tren o un vuelo.",
        },
        {
          title: "No dejes rastro en la naturaleza",
          body: "El derecho a recorrer y acampar libremente viene con la obligación de llevarte todo lo que trajiste.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y capas",
        notice: {
          tone: "info",
          title: "En el oeste llueve casi todos los días",
          body: "En Bergen y en los fiordos la lluvia es parte del paisaje. Lo impermeable vale más que lo abrigado.",
        },
        summary: "Lo que cubre los fiordos en cualquier mes",
        items: [
          "Campera impermeable con capucha",
          "Pantalón impermeable para caminar",
          "Polar o primera capa térmica",
          "Calzado de trekking impermeable",
          "Funda impermeable para la mochila",
        ],
      },
      {
        id: "invierno",
        title: "Invierno ártico",
        notice: {
          tone: "warn",
          title: "En el norte el invierno es extremo",
          body: "En Tromsø y Lofoten la temperatura queda cerca o debajo de cero, con viento y noche polar. Para salir a ver auroras de noche hace falta ropa de nieve de verdad.",
        },
        summary: "Si vas al norte de noviembre a marzo",
        items: [
          "Primera capa térmica de lana",
          "Abrigo de nieve y pantalón impermeable",
          "Gorro, guantes y cuello",
          "Botas abrigadas con buena suela",
          "Grampones para el calzado: las veredas se congelan",
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
          "Batería portátil: el frío descarga rápido el teléfono",
          "Linterna frontal para los días cortos de invierno",
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
          "Protector labial y crema para el frío y el viento",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas",
        why: "Con el viento de la costa dura poco.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta.",
        instead: "La tarjeta o el teléfono.",
      },
      {
        leave: "Zapatillas de tela",
        why: "Lluvia, barro y nieve en cualquier sendero.",
        instead: "Calzado de trekking impermeable.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "Aun en verano refresca rápido en los fiordos y en la montaña.",
        instead: "Capas y una campera.",
      },
      {
        leave: "Algodón como primera capa en invierno",
        why: "Retiene la humedad y enfría.",
        instead: "Primera capa de lana o sintética.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla es excelente.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Noruega?",
        answer:
          "Noruega no es parte de la Unión Europea pero sí del espacio Schengen: muchos pasaportes latinoamericanos entran sin visa por hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificá el tuyo, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuándo se ven las auroras boreales?",
        answer:
          "De septiembre a marzo, en el norte —Tromsø, Lofoten—, con noche oscura y cielo despejado. Ninguna fecha las garantiza: conviene quedarse varias noches.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para los fiordos, las caminatas y el sol de medianoche; de septiembre a marzo para las auroras en el norte.",
      },
      {
        question: "¿Es tan caro como dicen?",
        answer:
          "Sí, sobre todo comer afuera y el alcohol. Los supermercados, el agua de la canilla y la naturaleza sin entrada ayudan a equilibrar.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Sí. Noruega casi no usa efectivo: hasta los baños y los estacionamientos se pagan con tarjeta o con el teléfono.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente.",
      },
      {
        question: "¿Cómo se recorren los fiordos?",
        answer:
          "En barco, en tren y por ruta. Desde Bergen salen barcos y excursiones, y el tren de Flåm y los ferries del Sognefjord se combinan en un día.",
      },
    ],
  },
};
