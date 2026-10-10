import type { DestinationGuide } from "./types";

/**
 * Guía de India.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero del sitio con un calor que define el
 * viaje —Delhi, Agra y Benarés pasan los cuarenta grados antes del monzón— y
 * con Leh, a más de tres mil metros, como la ciudad más fría. Los nombres van
 * en castellano (Bombay, Benarés) y la guía menciona una vez el otro nombre.
 * El aire contaminado del norte en invierno se dice como dato del clima, igual
 * que el humo del norte de Tailandia.
 */
export const india: DestinationGuide = {
  slug: "india",
  country: "India",
  subregion: "Asia del Sur",
  subhead:
    "El Taj Mahal, los fuertes y palacios del Rajastán, los ghats de Benarés sobre el Ganges, las playas de Goa, los canales de Kerala y los monasterios del Himalaya. Un país enorme, intenso y distinto en cada región.",

  image: null,

  highlights: [
    {
      value: "+40 °C",
      label: "en Delhi, Agra y Benarés en mayo",
      note: "Antes del monzón, el norte es un horno. De octubre a marzo es la época para recorrerlo.",
    },
    {
      value: "Taj Mahal",
      label: "el mausoleo de mármol de Agra",
      note: "A unas horas de tren desde Delhi. Al amanecer hay menos gente y el mármol se ve rosado. Cierra los viernes.",
    },
    {
      value: "Benarés",
      label: "la ciudad sagrada sobre el Ganges",
      note: "Los ghats al amanecer, con la gente bañándose en el río, y la ceremonia del fuego (aarti) al anochecer.",
    },
    {
      value: "Monzón",
      label: "de junio a septiembre",
      note: "Riega casi todo el país: Bombay, Goa y Kerala reciben la mayor parte. Ladakh, detrás del Himalaya, queda seco.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a India",
      body: [
        "Casi todos los pasaportes latinoamericanos necesitan visa. La de turista se tramita online, como visa electrónica (e-Visa), con unos días de anticipación. Verificá el tuyo antes de comprar el pasaje.",
        "Usá solo el sitio oficial del gobierno: hay muchas páginas intermediarias que cobran de más por el mismo trámite.",
        "Algunas zonas de frontera, como varios valles de Ladakh cerca de Leh, piden además un permiso que se tramita allá o con una agencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en India",
      body: [
        "La moneda es la rupia. Los pagos con código QR (UPI) que usa todo el mundo allá piden, en general, una cuenta india. La tarjeta funciona en hoteles, centros comerciales y restaurantes más grandes; en mercados, puestos, autorickshaws y templos, efectivo.",
        "Los cajeros de los bancos grandes aceptan tarjetas extranjeras. Conviene tener billetes chicos: muchos puestos no tienen cambio para los grandes.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Invierno, calor y monzón",
      body: [
        "India es hemisferio norte, con tres estaciones. El invierno, de noviembre a febrero, es seco y templado de día en casi todo el país, con noches frías en el norte. En esos meses, el aire de Delhi y de las llanuras del norte suele estar muy contaminado.",
        "De marzo a junio llega el calor fuerte: Delhi, Agra, Jaipur y Benarés pasan los cuarenta grados en mayo. El monzón, de junio a septiembre, trae lluvia casi diaria a Bombay, Goa y Kerala, y chaparrones fuertes al norte.",
        "Leh, en Ladakh, está a más de tres mil metros: inviernos muy por debajo de cero y veranos secos y templados, cuando el resto del país está bajo el monzón.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a marzo para casi todo el país: el norte y el Rajastán están templados y secos, y Goa y Kerala, en su mejor época.",
        "Ladakh se visita de junio a septiembre, justo cuando el resto del país tiene el monzón. Diwali, la fiesta de las luces (octubre o noviembre, según el año), es hermosa y muy llena.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por India",
      body: [
        "Las distancias son enormes: entre regiones, vuelos internos. Entre ciudades cercanas, trenes, que conviene reservar con anticipación porque se agotan, sobre todo los de clase con aire acondicionado.",
        "En las ciudades, metro en Delhi y Bombay, y Uber u Ola para los autos. Para el autorickshaw, precio acordado antes de subir o por aplicación.",
        "Las precauciones son las de cualquier destino turístico grande: en estaciones y monumentos, ignorar a quien ofrece una ayuda que no pediste, y comer en lugares concurridos, con comida recién hecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "El Taj Mahal, los fuertes mogoles y del Rajastán, los templos y miles de años de cultura viva.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Cada región tiene su cocina: thali, curries, panes del tandoor, dosas del sur y comida callejera.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "El Himalaya en Ladakh, el desierto del Rajastán, los canales de Kerala y las playas de Goa.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Goa y Kerala tienen buenas playas de octubre a marzo; con el monzón, el mar se pone bravo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y moverse sale muy poco; los hoteles buenos y los palacios convertidos en hotel, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Distancias enormes, trenes que se agotan y ciudades caóticas: hay que planificar más que en otros países.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "Precios estables, pero en mercados y autorickshaws todo se negocia.",
    },
  ],

  shines: [
    "Monumentos que no se parecen a nada.",
    "Comida distinta y excelente en cada región.",
    "Una cultura viva que se ve en la calle.",
  ],

  costs: [
    "El calor de abril a junio en el norte.",
    "Ciudades ruidosas y caóticas.",
    "Trenes y logística que piden planificar con tiempo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Delhi en mayo que Leh en enero, y el monzón llega a Bombay y a Goa con otra fuerza. Los precios están en rupias y son órdenes de magnitud.",

  places: [
    {
      id: "nueva-delhi",
      name: "Nueva Delhi",
      region: "Delhi",
      tag: "La capital",
      blurb:
        "El Fuerte Rojo, la mezquita Jama Masjid, el Qutb Minar, la tumba de Humayun y los bazares de la vieja Delhi. Es la base del planificador: inviernos templados con noches frías, calor fuerte de abril a junio y monzón en julio y agosto.",
      coords: [28.6139, 77.209],
      featured: true,
      image: null,
    },
    {
      id: "agra",
      name: "Agra",
      region: "Uttar Pradesh",
      tag: "El Taj Mahal",
      blurb:
        "El Taj Mahal, el Fuerte de Agra y, cerca, la ciudad abandonada de Fatehpur Sikri. De las más calurosas en mayo y junio.",
      coords: [27.1767, 78.0081],
      image: null,
    },
    {
      id: "jaipur",
      name: "Jaipur",
      region: "Rajastán",
      tag: "La ciudad rosa",
      blurb:
        "El Fuerte Amber sobre la colina, el Palacio de los Vientos, el observatorio Jantar Mantar y bazares de telas y joyas.",
      coords: [26.9124, 75.7873],
      image: null,
    },
    {
      id: "bombay",
      name: "Bombay",
      region: "Maharashtra",
      tag: "Bollywood y el mar",
      blurb:
        "Bombay (Mumbai): la Puerta de la India, el paseo Marine Drive, edificios coloniales y el cine de Bollywood. El monzón trae lluvia casi diaria de junio a septiembre.",
      coords: [19.076, 72.8777],
      image: null,
    },
    {
      id: "benares",
      name: "Benarés",
      region: "Uttar Pradesh",
      tag: "Los ghats del Ganges",
      blurb:
        "Benarés (Varanasi): escalinatas sobre el río sagrado, paseos en bote al amanecer y la ceremonia del fuego al anochecer. Muy calurosa antes del monzón.",
      coords: [25.3176, 82.9739],
      image: null,
    },
    {
      id: "goa",
      name: "Goa",
      region: "Goa",
      tag: "Playas e iglesias",
      blurb:
        "Playas, iglesias portuguesas y una cocina con influencia de Portugal. Seca y agradable de noviembre a marzo; el monzón la cubre de junio a septiembre.",
      coords: [15.4909, 73.8278],
      image: null,
    },
    {
      id: "kochi",
      name: "Kochi (Kerala)",
      region: "Kerala",
      tag: "Canales y especias",
      blurb:
        "Las redes de pesca chinas, el barrio judío y la puerta a los canales (backwaters) de Kerala en casa flotante. Húmeda todo el año, con dos monzones.",
      coords: [9.9312, 76.2673],
      image: null,
    },
    {
      id: "udaipur",
      name: "Udaipur",
      region: "Rajastán",
      tag: "La ciudad de los lagos",
      blurb:
        "Palacios blancos sobre lagos, el City Palace y atardeceres desde las terrazas. Más agradable que el resto del Rajastán en verano.",
      coords: [24.5854, 73.7125],
      image: null,
    },
    {
      id: "leh",
      name: "Leh (Ladakh)",
      region: "Ladakh",
      tag: "Monasterios en el Himalaya",
      blurb:
        "Monasterios budistas sobre las montañas, lagos de altura y pasos a más de cinco mil metros. A más de tres mil metros: inviernos muy fríos y veranos secos. La más fría de India en el planificador.",
      coords: [34.1526, 77.5771],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "India depende de la región y del mes. De octubre a marzo, ropa liviana de día y un buzo para las noches del norte; de abril a junio, la ropa más fresca que tengas, sombrero y mucha agua; en el monzón, un impermeable y sandalias. Para Leh, abrigo de montaña. Siempre, ropa que cubra hombros y piernas —es lo esperado en casi todo el país y obligatorio en los templos—, calzado fácil de sacar y algo para el estómago.",
    keyPoints: [
      "Hemisferio norte: invierno seco de noviembre a febrero, calor fuerte de marzo a junio y monzón de junio a septiembre.",
      "Casi todos los pasaportes necesitan visa electrónica: tramitala solo en el sitio oficial.",
      "Ropa que cubra hombros y piernas, y descalzo en los templos.",
      "Efectivo en billetes chicos para mercados, puestos y autorickshaws.",
    ],
    adviceByBucket: {
      calido:
        "La ropa más fresca que tengas, de algodón o lino y que cubra, sombrero, protector y mucha agua. De abril a junio, el norte pasa los cuarenta grados; con el monzón, sumá un impermeable.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno de Delhi y del Rajastán, la mejor época para recorrerlos.",
      fresco:
        "Capas y un buzo abrigado: las mañanas y las noches de diciembre y enero en el norte son frías, y no todos los hoteles tienen calefacción.",
      frio: "Abrigo de montaña de verdad, gorro, guantes y protector labial. Leh en invierno está muy por debajo de cero.",
    },
    plug: {
      types: "Tipo C, tipo D y tipo M",
      voltage: "230 V, 50 Hz",
      note: "El tipo C es el de dos patas redondas finas; los tipos D y M tienen tres patas redondas gruesas. Un adaptador universal resuelve los tres. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la visa solo en el sitio oficial",
          body: "Hay muchas páginas intermediarias que cobran de más por la misma visa electrónica.",
        },
        {
          title: "Reservá los trenes con anticipación",
          body: "Los de clase con aire acondicionado se agotan semanas antes, sobre todo en temporada alta.",
        },
        {
          title: "Visitá el Taj Mahal al amanecer",
          body: "Hay menos gente, menos calor y el mármol cambia de color. Recordá que cierra los viernes.",
        },
        {
          title: "Aclimatate en Leh",
          body: "A más de tres mil metros, los primeros días son de descanso. Si llegás en avión, no planees nada exigente para el primer día.",
        },
        {
          title: "Comé donde come la gente",
          body: "Lugares concurridos y comida recién hecha: rotan rápido y es lo más seguro para el estómago.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes al norte de abril a junio sin prepararte",
          body: "El calor pasa los cuarenta grados: madrugá, descansá al mediodía y tomá mucha agua.",
        },
        {
          title: "No entres calzado a un templo",
          body: "Te sacás los zapatos en la entrada, y en muchos también las medias. Hombros y piernas cubiertos.",
        },
        {
          title: "No uses la mano izquierda para comer o dar algo",
          body: "Se come, se paga y se saluda con la derecha.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Ni hielo de origen dudoso: embotellada o filtrada, que está en todos lados.",
        },
        {
          title: "No subas a un autorickshaw sin precio",
          body: "Acordalo antes o pedilo por aplicación.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "climas",
        title: "Según la región y la época",
        notice: {
          tone: "info",
          title: "Del desierto al Himalaya",
          body: "Delhi en mayo y Leh en enero no comparten nada. Mirá el clima de la ciudad y del mes en el planificador.",
        },
        summary: "Lo que cambia con la época",
        items: [
          "Ropa fresca de algodón o lino que cubra",
          "Un buzo para las noches del norte en invierno",
          "Un impermeable para el monzón",
          "Abrigo de montaña si vas a Ladakh",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Tramitá la visa antes de viajar",
          body: "Casi todos los pasaportes latinoamericanos la necesitan. La electrónica se pide online, con unos días de anticipación, en el sitio oficial.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica aprobada, impresa",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Ropa que cubra hombros y piernas",
          "Un pañuelo para cubrir la cabeza donde lo piden",
          "Calzado fácil de sacar",
          "Medias para el piso caliente de los patios",
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
          "Repelente de mosquitos",
          "Alcohol en gel",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Musculosas y shorts",
        why: "Llaman la atención en casi todo el país y no te dejan entrar a los templos.",
        instead: "Ropa liviana de algodón que cubra hombros y piernas.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Mercados, puestos, autorickshaws y templos piden efectivo, y los pagos por QR necesitan una cuenta india.",
        instead: "Rupias en billetes chicos y una tarjeta.",
      },
      {
        leave: "Zapatillas con cordones difíciles",
        why: "Te las vas a sacar muchas veces por día en templos.",
        instead: "Calzado cómodo que se saque sin desatar.",
      },
      {
        leave: "Una valija enorme",
        why: "Estaciones con escaleras, trenes con poco lugar y calles sin vereda.",
        instead: "Una valija mediana o mochila.",
      },
      {
        leave: "Ropa sintética para el calor",
        why: "Con cuarenta grados no respira.",
        instead: "Algodón o lino.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a India?",
        answer:
          "Casi todos los pasaportes latinoamericanos sí. La de turista se tramita online como visa electrónica, en el sitio oficial, con unos días de anticipación. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a marzo para casi todo el país. Ladakh, de junio a septiembre.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente sí. India usa los tipos C, D y M a 230 V: un adaptador universal los resuelve.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En vuelos internos para las distancias largas y en tren para las cortas, reservando con anticipación.",
      },
      {
        question: "¿Qué ropa llevo?",
        answer:
          "Ropa liviana que cubra hombros y piernas, y calzado fácil de sacar para los templos.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, es habitual: en restaurantes, algo sobre la cuenta si no incluye servicio, y a guías y choferes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla, ni el hielo de origen dudoso. Embotellada o filtrada.",
      },
      {
        question: "¿Necesito un permiso para Ladakh?",
        answer:
          "Para Leh, no. Para varios valles cercanos a la frontera, sí: se tramita en Leh o con una agencia.",
      },
    ],
  },
};
