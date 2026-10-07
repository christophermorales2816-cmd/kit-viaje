import type { DestinationGuide } from "./types";

/**
 * Guía de Suecia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el frío más extremo de la lista hasta ahora, en
 * Kiruna, con máximas bajo cero de noviembre a marzo, a un tren nocturno de un
 * sur con inviernos cerca de cero. Y el país que menos efectivo usa: la
 * tarjeta no es una comodidad, es la forma de pagar.
 */
export const suecia: DestinationGuide = {
  slug: "suecia",
  country: "Suecia",
  subregion: "Europa del Norte",
  subhead:
    "Estocolmo sobre el agua, archipiélagos, bosques y la Laponia ártica. Del sur templado al frío extremo del norte, con días eternos en verano y auroras en invierno.",

  image: null,

  highlights: [
    {
      value: "−17 °C",
      label: "de mínima en Kiruna en enero",
      note: "Por encima del círculo polar, en Laponia. El sur, con Estocolmo, tiene inviernos cerca de cero.",
    },
    {
      value: "Sin efectivo",
      label: "en casi todos lados",
      note: "Suecia es de los países que menos efectivo usan en el mundo: muchos lugares no aceptan billetes. Tarjeta o teléfono.",
    },
    {
      value: "Fika",
      label: "la pausa del café",
      note: "Café con algo dulce, a media mañana o a media tarde. Es una costumbre, casi una institución.",
    },
    {
      value: "Libre",
      label: "el acceso a la naturaleza",
      note: "La ley permite caminar, acampar una noche y juntar frutos en casi cualquier lugar, con la obligación de no dejar rastro.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Suecia es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Suecia, Noruega y Dinamarca en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Casi sin efectivo",
      body: [
        "La moneda es la corona sueca, y Suecia es de los países que menos efectivo usan en el mundo: muchos lugares, incluidos algunos transportes y baños, solo aceptan tarjeta o teléfono.",
        "Comer afuera y el alcohol son caros. Al mediodía, el plato del día con ensalada, pan y café a precio cerrado es la comida que más rinde. Los supermercados venden solo cerveza liviana; el resto, tiendas estatales con horario reducido y cerradas los domingos.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí coronas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del sur templado al Ártico",
      body: [
        "Suecia es hemisferio norte: enero es invierno y julio, verano. El sur —Estocolmo, Gotemburgo, Malmö— tiene inviernos cerca de cero y veranos templados con días larguísimos.",
        "Hacia el norte el invierno se endurece: Dalarna y la Costa Alta pasan meses bajo cero, y Kiruna, en Laponia, tiene máximas bajo cero de noviembre a marzo y noches mucho más frías.",
        "Por encima del círculo polar hay sol de medianoche en junio y noche polar en diciembre. En el sur, en junio casi no oscurece.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a agosto es la mejor época para las ciudades y los archipiélagos: días eternos, lagos para nadar y el país al aire libre. A fines de junio, el Midsommar celebra el solsticio.",
        "De diciembre a marzo, en Laponia, es la temporada de nieve, auroras boreales y el hotel de hielo. En el sur, el invierno es gris y oscuro temprano.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Suecia",
      body: [
        "Los trenes unen Estocolmo con Gotemburgo y Malmö en pocas horas, y un tren nocturno llega a Kiruna. Desde Malmö, un puente sobre el mar lleva a Copenhague.",
        "Desde Estocolmo salen barcos a miles de islas del archipiélago, algunas a menos de una hora.",
        "El libre acceso a la naturaleza viene con la obligación de no dejar rastro. Las precauciones en las ciudades son las de cualquier lugar concurrido.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Naturaleza",
      score: 9,
      rationale:
        "Bosques, lagos, archipiélagos y la Laponia ártica, con libre acceso a casi todo.",
    },
    {
      dimension: "Ciudades y diseño",
      score: 9,
      rationale:
        "Estocolmo sobre catorce islas, Gotemburgo y Malmö: diseño, museos y barrios para caminar.",
    },
    {
      dimension: "Auroras y luz",
      score: 9,
      rationale:
        "Auroras en Laponia de septiembre a marzo y noches blancas en verano.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "La fika, los pescados ahumados y una buena cocina nórdica, aunque comer afuera es caro.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Caro para comer afuera, para el alcohol y para dormir. Los supermercados y el plato del día equilibran.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Buenos trenes, incluido uno nocturno a Laponia, y todo funciona con tarjeta.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale:
        "Una moneda estable y todo con tarjeta. Caro, pero sin sorpresas.",
    },
  ],

  shines: [
    "Estocolmo, una capital sobre el agua.",
    "Naturaleza abierta a todos, de los archipiélagos a Laponia.",
    "Todo funciona con la tarjeta o el teléfono.",
  ],

  costs: [
    "Caro para comer afuera y para el alcohol.",
    "Inviernos largos y oscuros, sobre todo en el norte.",
    "Distancias enormes entre el sur y Laponia.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Kiruna en enero no pide lo mismo que Malmö en julio. Los precios están en coronas suecas y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "estocolmo",
      name: "Estocolmo",
      region: "Estocolmo y el centro",
      tag: "Capital sobre el agua",
      blurb:
        "Una capital sobre catorce islas, con la ciudad vieja de Gamla Stan, el museo del barco Vasa y un archipiélago de miles de islas. Es la base del planificador: inviernos cerca de cero, veranos templados con días larguísimos.",
      coords: [59.3293, 18.0686],
      featured: true,
      image: null,
    },
    {
      id: "gotemburgo",
      name: "Gotemburgo",
      region: "Oeste",
      tag: "Canales y mariscos",
      blurb:
        "La segunda ciudad del país, con canales, mariscos y un archipiélago de islas sin autos. Más lluviosa que Estocolmo.",
      coords: [57.7089, 11.9746],
      image: null,
    },
    {
      id: "malmo",
      name: "Malmö",
      region: "Sur",
      tag: "Puente a Copenhague",
      blurb:
        "Una ciudad joven y multicultural, unida a Copenhague por un puente sobre el mar. El clima más suave del país.",
      coords: [55.605, 13.0038],
      image: null,
    },
    {
      id: "uppsala",
      name: "Uppsala",
      region: "Estocolmo y el centro",
      tag: "Ciudad universitaria",
      blurb:
        "La universidad más antigua de Escandinavia, una catedral enorme y túmulos vikingos en las afueras. A menos de una hora de Estocolmo.",
      coords: [59.8586, 17.6389],
      image: null,
    },
    {
      id: "visby",
      name: "Visby y Gotland",
      region: "Gotland",
      tag: "Muralla medieval",
      blurb:
        "Una ciudad medieval amurallada en la isla de Gotland, patrimonio de la humanidad. El destino de verano de los suecos.",
      coords: [57.6348, 18.2948],
      image: null,
    },
    {
      id: "kiruna",
      name: "Kiruna y la Laponia",
      region: "Laponia",
      tag: "Auroras y hotel de hielo",
      blurb:
        "La ciudad más al norte del país, por encima del círculo polar. Auroras de septiembre a marzo, el hotel de hielo cerca y sol de medianoche en junio.",
      coords: [67.8558, 20.2253],
      image: null,
    },
    {
      id: "dalarna",
      name: "Dalarna",
      region: "Estocolmo y el centro",
      tag: "Lagos y caballitos rojos",
      blurb:
        "Lagos, bosques y pueblos de casas rojas, la tierra de los caballitos de madera pintados. Donde el solsticio se celebra con más tradición.",
      coords: [61.0077, 14.5371],
      image: null,
    },
    {
      id: "costa-alta",
      name: "La Costa Alta",
      region: "Norte",
      tag: "Costa que sube",
      blurb:
        "Acantilados, islas y bosques sobre una costa que todavía se eleva desde la última glaciación. Patrimonio de la humanidad, ideal para caminar.",
      coords: [63.0, 18.3],
      image: null,
    },
    {
      id: "kalmar",
      name: "Kalmar y Öland",
      region: "Sur",
      tag: "Castillo e isla",
      blurb:
        "Un castillo renacentista sobre el mar y, cruzando un puente, la isla de Öland, con molinos y playas. De lo más soleado del país.",
      coords: [56.6634, 16.3568],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Suecia son dos países: el sur, con Estocolmo, Gotemburgo y Malmö, tiene inviernos cerca de cero y veranos templados con días larguísimos; el norte, con Dalarna y Laponia, pasa meses bajo cero, con un frío seco y extremo en Kiruna. En verano, capas, una campera liviana y algo impermeable; en invierno, ropa térmica, abrigo de nieve, gorro, guantes y botas con buena suela. Y la tarjeta, porque el efectivo casi no se usa.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es templado y con días larguísimos; el invierno, largo y oscuro.",
      "El sur tiene inviernos cerca de cero; el norte, meses bajo cero, con Kiruna entre los lugares más fríos de Europa.",
      "Por encima del círculo polar hay sol de medianoche en junio y auroras de septiembre a marzo.",
      "Casi todo se paga con tarjeta o teléfono: muchos lugares no aceptan efectivo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche, que refresca. Los días de calor son pocos y muy aprovechados.",
      templado:
        "Capas y una campera liviana. Es el verano sueco: largo, luminoso y con algún chaparrón.",
      fresco:
        "Sweater o polar, campera impermeable y calzado que no se moje. Primavera y otoño cambian rápido.",
      frio: "Ropa térmica, abrigo de nieve, gorro, guantes y botas abrigadas. En Laponia el frío es seco y extremo: capas de lana y nada de algodón.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Hacé fika",
          body: "La pausa del café con algo dulce es una institución. Es la mejor excusa para entrar en calor y probar los bollos de canela.",
        },
        {
          title: "Almorzá el plato del día",
          body: "Al mediodía, muchos restaurantes ofrecen el plato del día con ensalada, pan y café a precio cerrado. Es la comida que más rinde.",
        },
        {
          title: "Recorré el archipiélago",
          body: "Desde Estocolmo salen barcos a miles de islas, algunas a menos de una hora. En verano, es lo que hacen los suecos.",
        },
        {
          title: "Tomá el tren nocturno a Laponia",
          body: "Desde Estocolmo sale un tren nocturno a Kiruna: te ahorra una noche de hotel y llegás al norte al día siguiente.",
        },
        {
          title: "Buscá auroras con cielo despejado",
          body: "En Laponia, de septiembre a marzo, alejarse de las luces cambia todo. Las excursiones salen según el pronóstico.",
        },
        {
          title: "Elegí pagar en coronas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cuentes con pagar en efectivo",
          body: "Muchos lugares, incluidos algunos transportes y baños, solo aceptan tarjeta o teléfono.",
        },
        {
          title: "No esperes comprar alcohol en el supermercado",
          body: "Los supermercados venden solo cerveza liviana. El resto se vende en tiendas estatales, con horario reducido y cerradas los domingos.",
        },
        {
          title: "No subestimes el frío del norte",
          body: "En Kiruna y en Dalarna el invierno pasa meses bajo cero. Sin ropa térmica, salir a ver auroras de noche es un sufrimiento.",
        },
        {
          title: "No olvides el antifaz en junio",
          body: "Con sol de medianoche en el norte y noches blancas en el sur, dormir sin oscuridad cuesta.",
        },
        {
          title: "No dejes rastro en la naturaleza",
          body: "El libre acceso a la naturaleza viene con la obligación de llevarte todo lo que trajiste.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Invierno en el norte",
        notice: {
          tone: "warn",
          title: "En Laponia el frío es extremo",
          body: "En Kiruna las máximas quedan bajo cero de noviembre a marzo, y de noche baja mucho más. Para salir a ver auroras hace falta ropa de nieve de verdad.",
        },
        summary: "Si vas al norte de noviembre a marzo",
        items: [
          "Primera capa térmica de lana",
          "Abrigo de nieve y pantalón impermeable",
          "Gorro, guantes y cuello",
          "Botas abrigadas con buena suela",
          "Grampones para el calzado: las veredas se congelan",
        ],
      },
      {
        id: "verano",
        title: "Verano",
        notice: {
          tone: "info",
          title: "Días larguísimos",
          body: "En junio casi no oscurece en el sur, y en el norte no oscurece. Es la mejor época, y se vive al aire libre.",
        },
        summary: "Lo que pide junio a agosto",
        items: [
          "Capas y una campera liviana",
          "Antifaz para dormir",
          "Repelente: en los bosques y lagos hay mosquitos",
          "Traje de baño: los suecos se meten en los lagos",
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
          "Batería portátil: el frío descarga rápido el teléfono",
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
          "Protector labial y crema para el frío seco",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Mucho efectivo",
        why: "Muchos lugares no aceptan billetes.",
        instead: "La tarjeta o el teléfono.",
      },
      {
        leave: "Algodón como primera capa en invierno",
        why: "Retiene la humedad y enfría.",
        instead: "Primera capa de lana o sintética.",
      },
      {
        leave: "Zapatos de suela lisa en invierno",
        why: "Veredas congeladas en todo el país.",
        instead: "Botas con buena suela o grampones.",
      },
      {
        leave: "Solo ropa de verano para julio",
        why: "Las noches refrescan, incluso en pleno verano.",
        instead: "Capas y un buzo.",
      },
      {
        leave: "El paraguas grande",
        why: "Con viento dura poco, y la lluvia suele ser corta.",
        instead: "Una campera impermeable con capucha.",
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
        question: "¿Necesito visa para entrar a Suecia?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Puedo pagar todo con tarjeta?",
        answer:
          "Sí, y conviene: Suecia es de los países que menos efectivo usan en el mundo, y muchos lugares no aceptan billetes.",
      },
      {
        question: "¿Cuándo se ven las auroras boreales?",
        answer:
          "De septiembre a marzo en Laponia, con noche oscura y cielo despejado. Ninguna fecha las garantiza.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a agosto para las ciudades, los archipiélagos y los días largos; de diciembre a marzo para la nieve y las auroras en el norte.",
      },
      {
        question: "¿Qué es el Midsommar?",
        answer:
          "La fiesta del solsticio de verano, a fines de junio: bailes alrededor de un poste con flores, comida al aire libre y el país entero de vacaciones.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente.",
      },
      {
        question: "¿Se puede ir a Copenhague desde Malmö?",
        answer:
          "Sí: un puente sobre el mar une las dos ciudades, y el tren tarda alrededor de media hora.",
      },
    ],
  },
};
