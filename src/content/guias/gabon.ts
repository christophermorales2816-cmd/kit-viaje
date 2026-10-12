import type { DestinationGuide } from "./types";

/**
 * Guía de Gabón.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un país que es casi todo selva, con trece parques
 * nacionales que ocupan más de la décima parte del territorio; es el dato de
 * su portada. Es también de los más caros de África, y los lodges de Loango y
 * la Lopé se venden en paquetes, muy por encima de lo que el factor permite:
 * la nota de alcance lo dice. Pide la vacuna de la fiebre amarilla a todos.
 */
export const gabon: DestinationGuide = {
  slug: "gabon",
  country: "Gabón",
  subregion: "África Central",
  subhead:
    "Selva sobre el ecuador, elefantes en la playa de Loango, mandriles en la Lopé, ballenas y tortugas frente a la costa y un tren que cruza la selva hasta Franceville.",

  image: null,

  highlights: [
    {
      value: "13 parques",
      label: "nacionales, más de la décima parte del país",
      note: "Casi todo Gabón es selva, y una parte grande está protegida: de los manglares de Akanda a la sabana de la Lopé y las playas de Loango.",
    },
    {
      value: "Loango",
      label: "elefantes y búfalos en la playa",
      note: "Una costa donde la selva llega al mar, con elefantes, búfalos y gorilas en la arena, y ballenas jorobadas de julio a septiembre.",
    },
    {
      value: "Transgabonés",
      label: "un tren que cruza la selva hasta Franceville",
      note: "De Libreville a Franceville, pasando por la Lopé, con la selva por la ventana.",
    },
    {
      value: "Vacuna",
      label: "contra la fiebre amarilla, obligatoria para entrar",
      note: "Gabón pide el certificado a todos los viajeros. Tiene que estar aplicada al menos diez días antes de llegar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Gabón",
      body: [
        "Casi todos los pasaportes tramitan la visa electrónica online antes de viajar, y la retiran al llegar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Gabón pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros. La vacuna tiene que estar aplicada al menos diez días antes.",
        "El pasaporte tiene que tener al menos seis meses de vigencia.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Gabón",
      body: [
        "La moneda es el franco CFA de África Central, el mismo de Camerún, atado al euro.",
        "La tarjeta funciona en hoteles y restaurantes grandes de Libreville y Port-Gentil; en el resto, efectivo. Los euros en billetes nuevos se cambian fácil.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Selva sobre el ecuador",
      body: [
        "Gabón está sobre el ecuador: calor húmedo todo el año, con lluvias fuertes de septiembre a mayo.",
        "De junio a agosto es la temporada seca, más fresca y nublada; en Loango y la Lopé es la mejor época para ver animales.",
        "En el noreste, en Ivindo, llueve en dos temporadas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la temporada seca, con ballenas jorobadas frente a la costa de julio a septiembre.",
        "De noviembre a febrero desovan las tortugas laúd en las playas, como las de Pongara, frente a Libreville.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Gabón",
      body: [
        "Entre Libreville y el interior van el tren Transgabonés, hasta Franceville pasando por la Lopé, y vuelos internos a Port-Gentil y Franceville.",
        "A Loango se llega en avioneta o en lancha, casi siempre con el alojamiento.",
        "En Libreville hay taxis compartidos: acordá el precio antes de subir. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 4,
      rationale:
        "Lambaréné y el hospital de Albert Schweitzer, y la Libreville colonial.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Poulet nyembwe, pescado a la brasa, mandioca y cocina francesa.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale: "Selva, sabana, playas vírgenes y ríos.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale: "Playas vírgenes donde la selva llega al mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "De los países más caros de África.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Pocas rutas, y vuelos chicos, barcos y lodges que hay que coordinar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco CFA está atado al euro.",
    },
  ],

  shines: [
    "Selva y fauna casi sin turistas.",
    "Elefantes y gorilas en la playa de Loango.",
    "Ballenas y tortugas.",
  ],

  costs: [
    "Muy caro.",
    "Logística complicada.",
    "Visa previa y vacuna obligatoria.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Libreville que la Lopé o Franceville. Los precios están en francos CFA y son órdenes de magnitud; los lodges de Loango y la Lopé se venden en paquetes que cuestan bastante más.",

  places: [
    {
      id: "libreville",
      name: "Libreville",
      region: "Estuario",
      tag: "La capital del estuario",
      blurb:
        "Una capital sobre el estuario del Komo, con el bulevar junto al mar, el mercado de Mont-Bouët y el museo de las artes. Es la base del planificador: calor húmedo todo el año y una temporada seca de junio a agosto.",
      coords: [0.4162, 9.4673],
      featured: true,
      image: null,
    },
    {
      id: "pointe-denis",
      name: "Pointe-Denis (playas)",
      region: "Estuario",
      tag: "Playas frente a la capital",
      blurb:
        "Playas del otro lado del estuario, a media hora de lancha, junto al parque de Pongara, donde desovan las tortugas laúd de noviembre a febrero.",
      coords: [0.38, 9.3],
      image: null,
    },
    {
      id: "akanda",
      name: "Parque Nacional de Akanda (manglares)",
      region: "Estuario",
      tag: "Manglares",
      blurb:
        "Un parque de manglares al norte de Libreville, con aves migratorias y paseos en lancha.",
      coords: [0.58, 9.55],
      image: null,
    },
    {
      id: "lambarene",
      name: "Lambaréné (hospital Schweitzer)",
      region: "Moyen-Ogooué",
      tag: "El hospital de Schweitzer",
      blurb:
        "La ciudad sobre el río Ogooué donde Albert Schweitzer fundó su hospital, hoy museo, con paseos en piragua por los lagos.",
      coords: [-0.7, 10.2333],
      image: null,
    },
    {
      id: "lope",
      name: "Parque Nacional de la Lopé",
      region: "Ogooué-Ivindo",
      tag: "Sabana y mandriles",
      blurb:
        "Sabana y selva con manadas de mandriles, elefantes y gorilas, junto al tren Transgabonés. Patrimonio de la humanidad.",
      coords: [-0.2, 11.6],
      image: null,
    },
    {
      id: "loango",
      name: "Parque Nacional de Loango",
      region: "Ogooué-Maritime",
      tag: "Elefantes en la playa",
      blurb:
        "Una costa donde la selva llega al mar, con elefantes y búfalos en la playa, gorilas y ballenas de julio a septiembre.",
      coords: [-2.0, 9.5],
      image: null,
    },
    {
      id: "port-gentil",
      name: "Port-Gentil",
      region: "Ogooué-Maritime",
      tag: "La ciudad del petróleo",
      blurb:
        "La capital del petróleo, en una isla sin ruta al resto del país, con playas y la puerta hacia Loango.",
      coords: [-0.7193, 8.7815],
      image: null,
    },
    {
      id: "ivindo",
      name: "Parque Nacional de Ivindo (Makokou)",
      region: "Ogooué-Ivindo",
      tag: "Cataratas en la selva",
      blurb:
        "Selva profunda con las cataratas de Kongou y el claro de Langoué, donde se juntan elefantes y gorilas.",
      coords: [0.57, 12.86],
      image: null,
    },
    {
      id: "franceville",
      name: "Franceville (mesetas Batéké)",
      region: "Haut-Ogooué",
      tag: "Las mesetas Batéké",
      blurb:
        "La última estación del Transgabonés, con la sabana de las mesetas Batéké cerca.",
      coords: [-1.6333, 13.5833],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Gabón, ropa liviana y fresca, algo impermeable y calzado que se seque rápido: es selva sobre el ecuador. Para los parques, ropa de colores neutros que cubra y binoculares. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano y un adaptador.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos, y visa electrónica antes de viajar.",
      "Calor húmedo todo el año; temporada seca de junio a agosto.",
      "Muy caro: los lodges de los parques se venden en paquetes.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, sombrero, protector y repelente. Algo impermeable de septiembre a mayo.",
      templado:
        "Ropa liviana y un buzo fino para la temporada seca y el aire acondicionado.",
      fresco: "Un buzo liviano para las noches de la temporada seca.",
      frio: "No hace frío en Gabón: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo C",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas finas. Si tu enchufe es de otro tipo, llevá adaptador. Los cortes de luz son frecuentes fuera de Libreville. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes, con el certificado en el bolso de mano.",
        },
        {
          title: "Reservá los parques con un operador",
          body: "Los traslados, los guías y los lodges se coordinan juntos.",
        },
        {
          title: "Tomá el Transgabonés",
          body: "De Libreville a la Lopé, con la selva por la ventana.",
        },
        {
          title: "Probá el poulet nyembwe",
          body: "Pollo con salsa de nuez de palma, el plato nacional.",
        },
        {
          title: "Llevá binoculares",
          body: "Para los mandriles de la Lopé y las aves de Akanda.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Sin él te pueden negar la entrada.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni del palacio presidencial, policías o militares.",
        },
        {
          title: "No te acerques a los elefantes de bosque",
          body: "Son imprevisibles: la distancia la marca el guía.",
        },
        {
          title: "No compres carne de monte ni marfil",
          body: "Son de animales protegidos, y sacarlos del país es ilegal.",
        },
        {
          title: "No te metas al mar sin preguntar",
          body: "Las corrientes de la costa son fuertes.",
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
          title: "Visa y fiebre amarilla",
          body: "Casi todos los pasaportes tramitan la visa electrónica antes de viajar, y todos los viajeros necesitan el certificado de la fiebre amarilla.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa electrónica aprobada",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "selva",
        title: "Para la selva",
        notice: {
          tone: "info",
          title: "Humedad y barro",
          body: "En los parques llueve y se camina por barro: ropa de secado rápido y calzado firme.",
        },
        summary: "Lo que piden los parques",
        items: [
          "Calzado de trekking ya usado",
          "Ropa de colores neutros que cubra",
          "Una campera impermeable",
          "Binoculares",
          "Bolsas secas para la cámara",
        ],
      },
      {
        id: "calor",
        title: "Para el calor",
        notice: null,
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero y protector",
          "Una batería externa para los cortes de luz",
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
        leave: "Ropa de colores fuertes en los parques",
        why: "Espanta a los animales, y el azul y el negro atraen a las moscas tse-tse.",
        instead: "Colores neutros: beige, caqui, verde.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con la humedad no se seca nunca.",
        instead: "Ropa de secado rápido.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Libreville casi no se acepta.",
        instead: "Francos en efectivo.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Los traslados dependen de vuelos chicos, barcos y el tren.",
        instead: "Días de margen.",
      },
      {
        leave: "Zapatillas de lona para la selva",
        why: "El barro las destroza.",
        instead: "Calzado de trekking ya usado.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Gabón?",
        answer:
          "Casi todos los pasaportes la tramitan online antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer: "Sí, para todos los viajeros.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre, la temporada seca, con ballenas frente a la costa.",
      },
      {
        question: "¿Cómo llego a Loango?",
        answer:
          "En avioneta o en lancha, casi siempre como parte del paquete del lodge.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés es el oficial; en la calle, también fang y otros idiomas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Gabón usa el tipo C, de dos patas redondas, a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
