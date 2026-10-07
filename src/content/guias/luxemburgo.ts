import type { DestinationGuide } from "./types";

/**
 * Guía de Luxemburgo.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el único de la lista con el transporte público
 * gratis en todo el territorio, por eso el presupuesto muestra dos productos
 * con precio cero. Es chico, caro para dormir y fácil de combinar con Bélgica,
 * Francia y Alemania; el clima es el de las Ardenas, gris y con lluvia en
 * cualquier mes.
 */
export const luxemburgo: DestinationGuide = {
  slug: "luxemburgo",
  country: "Luxemburgo",
  subregion: "Europa Occidental",
  subhead:
    "Una capital sobre un desfiladero, castillos en cada valle y bosques de roca a menos de una hora. Chico, caro para dormir y con el transporte público gratis: gris y con lluvia en cualquier mes, así que capas y buen calzado.",

  image: null,

  highlights: [
    {
      value: "Gratis",
      label: "el transporte público en todo el país",
      note: "Buses, tranvía y trenes de segunda clase, también para turistas: no hay pasaje ni molinete, se sube y listo.",
    },
    {
      value: "3",
      label: "idiomas oficiales",
      note: "Luxemburgués, francés y alemán, y en la calle se pasa de uno a otro sin aviso. El inglés funciona en todos lados.",
    },
    {
      value: "Schengen",
      label: "el pueblo que le dio nombre al acuerdo",
      note: "Un pueblo de viñedos a orillas del Mosela, en la triple frontera con Francia y Alemania, donde se firmó el acuerdo que abrió las fronteras europeas.",
    },
    {
      value: "17 km",
      label: "de casamatas bajo la ciudad",
      note: "Túneles defensivos excavados en la roca de la antigua fortaleza, que hoy es patrimonio de la humanidad. Algunos tramos se visitan.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Luxemburgo es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Luxemburgo, Bélgica y Francia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Luxemburgo",
      body: [
        "La moneda es el euro y la tarjeta se acepta en casi todos lados, también sin contacto. Un poco de efectivo alcanza para mercados y algún bar de pueblo.",
        "Dormir es lo más caro del viaje: la capital vive de viajes de trabajo y los hoteles suelen bajar los fines de semana. El servicio está incluido en la cuenta; redondear si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Gris, templado y con lluvia en cualquier mes",
      body: [
        "Luxemburgo es hemisferio norte: enero es invierno y julio, verano. El invierno es gris y ronda los cero grados, con alguna nevada; el verano es templado, con días agradables y noches frescas.",
        "El norte, en las Ardenas, es el rincón más frío del país, y el valle del Mosela, con sus viñedos, el más templado.",
        "Llueve un poco en cualquier mes, más en forma de llovizna que de tormenta: un impermeable liviano viaja todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre es lo mejor: días largos, castillos y senderos abiertos, y las terrazas del Mosela. A fines de agosto la capital arma la Schueberfouer, una feria con siglos de historia.",
        "En diciembre hay mercados navideños; el resto del invierno es gris y corto de luz, y algunos castillos y atracciones del norte cierran o reducen horarios.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Luxemburgo",
      body: [
        "Dentro del país, buses, tranvía y trenes de segunda clase son gratis para todos. La primera clase y los tramos fuera de la frontera se pagan.",
        "Todo queda cerca: desde la capital, los castillos del norte y los senderos del Mullerthal están a menos de una hora, y Tréveris, Metz o Bruselas se suman en tren. Para los pueblos más chicos, revisá los horarios del bus, que fuera de la capital pasa menos.",
        "Las precauciones son las de cualquier ciudad europea: atención al celular y a la mochila en las estaciones y en el transporte lleno.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Castillos y fortalezas",
      score: 9,
      rationale:
        "La fortaleza de la capital, Vianden, Bourscheid, Beaufort y Clervaux, todo en un país que se cruza en una hora.",
    },
    {
      dimension: "Naturaleza",
      score: 7.5,
      rationale:
        "Los bosques de roca del Mullerthal, los valles de las Ardenas y los viñedos del Mosela.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Cocina de raíz francesa y alemana, buñuelos de papa, tartas de ciruela y los vinos y espumantes del Mosela.",
    },
    {
      dimension: "Clima",
      score: 6,
      rationale: "Templado pero gris, con lluvia en cualquier mes.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Todo funciona y todo es caro, sobre todo dormir en la capital. El transporte gratis compensa algo.",
    },
    {
      dimension: "Facilidad logística",
      score: 9.5,
      rationale:
        "Transporte gratis, distancias cortas, señalización impecable y el inglés en todos lados.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "El transporte público gratis en todo el país.",
    "Castillos, valles y senderos a menos de una hora de la capital.",
    "Se combina fácil con Bélgica, Francia y Alemania.",
  ],

  costs: [
    "Dormir es caro, sobre todo en la capital.",
    "Gris y lluvioso buena parte del año.",
    "Fuera de la capital, el bus pasa poco y todo cierra temprano.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: el norte, en las Ardenas, es algo más frío que la capital, y el valle del Mosela, algo más templado. Los precios están en euros y son órdenes de magnitud, no cotizaciones; el transporte público aparece con precio cero porque es gratis.",

  places: [
    {
      id: "luxemburgo",
      name: "Luxemburgo",
      region: "Centro",
      tag: "Capital sobre un desfiladero",
      blurb:
        "La ciudad vieja y la fortaleza, patrimonio de la humanidad, sobre un desfiladero con el barrio del Grund abajo, junto al río. Es la base del planificador: inviernos grises cerca de cero y veranos templados.",
      coords: [49.6116, 6.1319],
      featured: true,
      image: null,
    },
    {
      id: "vianden",
      name: "Vianden",
      region: "Norte",
      tag: "El castillo del valle",
      blurb:
        "Un castillo enorme y restaurado sobre un pueblo de piedra a orillas del río Our, con la casa donde vivió Victor Hugo.",
      coords: [49.935, 6.2089],
      image: null,
    },
    {
      id: "clervaux",
      name: "Clervaux y las Ardenas",
      region: "Norte",
      tag: "Las Ardenas",
      blurb:
        "Un pueblo en un valle de las Ardenas, con un castillo que guarda la muestra de fotos The Family of Man. Es el rincón más frío del país.",
      coords: [50.0547, 6.0313],
      image: null,
    },
    {
      id: "echternach",
      name: "Echternach",
      region: "Este",
      tag: "La ciudad más antigua",
      blurb:
        "La ciudad más antigua del país, con una abadía benedictina y una procesión danzante, patrimonio inmaterial de la humanidad, cada martes de Pentecostés.",
      coords: [49.8115, 6.4175],
      image: null,
    },
    {
      id: "mullerthal",
      name: "Mullerthal, la pequeña Suiza",
      region: "Este",
      tag: "Bosques de roca",
      blurb:
        "Senderos entre paredes de arenisca, musgo, grietas y arroyos. La mejor caminata del país, a menos de una hora de la capital.",
      coords: [49.7963, 6.3264],
      image: null,
    },
    {
      id: "schengen",
      name: "Schengen y el valle del Mosela",
      region: "Mosela",
      tag: "Viñedos y el acuerdo",
      blurb:
        "El pueblo del acuerdo, en la triple frontera, y el valle del Mosela con sus viñedos de riesling y espumante. El rincón más templado del país.",
      coords: [49.4697, 6.3621],
      image: null,
    },
    {
      id: "lago-del-sure",
      name: "Lago del Alto Sûre",
      region: "Norte",
      tag: "Lago entre bosques",
      blurb:
        "Un lago entre colinas boscosas, con playas para nadar en verano, kayak y el pueblo de Esch-sur-Sûre a la orilla del río.",
      coords: [49.9112, 5.9356],
      image: null,
    },
    {
      id: "beaufort",
      name: "Castillos de Beaufort",
      region: "Este",
      tag: "Dos castillos",
      blurb:
        "Las ruinas de una fortaleza medieval y, al lado, un castillo renacentista, en el borde del Mullerthal.",
      coords: [49.8378, 6.2914],
      image: null,
    },
    {
      id: "bourscheid",
      name: "Castillo de Bourscheid",
      region: "Norte",
      tag: "Ruinas sobre el río",
      blurb:
        "Uno de los castillos más grandes del país, en ruinas sobre una curva del río Sûre, con vistas a los valles de las Ardenas.",
      coords: [49.9086, 6.0669],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Luxemburgo es gris y templado: en invierno ronda los cero grados y hace falta abrigo de verdad; en verano los días son agradables, pero las noches refrescan y la lluvia aparece en cualquier mes. Capas, un impermeable liviano y calzado cómodo para los adoquines y las subidas. Y una buena noticia para el presupuesto: el transporte público es gratis en todo el país.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es templado; el invierno, de diciembre a febrero, gris y cerca de cero.",
      "Llueve en cualquier mes: el impermeable liviano viaja siempre.",
      "Buses, tranvía y trenes de segunda clase son gratis dentro del país.",
      "La capital tiene subidas y bajadas fuertes entre la ciudad alta y el Grund: calzado cómodo.",
    ],
    adviceByBucket: {
      calido:
        "Pasa en pocos días de julio y agosto. Ropa liviana, protector y una capa para la noche, que siempre refresca.",
      templado:
        "Ropa liviana de día, un buzo y un impermeable liviano. Es el clima del verano: el mejor para caminar y recorrer castillos.",
      fresco:
        "Capas, un buzo abrigado y una campera impermeable. Es el clima de la primavera y el otoño, con lluvia frecuente.",
      frio: "Campera de abrigo, gorro, guantes y calzado que no deje pasar el agua. En las Ardenas puede nevar.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes europeos de dos patas redondas. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Usá el transporte sin culpa",
          body: "Es gratis en todo el país, también para turistas. No hay pasaje: subís y listo, salvo en primera clase.",
        },
        {
          title: "Caminá la Corniche al atardecer",
          body: "El paseo sobre las murallas, con el Grund abajo, es la mejor vista de la ciudad. El ascensor panorámico del Pfaffenthal suma otra.",
        },
        {
          title: "Dormí el fin de semana en la capital",
          body: "La ciudad vive de viajes de trabajo y los hoteles suelen bajar de viernes a domingo.",
        },
        {
          title: "Hacé un tramo del Mullerthal",
          body: "Los senderos entre rocas son lo mejor del país, y se llega en bus gratis desde la capital.",
        },
        {
          title: "Combiná con los vecinos",
          body: "Tréveris, Metz y Bruselas quedan a un viaje de tren. En general pagás solo el tramo fuera de la frontera.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin impermeable",
          body: "Llueve en cualquier mes, aunque el pronóstico diga sol a la mañana.",
        },
        {
          title: "No subestimes las subidas",
          body: "Entre la ciudad alta y el Grund hay desniveles fuertes. Ascensores y escaleras ayudan, pero el calzado cómodo es obligatorio.",
        },
        {
          title: "No dejes los pueblos para la última hora",
          body: "Fuera de la capital el bus pasa menos y muchas cosas cierran temprano. Revisá los horarios de la vuelta.",
        },
        {
          title: "No des por abierto todo en invierno",
          body: "Algunos castillos y atracciones del norte cierran o reducen horarios fuera de temporada.",
        },
        {
          title: "No descuides la mochila en las estaciones",
          body: "Como en cualquier ciudad europea, en la estación central y el transporte lleno hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y capas",
        notice: {
          tone: "info",
          title: "Llueve en cualquier mes",
          body: "Más llovizna que tormenta, pero frecuente. Mejor capas que se sacan que un solo abrigo grueso.",
        },
        summary: "Lo que pide el cielo luxemburgués",
        items: [
          "Campera impermeable con capucha",
          "Un buzo o polar para sumar debajo",
          "Calzado cómodo que no deje pasar el agua",
          "Paraguas chico y resistente",
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
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador de enchufe europeo, si el tuyo es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería externa para los días de caminata",
          "Mapas descargados para los senderos del Mullerthal",
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
          "Curitas para las ampollas de las caminatas",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de suela lisa",
        why: "Los adoquines mojados y las subidas de la capital resbalan.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Un solo abrigo gigante",
        why: "Fuera del invierno, el clima cambia en el día y conviene sacar y poner.",
        instead: "Capas y una campera impermeable.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta en casi todos lados.",
        instead: "Algo de efectivo para mercados y bares de pueblo.",
      },
      {
        leave: "Un auto de alquiler para la capital",
        why: "El transporte es gratis y el estacionamiento, caro y escaso.",
        instead: "Bus y tranvía, y el auto solo si vas a recorrer el norte.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "La valija grande para los pueblos",
        why: "Calles empedradas, escaleras y buses de pueblo la vuelven un estorbo.",
        instead: "Una valija mediana o una mochila.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Luxemburgo?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Es cierto que el transporte público es gratis?",
        answer:
          "Sí, para todos, también turistas: buses, tranvía y trenes de segunda clase dentro del país. La primera clase y los tramos fuera de la frontera se pagan.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Luxemburgo usa los tipos C y F, de dos patas redondas, a 230 V. Si tus enchufes son de patas planas, necesitás adaptador.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos, clima templado y castillos abiertos. Diciembre tiene mercados navideños.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Luxemburgués, francés y alemán, los tres oficiales. El inglés se entiende en casi todos lados.",
      },
      {
        question: "¿Cuántos días necesito?",
        answer:
          "Dos o tres alcanzan para la capital y un par de excursiones; con uno más sumás el norte o el Mosela. Muchos lo combinan con Bélgica, Francia o Alemania.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí. Llevá una botella reutilizable y cargala en el alojamiento.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria: el servicio está incluido. Redondear si te atendieron bien es lo habitual.",
      },
    ],
  },
};
