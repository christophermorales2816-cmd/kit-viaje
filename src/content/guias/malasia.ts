import type { DestinationGuide } from "./types";

/**
 * Guía de Malasia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el monzón cambia de costa. El este de la península
 * (Perhentian) llueve fuerte de noviembre a febrero, cuando el oeste está más
 * seco, y muchos alojamientos de las islas del este cierran esos meses. Borneo
 * (Sabah y Sarawak) tiene su propio control migratorio aunque sea el mismo
 * país. El ringgit va sin centavos por la regla del medio dólar.
 */
export const malasia: DestinationGuide = {
  slug: "malasia",
  country: "Malasia",
  subregion: "Sudeste Asiático",
  subhead:
    "Las Torres Petronas, la comida de los puestos callejeros de Penang, plantaciones de té en la montaña, islas de agua transparente y la selva de Borneo con orangutanes. Tres culturas —malaya, china e india— en una misma calle.",

  image: null,

  highlights: [
    {
      value: "2 monzones",
      label: "uno en cada costa",
      note: "El este de la península llueve fuerte de noviembre a febrero y muchas islas cierran; el oeste, con Penang y Langkawi, llueve más de abril a octubre.",
    },
    {
      value: "Hawkers",
      label: "los puestos de comida que no cierran",
      note: "Nasi lemak, char kway teow, roti canai y laksa, sentado en un patio de comidas. George Town, en Penang, es la capital de esa cocina.",
    },
    {
      value: "Borneo",
      label: "orangutanes y el monte Kinabalu",
      note: "Sabah y Sarawak, en la isla de Borneo, tienen selva primaria, centros de rehabilitación de orangutanes y la montaña más alta del país.",
    },
    {
      value: "3 culturas",
      label: "malaya, china e india",
      note: "Mezquitas, templos chinos e hindúes en la misma cuadra, y feriados de las tres religiones en el calendario.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Malasia",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan visa electrónica. Verificá el tuyo antes de comprar el pasaje.",
        "Malasia pide completar una tarjeta de llegada digital online en los días previos al viaje. Fijate qué rige cuando viajes.",
        "Sabah y Sarawak, en Borneo, tienen su propio control de pasaporte aunque vengas de la península: llevalo encima en los vuelos internos.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Malasia",
      body: [
        "La moneda es el ringgit. La tarjeta funciona en hoteles, centros comerciales y restaurantes; en los puestos de comida (hawkers), mercados y pueblos, efectivo. Muchos puestos aceptan también pago con código QR.",
        "Los cajeros aceptan tarjetas extranjeras y las casas de cambio de los centros comerciales suelen dar buen cambio por dólares.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí ringgits: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor ecuatorial, monzón por costa",
      body: [
        "Malasia está casi sobre el ecuador: calor y humedad los doce meses y chaparrones casi diarios a la tarde. No hay invierno.",
        "El monzón cambia de costa: el este de la península, con las islas Perhentian, recibe las lluvias fuertes de noviembre a febrero; el oeste, con Penang y Langkawi, llueve más de abril a octubre.",
        "Las Tierras Altas de Cameron, a más de mil quinientos metros, son frescas todo el año, con noches para buzo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a marzo para la costa oeste y Langkawi; de marzo a octubre para las islas del este, que en invierno cierran en gran parte.",
        "Kuala Lumpur y Borneo se visitan todo el año. El Ramadán cambia horarios y algunos restaurantes cierran de día; al final, el Hari Raya llena trenes y rutas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Malasia",
      body: [
        "Entre ciudades, buses cómodos y el tren eléctrico de la costa oeste; a Borneo y Langkawi, vuelos internos baratos. A las Perhentian se llega en lancha desde Kuala Besut.",
        "En Kuala Lumpur, metro, monorriel y Grab para autos, con precio fijo antes de subir.",
        "Las precauciones son las de cualquier gran ciudad: el celular firme en la mano en la vereda y la mochila adelante en los mercados.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Malaca y George Town, puertos coloniales patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Cocina malaya, china, india y nyonya en los puestos callejeros, barata y excelente.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Selva de Borneo, el monte Kinabalu, plantaciones de té e islas tropicales.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Las Perhentian y Langkawi tienen agua transparente; cada una en su temporada.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y dormir sale poco, con buen nivel de servicio e infraestructura.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Buses, trenes y vuelos internos buenos; el inglés se habla mucho.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Precios estables y casi sin regateo fuera de los mercados.",
    },
  ],

  shines: [
    "Una de las mejores comidas callejeras de Asia.",
    "Fácil de recorrer y con mucho inglés.",
    "Selva, montaña e islas en un mismo viaje.",
  ],

  costs: [
    "Calor húmedo todo el año.",
    "Las islas del este cierran de noviembre a febrero.",
    "Borneo pide vuelos aparte.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Kuala Lumpur que las Tierras Altas de Cameron, y el monzón llega a cada costa en otros meses. Los precios están en ringgits y son órdenes de magnitud.",

  places: [
    {
      id: "kuala-lumpur",
      name: "Kuala Lumpur",
      region: "Selangor",
      tag: "Torres y mercados",
      blurb:
        "Las Torres Petronas, las cuevas hindúes de Batu, el barrio chino y la comida de Jalan Alor. Es la base del planificador: calurosa y húmeda todo el año, con chaparrones a la tarde.",
      coords: [3.139, 101.6869],
      featured: true,
      image: null,
    },
    {
      id: "penang",
      name: "Penang (George Town)",
      region: "Penang",
      tag: "La capital de la comida",
      blurb:
        "Casas comerciales coloniales, murales callejeros, templos de clanes chinos y los mejores puestos de comida del país. Patrimonio de la humanidad.",
      coords: [5.4141, 100.3288],
      image: null,
    },
    {
      id: "malaca",
      name: "Malaca",
      region: "Malaca",
      tag: "El puerto de las especias",
      blurb:
        "Portugueses, holandeses e ingleses dejaron su huella en un casco antiguo patrimonio de la humanidad, con el mercado nocturno de Jonker Street.",
      coords: [2.1896, 102.2501],
      image: null,
    },
    {
      id: "langkawi",
      name: "Langkawi",
      region: "Kedah",
      tag: "Isla y teleférico",
      blurb:
        "Playas, manglares, un teleférico con puente colgante sobre la selva y compras libres de impuestos. Seca de diciembre a marzo.",
      coords: [6.35, 99.8],
      image: null,
    },
    {
      id: "cameron-highlands",
      name: "Tierras Altas de Cameron",
      region: "Pahang",
      tag: "Té en la montaña",
      blurb:
        "Plantaciones de té en colinas, granjas de frutillas y caminatas por el bosque nuboso. A más de mil quinientos metros: fresco todo el año.",
      coords: [4.4721, 101.3801],
      image: null,
    },
    {
      id: "perhentian",
      name: "Islas Perhentian",
      region: "Terengganu",
      tag: "Agua transparente",
      blurb:
        "Dos islas sin rutas, con snorkel entre tortugas y tiburones de arrecife. De noviembre a febrero el monzón las cierra casi por completo.",
      coords: [5.9, 102.75],
      image: null,
    },
    {
      id: "kota-kinabalu",
      name: "Kota Kinabalu (Borneo)",
      region: "Sabah",
      tag: "El monte Kinabalu",
      blurb:
        "La puerta al monte Kinabalu, la montaña más alta del país, a islas con arrecifes y a la selva de Sabah, con orangutanes en Sepilok.",
      coords: [5.9804, 116.0735],
      image: null,
    },
    {
      id: "kuching",
      name: "Kuching (Borneo)",
      region: "Sarawak",
      tag: "Selva y orangutanes",
      blurb:
        "Una ciudad tranquila sobre el río, con el centro de orangutanes de Semenggoh y el parque nacional de Bako, con monos narigudos. Lluviosa casi todo el año.",
      coords: [1.5533, 110.3592],
      image: null,
    },
    {
      id: "ipoh",
      name: "Ipoh",
      region: "Perak",
      tag: "Templos en cuevas",
      blurb:
        "Templos budistas dentro de cuevas de piedra caliza, un casco viejo de casas coloniales y su famoso café blanco.",
      coords: [4.5975, 101.0901],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Malasia es calor húmedo todo el año: ropa liviana que se seque rápido, protector, repelente y un paraguas plegable para los chaparrones de la tarde. Un buzo para las Tierras Altas de Cameron y para el aire acondicionado, que es fuerte en todos lados. Para mezquitas y templos, algo que cubra hombros y rodillas.",
    keyPoints: [
      "Ecuatorial: calor todo el año, con el monzón en el este de noviembre a febrero.",
      "Las islas Perhentian cierran casi por completo de noviembre a febrero.",
      "Mezquitas y templos piden hombros y rodillas cubiertos.",
      "El aire acondicionado es fuerte: llevá un buzo liviano.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector, sombrero, repelente y un paraguas plegable para los chaparrones de la tarde.",
      templado:
        "Ropa liviana y un buzo para la noche: es el clima de las Tierras Altas de Cameron.",
      fresco:
        "Un buzo abrigado y una campera liviana para las noches y las madrugadas en la montaña.",
      frio: "No hay ciudades con frío en el planificador; en la cumbre del Kinabalu, de madrugada, hace falta abrigo de montaña.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Hace falta adaptador casi siempre. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comé en los puestos de hawkers",
          body: "Los patios de comida de Penang y Kuala Lumpur son la mejor y más barata cocina del país.",
        },
        {
          title: "Usá Grab para los autos",
          body: "El precio se ve antes de subir, y sirve también en Borneo.",
        },
        {
          title: "Elegí la costa según el mes",
          body: "De diciembre a marzo, el oeste y Langkawi; de marzo a octubre, las islas del este.",
        },
        {
          title: "Llevá un buzo liviano",
          body: "El aire acondicionado de buses, centros comerciales y cines es helado.",
        },
        {
          title: "Volá a Borneo",
          body: "Los vuelos internos son baratos, y la selva de Sabah y Sarawak es otro viaje.",
        },
        {
          title: "Elegí pagar en ringgits",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No vayas a las Perhentian en el monzón",
          body: "De noviembre a febrero el mar se pone bravo, las lanchas se suspenden y casi todo cierra.",
        },
        {
          title: "No entres a una mezquita descubierto",
          body: "Hombros, piernas y, las mujeres, el pelo cubierto. Muchas prestan túnicas en la entrada.",
        },
        {
          title: "No comas en el transporte público de Kuala Lumpur",
          body: "Está prohibido en el metro y el monorriel, con multa.",
        },
        {
          title: "No uses la mano izquierda para dar algo",
          body: "Se da y se recibe con la derecha, o con las dos.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "En las ciudades suele ser tratada, pero lo habitual es tomar embotellada o filtrada.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "tropico",
        title: "Calor y lluvia",
        notice: {
          tone: "info",
          title: "El monzón cambia de costa",
          body: "El este llueve de noviembre a febrero; el oeste, de abril a octubre. Mirá el clima de la ciudad en el planificador.",
        },
        summary: "Lo que pide el trópico",
        items: [
          "Ropa liviana de secado rápido",
          "Protector solar y repelente",
          "Un paraguas plegable",
          "Un buzo liviano para el aire acondicionado",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes entran sin visa y hay una tarjeta de llegada digital que se completa antes. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La tarjeta de llegada digital completada",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y templos",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para cubrir el pelo",
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
          "Repelente de mosquitos",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo",
        why: "Hace calor todo el año; solo la montaña pide un buzo.",
        instead:
          "Un buzo liviano, que también sirve para el aire acondicionado.",
      },
      {
        leave: "Musculosas y shorts para mezquitas",
        why: "Piden hombros y rodillas cubiertos.",
        instead: "Una camisa liviana y un pantalón largo.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Los puestos de comida y los mercados cobran en efectivo o con QR.",
        instead: "Ringgits en efectivo y una tarjeta.",
      },
      {
        leave: "Un adaptador de patas redondas",
        why: "Malasia usa el enchufe británico de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "Con el calor y la lluvia, no se secan.",
        instead: "Sandalias de trekking y unas ojotas.",
      },
      {
        leave: "Un paraguas grande",
        why: "Los chaparrones son cortos y el calor sigue.",
        instead: "Un paraguas plegable o un impermeable liviano.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Malasia?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas, y hay una tarjeta de llegada digital que se completa antes. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Depende de la costa: de diciembre a marzo para el oeste y Langkawi, de marzo a octubre para las islas del este.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi seguro que sí. Malasia usa el tipo G, británico, de tres patas rectangulares, a 240 V.",
      },
      {
        question: "¿Cómo llego a Borneo?",
        answer:
          "En vuelo interno desde Kuala Lumpur a Kota Kinabalu o Kuching. Llevá el pasaporte: hay control al llegar.",
      },
      {
        question: "¿Se puede pagar con tarjeta?",
        answer:
          "En hoteles, restaurantes y centros comerciales sí. En los puestos de comida, efectivo o QR.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No se acostumbra: muchos restaurantes ya suman un cargo por servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Lo habitual es tomar embotellada o filtrada, que está en todos lados.",
      },
      {
        question: "¿Qué ropa llevo para las mezquitas?",
        answer:
          "Algo que cubra hombros y rodillas y, las mujeres, un pañuelo para el pelo. Muchas prestan túnicas en la entrada.",
      },
    ],
  },
};
