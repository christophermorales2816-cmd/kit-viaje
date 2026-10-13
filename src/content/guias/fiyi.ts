import type { DestinationGuide } from "./types";

/**
 * Guía de Fiyi.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la ceremonia del kava, el dato de su portada, y el
 * primer país del planificador partido por el antimeridiano. Taveuni queda al
 * este del meridiano 180: su caja del test cruza la línea y el mapa junta los
 * pines con `sinSaltoDeAntimeridiano` (spec, 16.4). El dólar fiyiano no lleva
 * centavos (spec, 16.3). La base es Nadi y no Suva, la capital: es la del
 * aeropuerto internacional y la puerta de las islas.
 */
export const fiyi: DestinationGuide = {
  slug: "fiyi",
  country: "Fiyi",
  subregion: "Melanesia",
  subhead:
    "Islas de arena blanca en las Mamanuca y las Yasawa, la ceremonia del kava en los pueblos, el buceo con tiburones de Pacific Harbour, la Suva colonial y la selva de Taveuni, partida por el meridiano 180.",

  image: null,

  highlights: [
    {
      value: "Kava",
      label: "en cada pueblo, la bebida de la bienvenida",
      note: "Una raíz molida y mezclada con agua que se toma en ronda, en un cuenco de coco. Al visitar un pueblo se lleva sevusevu, un atado de raíz de kava, de regalo para el jefe.",
    },
    {
      value: "333 islas",
      label: "y unas cien habitadas",
      note: "Viti Levu y Vanua Levu, las dos grandes, y cientos de islas chicas: las Mamanuca y las Yasawa, cerca de Nadi, y Taveuni y el grupo Lau, en el este.",
    },
    {
      value: "Bula",
      label: "el saludo que vas a escuchar todo el día",
      note: "Bula quiere decir hola y mucho más: se dice al llegar, al cruzarse con alguien y al brindar. Vinaka es gracias.",
    },
    {
      value: "Tiburones",
      label: "toro en la laguna de Beqa",
      note: "Frente a Pacific Harbour se bucea con tiburones toro y tiburones tigre, en uno de los buceos más famosos del Pacífico.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Fiyi",
      body: [
        "Muchos pasaportes entran sin visa por estadías cortas: el permiso de visitante se da al llegar, con el pasaje de salida y fondos para la estadía. Otros tramitan la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Fiyi",
      body: [
        "La moneda es el dólar fiyiano. Los resorts, los hoteles y los comercios de Nadi y Suva aceptan tarjeta; en los pueblos, los mercados y los buses se paga en efectivo.",
        "Hay cajeros en Nadi, Denarau, Suva y los pueblos grandes. En las islas chicas no hay: los resorts cobran con tarjeta, y conviene llevar efectivo para lo demás.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares fiyianos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor todo el año, y una temporada de lluvias",
      body: [
        "Calor húmedo todo el año. De noviembre a abril es la temporada de lluvias y ciclones, con más calor; de mayo a octubre, la seca, con alisios y noches más frescas.",
        "El oeste, donde están Nadi y las islas Mamanuca y Yasawa, es mucho más seco que el este: en Suva y en Taveuni llueve casi todo el año.",
        "El mar está templado todo el año, bueno para nadar y bucear.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada seca, con menos calor y menos lluvia, la mejor para las islas y el buceo.",
        "De noviembre a abril llueve más, y algunos años hay ciclones. Las vacaciones escolares de Australia y Nueva Zelanda llenan los resorts.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Fiyi",
      body: [
        "Una ruta rodea Viti Levu, con buses, minibuses y taxis: por la costa sur, entre Nadi y Suva, son unas cuatro horas.",
        "A las Mamanuca y las Yasawa se va en catamarán desde el puerto de Denarau, o en hidroavión. A Vanua Levu y a Taveuni, en vuelo interno o en ferry.",
        "Se maneja por la izquierda. Los taxis tienen taxímetro: pedí que lo usen, o acordá el precio antes de subir.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "La vida de los pueblos y la herencia indofiyiana; pocos monumentos.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Pescado en leche de coco, el lovo cocido bajo tierra y curry indofiyiano.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "Islas de postal, arrecifes y la selva de Taveuni.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale: "Arena blanca y agua clara en las Mamanuca y las Yasawa.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Hay de todo, pero los resorts de las islas son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Barcos diarios a las islas cercanas; más allá, vuelos internos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "Una moneda estable y precios a la vista.",
    },
  ],

  shines: [
    "Las islas Mamanuca y Yasawa.",
    "Buceo y snorkel entre corales y tiburones.",
    "La hospitalidad de los pueblos.",
  ],

  costs: [
    "Resorts caros en las islas.",
    "Lluvias y ciclones de noviembre a abril.",
    "Lejos de casi todo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Nadi en enero que Suva o Taveuni. Los precios están en dólares fiyianos y son órdenes de magnitud; los resorts de las islas cuestan bastante más.",

  places: [
    {
      id: "nadi",
      name: "Nadi",
      region: "División Occidental",
      tag: "La puerta de entrada",
      blurb:
        "La ciudad del aeropuerto internacional, con el templo hindú Sri Siva Subramaniya, el mercado y los pueblos de alrededor. Es la base del planificador: calor todo el año, con lluvias de diciembre a marzo y una temporada seca de mayo a octubre.",
      coords: [-17.7765, 177.4356],
      featured: true,
      image: null,
    },
    {
      id: "denarau",
      name: "Isla Denarau",
      region: "División Occidental",
      tag: "Resorts y el puerto",
      blurb:
        "Una isla unida a Nadi por un puente, con resorts, una cancha de golf y el puerto de donde salen los barcos a las islas.",
      coords: [-17.771, 177.383],
      image: null,
    },
    {
      id: "islas-mamanuca",
      name: "Islas Mamanuca",
      region: "División Occidental",
      tag: "Islas a un rato de barco",
      blurb:
        "Islas chicas de arena blanca frente a Nadi, con resorts, snorkel y Monuriki, la isla de la película Náufrago.",
      coords: [-17.65, 177.1],
      image: null,
    },
    {
      id: "islas-yasawa",
      name: "Islas Yasawa",
      region: "División Occidental",
      tag: "Islas más agrestes",
      blurb:
        "Una cadena de islas volcánicas al norte de las Mamanuca, con playas largas, pueblos y alojamientos sencillos, unidas por un catamarán.",
      coords: [-17, 177.3],
      image: null,
    },
    {
      id: "costa-de-coral",
      name: "Costa de Coral (Sigatoka)",
      region: "División Occidental",
      tag: "Dunas y arrecife",
      blurb:
        "La costa sur de Viti Levu, con resorts sobre el arrecife, las dunas de Sigatoka, que son parque nacional, y pueblos en el valle del río.",
      coords: [-18.142, 177.508],
      image: null,
    },
    {
      id: "suva",
      name: "Suva",
      region: "División Central",
      tag: "La capital",
      blurb:
        "La capital, con el Museo de Fiyi, el mercado municipal y edificios coloniales junto al puerto. Llueve casi todo el año.",
      coords: [-18.1416, 178.4419],
      image: null,
    },
    {
      id: "pacific-harbour",
      name: "Pacific Harbour (tiburones)",
      region: "División Central",
      tag: "Tiburones y rafting",
      blurb:
        "Buceo con tiburones toro en la laguna de Beqa, rafting en el río Navua y los caminantes sobre piedras calientes de la isla de Beqa.",
      coords: [-18.258, 178.056],
      image: null,
    },
    {
      id: "savusavu",
      name: "Savusavu (Vanua Levu)",
      region: "División Norte",
      tag: "La bahía escondida",
      blurb:
        "Un pueblo sobre una bahía de Vanua Levu, con aguas termales en la costa, perlas negras y buceo en los arrecifes cercanos.",
      coords: [-16.7794, 179.3328],
      image: null,
    },
    {
      id: "taveuni",
      name: "Taveuni (la isla jardín)",
      region: "División Norte",
      tag: "La isla jardín",
      blurb:
        "Selva, cascadas y el arrecife Rainbow, famoso por los corales blandos. Por la isla pasa el meridiano 180, marcado con un cartel, aunque toda Fiyi vive el mismo día. Llueve casi todo el año.",
      coords: [-16.69, -179.88],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Fiyi, ropa liviana y fresca, traje de baño, protector y sombrero: hace calor todo el año. De noviembre a abril, algo impermeable. Para visitar un pueblo, ropa que tape hombros y rodillas, y un sulu, el pareo fiyiano.",
    keyPoints: [
      "Muchos pasaportes entran sin visa: verificá el tuyo antes de viajar.",
      "Temporada seca de mayo a octubre; lluvias y ciclones de noviembre a abril.",
      "En los pueblos se tapan hombros y rodillas, y no se usa sombrero.",
      "Efectivo para los pueblos y las islas chicas; tarjeta en los resorts.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para las noches de la temporada seca.",
      fresco: "Un buzo liviano para las noches y los barcos.",
      frio: "No hace frío en Fiyi: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo I",
      voltage: "240 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. En las islas chicas, la luz puede depender de un generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá sevusevu a los pueblos",
          body: "Un atado de raíz de kava, de regalo para el jefe: es la forma de pedir permiso para entrar.",
        },
        {
          title: "Tapá hombros y rodillas en los pueblos",
          body: "Con un sulu, el pareo que usan hombres y mujeres.",
        },
        {
          title: "Probá el kokoda",
          body: "Pescado crudo marinado en limón y leche de coco.",
        },
        {
          title: "Reservá el barco con el alojamiento",
          body: "Los catamaranes a las islas salen de Denarau, y muchos resorts incluyen el traslado.",
        },
        {
          title: "Usá protector que no dañe el coral",
          body: "Y una remera de lycra para el snorkel: el sol quema rápido en el agua.",
        },
        {
          title: "Elegí pagar en dólares fiyianos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No uses sombrero en un pueblo",
          body: "Es una falta de respeto al jefe. Tampoco se toca la cabeza de nadie.",
        },
        {
          title: "No entres a una casa con zapatos",
          body: "Se dejan en la puerta.",
        },
        {
          title: "No cuentes con cajeros en las islas",
          body: "En las chicas no hay: llevá efectivo.",
        },
        {
          title: "No pises el coral",
          body: "Se rompe con nada, y corta.",
        },
        {
          title: "No te apures",
          body: "El fiji time es real: las cosas llevan su tiempo.",
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
          body: "Muchos pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida y el pasaporte con seis meses de vigencia. Verificá el tuyo.",
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
        id: "playa",
        title: "Para el sol y el mar",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "Cerca del ecuador, el sol quema en minutos, aun con nubes: protector alto, sombrero y una remera de lycra para el snorkel.",
        },
        summary: "Playas, arrecife y barcos",
        items: [
          "Protector solar alto, que no dañe el arrecife",
          "Sombrero y lentes de sol",
          "Traje de baño y una remera de lycra",
          "Calzado para el agua",
          "Una bolsa estanca para los barcos",
        ],
      },
      {
        id: "pueblos",
        title: "Para visitar un pueblo",
        notice: null,
        summary: "Lo que pide la costumbre",
        items: [
          "Un sulu o un pareo",
          "Una remera que tape los hombros",
          "Sevusevu, la raíz de kava para regalar",
          "Efectivo en billetes chicos",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "En la temporada de lluvias hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para los pueblos",
        why: "En los pueblos se tapan hombros y rodillas.",
        instead: "Un sulu o un pareo en la mochila.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En los pueblos, los mercados y las islas chicas se paga en efectivo.",
        instead: "Efectivo en dólares fiyianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los barcos y los hidroaviones hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral de las lagunas.",
        instead: "Uno que no dañe el arrecife, y una remera de lycra.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Fiyi?",
        answer:
          "Muchos pasaportes entran sin visa por estadías cortas, con el permiso que se da al llegar; otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca. De noviembre a abril llueve más, y algunos años hay ciclones.",
      },
      {
        question: "¿Cómo llego a las islas?",
        answer:
          "A las Mamanuca y las Yasawa, en catamarán desde Denarau o en hidroavión; a Vanua Levu y Taveuni, en vuelo interno o en ferry.",
      },
      {
        question: "¿Cómo me visto para visitar un pueblo?",
        answer:
          "Con hombros y rodillas tapados, sin sombrero, y con un sulu si tenés. Los zapatos se dejan en la puerta de las casas.",
      },
      {
        question: "¿Qué es el kava?",
        answer:
          "Una bebida de raíz molida y agua, un poco amarga, que adormece la boca. Se toma en ronda en la ceremonia de bienvenida: se aplaude, se dice bula y se toma de un trago.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 240 V.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés, el fiyiano y el hindi fiyiano. En los resorts y las ciudades, con inglés te arreglás.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Mejor no: tomá embotellada o filtrada, aunque muchos resorts tratan la suya.",
      },
    ],
  },
};
