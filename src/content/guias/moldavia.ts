import type { DestinationGuide } from "./types";

/**
 * Guía de Moldavia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: fuera de Schengen y de la Unión Europea, con el leu
 * moldavo, y un país que se visita por el vino. Transnistria, la franja al este
 * del Dniéster, se administra aparte: la guía lo dice como dato de logística y
 * ninguna ciudad del planificador queda ahí.
 */
export const moldavia: DestinationGuide = {
  slug: "moldavia",
  country: "Moldavia",
  subregion: "Europa del Este",
  subhead:
    "Bodegas subterráneas de kilómetros, un monasterio excavado en la roca sobre un río y una capital de parques. Inviernos fríos, veranos calurosos y uno de los países menos visitados de Europa.",

  image: null,

  highlights: [
    {
      value: "120 km",
      label: "de túneles en las bodegas de Cricova",
      note: "Una ciudad subterránea de vino que se recorre en auto. Mileștii Mici, al lado, guarda una de las colecciones de vino más grandes del mundo.",
    },
    {
      value: "Rumano",
      label: "el idioma oficial, con el ruso en la calle",
      note: "En Chisináu se oyen los dos casi por igual; el inglés, sobre todo entre los más jóvenes.",
    },
    {
      value: "Orheiul Vechi",
      label: "un monasterio excavado en la roca",
      note: "Sobre un meandro del río Răut, a una hora de Chisináu, con una iglesia en lo alto y una aldea de casas pintadas abajo.",
    },
    {
      value: "Fuera",
      label: "de Schengen y de la Unión Europea",
      note: "Tiene sus propias reglas de entrada, y los días que pases acá no se descuentan del cupo de 90 de Schengen.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Moldavia no es parte del espacio Schengen ni de la Unión Europea, y tiene sus propias reglas de entrada. Muchos pasaportes latinoamericanos no necesitan visa para estadías cortas, pero no todos, y las reglas cambian: verificá el tuyo antes de comprar el pasaje.",
        "Los días que pasás acá no se descuentan de los 90 de Schengen, pero cada salida y entrada a ese espacio queda registrada, con huellas y foto la primera vez. Algunos pasaportes que necesitan visa pueden entrar con una visa vigente de Schengen o de Estados Unidos: confirmalo con el consulado.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico, y el pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Moldavia",
      body: [
        "La moneda es el leu moldavo, distinto del leu rumano. La tarjeta funciona en Chisináu, en hoteles y en las bodegas grandes; en pueblos, mercados y minibuses, efectivo.",
        "Las casas de cambio son comunes y cambian euros y dólares sin problema. La propina no es obligatoria; redondear o dejar algo en restaurantes es lo habitual.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí lei: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Clima continental",
      body: [
        "Moldavia es hemisferio norte: enero es invierno y julio, verano. Los inviernos son fríos, bajo cero de diciembre a febrero y con algo de nieve; los veranos, calurosos y secos.",
        "El país es chico y llano, así que el clima cambia poco: el norte, con Soroca, es el rincón más frío, y el sur, con los viñedos de Purcari, el más templado.",
        "La primavera y el otoño son cortos y agradables, y el otoño es la época de la vendimia.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a junio y de septiembre a octubre: clima amable y las bodegas a pleno. El primer fin de semana de octubre se celebra el Día Nacional del Vino en Chisináu.",
        "Julio y agosto son calurosos pero tranquilos. El invierno es frío y gris; las bodegas subterráneas, en cambio, tienen la misma temperatura todo el año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Moldavia",
      body: [
        "Entre ciudades se viaja en minibús, desde las terminales de Chisináu; en la ciudad, trolebuses y buses. Las bodegas y los monasterios quedan cerca, pero conviene ir con excursión, auto o taxi: el transporte a los pueblos es escaso.",
        "Las visitas a las bodegas grandes se reservan antes y suelen incluir cata: si vas a tomar, que maneje otro.",
        "Transnistria, la franja al este del río Dniéster, se administra aparte y tiene sus propios controles y su propia moneda: si pensás ir, informate antes. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-09",

  scores: [
    {
      dimension: "Vino",
      score: 9.5,
      rationale:
        "Bodegas subterráneas enormes, catas en cada visita y una tradición que el país celebra con fiesta nacional.",
    },
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Monasterios ortodoxos, la fortaleza de Soroca y una capital con huella soviética.",
    },
    {
      dimension: "Naturaleza",
      score: 6.5,
      rationale:
        "Colinas suaves, el cañón del Răut y los acantilados del Dniéster; sin grandes paisajes de montaña.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Plăcintă, sarmale, mămăligă con queso y crema, y el vino en cada comida.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "De los países más baratos de Europa, con bodegas de nivel internacional.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Minibuses entre ciudades y poco transporte a los pueblos; para las bodegas conviene excursión o auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "El leu es estable; tarjeta en la capital y efectivo para lo demás.",
    },
  ],

  shines: [
    "Bodegas subterráneas únicas en el mundo.",
    "Precios muy bajos para Europa.",
    "Un país tranquilo, lejos de las multitudes.",
  ],

  costs: [
    "Poco transporte fuera de la capital.",
    "Inviernos fríos y grises.",
    "Poca oferta turística fuera del vino.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, aunque en un país tan chico las diferencias son pocas: el norte es apenas más frío y el sur, más templado. Los precios están en lei moldavos y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "chisinau",
      name: "Chisináu",
      region: "Centro",
      tag: "Capital de parques",
      blurb:
        "Avenidas anchas, parques, el mercado central y una mezcla de iglesias ortodoxas y edificios soviéticos. Es la base del planificador: inviernos fríos y veranos calurosos.",
      coords: [47.0105, 28.8638],
      featured: true,
      image: null,
    },
    {
      id: "orheiul-vechi",
      name: "Orheiul Vechi",
      region: "Centro",
      tag: "Monasterio en la roca",
      blurb:
        "Un monasterio excavado en un acantilado sobre un meandro del río Răut, con una aldea de casas pintadas al pie.",
      coords: [47.3044, 28.9706],
      image: null,
    },
    {
      id: "cricova",
      name: "Bodegas de Cricova",
      region: "Centro",
      tag: "Ciudad del vino bajo tierra",
      blurb:
        "Más de cien kilómetros de túneles con calles que llevan nombres de vinos, recorridos en vehículo y con cata al final. A minutos de Chisináu.",
      coords: [47.1381, 28.8611],
      image: null,
    },
    {
      id: "milestii-mici",
      name: "Bodegas de Mileștii Mici",
      region: "Centro",
      tag: "La colección gigante",
      blurb:
        "Galerías subterráneas con una de las colecciones de vino más grandes del mundo, al sur de la capital.",
      coords: [46.9136, 28.8378],
      image: null,
    },
    {
      id: "soroca",
      name: "Soroca",
      region: "Norte",
      tag: "Fortaleza sobre el Dniéster",
      blurb:
        "Una fortaleza medieval redonda a orillas del Dniéster, en la ciudad más al norte del planificador. El rincón más frío del país.",
      coords: [48.1586, 28.2967],
      image: null,
    },
    {
      id: "capriana",
      name: "Monasterio de Căpriana",
      region: "Centro",
      tag: "Entre bosques",
      blurb:
        "Uno de los monasterios más antiguos del país, en los bosques de Codri, a menos de una hora de Chisináu.",
      coords: [47.1203, 28.51],
      image: null,
    },
    {
      id: "saharna",
      name: "Saharna y Țipova",
      region: "Norte",
      tag: "Acantilados y cascadas",
      blurb:
        "Dos monasterios en los acantilados sobre el Dniéster, uno con cascadas y otro excavado en la roca, con senderos entre los dos.",
      coords: [47.6933, 28.9667],
      image: null,
    },
    {
      id: "purcari",
      name: "Purcari y los viñedos del sur",
      region: "Sur",
      tag: "Bodegas con historia",
      blurb:
        "Una de las bodegas más antiguas del país, entre viñedos cerca del Dniéster, con alojamiento y catas. El rincón más templado.",
      coords: [46.5236, 29.8653],
      image: null,
    },
    {
      id: "hincu",
      name: "Monasterio de Hîncu",
      region: "Centro",
      tag: "Monasterio y manantiales",
      blurb:
        "Un monasterio entre bosques y colinas, con manantiales y una iglesia de madera, al oeste de la capital.",
      coords: [47.0861, 28.3175],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Moldavia es continental: en invierno hace frío de verdad, con días bajo cero y algo de nieve, así que campera de abrigo, gorro y guantes. En verano, ropa liviana y protector: julio y agosto son calurosos y secos. Llevá un abrigo liviano aunque sea verano si vas a las bodegas subterráneas, y efectivo en lei para pueblos y minibuses.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso; el invierno, de diciembre a febrero, frío.",
      "Las bodegas subterráneas son frescas todo el año: un abrigo liviano viaja siempre.",
      "No es Schengen: los días acá no se descuentan del cupo de 90.",
      "Fuera de Chisináu manda el efectivo, en lei moldavos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, protector y agua. En julio y agosto el calor es seco; para las bodegas, una capa de abrigo.",
      templado:
        "Ropa liviana de día y un buzo para la noche. Es el clima de mayo, junio y septiembre, el mejor para recorrer.",
      fresco:
        "Capas, un buzo abrigado y una campera. Es el clima de la primavera temprana y del otoño de la vendimia.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. De diciembre a febrero hay días bajo cero.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Reservá las bodegas con anticipación",
          body: "Cricova y Mileștii Mici se visitan con turno, y la cata va incluida. Preguntá en qué idioma es la visita.",
        },
        {
          title: "Andá a Orheiul Vechi temprano",
          body: "El monasterio en la roca y la vista del meandro son lo mejor del país; temprano hay menos gente y mejor luz.",
        },
        {
          title: "Probá la plăcintă",
          body: "Masa rellena de queso, papa o repollo, en cualquier panadería. Y la mămăligă con queso y crema.",
        },
        {
          title: "Cambiá en una casa de cambio",
          body: "Son comunes en Chisináu y cambian euros y dólares sin vueltas.",
        },
        {
          title: "Visitá en la vendimia",
          body: "En septiembre y octubre las bodegas están a pleno, y el Día Nacional del Vino llena la capital de fiesta.",
        },
        {
          title: "Elegí pagar en lei",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No manejes después de la cata",
          body: "Las visitas a las bodegas terminan con varias copas. Excursión, taxi o alguien que no tome.",
        },
        {
          title: "No cuentes con transporte a los pueblos",
          body: "Los minibuses unen las ciudades, pero a muchos monasterios y bodegas no llega nada. Organizá la vuelta antes de ir.",
        },
        {
          title: "No confundas el leu moldavo con el rumano",
          body: "Son dos monedas distintas: los billetes de Rumania no sirven acá.",
        },
        {
          title: "No subestimes el invierno",
          body: "De diciembre a febrero hay días bajo cero y viento. Abrigo de verdad.",
        },
        {
          title: "No entres a una iglesia sin cubrirte",
          body: "Hombros y rodillas cubiertos, y en muchas, las mujeres con pañuelo en la cabeza.",
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
        title: "Frío, calor y bodegas",
        notice: {
          tone: "info",
          title: "Bajo tierra siempre es fresco",
          body: "Las bodegas subterráneas mantienen la misma temperatura fresca todo el año: aunque afuera haga calor, llevá una capa.",
        },
        summary: "Lo que pide el clima moldavo",
        items: [
          "Campera de abrigo, gorro y guantes, si vas en invierno",
          "Un buzo o abrigo liviano para las bodegas",
          "Ropa liviana y protector, si vas en verano",
          "Calzado cómodo que no deje pasar el agua",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Moldavia no es Schengen y tiene sus propias reglas. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos: verificalo antes de comprar el pasaje.",
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
        id: "plata",
        title: "Plata y pagos",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Lei moldavos en efectivo, en billetes chicos",
          "Tarjeta de débito para el cajero",
          "Una segunda tarjeta, por las dudas",
          "Algunos euros para cambiar si hace falta",
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
          "Protector solar, si vas en verano",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Chisináu, minibuses, mercados y pueblos funcionan con efectivo.",
        instead: "Lei moldavos en efectivo y una tarjeta.",
      },
      {
        leave: "Una campera liviana en enero",
        why: "El invierno continental tiene días bajo cero.",
        instead: "Campera de abrigo, gorro y guantes.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las bodegas subterráneas son frescas todo el año.",
        instead: "Un buzo o abrigo liviano en la mochila.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Iglesias y monasterios piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "La valija grande",
        why: "Minibuses chicos y caminos de tierra en los monasterios.",
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
        question: "¿Necesito visa para entrar a Moldavia?",
        answer:
          "Depende del pasaporte. Moldavia no es Schengen y tiene sus propias reglas; muchos países latinoamericanos están exentos para estadías cortas, pero no todos. Verificalo antes de viajar.",
      },
      {
        question: "¿Los días en Moldavia cuentan para los 90 de Schengen?",
        answer:
          "No. Moldavia no es parte del espacio Schengen, así que esos días no se descuentan.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El leu moldavo, que no es el mismo que el rumano. Tarjeta en la capital y efectivo para lo demás.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Moldavia usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a junio y de septiembre a octubre. En otoño, la vendimia y el Día Nacional del Vino.",
      },
      {
        question: "¿Cómo visito las bodegas?",
        answer:
          "Con turno reservado, en excursión o en taxi desde Chisináu: Cricova y Mileștii Mici quedan a minutos. La cata va incluida.",
      },
      {
        question: "¿Qué es Transnistria?",
        answer:
          "La franja al este del río Dniéster, que se administra aparte, con sus propios controles y su propia moneda. Si pensás ir, informate antes: ninguna ciudad del planificador está ahí.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
