import type { DestinationGuide } from "./types";

/**
 * Guía de Georgia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el seguro médico obligatorio por toda la estadía,
 * por ley desde 2024 y, como en Cuba, con chance de que lo pidan en la
 * frontera. Y el Gran Cáucaso como clima. Kazbegi,
 * Mestia y Gudauri pasan el invierno bajo cero a pocas horas de una Tiflis
 * templada, y Batumi, sobre el mar Negro, es subtropical y lluviosa. Abjasia y
 * Osetia del Sur se nombran como Transnistria en Moldavia: un dato de entrada,
 * no una alerta, y ninguna ciudad del planificador está ahí.
 */
export const georgia: DestinationGuide = {
  slug: "georgia",
  country: "Georgia",
  subregion: "Asia Occidental",
  subhead:
    "Iglesias de piedra en lo alto de las montañas del Cáucaso, una capital de balcones de madera y baños de azufre, vino hecho en vasijas de barro enterradas y una mesa que no se termina nunca. A un día de distancia, nieve y el mar Negro.",

  image: null,

  highlights: [
    {
      value: "Seguro médico",
      label: "obligatorio por toda la estadía",
      note: "Desde 2024 Georgia exige un seguro de salud que cubra todo el viaje, y lo pueden pedir en la frontera.",
    },
    {
      value: "8.000 años",
      label: "de vino, en vasijas de barro enterradas",
      note: "El qvevri es una tinaja que se entierra para fermentar el vino. El método es patrimonio cultural inmaterial de la humanidad.",
    },
    {
      value: "Kazbegi",
      label: "una iglesia a más de dos mil metros",
      note: "La iglesia de la Trinidad de Gergeti, frente al monte Kazbek, a unas tres horas de Tiflis por la Ruta Militar Georgiana.",
    },
    {
      value: "Supra",
      label: "el banquete con brindis",
      note: "Una mesa larga, platos que no paran de llegar y un tamada, el maestro de ceremonias, que guía los brindis.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Georgia",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa y pueden quedarse mucho tiempo, hasta un año en algunos casos; otros necesitan una visa electrónica que se tramita online. Verificá el tuyo antes de comprar el pasaje.",
        "Desde 2024 es obligatorio tener un seguro de salud que cubra toda la estadía, y en la frontera lo pueden pedir. Llevalo impreso o en el teléfono.",
        "Abjasia y Osetia del Sur no están bajo control del gobierno de Georgia y no se entra desde el resto del país; entrar desde Rusia es ilegal según la ley georgiana. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Georgia",
      body: [
        "La moneda es el lari. En Tiflis, Batumi y Kutaisi la tarjeta funciona casi en todos lados, y el pago sin contacto es habitual.",
        "En los pueblos de montaña, en los mercados y en las marshrutkas manda el efectivo. Hay cajeros en todas las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí laris: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del mar Negro a la nieve",
      body: [
        "Georgia es hemisferio norte. Tiflis y Kajetia tienen veranos calurosos y secos, con más de treinta grados en julio y agosto, e inviernos fríos pero cortos.",
        "Batumi y la costa del mar Negro son subtropicales: inviernos templados y lluvia todo el año, más en otoño. Es de lo más lluvioso del Cáucaso.",
        "El Gran Cáucaso es otra cosa. Kazbegi, Mestia y Gudauri están bajo cero de noche buena parte del año, y los pasos de montaña pueden cerrarse por nieve en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio, septiembre y octubre: templado en Tiflis, montañas abiertas y, en septiembre y octubre, la vendimia en Kajetia.",
        "Julio y agosto son la temporada de la montaña y del mar, y en Tiflis hace calor. De diciembre a marzo se esquía en Gudauri.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Georgia",
      body: [
        "Las marshrutkas, minibuses que salen cuando se llenan, conectan casi todo. Entre Tiflis, Kutaisi y Batumi también hay tren.",
        "A Kazbegi se va por la Ruta Militar Georgiana, una ruta de montaña que puede cortarse por nieve. A Mestia, por una ruta larga de montaña o en vuelos chicos que dependen del tiempo.",
        "Muchos viajeros contratan un auto con chofer por el día: es la forma más simple de sumar varias paradas en la montaña o en las bodegas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Iglesias y monasterios medievales, las torres de Svaneti y el casco viejo de Tiflis.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Khachapuri, khinkali, nueces y hierbas en todo, y una tradición de vino propia.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "El Gran Cáucaso, valles de viñedos y la costa del mar Negro en un país chico.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Batumi y la costa del mar Negro tienen playas de piedra y agua templada en verano.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer, dormir y moverse sale poco, y el vino es parte de casi cualquier comida.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Marshrutkas y trenes conectan lo principal; la montaña pide tiempo y rutas que se cortan en invierno.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El lari se mueve contra el dólar más que otras monedas de la región.",
    },
  ],

  shines: [
    "Montaña, vino y mar en distancias cortas.",
    "Una cocina generosa y propia.",
    "Barato, y fácil de entrar para muchos pasaportes.",
  ],

  costs: [
    "La montaña se cierra o se complica en invierno.",
    "Fuera de Tiflis se habla poco inglés.",
    "Las rutas de montaña son lentas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Tiflis que Batumi o Gudauri, a más de dos mil metros. Los precios están en laris y son órdenes de magnitud; en la estación de esquí, más altos.",

  places: [
    {
      id: "tiflis",
      name: "Tiflis",
      region: "Tiflis",
      tag: "Balcones y baños de azufre",
      blurb:
        "El casco viejo bajo la fortaleza de Narikala, los baños de azufre con cúpulas de ladrillo, balcones de madera y una vida nocturna activa. Es la base del planificador: veranos calurosos, inviernos fríos y cortos.",
      coords: [41.7151, 44.8271],
      featured: true,
      image: null,
    },
    {
      id: "batumi",
      name: "Batumi",
      region: "Ayaria",
      tag: "El mar Negro",
      blurb:
        "Un paseo costero largo, playas de piedra, edificios nuevos junto a un casco antiguo y un jardín botánico sobre el mar. Subtropical y lluviosa, sobre todo en otoño.",
      coords: [41.6168, 41.6367],
      image: null,
    },
    {
      id: "kazbegi",
      name: "Kazbegi (Stepantsminda)",
      region: "Mtsjeta-Mtianeti",
      tag: "La iglesia frente al Kazbek",
      blurb:
        "Un pueblo de montaña a casi mil ochocientos metros, con la iglesia de Gergeti en lo alto y caminatas hacia los glaciares. Bajo cero buena parte del invierno.",
      coords: [42.6573, 44.6426],
      image: null,
    },
    {
      id: "mestia",
      name: "Mestia (Svaneti)",
      region: "Samegrelo-Zemo Svaneti",
      tag: "Las torres de piedra",
      blurb:
        "Torres defensivas medievales en cada casa, en un valle rodeado de picos de más de cuatro mil metros. Base de trekkings como el que llega a Ushguli, cuyas torres son patrimonio de la humanidad.",
      coords: [43.0453, 42.7278],
      image: null,
    },
    {
      id: "kutaisi",
      name: "Kutaisi",
      region: "Imericia",
      tag: "Monasterios y cuevas",
      blurb:
        "El monasterio de Gelati, patrimonio de la humanidad, la catedral de Bagrati y la cueva de Prometeo a las afueras. Tiene aeropuerto con vuelos baratos desde Europa.",
      coords: [42.2679, 42.6946],
      image: null,
    },
    {
      id: "sighnaghi",
      name: "Sighnaghi (Kajetia)",
      region: "Kajetia",
      tag: "La región del vino",
      blurb:
        "Un pueblo amurallado sobre el valle del Alazani, con el Cáucaso de fondo, en el corazón de la zona de bodegas. En septiembre y octubre, la vendimia.",
      coords: [41.6186, 45.9217],
      image: null,
    },
    {
      id: "mtsjeta",
      name: "Mtsjeta",
      region: "Mtsjeta-Mtianeti",
      tag: "La antigua capital",
      blurb:
        "La catedral de Svetitskhoveli y el monasterio de Jvari, sobre la unión de dos ríos, a media hora de Tiflis. Patrimonio de la humanidad.",
      coords: [41.8456, 44.7186],
      image: null,
    },
    {
      id: "borjomi",
      name: "Borjomi",
      region: "Samtsje-Yavajeti",
      tag: "Aguas minerales y bosque",
      blurb:
        "El pueblo termal de la famosa agua mineral, con un parque de manantiales y la puerta al parque nacional de Borjomi-Kharagauli. A un par de horas, la ciudad cueva de Vardzia.",
      coords: [41.8388, 43.38],
      image: null,
    },
    {
      id: "gudauri",
      name: "Gudauri",
      region: "Mtsjeta-Mtianeti",
      tag: "Esquí en el Cáucaso",
      blurb:
        "Una estación de esquí a más de dos mil metros, sobre la Ruta Militar Georgiana. Nieve de diciembre a abril; en verano, parapente y caminatas.",
      coords: [42.4776, 44.4806],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Georgia depende de dónde y cuándo. Para Tiflis en verano, ropa liviana y protector; en invierno, campera y capas. Para la montaña, capas y una campera de abrigo todo el año, y ropa de nieve en invierno. Para Batumi, un paraguas siempre. Además: el seguro médico que exige la frontera, un pañuelo para las iglesias y efectivo para los pueblos.",
    keyPoints: [
      "Hemisferio norte: lo mejor es mayo, junio, septiembre y octubre.",
      "El seguro médico por toda la estadía es obligatorio desde 2024.",
      "La montaña está bajo cero buena parte del año, y los pasos pueden cerrarse.",
      "En las iglesias, hombros y rodillas cubiertos; las mujeres, con la cabeza cubierta.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, protector y agua para Tiflis y Kajetia en julio y agosto. En Batumi, además, traje de baño y un paraguas.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño de Tiflis, la mejor época.",
      fresco:
        "Capas, un polar y una campera para la montaña en verano y para las ciudades en otoño y primavera.",
      frio: "Campera de abrigo, gorro, guantes y calzado para nieve en Kazbegi, Mestia y Gudauri en invierno, y para Tiflis en enero.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá el seguro a mano",
          body: "Es obligatorio por toda la estadía y lo pueden pedir en la frontera. Mejor impreso y en el teléfono.",
        },
        {
          title: "Probá el vino de qvevri",
          body: "Es el vino fermentado en tinajas de barro enterradas, con un color y un sabor distintos. Las bodegas de Kajetia hacen degustaciones.",
        },
        {
          title: "Contratá un chofer para la montaña",
          body: "Un auto con chofer por el día permite parar en los miradores y monasterios de la Ruta Militar sin depender de la marshrutka.",
        },
        {
          title: "Dejá margen para Mestia",
          body: "La ruta es larga y los vuelos chicos dependen del tiempo. Nada de vuelos internacionales al día siguiente.",
        },
        {
          title: "Aprendé a decir gracias",
          body: "Madloba. Fuera de Tiflis se habla poco inglés, y un par de palabras abren puertas.",
        },
        {
          title: "Elegí pagar en laris",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una iglesia sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo en la cabeza. Muchas iglesias prestan uno en la entrada.",
        },
        {
          title: "No subestimes la montaña en invierno",
          body: "La Ruta Militar y el camino a Mestia pueden cortarse por nieve. Revisá el estado antes de salir.",
        },
        {
          title: "No rechaces de entrada un brindis",
          body: "En una supra los brindis tienen orden y sentido. Si no tomás alcohol, decilo con amabilidad: se entiende.",
        },
        {
          title: "No planees entrar a Abjasia ni a Osetia del Sur",
          body: "No están bajo control del gobierno georgiano y no forman parte de un viaje normal por el país.",
        },
        {
          title: "No te quedes solo con Tiflis",
          body: "A tres horas está la montaña, y a dos las bodegas de Kajetia. Georgia se entiende saliendo de la capital.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos y seguro",
        notice: {
          tone: "warn",
          title: "Seguro médico obligatorio",
          body: "Desde 2024 Georgia exige un seguro de salud que cubra toda la estadía, y lo pueden pedir en la frontera. Verificá también si tu pasaporte necesita visa.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Seguro de salud por toda la estadía",
          "Pasaje de salida y reservas",
          "Visa electrónica, si tu pasaporte la necesita",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña",
        notice: {
          tone: "info",
          title: "Capas, aun en verano",
          body: "En Kazbegi y Mestia las noches son frescas en julio, y en invierno están bajo cero.",
        },
        summary: "Lo que pide el Cáucaso",
        items: [
          "Calzado de trekking ya usado",
          "Polar y campera de abrigo",
          "Campera impermeable",
          "Gorro, guantes y anteojos de sol",
        ],
      },
      {
        id: "iglesias",
        title: "Iglesias y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para la cabeza",
          "Una pollera larga o un pareo: en muchas iglesias se lo piden a las mujeres",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago: la comida es abundante y pesada",
          "Protector solar para la montaña",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin seguro médico",
        why: "Es obligatorio por toda la estadía y lo pueden pedir en la frontera.",
        instead:
          "Un seguro de viaje que cubra salud desde el primer al último día.",
      },
      {
        leave: "Solo ropa de verano para la montaña",
        why: "Kazbegi y Mestia tienen noches frescas aun en julio.",
        instead: "Un polar y una campera en la valija.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En los pueblos, los mercados y las marshrutkas se paga en efectivo.",
        instead: "Laris en efectivo para lo chico.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "El casco viejo de Tiflis tiene subidas empinadas y piedra pulida.",
        instead: "Zapatillas cómodas con buen agarre.",
      },
      {
        leave: "Un itinerario sin margen en invierno",
        why: "La nieve corta rutas de montaña y demora vuelos chicos.",
        instead: "Un día libre antes de los vuelos importantes.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Georgia?",
        answer:
          "Muchos pasaportes latinoamericanos no la necesitan; otros tramitan una visa electrónica. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Es obligatorio el seguro médico?",
        answer:
          "Sí, desde 2024: tiene que cubrir toda la estadía, y lo pueden pedir en la frontera.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio, septiembre y octubre. Para la vendimia, septiembre y octubre; para esquiar, de diciembre a marzo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Georgia usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Muchos restaurantes suman un cargo por servicio a la cuenta. Si no lo suman, se deja alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Tiflis suele serlo. Si tenés el estómago sensible o estás en un pueblo, mejor embotellada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Georgiano, con su propio alfabeto. Mucha gente mayor habla ruso, y en Tiflis los jóvenes hablan inglés.",
      },
      {
        question: "¿Cómo llego a Kazbegi?",
        answer:
          "Por la Ruta Militar Georgiana, en marshrutka o con chofer, en unas tres horas desde Tiflis. En invierno puede cortarse por nieve.",
      },
    ],
  },
};
