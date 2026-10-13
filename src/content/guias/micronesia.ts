import type { DestinationGuide } from "./types";

/**
 * Guía de Micronesia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: cuatro estados a miles de kilómetros entre sí, con
 * dos husos horarios —Yap y Chuuk tienen una hora menos que Pohnpei y
 * Kosrae—, y la base en Kolonia y no en Palikir, la capital, unos kilómetros
 * tierra adentro. Usa el dólar estadounidense, como las Marshall (spec, 16.3).
 * Pohnpei y Kosrae, con lluvia en los doce meses, ponen algo impermeable en la
 * lista de equipaje todo el año.
 */
export const micronesia: DestinationGuide = {
  slug: "micronesia",
  country: "Micronesia",
  subregion: "Micronesia",
  subhead:
    "Nan Madol, la ciudad de piedra de Pohnpei, los naufragios de la laguna de Chuuk, el dinero de piedra de Yap y las ruinas de Lelu en Kosrae, cuatro estados unidos por un vuelo que salta de isla en isla.",

  image: null,

  highlights: [
    {
      value: "Dinero de piedra",
      label: "en Yap: ruedas que todavía cambian de dueño",
      note: "Ruedas de piedra caliza de hasta tres metros, traídas en canoa desde Palaos. No se mueven: cambian de dueño en su lugar, y todo el pueblo sabe de quién es cada una.",
    },
    {
      value: "Nan Madol",
      label: "la ciudad de piedra sobre el arrecife",
      note: "Casi cien islotes artificiales hechos con columnas de basalto hace unos mil años, frente a Pohnpei, patrimonio de la humanidad. Se recorren en kayak o en lancha.",
    },
    {
      value: "Laguna de Chuuk",
      label: "un cementerio de barcos de la Segunda Guerra",
      note: "En 1944, un ataque estadounidense hundió decenas de barcos y aviones japoneses en la laguna. Hoy es uno de los mejores lugares del mundo para bucear en naufragios.",
    },
    {
      value: "Cuatro estados",
      label: "separados por miles de kilómetros de mar",
      note: "Yap, Chuuk, Pohnpei y Kosrae, unidos por un vuelo que salta de isla en isla. Yap y Chuuk tienen una hora menos que Pohnpei y Kosrae.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Micronesia",
      body: [
        "Muchos pasaportes entran sin visa por estadías cortas, con el pasaje de salida; otros tramitan la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra. Al llegar se completa un formulario de migración y aduana, en el que se declara la comida.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Micronesia",
      body: [
        "La moneda es el dólar estadounidense, como en Ecuador. Los hoteles y algunos comercios de Kolonia, Weno y Colonia aceptan tarjeta; en el resto se paga en efectivo.",
        "Hay cajeros en el pueblo principal de cada isla; fuera de ellos, ninguno.",
        "Llevá billetes chicos: en los mercados y en los taxis compartidos nadie tiene cambio.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, y mucha lluvia",
      body: [
        "Calor húmedo y parejo todo el año: las máximas rondan los treinta grados, y las mínimas, entre veintidós y veinticinco.",
        "Pohnpei y Kosrae están entre los lugares más lluviosos del mundo: llueve casi todos los días. Yap tiene una temporada más seca de enero a abril.",
        "Yap y Chuuk tienen una hora menos que Pohnpei y Kosrae.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a abril: lo más seco, sobre todo en Yap, y el mar más calmo para bucear en Chuuk.",
        "El 1 de marzo es el Día de Yap, con danzas tradicionales y ropa de fibras.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Micronesia",
      body: [
        "Entre los estados se va en el vuelo que salta de isla en isla, entre Guam y Hawái, con pocos vuelos por semana.",
        "En cada isla hay taxis, muchos compartidos, y autos de alquiler. A Nan Madol y a las islas de la laguna de Chuuk se va en lancha.",
        "Se maneja por la derecha, como en Estados Unidos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Nan Madol, el dinero de piedra de Yap y los naufragios de la guerra.",
    },
    {
      dimension: "Gastronomía",
      score: 4,
      rationale: "Pescado, fruta del pan, taro y la pimienta de Pohnpei.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Selva, cascadas y lagunas, con Pohnpei como la isla más verde.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale: "Pocas playas: más manglar y arrecife que arena.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Alojamiento sencillo, a precios de isla.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Pocos vuelos entre estados separados por miles de kilómetros.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Usa el dólar estadounidense.",
    },
  ],

  shines: [
    "El buceo en los naufragios de Chuuk.",
    "Nan Madol y el dinero de piedra.",
    "Islas casi sin turistas.",
  ],

  costs: [
    "Pocos vuelos, y caros.",
    "Lluvia casi todos los días en Pohnpei y Kosrae.",
    "Pocas playas de arena.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: calor parejo en las cuatro islas, con más o menos lluvia según el mes y la isla. Los precios están en dólares y son órdenes de magnitud; el buceo en Chuuk cuesta bastante más.",

  places: [
    {
      id: "kolonia",
      name: "Kolonia (Pohnpei)",
      region: "Pohnpei",
      tag: "La puerta de Pohnpei",
      blurb:
        "El pueblo más grande de Pohnpei, con el mercado, el campanario de la iglesia alemana y la roca de Sokehs detrás. Es la base del planificador: calor parejo y lluvia casi todos los días del año.",
      coords: [6.96, 158.21],
      featured: true,
      image: null,
    },
    {
      id: "palikir",
      name: "Palikir (la capital)",
      region: "Pohnpei",
      tag: "La capital",
      blurb:
        "La capital del país, unos kilómetros tierra adentro, con los edificios del gobierno federal rodeados de selva.",
      coords: [6.92, 158.16],
      image: null,
    },
    {
      id: "nan-madol",
      name: "Nan Madol (la ciudad de piedra)",
      region: "Pohnpei",
      tag: "La ciudad de piedra",
      blurb:
        "Casi cien islotes hechos con columnas de basalto sobre el arrecife, hace unos mil años, patrimonio de la humanidad. Se recorren en kayak o en lancha, según la marea.",
      coords: [6.84, 158.33],
      image: null,
    },
    {
      id: "kepirohi",
      name: "Cascada de Kepirohi",
      region: "Pohnpei",
      tag: "La cascada",
      blurb:
        "Una cascada que cae sobre una pared de basalto, con una pileta para nadar, cerca de Nan Madol.",
      coords: [6.83, 158.31],
      image: null,
    },
    {
      id: "weno",
      name: "Weno (Chuuk)",
      region: "Chuuk",
      tag: "La puerta de Chuuk",
      blurb:
        "La isla principal de la laguna de Chuuk, con el aeropuerto, los hoteles y las lanchas de buceo.",
      coords: [7.45, 151.85],
      image: null,
    },
    {
      id: "laguna-de-chuuk",
      name: "Laguna de Chuuk (naufragios)",
      region: "Chuuk",
      tag: "Los naufragios",
      blurb:
        "Decenas de barcos y aviones japoneses hundidos en 1944 y cubiertos de coral, en uno de los mejores lugares del mundo para bucear en naufragios.",
      coords: [7.4, 151.78],
      image: null,
    },
    {
      id: "colonia-yap",
      name: "Colonia (Yap)",
      region: "Yap",
      tag: "La isla de la tradición",
      blurb:
        "El pueblo de Yap, la isla más tradicional del país, con casas de hombres, caminos de piedra y mantarrayas en los canales. Llueve menos de enero a abril.",
      coords: [9.51, 138.12],
      image: null,
    },
    {
      id: "dinero-de-piedra",
      name: "Dinero de piedra (Yap)",
      region: "Yap",
      tag: "El banco de piedra",
      blurb:
        "Los bancos de dinero de piedra de los pueblos de Yap, con ruedas de caliza de varios metros que todavía cambian de dueño.",
      coords: [9.53, 138.13],
      image: null,
    },
    {
      id: "lelu",
      name: "Lelu (Kosrae)",
      region: "Kosrae",
      tag: "Las ruinas de Lelu",
      blurb:
        "Las ruinas de basalto de Lelu, de la época de Nan Madol, en Kosrae, la isla más tranquila del país, de selva y arrecifes. Llueve casi todos los días.",
      coords: [5.33, 163.03],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Micronesia, ropa liviana y fresca, traje de baño, protector, repelente y algo impermeable: en Pohnpei y Kosrae llueve casi todos los días. Ropa que tape los muslos, sobre todo en Yap, dólares en billetes chicos y la certificación de buceo si vas a Chuuk.",
    keyPoints: [
      "Muchos pasaportes entran sin visa: verificá el tuyo.",
      "Usan el dólar estadounidense, como Ecuador.",
      "Cuatro estados lejos entre sí, unidos por pocos vuelos.",
      "En Yap y en los pueblos, los muslos se tapan.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, protector, repelente y una campera impermeable liviana.",
      templado: "Ropa liviana y un buzo fino para el avión y las lanchas.",
      fresco: "Un buzo liviano para las noches de lluvia y las lanchas.",
      frio: "No hace frío en Micronesia: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de patas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V; casi todos los modernos lo dicen. Los cortes de luz son frecuentes.",
    },
    tips: {
      dos: [
        {
          title: "Recorré Nan Madol con la marea alta",
          body: "Es cuando las lanchas y los kayaks entran entre los islotes.",
        },
        {
          title: "Buceá en los naufragios de Chuuk",
          body: "Barcos y aviones de la guerra cubiertos de coral, con guías que los conocen de memoria.",
        },
        {
          title: "Pedí permiso en los pueblos de Yap",
          body: "Los caminos de piedra y los bancos de dinero son de los pueblos: se pide permiso, y a veces se paga una entrada.",
        },
        {
          title: "Llevá algo impermeable",
          body: "En Pohnpei y Kosrae llueve casi todos los días.",
        },
        {
          title: "Probá la pimienta de Pohnpei",
          body: "Una de las más aromáticas del mundo, que se vende en el mercado de Kolonia.",
        },
        {
          title: "Llevá billetes chicos",
          body: "En los mercados y los taxis compartidos nadie tiene cambio.",
        },
      ],
      donts: [
        {
          title: "No andes con los muslos al aire",
          body: "En Yap y en los pueblos se consideran íntimos: shorts largos o un pareo.",
        },
        {
          title: "No toques el dinero de piedra",
          body: "Cada rueda tiene dueño, y no se toca ni se sube.",
        },
        {
          title: "No te lleves nada de los naufragios",
          body: "Están protegidos: se mira, no se toca.",
        },
        {
          title: "No cuentes con la tarjeta fuera de los pueblos",
          body: "Casi todo se paga en efectivo.",
        },
        {
          title: "No te olvides de la hora",
          body: "Yap y Chuuk tienen una hora menos que Pohnpei y Kosrae: revisá cada vuelo.",
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
          title: "Sin visa para muchos",
          body: "Muchos pasaportes entran sin visa por estadías cortas, con el pasaje de salida. Verificá el tuyo.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: {
          tone: "warn",
          title: "Lluvia casi todos los días",
          body: "En Pohnpei y Kosrae llueve casi todos los días del año: algo impermeable y ropa que se seque rápido.",
        },
        summary: "Pohnpei, Kosrae y la selva",
        items: [
          "Una campera impermeable liviana",
          "Ropa que se seque rápido",
          "Bolsas estancas para el teléfono y los documentos",
          "Calzado que se pueda mojar",
        ],
      },
      {
        id: "buceo",
        title: "Para el buceo",
        notice: {
          tone: "info",
          title: "Certificación",
          body: "Para bucear en los naufragios de Chuuk piden la certificación, y para los más profundos, experiencia.",
        },
        summary: "Chuuk, Yap y los arrecifes",
        items: [
          "La certificación de buceo",
          "Máscara y snorkel, si tenés",
          "Una remera de lycra",
          "Protector solar que no dañe el arrecife",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "Hay dengue: repelente y manga larga al atardecer. No hay malaria, y la atención médica es básica.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y para todo el viaje",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Shorts cortos para los pueblos",
        why: "En Yap y en los pueblos, los muslos se tapan.",
        instead: "Shorts largos, pantalones livianos o un pareo.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de los pueblos principales casi nadie la acepta.",
        instead: "Dólares en billetes chicos.",
      },
      {
        leave: "Ropa que tarda en secarse",
        why: "Con la lluvia y la humedad no se seca nunca.",
        instead: "Telas livianas que se sequen rápido.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Hay pocos vuelos entre los estados.",
        instead: "Días libres antes de la conexión internacional.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las lanchas hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "La planchita o el secador de 220 V",
        why: "A 120 V calientan poco o no andan, y muchos hoteles tienen secador.",
        instead: "El del alojamiento, o uno que diga 100-240 V.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Micronesia?",
        answer:
          "Muchos pasaportes entran sin visa por estadías cortas; otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar estadounidense, como en Ecuador. Llevá billetes chicos.",
      },
      {
        question: "¿Cómo me muevo entre las islas?",
        answer:
          "En el vuelo que salta de isla en isla entre Guam y Hawái, con pocos vuelos por semana.",
      },
      {
        question: "¿Hay que bucear para ver los naufragios de Chuuk?",
        answer:
          "Los mejores se ven buceando, pero algunos están a poca profundidad y se ven con snorkel.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De enero a abril, lo más seco, sobre todo en Yap.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Cada isla tiene su lengua; el inglés es el oficial y se entiende en todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu país usa enchufes de patas redondas o en V, sí: en Micronesia son de patas planas, a 120 V, como en Estados Unidos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o hervida.",
      },
    ],
  },
};
