import type { DestinationGuide } from "./types";

/**
 * Guía de Egipto.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: casi no llueve en ningún lado, así que la valija la
 * decide el calor, que en el sur del Nilo pasa los cuarenta grados de mayo a
 * septiembre. Las ciudades del planificador son las del Nilo, el mar Rojo y
 * Sharm el-Sheij, al que se llega en avión. El norte del Sinaí, el desierto
 * occidental y las fronteras se nombran como Abjasia en Georgia: un dato de
 * entrada, sin tono de alerta, y ninguna ciudad está ahí.
 */
export const egipto: DestinationGuide = {
  slug: "egipto",
  country: "Egipto",
  subregion: "África del Norte",
  subhead:
    "Las pirámides de Guiza, los templos de Luxor, un crucero por el Nilo hasta Asuán, Abu Simbel y los arrecifes del mar Rojo. Cinco mil años de historia en un país donde casi nunca llueve.",

  image: null,

  highlights: [
    {
      value: "+41 °C",
      label: "de máxima en Asuán y Luxor en junio",
      note: "En verano, el calor del sur es extremo y las visitas se hacen al amanecer. De noviembre a febrero, en cambio, los días son agradables y las noches, frescas.",
    },
    {
      value: "Pirámides",
      label: "las de Guiza, al borde de El Cairo",
      note: "Keops, Kefrén, Micerinos y la Esfinge, a minutos de la ciudad. Al lado, el Gran Museo Egipcio guarda el tesoro de Tutankamón.",
    },
    {
      value: "Nilo",
      label: "en crucero de Luxor a Asuán",
      note: "Tres o cuatro noches entre templos: Karnak, Edfu y Kom Ombo. También se navega en falucas, los veleros tradicionales.",
    },
    {
      value: "Mar Rojo",
      label: "arrecifes de coral a metros de la costa",
      note: "Hurghada, Marsa Alam y Sharm el-Sheij son destinos clásicos de buceo y snorkel, con agua templada todo el año.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Egipto",
      body: [
        "Muchos pasaportes latinoamericanos sacan la visa a la llegada, en el aeropuerto, o la tramitan antes como visa electrónica en el sitio oficial; otros necesitan pedirla en el consulado. Verificá el tuyo antes de comprar el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
        "El planificador no incluye el norte del Sinaí, el desierto occidental ni las zonas de frontera: no forman parte de un viaje habitual. A Sharm el-Sheij, en el sur del Sinaí, se llega en avión.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Egipto",
      body: [
        "La moneda es la libra egipcia. La tarjeta funciona en hoteles, cruceros, restaurantes y tiendas grandes; en taxis, mercados y propinas, efectivo.",
        "La propina —el bakshish— es parte de casi todo: los baños, los guardias de los templos, quien te ayuda con el equipaje. Llevá billetes chicos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí libras egipcias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor seco, casi sin lluvia",
      body: [
        "Egipto es hemisferio norte y casi no llueve. El Cairo tiene inviernos templados, con noches frescas, y veranos calurosos. Alejandría, sobre el Mediterráneo, es más suave y tiene algunas lluvias en invierno.",
        "El sur del Nilo —Luxor, Asuán, Abu Simbel— pasa los cuarenta grados de mayo a septiembre. De diciembre a febrero, los días son agradables y las noches bajan de diez grados.",
        "El mar Rojo es templado en invierno y muy caluroso en verano, con agua buena para bucear todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a abril: templado en el Nilo y en El Cairo. Es la temporada alta, y la de los cruceros.",
        "En verano se puede ir, pero las visitas del sur se hacen al amanecer; el mar Rojo es la mejor opción de esos meses.",
        "El Ramadán cambia los horarios de comercios y sitios; la fecha se corre cada año. El planificador usa el clima histórico de cada ciudad, no un pronóstico.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Egipto",
      body: [
        "Entre El Cairo, Luxor y Asuán hay vuelos internos, trenes —también uno nocturno con camas— y cruceros por el Nilo entre Luxor y Asuán.",
        "En El Cairo, metro y aplicaciones como Uber y Careem. A Abu Simbel se va en avión o por ruta desde Asuán, temprano.",
        "Las precauciones son las de cualquier destino turístico: acordar el precio antes de subir a un camello, a un caballo o a un taxi sin taxímetro, y paciencia con los vendedores de los sitios.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Las pirámides, Karnak, el Valle de los Reyes y Abu Simbel: cinco mil años de historia.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Koshari, ful, falafel, molokhia y el pescado de Alejandría.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "El Nilo entre el desierto y los palmares, y el mar Rojo con sus arrecifes.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "El mar Rojo tiene arrecifes de coral y agua templada todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Comer y moverse es barato; las entradas a los grandes sitios son caras.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos, trenes y cruceros conectan lo principal; el tránsito de El Cairo es caótico.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale:
        "La libra se devaluó varias veces en los últimos años, y los precios en libras cambian seguido.",
    },
  ],

  shines: [
    "Las pirámides y los templos del Nilo, que no se parecen a nada.",
    "El mar Rojo para bucear y hacer snorkel.",
    "Un viaje de invierno con días templados.",
  ],

  costs: [
    "Calor extremo en verano en el sur.",
    "Vendedores insistentes en los sitios más visitados.",
    "Propinas para casi todo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo El Cairo en julio que Asuán o el mar Rojo. Los precios están en libras egipcias y son órdenes de magnitud; las entradas a los grandes sitios cambian seguido.",

  places: [
    {
      id: "el-cairo",
      name: "El Cairo",
      region: "El Cairo",
      tag: "La ciudad de los mil minaretes",
      blurb:
        "La ciudadela, el Cairo islámico, el bazar de Jan el-Jalili y el Museo Egipcio. Es la base del planificador: inviernos templados y veranos calurosos, casi sin lluvia.",
      coords: [30.0444, 31.2357],
      featured: true,
      image: null,
    },
    {
      id: "guiza",
      name: "Guiza y las pirámides",
      region: "Guiza",
      tag: "Las pirámides",
      blurb:
        "Las pirámides de Keops, Kefrén y Micerinos, la Esfinge y el Gran Museo Egipcio. Muchos hoteles tienen vista a las pirámides.",
      coords: [29.9792, 31.1342],
      image: null,
    },
    {
      id: "alejandria",
      name: "Alejandría",
      region: "Alejandría",
      tag: "La ciudad sobre el Mediterráneo",
      blurb:
        "La cornisa, la Biblioteca Alejandrina, la ciudadela de Qaitbay en el lugar del antiguo faro y pescado fresco. El clima más suave del país.",
      coords: [31.2001, 29.9187],
      image: null,
    },
    {
      id: "luxor",
      name: "Luxor",
      region: "Luxor",
      tag: "Templos y tumbas",
      blurb:
        "Los templos de Karnak y Luxor, el Valle de los Reyes y el templo de Hatshepsut. Pasa los cuarenta grados en verano; en invierno, noches frescas.",
      coords: [25.6872, 32.6396],
      image: null,
    },
    {
      id: "asuan",
      name: "Asuán",
      region: "Asuán",
      tag: "El Nilo de las falucas",
      blurb:
        "Islas, falucas y pueblos nubios sobre el Nilo, el templo de Filae y la represa. Punto de partida hacia Abu Simbel.",
      coords: [24.0889, 32.8998],
      image: null,
    },
    {
      id: "abu-simbel",
      name: "Abu Simbel",
      region: "Asuán",
      tag: "Los templos de Ramsés II",
      blurb:
        "Dos templos excavados en la roca y trasladados piedra por piedra cuando se llenó el lago Nasser. Se llega en avión o por ruta desde Asuán.",
      coords: [22.3372, 31.6258],
      image: null,
    },
    {
      id: "hurghada",
      name: "Hurghada",
      region: "Mar Rojo",
      tag: "Playas y buceo",
      blurb:
        "Resorts sobre el mar Rojo, arrecifes de coral y excursiones en barco a las islas. Templado en invierno, muy caluroso en verano.",
      coords: [27.2579, 33.8116],
      image: null,
    },
    {
      id: "marsa-alam",
      name: "Marsa Alam",
      region: "Mar Rojo",
      tag: "Arrecifes y dugongos",
      blurb:
        "La costa más tranquila del mar Rojo, con arrecifes de coral, tortugas y, con suerte, dugongos.",
      coords: [25.0676, 34.879],
      image: null,
    },
    {
      id: "sharm-el-sheij",
      name: "Sharm el-Sheij",
      region: "Sinaí del Sur",
      tag: "Ras Mohammed",
      blurb:
        "Resorts y el parque nacional de Ras Mohammed, con algunos de los arrecifes más conocidos del mar Rojo. Se llega en avión.",
      coords: [27.9158, 34.3299],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Egipto es calor seco, casi sin lluvia. De octubre a abril, ropa liviana de día y un buzo para la noche, que en el sur y en el desierto es fresca. De mayo a septiembre, ropa fresca que cubra, sombrero, lentes de sol y mucha agua: el sur pasa los cuarenta grados. Todo el año, algo que cubra hombros y rodillas para las mezquitas, calzado cómodo para los templos y traje de baño para el mar Rojo.",
    keyPoints: [
      "Casi no llueve: lo que cambia la valija es el calor, mucho más fuerte en el sur.",
      "Noches frescas de diciembre a febrero en el Nilo y en el desierto.",
      "Hombros y rodillas cubiertos en mezquitas, iglesias y fuera de los resorts.",
      "Billetes chicos para las propinas, que son parte de casi todo.",
    ],
    adviceByBucket: {
      calido:
        "Ropa fresca de algodón o lino que cubra, sombrero, lentes de sol, protector y mucha agua. Las visitas, temprano.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno del Nilo, la mejor época.",
      fresco:
        "Capas y un buzo abrigado. Las noches de invierno en el sur y en el desierto son frescas.",
      frio: "Un abrigo para la noche: en enero, en Luxor y en el desierto, la mínima baja de diez grados aunque de día haga calor.",
    },
    plug: {
      types: "Tipos C y F",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Visitá los sitios apenas abren",
          body: "Menos calor y menos gente, sobre todo en Luxor y en Guiza.",
        },
        {
          title: "Hacé el crucero entre Luxor y Asuán",
          body: "Tres o cuatro noches para ver Edfu y Kom Ombo sin traslados.",
        },
        {
          title: "Llevá billetes chicos",
          body: "Para las propinas, los baños y los guardias de los templos.",
        },
        {
          title: "Contratá un guía para los templos",
          body: "Los jeroglíficos y las tumbas se entienden mucho mejor con alguien que los explique.",
        },
        {
          title: "Llevá máscara y snorkel al mar Rojo",
          body: "En muchas playas, los arrecifes se ven a pocos metros de la orilla.",
        },
        {
          title: "Elegí pagar en libras egipcias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes el calor del sur",
          body: "De mayo a septiembre, Luxor y Asuán pasan los cuarenta grados. Agua, sombrero y descanso al mediodía.",
        },
        {
          title: "No subas a un camello sin acordar el precio",
          body: "En Guiza, el precio se acuerda antes, incluido el de bajarte.",
        },
        {
          title: "No vayas descubierto a las mezquitas",
          body: "Hombros y rodillas cubiertos, y las mujeres, el pelo.",
        },
        {
          title: "No toques ni pises el coral",
          body: "Se rompe y tarda años en volver a crecer; además, algunos lastiman.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada, también para lavarte los dientes si tenés el estómago sensible.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "templos",
        title: "Para los templos y el sol",
        notice: {
          tone: "info",
          title: "Mucho sol y mucha caminata",
          body: "Los sitios del Nilo tienen poca sombra y se recorren a pie.",
        },
        summary: "Lo que piden los días de visitas",
        items: [
          "Sombrero y lentes de sol",
          "Protector solar",
          "Botella de agua",
          "Calzado cómodo y cerrado",
          "Billetes chicos para propinas",
        ],
      },
      {
        id: "mar-rojo",
        title: "Para el mar Rojo",
        notice: null,
        summary: "Playa y buceo",
        items: [
          "Traje de baño",
          "Máscara y snorkel, si tenés",
          "Protector solar que no dañe el coral",
          "Calzado para el agua",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Resolvé la visa y el certificado antes",
          body: "Muchos pasaportes sacan la visa al llegar o la tramitan online. Si venís de un país con riesgo de fiebre amarilla, te pueden pedir el certificado de vacunación.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, o el comprobante de la visa electrónica",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
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
          "Sales de rehidratación",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano en invierno",
        why: "Las noches de diciembre a febrero en el Nilo y en el desierto son frescas.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Ropa ajustada o muy corta",
        why: "Fuera de los resorts se esperan hombros y rodillas cubiertos.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Ojotas para los templos",
        why: "Son kilómetros de piedra, arena y escalones, al sol.",
        instead: "Calzado cómodo y cerrado.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Los taxis, los mercados y las propinas se pagan en efectivo.",
        instead: "Libras en billetes chicos y una tarjeta.",
      },
      {
        leave: "Cualquier protector solar para el arrecife",
        why: "Algunos dañan el coral.",
        instead: "Uno que diga que no daña el coral.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Egipto?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos la sacan al llegar o la tramitan online antes; otros la piden en el consulado. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De octubre a abril: días templados en el Nilo y en El Cairo.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Si en los días previos estuviste en un país con riesgo, te pueden pedir el certificado al entrar, y varios de Sudamérica están en esa lista. Se aplica al menos diez días antes del viaje.",
      },
      {
        question: "¿Conviene el crucero por el Nilo?",
        answer:
          "Sí, entre Luxor y Asuán: en tres o cuatro noches se ven los templos del camino sin traslados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Son de tipo C y F, a 220 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer: "Sí, en hoteles, cruceros, bares y restaurantes para turistas.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí, casi en todo: restaurantes, guías, choferes, baños y guardias de los templos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Mejor tomar embotellada, también para lavarse los dientes si tenés el estómago sensible.",
      },
    ],
  },
};
