import type { DestinationGuide } from "./types";

/**
 * Guía de Israel y Palestina.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Una sola guía porque se viaja con la misma moneda —el shekel circula en los
 * dos— y se entra por las mismas fronteras; así lo decidió la sección 14.2 al
 * nombrarlos juntos. Gaza no forma parte del planificador. Belén y Jericó, en
 * Cisjordania, sí: se dice cómo se llega, sin describir la situación, que
 * cambia más rápido que esta guía.
 */
export const israelYPalestina: DestinationGuide = {
  slug: "israel-y-palestina",
  country: "Israel y Palestina",
  subregion: "Asia Occidental",
  subhead:
    "La Ciudad Vieja de Jerusalén, Belén y Nazaret, el mar Muerto en el punto más bajo de la Tierra, la playa de Tel Aviv y el desierto del Néguev hasta el mar Rojo. Una tierra chica con tres religiones y miles de años de historia.",

  image: null,

  highlights: [
    {
      value: "Shabat",
      label: "de viernes a sábado a la noche, casi sin transporte",
      note: "En Israel, desde el atardecer del viernes, la mayoría de los buses y trenes no funciona y muchos negocios cierran. Conviene planearlo.",
    },
    {
      value: "Jerusalén",
      label: "tres religiones en la Ciudad Vieja",
      note: "El Muro de los Lamentos, el Santo Sepulcro y la Explanada de las Mezquitas, a pocas cuadras entre sí. Patrimonio de la humanidad.",
    },
    {
      value: "Belén",
      label: "la basílica de la Natividad, en Cisjordania",
      note: "Una de las iglesias más antiguas en uso, patrimonio de la humanidad, a media hora de Jerusalén.",
    },
    {
      value: "Hummus",
      label: "con pan caliente, en cada esquina",
      note: "Con falafel, sabich o shakshuka; de postre, knafeh, el dulce de queso de Nablus.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Israel y Palestina",
      body: [
        "Muchos pasaportes latinoamericanos entran a Israel sin visa, con una autorización electrónica previa que se tramita online; otros necesitan visa. Verificá el tuyo antes de comprar el pasaje.",
        "Israel no sella el pasaporte: da una tarjeta de entrada que hay que guardar. Algunos países, como Líbano, niegan la entrada a quien tiene rastros de un viaje a Israel.",
        "A Cisjordania se entra desde Israel o desde Jordania, por pasos que controla Israel.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "La moneda es el shekel, en Israel y en Cisjordania. En Israel la tarjeta funciona en casi todos lados; en Cisjordania, conviene llevar efectivo.",
        "Hay cajeros en todas las ciudades. Israel es caro: comer afuera y dormir cuesta como en Europa occidental.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí shekels: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Mediterráneo y desierto",
      body: [
        "Es hemisferio norte. Tel Aviv y Haifa tienen veranos calurosos y húmedos e inviernos templados con lluvia.",
        "Jerusalén y Belén, a ochocientos metros, son más frescas, con noches frías en invierno y, algunos años, nieve.",
        "El mar Muerto, Jericó y Eilat son desierto: calor seco casi todo el año y casi nada de lluvia.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Marzo, abril, mayo, octubre y noviembre: templado en todo el territorio.",
        "En verano el desierto es muy caluroso y la playa, la mejor. En las grandes fiestas religiosas —Pascua, Semana Santa, Navidad— se llena todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "En Israel hay trenes y buses entre las ciudades, con una tarjeta recargable. Entre Tel Aviv y Jerusalén, menos de una hora en tren.",
        "Durante el Shabat casi no hay transporte público: quedan taxis y los sherut, minibuses compartidos que siguen algunas rutas.",
        "A Belén y Jericó se llega en buses palestinos o en taxi desde Jerusalén, cruzando controles.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a parte del territorio, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Gaza está cerrada a los viajeros. Los controles entre Israel y Cisjordania pueden cerrarse sin aviso: llevá siempre el pasaporte y la tarjeta de entrada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Jerusalén, Belén, Nazaret, Masada y Jericó: miles de años de historia en un territorio chico.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Hummus, falafel, mercados enormes y una cocina mediterránea muy variada.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "El desierto de Judea, el mar Muerto, el mar de Galilea y el Néguev.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Tel Aviv sobre el Mediterráneo y Eilat sobre el mar Rojo, con coral.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "Israel es caro; Cisjordania, bastante más barata.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Buen transporte, pero el Shabat lo frena y los controles demoran.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "El shekel es una moneda estable.",
    },
  ],

  shines: [
    "Historia y lugares sagrados en distancias cortas.",
    "La cocina.",
    "Mediterráneo, desierto y mar Rojo en pocas horas.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Caro, sobre todo en Israel.",
    "El Shabat y los controles cambian los horarios.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Jerusalén que el mar Muerto o Eilat. Los precios están en shekels y son órdenes de magnitud; en Belén y Jericó, más bajos.",

  places: [
    {
      id: "jerusalen",
      name: "Jerusalén",
      region: "Jerusalén",
      tag: "La Ciudad Vieja",
      blurb:
        "Los cuatro barrios de la Ciudad Vieja, el Muro de los Lamentos, el Santo Sepulcro, la Explanada de las Mezquitas y el mercado de Mahane Yehuda. Es la base del planificador: veranos secos, inviernos frescos con lluvia.",
      coords: [31.7683, 35.2137],
      featured: true,
      image: null,
    },
    {
      id: "tel-aviv",
      name: "Tel Aviv-Yafo",
      region: "Tel Aviv",
      tag: "Playa y Bauhaus",
      blurb:
        "La Ciudad Blanca de edificios Bauhaus, patrimonio de la humanidad, playas sobre el Mediterráneo, el viejo puerto de Yafo y vida nocturna.",
      coords: [32.0853, 34.7818],
      image: null,
    },
    {
      id: "belen",
      name: "Belén",
      region: "Cisjordania",
      tag: "La Natividad",
      blurb:
        "La basílica de la Natividad, patrimonio de la humanidad, la plaza del Pesebre y un casco antiguo de piedra, a media hora de Jerusalén cruzando un control.",
      coords: [31.7054, 35.2024],
      image: null,
    },
    {
      id: "jerico",
      name: "Jericó",
      region: "Cisjordania",
      tag: "Una de las ciudades más antiguas",
      blurb:
        "Un oasis en el valle del Jordán, bajo el nivel del mar, con el tell de la antigua Jericó y el palacio de Hisham. Caluroso casi todo el año.",
      coords: [31.8667, 35.45],
      image: null,
    },
    {
      id: "haifa",
      name: "Haifa",
      region: "Haifa",
      tag: "Los jardines bahaíes",
      blurb:
        "Los jardines bahaíes en terrazas sobre el monte Carmelo, patrimonio de la humanidad, y cerca, la ciudad amurallada de Akko.",
      coords: [32.794, 34.9896],
      image: null,
    },
    {
      id: "nazaret",
      name: "Nazaret",
      region: "Norte",
      tag: "La Anunciación",
      blurb:
        "La basílica de la Anunciación, un mercado antiguo y la puerta a Galilea.",
      coords: [32.6996, 35.3035],
      image: null,
    },
    {
      id: "mar-muerto",
      name: "Mar Muerto (Ein Bokek)",
      region: "Sur",
      tag: "Flotar en el punto más bajo",
      blurb:
        "Hoteles junto al mar donde se flota sin esfuerzo, el oasis de Ein Gedi y la fortaleza de Masada, patrimonio de la humanidad. Calor seco casi todo el año.",
      coords: [31.2, 35.3625],
      image: null,
    },
    {
      id: "eilat",
      name: "Eilat",
      region: "Sur",
      tag: "El mar Rojo",
      blurb:
        "La punta sur, sobre el mar Rojo, con arrecifes de coral para snorkel y buceo y el desierto alrededor. Calurosa casi todo el año.",
      coords: [29.5577, 34.9519],
      image: null,
    },
    {
      id: "tiberiades",
      name: "Tiberíades (mar de Galilea)",
      region: "Norte",
      tag: "El lago de Galilea",
      blurb:
        "Una ciudad junto al lago, cerca de Cafarnaúm y el monte de las Bienaventuranzas. Bajo el nivel del mar: calurosa en verano.",
      coords: [32.7959, 35.531],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Israel y Palestina dependen de la estación. En primavera y otoño, ropa liviana y un buzo para las noches de Jerusalén. En verano, ropa liviana, sombrero y protector, y traje de baño para el mar. En invierno, campera para Jerusalén y paraguas. Siempre, algo que cubra hombros y rodillas para los lugares sagrados, el pasaporte encima y un plan para el Shabat.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Hemisferio norte: lo mejor es primavera y otoño.",
      "Durante el Shabat casi no hay transporte público.",
      "En los lugares sagrados, hombros y rodillas cubiertos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y agua para el desierto y el mar, y traje de baño. Para los lugares sagrados, algo que cubra.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época.",
      fresco:
        "Capas, un polar y una campera para Jerusalén y Belén en invierno.",
      frio: "Campera de abrigo y paraguas para las noches de enero en Jerusalén, que pueden bajar de cinco grados.",
    },
    plug: {
      types: "Tipo H y tipo C",
      voltage: "230 V, 50 Hz",
      note: "El tipo H es propio de Israel, de tres patas; en la mayoría entra también el de dos patas redondas finas. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Guardá la tarjeta de entrada",
          body: "Israel no sella el pasaporte: esa tarjeta es la prueba de tu entrada, y la piden en hoteles y controles.",
        },
        {
          title: "Planeá el Shabat",
          body: "Del atardecer del viernes a la noche del sábado casi no hay buses ni trenes. Es buen momento para la Ciudad Vieja o la playa.",
        },
        {
          title: "Vestite para los lugares sagrados",
          body: "Hombros y rodillas cubiertos en iglesias, sinagogas y mezquitas.",
        },
        {
          title: "Andá temprano al mar Muerto",
          body: "El calor del mediodía es fuerte, y la sal arde en cualquier herida: nada de afeitarse ese día.",
        },
        {
          title: "Elegí pagar en shekels",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No cruces a Cisjordania sin el pasaporte",
          body: "Los controles lo piden, a la ida y a la vuelta.",
        },
        {
          title: "No metas la cabeza en el mar Muerto",
          body: "El agua es tan salada que arde en los ojos.",
        },
        {
          title: "No fotografíes controles ni soldados",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No discutas de política a la ligera",
          body: "Es un tema doloroso para todos. Escuchá más de lo que opinás.",
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
          title: "Recomendación de viaje, seguro y entrada",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro y si tu pasaporte necesita la autorización electrónica o visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino",
          "Pasaporte con vigencia de sobra",
          "Autorización electrónica o visa",
        ],
      },
      {
        id: "lugares-sagrados",
        title: "Lugares sagrados",
        notice: {
          tone: "info",
          title: "Hombros y rodillas cubiertos",
          body: "En iglesias, sinagogas y mezquitas. En algunas, las mujeres se cubren el pelo.",
        },
        summary: "Para entrar sin problemas",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo",
          "Calzado cómodo para la piedra",
        ],
      },
      {
        id: "desierto",
        title: "Para el desierto y el mar",
        notice: null,
        summary: "Lo que pide el sur",
        items: [
          "Sombrero y anteojos de sol",
          "Protector solar",
          "Ojotas para el mar Muerto",
          "Una botella reutilizable",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación para el calor",
          "Protector solar y labial",
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
        leave: "Tirar la tarjeta de entrada",
        why: "Es la prueba de tu entrada, y la piden.",
        instead: "Guardarla con el pasaporte.",
      },
      {
        leave: "Planes que dependen del bus en Shabat",
        why: "Del viernes a la tarde al sábado a la noche casi no hay transporte.",
        instead: "Taxi, sherut o un día a pie.",
      },
      {
        leave: "Ropa corta para la Ciudad Vieja",
        why: "En los lugares sagrados se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "Jerusalén es fresca y lluviosa de diciembre a febrero.",
        instead: "Un buzo y una campera.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro y las reglas de entrada para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Israel?",
        answer:
          "Muchos pasaportes latinoamericanos no, pero tramitan antes una autorización electrónica online. Otros necesitan visa. Verificá el tuyo.",
      },
      {
        question: "¿Puedo visitar Belén y Jericó?",
        answer:
          "Sí, desde Jerusalén, en bus palestino o taxi, cruzando controles. Llevá el pasaporte y la tarjeta de entrada.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "Primavera y otoño. En verano el desierto es muy caluroso.",
      },
      {
        question: "¿Qué pasa en el Shabat?",
        answer:
          "Del atardecer del viernes a la noche del sábado casi no hay transporte público en Israel y muchos negocios cierran.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: se usan los tipos H y C a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "En Israel sí. En Cisjordania, mejor embotellada.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, en restaurantes alrededor del diez al quince por ciento, si no está incluida.",
      },
    ],
  },
};
