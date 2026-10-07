import type { DestinationGuide } from "./types";

/**
 * Guía de Rumania.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el contraste continental más marcado de la lista
 * entre llano y montaña —Bucarest a treinta grados en julio, los Cárpatos con
 * noches frescas—, pueblos donde todavía hace falta efectivo y la ropa de
 * monasterio, que pide cubrirse también en verano.
 */
export const rumania: DestinationGuide = {
  slug: "rumania",
  country: "Rumania",
  subregion: "Europa del Este",
  subhead:
    "Transilvania de castillos y ciudades amuralladas, los Cárpatos, monasterios pintados y el delta del Danubio. Veranos calurosos en el llano, inviernos fríos con nieve en la montaña.",

  image: null,

  highlights: [
    {
      value: "30 °C",
      label: "de máxima en Bucarest en julio",
      note: "Los veranos son calurosos en el llano; en los Cárpatos, en cambio, las noches son frescas aun en julio.",
    },
    {
      value: "RON",
      label: "lei, no euros",
      note: "Rumania no usa el euro. La tarjeta se acepta en las ciudades; en los pueblos, el efectivo sigue mandando.",
    },
    {
      value: "Bran",
      label: "el castillo de Drácula",
      note: "El castillo que se asocia al personaje, en Transilvania. La historia real, la de Vlad el Empalador, está en Sighișoara.",
    },
    {
      value: "8",
      label: "iglesias de madera patrimonio de la humanidad",
      note: "En Maramureș, con torres altísimas. Y en Bucovina, monasterios pintados por fuera.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Rumania es parte plena del espacio Schengen desde 2025. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Rumania, Hungría y Bulgaria en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Lei, y efectivo en los pueblos",
      body: [
        "La moneda es el leu. La tarjeta se acepta en las ciudades, pero en los pueblos de Maramureș, Bucovina y el delta, el efectivo sigue mandando.",
        "Usá cajeros de banco o casas de cambio establecidas, nunca la calle. En los restaurantes se acostumbra dejar propina si te atendieron bien; fijate si la cuenta ya trae el servicio.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí lei: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Llano caluroso, montaña fresca",
      body: [
        "Rumania es hemisferio norte: enero es invierno y julio, verano. El clima es continental marcado: Bucarest pasa los treinta grados en julio y baja de cero en invierno.",
        "Transilvania y los Cárpatos son más frescos en verano, con noches que piden un buzo, y más fríos en invierno, con nieve de diciembre a marzo en la montaña.",
        "El delta del Danubio, junto al mar Negro, es lo más suave del país, y la mejor época para sus aves es la primavera.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Mayo, junio y septiembre son lo mejor: buen clima en Transilvania, menos calor en Bucarest y el campo verde.",
        "Julio y agosto son calurosos en el llano y la mejor época para caminar los Cárpatos. Diciembre trae mercados navideños, como el de Sibiu, con frío de verdad, y el invierno es temporada de esquí.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Rumania",
      body: [
        "Los trenes son lentos pero pasan por paisajes muy lindos; los buses y minibuses llegan a casi todo. Para los pueblos de Maramureș y Bucovina, el auto da mucha libertad. Las rutas de montaña hacen que las distancias se midan en horas, no en kilómetros.",
        "En los bosques de los Cárpatos viven osos: en los senderos, seguí las indicaciones locales y no dejes comida a la vista.",
        "Las precauciones en las ciudades son las de cualquier lugar concurrido: atención al celular y a la mochila en el centro y en el transporte.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Castillos y ciudades medievales",
      score: 9,
      rationale:
        "Transilvania tiene ciudades sajonas amuralladas, castillos e iglesias fortificadas patrimonio de la humanidad.",
    },
    {
      dimension: "Naturaleza",
      score: 9,
      rationale:
        "Los Cárpatos, con bosques y osos, y el delta del Danubio, uno de los humedales más grandes de Europa.",
    },
    {
      dimension: "Tradición rural",
      score: 9.5,
      rationale:
        "Pueblos donde las costumbres siguen vivas, iglesias de madera y monasterios pintados.",
    },
    {
      dimension: "Gastronomía",
      score: 7.5,
      rationale:
        "Sarmale, mici y sopas agrias: cocina casera, contundente y barata.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "De lo más accesible de la Unión Europea.",
    },
    {
      dimension: "Facilidad logística",
      score: 6.5,
      rationale:
        "Trenes lentos y rutas de montaña: las distancias se miden en horas, no en kilómetros.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Una moneda propia y precios claros. La tarjeta funciona en las ciudades; en los pueblos, efectivo.",
    },
  ],

  shines: [
    "Transilvania: castillos, ciudades amuralladas y pueblos con tradición viva.",
    "Naturaleza salvaje en los Cárpatos y en el delta del Danubio.",
    "De lo más accesible de Europa.",
  ],

  costs: [
    "Trenes lentos y distancias largas.",
    "Veranos calurosos en Bucarest.",
    "En los pueblos, todavía hace falta efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Brașov en enero no pide lo mismo que Bucarest en julio. Los precios están en lei y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "bucarest",
      name: "Bucarest",
      region: "Sur",
      tag: "Capital de contrastes",
      blurb:
        "El enorme Palacio del Parlamento, un casco viejo con bares y bulevares de la Belle Époque. Es la base del planificador: veranos calurosos, inviernos bajo cero.",
      coords: [44.4268, 26.1025],
      featured: true,
      image: null,
    },
    {
      id: "brasov",
      name: "Brașov y el castillo de Bran",
      region: "Transilvania",
      tag: "Ciudad sajona y castillo",
      blurb:
        "Una plaza medieval al pie de la montaña y, cerca, el castillo de Bran, asociado a Drácula. Puerta a los Cárpatos.",
      coords: [45.6427, 25.5887],
      image: null,
    },
    {
      id: "sibiu",
      name: "Sibiu",
      region: "Transilvania",
      tag: "Casas con ojos",
      blurb:
        "Una ciudad sajona de plazas y techos con ventanas que parecen ojos. Uno de los mercados navideños más lindos del país.",
      coords: [45.7983, 24.1256],
      image: null,
    },
    {
      id: "sighisoara",
      name: "Sighișoara",
      region: "Transilvania",
      tag: "Ciudadela medieval",
      blurb:
        "Una ciudadela medieval habitada, patrimonio de la humanidad, donde nació Vlad el Empalador.",
      coords: [46.2197, 24.7964],
      image: null,
    },
    {
      id: "sinaia",
      name: "Sinaia y los Cárpatos",
      region: "Cárpatos",
      tag: "Castillo de Peleș",
      blurb:
        "Un pueblo de montaña con el castillo de Peleș, de cuento, y teleféricos a los montes Bucegi. Esquí en invierno.",
      coords: [45.35, 25.55],
      image: null,
    },
    {
      id: "cluj",
      name: "Cluj-Napoca",
      region: "Transilvania",
      tag: "Ciudad joven",
      blurb:
        "La ciudad universitaria más grande del país, con vida nocturna, festivales y una mina de sal enorme cerca, en Turda.",
      coords: [46.7712, 23.6236],
      image: null,
    },
    {
      id: "maramures",
      name: "Maramureș",
      region: "Norte",
      tag: "Iglesias de madera",
      blurb:
        "Pueblos donde la vida rural sigue como hace un siglo, con iglesias de madera de torres altísimas y el Cementerio Alegre.",
      coords: [47.9286, 23.8925],
      image: null,
    },
    {
      id: "bucovina",
      name: "Bucovina y los monasterios pintados",
      region: "Norte",
      tag: "Monasterios pintados",
      blurb:
        "Monasterios pintados por fuera con escenas bíblicas de colores, patrimonio de la humanidad, entre colinas verdes.",
      coords: [47.6514, 26.2556],
      image: null,
    },
    {
      id: "delta-del-danubio",
      name: "Delta del Danubio",
      region: "Este",
      tag: "Aves y canales",
      blurb:
        "Uno de los humedales más grandes de Europa, con canales, pueblos de pescadores y cientos de especies de aves. Se recorre en barco.",
      coords: [45.1716, 28.7914],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Rumania tiene un clima continental marcado: Bucarest pasa los treinta grados en julio y baja de cero en invierno, y Transilvania y los Cárpatos son más frescos en verano y más fríos en invierno, con nieve en la montaña. En verano, ropa liviana para el llano y un buzo para las noches de montaña; en invierno, abrigo de verdad, gorro y guantes. Y calzado cómodo: las ciudadelas medievales se recorren sobre empedrado y en subida.",
    keyPoints: [
      "Hemisferio norte: el verano, de junio a agosto, es caluroso en Bucarest; el invierno, de diciembre a febrero, frío en todo el país.",
      "Transilvania y los Cárpatos son más frescos: las noches de verano piden un buzo.",
      "En la montaña nieva de diciembre a marzo, y hay esquí.",
      "Los monasterios ortodoxos piden hombros y rodillas cubiertos, y a veces pañuelo para las mujeres.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero y protector. En Bucarest el calor de julio es fuerte; en la montaña, las noches refrescan.",
      templado:
        "Capas y una campera liviana. Es el clima de la primavera y el otoño, los mejores momentos para Transilvania.",
      fresco:
        "Sweater o polar y una campera que corte el viento. En la montaña sumá algo impermeable.",
      frio: "Abrigo de verdad, gorro, guantes y calzado que no resbale. En los Cárpatos la temperatura queda bajo cero y nieva.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Los enchufes europeos de dos patas redondas. Si los tuyos tienen patas planas —como en México, Centroamérica o el tipo I argentino—, necesitás adaptador. Y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá efectivo a los pueblos",
          body: "En las ciudades la tarjeta se acepta en casi todos lados; en Maramureș, Bucovina y el delta, el efectivo sigue mandando.",
        },
        {
          title: "Llevá algo para cubrir hombros y rodillas",
          body: "Los monasterios y las iglesias ortodoxas lo piden. Un pañuelo en la mochila lo resuelve.",
        },
        {
          title: "Recorré el delta en barco",
          body: "Los canales del delta del Danubio solo se recorren en barco, y la mejor época para ver aves es la primavera.",
        },
        {
          title: "Tomá los trenes con tiempo",
          body: "Son lentos pero pasan por paisajes muy lindos. Calculá varias horas entre ciudades.",
        },
        {
          title: "Dormí en una casa rural",
          body: "En Maramureș y en Bucovina, las casas de familia son la mejor forma de conocer la vida del pueblo.",
        },
        {
          title: "Elegí pagar en lei",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No cambies plata en la calle",
          body: "Usá cajeros de banco o casas de cambio establecidas: en la calle, el cambio es malo o directamente falso.",
        },
        {
          title: "No dejes comida a la vista en los Cárpatos",
          body: "En los bosques de montaña viven osos. En los senderos, seguí las indicaciones locales.",
        },
        {
          title: "No subestimes las distancias",
          body: "Las rutas de montaña y los trenes hacen que cien kilómetros puedan llevar dos o tres horas.",
        },
        {
          title: "No te olvides de la propina",
          body: "En los restaurantes se acostumbra dejar algo si te atendieron bien. Fijate antes si la cuenta ya trae el servicio.",
        },
        {
          title: "No descuides la mochila en las zonas concurridas",
          body: "En el centro de Bucarest y en el transporte hay carteristas. Mochila adelante y el teléfono a mano.",
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
          title: "El invierno es frío de verdad",
          body: "De diciembre a febrero la temperatura queda bajo cero en casi todo el país, y en los Cárpatos nieva. Sin abrigo adecuado, se pasa mal.",
        },
        summary: "Lo que pide diciembre a febrero",
        items: [
          "Campera de abrigo que corte el viento",
          "Gorro, guantes y bufanda",
          "Calzado abrigado que no resbale",
          "Medias térmicas",
          "Capas para sacarte adentro, donde hay calefacción",
        ],
      },
      {
        id: "monasterios",
        title: "Iglesias y monasterios",
        notice: {
          tone: "info",
          title: "Hombros y rodillas cubiertos",
          body: "Los monasterios de Bucovina y las iglesias ortodoxas piden ropa que cubra; a veces, pañuelo en la cabeza para las mujeres.",
        },
        summary: "Lo que te deja entrar",
        items: [
          "Pañuelo grande",
          "Pantalón o pollera por debajo de la rodilla",
          "Remera con mangas",
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
          "Mapas descargados: en la montaña la señal falla",
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
          "Repelente para el delta y los bosques en verano",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa liviana en invierno",
        why: "De diciembre a febrero baja de cero.",
        instead: "Abrigo, gorro y guantes.",
      },
      {
        leave: "Solo tarjetas",
        why: "En los pueblos el efectivo sigue mandando.",
        instead: "Tarjeta y algo de lei en efectivo.",
      },
      {
        leave: "Musculosas como única opción",
        why: "Los monasterios piden hombros y rodillas cubiertos.",
        instead: "Un pañuelo o una camisa liviana.",
      },
      {
        leave: "Zapatos de suela lisa",
        why: "Empedrado y subidas en las ciudadelas medievales.",
        instead: "Calzado cómodo con buena suela.",
      },
      {
        leave: "Una valija enorme",
        why: "Trenes con escalones altos y pueblos con calles de tierra.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En el centro de Bucarest y en el transporte llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Rumania?",
        answer:
          "Depende del pasaporte. Rumania es parte plena del espacio Schengen desde 2025: muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Rumania usa el euro?",
        answer:
          "No: la moneda es el leu. La tarjeta se acepta en las ciudades; en los pueblos, conviene tener efectivo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Mayo, junio y septiembre: buen clima en Transilvania y menos calor en Bucarest. Diciembre tiene mercados navideños, con frío de verdad.",
      },
      {
        question: "¿Cómo visito el castillo de Bran?",
        answer:
          "Está a menos de una hora de Brașov. Se llena en verano y los fines de semana: temprano y entre semana, mejor.",
      },
      {
        question: "¿Hay osos en los Cárpatos?",
        answer:
          "Sí, una de las poblaciones de osos más grandes de Europa. En los senderos, seguí las indicaciones locales y no dejes comida a la vista.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades, en general sí, aunque mucha gente prefiere la embotellada. En los pueblos, mejor embotellada.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, es lo habitual en los restaurantes si te atendieron bien. Fijate antes si la cuenta ya trae el servicio.",
      },
    ],
  },
};
