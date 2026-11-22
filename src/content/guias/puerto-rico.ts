import type { DestinationGuide } from "./types";

/**
 * Guía de Puerto Rico.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Puerto Rico no cumple el criterio de 16.2: comparte moneda y frontera con
 * Estados Unidos, como Hawái. Entra igual, como destino propio (spec, 22.8),
 * porque se viaja a él como a un país del Caribe, y en español. La guía dice
 * la regla que importa: para entrar valen las de Estados Unidos.
 *
 * Lo que este país aporta: el único destino del Caribe con la entrada de
 * Estados Unidos, y una medida que confunde a todos: las carreteras marcan
 * kilómetros, las velocidades van en millas y la gasolina se vende por litro.
 */
export const puertoRico: DestinationGuide = {
  slug: "puerto-rico",
  country: "Puerto Rico",
  subregion: "Caribe",
  subhead:
    "El Viejo San Juan, el bosque de El Yunque, bahías que brillan de noche y playas en Culebra y Vieques. El Caribe en español, con las reglas de entrada de Estados Unidos.",

  image: null,

  highlights: [
    {
      value: "3",
      label: "bahías bioluminiscentes",
      note: "El agua brilla de noche al moverla. La de Vieques es de las más brillantes del mundo.",
    },
    {
      value: "Español",
      label: "y también inglés",
      note: "Los dos son oficiales, pero en la calle se vive en español.",
    },
    {
      value: "ESTA o visa",
      label: "si no vienes de Estados Unidos",
      note: "Puerto Rico es territorio de Estados Unidos: para entrar valen sus reglas.",
    },
    {
      value: "Jun–Nov",
      label: "temporada de huracanes",
      note: "Con el pico entre agosto y octubre. De diciembre a abril es la temporada alta.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Puerto Rico es territorio de Estados Unidos: quien llega desde otro país necesita lo mismo que para entrar a Estados Unidos, la ESTA o una visa, según el pasaporte. Algunas nacionalidades tienen la entrada restringida: verifica la tuya.",
        "Desde el territorio continental de Estados Unidos es un vuelo nacional: no hay control de migración.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Con dólares estadounidenses. La tarjeta funciona casi en todos lados; para los kioscos de playa y los puestos de comida, efectivo.",
        "El impuesto a las ventas se suma en la caja, como en Estados Unidos. En restaurantes con mesero se deja entre un 15 y un 20 % de propina, salvo que la cuenta ya la incluya.",
      ],
    },
    {
      id: "bahias",
      title: "Las bahías que brillan",
      body: [
        "En tres bahías de la isla, un plancton microscópico hace brillar el agua cuando se mueve: Mosquito Bay, en Vieques, la Laguna Grande de Fajardo y La Parguera, en el suroeste.",
        "Se recorren de noche en kayak o en bote, con operadores autorizados. Se ven mejor sin luna, y en Mosquito Bay no se puede nadar.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a abril es la temporada alta: seca, con brisa y precios más altos. De mayo a noviembre hace más calor y llueve en chaparrones.",
        "La temporada de huracanes va de junio a noviembre, con el pico entre agosto y octubre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Fuera de San Juan hace falta un auto: el transporte público es escaso. En el área metropolitana hay aplicaciones de transporte y taxis.",
        "Las carreteras marcan kilómetros, pero las velocidades máximas van en millas por hora, y la gasolina se vende por litro.",
        "A Vieques y Culebra se llega en ferry desde Ceiba o en avioneta. Los ferries se llenan y dan prioridad a los residentes: si puedes, vuela.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en zonas concurridas y cuidado de noche en barrios que no conoces.",
        "Los cortes de luz son frecuentes. Una batería portátil y una linterna ayudan.",
        "El agua corriente es potable. Después de un huracán, mejor embotellada.",
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
      dimension: "Playas",
      score: 9,
      rationale:
        "Flamenco, en Culebra, las de Vieques y la costa oeste para el surf.",
    },
    {
      dimension: "Historia",
      score: 8.5,
      rationale:
        "El Viejo San Juan, con el Morro y San Cristóbal, patrimonio de la UNESCO.",
    },
    {
      dimension: "Naturaleza",
      score: 9,
      rationale:
        "El bosque de El Yunque, las bahías bioluminiscentes y las cuevas de Camuy.",
    },
    {
      dimension: "Comida y música",
      score: 9,
      rationale:
        "El mofongo, el lechón de Guavate y una isla que vive la salsa y el reguetón.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Precios de Estados Unidos en hoteles; la comida local es más barata.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Vuelos directos desde muchas ciudades y todo en español, pero hace falta auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "Es el dólar. Solo hay que sumar el impuesto y la propina.",
    },
  ],

  shines: [
    "El Caribe en español, con una ciudad colonial que se camina.",
    "Bahías que brillan de noche.",
    "Bosque tropical, playa y surf en una isla pequeña.",
  ],

  costs: [
    "La entrada: ESTA o visa, como para Estados Unidos.",
    "Hace falta auto fuera de San Juan.",
    "La temporada de huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: la cordillera central no pide lo mismo que la playa de Culebra. Los precios son órdenes de magnitud, no cotizaciones, y no incluyen el impuesto a las ventas.",

  places: [
    {
      id: "san-juan",
      name: "San Juan",
      region: "Norte",
      tag: "Ciudad colonial",
      blurb:
        "El Viejo San Juan, con sus calles de colores, el Morro y la vida de Condado y Santurce. Es la base del planificador.",
      coords: [18.4655, -66.1057],
      featured: true,
      image: null,
    },
    {
      id: "el-yunque",
      name: "El Yunque",
      region: "Este",
      tag: "Bosque tropical",
      blurb:
        "El bosque tropical de montaña, con cascadas, senderos y torres de observación. Más fresco y lluvioso que la costa.",
      coords: [18.2957, -65.7848],
      image: null,
    },
    {
      id: "fajardo",
      name: "Fajardo",
      region: "Este",
      tag: "Bahía que brilla",
      blurb:
        "El puerto del este, con la Laguna Grande bioluminiscente, catamaranes a los cayos y la salida a las islas.",
      coords: [18.3258, -65.6524],
      image: null,
    },
    {
      id: "culebra",
      name: "Culebra",
      region: "Islas",
      tag: "Playa Flamenco",
      blurb:
        "Una isla pequeña con la playa Flamenco, de las más bonitas del Caribe, y snorkel con tortugas en Tamarindo.",
      coords: [18.3031, -65.3011],
      image: null,
    },
    {
      id: "vieques",
      name: "Vieques",
      region: "Islas",
      tag: "Bahía de Mosquito",
      blurb:
        "Una isla de caballos sueltos, playas vacías y Mosquito Bay, una de las bahías bioluminiscentes más brillantes del mundo.",
      coords: [18.1263, -65.44],
      image: null,
    },
    {
      id: "ponce",
      name: "Ponce",
      region: "Sur",
      tag: "Ciudad señorial",
      blurb:
        "La ciudad del sur, con su parque de bombas rojo y negro, el museo de arte y un clima más seco.",
      coords: [18.0111, -66.6141],
      image: null,
    },
    {
      id: "cabo-rojo",
      name: "Cabo Rojo",
      region: "Suroeste",
      tag: "Faro y salinas",
      blurb:
        "El extremo suroeste, con el faro sobre acantilados, las salinas y la bahía bioluminiscente de La Parguera cerca.",
      coords: [17.9339, -67.1918],
      image: null,
    },
    {
      id: "rincon",
      name: "Rincón",
      region: "Oeste",
      tag: "Surf",
      blurb:
        "La capital del surf, con olas grandes en invierno, ballenas jorobadas de enero a marzo y atardeceres sobre el mar.",
      coords: [18.3402, -67.2499],
      image: null,
    },
    {
      id: "cordillera-central",
      name: "La cordillera central",
      region: "Centro",
      tag: "Montaña y café",
      blurb:
        "Pueblos de montaña como Utuado y Jayuya, haciendas de café y lechoneras. Las noches de invierno son frescas.",
      coords: [18.2655, -66.6976],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Puerto Rico es calor todo el año en la costa: ropa ligera, traje de baño, protector y repelente. Para El Yunque, un impermeable; para la cordillera central en invierno, un suéter. Si no vienes de Estados Unidos, tramita la ESTA o la visa antes de reservar.",
    keyPoints: [
      "Calor todo el año en la costa, con más lluvia de mayo a noviembre.",
      "El Yunque y la cordillera central son más frescos y lluviosos.",
      "La entrada es la de Estados Unidos: ESTA o visa, según el pasaporte.",
      "La temporada de huracanes va de junio a noviembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la costa todo el año.",
      templado:
        "Camiseta, una capa ligera y un impermeable. Es el clima de El Yunque y de la cordillera.",
      fresco: "Un suéter para las noches de invierno en la cordillera central.",
      frio: "En Puerto Rico no hace frío de verdad: con un suéter alcanza para la montaña.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramita la ESTA o la visa antes de reservar",
          body: "Si no vienes de Estados Unidos, son las mismas reglas que para entrar allá.",
        },
        {
          title: "Alquila un auto para salir de San Juan",
          body: "El transporte público fuera del área metropolitana es escaso.",
        },
        {
          title: "Ve a las bahías en una noche sin luna",
          body: "El brillo se ve mucho más. Con operadores autorizados.",
        },
        {
          title: "Vuela a Vieques o Culebra si puedes",
          body: "Los ferries se llenan y dan prioridad a los residentes.",
        },
        {
          title: "Lleva una batería portátil",
          body: "Los cortes de luz son frecuentes.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de Culebra y Vieques lo agradecen.",
        },
      ],
      donts: [
        {
          title: "No olvides el impuesto y la propina",
          body: "Los precios no los incluyen, como en Estados Unidos.",
        },
        {
          title: "No nades en Mosquito Bay",
          body: "Está prohibido: protege al plancton que la hace brillar.",
        },
        {
          title: "No confundas millas y kilómetros",
          body: "Las carreteras marcan kilómetros, pero la velocidad máxima va en millas.",
        },
        {
          title: "No dejes cosas a la vista en el auto",
          body: "Es la precaución de cualquier estacionamiento de playa.",
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
          tone: "info",
          title: "La entrada de Estados Unidos",
          body: "Si no vienes de Estados Unidos, necesitas la ESTA o una visa, según tu pasaporte. Algunas nacionalidades tienen la entrada restringida.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "ESTA aprobada o visa de Estados Unidos, si no vienes de allá",
          "Seguro de viaje con cobertura médica",
          "Auto alquilado, si vas a salir de San Juan",
          "Vuelo o ferry a Vieques o Culebra, reservado",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre, con el pico entre agosto y octubre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Repelente para el atardecer y las bahías",
        ],
      },
      {
        id: "bosque",
        title: "Bosque y montaña",
        notice: null,
        summary: "Para El Yunque y la cordillera",
        items: [
          "Calzado que agarre en el barro",
          "Impermeable ligero",
          "Un suéter para las noches de invierno en la cordillera",
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
          "Algo para las quemaduras de sol",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Batería portátil, por los cortes de luz",
          "Linterna",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte y ESTA o visa de cada menor, si no vienen de Estados Unidos",
          "Silla de auto si van a alquilar uno: la ley la exige",
          "Protector solar de factor alto y repelente apto para niños",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En la costa no hay un mes frío.",
        instead: "Un suéter para la montaña.",
      },
      {
        leave: "El secador de 220 V",
        why: "Con 120 V no funciona bien, y los hoteles tienen.",
        instead: "Nada, o uno de doble voltaje.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Una maleta enorme para las islas",
        why: "Las avionetas a Vieques y Culebra llevan poco equipaje.",
        instead: "Un bolso blando y ligero.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito pasaporte o visa?",
        answer:
          "Desde Estados Unidos, no: es un vuelo nacional. Desde otro país, lo mismo que para entrar a Estados Unidos: la ESTA o una visa, según tu pasaporte.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El dólar estadounidense. Los precios no incluyen el impuesto a las ventas.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Sí: es el idioma de todos los días. El inglés también es oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a abril, la temporada seca. De enero a marzo, ballenas frente a Rincón.",
      },
      {
        question: "¿Cómo se llega a Vieques y Culebra?",
        answer:
          "En ferry desde Ceiba o en avioneta desde San Juan o Ceiba. Los ferries se llenan; la avioneta es más segura para conseguir lugar.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí. Después de un huracán, mejor embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 120 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
