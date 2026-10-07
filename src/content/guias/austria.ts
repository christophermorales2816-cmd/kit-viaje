import type { DestinationGuide } from "./types";

/**
 * Guía de Austria.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos valijas en un mismo país. Viena pide algo un
 * poco más arreglado para la ópera o un concierto; los Alpes, ropa de nieve de
 * diciembre a marzo y una campera impermeable para las tormentas de verano.
 */
export const austria: DestinationGuide = {
  slug: "austria",
  country: "Austria",
  subregion: "Europa Occidental",
  subhead:
    "Viena y su música, Salzburgo, los lagos y los Alpes del Tirol. Inviernos fríos de verdad, con nieve en la montaña, y veranos templados con tormentas de tarde.",

  image: null,

  highlights: [
    {
      value: "Dic–Mar",
      label: "nieve en los Alpes",
      note: "Kitzbühel, Zell am See y el Tirol tienen nieve de diciembre a marzo. Las ciudades del llano son más suaves, pero igual frías.",
    },
    {
      value: "1 café",
      label: "y toda la tarde",
      note: "En los cafés vieneses se pide un café y nadie te apura, aunque te quedes horas leyendo. Es una tradición protegida, no una pausa.",
    },
    {
      value: "Todo el año",
      label: "conciertos de música clásica",
      note: "Viena tiene ópera, orquestas y conciertos casi todas las noches. Los lugares de pie de la Ópera son una tradición.",
    },
    {
      value: "Viñeta",
      label: "para manejar en autopista",
      note: "Las autopistas piden una viñeta prepaga. Si alquilás auto en un país vecino, comprala antes de cruzar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Austria es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Austria, Alemania y Suiza en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Austria",
      body: [
        "La moneda es el euro. La tarjeta se acepta en casi todos lados, pero en cafés, puestos y pueblos chicos el efectivo sigue siendo común: llevá algo encima.",
        "La propina se da al pagar, redondeando: le decís al mozo el total que querés pagar. Viena y otras ciudades cobran una tasa turística por noche que va aparte.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Continental y alpino",
      body: [
        "Austria es hemisferio norte: enero es invierno y julio, verano. El invierno es frío en todo el país: cerca de cero en Viena y bajo cero en los valles alpinos, con nieve de diciembre a marzo.",
        "El verano es templado a caluroso en Viena y en los valles, con tardes que en la montaña terminan seguido en tormenta.",
        "Salzburgo y la región de los lagos son de lo más lluvioso del país: algo impermeable sirve en cualquier mes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre es la mejor época para las ciudades, los lagos y las caminatas. En julio y agosto, el festival de Salzburgo llena la ciudad.",
        "De diciembre a marzo es temporada de esquí, y desde fines de noviembre hasta Navidad los mercados navideños llenan las plazas, con frío de verdad.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Austria",
      body: [
        "Los trenes unen Viena, Salzburgo, Innsbruck y Graz en pocas horas, y Bratislava, Budapest y Praga quedan a un viaje corto. Viena tiene un transporte urbano excelente.",
        "Si alquilás auto, las autopistas piden una viñeta prepaga, física o digital. En invierno, con nieve o hielo, hacen falta neumáticos de invierno, y en la montaña a veces cadenas: los autos de alquiler suelen venir equipados.",
        "Los domingos casi todo cierra: supermercados y tiendas, salvo algunos en estaciones de tren y aeropuertos. Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en las zonas concurridas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Música y cultura",
      score: 10,
      rationale:
        "Viena es la capital de la música clásica: ópera, orquestas y conciertos todas las noches, más palacios y museos de primer nivel.",
    },
    {
      dimension: "Montañas y lagos",
      score: 9.5,
      rationale:
        "Los Alpes del Tirol, los lagos alrededor de Salzburgo y el valle del Danubio, todo a pocas horas.",
    },
    {
      dimension: "Esquí y deportes de invierno",
      score: 9.5,
      rationale:
        "Algunas de las estaciones de esquí más tradicionales de Europa, bien conectadas por tren.",
    },
    {
      dimension: "Cafés y gastronomía",
      score: 8.5,
      rationale:
        "Los cafés vieneses, las pastelerías y una cocina contundente. El vino blanco del Danubio sorprende.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Más accesible que Suiza y parecido a Alemania. Las estaciones de esquí en temporada son caras.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Trenes buenos y frecuentes, y un transporte urbano excelente en Viena.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "El euro y precios estables. Conviene tener algo de efectivo para cafés y puestos.",
    },
  ],

  shines: [
    "Viena: música, palacios y cafés como en ningún otro lado.",
    "Los Alpes y los lagos a pocas horas de la capital, en tren.",
    "Más accesible que sus vecinos alpinos.",
  ],

  costs: [
    "Inviernos fríos y grises en las ciudades.",
    "Comercios cerrados los domingos.",
    "Las estaciones de esquí en temporada alta son caras y se reservan con meses.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Kitzbühel en enero no pide lo mismo que Viena en julio. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "viena",
      name: "Viena",
      region: "Viena y el Danubio",
      tag: "Palacios y música",
      blurb:
        "Palacios imperiales, la Ópera, museos de primer nivel y cafés con siglos de historia. Es la base del planificador: invierno frío y gris, verano templado a caluroso.",
      coords: [48.2082, 16.3738],
      featured: true,
      image: null,
    },
    {
      id: "salzburgo",
      name: "Salzburgo",
      region: "Salzburgo y los lagos",
      tag: "Mozart y montañas",
      blurb:
        "La ciudad de Mozart, con un casco barroco bajo una fortaleza y los Alpes de fondo. Muy lluviosa, y con un festival de música famoso en verano.",
      coords: [47.8095, 13.055],
      image: null,
    },
    {
      id: "innsbruck",
      name: "Innsbruck",
      region: "Alpes",
      tag: "Ciudad entre montañas",
      blurb:
        "La capital del Tirol, rodeada de picos a los que se sube en funicular desde el centro. Base para esquiar en invierno y caminar en verano.",
      coords: [47.2692, 11.4041],
      image: null,
    },
    {
      id: "hallstatt",
      name: "Hallstatt",
      region: "Salzburgo y los lagos",
      tag: "Pueblo de postal",
      blurb:
        "Un pueblo de casas de madera sobre un lago, con montañas que caen al agua. Chico y muy visitado: conviene ir temprano o quedarse a dormir.",
      coords: [47.5622, 13.6493],
      image: null,
    },
    {
      id: "graz",
      name: "Graz",
      region: "Sur",
      tag: "Ciudad universitaria",
      blurb:
        "La segunda ciudad del país, con un casco histórico patrimonio de la humanidad, vida universitaria y menos turistas que Viena o Salzburgo.",
      coords: [47.0707, 15.4395],
      image: null,
    },
    {
      id: "wachau",
      name: "Valle del Danubio (Wachau)",
      region: "Viena y el Danubio",
      tag: "Viñedos y abadías",
      blurb:
        "El tramo del Danubio entre Melk y Krems, con viñedos en terrazas, una abadía barroca enorme y pueblos para recorrer en barco o en bicicleta.",
      coords: [48.3956, 15.5203],
      image: null,
    },
    {
      id: "zell-am-see",
      name: "Zell am See",
      region: "Alpes",
      tag: "Lago y glaciar",
      blurb:
        "Un pueblo junto a un lago, con esquí en invierno, un glaciar cerca y caminatas en verano.",
      coords: [47.3239, 12.7964],
      image: null,
    },
    {
      id: "kitzbuhel",
      name: "Kitzbühel",
      region: "Alpes",
      tag: "Esquí clásico",
      blurb:
        "Una de las estaciones de esquí más famosas y elegantes de los Alpes, con un pueblo medieval en el centro. Muy cara en temporada.",
      coords: [47.4464, 12.3922],
      image: null,
    },
    {
      id: "worthersee",
      name: "Wörthersee y Carintia",
      region: "Sur",
      tag: "Lago para nadar",
      blurb:
        "Uno de los lagos más cálidos de los Alpes, ideal para nadar en verano, en Carintia, una de las regiones más soleadas del país.",
      coords: [46.6364, 14.166],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Austria tiene inviernos fríos de verdad —cerca de cero en Viena y bajo cero en los valles alpinos, con nieve de diciembre a marzo— y veranos templados a calurosos, con tormentas de tarde en la montaña. En invierno, abrigo, gorro, guantes y calzado que no resbale; en verano, capas y una campera impermeable, porque Salzburgo y los lagos son de lo más lluvioso del país. Y algo un poco más arreglado si vas a un concierto o a la ópera.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero y es frío en todo el país; en los Alpes la nieve dura hasta marzo.",
      "El verano es templado a caluroso en Viena y en los valles, con tormentas de tarde en la montaña.",
      "Salzburgo y la región de los lagos son de lo más lluvioso del país: algo impermeable en cualquier mes.",
      "En la ópera y en los conciertos no se exige etiqueta, pero la gente va bien vestida.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. En la montaña las tardes de verano traen tormentas: sumá una campera impermeable.",
      templado:
        "Capas y una campera impermeable liviana. Es el verano de los Alpes: ideal para caminar.",
      fresco:
        "Sweater o polar, campera impermeable y calzado que no se moje. Primavera y otoño cambian rápido.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. En los Alpes la temperatura queda bajo cero muchos días, y los mercados navideños se recorren al aire libre.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Sentate en un café vienés",
          body: "Pedí un café y quedate el tiempo que quieras: nadie te va a apurar. Es parte de la ciudad, no una pausa.",
        },
        {
          title: "Probá los lugares de pie de la Ópera",
          body: "La Ópera de Viena vende lugares de pie a muy bajo precio para la función del día. Hay que hacer fila, y vale la pena.",
        },
        {
          title: "Llevá algo de efectivo",
          body: "La tarjeta avanza, pero en cafés, puestos y mercados navideños el efectivo sigue siendo común.",
        },
        {
          title: "Comprá la viñeta antes de manejar",
          body: "Las autopistas austríacas piden una viñeta prepaga. Si alquilás auto en otro país, comprala antes de cruzar la frontera.",
        },
        {
          title: "Reservá el esquí con tiempo",
          body: "En las vacaciones de invierno las estaciones se llenan y los precios suben. Reservá alojamiento y equipo con meses.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cuentes con hacer compras el domingo",
          body: "Supermercados y tiendas cierran los domingos, salvo algunos en estaciones de tren y aeropuertos. Las compras, el sábado.",
        },
        {
          title: "No vayas a Hallstatt al mediodía",
          body: "Es un pueblo chico que recibe muchísima gente de excursión. Temprano, de tarde o quedándote a dormir, se disfruta mucho más.",
        },
        {
          title: "No subestimes las tormentas de verano",
          body: "Las tardes calurosas en los Alpes terminan seguido en tormenta. Las caminatas largas, a la mañana.",
        },
        {
          title: "No dejes la propina en la mesa",
          body: "Se le dice al mozo el total que querés pagar, redondeando, en el momento de pagar. Dejarla en la mesa no es la costumbre.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En el centro de Viena y en los mercados navideños hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "invierno",
        title: "Ropa para el invierno",
        notice: {
          tone: "warn",
          title: "El invierno austríaco es frío de verdad",
          body: "De diciembre a febrero la temperatura queda cerca de cero en Viena y bajo cero en los Alpes, con días cortos. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide noviembre a marzo",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Primera capa térmica para la montaña",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "conciertos",
        title: "Para la ópera y los conciertos",
        notice: {
          tone: "info",
          title: "Bien vestido, sin etiqueta",
          body: "No se exige traje ni vestido largo, pero la gente va arreglada. Una prenda un poco más formal alcanza.",
        },
        summary: "Si vas a una función",
        items: [
          "Una camisa o un vestido sencillo",
          "Calzado que no sea deportivo",
          "Abrigo para la salida, que en invierno es de noche y fría",
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
          "Protector labial y crema para el frío",
          "Seguro de viaje con cobertura médica, que cubra el esquí si vas a esquiar",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero hace frío en todo el país, y en los Alpes, bajo cero.",
        instead: "Abrigo de verdad, gorro y guantes.",
      },
      {
        leave: "Solo tarjetas",
        why: "En cafés, puestos y mercados navideños el efectivo sigue siendo común.",
        instead: "Algo de efectivo siempre.",
      },
      {
        leave: "Solo ropa deportiva",
        why: "Para la ópera o un concierto, algo un poco más arreglado te va a hacer sentir más cómodo.",
        instead: "Una prenda para salir de noche.",
      },
      {
        leave: "Zapatos de suela lisa en invierno",
        why: "Veredas con hielo y nieve en las ciudades y en los pueblos de montaña.",
        instead: "Calzado con buena suela.",
      },
      {
        leave: "Una valija enorme",
        why: "Trenes con poco espacio para equipaje y pueblos con escaleras.",
        instead: "Una valija mediana.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Botellas de agua descartables",
        why: "El agua de la canilla viene de los Alpes y es excelente.",
        instead: "Una botella reutilizable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Austria?",
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
          "De mayo a septiembre para las ciudades, los lagos y la montaña; de diciembre a marzo para esquiar. Diciembre tiene además los mercados navideños.",
      },
      {
        question: "¿Cómo hay que vestirse para la ópera?",
        answer:
          "No se exige etiqueta, pero la gente va arreglada. Con los lugares de pie podés ir más informal.",
      },
      {
        question: "¿Abren los comercios los domingos?",
        answer:
          "Casi nunca. Supermercados y tiendas cierran; abren algunos en estaciones de tren y aeropuertos. Museos y restaurantes funcionan.",
      },
      {
        question: "¿Cómo se deja propina?",
        answer:
          "Al pagar, redondeando: le decís al mozo el total que querés pagar. Lo habitual es redondear o sumar un poco.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, y excelente: en Viena viene de manantiales de los Alpes.",
      },
      {
        question: "¿Se puede ir de Viena a otras capitales?",
        answer:
          "Sí: Bratislava está a una hora en tren, y Budapest y Praga, a pocas horas.",
      },
    ],
  },
};
