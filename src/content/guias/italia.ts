import type { DestinationGuide } from "./types";

/**
 * Guía de Italia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un largo que se nota en la valija, de las
 * Dolomitas bajo cero a Sicilia, y una regla de vestimenta que no depende del
 * clima. San Pedro y muchas iglesias piden hombros y rodillas cubiertos
 * también en agosto, y eso cambia lo que se empaca para el verano.
 */
export const italia: DestinationGuide = {
  slug: "italia",
  country: "Italia",
  subregion: "Europa del Sur",
  subhead:
    "Arte, historia y comida en cualquier ciudad que elijas, de los Alpes nevados a Sicilia. El verano es caluroso y lleno; el invierno, frío en el norte y suave en el sur.",

  image: null,

  highlights: [
    {
      value: "1.200 km",
      label: "de los Alpes a Sicilia",
      note: "En enero se esquía en las Dolomitas y se almuerza al sol en Palermo. El mismo mes pide ropa distinta en cada punta.",
    },
    {
      value: "Cubiertos",
      label: "hombros y rodillas en las iglesias",
      note: "San Pedro y muchas iglesias no dejan entrar con musculosa o pantalón corto. Un pañuelo en la mochila lo resuelve.",
    },
    {
      value: "Coperto",
      label: "el cargo por cubierto",
      note: "Un monto fijo por persona que figura en la carta. Es legal y no es propina: dejar algo más es opcional.",
    },
    {
      value: "15 de agosto",
      label: "Ferragosto",
      note: "El corazón de las vacaciones italianas: las costas se llenan y en las ciudades cierran comercios chicos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Italia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Italia, Francia y Alemania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Italia",
      body: [
        "La moneda es el euro y los comercios están obligados a aceptar tarjeta, también para montos chicos. Aun así, en bares, mercados y pueblos chicos el efectivo sigue siendo bienvenido.",
        "En los restaurantes la cuenta suele traer el coperto, un cargo fijo por persona por el pan y el cubierto que tiene que figurar en la carta. No es propina, y dejar algo más es opcional. El café en la barra cuesta menos que sentado a la mesa.",
        "Casi todas las ciudades cobran una tasa turística por noche que se paga en el alojamiento y muchas veces no está incluida en la reserva. Y cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "De los Alpes a Sicilia",
      body: [
        "Italia es hemisferio norte: enero es invierno y julio, verano. Pero el país mide más de mil kilómetros de punta a punta, y eso se nota en la valija.",
        "El norte —Milán, Venecia, la llanura del Po— tiene inviernos fríos, húmedos y con niebla, y veranos calurosos y pesados. Roma y el centro tienen inviernos suaves y veranos secos y muy calurosos. El sur y las islas son lo más templado del invierno.",
        "Las Dolomitas son otro mundo: nieve de diciembre a marzo, temperaturas bajo cero y noches frescas aun en pleno verano.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Primavera y otoño son lo mejor para las ciudades: de abril a junio y de septiembre a octubre hay buen clima y menos gente. Julio y agosto son calurosos, caros y llenos, sobre todo en la costa.",
        "Alrededor del 15 de agosto, Ferragosto, media Italia está de vacaciones: las playas explotan y en las ciudades cierran comercios chicos y algunos restaurantes.",
        "El invierno es temporada de esquí en los Alpes y una buena época para los museos, con menos filas. Semana Santa en Roma es de las fechas más llenas del año.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse entre ciudades",
      body: [
        "Los trenes rápidos unen Milán, Venecia, Florencia, Roma y Nápoles en pocas horas, y son la mejor forma de moverse entre ciudades grandes. Los pasajes con asiento conviene comprarlos con anticipación.",
        "Los trenes regionales son más lentos y llegan a casi todo. Si el boleto es de papel, hay que validarlo en la máquina del andén antes de subir: viajar con uno sin validar se multa.",
        "Para la Toscana rural, las Dolomitas o Sicilia el auto da libertad, pero los centros históricos tienen zonas de tránsito limitado vigiladas por cámaras, y entrar sin permiso es una multa segura.",
        "Las precauciones son las de cualquier destino muy visitado: atención al celular y a la mochila en el transporte de Roma y en las estaciones grandes.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Arte e historia",
      score: 10,
      rationale:
        "La Roma antigua, el Renacimiento en Florencia, Venecia entera. Ningún otro país concentra tanto patrimonio por kilómetro.",
    },
    {
      dimension: "Gastronomía",
      score: 9.5,
      rationale:
        "Cada región tiene su cocina, y comer bien no requiere gastar mucho: pizza al taglio, trattorias y mercados.",
    },
    {
      dimension: "Paisajes y costa",
      score: 9,
      rationale:
        "La costa amalfitana, las Cinque Terre, los lagos del norte y las Dolomitas. Una variedad enorme en un solo país.",
    },
    {
      dimension: "Vida urbana",
      score: 8.5,
      rationale:
        "Plazas, aperitivo y paseo al atardecer. Las ciudades se viven en la calle.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Bien para lo que ofrece, con el sur más accesible que el norte. Venecia, la costa amalfitana y las grandes ciudades en verano son caras.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Buena red de trenes rápidos entre las ciudades grandes. Fuera de ese eje, regionales y buses más lentos, y reservas obligadas para los sitios famosos.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El euro, sin sorpresas. Lo único a saber es el coperto y la tasa turística por noche.",
    },
  ],

  shines: [
    "Arte, historia y comida de primer nivel en cualquier ciudad que elijas.",
    "Trenes rápidos que unen Roma, Florencia, Venecia, Milán y Nápoles en pocas horas.",
    "Un sur más accesible y menos lleno que el norte.",
  ],

  costs: [
    "Multitudes en los imperdibles del verano: Venecia, el Coliseo, la costa amalfitana.",
    "Entradas con horario que se agotan si no reservás.",
    "Agosto: calor, precios altos y la costa llena.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: las Dolomitas en enero no piden lo mismo que Palermo. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "roma",
      name: "Roma",
      region: "Centro",
      tag: "La ciudad eterna",
      blurb:
        "El Coliseo, el Foro, el Panteón y el Vaticano en una ciudad que se camina entre plazas y fuentes. Es la base del planificador: invierno suave y verano muy caluroso.",
      coords: [41.9028, 12.4964],
      featured: true,
      image: null,
    },
    {
      id: "florencia",
      name: "Florencia",
      region: "Centro",
      tag: "Renacimiento",
      blurb:
        "La cúpula del Duomo, los Uffizi y el David en un centro chico que se recorre a pie. Puerta a la Toscana de colinas y viñedos, y calurosa en verano por estar en un valle.",
      coords: [43.7696, 11.2558],
      image: null,
    },
    {
      id: "venecia",
      name: "Venecia",
      region: "Norte",
      tag: "Ciudad sobre el agua",
      blurb:
        "Canales, puentes y ningún auto: se recorre a pie y en vaporetto. En los días de más afluencia cobra una tasa de acceso a quien va solo por el día. Invierno húmedo y frío, con niebla.",
      coords: [45.4408, 12.3155],
      image: null,
    },
    {
      id: "milan",
      name: "Milán",
      region: "Norte",
      tag: "Diseño y el Duomo",
      blurb:
        "La catedral gótica, La última cena de Leonardo y la capital italiana de la moda. Puerta a los lagos del norte, como el de Como. Invierno frío y con niebla.",
      coords: [45.4642, 9.19],
      image: null,
    },
    {
      id: "napoles",
      name: "Nápoles",
      region: "Sur",
      tag: "Pizza y Vesubio",
      blurb:
        "Una ciudad intensa y vital, cuna de la pizza, con Pompeya y el Vesubio a un viaje corto. Más accesible que el norte y muy calurosa en verano.",
      coords: [40.8518, 14.2681],
      image: null,
    },
    {
      id: "costa-amalfitana",
      name: "Costa Amalfitana",
      region: "Sur",
      tag: "Pueblos sobre el mar",
      blurb:
        "Pueblos colgados de los acantilados sobre el Mediterráneo: Positano, Amalfi, Ravello. Rutas angostas, ferries entre pueblos y precios de destino exclusivo en verano.",
      coords: [40.634, 14.6027],
      image: null,
    },
    {
      id: "cinque-terre",
      name: "Cinque Terre",
      region: "Norte",
      tag: "Cinco pueblos de colores",
      blurb:
        "Cinco pueblos de pescadores unidos por tren y por senderos sobre el mar. Se recorren caminando, y en verano se llenan de gente.",
      coords: [44.135, 9.6847],
      image: null,
    },
    {
      id: "sicilia",
      name: "Palermo y Sicilia",
      region: "Sur",
      tag: "Isla y mercados",
      blurb:
        "Mercados, palacios árabes y normandos, templos griegos y el Etna. Es el sur más profundo, con el invierno más suave del país.",
      coords: [38.1157, 13.3615],
      image: null,
    },
    {
      id: "dolomitas",
      name: "Dolomitas",
      region: "Alpes",
      tag: "Montañas de piedra pálida",
      blurb:
        "Picos de piedra clara, valles verdes y pueblos de montaña, con esquí en invierno y senderismo en verano. Hace frío de verdad de diciembre a marzo.",
      coords: [46.5405, 12.1357],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Italia es larga y la valija depende de adónde vas: el norte tiene inviernos fríos y húmedos, las Dolomitas nieve de diciembre a marzo, y Roma y el sur, veranos muy calurosos y secos. En cualquier estación hay dos cosas fijas: calzado cómodo para caminar sobre empedrado y algo para cubrir hombros y rodillas, que lo piden en San Pedro y en muchas iglesias.",
    keyPoints: [
      "Hemisferio norte: julio y agosto son pleno verano, el momento más caluroso y más lleno.",
      "El norte es continental: Milán y Venecia tienen inviernos fríos y con niebla. El sur y las islas, inviernos suaves.",
      "Las Dolomitas y los Alpes son otro clima: nieve en invierno y noches frescas aun en julio.",
      "Para entrar a San Pedro y a muchas iglesias hay que tener hombros y rodillas cubiertos, también en pleno verano.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de algodón o lino, sombrero y protector. Sumá un pañuelo o una camisa liviana para entrar a las iglesias, que piden hombros y rodillas cubiertos.",
      templado:
        "Capas: remera, algo de manga larga y una campera liviana. Primavera y otoño son las mejores épocas para recorrer ciudades.",
      fresco:
        "Sweater o buzo y una campera que corte el viento y aguante algo de lluvia. En el norte, el otoño es húmedo.",
      frio: "Abrigo de verdad, gorro y guantes. En Milán y Venecia el frío es húmedo y se siente más; en las Dolomitas hay nieve y temperaturas bajo cero.",
    },
    plug: {
      types: "Tipo C, F y L",
      voltage: "230 V, 50 Hz",
      note: "Conviven los europeos de dos patas redondas (C y F) y el italiano tipo L, de tres patas en línea; el tipo C entra en casi todos los tomas. Si tus enchufes son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá algo para cubrir hombros y rodillas",
          body: "Un pañuelo grande o una camisa liviana en la mochila te deja entrar a San Pedro y a cualquier iglesia sin tener que volver al hotel.",
        },
        {
          title: "Reservá con anticipación los imperdibles",
          body: "El Coliseo, los Museos Vaticanos, la Galería Uffizi y La última cena venden entradas con horario que se agotan. En temporada alta, con semanas de margen.",
        },
        {
          title: "Validá el boleto regional de papel",
          body: "Si sacaste un boleto de tren regional en papel, marcalo en la máquina del andén antes de subir. Viajar con uno sin validar se multa.",
        },
        {
          title: "Tomá el café como los italianos",
          body: "En la barra cuesta menos que sentado a la mesa, y se toma rápido. El cappuccino es de la mañana.",
        },
        {
          title: "Llená la botella en las fuentes",
          body: "En Roma, las fuentitas públicas dan agua potable y fresca todo el día. Una botella reutilizable te ahorra comprar agua en cada esquina.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres con auto a los centros históricos",
          body: "Casi todas las ciudades tienen zonas de tránsito limitado vigiladas por cámaras. La multa llega meses después, a través de la empresa de alquiler.",
        },
        {
          title: "No te sorprendas por el coperto",
          body: "Es un cargo por cubierto que figura en la carta. No es una trampa ni una propina, y no hace falta dejar más.",
        },
        {
          title: "No vayas a la costa en agosto sin reserva",
          body: "Es el mes de vacaciones de los italianos: alojamiento, ferries y playas al límite. Si es tu única fecha, reservá todo con meses.",
        },
        {
          title: "No descuides la mochila en el transporte",
          body: "En los buses y el metro más turísticos de Roma y en las estaciones grandes hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No quieras ver todo en un viaje",
          body: "Roma, Florencia, Venecia, la costa y el sur en diez días es pasar más tiempo en el tren que en las ciudades. Elegí un eje y recorrelo bien.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "iglesias",
        title: "Ropa para el calor y las iglesias",
        notice: {
          tone: "warn",
          title: "Hombros y rodillas cubiertos",
          body: "San Pedro, los Museos Vaticanos y muchas iglesias no dejan pasar con musculosa, pantalón corto o pollera corta, ni siquiera en agosto. Te pueden dejar en la puerta.",
        },
        summary: "Lo que te deja entrar a todos lados en verano",
        items: [
          "Pañuelo grande o pareo para cubrir los hombros",
          "Pantalón o pollera liviana por debajo de la rodilla",
          "Remeras con manga",
          "Sombrero y protector solar",
          "Botella reutilizable para llenar en las fuentes",
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
          title: "Tres enchufes conviven",
          body: "El tipo C entra en casi todos los tomas; el L italiano, de tres patas en línea, también aparece seguido. Un adaptador universal resuelve todo.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal, o uno para patas redondas",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes y los vuelos",
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
          "Curitas y algo para ampollas: se camina mucho y sobre piedra",
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
          "Cochecito liviano o mochila portabebé: empedrado, escalinatas y los puentes de Venecia",
          "Gorro y protector solar en verano",
          "Entretenimiento offline para los trenes y los vuelos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Musculosas y shorts como únicas prendas",
        why: "No te dejan entrar a San Pedro ni a muchas iglesias.",
        instead: "Ropa liviana que cubra hombros y rodillas, o un pañuelo.",
      },
      {
        leave: "Zapatos de taco o de suela lisa",
        why: "Empedrado, escalinatas y muchas horas a pie.",
        instead: "Zapatillas cómodas con buena suela.",
      },
      {
        leave: "Una valija grande y pesada",
        why: "Las estaciones, los puentes de Venecia y los pueblos de la costa tienen escaleras sin fin.",
        instead: "Una valija chica o una mochila que puedas cargar.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en casi todos lados, y los comercios están obligados a aceptarla.",
        instead: "Algo de efectivo para cafés, mercados y pueblos chicos.",
      },
      {
        leave: "El auto de alquiler para las ciudades",
        why: "Zonas de tránsito limitado, poco estacionamiento y trenes que conectan todo.",
        instead:
          "Tren entre ciudades, y auto solo para la Toscana rural o las Dolomitas.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Ocupa mucho y casi todos los alojamientos dan una.",
        instead: "Una de microfibra si vas a la playa.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Italia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes son de patas planas, sí. Los tomas son tipo C, F y L, a 230 V, y el tipo C europeo entra en casi todos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio y de septiembre a octubre: clima amable y menos gente. Julio y agosto son muy calurosos y llenos; el invierno es bueno para las ciudades de arte y para esquiar en los Alpes.",
      },
      {
        question: "¿Qué es el coperto?",
        answer:
          "Un cargo fijo por persona por el pan y el cubierto, que tiene que figurar en la carta. Es legal y no es propina.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron muy bien es un gesto, no una costumbre fija.",
      },
      {
        question: "¿Cómo se entra a San Pedro?",
        answer:
          "La basílica no cobra entrada pero tiene fila y control de vestimenta: hombros y rodillas cubiertos. Los Museos Vaticanos y la Capilla Sixtina son aparte y conviene reservarlos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí. En Roma, además, hay fuentes públicas de agua potable por toda la ciudad.",
      },
      {
        question: "¿Conviene alquilar auto?",
        answer:
          "Para las ciudades, no: tránsito limitado en los centros, poco estacionamiento y buenos trenes. Para la Toscana rural, las Dolomitas o Sicilia, puede valer la pena.",
      },
    ],
  },
};
