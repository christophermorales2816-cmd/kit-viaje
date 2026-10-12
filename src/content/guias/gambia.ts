import type { DestinationGuide } from "./types";

/**
 * Guía de Gambia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el sol del invierno. De noviembre a mayo no llueve
 * en la costa —el bucket de lluvia (spec, 14.12) se activa de julio a
 * septiembre y nada más—, y es el dato de su portada. Gambia es el río: una
 * franja a sus dos lados, metida dentro de Senegal, y río arriba el calor es
 * otro, con abril pasando los cuarenta grados en Janjanbureh.
 * La base es Kololi y no Banjul, la capital, como Grand Baie en Mauricio: es
 * donde se aloja casi todo el que viaja.
 */
export const gambia: DestinationGuide = {
  slug: "gambia",
  country: "Gambia",
  subregion: "África Occidental",
  subhead:
    "Playas de arena dorada en la costa, el río Gambia en piragua entre manglares y aves, la isla de Kunta Kinteh y los círculos de piedra de Wassu. El país más chico de África continental.",

  image: null,

  highlights: [
    {
      value: "Sol",
      label: "de noviembre a mayo, sin una gota de lluvia",
      note: "En la costa no llueve en siete meses seguidos, con días de más de treinta grados y noches templadas. Es la temporada de los europeos que escapan del invierno.",
    },
    {
      value: "Río Gambia",
      label: "el país entero sigue su curso",
      note: "Gambia es una franja angosta a los dos lados del río, metida dentro de Senegal. Se navega en piragua entre manglares, monos y cientos de especies de aves.",
    },
    {
      value: "+40 °C",
      label: "en Janjanbureh en abril, río arriba",
      note: "Tierra adentro el calor es otro: la costa ronda los treinta y tres grados, y el interior pasa los cuarenta antes de las lluvias.",
    },
    {
      value: "Kunta Kinteh",
      label: "la isla de «Raíces»",
      note: "La antigua isla de James, un puesto de la trata de esclavos, es patrimonio de la humanidad. El pueblo de Juffureh, enfrente, es el de la novela de Alex Haley.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Gambia",
      body: [
        "Según el pasaporte, se entra sin visa o con una visa que se tramita antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Se puede llegar por tierra desde Senegal, que rodea al país: hay pasos de frontera en la costa y un puente sobre el río en Farafenni. Revisá antes si tu pasaporte necesita visa para los dos.",
        "La fiebre amarilla circula en la región: la vacuna se recomienda, y el certificado te lo pueden pedir al entrar —si venís de un país con riesgo— o en tu próximo destino.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Gambia",
      body: [
        "La moneda es el dalasi. La tarjeta funciona en los hoteles grandes y en algunos restaurantes de la costa; en el resto, efectivo. Hay cajeros en Kololi, Serrekunda y Banjul.",
        "Las excursiones y algunos hoteles se cotizan en euros o en libras. Si llevás billetes para cambiar, que sean nuevos y sanos, y cambialos en bancos o casas de cambio.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dalasis: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Dos estaciones",
      body: [
        "Gambia tiene el clima de Senegal: de noviembre a junio es seco, y de julio a octubre llueve, sobre todo en agosto.",
        "En la costa, el invierno es templado y con brisa del Atlántico: los días de enero rondan los treinta grados y las noches, los diecisiete.",
        "Tierra adentro, río arriba, el calor es otro: en abril, Janjanbureh pasa los cuarenta grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a mayo: temporada seca y temporada alta, con sol todos los días. De noviembre a marzo llegan las aves migratorias, y es la mejor época para el río.",
        "De julio a octubre llueve, hay más mosquitos y más calor húmedo, y muchos hoteles bajan los precios o cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Gambia",
      body: [
        "En la costa hay taxis turísticos, verdes, con tarifas fijas entre los hoteles y los lugares de visita, y taxis amarillos, más baratos, que se arreglan antes de subir. Los gele-geles, combis colectivas, recorren las rutas principales.",
        "Para el interior, excursiones en piragua por el río o un auto con chofer: las rutas a lo largo del río son lentas.",
        "Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La isla de Kunta Kinteh y los círculos de piedra de Wassu, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Benachin, domoda —el guiso de maní—, yassa y el pescado del día.",
    },
    {
      dimension: "Paisaje",
      score: 5,
      rationale: "El río, los manglares y las playas, en un país casi chato.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Arena dorada y palmeras a lo largo de la costa; el Atlántico es más movido que transparente.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y moverse es barato; los hoteles de la costa, razonables.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Un país chico, en inglés, donde casi todo queda cerca de la costa.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El dalasi pierde valor de a poco.",
    },
  ],

  shines: [
    "Sol seguro de noviembre a mayo.",
    "Aves: más de quinientas especies en un país chico.",
    "El río y la historia de «Raíces».",
  ],

  costs: [
    "Calor fuerte río arriba en abril y mayo.",
    "Vendedores insistentes en las playas.",
    "Lluvias y mosquitos de julio a octubre.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Kololi en enero que Janjanbureh en abril. Los precios están en dalasis y son órdenes de magnitud; un hotel de playa o un ecolodge pueden costar varias veces más.",

  places: [
    {
      id: "kololi",
      name: "Kololi (Senegambia)",
      region: "Costa",
      tag: "La franja turística",
      blurb:
        "La franja turística de la costa, con hoteles, bares y la reserva de monos de Bijilo al lado. Es la base del planificador: sol de noviembre a mayo y lluvias de julio a septiembre.",
      coords: [13.45, -16.7167],
      featured: true,
      image: null,
    },
    {
      id: "banjul",
      name: "Banjul",
      region: "Costa",
      tag: "La capital",
      blurb:
        "Una capital chica sobre una isla en la boca del río, con el mercado Albert, el Arco 22 y el ferry a Barra.",
      coords: [13.4549, -16.579],
      image: null,
    },
    {
      id: "bakau",
      name: "Bakau (Kachikally)",
      region: "Costa",
      tag: "Cocodrilos sagrados",
      blurb:
        "Un pueblo de pescadores con la poza sagrada de Kachikally, donde los cocodrilos se dejan tocar, y un jardín botánico.",
      coords: [13.4781, -16.6819],
      image: null,
    },
    {
      id: "brufut",
      name: "Brufut y Tanji",
      region: "Costa",
      tag: "Pescadores",
      blurb:
        "Playas largas al sur de Kololi, y Tanji, el puerto de pescadores adonde llegan las piraguas al atardecer.",
      coords: [13.3833, -16.75],
      image: null,
    },
    {
      id: "kartong",
      name: "Kartong",
      region: "Costa sur",
      tag: "Al lado de Senegal",
      blurb:
        "El pueblo más al sur de la costa, junto al río que hace de frontera con Senegal, con un observatorio de aves y playas casi vacías.",
      coords: [13.0939, -16.7556],
      image: null,
    },
    {
      id: "sanyang",
      name: "Sanyang",
      region: "Costa sur",
      tag: "Playa de palmeras",
      blurb:
        "Una playa larga con palmeras, piraguas de pescadores y bares de playa, a media hora de Kololi.",
      coords: [13.2667, -16.7833],
      image: null,
    },
    {
      id: "makasutu",
      name: "Makasutu (bosque cultural)",
      region: "Interior",
      tag: "Bosque y manglares",
      blurb:
        "Un bosque cultural sobre un brazo del río, con paseos en piragua entre manglares y un ecolodge. Más caluroso que la costa.",
      coords: [13.2167, -16.6333],
      image: null,
    },
    {
      id: "tendaba",
      name: "Tendaba (Kiang West)",
      region: "Interior",
      tag: "Manglares y aves",
      blurb:
        "Un campamento sobre el río, puerta del parque Kiang West y de los manglares de Bao Bolong, con muchísimas aves. En abril, el mediodía pasa los treinta y ocho grados.",
      coords: [13.4333, -15.8],
      image: null,
    },
    {
      id: "janjanbureh",
      name: "Janjanbureh (isla McCarthy)",
      region: "Interior",
      tag: "Río arriba",
      blurb:
        "Una isla en el río, con casas coloniales, chimpancés en las islas del parque cercano y los círculos de piedra de Wassu. En abril pasa los cuarenta grados.",
      coords: [13.5333, -14.7667],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Gambia, ropa liviana y fresca, traje de baño, sombrero y protector: hace calor todo el año. De diciembre a febrero, un buzo para las noches; de julio a octubre, algo impermeable y repelente de sobra. Todo el año, un adaptador para el enchufe británico.",
    keyPoints: [
      "Seco y soleado de noviembre a mayo; lluvias de julio a octubre.",
      "Río arriba, el calor pasa los cuarenta grados en abril.",
      "La visa depende del pasaporte: verificá el tuyo.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente. Algo impermeable de julio a octubre.",
      templado:
        "Ropa liviana para el día y un buzo para la noche: es el invierno de la costa.",
      fresco:
        "Un buzo y una campera liviana para las noches de enero, sobre todo río arriba.",
      frio: "No hace frío en Gambia: un buzo alcanza para las noches más frescas.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Tres patas rectangulares: es el enchufe británico. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes fuera de los hoteles grandes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Hacé un paseo en piragua",
          body: "Por los manglares de Makasutu o por el río, temprano a la mañana, con un guía que conozca las aves.",
        },
        {
          title: "Llevá binoculares",
          body: "Gambia tiene más de quinientas especies de aves, y muchas se ven desde el hotel.",
        },
        {
          title: "Usá los taxis turísticos",
          body: "Los verdes tienen tarifas fijas entre los hoteles y los lugares de visita, y evitan discusiones.",
        },
        {
          title: "Andá río arriba en los meses frescos",
          body: "De noviembre a febrero, antes de que el calor del interior pase los cuarenta grados.",
        },
        {
          title: "Probá la domoda",
          body: "El guiso de maní con arroz es el plato de todos los días.",
        },
        {
          title: "Elegí pagar en dalasis",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te metas al mar con bandera roja",
          body: "El Atlántico tiene corrientes fuertes en varias playas.",
        },
        {
          title: "No te bañes en el río",
          body: "Hay cocodrilos, hipopótamos y bilharzia.",
        },
        {
          title: "No aceptes guías improvisados en la playa",
          body: "Ofrecen de todo y después cobran caro: un «no, gracias» firme alcanza.",
        },
        {
          title: "No saques fotos de la gente sin preguntar",
          body: "Muchos no quieren, y algunos piden algo a cambio.",
        },
        {
          title: "No muestres de más fuera de la playa",
          body: "En los pueblos y en los mercados se usa ropa que cubra hombros y rodillas: es un país musulmán.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Para la playa",
        notice: {
          tone: "info",
          title: "Sol fuerte, también en invierno",
          body: "Los días de enero rondan los treinta grados: el sol quema aunque haya brisa.",
        },
        summary: "Sol y Atlántico",
        items: [
          "Traje de baño",
          "Protector solar alto",
          "Sombrero y lentes de sol",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "rio",
        title: "Para el río",
        notice: null,
        summary: "Piraguas, manglares y aves",
        items: [
          "Binoculares",
          "Repelente",
          "Sombrero y agua",
          "Calzado que se pueda mojar",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa según el pasaporte",
          body: "Según el pasaporte, se entra sin visa o con una visa tramitada antes. Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa, si tu pasaporte la necesita",
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
          body: "Hay malaria en todo el país, con más riesgo de julio a octubre. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
    ],
    avoid: [
      {
        leave: "Ropa muy corta o escotada",
        why: "Fuera de la playa llama la atención en un país musulmán.",
        instead: "Ropa liviana que cubra hombros y rodillas.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los taxis casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Solo ropa de verano",
        why: "De diciembre a febrero, las noches de la costa y del interior son frescas.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Sandalias para el río",
        why: "Las piraguas y las orillas tienen barro y raíces.",
        instead: "Calzado que se pueda mojar.",
      },
      {
        leave: "Bolsas de plástico",
        why: "Están prohibidas en el país.",
        instead: "Bolsas de tela.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Gambia?",
        answer:
          "Depende del pasaporte: algunos entran sin visa y otros la tramitan antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a mayo, la temporada seca, con sol todos los días. De noviembre a marzo, además, llegan las aves migratorias.",
      },
      {
        question: "¿Hace calor en invierno?",
        answer:
          "En la costa, los días de enero rondan los treinta grados y las noches, los diecisiete. Río arriba, el calor de abril pasa los cuarenta.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial; en la calle se habla mandinga, wolof y otros idiomas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Es el británico, tipo G, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se puede combinar con Senegal?",
        answer:
          "Sí: Senegal rodea al país y se cruza por tierra. Revisá antes si tu pasaporte necesita visa para los dos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor tomar embotellada o filtrada.",
      },
    ],
  },
};
