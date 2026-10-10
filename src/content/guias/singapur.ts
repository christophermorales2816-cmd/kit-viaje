import type { DestinationGuide } from "./types";

/**
 * Guía de Singapur.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es una ciudad-estado, así que las nueve "ciudades"
 * del planificador son barrios, como las parroquias de Andorra. El clima es el
 * mismo en todas y lo que cambia es el precio. Es el primer país de Asia con
 * centavos (el dólar de Singapur vale más de medio dólar estadounidense), y el
 * único donde las multas por comer en el metro o tirar un papel definen cómo
 * se prepara el viaje: se dicen como reglas, no como advertencia.
 */
export const singapur: DestinationGuide = {
  slug: "singapur",
  country: "Singapur",
  subregion: "Sudeste Asiático",
  subhead:
    "Una ciudad-estado sobre el ecuador: rascacielos junto a templos, jardines del futuro, patios de comida que son patrimonio de la humanidad y barrios chino, indio y malayo a pocas cuadras. Limpia, ordenada y fácil.",

  image: null,

  highlights: [
    {
      value: "Multas",
      label: "por comer en el metro o tirar un papel",
      note: "Las reglas se cumplen: no se come ni se toma en el MRT, no se tira nada en la calle y los cigarrillos electrónicos están prohibidos.",
    },
    {
      value: "Hawker centres",
      label: "patrimonio de la humanidad",
      note: "La UNESCO reconoció la cultura de sus patios de comida. Algunos puestos llegaron a tener estrella Michelin.",
    },
    {
      value: "Superárboles",
      label: "en Gardens by the Bay",
      note: "Se iluminan cada noche con un espectáculo de luces y música; al lado, cúpulas de vidrio con un bosque nuboso y una cascada.",
    },
    {
      value: "1°",
      label: "al norte del ecuador: calor los doce meses",
      note: "No hay estaciones de temperatura. Llueve en cualquier época, en chaparrones fuertes y cortos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Singapur",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa como turistas por estadías cortas; otros necesitan visa electrónica. Verificá el tuyo antes de comprar el pasaje.",
        "Singapur pide completar una tarjeta de llegada digital (SG Arrival Card) online en los días previos al viaje, en el sitio oficial. Fijate qué rige cuando viajes.",
        "El pasaporte tiene que tener vigencia de sobra, y en la frontera pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Singapur",
      body: [
        "La moneda es el dólar de Singapur, con centavos. La tarjeta sin contacto funciona en casi todo, incluso para entrar al metro y al colectivo, apoyándola en el molinete.",
        "En los patios de comida (hawker centres) muchos puestos aceptan tarjeta o pago con código QR; algunos, solo efectivo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí dólares de Singapur: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "reglas",
      title: "Reglas que se cumplen",
      body: [
        "Comer o tomar en el metro y en los colectivos está prohibido, igual que tirar basura, escupir o cruzar fuera de la senda peatonal. Las multas se cobran.",
        "No se vende chicle, los cigarrillos electrónicos están prohibidos y fumar se permite solo en zonas marcadas.",
        "El resultado es una ciudad muy limpia y tranquila a cualquier hora. Las precauciones son las de cualquier gran ciudad.",
      ],
    },
    {
      id: "clima",
      title: "Calor ecuatorial",
      body: [
        "Singapur está casi sobre el ecuador: calor y humedad los doce meses, sin invierno ni verano.",
        "Llueve en cualquier época, en chaparrones fuertes y cortos, a veces con tormenta eléctrica. Noviembre y diciembre son los meses más lluviosos.",
        "Algunos años, de agosto a octubre, el humo de los incendios de las islas vecinas trae bruma a la ciudad por unos días.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier época sirve: el clima casi no cambia. De febrero a abril suele llover algo menos.",
        "El Año Nuevo chino (enero o febrero, según el año) llena Chinatown de luces y cierra algunos negocios unos días; Deepavali hace lo mismo en Little India.",
        "El planificador usa el clima histórico de cada barrio, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "El Singapur colonial, los templos de Chinatown y Little India, y la mezquita del Sultán.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Chili crab, chicken rice, laksa y los patios de comida, de los mejores de Asia.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "Jardines notables y la bahía de rascacielos; la naturaleza salvaje queda en Pulau Ubin.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Sentosa tiene playas artificiales; no son el motivo del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Los hawker centres son baratos; el alojamiento y la salida nocturna, de los más caros de Asia.",
    },
    {
      dimension: "Facilidad logística",
      score: 10,
      rationale:
        "Metro excelente, todo en inglés y la tarjeta sin contacto sirve hasta para el molinete.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale:
        "Precios estables, sin regateo y con todo cargado en la cuenta.",
    },
  ],

  shines: [
    "La ciudad más fácil de Asia para empezar.",
    "Comida excelente y barata en los hawker centres.",
    "Limpia y tranquila a cualquier hora.",
  ],

  costs: [
    "Alojamiento caro.",
    "Calor húmedo todo el año.",
    "Chico: en pocos días se recorre.",
  ],

  dataScopeNote:
    "Singapur es una ciudad: las nueve opciones del planificador son barrios y zonas. El clima es el mismo en todas y cambia el precio: Sentosa es la más cara, Pulau Ubin la más barata. Los precios están en dólares de Singapur y son órdenes de magnitud.",

  places: [
    {
      id: "marina-bay",
      name: "Marina Bay y el centro",
      region: "Centro",
      tag: "La bahía de los rascacielos",
      blurb:
        "Marina Bay Sands, Gardens by the Bay, el Merlion y el barrio colonial de museos. Es la base del planificador: calor y humedad todo el año, con chaparrones en cualquier mes.",
      coords: [1.2834, 103.8607],
      featured: true,
      image: null,
    },
    {
      id: "chinatown",
      name: "Chinatown",
      region: "Centro",
      tag: "Templos y patios de comida",
      blurb:
        "El templo del Diente de Buda, el templo hindú Sri Mariamman y el Maxwell Food Centre, entre casas comerciales de colores.",
      coords: [1.2838, 103.8443],
      image: null,
    },
    {
      id: "little-india",
      name: "Little India",
      region: "Centro",
      tag: "Especias y templos",
      blurb:
        "Templos hindúes, tiendas de especias y guirnaldas de flores, y el Tekka Centre con su comida del sur de India.",
      coords: [1.3066, 103.8518],
      image: null,
    },
    {
      id: "kampong-glam",
      name: "Kampong Glam",
      region: "Centro",
      tag: "La mezquita del Sultán",
      blurb:
        "El barrio malayo y árabe, con la mezquita del Sultán, la calle Haji Lane llena de murales y cafés.",
      coords: [1.302, 103.859],
      image: null,
    },
    {
      id: "sentosa",
      name: "Isla de Sentosa",
      region: "Sur",
      tag: "Playas y parques",
      blurb:
        "Una isla de parques de diversiones, acuario, playas artificiales y hoteles de lujo, unida a la ciudad por teleférico y monorriel.",
      coords: [1.2494, 103.8303],
      image: null,
    },
    {
      id: "orchard",
      name: "Orchard Road",
      region: "Centro",
      tag: "La avenida de las compras",
      blurb:
        "Una avenida de centros comerciales con aire acondicionado y, cerca, el Istana y el museo de Peranakan.",
      coords: [1.3048, 103.8318],
      image: null,
    },
    {
      id: "jardin-botanico",
      name: "Jardín Botánico y Dempsey",
      region: "Centro",
      tag: "El jardín de las orquídeas",
      blurb:
        "Un jardín botánico patrimonio de la humanidad, con el Jardín Nacional de Orquídeas y restaurantes en antiguos cuarteles.",
      coords: [1.3138, 103.8159],
      image: null,
    },
    {
      id: "pulau-ubin",
      name: "Pulau Ubin",
      region: "Noreste",
      tag: "El Singapur de antes",
      blurb:
        "Una isla rural a pocos minutos en bote: aldeas de madera, manglares y senderos para recorrer en bicicleta.",
      coords: [1.4044, 103.9625],
      image: null,
    },
    {
      id: "katong",
      name: "Katong y East Coast",
      region: "Este",
      tag: "Casas peranakan y playa",
      blurb:
        "Casas peranakan de colores, el laksa de Katong y el parque costero de East Coast, con bicicletas y patios de comida frente al mar.",
      coords: [1.305, 103.905],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Singapur es calor húmedo todo el año: ropa liviana que se seque rápido, protector, un paraguas plegable y un buzo liviano para el aire acondicionado, que es helado en todos lados. Para templos y mezquitas, algo que cubra hombros y rodillas. La tarjeta sin contacto alcanza para casi todo, incluso el metro.",
    keyPoints: [
      "Ecuatorial: calor todo el año y chaparrones en cualquier mes.",
      "No se come ni se toma en el metro, y las multas se cobran.",
      "La tarjeta sin contacto sirve para entrar al metro y al colectivo.",
      "Hay una tarjeta de llegada digital que se completa antes del viaje.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector, sombrero, agua y un paraguas plegable. Y un buzo liviano para el aire acondicionado.",
      templado:
        "No hay meses templados en Singapur; un buzo liviano alcanza para el aire acondicionado de interiores.",
      fresco:
        "No hace fresco en ningún mes. Lo más frío es el aire acondicionado de centros comerciales y cines: un buzo liviano.",
      frio: "No hay frío en Singapur en ninguna época.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe británico, de tres patas rectangulares. Hace falta adaptador casi siempre. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Entrá al metro con la tarjeta sin contacto",
          body: "Se apoya en el molinete como un boleto, sin comprar nada aparte.",
        },
        {
          title: "Comé en los hawker centres",
          body: "Maxwell, Lau Pa Sat o Tekka: comida excelente y barata. Un paquete de pañuelos sobre la mesa significa que está ocupada.",
        },
        {
          title: "Mirá el espectáculo de los superárboles",
          body: "Cada noche en Gardens by the Bay, gratis, acostado en el piso debajo de los árboles.",
        },
        {
          title: "Cruzá a Pulau Ubin",
          body: "En bote desde Changi, con bicicleta alquilada: el Singapur rural de hace décadas.",
        },
        {
          title: "Llevá un buzo liviano",
          body: "El aire acondicionado del metro, los centros comerciales y los cines es helado.",
        },
        {
          title: "Elegí pagar en dólares de Singapur",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No comas ni tomes en el metro",
          body: "Ni agua: está prohibido en trenes, estaciones y colectivos, con multa.",
        },
        {
          title: "No tires nada en la calle",
          body: "Ni una colilla: las multas por ensuciar se cobran.",
        },
        {
          title: "No lleves cigarrillos electrónicos",
          body: "Están prohibidos, también para turistas: tenerlos es una infracción.",
        },
        {
          title: "No cruces fuera de la senda peatonal",
          body: "Cruzar a mitad de cuadra se multa.",
        },
        {
          title: "No dejes propina",
          body: "No se acostumbra: la cuenta ya suma el cargo por servicio.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "tropico",
        title: "Calor y lluvia",
        notice: {
          tone: "info",
          title: "El mismo clima todo el año",
          body: "Calor húmedo y chaparrones en cualquier mes. Lo que más cambia es entrar y salir del aire acondicionado.",
        },
        summary: "Lo que pide el ecuador",
        items: [
          "Ropa liviana de secado rápido",
          "Protector solar y sombrero",
          "Un paraguas plegable",
          "Un buzo liviano para el aire acondicionado",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Completá la SG Arrival Card",
          body: "Se completa online en los días previos al viaje, en el sitio oficial. Y verificá si tu pasaporte necesita visa.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La SG Arrival Card completada",
          "Visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "reglas",
        title: "Reglas de la ciudad",
        notice: null,
        summary: "Lo que conviene saber antes de llegar",
        items: [
          "Nada de comer ni tomar en el metro",
          "Nada de cigarrillos electrónicos",
          "Basura siempre al cesto",
          "Cruzar por la senda peatonal",
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
          "Repelente de mosquitos",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo",
        why: "Nunca hace frío; solo el aire acondicionado pide algo.",
        instead: "Un buzo liviano.",
      },
      {
        leave: "Cigarrillos electrónicos",
        why: "Están prohibidos y tenerlos es una infracción.",
        instead: "Nada: dejalos en casa.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta sin contacto sirve para casi todo, incluso el metro.",
        instead: "Una tarjeta y algo de efectivo para algún puesto.",
      },
      {
        leave: "Un adaptador de patas redondas",
        why: "Singapur usa el enchufe británico de tres patas rectangulares.",
        instead: "Un adaptador universal.",
      },
      {
        leave: "Ropa de algodón grueso",
        why: "Con la humedad no se seca.",
        instead: "Ropa liviana de secado rápido.",
      },
      {
        leave: "Un paraguas grande",
        why: "Los chaparrones son cortos y casi todo el centro tiene veredas techadas.",
        instead: "Un paraguas plegable.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Singapur?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos entran sin visa por estadías cortas, pero todos completan la SG Arrival Card online antes de llegar. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Cualquiera: el clima casi no cambia. De febrero a abril suele llover algo menos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Casi seguro que sí. Singapur usa el tipo G, británico, de tres patas rectangulares, a 230 V.",
      },
      {
        question: "¿Cómo pago el metro?",
        answer:
          "Con la tarjeta sin contacto, apoyándola en el molinete, o con el celular. No hace falta comprar boleto.",
      },
      {
        question: "¿Es tan estricto como dicen?",
        answer:
          "Las reglas se cumplen y se multan: no comer en el metro, no ensuciar, nada de cigarrillos electrónicos. Con eso, no hay sorpresas.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No: la cuenta ya incluye el cargo por servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Sí, en toda la ciudad.",
      },
      {
        question: "¿Cuántos días hacen falta?",
        answer:
          "Tres o cuatro alcanzan para lo principal. Muchos lo combinan con Malasia o Indonesia.",
      },
    ],
  },
};
