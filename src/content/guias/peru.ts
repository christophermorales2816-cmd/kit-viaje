import type { DestinationGuide } from "./types";

/**
 * Guía de Perú.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: TRES climas que no se parecen en nada —la costa
 * desértica y gris, los Andes de altura, la Amazonía— y un viaje típico que
 * pasa por los tres en una semana.
 */
export const peru: DestinationGuide = {
  slug: "peru",
  country: "Perú",
  subregion: "Sudamérica",
  subhead:
    "Costa desértica, Andes de altura y selva amazónica en el mismo viaje. Lima en agosto y Cusco en agosto piden valijas distintas aunque estén a una hora de vuelo.",

  image: null,

  highlights: [
    {
      value: "3",
      label: "climas en un viaje",
      note: "Costa, sierra y selva. El itinerario clásico pasa por los tres en una semana.",
    },
    {
      value: "3.400 m",
      label: "en Cusco",
      note: "La puerta a Machu Picchu está alta. El primer día se camina despacio.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El sol peruano es de las monedas más estables de la región. En zonas turísticas también circulan dólares.",
    },
    {
      value: "May–Sep",
      label: "estación seca en los Andes",
      note: "Es la mejor época para Cusco y Machu Picchu, y también la más llena.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Perú",
      body: [
        "Hay un solo tipo de cambio. El sol es estable y en zonas turísticas también se aceptan dólares, aunque el cambio que te hacen en el comercio no siempre conviene.",
        "Los hoteles no suelen cobrarle el IGV a un turista extranjero que muestra su pasaporte y su constancia de ingreso. Pedilo al pagar: es un ahorro importante.",
        "La tarjeta funciona en ciudades y lugares turísticos. En mercados, transporte local y pueblos de la sierra hace falta efectivo, y conviene tener billetes chicos.",
      ],
    },
    {
      id: "tres-climas",
      title: "Costa, sierra y selva",
      body: [
        "La costa es desierto: en Lima casi no llueve, pero de junio a octubre el cielo está gris y la humedad es alta. No hace frío de verdad, pero tampoco es la playa que uno imagina.",
        "En los Andes el día es soleado y la noche fría. Cusco puede tener veinte grados al mediodía y bajo cero de madrugada en julio, y Puno, junto al Titicaca, es todavía más frío.",
        "La Amazonía, en Iquitos o Puerto Maldonado, es calor y humedad todo el año. El mismo viaje puede pedir campera de abrigo y ropa de selva.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Para los Andes, de mayo a septiembre: es la estación seca, con cielos despejados y noches frías. Es también la temporada alta, así que Machu Picchu y el Camino Inca se reservan con mucha anticipación.",
        "De diciembre a marzo llueve en la sierra. El Camino Inca cierra en febrero por mantenimiento.",
        "La costa tiene su verano de diciembre a abril, con sol y calor. Es la mejor época para las playas del norte, como Máncora.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "altura",
      title: "La altura, igual que en Bolivia",
      body: [
        "Cusco está a 3.400 metros y Puno a 3.800. Llegar en avión desde el nivel del mar es subir de golpe, y casi todo el mundo siente algo el primer día: cansancio, dolor de cabeza, falta de aire al subir escaleras.",
        "Lo que funciona es ir despacio, tomar mucha agua y evitar el alcohol las primeras horas. Muchos itinerarios empiezan por el Valle Sagrado, que está más bajo, y suben a Cusco después.",
        "Machu Picchu está más bajo que Cusco, a unos 2.400 metros, con un clima más templado y húmedo.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande de América Latina: atención a las pertenencias en mercados, terminales y zonas concurridas, y preferir taxis por aplicación o pedidos por el alojamiento.",
        "El agua de la canilla no es para tomar. Agua embotellada o filtrada, también para lavarse los dientes si tenés el estómago sensible.",
        "Para la Amazonía suele recomendarse la vacuna contra la fiebre amarilla. Consultalo con tiempo, porque necesita días para hacer efecto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Historia y arqueología",
      score: 10,
      rationale:
        "Machu Picchu, Cusco, el Valle Sagrado y siglos de culturas anteriores a los incas. Pocos países tienen tanto.",
    },
    {
      dimension: "Gastronomía",
      score: 10,
      rationale:
        "Una de las cocinas más reconocidas del mundo, y se come muy bien en todos los rangos de precio.",
    },
    {
      dimension: "Paisajes de montaña",
      score: 9.5,
      rationale:
        "Los Andes, la Cordillera Blanca y el lago Titicaca. Trekking de primer nivel.",
    },
    {
      dimension: "Naturaleza y biodiversidad",
      score: 8.5,
      rationale:
        "La Amazonía, las islas Ballestas y el desierto de la costa. Variedad enorme en un solo país.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Buena en comida, transporte y alojamiento. Machu Picchu y sus accesos son el gasto que descoloca.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos internos y buses buenos, pero la altura y las reservas de Machu Picchu piden planificar.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Un tipo de cambio y una moneda estable. No hay sistema que entender.",
    },
  ],

  shines: [
    "Comer muy bien en cualquier rango de precio, de un mercado a un restaurante de autor.",
    "Machu Picchu, que está a la altura de lo que se espera.",
    "Pasar del desierto a los Andes y a la selva en el mismo viaje.",
  ],

  costs: [
    "La altura de Cusco y Puno, que obliga a ir despacio los primeros días.",
    "Las entradas y el tren a Machu Picchu, que hay que reservar con anticipación.",
    "Empacar para tres climas distintos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Puno en julio no pide lo mismo que Iquitos. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "lima",
      name: "Lima",
      region: "Costa",
      tag: "Malecones y cocina",
      blurb:
        "Una capital sobre acantilados frente al Pacífico, y para muchos la capital gastronómica del continente. Es la base del planificador y la puerta de entrada al país.",
      coords: [-12.0464, -77.0428],
      featured: true,
      image: null,
    },
    {
      id: "cusco",
      name: "Cusco",
      region: "Andes",
      tag: "Capital inca",
      blurb:
        "La antigua capital del imperio inca, con muros incas bajo iglesias coloniales, a 3.400 metros. Base para el Valle Sagrado y Machu Picchu.",
      coords: [-13.5319, -71.9675],
      image: null,
    },
    {
      id: "machu-picchu",
      name: "Machu Picchu",
      region: "Andes",
      tag: "Ciudadela inca",
      blurb:
        "La ciudadela entre montañas, con Aguas Calientes al pie. Más baja y húmeda que Cusco; las entradas tienen cupo y se reservan con tiempo.",
      coords: [-13.1631, -72.545],
      image: null,
    },
    {
      id: "huaraz",
      name: "Huaraz",
      region: "Andes",
      tag: "Cordillera Blanca",
      blurb:
        "La capital del trekking en Perú, al pie de la Cordillera Blanca, con lagunas turquesa y nevados de más de seis mil metros.",
      coords: [-9.5278, -77.5278],
      image: null,
    },
    {
      id: "arequipa",
      name: "Arequipa",
      region: "Andes",
      tag: "Ciudad blanca",
      blurb:
        "Una ciudad colonial de piedra volcánica blanca, al pie del Misti, con sol casi todo el año. Base para el cañón del Colca.",
      coords: [-16.409, -71.5375],
      image: null,
    },
    {
      id: "puno",
      name: "Puno y el Titicaca",
      region: "Andes",
      tag: "Islas flotantes",
      blurb:
        "A orillas del Titicaca, a 3.800 metros, con las islas flotantes de los uros. Frío de verdad de noche, todo el año.",
      coords: [-15.8402, -70.0219],
      image: null,
    },
    {
      id: "paracas",
      name: "Paracas",
      region: "Costa",
      tag: "Islas Ballestas",
      blurb:
        "Desierto que llega al mar, con una reserva natural y las islas Ballestas, llenas de lobos marinos y aves. Casi nunca llueve.",
      coords: [-13.834, -76.25],
      image: null,
    },
    {
      id: "mancora",
      name: "Máncora",
      region: "Costa norte",
      tag: "Playa y sol",
      blurb:
        "La playa del norte con sol casi todo el año y agua templada, al revés del resto de la costa peruana. Surf y descanso.",
      coords: [-4.1069, -81.0475],
      image: null,
    },
    {
      id: "iquitos",
      name: "Iquitos",
      region: "Amazonía",
      tag: "Ciudad sin rutas",
      blurb:
        "La ciudad más grande del mundo a la que no se llega por carretera: solo en avión o en barco por el Amazonas. Puerta a la selva.",
      coords: [-3.7437, -73.2516],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Perú pide valija para tres climas. Lima es templada y gris de junio a octubre, sin frío de verdad; los Andes tienen días de sol y noches bajo cero en la estación seca; la Amazonía es calor y humedad todo el año. Capas para la sierra, ropa liviana para la selva y una campera impermeable que sirva para las dos. Para Cusco y Machu Picchu, la mejor época es de mayo a septiembre.",
    keyPoints: [
      "En los Andes la diferencia entre el mediodía y la madrugada puede pasar los veinte grados. Se resuelve con capas.",
      "La estación seca de los Andes, de mayo a septiembre, coincide con el invierno: días de sol y noches heladas.",
      "Lima no tiene un invierno frío sino gris y húmedo. Una campera liviana alcanza.",
      "La altura de Cusco y Puno se siente: los primeros días, despacio y con mucha agua.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y que seque rápido, repelente y protector. En la selva conviene manga larga liviana al atardecer por los mosquitos.",
      templado:
        "Remera, algo de manga larga y una campera liviana. Es el clima de Lima y de Machu Picchu buena parte del año.",
      fresco:
        "Buzo o polar y campera cortaviento. En la sierra el sol del mediodía engaña: a la sombra y al atardecer refresca enseguida.",
      frio: "Campera de abrigo, gorro y guantes. En Cusco y Puno las noches de la estación seca bajan de cero, y muchos alojamientos no tienen calefacción.",
    },
    plug: {
      types: "Tipo A y tipo C",
      voltage: "220 V, 60 Hz",
      note: "Muchos tomas aceptan los dos: la ficha plana americana y la redonda europea. Ojo con el voltaje: es 220 V, así que lo que diga solo 110 V se quema.",
    },
    tips: {
      dos: [
        {
          title: "Empacá en capas para la sierra",
          body: "Primera capa liviana, polar y campera. Con eso pasás del sol del mediodía en Cusco a la helada de la madrugada sin cargar ropa de más.",
        },
        {
          title: "Reservá Machu Picchu con tiempo",
          body: "Las entradas tienen cupo diario y el Camino Inca se agota meses antes en temporada alta. No es algo que se resuelva al llegar.",
        },
        {
          title: "Pedí que no te cobren el IGV en el hotel",
          body: "Mostrando pasaporte y constancia de ingreso, los hoteles no suelen cobrárselo a un turista extranjero. Pedilo al pagar.",
        },
        {
          title: "Llevá billetes chicos",
          body: "En mercados, taxis y pueblos de la sierra el cambio para un billete grande no siempre existe.",
        },
        {
          title: "Protector solar y labial para la altura",
          body: "En los Andes el sol quema mucho más que al nivel del mar, aunque haga fresco.",
        },
        {
          title: "Llevá una campera impermeable liviana",
          body: "Sirve para la lluvia de la selva, la llovizna de Machu Picchu y el viento de la sierra.",
        },
      ],
      donts: [
        {
          title: "No llegues a Cusco y salgas a correr",
          body: "El primer día, despacio. Subir escaleras a 3.400 metros recién llegado cansa como no esperás.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, y cuidado con el hielo en lugares que no conocés.",
        },
        {
          title: "No asumas que Lima es playa en invierno",
          body: "De junio a octubre está gris y húmeda, sin sol. La playa de verdad está en el norte, en Máncora, o en el verano limeño.",
        },
        {
          title: "No lleves solo ropa de verano",
          body: "Aunque vayas en enero, en los Andes las noches son frías todo el año.",
        },
        {
          title: "No enchufes nada que diga solo 110 V",
          body: "El voltaje es 220 V. Revisá cargadores, secadores y planchitas antes de enchufarlos.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con varios vuelos internos, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "altura",
        title: "Altura",
        notice: {
          tone: "warn",
          title: "Cusco y Puno están altos",
          body: "A 3.400 y 3.800 metros casi todo el mundo siente algo el primer día. Despacio, mucha agua y nada de alcohol al principio. Si tenés alguna condición de salud, consultá antes de viajar.",
        },
        summary: "Lo que ayuda a adaptarse",
        items: [
          "Botella reutilizable para tomar agua todo el día",
          "Protector solar de factor alto y protector labial",
          "Anteojos de sol con filtro",
          "Algo para el dolor de cabeza",
        ],
      },
      {
        id: "capas",
        title: "Ropa en capas",
        notice: null,
        summary: "Para la sierra, la costa y la selva",
        items: [
          "Primera capa térmica liviana",
          "Polar o buzo abrigado",
          "Campera impermeable con capucha",
          "Gorro y guantes para las noches de la sierra",
          "Ropa liviana de secado rápido para la selva",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Consultá las vacunas con tiempo",
          body: "Para la Amazonía suele recomendarse la fiebre amarilla. Necesita días para hacer efecto: no se resuelve en el aeropuerto.",
        },
        summary: "Botiquín básico y qué averiguar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos para la selva",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "El voltaje es 220 V",
          body: "Muchos tomas aceptan fichas planas y redondas, pero el voltaje es 220 V. Lo que diga solo 110 V se quema.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Linterna frontal si vas a hacer trekking",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Consultá con el pediatra antes de llevarlos a la altura",
          "Capas extra para las noches de la sierra",
          "Entretenimiento offline para vuelos y traslados largos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una sola campera gruesa",
        why: "En la sierra al mediodía sobra, y en la selva no sirve.",
        instead: "Capas: polar y campera impermeable liviana.",
      },
      {
        leave: "Ropa solo de verano para Cusco",
        why: "Las noches de la sierra son frías todo el año, y bajan de cero en la estación seca.",
        instead: "Polar, gorro y guantes livianos.",
      },
      {
        leave: "Jeans pesados para la selva",
        why: "Con calor y humedad no secan nunca.",
        instead: "Pantalones livianos de secado rápido.",
      },
      {
        leave: "Aparatos de 110 V",
        why: "El voltaje es 220 V y se queman.",
        instead: "Cargadores que digan 100-240 V.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Se camina mucho, en subida y sobre piedra.",
        instead: "Zapatillas de trekking cómodas.",
      },
      {
        leave: "Billetes grandes",
        why: "En mercados, taxis y pueblos no siempre hay cambio.",
        instead: "Billetes chicos y monedas.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en mercados y terminales conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Muchos tomas aceptan fichas planas y redondas, así que quizás no. Lo que sí importa es el voltaje: 220 V. Revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para Machu Picchu?",
        answer:
          "De mayo a septiembre, la estación seca. Es también la temporada alta, así que reservá entradas y tren con tiempo.",
      },
      {
        question: "¿Me va a afectar la altura?",
        answer:
          "Es probable que sientas algo el primer día en Cusco o Puno. Despacio, mucha agua y nada de alcohol al principio. Empezar por el Valle Sagrado, que está más bajo, ayuda.",
      },
      {
        question: "¿Hace frío en Lima?",
        answer:
          "No de verdad. En invierno está gris y húmeda, con quince a veinte grados. Una campera liviana alcanza.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No para tomar. Agua embotellada o filtrada, y cuidado con el hielo.",
      },
      {
        question: "¿Puedo pagar con tarjeta?",
        answer:
          "En ciudades y lugares turísticos, sí. En mercados, transporte local y pueblos hace falta efectivo, mejor en billetes chicos.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para la Amazonía suele recomendarse la fiebre amarilla. Consultalo con semanas de anticipación.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Mediana. Con capas para la sierra y ropa liviana para la selva, un carry-on queda justo. En el tren a Machu Picchu hay límite de equipaje, así que dejá la valija grande en Cusco.",
      },
    ],
  },
};
