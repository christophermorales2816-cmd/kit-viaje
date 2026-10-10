import type { DestinationGuide } from "./types";

/**
 * Guía de Uzbekistán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el registro de cada noche, que los hoteles hacen
 * solos pero que deja un comprobante para guardar, y montos grandes, como en
 * Vietnam o Laos: un dólar son más de diez mil soms, y un hotel se paga con
 * cientos de miles. El clima es continental seco: Bujará y Jiva pasan los
 * treinta y cinco grados en julio y bajan de cero en enero.
 */
export const uzbekistan: DestinationGuide = {
  slug: "uzbekistan",
  country: "Uzbekistán",
  subregion: "Asia Central",
  subhead:
    "Las ciudades de la Ruta de la Seda: madrazas de mosaicos azules en Samarcanda, los bazares cubiertos de Bujará y una ciudad entera amurallada en Jiva, unidas por un tren rápido. Plov al mediodía, té en todas partes y el desierto alrededor.",

  image: null,

  highlights: [
    {
      value: "+35 °C",
      label: "en Bujará y Jiva en julio",
      note: "Las ciudades de la Ruta de la Seda se recorren mejor en primavera y otoño. En verano, temprano a la mañana y al atardecer.",
    },
    {
      value: "Registán",
      label: "tres madrazas frente a una sola plaza",
      note: "El corazón de Samarcanda: fachadas de mosaicos azules de los siglos XV a XVII. De noche se ilumina.",
    },
    {
      value: "Afrosiyob",
      label: "el tren rápido entre Taskent, Samarcanda y Bujará",
      note: "Une las tres ciudades en pocas horas. Los pasajes se agotan en temporada alta: conviene comprarlos con tiempo.",
    },
    {
      value: "Plov",
      label: "el plato nacional, hecho en ollas enormes",
      note: "Arroz, zanahoria, carne y especias, cocinado en un kazán al fuego para el almuerzo. La cultura del plov es patrimonio cultural inmaterial de la humanidad.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Uzbekistán",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica online, en el sitio oficial. Verificá el tuyo antes de comprar el pasaje.",
        "Cada noche tiene que quedar registrada ante migraciones. Los hoteles lo hacen solos y te dan un comprobante: guardalos todos hasta salir del país.",
        "Si dormís en una casa particular, el registro se hace online. Preguntale a quien te aloja.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Uzbekistán",
      body: [
        "La moneda es el som, y los montos son grandes: una comida se paga con decenas de miles de soms y una noche de hotel, con cientos de miles.",
        "En hoteles, restaurantes y tiendas de Taskent, Samarcanda y Bujará la tarjeta funciona cada vez más. En los bazares, los taxis y los pueblos manda el efectivo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí soms: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Continental y seco",
      body: [
        "Uzbekistán es hemisferio norte y está lejos de cualquier mar. Los veranos son muy calurosos y secos: Bujará y Jiva pasan los treinta y cinco grados en julio.",
        "Los inviernos son fríos en todo el país, con heladas de diciembre a febrero. Jiva y Nukus, en el oeste, tienen los más duros del llano.",
        "La lluvia se concentra en invierno y primavera; de junio a septiembre casi no llueve. En las montañas de Chimgan, cerca de Taskent, nieva en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril, mayo, septiembre y octubre: días templados y noches frescas. Es la temporada alta, y los hoteles chicos se llenan.",
        "Julio y agosto son muy calurosos en Bujará y Jiva: se recorre temprano y al atardecer. Navruz, el año nuevo persa, se festeja el 21 de marzo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Uzbekistán",
      body: [
        "El tren rápido Afrosiyob une Taskent, Samarcanda y Bujará en pocas horas. Los pasajes se venden online y se agotan en temporada alta.",
        "A Jiva y Nukus, en el oeste, se llega en tren —el viaje es largo— o en vuelo interno a Urgench o Nukus.",
        "En Taskent hay metro, con estaciones decoradas, y taxis por app. Entre ciudades chicas, taxis compartidos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Samarcanda, Bujará, Jiva y Shahrisabz: ciudades de la Ruta de la Seda, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Plov, samsa, shashlik, el pan redondo y las frutas y frutos secos de los bazares.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "Desierto, estepa y montañas cerca de Taskent; lo fuerte son las ciudades.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse en tren sale poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "El tren rápido une las ciudades principales, pero los pasajes se agotan y el oeste queda lejos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El som pierde valor contra el dólar de a poco, año a año.",
    },
  ],

  shines: [
    "Las ciudades de la Ruta de la Seda.",
    "Un tren rápido entre las ciudades principales.",
    "Barato y hospitalario.",
  ],

  costs: [
    "Veranos muy calurosos en el oeste.",
    "El registro de cada noche.",
    "Fuera de lo turístico se habla poco inglés.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Taskent que Jiva o las montañas de Chimgan. Los precios están en soms uzbekos y son órdenes de magnitud.",

  places: [
    {
      id: "taskent",
      name: "Taskent",
      region: "Taskent",
      tag: "La capital y su metro",
      blurb:
        "Avenidas anchas, el bazar de Chorsu, el complejo de Hazrati Imam y un metro con estaciones decoradas como palacios. Es la base del planificador: veranos muy calurosos, inviernos fríos.",
      coords: [41.2995, 69.2401],
      featured: true,
      image: null,
    },
    {
      id: "samarcanda",
      name: "Samarcanda",
      region: "Samarcanda",
      tag: "El Registán",
      blurb:
        "Las tres madrazas del Registán, la necrópolis de Shah-i-Zinda y el mausoleo de Tamerlán, con mosaicos azules por todos lados. Patrimonio de la humanidad.",
      coords: [39.6542, 66.9597],
      image: null,
    },
    {
      id: "bujara",
      name: "Bujará",
      region: "Bujará",
      tag: "Los bazares cubiertos",
      blurb:
        "Un casco antiguo de madrazas, cúpulas de bazar y el minarete Kalon, alrededor de un estanque con moreras. Patrimonio de la humanidad. Muy caluroso en verano.",
      coords: [39.7747, 64.4286],
      image: null,
    },
    {
      id: "jiva",
      name: "Jiva",
      region: "Corasmia",
      tag: "Una ciudad dentro de murallas",
      blurb:
        "Itchan Kala, una ciudad entera de adobe, minaretes y palacios dentro de sus murallas. Patrimonio de la humanidad. Inviernos fríos y veranos de desierto.",
      coords: [41.3783, 60.3639],
      image: null,
    },
    {
      id: "shahrisabz",
      name: "Shahrisabz",
      region: "Kashkadarya",
      tag: "La ciudad de Tamerlán",
      blurb:
        "La ciudad natal de Tamerlán, con las ruinas del palacio Ak-Saray y mausoleos de su familia, a un par de horas de Samarcanda por un paso de montaña. Patrimonio de la humanidad.",
      coords: [39.0578, 66.8342],
      image: null,
    },
    {
      id: "margilan",
      name: "Margilán (Fergana)",
      region: "Fergana",
      tag: "La seda",
      blurb:
        "Talleres donde la seda se hace a mano, del capullo al telar, y un gran bazar en el fértil valle de Fergana. Cerca, la cerámica de Rishtan.",
      coords: [40.4711, 71.7247],
      image: null,
    },
    {
      id: "nukus",
      name: "Nukus (Karakalpakistán)",
      region: "Karakalpakistán",
      tag: "Arte en el desierto",
      blurb:
        "El museo Savitsky, con una colección de vanguardia rusa que se salvó de la censura soviética lejos de Moscú, y la puerta a Moynaq, donde quedaron barcos varados en lo que era el mar de Aral.",
      coords: [42.46, 59.61],
      image: null,
    },
    {
      id: "chimgan",
      name: "Chimgan y Charvak",
      region: "Taskent",
      tag: "Montaña cerca de Taskent",
      blurb:
        "Las montañas de Chimgan y el lago Charvak, a menos de dos horas de Taskent: esquí en invierno, y caminatas y lago en verano.",
      coords: [41.55, 70.02],
      image: null,
    },
    {
      id: "nurata",
      name: "Nurata y el desierto de Kyzylkum",
      region: "Navoi",
      tag: "Yurtas en el desierto",
      blurb:
        "El pueblo de Nurata, con una fortaleza atribuida a Alejandro Magno y un manantial sagrado, y campamentos de yurtas en el desierto de Kyzylkum, cerca del lago Aydarkul.",
      coords: [40.5614, 65.6886],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Uzbekistán depende de la estación. En primavera y otoño, ropa liviana de día y un buzo para la noche. En verano, ropa liviana que cubra, sombrero, protector y mucha agua: el oeste pasa los treinta y cinco grados. En invierno, campera y capas. Siempre, hombros y rodillas cubiertos para mezquitas y madrazas, y calzado cómodo: las ciudades se recorren a pie.",
    keyPoints: [
      "Hemisferio norte: lo mejor es abril, mayo, septiembre y octubre.",
      "Los hoteles registran cada noche: guardá los comprobantes.",
      "El tren rápido une Taskent, Samarcanda y Bujará; los pasajes se agotan.",
      "En verano, Bujará y Jiva pasan los treinta y cinco grados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de colores claros que cubra hombros y rodillas, sombrero, protector y agua: el sol de Bujará y Jiva es de desierto.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño de la Ruta de la Seda, la mejor época.",
      fresco:
        "Capas, un polar y una campera para las mañanas y las noches de marzo y noviembre.",
      frio: "Campera de abrigo, gorro y guantes para el invierno en todo el país, y ropa de nieve para Chimgan.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá el tren con anticipación",
          body: "Los pasajes del Afrosiyob se venden online y se agotan en temporada alta.",
        },
        {
          title: "Guardá los comprobantes de registro",
          body: "Cada hotel te da uno. Te los pueden pedir al salir del país.",
        },
        {
          title: "Recorré temprano en verano",
          body: "A la mañana y al atardecer: al mediodía, el calor de Bujará y Jiva es fuerte.",
        },
        {
          title: "Probá el plov al mediodía",
          body: "Se cocina para el almuerzo y a la tarde ya no queda. En Taskent hay centros dedicados solo al plov.",
        },
        {
          title: "Regateá en el bazar",
          body: "En los mercados y los puestos de artesanías, el primer precio es para negociar.",
        },
        {
          title: "Elegí pagar en soms",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo en la cabeza. Sin zapatos donde se reza.",
        },
        {
          title: "No subestimes las distancias",
          body: "Jiva y Nukus quedan lejos de Samarcanda: muchas horas de tren o un vuelo interno.",
        },
        {
          title: "No llegues sin reserva en temporada alta",
          body: "En abril, mayo, septiembre y octubre los hoteles chicos de Bujará y Jiva se llenan.",
        },
        {
          title: "No cuentes con la tarjeta en todos lados",
          body: "En los bazares, los taxis y los pueblos se paga en efectivo.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada o hervida. El té, que está en todas partes, es seguro.",
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
        title: "Documentos y registro",
        notice: {
          tone: "warn",
          title: "Visa y registro",
          body: "Muchos pasaportes entran sin visa y otros la tramitan online. Cada noche tiene que quedar registrada: los hoteles lo hacen y te dan un comprobante.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "Los comprobantes de registro de cada hotel",
          "Seguro de viaje",
        ],
      },
      {
        id: "verano",
        title: "Para el verano",
        notice: {
          tone: "info",
          title: "Sol de desierto",
          body: "De junio a agosto, Bujará y Jiva pasan los treinta y cinco grados, con mucho sol y poca sombra.",
        },
        summary: "Lo que pide el calor",
        items: [
          "Sombrero o gorra",
          "Protector solar",
          "Una botella reutilizable",
          "Ropa liviana que cubra",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para la cabeza",
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
          "Sales de rehidratación y algo para el estómago",
          "Protector solar y labial",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa corta",
        why: "Mezquitas, madrazas y pueblos piden hombros y rodillas cubiertos.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "El tren sin comprar",
        why: "El Afrosiyob se agota en temporada alta.",
        instead: "El pasaje comprado online con anticipación.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En los bazares, los taxis y fuera de las ciudades se paga en efectivo.",
        instead: "Soms en efectivo para lo chico.",
      },
      {
        leave: "Zapatos nuevos",
        why: "Las ciudades se recorren a pie, sobre piedra y adoquines.",
        instead: "Zapatillas cómodas ya usadas.",
      },
      {
        leave: "Tirar los comprobantes de registro",
        why: "Te los pueden pedir al salir del país.",
        instead: "Guardarlos todos hasta el final del viaje.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Uzbekistán?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Qué es el registro?",
        answer:
          "La constancia de dónde dormís cada noche. Los hoteles la hacen solos y te dan un comprobante: guardalos hasta salir del país.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Abril, mayo, septiembre y octubre. En julio y agosto el oeste es muy caluroso.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Uzbekistán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Si la cuenta no suma cargo por servicio, se redondea o se deja alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada o hervida.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Uzbeko, y mucha gente habla ruso. En los lugares turísticos se habla algo de inglés.",
      },
      {
        question: "¿Cómo se va de Samarcanda a Bujará?",
        answer:
          "En el tren rápido Afrosiyob, en pocas horas. Conviene comprar el pasaje con anticipación.",
      },
    ],
  },
};
