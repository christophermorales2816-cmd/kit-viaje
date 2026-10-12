import type { DestinationGuide } from "./types";

/**
 * Guía de Kenia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el ecuador sin calor. Nairobi está a 1.700 metros y
 * tiene noches frescas todo el año, así que el dato que más cambia la valija es
 * el que va en la portada. No hay invierno ni verano sino dos temporadas de
 * lluvia, que el bucket de lluvia (spec, 14.12) marca en Nairobi en abril, mayo
 * y noviembre.
 * La entrada pide una autorización electrónica antes de embarcar, y la salud,
 * pensar en la malaria y en la fiebre amarilla con semanas de anticipación.
 * Las zonas de frontera con Somalia se nombran como dato de entrada, y ninguna
 * ciudad del planificador está ahí.
 */
export const kenia: DestinationGuide = {
  slug: "kenia",
  country: "Kenia",
  subregion: "África Oriental",
  subhead:
    "Safaris en el Maasai Mara y Amboseli, el Kilimanjaro de fondo, los lagos del Valle del Rift y las playas del Índico en Diani y Watamu. Sobre el ecuador, pero con noches frescas.",

  image: null,

  highlights: [
    {
      value: "11 °C",
      label: "de mínima en Nairobi en julio",
      note: "Está sobre el ecuador pero a 1.700 metros: los días son templados y las noches, frescas todo el año. Un buzo va en la valija.",
    },
    {
      value: "Gran Migración",
      label: "en el Maasai Mara, de julio a octubre",
      note: "Más de un millón de ñus y cebras llegan desde el Serengeti y cruzan los ríos, donde los esperan los cocodrilos.",
    },
    {
      value: "eTA",
      label: "obligatoria antes de embarcar",
      note: "Casi todos los visitantes necesitan una autorización electrónica, que se tramita en el sitio oficial con días de anticipación. No se saca al llegar.",
    },
    {
      value: "Índico",
      label: "playas de arena blanca en Diani y Watamu",
      note: "La costa tiene arrecifes, palmeras y agua tibia todo el año, a una hora de vuelo de Nairobi.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Kenia",
      body: [
        "Casi todos los visitantes necesitan una autorización electrónica de viaje, la eTA, que se tramita antes en el sitio oficial (etakenya.go.ke). Hacela con al menos una semana de anticipación y desconfiá de los sitios que cobran de más por el mismo trámite.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación. Para los safaris, además, suele recomendarse vacunarse igual.",
        "Las zonas de frontera con Somalia no forman parte de un viaje habitual, y ninguna ciudad del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Kenia",
      body: [
        "La moneda es el chelín keniano. La tarjeta funciona en hoteles, lodges y restaurantes; en el resto, efectivo o M-Pesa, el pago por celular que usa todo el país.",
        "Las entradas a los parques y muchos safaris se cotizan en dólares. Si llevás dólares, que sean billetes nuevos y sanos: los viejos o dañados se rechazan.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí chelines: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "El ecuador, sin calor",
      body: [
        "Kenia está sobre el ecuador, así que no hay invierno ni verano: hay dos temporadas de lluvia. Las largas van de marzo a mayo; las cortas, de octubre a diciembre.",
        "Lo que cambia la valija es la altura. Nairobi y los lagos del Valle del Rift tienen días templados y noches frescas todo el año; en Nanyuki, al pie del monte Kenia, las noches de julio bajan de diez grados.",
        "La costa —Mombasa, Diani, Watamu— es calurosa y húmeda los doce meses, con la lluvia más fuerte en mayo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a octubre: temporada seca, la mejor para los safaris. En el Maasai Mara, la Gran Migración llega de julio a octubre.",
        "Enero y febrero son otra temporada seca, más calurosa y con menos gente. En abril y mayo llueve mucho, y algunos lodges cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Kenia",
      body: [
        "Para los parques, safari organizado, con chofer y guía, o vuelos en avioneta a las pistas de los lodges. Entre Nairobi y Mombasa hay un tren rápido y vuelos.",
        "En Nairobi, aplicaciones como Uber y Bolt y, de noche, siempre en auto. Los matatus, las combis colectivas, son baratos pero confusos para el que llega.",
        "Las precauciones son las de una ciudad grande: el teléfono guardado en la calle y nada de joyas a la vista. Se maneja por la izquierda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Fort Jesus en Mombasa y las ruinas suajilis de Gede, cerca de Watamu. Lo de Kenia es la vida salvaje.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Nyama choma, ugali, chapati y la cocina suajili de la costa.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "La sabana del Mara, el Kilimanjaro desde Amboseli y los lagos del Valle del Rift.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Arena blanca y agua tibia en Diani y Watamu.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Los safaris y las entradas a los parques son caros; comer y moverse, barato.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Safaris bien organizados y vuelos internos; por ruta, todo es lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "El chelín es estable, y los parques se cotizan en dólares.",
    },
  ],

  shines: [
    "Los safaris del Maasai Mara y la Gran Migración.",
    "Safari y playa en el mismo viaje.",
    "Un clima templado en Nairobi todo el año.",
  ],

  costs: [
    "Safaris y entradas a los parques caros.",
    "Lluvias fuertes en abril y mayo.",
    "Distancias que por ruta se hacen lentas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Nairobi en julio que el Maasai Mara o Mombasa. Los precios están en chelines kenianos y son órdenes de magnitud; un lodge en los parques puede costar varias veces más.",

  places: [
    {
      id: "nairobi",
      name: "Nairobi",
      region: "Nairobi",
      tag: "La capital del safari",
      blurb:
        "Un parque nacional con jirafas y rinocerontes frente a los edificios, el orfanato de elefantes y el centro de las jirafas. Es la base del planificador: días templados y noches frescas todo el año.",
      coords: [-1.2921, 36.8219],
      featured: true,
      image: null,
    },
    {
      id: "maasai-mara",
      name: "Maasai Mara",
      region: "Narok",
      tag: "La Gran Migración",
      blurb:
        "Una de las sabanas más famosas de África, con leones, leopardos y, de julio a octubre, la Gran Migración. Lodges y campamentos de lona.",
      coords: [-1.4906, 35.1439],
      image: null,
    },
    {
      id: "amboseli",
      name: "Amboseli",
      region: "Kajiado",
      tag: "Elefantes y el Kilimanjaro",
      blurb:
        "Manadas de elefantes con el Kilimanjaro de fondo, del otro lado de la frontera con Tanzania. Seco la mayor parte del año.",
      coords: [-2.6527, 37.2606],
      image: null,
    },
    {
      id: "lago-naivasha",
      name: "Lago Naivasha",
      region: "Nakuru",
      tag: "Hipopótamos y bicicleta",
      blurb:
        "Un lago con hipopótamos, la isla Crescent, que se camina entre jirafas, y el parque de Hell's Gate, que se recorre en bicicleta.",
      coords: [-0.7667, 36.4333],
      image: null,
    },
    {
      id: "lago-nakuru",
      name: "Lago Nakuru",
      region: "Nakuru",
      tag: "Rinocerontes y flamencos",
      blurb:
        "Un parque cercado con rinocerontes blancos y negros, y flamencos cuando el nivel del lago lo permite.",
      coords: [-0.3667, 36.0833],
      image: null,
    },
    {
      id: "nanyuki",
      name: "Nanyuki (monte Kenia)",
      region: "Laikipia",
      tag: "Sobre el ecuador",
      blurb:
        "Un pueblo sobre la línea del ecuador, al pie del monte Kenia, y la reserva de Ol Pejeta, con chimpancés y rinocerontes. Noches frías todo el año.",
      coords: [0.0167, 37.0667],
      image: null,
    },
    {
      id: "mombasa",
      name: "Mombasa",
      region: "Mombasa",
      tag: "Fort Jesus y la ciudad vieja",
      blurb:
        "La ciudad vieja suajili, el fuerte portugués, patrimonio de la humanidad, y playas al norte y al sur. Calor húmedo todo el año.",
      coords: [-4.0435, 39.6682],
      image: null,
    },
    {
      id: "diani",
      name: "Diani",
      region: "Kwale",
      tag: "Playa",
      blurb:
        "Arena blanca, arrecifes, kitesurf y monos colobos en los árboles. La lluvia más fuerte cae en mayo.",
      coords: [-4.2797, 39.5947],
      image: null,
    },
    {
      id: "watamu",
      name: "Watamu",
      region: "Kilifi",
      tag: "Parque marino",
      blurb:
        "Un parque nacional marino con tortugas y corales, y las ruinas suajilis de Gede entre los árboles.",
      coords: [-3.354, 40.0244],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Kenia está sobre el ecuador, pero no siempre hace calor. Para Nairobi y los safaris, ropa liviana de colores neutros para el día y un buzo o una campera para la mañana y la noche: los safaris salen al amanecer. Para la costa, ropa fresca, traje de baño y protector. En las temporadas de lluvia, de marzo a mayo y de octubre a diciembre, algo impermeable. Todo el año, repelente y un adaptador para el enchufe británico.",
    keyPoints: [
      "Sobre el ecuador pero en altura: noches frescas en Nairobi y en los parques todo el año.",
      "Dos temporadas de lluvia: de marzo a mayo y de octubre a diciembre.",
      "La eTA se tramita antes de embarcar; no se saca al llegar.",
      "Malaria y fiebre amarilla: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. En la costa, traje de baño; en los parques, colores neutros.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el clima de Nairobi y de los parques casi todo el año.",
      fresco:
        "Capas: un buzo abrigado y una campera para las salidas del amanecer, que en el vehículo abierto son frías.",
      frio: "Campera de abrigo para la noche y la madrugada en Nanyuki y en los lodges de altura.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "Tres patas rectangulares: es el enchufe británico. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la eTA en el sitio oficial",
          body: "Con al menos una semana de anticipación. Los sitios que se parecen al oficial cobran de más.",
        },
        {
          title: "Elegí la temporada seca para el safari",
          body: "De junio a octubre los animales se ven mejor; la migración llega al Mara de julio a octubre.",
        },
        {
          title: "Llevá binoculares",
          body: "Hacen la diferencia en un safari, sobre todo con los pájaros.",
        },
        {
          title: "Combiná safari y playa",
          body: "Los vuelos internos unen los parques con Diani y Watamu en poco tiempo.",
        },
        {
          title: "Usá M-Pesa",
          body: "El pago por celular funciona en todo el país; con una línea local, se activa con el pasaporte.",
        },
        {
          title: "Elegí pagar en chelines",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin la eTA",
          body: "No se tramita al llegar: sin ella no te dejan embarcar.",
        },
        {
          title: "No uses ropa azul oscura o negra en el safari",
          body: "Atrae a las moscas tse-tsé en algunos parques.",
        },
        {
          title: "No bajes del vehículo en los parques",
          body: "Salvo donde el guía lo permita: los animales son salvajes.",
        },
        {
          title: "No camines de noche por Nairobi",
          body: "Moverse en auto o con aplicación es la costumbre de todos.",
        },
        {
          title: "No lleves bolsas de plástico",
          body: "Están prohibidas en el país, también en el equipaje.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Madrugadas y polvo",
          body: "Los safaris salen al amanecer en vehículos abiertos: hace frío temprano y calor al mediodía.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Buzo o campera para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Un pañuelo para el polvo",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "La eTA, antes de embarcar",
          body: "Sin la autorización electrónica no te dejan subir al avión. Si venís de un país con riesgo de fiebre amarilla, llevá también el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La eTA aprobada, impresa o en el teléfono",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en casi todo el país, sobre todo en la costa y en las zonas bajas; Nairobi y las tierras altas tienen poco riesgo. Consultá con un médico de viajes la profilaxis, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "costa",
        title: "Para la costa",
        notice: null,
        summary: "Playa y arrecifes",
        items: [
          "Traje de baño",
          "Protector solar",
          "Calzado para el agua",
          "Algo para cubrirse fuera de la playa",
        ],
      },
    ],
    avoid: [
      {
        leave: "Bolsas de plástico",
        why: "Están prohibidas en Kenia, también las que van en la valija.",
        instead: "Bolsas de tela o de red.",
      },
      {
        leave: "Ropa azul oscura o negra para el safari",
        why: "Atrae a las moscas tse-tsé.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Nairobi y los parques tienen noches frescas todo el año.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Una valija rígida para las avionetas",
        why: "Los vuelos a los parques piden bolsos blandos y con poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en parques, lodges y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Kenia?",
        answer:
          "Casi todos los visitantes necesitan la eTA, una autorización electrónica que se tramita antes en el sitio oficial. No se saca al llegar.",
      },
      {
        question: "¿Cuál es la mejor época para un safari?",
        answer:
          "De junio a octubre, la temporada seca. La Gran Migración llega al Maasai Mara de julio a octubre.",
      },
      {
        question: "¿Hace frío en Kenia?",
        answer:
          "En Nairobi y en los parques, las noches y las madrugadas son frescas todo el año. La costa es calurosa.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Si venís de un país con riesgo, te pueden pedir el certificado al entrar; además, para los safaris suele recomendarse. Consultalo con semanas de anticipación.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en casi todo el país, sobre todo en la costa y en las zonas bajas. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Es el británico, tipo G, a 240 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí: a guías y choferes de safari, al personal de los lodges y algo en restaurantes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada; los lodges suelen darla.",
      },
    ],
  },
};
