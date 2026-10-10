import type { DestinationGuide } from "./types";

/**
 * Guía de Taiwán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este destino aporta: uno de los tres territorios de la sección 14.11,
 * con moneda y reglas de entrada propias. Y el enchufe a 110 V y 60 Hz, como
 * en Estados Unidos: para quien viaja desde un país de 220 V es lo primero que
 * cambia la valija. Taroko se dice con la salvedad del terremoto de 2024, que
 * cerró parte de sus senderos.
 */
export const taiwan: DestinationGuide = {
  slug: "taiwan",
  country: "Taiwán",
  subregion: "Asia Oriental",
  subhead:
    "Mercados nocturnos en cada ciudad, templos llenos de incienso, una garganta de mármol entre montañas, el lago del Sol y la Luna, té en las colinas y el tren de alta velocidad que une la isla de punta a punta.",

  image: null,

  highlights: [
    {
      value: "110 V",
      label: "en los enchufes, como en Estados Unidos",
      note: "Patas planas y 60 Hz. Si tu país usa 220 V, revisá que los cargadores digan 100-240 V y llevá adaptador.",
    },
    {
      value: "Mercados nocturnos",
      label: "en cada ciudad, todas las noches",
      note: "Puestos de comida, juegos y ropa: Shilin y Raohe en Taipéi, y uno en cada barrio.",
    },
    {
      value: "Bubble tea",
      label: "nació en Taiwán",
      note: "El té con leche y perlas de tapioca se inventó acá, y se toma en cada esquina.",
    },
    {
      value: "Taroko",
      label: "una garganta de mármol entre montañas",
      note: "Paredes de mármol sobre un río turquesa, cerca de Hualien. Después del terremoto de 2024, parte de los senderos quedó cerrada: verificá cuáles están abiertos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Taiwán",
      body: [
        "Taiwán tiene reglas de entrada propias. Varios pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una autorización o visa antes. Verificá el tuyo antes de comprar el pasaje.",
        "El formulario de llegada se puede completar online antes del vuelo, y la entrada es más rápida.",
        "El pasaporte tiene que tener vigencia de sobra, y pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Taiwán",
      body: [
        "La moneda es el nuevo dólar taiwanés. La tarjeta funciona en hoteles, restaurantes y tiendas; la EasyCard, en el transporte y en los almacenes de cadena.",
        "En los mercados nocturnos y los puestos chicos, efectivo. Los cajeros de los almacenes de cadena aceptan tarjetas extranjeras.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares taiwaneses: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Subtropical y tropical",
      body: [
        "Taiwán es hemisferio norte. Taipéi tiene inviernos templados y grises, con lluvia fina, y veranos muy calurosos y húmedos.",
        "De julio a septiembre puede haber tifones. El sur, con Tainan, Kaohsiung y Kenting, es seco en invierno y lluvioso en verano.",
        "Las montañas del centro son frescas: Alishan, a más de dos mil metros, tiene noches frías todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a diciembre y de marzo a mayo: templado y con menos lluvia en casi toda la isla.",
        "En verano, calor húmedo y tifones; en invierno, el sur es la mejor opción. El Año Nuevo lunar llena los trenes.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Taiwán",
      body: [
        "El tren de alta velocidad une Taipéi, Taichung, Tainan y Kaohsiung por la costa oeste. Los trenes comunes llegan a la costa este, a Hualien.",
        "En Taipéi y Kaohsiung hay metro; la EasyCard sirve para todo el transporte.",
        "Para el lago del Sol y la Luna, Alishan y Kenting, buses turísticos desde las estaciones del tren rápido.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Templos, el Museo del Palacio Nacional y el casco antiguo de Tainan.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Mercados nocturnos, sopa de fideos con carne, xiaolongbao y té de montaña.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Montañas de más de tres mil metros, gargantas, lagos y costa.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Kenting, en el sur, tiene playas y agua templada casi todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale: "Comer en los mercados sale poco; los hoteles son razonables.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale: "Tren rápido, metro y una tarjeta para todo el transporte.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El nuevo dólar taiwanés es una moneda estable.",
    },
  ],

  shines: [
    "La comida de los mercados nocturnos.",
    "Transporte fácil en toda la isla.",
    "Montañas y costa a pocas horas.",
  ],

  costs: [
    "Calor húmedo y tifones en verano.",
    "Inviernos grises y lluviosos en el norte.",
    "Enchufes a 110 V.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Taipéi que Kenting o Alishan, a más de dos mil metros. Los precios están en nuevos dólares taiwaneses y son órdenes de magnitud.",

  places: [
    {
      id: "taipei",
      name: "Taipéi",
      region: "Taipéi",
      tag: "Templos y rascacielos",
      blurb:
        "El Taipei 101, el Museo del Palacio Nacional, el templo de Longshan y mercados nocturnos en cada barrio. Es la base del planificador: inviernos templados y grises, veranos muy húmedos.",
      coords: [25.033, 121.5654],
      featured: true,
      image: null,
    },
    {
      id: "jiufen",
      name: "Jiufen",
      region: "Nuevo Taipéi",
      tag: "El pueblo de las casas de té",
      blurb:
        "Un pueblo minero sobre la montaña, con callecitas de faroles rojos y casas de té con vista al mar. De lo más lluvioso del norte en invierno.",
      coords: [25.1092, 121.8445],
      image: null,
    },
    {
      id: "taroko",
      name: "Garganta de Taroko (Hualien)",
      region: "Hualien",
      tag: "Mármol y río turquesa",
      blurb:
        "Una garganta de paredes de mármol, templos y senderos sobre el río. Después del terremoto de 2024, parte de los senderos quedó cerrada: verificá cuáles están abiertos.",
      coords: [24.1586, 121.6219],
      image: null,
    },
    {
      id: "tainan",
      name: "Tainan",
      region: "Tainan",
      tag: "La ciudad más antigua",
      blurb:
        "La antigua capital, con cientos de templos, fuertes holandeses y una comida callejera famosa en toda la isla. Seca en invierno.",
      coords: [22.9997, 120.227],
      image: null,
    },
    {
      id: "kaohsiung",
      name: "Kaohsiung",
      region: "Kaohsiung",
      tag: "El puerto del sur",
      blurb:
        "La ciudad portuaria del sur, con el lago del Loto y sus pagodas, galerías en viejos depósitos del puerto y mercados nocturnos.",
      coords: [22.6273, 120.3014],
      image: null,
    },
    {
      id: "lago-sol-luna",
      name: "Lago del Sol y la Luna",
      region: "Nantou",
      tag: "El lago entre montañas",
      blurb:
        "Un lago entre montañas, con templos, una ciclovía en la orilla, un teleférico y plantaciones de té cerca.",
      coords: [23.8572, 120.9154],
      image: null,
    },
    {
      id: "alishan",
      name: "Alishan",
      region: "Chiayi",
      tag: "El amanecer sobre las nubes",
      blurb:
        "Bosques de cipreses milenarios, un tren de montaña y el amanecer sobre un mar de nubes, a más de dos mil metros. Noches frías todo el año.",
      coords: [23.5101, 120.8022],
      image: null,
    },
    {
      id: "kenting",
      name: "Kenting",
      region: "Pingtung",
      tag: "Las playas del sur",
      blurb:
        "El extremo sur de la isla, con playas, arrecifes y un parque nacional. Tropical, con agua templada casi todo el año.",
      coords: [21.9483, 120.7798],
      image: null,
    },
    {
      id: "taichung",
      name: "Taichung",
      region: "Taichung",
      tag: "El centro de la isla",
      blurb:
        "Una ciudad de museos, la aldea arcoíris y el mercado nocturno de Fengjia. Se disputa con Tainan haber inventado el bubble tea.",
      coords: [24.1477, 120.6736],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Taiwán depende de la estación y la altura. En verano, ropa liviana que respire, paraguas y un abrigo liviano para el aire acondicionado. En invierno, capas y una campera impermeable para Taipéi. Para Alishan, abrigo todo el año. Siempre, un adaptador de enchufe a 110 V y la EasyCard.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de octubre a diciembre y de marzo a mayo.",
      "Enchufes a 110 V y 60 Hz, de patas planas.",
      "Tifones posibles de julio a septiembre.",
      "La EasyCard sirve para todo el transporte.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que respire, paraguas, protector y un abrigo liviano para los interiores.",
      templado:
        "Ropa liviana y un buzo para la noche: es el otoño y la primavera, la mejor época.",
      fresco:
        "Capas, un buzo y una campera impermeable para el invierno gris de Taipéi.",
      frio: "Campera de abrigo, gorro y guantes para el amanecer en Alishan.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "110 V, 60 Hz",
      note: "Son los de patas planas de Estados Unidos. Si tu país usa 220 V, revisá que los cargadores digan 100-240 V: lo que diga solo 220 V no va a funcionar bien.",
    },
    tips: {
      dos: [
        {
          title: "Comprá la EasyCard al llegar",
          body: "Sirve para el metro, los buses, los trenes comunes y los almacenes de cadena.",
        },
        {
          title: "Cené en un mercado nocturno",
          body: "Probá de a poco en varios puestos: es la forma de comer en Taiwán.",
        },
        {
          title: "Reservá el tren rápido en feriados",
          body: "En el Año Nuevo lunar y los fines de semana largos se agotan los asientos.",
        },
        {
          title: "Subí a Alishan para el amanecer",
          body: "Con el tren de montaña de madrugada y abrigo.",
        },
        {
          title: "Verificá Taroko antes de ir",
          body: "Después del terremoto de 2024, parte de los senderos quedó cerrada.",
        },
        {
          title: "Elegí pagar en dólares taiwaneses",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No enchufes un aparato de 220 V",
          body: "A 110 V no funciona bien, y algunos se dañan.",
        },
        {
          title: "No comas ni tomes en el metro",
          body: "Está prohibido, y se multa.",
        },
        {
          title: "No ignores los avisos de tifón",
          body: "Cierran senderos, ferris y a veces el transporte.",
        },
        {
          title: "No claves los palitos en el arroz",
          body: "Recuerda a las ofrendas a los muertos.",
        },
        {
          title: "No tomes agua de la canilla sin hervir",
          body: "Es tratada, pero se toma hervida o filtrada; hay dispensadores en todos lados.",
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
          title: "Verificá la entrada",
          body: "Taiwán tiene reglas de entrada propias. Varios pasaportes entran sin visa, pero no todos.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida",
          "Formulario de llegada online",
          "Seguro de viaje",
        ],
      },
      {
        id: "electricidad",
        title: "Electricidad",
        notice: {
          tone: "info",
          title: "110 V",
          body: "Revisá que cada cargador diga 100-240 V. Lo que diga solo 220 V no sirve.",
        },
        summary: "Para cargar todo",
        items: [
          "Adaptador a patas planas",
          "Cargadores que digan 100-240 V",
          "Una zapatilla chica, si llevás varios aparatos",
        ],
      },
      {
        id: "verano",
        title: "Para el verano",
        notice: null,
        summary: "Lo que pide el calor húmedo",
        items: [
          "Paraguas",
          "Ropa liviana que respire",
          "Un abrigo liviano para los interiores",
          "Protector solar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Aparatos que dicen solo 220 V",
        why: "A 110 V no funcionan bien.",
        instead: "Cargadores de 100-240 V, o comprar allá.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El aire acondicionado es fuerte y Alishan es frío.",
        instead: "Un abrigo liviano y un buzo.",
      },
      {
        leave: "Un plan sin margen en verano",
        why: "Un tifón puede frenar trenes y ferris.",
        instead: "Un día libre en el itinerario.",
      },
      {
        leave: "Zapatos nuevos",
        why: "Se camina mucho en mercados y senderos.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta y la EasyCard sirven para casi todo.",
        instead: "La tarjeta, y efectivo para los mercados.",
      },
      {
        leave: "Un secador de pelo de 220 V",
        why: "A 110 V no funciona bien.",
        instead: "Nada: los hoteles tienen uno.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Taiwán?",
        answer:
          "Varios pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una autorización o visa antes. Verificá el tuyo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, si tu país usa enchufes redondos: Taiwán usa los tipos A y B, de patas planas, a 110 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De octubre a diciembre y de marzo a mayo. En verano hay calor húmedo y tifones.",
      },
      {
        question: "¿Cómo se recorre la isla?",
        answer:
          "Con el tren de alta velocidad por la costa oeste, trenes comunes por el este y buses turísticos a las montañas.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es habitual; muchos restaurantes suman un cargo por servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Es tratada, pero se toma hervida o filtrada. Hay dispensadores en hoteles y estaciones.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Mandarín, y también taiwanés. En Taipéi, los carteles del transporte están en inglés.",
      },
      {
        question: "¿Se puede visitar Taroko?",
        answer:
          "En parte: después del terremoto de 2024, algunos senderos siguen cerrados. Verificá cuáles están abiertos antes de ir.",
      },
    ],
  },
};
