import type { DestinationGuide } from "./types";

/**
 * Guía de Palaos.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un compromiso ambiental sellado en el pasaporte
 * —el dato de su portada— y la tasa ambiental incluida en el pasaje. Es el
 * único país de Oceanía donde la propina se acostumbra, y su presupuesto la
 * lleva. El permiso de las Islas Rocosas se paga una sola vez y no depende
 * del lugar: la migración lo carga aparte para tres destinos. Usa el dólar
 * estadounidense (spec, 16.3).
 */
export const palaos: DestinationGuide = {
  slug: "palaos",
  country: "Palaos",
  subregion: "Micronesia",
  subhead:
    "Las Islas Rocosas, el lago de las Medusas y los tiburones de Blue Corner, los monolitos y la cascada de Babeldaob, y la Peleliu de la guerra, en un país que te hace prometer que vas a cuidarlo.",

  image: null,

  highlights: [
    {
      value: "Compromiso",
      label: "sellado en el pasaporte: se firma al entrar",
      note: "Al llegar te sellan en el pasaporte el Compromiso de Palaos, una promesa de cuidar las islas dirigida a los chicos del país, y lo firmás ahí mismo. La tasa ambiental ya viene incluida en el pasaje.",
    },
    {
      value: "Medusas",
      label: "que casi no pican, en un lago de agua salada",
      note: "En el lago de las Medusas, en Eil Malk, viven millones de medusas doradas, y se nada entre ellas con snorkel. Cuando la población baja, el lago se cierra.",
    },
    {
      value: "Islas Rocosas",
      label: "cientos de islas de piedra con forma de hongo",
      note: "Islas de piedra caliza cubiertas de selva y gastadas por el mar en la base, patrimonio de la humanidad. Se recorren en lancha desde Koror, con un permiso que se paga una vez.",
    },
    {
      value: "Tiburones",
      label: "protegidos en el primer santuario del mundo",
      note: "Palaos prohibió la pesca de tiburones en 2009 y protege casi todo su mar. En Blue Corner se bucea entre decenas de ellos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Palaos",
      body: [
        "Muchos pasaportes entran sin visa o reciben al llegar un permiso de visitante, con el pasaje de salida; otros tramitan la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Al llegar te sellan en el pasaporte el Compromiso de Palaos, una promesa de cuidar las islas que se firma ahí mismo. La tasa ambiental ya viene incluida en el pasaje.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Palaos",
      body: [
        "La moneda es el dólar estadounidense, como en Ecuador. En Koror, los hoteles, los restaurantes y las tiendas de buceo aceptan tarjeta; en Babeldaob y las islas conviene llevar efectivo.",
        "Hay cajeros en Koror. A diferencia del resto de Oceanía, la propina se acostumbra, en los restaurantes y con los guías de buceo.",
        "El permiso de las Islas Rocosas se paga una vez y vale por varios días; el del lago de las Medusas es aparte.",
      ],
    },
    {
      id: "clima",
      title: "Calor parejo, y lluvia casi todo el año",
      body: [
        "Calor húmedo y parejo todo el año: las máximas rondan los treinta y un grados y las mínimas, los veinticuatro.",
        "Llueve casi todo el año, y más de mayo a octubre, cuando además puede pasar algún tifón cerca. De febrero a abril es lo más seco, con el mar más calmo.",
        "El agua está cerca de los treinta grados todo el año: para bucear alcanza con un traje corto.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De febrero a abril: la temporada más seca, con el mar más calmo y buena visibilidad para el buceo.",
        "El 9 de julio es el día de la constitución, y el 1 de octubre, el de la independencia.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Palaos",
      body: [
        "Koror y Babeldaob, la isla grande, están unidas por un puente: se recorren en auto alquilado o en taxi.",
        "A las Islas Rocosas, al lago de las Medusas y a los puntos de buceo se va en lancha, con excursiones que salen de Koror cada mañana. A Peleliu y Kayangel van lanchas y barcos, pocas veces por semana.",
        "Se maneja por la derecha, aunque muchos autos tienen el volante a la derecha, porque vienen de Japón.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Los monolitos de Badrulchau, las casas bai y la batalla de Peleliu.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale: "Pescado, cocina japonesa y de las islas, y bentos al paso.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale: "Las Islas Rocosas, lagunas turquesa y selva.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Arena blanca en las Islas Rocosas y en Kayangel.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Buceo de primera, pero todo es caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale: "Koror es fácil; el resto, en lancha.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "Usa el dólar estadounidense.",
    },
  ],

  shines: [
    "Las Islas Rocosas y el lago de las Medusas.",
    "Buceo entre tiburones en Blue Corner.",
    "Un país que cuida su mar.",
  ],

  costs: [
    "Caro para dormir y bucear.",
    "Lluvia casi todo el año.",
    "Las islas de afuera, con pocos barcos.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Koror en julio que Kayangel en marzo. Los precios están en dólares y son órdenes de magnitud; en las Islas Rocosas, el lago de las Medusas y Blue Corner, la entrada es el permiso de las Islas Rocosas, y el buceo cuesta bastante más.",

  places: [
    {
      id: "koror",
      name: "Koror",
      region: "Koror",
      tag: "La ciudad",
      blurb:
        "La ciudad más grande, con el museo Belau, el acuario del centro de investigación del coral y el puerto de donde salen las lanchas a las Islas Rocosas. Es la base del planificador: calor parejo todo el año, con lluvias en todos los meses.",
      coords: [7.34, 134.48],
      featured: true,
      image: null,
    },
    {
      id: "islas-rocosas",
      name: "Islas Rocosas (Rock Islands)",
      region: "Koror",
      tag: "Las islas hongo",
      blurb:
        "Cientos de islas de piedra caliza cubiertas de selva, con playas escondidas, lagos marinos y snorkel, patrimonio de la humanidad. Se recorren en lancha, con un permiso.",
      coords: [7.27, 134.39],
      image: null,
    },
    {
      id: "lago-de-las-medusas",
      name: "Lago de las Medusas (Eil Malk)",
      region: "Koror",
      tag: "Las medusas",
      blurb:
        "Un lago de agua salada donde se nada con snorkel entre medusas doradas que casi no pican. Cuando la población baja, se cierra: preguntá antes de ir.",
      coords: [7.16, 134.38],
      image: null,
    },
    {
      id: "blue-corner",
      name: "Blue Corner (buceo)",
      region: "Koror",
      tag: "Los tiburones",
      blurb:
        "Uno de los buceos más famosos del mundo, en una pared de coral con corriente, con tiburones grises, tortugas y cardúmenes enormes.",
      coords: [7.13, 134.22],
      image: null,
    },
    {
      id: "melekeok",
      name: "Melekeok (la capital)",
      region: "Babeldaob",
      tag: "La capital",
      blurb:
        "La capital, en la costa este de Babeldaob, con un Capitolio de columnas que parece fuera de lugar en la selva, y casas bai tradicionales cerca.",
      coords: [7.5, 134.64],
      image: null,
    },
    {
      id: "badrulchau",
      name: "Monolitos de Badrulchau",
      region: "Babeldaob",
      tag: "Los monolitos",
      blurb:
        "Decenas de piedras de basalto alineadas en una colina del norte de Babeldaob, de origen incierto, con vista al mar.",
      coords: [7.74, 134.61],
      image: null,
    },
    {
      id: "ngardmau",
      name: "Cascada de Ngardmau",
      region: "Babeldaob",
      tag: "La cascada",
      blurb:
        "La cascada más grande del país, a la que se llega por un sendero entre la selva que sigue las vías de un viejo tren minero japonés.",
      coords: [7.62, 134.58],
      image: null,
    },
    {
      id: "peleliu",
      name: "Peleliu",
      region: "Peleliu",
      tag: "La batalla",
      blurb:
        "La isla de una de las batallas más duras de la guerra, en 1944, con tanques, cuevas y un museo, y buceo en paredes de coral.",
      coords: [7, 134.25],
      image: null,
    },
    {
      id: "kayangel",
      name: "Kayangel (atolón)",
      region: "Kayangel",
      tag: "El atolón",
      blurb:
        "Un atolón en el extremo norte, con playas de arena blanca, una laguna transparente y un pueblo chico, a un viaje de barco desde Koror o desde el norte de Babeldaob.",
      coords: [8.08, 134.71],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Palaos, ropa liviana y fresca, traje de baño, protector que no dañe el coral y algo impermeable: hace calor parejo y llueve casi todo el año. La certificación de buceo, si buceás, y efectivo para fuera de Koror. Al llegar vas a firmar el Compromiso de Palaos.",
    keyPoints: [
      "Al llegar se firma el Compromiso de Palaos, sellado en el pasaporte.",
      "Usan el dólar estadounidense, y la propina se acostumbra.",
      "Las Islas Rocosas piden un permiso, que se paga una vez.",
      "Protector solar que no dañe el coral: los otros están prohibidos.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, protector apto para el coral, repelente y una campera impermeable liviana.",
      templado: "Ropa liviana y un buzo fino para el avión y las lanchas.",
      fresco: "Un buzo liviano para las noches de lluvia y las lanchas.",
      frio: "No hace frío en Palaos: un buzo liviano para el avión alcanza.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de patas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V; casi todos los modernos lo dicen.",
    },
    tips: {
      dos: [
        {
          title: "Leé el compromiso antes de firmarlo",
          body: "Es una promesa a los chicos de Palaos de cuidar las islas, y se toma en serio.",
        },
        {
          title: "Sacá el permiso de las Islas Rocosas",
          body: "Lo venden las agencias de excursión, y vale por varios días. El del lago de las Medusas es aparte.",
        },
        {
          title: "Usá protector apto para el coral",
          body: "Los que tienen ciertos químicos están prohibidos en el país.",
        },
        {
          title: "Dejá propina",
          body: "En los restaurantes y a los guías de buceo, se acostumbra.",
        },
        {
          title: "Buceá en Blue Corner",
          body: "Tiburones, tortugas y cardúmenes, en uno de los buceos más famosos del mundo.",
        },
        {
          title: "Recorré Babeldaob en auto",
          body: "Los monolitos, la cascada de Ngardmau y el Capitolio, en un día.",
        },
      ],
      donts: [
        {
          title: "No toques el coral ni a los animales",
          body: "Lo prometés al firmar el compromiso, y hay multas.",
        },
        {
          title: "No te lleves conchas ni coral",
          body: "Está prohibido sacarlos del país.",
        },
        {
          title: "No bucees en el lago de las Medusas",
          body: "Solo se permite el snorkel: en el fondo del lago hay gases tóxicos.",
        },
        {
          title: "No cuentes con la tarjeta fuera de Koror",
          body: "En Babeldaob y las islas, mejor efectivo.",
        },
        {
          title: "No subestimes el sol en la lancha",
          body: "Con la brisa no se siente, pero quema en minutos.",
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
        title: "Documentos y entrada",
        notice: {
          tone: "info",
          title: "El Compromiso de Palaos",
          body: "Al llegar te sellan el compromiso en el pasaporte y lo firmás; la tasa ambiental ya viene en el pasaje. Según el pasaporte, se entra sin visa o con permiso al llegar.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "buceo",
        title: "Para el mar y el buceo",
        notice: {
          tone: "warn",
          title: "Protector apto para el coral",
          body: "Los protectores con químicos que dañan el arrecife están prohibidos: llevá uno apto para el coral, o una remera de lycra.",
        },
        summary: "Islas Rocosas, lagos y paredes de coral",
        items: [
          "Protector solar apto para el coral",
          "La certificación de buceo, si buceás",
          "Máscara y snorkel",
          "Una remera de lycra",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia",
        notice: null,
        summary: "Chaparrones casi todos los días",
        items: [
          "Una campera impermeable liviana",
          "Bolsas estancas para el teléfono y los documentos",
          "Ropa que se seque rápido",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "Hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y de buceo",
        ],
      },
    ],
    avoid: [
      {
        leave: "Protector solar común",
        why: "Los que dañan el coral están prohibidos.",
        instead: "Uno apto para el arrecife.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En Babeldaob y las islas casi todo se paga en efectivo.",
        instead: "Dólares en billetes chicos.",
      },
      {
        leave: "Ropa que tarda en secarse",
        why: "Con la lluvia y la humedad no se seca nunca.",
        instead: "Telas livianas que se sequen rápido.",
      },
      {
        leave: "Bucear el último día",
        why: "Después de bucear hay que esperar antes de volar.",
        instead: "El buceo, al menos un día antes del vuelo.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En las lanchas hay poco lugar.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "La planchita o el secador de 220 V",
        why: "A 120 V calientan poco o no andan, y muchos hoteles tienen secador.",
        instead: "El del alojamiento, o uno que diga 100-240 V.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Palaos?",
        answer:
          "Muchos pasaportes entran sin visa o reciben el permiso al llegar; otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué es el Compromiso de Palaos?",
        answer:
          "Una promesa de cuidar las islas, dirigida a los chicos del país, que te sellan en el pasaporte al llegar y firmás ahí mismo.",
      },
      {
        question: "¿Se puede nadar en el lago de las Medusas?",
        answer:
          "Sí, con snorkel y un permiso aparte, cuando está abierto: se cierra cuando la población de medusas baja.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De febrero a abril, la temporada más seca, con el mar más calmo.",
      },
      {
        question: "¿Hay que dejar propina?",
        answer:
          "Sí: en los restaurantes y a los guías de buceo, se acostumbra.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer: "El palauano y el inglés, que se habla en todos lados.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu país usa enchufes de patas redondas o en V, sí: en Palaos son de patas planas, a 120 V, como en Estados Unidos.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Mejor no: tomá embotellada o filtrada.",
      },
    ],
  },
};
