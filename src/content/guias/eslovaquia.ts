import type { DestinationGuide } from "./types";

/**
 * Guía de Eslovaquia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: una capital de llanura junto al Danubio y, a pocas
 * horas, montañas alpinas en miniatura donde el invierno es otra cosa. La
 * valija cambia más entre Bratislava y los Tatras que entre enero y julio.
 */
export const eslovaquia: DestinationGuide = {
  slug: "eslovaquia",
  country: "Eslovaquia",
  subregion: "Europa del Este",
  subhead:
    "Castillos por todos lados, los Tatras, gargantas con escaleras y una capital chica a una hora de Viena. Veranos calurosos en el llano, inviernos con nieve en la montaña.",

  image: null,

  highlights: [
    {
      value: "180",
      label: "castillos",
      note: "Uno de los países con más castillos por habitante del mundo. El de Spiš está entre los más grandes de Europa central.",
    },
    {
      value: "1 h",
      label: "de Bratislava a Viena",
      note: "Las dos capitales más cercanas de Europa, unidas por tren, bus y barco por el Danubio.",
    },
    {
      value: "2.655 m",
      label: "el pico más alto, en los Tatras",
      note: "Montañas alpinas en miniatura, con lagos glaciares y senderos. Nieve de diciembre a abril.",
    },
    {
      value: "Halušky",
      label: "el plato nacional",
      note: "Ñoquis de papa con queso de oveja y panceta: contundente, como la montaña.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Eslovaquia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Eslovaquia, Austria y Hungría en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Eslovaquia",
      body: [
        "La moneda es el euro. La tarjeta se acepta en las ciudades y en los centros de montaña; en pueblos chicos y refugios, el efectivo sigue siendo útil.",
        "Al mediodía, muchos restaurantes ofrecen un menú con sopa y plato principal a precio cerrado. La propina se da redondeando al pagar.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Llanura y montaña",
      body: [
        "Eslovaquia es hemisferio norte: enero es invierno y julio, verano. Bratislava, junto al Danubio, tiene inviernos cerca de cero y veranos calurosos.",
        "El centro y el norte son montaña: los Tatras, Liptov y el Paraíso Eslovaco tienen nieve de diciembre a abril y noches frescas aun en julio, con tormentas de tarde en verano.",
        "Košice, en el este, es más continental: inviernos más fríos y veranos igual de calurosos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre es la temporada de montaña, con los senderos de los Tatras abiertos. Mayo y septiembre son buenos para las ciudades y los castillos.",
        "De diciembre a marzo se esquía en los Tatras y en Jasná, y diciembre trae mercados navideños en Bratislava y Košice.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Eslovaquia",
      body: [
        "Los trenes unen Bratislava con los Tatras y Košice en pocas horas, y desde Poprad sale un tren eléctrico de montaña a los pueblos de los Tatras.",
        "Para los castillos y los pueblos chicos, el auto da libertad; las autopistas piden una viñeta electrónica.",
        "En la montaña, algunos senderos altos de los Tatras cierran en invierno y primavera: revisá antes de salir. Las precauciones en las ciudades son las de cualquier lugar concurrido.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Castillos",
      score: 9,
      rationale:
        "Ruinas enormes como Spiš, castillos de cuento como Bojnice y uno sobre cada ciudad.",
    },
    {
      dimension: "Montaña y naturaleza",
      score: 9,
      rationale:
        "Los Tatras, el Paraíso Eslovaco, cuevas de hielo y valles para caminar y esquiar.",
    },
    {
      dimension: "Ciudades",
      score: 7.5,
      rationale:
        "Bratislava y Košice son agradables y chicas; Banská Štiavnica es una joya.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Cocina de montaña contundente, quesos de oveja y cerveza buena y barata.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Accesible, con buena calidad. Los centros de esquí en temporada son lo más caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Trenes entre las ciudades y la montaña; para los castillos y pueblos, el auto ayuda.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en las ciudades.",
    },
  ],

  shines: [
    "Castillos y montañas en un país chico y accesible.",
    "Los Tatras, alpinos en miniatura, con nieve segura en invierno.",
    "Fácil de combinar con Viena y Budapest.",
  ],

  costs: [
    "Inviernos fríos, sobre todo en la montaña.",
    "Tormentas de tarde en el verano de montaña.",
    "Para los castillos y pueblos chicos hace falta auto.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: los Tatras en enero no piden lo mismo que Bratislava en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "bratislava",
      name: "Bratislava",
      region: "Oeste",
      tag: "Capital sobre el Danubio",
      blurb:
        "Un casco viejo chico y peatonal, un castillo blanco sobre el Danubio y Viena a una hora. Es la base del planificador: inviernos cerca de cero, veranos calurosos.",
      coords: [48.1486, 17.1077],
      featured: true,
      image: null,
    },
    {
      id: "tatras",
      name: "Altos Tatras",
      region: "Montaña",
      tag: "Alpes en miniatura",
      blurb:
        "Picos de granito, lagos glaciares y senderos de montaña, con esquí en invierno. Lo más frío del país.",
      coords: [49.1385, 20.2202],
      image: null,
    },
    {
      id: "kosice",
      name: "Košice",
      region: "Este",
      tag: "Catedral gótica",
      blurb:
        "La segunda ciudad del país, con la catedral gótica más grande de Eslovaquia y una calle principal llena de vida.",
      coords: [48.7164, 21.2611],
      image: null,
    },
    {
      id: "banska-stiavnica",
      name: "Banská Štiavnica",
      region: "Centro",
      tag: "Ciudad minera",
      blurb:
        "Una ciudad minera de plata, patrimonio de la humanidad, escalonada entre colinas y lagos artificiales.",
      coords: [48.4586, 18.8931],
      image: null,
    },
    {
      id: "spis",
      name: "Levoča y el castillo de Spiš",
      region: "Este",
      tag: "Castillo gigante",
      blurb:
        "Las ruinas de uno de los castillos más grandes de Europa central y Levoča, con su plaza renacentista.",
      coords: [48.9995, 20.7681],
      image: null,
    },
    {
      id: "paraiso-eslovaco",
      name: "Paraíso Eslovaco",
      region: "Montaña",
      tag: "Escaleras y gargantas",
      blurb:
        "Gargantas con escaleras y pasarelas de metal sobre cascadas, para caminar con calzado de trekking.",
      coords: [48.96, 20.39],
      image: null,
    },
    {
      id: "bojnice",
      name: "Bojnice",
      region: "Centro",
      tag: "Castillo de cuento",
      blurb:
        "Un castillo de cuento con torres puntiagudas, el más visitado del país, y aguas termales en el pueblo.",
      coords: [48.7799, 18.5807],
      image: null,
    },
    {
      id: "trencin",
      name: "Trenčín",
      region: "Oeste",
      tag: "Castillo sobre la ciudad",
      blurb:
        "Un castillo sobre una roca, dominando la ciudad, en el valle del Váh.",
      coords: [48.8945, 18.0444],
      image: null,
    },
    {
      id: "liptov",
      name: "Liptov",
      region: "Montaña",
      tag: "Esquí y termas",
      blurb:
        "Valles entre montañas con la estación de esquí de Jasná, cuevas de hielo y parques termales.",
      coords: [49.0839, 19.6122],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Eslovaquia son dos valijas: Bratislava y el llano tienen inviernos cerca de cero y veranos calurosos; los Tatras y la montaña, nieve de diciembre a abril y noches frescas aun en julio. En verano, ropa liviana para la ciudad y capas, campera impermeable y calzado de trekking para la montaña; en invierno, abrigo de verdad, gorro y guantes, y ropa de nieve si vas a esquiar.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso en el llano; el invierno, de diciembre a febrero, frío.",
      "En los Tatras y en Liptov nieva de diciembre a abril, y las noches son frescas aun en verano.",
      "Las tardes de verano en la montaña terminan seguido en tormenta.",
      "Para las gargantas del Paraíso Eslovaco hace falta calzado de trekking.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. Si vas a la montaña, sumá un buzo y una campera impermeable.",
      templado:
        "Capas y una campera liviana. Es el clima ideal para caminar los Tatras.",
      fresco: "Sweater o polar, campera impermeable y calzado de trekking.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. En los Tatras, nieve y temperaturas bajo cero de diciembre a marzo.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "El tipo E es el europeo de dos patas redondas, con una tercera pata que sale del toma; los enchufes tipo C entran sin problema. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Combiná con Viena",
          body: "Una hora de tren, bus o barco por el Danubio: se puede dormir en una y visitar la otra.",
        },
        {
          title: "Caminá el Paraíso Eslovaco",
          body: "Las gargantas con escaleras y pasarelas sobre cascadas son únicas. Calzado de trekking y guantes finos para las cadenas.",
        },
        {
          title: "Aprovechá el menú del mediodía",
          body: "Sopa y plato principal a precio cerrado, de lunes a viernes. Es la comida que más rinde.",
        },
        {
          title: "Tomá el tren de los Tatras",
          body: "Desde Poprad, un tren eléctrico de montaña une los pueblos al pie de los picos.",
        },
        {
          title: "Probá el halušky",
          body: "El plato nacional, contundente y barato, ideal después de un día de montaña.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes la montaña",
          body: "En los Tatras el tiempo cambia rápido y las tardes de verano traen tormentas. Las caminatas largas, a la mañana.",
        },
        {
          title: "No subas a los senderos altos fuera de temporada",
          body: "Algunos cierran en invierno y primavera. Revisá antes de salir.",
        },
        {
          title: "No manejes por autopista sin viñeta",
          body: "Es electrónica y obligatoria. Si alquilás auto en otro país, comprala antes de cruzar.",
        },
        {
          title: "No cuentes con tarjeta en todos lados",
          body: "En refugios de montaña y pueblos chicos, llevá algo de efectivo.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En el casco viejo de Bratislava en temporada alta hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "montana",
        title: "Montaña",
        notice: {
          tone: "warn",
          title: "La montaña es otro clima",
          body: "En los Tatras nieva de diciembre a abril y las noches son frescas aun en julio, con tormentas de tarde en verano. Sin capas e impermeable, se pasa mal.",
        },
        summary: "Si vas a los Tatras o al Paraíso Eslovaco",
        items: [
          "Campera impermeable y polar",
          "Calzado de trekking con buena suela",
          "Gorro y guantes, también en verano para la altura",
          "Guantes finos para las cadenas de las gargantas",
          "Botella reutilizable",
        ],
      },
      {
        id: "invierno",
        title: "Invierno y esquí",
        notice: {
          tone: "info",
          title: "Nieve segura en la montaña",
          body: "De diciembre a marzo se esquía en los Tatras y en Jasná; Bratislava, en cambio, tiene inviernos grises cerca de cero.",
        },
        summary: "Si vas de diciembre a marzo",
        items: [
          "Campera de abrigo impermeable",
          "Primera capa térmica",
          "Gorro, guantes y cuello",
          "Botas abrigadas con buena suela",
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
          "Seguro de viaje con cobertura médica, que cubra la montaña",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Los tomas son tipo E, donde entran los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: el frío de la montaña descarga el teléfono",
          "Mapas descargados para los senderos",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago",
          "Curitas y algo para ampollas: se camina mucho",
          "Repelente para los bosques en verano",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano para la montaña",
        why: "En los Tatras las noches son frescas aun en julio.",
        instead: "Capas, polar y campera impermeable.",
      },
      {
        leave: "Zapatillas de ciudad para las gargantas",
        why: "Escaleras de metal, rocas húmedas y barro.",
        instead: "Calzado de trekking con buena suela.",
      },
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero hace frío, y en la montaña nieva.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Solo tarjetas",
        why: "En refugios y pueblos chicos el efectivo sigue siendo útil.",
        instead: "Tarjeta y algo de efectivo en euros.",
      },
      {
        leave: "Una valija enorme",
        why: "Trenes de montaña, pueblos en subida y castillos con escaleras.",
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
        question: "¿Necesito visa para entrar a Eslovaquia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo E, donde entran los europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre para la montaña, y de diciembre a marzo para esquiar. Mayo y septiembre son buenos para las ciudades y los castillos.",
      },
      {
        question: "¿Se puede combinar con Viena y Budapest?",
        answer:
          "Sí: Viena está a una hora de Bratislava, y Budapest, a unas dos horas y media en tren.",
      },
      {
        question: "¿Hace falta auto?",
        answer:
          "Para las ciudades y los Tatras, no: hay trenes. Para los castillos y pueblos chicos, el auto da mucha libertad.",
      },
      {
        question: "¿Cómo es el Paraíso Eslovaco?",
        answer:
          "Un parque nacional de gargantas con escaleras y pasarelas de metal sobre cascadas. Hace falta calzado de trekking y algo de estado físico.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Lo habitual es redondear al pagar, diciéndole al mozo el total, si te atendieron bien.",
      },
    ],
  },
};
