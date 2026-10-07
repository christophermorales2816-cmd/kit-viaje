import type { DestinationGuide } from "./types";

/**
 * Guía de Estonia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero de los bálticos, con inviernos largos
 * bajo cero y un verano corto de noches blancas. Y una combinación que se arma
 * sola: Tallin y Helsinki están a dos horas de barco.
 */
export const estonia: DestinationGuide = {
  slug: "estonia",
  country: "Estonia",
  subregion: "Europa del Norte",
  subhead:
    "Un casco medieval casi intacto, bosques, pantanos con pasarelas e islas en el Báltico. Inviernos largos bajo cero y veranos frescos con noches que casi no terminan.",

  image: null,

  highlights: [
    {
      value: "Siglo XV",
      label: "el casco viejo de Tallin, casi intacto",
      note: "Murallas, torres y calles de piedra, patrimonio de la humanidad. Se recorre a pie, sobre adoquines.",
    },
    {
      value: "2 h",
      label: "en ferry hasta Helsinki",
      note: "Tallin y Helsinki se combinan fácil: hay barcos todo el día y todo el año.",
    },
    {
      value: "Sauna de humo",
      label: "patrimonio inmaterial de la humanidad",
      note: "Es la tradición de Võromaa, en el sur del país. La sauna, como en Finlandia, se usa todo el año.",
    },
    {
      value: "Junio",
      label: "noches blancas",
      note: "A fines de junio casi no oscurece, y el solsticio se celebra con fogatas en todo el país. En diciembre, en cambio, hay pocas horas de luz.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Estonia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Estonia, Letonia y Finlandia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Estonia",
      body: [
        "La moneda es el euro, y el país es de los más digitales de Europa: la tarjeta sin contacto se acepta en todos lados y el efectivo casi no hace falta.",
        "La propina es opcional: redondear o dejar algo si te atendieron bien es un gesto, no una obligación.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Báltico: inviernos largos",
      body: [
        "Estonia es hemisferio norte: enero es invierno y julio, verano. El invierno es largo, bajo cero de diciembre a marzo, con nieve y pocas horas de luz; a veces el mar se congela en la costa.",
        "El verano es fresco y luminoso, con días larguísimos. El interior, con Tartu y Otepää, es más frío en invierno y algo más cálido en verano que la costa y las islas.",
        "En los bosques y pantanos, en verano, hay mosquitos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la mejor época: noches blancas, islas, bosques y la fiesta del solsticio, a fines de junio.",
        "Diciembre trae el mercado navideño del casco viejo de Tallin, con frío y nieve. En enero y febrero, Otepää es la capital del esquí de fondo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Estonia",
      body: [
        "Los buses entre ciudades son cómodos y frecuentes, y hay trenes a Tartu y Pärnu. A las islas se va en ferry.",
        "Desde Tallin salen barcos a Helsinki todo el día, en unas dos horas, y buses a Riga.",
        "Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en el casco viejo cuando llegan los cruceros.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Casco medieval",
      score: 9.5,
      rationale:
        "Tallin tiene uno de los cascos medievales mejor conservados del norte de Europa.",
    },
    {
      dimension: "Naturaleza",
      score: 8,
      rationale:
        "Bosques, pantanos con pasarelas, islas y costa, con libre acceso a casi todo.",
    },
    {
      dimension: "Diseño y vida digital",
      score: 8.5,
      rationale:
        "Un país muy conectado, con barrios creativos en Tallin y conexión en casi todos lados.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Cocina nórdica sencilla, pan negro, pescados y una escena joven en Tallin.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7.5,
      rationale:
        "Más accesible que Finlandia o Escandinavia; el casco viejo de Tallin es lo más caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Buses buenos entre ciudades, ferries a las islas y a Helsinki, y todo cerca.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en todos lados.",
    },
  ],

  shines: [
    "Un casco medieval de cuento a dos horas de barco de Helsinki.",
    "Naturaleza tranquila: bosques, pantanos e islas.",
    "Un país chico, digital y fácil.",
  ],

  costs: [
    "Inviernos largos, fríos y oscuros.",
    "El casco viejo se llena con los cruceros en verano.",
    "Fuera de Tallin, poca oferta en invierno.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Otepää en febrero no pide lo mismo que Pärnu en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "tallin",
      name: "Tallin",
      region: "Norte",
      tag: "Casco medieval",
      blurb:
        "Murallas, torres y calles de piedra del casco viejo, barrios creativos y el mar enfrente. Es la base del planificador: inviernos bajo cero, veranos frescos con días larguísimos.",
      coords: [59.437, 24.7536],
      featured: true,
      image: null,
    },
    {
      id: "tartu",
      name: "Tartu",
      region: "Sur",
      tag: "Ciudad universitaria",
      blurb:
        "La ciudad universitaria del país, joven y con cafés, junto al río Emajõgi.",
      coords: [58.378, 26.729],
      image: null,
    },
    {
      id: "parnu",
      name: "Pärnu",
      region: "Oeste",
      tag: "Capital del verano",
      blurb:
        "La capital del verano estonio, con una playa larga de arena y spas.",
      coords: [58.3859, 24.4971],
      image: null,
    },
    {
      id: "saaremaa",
      name: "Isla de Saaremaa",
      region: "Islas",
      tag: "Molinos y castillo",
      blurb:
        "La isla más grande del país, con molinos de viento, un castillo episcopal y pueblos tranquilos. Se llega en ferry.",
      coords: [58.2481, 22.5039],
      image: null,
    },
    {
      id: "lahemaa",
      name: "Parque Nacional de Lahemaa",
      region: "Norte",
      tag: "Bosques y mansiones",
      blurb:
        "Bosques, costa de rocas, pantanos con pasarelas y mansiones de la nobleza báltica, a una hora de Tallin.",
      coords: [59.53, 25.9],
      image: null,
    },
    {
      id: "haapsalu",
      name: "Haapsalu",
      region: "Oeste",
      tag: "Pueblo balneario",
      blurb:
        "Un pueblo balneario de casas de madera junto al mar, con un castillo episcopal.",
      coords: [58.9431, 23.5414],
      image: null,
    },
    {
      id: "otepaa",
      name: "Otepää",
      region: "Sur",
      tag: "Capital del invierno",
      blurb:
        "La capital de los deportes de invierno, entre colinas y lagos, con esquí de fondo de diciembre a marzo.",
      coords: [58.0581, 26.4961],
      image: null,
    },
    {
      id: "soomaa",
      name: "Parque Nacional de Soomaa",
      region: "Sur",
      tag: "La quinta estación",
      blurb:
        "Pantanos y ríos que en primavera se desbordan —le dicen la quinta estación— y se recorren en canoa.",
      coords: [58.43, 25.03],
      image: null,
    },
    {
      id: "viljandi",
      name: "Viljandi",
      region: "Sur",
      tag: "Música folk",
      blurb:
        "Un pueblo con ruinas de castillo sobre un lago, famoso por su festival de música folk en verano.",
      coords: [58.3639, 25.59],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Estonia tiene inviernos largos, bajo cero de diciembre a marzo, con nieve y pocas horas de luz, y veranos frescos con días larguísimos. En invierno, abrigo de verdad, gorro, guantes y calzado que no resbale; en verano, capas, una campera liviana y algo impermeable, y repelente si vas a los bosques y pantanos. Para el casco viejo de Tallin, en cualquier estación, calzado cómodo para los adoquines.",
    keyPoints: [
      "Hemisferio norte: el invierno, de diciembre a marzo, es largo y bajo cero; el verano, de junio a agosto, fresco y luminoso.",
      "En diciembre hay muy pocas horas de luz; en junio casi no oscurece.",
      "El interior es más frío en invierno que la costa y las islas.",
      "En verano, en los bosques y pantanos, hay mosquitos.",
    ],
    adviceByBucket: {
      calido: "Pasa poco. Ropa liviana y un buzo para la noche, que refresca.",
      templado:
        "Capas y una campera liviana. Es el verano estonio: luminoso y con algún chaparrón.",
      fresco: "Sweater o polar, campera impermeable y calzado que no se moje.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. Bajo cero, con nieve y pocas horas de luz.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Recorré el casco viejo temprano",
          body: "Cuando llegan los cruceros, se llena desde media mañana. Temprano o al caer la tarde, es otra cosa.",
        },
        {
          title: "Combiná con Helsinki",
          body: "El ferry tarda unas dos horas y sale todo el día. Se puede ir y volver en el día.",
        },
        {
          title: "Caminá un pantano",
          body: "En Lahemaa y en Soomaa hay pasarelas de madera sobre los pantanos, con torres para mirar el paisaje.",
        },
        {
          title: "Probá una sauna",
          body: "Es parte de la vida, y la sauna de humo del sur es patrimonio inmaterial de la humanidad.",
        },
        {
          title: "Usá los buses entre ciudades",
          body: "Son cómodos, frecuentes y llegan a todo el país.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el invierno",
          body: "De diciembre a marzo la temperatura queda bajo cero muchos días, y la luz dura pocas horas.",
        },
        {
          title: "No vayas a los pantanos sin repelente",
          body: "En verano los mosquitos de los bosques y pantanos son parte del paisaje.",
        },
        {
          title: "No camines los adoquines con suela lisa",
          body: "En el casco viejo resbalan con lluvia y con hielo.",
        },
        {
          title: "No te quedes solo en Tallin",
          body: "Tartu, las islas y los parques nacionales muestran otro país, más tranquilo.",
        },
        {
          title: "No descuides la mochila en el casco viejo",
          body: "Cuando llegan los cruceros hay mucha gente, y con la gente, carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno báltico es largo y frío",
          body: "De diciembre a marzo la temperatura queda bajo cero muchos días, con nieve y pocas horas de luz. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide diciembre a marzo",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "verano",
        title: "Verano",
        notice: {
          tone: "info",
          title: "Noches blancas",
          body: "En junio casi no oscurece. Es la mejor época, y se vive al aire libre.",
        },
        summary: "Lo que pide junio a agosto",
        items: [
          "Capas y una campera liviana",
          "Antifaz para dormir",
          "Repelente para los bosques y pantanos",
          "Traje de baño para los lagos y la playa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío descarga rápido el teléfono",
          "Auriculares para los buses y el ferry",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el resfrío",
          "Protector labial y crema para el frío",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a marzo baja de cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Adoquines en el casco viejo, que resbalan con lluvia o hielo.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "Las noches refrescan, incluso en pleno verano.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en todos lados.",
        instead: "La tarjeta o el teléfono.",
      },
      {
        leave: "Una valija enorme",
        why: "Adoquines, escaleras y ferries.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla es potable.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Estonia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto: noches blancas, islas y bosques. Diciembre tiene el mercado navideño de Tallin, con frío y nieve.",
      },
      {
        question: "¿Cómo combino Tallin con Helsinki?",
        answer:
          "En ferry: hay barcos todo el día y el cruce tarda unas dos horas. Se puede hacer en el día o sumar unas noches.",
      },
      {
        question: "¿Hay nieve en invierno?",
        answer:
          "Sí, de diciembre a marzo suele haber nieve, sobre todo en el interior. En Otepää se esquía.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Sí. Estonia es de los países más digitales de Europa, y el efectivo casi no hace falta.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es opcional. Redondear o dejar algo si te atendieron bien es un gesto, no una obligación.",
      },
    ],
  },
};
