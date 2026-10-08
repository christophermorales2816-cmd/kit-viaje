import type { DestinationGuide } from "./types";

/**
 * Guía de Albania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: fuera de Schengen, con el lek y el efectivo como
 * regla fuera de Tirana, y un transporte de furgones sin horario fijo. El clima
 * va de la costa del Jónico a los Alpes albaneses, con nieve en invierno.
 */
export const albania: DestinationGuide = {
  slug: "albania",
  country: "Albania",
  subregion: "Europa del Sur",
  subhead:
    "Playas de agua turquesa en el Jónico, ciudades otomanas de piedra y montañas salvajes, en uno de los países más baratos de Europa. No es Schengen: efectivo en leks y paciencia en las rutas.",

  image: null,

  highlights: [
    {
      value: "2",
      label: "ciudades otomanas patrimonio de la humanidad",
      note: "Berat, la ciudad de las mil ventanas, y Gjirokastra, la ciudad de piedra, comparten el mismo sitio de la UNESCO.",
    },
    {
      value: "Butrinto",
      label: "ruinas griegas y romanas frente al mar",
      note: "Un sitio arqueológico entre lagunas y bosque, a minutos de Ksamil, habitado desde la Antigüedad griega hasta los venecianos.",
    },
    {
      value: "173.000",
      label: "búnkeres de la dictadura",
      note: "El régimen de Enver Hoxha llenó el país de búnkeres de hormigón. Se ven en playas y campos, y dos de los grandes, en Tirana, son museos.",
    },
    {
      value: "2.694 m",
      label: "la cumbre de los Alpes albaneses",
      note: "En el norte, con la caminata de Theth a Valbona, la más famosa del país. Se hace de junio a septiembre.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Albania no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico, y el pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Albania",
      body: [
        "La moneda es el lek. La tarjeta funciona en Tirana, en hoteles y en restaurantes de la costa, pero en pueblos, furgones, playas y la montaña manda el efectivo.",
        "En zonas turísticas aceptan euros, con cuentas redondeadas a favor del comercio: pagar en leks sale mejor. Los cajeros cobran comisión, así que conviene sacar pocas veces. La propina no es obligatoria; redondear es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí leks: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del Jónico a los Alpes",
      body: [
        "Albania es hemisferio norte: enero es invierno y julio, verano. La costa es mediterránea, con veranos largos, secos y calurosos e inviernos suaves y lluviosos. El interior, con Berat y Gjirokastra, pasa los treinta grados en verano y tiene heladas en invierno.",
        "El norte es montaña: en los Alpes albaneses nieva en invierno, y Theth y Valbona se visitan de mayo a octubre.",
        "Noviembre y diciembre son los meses más lluviosos del país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a junio y en septiembre: mar templado, calor amable y menos gente. Julio y agosto son muy calurosos y la Riviera se llena.",
        "Para los Alpes albaneses, de junio a septiembre: la caminata de Theth a Valbona se hace con el paso sin nieve.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Albania",
      body: [
        "Entre ciudades se viaja en bus o en furgón, minibuses que salen cuando se llenan: los horarios existen, pero conviene confirmarlos en el lugar. Para la Riviera y la montaña, un auto da libertad.",
        "Las rutas principales están bien, pero las de montaña son angostas y con curvas, y el manejo local es enérgico: calculá más tiempo del que dice el mapa.",
        "Las precauciones son las de cualquier destino turístico: atención al celular y a la mochila en las zonas concurridas y en los buses llenos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "Butrinto, Berat, Gjirokastra y la huella otomana, más los búnkeres y museos de la dictadura.",
    },
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "El agua del Jónico, turquesa y transparente, en Ksamil y la Riviera. En agosto, llenas.",
    },
    {
      dimension: "Naturaleza",
      score: 8.5,
      rationale: "Los Alpes albaneses, el valle de Theth y el lago de Shkodër.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Cocina mediterránea y otomana: byrek, tavë kosi, pescado fresco y mucho aceite de oliva.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "De los países más baratos de Europa, con playas y paisajes a la altura de sus vecinos.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Furgones con horarios flexibles, rutas lentas y efectivo para casi todo. Se resuelve, pero con paciencia.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "El lek es estable, pero conviene pagar en leks y no en euros, y los cajeros cobran comisión.",
    },
  ],

  shines: [
    "Playas del Jónico a precios bajos para Europa.",
    "Ciudades otomanas y ruinas antiguas, patrimonio de la humanidad.",
    "Montañas salvajes y hospitalidad de pueblo.",
  ],

  costs: [
    "Transporte entre ciudades lento y con horarios flexibles.",
    "Efectivo para casi todo fuera de Tirana.",
    "Julio y agosto: calor fuerte y la costa llena.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: la costa del sur es templada casi todo el año, y los Alpes albaneses tienen nieve en invierno. Los precios están en leks y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "tirana",
      name: "Tirana",
      region: "Centro",
      tag: "Capital de colores",
      blurb:
        "La capital, con edificios pintados de colores, la plaza Skanderbeg, el barrio de Blloku y búnkeres convertidos en museo. Es la base del planificador: veranos calurosos e inviernos suaves y lluviosos.",
      coords: [41.3275, 19.8187],
      featured: true,
      image: null,
    },
    {
      id: "durres",
      name: "Durrës",
      region: "Centro",
      tag: "Anfiteatro y playa",
      blurb:
        "La ciudad portuaria más cercana a Tirana, con un anfiteatro romano en pleno centro y una larga costa de playas.",
      coords: [41.3231, 19.4414],
      image: null,
    },
    {
      id: "berat",
      name: "Berat",
      region: "Interior",
      tag: "Ciudad de las mil ventanas",
      blurb:
        "Casas otomanas blancas escalonadas sobre el río, con una ciudadela todavía habitada. Patrimonio de la humanidad.",
      coords: [40.7058, 19.9522],
      image: null,
    },
    {
      id: "gjirokastra",
      name: "Gjirokastra",
      region: "Sur",
      tag: "Ciudad de piedra",
      blurb:
        "Casas torre de techos de piedra bajo un castillo enorme, en la ladera de un valle. Patrimonio de la humanidad.",
      coords: [40.0758, 20.1389],
      image: null,
    },
    {
      id: "sarande",
      name: "Sarandë",
      region: "Riviera",
      tag: "Puerta del sur",
      blurb:
        "La ciudad de la costa sur, frente a Corfú, con paseo marítimo y base para Ksamil, Butrinto y el manantial del Ojo Azul.",
      coords: [39.8756, 20.0053],
      image: null,
    },
    {
      id: "ksamil",
      name: "Ksamil y Butrinto",
      region: "Riviera",
      tag: "Agua turquesa",
      blurb:
        "Islotes y playas de agua turquesa, y al lado las ruinas de Butrinto, entre lagunas y bosque.",
      coords: [39.7681, 20.0003],
      image: null,
    },
    {
      id: "himare",
      name: "Himarë y la Riviera",
      region: "Riviera",
      tag: "Calas del Jónico",
      blurb:
        "Calas y pueblos de piedra entre el paso de Llogara y Sarandë, con algunas de las playas más lindas del país.",
      coords: [40.1017, 19.7447],
      image: null,
    },
    {
      id: "shkoder",
      name: "Shkodër",
      region: "Norte",
      tag: "Lago y castillo",
      blurb:
        "La ciudad del norte, con el castillo de Rozafa sobre el lago y la puerta a los Alpes albaneses.",
      coords: [42.0683, 19.5126],
      image: null,
    },
    {
      id: "valbona",
      name: "Valbona y Theth",
      region: "Alpes albaneses",
      tag: "Caminata entre valles",
      blurb:
        "Dos valles de alta montaña unidos por la caminata más famosa del país, con casas de huéspedes de familia. De mayo a octubre.",
      coords: [42.4517, 19.8889],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Albania es verano largo en la costa: de junio a septiembre, ropa liviana, traje de baño, sandalias para el agua y protector; julio y agosto pasan los treinta grados. El invierno es suave y lluvioso en la costa, y frío en el interior y la montaña, donde nieva. Llevá efectivo en leks y paciencia: el país se recorre más lento de lo que parece en el mapa.",
    keyPoints: [
      "Hemisferio norte: verano caluroso y seco de junio a septiembre; invierno suave en la costa y frío en la montaña.",
      "Fuera de Tirana manda el efectivo, en leks.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "Para Theth y Valbona, de junio a septiembre y con calzado de trekking.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, sombrero y protector alto. En julio y agosto, Berat y Tirana pasan los treinta grados.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de la primavera y el otoño: el mejor para recorrer.",
      fresco:
        "Capas y una campera impermeable: es el invierno de la costa, con lluvia frecuente, y la primavera de la montaña.",
      frio: "Campera de abrigo, gorro y guantes. Los Alpes albaneses tienen nieve en invierno, y muchas casas no tienen buena calefacción.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá efectivo en leks",
          body: "En furgones, playas, pueblos y la montaña, la tarjeta casi no se usa. Pagar en leks sale mejor que en euros.",
        },
        {
          title: "Bañate en Ksamil temprano",
          body: "Las playas chicas se llenan de reposeras desde media mañana en verano.",
        },
        {
          title: "Caminá de Theth a Valbona",
          body: "La travesía clásica de los Alpes albaneses, en un día largo, con noches en casas de huéspedes.",
        },
        {
          title: "Probá el tavë kosi",
          body: "Cordero al horno con yogur, el plato nacional. Y byrek en cualquier panadería.",
        },
        {
          title: "Dormí en Berat o Gjirokastra",
          body: "Las dos ciudades otomanas se disfrutan más con una noche: a la tarde se vacían.",
        },
        {
          title: "Elegí pagar en leks",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te guíes por los horarios del furgón",
          body: "Salen cuando se llenan. Preguntá en el lugar y llegá con margen.",
        },
        {
          title: "No subestimes las rutas de montaña",
          body: "Son angostas, con curvas y a veces sin asfalto. El mapa promete menos tiempo del real.",
        },
        {
          title: "No pagues en euros si podés evitarlo",
          body: "Te aceptan euros en la costa, pero redondeando a su favor.",
        },
        {
          title: "No dejes la montaña para el invierno",
          body: "Theth y Valbona quedan aislados por la nieve; la temporada es de mayo a octubre.",
        },
        {
          title: "No descuides la mochila en las zonas llenas",
          body: "En los buses llenos y las playas de agosto, mochila adelante y el teléfono a mano.",
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
          title: "Verano largo en la costa",
          body: "De junio a septiembre el sol pega fuerte y casi no llueve. Muchas playas son de piedra.",
        },
        summary: "Lo que pide el verano albanés",
        items: [
          "Protector solar de factor alto",
          "Sombrero y anteojos de sol",
          "Sandalias para el agua",
          "Traje de baño y toalla de microfibra",
          "Botella reutilizable",
        ],
      },
      {
        id: "plata",
        title: "Plata y pagos",
        notice: {
          tone: "warn",
          title: "Fuera de Tirana manda el efectivo",
          body: "En pueblos, furgones, playas y la montaña casi no se usa tarjeta. Llevá leks y sacá pocas veces: los cajeros cobran comisión.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Leks en efectivo, en billetes chicos",
          "Tarjeta de débito para el cajero",
          "Una segunda tarjeta, por las dudas",
          "Una billetera que no quede a la vista",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Albania no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
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
          "Curitas para las caminatas",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Tirana, el efectivo manda.",
        instead: "Leks en efectivo y una tarjeta para el cajero.",
      },
      {
        leave: "Un abrigo pesado para la costa",
        why: "En la costa casi nunca hace frío de verdad.",
        instead: "Capas; el abrigo, solo para la montaña en invierno.",
      },
      {
        leave: "La valija grande",
        why: "Los furgones tienen poco espacio y muchas calles son empedradas.",
        instead: "Una mochila o una valija mediana.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Las calles de Berat y Gjirokastra son empinadas y resbalan.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Planes con horarios ajustados",
        why: "El transporte entre ciudades es flexible y lento.",
        instead: "Días con margen y una noche en cada ciudad.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Albania?",
        answer:
          "Depende del pasaporte. Albania no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Albania cuentan para los 90 de Schengen?",
        answer:
          "No. Albania no es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Puedo pagar en euros?",
        answer:
          "En la costa y en zonas turísticas, muchas veces sí, pero redondeando a favor del comercio. Pagar en leks sale mejor.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Albania usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Junio y septiembre para la costa; de junio a septiembre para la montaña. Julio y agosto son muy calurosos y llenos.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En bus o en furgón, que sale cuando se llena, o en auto. Calculá más tiempo del que marca el mapa.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Mejor no: tomá agua embotellada, que es barata y está en todos lados.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
