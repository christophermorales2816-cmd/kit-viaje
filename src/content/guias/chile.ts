import type { DestinationGuide } from "./types";

/**
 * Guía de Chile.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el eje de la valija es la LATITUD. Del desierto de
 * Atacama a la Patagonia hay cuatro mil kilómetros, y el mismo mes pide ropa
 * opuesta en cada punta.
 */
export const chile: DestinationGuide = {
  slug: "chile",
  country: "Chile",
  subregion: "Sudamérica",
  subhead:
    "Un país largo y angosto que va del desierto más seco del mundo a los glaciares de la Patagonia. Acá la pregunta no es en qué mes vas, sino a qué latitud.",

  image: null,

  highlights: [
    {
      value: "4.300 km",
      label: "de norte a sur",
      note: "Del desierto de Atacama al estrecho de Magallanes. El mismo mes tiene clima de desierto en una punta y de Patagonia en la otra.",
    },
    {
      value: "1",
      label: "tipo de cambio",
      note: "El peso chileno flota y no tiene mercado paralelo. Lo que cambia el costo es la comisión de tu banco.",
    },
    {
      value: "3.700 km",
      label: "hasta Isla de Pascua",
      note: "En pleno Pacífico y con su propio clima. Es un viaje aparte, no una escala.",
    },
    {
      value: "Ene–Feb",
      label: "temporada alta en el sur",
      note: "Es cuando la Patagonia es transitable y cuando todo se reserva con meses de anticipación.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Cómo se paga en Chile",
      body: [
        "Hay un solo tipo de cambio y no existe un mercado paralelo que valga la pena para un turista. El costo real del viaje depende de lo que cobre tu banco por usar la tarjeta afuera o por retirar efectivo.",
        "La tarjeta se acepta casi en todos lados, incluso para montos chicos. El efectivo sigue haciendo falta en ferias, en algunos colectivos y en pueblos del sur.",
        "Los hoteles suelen no cobrarle el IVA a un turista extranjero que paga en moneda extranjera o con tarjeta del exterior. Pedilo al reservar y llevá a mano el comprobante de ingreso al país: es un ahorro grande y no siempre te lo ofrecen.",
      ],
    },
    {
      id: "latitud",
      title: "La latitud manda más que la estación",
      body: [
        "Chile es hemisferio sur: enero es verano y julio es invierno. Pero lo que define qué meter en la valija es a qué altura del mapa vas a estar.",
        "En el norte, San Pedro de Atacama tiene días de sol fuerte y noches bajo cero, a cualquier altura del año. Santiago tiene un verano seco y caluroso y un invierno fresco con algo de lluvia. Del sur para abajo llueve mucho, y en la Patagonia el viento es parte del clima todos los días.",
        "Un viaje que combina el norte con la Patagonia pide empacar para los dos extremos. No es exagerar: son climas opuestos en el mismo país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Para la Patagonia, de noviembre a marzo. Fuera de esa ventana muchos servicios cierran, los días se acortan y algunos senderos quedan cerrados.",
        "Para Santiago y la zona central, la primavera y el otoño son lo mejor: temperaturas amables, viñedos en su momento y menos gente que en verano.",
        "El norte se visita todo el año. En verano puede haber lluvias de altura que cortan algún camino; el resto del año es seco.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por un país de cuatro mil kilómetros",
      body: [
        "Entre regiones se vuela. Santiago a Punta Arenas o a Calama son vuelos de varias horas, y por tierra serían días.",
        "Los buses de larga distancia son cómodos y frecuentes en la zona central y en el norte. En el sur, entre Puerto Montt y la Patagonia, el camino cruza a Argentina o va por ferry.",
        "La regla práctica es la de cualquier país largo: elegí una o dos regiones. Dos semanas rinden mucho más en el norte más Santiago, o en Santiago más la Patagonia, que intentando todo.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención al celular y a la mochila en el metro y en zonas concurridas.",
        "Chile es un país sísmico y las construcciones están preparadas para eso. Fijate dónde está la salida de tu alojamiento y seguí las indicaciones locales si algo pasa.",
        "El sol del norte y el de la Patagonia queman más de lo que se siente, por la altura en un caso y por el aire limpio y el viento en el otro. El protector solar no es un detalle.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Naturaleza y paisajes",
      score: 10,
      rationale:
        "Desierto de altura, lagos y volcanes, fiordos y la Patagonia en un solo país. Difícil encontrar otro con ese rango.",
    },
    {
      dimension: "Vinos y gastronomía",
      score: 8,
      rationale:
        "Los valles del vino a una hora de Santiago y una cocina de mar que se toma en serio. La comida al paso es sencilla.",
    },
    {
      dimension: "Aventura al aire libre",
      score: 9.5,
      rationale:
        "Trekking, montaña, observación astronómica y deportes de nieve en invierno. Bien organizado y con buena infraestructura.",
    },
    {
      dimension: "Vida urbana y cultura",
      score: 7,
      rationale:
        "Santiago y Valparaíso tienen barrios con carácter y buena oferta cultural, aunque la mayoría viene por la naturaleza.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Servicios confiables y bien hechos, a un costo que está entre los altos de la región. La Patagonia y Pascua son caras.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Buenos buses, vuelos internos frecuentes y reservas en línea para casi todo. Las distancias son el único obstáculo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Un tipo de cambio, precios estables y tarjeta en todos lados. No hay que entender ningún sistema.",
    },
  ],

  shines: [
    "Del desierto a los glaciares en el mismo viaje, con vuelos que lo hacen posible.",
    "Los cielos del norte, de los más limpios del planeta para mirar estrellas.",
    "Infraestructura confiable: lo que reservás, existe.",
  ],

  costs: [
    "La Patagonia y la Isla de Pascua son caras y se reservan con mucha anticipación.",
    "Las distancias obligan a volar entre regiones.",
    "Empacar para dos climas opuestos en un mismo viaje.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: San Pedro de Atacama no pide lo mismo que Punta Arenas. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "santiago",
      name: "Santiago",
      region: "Zona central",
      tag: "Capital entre cerros",
      blurb:
        "Una capital al pie de la cordillera, con barrios para caminar, cerros con vista y los valles del vino a una hora. Es la base del planificador y la puerta de entrada al país.",
      coords: [-33.4489, -70.6693],
      featured: true,
      image: null,
    },
    {
      id: "valparaiso",
      name: "Valparaíso",
      region: "Zona central",
      tag: "Cerros y ascensores",
      blurb:
        "Un puerto colgado de los cerros, con casas de colores, murales y ascensores centenarios. Se recorre a pie y en subida, y siempre más fresco que Santiago.",
      coords: [-33.0472, -71.6127],
      image: null,
    },
    {
      id: "san-pedro-de-atacama",
      name: "San Pedro de Atacama",
      region: "Norte",
      tag: "Desierto de altura",
      blurb:
        "Un pueblo de adobe a 2.400 metros en el desierto más seco del mundo, con salares, géiseres y lagunas de altura. Sol fuerte de día y helada de noche, todo el año.",
      coords: [-22.9087, -68.1997],
      image: null,
    },
    {
      id: "la-serena",
      name: "La Serena y el Elqui",
      region: "Norte",
      tag: "Playa y estrellas",
      blurb:
        "Una ciudad de playa con clima templado y, tierra adentro, el valle del Elqui: pisco, pueblos chicos y algunos de los mejores cielos para observar estrellas.",
      coords: [-29.9027, -71.2519],
      image: null,
    },
    {
      id: "puerto-varas",
      name: "Puerto Varas",
      region: "Sur",
      tag: "Lagos y volcanes",
      blurb:
        "A orillas de un lago con el volcán Osorno enfrente. Base para recorrer la región de los lagos, donde llueve buena parte del año y el verano es corto y verde.",
      coords: [-41.3195, -72.9854],
      image: null,
    },
    {
      id: "valdivia",
      name: "Valdivia",
      region: "Sur",
      tag: "Ríos y lluvia",
      blurb:
        "Ciudad universitaria entre ríos, con fuertes coloniales en la desembocadura y cervecerías de tradición alemana. Una de las ciudades más lluviosas del país.",
      coords: [-39.8142, -73.2459],
      image: null,
    },
    {
      id: "puerto-natales",
      name: "Puerto Natales",
      region: "Patagonia",
      tag: "Torres del Paine",
      blurb:
        "El pueblo desde donde se entra al parque Torres del Paine. Viento todo el año, días larguísimos en verano y casi todo cerrado en invierno.",
      coords: [-51.7236, -72.4875],
      image: null,
    },
    {
      id: "punta-arenas",
      name: "Punta Arenas",
      region: "Patagonia",
      tag: "Estrecho de Magallanes",
      blurb:
        "La ciudad más austral del continente con vuelos regulares, sobre el estrecho de Magallanes. Puerta a pingüineras, a Tierra del Fuego y a la Antártida.",
      coords: [-53.1638, -70.9171],
      image: null,
    },
    {
      id: "isla-de-pascua",
      name: "Isla de Pascua",
      region: "Isla de Pascua",
      tag: "Moáis en el Pacífico",
      blurb:
        "Rapa Nui, a cinco horas de vuelo del continente: los moáis, una cultura polinesia viva y clima subtropical parejo. Es el destino más caro del país y se planifica aparte.",
      coords: [-27.1127, -109.3497],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "En Chile la valija depende de a qué latitud vas, no tanto del mes. Santiago tiene verano seco y caluroso e invierno fresco; el norte tiene sol fuerte de día y helada de noche todo el año; la Patagonia pide abrigo y cortaviento incluso en enero. Si combinás regiones, empacá en capas: es la única forma de cubrir los dos extremos sin llevar el doble.",
    keyPoints: [
      "Las estaciones son las del hemisferio sur, pero la latitud pesa más: el mismo enero es desierto en el norte y viento frío en la Patagonia.",
      "En el desierto de Atacama la diferencia entre el mediodía y la madrugada puede pasar los veinte grados. Se resuelve con capas.",
      "En el sur llueve mucho y en la Patagonia el viento es diario. Una campera impermeable y cortaviento vale más que un abrigo grueso.",
      "El sol del norte por la altura y el de la Patagonia por el aire limpio queman más de lo que se siente.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, anteojos de sol y gorro. En Santiago el calor de verano es seco, así que se tolera mejor que en el trópico, pero el sol pega fuerte.",
      templado:
        "Capas: remera, algo de manga larga y una campera liviana para la noche, que en la zona central refresca rápido.",
      fresco:
        "Buzo o polar y campera cortaviento. En el sur sumá algo impermeable, porque la lluvia es parte del clima.",
      frio: "Campera de abrigo de verdad, gorro y guantes. En la Patagonia el viento hace que se sienta varios grados menos, y en el desierto las noches bajan de cero.",
    },
    plug: {
      types: "Tipo C y tipo L",
      voltage: "220 V, 50 Hz",
      note: "El tipo L chileno tiene tres patas redondas en línea y no acepta enchufes de otros países sin adaptador; el tipo C, el europeo de dos patas, entra en la mayoría. Revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Empacá en capas, no en prendas gruesas",
          body: "Primera capa liviana, un polar y una campera cortaviento cubren desde el mediodía del desierto hasta una tarde ventosa en Torres del Paine.",
        },
        {
          title: "Llevá una campera impermeable de verdad",
          body: "En el sur llueve seguido y en la Patagonia el viento la vuelve indispensable. Es la prenda que más se usa del centro para abajo.",
        },
        {
          title: "Pedí la exención de IVA en el hotel",
          body: "Si pagás en moneda extranjera o con tarjeta del exterior, los hoteles suelen no cobrarte el IVA. Pedilo al reservar y guardá tu comprobante de ingreso.",
        },
        {
          title: "Reservá la Patagonia con meses de anticipación",
          body: "Los refugios y campamentos de Torres del Paine se agotan para el verano. No es algo que se resuelva al llegar.",
        },
        {
          title: "Llevá anteojos de sol con filtro",
          body: "En el norte por la altura y en la Patagonia por el reflejo y el aire limpio, el sol cansa la vista mucho más de lo habitual.",
        },
        {
          title: "Calzado que aguante caminar en serio",
          body: "Casi todo lo que se viene a ver se camina: cerros en Valparaíso, senderos en el sur, salares en el norte. Unas zapatillas de trekking resuelven todo.",
        },
      ],
      donts: [
        {
          title: "No asumas que enero es verano en todo el país",
          body: "En la Patagonia el verano tiene días de diez grados con viento. Una valija pensada solo para el calor de Santiago se queda corta.",
        },
        {
          title: "No lleves paraguas a la Patagonia",
          body: "El viento lo da vuelta en segundos. Una campera con capucha hace el mismo trabajo y no se rompe.",
        },
        {
          title: "No subestimes la altura del norte",
          body: "San Pedro está a 2.400 metros y algunas excursiones pasan los 4.000. Tomá agua, andá despacio el primer día y evitá el alcohol al principio.",
        },
        {
          title: "No cruces todo el país por tierra",
          body: "Son días de viaje. Entre regiones el avión ahorra tiempo que en un viaje corto no sobra.",
        },
        {
          title: "No des por sentado que el enchufe entra",
          body: "El tipo L de tres patas es chileno y no coincide con casi ningún otro. Sin adaptador te podés quedar sin cargar.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con vuelos internos frecuentes, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "capas",
        title: "Ropa en capas",
        notice: {
          tone: "warn",
          title: "En el desierto y en la Patagonia el día cambia de golpe",
          body: "En Atacama se puede pasar de calor al mediodía a bajo cero de madrugada, y en la Patagonia el viento cambia todo en minutos. Sin capas, se pasa frío.",
        },
        summary: "Lo que cubre del desierto a los glaciares",
        items: [
          "Primera capa térmica liviana",
          "Polar o buzo abrigado",
          "Campera impermeable y cortaviento con capucha",
          "Gorro, guantes y cuello para el sur y las noches del norte",
          "Pantalón que seque rápido",
        ],
      },
      {
        id: "sol-y-altura",
        title: "Sol y altura",
        notice: {
          tone: "warn",
          title: "El norte está alto",
          body: "San Pedro de Atacama está a 2.400 metros y los géiseres y lagunas, por encima de 4.000. El sol quema más y el cuerpo necesita uno o dos días para adaptarse.",
        },
        summary: "Lo que pide el desierto",
        items: [
          "Protector solar de factor alto y protector labial",
          "Anteojos de sol con filtro",
          "Gorro de ala ancha",
          "Botella reutilizable: en el desierto se toma mucha agua",
          "Crema hidratante: el aire es extremadamente seco",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Dos enchufes conviven",
          body: "El tipo C europeo entra en la mayoría de los tomas; el tipo L chileno, de tres patas en línea, necesita adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe tipo L, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Linterna frontal para el desierto y los refugios",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el malestar de altura si vas al norte",
          "Curitas y algo para ampollas si vas a caminar",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Capas extra: los chicos sienten antes el viento y el frío de la noche",
          "Protector solar de factor alto y gorro",
          "Entretenimiento offline para los vuelos y los traslados largos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Una sola campera gruesa para todo",
        why: "Es demasiado para el mediodía del norte y no frena el viento ni la lluvia del sur.",
        instead: "Polar más campera impermeable y cortaviento.",
      },
      {
        leave: "El paraguas",
        why: "En el sur se usa poco y en la Patagonia el viento lo rompe.",
        instead: "Una campera con capucha.",
      },
      {
        leave: "Ropa solo de verano para enero",
        why: "Enero en la Patagonia tiene días fríos y ventosos, y en el desierto las noches son heladas.",
        instead: "Capas que sirvan para los dos extremos.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Se camina mucho y en terreno irregular: cerros, senderos, salares.",
        instead: "Zapatillas de trekking cómodas.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados, incluso para montos chicos.",
        instead:
          "Algo de efectivo para ferias y pueblos, y la tarjeta para el resto.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una toalla de microfibra si vas a refugios o campings.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en un viaje de naturaleza y en la ciudad conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente sí. El tipo C europeo entra en la mayoría de los tomas, pero el tipo L chileno, de tres patas en línea, no acepta enchufes de otros países. El voltaje es 220 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Depende de la región. La Patagonia, de noviembre a marzo. Santiago y la zona central, en primavera y otoño. El norte se visita todo el año.",
      },
      {
        question: "¿Hace frío en Santiago en invierno?",
        answer:
          "Fresco de día y frío de noche, sin nieve en la ciudad pero con la cordillera nevada a la vista. Un abrigo medio y capas alcanzan.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Casi. Chile está muy bancarizado. Llevá algo de efectivo para ferias, algunos transportes y pueblos chicos del sur.",
      },
      {
        question: "¿Me afecta la altura en San Pedro de Atacama?",
        answer:
          "El pueblo está a 2.400 metros, que se tolera bien, pero varias excursiones pasan los 4.000. Tomá agua, andá despacio y dejá las excursiones más altas para después del segundo día.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí, en las ciudades es potable. En el norte tiene mucho sabor mineral y mucha gente prefiere agua embotellada por eso.",
      },
      {
        question: "¿Conviene ir a la Patagonia en invierno?",
        answer:
          "Solo si sabés a qué vas. Hay paisajes nevados y casi nadie, pero muchos servicios cierran, los días son cortos y algunos senderos no están habilitados.",
      },
      {
        question: "¿Cómo llego a la Isla de Pascua?",
        answer:
          "En avión desde Santiago, son unas cinco horas. Hay pocos vuelos por semana y el alojamiento es limitado, así que conviene reservar con mucha anticipación.",
      },
    ],
  },
};
