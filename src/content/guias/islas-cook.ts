import type { DestinationGuide } from "./types";

/**
 * Guía de las Islas Cook.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un estado libre asociado a Nueva Zelanda, con
 * frontera propia, que entra por la decisión de la sección 16.2, y la primera
 * moneda prestada de Oceanía: el dólar neozelandés, con centavos (spec, 16.3),
 * más monedas propias que solo sirven en las islas, el dato de su portada.
 * Están al este de la línea de cambio de fecha: diez horas menos que
 * Greenwich, un día detrás de Tonga y Samoa (spec, 16.4).
 */
export const islasCook: DestinationGuide = {
  slug: "islas-cook",
  country: "Islas Cook",
  subregion: "Polinesia",
  subhead:
    "La laguna de Aitutaki y One Foot Island, la vuelta a Rarotonga en bus o en moto, el cruce de la isla entre la selva, las cuevas de Atiu y las danzas con tambores.",

  image: null,

  highlights: [
    {
      value: "Moneda triangular",
      label: "de dos dólares, que solo sirve en las islas",
      note: "Las islas usan el dólar neozelandés, pero acuñan monedas y billetes propios, como la moneda triangular de dos dólares. Valen lo mismo, pero solo se aceptan en las Islas Cook: gastalas antes de irte.",
    },
    {
      value: "Aitutaki",
      label: "una de las lagunas más lindas del Pacífico",
      note: "Una laguna turquesa de islas chicas, con One Foot Island y bancos de arena, a un vuelo corto de Rarotonga.",
    },
    {
      value: "32 km",
      label: "la vuelta a Rarotonga por la ruta de la costa",
      note: "La isla principal se rodea en menos de una hora: un bus va en el sentido del reloj y otro en el contrario, y paran a pedido.",
    },
    {
      value: "Un día",
      label: "detrás de Tonga y Samoa",
      note: "Las Islas Cook están al este de la línea de cambio de fecha, como Hawái: cuando en Tonga y Samoa es martes, acá todavía es lunes.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a las Islas Cook",
      body: [
        "Todos los pasaportes entran sin visa por estadías cortas, con el pasaje de salida, la reserva del alojamiento y fondos para la estadía. Verificá el plazo para el tuyo en el sitio oficial.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal: la bioseguridad es estricta.",
        "Casi todos los vuelos llegan desde Auckland: si hacés escala ahí, revisá si tu pasaporte necesita la autorización de tránsito de Nueva Zelanda.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en las Islas Cook",
      body: [
        "La moneda es el dólar neozelandés, con monedas y billetes propios de las islas, que valen lo mismo pero solo se aceptan ahí. La tarjeta se acepta en los hoteles, los restaurantes y los supermercados de Rarotonga y Aitutaki.",
        "Hay cajeros en Rarotonga y en Aitutaki; en las otras islas, casi ninguno.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares neozelandeses: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico, con un invierno templado",
      body: [
        "Calor húmedo de diciembre a marzo, la temporada de lluvias y ciclones, y un invierno templado y más seco de junio a septiembre, con noches de diecisiete o dieciocho grados.",
        "Aitutaki es un poco más cálida y más seca que Rarotonga.",
        "Las Islas Cook están al este de la línea de cambio de fecha: tienen diez horas menos que Greenwich, como Hawái.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada seca, con días templados y el mar más calmo.",
        "A fines de julio y principios de agosto se hace Te Maeva Nui, la fiesta de la independencia, con danzas y canto en Rarotonga.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por las Islas Cook",
      body: [
        "Rarotonga tiene una ruta que la rodea, con dos buses: uno da la vuelta en el sentido del reloj y otro en el contrario, y paran a pedido.",
        "Muchos alquilan una moto: hace falta la licencia de moto de tu país, o un examen local. Se maneja por la izquierda.",
        "A Aitutaki y a las otras islas se va en vuelo interno desde Rarotonga.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale: "Los marae de Rarotonga y la historia de los navegantes.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Ika mata, pescado fresco y el mercado de Punanga Nui.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "La laguna de Aitutaki y las montañas de Rarotonga.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale: "Lagunas turquesa y arena blanca en Rarotonga y Aitutaki.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Precios de Nueva Zelanda, o más altos.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale: "Una isla fácil de recorrer, con buses que paran a pedido.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Usan el dólar neozelandés, con precios a la vista.",
    },
  ],

  shines: [
    "La laguna de Aitutaki.",
    "Rarotonga, fácil de recorrer.",
    "Una cultura de danza y tambores.",
  ],

  costs: [
    "Caro para comer y dormir.",
    "Vuelos casi solo desde Auckland.",
    "Pocos vuelos a las otras islas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Avarua en enero que Aitutaki o Mangaia. Los precios están en dólares neozelandeses y son órdenes de magnitud; los resorts de Aitutaki y los vuelos entre islas cuestan bastante más.",

  places: [
    {
      id: "avarua",
      name: "Avarua (Rarotonga)",
      region: "Rarotonga",
      tag: "La capital",
      blurb:
        "La capital, en la costa norte de Rarotonga, con el mercado de Punanga Nui los sábados, el puerto y las montañas verdes detrás. Es la base del planificador: calor húmedo con lluvias de noviembre a mayo, e inviernos templados y más secos.",
      coords: [-21.2075, -159.771],
      featured: true,
      image: null,
    },
    {
      id: "muri",
      name: "Laguna de Muri",
      region: "Rarotonga",
      tag: "La laguna",
      blurb:
        "La laguna de la costa sudeste, con islotes a los que se llega en kayak o caminando, y snorkel en aguas tranquilas.",
      coords: [-21.25, -159.73],
      image: null,
    },
    {
      id: "titikaveka",
      name: "Titikaveka (snorkel)",
      region: "Rarotonga",
      tag: "El mejor snorkel",
      blurb:
        "La costa sur de Rarotonga, con el mejor snorkel de la isla en la reserva marina, como el de Fruits of Rarotonga.",
      coords: [-21.27, -159.76],
      image: null,
    },
    {
      id: "te-rua-manga",
      name: "Te Rua Manga (el cruce de la isla)",
      region: "Rarotonga",
      tag: "El cruce de la isla",
      blurb:
        "La aguja de roca del centro de Rarotonga, por donde pasa el sendero que cruza la isla entre la selva, de costa a costa. Más fresco y más lluvioso que la costa.",
      coords: [-21.24, -159.79],
      image: null,
    },
    {
      id: "aitutaki",
      name: "Aitutaki (la laguna)",
      region: "Aitutaki",
      tag: "La laguna",
      blurb:
        "Una laguna turquesa de islas chicas, de las más lindas del Pacífico, a un vuelo corto de Rarotonga.",
      coords: [-18.86, -159.79],
      image: null,
    },
    {
      id: "one-foot-island",
      name: "One Foot Island (Aitutaki)",
      region: "Aitutaki",
      tag: "El sello del pie",
      blurb:
        "Un islote de la laguna de Aitutaki con una oficina de correos que sella el pasaporte con un pie.",
      coords: [-18.93, -159.76],
      image: null,
    },
    {
      id: "atiu",
      name: "Atiu (cuevas y café)",
      region: "Grupo Sur",
      tag: "Cuevas y café",
      blurb:
        "Una isla de cuevas, como la de Anatakitaki, con los pájaros kopeka, plantaciones de café y los tumunu, los clubes donde se toma cerveza de naranja.",
      coords: [-19.99, -158.12],
      image: null,
    },
    {
      id: "mangaia",
      name: "Mangaia",
      region: "Grupo Sur",
      tag: "La isla más antigua",
      blurb:
        "Una de las islas más antiguas del Pacífico, rodeada de un anillo de coral fósil con cuevas, y pueblos que viven del taro.",
      coords: [-21.93, -157.93],
      image: null,
    },
    {
      id: "mauke",
      name: "Mauke",
      region: "Grupo Sur",
      tag: "Cuevas de agua dulce",
      blurb:
        "Una isla chica y tranquila, con cuevas de agua dulce para bañarse y una iglesia dividida al medio entre dos pueblos.",
      coords: [-20.16, -157.34],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para las Islas Cook, ropa liviana, traje de baño, protector y repelente; de junio a septiembre, un buzo para la noche. No hace falta visa para estadías cortas, pero revisá la escala en Auckland. Calzado para el agua, para la laguna y el coral.",
    keyPoints: [
      "Sin visa por estadías cortas; revisá lo que pide Nueva Zelanda para la escala.",
      "Usan el dólar neozelandés, con monedas propias que solo sirven en las islas.",
      "Temporada seca de mayo a octubre; lluvias y ciclones de diciembre a marzo.",
      "Rarotonga se recorre en bus, moto o bici; a Aitutaki se va en un vuelo corto.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo para las noches de invierno.",
      fresco: "Un buzo y una campera liviana para las noches.",
      frio: "No hace frío en las Islas Cook: un buzo y una campera liviana alcanzan.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Gastá las monedas de las islas antes de irte",
          body: "Valen lo mismo que las neozelandesas, pero afuera no las aceptan.",
        },
        {
          title: "Hacé el cruce de la isla",
          body: "El sendero de Te Rua Manga atraviesa Rarotonga entre la selva, en medio día.",
        },
        {
          title: "Andá al mercado de Punanga Nui",
          body: "El sábado a la mañana, con comida, artesanías y danzas.",
        },
        {
          title: "Mirá un espectáculo de danza",
          body: "Los tambores y la danza de las Islas Cook son de los más famosos del Pacífico.",
        },
        {
          title: "Hacé sellar el pasaporte en One Foot Island",
          body: "Con un pie, en la oficina de correos del islote.",
        },
        {
          title: "Elegí pagar en dólares neozelandeses",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No camines descalzo por la laguna",
          body: "El coral corta, y hay peces piedra: calzado para el agua.",
        },
        {
          title: "No andes en traje de baño por el pueblo",
          body: "Fuera de la playa, mejor tapate un poco.",
        },
        {
          title: "No planees mucho el domingo",
          body: "Es día de iglesia: muchos comercios cierran.",
        },
        {
          title: "No dejes las otras islas para último momento",
          body: "Los vuelos son pocos y se llenan.",
        },
        {
          title: "No te olvides de la escala",
          body: "Si pasás por Auckland, tu pasaporte puede necesitar la autorización de tránsito de Nueva Zelanda.",
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
          title: "La escala en Auckland",
          body: "Las islas no piden visa por estadías cortas, pero casi todos los vuelos pasan por Auckland: según tu pasaporte, Nueva Zelanda te puede pedir la autorización de tránsito.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "La autorización de tránsito de Nueva Zelanda, si tu pasaporte la necesita",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "laguna",
        title: "Para la laguna",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "En el agua, el sol quema en minutos, aun con nubes: protector alto, sombrero y una remera de lycra.",
        },
        summary: "Snorkel, kayak y bancos de arena",
        items: [
          "Protector solar que no dañe el arrecife",
          "Calzado para el agua",
          "Máscara y snorkel",
          "Traje de baño y una remera de lycra",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer Rarotonga",
        notice: null,
        summary: "Bus, moto y senderos",
        items: [
          "La licencia de moto de tu país, si vas a alquilar una",
          "Calzado para el sendero de la isla",
          "Un buzo para las noches de invierno",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "Hay dengue, sobre todo en la temporada de lluvias: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Monedas de las islas al irte",
        why: "Afuera no las aceptan.",
        instead: "Gastarlas antes, o pagar con billetes neozelandeses.",
      },
      {
        leave: "Solo ropa de verano",
        why: "En invierno, las noches refrescan.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Caminar descalzo por la laguna",
        why: "El coral corta, y hay peces piedra.",
        instead: "Calzado para el agua.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los vuelos entre islas el equipaje tiene un límite bajo.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral de la laguna.",
        instead: "Uno que no dañe el arrecife.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a las Islas Cook?",
        answer:
          "No, por estadías cortas: todos los pasaportes entran sin visa, con el pasaje de salida. Revisá lo que pide Nueva Zelanda si hacés escala en Auckland.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar neozelandés. Las islas tienen además monedas y billetes propios, que valen lo mismo pero solo se aceptan ahí.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca. Te Maeva Nui, la fiesta de la independencia, es a principios de agosto.",
      },
      {
        question: "¿Cómo llego a Aitutaki?",
        answer:
          "En vuelo interno desde Rarotonga, en menos de una hora, o en una excursión de un día.",
      },
      {
        question: "¿Cómo me muevo por Rarotonga?",
        answer:
          "En los dos buses que dan la vuelta a la isla, en moto, en bici o en auto. Se maneja por la izquierda.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El maorí de las Islas Cook y el inglés, que se habla en todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 240 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Mejor tomá embotellada o filtrada: muchos alojamientos tienen agua filtrada para cargar la botella.",
      },
    ],
  },
};
