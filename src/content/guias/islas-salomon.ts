import type { DestinationGuide } from "./types";

/**
 * Guía de las Islas Salomón.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: los naufragios de la Segunda Guerra frente a la
 * costa de Guadalcanal —el dato de su portada— y un país de provincias que se
 * unen en lancha y en avioneta, con malaria en todo el territorio y casi todo
 * en efectivo fuera de la capital. Lleva dos tipos de enchufe, el de patas en
 * V y el británico. El dólar salomonense no lleva centavos (spec, 16.3).
 */
export const islasSalomon: DestinationGuide = {
  slug: "islas-salomon",
  country: "Islas Salomón",
  subregion: "Melanesia",
  subhead:
    "Naufragios de la Segunda Guerra frente a Guadalcanal, la laguna Marovo, el dinero de conchas de Malaita, el volcán de Savo y la isla salvaje de Tetepare.",

  image: null,

  highlights: [
    {
      value: "Naufragios",
      label: "de la Segunda Guerra a metros de la costa de Guadalcanal",
      note: "Frente a Honiara está el estrecho que los marinos llamaron Iron Bottom Sound, con decenas de barcos hundidos en 1942 y 1943. En Bonegi se llega nadando desde la playa a un transporte japonés.",
    },
    {
      value: "Laguna Marovo",
      label: "una de las lagunas de agua salada más grandes del mundo",
      note: "Una doble barrera de arrecife alrededor de cientos de islas con selva, en la Provincia Occidental, con pueblos de talladores y buceo en paredes de coral.",
    },
    {
      value: "Megápodos",
      label: "que entierran los huevos en la arena caliente de Savo",
      note: "En la isla de Savo, un volcán activo, estas aves ponen los huevos en la arena que calienta el volcán, y los pueblos los juntan.",
    },
    {
      value: "Dinero de conchas",
      label: "que se sigue haciendo en Malaita",
      note: "En la laguna de Langa Langa se hacen tiras de conchas que todavía se usan como dote y en las ceremonias.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a las Islas Salomón",
      body: [
        "Casi todos los pasaportes reciben al llegar un permiso de visitante, con el pasaje de salida y fondos para la estadía; algunos tienen que tramitar la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en las Islas Salomón",
      body: [
        "La moneda es el dólar salomonense. En Honiara, los hoteles grandes y algunos comercios aceptan tarjeta; afuera, todo se paga en efectivo.",
        "Hay cajeros en Honiara y en pocos pueblos más, como Gizo y Auki, y no siempre tienen billetes. Sacá en Honiara lo que vayas a necesitar en las islas.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares salomonenses: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo, y lluvia casi siempre",
      body: [
        "Calor húmedo todo el año, sin estaciones de temperatura: lo que cambia es la lluvia.",
        "Honiara, en la costa norte de Guadalcanal, es más seca de junio a octubre; en la Provincia Occidental llueve casi todos los días del año.",
        "De noviembre a abril es la temporada de los ciclones.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a octubre: la temporada más seca en Honiara, con el mar más calmo para el buceo y los barcos.",
        "De noviembre a abril llueve más, y algunos años hay ciclones. El 7 de julio es el día de la independencia, con fiestas en Honiara.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por las Islas Salomón",
      body: [
        "Entre las provincias se va en vuelo interno o en barco: a Munda y Gizo se vuela desde Honiara, y a Malaita y las islas Florida van ferris.",
        "En Honiara hay minibuses y taxis; en la Provincia Occidental, todo se mueve en lancha, que suele organizar el alojamiento.",
        "Se maneja por la izquierda. Los vuelos y los barcos cambian de horario seguido: conviene dejar días de margen.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La campaña de Guadalcanal, con naufragios, museos y memoriales.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale: "Pescado, coco, taro y frutas tropicales; poca variedad.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Lagunas, islas volcánicas y selva.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Playas e islas vacías, con arrecife.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Alojamiento sencillo y caro para lo que ofrece.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Barcos y vuelos que cambian, y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "La moneda se mueve poco, pero hay pocos cajeros.",
    },
  ],

  shines: [
    "Buceo en naufragios de la Segunda Guerra.",
    "La laguna Marovo.",
    "Islas casi sin turistas.",
  ],

  costs: [
    "Vuelos y barcos que cambian seguido.",
    "Alojamiento sencillo y caro.",
    "Malaria en todo el país.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Honiara en agosto que Gizo o la laguna Marovo. Los precios están en dólares salomonenses y son órdenes de magnitud; los lodges de las islas y las lanchas cuestan bastante más.",

  places: [
    {
      id: "honiara",
      name: "Honiara",
      region: "Guadalcanal",
      tag: "La capital",
      blurb:
        "La capital, sobre la costa norte de Guadalcanal, con el mercado central, el museo nacional, los memoriales de la guerra y naufragios a los que se llega nadando desde la playa. Es la base del planificador: calor todo el año, con lluvias de noviembre a mayo y una temporada más seca de junio a octubre.",
      coords: [-9.4456, 159.9729],
      featured: true,
      image: null,
    },
    {
      id: "munda",
      name: "Munda (Nueva Georgia)",
      region: "Provincia Occidental",
      tag: "Buceo y la pista de la guerra",
      blurb:
        "Un pueblo en la isla de Nueva Georgia, con la pista de aterrizaje de la guerra, buceo en arrecifes y naufragios, y la laguna de Roviana. Llueve casi todo el año.",
      coords: [-8.327, 157.263],
      image: null,
    },
    {
      id: "gizo",
      name: "Gizo",
      region: "Provincia Occidental",
      tag: "El pueblo de las islas",
      blurb:
        "El segundo pueblo del país, con buceo en naufragios y arrecifes, y Kennedy Island, adonde llegó nadando John F. Kennedy después del hundimiento de su lancha.",
      coords: [-8.103, 156.842],
      image: null,
    },
    {
      id: "laguna-marovo",
      name: "Laguna Marovo",
      region: "Provincia Occidental",
      tag: "La laguna",
      blurb:
        "Una de las lagunas de agua salada más grandes del mundo, con cientos de islas, pueblos de talladores y buceo en paredes de coral. Se llega en avioneta o en barco.",
      coords: [-8.5, 158.05],
      image: null,
    },
    {
      id: "auki",
      name: "Auki (Malaita)",
      region: "Malaita",
      tag: "Dinero de conchas",
      blurb:
        "La capital de Malaita, la isla más poblada, cerca de las islas artificiales y del dinero de conchas de la laguna de Langa Langa.",
      coords: [-8.768, 160.702],
      image: null,
    },
    {
      id: "islas-florida",
      name: "Islas Florida (Tulagi)",
      region: "Provincia Central",
      tag: "La antigua capital",
      blurb:
        "Tulagi, la capital de la época británica, con buceo en naufragios de la guerra y playas a un rato de ferry desde Honiara.",
      coords: [-9.1, 160.15],
      image: null,
    },
    {
      id: "isla-savo",
      name: "Isla Savo (megápodos)",
      region: "Provincia Central",
      tag: "El volcán y los megápodos",
      blurb:
        "Un volcán activo frente a Guadalcanal, con aguas termales, delfines en la costa y los megápodos, que entierran los huevos en la arena caliente.",
      coords: [-9.13, 159.81],
      image: null,
    },
    {
      id: "tetepare",
      name: "Tetepare",
      region: "Provincia Occidental",
      tag: "La isla sin habitantes",
      blurb:
        "La isla deshabitada más grande del Pacífico Sur, cuidada por sus dueños tradicionales, con selva, tortugas que desovan y un ecolodge.",
      coords: [-8.73, 157.56],
      image: null,
    },
    {
      id: "islas-russell",
      name: "Islas Russell",
      region: "Provincia Central",
      tag: "Plantaciones y arrecifes",
      blurb:
        "Islas de plantaciones de coco al oeste de Guadalcanal, con arrecifes, cuevas y naufragios casi sin visitantes.",
      coords: [-9.07, 159.2],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para las Islas Salomón, ropa liviana y fresca que tape brazos y piernas, traje de baño, algo impermeable y repelente: hace calor húmedo todo el año y llueve seguido. Efectivo para las islas, la consulta por la malaria y días de margen para los vuelos y los barcos.",
    keyPoints: [
      "Casi todos reciben el permiso de visitante al llegar: verificá tu pasaporte.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
      "Efectivo para todo fuera de Honiara, sacado antes de ir a las islas.",
      "Los vuelos y los barcos cambian seguido: dejá días de margen.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca que tape brazos y piernas, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para los barcos y el aire acondicionado.",
      fresco: "Un buzo liviano para las noches y las lanchas.",
      frio: "No hace frío en las Islas Salomón: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo G y tipo I",
      voltage: "230 V, 50 Hz",
      note: "Hay tomas de patas planas en V, como en Argentina y Australia, y de tres patas rectangulares, como en el Reino Unido: un adaptador universal resuelve los dos. En las islas, la luz puede depender de un generador o de paneles solares. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá efectivo a las islas",
          body: "Fuera de Honiara casi no hay cajeros.",
        },
        {
          title: "Buceá en los naufragios",
          body: "Algunos están a metros de la playa, y se ven con snorkel.",
        },
        {
          title: "Pedí permiso para entrar a un lugar",
          body: "Casi toda la tierra es de las familias: playas, cascadas y arrecifes se visitan con permiso, a veces pagando.",
        },
        {
          title: "Dejá días de margen",
          body: "Los vuelos internos y los barcos cambian de horario seguido.",
        },
        {
          title: "Mirá las tallas de Marovo",
          body: "Los talladores de la laguna trabajan la madera con incrustaciones de nácar.",
        },
        {
          title: "Elegí pagar en dólares salomonenses",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No uses ropa corta en los pueblos",
          body: "Se tapan rodillas y hombros.",
        },
        {
          title: "No nades en ríos ni estuarios",
          body: "Hay cocodrilos de agua salada: preguntá antes dónde se puede nadar.",
        },
        {
          title: "No planees nada importante el domingo",
          body: "Es día de iglesia: muchos comercios cierran y hay pocos barcos.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Fuera de los hoteles grandes de Honiara, todo se paga en efectivo.",
        },
        {
          title: "No saques fotos sin permiso",
          body: "Pedilo antes, sobre todo a la gente y en los pueblos.",
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
          tone: "info",
          title: "Permiso al llegar",
          body: "Casi todos los pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida y el pasaporte con seis meses de vigencia. Verificá el tuyo.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "islas",
        title: "Para las islas",
        notice: {
          tone: "info",
          title: "Sin cajeros ni tiendas",
          body: "Fuera de Honiara y de unos pocos pueblos no hay cajeros, y hay poco para comprar: llevá efectivo y lo que vayas a necesitar.",
        },
        summary: "Lo que piden las lagunas",
        items: [
          "Efectivo en dólares salomonenses",
          "Traje de baño y una remera de lycra",
          "Protector solar que no dañe el arrecife",
          "Una linterna y una batería externa",
          "Una bolsa estanca para las lanchas",
        ],
      },
      {
        id: "recorrer",
        title: "Para la selva y los pueblos",
        notice: null,
        summary: "Caminatas, pueblos y lluvia",
        items: [
          "Calzado cerrado y sandalias para el agua",
          "Ropa liviana que tape brazos y piernas",
          "Una campera impermeable liviana",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Honiara casi nadie la acepta, y hay pocos cajeros.",
        instead: "Efectivo, sacado en Honiara.",
      },
      {
        leave: "Ropa corta para los pueblos",
        why: "En los pueblos se tapan rodillas y hombros.",
        instead: "Pantalones livianos o un pareo largo.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Los vuelos internos y los barcos cambian seguido.",
        instead: "Días libres antes del vuelo internacional.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las avionetas y las lanchas hay poco lugar, y el peso tiene límite.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a las Islas Salomón?",
        answer:
          "Casi todos los pasaportes reciben el permiso de visitante al llegar; algunos tramitan la visa antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a octubre, la temporada más seca. De noviembre a abril llueve más, y algunos años hay ciclones.",
      },
      {
        question: "¿Cómo llego a la Provincia Occidental?",
        answer:
          "En vuelo interno desde Honiara a Munda, Gizo o Seghe, y de ahí en lancha.",
      },
      {
        question: "¿Se puede bucear en naufragios?",
        answer:
          "Sí: frente a Honiara hay decenas, y algunos, como los de Bonegi, se ven con snorkel desde la playa.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial, y para entenderse se usa el pijin, un criollo de base inglesa. Hay además más de setenta lenguas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas son de patas planas en V, como en Argentina, pero también hay británicos, de tres patas: llevá un adaptador universal.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
