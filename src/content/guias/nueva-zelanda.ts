import type { DestinationGuide } from "./types";

/**
 * Guía de Nueva Zelanda.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la NZeTA, una autorización online que se tramita
 * antes de volar junto con una tasa de turismo —el dato de su portada—, y la
 * bioseguridad de Australia extendida al calzado y al equipo de camping.
 * Queenstown en julio es lo más frío de Oceanía en el planificador, con
 * mínimas bajo cero, y Milford Sound, de lo más lluvioso. El dólar
 * neozelandés tiene centavos (spec, 16.3). La base es Auckland y no
 * Wellington, la capital: es la ciudad más grande y la del aeropuerto.
 */
export const nuevaZelanda: DestinationGuide = {
  slug: "nueva-zelanda",
  country: "Nueva Zelanda",
  subregion: "Australia y Nueva Zelanda",
  subhead:
    "Los fiordos de Milford Sound, los géiseres y la cultura maorí de Rotorua, los volcanes de Tongariro, el glaciar Franz Josef y la aventura de Queenstown, entre lagos y montañas.",

  image: null,

  highlights: [
    {
      value: "NZeTA",
      label: "y tasa de turismo, online antes de volar",
      note: "Los pasaportes que entran sin visa tramitan la NZeTA, una autorización online, y pagan con ella una tasa de turismo y conservación; los demás, una visa. Se hace con días de anticipación.",
    },
    {
      value: "Milford Sound",
      label: "el fiordo de las cascadas",
      note: "Paredes de roca que caen al mar y cascadas que se multiplican cuando llueve, en Fiordland. Se recorre en barco, y el camino desde Te Anau es parte del paseo.",
    },
    {
      value: "Géiseres",
      label: "y barro que hierve en Rotorua",
      note: "Rotorua huele a azufre: hay géiseres, piletas de barro y aguas termales, y es el mejor lugar para conocer la cultura maorí, con un hangi, la comida cocida bajo tierra.",
    },
    {
      value: "Bungee",
      label: "el salto que nació en Queenstown",
      note: "El primer salto comercial de bungee se hizo en 1988 desde el puente del río Kawarau, cerca de Queenstown. Hoy el pueblo es la capital de la aventura: rafting, jet boat, parapente y esquí en invierno.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Nueva Zelanda",
      body: [
        "Salvo los australianos, todos los viajeros tramitan antes de viajar la NZeTA, una autorización online, o una visa de visitante, según el pasaporte, y pagan con ella una tasa de turismo y conservación. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Al llegar se declara toda la comida, y el calzado de trekking y el equipo de camping tienen que estar limpios, sin tierra. La bioseguridad es tan estricta como en Australia, y no declarar algo puede costar una multa.",
        "El pasaporte tiene que tener al menos tres meses de vigencia después de la fecha de salida, y en la frontera pueden pedirte el pasaje de salida del país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Nueva Zelanda",
      body: [
        "La moneda es el dólar neozelandés. La tarjeta, sobre todo sin contacto, funciona en casi todos lados, y el efectivo casi no se usa.",
        "Los precios ya incluyen los impuestos, y la propina no se espera. Los feriados, muchos cafés y restaurantes cobran un recargo, que se avisa en la carta.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares neozelandeses: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Un clima de mar, que cambia rápido",
      body: [
        "Hemisferio sur: el verano va de diciembre a febrero y el invierno, de junio a agosto. La isla Norte es templada, con inviernos suaves en Auckland; la isla Sur es más fresca, y en Queenstown las noches de julio bajan de cero.",
        "La costa oeste y Fiordland están entre los lugares más lluviosos del mundo: en Milford Sound y en Franz Josef llueve más de la mitad de los días del año. Christchurch y Queenstown, del otro lado de los Alpes, son más secas.",
        "El tiempo cambia rápido, sobre todo en la montaña: un día de sol puede terminar con viento y lluvia. Aun en verano, conviene vestirse en capas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a marzo: el verano, con días largos, la mejor época para caminar y para los fiordos. De junio a septiembre, la temporada de esquí en Queenstown y en las montañas.",
        "Marzo y abril, el otoño, y octubre y noviembre, la primavera, tienen buen tiempo y menos gente que el verano.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Nueva Zelanda",
      body: [
        "Lo mejor para recorrer es un auto o una casa rodante: las rutas son buenas, pero angostas y de montaña, y los viajes llevan más tiempo de lo que parece en el mapa.",
        "Entre las islas se cruza en ferry, de Wellington a Picton, o en avión. Hay buses de larga distancia entre las ciudades y los pueblos turísticos.",
        "Se maneja por la izquierda. Muchos puentes de la isla Sur son de una sola mano: un cartel indica quién tiene prioridad.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La cultura maorí, el tratado de Waitangi y una historia colonial corta.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Cordero, mariscos, vinos del sur y un café de primera.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale: "Fiordos, glaciares, volcanes y lagos en un país chico.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Playas lindas en el norte, con el agua fresca casi todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Todo funciona, pero comer, dormir y las actividades son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale: "Rutas buenas y todo bien señalizado; sin auto cuesta más.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Una moneda estable y precios a la vista.",
    },
  ],

  shines: [
    "Fiordos, glaciares y volcanes.",
    "Caminatas para todos los niveles, bien cuidadas.",
    "Un país fácil de recorrer en auto.",
  ],

  costs: [
    "Caro para comer, dormir y las actividades.",
    "Lluvia frecuente en la costa oeste y Fiordland.",
    "La NZeTA, la tasa y una bioseguridad estricta.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Auckland en julio que Queenstown o Milford Sound. Los precios están en dólares neozelandeses y son órdenes de magnitud; Queenstown y las excursiones a los fiordos cuestan bastante más.",

  places: [
    {
      id: "auckland",
      name: "Auckland",
      region: "Auckland",
      tag: "La ciudad de las velas",
      blurb:
        "Una ciudad entre dos bahías y unos cincuenta volcanes apagados, con el puerto, las islas del golfo de Hauraki y playas de arena negra en la costa oeste. Es la base del planificador: veranos templados e inviernos suaves, con lluvias de mayo a septiembre.",
      coords: [-36.8485, 174.7633],
      featured: true,
      image: null,
    },
    {
      id: "rotorua",
      name: "Rotorua",
      region: "Bahía de Plenty",
      tag: "Géiseres y cultura maorí",
      blurb:
        "Géiseres, piletas de barro y aguas termales, y la mejor puerta a la cultura maorí, con danzas y un hangi. Hobbiton, el set de la película, queda a una hora.",
      coords: [-38.1368, 176.2497],
      image: null,
    },
    {
      id: "wellington",
      name: "Wellington",
      region: "Wellington",
      tag: "La capital",
      blurb:
        "La capital, entre colinas y una bahía, con el museo Te Papa, el funicular, muchos cafés y el ferry a la isla Sur. Famosa por el viento.",
      coords: [-41.2865, 174.7762],
      image: null,
    },
    {
      id: "queenstown",
      name: "Queenstown",
      region: "Otago",
      tag: "La capital de la aventura",
      blurb:
        "Un pueblo junto al lago Wakatipu, rodeado de montañas, con bungee, jet boat, caminatas y esquí en invierno. Lo más frío del planificador en Oceanía: las noches de julio bajan de cero.",
      coords: [-45.0312, 168.6626],
      image: null,
    },
    {
      id: "milford-sound",
      name: "Milford Sound (Fiordland)",
      region: "Southland",
      tag: "El fiordo",
      blurb:
        "El fiordo más famoso de Fiordland, con paredes de roca, cascadas y focas, que se recorre en barco. Uno de los lugares más lluviosos del mundo: con lluvia, las cascadas se multiplican.",
      coords: [-44.6414, 167.8974],
      image: null,
    },
    {
      id: "christchurch",
      name: "Christchurch",
      region: "Canterbury",
      tag: "La ciudad jardín",
      blurb:
        "La ciudad más grande de la isla Sur, de parques y jardines, reconstruida después del terremoto de 2011, y punto de partida del tren TranzAlpine. Más seca que la costa oeste.",
      coords: [-43.5321, 172.6362],
      image: null,
    },
    {
      id: "bahia-de-las-islas",
      name: "Bahía de las Islas (Paihia)",
      region: "Northland",
      tag: "Islas y el tratado",
      blurb:
        "Ciento cuarenta y cuatro islas en una bahía subtropical, con delfines, veleros y Waitangi, donde se firmó en 1840 el tratado entre los maoríes y la corona británica.",
      coords: [-35.2822, 174.0911],
      image: null,
    },
    {
      id: "franz-josef",
      name: "Franz Josef (glaciar)",
      region: "Costa Oeste",
      tag: "El glaciar",
      blurb:
        "Un glaciar que baja de los Alpes del Sur hacia la selva templada, cerca del mar, con caminatas por el valle y vuelos en helicóptero sobre el hielo. Lluvia casi todo el año.",
      coords: [-43.388, 170.183],
      image: null,
    },
    {
      id: "tongariro",
      name: "Tongariro (cruce alpino)",
      region: "Manawatū-Whanganui",
      tag: "El cruce alpino",
      blurb:
        "Tres volcanes activos, lagos de color esmeralda y el cruce alpino de Tongariro, una caminata de un día entre cráteres. En invierno, el Ruapehu tiene pistas de esquí, y las noches rondan los cero grados.",
      coords: [-39.2, 175.54],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Nueva Zelanda, ropa en capas: el tiempo cambia rápido, y en un mismo día puede haber sol, viento y lluvia. Una campera impermeable siempre, abrigo de verdad para el invierno de la isla Sur y calzado de trekking limpio. La NZeTA o la visa, tramitada antes, y nada de comida sin declarar.",
    keyPoints: [
      "NZeTA o visa antes de viajar, con la tasa de turismo, para todos salvo los australianos.",
      "Se declara toda la comida, y el calzado y el equipo de camping van limpios.",
      "Hemisferio sur: verano de diciembre a febrero, invierno de junio a agosto.",
      "Una campera impermeable siempre: el tiempo cambia rápido y en el oeste llueve mucho.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector alto y un buzo para la noche.",
      templado: "Ropa en capas, un buzo y una campera impermeable.",
      fresco:
        "Un buzo abrigado, una campera impermeable y algo de abrigo para la noche.",
      frio: "Las noches bajan de diez grados: abrigo de verdad, y gorro y guantes para la montaña.",
    },
    plug: {
      types: "Tipo I",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la NZeTA con tiempo",
          body: "Sale online, con la tasa de turismo, pero conviene no dejarla para el último día.",
        },
        {
          title: "Limpiá el calzado antes de viajar",
          body: "Las botas y el equipo de camping con tierra se revisan en la frontera, y pueden demorarte.",
        },
        {
          title: "Vestite en capas",
          body: "Un buzo y una campera impermeable van siempre en la mochila, aun en verano.",
        },
        {
          title: "Reservá los refugios con tiempo",
          body: "Las caminatas de varios días, como la de Milford, se reservan meses antes.",
        },
        {
          title: "Usá protector solar",
          body: "En verano la radiación es muy alta, aun con fresco y nubes.",
        },
        {
          title: "Elegí pagar en dólares neozelandeses",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres comida sin declarar",
          body: "Ni la fruta del avión ni un sándwich: se declara todo, y el control lo revisa.",
        },
        {
          title: "No calcules los viajes por la distancia",
          body: "Las rutas de montaña son lentas: lo que en el mapa parece una hora puede llevar dos.",
        },
        {
          title: "No salgas a la montaña sin mirar el pronóstico",
          body: "El tiempo cambia en minutos: llevá abrigo y avisá adónde vas.",
        },
        {
          title: "No te olvides de la izquierda",
          body: "Se maneja por la izquierda: ojo al salir de una estación de servicio o en una ruta vacía.",
        },
        {
          title: "No dejes basura en los parques",
          body: "En muchos senderos no hay tachos: lo que llevás, lo traés.",
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
          title: "NZeTA y bioseguridad",
          body: "Salvo los australianos, todos tramitan la NZeTA o una visa antes de viajar, con la tasa de turismo, y al llegar se declara toda la comida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con tres meses de vigencia después de la salida",
          "La NZeTA o la visa, aprobadas",
          "La declaración de llegada, con toda la comida",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña y la lluvia",
        notice: {
          tone: "warn",
          title: "El tiempo de la montaña",
          body: "En los Alpes del Sur y en Tongariro el tiempo cambia en minutos: aun en verano, llevá abrigo y algo impermeable.",
        },
        summary: "Caminatas, fiordos y glaciares",
        items: [
          "Una campera impermeable de verdad",
          "Calzado de trekking, limpio",
          "Un buzo de abrigo o una campera de pluma",
          "Una mochila chica y una botella de agua",
        ],
      },
      {
        id: "abrigo",
        title: "Para el invierno del sur",
        notice: null,
        summary: "Queenstown, la nieve y las noches",
        items: [
          "Una campera de abrigo",
          "Gorro, guantes y bufanda",
          "Ropa térmica para la nieve",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Medicamentos con receta",
          body: "Los medicamentos de uso personal entran con la receta y en su envase original.",
        },
        summary: "Botiquín",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Protector solar alto",
          "Repelente para los jejenes de Fiordland y la costa oeste",
          "Seguro de viaje con cobertura médica: la salud es cara",
        ],
      },
    ],
    avoid: [
      {
        leave: "Comida en la valija",
        why: "Hay que declararla toda, y mucha no entra.",
        instead: "Comprarla allá.",
      },
      {
        leave: "El calzado de trekking con barro",
        why: "Lo revisan en la frontera, y puede demorarte.",
        instead: "Las botas limpias, sin tierra en la suela.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Aun en enero, en la montaña y en el sur refresca de noche.",
        instead: "Un buzo y una campera impermeable.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas de montaña son lentas, y el tiempo puede cortar un paseo.",
        instead: "Días de margen, sobre todo para los fiordos.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta sin contacto.",
        instead: "Una tarjeta sin comisiones en el exterior.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Nueva Zelanda?",
        answer:
          "Según el pasaporte, la NZeTA, una autorización online, o una visa de visitante, y con cualquiera de las dos se paga una tasa de turismo y conservación. Los australianos no necesitan nada. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué tengo que declarar al llegar?",
        answer:
          "Toda la comida, las plantas y los productos de origen animal, y el calzado o el equipo de camping con tierra. Declarar no cuesta nada; no hacerlo puede costar una multa.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a marzo para caminar y recorrer; de junio a septiembre para esquiar. El otoño y la primavera tienen menos gente.",
      },
      {
        question: "¿Conviene alquilar un auto?",
        answer:
          "Sí: es la mejor forma de recorrer, sobre todo la isla Sur. Se maneja por la izquierda, y las rutas de montaña son lentas.",
      },
      {
        question: "¿Cuál es la capital?",
        answer:
          "Wellington, aunque Auckland es la ciudad más grande y la del aeropuerto por donde entra casi todo el que viaja.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 230 V.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés. El maorí también es oficial, y se ve en los nombres de los lugares y en los carteles.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, en las ciudades y los pueblos. En los refugios de montaña, hervila o filtrala.",
      },
    ],
  },
};
