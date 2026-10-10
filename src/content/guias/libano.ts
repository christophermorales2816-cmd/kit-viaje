import type { DestinationGuide } from "./types";

/**
 * Guía de Líbano.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: el caso de Camboya con historia de crisis. Desde
 * 2019 casi todo se cobra en dólares, así que los precios van en USD y el
 * corredor, en LBP. Ninguna ciudad del planificador está al sur de Sidón ni
 * en la Bekaa. Y un vínculo propio con América Latina: muchas familias de la región
 * tienen raíces acá.
 */
export const libano: DestinationGuide = {
  slug: "libano",
  country: "Líbano",
  subregion: "Asia Occidental",
  subhead:
    "Una de las ciudades más antiguas del mundo frente al Mediterráneo, los cedros en las montañas, monasterios en el valle de Qadisha, la mesa de mezze más generosa del mundo árabe y una Beirut que no duerme. La tierra de muchos abuelos latinoamericanos.",

  image: null,

  highlights: [
    {
      value: "Dólares",
      label: "en efectivo para casi todo",
      note: "Desde la crisis de 2019 los precios se ponen en dólares. La libra sirve para lo chico.",
    },
    {
      value: "Biblos",
      label: "una de las ciudades habitadas más antiguas del mundo",
      note: "Un puerto fenicio con un castillo cruzado, ruinas de siete mil años y un zoco antiguo. Patrimonio de la humanidad.",
    },
    {
      value: "Cedros",
      label: "los cedros de Dios, en las montañas",
      note: "Un bosque de cedros milenarios sobre el valle de Qadisha, a casi dos mil metros. Patrimonio de la humanidad.",
    },
    {
      value: "Mezze",
      label: "veinte platos chicos para compartir",
      note: "Hummus, tabule, kibbeh, labneh y pan caliente, con arak o vino del país.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Líbano",
      body: [
        "Muchos pasaportes latinoamericanos reciben la visa al llegar al aeropuerto de Beirut; otros la tramitan antes. Verificá el tuyo antes de comprar el pasaje.",
        "Si tu pasaporte tiene sellos o marcas de un viaje a Israel, te pueden negar la entrada.",
        "El pasaporte tiene que tener vigencia de sobra, y pueden pedirte la reserva del hotel y el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Líbano",
      body: [
        "La moneda es la libra libanesa, pero desde la crisis de 2019 casi todo se cobra en dólares. Los precios del planificador están en dólares.",
        "Llevá dólares en efectivo, en billetes chicos y sanos. La tarjeta extranjera funciona en hoteles y algunos comercios.",
        "El cambio muchas veces se da en libras: conviene tener billetes chicos para no recibir montos grandes en moneda local.",
      ],
    },
    {
      id: "clima",
      title: "Mediterráneo con montañas",
      body: [
        "Líbano es hemisferio norte. Beirut, Biblos y la costa tienen veranos calurosos y húmedos e inviernos templados y lluviosos.",
        "Las montañas están a pocos kilómetros del mar: Bsharri y los cedros tienen inviernos fríos con nieve, y Faraya, la estación de esquí, está bajo cero de noche de diciembre a marzo.",
        "Casi no llueve de junio a septiembre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril, mayo, junio, septiembre y octubre: templado en la costa y la montaña abierta.",
        "En verano, playa y montaña fresca. De diciembre a marzo se esquía en Faraya, y en primavera se puede esquiar a la mañana y bajar al mar a la tarde.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Líbano",
      body: [
        "El país es chico, pero el tránsito es lento. Entre ciudades hay minibuses y servis, taxis compartidos que siguen rutas.",
        "En Beirut, taxis por app. Muchos viajeros contratan un chofer por el día para la montaña.",
        "No hay trenes.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte del Líbano, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Lo que está al sur de Sidón y el valle de la Bekaa no forman parte del planificador. Los cortes de luz son comunes: los hoteles tienen generador, y una batería portátil ayuda.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Biblos, Sidón, Beiteddine y miles de años de historia en un país chico.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Mezze, pan, mariscos y vino: de las cocinas más ricas de la región.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale:
        "Montañas nevadas sobre el Mediterráneo y el valle de Qadisha.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Playas y clubes de playa en Batrún y la costa, con agua templada en verano.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Se come muy bien a precios razonables; hoteles y salidas en dólares, no tan baratos.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Distancias cortas, pero tránsito lento, sin trenes y con cortes de luz.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 4,
      rationale:
        "Economía en crisis desde 2019; al viajero se le cobra en dólares.",
    },
  ],

  shines: [
    "La cocina.",
    "Mar y montaña en distancias cortas.",
    "La hospitalidad.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Cortes de luz.",
    "Tránsito lento.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Beirut que Bsharri o Faraya. Los precios están en dólares, que es como se cobra, y son órdenes de magnitud.",

  places: [
    {
      id: "beirut",
      name: "Beirut",
      region: "Beirut",
      tag: "La ciudad que no duerme",
      blurb:
        "La Corniche y las rocas de Raouché, el museo nacional, los barrios de Gemmayzeh y Mar Mikhael y una vida nocturna famosa. Es la base del planificador: veranos húmedos, inviernos templados y lluviosos.",
      coords: [33.8938, 35.5018],
      featured: true,
      image: null,
    },
    {
      id: "biblos",
      name: "Biblos",
      region: "Monte Líbano",
      tag: "El puerto fenicio",
      blurb:
        "Una de las ciudades habitadas más antiguas del mundo, con un castillo cruzado, ruinas fenicias y un zoco junto al puerto. Patrimonio de la humanidad.",
      coords: [34.1211, 35.6481],
      image: null,
    },
    {
      id: "batrun",
      name: "Batrún",
      region: "Norte",
      tag: "Playa y limonada",
      blurb:
        "Un pueblo costero con iglesias de piedra, una muralla fenicia en el mar, bodegas, playas y bares de verano.",
      coords: [34.2553, 35.6581],
      image: null,
    },
    {
      id: "yunie",
      name: "Yunie y la gruta de Jeita",
      region: "Monte Líbano",
      tag: "La bahía y la gruta",
      blurb:
        "La bahía de Yunie, el teleférico a la Virgen del Líbano en Harissa y, cerca, la gruta de Jeita, con un río subterráneo que se recorre en bote.",
      coords: [33.9808, 35.6178],
      image: null,
    },
    {
      id: "bsharri",
      name: "Bsharri y los cedros",
      region: "Norte",
      tag: "El valle de los monasterios",
      blurb:
        "El pueblo de Gibran Khalil Gibran sobre el valle de Qadisha, con monasterios en la roca y los cedros de Dios más arriba. Inviernos fríos con nieve.",
      coords: [34.2508, 36.0117],
      image: null,
    },
    {
      id: "beiteddine",
      name: "Beiteddine (Chouf)",
      region: "Monte Líbano",
      tag: "El palacio del emir",
      blurb:
        "Un palacio del siglo XIX con patios y mosaicos, y cerca, el pueblo de piedra de Deir el Qamar y la reserva de cedros del Chouf.",
      coords: [33.6956, 35.58],
      image: null,
    },
    {
      id: "faraya",
      name: "Faraya",
      region: "Monte Líbano",
      tag: "Esquí sobre el Mediterráneo",
      blurb:
        "La estación de esquí de Mzaar, a casi dos mil metros y a una hora de Beirut, con nieve de diciembre a marzo. En verano, caminatas.",
      coords: [33.9967, 35.8211],
      image: null,
    },
    {
      id: "sidon",
      name: "Sidón",
      region: "Sur",
      tag: "El castillo del mar",
      blurb:
        "Un castillo cruzado sobre un islote, un zoco antiguo y el museo del jabón, en una de las ciudades fenicias más antiguas.",
      coords: [33.5571, 35.3729],
      image: null,
    },
    {
      id: "broummana",
      name: "Broummana",
      region: "Monte Líbano",
      tag: "El veraneo en la montaña",
      blurb:
        "Un pueblo de veraneo en las montañas sobre Beirut, con pinos, restaurantes y vista al mar, más fresco en verano.",
      coords: [33.8836, 35.6233],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Líbano depende de la estación y la altura. En verano, ropa liviana, traje de baño y protector, y un buzo para la montaña. En invierno, campera y paraguas para la costa, y ropa de nieve para Faraya y los cedros. Siempre, algo que cubra hombros y rodillas para iglesias y mezquitas, dólares en efectivo y una batería portátil.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Dólares en efectivo, en billetes chicos.",
      "La montaña está a una hora del mar: capas siempre.",
      "Cortes de luz comunes: batería portátil.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, traje de baño, protector y sombrero para la costa en verano.",
      templado:
        "Ropa liviana de día y un buzo para la noche, que en la montaña refresca.",
      fresco:
        "Capas, un polar y una campera impermeable para la costa en invierno y la montaña en primavera.",
      frio: "Campera de abrigo, gorro, guantes y calzado para nieve en Faraya y los cedros en invierno.",
    },
    plug: {
      types: "Tipo C, tipo D y tipo G",
      voltage: "230 V, 50 Hz",
      note: "Conviven varios enchufes. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá dólares en billetes chicos",
          body: "Es como se paga casi todo, y así evitás recibir el cambio en libras.",
        },
        {
          title: "Pedí mezze para compartir",
          body: "Muchos platos chicos al centro de la mesa: es la forma de comer acá.",
        },
        {
          title: "Contratá un chofer para la montaña",
          body: "Bsharri, los cedros y el Chouf se hacen mejor en un día con auto.",
        },
        {
          title: "Llevá una batería portátil",
          body: "Los cortes de luz son comunes fuera de los hoteles.",
        },
        {
          title: "Buscá tus raíces",
          body: "Muchas familias latinoamericanas vienen de pueblos de la montaña: preguntar abre puertas.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No viajes con rastros de un viaje a Israel",
          body: "Sellos o marcas en el pasaporte pueden hacer que te nieguen la entrada.",
        },
        {
          title: "No fotografíes controles ni edificios militares",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No salgas del planificador sin informarte",
          body: "Lo que está al sur de Sidón y la Bekaa queda afuera por la situación: informate antes de ir.",
        },
        {
          title: "No discutas de política a la ligera",
          body: "Es un tema sensible. Escuchá más de lo que opinás.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Líbano y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino",
          "Pasaporte con vigencia de sobra, sin rastros de un viaje a Israel",
          "Reserva del hotel y pasaje de salida",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "info",
          title: "Dólares chicos",
          body: "Casi todo se cobra en dólares. Los billetes chicos evitan recibir el cambio en libras.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes de uno, cinco, diez y veinte",
          "Billetes en buen estado",
          "Una tarjeta de respaldo",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña",
        notice: null,
        summary: "Lo que pide la altura",
        items: [
          "Un polar y una campera",
          "Calzado de caminata para Qadisha",
          "Ropa de nieve, en invierno",
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
          "Protector solar",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Billetes grandes",
        why: "El cambio te lo pueden dar en libras.",
        instead: "Dólares en billetes chicos.",
      },
      {
        leave: "Depender de la luz",
        why: "Los cortes son comunes.",
        instead: "Una batería portátil y una linterna.",
      },
      {
        leave: "Solo ropa de verano",
        why: "La montaña está a una hora y es fresca.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Contar con trenes",
        why: "No hay.",
        instead: "Servis, minibuses o un chofer.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Líbano y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Líbano?",
        answer:
          "Muchos pasaportes latinoamericanos la reciben al llegar; otros la tramitan antes. Verificá el tuyo.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "Casi todo en dólares, en efectivo. La tarjeta extranjera funciona en hoteles y algunos comercios.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "Primavera y otoño. En invierno se esquía; en verano, playa.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: conviven los tipos C, D y G a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer: "Sí, alrededor del diez por ciento en restaurantes.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Sí: el país produce vino y arak, y se sirven en casi todos lados.",
      },
    ],
  },
};
