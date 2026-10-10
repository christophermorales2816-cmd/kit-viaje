import type { DestinationGuide } from "./types";

/**
 * Guía de Omán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer rial omaní en uso, con centavos, y el
 * primer país que se recorre en auto de alquiler —el ítem de transporte diario
 * se llama así—. Salalah tiene el monzón (khareef) en verano, cuando el resto
 * del Golfo está más caluroso: es la única ciudad de la región con lluvia en
 * julio. Musandam queda separado del resto del país por los Emiratos.
 */
export const oman: DestinationGuide = {
  slug: "oman",
  country: "Omán",
  subregion: "Asia Occidental",
  subhead:
    "Fuertes de adobe, montañas con terrazas de rosas, piletas turquesa entre cañones, dunas de arena roja, tortugas en la playa y fiordos con delfines en Musandam. El Golfo más tranquilo y natural, para recorrer en auto.",

  image: null,

  highlights: [
    {
      value: "4x4",
      label: "para subir a Jebel Akhdar y entrar al desierto",
      note: "Omán se recorre en auto: rutas excelentes y casi sin transporte público. En la subida a la montaña hay un control que solo deja pasar camionetas 4x4.",
    },
    {
      value: "Khareef",
      label: "el monzón de Salalah, de junio a septiembre",
      note: "Llovizna, niebla y colinas verdes en el sur, justo cuando el resto del Golfo está más caluroso.",
    },
    {
      value: "Wadis",
      label: "piletas turquesa entre cañones",
      note: "Wadi Shab y Wadi Bani Khalid: se camina y se nada entre paredes de roca. Llevá calzado que se pueda mojar.",
    },
    {
      value: "Tortugas",
      label: "que desovan en Ras al Jinz",
      note: "Las tortugas verdes llegan de noche a la playa casi todo el año; la reserva organiza visitas guiadas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Omán",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan visa electrónica, que se tramita online en el sitio oficial. Verificá el tuyo antes de comprar el pasaje.",
        "En la frontera pueden pedirte el pasaje de salida, las reservas y un seguro médico. El pasaporte tiene que tener vigencia de sobra.",
        "Musandam queda separado del resto del país por los Emiratos: se llega en avión desde Mascate, en ferry o cruzando la frontera por ruta, con los controles de los dos países.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Omán",
      body: [
        "La moneda es el rial omaní, atado al dólar y de más valor que él: los precios chicos se dicen en baisas, y mil baisas son un rial. La tarjeta funciona en hoteles, restaurantes y estaciones de servicio; en zocos y pueblos, efectivo.",
        "Hay cajeros en todas las ciudades. En las rutas largas, conviene llevar efectivo para la nafta y la comida en los pueblos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí riales: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Desierto, montaña y monzón",
      body: [
        "De octubre a marzo, días templados y noches frescas en el norte: es la temporada para la costa, los wadis y el desierto. De mayo a septiembre, calor extremo en Mascate y el interior.",
        "Jebel Akhdar, a dos mil metros, es fresco todo el año y frío en invierno, con alguna helada. Las noches del desierto de Wahiba también son frías en enero.",
        "Salalah, en el sur, es la excepción: de junio a septiembre el monzón (khareef) trae llovizna, niebla y colinas verdes, y la ciudad se llena de visitantes del Golfo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a marzo para el norte: Mascate, Nizwa, los wadis y el desierto. Salalah tiene su temporada en el khareef, de junio a septiembre.",
        "El Ramadán cambia horarios y algunos restaurantes cierran de día; la fecha se corre cada año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Omán",
      body: [
        "En auto de alquiler: las rutas son excelentes y casi no hay transporte público fuera de Mascate. Para Jebel Akhdar y el desierto hace falta una 4x4; para las dunas, un chofer que sepa manejar en la arena.",
        "Entre ciudades hay colectivos interurbanos, cómodos pero con pocas frecuencias. A Salalah y Musandam, vuelos internos.",
        "En las rutas, atención a los camellos que cruzan y a las lluvias repentinas en los wadis: el agua baja rápido por los cauces secos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Los fuertes de Nizwa, Bahla y Jabreen, las aldeas de adobe y los canales de riego antiguos.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Shuwa, arroz con especias, dátiles, halwa y café con cardamomo.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Cañones, montañas de dos mil metros, dunas rojas, fiordos y el verde del khareef.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Costa larga y vacía, con tortugas y delfines; poca infraestructura fuera de Mascate.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Comer es razonable; alquilar una 4x4 y dormir en el desierto, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale: "Rutas excelentes, pero sin auto casi no se llega a nada.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale: "El rial está atado al dólar y los precios son estables.",
    },
  ],

  shines: [
    "Paisajes enormes y casi sin gente.",
    "Un Golfo tradicional, tranquilo y hospitalario.",
    "Rutas perfectas para un viaje en auto.",
  ],

  costs: [
    "Calor extremo de mayo a septiembre en el norte.",
    "Sin auto casi no se puede viajar.",
    "Distancias largas entre regiones.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Mascate en julio que Jebel Akhdar o Salalah en pleno khareef. Los precios están en riales omaníes, con centavos, y son órdenes de magnitud.",

  places: [
    {
      id: "mascate",
      name: "Mascate",
      region: "Mascate",
      tag: "La capital blanca",
      blurb:
        "La Gran Mezquita del Sultán Qaboos, el zoco de Mutrah sobre el puerto, la Ópera y fuertes portugueses sobre la bahía. Es la base del planificador: inviernos templados y veranos de calor extremo.",
      coords: [23.588, 58.3829],
      featured: true,
      image: null,
    },
    {
      id: "nizwa",
      name: "Nizwa",
      region: "Ad Dakhiliyah",
      tag: "El fuerte y el mercado",
      blurb:
        "El fuerte redondo, el mercado de cabras del viernes y la puerta a los fuertes de Bahla y Jabreen.",
      coords: [22.9333, 57.5333],
      image: null,
    },
    {
      id: "jebel-akhdar",
      name: "Jebel Akhdar",
      region: "Ad Dakhiliyah",
      tag: "La montaña verde",
      blurb:
        "Terrazas de rosas y granados a dos mil metros, aldeas colgadas del cañón y senderos. Solo se sube en 4x4. Fresca todo el año y fría en invierno.",
      coords: [23.07, 57.66],
      image: null,
    },
    {
      id: "sur",
      name: "Sur y Ras al Jinz",
      region: "Ash Sharqiyah",
      tag: "Dhows y tortugas",
      blurb:
        "Un puerto de astilleros de dhows de madera y, cerca, la reserva de tortugas de Ras al Jinz, con visitas de noche.",
      coords: [22.5667, 59.5289],
      image: null,
    },
    {
      id: "wadi-shab",
      name: "Wadi Shab y Tiwi",
      region: "Ash Sharqiyah",
      tag: "El wadi turquesa",
      blurb:
        "Una caminata entre paredes de roca hasta piletas turquesa y una cueva con cascada a la que se llega nadando.",
      coords: [22.838, 59.24],
      image: null,
    },
    {
      id: "wahiba",
      name: "Desierto de Wahiba",
      region: "Ash Sharqiyah",
      tag: "Dunas rojas",
      blurb:
        "Dunas de arena roja y naranja con campamentos para dormir en el desierto. Días calurosos y noches frías en invierno.",
      coords: [22.45, 58.8],
      image: null,
    },
    {
      id: "salalah",
      name: "Salalah",
      region: "Dhofar",
      tag: "El sur del monzón",
      blurb:
        "Playas de palmeras, árboles de incienso y, de junio a septiembre, colinas verdes y cascadas por el khareef. Se llega en avión desde Mascate.",
      coords: [17.0151, 54.0924],
      image: null,
    },
    {
      id: "khasab",
      name: "Khasab (Musandam)",
      region: "Musandam",
      tag: "Los fiordos de Arabia",
      blurb:
        "Montañas que caen al mar en fiordos, paseos en dhow con delfines y snorkel. Separado del resto del país por los Emiratos.",
      coords: [26.1799, 56.2477],
      image: null,
    },
    {
      id: "misfat",
      name: "Misfat al Abriyeen",
      region: "Ad Dakhiliyah",
      tag: "La aldea de montaña",
      blurb:
        "Una aldea de adobe entre palmeras y canales de riego antiguos, a mil metros, cerca del Jebel Shams, la montaña más alta del país.",
      coords: [23.142, 57.29],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Omán depende del mes y de la altura. De octubre a marzo, ropa liviana de día, un buzo para la noche y una campera para Jebel Akhdar y el desierto. De mayo a septiembre, la ropa más fresca que tengas, sombrero y mucha agua, salvo en Salalah, donde el khareef pide un impermeable. Siempre, ropa que cubra hombros y rodillas, calzado que se pueda mojar para los wadis y licencia de conducir.",
    keyPoints: [
      "Inviernos templados en el norte de octubre a marzo; calor extremo de mayo a septiembre.",
      "Salalah tiene el monzón (khareef) de junio a septiembre.",
      "Se recorre en auto: para la montaña y el desierto, 4x4.",
      "Hombros y rodillas cubiertos fuera de la playa de los hoteles.",
    ],
    adviceByBucket: {
      calido:
        "La ropa más fresca que tengas, de algodón o lino y que cubra, sombrero, protector alto y mucha agua en el auto. Para los wadis, calzado que se pueda mojar.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno de la costa y los wadis, la mejor época.",
      fresco:
        "Un buzo abrigado y una campera para las noches del desierto y de Jebel Akhdar.",
      frio: "Campera de abrigo y gorro para Jebel Akhdar en diciembre y enero, donde puede helar de noche.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Hace falta adaptador casi siempre. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Alquilá una 4x4 si vas a la montaña",
          body: "En la subida a Jebel Akhdar hay un control que solo deja pasar camionetas 4x4.",
        },
        {
          title: "Visitá la Gran Mezquita a la mañana",
          body: "Abre a los visitantes solo algunas horas por la mañana, con hombros, piernas y, las mujeres, el pelo cubiertos.",
        },
        {
          title: "Llegá temprano a los wadis",
          body: "Antes del calor y de los grupos. Llevá agua, calzado que se moje y una bolsa estanca.",
        },
        {
          title: "Dormí una noche en el desierto",
          body: "En Wahiba, con la excursión en 4x4 incluida: el cielo sin luces es otro país.",
        },
        {
          title: "Andá a ver las tortugas con la reserva",
          body: "En Ras al Jinz, de noche y con guía: sin flash y a la distancia que indiquen.",
        },
        {
          title: "Elegí pagar en riales",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a un wadi si llueve en la montaña",
          body: "El agua baja rápido por los cauces secos, aunque donde estés no llueva.",
        },
        {
          title: "No manejes en las dunas sin experiencia",
          body: "Para el desierto, excursión con chofer o un campamento que te busque en la ruta.",
        },
        {
          title: "No vayas descubierto a pueblos y zocos",
          body: "Se esperan hombros y rodillas cubiertos.",
        },
        {
          title: "No le saques fotos a la gente sin permiso",
          body: "Sobre todo a mujeres; preguntá antes.",
        },
        {
          title: "No tomes alcohol fuera de lugares con licencia",
          body: "Se sirve en hoteles y algunos restaurantes; en la calle, no.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "ruta",
        title: "Viaje en auto",
        notice: {
          tone: "info",
          title: "Omán se recorre manejando",
          body: "Casi no hay transporte público fuera de Mascate. Para la montaña y el desierto, una 4x4.",
        },
        summary: "Lo que pide una ruta por Omán",
        items: [
          "Licencia de conducir, y la internacional si la piden",
          "Agua de sobra en el auto",
          "Efectivo para nafta y pueblos",
          "Calzado que se pueda mojar para los wadis",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes entran sin visa y otros necesitan la electrónica; pueden pedirte reservas y seguro médico. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "Reservas de alojamiento",
          "Seguro médico",
          "Pasaje de salida del país",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para mezquitas, pueblos y zocos",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para el pelo",
          "Calzado fácil de sacar",
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
          "Crema para después del sol",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa ajustada o muy corta",
        why: "Fuera de las playas de hotel, se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En zocos, pueblos y rutas largas se paga en efectivo.",
        instead: "Riales en efectivo y una tarjeta.",
      },
      {
        leave: "Un adaptador de patas redondas",
        why: "Omán usa el enchufe británico de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Ojotas para los wadis",
        why: "Se camina sobre piedras y se nada: se pierden en el agua.",
        instead: "Sandalias de agua o zapatillas que se mojen.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "Jebel Akhdar y las noches del desierto son frías.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Ropa sintética para el calor",
        why: "Con cuarenta grados, no respira.",
        instead: "Algodón o lino.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Omán?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas; otros tramitan la visa electrónica. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a marzo para el norte. Salalah, de junio a septiembre, con el khareef.",
      },
      {
        question: "¿Necesito auto?",
        answer:
          "Casi siempre. Fuera de Mascate hay poco transporte público, y para la montaña y el desierto hace falta una 4x4.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi seguro que sí. Omán usa el tipo G, británico, de tres patas rectangulares, a 240 V.",
      },
      {
        question: "¿Cómo llego a Musandam?",
        answer:
          "En avión desde Mascate, en ferry o por ruta a través de los Emiratos, con los controles de frontera de los dos países.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "En hoteles y algunos restaurantes con licencia. En la calle, no.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria; redondear o dejar algo a guías y choferes es bien recibido.",
      },
      {
        question: "¿Qué ropa llevo?",
        answer:
          "Ropa liviana que cubra hombros y rodillas, calzado para los wadis y abrigo para la montaña en invierno.",
      },
    ],
  },
};
