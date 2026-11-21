import type { DestinationGuide } from "./types";

/**
 * Guía de Granada.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: la isla de las especias, con un bosque de montaña
 * —Grand Etang, a más de quinientos metros— más fresco y lluvioso que la
 * costa. Y Carriacou y Petite Martinique, que el huracán Beryl golpeó de
 * lleno en 2024: la guía las presenta como lo que son, islas chicas y
 * remotas, y no describe la reconstrucción.
 */
export const granada: DestinationGuide = {
  slug: "granada",
  country: "Granada",
  subregion: "Caribe",
  subhead:
    "La isla de las especias: nuez moscada, cacao, la playa de Grand Anse y un bosque de montaña con un lago en un cráter. Al sur del Caribe, con Carriacou al lado.",

  image: null,

  highlights: [
    {
      value: "Nuez moscada",
      label: "en la bandera",
      note: "Granada produce buena parte de la nuez moscada del mundo, y la lleva dibujada en la bandera.",
    },
    {
      value: "1.º",
      label: "parque de esculturas bajo el mar",
      note: "El de la bahía de Molinere, frente a la costa oeste, fue el primero del mundo. Se ve haciendo snorkel.",
    },
    {
      value: "3 islas",
      label: "Granada, Carriacou y Petite Martinique",
      note: "Las dos chicas, al norte, se recorren en ferry desde Saint George's.",
    },
    {
      value: "2,70 = 1",
      label: "dólares del Caribe Oriental por dólar",
      note: "Una paridad fija con el dólar estadounidense, que se acepta en casi todos lados.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "La tarjeta de migración se completa en línea antes de llegar, en el sitio del gobierno. Pueden pedirte el pasaje de salida.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar del Caribe Oriental tiene paridad fija con el estadounidense, que se acepta en casi todos lados. El cambio suele llegar en moneda local.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los minibuses, los mercados y el pescado de los viernes en Gouyave, efectivo.",
        "Muchas cuentas suman un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "islas",
      title: "Carriacou y Petite Martinique",
      body: [
        "Al norte de Granada, a dos horas de ferry o veinte minutos de avioneta, están Carriacou y Petite Martinique: islas chicas, de pocos habitantes, con playas vacías y buen buceo.",
        "El huracán Beryl las golpeó de lleno en 2024. Tienen pocos servicios: el efectivo y lo esencial se resuelven antes, en Granada.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a mayo es la época seca y la temporada alta. De junio a diciembre llueve más, en chaparrones.",
        "Granada queda al sur del recorrido habitual de los huracanes, aunque la temporada va de junio a noviembre y algunos llegan.",
        "En agosto se celebra Spicemas, el carnaval de la isla.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los minibuses, cada uno con su nombre pintado, salen de Saint George's a toda la isla. Son baratos y en efectivo.",
        "Los taxis tienen tarifas fijas: acuerda el precio antes de subir. Se conduce por la izquierda, y para alquilar un auto hace falta un permiso local.",
        "A Carriacou se va en ferry desde Saint George's o en avioneta.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias, nada de dejar cosas solas en la arena y taxis de confianza de noche.",
        "En el bosque de Grand Etang los senderos se ponen barrosos y resbalan: calzado con buena suela.",
        "En las zonas urbanas el agua corriente está tratada. Si tienes el estómago sensible, o en Carriacou, embotellada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 8.5,
      rationale:
        "Grand Anse, Morne Rouge y las calas del sur, y las playas vacías de Carriacou.",
    },
    {
      dimension: "Mar y buceo",
      score: 9,
      rationale:
        "El parque de esculturas bajo el mar, arrecifes y barcos hundidos.",
    },
    {
      dimension: "Naturaleza",
      score: 8.5,
      rationale:
        "El bosque de Grand Etang, cascadas y las plantaciones de cacao y especias.",
    },
    {
      dimension: "Gastronomía",
      score: 8.5,
      rationale:
        "El oil down, el chocolate de la isla y el pescado de los viernes en Gouyave.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Menos cara que otras islas del Caribe Oriental, aunque los resorts siguen siendo caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Vuelos directos al aeropuerto, a minutos de Grand Anse, y minibuses a toda la isla.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Grand Anse, una de las mejores playas del Caribe, a minutos del aeropuerto.",
    "Especias, cacao y chocolate de la isla.",
    "Carriacou: playas vacías y la vida de una isla chica.",
  ],

  costs: [
    "Carriacou y Petite Martinique, con pocos servicios.",
    "La temporada de lluvias, de junio a diciembre.",
    "Los resorts de Grand Anse, que son caros.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: el bosque de Grand Etang no pide lo mismo que la playa de Grand Anse. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares del Caribe Oriental.",

  places: [
    {
      id: "saint-georges",
      name: "Saint George's",
      region: "Suroeste",
      tag: "Puerto en herradura",
      blurb:
        "La capital, con casas de techos rojos alrededor de un puerto en forma de herradura, el fuerte George y el mercado de especias. Es la base del planificador.",
      coords: [12.0561, -61.7488],
      featured: true,
      image: null,
    },
    {
      id: "grand-anse",
      name: "Grand Anse",
      region: "Suroeste",
      tag: "Playa",
      blurb:
        "Tres kilómetros de arena blanca y agua calma, a minutos de la capital y del aeropuerto. Muy cerca, el parque de esculturas bajo el mar de Molinere.",
      coords: [12.027, -61.761],
      image: null,
    },
    {
      id: "costa-sur",
      name: "La costa sur",
      region: "Sur",
      tag: "Calas y marinas",
      blurb:
        "Penínsulas y calas tranquilas, como Lance aux Épines, con marinas y casas frente al mar.",
      coords: [12.005, -61.75],
      image: null,
    },
    {
      id: "grand-etang",
      name: "Grand Etang",
      region: "Centro",
      tag: "Bosque y cráter",
      blurb:
        "Un bosque de montaña a más de quinientos metros, con un lago en un cráter, monos mona, cascadas y senderos. Más fresco y lluvioso que la costa.",
      coords: [12.095, -61.695],
      image: null,
    },
    {
      id: "gouyave",
      name: "Gouyave",
      region: "Oeste",
      tag: "Pescado de los viernes",
      blurb:
        "Un pueblo de pescadores con la estación de la nuez moscada y, los viernes a la noche, la calle llena de puestos de pescado.",
      coords: [12.1667, -61.7333],
      image: null,
    },
    {
      id: "sauteurs",
      name: "Sauteurs y el norte",
      region: "Norte",
      tag: "Cacao",
      blurb:
        "El extremo norte, con la plantación de cacao de Belmont, donde se hace chocolate, y playas como Bathway.",
      coords: [12.2186, -61.6394],
      image: null,
    },
    {
      id: "grenville",
      name: "Grenville y la costa este",
      region: "Este",
      tag: "Costa atlántica",
      blurb:
        "La segunda ciudad, sobre el Atlántico, cerca de la destilería de ron de River Antoine, que trabaja con una rueda de agua.",
      coords: [12.1167, -61.6167],
      image: null,
    },
    {
      id: "carriacou",
      name: "Carriacou",
      region: "Granadinas",
      tag: "Isla chica",
      blurb:
        "Una isla chica al norte, con playas vacías como Paradise Beach, buceo y tradición de barcos de madera. Remota y con pocos servicios.",
      coords: [12.4833, -61.45],
      image: null,
    },
    {
      id: "petite-martinique",
      name: "Petite Martinique",
      region: "Granadinas",
      tag: "La más chica",
      blurb:
        "La isla habitada más chica del país, de pescadores y constructores de barcos, a minutos en lancha de Carriacou.",
      coords: [12.525, -61.38],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Granada es calor todo el año: ropa ligera, traje de baño, protector y repelente. Si vas al bosque de Grand Etang, suma un impermeable y calzado que agarre en el barro: arriba es más fresco y llueve casi todos los días. De enero a mayo es la época seca.",
    keyPoints: [
      "Calor todo el año, con más lluvia de junio a diciembre.",
      "El bosque de Grand Etang es más fresco y lluvioso que la costa.",
      "Carriacou y Petite Martinique tienen pocos servicios.",
      "El enchufe es el británico, de tres patas rectangulares.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa todo el año.",
      templado:
        "Camiseta, una capa ligera y un impermeable. Es el clima del bosque de Grand Etang.",
      fresco: "Un suéter ligero para la noche en la montaña.",
      frio: "En Granada no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Si el tuyo es distinto, lleva adaptador, y si vienes de un país con 110 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Haz snorkel en el parque de esculturas",
          body: "Está frente a la costa oeste, a minutos de Saint George's, en agua poco profunda.",
        },
        {
          title: "Completa la tarjeta de migración en línea",
          body: "En el sitio del gobierno, antes de viajar. Es gratis.",
        },
        {
          title: "Ve a Gouyave un viernes a la noche",
          body: "Pescado a la parrilla, música y el pueblo entero en la calle.",
        },
        {
          title: "Lleva efectivo a Carriacou",
          body: "Hay pocos cajeros y almacenes chicos.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "El arrecife y las esculturas lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No subas a Grand Etang en sandalias",
          body: "Los senderos son de barro y raíces, y resbalan.",
        },
        {
          title: "No toques el coral ni las esculturas",
          body: "Son arrecifes vivos: un roce los daña.",
        },
        {
          title: "No te refugies bajo un manzanillo",
          body: "Es un árbol de playa venenoso: su savia quema la piel.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
        },
        {
          title: "No subestimes el sol",
          body: "Sobre el agua clara, quema el doble.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "info",
          title: "Entrada",
          body: "Muchos pasaportes entran sin visa; otros la necesitan. La tarjeta de migración se completa en línea antes de llegar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "La tarjeta de migración, completada en línea",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre. Granada queda al sur del recorrido habitual, pero algunos llegan: sigue los avisos locales.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Snorkel propio, si tienes",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "bosque",
        title: "Bosque y cascadas",
        notice: {
          tone: "info",
          title: "Llueve casi todos los días",
          body: "Grand Etang está a más de quinientos metros, entre nubes.",
        },
        summary: "Para Grand Etang y las cascadas",
        items: [
          "Calzado con buena suela, que se pueda mojar",
          "Impermeable ligero",
          "Traje de baño para las pozas de las cascadas",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos: hay dengue",
          "Algo para las quemaduras de sol",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador al enchufe británico de tres patas",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En Granada no hay un mes frío.",
        instead: "Una capa ligera y un impermeable para la montaña.",
      },
      {
        leave: "Un adaptador de clavijas planas",
        why: "El enchufe es el británico, de tres patas rectangulares.",
        instead: "Un adaptador tipo G o uno universal.",
      },
      {
        leave: "Solo tarjeta para Carriacou",
        why: "Hay pocos cajeros, y algunos lugares solo aceptan efectivo.",
        instead: "Efectivo, sacado en Granada.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y completa la tarjeta de migración en línea.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: tienen paridad fija con el dólar del Caribe Oriental. El cambio suele llegar en moneda local.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De enero a mayo, la época seca. En agosto, si quieres vivir Spicemas, el carnaval.",
      },
      {
        question: "¿Cómo se llega a Carriacou?",
        answer:
          "En ferry desde Saint George's, en unas dos horas, o en avioneta, en veinte minutos.",
      },
      {
        question: "¿Qué es el oil down?",
        answer:
          "El plato nacional: fruta del pan, carne o pescado salado y verduras cocidas en leche de coco con cúrcuma, en una sola olla.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En las zonas urbanas está tratada. Si tienes el estómago sensible, o en Carriacou, embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, salvo que el tuyo sea el británico de tres patas. El voltaje es 230 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
