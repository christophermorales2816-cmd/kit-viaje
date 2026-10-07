import type { DestinationGuide } from "./types";

/**
 * Guía de Macedonia del Norte.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: fuera de Schengen, con el denar, y un contraste de
 * clima entre Skopie, calurosa en verano, y el lago de Ohrid, que suaviza los
 * dos extremos.
 */
export const macedoniaDelNorte: DestinationGuide = {
  slug: "macedonia-del-norte",
  country: "Macedonia del Norte",
  subregion: "Europa del Sur",
  subhead:
    "Un lago transparente con iglesias bizantinas en la orilla, una capital llena de estatuas y montañas a una hora. Veranos calurosos, inviernos fríos y precios de los más bajos de Europa.",

  image: null,

  highlights: [
    {
      value: "365",
      label: "iglesias en Ohrid, según la tradición",
      note: "Una por cada día del año, dice la leyenda. La ciudad y el lago son patrimonio de la humanidad, natural y cultural a la vez.",
    },
    {
      value: "2",
      label: "grandes lagos en la frontera sur",
      note: "Ohrid, compartido con Albania, y Prespa, entre Macedonia del Norte, Albania y Grecia.",
    },
    {
      value: "Estatuas",
      label: "por todo el centro de Skopie",
      note: "Un proyecto de los años 2010 llenó el centro de estatuas, fuentes y fachadas neoclásicas. Hay que verlo para creerlo.",
    },
    {
      value: "Ajvar",
      label: "el pimiento asado de cada otoño",
      note: "En otoño las familias asan pimientos para hacer ajvar; en cualquier mesa aparece junto al pan y el queso.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Macedonia del Norte no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico. Los extranjeros se registran al llegar: en hoteles lo hace el alojamiento; en un departamento, confirmá que lo haga el anfitrión.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Macedonia del Norte",
      body: [
        "La moneda es el denar. La tarjeta funciona en Skopie, Ohrid y los hoteles; en mercados, pueblos y la montaña, conviene tener efectivo.",
        "En zonas turísticas a veces aceptan euros, pero sale mejor pagar en denares. La propina no es obligatoria; redondear es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí denares: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor seco y un lago que suaviza",
      body: [
        "Macedonia del Norte es hemisferio norte: enero es invierno y julio, verano. El clima es continental: veranos calurosos y secos, con Skopie por encima de los treinta grados, e inviernos fríos, con heladas y algo de nieve.",
        "El lago de Ohrid, a casi setecientos metros, suaviza los dos extremos: el verano es agradable y el agua, fresca.",
        "Mavrovo y las montañas del oeste tienen nieve en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a junio y en septiembre: clima amable y el lago en su mejor momento. Julio y agosto son calurosos en Skopie y llenos en Ohrid, con festival de verano.",
        "En invierno se esquía en Mavrovo; el resto del país es frío y tranquilo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Macedonia del Norte",
      body: [
        "Entre ciudades se viaja en bus: Skopie y Ohrid están bien unidas, en unas tres horas. Para el lago y los pueblos, taxis y alguna excursión resuelven; un auto da libertad para Mavrovo y Prespa.",
        "Hay dos aeropuertos, Skopie y Ohrid.",
        "Las precauciones son las de cualquier destino turístico: atención al celular y a la mochila en el bazar de Skopie y en el paseo de Ohrid en verano.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "Iglesias bizantinas, la ciudad de Ohrid, ruinas antiguas y la huella otomana del bazar de Skopie.",
    },
    {
      dimension: "Naturaleza",
      score: 8,
      rationale:
        "El lago de Ohrid, el cañón de Matka y las montañas de Mavrovo.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Tavče gravče, ajvar, quesos y los vinos de la región de Tikveš.",
    },
    {
      dimension: "Clima",
      score: 7,
      rationale:
        "Veranos secos y soleados, inviernos fríos; en el lago, todo es más suave.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "De los países más baratos de Europa, con un lago que no tiene nada que envidiarle a nadie.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Buses entre las ciudades principales; para lo demás, taxi, excursión o auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "El denar es estable; tarjeta en las ciudades y efectivo para lo demás.",
    },
  ],

  shines: [
    "El lago de Ohrid, con iglesias bizantinas en la orilla.",
    "Precios muy bajos para Europa.",
    "Un país chico: todo queda a pocas horas.",
  ],

  costs: [
    "Veranos muy calurosos en Skopie.",
    "Fuera de Skopie y Ohrid, transporte limitado.",
    "Inviernos fríos y grises en el interior.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Skopie es calurosa en verano, el lago de Ohrid es más suave y Mavrovo tiene nieve en invierno. Los precios están en denares y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "skopie",
      name: "Skopie",
      region: "Norte",
      tag: "Capital de estatuas",
      blurb:
        "El viejo bazar otomano, la fortaleza y el puente de piedra frente a un centro lleno de estatuas. Es la base del planificador: veranos calurosos e inviernos fríos.",
      coords: [41.9981, 21.4254],
      featured: true,
      image: null,
    },
    {
      id: "ohrid",
      name: "Ohrid",
      region: "Lago de Ohrid",
      tag: "Iglesias sobre el lago",
      blurb:
        "Una ciudad de iglesias bizantinas y casas blancas sobre un lago transparente, con San Juan de Kaneo en un acantilado. Patrimonio de la humanidad.",
      coords: [41.1172, 20.8016],
      image: null,
    },
    {
      id: "struga",
      name: "Struga",
      region: "Lago de Ohrid",
      tag: "Donde nace el Drim",
      blurb:
        "La ciudad donde el lago desagua en el río Drim Negro, más tranquila que Ohrid, con playas en la orilla.",
      coords: [41.1778, 20.6783],
      image: null,
    },
    {
      id: "san-naum",
      name: "Monasterio de San Naum",
      region: "Lago de Ohrid",
      tag: "Monasterio y manantiales",
      blurb:
        "Un monasterio en el extremo sur del lago, junto a la frontera con Albania, con manantiales que se recorren en bote.",
      coords: [40.9131, 20.7406],
      image: null,
    },
    {
      id: "matka",
      name: "Cañón de Matka",
      region: "Norte",
      tag: "Cañón y kayak",
      blurb:
        "Un cañón de paredes altas con un lago verde, monasterios medievales y cuevas, a media hora de Skopie. Kayak y senderos.",
      coords: [41.95, 21.2981],
      image: null,
    },
    {
      id: "bitola",
      name: "Bitola y Heraclea",
      region: "Sur",
      tag: "Calle de cafés",
      blurb:
        "La ciudad de los cónsules, con la calle peatonal Širok Sokak llena de cafés y, al lado, los mosaicos de Heraclea Lyncestis.",
      coords: [41.0297, 21.3292],
      image: null,
    },
    {
      id: "mavrovo",
      name: "Parque Nacional de Mavrovo",
      region: "Oeste",
      tag: "La iglesia del lago",
      blurb:
        "El parque nacional más grande del país, con un lago y la iglesia semihundida de San Nicolás; en invierno, centro de esquí.",
      coords: [41.6533, 20.7367],
      image: null,
    },
    {
      id: "kratovo",
      name: "Kratovo",
      region: "Este",
      tag: "Pueblo en un cráter",
      blurb:
        "Un pueblo de piedra dentro del cráter de un volcán apagado, con puentes medievales y torres.",
      coords: [42.0783, 22.1806],
      image: null,
    },
    {
      id: "prespa",
      name: "Lago Prespa",
      region: "Sur",
      tag: "El lago de tres países",
      blurb:
        "Un lago alto y tranquilo, compartido con Albania y Grecia, con pueblos de pescadores e islas.",
      coords: [40.99, 20.93],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Macedonia del Norte es continental: en verano, Skopie pasa los treinta grados y alcanza con ropa liviana, protector y agua; en el lago de Ohrid es más suave y las noches refrescan. En invierno hace frío de verdad, con heladas y nieve en la montaña: campera de abrigo, gorro y guantes. Llevá efectivo en denares para mercados y pueblos.",
    keyPoints: [
      "Hemisferio norte: verano caluroso y seco de junio a agosto; invierno frío de diciembre a febrero.",
      "El lago de Ohrid suaviza el clima: más fresco en verano que Skopie.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "Fuera de Skopie y Ohrid, el efectivo manda.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y agua. En julio y agosto, Skopie pasa los treinta grados; el lago es el refugio.",
      templado:
        "Ropa liviana de día y un buzo para la noche, sobre todo junto al lago.",
      fresco:
        "Capas, un buzo abrigado y una campera. Es el clima de la primavera y el otoño, y de las noches de montaña.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. Mavrovo tiene nieve en invierno.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Caminá la orilla de Ohrid hasta San Juan de Kaneo",
          body: "El sendero sobre el lago lleva a la iglesia del acantilado; al atardecer, es la postal del país.",
        },
        {
          title: "Recorré el viejo bazar de Skopie",
          body: "Callejuelas otomanas, mezquitas, caravasares y cafés, a un paso del centro de las estatuas.",
        },
        {
          title: "Remá en el cañón de Matka",
          body: "Kayak o bote hasta las cuevas, a media hora de Skopie.",
        },
        {
          title: "Probá el tavče gravče",
          body: "Porotos al horno en cazuela de barro, el plato nacional.",
        },
        {
          title: "Visitá San Naum en barco",
          body: "Desde Ohrid salen barcos por el lago; en el monasterio, los manantiales se recorren en bote de remo.",
        },
        {
          title: "Elegí pagar en denares",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el calor de Skopie",
          body: "En julio y agosto pasa los treinta grados: recorré temprano y buscá sombra al mediodía.",
        },
        {
          title: "No esperes tarjeta en todos lados",
          body: "En mercados, pueblos y algunos restaurantes, solo efectivo.",
        },
        {
          title: "No dejes Ohrid para un solo día",
          body: "El lago se disfruta sin correr: al menos dos noches.",
        },
        {
          title: "No entres a iglesias sin cubrirte",
          body: "Hombros y rodillas cubiertos en iglesias y monasterios.",
        },
        {
          title: "No descuides la mochila en las zonas llenas",
          body: "En el bazar de Skopie y en el paseo de Ohrid en verano, mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "verano",
        title: "Calor y lago",
        notice: {
          tone: "info",
          title: "Veranos calurosos y secos",
          body: "Skopie pasa los treinta grados en julio y agosto; el lago de Ohrid es más suave, y el agua, fresca.",
        },
        summary: "Lo que pide el verano",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Traje de baño para el lago",
          "Botella reutilizable",
          "Algo para cubrir hombros y rodillas en las iglesias",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Macedonia del Norte no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
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
        id: "invierno",
        title: "Invierno",
        notice: null,
        summary: "Si vas de diciembre a febrero",
        items: [
          "Campera de abrigo",
          "Gorro y guantes",
          "Calzado que no deje pasar el agua",
          "Un buzo o polar para sumar capas",
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
        leave: "Solo la tarjeta",
        why: "Fuera de las ciudades grandes manda el efectivo.",
        instead: "Denares en efectivo y una tarjeta.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "El empedrado de Ohrid y del bazar resbala.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Una campera liviana en enero",
        why: "El invierno del interior pasa días bajo cero.",
        instead: "Campera de abrigo, gorro y guantes.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Iglesias y monasterios piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "La valija grande",
        why: "Escaleras en Ohrid y buses chicos.",
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
        question: "¿Necesito visa para entrar a Macedonia del Norte?",
        answer:
          "Depende del pasaporte. Macedonia del Norte no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question:
          "¿Los días en Macedonia del Norte cuentan para los 90 de Schengen?",
        answer:
          "No. No es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Puedo pagar en euros?",
        answer: "A veces, en zonas turísticas, pero sale mejor en denares.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Macedonia del Norte usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio y septiembre: clima amable y el lago en su mejor momento.",
      },
      {
        question: "¿Cómo voy de Skopie a Ohrid?",
        answer:
          "En bus, en unas tres horas, o en auto. Ohrid también tiene aeropuerto.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En general sí en las ciudades. Si dudás, preguntá en el alojamiento.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
