import type { DestinationGuide } from "./types";

/**
 * Guía del Reino Unido.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primero fuera del espacio Schengen, con su
 * propia autorización previa de entrada, su moneda y un enchufe que no se
 * parece a ninguno. El clima no es extremo: es lluvia fina, viento y días que
 * en invierno terminan a media tarde.
 */
export const reinoUnido: DestinationGuide = {
  slug: "reino-unido",
  country: "Reino Unido",
  subregion: "Europa del Norte",
  subhead:
    "Londres, Escocia y la campiña inglesa, con museos gratuitos de primer nivel y un clima que no es extremo sino cambiante. Fuera de Schengen, con su propia autorización de entrada.",

  image: null,

  highlights: [
    {
      value: "ETA",
      label: "autorización previa para entrar",
      note: "Los pasaportes que no necesitan visa tienen que tramitar en línea una autorización electrónica antes de viajar. Verificá qué pide el tuyo.",
    },
    {
      value: "Tipo G",
      label: "el enchufe de tres patas",
      note: "No se parece al de ningún otro país de Europa: sin adaptador no cargás nada.",
    },
    {
      value: "Izquierda",
      label: "la mano por la que se circula",
      note: "Al cruzar, mirá primero a la derecha. En Londres está pintado en el piso de las esquinas, y por algo.",
    },
    {
      value: "7 h",
      label: "de luz en Edimburgo en diciembre",
      note: "Y casi dieciocho en junio. En invierno oscurece a media tarde: armá el día con eso en mente.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen, y con ETA",
      body: [
        "El Reino Unido no es parte del espacio Schengen: tiene su propio control de fronteras y sus propias reglas, y los días que pases ahí no cuentan para los 90 de Schengen.",
        "Los pasaportes que no necesitan visa tienen que tramitar antes de viajar una autorización electrónica de viaje, la ETA. Se pide en línea, la aerolínea la revisa antes de embarcar y sin ella no se viaja.",
        "Algunos pasaportes latinoamericanos sí necesitan visa, y las reglas cambian: verificá el tuyo antes de comprar el pasaje. La salud pública no cubre a los turistas, así que el seguro con cobertura médica es imprescindible.",
      ],
    },
    {
      id: "plata",
      title: "Libras, y casi nada de efectivo",
      body: [
        "La moneda es la libra esterlina, no el euro. Y el Reino Unido es de los países que menos usan efectivo: la tarjeta sin contacto o el teléfono se aceptan en todos lados, y algunos lugares ya no reciben billetes.",
        "En Londres el transporte se paga apoyando la tarjeta en el molinete, con un tope diario. No hace falta sacar ningún pase.",
        "Muchos restaurantes suman un cargo por servicio a la cuenta; si no lo traen, dejar algo es lo habitual. Y cuando una terminal te ofrece cobrarte en tu moneda, elegí libras: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Llueve poco, pero seguido",
      body: [
        "El Reino Unido es hemisferio norte: enero es invierno y julio, verano. Su clima es oceánico: inviernos fríos y húmedos, veranos templados y lluvia repartida en todo el año, más en el oeste y en Escocia.",
        "Lo que cambia la valija no es tanto la temperatura como la lluvia fina y el viento, que hacen que se sienta más frío de lo que marca el termómetro. Capas y algo impermeable resuelven casi todo.",
        "La luz también cuenta: en diciembre, en Escocia hay unas siete horas de sol, y en junio casi no oscurece. En invierno, las visitas al aire libre se hacen temprano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre los días son largos y templados, y es la mejor época para la campiña y para Escocia. En agosto, el festival de Edimburgo llena la ciudad y el alojamiento se reserva con meses.",
        "El invierno es frío y gris, pero Londres tiene muchísimo para hacer bajo techo, y diciembre trae mercados y luces navideñas.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por el Reino Unido",
      body: [
        "Los trenes llegan a todo el país: de Londres a Edimburgo son unas cuatro horas y media. Las tarifas suben mucho cerca de la fecha, así que conviene comprar con anticipación.",
        "Se maneja por la izquierda. Si alquilás auto, el volante está a la derecha y las rutas rurales son angostas; para las Tierras Altas y Cornualles, igual, el auto da mucha libertad.",
        "Las precauciones son las de cualquier gran ciudad: atención al celular y a la mochila en el metro de Londres y en las zonas más concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Museos y cultura",
      score: 10,
      rationale:
        "Los grandes museos de Londres son gratuitos, y el teatro, la música y la historia están en todas partes.",
    },
    {
      dimension: "Historia y patrimonio",
      score: 9.5,
      rationale:
        "Castillos, catedrales, ciudades romanas y medievales, y la historia de un imperio en cada esquina.",
    },
    {
      dimension: "Paisajes",
      score: 8.5,
      rationale:
        "Las Tierras Altas de Escocia, la costa de Cornualles y la campiña inglesa, siempre verde.",
    },
    {
      dimension: "Vida urbana",
      score: 9.5,
      rationale:
        "Londres es una de las grandes capitales del mundo, y Edimburgo, Liverpool y Belfast tienen vida propia.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Alojamiento y transporte caros, sobre todo en Londres. Los museos gratuitos y la comida al paso equilibran.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Trenes a todo el país y pago sin contacto en el transporte. Los pasajes comprados a último momento son caros.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una moneda estable, precios claros y tarjeta sin contacto en todos lados.",
    },
  ],

  shines: [
    "Museos de primer nivel con entrada gratuita.",
    "Londres, Edimburgo y la campiña en un mismo viaje, conectados por tren.",
    "Pagar todo con la tarjeta o el teléfono, sin pensar en efectivo.",
  ],

  costs: [
    "Uno de los destinos más caros de Europa, sobre todo para dormir en Londres.",
    "Lluvia repartida en todo el año y días muy cortos en invierno.",
    "Un trámite de entrada propio y un enchufe que no se parece a ninguno.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: las Tierras Altas no piden lo mismo que Londres. Los precios están en libras esterlinas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "londres",
      name: "Londres",
      region: "Londres",
      tag: "La capital",
      blurb:
        "Museos gratuitos de primer nivel, teatro, parques enormes y barrios con identidad propia. Es la base del planificador: llueve poco pero seguido, con inviernos fríos y grises y veranos templados.",
      coords: [51.5074, -0.1278],
      featured: true,
      image: null,
    },
    {
      id: "edimburgo",
      name: "Edimburgo",
      region: "Escocia",
      tag: "Castillo y festival",
      blurb:
        "Una ciudad de piedra con un castillo sobre un volcán apagado. En agosto, el festival de artes más grande del mundo; en invierno, días muy cortos y viento frío.",
      coords: [55.9533, -3.1883],
      image: null,
    },
    {
      id: "tierras-altas",
      name: "Tierras Altas",
      region: "Escocia",
      tag: "Lagos y montañas",
      blurb:
        "Lagos, valles y castillos en ruinas en el norte de Escocia, con Inverness como puerta de entrada y el lago Ness a un paso. Fresco y cambiante todo el año, y con mosquitos diminutos en verano.",
      coords: [57.4778, -4.2247],
      image: null,
    },
    {
      id: "oxford",
      name: "Oxford",
      region: "Sur de Inglaterra",
      tag: "Ciudad universitaria",
      blurb:
        "Colegios medievales, bibliotecas y jardines a una hora de Londres en tren. Se recorre a pie o en bicicleta en un día.",
      coords: [51.752, -1.2577],
      image: null,
    },
    {
      id: "bath",
      name: "Bath y los Cotswolds",
      region: "Sur de Inglaterra",
      tag: "Termas romanas",
      blurb:
        "Termas romanas, una ciudad entera de piedra dorada y, alrededor, los pueblos de postal de los Cotswolds.",
      coords: [51.3811, -2.359],
      image: null,
    },
    {
      id: "liverpool",
      name: "Liverpool",
      region: "Norte de Inglaterra",
      tag: "Puerto y Beatles",
      blurb:
        "El puerto de los Beatles, con museos sobre el río Mersey y una escena musical que sigue viva. Más accesible que Londres.",
      coords: [53.4084, -2.9916],
      image: null,
    },
    {
      id: "york",
      name: "York",
      region: "Norte de Inglaterra",
      tag: "Murallas medievales",
      blurb:
        "Murallas que se caminan, una catedral gótica enorme y calles medievales angostas. Una de las ciudades históricas mejor conservadas del país.",
      coords: [53.959, -1.0815],
      image: null,
    },
    {
      id: "cornualles",
      name: "Cornualles",
      region: "Sur de Inglaterra",
      tag: "Costa y acantilados",
      blurb:
        "La punta suroeste de Inglaterra: acantilados, pueblos de pescadores y playas de agua fría. El clima más suave del país, aunque ventoso.",
      coords: [50.2083, -5.4908],
      image: null,
    },
    {
      id: "belfast",
      name: "Belfast y la Calzada del Gigante",
      region: "Irlanda del Norte",
      tag: "Columnas de basalto",
      blurb:
        "Una ciudad con historia propia y, a una hora y media, la Calzada del Gigante: miles de columnas de basalto sobre el mar. Fresca y lluviosa casi todo el año.",
      coords: [54.5973, -5.9301],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En el Reino Unido llueve poco pero seguido y el clima cambia en el día: la valija se arma en capas, con una campera impermeable liviana en cualquier estación. Los veranos son templados, rara vez calurosos; los inviernos, fríos, húmedos y con días muy cortos, más cuanto más al norte. Y dos cosas que no se negocian: el adaptador para el enchufe tipo G y, según tu pasaporte, la autorización electrónica de entrada antes de viajar.",
    keyPoints: [
      "Hemisferio norte: el verano va de junio a agosto y es templado; el invierno, de diciembre a febrero, frío y gris.",
      "La lluvia se reparte en todo el año en lloviznas cortas. Un impermeable liviano vale más que un paraguas, que el viento da vuelta.",
      "Cuanto más al norte, más fresco y más ventoso: Escocia en julio pide un buzo.",
      "La luz cambia mucho: en Escocia hay unas siete horas de sol en diciembre y casi dieciocho en junio.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. Los días de calor son pocos, y muchas casas y transportes no tienen aire acondicionado.",
      templado:
        "Capas: remera, algo de manga larga y una campera impermeable liviana. Es el verano británico: agradable, pero con chaparrones.",
      fresco:
        "Sweater o polar y campera impermeable con capucha. El viento hace que se sienta más frío de lo que dice el termómetro.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no se moje. El frío es húmedo y el día se acaba a media tarde.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "El enchufe británico tiene tres patas rectangulares y no acepta ningún otro sin adaptador, tampoco los europeos. Los tomas suelen tener su propia tecla de encendido: si no carga, fijate que esté prendida. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la ETA antes de viajar",
          body: "Si tu pasaporte no necesita visa, igual necesitás la autorización electrónica. Se pide en línea y puede tardar unos días; sin ella, la aerolínea no te deja embarcar.",
        },
        {
          title: "Pagá el transporte con la tarjeta",
          body: "En Londres, el metro y los buses aceptan la tarjeta sin contacto o el teléfono directo en el molinete, con un tope diario. No hace falta sacar ningún pase.",
        },
        {
          title: "Comprá los trenes con anticipación",
          body: "Las tarifas de larga distancia suben mucho cerca de la fecha. Con semanas de margen, la diferencia es grande.",
        },
        {
          title: "Aprovechá los museos gratuitos",
          body: "El British Museum, la National Gallery, la Tate y muchos otros no cobran entrada. Algunos piden reservar horario igual.",
        },
        {
          title: "Llevá un impermeable liviano",
          body: "La lluvia británica es corta y con viento. Una campera con capucha que se guarde en la mochila sirve todo el año.",
        },
        {
          title: "Llevá un adaptador de más",
          body: "El tipo G no se parece a ningún otro. Con uno solo, cargar el teléfono y la batería a la vez es imposible.",
        },
      ],
      donts: [
        {
          title: "No cruces mirando a la izquierda",
          body: "Los autos vienen por la derecha. En Londres está escrito en el piso de las esquinas: mirá a la derecha.",
        },
        {
          title: "No cuentes con pagar en efectivo",
          body: "Cada vez más lugares, incluidos los buses de Londres, no aceptan billetes. La tarjeta o el teléfono resuelven todo.",
        },
        {
          title: "No vayas a las Tierras Altas sin repelente",
          body: "Los midges, mosquitos diminutos que aparecen de junio a septiembre, son parte del paisaje de Escocia. Un repelente de los fuertes cambia el día.",
        },
        {
          title: "No subestimes lo corto del día en invierno",
          body: "En diciembre oscurece a media tarde, y en Escocia todavía antes. Armá las visitas al aire libre temprano.",
        },
        {
          title: "No lleves euros",
          body: "El Reino Unido tiene su propia moneda, la libra esterlina. Los euros casi no se aceptan, y cuando sí, a mal cambio.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Autorización previa obligatoria",
          body: "Si tu pasaporte no necesita visa, igual tenés que tramitar la ETA en línea antes de viajar. Sin ella no te dejan embarcar. Verificá qué pide tu pasaporte.",
        },
        summary: "Lo que te piden para entrar",
        items: [
          "Pasaporte vigente",
          "ETA aprobada o visa, según tu pasaporte",
          "Pasaje de vuelta o de salida",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica: la salud pública no cubre a turistas",
        ],
      },
      {
        id: "lluvia",
        title: "Ropa para lluvia y viento",
        notice: {
          tone: "info",
          title: "Lloviznas, no tormentas",
          body: "Llueve poco pero seguido, todo el año. Una campera impermeable liviana y calzado que no se moje rinden más que cualquier abrigo grueso.",
        },
        summary: "Lo que cubre cualquier mes",
        items: [
          "Campera impermeable con capucha",
          "Sweater o polar",
          "Calzado que aguante la lluvia",
          "Gorro y guantes de octubre a abril",
          "Paraguas plegable chico, para la ciudad",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe no se parece a ninguno",
          body: "El tipo G británico, de tres patas rectangulares, no acepta enchufes de otros países, ni siquiera los europeos. Sin adaptador no cargás nada.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador tipo G, mejor dos",
          "Zapatilla múltiple, para cargar todo con un solo adaptador",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "escocia",
        title: "Escocia y el norte",
        notice: null,
        summary: "Si vas a las Tierras Altas",
        items: [
          "Repelente fuerte para los midges, de junio a septiembre",
          "Polar y gorro, también en verano",
          "Calzado de trekking que no se moje",
          "Linterna frontal para los días cortos de invierno",
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
          "Curitas y algo para ampollas: se camina mucho",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas grande",
        why: "El viento lo da vuelta, y en la ciudad es un estorbo.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Euros",
        why: "Se paga en libras, y casi todo con tarjeta.",
        instead: "La tarjeta o el teléfono, y poco o nada de efectivo.",
      },
      {
        leave: "Adaptadores europeos",
        why: "Los tomas británicos no aceptan enchufes de dos patas redondas.",
        instead: "Adaptador tipo G.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "El verano británico es templado, y en Escocia, fresco.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Un abrigo pesado como única capa",
        why: "Adentro todo tiene calefacción, y en el metro o en un museo sobra.",
        instead: "Capas que puedas sacarte y una campera impermeable.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En el metro y en las zonas más concurridas llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para el Reino Unido?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos no necesitan visa para visitas cortas, pero sí la ETA, una autorización electrónica que se tramita en línea antes de viajar. Otros necesitan visa. Verificá el tuyo.",
      },
      {
        question: "¿El Reino Unido es parte del espacio Schengen?",
        answer:
          "No. Tiene su propio control de fronteras y sus propias reglas, y los días que pases ahí no cuentan para los 90 de Schengen.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, siempre. El tipo G británico no acepta enchufes de ningún otro país. El voltaje es 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos y templados. El invierno es frío, gris y con días cortos, pero Londres tiene mucho para hacer bajo techo.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Sí. El Reino Unido es de los países que menos usan efectivo: hasta el transporte de Londres se paga con la tarjeta o el teléfono.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "En los restaurantes, muchas veces la cuenta ya trae un cargo por servicio. Si no lo trae, dejar algo es lo habitual; en los pubs no se espera.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Necesito otro trámite para Irlanda del Norte?",
        answer:
          "No: es parte del Reino Unido. Si cruzás a la República de Irlanda, que es otro país con otras reglas de entrada, revisá qué te pide tu pasaporte.",
      },
    ],
  },
};
