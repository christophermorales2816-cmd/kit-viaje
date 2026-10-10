import type { DestinationGuide } from "./types";

/**
 * Guía de Kazajistán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la escala. Es el país sin salida al mar más grande
 * del mundo, y sus nueve ciudades van de la estepa del norte —Astaná y
 * Burabay, con mínimas de veinte bajo cero en enero— al desierto del Caspio.
 * La base es Almaty y no Astaná, la capital, por la misma razón que Dubái:
 * es por donde entra y desde donde sale casi todo el que viaja, a las
 * montañas, los lagos y los cañones del sudeste.
 */
export const kazajistan: DestinationGuide = {
  slug: "kazajistan",
  country: "Kazajistán",
  subregion: "Asia Central",
  subhead:
    "Montañas nevadas sobre Almaty, lagos turquesa entre abetos, un cañón de piedra roja en plena estepa y una capital nueva que sale del horizonte. El país sin salida al mar más grande del mundo, del Tian Shan al Caspio.",

  image: null,

  highlights: [
    {
      value: "−20 °C",
      label: "de mínima en Astaná en enero",
      note: "La capital está entre las más frías del mundo, con viento de estepa. Almaty, en el sur, es más templada, y es por donde entra casi todo el que viaja.",
    },
    {
      value: "Charyn",
      label: "un cañón de piedra roja en plena estepa",
      note: "Paredes talladas por el viento en el Valle de los Castillos, a unas tres horas de Almaty, de camino a los lagos de montaña.",
    },
    {
      value: "Kaindy",
      label: "un lago con un bosque sumergido",
      note: "Los troncos de abetos asoman del agua turquesa desde que un terremoto formó el lago, a principios del siglo XX.",
    },
    {
      value: "Beshbarmak",
      label: "el plato de la estepa, carne con masa casera",
      note: "Carne de cordero o de caballo hervida sobre láminas de masa, para las fiestas. Se acompaña con kumis, leche de yegua fermentada.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Kazajistán",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros necesitan visa, que en algunos casos se tramita online. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida.",
        "Es el país sin salida al mar más grande del mundo: entre Almaty y Astaná hay más de mil kilómetros por tierra. Muchos vuelos internacionales llegan a una de las dos, no a las dos.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Kazajistán",
      body: [
        "La moneda es el tenge. En las ciudades casi todo se paga con tarjeta o con el teléfono, también los taxis y muchos puestos de mercado.",
        "En los pueblos y en las excursiones a la montaña conviene llevar algo de efectivo. Hay cajeros en todas las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí tenges: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Continental, y mucho",
      body: [
        "Kazajistán es hemisferio norte y muy continental. Almaty, al pie de las montañas, tiene inviernos fríos y veranos calurosos, y las montañas de alrededor tienen nieve de noviembre a abril.",
        "Astaná y Burabay, en la estepa del norte, tienen inviernos durísimos: máximas bajo cero de noviembre a marzo y viento.",
        "El sur, con Turkestán y Shymkent, es caluroso y seco en verano. Aktau, sobre el Caspio, es desierto junto al mar.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre: templado en Almaty, montañas y lagos abiertos, y la estepa verde en primavera.",
        "Julio y agosto son la temporada de los lagos y las caminatas, y en el sur hace mucho calor. De diciembre a marzo se esquía en Shymbulak.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Kazajistán",
      body: [
        "Las distancias son enormes: entre las ciudades grandes conviene el vuelo interno, o un tren de muchas horas.",
        "Desde Almaty, el cañón de Charyn y los lagos de Kolsai y Kaindy se hacen en una excursión de uno o dos días. A Shymbulak sube un teleférico desde Medeu.",
        "En las ciudades hay buses y taxis por app. Desde 2024 todo el país usa la misma hora.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "El mausoleo de Yasawi en Turkestán y la historia de la estepa; poco casco antiguo.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Beshbarmak, plov, baursaks y mucha carne; en las ciudades, cocina de todo el mundo.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Montañas, lagos, cañones y una estepa que no termina.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "Aktau tiene playas en el Caspio; el resto del país está lejos de cualquier mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y moverse sale poco; Almaty y Astaná son más caras que el resto.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Ciudades modernas y fáciles, pero las distancias entre ellas son enormes.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El tenge se mueve contra el dólar, con devaluaciones de vez en cuando.",
    },
  ],

  shines: [
    "Montañas, lagos y cañones a pocas horas de Almaty.",
    "Ciudades modernas y fáciles de recorrer.",
    "La tarjeta y el teléfono sirven para casi todo.",
  ],

  costs: [
    "Distancias enormes entre ciudades.",
    "Inviernos durísimos en el norte.",
    "Fuera de las ciudades se habla poco inglés.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Almaty que Astaná, Turkestán o Shymbulak, a más de dos mil metros. Los precios están en tenges y son órdenes de magnitud; en la estación de esquí, más altos.",

  places: [
    {
      id: "almaty",
      name: "Almaty",
      region: "Almaty",
      tag: "La ciudad al pie de las montañas",
      blurb:
        "Avenidas con árboles, el Bazar Verde, la catedral de madera del parque Panfilov y el teleférico a Kok-Tobe, con las montañas nevadas de fondo. Es la base del planificador: inviernos fríos, veranos calurosos.",
      coords: [43.2389, 76.8897],
      featured: true,
      image: null,
    },
    {
      id: "astana",
      name: "Astaná",
      region: "Astaná",
      tag: "La capital de la estepa",
      blurb:
        "Una capital construida casi entera en las últimas décadas, con la torre Baiterek, edificios de arquitectos de todo el mundo y el río Ishim. Inviernos durísimos, con viento.",
      coords: [51.1694, 71.4491],
      image: null,
    },
    {
      id: "shymbulak",
      name: "Medeu y Shymbulak",
      region: "Almaty",
      tag: "Esquí a media hora de Almaty",
      blurb:
        "La pista de patinaje de Medeu y, más arriba, la estación de esquí de Shymbulak, a más de dos mil metros, con teleférico. Nieve de noviembre a abril; en verano, caminatas.",
      coords: [43.1283, 77.0808],
      image: null,
    },
    {
      id: "kolsai",
      name: "Lagos de Kolsai y Kaindy",
      region: "Almaty",
      tag: "Lagos de montaña",
      blurb:
        "Lagos escalonados entre abetos a casi dos mil metros, y Kaindy, con su bosque sumergido. Se llega desde Almaty en uno o dos días; en invierno, nieve y frío fuerte.",
      coords: [42.99, 78.32],
      image: null,
    },
    {
      id: "charyn",
      name: "Cañón de Charyn",
      region: "Almaty",
      tag: "El cañón rojo",
      blurb:
        "Paredes de piedra roja talladas por el viento en el Valle de los Castillos, en plena estepa. Calor seco en verano, frío de estepa en invierno.",
      coords: [43.3536, 79.0789],
      image: null,
    },
    {
      id: "turkestan",
      name: "Turkestán",
      region: "Turkestán",
      tag: "El mausoleo de Yasawi",
      blurb:
        "El mausoleo de Khoja Ahmed Yasawi, de fines del siglo XIV, con su cúpula de azulejos, patrimonio de la humanidad y lugar de peregrinación. Muy caluroso en verano.",
      coords: [43.2973, 68.2518],
      image: null,
    },
    {
      id: "shymkent",
      name: "Shymkent",
      region: "Shymkent",
      tag: "El sur cálido",
      blurb:
        "La tercera ciudad del país, de bazares y parques, cerca de las ruinas de Sayram y de la reserva de Aksu-Zhabagly. Caluroso y seco en verano.",
      coords: [42.3417, 69.5901],
      image: null,
    },
    {
      id: "burabay",
      name: "Burabay (Borovoe)",
      region: "Akmola",
      tag: "Lagos y pinos en la estepa",
      blurb:
        "Lagos rodeados de pinos y rocas en medio de la estepa del norte, el lugar de vacaciones de Astaná. Inviernos durísimos; veranos templados.",
      coords: [53.0833, 70.3],
      image: null,
    },
    {
      id: "aktau",
      name: "Aktau",
      region: "Mangystau",
      tag: "El Caspio y el desierto",
      blurb:
        "Una ciudad sobre el mar Caspio, puerta a los paisajes de Mangystau: cañones, mesetas blancas y mezquitas subterráneas. Playas en verano.",
      coords: [43.65, 51.16],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Kazajistán depende de dónde y cuándo. Para Almaty en verano, ropa liviana y un abrigo para la montaña. En invierno, campera de pluma, térmicas, gorro y guantes: Astaná ronda los veinte bajo cero. Para los lagos y los cañones, calzado de caminata y capas. Siempre, la tarjeta, que sirve para casi todo.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de mayo a septiembre.",
      "Las distancias son enormes: vuelos internos entre las ciudades grandes.",
      "El invierno del norte es durísimo: Astaná ronda los veinte bajo cero en enero.",
      "La tarjeta y el pago con el teléfono funcionan casi en todos lados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector para Turkestán, Shymkent y Aktau en verano, y para los días de julio en Almaty.",
      templado:
        "Ropa liviana de día y un abrigo liviano para la noche, que en la montaña y en la estepa refresca rápido.",
      fresco:
        "Capas, un polar y una campera para los lagos y las montañas, y para las ciudades en primavera y otoño.",
      frio: "Campera de pluma, térmicas, gorro, guantes y calzado para nieve: el invierno de Astaná y Burabay es durísimo, y en Shymbulak hay nieve de noviembre a abril.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pagá con tarjeta",
          body: "En las ciudades casi todo se paga con tarjeta o con el teléfono, también los taxis.",
        },
        {
          title: "Hacé noche cerca de los lagos",
          body: "Charyn, Kolsai y Kaindy entran en un día largo desde Almaty, pero con una noche en el pueblo de Saty se disfrutan más.",
        },
        {
          title: "Subí a Shymbulak en teleférico",
          body: "Sale de Medeu, a media hora del centro de Almaty, y en verano también funciona.",
        },
        {
          title: "Volá entre las ciudades grandes",
          body: "Almaty, Astaná, Turkestán y Aktau están a cientos de kilómetros entre sí. Los vuelos internos ahorran días.",
        },
        {
          title: "Probá el kumis",
          body: "Leche de yegua fermentada, ácida y apenas alcohólica. Se toma en verano, en la estepa.",
        },
        {
          title: "Elegí pagar en tenges",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno del norte",
          body: "En Astaná y Burabay hace veinte bajo cero con viento: térmicas, y nada de piel expuesta.",
        },
        {
          title: "No subestimes las distancias",
          body: "Entre Almaty y Astaná hay más de mil kilómetros por tierra.",
        },
        {
          title: "No vayas a los lagos sin abrigo",
          body: "Kolsai y Kaindy están a casi dos mil metros: las noches son frescas aun en verano.",
        },
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo en la cabeza. Sin zapatos adentro.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Mejor embotellada o filtrada.",
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
          body: "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas, pero no todos. Confirmalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Pasaje de salida",
          "Seguro de viaje",
        ],
      },
      {
        id: "invierno",
        title: "Para el invierno",
        notice: {
          tone: "info",
          title: "Frío de estepa",
          body: "En Astaná y Burabay la mínima de enero ronda los veinte bajo cero, y el viento lo hace sentir peor.",
        },
        summary: "Lo que pide el norte",
        items: [
          "Campera de pluma",
          "Térmicas",
          "Gorro, guantes y bufanda",
          "Calzado para nieve",
        ],
      },
      {
        id: "montana",
        title: "Para los lagos y los cañones",
        notice: null,
        summary: "Lo que pide la excursión",
        items: [
          "Calzado de caminata ya usado",
          "Un abrigo para la noche",
          "Protector solar y anteojos de sol",
          "Algo de efectivo para los pueblos",
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
        ],
      },
    ],
    avoid: [
      {
        leave: "Una campera liviana para el invierno",
        why: "En el norte, el frío es de veinte bajo cero con viento.",
        instead: "Campera de pluma y térmicas.",
      },
      {
        leave: "Un recorrido entre ciudades por tierra",
        why: "Las distancias son enormes y los viajes, de muchas horas.",
        instead: "Vuelos internos entre las ciudades grandes.",
      },
      {
        leave: "Mucho efectivo",
        why: "En las ciudades casi todo se paga con tarjeta o con el teléfono.",
        instead: "La tarjeta, y algo de efectivo para los pueblos.",
      },
      {
        leave: "Zapatos de ciudad para los cañones",
        why: "Charyn y los lagos tienen senderos de tierra y piedra.",
        instead: "Zapatillas de caminata.",
      },
      {
        leave: "Solo ropa de verano para la montaña",
        why: "A casi dos mil metros, las noches son frescas aun en julio.",
        instead: "Un polar y una campera.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Kazajistán?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros la necesitan. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Almaty o Astaná?",
        answer:
          "Almaty, para montañas, lagos y cañones; Astaná, la capital, para la arquitectura nueva. Hay más de mil kilómetros entre las dos: muchos viajeros vuelan.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre. Para esquiar, de diciembre a marzo en Shymbulak.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Kazajistán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Muchas cuentas ya suman un cargo por servicio. Si no, se deja alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor no: embotellada o filtrada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "Kazajo y ruso. En Almaty y Astaná, los jóvenes hablan inglés.",
      },
      {
        question: "¿Cómo llego a los lagos de Kolsai?",
        answer:
          "Desde Almaty, en una excursión de uno o dos días o en auto, por rutas de estepa. En invierno, los caminos pueden complicarse.",
      },
    ],
  },
};
