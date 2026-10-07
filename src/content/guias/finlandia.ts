import type { DestinationGuide } from "./types";

/**
 * Guía de Finlandia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el invierno ártico en euros. Laponia —Rovaniemi,
 * Inari, Levi— pasa de noviembre a marzo con máximas bajo cero, y es un viaje
 * en sí mismo; el sur, con Helsinki, es otra valija. Y la sauna, que mete el
 * traje de baño en la lista también en enero.
 */
export const finlandia: DestinationGuide = {
  slug: "finlandia",
  country: "Finlandia",
  subregion: "Europa del Norte",
  subhead:
    "Helsinki sobre el mar, miles de lagos, saunas por todos lados y la Laponia ártica, con nieve segura y auroras. Del sur templado en verano al frío extremo del norte en invierno.",

  image: null,

  highlights: [
    {
      value: "188.000",
      label: "lagos",
      note: "Finlandia es el país de los lagos: en verano se nada, se rema y se va a la sauna junto al agua.",
    },
    {
      value: "−19 °C",
      label: "de mínima en Inari en enero",
      note: "En Laponia el invierno es ártico, con nieve segura de noviembre a abril. Helsinki es bastante más suave.",
    },
    {
      value: "3 millones",
      label: "de saunas",
      note: "Más de una cada dos habitantes. La sauna finlandesa es patrimonio cultural inmaterial de la humanidad, y se usa todo el año.",
    },
    {
      value: "Junio",
      label: "sol de medianoche en Laponia",
      note: "Y noche polar en diciembre. Antifaz en verano, linterna en invierno.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Finlandia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Finlandia, Suecia y Estonia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Finlandia",
      body: [
        "La moneda es el euro, y la tarjeta se acepta en todos lados, también sin contacto. El efectivo casi no hace falta.",
        "La propina no se espera: el servicio está incluido en el precio. Al mediodía, el buffet o el plato del día a precio cerrado es la comida que más rinde.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del sur templado al Ártico",
      body: [
        "Finlandia es hemisferio norte: enero es invierno y julio, verano. El sur, con Helsinki y Turku, tiene inviernos bajo cero y veranos templados con días larguísimos.",
        "Hacia el norte el invierno se vuelve ártico: Rovaniemi, sobre el círculo polar, e Inari y Levi, en Laponia, pasan de noviembre a marzo con máximas bajo cero y noches mucho más frías.",
        "Por encima del círculo polar hay sol de medianoche en junio y noche polar en diciembre. En verano, en los lagos y bosques, hay mosquitos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la temporada de Helsinki, los lagos y las islas, con días eternos. A fines de junio, el solsticio se celebra con fogatas y el país se va al campo.",
        "De diciembre a marzo es la temporada de Laponia: nieve, auroras, huskies y renos. Diciembre es el mes más lleno, por la Navidad.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Finlandia",
      body: [
        "Desde Helsinki sale un tren nocturno a Rovaniemi, y también hay vuelos a Laponia. Los trenes unen el sur con Turku, Tampere y la región de los lagos.",
        "En ferry, Tallin, en Estonia, queda a unas dos horas de Helsinki, y Estocolmo, a una noche de barco.",
        "El derecho a recorrer la naturaleza libremente viene con la obligación de no dejar rastro. Las precauciones en las ciudades son las de cualquier lugar concurrido.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Naturaleza y lagos",
      score: 9,
      rationale: "Lagos y bosques sin fin, archipiélagos y la Laponia ártica.",
    },
    {
      dimension: "Invierno ártico",
      score: 9.5,
      rationale:
        "Nieve segura, auroras, huskies y renos en Laponia de noviembre a abril.",
    },
    {
      dimension: "Sauna y bienestar",
      score: 10,
      rationale:
        "La sauna es parte de la vida, y hay saunas públicas junto al agua en todas partes.",
    },
    {
      dimension: "Ciudades y diseño",
      score: 8,
      rationale:
        "Helsinki es de diseño y de mar, con un archipiélago a minutos; Turku y Tampere, más tranquilas.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Más caro que el sur de Europa y más accesible que Noruega. Laponia en invierno es cara.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Buenos trenes, incluido uno nocturno a Laponia, y todo funciona.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en todos lados.",
    },
  ],

  shines: [
    "Laponia en invierno: nieve, auroras y renos.",
    "Lagos y saunas para todos.",
    "Todo funciona, y en euros.",
  ],

  costs: [
    "Inviernos largos, oscuros y muy fríos en el norte.",
    "Laponia en temporada alta es cara.",
    "Mosquitos en verano en lagos y bosques.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Inari en enero no pide lo mismo que Helsinki en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "helsinki",
      name: "Helsinki",
      region: "Sur",
      tag: "Capital de diseño",
      blurb:
        "Una capital de diseño sobre el mar, con una fortaleza en una isla, saunas públicas y mercados en el puerto. Es la base del planificador: inviernos bajo cero, veranos templados.",
      coords: [60.1699, 24.9384],
      featured: true,
      image: null,
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi",
      region: "Laponia",
      tag: "Círculo polar",
      blurb:
        "La puerta de Laponia, sobre el círculo polar, con la aldea de Papá Noel, huskies y auroras. Nieve segura de noviembre a abril.",
      coords: [66.5039, 25.7294],
      image: null,
    },
    {
      id: "turku",
      name: "Turku",
      region: "Sur",
      tag: "La ciudad más antigua",
      blurb:
        "La ciudad más antigua del país, con un castillo medieval, un río con barcos-restaurante y la puerta al archipiélago.",
      coords: [60.4518, 22.2666],
      image: null,
    },
    {
      id: "tampere",
      name: "Tampere",
      region: "Lagos",
      tag: "Entre dos lagos",
      blurb:
        "Una ciudad de fábricas de ladrillo rojo entre dos lagos, que se presenta como la capital mundial de la sauna.",
      coords: [61.4978, 23.761],
      image: null,
    },
    {
      id: "porvoo",
      name: "Porvoo",
      region: "Sur",
      tag: "Casas de madera",
      blurb:
        "Un pueblo de casas de madera de colores sobre el río, a una hora de Helsinki.",
      coords: [60.3923, 25.6651],
      image: null,
    },
    {
      id: "savonlinna",
      name: "Savonlinna y los lagos",
      region: "Lagos",
      tag: "Castillo en un lago",
      blurb:
        "Un castillo medieval en medio de un lago, con un festival de ópera en julio, en el corazón de la región de los lagos.",
      coords: [61.8687, 28.8784],
      image: null,
    },
    {
      id: "inari",
      name: "Inari",
      region: "Laponia",
      tag: "Cultura sami",
      blurb:
        "El corazón de la cultura sami, junto a un lago enorme, en el extremo norte. De lo más frío del país.",
      coords: [68.9066, 27.0298],
      image: null,
    },
    {
      id: "levi",
      name: "Levi",
      region: "Laponia",
      tag: "Esquí y auroras",
      blurb:
        "La estación de esquí más grande de Finlandia, con auroras y actividades en la nieve de noviembre a abril.",
      coords: [67.8053, 24.8095],
      image: null,
    },
    {
      id: "aland",
      name: "Islas Åland",
      region: "Islas",
      tag: "Archipiélago sueco",
      blurb:
        "Un archipiélago autónomo de miles de islas donde se habla sueco. En verano, bicicleta y botes.",
      coords: [60.0973, 19.9348],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Finlandia son dos valijas. El sur, con Helsinki, tiene inviernos bajo cero y veranos templados con días larguísimos; Laponia pasa de noviembre a marzo con máximas bajo cero y noches muchísimo más frías. En invierno, ropa térmica de lana, abrigo de nieve, gorro, guantes y botas; en verano, capas, una campera liviana, repelente para los mosquitos de los lagos y traje de baño para la sauna y el lago.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es templado y con días eternos; el invierno, largo y oscuro.",
      "En Laponia el invierno es ártico: nieve segura de noviembre a abril y temperaturas muy bajo cero.",
      "Por encima del círculo polar hay sol de medianoche en junio y noche polar en diciembre.",
      "La sauna se usa todo el año, y en las saunas públicas mixtas se usa traje de baño.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. Los días de calor son pocos, y en los lagos hay mosquitos: repelente.",
      templado:
        "Capas y una campera liviana. Es el verano finlandés: largo, luminoso y con algún chaparrón.",
      fresco: "Sweater o polar, campera impermeable y calzado que no se moje.",
      frio: "Ropa térmica de lana, abrigo de nieve, gorro, guantes y botas abrigadas. En Laponia el frío es seco y extremo: capas, y nada de algodón.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Probá una sauna pública",
          body: "Helsinki y Tampere tienen saunas públicas junto al agua. Después del calor, el chapuzón en el lago o en el mar es parte del ritual, también en invierno.",
        },
        {
          title: "Tomá el tren nocturno a Laponia",
          body: "Desde Helsinki sale un tren nocturno a Rovaniemi: te ahorra una noche de hotel y llegás al norte por la mañana.",
        },
        {
          title: "Reservá Laponia con tiempo",
          body: "En diciembre y en las vacaciones de invierno, los alojamientos y las excursiones de Rovaniemi y Levi se llenan.",
        },
        {
          title: "Almorzá el buffet del mediodía",
          body: "Muchos restaurantes ofrecen un buffet o un plato del día a precio cerrado. Es la comida que más rinde.",
        },
        {
          title: "Hacé una escapada a Tallin",
          body: "El ferry de Helsinki a Tallin, en Estonia, tarda unas dos horas. Es un paseo de un día.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el frío de Laponia",
          body: "Las noches de invierno bajan mucho de cero. Sin ropa térmica, las excursiones nocturnas son un sufrimiento.",
        },
        {
          title: "No vayas a los lagos en verano sin repelente",
          body: "En julio los mosquitos de los lagos y bosques son parte del paisaje.",
        },
        {
          title: "No olvides el antifaz en junio",
          body: "Con sol de medianoche en el norte y noches blancas en el sur, dormir sin oscuridad cuesta.",
        },
        {
          title: "No conviertas la sauna en un bar",
          body: "Es un lugar tranquilo: se conversa en voz baja, o no se conversa.",
        },
        {
          title: "No dejes rastro en la naturaleza",
          body: "El libre acceso a la naturaleza viene con la obligación de llevarte todo lo que trajiste.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Invierno en Laponia",
        notice: {
          tone: "warn",
          title: "En Laponia el frío es extremo",
          body: "En Inari y Levi las máximas quedan bajo cero de noviembre a marzo, y de noche baja mucho más. Para salir a ver auroras hace falta ropa de nieve de verdad.",
        },
        summary: "Si vas al norte de noviembre a marzo",
        items: [
          "Primera capa térmica de lana",
          "Abrigo de nieve y pantalón impermeable",
          "Gorro, guantes y cuello",
          "Botas abrigadas con buena suela",
          "Grampones para el calzado: las veredas se congelan",
        ],
      },
      {
        id: "sauna",
        title: "Sauna y lagos",
        notice: {
          tone: "info",
          title: "Todo el año",
          body: "La sauna se usa en invierno y en verano, y el chapuzón en el agua fría es parte del ritual. En las saunas públicas mixtas se usa traje de baño.",
        },
        summary: "Lo que va a la sauna",
        items: [
          "Traje de baño",
          "Ojotas",
          "Toalla de microfibra",
          "Repelente en verano, para los lagos",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío descarga rápido el teléfono",
          "Linterna frontal para los días cortos de invierno",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el resfrío",
          "Protector labial y crema para el frío seco",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Algodón como primera capa en invierno",
        why: "Retiene la humedad y enfría.",
        instead: "Primera capa de lana o sintética.",
      },
      {
        leave: "Zapatos de suela lisa en invierno",
        why: "Veredas congeladas en todo el país.",
        instead: "Botas con buena suela o grampones.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "Las noches refrescan, incluso en pleno verano.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en todos lados.",
        instead: "La tarjeta o el teléfono.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho, y para la sauna una de microfibra alcanza.",
        instead: "Una toalla de microfibra.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla es excelente.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Finlandia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuándo se ven las auroras boreales?",
        answer:
          "De septiembre a marzo en Laponia, con noche oscura y cielo despejado. Ninguna fecha las garantiza.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para Helsinki, los lagos y los días eternos; de diciembre a marzo para la nieve y las auroras en Laponia.",
      },
      {
        question: "¿Cómo es la sauna finlandesa?",
        answer:
          "Caliente y seca, con vapor que se hace echando agua sobre las piedras. Se alterna con un chapuzón en agua fría, y en las saunas públicas mixtas se usa traje de baño.",
      },
      {
        question: "¿Dónde está la aldea de Papá Noel?",
        answer:
          "En Rovaniemi, sobre el círculo polar. Abre todo el año, pero diciembre es temporada alta.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No se espera: el servicio está incluido en el precio. Redondear si te atendieron bien es un gesto.",
      },
    ],
  },
};
