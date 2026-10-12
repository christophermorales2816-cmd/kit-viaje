import type { DestinationGuide } from "./types";

/**
 * Guía de Comoras.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un archipiélago de tres islas, con barcos y vuelos
 * cortos entre ellas, y la visa al llegar, en efectivo. El dato de su portada
 * son las tortugas de Mohéli, que desovan todo el año. Mayotte, la cuarta isla
 * del archipiélago, la administra Francia y queda afuera, como la Guayana
 * Francesa en Sudamérica (spec, 15.2): la guía lo dice como dato de entrada.
 * La cumbre del Karthala es el único lugar frío del país, y por eso el consejo
 * del bucket frío no es de relleno.
 */
export const comoras: DestinationGuide = {
  slug: "comoras",
  country: "Comoras",
  subregion: "África Oriental",
  subhead:
    "Tres islas volcánicas en el océano Índico: el Karthala humeante sobre Moroni, las medinas de Anjouán, el parque marino de Mohéli con tortugas y ballenas, y el perfume del ylang-ylang.",

  image: null,

  highlights: [
    {
      value: "Tortugas",
      label: "verdes que desovan todo el año en Mohéli",
      note: "En Itsamia, en la costa de Mohéli, las tortugas verdes salen a desovar casi todas las noches del año. Se ven con guías del pueblo, sin luz y en silencio.",
    },
    {
      value: "Karthala",
      label: "uno de los volcanes activos más grandes del mundo",
      note: "Domina Gran Comora, con un cráter enorme en la cumbre, a más de dos mil trescientos metros. Se sube en dos días, con guía, y arriba las noches son frías.",
    },
    {
      value: "Ylang-ylang",
      label: "la flor de los perfumes, en todas las islas",
      note: "Las Comoras están entre los mayores productores del mundo de esta esencia, y en Anjouán se visitan las destilerías.",
    },
    {
      value: "Visa",
      label: "al llegar, en el aeropuerto de Moroni",
      note: "Casi todos los pasaportes la sacan al aterrizar, pagando en efectivo. Verificá el tuyo antes de viajar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Comoras",
      body: [
        "Casi todos los pasaportes sacan la visa al llegar al aeropuerto de Moroni, pagando en efectivo. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
        "Mayotte, la cuarta isla del archipiélago, la administra Francia, con otras reglas de entrada y otra moneda: no forma parte del planificador.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Comoras",
      body: [
        "La moneda es el franco comorense, atado al euro.",
        "Casi todo se paga en efectivo: hay pocos cajeros, casi todos en Moroni y en Mutsamudu, y no siempre aceptan tarjetas extranjeras. Los euros se cambian fácil, y muchos los aceptan directamente.",
        "La tarjeta funciona en pocos hoteles. Si una terminal te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico del hemisferio sur",
      body: [
        "Calor húmedo todo el año. La temporada de lluvias va de noviembre a abril, con el calor más fuerte y la posibilidad de ciclones; de mayo a octubre es más seca y algo más fresca.",
        "En la costa, las máximas van de veintiséis a treinta grados, y las noches no bajan de diecinueve.",
        "En la cumbre del Karthala, a más de dos mil metros, las noches de julio rondan los siete grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada más seca y fresca, la mejor para subir al Karthala y para el mar.",
        "Las tortugas desovan en Mohéli todo el año, y las ballenas jorobadas pasan entre julio y octubre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Comoras",
      body: [
        "Entre las islas se va en avioneta o en barco. Los horarios cambian seguido, y con mal tiempo los barcos no salen.",
        "En cada isla hay taxis colectivos que dan la vuelta por la ruta de la costa, y autos con chofer para las excursiones.",
        "Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Las medinas de Mutsamudu e Iconi, y una cultura que mezcla lo suajili, lo árabe y lo francés.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Pescado, langosta, mataba —hojas de mandioca con coco— y especias.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Volcanes, selva y playas de arena negra y blanca.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Playas en Gran Comora y en Mohéli, con buen snorkel.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer es barato; dormir bien y moverse entre islas, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Barcos y vuelos entre islas poco previsibles, y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco comorense está atado al euro.",
    },
  ],

  shines: [
    "Tortugas y ballenas en Mohéli.",
    "El Karthala.",
    "Islas casi sin turistas.",
  ],

  costs: [
    "Moverse entre islas.",
    "Lluvias y ciclones de noviembre a abril.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Moroni en enero que la cumbre del Karthala o Mohéli. Los precios están en francos comorenses y son órdenes de magnitud; los barcos y los vuelos entre islas cuestan bastante más.",

  places: [
    {
      id: "moroni",
      name: "Moroni",
      region: "Gran Comora",
      tag: "La capital",
      blurb:
        "Una capital chica sobre el mar, con la vieja medina, el puerto de los dhows y la antigua mezquita del viernes frente al agua. Es la base del planificador: calor húmedo todo el año, con lluvias de diciembre a abril.",
      coords: [-11.7042, 43.2402],
      featured: true,
      image: null,
    },
    {
      id: "mitsamiouli",
      name: "Mitsamiouli (playas del norte)",
      region: "Gran Comora",
      tag: "Playas del norte",
      blurb:
        "Las playas de arena blanca del norte de la isla, con el lago Salé, un cráter con agua de mar, cerca.",
      coords: [-11.3847, 43.2844],
      image: null,
    },
    {
      id: "karthala",
      name: "Volcán Karthala (cumbre)",
      region: "Gran Comora",
      tag: "El volcán",
      blurb:
        "La cumbre de uno de los volcanes activos más grandes del mundo, a la que se sube en dos días por la selva. Arriba hace frío de noche: en julio, cerca de siete grados.",
      coords: [-11.75, 43.38],
      image: null,
    },
    {
      id: "iconi",
      name: "Iconi (la antigua capital)",
      region: "Gran Comora",
      tag: "La antigua capital",
      blurb:
        "La primera capital de la isla, al sur de Moroni, con mezquitas antiguas y restos de su muralla, sobre un viejo cráter junto al mar.",
      coords: [-11.75, 43.24],
      image: null,
    },
    {
      id: "mutsamudu",
      name: "Mutsamudu (Anjouán)",
      region: "Anjouán",
      tag: "La medina",
      blurb:
        "La capital de Anjouán, con una medina de callejones, la ciudadela sobre el puerto y montañas verdes alrededor.",
      coords: [-12.1675, 44.3994],
      image: null,
    },
    {
      id: "moya",
      name: "Moya (playas de Anjouán)",
      region: "Anjouán",
      tag: "Playas",
      blurb:
        "Una playa en el sur de Anjouán, entre acantilados y palmeras, con el mejor mar de la isla.",
      coords: [-12.3053, 44.4392],
      image: null,
    },
    {
      id: "fomboni",
      name: "Fomboni (Mohéli)",
      region: "Mohéli",
      tag: "La isla tranquila",
      blurb:
        "La capital de Mohéli, la isla más chica y tranquila, puerta del parque marino.",
      coords: [-12.28, 43.7425],
      image: null,
    },
    {
      id: "nioumachoua",
      name: "Nioumachoua (parque marino de Mohéli)",
      region: "Mohéli",
      tag: "Parque marino",
      blurb:
        "Un pueblo frente a los islotes del parque marino, con snorkel, buceo, tortugas y, de julio a octubre, ballenas jorobadas.",
      coords: [-12.36, 43.72],
      image: null,
    },
    {
      id: "itsamia",
      name: "Itsamia (tortugas marinas)",
      region: "Mohéli",
      tag: "Tortugas",
      blurb:
        "La playa donde las tortugas verdes desovan casi todas las noches del año, con guías del pueblo.",
      coords: [-12.35, 43.87],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Comoras, ropa liviana y fresca, traje de baño, sombrero y protector: hace calor húmedo todo el año. De noviembre a abril, algo impermeable. Para el Karthala, abrigo de verdad. Ropa que cubra hombros y rodillas para los pueblos, y euros en efectivo.",
    keyPoints: [
      "Visa al llegar al aeropuerto de Moroni para casi todos, pagada en efectivo.",
      "Temporada más seca y fresca de mayo a octubre; lluvias y ciclones de noviembre a abril.",
      "Un país musulmán: ropa que cubra hombros y rodillas fuera de la playa.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para las noches de mayo a octubre.",
      fresco: "Un buzo y una campera para la subida al Karthala.",
      frio: "Para la cumbre del Karthala de noche: abrigo, gorro y bolsa de dormir de montaña.",
    },
    plug: {
      types: "Tipos C y E",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en Francia. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá euros en efectivo",
          body: "Para la visa, los hoteles y el día a día: hay pocos cajeros.",
        },
        {
          title: "Mirá las tortugas en Itsamia",
          body: "De noche, con guía del pueblo, sin luz y en silencio.",
        },
        {
          title: "Subí al Karthala con guía",
          body: "Son dos días, con una noche en la montaña: llevá abrigo.",
        },
        {
          title: "Vestite con ropa que cubra hombros y rodillas",
          body: "Fuera de la playa, es la costumbre en todo el país.",
        },
        {
          title: "Dejá margen entre islas",
          body: "Los barcos y los vuelos cambian de horario o se suspenden.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No uses traje de baño fuera de la playa",
          body: "En los pueblos y en las ciudades se viste con recato.",
        },
        {
          title: "No comas ni bebas en la calle durante el Ramadán",
          body: "De día, en el mes de ayuno, es una falta de respeto.",
        },
        {
          title: "No toques las tortugas ni uses flash",
          body: "En Itsamia, el guía marca la distancia.",
        },
        {
          title: "No subas al Karthala sin guía",
          body: "Los senderos se pierden en la selva, y arriba no hay agua.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de militares o del aeropuerto.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "mar",
        title: "Para el mar",
        notice: null,
        summary: "Playas, snorkel y tortugas",
        items: [
          "Traje de baño y una remera de lycra",
          "Máscara y snorkel propios",
          "Protector solar que no dañe el arrecife",
          "Ojotas o zapatillas de agua",
        ],
      },
      {
        id: "karthala",
        title: "Para el Karthala",
        notice: {
          tone: "info",
          title: "Frío arriba",
          body: "En la cumbre, a más de dos mil metros, las noches pueden bajar de los ocho grados, aunque abajo haga calor.",
        },
        summary: "Dos días de subida",
        items: [
          "Calzado de trekking",
          "Abrigo, gorro y guantes livianos",
          "Bolsa de dormir de montaña",
          "Agua para todo el recorrido",
          "Linterna frontal",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa al llegar, en efectivo",
          body: "Casi todos los pasaportes sacan la visa en el aeropuerto de Moroni, pagando en efectivo: llevá euros.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Efectivo para la visa",
          "Pasaje de salida del país",
          "Reserva de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa corta para la ciudad",
        why: "En un país musulmán, hombros y rodillas se cubren fuera de la playa.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta, y hay pocos cajeros.",
        instead: "Euros en efectivo.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los taxis casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Un itinerario apretado entre islas",
        why: "Los barcos y los vuelos cambian de horario o se suspenden.",
        instead: "Días de margen.",
      },
      {
        leave: "Ropa solo de verano para el Karthala",
        why: "En la cumbre, las noches son frías.",
        instead: "Abrigo de montaña.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Comoras?",
        answer:
          "Casi todos los pasaportes la sacan al llegar al aeropuerto de Moroni, pagando en efectivo. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Mayotte está en el planificador?",
        answer:
          "No: Mayotte, la cuarta isla del archipiélago, la administra Francia, con otras reglas de entrada y otra moneda.",
      },
      {
        question: "¿Cómo se va de una isla a otra?",
        answer:
          "En avioneta o en barco. Los horarios cambian seguido: dejá días de margen.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De mayo a octubre, la temporada más seca y fresca.",
      },
      {
        question: "¿Dónde se ven las tortugas?",
        answer:
          "En Itsamia, en Mohéli, casi todas las noches del año, con guías del pueblo.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El comorense, pariente del suajili; el francés y el árabe son también oficiales.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
