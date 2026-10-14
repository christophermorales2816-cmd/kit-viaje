import type { DestinationGuide } from "./types";

/**
 * Guía de las Islas Marshall.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer país dolarizado de Oceanía —usa el dólar
 * estadounidense, como Ecuador, y entra con `dolarizado` en los corredores
 * (spec, 16.3)— y el primero del planificador que pide el comprobante de la
 * vacuna contra el sarampión. Los enchufes son de 120 V, como en Liberia.
 * Kwajalein, base militar de Estados Unidos, y Bikini, que no se visita por
 * cuenta propia, no están entre las ciudades.
 */
export const islasMarshall: DestinationGuide = {
  slug: "islas-marshall",
  country: "Islas Marshall",
  subregion: "Micronesia",
  subhead:
    "Atolones de arena y palmeras, la laguna de Majuro, las bases japonesas de Maloelap y Mili, las casas de madera de Likiep y las cartas de navegación de palitos del museo Alele.",

  image: null,

  highlights: [
    {
      value: "2 m",
      label: "de altura media sobre el mar, en atolones de coral",
      note: "Veintinueve atolones y cinco islas, casi todo a un par de metros sobre el mar. Majuro, la capital, es una franja de tierra de pocos metros de ancho entre la laguna y el océano.",
    },
    {
      value: "Bikini",
      label: "el atolón de las pruebas nucleares, patrimonio de la humanidad",
      note: "Estados Unidos probó bombas atómicas en Bikini entre 1946 y 1958, y hundió una flota entera en su laguna. Hoy es patrimonio de la humanidad, pero no se visita por cuenta propia.",
    },
    {
      value: "Cartas",
      label: "de navegación hechas de palitos y conchas",
      note: "Los navegantes marshaleses las usaban para entender cómo se curvan las olas alrededor de las islas. Se ven en el museo Alele, en Majuro.",
    },
    {
      value: "Aviones",
      label: "japoneses entre las palmeras de Maloelap y Mili",
      note: "En los atolones de afuera quedaron bases japonesas de la Segunda Guerra, con aviones, cañones y búnkeres que la vegetación va cubriendo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a las Islas Marshall",
      body: [
        "Según el pasaporte, se entra sin visa, con una visa que se da al llegar o con una que se tramita antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Las Marshall piden comprobante de la vacuna contra el sarampión, desde los seis meses de edad: sin él, la aerolínea puede no dejarte embarcar. Verificá a quién se lo piden antes de viajar.",
        "El pasaporte tiene que tener al menos seis meses de vigencia, y en la frontera piden el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en las Islas Marshall",
      body: [
        "La moneda es el dólar estadounidense, como en Ecuador. En Majuro, los hoteles, algunos restaurantes y los supermercados aceptan tarjeta; en los atolones de afuera, todo se paga en efectivo.",
        "Hay cajeros en Majuro; en los atolones de afuera, ninguno.",
        "Llevá billetes chicos: en los atolones nadie tiene cambio.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, y lluvia según el atolón",
      body: [
        "Calor húmedo y parejo todo el año: las máximas rondan los treinta grados y las mínimas, los veinticinco.",
        "Los atolones del sur, como Majuro, llueven casi todo el año; los del norte, como Wotje y Likiep, tienen una temporada seca de enero a abril.",
        "De diciembre a abril los alisios soplan más fuerte, y el mar se pone más movido.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril: llueve menos, sobre todo en el norte, aunque el viento es más fuerte.",
        "El 1 de mayo es el día de la constitución, con fiestas y desfiles en Majuro.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por las Islas Marshall",
      body: [
        "Majuro tiene una sola ruta, de unos cincuenta kilómetros, entre el centro y Laura, con taxis compartidos que paran a pedido.",
        "A los atolones de afuera se va en vuelo interno, con pocos vuelos por semana, o en barco, que tarda días.",
        "Se maneja por la derecha, como en Estados Unidos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La navegación tradicional, las bases japonesas y las pruebas nucleares de Bikini.",
    },
    {
      dimension: "Gastronomía",
      score: 3,
      rationale: "Pescado, fruta del pan, coco y comida importada.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Atolones y lagunas, con poca tierra y mucho mar.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Islotes de arena blanca en la laguna de Majuro y en Arno.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Alojamiento sencillo y caro para lo que ofrece.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Pocos vuelos internos, barcos que tardan días y efectivo fuera de Majuro.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Usa el dólar estadounidense.",
    },
  ],

  shines: [
    "Atolones casi sin turistas.",
    "Restos de la Segunda Guerra, en tierra y bajo el agua.",
    "La cultura de los navegantes.",
  ],

  costs: [
    "Pocos vuelos, y caros.",
    "Sin barco o avioneta, poco para recorrer.",
    "El comprobante del sarampión para entrar.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Majuro en febrero que Wotje o Likiep, más secos. Los precios están en dólares y son órdenes de magnitud; en los atolones de afuera casi no hay alojamiento.",

  places: [
    {
      id: "majuro",
      name: "Majuro",
      region: "Atolón de Majuro",
      tag: "La capital",
      blurb:
        "La capital, una franja de tierra de pocos metros de ancho entre la laguna y el océano, con el museo Alele, el parlamento y una ruta que llega hasta Laura. Es la base del planificador: calor parejo todo el año, con lluvias en todos los meses.",
      coords: [7.09, 171.38],
      featured: true,
      image: null,
    },
    {
      id: "laura",
      name: "Laura (la punta oeste del atolón)",
      region: "Atolón de Majuro",
      tag: "La playa de Majuro",
      blurb:
        "El extremo oeste del atolón, con la playa más linda de Majuro, huertas y casas entre las palmeras.",
      coords: [7.15, 171.04],
      image: null,
    },
    {
      id: "eneko",
      name: "Isla Eneko",
      region: "Atolón de Majuro",
      tag: "La isla de la laguna",
      blurb:
        "Un islote de arena y palmeras en la laguna de Majuro, con cabañas sencillas, snorkel y casi nadie, a un rato de lancha.",
      coords: [7.13, 171.35],
      image: null,
    },
    {
      id: "arno",
      name: "Arno",
      region: "Arno",
      tag: "El atolón vecino",
      blurb:
        "El atolón vecino de Majuro, a un rato de lancha, con pueblos tradicionales, playas vacías y pesca.",
      coords: [7.08, 171.7],
      image: null,
    },
    {
      id: "mili",
      name: "Mili (restos de la guerra)",
      region: "Mili",
      tag: "La base japonesa",
      blurb:
        "Un atolón con una base japonesa de la Segunda Guerra, con aviones, cañones y búnkeres entre las palmeras.",
      coords: [6.08, 171.73],
      image: null,
    },
    {
      id: "jaluit",
      name: "Jaluit",
      region: "Jaluit",
      tag: "La antigua capital",
      blurb:
        "La capital de las épocas alemana y japonesa, con restos de la guerra, un área de conservación marina y pueblos tranquilos.",
      coords: [5.92, 169.64],
      image: null,
    },
    {
      id: "wotje",
      name: "Wotje",
      region: "Wotje",
      tag: "El norte seco",
      blurb:
        "Un atolón del norte, más seco, con restos de una base japonesa y una laguna grande.",
      coords: [9.45, 170.24],
      image: null,
    },
    {
      id: "likiep",
      name: "Likiep",
      region: "Likiep",
      tag: "Las casas de madera",
      blurb:
        "Un atolón del norte con casas de madera de fines del siglo XIX, de los comerciantes que se casaron en las islas, y el punto más alto del país.",
      coords: [9.82, 169.3],
      image: null,
    },
    {
      id: "maloelap",
      name: "Maloelap (Taroa)",
      region: "Maloelap",
      tag: "Los aviones de Taroa",
      blurb:
        "El atolón de Taroa, con una de las bases japonesas mejor conservadas del Pacífico: aviones, cañones y búnkeres entre las palmeras.",
      coords: [8.71, 171.23],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para las Marshall, ropa liviana y fresca, traje de baño, protector, sombrero y repelente: hace calor parejo todo el año y llueve seguido. El comprobante de la vacuna del sarampión, dólares en billetes chicos para los atolones y ropa que tape hombros y muslos fuera de la playa.",
    keyPoints: [
      "Según el pasaporte, sin visa, con visa al llegar o con visa previa: verificá el tuyo.",
      "Piden comprobante de la vacuna contra el sarampión.",
      "Usan el dólar estadounidense, como Ecuador.",
      "A los atolones de afuera se va en vuelos internos poco frecuentes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo fino para el avión y las lanchas.",
      fresco: "Un buzo liviano para las noches de viento y las lanchas.",
      frio: "No hace frío en las Marshall: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de patas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V; casi todos los modernos lo dicen. En los atolones de afuera, la luz es solar o de generador.",
    },
    tips: {
      dos: [
        {
          title: "Llevá el comprobante del sarampión",
          body: "La vacuna, en el certificado internacional o en el carné: sin él, la aerolínea puede no dejarte embarcar.",
        },
        {
          title: "Andá al museo Alele",
          body: "Para ver las cartas de navegación de palitos y la historia de las islas.",
        },
        {
          title: "Pasá una noche en un islote",
          body: "En Eneko o en Arno, con snorkel y nadie alrededor.",
        },
        {
          title: "Llevá billetes chicos",
          body: "En los atolones nadie tiene cambio.",
        },
        {
          title: "Buceá en los restos de la guerra",
          body: "En Maloelap, Mili y Jaluit hay aviones y barcos bajo el agua.",
        },
        {
          title: "Usá protector que no dañe el coral",
          body: "Y una remera de lycra: cerca del ecuador, el sol quema rápido.",
        },
      ],
      donts: [
        {
          title: "No andes en traje de baño fuera de la playa",
          body: "En los pueblos, las mujeres se tapan los muslos, aun para nadar.",
        },
        {
          title: "No cuentes con la tarjeta fuera de Majuro",
          body: "En los atolones de afuera, todo se paga en efectivo.",
        },
        {
          title: "No vayas a Bikini por tu cuenta",
          body: "No se visita sin permiso y sin una excursión organizada.",
        },
        {
          title: "No te lleves nada de los restos de la guerra",
          body: "Los aviones, los cañones y lo que haya alrededor son patrimonio.",
        },
        {
          title: "No dejes basura",
          body: "En un atolón no hay dónde ponerla: lo que traés, te lo llevás.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Sarampión y visa",
          body: "Las Marshall piden comprobante de la vacuna contra el sarampión, y según el pasaporte, visa al llegar o tramitada antes.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Comprobante de la vacuna contra el sarampión",
          "La visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "atolones",
        title: "Para los atolones de afuera",
        notice: {
          tone: "info",
          title: "Sin cajeros",
          body: "Fuera de Majuro no hay cajeros ni se aceptan tarjetas: llevá dólares en billetes chicos.",
        },
        summary: "Lo que no se consigue allá",
        items: [
          "Dólares en billetes chicos",
          "Una linterna y una batería externa",
          "Una botella para cargar agua",
          "Calzado para el agua",
        ],
      },
      {
        id: "sol",
        title: "Para el sol y el mar",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "Cerca del ecuador y con poca sombra, el sol quema en minutos: protector alto, sombrero y una remera de lycra.",
        },
        summary: "Lagunas, islotes y snorkel",
        items: [
          "Protector solar que no dañe el arrecife",
          "Sombrero y lentes de sol",
          "Traje de baño y una remera de lycra",
          "Máscara y snorkel",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Atención básica",
          body: "La atención médica es básica, y hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y para todo el viaje",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin el comprobante del sarampión",
        why: "La aerolínea puede no dejarte embarcar.",
        instead: "El certificado de la vacuna, en el bolso de mano.",
      },
      {
        leave: "Billetes grandes",
        why: "En los atolones nadie tiene cambio.",
        instead: "Billetes chicos de dólar.",
      },
      {
        leave: "Ropa corta para los pueblos",
        why: "Las mujeres se tapan los muslos, aun para nadar.",
        instead: "Shorts largos o un pareo.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Los vuelos internos son pocos y cambian.",
        instead: "Días libres antes de la conexión internacional.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "La planchita o el secador de 220 V",
        why: "A 120 V calientan poco o no andan, y muchos hoteles tienen secador.",
        instead: "El del alojamiento, o uno que diga 100-240 V.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a las Islas Marshall?",
        answer:
          "Depende del pasaporte: algunos entran sin visa, otros la reciben al llegar y otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué vacunas piden?",
        answer:
          "El comprobante de la vacuna contra el sarampión, desde los seis meses de edad. Verificá a quién se lo piden antes de viajar.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar estadounidense, como en Ecuador. Llevá billetes chicos.",
      },
      {
        question: "¿Se puede visitar Bikini?",
        answer:
          "No por cuenta propia: hace falta permiso, y las salidas de buceo organizadas son muy de vez en cuando.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De diciembre a abril llueve menos, sobre todo en el norte.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El marshalés y el inglés, que se entiende en Majuro.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu país usa enchufes de patas redondas o en V, sí: en las Marshall son de patas planas, a 120 V, como en Estados Unidos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada.",
      },
    ],
  },
};
