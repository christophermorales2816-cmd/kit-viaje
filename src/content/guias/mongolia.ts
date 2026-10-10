import type { DestinationGuide } from "./types";

/**
 * Guía de Mongolia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el invierno más duro del sitio. El lago Khövsgöl
 * es la ciudad más fría del planificador y Ulán Bator, la capital más fría del
 * mundo, pasa enero con mínimas de veinticinco bajo cero. El verano es corto y
 * templado, y casi todo el viaje pasa fuera de las ciudades, en todoterreno y
 * durmiendo en gers.
 */
export const mongolia: DestinationGuide = {
  slug: "mongolia",
  country: "Mongolia",
  subregion: "Asia Oriental",
  subhead:
    "La estepa hasta el horizonte, dunas en el Gobi, un lago enorme en el norte, cazadores con águilas en el Altái y familias nómadas que reciben en su ger. Uno de los países menos poblados del mundo.",

  image: null,

  highlights: [
    {
      value: "−25 °C",
      label: "de mínima en Ulán Bator en enero",
      note: "La capital más fría del mundo. El verano, en cambio, es corto y templado, y es la temporada.",
    },
    {
      value: "Ger",
      label: "la carpa nómada, para dormir en la estepa",
      note: "Fieltro y madera alrededor de una estufa. Los campamentos de gers son el alojamiento habitual fuera de las ciudades.",
    },
    {
      value: "Naadam",
      label: "lucha, arquería y carreras de caballos en julio",
      note: "El gran festival nacional, a mediados de julio, en Ulán Bator y en cada pueblo.",
    },
    {
      value: "Takhi",
      label: "los últimos caballos salvajes, en Hustai",
      note: "El caballo de Przewalski desapareció de la naturaleza y volvió a la estepa desde zoológicos. Hoy se ve a un par de horas de la capital.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Mongolia",
      body: [
        "Algunos pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica online. Verificá el tuyo antes de comprar el pasaje.",
        "Se llega en avión a Ulán Bator, o en tren desde China o Rusia por el Transmongoliano.",
        "El pasaporte tiene que tener vigencia de sobra. Si te quedás mucho tiempo, puede hacer falta registrarse ante migraciones.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Mongolia",
      body: [
        "La moneda es el tugrik. En Ulán Bator la tarjeta funciona en hoteles, restaurantes y supermercados.",
        "En la estepa y los pueblos, efectivo. Los tours con chofer suelen pagarse por adelantado.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí tugriks: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un clima extremo",
      body: [
        "Mongolia es hemisferio norte, a más de mil metros y lejos de cualquier mar. Los inviernos son larguísimos: de noviembre a marzo las máximas están bajo cero en casi todo el país.",
        "El verano es corto y templado, de junio a agosto, con lluvia en julio y agosto. Las noches son frescas aun entonces.",
        "El Gobi, en el sur, es desierto: calor de día en verano y casi nada de lluvia. El lago Khövsgöl, en el norte, tiene el invierno más frío de todo el planificador.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la estepa verde, los campamentos de gers abiertos y el Naadam a mediados de julio.",
        "En octubre es el festival de las águilas en Ölgii. En invierno se viaja poco y con equipo de frío extremo, y el aire de Ulán Bator se carga del humo de las estufas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Mongolia",
      body: [
        "Hay pocas rutas asfaltadas. Fuera de la capital, lo habitual es un todoterreno con chofer y guía, durante varios días.",
        "Para distancias largas, como Ölgii o el Gobi, hay vuelos internos que dependen del tiempo.",
        "En Ulán Bator, el tránsito es lento; hay buses y taxis.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Karakórum y el monasterio de Erdene Zuu, el valle del Orkhon y la herencia de Gengis Kan.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale: "Buuz, khuushuur, cordero y lácteos; cocina simple y pesada.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Estepa, desierto, montañas y lagos en espacios enormes y vacíos.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "Mongolia no tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y dormir sale poco; el todoterreno con chofer es el gasto grande.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Pocas rutas asfaltadas, distancias enormes y vuelos que dependen del tiempo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El tugrik se mueve contra el dólar, sin grandes saltos recientes.",
    },
  ],

  shines: [
    "Espacios abiertos como en ningún otro lugar.",
    "La hospitalidad nómada.",
    "El Naadam y el festival de las águilas.",
  ],

  costs: [
    "El invierno más duro del planificador.",
    "Distancias enormes y rutas de tierra.",
    "Cocina limitada fuera de la capital.",
  ],

  dataScopeNote:
    "Elegís el lugar en el planificador y los cálculos se hacen con su clima: no es lo mismo Ulán Bator que el Gobi o el lago Khövsgöl. Los precios están en tugriks y son órdenes de magnitud.",

  places: [
    {
      id: "ulan-bator",
      name: "Ulán Bator",
      region: "Ulán Bator",
      tag: "La capital más fría del mundo",
      blurb:
        "El monasterio de Gandan, la plaza Sükhbaatar, el museo de Gengis Kan y barrios de gers en las colinas. Es la base del planificador: inviernos durísimos, veranos cortos y templados.",
      coords: [47.8864, 106.9057],
      featured: true,
      image: null,
    },
    {
      id: "terelj",
      name: "Parque Nacional Gorkhi-Terelj",
      region: "Töv",
      tag: "Rocas y gers cerca de la capital",
      blurb:
        "Valles con formaciones de roca como la Roca Tortuga, campamentos de gers y paseos a caballo, a pocas horas de Ulán Bator. Cerca, la gran estatua ecuestre de Gengis Kan.",
      coords: [47.9833, 107.45],
      image: null,
    },
    {
      id: "hustai",
      name: "Parque Nacional Hustai",
      region: "Töv",
      tag: "Los caballos salvajes",
      blurb:
        "La estepa donde volvió el caballo de Przewalski, el último caballo salvaje, que se ve al atardecer en las colinas.",
      coords: [47.7167, 105.8833],
      image: null,
    },
    {
      id: "karakorum",
      name: "Karakórum (Kharkhorin)",
      region: "Övörkhangai",
      tag: "La capital de Gengis Kan",
      blurb:
        "El sitio de la antigua capital del imperio mongol y el monasterio de Erdene Zuu, con sus muros de estupas blancas.",
      coords: [47.1975, 102.8239],
      image: null,
    },
    {
      id: "orkhon",
      name: "Valle del Orkhon",
      region: "Övörkhangai",
      tag: "Un valle patrimonio de la humanidad",
      blurb:
        "Un valle de pasturas con una cascada, ruinas y familias nómadas, patrimonio de la humanidad. Frío de noche aun en verano.",
      coords: [46.79, 101.97],
      image: null,
    },
    {
      id: "tsenkher",
      name: "Aguas termales de Tsenkher",
      region: "Arkhangai",
      tag: "Termas en la estepa",
      blurb:
        "Aguas termales entre colinas boscosas, con campamentos de gers y piletas al aire libre.",
      coords: [47.32, 101.65],
      image: null,
    },
    {
      id: "gobi",
      name: "Desierto del Gobi (Dalanzadgad)",
      region: "Ömnögovi",
      tag: "Dunas y dinosaurios",
      blurb:
        "Las dunas cantoras de Khongoryn Els, los acantilados de Bayanzag, donde se hallaron huevos de dinosaurio, y camellos de dos jorobas. Calor de día en verano, heladas en invierno.",
      coords: [43.5708, 104.4258],
      image: null,
    },
    {
      id: "khovsgol",
      name: "Lago Khövsgöl",
      region: "Khövsgöl",
      tag: "El lago azul del norte",
      blurb:
        "Un lago enorme de agua cristalina entre bosques y montañas, que guarda buena parte del agua dulce del país. El invierno más frío del planificador.",
      coords: [50.4333, 100.1667],
      image: null,
    },
    {
      id: "olgii",
      name: "Ölgii (Altái)",
      region: "Bayan-Ölgii",
      tag: "Los cazadores con águilas",
      blurb:
        "La capital de la provincia kazaja del extremo oeste, entre las montañas del Altái, con cazadores que entrenan águilas y su festival en octubre.",
      coords: [48.9683, 89.9625],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Mongolia pide capas siempre. En verano, ropa liviana de día, un polar y una campera para las noches frescas, y una impermeable para la lluvia de julio y agosto. Para el Gobi, protector y sombrero. En invierno, equipo de frío extremo: campera de pluma, térmicas, gorro, guantes y botas. Siempre, efectivo para la estepa y una bolsa de dormir para los campamentos.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de junio a septiembre.",
      "El invierno es extremo: Ulán Bator ronda los veinticinco bajo cero en enero.",
      "Fuera de la capital, todoterreno con chofer y gers.",
      "Las noches son frescas aun en pleno verano.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector para el Gobi en verano, y un abrigo para la noche, que refresca rápido.",
      templado:
        "Ropa liviana de día y un polar para la noche: es el verano de la estepa.",
      fresco:
        "Capas, un polar y una campera para las noches de verano y para septiembre en todo el país.",
      frio: "Campera de pluma, térmicas, gorro, guantes y botas para frío extremo: de noviembre a marzo hay mínimas de veinte a treinta bajo cero.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "Son enchufes de dos patas redondas, como en buena parte de Europa. En los campamentos de gers puede haber poca luz: una batería portátil ayuda. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Contratá chofer y guía",
          body: "Fuera de la capital no hay rutas señalizadas, y el guía hace de puente con las familias nómadas.",
        },
        {
          title: "Aceptá lo que te ofrecen en un ger",
          body: "Té con leche, queso seco o airag: se recibe con la mano derecha, y probar un poco alcanza.",
        },
        {
          title: "Planeá el Naadam con tiempo",
          body: "A mediados de julio la capital se llena: reservá con meses de anticipación.",
        },
        {
          title: "Llevá una bolsa de dormir",
          body: "Las noches en los campamentos de gers son frescas aun en verano.",
        },
        {
          title: "Llevá una batería portátil",
          body: "En la estepa hay pocos lugares donde cargar.",
        },
        {
          title: "Elegí pagar en tugriks",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No pises el umbral del ger",
          body: "Se pasa por encima, y adentro se camina en el sentido del reloj.",
        },
        {
          title: "No subestimes el invierno",
          body: "De noviembre a marzo el frío es extremo, con máximas bajo cero.",
        },
        {
          title: "No pongas vuelos internos con poco margen",
          body: "Dependen del tiempo, y las distancias por tierra son enormes.",
        },
        {
          title: "No tomes agua de ríos ni pozos",
          body: "Embotellada, hervida o filtrada.",
        },
        {
          title: "No señales con el pie ni lo apuntes a la estufa",
          body: "En el ger, el fuego y el altar se respetan.",
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
        title: "Documentos",
        notice: {
          tone: "warn",
          title: "Verificá la visa",
          body: "Algunos pasaportes entran sin visa y otros la tramitan online. Confirmalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "Pasaje de salida",
          "Seguro de viaje",
        ],
      },
      {
        id: "estepa",
        title: "Para la estepa",
        notice: {
          tone: "info",
          title: "Capas, aun en julio",
          body: "Los días pueden ser templados y las noches, frías. En los campamentos, la estufa del ger se apaga de madrugada.",
        },
        summary: "Lo que pide el viaje en todoterreno",
        items: [
          "Bolsa de dormir",
          "Polar y campera",
          "Campera impermeable",
          "Linterna frontal",
          "Toallitas húmedas",
        ],
      },
      {
        id: "invierno",
        title: "Para el invierno",
        notice: null,
        summary: "Lo que pide el frío extremo",
        items: [
          "Campera de pluma larga",
          "Térmicas de lana",
          "Gorro, guantes y cuello",
          "Botas para nieve",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Crema para el frío y protector labial",
          "Protector solar",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "Las noches de la estepa son frescas aun en julio.",
        instead: "Un polar y una campera.",
      },
      {
        leave: "Una valija con rueditas",
        why: "En el todoterreno y en la estepa no sirve.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de la capital se paga en efectivo.",
        instead: "Tugriks en efectivo.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las distancias son enormes y las rutas, de tierra.",
        instead: "Días de margen.",
      },
      {
        leave: "Una campera común para el invierno",
        why: "El frío es extremo.",
        instead: "Pluma larga y térmicas.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema, y en la estepa no hay dónde enchufarlo.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Mongolia?",
        answer:
          "Algunos pasaportes latinoamericanos entran sin visa por estadías cortas; otros la tramitan online. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre. El Naadam es a mediados de julio, y el festival de las águilas, en octubre.",
      },
      {
        question: "¿Cómo se recorre el país?",
        answer:
          "En todoterreno con chofer y guía, durante varios días, durmiendo en campamentos de gers. Para lo más lejos, vuelos internos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Mongolia usa los tipos C y E a 230 V, como buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es habitual dejar algo al chofer y al guía al final del viaje.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor no: embotellada, hervida o filtrada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Mongol, escrito con el alfabeto cirílico. En la capital, algo de inglés; en la estepa, casi nada.",
      },
      {
        question: "¿Se puede ir en invierno?",
        answer:
          "Sí, con equipo de frío extremo y viajes cortos. Muchos campamentos cierran y las rutas se complican.",
      },
    ],
  },
};
