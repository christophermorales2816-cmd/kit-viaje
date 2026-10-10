import type { DestinationGuide } from "./types";

/**
 * Guía de Emiratos Árabes Unidos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el calor más extremo del sitio junto con el resto
 * del Golfo —máximas de más de cuarenta grados y noches de cerca de treinta—,
 * que obligó a ampliar los topes del generador. Las reglas de conducta (ropa en
 * mezquitas, alcohol, medicamentos controlados, Ramadán) se dicen como reglas
 * del país, sin tono de advertencia. La base es Dubái y no Abu Dabi, como
 * Antigua en Guatemala.
 */
export const emiratosArabesUnidos: DestinationGuide = {
  slug: "emiratos-arabes-unidos",
  country: "Emiratos Árabes Unidos",
  subregion: "Asia Occidental",
  subhead:
    "Los rascacielos de Dubái, la Gran Mezquita blanca de Abu Dabi, dunas rojas a una hora de la ciudad, oasis de palmeras y montañas sobre el golfo de Omán. Un país nuevo, de lujo y de contrastes, con calor extremo en verano.",

  image: null,

  highlights: [
    {
      value: "+40 °C",
      label: "de máxima en Dubái de junio a septiembre",
      note: "Y noches de cerca de treinta. De noviembre a marzo, en cambio, los días son templados y las noches, frescas.",
    },
    {
      value: "Burj Khalifa",
      label: "el edificio más alto del mundo",
      note: "Miradores en los pisos altos, que al atardecer se agotan con días de anticipación. Al pie, la fuente con espectáculo de agua cada noche.",
    },
    {
      value: "Desierto",
      label: "a una hora de los rascacielos",
      note: "Dunas rojas, camellos y campamentos con cena bajo las estrellas. En Liwa están algunas de las dunas más altas de la península arábiga.",
    },
    {
      value: "Ramadán",
      label: "cambia los horarios de todo",
      note: "Durante el mes sagrado, comer y tomar en la calle de día está mal visto y los horarios cambian; de noche, la ciudad se llena. La fecha se corre unos once días cada año.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a los Emiratos",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan una visa que se tramita antes, a veces a través de la aerolínea. Verificá el tuyo antes de comprar el pasaje.",
        "Algunos medicamentos comunes —con codeína, tramadol o ciertos ansiolíticos— están controlados. Llevá la receta, el medicamento en su envase original y fijate la lista oficial antes de viajar.",
        "El pasaporte tiene que tener vigencia de sobra. Las escalas largas en Dubái o Abu Dabi permiten salir del aeropuerto con las mismas reglas.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en los Emiratos",
      body: [
        "La moneda es el dírham, atado al dólar. La tarjeta sin contacto funciona en casi todo, incluso taxis; algo de efectivo sirve para los zocos y los puestos chicos.",
        "En Dubái, el metro, el tranvía y los colectivos se pagan con una tarjeta recargable que se compra en las estaciones.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dírhams: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "costumbres",
      title: "Reglas y costumbres",
      body: [
        "En mezquitas y edificios públicos, hombros y rodillas cubiertos; las mujeres, el pelo en las mezquitas. En la playa y en los hoteles, ropa de playa común.",
        "El alcohol se sirve en bares y restaurantes de hoteles con licencia, no en la calle. Las demostraciones de afecto en público se miran mal, y sacarle fotos a una persona sin su permiso está prohibido.",
        "El fin de semana es sábado y domingo. El viernes al mediodía las mezquitas se llenan para el rezo principal.",
      ],
    },
    {
      id: "clima",
      title: "Desierto junto al mar",
      body: [
        "De noviembre a marzo, días templados y noches frescas: es la temporada para estar afuera. De mayo a septiembre, calor extremo, con máximas de más de cuarenta grados y humedad alta en la costa.",
        "Casi no llueve: algunos chaparrones de diciembre a marzo. En verano, la vida se hace adentro, con aire acondicionado, y lo de afuera se deja para la mañana temprano o la noche.",
        "Jebel Jais, a casi dos mil metros, es la excepción: en invierno las noches son frías. El interior, con Al Ain y Liwa, es más seco y más caluroso de día.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temperaturas agradables, playa y desierto. Es también la temporada más llena y cara.",
        "En verano los hoteles bajan precios, pero afuera se está poco tiempo. El Ramadán cambia horarios y la fecha se corre cada año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por los Emiratos",
      body: [
        "En Dubái, metro sin conductor, tranvía y taxis. Entre emiratos, colectivos interurbanos; para el interior y las montañas, auto de alquiler o excursión.",
        "Taxis y aplicaciones (Careem, Uber) funcionan en todas las ciudades. Se maneja por la derecha y las rutas son excelentes.",
        "Las precauciones son las de cualquier gran ciudad. En verano, la principal es el calor: agua, sombra y nada de caminatas al mediodía.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "El barrio de Al Fahidi, los fuertes y Al Ain; casi todo lo demás es de las últimas décadas.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Cocina árabe, india y de todo el mundo, de los puestos de shawarma a los restaurantes de hotel.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Dunas rojas, oasis, las montañas de Hajar y el skyline de Dubái.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Playas largas de arena blanca; de mayo a septiembre el agua está tibia y afuera hace demasiado calor.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer en los barrios es barato; hoteles, salidas y atracciones, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale: "Metro, taxis, rutas excelentes y el inglés en todos lados.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale:
        "El dírham está atado al dólar y los precios no se negocian fuera de los zocos.",
    },
  ],

  shines: [
    "Fácil, ordenado y con todo en inglés.",
    "Desierto, playa y ciudad en el mismo día.",
    "Una buena escala entre América y Asia.",
  ],

  costs: [
    "Calor extremo de mayo a septiembre.",
    "Caro para dormir y salir.",
    "Poca historia antigua a la vista.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Dubái en enero que en agosto, ni que Jebel Jais. La base es Dubái. Los precios están en dírhams y son órdenes de magnitud.",

  places: [
    {
      id: "dubai",
      name: "Dubái",
      region: "Dubái",
      tag: "Rascacielos y zocos",
      blurb:
        "El Burj Khalifa, la marina, las islas artificiales, el barrio viejo de Al Fahidi y los zocos del oro y las especias sobre el Creek. Es la base del planificador: inviernos templados y veranos de calor extremo.",
      coords: [25.2048, 55.2708],
      featured: true,
      image: null,
    },
    {
      id: "abu-dabi",
      name: "Abu Dabi",
      region: "Abu Dabi",
      tag: "La Gran Mezquita",
      blurb:
        "La Gran Mezquita Sheikh Zayed, el Louvre Abu Dabi sobre el agua y la Corniche. La capital, más tranquila que Dubái.",
      coords: [24.4539, 54.3773],
      image: null,
    },
    {
      id: "sharjah",
      name: "Sharjah",
      region: "Sharjah",
      tag: "Museos y tradición",
      blurb:
        "El emirato de los museos, con el de la civilización islámica y el casco viejo restaurado. Más tradicional y sin alcohol.",
      coords: [25.3463, 55.4209],
      image: null,
    },
    {
      id: "ras-al-khaimah",
      name: "Ras al Khaimah",
      region: "Ras al Khaimah",
      tag: "Montaña y playa",
      blurb:
        "Playas, el fuerte de Dhayah y la puerta a las montañas de Hajar, con la tirolesa más larga del mundo en Jebel Jais.",
      coords: [25.8007, 55.9762],
      image: null,
    },
    {
      id: "jebel-jais",
      name: "Jebel Jais",
      region: "Ras al Khaimah",
      tag: "La cumbre del país",
      blurb:
        "La montaña más alta de los Emiratos, con miradores, senderos y campamentos. En invierno, las noches son frías.",
      coords: [25.948, 56.153],
      image: null,
    },
    {
      id: "fujairah",
      name: "Fujairah",
      region: "Fujairah",
      tag: "La costa del golfo de Omán",
      blurb:
        "La única costa del país sobre el golfo de Omán, con snorkel en Snoopy Island, montañas y la mezquita de Al Badiyah, la más antigua del país.",
      coords: [25.1288, 56.3265],
      image: null,
    },
    {
      id: "al-ain",
      name: "Al Ain",
      region: "Abu Dabi",
      tag: "La ciudad oasis",
      blurb:
        "Oasis de palmeras con canales de riego antiguos, fuertes de adobe y el monte Jebel Hafeet. Patrimonio de la humanidad. Más seca y calurosa que la costa.",
      coords: [24.2075, 55.7447],
      image: null,
    },
    {
      id: "liwa",
      name: "Oasis de Liwa",
      region: "Abu Dabi",
      tag: "Las grandes dunas",
      blurb:
        "En el borde del Empty Quarter, dunas enormes como la de Moreeb y hoteles en medio del desierto. El lugar más caluroso del planificador en verano.",
      coords: [23.133, 53.776],
      image: null,
    },
    {
      id: "hatta",
      name: "Hatta",
      region: "Dubái",
      tag: "Montaña y represa",
      blurb:
        "Un pueblo de montaña con una represa de agua turquesa para el kayak, senderos y un fuerte restaurado. A una hora y media de Dubái.",
      coords: [24.798, 56.115],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Emiratos depende del mes. De noviembre a marzo, ropa liviana de día, un buzo para la noche y el desierto, y traje de baño. De mayo a septiembre, la ropa más fresca que tengas, sombrero, protector y un buzo para el aire acondicionado, que es helado. Siempre, algo que cubra hombros y rodillas para mezquitas y edificios públicos, y la receta de cualquier medicamento que lleves.",
    keyPoints: [
      "Inviernos templados de noviembre a marzo; calor extremo de mayo a septiembre.",
      "Mezquitas y edificios públicos piden hombros y rodillas cubiertos.",
      "Algunos medicamentos comunes están controlados: llevá la receta.",
      "El fin de semana es sábado y domingo; el viernes al mediodía es el rezo principal.",
    ],
    adviceByBucket: {
      calido:
        "La ropa más fresca que tengas, de algodón o lino, sombrero, protector alto y mucha agua. Y un buzo liviano para el aire acondicionado, que es helado.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno, la mejor época para playa y desierto.",
      fresco:
        "Un buzo abrigado y una campera liviana para las noches del desierto y la montaña en invierno.",
      frio: "Campera de abrigo para las noches de Jebel Jais en diciembre y enero, que pueden bajar de cero.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Hace falta adaptador casi siempre. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Salí temprano o de noche en verano",
          body: "De mayo a septiembre, lo de afuera se hace antes de las nueve o después del atardecer.",
        },
        {
          title: "Reservá el Burj Khalifa al atardecer con tiempo",
          body: "Es el horario más buscado y se agota días antes.",
        },
        {
          title: "Dormí una noche en el desierto",
          body: "Un campamento en las dunas, con cena y cielo estrellado, es otro país que la ciudad.",
        },
        {
          title: "Cruzá el Creek en abra",
          body: "Los barquitos de madera unen los dos lados del Dubái viejo, entre el zoco del oro y el de las especias.",
        },
        {
          title: "Visitá la Gran Mezquita de Abu Dabi",
          body: "Entrada libre con reserva, y túnicas para quien no venga cubierto. Al atardecer, el mármol cambia de color.",
        },
        {
          title: "Elegí pagar en dírhams",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No le saques fotos a la gente sin permiso",
          body: "Está prohibido por ley, sobre todo a mujeres y familias.",
        },
        {
          title: "No tomes alcohol fuera de lugares con licencia",
          body: "Se sirve en bares y restaurantes de hoteles; en la calle y en la playa pública, no.",
        },
        {
          title: "No viajes con medicamentos sin receta",
          body: "Algunos de uso común están controlados. Llevá la receta y el envase original.",
        },
        {
          title: "No comas en la calle de día en Ramadán",
          body: "Se mira mal; los restaurantes y los hoteles siguen sirviendo.",
        },
        {
          title: "No subestimes el sol de verano",
          body: "Con más de cuarenta grados, una caminata al mediodía es un problema de salud.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Calor y aire acondicionado",
        notice: {
          tone: "info",
          title: "Dos climas: afuera y adentro",
          body: "De mayo a septiembre, cuarenta grados afuera y aire acondicionado helado adentro. Capas livianas.",
        },
        summary: "Lo que pide el desierto",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, anteojos de sol y protector alto",
          "Un buzo liviano para el aire acondicionado",
          "Traje de baño",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá el pasaporte y los medicamentos",
          body: "Muchos pasaportes entran sin visa, pero no todos; y algunos medicamentos comunes necesitan receta. Verificalo antes de viajar.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Receta de los medicamentos que llevás",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
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
        leave: "Ropa ajustada o muy corta para la ciudad",
        why: "Mezquitas, zocos y edificios públicos piden hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta sin contacto sirve para casi todo, hasta en taxis.",
        instead: "Una tarjeta y algo de efectivo para los zocos.",
      },
      {
        leave: "Un adaptador de patas redondas",
        why: "Los Emiratos usan el enchufe británico de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Medicamentos sin receta",
        why: "Algunos de uso común están controlados.",
        instead: "La receta y el envase original.",
      },
      {
        leave: "Ropa de abrigo pesada",
        why: "Solo Jebel Jais y las noches del desierto en invierno piden abrigo.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Ropa sintética para el verano",
        why: "Con cuarenta grados y humedad, no respira.",
        instead: "Algodón o lino.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a los Emiratos?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo: días templados y noches frescas. De mayo a septiembre hace calor extremo.",
      },
      {
        question: "¿Qué ropa llevo?",
        answer:
          "Ropa liviana; para mezquitas y edificios públicos, hombros y rodillas cubiertos. En la playa y los hoteles, ropa de playa común.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí, en bares y restaurantes de hoteles con licencia. En la calle y en la playa pública, no.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi seguro que sí. Los Emiratos usan el tipo G, británico, de tres patas rectangulares, a 230 V.",
      },
      {
        question: "¿Puedo salir del aeropuerto en una escala?",
        answer:
          "Sí, con las mismas reglas de entrada que para cualquier visita. Con una escala de varias horas, alcanza para el centro de Dubái.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria; muchos restaurantes suman servicio. Redondear o dejar algo es bien recibido.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Es tratada, pero casi todos toman embotellada, que está en todos lados.",
      },
    ],
  },
};
