import type { DestinationGuide } from "./types";

/**
 * Guía de Colombia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: los PISOS TÉRMICOS. Bogotá y Cartagena están a una
 * hora de vuelo y no comparten ni una prenda de la valija. Y en los Andes no
 * hay una temporada de lluvias sino dos por año.
 */
export const colombia: DestinationGuide = {
  slug: "colombia",
  country: "Colombia",
  subregion: "Sudamérica",
  subhead:
    "Caribe, Andes, Pacífico y Amazonía. Bogotá es fresca los doce meses y Cartagena es calor todo el año: acá no hay estaciones, hay alturas.",

  image: null,

  highlights: [
    {
      value: "2.600 m",
      label: "en Bogotá",
      note: "Fresca todo el año, con noches frías. A una hora de vuelo, Cartagena no baja de veinte grados.",
    },
    {
      value: "2",
      label: "temporadas de lluvia",
      note: "En los Andes llueve de marzo a mayo y de septiembre a noviembre. El resto del año es más seco.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El peso colombiano flota sin mercado paralelo. Sus precios tienen muchos ceros.",
    },
    {
      value: "2",
      label: "océanos",
      note: "El único país de Sudamérica con costa en el Caribe y en el Pacífico.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Colombia",
      body: [
        "Hay un solo tipo de cambio y no hay mercado paralelo. Los precios en pesos colombianos tienen muchos ceros: un café o un almuerzo se cuentan en miles.",
        "Un turista extranjero no suele pagar el IVA del alojamiento en hoteles registrados. Pedilo al reservar y llevá a mano el sello o la constancia de ingreso.",
        "La tarjeta funciona en ciudades y lugares turísticos. Los cajeros automáticos son la forma más simple de conseguir efectivo, que sigue haciendo falta en mercados, buses y pueblos.",
      ],
    },
    {
      id: "pisos-termicos",
      title: "Los pisos térmicos",
      body: [
        "Colombia está cerca del ecuador, así que no tiene verano ni invierno. La temperatura la define la altura, y eso tiene nombre: pisos térmicos.",
        "Bogotá, a 2.600 metros, tiene días frescos y noches frías los doce meses. Medellín, a 1.500, tiene la famosa eterna primavera. El Eje Cafetero está en el medio. La costa caribe es calor húmedo todo el año, y la Amazonía también.",
        "Un viaje que combina Bogotá con Cartagena pide empacar para dos climas: una campera para una y ropa de playa para la otra.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a marzo y de julio a agosto son los meses más secos en buena parte del país. Son también la temporada alta, con precios más altos en la costa.",
        "En los Andes hay dos temporadas de lluvia: de marzo a mayo y de septiembre a noviembre. Llueve más de tarde, y casi nunca el día entero.",
        "En el Caribe, octubre y noviembre son los meses más lluviosos, y coinciden con el final de la temporada de huracanes, aunque la costa colombiana rara vez los recibe de lleno.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Las cordilleras hacen que las distancias por tierra sean lentas: lo que en el mapa parece cerca puede ser un día de bus. Entre Bogotá, Medellín, Cartagena y Cali, el avión es lo más práctico y los vuelos internos son frecuentes.",
        "En las ciudades funcionan las aplicaciones de transporte. Bogotá tiene TransMilenio y Medellín, metro y metrocable.",
        "Para San Andrés y la Amazonía, solo avión.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande de América Latina: el celular guardado en la calle, atención en zonas concurridas, y taxis por aplicación o pedidos por el alojamiento antes que parar uno en la calle.",
        "El sol del Caribe y el de la altura queman más de lo que se siente. Protector siempre.",
        "Para la Amazonía y algunas zonas rurales suele recomendarse la vacuna contra la fiebre amarilla. Consultalo con tiempo, porque necesita días para hacer efecto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Diversidad de paisajes",
      score: 9.5,
      rationale:
        "Caribe, Andes, Pacífico, Amazonía y el Eje Cafetero en un solo país. Pocos tienen tanta variedad.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "El Caribe de Cartagena, el Tayrona y San Andrés. Agua cálida todo el año.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 9,
      rationale:
        "Bogotá, Medellín y Cali tienen vida propia, y la música está en todos lados: salsa, vallenato, cumbia.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Fruta tropical como en pocos lugares, café de origen y una cocina regional variada.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Rinde mucho para quien llega con divisa fuerte. Cartagena y San Andrés son más caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos internos frecuentes y buenas ciudades, pero por tierra las cordilleras hacen todo lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Un tipo de cambio que flota, sin mercado paralelo. Lo único que cuesta es acostumbrarse a los ceros.",
    },
  ],

  shines: [
    "Pasar de una capital andina fresca al Caribe en una hora de vuelo.",
    "La fruta, el café y la música, que están en todos lados y no son un programa especial.",
    "Ciudades con vida propia, no solo destinos turísticos.",
  ],

  costs: [
    "Las distancias por tierra, lentas por las cordilleras.",
    "Empacar para dos climas opuestos si combinás los Andes con la costa.",
    "Cartagena en temporada alta, cara y llena.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Bogotá no pide lo mismo que Cartagena. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "bogota",
      name: "Bogotá",
      region: "Andes",
      tag: "Capital a 2.600 metros",
      blurb:
        "Una capital enorme en una sabana andina, con museos de primer nivel, el barrio de La Candelaria y el cerro de Monserrate. Fresca todo el año. Es la base del planificador.",
      coords: [4.711, -74.0721],
      featured: true,
      image: null,
    },
    {
      id: "cartagena",
      name: "Cartagena",
      region: "Caribe",
      tag: "Ciudad amurallada",
      blurb:
        "La ciudad colonial amurallada sobre el Caribe, patrimonio de la UNESCO, con islas cerca para el día. Calor y humedad todo el año.",
      coords: [10.391, -75.4794],
      image: null,
    },
    {
      id: "medellin",
      name: "Medellín",
      region: "Andes",
      tag: "Eterna primavera",
      blurb:
        "Una ciudad en un valle con clima de primavera todo el año, metrocables que suben a los barrios y una de las vidas urbanas más intensas del continente.",
      coords: [6.2442, -75.5812],
      image: null,
    },
    {
      id: "salento",
      name: "Salento y el Eje Cafetero",
      region: "Eje Cafetero",
      tag: "Café y palmas de cera",
      blurb:
        "Un pueblo de casas de colores en la zona cafetera, a la entrada del valle de Cocora y sus palmas de cera gigantes. Fresco de noche y lluvioso.",
      coords: [4.6375, -75.5708],
      image: null,
    },
    {
      id: "santa-marta",
      name: "Santa Marta y el Tayrona",
      region: "Caribe",
      tag: "Sierra y playa",
      blurb:
        "La puerta al parque Tayrona, donde la selva baja hasta el mar, y a la Ciudad Perdida en la Sierra Nevada.",
      coords: [11.2408, -74.199],
      image: null,
    },
    {
      id: "san-andres",
      name: "San Andrés",
      region: "Caribe insular",
      tag: "Mar de siete colores",
      blurb:
        "Una isla en el Caribe más cerca de Nicaragua que del continente colombiano, con un mar de colores que sorprende aunque estés avisado.",
      coords: [12.5847, -81.7006],
      image: null,
    },
    {
      id: "cali",
      name: "Cali",
      region: "Valle del Cauca",
      tag: "Capital de la salsa",
      blurb:
        "La ciudad donde la salsa se baila todas las noches, con calor seco y un ritmo propio. Puerta al Pacífico colombiano.",
      coords: [3.4516, -76.532],
      image: null,
    },
    {
      id: "villa-de-leyva",
      name: "Villa de Leyva",
      region: "Andes",
      tag: "Plaza colonial",
      blurb:
        "Un pueblo colonial blanco con una de las plazas más grandes del continente, a tres horas de Bogotá. Días de sol y noches frescas.",
      coords: [5.6333, -73.525],
      image: null,
    },
    {
      id: "leticia",
      name: "Leticia",
      region: "Amazonía",
      tag: "Triple frontera",
      blurb:
        "En la selva, donde se tocan Colombia, Brasil y Perú. Solo se llega en avión, y desde ahí se sale por el río.",
      coords: [-4.2153, -69.9406],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Colombia la valija la decide la altura, no el mes. Para Bogotá, capas y una campera: días frescos y noches frías todo el año. Para Medellín, ropa liviana y algo de manga larga. Para el Caribe, ropa de playa y nada de abrigo. Si combinás los Andes con la costa, empacá para los dos climas, y llevá algo impermeable: en los Andes llueve dos temporadas por año.",
    keyPoints: [
      "No hay estaciones. La temperatura la define la altura, y casi no cambia entre meses.",
      "Bogotá es fresca todo el año y Cartagena caliente todo el año: un mismo viaje pide dos valijas en una.",
      "En los Andes hay dos temporadas de lluvia, de marzo a mayo y de septiembre a noviembre.",
      "El sol del Caribe y el de la altura queman más de lo que se siente.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y que seque rápido, traje de baño y protector. En el Caribe la humedad hace que se sienta más calor del que marca el termómetro.",
      templado:
        "Remera y algo de manga larga, con una campera liviana a mano. Es el clima de Medellín todo el año.",
      fresco:
        "Buzo o polar y campera impermeable. Es el clima de los días de Bogotá, con lluvia frecuente de tarde.",
      frio: "Una campera de abrigo para las noches de Bogotá y de los páramos de alta montaña.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "110-120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Empacá para dos climas",
          body: "Si combinás Bogotá con la costa, una campera para una y ropa de playa para la otra. Las capas ayudan a no cargar de más.",
        },
        {
          title: "Llevá algo impermeable para los Andes",
          body: "En las temporadas de lluvia llueve casi todas las tardes. Una campera liviana con capucha alcanza.",
        },
        {
          title: "Pedí que no te cobren el IVA en el hotel",
          body: "Los turistas extranjeros no suelen pagarlo en hoteles registrados. Pedilo al reservar y llevá la constancia de ingreso.",
        },
        {
          title: "Volá entre regiones",
          body: "Las cordilleras hacen que las rutas sean lentas. Un vuelo de una hora reemplaza un día de bus.",
        },
        {
          title: "Usá aplicaciones de transporte",
          body: "En las ciudades son la forma más simple y previsible de moverse.",
        },
        {
          title: "Protector solar en la altura y en el Caribe",
          body: "En Bogotá el sol quema aunque haga fresco, y en el Caribe aunque haya brisa.",
        },
      ],
      donts: [
        {
          title: "No vayas a Bogotá solo con ropa de verano",
          body: "Las noches bajan a menos de diez grados todo el año. Sin abrigo se pasa frío.",
        },
        {
          title: "No lleves abrigo pesado al Caribe",
          body: "En Cartagena no hay un mes que lo justifique. Ocupa lugar y no se usa.",
        },
        {
          title: "No muestres el celular en la calle",
          body: "Es el consejo local, no una precaución de extranjero. Usalo dentro de los lugares.",
        },
        {
          title: "No tomes agua de la canilla sin preguntar",
          body: "En Bogotá y Medellín suele ser potable, pero en la costa y en zonas rurales no. Preguntá en el alojamiento.",
        },
        {
          title: "No calcules las distancias por el mapa",
          body: "Por las cordilleras, trayectos cortos en el mapa pueden ser de muchas horas por tierra.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "dos-climas",
        title: "Ropa para dos climas",
        notice: {
          tone: "info",
          title: "La altura cambia todo",
          body: "Bogotá y Cartagena están a una hora de vuelo y no comparten una prenda. Si vas a las dos, empacá para las dos.",
        },
        summary: "Lo que cubre de los Andes al Caribe",
        items: [
          "Campera liviana impermeable",
          "Polar o buzo para Bogotá",
          "Ropa liviana de secado rápido para la costa",
          "Traje de baño y ojotas",
        ],
      },
      {
        id: "playa",
        title: "Caribe y sol",
        notice: {
          tone: "warn",
          title: "El sol del Caribe quema rápido",
          body: "Con brisa no se siente el calor y la quemadura llega igual. Repetí el protector después de cada baño.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Protector solar de factor alto",
          "Gorro y anteojos de sol",
          "Repelente para el atardecer",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Consultá las vacunas con tiempo",
          body: "Para la Amazonía, el Tayrona y algunas zonas rurales suele recomendarse la fiebre amarilla. Necesita días para hacer efecto.",
        },
        summary: "Botiquín básico y qué averiguar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Protector solar de factor alto y remera con protección UV",
          "Capas para Bogotá",
          "Repelente apto para chicos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado para la costa",
        why: "En el Caribe no hay un mes frío.",
        instead: "Solo una campera liviana para el aire acondicionado.",
      },
      {
        leave: "Solo ropa de verano para Bogotá",
        why: "Las noches son frías todo el año.",
        instead: "Polar y campera impermeable.",
      },
      {
        leave: "Jeans pesados para el Caribe",
        why: "Con esta humedad son incómodos y tardan en secar.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "El paraguas grande",
        why: "Con una campera con capucha alcanza para las lluvias de tarde.",
        instead: "Una campera liviana impermeable.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Se camina mucho y en las ciudades hay subidas.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Mucho efectivo encima",
        why: "Los cajeros están en todos lados y la tarjeta funciona en las ciudades.",
        instead: "Lo justo para el día.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en la calle conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 110-120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a marzo y en julio y agosto llueve menos en buena parte del país. Es también la temporada alta.",
      },
      {
        question: "¿Hace frío en Bogotá?",
        answer:
          "De día es fresco y de noche frío, todo el año. Polar y campera impermeable alcanzan.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "En ciudades y lugares turísticos, sí. Para mercados, buses y pueblos hace falta efectivo; los cajeros están en todos lados.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Bogotá y Medellín suele serlo. En la costa y en zonas rurales, mejor agua embotellada. Preguntá en el alojamiento.",
      },
      {
        question: "¿Me afecta la altura en Bogotá?",
        answer:
          "Bogotá está a 2.600 metros. Algunos sienten cansancio el primer día. Despacio y mucha agua.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para la Amazonía, el Tayrona y algunas zonas rurales suele recomendarse la fiebre amarilla. Consultalo con semanas de anticipación.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En avión. Las cordilleras hacen que las rutas sean lentas, y los vuelos internos son frecuentes.",
      },
    ],
  },
};
