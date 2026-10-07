import type { DestinationGuide } from "./types";

/**
 * Guía de Islandia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la misma valija los doce meses. Es el único destino
 * de la lista donde el planificador pide abrigo también en julio, y no es un
 * error: la máxima del verano en Reikiavik ronda los catorce grados, con
 * viento y lluvia. Lo que cambia con la estación es la luz.
 */
export const islandia: DestinationGuide = {
  slug: "islandia",
  country: "Islandia",
  subregion: "Europa del Norte",
  subhead:
    "Glaciares, volcanes, cascadas y aguas termales en una isla en medio del Atlántico Norte. Menos fría de lo que su nombre promete y mucho más cambiante: capas impermeables todo el año.",

  image: null,

  highlights: [
    {
      value: "4 h",
      label: "de luz en Reikiavik en diciembre",
      note: "Y casi veinticuatro en junio, cuando el sol apenas se esconde. La luz decide el viaje tanto como el clima.",
    },
    {
      value: "14 °C",
      label: "de máxima en Reikiavik en julio",
      note: "Es pleno verano. La campera impermeable y el polar van en la valija en cualquier mes.",
    },
    {
      value: "Sep–Abr",
      label: "auroras boreales",
      note: "Se ven con noche oscura y cielo despejado. Ninguna fecha las garantiza: el clima cambia todo.",
    },
    {
      value: "ISK",
      label: "coronas, todo con tarjeta",
      note: "Islandia no usa el euro, y se paga con tarjeta hasta un pancho en una estación de servicio.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: Schengen, sin ser Unión Europea",
      body: [
        "Islandia no es parte de la Unión Europea, pero sí del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Coronas, tarjeta y PIN",
      body: [
        "La moneda es la corona islandesa, y casi todo se paga con tarjeta o con el teléfono. Muchas estaciones de servicio son de autoservicio y piden el PIN de la tarjeta para cargar combustible: tenelo a mano.",
        "Es de los países más caros del mundo para comer afuera, dormir y alquilar auto. La propina no se acostumbra: el servicio está incluido en el precio.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí coronas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Cambiante, más que frío",
      body: [
        "Islandia es hemisferio norte: enero es invierno y julio, verano. Gracias al Atlántico, Reikiavik y la costa sur tienen inviernos cerca de cero, pero el verano es fresco: la máxima casi nunca pasa los quince grados.",
        "Lo que define la valija es lo cambiante: sol, lluvia, viento y granizo pueden pasar en la misma tarde, en cualquier mes. El viento hace que todo se sienta bastante más frío.",
        "El norte y el interior son más fríos: Mývatn pasa el invierno bajo cero. En diciembre hay unas cuatro horas de luz; en junio, casi veinticuatro.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto los días son eternos y las rutas están abiertas, incluidas las del interior, que solo abren en verano. Es la mejor época para recorrer la isla entera, y la más cara.",
        "De septiembre a abril es la temporada de auroras, con noches largas. En pleno invierno los días son muy cortos y el viento o la nieve pueden cerrar caminos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Islandia",
      body: [
        "Para salir de Reikiavik, casi siempre hace falta auto. La ruta circular da la vuelta a la isla; las rutas del interior solo abren en verano y solo para vehículos todoterreno.",
        "El clima puede cerrar caminos sin aviso: los sitios oficiales de rutas y del servicio meteorológico se consultan cada mañana. Manejar fuera del camino está prohibido y daña el musgo, que tarda décadas en crecer.",
        "En las playas del sur hay olas que arrastran sin aviso, y los glaciares tienen grietas que no se ven: el mar se mira desde lejos y el hielo se camina con guía.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Naturaleza",
      score: 10,
      rationale:
        "Glaciares, volcanes, cascadas, playas negras y géiseres en un solo viaje.",
    },
    {
      dimension: "Auroras y luz",
      score: 9.5,
      rationale:
        "Auroras de septiembre a abril y noches casi blancas en verano.",
    },
    {
      dimension: "Aguas termales",
      score: 9.5,
      rationale:
        "Lagunas y piletas geotermales en todo el país, al aire libre todo el año.",
    },
    {
      dimension: "Ciudades",
      score: 6,
      rationale:
        "Reikiavik es chica y agradable, pero el viaje es la naturaleza.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale:
        "De los países más caros del mundo: comer, dormir y alquilar auto cuestan mucho.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "La ruta circular recorre todo, pero hace falta auto y el clima puede cerrar caminos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8.5,
      rationale:
        "Todo con tarjeta y precios claros, aunque la corona se mueve más que el euro.",
    },
  ],

  shines: [
    "Paisajes que no se parecen a nada.",
    "Aguas termales al aire libre todo el año.",
    "Auroras en invierno y noches blancas en verano.",
  ],

  costs: [
    "Uno de los países más caros del mundo.",
    "Clima que cambia en minutos y cierra caminos.",
    "Hace falta auto para casi todo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Mývatn en enero no pide lo mismo que Vík. Que pida abrigo también en julio no es un error: es Islandia. Los precios están en coronas islandesas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "reikiavik",
      name: "Reikiavik",
      region: "Suroeste",
      tag: "Capital chica",
      blurb:
        "La capital más al norte del mundo, chica, colorida y con piletas geotermales en cada barrio. Es la base del planificador: inviernos cerca de cero, veranos frescos.",
      coords: [64.1466, -21.9426],
      featured: true,
      image: null,
    },
    {
      id: "circulo-dorado",
      name: "Círculo Dorado",
      region: "Suroeste",
      tag: "Géiseres y cascadas",
      blurb:
        "Þingvellir, donde se separan dos placas tectónicas, el géiser Strokkur y la cascada de Gullfoss, en un día desde Reikiavik.",
      coords: [64.2559, -21.1299],
      image: null,
    },
    {
      id: "vik",
      name: "Vík y la costa sur",
      region: "Costa sur",
      tag: "Playas negras",
      blurb:
        "Playas de arena volcánica negra, columnas de basalto y cascadas como Skógafoss y Seljalandsfoss en el camino. La zona más lluviosa del recorrido.",
      coords: [63.4186, -19.006],
      image: null,
    },
    {
      id: "jokulsarlon",
      name: "Jökulsárlón y Vatnajökull",
      region: "Costa sur",
      tag: "Laguna de témpanos",
      blurb:
        "Una laguna de témpanos desprendidos de uno de los glaciares más grandes de Europa, con la playa de diamantes enfrente.",
      coords: [64.0784, -16.2306],
      image: null,
    },
    {
      id: "akureyri",
      name: "Akureyri",
      region: "Norte",
      tag: "La capital del norte",
      blurb:
        "La segunda ciudad del país, al fondo de un fiordo, con jardín botánico y salidas a ver ballenas. Inviernos con nieve.",
      coords: [65.6835, -18.0878],
      image: null,
    },
    {
      id: "myvatn",
      name: "Lago Mývatn",
      region: "Norte",
      tag: "Volcanes y baños",
      blurb:
        "Un lago entre cráteres, campos de lava y fumarolas, con baños naturales de agua caliente. Lo más frío del recorrido en invierno.",
      coords: [65.6039, -16.9961],
      image: null,
    },
    {
      id: "snaefellsnes",
      name: "Península de Snæfellsnes",
      region: "Oeste",
      tag: "Islandia en miniatura",
      blurb:
        "Un volcán cubierto por un glaciar, playas, acantilados y la montaña Kirkjufell: el país entero en una península.",
      coords: [65.0748, -22.7298],
      image: null,
    },
    {
      id: "husavik",
      name: "Húsavík",
      region: "Norte",
      tag: "Ballenas",
      blurb:
        "La capital de las ballenas: de mayo a septiembre, las salidas en barco las encuentran casi siempre.",
      coords: [66.0449, -17.3389],
      image: null,
    },
    {
      id: "isafjordur",
      name: "Ísafjörður y los fiordos del oeste",
      region: "Oeste",
      tag: "Fiordos remotos",
      blurb:
        "Un pueblo pesquero entre fiordos y montañas, en la región más remota del país. Se llega por una ruta larga o en avión.",
      coords: [66.0749, -23.135],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Islandia es menos fría de lo que su nombre dice y mucho más cambiante: en Reikiavik el invierno ronda el cero y el verano casi nunca pasa los quince grados, con viento y lluvia en cualquier mes. La valija es la misma todo el año, en capas: primera capa térmica, polar, campera y pantalón impermeables, gorro, guantes y botas que no se mojen. En invierno sumá grampones; en verano, antifaz. Y traje de baño: las piletas geotermales funcionan siempre.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es fresco; el invierno, largo, oscuro y ventoso.",
      "El clima cambia varias veces en el día: sol, lluvia, viento y granizo en la misma tarde.",
      "En diciembre hay unas cuatro horas de luz; en junio, casi veinticuatro.",
      "Las piletas y lagunas geotermales funcionan todo el año: el traje de baño va siempre.",
    ],
    adviceByBucket: {
      calido:
        "Casi no pasa. Si toca un día de sol, ropa liviana debajo, pero la campera impermeable no se queda en el auto.",
      templado:
        "Pasa poco: es un muy buen día de verano. Capas y campera impermeable igual.",
      fresco:
        "Es el verano islandés: primera capa, polar y campera y pantalón impermeables. El viento hace que se sienta más frío.",
      frio: "Primera capa térmica de lana, polar, campera de abrigo impermeable, gorro, guantes y botas con buena suela. Con viento, se siente mucho menos de lo que marca el termómetro.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Armá la valija en capas impermeables",
          body: "Campera y pantalón impermeables sobre un polar y una primera capa térmica sirven todo el año.",
        },
        {
          title: "Revisá rutas y clima cada mañana",
          body: "El viento y la nieve cierran caminos sin aviso. Los sitios oficiales de rutas y del servicio meteorológico son la referencia.",
        },
        {
          title: "Tené a mano el PIN de la tarjeta",
          body: "Muchas estaciones de servicio son de autoservicio y lo piden para cargar combustible.",
        },
        {
          title: "Llevá traje de baño",
          body: "Las piletas geotermales de los pueblos y las lagunas termales funcionan todo el año, al aire libre.",
        },
        {
          title: "Reservá auto y alojamiento con tiempo",
          body: "En verano se agotan, y fuera de Reikiavik las opciones son pocas.",
        },
        {
          title: "Elegí pagar en coronas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te acerques al agua en las playas negras",
          body: "En las playas del sur hay olas que suben de golpe y arrastran. El mar se mira desde lejos.",
        },
        {
          title: "No camines sobre un glaciar sin guía",
          body: "Tienen grietas que no se ven. Las caminatas sobre hielo se hacen con guía y equipo.",
        },
        {
          title: "No manejes por el interior sin 4x4",
          body: "Las rutas de montaña solo abren en verano y solo para vehículos todoterreno. El seguro no cubre lo demás.",
        },
        {
          title: "No salgas del camino",
          body: "Manejar fuera de la ruta está prohibido y daña el musgo, que tarda décadas en crecer. Las multas son altas.",
        },
        {
          title: "No abras la puerta del auto contra el viento",
          body: "Con ráfagas fuertes, la puerta se puede doblar. Abrila con las dos manos y de cara al viento.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "capas",
        title: "Capas impermeables",
        notice: {
          tone: "warn",
          title: "El clima cambia en minutos",
          body: "Sol, lluvia, viento y granizo pueden pasar en la misma tarde, en cualquier mes. Sin ropa impermeable, se termina mojado y con frío.",
        },
        summary: "La valija de los doce meses",
        items: [
          "Primera capa térmica de lana o sintética",
          "Polar",
          "Campera y pantalón impermeables",
          "Gorro y guantes, también en verano",
          "Botas de trekking impermeables",
        ],
      },
      {
        id: "invierno",
        title: "Invierno",
        notice: {
          tone: "info",
          title: "Pocas horas de luz",
          body: "En diciembre hay unas cuatro horas de luz y los caminos pueden cerrarse por nieve o viento. Armá días cortos y con margen.",
        },
        summary: "Si vas de noviembre a marzo",
        items: [
          "Grampones para el calzado",
          "Linterna frontal",
          "Abrigo de nieve para salir a ver auroras de noche",
          "Batería portátil: el frío descarga el teléfono",
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
          "Licencia de conducir vigente, si vas a alquilar auto",
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
          "Cargador para el auto",
          "Mapas descargados: fuera de la ruta circular la señal falla",
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
          "Protector labial y crema para el viento",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas",
        why: "El viento islandés lo da vuelta en segundos.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Algodón como primera capa",
        why: "Retiene la humedad y enfría.",
        instead: "Primera capa de lana o sintética.",
      },
      {
        leave: "Zapatillas de tela",
        why: "Lluvia, barro, nieve y roca volcánica en cualquier sendero.",
        instead: "Botas de trekking impermeables.",
      },
      {
        leave: "Mucho efectivo",
        why: "Todo se paga con tarjeta.",
        instead: "La tarjeta, con su PIN.",
      },
      {
        leave: "Ropa solo de verano para julio",
        why: "En julio la máxima en Reikiavik ronda los catorce grados, con viento.",
        instead: "Capas, polar y campera.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua fría de la canilla es de las mejores del mundo.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Islandia?",
        answer:
          "Islandia no es parte de la Unión Europea pero sí del espacio Schengen: muchos pasaportes latinoamericanos entran sin visa por hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificá el tuyo, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuándo se ven las auroras boreales?",
        answer:
          "De septiembre a abril, con noche oscura y cielo despejado. Ninguna fecha las garantiza: el clima manda.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para recorrer la isla entera con días largos y rutas abiertas; de septiembre a abril para las auroras, con menos horas de luz y caminos que pueden cerrarse.",
      },
      {
        question: "¿Hace falta alquilar auto?",
        answer:
          "Para salir de Reikiavik, casi siempre. La ruta circular recorre toda la isla; las rutas del interior solo abren en verano y piden 4x4.",
      },
      {
        question: "¿Es tan caro como dicen?",
        answer:
          "Sí: comer afuera, dormir y alquilar auto cuestan mucho. Los supermercados y el agua de la canilla ayudan.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, y excelente. La caliente tiene olor a azufre porque es geotermal: es normal.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No se acostumbra: el servicio está incluido en el precio.",
      },
    ],
  },
};
