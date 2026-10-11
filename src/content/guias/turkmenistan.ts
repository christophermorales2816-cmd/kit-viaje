import type { DestinationGuide } from "./types";

/**
 * Guía de Turkmenistán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la entrada más difícil del sitio —carta de
 * invitación por agencia y, con visa de turista, guía durante todo el
 * recorrido— y vuelve la tesis de Venezuela y Cuba: el manat tiene una
 * cotización oficial y otra en la calle muy lejos entre sí, y al viajero se le
 * cobra en dólares. Los precios del planificador van en USD y el corredor, en
 * TMT con las dos cotizaciones.
 */
export const turkmenistan: DestinationGuide = {
  slug: "turkmenistan",
  country: "Turkmenistán",
  subregion: "Asia Central",
  subhead:
    "Un cráter de gas que arde en medio del desierto, una capital de mármol blanco, las ruinas de Merv y Konye-Urgench en la ruta de la seda y la costa del Caspio. Uno de los países menos visitados del mundo.",

  image: null,

  highlights: [
    {
      value: "Carta de invitación",
      label: "para la visa, tramitada por una agencia",
      note: "Con visa de turista, el recorrido se hace con un guía autorizado. Conviene empezar el trámite con semanas de anticipación.",
    },
    {
      value: "Darvaza",
      label: "un cráter de gas que arde en el desierto",
      note: "La Puerta del Infierno arde desde hace décadas en el Karakum. El gobierno anunció planes para apagarlo: fijate si sigue encendido.",
    },
    {
      value: "Asjabad",
      label: "una capital de mármol blanco",
      note: "Avenidas anchas, monumentos dorados y edificios de mármol blanco, casi vacíos de gente. Nada que ver con ninguna otra capital.",
    },
    {
      value: "2 cotizaciones",
      label: "del manat, muy lejos entre sí",
      note: "La oficial, la de los bancos, y la de la calle, donde cambiar es ilegal. Por eso los precios del planificador están en dólares.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Turkmenistán",
      body: [
        "Para la visa de turista hace falta una carta de invitación que tramita una agencia de viajes autorizada, y el recorrido se hace con guía. Conviene empezar con semanas de anticipación.",
        "Existe también una visa de tránsito de pocos días, sin guía, que se pide en un consulado y exige seguir de paso a otro país.",
        "Internet es lenta y está muy restringida, y muchos sitios y aplicaciones no funcionan. Descargá antes lo que vayas a necesitar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Turkmenistán",
      body: [
        "La moneda es el manat, con una cotización oficial y otra en la calle muy lejos entre sí. Cambiar fuera de los bancos es ilegal.",
        "Las tarjetas extranjeras casi no funcionan. Lo habitual es pagar el paquete con la agencia antes de viajar y llevar dólares en efectivo para el resto.",
        "Los bancos piden dólares en billetes nuevos, sin marcas ni roturas.",
      ],
    },
    {
      id: "clima",
      title: "Desierto continental",
      body: [
        "Turkmenistán es hemisferio norte y casi todo desierto: el Karakum cubre la mayor parte del país.",
        "Los veranos son muy calurosos y secos, con más de treinta y cinco grados de junio a agosto, y los inviernos, fríos, con heladas en todo el país.",
        "El norte, en Konye-Urgench y Dashoguz, tiene los inviernos más duros. La costa del Caspio, en Turkmenbashi y Avaza, es un poco más templada.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril, mayo, septiembre y octubre: días templados para las ruinas y noches tolerables para acampar en Darvaza.",
        "En verano el desierto es extremo; en invierno, las noches junto al cráter son heladas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Turkmenistán",
      body: [
        "Con visa de turista, la agencia organiza los traslados, casi siempre en auto con chofer y guía.",
        "Entre Asjabad, Mary, Dashoguz y Turkmenbashi hay vuelos internos y trenes.",
        "A Darvaza se llega en todoterreno por el desierto, y se duerme en carpa o en yurta junto al cráter.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Merv, Konye-Urgench y Nisa, ciudades de la ruta de la seda, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale: "Plov, dograma, pan chorek y melones; cocina simple.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "El desierto del Karakum, el cráter de Darvaza y los cañones del oeste.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "Avaza tiene playas en el Caspio, pensadas para el turismo local.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale:
        "El guía y la agencia obligatorios encarecen el viaje, aunque comer sale poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 2,
      rationale:
        "Carta de invitación, guía, tarjetas que no funcionan e internet restringida.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 3,
      rationale:
        "Dos cotizaciones muy lejos entre sí, y cambiar en la calle es ilegal.",
    },
  ],

  shines: [
    "Lugares únicos casi sin turistas.",
    "El cráter de Darvaza de noche.",
    "Ruinas de la ruta de la seda.",
  ],

  costs: [
    "La entrada más difícil del sitio.",
    "Guía y agencia durante todo el viaje.",
    "Tarjetas que no funcionan e internet restringida.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Asjabad que Darvaza o la costa del Caspio. Los precios están en dólares, que es como se cobra al viajero, y son órdenes de magnitud; no incluyen el paquete de la agencia.",

  places: [
    {
      id: "asjabad",
      name: "Asjabad",
      region: "Asjabad",
      tag: "La ciudad de mármol",
      blurb:
        "Avenidas anchas, edificios de mármol blanco, monumentos dorados y el gran bazar de Altyn Asyr. Es la base del planificador: veranos muy calurosos, inviernos fríos.",
      coords: [37.9601, 58.3261],
      featured: true,
      image: null,
    },
    {
      id: "darvaza",
      name: "Darvaza (cráter de gas)",
      region: "Ahal",
      tag: "La Puerta del Infierno",
      blurb:
        "Un cráter de gas encendido en medio del Karakum, que se ve mejor de noche. Se duerme en carpa o en yurta cerca. Noches heladas en invierno.",
      coords: [40.2525, 58.4397],
      image: null,
    },
    {
      id: "merv",
      name: "Merv (Mary)",
      region: "Mary",
      tag: "La gran ciudad de la ruta de la seda",
      blurb:
        "Las ruinas de varias ciudades superpuestas, con el mausoleo del sultán Sanjar y fortalezas de adobe. Patrimonio de la humanidad. Muy caluroso en verano.",
      coords: [37.6625, 62.1906],
      image: null,
    },
    {
      id: "konye-urgench",
      name: "Konye-Urgench",
      region: "Dashoguz",
      tag: "Minaretes en el norte",
      blurb:
        "Mausoleos y uno de los minaretes más altos de Asia Central, restos de una capital de Corasmia. Patrimonio de la humanidad. Inviernos duros.",
      coords: [42.3333, 59.15],
      image: null,
    },
    {
      id: "nisa",
      name: "Nisa",
      region: "Ahal",
      tag: "La fortaleza parta",
      blurb:
        "Las ruinas de una fortaleza del imperio parto, patrimonio de la humanidad, al pie de las montañas, a media hora de Asjabad.",
      coords: [37.9667, 58.2],
      image: null,
    },
    {
      id: "turkmenbashi",
      name: "Turkmenbashi",
      region: "Balkan",
      tag: "El puerto del Caspio",
      blurb:
        "La ciudad portuaria del Caspio, con ferris hacia Bakú. Un poco más templada que el desierto.",
      coords: [40.0222, 52.9553],
      image: null,
    },
    {
      id: "avaza",
      name: "Avaza",
      region: "Balkan",
      tag: "El balneario del Caspio",
      blurb:
        "Una zona turística nueva sobre el Caspio, con hoteles grandes y playas, pensada para el turismo del país.",
      coords: [39.97, 52.97],
      image: null,
    },
    {
      id: "dashoguz",
      name: "Dashoguz",
      region: "Dashoguz",
      tag: "La puerta del norte",
      blurb:
        "La ciudad del norte, base para Konye-Urgench y el paso a Uzbekistán, hacia Jiva. Inviernos duros.",
      coords: [41.8363, 59.9666],
      image: null,
    },
    {
      id: "yangykala",
      name: "Cañón de Yangykala",
      region: "Balkan",
      tag: "Acantilados de colores",
      blurb:
        "Acantilados rojos, rosados y blancos en el desierto del oeste, sobre el antiguo fondo del mar. Se llega en todoterreno.",
      coords: [39.85, 55.4],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Turkmenistán depende de la estación. En primavera y otoño, ropa liviana de día y un abrigo para las noches del desierto. En verano, ropa liviana que cubra, sombrero y protector. En invierno, campera y capas, y bolsa de dormir abrigada para Darvaza. Siempre, la carta de invitación y la visa en orden, dólares en billetes nuevos y lo que necesites descargado en el teléfono.",
    keyPoints: [
      "Hemisferio norte: lo mejor es abril, mayo, septiembre y octubre.",
      "La visa de turista pide carta de invitación por agencia y guía.",
      "Dólares en billetes nuevos: las tarjetas extranjeras casi no funcionan.",
      "Internet es lenta y muy restringida.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de colores claros que cubra, sombrero, protector y agua: el sol del Karakum es fuerte.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época.",
      fresco:
        "Capas, un polar y una campera para las noches del desierto en primavera y otoño.",
      frio: "Campera abrigada, gorro y guantes para el invierno, y bolsa de dormir abrigada para las noches en Darvaza.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Empezá la visa con tiempo",
          body: "La carta de invitación la tramita la agencia y puede tardar semanas.",
        },
        {
          title: "Llevá dólares nuevos",
          body: "En billetes sanos, sin marcas ni roturas. Es lo que se acepta y lo que se cambia en los bancos.",
        },
        {
          title: "Descargá antes lo que necesites",
          body: "Mapas, documentos y entretenimiento: internet es lenta y muchas aplicaciones no funcionan.",
        },
        {
          title: "Dormí una noche en Darvaza",
          body: "El cráter se ve mejor de noche, y se acampa cerca con la agencia.",
        },
        {
          title: "Combiná con Uzbekistán",
          body: "Konye-Urgench queda cerca de Jiva, y muchos viajeros cruzan por la frontera del norte.",
        },
        {
          title: "Pagá el paquete antes",
          body: "Con la agencia, desde tu país: allá las tarjetas extranjeras casi no funcionan.",
        },
      ],
      donts: [
        {
          title: "No cambies plata en la calle",
          body: "Es ilegal. Solo en bancos, a la cotización oficial.",
        },
        {
          title: "No fotografíes edificios oficiales",
          body: "Ministerios, palacios y controles: preguntale al guía antes de sacar la cámara.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Las tarjetas extranjeras casi no funcionan, y los cajeros tampoco.",
        },
        {
          title: "No subestimes el frío del desierto",
          body: "Las noches en Darvaza en invierno bajan de cero.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada o hervida.",
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
          title: "Carta de invitación y visa",
          body: "La visa de turista pide una carta de invitación que tramita una agencia autorizada, y el viaje se hace con guía. Empezá con semanas de anticipación.",
        },
        summary: "Lo que te van a pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Carta de invitación de la agencia",
          "Visa o aprobación de visa impresa",
          "Seguro de viaje",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "info",
          title: "Dólares, y nuevos",
          body: "Las tarjetas extranjeras casi no funcionan. Llevá dólares en billetes sanos para todo lo que no pagaste con la agencia.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes nuevos, sin marcas",
          "Billetes chicos para propinas",
          "Una riñonera o bolsillo interno",
        ],
      },
      {
        id: "desierto",
        title: "Para Darvaza",
        notice: null,
        summary: "Lo que pide la noche en el desierto",
        items: [
          "Un abrigo para la noche",
          "Linterna frontal",
          "Calzado cerrado para la arena",
          "Toallitas y papel",
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
          "Protector solar y labial",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin la carta de invitación",
        why: "Sin ella no hay visa de turista.",
        instead:
          "El trámite con una agencia autorizada, con semanas de anticipación.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Las tarjetas extranjeras casi no funcionan.",
        instead: "Dólares en efectivo, en billetes nuevos.",
      },
      {
        leave: "Billetes viejos o marcados",
        why: "Los bancos y comercios los rechazan.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Depender de internet",
        why: "Es lenta y está muy restringida.",
        instead: "Mapas y documentos descargados antes.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las noches en el desierto son frías buena parte del año.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Turkmenistán?",
        answer:
          "Sí. La de turista pide una carta de invitación por agencia y guía; la de tránsito, de pocos días, se pide en un consulado.",
      },
      {
        question: "¿Puedo viajar sin guía?",
        answer:
          "Con visa de turista, no. Con visa de tránsito sí, pero por pocos días y de paso a otro país.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "Abril, mayo, septiembre y octubre.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "Con el paquete pagado antes a la agencia y dólares en efectivo para el resto. Las tarjetas extranjeras casi no funcionan.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Turkmenistán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Funciona internet?",
        answer:
          "Es lenta y está muy restringida: muchos sitios y aplicaciones no funcionan.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No conviene: embotellada o hervida.",
      },
      {
        question: "¿Sigue encendido el cráter de Darvaza?",
        answer:
          "Arde desde hace décadas, pero el gobierno anunció planes para apagarlo. Preguntale a la agencia antes de viajar.",
      },
    ],
  },
};
