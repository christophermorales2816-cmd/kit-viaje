import type { DestinationGuide } from "./types";

/**
 * Guía de Eslovenia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: cuatro climas en un país que se cruza en dos horas
 * —Alpes, valle del Soča, cuevas del Karst y costa adriática— y una prenda
 * que no depende de la estación: el abrigo liviano para las cuevas, que
 * tienen unos diez grados todo el año.
 */
export const eslovenia: DestinationGuide = {
  slug: "eslovenia",
  country: "Eslovenia",
  subregion: "Europa del Sur",
  subhead:
    "Lagos alpinos, un río color esmeralda, cuevas enormes y un pedazo de Adriático, en un país que se cruza en dos horas. Inviernos fríos con nieve en la montaña y veranos con tormentas de tarde.",

  image: null,

  highlights: [
    {
      value: "2 h",
      label: "de los Alpes al mar",
      note: "Eslovenia es tan chica que en una mañana se va de los lagos de montaña a la costa del Adriático.",
    },
    {
      value: "24 km",
      label: "de cueva en Postojna",
      note: "Se entra en un tren eléctrico. Adentro hay unos diez grados todo el año: llevá un abrigo liviano.",
    },
    {
      value: "58 %",
      label: "del país cubierto de bosques",
      note: "Uno de los países más verdes de Europa. Liubliana fue capital verde europea.",
    },
    {
      value: "Viñeta",
      label: "para manejar en autopista",
      note: "Las autopistas piden una viñeta electrónica. Si alquilás auto en un país vecino, comprala antes de cruzar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Eslovenia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Eslovenia, Italia y Croacia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Eslovenia",
      body: [
        "La moneda es el euro y la tarjeta se acepta casi en todos lados; en pueblos chicos y puestos, el efectivo sigue siendo útil.",
        "Los alojamientos cobran una tasa turística por noche. La propina es opcional: redondear si te atendieron bien es lo habitual.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Alpes, Karst y Adriático",
      body: [
        "Eslovenia es hemisferio norte: enero es invierno y julio, verano. Liubliana tiene inviernos fríos con niebla y veranos calurosos con tormentas de tarde.",
        "Los Alpes Julianos —Bled, Bohinj, Kranjska Gora— tienen inviernos bajo cero con nieve y veranos frescos; el valle del Soča es de los rincones más lluviosos de Europa fuera del verano.",
        "Piran, sobre el Adriático, tiene inviernos suaves y veranos calurosos. Y las cuevas del Karst se mantienen en unos diez grados todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre es la mejor época para los lagos, la montaña y la costa. Junio y septiembre tienen buen clima y menos gente que agosto, cuando Bled se llena.",
        "De diciembre a marzo es temporada de esquí en los Alpes, y Liubliana arma su mercado navideño junto al río.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Eslovenia",
      body: [
        "Los buses unen Liubliana con Bled, Bohinj, Piran y Postojna. Para el valle del Soča y el paso de montaña de Vršič, el auto da más libertad.",
        "Las autopistas piden una viñeta electrónica, y el centro de Liubliana es peatonal: el auto se deja en las afueras.",
        "Las precauciones son las de cualquier destino visitado: atención al celular y a la mochila en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Naturaleza",
      score: 9.5,
      rationale:
        "Lagos alpinos, el río Soča color esmeralda, cuevas enormes y bosques en más de la mitad del país.",
    },
    {
      dimension: "Actividades al aire libre",
      score: 9,
      rationale:
        "Senderismo en los Alpes Julianos, rafting en el Soča y esquí, todo a poca distancia.",
    },
    {
      dimension: "Ciudades",
      score: 8,
      rationale:
        "Liubliana es chica, verde y peatonal; Piran es veneciana sobre el mar.",
    },
    {
      dimension: "Gastronomía y vino",
      score: 8,
      rationale: "Cocina de montaña y de mar, y vinos que casi no se exportan.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Más accesible que Austria o Italia, con buena calidad. Bled en verano es la excepción.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Distancias cortas y buenos buses; el auto da libertad para los Alpes y el Karst.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Alpes, lagos, cuevas y mar en un país que se cruza en una mañana.",
    "Liubliana, una capital chica, verde y peatonal.",
    "Más accesible que sus vecinos.",
  ],

  costs: [
    "Bled y el Soča se llenan en verano.",
    "Lluvia frecuente en los Alpes y en el valle del Soča.",
    "Transporte público limitado fuera de las ciudades.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Kranjska Gora en enero no pide lo mismo que Piran en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "liubliana",
      name: "Liubliana",
      region: "Centro",
      tag: "Capital verde",
      blurb:
        "Un centro peatonal junto al río, puentes, un castillo en la colina y cafés al aire libre. Es la base del planificador: inviernos fríos con niebla, veranos calurosos.",
      coords: [46.0569, 14.5058],
      featured: true,
      image: null,
    },
    {
      id: "bled",
      name: "Lago de Bled",
      region: "Alpes",
      tag: "Isla en el lago",
      blurb:
        "Un lago con una isla y una iglesia a la que se llega en bote de madera, bajo un castillo sobre el acantilado. Muy visitado en verano.",
      coords: [46.3683, 14.1146],
      image: null,
    },
    {
      id: "bohinj",
      name: "Lago de Bohinj",
      region: "Alpes",
      tag: "Lago salvaje",
      blurb:
        "Un lago más grande y tranquilo que el de Bled, dentro del parque nacional del Triglav, con cascadas y teleférico.",
      coords: [46.2853, 13.8806],
      image: null,
    },
    {
      id: "piran",
      name: "Piran y la costa",
      region: "Costa",
      tag: "Pueblo veneciano",
      blurb:
        "Un pueblo veneciano sobre una península en el Adriático, con una plaza de mármol y atardeceres sobre el mar.",
      coords: [45.5285, 13.5683],
      image: null,
    },
    {
      id: "postojna",
      name: "Postojna y el Karst",
      region: "Karst",
      tag: "Cuevas",
      blurb:
        "Una de las cuevas más grandes de Europa, que se recorre en tren, y el castillo de Predjama, construido dentro de una roca.",
      coords: [45.7743, 14.2153],
      image: null,
    },
    {
      id: "kranjska-gora",
      name: "Kranjska Gora",
      region: "Alpes",
      tag: "Esquí y montaña",
      blurb:
        "Un pueblo de montaña junto a Italia y Austria, con esquí en invierno y el paso de Vršič en verano.",
      coords: [46.4846, 13.7856],
      image: null,
    },
    {
      id: "bovec",
      name: "Bovec y el valle del Soča",
      region: "Alpes",
      tag: "Río esmeralda",
      blurb:
        "El valle del Soča, un río verde esmeralda para rafting, kayak y caminatas. Muy lluvioso fuera del verano.",
      coords: [46.3377, 13.5521],
      image: null,
    },
    {
      id: "maribor",
      name: "Maribor",
      region: "Este",
      tag: "La vid más vieja",
      blurb:
        "La segunda ciudad del país, entre viñedos, con la vid más antigua del mundo que todavía da uvas.",
      coords: [46.5547, 15.6459],
      image: null,
    },
    {
      id: "ptuj",
      name: "Ptuj",
      region: "Este",
      tag: "La ciudad más antigua",
      blurb:
        "La ciudad más antigua de Eslovenia, con castillo, bodegas y un carnaval famoso en febrero.",
      coords: [46.4199, 15.8697],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Eslovenia es chica pero tiene cuatro climas: los Alpes, con inviernos bajo cero y nieve; Liubliana, con inviernos fríos y niebla y veranos calurosos; el valle del Soča, muy lluvioso; y Piran, sobre el Adriático, templada todo el año. En verano, ropa liviana, una campera impermeable para las tormentas de montaña y calzado para caminar; en invierno, abrigo de verdad. Y un abrigo liviano para la cueva de Postojna, fresca todo el año.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso en el llano y fresco en la montaña; el invierno, de diciembre a febrero, frío.",
      "En los Alpes y en el valle del Soča llueve seguido, y las tardes de verano traen tormentas.",
      "Las cuevas del Karst tienen unos diez grados todo el año.",
      "Piran y la costa tienen inviernos suaves y veranos calurosos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector, y una campera impermeable para las tormentas de tarde en la montaña.",
      templado:
        "Capas y una campera impermeable liviana. Es el clima ideal para caminar los Alpes Julianos.",
      fresco:
        "Sweater o polar, campera impermeable y calzado de trekking. En el Soča llueve seguido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. En los Alpes, nieve de diciembre a marzo; en Liubliana, niebla y frío húmedo.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá un abrigo liviano a las cuevas",
          body: "Adentro de Postojna hay unos diez grados todo el año, aunque afuera haga calor.",
        },
        {
          title: "Visitá Bled temprano",
          body: "El lago se llena desde media mañana. Temprano, la vuelta caminando y el bote a la isla son otra cosa.",
        },
        {
          title: "Comprá la viñeta antes de manejar",
          body: "Las autopistas eslovenas piden una viñeta electrónica. Si alquilás auto en otro país, comprala antes de cruzar.",
        },
        {
          title: "Conocé el Soča",
          body: "Rafting, kayak o simplemente caminar junto al río esmeralda: de lo mejor del país, de mayo a septiembre.",
        },
        {
          title: "Usá Liubliana como base",
          body: "El país es tan chico que desde la capital se llega a casi todo en un día.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes las tormentas de montaña",
          body: "Las tardes de verano en los Alpes terminan seguido en tormenta. Las caminatas largas, a la mañana.",
        },
        {
          title: "No entres con auto al centro de Liubliana",
          body: "Es peatonal. Dejá el auto en los estacionamientos de las afueras.",
        },
        {
          title: "No te metas al Soča por tu cuenta",
          body: "El agua es helada aun en verano y la corriente es fuerte. El rafting y el kayak, con guía.",
        },
        {
          title: "No vayas a Bled en agosto sin reserva",
          body: "Es el mes más lleno: alojamiento y estacionamiento se agotan.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En el centro de Liubliana y en Bled en temporada alta hay carteristas. Mochila adelante y el teléfono a mano.",
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
        title: "Montaña y lluvia",
        notice: {
          tone: "info",
          title: "Tormentas de tarde",
          body: "En los Alpes Julianos y en el Soča llueve seguido y el tiempo cambia rápido. Algo impermeable va siempre en la mochila.",
        },
        summary: "Si vas a caminar los Alpes o el Soča",
        items: [
          "Campera impermeable",
          "Polar",
          "Calzado de trekking",
          "Botella reutilizable",
        ],
      },
      {
        id: "cuevas",
        title: "Cuevas",
        notice: {
          tone: "info",
          title: "Diez grados todo el año",
          body: "Las cuevas de Postojna y de Škocjan están frescas y húmedas en cualquier estación.",
        },
        summary: "Si vas al Karst",
        items: [
          "Abrigo liviano o buzo",
          "Calzado con buena suela: el piso está húmedo",
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
          title: "Enchufes de dos patas redondas",
          body: "Entran los tipo C y F. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Funda resistente al agua para el teléfono, para el Soča",
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
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa solo de verano para la montaña",
        why: "Arriba refresca rápido y llueve seguido.",
        instead: "Capas y una campera impermeable.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Senderos de piedra y pisos húmedos en las cuevas.",
        instead: "Calzado con buena suela.",
      },
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero hace frío, y en los Alpes nieva.",
        instead: "Abrigo de verdad.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para puestos y pueblos chicos.",
      },
      {
        leave: "Una valija enorme",
        why: "Buses, pueblos de montaña y un centro peatonal.",
        instead: "Una valija mediana o una mochila.",
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
        question: "¿Necesito visa para entrar a Eslovenia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre para los lagos, la montaña y la costa, y de diciembre a marzo para esquiar. Junio y septiembre tienen buen clima y menos gente que agosto.",
      },
      {
        question: "¿Hace falta auto?",
        answer:
          "No es indispensable: los buses llegan a Bled, Bohinj, Piran y Postojna. Para el Soča y el paso de Vršič, el auto da más libertad.",
      },
      {
        question: "¿Cómo es la cueva de Postojna?",
        answer:
          "Una de las más grandes de Europa: se entra en un tren eléctrico y se sigue a pie. Adentro hay unos diez grados todo el año.",
      },
      {
        question: "¿Se puede combinar con Croacia o Italia?",
        answer:
          "Sí: Zagreb, Trieste y Venecia están a pocas horas, y la Istria croata, al lado de Piran.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. Redondear o dejar algo si te atendieron bien es lo habitual.",
      },
    ],
  },
};
