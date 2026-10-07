import type { DestinationGuide } from "./types";

/**
 * Guía de Dinamarca.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el clima de los Países Bajos con más viento y más
 * al norte, y una capital donde la bicicleta manda. Y atracciones con
 * temporada: el Tivoli y Legoland abren solo una parte del año.
 */
export const dinamarca: DestinationGuide = {
  slug: "dinamarca",
  country: "Dinamarca",
  subregion: "Europa del Norte",
  subhead:
    "Copenhague, castillos, costas de dunas y una capital hecha para la bicicleta. Gris, ventoso y fresco buena parte del año: capas, algo impermeable y la tarjeta.",

  image: null,

  highlights: [
    {
      value: "Hygge",
      label: "la palabra que explica el país",
      note: "Velas, café y tiempo con otros, sobre todo en los inviernos largos y oscuros. Más que una moda, una costumbre.",
    },
    {
      value: "DKK",
      label: "coronas, casi sin efectivo",
      note: "Dinamarca no usa el euro, y casi todo se paga con tarjeta o con el teléfono.",
    },
    {
      value: "Bici",
      label: "el transporte de Copenhague",
      note: "En el centro hay más bicicletas que autos, con carriles propios. Al caminar, la bicisenda no es vereda.",
    },
    {
      value: "Por temporada",
      label: "el Tivoli y Legoland",
      note: "Los dos parques abren solo una parte del año, con fechas que cambian. Revisalas antes de armar el viaje.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Dinamarca es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Dinamarca, Suecia y Alemania en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Coronas, y todo con tarjeta",
      body: [
        "La moneda es la corona danesa, y casi todo se paga con tarjeta o con el teléfono: algunos lugares no aceptan efectivo.",
        "Comer afuera y dormir en Copenhague es caro. El servicio va incluido en el precio, así que la propina es opcional; el almuerzo y los mercados de comida equilibran el presupuesto.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí coronas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Llano, húmedo y con viento",
      body: [
        "Dinamarca es hemisferio norte: enero es invierno y julio, verano. El país es chico, llano y rodeado de mar: inviernos grises cerca de cero y veranos frescos que rara vez pasan los veintitrés grados.",
        "El viento es casi diario y la lluvia llega en cualquier mes, en lloviznas y chaparrones. Con viento, todo se siente varios grados más frío.",
        "Las diferencias entre ciudades son chicas: el interior de Jutlandia es algo más frío en invierno, y las islas, un poco más templadas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre los días son largos y lo más templados del año: es la temporada de las bicis, los canales y las playas de dunas.",
        "El Tivoli y Legoland abren por temporada, y diciembre trae mercados y luces navideñas, con frío y pocas horas de luz. Enero y febrero son grises y tranquilos.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Dinamarca",
      body: [
        "Trenes y puentes unen las islas y Jutlandia en pocas horas, y desde Copenhague un puente sobre el mar lleva a Malmö, en Suecia, en alrededor de media hora. A Bornholm se va en ferry o en avión.",
        "En Copenhague el metro funciona día y noche y llega al aeropuerto, pero la mejor forma de moverse es la bicicleta.",
        "Las precauciones son las de cualquier ciudad: atención al celular y a la mochila en las zonas concurridas, y candado siempre para la bici.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Diseño y ciudades",
      score: 9,
      rationale:
        "Copenhague es de las capitales mejor diseñadas del mundo, y Aarhus y Odense tienen museos y barrios para caminar.",
    },
    {
      dimension: "Andar en bicicleta",
      score: 10,
      rationale:
        "Ciclovías por todos lados y una capital pensada para la bici.",
    },
    {
      dimension: "Gastronomía",
      score: 8.5,
      rationale:
        "Del smørrebrød a la nueva cocina nórdica, con panaderías excelentes.",
    },
    {
      dimension: "Naturaleza y costa",
      score: 7,
      rationale:
        "Costas de dunas, acantilados e islas, en un país chico y llano.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Caro para comer afuera y para dormir, sobre todo en Copenhague.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Trenes, metro y puentes que conectan todo, y todo a pocas horas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Una moneda estable y todo con tarjeta.",
    },
  ],

  shines: [
    "Copenhague, una capital hecha para caminar y pedalear.",
    "Diseño, museos y gastronomía de primer nivel.",
    "Todo cerca, y todo funciona.",
  ],

  costs: [
    "Caro para comer afuera y para dormir.",
    "Viento, lluvia y cielo gris buena parte del año.",
    "Inviernos oscuros, con pocas horas de luz.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima, aunque acá las diferencias son chicas: Billund en febrero es apenas más frío que Copenhague. Los precios están en coronas danesas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "copenhague",
      name: "Copenhague",
      region: "Selandia",
      tag: "Canales y bicicletas",
      blurb:
        "Nyhavn, el Tivoli, barrios de diseño y piletas en el agua del puerto para nadar en verano. Es la base del planificador: inviernos grises cerca de cero, veranos frescos con días larguísimos.",
      coords: [55.6761, 12.5683],
      featured: true,
      image: null,
    },
    {
      id: "aarhus",
      name: "Aarhus",
      region: "Jutlandia",
      tag: "Arte y barrio viejo",
      blurb:
        "La segunda ciudad del país, con un museo de arte coronado por un arco iris que se recorre caminando y un barrio viejo lleno de cafés.",
      coords: [56.1629, 10.2039],
      image: null,
    },
    {
      id: "odense",
      name: "Odense",
      region: "Fionia",
      tag: "Ciudad de Andersen",
      blurb:
        "La ciudad natal de Hans Christian Andersen, con un museo dedicado a sus cuentos y un centro de casas bajas de colores.",
      coords: [55.4038, 10.4024],
      image: null,
    },
    {
      id: "skagen",
      name: "Skagen",
      region: "Jutlandia",
      tag: "Donde se juntan dos mares",
      blurb:
        "La punta norte del país, donde se encuentran el mar del Norte y el Báltico, con dunas, casas amarillas y una luz famosa entre los pintores.",
      coords: [57.7209, 10.5839],
      image: null,
    },
    {
      id: "bornholm",
      name: "Bornholm",
      region: "Islas",
      tag: "Isla de roca",
      blurb:
        "Una isla de rocas, acantilados, iglesias redondas y ahumaderos de arenque en el Báltico. Se llega en ferry o en avión.",
      coords: [55.1037, 14.7065],
      image: null,
    },
    {
      id: "ribe",
      name: "Ribe",
      region: "Jutlandia",
      tag: "La ciudad más antigua",
      blurb:
        "La ciudad más antigua de Escandinavia, con casas torcidas de madera y una catedral, junto al mar de Frisia.",
      coords: [55.3282, 8.7616],
      image: null,
    },
    {
      id: "roskilde",
      name: "Roskilde",
      region: "Selandia",
      tag: "Barcos vikingos",
      blurb:
        "Un museo de barcos vikingos rescatados del fiordo y la catedral donde están enterrados los reyes daneses. A media hora de Copenhague.",
      coords: [55.6415, 12.0803],
      image: null,
    },
    {
      id: "helsingor",
      name: "Helsingør",
      region: "Selandia",
      tag: "El castillo de Hamlet",
      blurb:
        "El castillo de Kronborg, escenario de Hamlet, sobre el estrecho que separa Dinamarca de Suecia.",
      coords: [56.0361, 12.6136],
      image: null,
    },
    {
      id: "billund",
      name: "Billund y Legoland",
      region: "Jutlandia",
      tag: "Legoland",
      blurb:
        "El pueblo donde nació el Lego, con Legoland y la Casa Lego. Los parques abren por temporada.",
      coords: [55.7307, 9.1153],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Dinamarca no tiene extremos, pero tiene viento: inviernos grises cerca de cero y veranos frescos que rara vez pasan los veintitrés grados, con lluvia repartida en todo el año. La valija se arma en capas, con una campera impermeable que corte el viento en cualquier estación y calzado que no se moje. Si vas a pedalear —y en Copenhague vas a querer—, sumá algo impermeable para las piernas.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero, gris y cerca de cero; el verano, de junio a agosto, fresco y con días larguísimos.",
      "El viento es casi diario y la lluvia llega en cualquier mes: lo impermeable vale más que lo abrigado.",
      "Copenhague se recorre en bicicleta, y las bicis tienen prioridad.",
      "El Tivoli y Legoland abren por temporada: revisá las fechas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. Los días de calor son pocos y muy aprovechados.",
      templado:
        "Capas y una campera impermeable liviana. Es el verano danés: agradable, ventoso y con algún chaparrón.",
      fresco:
        "Sweater o polar y una campera impermeable con capucha. El viento hace que se sienta varios grados menos.",
      frio: "Abrigo que corte el viento, gorro, guantes y calzado que no se moje. El frío es húmedo, y en bicicleta se siente el doble.",
    },
    plug: {
      types: "Tipo C, F y K",
      voltage: "230 V, 50 Hz",
      note: "El tipo K danés tiene tres patas, pero los tomas aceptan los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Alquilá una bicicleta",
          body: "Es la mejor forma de moverse en Copenhague. Respetá los carriles y las señas con la mano, y usá luces de noche.",
        },
        {
          title: "Nadá en el puerto en verano",
          body: "Copenhague tiene piletas al aire libre en el agua limpia del puerto, sin entrada. Llevá traje de baño aunque el agua sea fresca.",
        },
        {
          title: "Almorzá smørrebrød",
          body: "El sándwich abierto danés, sobre pan de centeno, es el almuerzo clásico y el que más rinde.",
        },
        {
          title: "Confirmá las temporadas",
          body: "El Tivoli y Legoland abren solo una parte del año, con fechas que cambian. Revisalas antes de armar el viaje.",
        },
        {
          title: "Sacá un pase si te movés mucho",
          body: "En Copenhague hay pases de uno o varios días para metro, trenes y buses, que incluyen el aeropuerto.",
        },
        {
          title: "Elegí pagar en coronas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No camines por la bicisenda",
          body: "Están separadas de la vereda y las bicicletas van rápido. Es la forma más común de llevarse un susto.",
        },
        {
          title: "No cuentes con pagar en efectivo",
          body: "Casi todo se paga con tarjeta o con el teléfono, y algunos lugares no aceptan billetes.",
        },
        {
          title: "No olvides el viento",
          body: "Con viento, diez grados se sienten como cinco. Una campera que lo corte cambia el día.",
        },
        {
          title: "No esperes calor en la playa",
          body: "El mar es frío aun en agosto. Las playas danesas son para caminar y, para los valientes, un chapuzón.",
        },
        {
          title: "No subestimes lo caro que es cenar afuera",
          body: "El almuerzo, los mercados de comida y los supermercados equilibran el presupuesto.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y viento",
        notice: {
          tone: "info",
          title: "Viento casi todos los días",
          body: "El país es llano y está rodeado de mar: el viento es constante y la lluvia llega de golpe. Lo impermeable vale más que lo abrigado.",
        },
        summary: "Lo que cubre cualquier mes",
        items: [
          "Campera impermeable que corte el viento",
          "Sweater o polar",
          "Calzado que no se moje",
          "Gorro y guantes de octubre a abril",
          "Capas para el interior, donde hay calefacción",
        ],
      },
      {
        id: "bicicleta",
        title: "En bicicleta",
        notice: {
          tone: "info",
          title: "La bici tiene prioridad",
          body: "Las ciclovías están en todos lados y tienen sus propias reglas: señas con la mano para doblar y frenar, y luces de noche.",
        },
        summary: "Si vas a pedalear",
        items: [
          "Ropa cómoda que aguante la lluvia",
          "Candado: los robos de bicicletas son comunes",
          "Luces para la noche, si la bici no tiene",
          "Mochila chica en vez de bolso de mano",
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
          title: "El tipo K acepta los de dos patas",
          body: "Los tomas daneses aceptan los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes",
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
          "Curitas, por si la bici te juega una mala pasada",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El paraguas",
        why: "Con el viento danés dura poco, y en bicicleta no se puede usar.",
        instead: "Una campera impermeable con capucha.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta.",
        instead: "La tarjeta o el teléfono.",
      },
      {
        leave: "Ropa solo de verano para julio",
        why: "El verano danés es fresco y ventoso, con noches de menos de quince grados.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "Zapatos de taco",
        why: "Adoquines, puentes y muchas horas a pie o en bici.",
        instead: "Zapatillas cómodas.",
      },
      {
        leave: "Un abrigo pesado como única capa",
        why: "Adentro todo tiene calefacción, y en el metro o en un museo sobra.",
        instead: "Capas y una campera que corte el viento.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla es excelente.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Dinamarca?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas daneses aceptan los europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Dinamarca usa el euro?",
        answer:
          "No: la moneda es la corona danesa. El euro se acepta poco; la tarjeta, en todos lados.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre: días largos y lo más templado del año. Diciembre tiene mercados y luces navideñas, con frío y pocas horas de luz.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer: "Sí. Dinamarca casi no usa efectivo.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "El servicio está incluido en el precio. Redondear si te atendieron bien es un gesto, no una obligación.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente.",
      },
      {
        question: "¿Se puede ir a Suecia en el día?",
        answer:
          "Sí: un puente sobre el mar une Copenhague con Malmö, y el tren tarda alrededor de media hora.",
      },
    ],
  },
};
