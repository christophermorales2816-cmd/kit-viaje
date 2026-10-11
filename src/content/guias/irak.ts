import type { DestinationGuide } from "./types";

/**
 * Guía de Irak.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro, sin describir
 * la situación, que cambia más rápido que esta guía.
 *
 * Lo que este país aporta: Mesopotamia —Babilonia, Ur, las marismas— y uno de
 * los veranos más calurosos del planificador. El Kurdistán, en el norte, tiene
 * sus propias reglas de entrada y un clima más fresco.
 */
export const irak: DestinationGuide = {
  slug: "irak",
  country: "Irak",
  subregion: "Asia Occidental",
  subhead:
    "La tierra entre dos ríos: Babilonia, el zigurat de Ur, las marismas de los árabes de los pantanos, las ciudades santas de Nayaf y Kerbala, y la ciudadela de Erbil, habitada desde hace milenios.",

  image: null,

  highlights: [
    {
      value: "+45 °C",
      label: "en Bagdad y Basora en julio y agosto",
      note: "Uno de los veranos más calurosos del mundo. De noviembre a marzo, en cambio, el clima es templado.",
    },
    {
      value: "Babilonia",
      label: "la ciudad de Hammurabi y Nabucodonosor",
      note: "Las ruinas de una de las grandes ciudades de la Antigüedad, a orillas del Éufrates, patrimonio de la humanidad.",
    },
    {
      value: "Marismas",
      label: "casas de juncos en el delta de los dos ríos",
      note: "Búfalos de agua, canoas y casas de caña en el sur, donde el Tigris y el Éufrates se juntan. Patrimonio de la humanidad.",
    },
    {
      value: "Masgouf",
      label: "la carpa asada a la leña",
      note: "El plato de Bagdad: pescado de río abierto y asado junto al fuego, con pan y encurtidos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Irak",
      body: [
        "Varios pasaportes sacan la visa online o a la llegada en los aeropuertos; otros la tramitan antes en un consulado. El Kurdistán, en el norte, tiene sus propias reglas. Verificá el tuyo antes de comprar el pasaje.",
        "Si tu pasaporte entra a Estados Unidos con autorización electrónica, como el chileno, haber estado en Irak te saca de ese programa y vas a necesitar visa.",
        "El pasaporte tiene que tener vigencia de sobra.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Irak",
      body: [
        "La moneda es el dinar iraquí. El efectivo manda: la tarjeta funciona en pocos hoteles de Bagdad y Erbil.",
        "Los dólares en efectivo, en billetes nuevos, se aceptan para pagos grandes y se cambian en casas de cambio.",
        "Hay pocos cajeros que acepten tarjetas extranjeras: llevá el efectivo del viaje.",
      ],
    },
    {
      id: "clima",
      title: "Desierto y dos ríos",
      body: [
        "Irak es hemisferio norte. Bagdad, Babilonia y el sur tienen inviernos templados y veranos de calor extremo, con más de cuarenta y cinco grados en julio y agosto y tormentas de polvo.",
        "El Kurdistán, con Erbil y Sulaimaniya, es más alto: inviernos fríos y lluviosos y veranos calurosos.",
        "Casi no llueve de mayo a octubre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: días templados para recorrer las ruinas y las ciudades.",
        "En las grandes peregrinaciones a Kerbala y Nayaf llegan millones de personas: conviene saber las fechas, que siguen el calendario lunar.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Irak",
      body: [
        "Entre ciudades, autos con chofer, taxis compartidos y algunos vuelos internos. Muchos viajeros contratan un operador local.",
        "En Bagdad y Erbil hay taxis por app.",
        "En las rutas hay controles frecuentes: llevá el pasaporte y la visa siempre encima.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a todo o a parte de Irak, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son las de los viajes organizados habituales. Con un operador local conocido, que maneje los controles y las rutas, todo es más simple.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Mesopotamia: Babilonia, Ur, la ciudadela de Erbil y las ciudades santas.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Masgouf, kubba, dolma, kahi con crema y té por todos lados.",
    },
    {
      dimension: "Paisaje",
      score: 5,
      rationale:
        "Desierto, palmerales, las marismas del sur y montañas en el Kurdistán.",
    },
    {
      dimension: "Playas",
      score: 1,
      rationale: "Casi no tiene costa.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale: "Comer sale poco; el operador y los traslados encarecen.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale:
        "Controles en las rutas, poco turismo organizado y casi todo en efectivo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "El dinar tiene una cotización oficial y otra de mercado algo distintas.",
    },
  ],

  shines: [
    "Mesopotamia, casi sin turistas.",
    "La hospitalidad.",
    "Las marismas del sur.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "El calor extremo del verano.",
    "Casi todo en efectivo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Bagdad que Sulaimaniya, en las montañas del norte. Los precios están en dinares iraquíes y son órdenes de magnitud.",

  places: [
    {
      id: "bagdad",
      name: "Bagdad",
      region: "Bagdad",
      tag: "La capital sobre el Tigris",
      blurb:
        "La calle de los libreros de Al-Mutanabbi, el museo de Irak, la mezquita de Kadhimiya y cafés a orillas del Tigris. Es la base del planificador: inviernos templados, veranos de calor extremo.",
      coords: [33.3152, 44.3661],
      featured: true,
      image: null,
    },
    {
      id: "erbil",
      name: "Erbil",
      region: "Kurdistán",
      tag: "La ciudadela habitada",
      blurb:
        "Una ciudadela sobre una colina, habitada desde hace milenios y patrimonio de la humanidad, con un gran bazar a sus pies. Más fresca en invierno.",
      coords: [36.1911, 44.0092],
      image: null,
    },
    {
      id: "babilonia",
      name: "Babilonia (Hilla)",
      region: "Babil",
      tag: "La gran ciudad antigua",
      blurb:
        "Las ruinas de Babilonia, con una réplica de la puerta de Ishtar y el palacio de Nabucodonosor, patrimonio de la humanidad. Muy caluroso en verano.",
      coords: [32.5422, 44.4211],
      image: null,
    },
    {
      id: "nayaf",
      name: "Nayaf",
      region: "Nayaf",
      tag: "Ciudad santa",
      blurb:
        "El santuario del imán Alí, de cúpula dorada, uno de los lugares más sagrados del islam chiita, y uno de los cementerios más grandes del mundo.",
      coords: [32.0, 44.3333],
      image: null,
    },
    {
      id: "kerbala",
      name: "Kerbala",
      region: "Kerbala",
      tag: "Ciudad santa",
      blurb:
        "Los santuarios del imán Husein y de Abbás, centro de grandes peregrinaciones. Las mujeres entran con abaya.",
      coords: [32.6149, 44.0245],
      image: null,
    },
    {
      id: "basora",
      name: "Basora",
      region: "Basora",
      tag: "Palmeras y canales",
      blurb:
        "La ciudad del sur, sobre el Shatt al-Arab, donde se juntan el Tigris y el Éufrates, entre palmerales. De lo más caluroso del país.",
      coords: [30.5085, 47.7804],
      image: null,
    },
    {
      id: "marismas",
      name: "Marismas de Chibayish",
      region: "Di Qar",
      tag: "Los árabes de los pantanos",
      blurb:
        "Canales entre juncos, búfalos de agua y casas de caña de los árabes de los pantanos, que se recorren en canoa. Patrimonio de la humanidad.",
      coords: [30.95, 47.03],
      image: null,
    },
    {
      id: "ur",
      name: "Ur (Nasiriya)",
      region: "Di Qar",
      tag: "El zigurat",
      blurb:
        "El zigurat de Ur, de más de cuatro mil años, y las ruinas de una de las primeras ciudades del mundo, en pleno desierto.",
      coords: [30.9625, 46.1031],
      image: null,
    },
    {
      id: "sulaimaniya",
      name: "Sulaimaniya",
      region: "Kurdistán",
      tag: "La ciudad cultural kurda",
      blurb:
        "Una ciudad entre montañas, con bazares, museos y vida cultural, más fresca que el sur. Inviernos fríos y lluviosos.",
      coords: [35.5613, 45.4329],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Irak depende de la estación y de la zona. De noviembre a marzo, ropa liviana que cubra y un abrigo para las noches, que en el Kurdistán son frías. En verano, ropa liviana y holgada, sombrero y protector. Siempre, ropa discreta, una abaya o pañuelo para las mujeres en las ciudades santas, efectivo para todo el viaje y el pasaporte encima.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Hemisferio norte: lo mejor es de noviembre a marzo.",
      "Efectivo para todo: casi no funcionan las tarjetas extranjeras.",
      "Ropa discreta; en las ciudades santas, abaya para las mujeres.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, protector y mucha agua: el verano de Bagdad y el sur es extremo.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno del sur, la mejor época.",
      fresco:
        "Capas, un polar y una campera para el Kurdistán y para las noches de invierno.",
      frio: "Campera de abrigo para Erbil y Sulaimaniya en enero, con frío y lluvia.",
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
          title: "Viajá con un operador local",
          body: "Conoce los controles, las rutas y las reglas de cada lugar.",
        },
        {
          title: "Llevá el pasaporte siempre encima",
          body: "En las rutas hay controles frecuentes.",
        },
        {
          title: "Vestite con discreción",
          body: "Hombros y piernas cubiertos. En Nayaf y Kerbala, las mujeres entran a los santuarios con abaya.",
        },
        {
          title: "Llevá dólares nuevos",
          body: "En billetes sanos, para cambiar y para los pagos grandes.",
        },
        {
          title: "Aceptá el té",
          body: "Viene en vaso chico y muy dulce, y es la forma de recibir.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No fotografíes controles ni edificios oficiales",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Casi no funcionan las extranjeras: llevá efectivo.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Irak y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino",
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "info",
          title: "Dólares nuevos",
          body: "Casi no funcionan las tarjetas extranjeras. Llevá dólares en billetes sanos y cambialos en casas de cambio.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares en billetes nuevos",
          "Dinares en billetes chicos para el día a día",
          "Una riñonera o bolsillo interno",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para los santuarios y la calle",
        items: [
          "Ropa que cubra brazos y piernas",
          "Una abaya o pañuelo para las mujeres",
          "Calzado fácil de sacar",
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
          "Algo para el estómago",
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
        leave: "Solo la tarjeta",
        why: "Casi no funcionan las extranjeras.",
        instead: "Dólares nuevos en efectivo.",
      },
      {
        leave: "Ropa corta",
        why: "En la calle y en los santuarios se cubren brazos y piernas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Viajar en verano sin plan",
        why: "El calor pasa los cuarenta y cinco grados.",
        instead: "De noviembre a marzo.",
      },
      {
        leave: "Billetes viejos o marcados",
        why: "Las casas de cambio los rechazan.",
        instead: "Dólares nuevos y sanos.",
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
          "La recomendación de viaje de tu país, qué cubre tu seguro en Irak y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Irak?",
        answer:
          "Varios pasaportes la sacan online o a la llegada; el Kurdistán tiene reglas propias. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De noviembre a marzo. En verano el calor es extremo.",
      },
      {
        question: "¿Cómo me tengo que vestir?",
        answer:
          "Con ropa que cubra brazos y piernas. En las ciudades santas, las mujeres entran a los santuarios con abaya.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Irak usa los tipos C, D y G a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "En efectivo, en dinares o en dólares nuevos. Las tarjetas extranjeras casi no funcionan.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada.",
      },
      {
        question: "¿Afecta un viaje a Irak mi entrada a Estados Unidos?",
        answer:
          "Si tu pasaporte entra con autorización electrónica, como el chileno, sí: vas a necesitar visa.",
      },
    ],
  },
};
