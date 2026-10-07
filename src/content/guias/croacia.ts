import type { DestinationGuide } from "./types";

/**
 * Guía de Croacia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos valijas a pocas horas de distancia. La costa
 * del Adriático es mediterránea —playas de piedra, sol que rebota en la roca
 * blanca— y el interior, con Zagreb y Plitvice, continental, con nieve en
 * invierno. Y una temporada con fecha: fuera de ella, la costa cierra.
 */
export const croacia: DestinationGuide = {
  slug: "croacia",
  country: "Croacia",
  subregion: "Europa del Sur",
  subhead:
    "El Adriático más transparente, ciudades de piedra sobre el mar y lagos escalonados en la montaña. Verano seco y caluroso en la costa; inviernos fríos, con nieve, en el interior.",

  image: null,

  highlights: [
    {
      value: "1.000",
      label: "islas e islotes en el Adriático",
      note: "Unas cincuenta están habitadas. Ferries y catamaranes las unen con la costa, más seguido en verano.",
    },
    {
      value: "Euro",
      label: "desde 2023",
      note: "Croacia cambió la kuna por el euro y entró al espacio Schengen el mismo año.",
    },
    {
      value: "2",
      label: "climas en un país",
      note: "La costa es mediterránea; el interior, con Zagreb y Plitvice, continental, con inviernos fríos y nieve.",
    },
    {
      value: "Jul–Ago",
      label: "la costa llena",
      note: "Dubrovnik, Split y Hvar se llenan y los precios suben. Junio y septiembre tienen el mar templado y la mitad de gente.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Croacia es parte del espacio Schengen desde 2023. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Croacia, Italia y Austria en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Croacia",
      body: [
        "La moneda es el euro desde 2023. La tarjeta se acepta en casi todos lados en las ciudades; en las islas, en pueblos chicos y en algunos puestos de playa, el efectivo sigue siendo lo más práctico.",
        "Los alojamientos cobran una tasa turística por noche, más alta en temporada. La propina es opcional: redondear si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Costa mediterránea, interior continental",
      body: [
        "Croacia es hemisferio norte: enero es invierno y julio, verano. La costa del Adriático —Istria, Dalmacia, las islas— tiene veranos secos y calurosos e inviernos suaves y lluviosos, con días de viento fuerte del norte, la bura.",
        "El interior es otra cosa: Zagreb tiene inviernos fríos y veranos calurosos, y Plitvice, en la montaña, nieva en invierno y es fresco en verano.",
        "Muchas playas son de piedra o de canto rodado, con un agua muy transparente que en verano llega a estar templada.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Junio y septiembre son los mejores meses para la costa: mar templado, menos gente y precios más bajos que en julio y agosto, cuando todo se llena.",
        "De noviembre a marzo muchos hoteles, restaurantes y excursiones de la costa y de las islas cierran, y los ferries se reducen. Zagreb funciona todo el año, y Plitvice es lindo en cualquier estación, también nevado.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Croacia",
      body: [
        "Los buses unen las ciudades de la costa y el interior, y son la forma más común de moverse. A las islas se va en ferry o catamarán; en verano, conviene reservar.",
        "El auto da libertad para recorrer la costa e Istria, aunque en verano estacionar cerca de las ciudades viejas es difícil.",
        "En Split, Hvar y Dubrovnik se multa andar en traje de baño o sin remera por el centro. Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Costa e islas",
      score: 9.5,
      rationale:
        "El Adriático más transparente, con islas, calas y pueblos de piedra a lo largo de toda la costa.",
    },
    {
      dimension: "Ciudades históricas",
      score: 9,
      rationale:
        "Dubrovnik amurallada, el palacio de Diocleciano en Split y pueblos venecianos en Istria.",
    },
    {
      dimension: "Naturaleza",
      score: 9,
      rationale:
        "Los lagos escalonados de Plitvice, las cascadas del Krka y montañas que caen al mar.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Pescado, aceite de oliva, trufas de Istria y vinos locales: cocina mediterránea sencilla y buena.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Accesible en el interior y fuera de temporada. Dubrovnik y Hvar en verano son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Buenos buses y ferries, pero la costa es larga: combinar islas y ciudades pide planificar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Mar transparente e islas para todos los gustos.",
    "Ciudades de piedra con siglos de historia sobre el agua.",
    "Naturaleza de primer nivel a pocas horas de la costa.",
  ],

  costs: [
    "Julio y agosto: calor, multitudes y precios altos.",
    "Muchos lugares de la costa cierran en invierno.",
    "Distancias largas a lo largo de la costa.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Plitvice en enero no pide lo mismo que Split en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "zagreb",
      name: "Zagreb",
      region: "Interior",
      tag: "Capital continental",
      blurb:
        "Una capital de ciudad alta y ciudad baja, cafés al aire libre y museos curiosos, como el de las relaciones rotas. Es la base del planificador: inviernos fríos y veranos calurosos.",
      coords: [45.815, 15.9819],
      featured: true,
      image: null,
    },
    {
      id: "dubrovnik",
      name: "Dubrovnik",
      region: "Dalmacia",
      tag: "Ciudad amurallada",
      blurb:
        "Una ciudad vieja rodeada de murallas sobre el Adriático. La más famosa y la más cara del país: en verano, temprano o de noche.",
      coords: [42.6507, 18.0944],
      image: null,
    },
    {
      id: "split",
      name: "Split",
      region: "Dalmacia",
      tag: "Palacio romano",
      blurb:
        "Una ciudad viva construida dentro y alrededor del palacio del emperador Diocleciano. Puerto de salida a las islas.",
      coords: [43.5081, 16.4402],
      image: null,
    },
    {
      id: "plitvice",
      name: "Lagos de Plitvice",
      region: "Interior",
      tag: "Lagos escalonados",
      blurb:
        "Dieciséis lagos turquesa unidos por cascadas y pasarelas de madera, en la montaña. Fresco en verano y nevado en invierno.",
      coords: [44.8654, 15.582],
      image: null,
    },
    {
      id: "hvar",
      name: "Hvar",
      region: "Islas",
      tag: "Lavanda y noche",
      blurb:
        "Una isla de campos de lavanda, calas y un puerto con vida nocturna. De las más soleadas del Adriático.",
      coords: [43.1729, 16.4411],
      image: null,
    },
    {
      id: "zadar",
      name: "Zadar",
      region: "Dalmacia",
      tag: "Órgano de mar",
      blurb:
        "Ruinas romanas, el órgano que suena con las olas y uno de los atardeceres más lindos de la costa.",
      coords: [44.1194, 15.2314],
      image: null,
    },
    {
      id: "rovinj",
      name: "Rovinj e Istria",
      region: "Istria",
      tag: "Pueblo veneciano",
      blurb:
        "Un pueblo de casas de colores sobre una península, con aire italiano, y trufas y aceite de oliva en el interior de Istria.",
      coords: [45.0812, 13.6387],
      image: null,
    },
    {
      id: "sibenik",
      name: "Šibenik y Krka",
      region: "Dalmacia",
      tag: "Catedral y cascadas",
      blurb:
        "Una catedral de piedra patrimonio de la humanidad y, al lado, el parque nacional Krka, con cascadas y senderos.",
      coords: [43.735, 15.8952],
      image: null,
    },
    {
      id: "korcula",
      name: "Korčula",
      region: "Islas",
      tag: "Ciudad medieval en una isla",
      blurb:
        "Una ciudad medieval amurallada en una isla verde, con viñedos y calas. Más tranquila que Hvar.",
      coords: [42.9597, 17.1356],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Croacia son dos valijas. En la costa, de junio a septiembre, ropa liviana, traje de baño, protector y calzado para piedras: muchas playas son de canto rodado. En el interior, con Zagreb y Plitvice, inviernos fríos con nieve y veranos calurosos. Si vas fuera del verano, sumá capas y algo impermeable: en otoño e invierno la costa es lluviosa y con viento.",
    keyPoints: [
      "Hemisferio norte: el verano va de junio a septiembre, seco y caluroso en la costa; el invierno, de diciembre a febrero.",
      "La costa es mediterránea y el interior, continental: Zagreb y Plitvice tienen inviernos fríos, con nieve en la montaña.",
      "Muchas playas son de piedra o de canto rodado: unas sandalias para el agua cambian el día.",
      "En invierno el viento del norte, la bura, puede ser muy fuerte en la costa.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero y protector. El sol del Adriático rebota en el agua y en la piedra blanca.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de junio y septiembre: el mejor para la costa.",
      fresco:
        "Capas y una campera impermeable. En otoño y primavera la costa tiene días de lluvia y viento.",
      frio: "Abrigo de verdad, gorro y guantes en el interior y en Plitvice, donde nieva. En la costa el invierno es suave pero ventoso.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá sandalias para el agua",
          body: "Muchas playas son de piedra o de canto rodado, y en algunas hay erizos. Unas sandalias de goma lo resuelven.",
        },
        {
          title: "Recorré Dubrovnik temprano",
          body: "Las murallas y la ciudad vieja se llenan cuando llegan los cruceros. A primera hora o al atardecer se disfrutan mucho más.",
        },
        {
          title: "Reservá los ferries en verano",
          body: "En julio y agosto los catamaranes a las islas más pedidas se llenan. Comprá con anticipación.",
        },
        {
          title: "Visitá Plitvice a primera hora",
          body: "En temporada alta las entradas tienen horario y las pasarelas se llenan. Temprano, el parque es otro.",
        },
        {
          title: "Llevá efectivo a las islas",
          body: "En pueblos chicos y en algunos puestos de playa el efectivo sigue siendo lo más práctico.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No vayas a la costa en invierno esperando playa",
          body: "De noviembre a marzo muchos hoteles y restaurantes de la costa y de las islas cierran, y el mar está frío.",
        },
        {
          title: "No subestimes el sol",
          body: "En la costa el sol pega fuerte y la piedra blanca lo refleja. Protector, sombrero y agua.",
        },
        {
          title: "No andes en traje de baño por la ciudad",
          body: "En Split, Hvar y Dubrovnik se multa andar en traje de baño o sin remera por el centro. Para la playa, sí; para la ciudad, ropa.",
        },
        {
          title: "No planees demasiadas islas",
          body: "Cada traslado en barco se come medio día. Dos o tres islas bien combinadas rinden más.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En las ciudades viejas en temporada alta hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "El sol del Adriático quema rápido",
          body: "En verano el sol pega fuerte, y la piedra blanca y el agua lo reflejan. Sin protector, sombrero y agua, el primer día te pasa factura.",
        },
        summary: "Lo que pide la costa en verano",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Sandalias para el agua: playas de piedra y erizos",
          "Traje de baño y toalla de microfibra",
          "Botella reutilizable",
        ],
      },
      {
        id: "interior",
        title: "Interior y Plitvice",
        notice: {
          tone: "info",
          title: "Otro clima a pocas horas",
          body: "Zagreb y Plitvice tienen inviernos fríos, con nieve en la montaña, aunque la costa esté templada.",
        },
        summary: "Si vas al interior",
        items: [
          "Abrigo y gorro de noviembre a marzo",
          "Calzado cómodo para las pasarelas de Plitvice",
          "Campera impermeable en primavera y otoño",
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
          "Funda resistente al agua para el teléfono, para la playa y el barco",
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
          "Crema para después del sol",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de suela lisa",
        why: "Las calles de piedra pulida de Dubrovnik y Split resbalan.",
        instead: "Calzado con buena suela.",
      },
      {
        leave: "Un abrigo pesado en verano",
        why: "De junio a septiembre la costa es calurosa también de noche.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Ropa de verano para el interior en invierno",
        why: "Zagreb y Plitvice tienen inviernos fríos, con nieve.",
        instead: "Abrigo y capas.",
      },
      {
        leave: "Una valija grande con ruedas",
        why: "Escaleras y piedra en las ciudades viejas, y en los ferries hay que cargarla.",
        instead: "Una valija chica o una mochila.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para islas y pueblos chicos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra para la playa.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Croacia?",
        answer:
          "Depende del pasaporte. Croacia es parte del espacio Schengen desde 2023: muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Croacia usa el euro?",
        answer: "Sí, desde 2023. Ese mismo año entró al espacio Schengen.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Junio y septiembre: mar templado, menos gente y precios más bajos que en julio y agosto. Plitvice es lindo en cualquier estación.",
      },
      {
        question: "¿Las playas son de arena?",
        answer:
          "La mayoría son de piedra o de canto rodado, con agua muy transparente. Hay pocas de arena; unas sandalias para el agua ayudan.",
      },
      {
        question: "¿Cómo me muevo por la costa?",
        answer:
          "En bus entre ciudades y en ferry o catamarán a las islas. El auto da libertad, pero en verano estacionar cerca de las ciudades viejas es difícil.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
