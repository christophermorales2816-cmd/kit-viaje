import type { DestinationGuide } from "./types";

/**
 * Guía de Pakistán.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: el Karakórum, con cinco de las catorce montañas de
 * más de ocho mil metros, y un monzón que corta la ruta del norte con
 * derrumbes. Las ciudades del planificador son la capital, Lahore, Karachi y
 * el norte de montaña; ninguna está en Baluchistán ni en las zonas tribales.
 */
export const pakistan: DestinationGuide = {
  slug: "pakistan",
  country: "Pakistán",
  subregion: "Asia del Sur",
  subhead:
    "El Karakórum con el K2 y valles de fortalezas bajo picos de siete mil metros, la mezquita y el fuerte mogol de Lahore, ruinas budistas en Taxila y una de las hospitalidades más famosas del mundo.",

  image: null,

  highlights: [
    {
      value: "Monzón",
      label: "de julio a agosto, con derrumbes en la ruta del norte",
      note: "La ruta del Karakórum puede cortarse días enteros. Para la montaña, lo mejor es de mayo a junio y de septiembre a octubre.",
    },
    {
      value: "8.611 m",
      label: "el K2, la segunda montaña más alta del mundo",
      note: "En el Karakórum, al norte de Skardu. Pakistán tiene cinco de las catorce montañas de más de ocho mil metros.",
    },
    {
      value: "Hunza",
      label: "fortalezas y cerezos bajo picos de siete mil metros",
      note: "Un valle sobre la ruta del Karakórum, con fuertes antiguos, un lago turquesa y flores de cerezo en primavera.",
    },
    {
      value: "Badshahi",
      label: "la gran mezquita mogol de Lahore",
      note: "Una de las mezquitas más grandes del mundo, frente al fuerte de Lahore, que es patrimonio de la humanidad.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Pakistán",
      body: [
        "Muchos pasaportes tramitan la visa electrónica online, en el sitio oficial. Verificá el tuyo antes de comprar el pasaje.",
        "Algunas zonas cerca de las fronteras piden un permiso aparte. Ninguna de las ciudades del planificador lo necesita.",
        "El pasaporte tiene que tener vigencia de sobra. Llevá copias: en las rutas del norte hay controles que registran a los extranjeros.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Pakistán",
      body: [
        "La moneda es la rupia pakistaní. En Islamabad, Lahore y Karachi la tarjeta funciona en hoteles y restaurantes grandes.",
        "En el norte y en los mercados, efectivo. Hay cajeros en las ciudades; en la montaña, pocos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del mar a las montañas más altas",
      body: [
        "Pakistán es hemisferio norte. Lahore y la llanura tienen veranos de calor extremo, con más de cuarenta grados en junio, y monzón en julio y agosto.",
        "Islamabad, al pie de las montañas, es algo más fresca. Karachi, en la costa, es calurosa y húmeda casi todo el año.",
        "El norte, con Gilgit, Hunza y Skardu, es montaña seca: veranos templados e inviernos fríos. Fairy Meadows, a más de tres mil metros, está bajo cero buena parte del año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Para el norte, de mayo a octubre, evitando las semanas fuertes del monzón; en abril, los cerezos de Hunza.",
        "Para Lahore e Islamabad, de octubre a marzo. En Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Pakistán",
      body: [
        "Entre Islamabad, Lahore y Karachi hay vuelos internos, trenes y buses cómodos.",
        "Al norte se va por la ruta del Karakórum, en bus o con chofer, en uno o dos días, o en vuelos a Gilgit y Skardu que dependen del tiempo.",
        "En las ciudades hay taxis por app.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Pakistán, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son la capital, Lahore, Karachi y el norte de montaña. Ninguna está en Baluchistán ni en las zonas de frontera con Afganistán.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Lahore mogol, Taxila, fuertes del norte y la ruta de la seda.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale: "Karahi, biryani, nihari, kebabs y chai en todas partes.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "El Karakórum y el Himalaya: valles, glaciares y montañas de ocho mil metros.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale: "Karachi tiene costa, pero no es destino de playa.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Rutas de montaña lentas, controles y vuelos que dependen del tiempo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 4,
      rationale: "La rupia pierde valor contra el dólar.",
    },
  ],

  shines: [
    "Las montañas más espectaculares del mundo.",
    "La hospitalidad.",
    "Muy barato.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Rutas largas y cortes por el monzón.",
    "Vuelos al norte que dependen del tiempo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Lahore que Hunza o Fairy Meadows. Los precios están en rupias pakistaníes y son órdenes de magnitud.",

  places: [
    {
      id: "islamabad",
      name: "Islamabad",
      region: "Territorio de la Capital",
      tag: "La capital al pie de los Margalla",
      blurb:
        "La mezquita Faisal, las colinas de Margalla con senderos y miradores, y la vecina Rawalpindi con sus bazares. Es la base del planificador: inviernos templados, veranos calurosos con monzón.",
      coords: [33.6844, 73.0479],
      featured: true,
      image: null,
    },
    {
      id: "lahore",
      name: "Lahore",
      region: "Punyab",
      tag: "La ciudad mogol",
      blurb:
        "El fuerte y los jardines de Shalimar, patrimonio de la humanidad, la mezquita Badshahi, la ciudad amurallada y la comida callejera. Calor extremo en junio.",
      coords: [31.5204, 74.3587],
      image: null,
    },
    {
      id: "taxila",
      name: "Taxila",
      region: "Punyab",
      tag: "Ruinas budistas",
      blurb:
        "Ruinas de ciudades y monasterios budistas de la antigua Gandhara, patrimonio de la humanidad, a una hora de Islamabad.",
      coords: [33.7463, 72.8397],
      image: null,
    },
    {
      id: "murree",
      name: "Murree",
      region: "Punyab",
      tag: "El refugio de montaña",
      blurb:
        "Un pueblo de montaña a más de dos mil metros, con pinos, miradores y nieve en invierno, a un par de horas de Islamabad.",
      coords: [33.9062, 73.3903],
      image: null,
    },
    {
      id: "gilgit",
      name: "Gilgit",
      region: "Gilgit-Baltistán",
      tag: "La puerta del norte",
      blurb:
        "La ciudad base de las montañas del norte, sobre la ruta del Karakórum, con un bazar y aeropuerto. Veranos calurosos, inviernos fríos.",
      coords: [35.9221, 74.3087],
      image: null,
    },
    {
      id: "hunza",
      name: "Valle de Hunza (Karimabad)",
      region: "Gilgit-Baltistán",
      tag: "Fortalezas bajo los picos",
      blurb:
        "Los fuertes de Baltit y Altit, el lago Attabad, los conos de Passu y picos de más de siete mil metros. Cerezos en flor en abril; inviernos fríos.",
      coords: [36.3167, 74.6667],
      image: null,
    },
    {
      id: "skardu",
      name: "Skardu",
      region: "Gilgit-Baltistán",
      tag: "La puerta del K2",
      blurb:
        "Un valle ancho entre montañas, base para las planicies de Deosai y las expediciones al K2. Inviernos fríos y secos.",
      coords: [35.2971, 75.6333],
      image: null,
    },
    {
      id: "fairy-meadows",
      name: "Fairy Meadows (Nanga Parbat)",
      region: "Gilgit-Baltistán",
      tag: "La pradera frente al Nanga Parbat",
      blurb:
        "Una pradera a más de tres mil metros frente a la cara norte del Nanga Parbat, a la que se llega en todoterreno y a pie. Bajo cero buena parte del año.",
      coords: [35.4213, 74.5969],
      image: null,
    },
    {
      id: "karachi",
      name: "Karachi",
      region: "Sindh",
      tag: "La ciudad más grande",
      blurb:
        "La metrópolis del país sobre el mar de Arabia, con mercados, el mausoleo del fundador y una comida muy variada. Calurosa y húmeda casi todo el año.",
      coords: [24.8607, 67.0011],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Pakistán depende de la zona. Para Lahore e Islamabad, ropa liviana y holgada que cubra brazos y piernas, y un buzo en invierno. Para el norte, capas, campera de abrigo y calzado de trekking, y equipo de frío para Fairy Meadows. En el monzón, todo impermeable. Siempre, un pañuelo para las mujeres en mezquitas y copias del pasaporte.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Para el norte, de mayo a octubre; para Lahore, de octubre a marzo.",
      "Ropa holgada que cubra brazos y piernas, para todos.",
      "Copias del pasaporte para los controles del norte.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, protector y agua para Lahore y Karachi.",
      templado:
        "Ropa liviana de día y un buzo para la noche, que en el norte refresca rápido.",
      fresco:
        "Capas, un polar y una campera para Hunza, Skardu y Murree en primavera y otoño.",
      frio: "Campera de pluma, térmicas, gorro y guantes para Fairy Meadows y para el norte en invierno.",
    },
    plug: {
      types: "Tipo C y tipo D",
      voltage: "230 V, 50 Hz",
      note: "El tipo C es el de dos patas redondas finas; el D, de tres patas redondas gruesas. Un adaptador universal resuelve los dos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá copias del pasaporte",
          body: "En los controles del norte registran a los extranjeros, y una copia agiliza.",
        },
        {
          title: "Vestite como la gente",
          body: "El shalwar kameez, camisa larga y pantalón holgado, es cómodo, fresco y bien recibido.",
        },
        {
          title: "Dejá días de margen en el norte",
          body: "La ruta del Karakórum se corta con derrumbes, y los vuelos a Gilgit y Skardu dependen del tiempo.",
        },
        {
          title: "Probá el karahi",
          body: "Carne cocinada en una sartén honda al momento, con tomate y ají, en cualquier parrilla de ruta.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Brazos, piernas y, para las mujeres, el pelo. Sin zapatos adentro.",
        },
        {
          title: "No fotografíes controles ni instalaciones militares",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No subestimes la altura",
          body: "Fairy Meadows y los pasos del norte superan los tres mil metros: subí despacio.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Pakistán y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino y la montaña",
          "Visa electrónica impresa",
          "Copias del pasaporte y de la visa",
        ],
      },
      {
        id: "montana",
        title: "Para el norte",
        notice: {
          tone: "info",
          title: "Capas y margen",
          body: "Días templados, noches frías y rutas que se cortan. Abrigo y días libres en el itinerario.",
        },
        summary: "Lo que pide el Karakórum",
        items: [
          "Calzado de trekking ya usado",
          "Polar y campera de pluma",
          "Protector solar y anteojos de sol",
          "Efectivo para los pueblos",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverte cómodo",
        items: [
          "Ropa holgada que cubra brazos y piernas",
          "Un pañuelo o dupatta para las mujeres",
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
          "Lo que te indique tu médico para la altura",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Ropa corta o ajustada",
        why: "Fuera de los hoteles se cubren brazos y piernas.",
        instead: "Ropa holgada, o un shalwar kameez.",
      },
      {
        leave: "Un itinerario apretado en el norte",
        why: "La ruta y los vuelos se cortan con el clima.",
        instead: "Días de margen.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En el norte y los mercados se paga en efectivo.",
        instead: "Rupias en efectivo.",
      },
      {
        leave: "Solo ropa de verano para la montaña",
        why: "Las noches son frías aun en julio.",
        instead: "Un polar y una campera.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Pakistán y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Pakistán?",
        answer:
          "Sí: muchos pasaportes la tramitan online como visa electrónica. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Para el norte, de mayo a octubre; para Lahore e Islamabad, de octubre a marzo.",
      },
      {
        question: "¿Cómo llego a Hunza?",
        answer:
          "Por la ruta del Karakórum desde Islamabad, en uno o dos días, o volando a Gilgit y siguiendo por tierra.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Pakistán usa los tipos C y D a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer: "Sí, montos chicos en restaurantes y para choferes y guías.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada o filtrada.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Está muy restringido: casi no se consigue fuera de algunos hoteles con permiso.",
      },
    ],
  },
};
