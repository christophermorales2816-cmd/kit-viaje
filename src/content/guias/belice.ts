import type { DestinationGuide } from "./types";

/**
 * Guía de Belice.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Entra con aviso, como Pakistán (spec, 14.2 y 22): varios gobiernos piden
 * reconsiderar el viaje al sur de Ciudad de Belice, aunque no al resto del
 * país. Ninguna ciudad del planificador está en Ciudad de Belice: se pasa
 * por ahí para el avión o el taxi acuático, y los destinos están en los
 * cayos, la selva y el sur.
 *
 * La base no es la capital, Belmopán, sino San Pedro, en el cayo Ambergris,
 * por la misma razón que Antigua en Guatemala (spec, 13.5): es donde duerme
 * la mayoría de los viajeros, y calcular con la capital habría sido
 * planificar para el lugar equivocado.
 *
 * Lo que este país aporta: el primer dólar con paridad fija del sitio. Dos
 * dólares de Belice valen uno estadounidense desde hace décadas, y los dos
 * circulan juntos; el precio de la etiqueta puede estar en cualquiera de los
 * dos. La guía lo dice, y los precios del planificador van en BZD.
 */
export const belice: DestinationGuide = {
  slug: "belice",
  country: "Belice",
  subregion: "México y Centroamérica",
  subhead:
    "La segunda barrera de coral más grande del mundo, cayos de agua turquesa, ruinas mayas en la selva y cuevas sagradas. Calor todo el año, con temporada de lluvias.",

  image: null,

  highlights: [
    {
      value: "300 km",
      label: "de barrera de coral",
      note: "La segunda más grande del mundo, con el Gran Agujero Azul en el medio.",
    },
    {
      value: "Inglés",
      label: "idioma oficial",
      note: "El único país de Centroamérica con el inglés como idioma oficial. El español se habla mucho, sobre todo en el norte y el oeste.",
    },
    {
      value: "2 = 1",
      label: "dólares de Belice por dólar",
      note: "La paridad es fija, y el dólar estadounidense se acepta en todos lados.",
    },
    {
      value: "Jun–Nov",
      label: "lluvias y huracanes",
      note: "De diciembre a abril es la época seca. El sur es mucho más lluvioso que el norte.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "Si llegas desde un país con riesgo de fiebre amarilla, o pasaste más de doce horas en el aeropuerto de uno, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
        "Al salir del país por tierra o por mar se paga una tasa de salida, en efectivo. Por avión ya viene incluida en el pasaje.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Dos dólares de Belice valen uno estadounidense, por paridad fija, y los dos circulan juntos. Los precios pueden estar en cualquiera de los dos: pregunta siempre cuál.",
        "El cambio suele llegar en dólares de Belice. La tarjeta funciona en hoteles y con los operadores de excursiones, a veces con recargo; para mercados, buses y comida de la calle, efectivo.",
        "A la cuenta se le suma el impuesto, y en los hoteles, uno propio. La propina, de un 10 a un 15 %, es costumbre si no viene incluida.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la estación seca, con el mar más calmo y la mejor visibilidad para bucear.",
        "De junio a noviembre llueve más, sobre todo de tarde, y es la temporada de huracanes, con el pico entre agosto y octubre. El sur, en Toledo, es mucho más lluvioso que el norte.",
        "De marzo a junio, alrededor de la luna llena, los tiburones ballena pasan frente a Placencia.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Ciudad de Belice es el punto de paso: ahí está el aeropuerto internacional y de ahí salen los taxis acuáticos a los cayos.",
        "Avionetas de línea unen los cayos, Placencia y el sur en minutos. Los buses, muchos de ellos viejos buses escolares, son baratos y llegan a todos los pueblos.",
        "En el cayo Ambergris se anda a pie, en bicicleta o en carrito de golf. En tierra firme, las rutas principales están asfaltadas.",
      ],
    },
    {
      id: "arrecife-y-selva",
      title: "Arrecife, ruinas y cuevas",
      body: [
        "El arrecife se recorre con operadores con licencia: la reserva de Hol Chan, frente a San Pedro, y el Gran Agujero Azul, para buceo avanzado.",
        "Las ruinas mayas de Xunantunich, Caracol y Lamanai están en la selva, y la cueva de Actun Tunichil Muknal solo se visita con guía autorizado.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisa la recomendación de viaje de tu propio país: varios gobiernos piden reconsiderar el viaje al sur de Ciudad de Belice, y la situación cambia.",
        "Fíjate también qué cubre tu seguro, y que incluya traslado médico: los hospitales de los cayos y del sur son básicos.",
        "Ninguna ciudad del planificador está en Ciudad de Belice: se pasa por ahí para el avión o el taxi acuático. En el resto del país, las precauciones son las de siempre.",
        "El agua corriente no es para tomar. Agua embotellada o filtrada, que se consigue en todos lados.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["911"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Arrecife y buceo",
      score: 10,
      rationale:
        "La barrera de coral, Hol Chan, el Gran Agujero Azul y los tiburones ballena de Placencia.",
    },
    {
      dimension: "Ruinas mayas",
      score: 9,
      rationale:
        "Caracol, Xunantunich y Lamanai, en medio de la selva y casi sin multitud.",
    },
    {
      dimension: "Selva y naturaleza",
      score: 9,
      rationale:
        "Cuevas sagradas, ríos, el santuario de jaguares de Cockscomb y los pinares de Mountain Pine Ridge.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Los cayos tienen agua turquesa pero poca arena; las mejores playas están en Placencia y Hopkins.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Barato en lo local y caro en los cayos y en las excursiones, que se cobran en dólares.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Un país chico, con avionetas y taxis acuáticos, aunque casi todo pasa por Ciudad de Belice.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además circula en todos lados.",
    },
  ],

  shines: [
    "El arrecife: bucear y hacer snorkel entre los mejores del mundo.",
    "Ruinas mayas en la selva, casi sin multitud.",
    "Un país chico donde la selva y el mar están a una hora.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "La temporada de lluvias y huracanes, de junio a noviembre.",
    "Los cayos y las excursiones, caros y en dólares.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: Punta Gorda en julio no pide lo mismo que San Pedro en marzo. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares de Belice.",

  places: [
    {
      id: "san-pedro",
      name: "San Pedro (cayo Ambergris)",
      region: "Cayos",
      tag: "Arrecife",
      blurb:
        "El cayo más grande, frente a la barrera de coral, con la reserva de Hol Chan a minutos en lancha. Se anda en bicicleta o en carrito de golf. Es la base del planificador.",
      coords: [17.9214, -87.9611],
      featured: true,
      image: null,
    },
    {
      id: "cayo-caulker",
      name: "Cayo Caulker",
      region: "Cayos",
      tag: "Sin apuro",
      blurb:
        "Un cayo chico y sin autos, con el lema de ir despacio. Snorkel con tiburones gata y mantarrayas, y más barato que San Pedro.",
      coords: [17.7425, -88.0247],
      image: null,
    },
    {
      id: "san-ignacio",
      name: "San Ignacio",
      region: "Oeste",
      tag: "Ruinas y cuevas",
      blurb:
        "La base para Xunantunich, Caracol y la cueva de Actun Tunichil Muknal, en la selva del oeste, cerca de Guatemala.",
      coords: [17.1561, -89.0714],
      image: null,
    },
    {
      id: "mountain-pine-ridge",
      name: "Mountain Pine Ridge",
      region: "Oeste",
      tag: "Pinares y cascadas",
      blurb:
        "Una meseta de pinos con cascadas y pozas, en el camino a Caracol. Las noches de invierno son frescas, una rareza en Belice.",
      coords: [16.95, -88.95],
      image: null,
    },
    {
      id: "belmopan",
      name: "Belmopán",
      region: "Centro",
      tag: "Capital y cuevas",
      blurb:
        "La capital, chica y tranquila, cerca de la ruta del colibrí y de las pozas y cuevas del parque St. Herman's Blue Hole.",
      coords: [17.251, -88.759],
      image: null,
    },
    {
      id: "orange-walk",
      name: "Orange Walk y Lamanai",
      region: "Norte",
      tag: "Ruinas en el río",
      blurb:
        "El punto de partida del paseo en lancha por el río Nuevo hasta Lamanai, una ciudad maya entre la selva, con cocodrilos y aves en el camino.",
      coords: [18.0812, -88.5594],
      image: null,
    },
    {
      id: "hopkins",
      name: "Hopkins",
      region: "Sur",
      tag: "Cultura garífuna",
      blurb:
        "Un pueblo garífuna sobre la playa, con tambores y comida propia, cerca del santuario de jaguares de Cockscomb.",
      coords: [16.8556, -88.2797],
      image: null,
    },
    {
      id: "placencia",
      name: "Placencia",
      region: "Sur",
      tag: "Playa y tiburones ballena",
      blurb:
        "Una península de arena con las mejores playas del país. De marzo a junio, alrededor de la luna llena, pasan los tiburones ballena.",
      coords: [16.5146, -88.3669],
      image: null,
    },
    {
      id: "punta-gorda",
      name: "Punta Gorda",
      region: "Sur",
      tag: "Selva y pueblos mayas",
      blurb:
        "El extremo sur, el más lluvioso y remoto del país, con pueblos mayas, cacao, ríos y cayos casi vírgenes.",
      coords: [16.0989, -88.8081],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Belice es calor todo el año: ropa ligera que seque rápido, traje de baño, protector, repelente fuerte y calzado cerrado para la selva. En Mountain Pine Ridge las noches de invierno son frescas. De diciembre a abril es la época seca; de junio a noviembre, la de lluvias y huracanes, y el sur es el más lluvioso.",
    keyPoints: [
      "Antes de reservar, revisa la recomendación de viaje de tu país y tu seguro.",
      "Calor húmedo todo el año, con época seca de diciembre a abril.",
      "La selva pide repelente fuerte, manga larga ligera y calzado cerrado.",
      "La temporada de lluvias y huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera que seque rápido, traje de baño, protector y repelente. Es el clima de la costa, los cayos y la selva casi todo el año.",
      templado:
        "Camiseta y algo de manga larga para la noche. Es el invierno en el oeste y en Mountain Pine Ridge.",
      fresco: "Un suéter para las noches de invierno en Mountain Pine Ridge.",
      frio: "En Belice no hace frío de verdad: con un suéter alcanza para las madrugadas más frescas de la montaña.",
    },
    plug: {
      types: "Tipo A, tipo B y tipo G",
      voltage: "110 V y 220 V, 60 Hz",
      note: "Lo más común es el enchufe de clavijas planas a 110 V, pero también hay tomas británicas de tres patas. Revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Pregunta en qué dólares es el precio",
          body: "Puede estar en dólares de Belice o estadounidenses, y la diferencia es el doble.",
        },
        {
          title: "Lleva repelente fuerte",
          body: "En la selva y en la costa, al atardecer, hay mosquitos y jejenes. Hay dengue.",
        },
        {
          title: "Contrata guías y operadores con licencia",
          body: "Para el arrecife, las cuevas y las ruinas. Algunas visitas, como Actun Tunichil Muknal, solo se hacen con guía autorizado.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "El arrecife es la razón del viaje.",
        },
        {
          title: "Reserva con flexibilidad en la temporada de lluvias",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Que cubra este destino y un traslado médico.",
        },
        {
          title: "No te alojes en Ciudad de Belice sin necesidad",
          body: "Se pasa por ahí para el avión o el taxi acuático: los destinos están en los cayos, la selva y el sur.",
        },
        {
          title: "No toques el coral",
          body: "Ni lo pises: un roce lo daña, y algunos corales queman la piel.",
        },
        {
          title: "No tomes agua corriente",
          body: "Agua embotellada o filtrada, que se consigue en todos lados.",
        },
        {
          title: "No reserves en septiembre sin seguro",
          body: "Es el pico de la temporada de huracanes.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
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
          body: "Revisa la recomendación de viaje de tu país, qué cubre tu seguro en Belice y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro con cobertura médica y traslado",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Efectivo para la tasa de salida, si te vas por tierra o por mar",
        ],
      },
      {
        id: "arrecife",
        title: "Arrecife y mar",
        notice: {
          tone: "info",
          title: "El coral no se toca",
          body: "Ni se pisa: un roce lo daña. El protector solar común también.",
        },
        summary: "Para los cayos y el arrecife",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Bolsa impermeable para el teléfono",
          "Certificado de buceo, si vas a bucear",
        ],
      },
      {
        id: "selva",
        title: "Selva y cuevas",
        notice: {
          tone: "info",
          title: "Calzado cerrado",
          body: "En la selva y en las cuevas se camina por barro, raíces y agua.",
        },
        summary: "Para el oeste, las ruinas y el sur",
        items: [
          "Calzado cerrado que se pueda mojar",
          "Pantalón y camisa de manga larga, ligeros",
          "Repelente fuerte",
          "Linterna frontal",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos: hay dengue",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Crema para picaduras",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal: hay tomas de clavijas planas y británicas",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
          "Chaleco salvavidas a su medida para las lanchas, si el operador no tiene",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Abrigo pesado",
        why: "En Belice no hay un mes frío.",
        instead: "Un suéter para las noches de la montaña.",
      },
      {
        leave: "Sandalias para la selva",
        why: "En las ruinas y las cuevas se camina por barro, raíces y agua.",
        instead: "Calzado cerrado que se pueda mojar.",
      },
      {
        leave: "Billetes grandes de dólar",
        why: "En lo local cuesta cambiarlos, y el cambio llega en dólares de Belice.",
        instead: "Billetes chicos o dólares de Belice.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan, y no se secan.",
        instead: "Pantalones ligeros que sequen rápido.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Belice y las reglas de entrada para tu pasaporte.",
      },
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en todos lados: dos dólares de Belice valen uno estadounidense. Pregunta en qué moneda está cada precio, y cuenta con recibir el cambio en dólares de Belice.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Sí, mucho, sobre todo en el norte y el oeste. El idioma oficial es el inglés, y en la costa se escucha también el criollo de Belice.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la estación seca, con el mar más calmo para bucear.",
      },
      {
        question: "¿Cuándo se ven los tiburones ballena?",
        answer:
          "De marzo a junio, alrededor de la luna llena, frente a Placencia. Se va con operadores con licencia.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "No. Agua embotellada o filtrada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Conviene uno universal: hay tomas de clavijas planas a 110 V y británicas a 220 V. Revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
