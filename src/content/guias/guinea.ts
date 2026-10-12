import type { DestinationGuide } from "./types";

/**
 * Guía de Guinea.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos climas en un mismo viaje. La costa tiene una de
 * las temporadas de lluvia más fuertes del mundo, y la meseta del Futa Yalón
 * es fresca de noche en la temporada seca: once grados en Dalaba y Mali en
 * diciembre y enero, el dato de su portada. Mali, el pueblo de la meseta, no
 * es el país vecino, y la guía lo aclara en las preguntas frecuentes.
 */
export const guinea: DestinationGuide = {
  slug: "guinea",
  country: "Guinea",
  subregion: "África Occidental",
  subhead:
    "La meseta del Futa Yalón, con cañones, cascadas y pueblos peúl para caminar varios días, las islas de Los frente a Conakri y noches frescas en la temporada seca.",

  image: null,

  highlights: [
    {
      value: "11 °C",
      label: "de mínima en el Futa Yalón en diciembre y enero",
      note: "La meseta, entre mil y mil quinientos metros, refresca de noche en la temporada seca: un buzo y una campera liviana, aunque en Conakri haga treinta grados.",
    },
    {
      value: "Cascadas",
      label: "por todo el Futa Yalón: el Velo de la Novia, Kinkon y Ditinn",
      note: "La meseta es tierra de caminatas entre cañones, puentes de piedra y pueblos peúl, con guías locales que arman recorridos de varios días.",
    },
    {
      value: "Islas de Los",
      label: "playas a media hora en lancha de Conakri",
      note: "Kassa y Roume, frente a la capital, con playas, pueblos de pescadores y escapadas de fin de semana.",
    },
    {
      value: "Lluvia",
      label: "casi todos los días de julio y agosto en la costa",
      note: "Conakri recibe una de las lluvias más fuertes del mundo, casi toda de junio a septiembre. De noviembre a abril, en cambio, casi no llueve.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Guinea",
      body: [
        "Casi todos los pasaportes de fuera de África Occidental necesitan visa: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Guinea pide el certificado internacional de vacunación contra la fiebre amarilla al llegar. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Guinea",
      body: [
        "La moneda es el franco guineano, que se maneja en billetes de muchos ceros.",
        "Casi todo se paga en efectivo: hay cajeros en Conakri y en algunas ciudades, pero no siempre aceptan tarjetas extranjeras. Los euros y los dólares en billetes nuevos se cambian en bancos y casas de cambio.",
        "La tarjeta funciona en pocos hoteles grandes de Conakri. Si una terminal te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Mucha lluvia en la costa, fresco en la meseta",
      body: [
        "Calor húmedo en la costa, con una de las temporadas de lluvia más fuertes del mundo, de junio a septiembre: en Conakri, julio y agosto llueven casi todos los días.",
        "De noviembre a abril es la temporada seca, con el harmattan de diciembre a febrero, que trae polvo y cielos blancos.",
        "El Futa Yalón, entre mil y mil quinientos metros, es más fresco: en diciembre y enero, las noches de Dalaba y de Mali rondan los once grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a abril: la temporada seca, la mejor para caminar el Futa Yalón y para las islas.",
        "Las cascadas tienen más agua al final de las lluvias, en octubre y noviembre, cuando los caminos ya se pueden andar.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Guinea",
      body: [
        "En Conakri hay taxis compartidos y motos taxi; el tránsito es pesado, y conviene contar con tiempo.",
        "Al Futa Yalón se va por ruta, en taxi colectivo o en auto con chofer: de Conakri a Dalaba hay varias horas de viaje. Entre los pueblos de la meseta, los caminos son de tierra.",
        "En las rutas hay controles: llevá el pasaporte. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "La historia del Futa Yalón peúl y su capital, Labé, y la Conakri colonial.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Arroz con salsas de maní o de hojas, fonio y el pescado de la costa.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "La meseta del Futa Yalón, con cañones y cascadas, y las islas frente a Conakri.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale: "Las islas de Los y alguna playa cerca de la capital.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer y moverse es barato; los hoteles de Conakri, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Rutas largas, caminos de tierra en la meseta y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "El franco guineano pierde valor con los años: conviene cambiar de a poco.",
    },
  ],

  shines: [
    "Caminatas y cascadas del Futa Yalón.",
    "Noches frescas en la meseta.",
    "Un país casi sin turistas.",
  ],

  costs: [
    "Lluvias muy fuertes de junio a septiembre.",
    "Rutas largas y de tierra.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Conakri en agosto que Dalaba o Mali en enero. Los precios están en francos guineanos y son órdenes de magnitud; los hoteles de Conakri y los guías de varios días cuestan bastante más.",

  places: [
    {
      id: "conakri",
      name: "Conakri",
      region: "Conakri",
      tag: "La capital",
      blurb:
        "Una capital larga sobre una península, con el Museo Nacional, el mercado de Madina, la gran mezquita y música en vivo. Es la base del planificador: calor húmedo todo el año, con lluvias muy fuertes de junio a septiembre.",
      coords: [9.5092, -13.7122],
      featured: true,
      image: null,
    },
    {
      id: "islas-de-los",
      name: "Islas de Los",
      region: "Conakri",
      tag: "Islas frente a la capital",
      blurb:
        "Kassa y Roume, a media hora en lancha de Conakri, con playas, pueblos de pescadores y escapadas de fin de semana.",
      coords: [9.4833, -13.8],
      image: null,
    },
    {
      id: "dubreka",
      name: "Dubréka (cascadas de la Soumba)",
      region: "Kindia",
      tag: "Cascadas cerca de la capital",
      blurb:
        "Las cascadas de la Soumba, al pie del monte Kakoulima, a una hora de Conakri, con pozas y restaurantes sencillos.",
      coords: [9.7911, -13.5144],
      image: null,
    },
    {
      id: "kindia",
      name: "Kindia (Velo de la Novia)",
      region: "Kindia",
      tag: "La puerta de la meseta",
      blurb:
        "Una ciudad de frutas y mercados al pie de la meseta, con la cascada del Velo de la Novia y el monte Gangan.",
      coords: [10.0567, -12.8653],
      image: null,
    },
    {
      id: "dalaba",
      name: "Dalaba (Futa Yalón)",
      region: "Mamou",
      tag: "El balneario de la meseta",
      blurb:
        "Un pueblo fresco entre pinos y colinas, que fue el lugar de veraneo de la época colonial, con cascadas cerca y noches frías en la temporada seca.",
      coords: [10.6869, -12.2497],
      image: null,
    },
    {
      id: "pita",
      name: "Pita (cascadas de Kinkon)",
      region: "Mamou",
      tag: "Cascadas",
      blurb:
        "Un pueblo de la meseta con las cascadas de Kinkon y de Kambadaga, de las más grandes del Futa Yalón.",
      coords: [11.0544, -12.3962],
      image: null,
    },
    {
      id: "labe",
      name: "Labé",
      region: "Labé",
      tag: "La capital del Futa",
      blurb:
        "La ciudad más grande de la meseta y capital histórica del Futa Yalón peúl, con un mercado grande y la gran mezquita.",
      coords: [11.3182, -12.2833],
      image: null,
    },
    {
      id: "doucki",
      name: "Doucki (cañones del Futa Yalón)",
      region: "Mamou",
      tag: "Caminatas",
      blurb:
        "Un pueblo peúl de donde salen caminatas de uno o varios días por cañones, puentes de piedra y cascadas, con guías del pueblo.",
      coords: [11.17, -12.6],
      image: null,
    },
    {
      id: "mali",
      name: "Mali (la Dama de Mali)",
      region: "Labé",
      tag: "Lo más alto y fresco",
      blurb:
        "Un pueblo en el norte de la meseta, con la Dama de Mali, una roca con perfil de mujer, y vistas sobre los acantilados. Lo más fresco del planificador en enero.",
      coords: [12.0833, -12.3],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Guinea, ropa liviana y fresca, sombrero y protector para la costa; para el Futa Yalón, un buzo y una campera liviana para las noches de la temporada seca. De junio a septiembre, impermeable. Repelente siempre, el certificado de la fiebre amarilla y efectivo.",
    keyPoints: [
      "Temporada seca de noviembre a abril; lluvias muy fuertes de junio a septiembre.",
      "En el Futa Yalón refresca de noche: un buzo, aunque en la costa haga calor.",
      "Vacuna de la fiebre amarilla y visa tramitada antes de viajar.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido: "Ropa liviana y fresca, sombrero, protector y repelente.",
      templado: "Ropa liviana de día y un buzo para las noches del Futa Yalón.",
      fresco:
        "Un buzo y una campera liviana para las noches de la meseta en la temporada seca.",
      frio: "No hace frío en Guinea: en la meseta, un buzo y una campera liviana alcanzan.",
    },
    plug: {
      types: "Tipos C, F y K",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, y a veces una tercera, como en Dinamarca. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Caminá el Futa Yalón con guía local",
          body: "Los pueblos arman recorridos de uno o varios días, con noches en casas de familia.",
        },
        {
          title: "Llevá abrigo para la meseta",
          body: "En diciembre y enero, las noches rondan los once grados.",
        },
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano.",
        },
        {
          title: "Probá el fonio",
          body: "Un cereal fino del Futa Yalón, que se come con salsa de maní o de hojas.",
        },
        {
          title: "Llevá euros o dólares para cambiar",
          body: "En billetes nuevos, se cambian fácil en Conakri.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Te lo pueden pedir al llegar.",
        },
        {
          title: "No subestimes las distancias",
          body: "Las rutas son largas y lentas: a la meseta, contá un día de viaje.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o del aeropuerto.",
        },
        {
          title: "No te bañes en ríos ni pozas sin preguntar",
          body: "En muchos hay bilharzia: el guía sabe dónde se puede.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe y se come con la derecha.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "meseta",
        title: "Para el Futa Yalón",
        notice: {
          tone: "info",
          title: "Noches frescas",
          body: "En la temporada seca, las noches de la meseta rondan los once grados: llevá abrigo aunque en Conakri haga calor.",
        },
        summary: "Caminatas, cascadas y pueblos",
        items: [
          "Calzado de caminata",
          "Un buzo y una campera liviana",
          "Una linterna frontal",
          "Una botella con filtro",
        ],
      },
      {
        id: "costa",
        title: "Para la costa",
        notice: null,
        summary: "Conakri y las islas",
        items: [
          "Ropa liviana de algodón o lino",
          "Traje de baño",
          "Sombrero y protector",
          "Algo impermeable de junio a septiembre",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes de fuera de África Occidental necesitan la visa electrónica, tramitada antes, y Guinea pide el certificado de la fiebre amarilla al llegar.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con al menos seis meses de vigencia",
          "La visa electrónica, impresa",
          "Certificado internacional de vacunación contra la fiebre amarilla",
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
          body: "Hay malaria en todo el país, todo el año, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano",
        why: "En el Futa Yalón refresca mucho de noche.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Casi nadie la acepta fuera de los hoteles grandes.",
        instead: "Efectivo.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los taxis casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas son lentas, y los caminos de la meseta, de tierra.",
        instead: "Días de margen.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los taxis colectivos hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Guinea?",
        answer:
          "Casi todos los pasaportes de fuera de África Occidental la necesitan: la electrónica se tramita online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Guinea pide el certificado al llegar. Vacunate al menos diez días antes y llevalo en el bolso de mano.",
      },
      {
        question: "¿Qué es el Futa Yalón?",
        answer:
          "Una meseta en el centro del país, entre mil y mil quinientos metros, con cañones, cascadas y pueblos peúl. Es adonde va casi todo el que viaja por Guinea.",
      },
      {
        question: "¿El Mali del planificador es el país?",
        answer:
          "No: es un pueblo del norte del Futa Yalón, el de la roca de la Dama de Mali. El país está más al este y no forma parte del planificador.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a abril, la temporada seca.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés, que es el oficial; en la calle, el pular en la meseta, el susu en la costa y el malinké en el este.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
