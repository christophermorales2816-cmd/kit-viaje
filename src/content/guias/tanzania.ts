import type { DestinationGuide } from "./types";

/**
 * Guía de Tanzania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un seguro de viaje obligatorio y propio, aparte del
 * que tenga cada uno —Zanzíbar lo exige desde octubre de 2024 y el continente
 * desde octubre de 2026—, que es el dato que va en la portada, como el seguro
 * de Georgia. El año lo ordena la lluvia: abril es el mes más mojado en todo
 * el país, y el bucket de lluvia (spec, 14.12) lo marca en las nueve ciudades.
 * La base es Arusha y no Dodoma, la capital, ni Dar es Salaam, como Siem Reap
 * en Camboya: es la puerta de los safaris del norte. Los precios de los parques
 * de Zanzíbar, que no son los del norte, llevan una excepción en su migración.
 */
export const tanzania: DestinationGuide = {
  slug: "tanzania",
  country: "Tanzania",
  subregion: "África Oriental",
  subhead:
    "El Serengeti y la gran migración, el cráter del Ngorongoro, los elefantes de Tarangire, el Kilimanjaro y las playas de Zanzíbar. Safari y mar en un mismo viaje.",

  image: null,

  highlights: [
    {
      value: "Seguro",
      label: "obligatorio para entrar, aunque tengas otro",
      note: "Desde octubre de 2026, el continente exige un seguro de viaje propio, como Zanzíbar desde 2024. Se compra online antes de viajar o al llegar, y uno solo sirve para los dos.",
    },
    {
      value: "5.895 m",
      label: "en la cumbre del Kilimanjaro",
      note: "El techo de África se sube en seis a ocho días, sin escalar, desde Moshi. Abajo hace calor; arriba, nieve y viento bajo cero.",
    },
    {
      value: "Serengeti",
      label: "y el cráter del Ngorongoro",
      note: "La gran migración recorre el Serengeti casi todo el año, y el Ngorongoro, un volcán apagado, tiene leones, rinocerontes y búfalos adentro.",
    },
    {
      value: "Zanzíbar",
      label: "Stone Town y playas de arena blanca",
      note: "La ciudad de piedra, patrimonio de la humanidad, y las playas de Nungwi y Paje, sobre el Índico.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Tanzania",
      body: [
        "Según el pasaporte, se entra sin visa o con una visa electrónica que se tramita antes en el sitio oficial. Verificá el tuyo antes de comprar el pasaje.",
        "Desde octubre de 2026, quien entra al continente tiene que tener el seguro de viaje estatal, aunque ya tenga otro; Zanzíbar lo exige desde 2024. Se compra online antes de viajar o al llegar, y el del primer lugar por donde entrás sirve para los dos.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te piden el certificado internacional de vacunación. También cuenta una escala de doce horas o más en uno de esos países.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Tanzania",
      body: [
        "La moneda es el chelín tanzano. Los parques y los safaris se cotizan en dólares; el resto, en chelines. La tarjeta funciona en hoteles y lodges; en mercados, transporte y propinas, efectivo.",
        "Si llevás dólares, que sean billetes nuevos y sanos: los viejos o dañados se rechazan.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí chelines: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "El año lo ordena la lluvia",
      body: [
        "Tanzania está al sur del ecuador, muy cerca: la temperatura cambia poco en el año y lo que manda es la lluvia. Las lluvias largas van de marzo a mayo —abril es el mes más mojado— y las cortas, en noviembre y diciembre.",
        "En el norte, la altura cambia la valija: Arusha y el Serengeti son templados, y en el borde del Ngorongoro, a más de dos mil metros, las noches de julio rondan los cinco grados. En la cumbre del Kilimanjaro hace frío bajo cero todo el año.",
        "Zanzíbar y Dar es Salaam son calurosas y húmedas los doce meses.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a octubre: temporada seca, la mejor para los safaris y para subir el Kilimanjaro. Es también la más cara.",
        "En enero y febrero nacen las crías de ñu en el sur del Serengeti y llegan los predadores: es otra buena época, entre las dos lluvias.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Tanzania",
      body: [
        "Para los parques del norte, safari organizado desde Arusha, con chofer y guía, o avionetas a las pistas del Serengeti. A Zanzíbar se llega en avión o en ferry desde Dar es Salaam.",
        "En Zanzíbar, taxis acordados de antemano o traslados del hotel; los daladalas, las combis colectivas, son baratos pero lentos. Se maneja por la izquierda.",
        "Las precauciones son las de cualquier destino turístico. Zanzíbar es mayormente musulmana: fuera de la playa, se espera ropa que cubra hombros y rodillas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Stone Town, la garganta de Olduvai, donde se encontraron algunos de los fósiles humanos más antiguos, y las ruinas de Kilwa.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "La cocina suajili de Zanzíbar, con especias y mariscos, y el mercado nocturno de Forodhani.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "El Serengeti, el cráter del Ngorongoro, el Kilimanjaro y las playas de Zanzíbar.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Arena blanca y agua turquesa en Zanzíbar, con mareas que cambian el paisaje en el día.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Los safaris, los parques y los lodges son caros; Zanzíbar tiene opciones para todos los bolsillos.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Safaris bien organizados desde Arusha; las rutas son largas y lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "Los parques y los safaris se cotizan en dólares; el chelín se mueve.",
    },
  ],

  shines: [
    "El Serengeti y el Ngorongoro, para un safari de los que no se olvidan.",
    "Safari y playa en Zanzíbar en el mismo viaje.",
    "El Kilimanjaro, que se sube sin escalar.",
  ],

  costs: [
    "Safaris, parques y lodges caros.",
    "Lluvias fuertes en abril y mayo.",
    "Trámites de entrada: visa, seguro obligatorio y certificado de fiebre amarilla.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Arusha en abril que el Ngorongoro o Zanzíbar. Los precios están en chelines tanzanos y son órdenes de magnitud; los parques se pagan en dólares, y un safari con lodge puede costar varias veces más.",

  places: [
    {
      id: "arusha",
      name: "Arusha",
      region: "Arusha",
      tag: "La puerta de los safaris",
      blurb:
        "Mercados, cafetales en las laderas del monte Meru y el punto de partida de los safaris del norte. Es la base del planificador: días templados y lluvias fuertes en abril.",
      coords: [-3.3869, 36.683],
      featured: true,
      image: null,
    },
    {
      id: "serengeti",
      name: "Serengeti",
      region: "Mara",
      tag: "La gran migración",
      blurb:
        "Llanuras sin fin con leones, guepardos y la gran migración, que recorre el parque casi todo el año. Campamentos de lona y lodges.",
      coords: [-2.4542, 34.8244],
      image: null,
    },
    {
      id: "ngorongoro",
      name: "Cráter del Ngorongoro",
      region: "Arusha",
      tag: "El cráter",
      blurb:
        "Un volcán apagado con un piso de casi veinte kilómetros lleno de animales, rinocerontes negros incluidos. En el borde, a más de dos mil metros, las noches son frías.",
      coords: [-3.2, 35.53],
      image: null,
    },
    {
      id: "tarangire",
      name: "Tarangire",
      region: "Manyara",
      tag: "Elefantes y baobabs",
      blurb:
        "Grandes manadas de elefantes entre baobabs, sobre todo en la temporada seca, cuando el río es la única agua.",
      coords: [-3.8333, 36.0],
      image: null,
    },
    {
      id: "moshi",
      name: "Moshi (Kilimanjaro)",
      region: "Kilimanjaro",
      tag: "Al pie del Kilimanjaro",
      blurb:
        "El pueblo desde donde salen las subidas al Kilimanjaro, con cafetales y cascadas en las laderas. Calor de día y la montaña a la vista cuando despeja.",
      coords: [-3.3349, 37.3404],
      image: null,
    },
    {
      id: "stone-town",
      name: "Stone Town (Zanzíbar)",
      region: "Zanzíbar",
      tag: "La ciudad de piedra",
      blurb:
        "Callejones, puertas talladas, el mercado de especias y el atardecer en los jardines de Forodhani. Patrimonio de la humanidad.",
      coords: [-6.163, 39.1875],
      image: null,
    },
    {
      id: "nungwi",
      name: "Nungwi (Zanzíbar)",
      region: "Zanzíbar",
      tag: "Playas del norte",
      blurb:
        "En la punta norte de la isla, playas donde se nada con cualquier marea y atardeceres sobre el mar.",
      coords: [-5.7264, 39.2981],
      image: null,
    },
    {
      id: "paje",
      name: "Paje (Zanzíbar)",
      region: "Zanzíbar",
      tag: "Kitesurf y mareas",
      blurb:
        "Arena blanca y una laguna que la marea vacía y llena dos veces por día. Uno de los lugares preferidos para el kitesurf.",
      coords: [-6.2667, 39.5333],
      image: null,
    },
    {
      id: "dar-es-salaam",
      name: "Dar es Salaam",
      region: "Dar es Salaam",
      tag: "La ciudad más grande",
      blurb:
        "El puerto y la ciudad más grande del país, de donde salen los ferries a Zanzíbar. Calor húmedo todo el año.",
      coords: [-6.7924, 39.2083],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Tanzania es calor de día y fresco en altura. Para los safaris, ropa liviana de colores neutros y un buzo o una campera para la mañana y la noche, que en el Ngorongoro son frías. Para Zanzíbar, ropa fresca, traje de baño y algo que cubra para la ciudad. En abril y mayo, algo impermeable. Para el Kilimanjaro, equipo de montaña de verdad: arriba hace frío bajo cero.",
    keyPoints: [
      "Un seguro de viaje estatal obligatorio, aparte del tuyo, en el continente y en Zanzíbar.",
      "Abril es el mes más lluvioso; de junio a octubre, la temporada seca de los safaris.",
      "Noches frías en el Ngorongoro y en las salidas del amanecer.",
      "Malaria y fiebre amarilla: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. En Zanzíbar, traje de baño y algo que cubra para la ciudad.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el clima de Arusha y del Serengeti.",
      fresco:
        "Capas y una campera para las salidas del amanecer, que en el vehículo abierto son frías.",
      frio: "Campera de abrigo, gorro y guantes para las noches en el borde del Ngorongoro.",
    },
    plug: {
      types: "Tipos D y G",
      voltage: "230 V, 50 Hz",
      note: "Conviven el británico, de tres patas rectangulares, y otro de tres patas redondas. Un adaptador universal resuelve los dos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá el seguro obligatorio antes de viajar",
          body: "Online, en el sitio oficial: te ahorrás la fila al llegar. Uno solo sirve para el continente y para Zanzíbar.",
        },
        {
          title: "Elegí la temporada seca para el safari",
          body: "De junio a octubre los animales se juntan en el agua y se ven mejor.",
        },
        {
          title: "Combiná safari y Zanzíbar",
          body: "Un vuelo corto une Arusha o el Serengeti con la isla.",
        },
        {
          title: "Aclimatate para el Kilimanjaro",
          body: "Las rutas de siete u ocho días llegan más a la cumbre que las cortas: la altura no perdona el apuro.",
        },
        {
          title: "Llevá binoculares",
          body: "Hacen la diferencia en un safari, sobre todo con los pájaros.",
        },
        {
          title: "Elegí pagar en chelines",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el seguro obligatorio",
          body: "Sin él te pueden negar la entrada, aunque tengas otro seguro.",
        },
        {
          title: "No uses ropa azul oscura o negra en el safari",
          body: "Atrae a las moscas tse-tsé, que hay en Tarangire y en partes del Serengeti.",
        },
        {
          title: "No lleves bolsas de plástico",
          body: "Están prohibidas en Tanzania, y te las pueden sacar en el aeropuerto.",
        },
        {
          title: "No vayas descubierto en Stone Town",
          body: "Es una ciudad mayormente musulmana: hombros y rodillas cubiertos fuera de la playa.",
        },
        {
          title: "No subas al Kilimanjaro apurado",
          body: "Subir rápido es la causa más común del mal de altura.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Madrugadas y polvo",
          body: "Los safaris salen al amanecer en vehículos abiertos: frío temprano, calor al mediodía y mucho polvo.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Buzo o campera para el amanecer",
          "Sombrero, lentes de sol y protector",
          "Binoculares",
          "Un bolso blando para las avionetas",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa, seguro y certificado",
          body: "Según el pasaporte, visa electrónica; para todos, el seguro de viaje obligatorio; y si venís de un país con riesgo, el certificado de fiebre amarilla.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "El seguro de viaje obligatorio, impreso o en el teléfono",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en casi todo el país, Zanzíbar incluida. Consultá con un médico de viajes la profilaxis, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica, además del obligatorio",
        ],
      },
      {
        id: "kilimanjaro",
        title: "Para el Kilimanjaro",
        notice: {
          tone: "info",
          title: "Montaña de verdad",
          body: "La cumbre está a casi seis mil metros, con nieve y viento bajo cero, aunque abajo haga calor.",
        },
        summary: "Lo que pide la subida",
        items: [
          "Una campera de pluma y otra impermeable",
          "Primera capa térmica",
          "Guantes, gorro y lentes de montaña",
          "Botas de trekking ya usadas",
          "Bolsa de dormir para temperaturas bajo cero, si la agencia no la da",
        ],
      },
    ],
    avoid: [
      {
        leave: "Bolsas de plástico",
        why: "Están prohibidas en el país, y te las pueden sacar al llegar.",
        instead: "Bolsas de tela o de red.",
      },
      {
        leave: "Ropa azul oscura o negra para el safari",
        why: "Atrae a las moscas tse-tsé.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Una valija rígida para las avionetas",
        why: "Los vuelos a los parques piden bolsos blandos y con poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan en parques, lodges y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Solo ropa de playa",
        why: "Las noches del Ngorongoro y los amaneceres del safari son fríos.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Tanzania?",
        answer:
          "Depende del pasaporte: algunos entran sin visa y otros tramitan antes una visa electrónica. Verificalo antes de viajar.",
      },
      {
        question: "¿Qué es el seguro obligatorio?",
        answer:
          "Un seguro de viaje estatal que se exige al entrar, aunque tengas otro: en Zanzíbar desde 2024 y en el continente desde octubre de 2026. Se compra online antes o al llegar, y uno solo sirve para los dos.",
      },
      {
        question: "¿Cuál es la mejor época para un safari?",
        answer:
          "De junio a octubre, la temporada seca. Enero y febrero son otra buena época, cuando nacen las crías de ñu en el sur del Serengeti.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Si venís de un país con riesgo, o hiciste una escala de doce horas o más en uno, te piden el certificado. Se aplica al menos diez días antes del viaje.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en casi todo el país, Zanzíbar incluida. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Cuántos días hacen falta para el Kilimanjaro?",
        answer:
          "Entre seis y ocho: las rutas más largas aclimatan mejor y llegan más a la cumbre.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Conviven los tipos D y G, a 230 V; un adaptador universal resuelve los dos.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí: a guías, choferes y cocineros del safari, a los porteadores del Kilimanjaro y algo en restaurantes.",
      },
    ],
  },
};
