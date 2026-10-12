import type { DestinationGuide } from "./types";

/**
 * Guía de Uganda.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: un permiso que cuesta más que el resto del viaje.
 * Ver a los gorilas de Bwindi exige un permiso con cupo diario, que se reserva
 * con meses y no entra en el presupuesto del planificador: es el dato de su
 * portada. Los parques llevan una excepción en su migración, porque su
 * entrada diaria es más cara que la atracción principal de Kampala.
 * Ninguna ciudad está en Karamoja ni sobre la frontera con Sudán del Sur, y el
 * Parque Nacional Reina Isabel, que varias recomendaciones señalan, no forma
 * parte del planificador. Bwindi está cerca de la frontera con el Congo, y la
 * guía lo dice.
 */
export const uganda: DestinationGuide = {
  slug: "uganda",
  country: "Uganda",
  subregion: "África Oriental",
  subhead:
    "Los gorilas de montaña de Bwindi, los chimpancés de Kibale, el Nilo que sale del lago Victoria en Jinja y las cataratas Murchison. Sobre el ecuador, verde y templada todo el año.",

  image: null,

  highlights: [
    {
      value: "Permiso",
      label: "para los gorilas, que se reserva con meses de anticipación",
      note: "Se compra a la autoridad de vida silvestre, con cupo diario por grupo de gorilas, y cuesta bastante más que todo lo demás del viaje: no entra en el presupuesto del planificador.",
    },
    {
      value: "Nilo",
      label: "la fuente, en Jinja, a la salida del lago Victoria",
      note: "Jinja, a un par de horas de Kampala, tiene la fuente del Nilo Blanco, rafting, kayak y paseos en lancha.",
    },
    {
      value: "Murchison",
      label: "el Nilo por una garganta de siete metros",
      note: "En las cataratas Murchison, el Nilo se mete por una garganta de unos siete metros de ancho y cae con una fuerza que se siente desde arriba.",
    },
    {
      value: "Rolex",
      label: "huevo y verdura enrollados en un chapati",
      note: "La comida callejera de Uganda: el nombre viene de rolled eggs, huevos enrollados.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Uganda",
      body: [
        "La mayoría de los pasaportes tramita la visa electrónica online antes de viajar. Si vas a combinar con Ruanda o Kenia, existe una visa turística conjunta de África del Este que sirve para los tres. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Uganda dejó de pedir el certificado de la fiebre amarilla para entrar en octubre de 2026. La vacuna se sigue recomendando, y si seguís viaje, otro país te lo puede pedir por venir de Uganda: si lo tenés, llevalo.",
        "El pasaporte tiene que tener al menos seis meses de vigencia al llegar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Uganda",
      body: [
        "La moneda es el chelín ugandés. La tarjeta funciona en hoteles, lodges y restaurantes de Kampala y Entebbe, a veces con recargo; en el resto, efectivo o mobile money, el pago por celular.",
        "Los permisos de los parques se pagan en dólares. Si llevás dólares, que sean billetes nuevos y sanos: los de series viejas se cambian peor o se rechazan.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí chelines: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Sobre el ecuador, en altura",
      body: [
        "Uganda está sobre el ecuador y en altura: calor templado todo el año, sin invierno. Llueve en dos temporadas, de marzo a mayo y de septiembre a noviembre.",
        "El suroeste, en Bwindi y el lago Bunyonyi, es fresco de noche. Murchison, en el norte, es lo más caluroso.",
        "En Sipi, en las laderas del monte Elgon, la temporada de lluvias es larga: de marzo a octubre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto y de diciembre a febrero: las temporadas secas, las mejores para los gorilas y los safaris. Los permisos se agotan antes.",
        "En las temporadas de lluvia los senderos de Bwindi se embarran, pero hay menos gente.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Uganda",
      body: [
        "Entre Kampala y los parques se va por ruta, con chofer o en un tour organizado: los tramos son de medio día o de un día entero. A Bwindi y Murchison también hay vuelos chicos desde Entebbe.",
        "En Kampala, aplicaciones como Uber, Bolt y SafeBoda. Los boda-boda, las motos taxi, son rápidos pero riesgosos: si usás uno, con casco.",
        "El tránsito de Kampala es lento a cualquier hora: calculá tiempo de sobra para llegar al aeropuerto de Entebbe. Se maneja por la izquierda.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte de Uganda, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son Kampala, Entebbe, Jinja, los parques del oeste y del norte, el lago Bunyonyi y el monte Elgon. Ninguna está en Karamoja ni sobre la frontera con Sudán del Sur, y el Parque Nacional Reina Isabel no forma parte del planificador. Bwindi está cerca de la frontera con el Congo: revisá qué dice tu recomendación sobre esa zona.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Los reinos tradicionales, como Buganda, y las tumbas de Kasubi, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Matoke, rolex, luwombo y pescado del lago.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Selvas de montaña, lagos de cráter, el Nilo y sus cataratas.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale: "No tiene mar; sí playas de lago, en Entebbe.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer y moverse sale poco; los permisos y los lodges, mucho.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Tramos largos por ruta, pero el circuito de los parques está armado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El chelín es bastante estable.",
    },
  ],

  shines: [
    "Los gorilas y los chimpancés.",
    "El Nilo, entre rafting y cataratas.",
    "Paisajes verdes todo el año.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Permisos caros, que se reservan con meses.",
    "Tramos largos por ruta.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Kampala que Bwindi o Murchison. Los precios están en chelines ugandeses y son órdenes de magnitud. Los permisos para ver gorilas y chimpancés no entran en el presupuesto, y un lodge en los parques puede costar varias veces más.",

  places: [
    {
      id: "kampala",
      name: "Kampala",
      region: "Central",
      tag: "La capital de las colinas",
      blurb:
        "Una ciudad sobre colinas, con las tumbas de Kasubi, el palacio del kabaka, la mezquita nacional con vista a todo y mercados enormes. Es la base del planificador: templada todo el año, con lluvias de marzo a mayo y de septiembre a noviembre.",
      coords: [0.3476, 32.5825],
      featured: true,
      image: null,
    },
    {
      id: "entebbe",
      name: "Entebbe (lago Victoria)",
      region: "Central",
      tag: "El lago Victoria",
      blurb:
        "La ciudad del aeropuerto, sobre el lago Victoria, con el jardín botánico, un centro de vida silvestre y salidas en bote al pantano de Mabamba a buscar el picozapato.",
      coords: [0.0512, 32.4637],
      image: null,
    },
    {
      id: "jinja",
      name: "Jinja (fuente del Nilo)",
      region: "Oriental",
      tag: "La fuente del Nilo",
      blurb:
        "Donde el Nilo Blanco sale del lago Victoria: rafting, kayak y paseos en lancha hasta la fuente.",
      coords: [0.4244, 33.2042],
      image: null,
    },
    {
      id: "murchison",
      name: "Cataratas Murchison",
      region: "Norte",
      tag: "Las cataratas del Nilo",
      blurb:
        "El parque más grande del país: el Nilo se mete en una garganta de siete metros y, río abajo, el safari en lancha pasa entre hipopótamos, cocodrilos y elefantes. Lo más caluroso del planificador.",
      coords: [2.2786, 31.6869],
      image: null,
    },
    {
      id: "kibale",
      name: "Kibale (Fort Portal)",
      region: "Oeste",
      tag: "Chimpancés",
      blurb:
        "Selva tropical con trece especies de primates y salidas para ver chimpancés, con permiso aparte. Cerca, los lagos de cráter de Fort Portal.",
      coords: [0.4386, 30.4044],
      image: null,
    },
    {
      id: "mburo",
      name: "Parque Nacional Lago Mburo",
      region: "Oeste",
      tag: "Cebras y lagos",
      blurb:
        "El parque más cercano a Kampala, con cebras, impalas y safaris a pie, a caballo y en bote sobre el lago. Más seco que el resto del oeste.",
      coords: [-0.6333, 30.95],
      image: null,
    },
    {
      id: "bwindi",
      name: "Bwindi (gorilas)",
      region: "Suroeste",
      tag: "Gorilas de montaña",
      blurb:
        "Una selva de montaña donde vive casi la mitad de los gorilas de montaña del mundo. Para verlos hace falta un permiso, que se reserva con meses. Fresca de noche y lluviosa.",
      coords: [-1.0, 29.65],
      image: null,
    },
    {
      id: "bunyonyi",
      name: "Lago Bunyonyi (Kabale)",
      region: "Suroeste",
      tag: "El lago de las islas",
      blurb:
        "Un lago de altura con decenas de islas, canoas y terrazas de cultivo en las laderas, cerca de Kabale. Las noches más frescas del planificador.",
      coords: [-1.2833, 29.9333],
      image: null,
    },
    {
      id: "sipi",
      name: "Cataratas de Sipi (monte Elgon)",
      region: "Oriental",
      tag: "Cascadas y café",
      blurb:
        "Tres cascadas en las laderas del monte Elgon, con caminatas entre cafetales y vista a las llanuras. Llueve de marzo a octubre.",
      coords: [1.3333, 34.3833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Uganda es templada todo el año: ropa liviana de día y un buzo para la noche, que en Bwindi y el lago Bunyonyi refresca. Algo impermeable siempre, y más de marzo a mayo y de septiembre a noviembre. Para los gorilas, calzado de trekking, pantalón y mangas largas y guantes de jardín. Repelente y un adaptador para el enchufe británico.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "El permiso de los gorilas va aparte y se reserva con meses de anticipación.",
      "Templada todo el año; lluvias de marzo a mayo y de septiembre a noviembre.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y repelente para Murchison y los safaris.",
      templado:
        "Ropa liviana de día, un buzo para la noche y algo impermeable.",
      fresco:
        "Capas, un polar y una campera impermeable para Bwindi, Kibale y el lago Bunyonyi.",
      frio: "Un polar y una campera para las noches más frías del lago Bunyonyi.",
    },
    plug: {
      types: "Tipo G",
      voltage: "240 V, 50 Hz",
      note: "El británico, de tres patas rectangulares. Si tu enchufe es de otro tipo, llevá adaptador. Fuera de Kampala, los cortes de luz son comunes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Reservá el permiso de los gorilas antes que nada",
          body: "Hay cupo diario por grupo, y en la temporada seca se agota con meses.",
        },
        {
          title: "Llevá guantes para el trekking",
          body: "En la selva de Bwindi te agarrás de ramas con espinas y ortigas.",
        },
        {
          title: "Probá el rolex",
          body: "Huevo y verdura enrollados en chapati, en cualquier puesto de la calle.",
        },
        {
          title: "Usá casco en los boda-boda",
          body: "Las motos taxi son rápidas pero riesgosas, y SafeBoda da casco.",
        },
        {
          title: "Elegí pagar en chelines",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No vayas a ver a los gorilas si estás enfermo",
          body: "Un resfrío puede contagiarlos: si tenés síntomas, avisá antes de salir.",
        },
        {
          title: "No te bañes en lagos sin preguntar",
          body: "En muchos hay bilharzia; el Bunyonyi es de los pocos donde la gente se baña.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos.",
        },
        {
          title: "No subestimes los tramos por ruta",
          body: "Un día entero entre Kampala y un parque es común: armá el itinerario con eso en mente.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Uganda y si tu pasaporte necesita visa: casi todos la tramitan online.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica aprobada",
          "El permiso de los gorilas, si vas a Bwindi",
          "El certificado de la fiebre amarilla, si lo tenés",
        ],
      },
      {
        id: "trekking",
        title: "Para los gorilas y los chimpancés",
        notice: {
          tone: "info",
          title: "Barro y espinas",
          body: "Los senderos de Bwindi y Kibale son empinados y se embarran: calzado firme y ropa que cubra.",
        },
        summary: "Lo que pide la selva",
        items: [
          "Calzado de trekking ya usado",
          "Pantalón largo y mangas largas",
          "Guantes de jardín",
          "Una campera impermeable",
          "Medias largas para meter el pantalón",
        ],
      },
      {
        id: "safari",
        title: "Para los safaris",
        notice: null,
        summary: "En lancha y en camioneta",
        items: [
          "Binoculares",
          "Sombrero y protector",
          "Ropa de colores neutros",
          "Un buzo para las salidas al amanecer",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Ropa azul o negra para los safaris",
        why: "Atrae a las moscas tse-tse.",
        instead: "Colores neutros: beige, caqui, verde.",
      },
      {
        leave: "Zapatillas de lona para el trekking",
        why: "El barro y las pendientes de Bwindi las destrozan.",
        instead: "Calzado de trekking ya usado.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se cambian peor o se rechazan.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Los tramos por ruta son largos y lentos.",
        instead: "Días de margen entre parques.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 240 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Uganda y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Uganda?",
        answer:
          "La mayoría de los pasaportes la tramita online como visa electrónica antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Uganda dejó de pedirla para entrar en octubre de 2026, pero se sigue recomendando, y otro país te la puede pedir si seguís viaje desde Uganda. Si la tenés, llevá el certificado.",
      },
      {
        question: "¿Cuándo conviene ir a ver los gorilas?",
        answer:
          "En las temporadas secas, de junio a agosto y de diciembre a febrero. Reservá el permiso con meses de anticipación.",
      },
      {
        question: "¿El permiso de los gorilas entra en el presupuesto?",
        answer:
          "No: cuesta bastante más que el resto del viaje y se paga aparte, en dólares.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer: "Probablemente: Uganda usa el tipo G, el británico, a 240 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
