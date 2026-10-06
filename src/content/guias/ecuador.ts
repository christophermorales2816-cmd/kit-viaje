import type { DestinationGuide } from "./types";

/**
 * Guía de Ecuador.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primer corredor DOLARIZADO —no hay tipo de
 * cambio, y la página lo dice en vez de mostrar una falla— y el primero sobre
 * la línea del ecuador, donde no hay estaciones y la valija la deciden la
 * altura y la región.
 */
export const ecuador: DestinationGuide = {
  slug: "ecuador",
  country: "Ecuador",
  subregion: "Sudamérica",
  subhead:
    "Andes, costa, Amazonía y Galápagos en un país chico, sobre la línea del ecuador. No hay verano ni invierno, y se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "US$",
      label: "es la moneda",
      note: "Dólar estadounidense desde el año 2000. No hay cotización que seguir ni brecha que medir.",
    },
    {
      value: "0°",
      label: "de latitud",
      note: "La línea del ecuador pasa a minutos de Quito. Los días duran casi lo mismo todo el año.",
    },
    {
      value: "2.850 m",
      label: "en Quito",
      note: "Una de las capitales más altas del mundo, con clima de primavera fresca los doce meses.",
    },
    {
      value: "4",
      label: "regiones",
      note: "Sierra, Costa, Amazonía y Galápagos. Cada una con su clima, y todas a pocas horas.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Se paga en dólares",
      body: [
        "Ecuador usa el dólar estadounidense desde el año 2000. No hay tipo de cambio que seguir: lo único que cambia el costo es lo que cobre tu banco por usar la tarjeta o retirar efectivo afuera.",
        "Circulan billetes estadounidenses y monedas propias de Ecuador que valen lo mismo que las de Estados Unidos. Llevá billetes chicos: los de cien, y a veces los de cincuenta, se rechazan en muchos comercios.",
        "La tarjeta funciona en ciudades y lugares turísticos. En mercados, buses y pueblos hace falta efectivo.",
      ],
    },
    {
      id: "sin-estaciones",
      title: "Sin estaciones: la altura decide",
      body: [
        "Sobre el ecuador no hay verano ni invierno. Quito tiene casi la misma temperatura los doce meses: días de primavera fresca y noches frías. Lo que cambia entre meses es la lluvia.",
        "Lo que define la valija es la región. La Sierra es fresca y cambiante; la Costa es calurosa y húmeda; la Amazonía es calor y lluvia todo el año; Galápagos tiene una temporada cálida y otra fresca con neblina.",
        "En la Sierra el clima cambia varias veces en el mismo día. Sol a la mañana, lluvia a la tarde y frío de noche es lo normal.",
      ],
    },
    {
      id: "galapagos",
      title: "Galápagos se planifica aparte",
      body: [
        "Las islas son un parque nacional con reglas propias: hay una tasa de ingreso, un control migratorio interno antes de embarcar y restricciones estrictas sobre lo que se puede llevar, como alimentos frescos y semillas.",
        "Es el destino más caro del país, y por lejos. Conviene decidirlo al principio y no agregarlo al final.",
        "Tiene dos temporadas: de diciembre a mayo es cálida, con sol y mar calmo; de junio a noviembre el agua se enfría, hay neblina y más vida marina.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Es un país chico y las distancias son cortas: de Quito a la costa o a la Amazonía hay medio día de bus.",
        "Los buses interprovinciales son baratos y frecuentes, aunque las rutas de montaña son lentas. Entre Quito y Guayaquil, o a Cuenca, el avión ahorra mucho tiempo.",
        "A Galápagos solo se llega en avión, desde Quito o Guayaquil.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande de América Latina: atención a las pertenencias en terminales y zonas concurridas, y preferir taxis por aplicación o pedidos por el alojamiento.",
        "El sol de la Sierra quema mucho más de lo que se siente por la altura y por la latitud. Protector siempre, aunque esté nublado.",
        "Para la Amazonía suele recomendarse la vacuna contra la fiebre amarilla. Consultalo con tiempo, porque necesita días para hacer efecto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Naturaleza y biodiversidad",
      score: 10,
      rationale:
        "Galápagos, la Amazonía, volcanes y bosques nublados en un país chico. Uno de los más biodiversos del planeta.",
    },
    {
      dimension: "Paisajes de montaña",
      score: 8.5,
      rationale:
        "La avenida de los volcanes, con el Cotopaxi y el Chimborazo a pocas horas de Quito.",
    },
    {
      dimension: "Ciudades coloniales",
      score: 8,
      rationale:
        "Los centros históricos de Quito y de Cuenca son patrimonio de la UNESCO y de los mejor conservados del continente.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "Cocina regional sabrosa y muy barata, sobre todo en los almuerzos del día. Sin la fama de sus vecinos.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8.5,
      rationale:
        "Barato en el continente, sobre todo en comida y transporte. Galápagos juega en otra categoría.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Distancias cortas y buses frecuentes, aunque las rutas de montaña son lentas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale:
        "Se paga en dólares. No hay tipo de cambio ni sorpresas en la conversión.",
    },
  ],

  shines: [
    "Pasar de la Sierra a la selva o a la costa en medio día.",
    "Galápagos, que no se parece a ningún otro lugar.",
    "Pagar en dólares: el presupuesto ya está en la moneda que vas a usar.",
  ],

  costs: [
    "Galápagos, que puede costar lo mismo que todo el resto del viaje.",
    "El clima cambiante de la Sierra, que pide capas todos los días.",
    "Los billetes grandes, que muchos comercios no aceptan.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Quito no pide lo mismo que Guayaquil. Los precios están en dólares y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "quito",
      name: "Quito",
      region: "Sierra",
      tag: "Mitad del mundo",
      blurb:
        "Una capital a 2.850 metros entre volcanes, con uno de los centros coloniales mejor conservados del continente. Es la base del planificador.",
      coords: [-0.1807, -78.4678],
      featured: true,
      image: null,
    },
    {
      id: "galapagos",
      name: "Galápagos",
      region: "Galápagos",
      tag: "Islas encantadas",
      blurb:
        "Un archipiélago a mil kilómetros del continente donde los animales no le tienen miedo a la gente. Es un parque nacional con reglas propias y el destino más caro del país.",
      coords: [-0.7432, -90.3133],
      image: null,
    },
    {
      id: "cuenca",
      name: "Cuenca",
      region: "Sierra",
      tag: "Ciudad colonial",
      blurb:
        "Una ciudad colonial de ríos y cúpulas, más tranquila que Quito y con un clima templado parejo. Cerca está el parque nacional Cajas.",
      coords: [-2.9001, -79.0059],
      image: null,
    },
    {
      id: "banos",
      name: "Baños de Agua Santa",
      region: "Sierra",
      tag: "Cascadas y aventura",
      blurb:
        "Un pueblo entre cascadas al pie del volcán Tungurahua, la puerta de la Sierra hacia la Amazonía. Aguas termales, puenting y la ruta de las cascadas en bici.",
      coords: [-1.3964, -78.4247],
      image: null,
    },
    {
      id: "otavalo",
      name: "Otavalo",
      region: "Sierra",
      tag: "Mercado indígena",
      blurb:
        "El mercado artesanal más conocido de los Andes, a dos horas de Quito, rodeado de lagunas y volcanes. Noches frías todo el año.",
      coords: [0.2343, -78.261],
      image: null,
    },
    {
      id: "guayaquil",
      name: "Guayaquil",
      region: "Costa",
      tag: "Malecón y puerto",
      blurb:
        "La ciudad más grande del país, caliente y húmeda, con un malecón renovado sobre el río. Punto de partida habitual hacia Galápagos.",
      coords: [-2.171, -79.9224],
      image: null,
    },
    {
      id: "montanita",
      name: "Montañita",
      region: "Costa",
      tag: "Surf y fiesta",
      blurb:
        "El pueblo de surf de la costa ecuatoriana, con buena ola y vida nocturna. Calor todo el año y lluvias de enero a abril.",
      coords: [-1.827, -80.753],
      image: null,
    },
    {
      id: "puerto-lopez",
      name: "Puerto López",
      region: "Costa",
      tag: "Ballenas jorobadas",
      blurb:
        "Un pueblo de pescadores frente al parque Machalilla. De junio a septiembre llegan las ballenas jorobadas y salen excursiones para verlas.",
      coords: [-1.56, -80.81],
      image: null,
    },
    {
      id: "tena",
      name: "Tena",
      region: "Amazonía",
      tag: "Selva y río",
      blurb:
        "La puerta a la Amazonía ecuatoriana, con rafting en el río Napo y comunidades kichwa. Calor y lluvia todo el año.",
      coords: [-0.9938, -77.8129],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Ecuador no tiene estaciones: la valija depende de la región. Para Quito y la Sierra, capas, porque en el mismo día hay sol fuerte, lluvia y noche fría. Para la Costa y la Amazonía, ropa liviana, repelente y algo para la lluvia. Para Galápagos, depende del mes: de diciembre a mayo hace calor, y de junio a noviembre el agua se enfría y conviene un traje de neopreno para hacer snorkel.",
    keyPoints: [
      "Sobre el ecuador no hay verano ni invierno. Lo que cambia entre meses es la lluvia.",
      "En la Sierra el clima cambia varias veces en el día. Capas siempre, y algo impermeable en la mochila.",
      "El sol de Quito quema mucho más de lo que se siente, por la altura y la latitud.",
      "Galápagos tiene reglas estrictas sobre lo que se puede llevar a las islas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y que seque rápido, repelente y protector. En la Amazonía, manga larga liviana al atardecer contra los mosquitos.",
      templado:
        "Remera y algo de manga larga, con una campera liviana a mano. En la Sierra el sol del mediodía se va en minutos cuando se nubla.",
      fresco:
        "Buzo o polar y campera impermeable. Es el clima de casi todas las noches de Quito.",
      frio: "Campera de abrigo, gorro y guantes para las noches de la Sierra alta y para las excursiones a los volcanes.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V; casi todos los modernos lo dicen.",
    },
    tips: {
      dos: [
        {
          title: "Llevá billetes chicos",
          body: "Los de cien dólares, y a veces los de cincuenta, se rechazan en muchos comercios. Billetes de veinte o menos resuelven todo.",
        },
        {
          title: "Empacá en capas para la Sierra",
          body: "Primera capa liviana, polar y campera impermeable. Con eso se resuelve un día de Quito con sol, lluvia y frío.",
        },
        {
          title: "Protector solar aunque esté nublado",
          body: "Por la altura y la latitud, el sol de la Sierra quema mucho más de lo que se siente.",
        },
        {
          title: "Decidí Galápagos al principio",
          body: "Es caro y tiene cupos en barcos y vuelos. Conviene armar el resto del viaje alrededor de las islas.",
        },
        {
          title: "Llevá una campera impermeable liviana",
          body: "Sirve en la Sierra, en la Amazonía y en la neblina de Galápagos. Es la prenda que más se usa.",
        },
        {
          title: "Repelente para la Costa y la Amazonía",
          body: "Los mosquitos pican de día y de noche. Con DEET o icaridina.",
        },
      ],
      donts: [
        {
          title: "No lleves billetes de cien",
          body: "Muchos comercios no los aceptan. Cambialos antes por billetes chicos.",
        },
        {
          title: "No subestimes las noches de Quito",
          body: "El día puede ser agradable, pero de noche baja a menos de diez grados. Sin abrigo se pasa frío.",
        },
        {
          title: "No lleves comida fresca a Galápagos",
          body: "Hay controles estrictos para proteger las islas. Frutas, semillas y alimentos frescos no pasan.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Agua embotellada o filtrada, y cuidado con el hielo en lugares que no conocés.",
        },
        {
          title: "No asumas que el día empieza y termina igual",
          body: "En la Sierra, salir de mañana con sol no garantiza nada para la tarde. Llevá siempre la campera.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "capas",
        title: "Ropa para la Sierra",
        notice: {
          tone: "info",
          title: "Cuatro estaciones en un día",
          body: "En Quito es normal tener sol a la mañana, lluvia a la tarde y frío de noche. Las capas resuelven todo sin cargar de más.",
        },
        summary: "Lo que cubre un día de Quito",
        items: [
          "Primera capa liviana",
          "Polar o buzo abrigado",
          "Campera impermeable con capucha",
          "Gorro y guantes livianos para las noches y los volcanes",
        ],
      },
      {
        id: "galapagos",
        title: "Galápagos",
        notice: {
          tone: "warn",
          title: "Reglas estrictas para entrar",
          body: "Hay tasa de ingreso, control migratorio interno y prohibición de llevar alimentos frescos, semillas y otros productos. Revisá la lista antes de armar la valija.",
        },
        summary: "Lo específico de las islas",
        items: [
          "Protector solar de factor alto que no dañe el arrecife",
          "Traje de baño y remera con protección UV",
          "Neopreno corto si vas de junio a noviembre",
          "Pastillas para el mareo: hay muchos traslados en lancha",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Consultá las vacunas con tiempo",
          body: "Para la Amazonía suele recomendarse la fiebre amarilla. Necesita días para hacer efecto: no se resuelve en el aeropuerto.",
        },
        summary: "Botiquín básico y qué averiguar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Algo para el dolor de cabeza los primeros días en la altura",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Capas extra para las noches de la Sierra",
          "Protector solar de factor alto y gorro",
          "Repelente apto para chicos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Billetes de cien dólares",
        why: "Muchos comercios no los aceptan.",
        instead: "Billetes de veinte o menos.",
      },
      {
        leave: "Solo ropa de verano",
        why: "Las noches de Quito y de la Sierra son frías todo el año.",
        instead: "Polar y campera impermeable.",
      },
      {
        leave: "Comida para Galápagos",
        why: "Los alimentos frescos y semillas no pueden entrar a las islas.",
        instead: "Comprar allá.",
      },
      {
        leave: "Jeans pesados para la Costa y la Amazonía",
        why: "Con calor y humedad no se secan nunca.",
        instead: "Pantalones livianos de secado rápido.",
      },
      {
        leave: "El paraguas grande",
        why: "En la Sierra el clima cambia rápido y es más práctico tener las manos libres.",
        instead: "Una campera con capucha.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Se camina mucho y en terreno irregular.",
        instead: "Zapatillas cómodas que aguanten la lluvia.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan y en terminales conviene no exhibirlos.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito cambiar plata?",
        answer:
          "No. Ecuador usa el dólar estadounidense. Llevá billetes chicos: los de cien se rechazan en muchos comercios.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Ecuador se visita todo el año. En la Sierra, de junio a septiembre llueve menos. Para Galápagos, de diciembre a mayo el mar está más calmo y cálido.",
      },
      {
        question: "¿Hace frío en Quito?",
        answer:
          "De día es fresco y agradable; de noche baja a menos de diez grados, todo el año. Polar y campera alcanzan.",
      },
      {
        question: "¿Me afecta la altura en Quito?",
        answer:
          "Quito está a 2.850 metros. Algunos sienten cansancio o dolor de cabeza el primer día. Despacio, mucha agua y nada de alcohol al principio.",
      },
      {
        question: "¿Qué no puedo llevar a Galápagos?",
        answer:
          "Alimentos frescos, semillas, plantas y animales, entre otras cosas. Hay controles antes de embarcar y al llegar.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No para tomar. Agua embotellada o filtrada.",
      },
      {
        question: "¿Necesito vacunas?",
        answer:
          "Para la Amazonía suele recomendarse la fiebre amarilla. Consultalo con semanas de anticipación.",
      },
    ],
  },
};
