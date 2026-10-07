import type { DestinationGuide } from "./types";

/**
 * Guía de Bosnia y Herzegovina.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el marco convertible, atado al euro, que se muestra
 * con centavos. Dos climas en un país chico, Sarajevo con nieve y Mostar con
 * veranos de horno. Y una precaución que se dice con calma porque es práctica:
 * en el campo, seguir los senderos marcados.
 */
export const bosniaYHerzegovina: DestinationGuide = {
  slug: "bosnia-y-herzegovina",
  country: "Bosnia y Herzegovina",
  subregion: "Europa del Sur",
  subhead:
    "Mezquitas e iglesias en la misma calle, el puente de Mostar sobre un río verde esmeralda y montañas que fueron olímpicas. Dos climas en un país chico: inviernos de nieve en Sarajevo, veranos de horno en Herzegovina.",

  image: null,

  highlights: [
    {
      value: "1566",
      label: "el año del Puente Viejo de Mostar",
      note: "Destruido en la guerra y reconstruido piedra por piedra, hoy es patrimonio de la humanidad. Desde arriba, los saltadores se tiran al Neretva.",
    },
    {
      value: "1984",
      label: "los Juegos Olímpicos de invierno",
      note: "Sarajevo fue sede olímpica: Jahorina y Bjelašnica siguen siendo centros de esquí a menos de una hora de la ciudad.",
    },
    {
      value: "4",
      label: "religiones en pocas cuadras",
      note: "En el centro de Sarajevo, una mezquita, una catedral católica, una iglesia ortodoxa y una sinagoga quedan a pocas cuadras. Por eso le dicen la Jerusalén de Europa.",
    },
    {
      value: "KM",
      label: "el marco convertible, atado al euro",
      note: "Vale siempre lo mismo contra el euro. En muchos lugares aceptan euros, pero el vuelto llega en marcos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Bosnia y Herzegovina no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico. Los extranjeros se registran al llegar: en hoteles lo hace el alojamiento; en un departamento, confirmá que lo haga el anfitrión.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Bosnia y Herzegovina",
      body: [
        "La moneda es el marco convertible, KM, atado al euro. La tarjeta funciona en Sarajevo, Mostar y los hoteles; en pueblos, mercados y cafés chicos, conviene tener efectivo.",
        "En muchos lugares aceptan euros, con una cuenta redonda y el vuelto en marcos. La propina no es obligatoria; redondear es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí marcos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Dos climas en un país chico",
      body: [
        "Bosnia y Herzegovina es hemisferio norte: enero es invierno y julio, verano. Bosnia, en el centro y el norte, es continental, con inviernos fríos y nevados: Sarajevo pasa muchos días bajo cero.",
        "Herzegovina, en el sur, es mediterránea, con veranos de los más calurosos de Europa: Mostar pasa los treinta grados en julio y agosto.",
        "La montaña, con Jahorina, tiene nieve de diciembre a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio, septiembre y octubre: clima amable en todo el país. En julio y agosto, Sarajevo y la montaña son agradables, pero Mostar y Herzegovina son un horno.",
        "De diciembre a marzo se esquía en Jahorina y Bjelašnica.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Bosnia y Herzegovina",
      body: [
        "Entre ciudades se viaja en bus; para Herzegovina y los pueblos chicos, un auto o una excursión dan libertad. Las rutas de montaña son lentas y con curvas: calculá más tiempo del que dice el mapa.",
        "En el campo y la montaña, seguí los caminos y senderos marcados: todavía quedan zonas sin desminar de la guerra de los noventa, señalizadas con carteles. Por ciudades, rutas y senderos habituales no hay problema.",
        "Las precauciones son las de cualquier destino turístico: atención al celular y a la mochila en la Baščaršija y en el Puente Viejo.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "El Puente Viejo de Mostar, la Baščaršija otomana y un siglo XX que se entiende caminando Sarajevo.",
    },
    {
      dimension: "Naturaleza",
      score: 8.5,
      rationale:
        "Ríos verdes, las cascadas de Kravica y del Una, y montañas olímpicas.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Ćevapi, burek, café bosnio y dulces otomanos, todo abundante.",
    },
    {
      dimension: "Clima",
      score: 6.5,
      rationale:
        "Inviernos fríos en Sarajevo y veranos de horno en Mostar; la primavera y el otoño son ideales.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "De los países más baratos de Europa, con ciudades y paisajes a la altura de sus vecinos.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Buses entre ciudades y rutas lentas; para pueblos y naturaleza conviene auto o excursión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El marco está atado al euro: precios estables y claros.",
    },
  ],

  shines: [
    "Sarajevo y Mostar: Oriente y Occidente en pocas cuadras.",
    "Precios bajos para Europa.",
    "Ríos, cascadas y montañas a pocas horas.",
  ],

  costs: [
    "Veranos muy calurosos en Herzegovina.",
    "Transporte entre ciudades lento.",
    "Fuera de las ciudades, poco inglés y efectivo para casi todo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Sarajevo, con inviernos de nieve, que Mostar, con veranos de horno. Los precios están en marcos convertibles y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "sarajevo",
      name: "Sarajevo",
      region: "Centro",
      tag: "Oriente y Occidente",
      blurb:
        "La Baščaršija otomana, la ciudad austrohúngara y la historia del siglo XX en un valle rodeado de montañas. Es la base del planificador: inviernos fríos y nevados, veranos templados.",
      coords: [43.8563, 18.4131],
      featured: true,
      image: null,
    },
    {
      id: "mostar",
      name: "Mostar",
      region: "Herzegovina",
      tag: "El Puente Viejo",
      blurb:
        "El puente otomano sobre el Neretva, la ciudad vieja de piedra y los saltadores del puente. Patrimonio de la humanidad, y de lo más caluroso del país en verano.",
      coords: [43.3438, 17.8078],
      image: null,
    },
    {
      id: "blagaj",
      name: "Blagaj y Počitelj",
      region: "Herzegovina",
      tag: "El monasterio del río",
      blurb:
        "La casa derviche de Blagaj, al pie del acantilado donde nace el río Buna, y el pueblo amurallado de Počitelj, sobre el Neretva.",
      coords: [43.2569, 17.9033],
      image: null,
    },
    {
      id: "kravica",
      name: "Cascadas de Kravica",
      region: "Herzegovina",
      tag: "Cascadas para nadar",
      blurb:
        "Una herradura de cascadas sobre un lago verde donde se nada en verano. A menos de una hora de Mostar.",
      coords: [43.1564, 17.6083],
      image: null,
    },
    {
      id: "jajce",
      name: "Jajce",
      region: "Centro",
      tag: "Cascada en la ciudad",
      blurb:
        "Una ciudad medieval con una cascada que cae en pleno centro y, cerca, los molinos de agua de los lagos de Pliva.",
      coords: [44.3417, 17.2706],
      image: null,
    },
    {
      id: "visegrad",
      name: "Višegrad",
      region: "Este",
      tag: "El puente sobre el Drina",
      blurb:
        "El puente otomano de la novela de Ivo Andrić, patrimonio de la humanidad, sobre el río Drina.",
      coords: [43.7826, 19.2914],
      image: null,
    },
    {
      id: "trebinje",
      name: "Trebinje",
      region: "Herzegovina",
      tag: "Plátanos y viñedos",
      blurb:
        "Una ciudad soleada del sur, con plaza de plátanos, puentes de piedra y viñedos, a media hora de Dubrovnik.",
      coords: [42.7114, 18.3433],
      image: null,
    },
    {
      id: "una",
      name: "Parque Nacional del Una",
      region: "Noroeste",
      tag: "Río de cascadas",
      blurb:
        "Un río de agua verde con cascadas, en la frontera con Croacia, cerca de Bihać. Rafting y senderos.",
      coords: [44.8169, 15.8708],
      image: null,
    },
    {
      id: "jahorina",
      name: "Jahorina",
      region: "Centro",
      tag: "Montaña olímpica",
      blurb:
        "La montaña de los Juegos de 1984, hoy el centro de esquí más grande del país, a menos de una hora de Sarajevo. En verano, senderos.",
      coords: [43.7383, 18.5664],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bosnia y Herzegovina tiene dos climas: Sarajevo y el centro son continentales, con inviernos fríos y nevados que piden abrigo de verdad; Mostar y Herzegovina, en el sur, tienen veranos que pasan los treinta grados. Primavera y otoño son ideales para todo el país. Llevá efectivo en marcos para pueblos y mercados, y calzado cómodo para el empedrado.",
    keyPoints: [
      "Hemisferio norte: en invierno, Sarajevo tiene nieve; en verano, Mostar es de lo más caluroso de Europa.",
      "La moneda es el marco convertible, atado al euro.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "En el campo, seguí siempre los caminos y senderos marcados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y agua. En Mostar en julio y agosto, mejor recorrer temprano y a la tarde.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época.",
      fresco:
        "Capas, un buzo abrigado y una campera impermeable. Sarajevo refresca de noche aun en verano.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. Sarajevo y la montaña tienen nieve en invierno.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tomá café bosnio en la Baščaršija",
          body: "Se sirve en džezva, con un terrón de azúcar y un lokum, y se toma sin apuro.",
        },
        {
          title: "Mirá a los saltadores del Puente Viejo",
          body: "En verano se tiran al Neretva desde más de veinte metros; antes de saltar, juntan propinas.",
        },
        {
          title: "Dormí una noche en Mostar",
          body: "A media mañana llegan las excursiones y el calor. Temprano y al atardecer, la ciudad vieja se disfruta.",
        },
        {
          title: "Nadá en Kravica",
          body: "Las cascadas tienen un lago verde donde se nada en verano. Temprano hay menos gente.",
        },
        {
          title: "Llevá efectivo en marcos",
          body: "Fuera de Sarajevo y Mostar, muchos lugares no aceptan tarjeta. Si pagás en euros, el vuelto llega en marcos.",
        },
        {
          title: "Elegí pagar en marcos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te salgas de los senderos marcados",
          body: "En el campo y la montaña todavía quedan zonas sin desminar, señalizadas con carteles. Por caminos y senderos marcados no hay problema.",
        },
        {
          title: "No subestimes el calor de Herzegovina",
          body: "Mostar en verano pasa los treinta grados y la piedra del centro devuelve el calor. Agua, sombrero y siesta.",
        },
        {
          title: "No subestimes el invierno de Sarajevo",
          body: "Días bajo cero y nieve. Abrigo de verdad y calzado que no resbale.",
        },
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres, el pelo. Muchas prestan un pañuelo en la entrada.",
        },
        {
          title: "No descuides la mochila en las zonas llenas",
          body: "En la Baščaršija y en el Puente Viejo, mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "clima",
        title: "Dos climas",
        notice: {
          tone: "info",
          title: "Del frío de Sarajevo al calor de Mostar",
          body: "Sarajevo, en la montaña, es varios grados más fresca que Mostar. Si combinás las dos, llevá capas.",
        },
        summary: "Para un país de dos climas",
        items: [
          "Campera de abrigo y gorro, si vas en invierno",
          "Ropa liviana, sombrero y protector, si vas en verano",
          "Un buzo o polar para las noches de Sarajevo",
          "Calzado cómodo con buena suela para el empedrado",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Bosnia y Herzegovina no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida del país",
          "Reservas de alojamiento, que además hace el registro",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "plata",
        title: "Plata y pagos",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Marcos en efectivo, en billetes chicos",
          "Tarjeta de débito para el cajero",
          "Una segunda tarjeta, por las dudas",
          "Algunos euros chicos, que se aceptan en muchos lugares",
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
          "Protector solar y crema para después del sol",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de un solo clima",
        why: "Sarajevo, en la montaña, es varios grados más fresca que Mostar.",
        instead: "Capas que sirvan para frío y calor.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "El empedrado de Mostar y la Baščaršija se pule y resbala.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de las ciudades grandes, el efectivo manda.",
        instead: "Marcos en efectivo y una tarjeta.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Mezquitas e iglesias piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "La valija grande",
        why: "Empedrado, escaleras y buses chicos.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Bosnia y Herzegovina?",
        answer:
          "Depende del pasaporte. Bosnia y Herzegovina no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Bosnia cuentan para los 90 de Schengen?",
        answer:
          "No. Bosnia y Herzegovina no es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Puedo pagar en euros?",
        answer:
          "En muchos lugares sí, con una cuenta redonda, pero el vuelto llega en marcos. Para el día a día, mejor marcos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Bosnia y Herzegovina usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio, septiembre y octubre: clima amable en todo el país. En invierno, esquí en Jahorina.",
      },
      {
        question: "¿Puedo hacer senderismo?",
        answer:
          "Sí, hay montañas y ríos hermosos. Seguí siempre los caminos y senderos marcados: en algunas zonas rurales todavía quedan áreas sin desminar, señalizadas.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Sarajevo y las ciudades, sí, y en las fuentes públicas también. Si dudás, preguntá.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
