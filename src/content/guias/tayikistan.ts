import type { DestinationGuide } from "./types";

/**
 * Guía de Tayikistán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el Pamir, con un permiso de entrada propio además
 * de la visa, y dos de las ciudades más frías del planificador, después de
 * Mongolia: Murgab y el lago Karakul, a más de tres mil quinientos metros,
 * pasan enero con mínimas de más de veinticinco bajo cero. La ruta del Pamir corre en partes junto a la
 * frontera con Afganistán; ninguna ciudad del planificador está sobre ella.
 */
export const tayikistan: DestinationGuide = {
  slug: "tayikistan",
  country: "Tayikistán",
  subregion: "Asia Central",
  subhead:
    "Un país casi entero de montaña: lagos turquesa en las montañas de Fann, la ruta del Pamir a más de cuatro mil metros, ruinas sogdianas y casas de té en Dusambé. Para quien viaja despacio y con abrigo.",

  image: null,

  highlights: [
    {
      value: "Permiso",
      label: "aparte para el Pamir, además de la visa",
      note: "La región de Gorno-Badajshán pide un permiso propio, que se tramita junto con la visa electrónica.",
    },
    {
      value: "4.655 m",
      label: "el paso Ak-Baital, en la ruta del Pamir",
      note: "El punto más alto de una de las rutas de montaña más altas del mundo, entre Murgab y el lago Karakul.",
    },
    {
      value: "Iskanderkul",
      label: "el lago de Alejandro, en las montañas de Fann",
      note: "Un lago turquesa a más de dos mil metros que la leyenda une con Alejandro Magno, a pocas horas de Dusambé.",
    },
    {
      value: "Qurutob",
      label: "el plato nacional, pan con yogur seco",
      note: "Pan plano en trozos, bañado en qurut disuelto, con cebolla y verduras, servido en una fuente de madera para compartir.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Tayikistán",
      body: [
        "Muchos pasaportes latinoamericanos tramitan una visa electrónica online; algunos entran sin visa. Verificá el tuyo antes de comprar el pasaje.",
        "Para el Pamir —la región de Gorno-Badajshán, con Murgab y el lago Karakul— hace falta un permiso aparte, que se pide junto con la visa electrónica. Lo controlan en la ruta.",
        "La ruta del Pamir corre en partes junto a la frontera con Afganistán. Ninguna de las ciudades del planificador está sobre ella.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Tayikistán",
      body: [
        "La moneda es el somoni. El efectivo manda en casi todo el país: la tarjeta funciona en algunos hoteles y restaurantes de Dusambé y Juyand.",
        "Hay cajeros en Dusambé y en las ciudades grandes. En el Pamir casi no hay: llevá todo el efectivo desde la capital, y algunos dólares en billetes sanos de respaldo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí somonis: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Más del noventa por ciento es montaña",
      body: [
        "Tayikistán es hemisferio norte. Dusambé y Juyand, en los valles, tienen veranos muy calurosos y secos e inviernos fríos y lluviosos.",
        "Las montañas de Fann, con Iskanderkul y los Siete Lagos, a más de dos mil metros, son frescas en verano y nevadas de noviembre a abril.",
        "El Pamir es desierto de altura: casi no llueve, el sol quema y el invierno es durísimo. Murgab y el lago Karakul tienen de las mínimas más bajas del planificador.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la temporada del Pamir y de las montañas de Fann, con los pasos abiertos.",
        "Abril, mayo y octubre son buenos para Dusambé, Juyand y Panjakent, pero arriba ya hace frío. En invierno, las rutas de montaña pueden cerrarse.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Tayikistán",
      body: [
        "Entre ciudades se viaja en taxi compartido: autos que salen cuando se llenan, desde paradas conocidas en cada ciudad.",
        "Para el Pamir, lo habitual es contratar un todoterreno con chofer por varios días. Las rutas son lentas y de ripio en muchos tramos.",
        "En Dusambé hay buses, minibuses y taxis.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Las ruinas sogdianas de Panjakent, la fortaleza de Hisor y la ruta de la seda.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Qurutob, plov, shashlik, pan redondo y casas de té.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Las montañas de Fann y el Pamir: lagos, glaciares y mesetas a más de cuatro mil metros.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "No tiene mar.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y dormir sale muy poco; el todoterreno para el Pamir es el gasto grande.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Permisos, taxis compartidos, rutas de ripio y pocos cajeros fuera de la capital.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale:
        "El somoni se mueve contra el dólar, sin grandes saltos recientes.",
    },
  ],

  shines: [
    "Montañas enormes casi sin gente.",
    "Muy barato y hospitalario.",
    "Lagos de altura a pocas horas de la capital.",
  ],

  costs: [
    "Permisos aparte para el Pamir.",
    "Rutas lentas y poco transporte.",
    "Inviernos durísimos en la montaña.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Dusambé que Iskanderkul o Murgab, a más de tres mil quinientos metros. Los precios están en somonis y son órdenes de magnitud.",

  places: [
    {
      id: "dusambe",
      name: "Dusambé",
      region: "Dusambé",
      tag: "La capital de las avenidas",
      blurb:
        "La avenida Rudaki con sus árboles, el museo nacional, casas de té con columnas pintadas y montañas en el horizonte. Es la base del planificador: veranos muy calurosos, inviernos fríos.",
      coords: [38.5598, 68.787],
      featured: true,
      image: null,
    },
    {
      id: "juyand",
      name: "Juyand",
      region: "Sughd",
      tag: "La puerta del valle de Fergana",
      blurb:
        "Una de las ciudades más antiguas de Asia Central, con un gran bazar cubierto y una fortaleza junto al río Sir Daria.",
      coords: [40.2826, 69.6222],
      image: null,
    },
    {
      id: "iskanderkul",
      name: "Lago Iskanderkul",
      region: "Sughd",
      tag: "El lago de Alejandro",
      blurb:
        "Un lago turquesa a más de dos mil metros en las montañas de Fann, con una cascada cerca y caminatas alrededor. Nieve de noviembre a abril.",
      coords: [39.0778, 68.3681],
      image: null,
    },
    {
      id: "siete-lagos",
      name: "Siete Lagos (Marguzor)",
      region: "Sughd",
      tag: "Siete lagos de colores",
      blurb:
        "Siete lagos escalonados en un valle de las montañas de Fann, cada uno de un color distinto, con aldeas de piedra y casas de familia.",
      coords: [39.183, 67.635],
      image: null,
    },
    {
      id: "panjakent",
      name: "Panjakent",
      region: "Sughd",
      tag: "La ciudad sogdiana",
      blurb:
        "Las ruinas de una ciudad sogdiana de la ruta de la seda y, cerca, Sarazm, un asentamiento de cinco mil años, patrimonio de la humanidad. Base para las montañas de Fann.",
      coords: [39.4953, 67.6094],
      image: null,
    },
    {
      id: "hisor",
      name: "Fortaleza de Hisor",
      region: "Distritos centrales",
      tag: "La fortaleza restaurada",
      blurb:
        "Una fortaleza con su gran portal, una madraza y un caravasar, a media hora de Dusambé.",
      coords: [38.5181, 68.5503],
      image: null,
    },
    {
      id: "norak",
      name: "Norak y su embalse",
      region: "Jatlón",
      tag: "Un lago entre montañas",
      blurb:
        "El embalse de Norak, de agua turquesa entre montañas áridas, detrás de una de las represas más altas del mundo. Caluroso en verano.",
      coords: [38.3889, 69.3214],
      image: null,
    },
    {
      id: "murgab",
      name: "Murgab (Pamir)",
      region: "Gorno-Badajshán",
      tag: "El pueblo más alto de la ruta",
      blurb:
        "Un pueblo en una meseta a más de tres mil quinientos metros, en el corazón del Pamir, con yurtas, yaks y un bazar de contenedores. Invierno durísimo; pide permiso aparte.",
      coords: [38.1667, 73.9667],
      image: null,
    },
    {
      id: "karakul",
      name: "Lago Karakul (Pamir)",
      region: "Gorno-Badajshán",
      tag: "Un lago a casi cuatro mil metros",
      blurb:
        "Un lago enorme de agua azul oscura a casi cuatro mil metros, rodeado de montañas nevadas, cerca de la frontera con Kirguistán. Pide permiso aparte.",
      coords: [39.03, 73.43],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Tayikistán depende de la altura. Para Dusambé y los valles en verano, ropa liviana, sombrero y protector. Para las montañas de Fann, capas y una campera. Para el Pamir, abrigo de verdad aun en julio: térmicas, polar, campera de pluma, gorro y guantes, y protector solar fuerte. Siempre, efectivo en somonis y algo que cubra hombros y rodillas.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de junio a septiembre para la montaña.",
      "El Pamir pide un permiso aparte, que se tramita con la visa.",
      "Fuera de Dusambé, efectivo: en el Pamir casi no hay cajeros.",
      "Arriba de los tres mil metros, las noches son frías aun en verano.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que cubra hombros y rodillas, sombrero, protector y agua para Dusambé y Juyand en verano.",
      templado:
        "Ropa liviana de día y un buzo para la noche, que en la montaña refresca rápido.",
      fresco:
        "Capas, un polar y una campera impermeable para las montañas de Fann y las noches de primavera y otoño.",
      frio: "Campera de pluma, térmicas, gorro, guantes y bolsa de dormir abrigada para el Pamir, y ropa de nieve para la montaña en invierno.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. En los pueblos de montaña la luz puede cortarse: una batería portátil ayuda. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pedí el permiso del Pamir con la visa",
          body: "Se marca en el mismo trámite online, y sin él no se pasa de los controles de la ruta.",
        },
        {
          title: "Llevá el efectivo desde Dusambé",
          body: "En el Pamir casi no hay cajeros, y los que hay fallan.",
        },
        {
          title: "Dormí en casas de familia",
          body: "En los pueblos de montaña son la forma de alojarse, con cena casera incluida.",
        },
        {
          title: "Subí despacio",
          body: "Murgab y el lago Karakul están a más de tres mil quinientos metros: días de aclimatación y mucha agua.",
        },
        {
          title: "Llevá una batería portátil",
          body: "En la montaña la luz se corta seguido, y no siempre hay dónde cargar.",
        },
        {
          title: "Elegí pagar en somonis",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No vayas al Pamir sin permiso",
          body: "Los controles de la ruta lo piden, y sin él te hacen volver.",
        },
        {
          title: "No subestimes el frío de altura",
          body: "Aun en julio, las noches en Murgab bajan cerca de cero.",
        },
        {
          title: "No planees el Pamir en invierno",
          body: "Los pasos pueden cerrarse y el frío es extremo.",
        },
        {
          title: "No tomes agua de la canilla ni de los arroyos",
          body: "Embotellada, hervida o filtrada.",
        },
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo. Sin zapatos adentro.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Documentos y permisos",
        notice: {
          tone: "warn",
          title: "Visa y permiso del Pamir",
          body: "Muchos pasaportes tramitan visa electrónica, y el Pamir pide un permiso aparte en el mismo trámite.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica impresa",
          "Permiso del Pamir impreso, si vas",
          "Seguro de viaje que cubra montaña",
        ],
      },
      {
        id: "pamir",
        title: "Para el Pamir",
        notice: {
          tone: "info",
          title: "Desierto de altura",
          body: "Sol fuerte de día y frío de noche, aun en verano. Poca sombra y casi nada para comprar.",
        },
        summary: "Lo que pide la altura",
        items: [
          "Campera de pluma y térmicas",
          "Gorro, guantes y anteojos de sol",
          "Protector solar fuerte y labial",
          "Bolsa de dormir abrigada",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: null,
        summary: "Cómo llevar la plata",
        items: [
          "Somonis para todo el recorrido fuera de la capital",
          "Algunos dólares en billetes sanos de respaldo",
          "Una tarjeta para los cajeros de Dusambé",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Lo que te indique tu médico para la altura",
          "Pastillas o filtro para el agua",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano para el Pamir",
        why: "A más de tres mil quinientos metros las noches son frías aun en julio.",
        instead: "Térmicas, polar y campera de pluma.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Dusambé casi todo se paga en efectivo, y en el Pamir no hay cajeros.",
        instead: "Somonis en efectivo para todo el viaje.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Las rutas de montaña son lentas y el clima cambia rápido.",
        instead: "Días de margen.",
      },
      {
        leave: "Una valija con rueditas",
        why: "En los pueblos de montaña no hay veredas, y el todoterreno tiene poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Ropa corta para los pueblos",
        why: "Fuera de la capital se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema, y en la montaña la luz es escasa.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Tayikistán?",
        answer:
          "Muchos pasaportes tramitan visa electrónica online; algunos entran sin visa. Verificá el tuyo.",
      },
      {
        question: "¿Qué es el permiso del Pamir?",
        answer:
          "Un permiso aparte para la región de Gorno-Badajshán, que se pide en el mismo trámite que la visa electrónica y se controla en la ruta.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre para la montaña. Primavera y otoño, para los valles.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Tayikistán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En los restaurantes de Dusambé se redondea o se deja alrededor del diez por ciento.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No conviene: embotellada, hervida o filtrada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Tayiko, cercano al persa, y mucha gente habla ruso. Fuera de Dusambé, casi nada de inglés.",
      },
      {
        question: "¿Cómo se recorre el Pamir?",
        answer:
          "En todoterreno con chofer, durante varios días, con el permiso aparte y efectivo para todo el recorrido.",
      },
    ],
  },
};
