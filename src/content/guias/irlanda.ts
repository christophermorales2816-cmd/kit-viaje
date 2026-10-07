import type { DestinationGuide } from "./types";

/**
 * Guía de Irlanda.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el clima más parejo de Europa, sin frío ni calor de
 * verdad, donde la valija la deciden la lluvia y el viento. Y un caso de
 * entrada propio: es Unión Europea pero no Schengen, usa el enchufe británico
 * y comparte isla con un país que usa otra moneda.
 */
export const irlanda: DestinationGuide = {
  slug: "irlanda",
  country: "Irlanda",
  subregion: "Europa del Norte",
  subhead:
    "Acantilados sobre el Atlántico, pueblos con pubs y música en vivo, y un verde que no se parece a ningún otro. Nunca hace mucho frío ni mucho calor: lo que manda es la lluvia.",

  image: null,

  highlights: [
    {
      value: "20 °C",
      label: "de máxima en Dublín en julio",
      note: "Es el promedio de las máximas, en pleno verano. El calor casi no existe: lo que hay es lluvia y viento.",
    },
    {
      value: "Fuera",
      label: "del espacio Schengen",
      note: "Irlanda tiene su propio control y sus propias reglas de entrada. Los días ahí no cuentan para los 90 de Schengen.",
    },
    {
      value: "Tipo G",
      label: "el enchufe británico",
      note: "Irlanda usa el mismo enchufe de tres patas que el Reino Unido. Sin adaptador no cargás nada.",
    },
    {
      value: "Izquierda",
      label: "la mano por la que se maneja",
      note: "Si alquilás auto, las rutas del oeste son angostas y con muros de piedra. Manejá sin apuro.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: fuera de Schengen",
      body: [
        "Irlanda es parte de la Unión Europea pero no del espacio Schengen: tiene su propio control de entrada, y los días que pases ahí no cuentan para los 90 de Schengen.",
        "Muchos pasaportes latinoamericanos entran sin visa para visitas cortas; otros la necesitan, y las reglas cambian. Verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas y cómo vas a solventar la estadía.",
        "Irlanda del Norte es parte del Reino Unido. Entre los dos no hay controles en la ruta, pero si vas a cruzar, revisá también lo que pide el Reino Unido para tu pasaporte.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Irlanda",
      body: [
        "La moneda es el euro; en Irlanda del Norte, la libra. La tarjeta sin contacto se acepta en todos lados, incluso para montos chicos.",
        "En los pubs se pide y se paga en la barra. En los restaurantes, si la cuenta no trae un cargo por servicio, dejar algo es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Templado, húmedo y cambiante",
      body: [
        "Irlanda es hemisferio norte: enero es invierno y julio, verano. Pero el Atlántico lo templa todo: los inviernos casi nunca bajan de cero y los veranos casi nunca pasan los veinte grados.",
        "Llueve en cualquier mes, más en el oeste —Galway, Connemara, Kerry— que en Dublín y el este. Son chaparrones más que días enteros de lluvia, y el cielo cambia varias veces en el día.",
        "El viento hace que se sienta más frío de lo que marca el termómetro, sobre todo en la costa y en los acantilados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre los días son largos y lo más templados del año. Llueve igual, pero menos, y es la mejor época para el oeste.",
        "El 17 de marzo, San Patricio, es la fiesta nacional: desfiles y pubs llenos en todo el país. En invierno oscurece a media tarde, pero los pubs y la música no paran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Irlanda",
      body: [
        "Desde Dublín salen buses y trenes a las ciudades principales. Para el oeste —Connemara, Kerry, los acantilados— el auto es casi indispensable: el transporte público llega a los pueblos, pero no a los paisajes.",
        "Se maneja por la izquierda, y las rutas rurales son angostas, con curvas y muros de piedra. Calculá más tiempo del que dice el mapa.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en el centro de Dublín.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Paisajes",
      score: 9.5,
      rationale:
        "Acantilados sobre el Atlántico, la costa de Kerry, Connemara y un verde que no se parece a ningún otro.",
    },
    {
      dimension: "Pubs y música",
      score: 10,
      rationale:
        "La música tradicional en vivo en los pubs es parte de la vida de todos los días, no un espectáculo para turistas.",
    },
    {
      dimension: "Historia y cultura",
      score: 8.5,
      rationale:
        "Castillos, monasterios antiguos, la literatura de Dublín y una historia que se cuenta en cada pueblo.",
    },
    {
      dimension: "Hospitalidad",
      score: 9.5,
      rationale: "La gente es abierta y conversadora, y eso cambia el viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Dublín es de las ciudades más caras de Europa para dormir. El oeste y el interior son más accesibles.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Buses y trenes desde Dublín a las ciudades principales, pero para el oeste y la costa el auto es casi indispensable.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en todos lados.",
    },
  ],

  shines: [
    "Paisajes de acantilados y verde atlántico que justifican el viaje.",
    "Pubs con música en vivo y gente que conversa.",
    "Un país chico que se recorre en una o dos semanas.",
  ],

  costs: [
    "Lluvia y viento en cualquier mes.",
    "Dublín es cara para dormir.",
    "Para el oeste hace falta auto, y se maneja por la izquierda.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, aunque acá las diferencias son chicas: lo que cambia de Dublín a Connemara es la lluvia. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "dublin",
      name: "Dublín",
      region: "Dublín y el este",
      tag: "La capital",
      blurb:
        "Pubs con música, el Trinity College con su biblioteca antigua y barrios georgianos de ladrillo. Es la base del planificador: inviernos suaves, veranos frescos y lluvia repartida.",
      coords: [53.3498, -6.2603],
      featured: true,
      image: null,
    },
    {
      id: "galway",
      name: "Galway",
      region: "Oeste",
      tag: "Música y bohemia",
      blurb:
        "Una ciudad chica y bohemia frente al Atlántico, con música en la calle y en los pubs. Puerta a Connemara y a las islas Aran.",
      coords: [53.2707, -9.0568],
      image: null,
    },
    {
      id: "cork",
      name: "Cork",
      region: "Sur",
      tag: "Mercado y puerto",
      blurb:
        "La segunda ciudad del país, con un mercado cubierto famoso y una escena gastronómica fuerte. Cerca, el castillo de Blarney y el puerto de Cobh.",
      coords: [51.8985, -8.4756],
      image: null,
    },
    {
      id: "kilkenny",
      name: "Kilkenny",
      region: "Dublín y el este",
      tag: "Ciudad medieval",
      blurb:
        "Un castillo, calles medievales y una catedral, a menos de dos horas de Dublín. De lo más seco del país.",
      coords: [52.6541, -7.2448],
      image: null,
    },
    {
      id: "killarney",
      name: "Killarney y el anillo de Kerry",
      region: "Sur",
      tag: "Lagos y ruta costera",
      blurb:
        "Lagos, un parque nacional y el inicio del anillo de Kerry, la ruta costera más famosa del país. Llueve mucho, y por eso es tan verde.",
      coords: [52.0599, -9.5044],
      image: null,
    },
    {
      id: "dingle",
      name: "Dingle",
      region: "Sur",
      tag: "Península y pubs",
      blurb:
        "Un pueblo de pescadores con casas de colores y pubs con música, en la península más occidental del país. Ventoso y templado todo el año.",
      coords: [52.1408, -10.2689],
      image: null,
    },
    {
      id: "moher",
      name: "Acantilados de Moher",
      region: "Oeste",
      tag: "Acantilados",
      blurb:
        "Acantilados de más de doscientos metros sobre el Atlántico, con Doolin y sus pubs de música al lado. El viento y la niebla pueden tapar la vista en minutos.",
      coords: [52.9715, -9.4309],
      image: null,
    },
    {
      id: "connemara",
      name: "Connemara",
      region: "Oeste",
      tag: "Montes y turberas",
      blurb:
        "Montañas peladas, lagos, turberas y playas blancas en el oeste más salvaje. Lo más lluvioso del país, y de lo más lindo.",
      coords: [53.4889, -10.0193],
      image: null,
    },
    {
      id: "wicklow",
      name: "Montañas de Wicklow",
      region: "Dublín y el este",
      tag: "Montaña cerca de Dublín",
      blurb:
        "Montañas, lagos y el monasterio antiguo de Glendalough, a una hora de Dublín. Más fresco que la ciudad, y con niebla seguido.",
      coords: [53.0106, -6.3297],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Irlanda casi nunca hace frío extremo ni calor: en invierno las máximas rondan los nueve grados y en verano rara vez pasan los veinte. Lo que define la valija es la lluvia y el viento, que llegan en cualquier mes y cambian varias veces en el día. Armala en capas, con una campera impermeable con capucha y calzado que no se moje; el paraguas, con el viento del oeste, dura poco.",
    keyPoints: [
      "Hemisferio norte, pero sin extremos: el invierno es suave y el verano, fresco.",
      "Llueve en cualquier mes, y más en el oeste que en Dublín. El día cambia de sol a chaparrón varias veces.",
      "El viento del Atlántico hace que se sienta más frío de lo que marca el termómetro, sobre todo en la costa y en los acantilados.",
      "En verano los días son larguísimos; en invierno oscurece a media tarde.",
    ],
    adviceByBucket: {
      calido:
        "Pasa poco. Si toca un día de calor, ropa liviana, pero no dejes el buzo ni la campera: la tarde puede cambiar.",
      templado:
        "Capas y una campera impermeable liviana. Es el mejor clima irlandés: el de un buen día de verano.",
      fresco:
        "Sweater o polar, campera impermeable con capucha y calzado que no se moje. Es el clima de buena parte del año.",
      frio: "Abrigo impermeable, gorro y guantes. No suele nevar, pero el frío es húmedo y con viento, y se siente más.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Irlanda usa el mismo enchufe de tres patas rectangulares que el Reino Unido, que no acepta ningún otro sin adaptador, tampoco los europeos. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Armá la valija en capas",
          body: "En un mismo día puede haber sol, viento y lluvia. Remera, sweater y campera impermeable resuelven todo sin cambiarte.",
        },
        {
          title: "Andá a un pub con música",
          body: "Las sesiones de música tradicional suelen ser de noche y no cobran entrada: se paga lo que se toma. En Galway, Doolin o Dingle hay casi todos los días.",
        },
        {
          title: "Alquilá auto para el oeste",
          body: "Connemara, Kerry y los acantilados se recorren mucho mejor en auto. Se maneja por la izquierda y las rutas son angostas: andá sin apuro.",
        },
        {
          title: "Reservá Dublín con tiempo",
          body: "El alojamiento en Dublín es caro y se llena. Reservar con anticipación, o dormir fuera del centro, cambia mucho el presupuesto.",
        },
        {
          title: "Llevá un adaptador de más",
          body: "El tipo G no se parece a ningún otro. Con uno solo, cargar el teléfono y la batería a la vez es imposible.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No te fíes del sol de la mañana",
          body: "Un día que empieza despejado puede terminar con lluvia y viento. Salí siempre con la campera.",
        },
        {
          title: "No te acerques al borde de los acantilados",
          body: "En Moher y en la costa el viento es fuerte y el borde no siempre tiene baranda. Quedate en los senderos marcados.",
        },
        {
          title: "No esperes que te atiendan en la mesa del pub",
          body: "En los pubs se pide y se paga en la barra. La mesa es para sentarse.",
        },
        {
          title: "No confundas Irlanda con el Reino Unido",
          body: "Irlanda del Norte, con Belfast, es Reino Unido: usa libras y tiene otras reglas de entrada. Si vas a cruzar, revisá qué te pide tu pasaporte.",
        },
        {
          title: "No cuentes con el paraguas",
          body: "Con el viento del oeste dura poco. Una campera con capucha resuelve mejor.",
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
          title: "Fuera de Schengen",
          body: "Irlanda tiene su propio control de entrada, distinto del de Schengen y del británico. Muchos pasaportes latinoamericanos entran sin visa; otros la necesitan. Verificá el tuyo.",
        },
        summary: "Lo que te pueden pedir para entrar",
        items: [
          "Pasaporte vigente",
          "Visa, si tu pasaporte la necesita",
          "Pasaje de vuelta o de salida",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "lluvia",
        title: "Lluvia y viento",
        notice: {
          tone: "info",
          title: "Lluvia en cualquier mes",
          body: "Llueve seguido pero en chaparrones cortos, y el viento cambia todo. Lo impermeable vale más que lo abrigado.",
        },
        summary: "Lo que cubre cualquier mes",
        items: [
          "Campera impermeable con capucha",
          "Sweater o polar",
          "Calzado que no se moje",
          "Pantalón que seque rápido",
          "Gorro y guantes de octubre a abril",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "warn",
          title: "El enchufe es el británico",
          body: "Irlanda usa el tipo G, de tres patas rectangulares, que no acepta enchufes de otros países, ni siquiera los europeos. Sin adaptador no cargás nada.",
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
        id: "ruta",
        title: "En auto por el oeste",
        notice: null,
        summary: "Si vas a manejar",
        items: [
          "Licencia de conducir vigente; averiguá si te piden la internacional",
          "Anteojos de sol: el sol bajo de la tarde encandila",
          "Algo para picar: entre pueblos hay pocos lugares abiertos",
          "Mapas descargados: en el oeste la señal falla",
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
        why: "El viento del Atlántico lo da vuelta.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Adaptadores europeos",
        why: "Los tomas irlandeses no aceptan enchufes de dos patas redondas.",
        instead: "Adaptador tipo G.",
      },
      {
        leave: "Ropa solo de verano",
        why: "Aun en julio las máximas rondan los veinte grados, y las noches son frescas.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Zapatillas de tela",
        why: "Senderos con barro y lluvia en cualquier mes.",
        instead: "Calzado que no se moje.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta, también sin contacto, se acepta en todos lados.",
        instead: "Algo de efectivo para algún pub de pueblo.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Un abrigo pesado como única capa",
        why: "Rara vez hace frío de verdad, y adentro todo tiene calefacción.",
        instead: "Capas y una campera impermeable.",
      },
    ],
    faq: [
      {
        question: "¿Irlanda es parte del espacio Schengen?",
        answer:
          "No. Tiene su propio control de entrada, y los días que pases ahí no cuentan para los 90 de Schengen. Muchos pasaportes latinoamericanos entran sin visa, pero no todos: verificá el tuyo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, siempre. Irlanda usa el enchufe británico tipo G, que no acepta ningún otro. El voltaje es 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos y lo más templado del año. Llueve igual, pero menos.",
      },
      {
        question: "¿Llueve tanto como dicen?",
        answer:
          "Llueve seguido, sobre todo en el oeste, pero en chaparrones cortos más que en días enteros de lluvia. Con una buena campera, no frena nada.",
      },
      {
        question: "¿Hace falta auto?",
        answer:
          "Para Dublín, no. Para el oeste —Connemara, Kerry, los acantilados— casi sí: el transporte público llega a los pueblos, pero no a los paisajes.",
      },
      {
        question: "¿Irlanda del Norte es otro país?",
        answer:
          "Es parte del Reino Unido: usa libras y sigue las reglas de entrada británicas. Si vas a cruzar, revisá qué te pide tu pasaporte.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en todo el país.",
      },
      {
        question: "¿Qué es el día de San Patricio?",
        answer:
          "El 17 de marzo, la fiesta nacional: desfiles, música y pubs llenos en todo el país. Es divertido, y es de los días más caros para dormir en Dublín.",
      },
    ],
  },
};
