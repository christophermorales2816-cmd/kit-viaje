import type { DestinationGuide } from "./types";

/**
 * Guía de Armenia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos fronteras cerradas, con Turquía y con
 * Azerbaiyán, que cambian cómo se llega —en avión, o por tierra desde Georgia
 * o Irán— y se dicen como dato de entrada. Y la altura: casi todo el país está
 * arriba de los mil metros, así que fuera de Ereván el invierno es largo:
 * Guiumri y el lago Seván pasan de noviembre a marzo bajo cero de noche.
 */
export const armenia: DestinationGuide = {
  slug: "armenia",
  country: "Armenia",
  subregion: "Asia Occidental",
  subhead:
    "Monasterios de piedra en lo alto de cañones y montañas, una capital de toba rosada con el Ararat de fondo, un lago a casi dos mil metros y una mesa de asado, lavash y damascos. Uno de los países cristianos más antiguos del mundo.",

  image: null,

  highlights: [
    {
      value: "Agua potable",
      label: "en las fuentes de las calles de Ereván",
      note: "Los pulpulaks son bebederos de piedra con agua de manantial, fría y potable. Con una botella reutilizable, en verano no hace falta comprar agua.",
    },
    {
      value: "301",
      label: "el año en que adoptó el cristianismo como religión oficial",
      note: "La tradición lo pone antes que cualquier otro Estado. Por eso los monasterios: hay en cada valle, muchos en lugares difíciles de creer.",
    },
    {
      value: "Ararat",
      label: "a la vista desde Ereván, del otro lado de la frontera",
      note: "La montaña símbolo del país está en Turquía. Se ve mejor a la mañana y desde el monasterio de Khor Virap.",
    },
    {
      value: "Lavash",
      label: "el pan que se hornea en las paredes del tonir",
      note: "Fino y flexible, patrimonio cultural inmaterial de la humanidad. Acompaña al khorovats, el asado armenio.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Armenia",
      body: [
        "Varios pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica antes de viajar o la sacan al llegar. Verificá el tuyo antes de comprar el pasaje.",
        "Las fronteras con Turquía y con Azerbaiyán están cerradas: se llega en avión a Ereván o por tierra desde Georgia o Irán. Fijate si eso cambió cuando viajes.",
        "Algunas rutas del sur y del este pasan cerca de la frontera con Azerbaiyán. Ninguna de las ciudades del planificador está ahí; si vas más lejos, informate antes.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Armenia",
      body: [
        "La moneda es el dram. En Ereván la tarjeta funciona en casi todos lados, y el pago sin contacto es habitual.",
        "Fuera de la capital, en los mercados, en las marshrutkas y en los pueblos, manda el efectivo. Hay cajeros en todas las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí drams: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un país en altura",
      body: [
        "Armenia es hemisferio norte y casi todo el país está arriba de los mil metros. Ereván y la llanura del Ararat tienen veranos muy calurosos y secos, con más de treinta grados de junio a agosto.",
        "Los inviernos son fríos en todo el país, con nieve algunos días en Ereván y por semanas en la montaña.",
        "Más arriba el invierno es largo: Guiumri y el lago Seván, a casi dos mil metros, están bajo cero de noche de noviembre a marzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio, septiembre y octubre: templado en Ereván y la montaña abierta. En junio y julio, damascos en todos los mercados.",
        "Julio y agosto son calurosos en Ereván y agradables en Dilijan y el lago Seván. De diciembre a marzo se esquía en Tsaghkadzor.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Armenia",
      body: [
        "Ereván es la base: Garni, Geghard, Echmiadzin, Khor Virap y el lago Seván se hacen en el día.",
        "Las marshrutkas, minibuses que salen cuando se llenan, conectan las ciudades. Hay tren a Guiumri y a Tiflis.",
        "Los taxis por app son baratos en Ereván, y muchos viajeros contratan un auto con chofer para sumar varios monasterios en un día.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Monasterios medievales en cada valle, el templo de Garni y la catedral de Echmiadzin.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Khorovats, lavash, dolma, frutas secas y damascos, con vino y brandy propios.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Montañas, cañones y el lago Seván, con el Ararat en el horizonte.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "No tiene mar; el lago Seván tiene playas de verano con agua fría.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale poco, y los taxis son baratos.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Casi todo se hace en el día desde Ereván; se llega solo en avión o desde Georgia o Irán.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El dram es una moneda chica y se mueve con la región, pero los precios locales son estables.",
    },
  ],

  shines: [
    "Monasterios en paisajes de montaña.",
    "Ereván, una capital fácil y animada.",
    "Barato y hospitalario.",
  ],

  costs: [
    "Inviernos largos y fríos fuera de Ereván.",
    "Dos fronteras cerradas: se llega en avión o desde Georgia o Irán.",
    "Poco transporte fuera de las rutas principales.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Ereván que Guiumri o el lago Seván, a casi dos mil metros. Los precios están en drams y son órdenes de magnitud.",

  places: [
    {
      id: "erevan",
      name: "Ereván",
      region: "Ereván",
      tag: "La ciudad rosa",
      blurb:
        "Edificios de toba rosada, la Cascada con vista al Ararat, los manuscritos del Matenadaran y cafés en cada vereda. Es la base del planificador: veranos muy calurosos y secos, inviernos fríos.",
      coords: [40.1792, 44.4991],
      featured: true,
      image: null,
    },
    {
      id: "echmiadzin",
      name: "Echmiadzin",
      region: "Armavir",
      tag: "La sede de la Iglesia armenia",
      blurb:
        "La catedral madre de la Iglesia apostólica armenia, de las más antiguas del mundo, y las iglesias de Hripsime y Gayane. Patrimonio de la humanidad, a media hora de Ereván.",
      coords: [40.1622, 44.2911],
      image: null,
    },
    {
      id: "garni-geghard",
      name: "Garni y Geghard",
      region: "Kotayk",
      tag: "Un templo y un monasterio en la roca",
      blurb:
        "Un templo grecorromano del siglo I sobre un cañón de columnas de basalto, y un monasterio tallado en parte dentro de la montaña, patrimonio de la humanidad. A menos de una hora de Ereván.",
      coords: [40.1194, 44.7303],
      image: null,
    },
    {
      id: "sevan",
      name: "Lago Seván",
      region: "Gegharkunik",
      tag: "El lago de montaña",
      blurb:
        "Un lago enorme a casi dos mil metros, con el monasterio de Sevanavank en una península. Playas frescas en verano; inviernos largos y fríos.",
      coords: [40.5636, 45.0068],
      image: null,
    },
    {
      id: "dilijan",
      name: "Dilijan",
      region: "Tavush",
      tag: "Bosques y casas de madera",
      blurb:
        "Un pueblo entre bosques, con casas antiguas restauradas, los monasterios de Haghartsin y Goshavank y caminatas por el parque nacional.",
      coords: [40.7406, 44.8631],
      image: null,
    },
    {
      id: "tsaghkadzor",
      name: "Tsaghkadzor",
      region: "Kotayk",
      tag: "Esquí cerca de Ereván",
      blurb:
        "Una estación de esquí a menos de una hora de Ereván, con telesillas sobre el monte Teghenis. Nieve en invierno; en verano, caminatas y aire fresco.",
      coords: [40.5328, 44.72],
      image: null,
    },
    {
      id: "guiumri",
      name: "Guiumri",
      region: "Shirak",
      tag: "La ciudad de piedra negra",
      blurb:
        "La segunda ciudad del país, con un centro de casas de toba negra y roja del siglo XIX, talleres de artesanos y museos. De lo más frío de Armenia en invierno.",
      coords: [40.7894, 43.8475],
      image: null,
    },
    {
      id: "khor-virap",
      name: "Khor Virap",
      region: "Ararat",
      tag: "El Ararat de frente",
      blurb:
        "Un monasterio sobre una colina en la llanura, con el Ararat enorme del otro lado de la frontera. Calor seco en verano; mejor a la mañana, con el aire limpio.",
      coords: [39.8783, 44.5761],
      image: null,
    },
    {
      id: "haghpat",
      name: "Haghpat y Sanahin (Debed)",
      region: "Lori",
      tag: "Monasterios del cañón",
      blurb:
        "Dos monasterios medievales sobre el cañón del río Debed, patrimonio de la humanidad, en el camino entre Ereván y Tiflis.",
      coords: [41.0939, 44.7117],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Armenia depende de la altura y la estación. Para Ereván en verano, ropa liviana, sombrero y protector: el calor es seco y fuerte. En invierno, campera, gorro y guantes, y ropa de nieve para la montaña. Siempre, algo que cubra hombros y rodillas para los monasterios, calzado cómodo para la piedra y una botella para recargar en las fuentes.",
    keyPoints: [
      "Hemisferio norte: lo mejor es mayo, junio, septiembre y octubre.",
      "Casi todo está arriba de los mil metros: fuera de Ereván, el invierno es largo.",
      "Se llega en avión o por tierra desde Georgia o Irán.",
      "En Ereván, el agua de las fuentes de la calle es potable.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y una botella para recargar en las fuentes: el verano de Ereván es seco y fuerte.",
      templado:
        "Ropa liviana de día y un buzo para la noche, que en la montaña refresca rápido.",
      fresco:
        "Capas, un polar y una campera para el lago Seván, Dilijan y las noches de primavera y otoño.",
      frio: "Campera de abrigo, gorro, guantes y calzado para nieve en Guiumri, el lago Seván y Tsaghkadzor en invierno, y para Ereván en enero.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá una botella reutilizable",
          body: "En Ereván los pulpulaks, las fuentes de piedra de la calle, dan agua de manantial potable.",
        },
        {
          title: "Salí de Ereván en el día",
          body: "Garni, Geghard, Echmiadzin, Khor Virap y el lago Seván se hacen en excursiones de un día.",
        },
        {
          title: "Buscá el Ararat temprano",
          body: "A la mañana el aire es más limpio; a la tarde la montaña suele taparse con bruma o nubes.",
        },
        {
          title: "Probá el khorovats con lavash",
          body: "El asado armenio, con el pan fino que se hornea en las paredes del tonir, y damascos de postre en verano.",
        },
        {
          title: "Pedí los taxis por app",
          body: "En Ereván funcionan Yandex Go y GG, con el precio fijado antes de subir.",
        },
        {
          title: "Elegí pagar en drams",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una iglesia sin cubrirte",
          body: "Hombros y rodillas cubiertos. Muchas mujeres se cubren la cabeza, y en algunas iglesias se lo piden.",
        },
        {
          title: "No tomes a la ligera la historia",
          body: "El genocidio de 1915 y el conflicto con Azerbaiyán son temas dolorosos para muchos armenios. Escuchá más de lo que opinás.",
        },
        {
          title: "No planees cruzar a Turquía por tierra",
          body: "La frontera está cerrada: hay que volar o dar la vuelta por Georgia.",
        },
        {
          title: "No subestimes el invierno fuera de Ereván",
          body: "Guiumri, el lago Seván y la montaña tienen nieve y heladas de diciembre a marzo.",
        },
        {
          title: "No esperes tren para todo",
          body: "Fuera de un par de líneas, se viaja en marshrutka, en taxi o con chofer.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y ruta de entrada",
          body: "Varios pasaportes entran sin visa y otros la tramitan antes. Las fronteras con Turquía y Azerbaiyán están cerradas: se llega en avión o desde Georgia o Irán.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "Pasaje de salida y reservas",
          "Seguro de viaje",
        ],
      },
      {
        id: "verano",
        title: "Para el verano de Ereván",
        notice: {
          tone: "info",
          title: "Calor seco",
          body: "En julio y agosto se pasan los treinta grados con mucho sol. Agua, sombrero y la siesta a media tarde.",
        },
        summary: "Lo que pide el calor",
        items: [
          "Sombrero o gorra",
          "Protector solar",
          "Una botella reutilizable",
          "Ropa liviana de colores claros",
        ],
      },
      {
        id: "iglesias",
        title: "Monasterios y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para la cabeza",
          "Calzado cómodo para escaleras de piedra",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación para el calor",
          "Protector solar y labial para la altura",
        ],
      },
    ],
    avoid: [
      {
        leave: "Agua embotellada para todo el viaje",
        why: "En Ereván hay fuentes de agua potable en casi cada esquina.",
        instead: "Una botella reutilizable.",
      },
      {
        leave: "Solo ropa de verano en primavera u otoño",
        why: "En la montaña y a la noche refresca rápido.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Ereván, en los mercados y en las marshrutkas se paga en efectivo.",
        instead: "Drams en efectivo para lo chico.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Los monasterios tienen escaleras de piedra y caminos de tierra.",
        instead: "Zapatillas cómodas con buen agarre.",
      },
      {
        leave: "Una ruta por tierra desde Turquía",
        why: "La frontera está cerrada.",
        instead: "Volar a Ereván o entrar desde Georgia.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Armenia?",
        answer:
          "Varios pasaportes latinoamericanos no la necesitan; otros tramitan una visa electrónica o la sacan al llegar. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Cómo se llega?",
        answer:
          "En avión a Ereván, o por tierra desde Georgia, en marshrutka, taxi o tren. Las fronteras con Turquía y Azerbaiyán están cerradas.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio, septiembre y octubre. Para esquiar, de diciembre a marzo en Tsaghkadzor.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Armenia usa los tipos C y F a 230 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "En muchos restaurantes la cuenta ya suma un cargo por servicio. Si no, se deja alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Ereván sí: viene de manantiales, y las fuentes de la calle también son potables. Fuera de la capital, preguntá.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Armenio, con su propio alfabeto. Mucha gente habla ruso, y en Ereván los jóvenes hablan inglés.",
      },
      {
        question: "¿Se ve el Ararat?",
        answer:
          "Desde Ereván y Khor Virap, en días despejados y mejor a la mañana. La montaña está del otro lado de la frontera, en Turquía.",
      },
    ],
  },
};
