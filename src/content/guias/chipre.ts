import type { DestinationGuide } from "./types";

/**
 * Guía de Chipre.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la ONU lo ubica en Asia Occidental, pero es miembro
 * de la Unión Europea y usa el euro, así que acá va con Europa del Sur. Es
 * Unión Europea sin ser todavía Schengen, con enchufe británico y tránsito por
 * la izquierda. La isla está dividida: la guía lo cuenta como dato de entrada
 * y todas las ciudades del planificador están en el sur.
 */
export const chipre: DestinationGuide = {
  slug: "chipre",
  country: "Chipre",
  subregion: "Europa del Sur",
  subhead:
    "Playas de agua cálida casi todo el año, mosaicos romanos, pueblos de montaña en los Troodos y la isla de Afrodita. Unión Europea y euro, pero con enchufe británico y tránsito por la izquierda.",

  image: null,

  highlights: [
    {
      value: "Afrodita",
      label: "nació en sus costas, según el mito",
      note: "La roca de Afrodita, Petra tou Romiou, entre Pafos y Limasol, es donde la leyenda la hace salir del mar.",
    },
    {
      value: "Tipo G",
      label: "el enchufe británico",
      note: "Chipre usa el enchufe de tres patas del Reino Unido. Sin adaptador no cargás nada, ni con un enchufe europeo.",
    },
    {
      value: "Izquierda",
      label: "la mano por la que se maneja",
      note: "Herencia británica, como el enchufe. Al cruzar la calle, mirá primero a la derecha.",
    },
    {
      value: "UNESCO",
      label: "los mosaicos de Pafos y las iglesias de los Troodos",
      note: "Pafos es patrimonio de la humanidad por sus mosaicos romanos, y diez iglesias pintadas de las montañas también lo son.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: Unión Europea, sin Schengen",
      body: [
        "Chipre es parte de la Unión Europea pero todavía no aplica el espacio Schengen: tiene su propio control de fronteras, y los días que pasás acá no se descuentan del cupo de 90. El país está en proceso de sumarse, así que fijate si eso cambió antes de viajar.",
        "Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico.",
        "La isla está dividida desde 1974: el norte se administra aparte y se cruza por pasos habilitados, con pasaporte. Para moverte por toda la isla, entrá por los aeropuertos de Lárnaca o Pafos: entrar por el norte y pasar al sur no siempre está permitido.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Chipre",
      body: [
        "La moneda es el euro y la tarjeta se acepta en casi todos lados; en tabernas de pueblo y kioscos de playa, el efectivo sigue siendo útil.",
        "Algunos restaurantes ya suman el servicio a la cuenta; si no, dejar algo si te atendieron bien es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "El Mediterráneo más oriental",
      body: [
        "Chipre es hemisferio norte: enero es invierno y julio, verano. Los veranos son largos, secos y muy calurosos —Nicosia, tierra adentro, pasa los treinta y cinco grados— y los inviernos, suaves y algo lluviosos en la costa.",
        "Los montes Troodos son el contraste: noches frescas en verano y nieve en las cumbres en invierno, cuando hasta se esquía.",
        "De mayo a octubre casi no llueve.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a junio y de septiembre a noviembre: mar templado, calor amable y menos gente. Julio y agosto son muy calurosos, sobre todo lejos de la costa.",
        "El invierno es suave para recorrer ruinas y pueblos, aunque el mar está fresco.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Chipre",
      body: [
        "No hay trenes: los buses unen las ciudades de la costa y Nicosia, y hay traslados desde los dos aeropuertos. Para los Troodos y la península de Akamas, un auto da libertad.",
        "Se maneja por la izquierda. Las rutas principales son buenas; las de montaña, angostas y con curvas.",
        "Las precauciones son las de cualquier destino turístico: atención al celular y a la mochila en las playas llenas y en la vida nocturna de Ayia Napa.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-09",

  scores: [
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "Agua cálida y transparente, con arena en Ayia Napa y Protaras y calas en Akamas.",
    },
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "Mosaicos romanos, el teatro de Kourion, iglesias bizantinas pintadas y la capital dividida.",
    },
    {
      dimension: "Clima",
      score: 9,
      rationale: "Sol casi todo el año e inviernos suaves en la costa.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale: "Meze, halloumi, souvla y vinos de los Troodos.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Más accesible que Grecia en temporada alta, aunque Ayia Napa y Limasol en verano se encarecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Distancias cortas, inglés en todos lados y buses en la costa; para la montaña conviene auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Playas y sol casi todo el año.",
    "Historia griega, romana y bizantina en una isla chica.",
    "Se habla inglés en todos lados.",
  ],

  costs: [
    "Julio y agosto muy calurosos, sobre todo en Nicosia.",
    "Sin trenes y con pocos buses a la montaña.",
    "Se maneja por la izquierda.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: la costa es templada casi todo el año, Nicosia es más calurosa en verano y los Troodos tienen invierno de verdad. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "limasol",
      name: "Limasol",
      region: "Sur",
      tag: "Puerto y paseo marítimo",
      blurb:
        "La ciudad de la costa sur, con castillo medieval, puerto deportivo y un paseo marítimo largo, a mitad de camino entre los dos aeropuertos. Es la base del planificador: veranos calurosos e inviernos suaves.",
      coords: [34.6786, 33.0413],
      featured: true,
      image: null,
    },
    {
      id: "pafos",
      name: "Pafos",
      region: "Oeste",
      tag: "Mosaicos romanos",
      blurb:
        "Mosaicos romanos, las Tumbas de los Reyes y un puerto con fuerte, todo patrimonio de la humanidad. Cerca, la roca de Afrodita.",
      coords: [34.772, 32.4297],
      image: null,
    },
    {
      id: "larnaca",
      name: "Lárnaca",
      region: "Sur",
      tag: "Paseo de palmeras",
      blurb:
        "La ciudad del aeropuerto principal, con paseo de palmeras frente al mar, la iglesia de San Lázaro y un lago salado con flamencos en invierno.",
      coords: [34.9229, 33.6233],
      image: null,
    },
    {
      id: "nicosia",
      name: "Nicosia",
      region: "Centro",
      tag: "Capital dividida",
      blurb:
        "La capital, dentro de murallas venecianas, con museos y calles peatonales, y un paso habilitado hacia el norte. Lo más caluroso de la isla en verano.",
      coords: [35.1667, 33.3667],
      image: null,
    },
    {
      id: "ayia-napa",
      name: "Ayia Napa",
      region: "Este",
      tag: "Playas y noche",
      blurb:
        "Playas de arena blanca y agua turquesa, el cabo Greco y la vida nocturna más animada de la isla en verano.",
      coords: [34.9823, 34.0017],
      image: null,
    },
    {
      id: "troodos",
      name: "Montes Troodos",
      region: "Montaña",
      tag: "Pueblos de montaña",
      blurb:
        "Pueblos de piedra, bodegas, el monasterio de Kykkos e iglesias pintadas patrimonio de la humanidad. Fresco en verano y con nieve en invierno.",
      coords: [34.8897, 32.8636],
      image: null,
    },
    {
      id: "akamas",
      name: "Polis y la península de Akamas",
      region: "Oeste",
      tag: "Costa salvaje",
      blurb:
        "La punta noroeste, casi sin construir, con los Baños de Afrodita, calas y la Laguna Azul, que se recorre en bote.",
      coords: [35.0367, 32.425],
      image: null,
    },
    {
      id: "kourion",
      name: "Kourion y Pissouri",
      region: "Sur",
      tag: "Teatro frente al mar",
      blurb:
        "Un teatro grecorromano sobre un acantilado frente al mar y, al lado, la bahía tranquila de Pissouri.",
      coords: [34.6644, 32.8878],
      image: null,
    },
    {
      id: "protaras",
      name: "Protaras",
      region: "Este",
      tag: "Calas tranquilas",
      blurb:
        "Calas de agua transparente y la bahía de Fig Tree, más tranquila que Ayia Napa.",
      coords: [35.0125, 34.0583],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Chipre es verano largo: de mayo a octubre, ropa liviana, traje de baño, sombrero y protector; julio y agosto pasan los treinta grados en la costa y los treinta y cinco en Nicosia. El invierno es suave en la costa, con algo de lluvia, y frío en los Troodos. Y dos cosas que no son de Europa continental: el enchufe británico tipo G y el tránsito por la izquierda.",
    keyPoints: [
      "Hemisferio norte: verano largo, seco y caluroso; invierno suave en la costa y frío en la montaña.",
      "El enchufe es el británico tipo G: hace falta adaptador.",
      "Unión Europea pero no Schengen: control de fronteras propio.",
      "Se maneja por la izquierda: al cruzar, mirá primero a la derecha.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero y protector alto. En julio y agosto, Nicosia y el interior pasan los treinta y cinco grados.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época.",
      fresco:
        "Capas y una campera liviana. Es el invierno de la costa, con algo de lluvia, y la primavera de la montaña.",
      frio: "Campera de abrigo, gorro y guantes para los Troodos en invierno, donde puede nevar. En la costa casi nunca hace falta.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Chipre usa el enchufe británico de tres patas rectangulares, que no acepta ningún otro sin adaptador, tampoco los europeos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá un adaptador tipo G",
          body: "Es el enchufe británico, y no entra ningún otro. Mejor dos, para cargar el teléfono y la batería a la vez.",
        },
        {
          title: "Entrá por Lárnaca o Pafos",
          body: "Son los aeropuertos que permiten moverse por toda la isla sin problemas en los pasos.",
        },
        {
          title: "Subí a los Troodos",
          body: "Pueblos de piedra, iglesias pintadas y fresco en pleno verano, a una hora de la costa.",
        },
        {
          title: "Pedí un meze",
          body: "Una sucesión de platos chicos —halloumi, souvla, pescado, salsas— que no termina hasta que digas basta.",
        },
        {
          title: "Recorré Pafos con tiempo",
          body: "Los mosaicos y las tumbas se ven mejor temprano, antes del calor.",
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
          body: "En julio y agosto pega fuerte, y en las ruinas casi no hay sombra. Protector, sombrero y agua.",
        },
        {
          title: "No olvides el pasaporte para cruzar",
          body: "Los pasos entre el sur y el norte piden documento, también a pie en Nicosia.",
        },
        {
          title: "No cuentes con buses a la montaña",
          body: "Los Troodos y Akamas casi no tienen transporte: excursión o auto.",
        },
        {
          title: "No entres a una iglesia sin cubrirte",
          body: "Hombros y rodillas cubiertos en iglesias y monasterios.",
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
          title: "Verano largo",
          body: "De mayo a octubre el sol pega fuerte y casi no llueve. En el interior el calor es más seco y más intenso.",
        },
        summary: "Lo que pide el verano chipriota",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Traje de baño y toalla de microfibra",
          "Sandalias para el agua en las calas de piedra",
          "Botella reutilizable",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe es el británico",
          body: "Chipre usa el tipo G, de tres patas rectangulares, que no acepta enchufes de otros países, ni siquiera los europeos. Sin adaptador no cargás nada.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador tipo G, mejor dos",
          "Zapatilla múltiple, para cargar todo con un solo adaptador",
          "Cargador del teléfono y cable de repuesto",
          "Batería externa para los días de ruta",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Chipre tiene control de fronteras propio. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente, también para cruzar al norte",
          "Pasaje de salida del país",
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
          "Repelente para las noches de verano",
        ],
      },
    ],
    avoid: [
      {
        leave: "Adaptadores europeos",
        why: "Los tomas chipriotas no aceptan enchufes de dos patas redondas.",
        instead: "Adaptador tipo G.",
      },
      {
        leave: "Un abrigo pesado para la costa",
        why: "En la costa casi nunca hace frío de verdad.",
        instead: "Capas; el abrigo, solo para los Troodos en invierno.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Iglesias y monasterios piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en casi todos lados.",
        instead: "Algo de efectivo para tabernas y kioscos.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Las ruinas y los pueblos de montaña tienen piedra y desniveles.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Chipre?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Chipre es parte de Schengen?",
        answer:
          "Es de la Unión Europea pero todavía no aplica Schengen, así que tiene control de fronteras propio y los días acá no se descuentan del cupo de 90. Está en proceso de sumarse: fijate si eso cambió.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, siempre. Chipre usa el enchufe británico tipo G, que no acepta ningún otro. El voltaje es 230 V.",
      },
      {
        question: "¿Puedo visitar el norte de la isla?",
        answer:
          "Sí, por los pasos habilitados, con pasaporte; en Nicosia hay uno peatonal en pleno centro. Conviene entrar a la isla por Lárnaca o Pafos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a noviembre. Julio y agosto son muy calurosos.",
      },
      {
        question: "¿Se habla inglés?",
        answer: "Sí, en todos lados, junto al griego.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En general sí, aunque mucha gente toma embotellada por el sabor. Si dudás, preguntá en el alojamiento.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Muchas veces el servicio ya viene en la cuenta. Si no, dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
