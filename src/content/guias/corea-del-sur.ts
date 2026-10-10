import type { DestinationGuide } from "./types";

/**
 * Guía de Corea del Sur.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la autorización electrónica previa (K-ETA) es de
 * las reglas de entrada que más cambian —se suspendió para algunos pasaportes
 * por temporadas—, así que se dice el mecanismo y se manda a verificar. Los
 * mapas de Google funcionan a medias: la guía nombra las aplicaciones locales.
 */
export const coreaDelSur: DestinationGuide = {
  slug: "corea-del-sur",
  country: "Corea del Sur",
  subregion: "Asia Oriental",
  subhead:
    "Palacios reales en medio de Seúl, templos en la montaña, mercados de comida que no cierran, la isla volcánica de Jeju y un tren rápido que cruza el país en pocas horas.",

  image: null,

  highlights: [
    {
      value: "−5 °C",
      label: "de mínima en Seúl en enero",
      note: "Es el promedio: hay semanas más frías, con viento seco. El verano, en cambio, es caluroso y lluvioso.",
    },
    {
      value: "KTX",
      label: "de Seúl a Busan en menos de tres horas",
      note: "El tren rápido une las ciudades grandes; los buses expresos llegan al resto.",
    },
    {
      value: "Jeju",
      label: "una isla volcánica",
      note: "El cráter de Seongsan Ilchulbong, tubos de lava, playas y el monte Hallasan, la cima más alta del país.",
    },
    {
      value: "K-ETA",
      label: "una autorización previa para muchos pasaportes",
      note: "Se tramita online antes de viajar, salvo para los pasaportes que la tienen suspendida. Fijate qué rige para el tuyo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Corea del Sur",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan visa del consulado. Verificá el tuyo antes de comprar el pasaje.",
        "Los pasaportes exentos de visa necesitan, en general, una autorización electrónica previa (K-ETA) que se tramita online, en el sitio oficial. Corea la suspendió por temporadas para algunos países: fijate si para el tuyo está vigente cuando viajes.",
        "Al llegar te toman huellas y foto. El pasaporte tiene que tener vigencia de sobra y pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Corea",
      body: [
        "La moneda es el won. La tarjeta funciona en casi todos lados, incluso en taxis, mercados y puestos chicos; algo de efectivo sirve para los puestos callejeros.",
        "La tarjeta de transporte recargable (T-money) se compra en los minimercados, sirve para metro, colectivos y taxis en todo el país y también para pagar en esos minimercados.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí wones: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Inviernos secos y veranos de lluvia",
      body: [
        "Corea es hemisferio norte: enero es invierno y julio, verano. Seúl tiene inviernos fríos y secos, con semanas enteras bajo cero.",
        "La temporada de lluvias (jangma) empieza a fines de junio, y julio y agosto concentran la lluvia del año, con calor húmedo.",
        "Jeju y la costa sur, con Busan y Yeosu, son más templadas. Las montañas del este, con Seoraksan, se ponen rojas y amarillas en octubre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril y mayo, con los cerezos, y de septiembre a principios de noviembre, con el follaje de otoño: días templados y secos.",
        "Chuseok, el feriado largo de la cosecha (en septiembre u octubre, según el año), y el Año Nuevo lunar mueven a todo el país: trenes llenos y algunos negocios cerrados.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Corea",
      body: [
        "Entre ciudades, el tren rápido KTX y los buses expresos, cómodos y frecuentes. A Jeju se llega en avión, con vuelos muy seguidos desde Seúl y Busan.",
        "En Seúl y Busan, metro con la tarjeta T-money. Google Maps funciona a medias para ir caminando o en auto: Naver Map y KakaoMap, con menú en inglés, son los que usa todo el mundo.",
        "Las precauciones son las de cualquier gran ciudad: el celular y la mochila a mano en el metro lleno.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Los palacios de la dinastía Joseon, los templos budistas y Gyeongju, la capital del antiguo reino de Silla.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Barbacoa coreana, kimchi, bibimbap, sopas y mercados de comida abiertos hasta tarde.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Montañas con templos, la isla volcánica de Jeju y el follaje de otoño.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Busan y Jeju tienen playas lindas para el verano; no son el motivo del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Comer y moverse sale bien; el alojamiento en Seúl es lo que más pesa.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Transporte excelente y tarjeta en todos lados; los mapas locales hay que bajarlos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Precios estables y casi sin regateo.",
    },
  ],

  shines: [
    "Transporte rápido, limpio y fácil.",
    "Comida que se disfruta a toda hora.",
    "Ciudades modernas con historia en cada barrio.",
  ],

  costs: [
    "Inviernos muy fríos y veranos húmedos con lluvia.",
    "Fuera de Seúl y Busan, poca gente habla inglés.",
    "Hay que usar mapas locales en vez de los de siempre.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Seúl en enero que Jeju. Los precios están en wones y son órdenes de magnitud.",

  places: [
    {
      id: "seul",
      name: "Seúl",
      region: "Seúl",
      tag: "Palacios y barrios",
      blurb:
        "Gyeongbokgung, el barrio de casas tradicionales de Bukchon, los mercados de Gwangjang y Myeongdong, y la noche de Hongdae. Es la base del planificador: inviernos fríos y secos, veranos calurosos y lluviosos.",
      coords: [37.5665, 126.978],
      featured: true,
      image: null,
    },
    {
      id: "busan",
      name: "Busan",
      region: "Gyeongsang del Sur",
      tag: "Puerto, playas y mercados",
      blurb:
        "La playa de Haeundae, el pueblo de colores de Gamcheon, el templo Haedong Yonggungsa sobre el mar y el mercado de pescado de Jagalchi.",
      coords: [35.1796, 129.0756],
      image: null,
    },
    {
      id: "gyeongju",
      name: "Gyeongju",
      region: "Gyeongsang del Norte",
      tag: "La capital de Silla",
      blurb:
        "Un museo al aire libre: tumbas reales con forma de colina, el templo Bulguksa y la gruta de Seokguram, patrimonio de la humanidad.",
      coords: [35.8562, 129.2247],
      image: null,
    },
    {
      id: "jeju",
      name: "Isla de Jeju",
      region: "Jeju",
      tag: "Volcanes y playas",
      blurb:
        "El cráter de Seongsan Ilchulbong, las cuevas de lava, cascadas, playas y el monte Hallasan. Más templada que el continente y lluviosa en invierno.",
      coords: [33.4996, 126.5312],
      image: null,
    },
    {
      id: "jeonju",
      name: "Jeonju",
      region: "Jeolla del Norte",
      tag: "El pueblo de hanok",
      blurb:
        "Más de setecientas casas tradicionales en el centro y la cuna del bibimbap. Se recorre caminando.",
      coords: [35.8242, 127.148],
      image: null,
    },
    {
      id: "sokcho",
      name: "Sokcho y Seoraksan",
      region: "Gangwon",
      tag: "Montaña y mar",
      blurb:
        "El parque nacional de Seoraksan, con picos de granito y templos, y el puerto de Sokcho al lado. En octubre, el mejor follaje del país.",
      coords: [38.207, 128.5918],
      image: null,
    },
    {
      id: "andong",
      name: "Andong y Hahoe",
      region: "Gyeongsang del Norte",
      tag: "Aldea tradicional",
      blurb:
        "La aldea de Hahoe, con casas de techo de paja que siguen habitadas, y las máscaras de su danza. Inviernos fríos.",
      coords: [36.5684, 128.7294],
      image: null,
    },
    {
      id: "suwon",
      name: "Suwon",
      region: "Gyeonggi",
      tag: "La fortaleza",
      blurb:
        "La fortaleza de Hwaseong, con murallas que se recorren a pie. Se llega en el día desde Seúl.",
      coords: [37.2636, 127.0286],
      image: null,
    },
    {
      id: "yeosu",
      name: "Yeosu",
      region: "Jeolla del Sur",
      tag: "Costa e islas",
      blurb:
        "Una ciudad de puerto en la costa sur, con islas, teleférico sobre el mar y mariscos. Más templada que el resto del país.",
      coords: [34.7604, 127.6622],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Corea tiene inviernos muy fríos y veranos húmedos. En invierno, campera de abrigo de verdad, gorro y guantes; en verano, ropa liviana que se seque rápido y un paraguas para la temporada de lluvias. Siempre, calzado cómodo para caminar y subir escaleras, y los mapas locales bajados en el celular.",
    keyPoints: [
      "Hemisferio norte: invierno seco y bajo cero de diciembre a febrero, lluvias de fines de junio a agosto.",
      "Muchos pasaportes necesitan la autorización electrónica previa (K-ETA): fijate qué rige para el tuyo.",
      "La tarjeta se acepta en casi todo, incluso en taxis.",
      "Google Maps funciona a medias: Naver Map o KakaoMap.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, un paraguas plegable, protector y agua. Julio y agosto son calurosos, húmedos y lluviosos.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época del año.",
      fresco:
        "Capas, un buzo abrigado y una campera. Marzo y noviembre tienen días agradables y noches frías.",
      frio: "Campera de abrigo de verdad, gorro, guantes, bufanda y calzado que abrigue. El viento seco de Seúl hace sentir más frío que lo que dice el termómetro.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 60 Hz",
      note: "Son los enchufes de dos patas redondas, como en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Bajá Naver Map o KakaoMap",
          body: "Tienen menú en inglés, horarios del metro y rutas a pie que Google no da completas en Corea.",
        },
        {
          title: "Comprá la T-money el primer día",
          body: "En cualquier minimercado. Sirve para metro, colectivos y taxis en todo el país.",
        },
        {
          title: "Alquilá un hanbok para los palacios",
          body: "Con el traje tradicional, la entrada a los palacios de Seúl es gratis, y las fotos, otras.",
        },
        {
          title: "Comé en los mercados",
          body: "Gwangjang en Seúl o Jagalchi en Busan: puestos de comida caliente y barata, sentado en un banco.",
        },
        {
          title: "Reservá el KTX con anticipación en feriados",
          body: "En Chuseok y el Año Nuevo lunar los trenes se agotan.",
        },
        {
          title: "Elegí pagar en wones",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No dejes propina",
          body: "No se usa en restaurantes ni en taxis.",
        },
        {
          title: "No te sientes en los asientos reservados del metro",
          body: "Los de los extremos son para personas mayores, embarazadas o con discapacidad, aunque estén vacíos.",
        },
        {
          title: "No entres con zapatos donde te los sacan",
          body: "En casas tradicionales, algunos restaurantes de piso y templos: si hay zapatos en la entrada, es la señal.",
        },
        {
          title: "No hables fuerte en el transporte",
          body: "Se viaja en silencio y con el celular en vibrador.",
        },
        {
          title: "No cuentes con Google Maps",
          body: "Para ir caminando o en auto da rutas incompletas. Usá las aplicaciones locales.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "estaciones",
        title: "Según la estación",
        notice: {
          tone: "info",
          title: "Dos extremos",
          body: "El invierno es seco y bajo cero, el verano es húmedo y lluvioso. Primavera y otoño son templados.",
        },
        summary: "Lo que cambia con la época",
        items: [
          "Campera de abrigo, gorro y guantes para el invierno",
          "Ropa liviana de secado rápido para el verano",
          "Un paraguas plegable",
          "Calzado cómodo para caminar mucho",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá la K-ETA y la visa",
          body: "Muchos pasaportes entran sin visa pero necesitan la autorización electrónica previa; para algunos está suspendida por temporadas. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "K-ETA aprobada o visa, según tu pasaporte",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "celular",
        title: "Celular y aplicaciones",
        notice: null,
        summary: "Lo que conviene tener antes de llegar",
        items: [
          "Naver Map o KakaoMap",
          "Un traductor con cámara",
          "Una eSIM o un chip con datos",
          "Batería portátil",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago, que la comida pica",
          "Crema para la piel seca del invierno",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una campera liviana en invierno",
        why: "Seúl pasa semanas bajo cero, con viento seco.",
        instead: "Una campera de abrigo de verdad.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en casi todo, hasta en taxis.",
        instead: "Una tarjeta y un poco de efectivo para puestos.",
      },
      {
        leave: "Depender de Google Maps",
        why: "En Corea da rutas incompletas.",
        instead: "Naver Map o KakaoMap.",
      },
      {
        leave: "Una valija enorme",
        why: "En el metro y en los trenes hay escaleras y poco lugar.",
        instead: "Una valija mediana o mochila.",
      },
      {
        leave: "Ropa de algodón grueso en verano",
        why: "Con la humedad no se seca.",
        instead: "Ropa liviana de secado rápido.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Corea del Sur?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa, pero necesitan la autorización electrónica previa (K-ETA), salvo que esté suspendida para su país. Verificalo antes de viajar.",
      },
      {
        question: "¿Qué es la K-ETA?",
        answer:
          "Una autorización de viaje que se tramita online antes de salir, en el sitio oficial, para los pasaportes que entran sin visa. Usá solo ese sitio.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Corea usa los tipos C y F, de dos patas redondas, a 220 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Abril y mayo, y de septiembre a principios de noviembre: días templados y secos.",
      },
      {
        question: "¿Funciona Google Maps?",
        answer:
          "A medias: para ir caminando o en auto, mejor Naver Map o KakaoMap, que tienen menú en inglés.",
      },
      {
        question: "¿Se puede pagar todo con tarjeta?",
        answer:
          "Casi todo, incluso taxis y mercados. Algo de efectivo para puestos callejeros.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No. No se usa en restaurantes ni en taxis.",
      },
      {
        question: "¿Cómo llego a Jeju?",
        answer:
          "En avión: hay vuelos muy seguidos desde Seúl y Busan. También hay ferris desde la costa sur.",
      },
    ],
  },
};
