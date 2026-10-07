import type { DestinationGuide } from "./types";

/**
 * Guía de Malta.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: Schengen y euro, pero con herencia británica —el
 * enchufe tipo G y el tránsito por la izquierda— que en la valija pesa más que
 * el clima. El archipiélago es tan chico que casi no hay diferencias de
 * temperatura entre un pueblo y otro.
 */
export const malta: DestinationGuide = {
  slug: "malta",
  country: "Malta",
  subregion: "Europa del Sur",
  subhead:
    "Un archipiélago en medio del Mediterráneo, con templos más antiguos que las pirámides, ciudades de caballeros y agua transparente. Verano largo y seco, invierno suave, y enchufe británico.",

  image: null,

  highlights: [
    {
      value: "300",
      label: "días de sol al año",
      note: "Veranos largos y secos, e inviernos suaves que nunca bajan de cero.",
    },
    {
      value: "Tipo G",
      label: "el enchufe británico",
      note: "Malta usa el enchufe de tres patas del Reino Unido. Sin adaptador no cargás nada.",
    },
    {
      value: "Izquierda",
      label: "la mano por la que se maneja",
      note: "Herencia británica, como el inglés, que es idioma oficial junto al maltés.",
    },
    {
      value: "5.500 años",
      label: "los templos megalíticos",
      note: "Más antiguos que Stonehenge y que las pirámides de Egipto. Los de Ġgantija, en Gozo, son patrimonio de la humanidad.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Malta es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Malta, Italia y Grecia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Malta",
      body: [
        "La moneda es el euro y la tarjeta se acepta en casi todos lados; en kioscos de pastizzi, puestos y algunos buses, el efectivo sigue siendo útil.",
        "Los alojamientos cobran una tasa por noche. La propina es opcional: dejar algo si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Mediterráneo puro",
      body: [
        "Malta es hemisferio norte: enero es invierno y julio, verano. Los veranos son largos, secos y calurosos —julio y agosto pasan los treinta grados— y los inviernos, suaves y algo lluviosos, sin bajar nunca de cero.",
        "El archipiélago es tan chico que casi no hay diferencias entre un pueblo y otro: Gozo y el interior refrescan un poco más de noche.",
        "El viento cambia mucho la sensación: en invierno, un día ventoso se siente frío, y muchas casas no tienen calefacción.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y de septiembre a octubre es lo mejor: mar templado, calor amable y menos gente.",
        "Julio y agosto son calurosos y llenos, con fiestas de pueblo casi todos los fines de semana. El invierno es suave, ideal para recorrer sin calor, aunque el mar está fresco.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Malta",
      body: [
        "Los buses llegan a casi todo el archipiélago, aunque en verano el tránsito los hace lentos. A Gozo se va en un ferry de media hora, y a Comino, en barcos chicos.",
        "Se maneja por la izquierda y las calles son angostas; para la mayoría de los viajes, bus, ferry y alguna aplicación de autos alcanzan.",
        "Al cruzar la calle, mirá primero a la derecha. Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia",
      score: 9.5,
      rationale:
        "Templos megalíticos, la ciudad de los Caballeros de San Juan y siete mil años de capas en una isla chica.",
    },
    {
      dimension: "Mar y buceo",
      score: 9,
      rationale:
        "Agua transparente, cuevas marinas y algunos de los mejores sitios de buceo del Mediterráneo.",
    },
    {
      dimension: "Clima",
      score: 9,
      rationale: "Sol casi todo el año e inviernos suaves.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Pastizzi, conejo, pescado y una cocina con influencias italianas, árabes y británicas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Más accesible que Italia o Francia, con buena calidad. Sliema y St. Julian's en verano son lo más caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Todo cerca, inglés en todos lados y buses a todo el archipiélago, aunque lentos en verano.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Historia de miles de años en un país que se cruza en una hora.",
    "Mar transparente y sol casi todo el año.",
    "Se habla inglés en todos lados.",
  ],

  costs: [
    "Julio y agosto: calor fuerte y mucha gente.",
    "Pocas playas de arena; la mayoría son de roca.",
    "Tránsito lento en verano.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, aunque acá las diferencias son mínimas: el archipiélago es tan chico que Gozo y La Valeta comparten casi el mismo tiempo. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "la-valeta",
      name: "La Valeta",
      region: "La Valeta y el puerto",
      tag: "Capital fortificada",
      blurb:
        "Una capital entera construida por los Caballeros de San Juan sobre una península, patrimonio de la humanidad, con la concatedral y su Caravaggio. Es la base del planificador: inviernos suaves, veranos largos y calurosos.",
      coords: [35.8989, 14.5146],
      featured: true,
      image: null,
    },
    {
      id: "mdina",
      name: "Mdina y Rabat",
      region: "Interior y sur",
      tag: "La ciudad del silencio",
      blurb:
        "Una ciudad amurallada en lo alto de una colina, casi sin autos, con Rabat y sus catacumbas al lado.",
      coords: [35.8858, 14.4031],
      image: null,
    },
    {
      id: "sliema",
      name: "Sliema y St. Julian's",
      region: "La Valeta y el puerto",
      tag: "Paseo marítimo",
      blurb:
        "El paseo marítimo, los hoteles y la vida nocturna de St. Julian's, frente a La Valeta.",
      coords: [35.9122, 14.5042],
      image: null,
    },
    {
      id: "gozo",
      name: "Gozo",
      region: "Gozo y Comino",
      tag: "Isla tranquila",
      blurb:
        "La isla hermana, más verde y tranquila, con la ciudadela de Victoria y los templos de Ġgantija. A media hora en ferry.",
      coords: [36.0444, 14.2397],
      image: null,
    },
    {
      id: "comino",
      name: "Comino y la Laguna Azul",
      region: "Gozo y Comino",
      tag: "Laguna Azul",
      blurb:
        "Una isla casi deshabitada con la Laguna Azul, de agua turquesa. En verano se llena de barcos: temprano o tarde.",
      coords: [36.0144, 14.3367],
      image: null,
    },
    {
      id: "tres-ciudades",
      name: "Las Tres Ciudades",
      region: "La Valeta y el puerto",
      tag: "Puerto de los caballeros",
      blurb:
        "Birgu, Senglea y Cospicua, las ciudades fortificadas frente a La Valeta, con menos gente y mucha historia.",
      coords: [35.8878, 14.5222],
      image: null,
    },
    {
      id: "marsaxlokk",
      name: "Marsaxlokk",
      region: "Interior y sur",
      tag: "Barcas de colores",
      blurb:
        "Un pueblo de pescadores con barcas de colores, los luzzu, y mercado de pescado los domingos.",
      coords: [35.8419, 14.5431],
      image: null,
    },
    {
      id: "mellieha",
      name: "Mellieħa y las playas del norte",
      region: "Norte",
      tag: "Playas de arena",
      blurb: "La zona de las mejores playas de arena de la isla, en el norte.",
      coords: [35.9564, 14.3622],
      image: null,
    },
    {
      id: "gruta-azul",
      name: "La Gruta Azul y el sur",
      region: "Interior y sur",
      tag: "Cuevas en el mar",
      blurb:
        "Cuevas marinas de agua azul intenso que se recorren en bote, cerca de los templos de Ħaġar Qim.",
      coords: [35.8203, 14.4561],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Malta es verano largo: de mayo a octubre, ropa liviana, traje de baño, sombrero y protector; julio y agosto pasan los treinta grados y casi no llueve. El invierno es suave y nunca baja de cero, pero tiene lluvia y viento: un buzo y una campera alcanzan. Y dos cosas que no son de Europa continental: el enchufe británico tipo G y el tránsito por la izquierda.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a septiembre, es seco y caluroso; el invierno, de diciembre a febrero, suave y con algo de lluvia.",
      "El enchufe es el británico tipo G: hace falta adaptador.",
      "Se maneja por la izquierda: al cruzar, mirá primero a la derecha.",
      "La mayoría de las playas son de roca: sandalias para el agua ayudan.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero y protector alto. En julio y agosto el sol pega fuerte y casi no hay sombra.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de la primavera y el otoño: el mejor.",
      fresco:
        "Capas y una campera que corte el viento. En invierno llueve algunos días y muchas casas no tienen calefacción.",
      frio: "Pasa poco: en algunas noches de enero y febrero baja de diez grados. Un buzo abrigado y una campera alcanzan.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Malta usa el enchufe británico de tres patas rectangulares, que no acepta ningún otro sin adaptador, tampoco los europeos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá un adaptador tipo G",
          body: "Es el enchufe británico, y no entra ningún otro. Mejor dos, para cargar el teléfono y la batería a la vez.",
        },
        {
          title: "Recorré La Valeta a pie",
          body: "Es chica, en damero, y entera patrimonio de la humanidad. Las vistas del puerto desde los jardines de Barrakka son de lo mejor.",
        },
        {
          title: "Andá a Comino temprano",
          body: "La Laguna Azul se llena de barcos desde media mañana en verano. Temprano o al final de la tarde, se disfruta.",
        },
        {
          title: "Tomá el ferry a Gozo",
          body: "Media hora de cruce y una isla más tranquila y verde. El pasaje se paga a la vuelta.",
        },
        {
          title: "Probá los pastizzi",
          body: "Hojaldres rellenos de ricota o arvejas, baratísimos y en todos lados. Es el bocado nacional.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cruces mirando a la izquierda",
          body: "Los autos vienen por la derecha. Mirá a la derecha primero.",
        },
        {
          title: "No subestimes el sol de verano",
          body: "En julio y agosto pega fuerte y casi no hay sombra en las ruinas ni en la costa. Protector, sombrero y agua.",
        },
        {
          title: "No esperes playas de arena en todos lados",
          body: "La mayoría de la costa es de roca. Las de arena están en el norte y en Gozo.",
        },
        {
          title: "No olvides cubrirte en las iglesias",
          body: "La concatedral de San Juan y muchas iglesias piden hombros y rodillas cubiertos.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En Sliema, St. Julian's y los buses llenos de verano hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "sol",
        title: "Sol y mar",
        notice: {
          tone: "info",
          title: "Sol casi todo el año",
          body: "De mayo a octubre el sol pega fuerte y casi no llueve. La mayoría de las playas son de roca.",
        },
        summary: "Lo que pide el verano maltés",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Sandalias para el agua: costa de roca",
          "Traje de baño y toalla de microfibra",
          "Algo para cubrir hombros y rodillas en las iglesias",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe es el británico",
          body: "Malta usa el tipo G, de tres patas rectangulares, que no acepta enchufes de otros países, ni siquiera los europeos. Sin adaptador no cargás nada.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador tipo G, mejor dos",
          "Zapatilla múltiple, para cargar todo con un solo adaptador",
          "Cargador del teléfono y cable de repuesto",
          "Funda resistente al agua para el teléfono",
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
        leave: "Adaptadores europeos",
        why: "Los tomas malteses no aceptan enchufes de dos patas redondas.",
        instead: "Adaptador tipo G.",
      },
      {
        leave: "Un abrigo pesado",
        why: "Nunca baja de cero; en invierno alcanza con un buzo y una campera.",
        instead: "Capas y una campera que corte el viento.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "La piedra caliza de las calles se pule y resbala, sobre todo con lluvia.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para kioscos y puestos.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Las iglesias piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
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
        question: "¿Necesito visa para entrar a Malta?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, siempre. Malta usa el enchufe británico tipo G, que no acepta ningún otro. El voltaje es 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a octubre: mar templado, calor amable y menos gente. Julio y agosto son muy calurosos.",
      },
      {
        question: "¿Se habla inglés?",
        answer:
          "Sí: es idioma oficial junto al maltés, y se habla en todos lados.",
      },
      {
        question: "¿Cómo voy a Gozo?",
        answer:
          "En ferry desde el norte de la isla, en media hora; también hay un ferry rápido desde La Valeta. El pasaje del ferry común se paga a la vuelta.",
      },
      {
        question: "¿Las playas son de arena?",
        answer:
          "La mayoría son de roca, con agua muy transparente. Las de arena están en el norte de Malta y en Gozo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, pero es desalinizada y de sabor fuerte, y mucha gente toma embotellada.",
      },
      {
        question: "¿Se deja propina?",
        answer: "Es opcional. Dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
