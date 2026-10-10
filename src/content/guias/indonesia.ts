import type { DestinationGuide } from "./types";

/**
 * Guía de Indonesia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primero de Asia al sur del ecuador, con la
 * estación seca de abril a octubre. La ciudad base es Ubud y no Yakarta, como
 * Antigua en Guatemala: casi nadie duerme en la capital. Nyepi, el día en que
 * Bali se apaga entero —sin vuelos—, cambia una reserva y por eso está en el
 * hero.
 */
export const indonesia: DestinationGuide = {
  slug: "indonesia",
  country: "Indonesia",
  subregion: "Sudeste Asiático",
  subhead:
    "Templos y arrozales en Bali, volcanes en Java, los dragones de Komodo, islas sin autos y los arrecifes de Raja Ampat. Miles de islas, cada una con su paisaje y su manera de viajar.",

  image: null,

  highlights: [
    {
      value: "+17.000",
      label: "islas, y se viaja entre ellas en lancha o avión",
      note: "Bali, Java, Lombok, Flores, Sumatra y Papúa son mundos distintos. Las distancias se miden en vuelos internos y lanchas rápidas.",
    },
    {
      value: "Borobudur",
      label: "el templo budista más grande del mundo",
      note: "En Java, cerca de Yogyakarta, con Prambanan, el gran templo hindú, a una hora. Se visita al amanecer.",
    },
    {
      value: "Komodo",
      label: "los lagartos más grandes del mundo, en su isla",
      note: "Se ven en el parque nacional, en excursión desde Labuan Bajo, siempre con guardaparques.",
    },
    {
      value: "Nyepi",
      label: "el día en que Bali se apaga",
      note: "Un día al año, en marzo, la isla entera hace silencio: no se sale a la calle y el aeropuerto cierra. Fijate la fecha antes de reservar.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Indonesia",
      body: [
        "Muchos pasaportes latinoamericanos entran con visa a la llegada, que se puede pagar online antes del viaje como visa electrónica; otros necesitan tramitar la visa por adelantado. Verificá el tuyo antes de comprar el pasaje.",
        "Indonesia pide completar un formulario digital de llegada en los días previos al viaje, y Bali cobra además una tasa turística propia, que se paga online o al llegar. Fijate qué rige cuando viajes.",
        "El pasaporte tiene que tener vigencia de sobra y páginas libres, y en la frontera pueden pedirte el pasaje de salida.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Indonesia",
      body: [
        "La moneda es la rupia, con muchos ceros: en los menús se escribe a veces sin los tres últimos (50K son 50.000). En Bali la tarjeta funciona en hoteles, restaurantes y tiendas; en warungs, puestos, mercados y en las otras islas, efectivo.",
        "Usá cajeros de bancos, dentro de sucursales o centros comerciales. Las casas de cambio con cartel de autorizadas dan buen cambio por dólares; las que ofrecen cotizaciones demasiado buenas suelen cobrar de otra forma.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rupias: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Al sur del ecuador",
      body: [
        "Casi toda Indonesia está en el hemisferio sur: la estación seca va de abril a octubre y la de lluvias, de noviembre a marzo, con chaparrones fuertes y cortos. Hace calor todo el año.",
        "La altura cambia todo: en el mirador del Bromo, a más de dos mil metros, las madrugadas de julio y agosto son frías, y Ubud es algo más fresco y lluvioso que la costa.",
        "El lago Toba, en Sumatra, y Raja Ampat, cerca del ecuador, tienen la lluvia repartida en el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a septiembre: seco y soleado en Bali, Java, Lombok y Flores. Julio y agosto son los meses más llenos.",
        "En Bali, fijate la fecha de Nyepi (en marzo, según el calendario balinés): ese día no se puede salir del hotel y no hay vuelos. En Java, el Ramadán cambia horarios y algunos restaurantes cierran de día.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Indonesia",
      body: [
        "Entre islas, vuelos internos o lanchas rápidas: de Bali a las Gili o a Lombok se cruza en lancha; a Flores, Java o Sumatra, en avión.",
        "En Bali casi no hay transporte público: Grab y Gojek, con auto o moto, o un chofer por el día. Manejar moto pide licencia internacional, y los seguros de viaje no suelen cubrir accidentes en moto sin ella.",
        "Las precauciones son las de cualquier destino turístico: la mochila cerrada en los mercados y el celular firme si vas en moto.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Borobudur y Prambanan en Java, y templos hindúes en cada pueblo de Bali.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Nasi goreng, satay, rendang y la comida de los warungs, barata y sabrosa.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Volcanes activos, arrozales en terrazas, el lago Toba y los islotes de Raja Ampat.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Bali, las Gili, Komodo y Raja Ampat: playas, buceo y snorkel de primer nivel.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Comer y dormir sale poco; Raja Ampat y las excursiones en barco, bastante más.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Bali es fácil; entre islas, vuelos y lanchas que conviene encadenar con margen.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Precios estables; en mercados y con choferes, el precio se acuerda antes.",
    },
  ],

  shines: [
    "Paisajes de volcanes, arrozales y mar en un mismo viaje.",
    "Buceo y snorkel entre los mejores del mundo.",
    "Bali: fácil, barata y con una cultura viva.",
  ],

  costs: [
    "Distancias largas entre islas.",
    "Poco transporte público en Bali.",
    "La estación de lluvias, de noviembre a marzo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Bali en enero que el Bromo en julio. La base es Ubud, en Bali. Los precios están en rupias y son órdenes de magnitud.",

  places: [
    {
      id: "ubud",
      name: "Ubud (Bali)",
      region: "Bali",
      tag: "Arrozales y templos",
      blurb:
        "El corazón cultural de Bali: arrozales en terrazas, templos, danzas y el bosque de los monos. Es la base del planificador: caluroso todo el año, seco de abril a octubre y lluvioso de noviembre a marzo.",
      coords: [-8.5069, 115.2625],
      featured: true,
      image: null,
    },
    {
      id: "seminyak",
      name: "Seminyak y Canggu (Bali)",
      region: "Bali",
      tag: "Playa y atardeceres",
      blurb:
        "Playas de surf, cafés y atardeceres en la costa oeste, y el templo de Tanah Lot sobre una roca en el mar.",
      coords: [-8.6913, 115.1682],
      image: null,
    },
    {
      id: "yakarta",
      name: "Yakarta",
      region: "Java",
      tag: "La capital",
      blurb:
        "La ciudad vieja holandesa de Kota Tua, el Monumento Nacional y la gran mezquita Istiqlal. Casi siempre, un lugar de paso.",
      coords: [-6.2088, 106.8456],
      image: null,
    },
    {
      id: "yogyakarta",
      name: "Yogyakarta",
      region: "Java",
      tag: "Borobudur y Prambanan",
      blurb:
        "La ciudad del sultanato, con su palacio, el batik y la base para Borobudur al amanecer y Prambanan al atardecer.",
      coords: [-7.7956, 110.3695],
      image: null,
    },
    {
      id: "gili-trawangan",
      name: "Islas Gili",
      region: "Lombok",
      tag: "Islas sin autos",
      blurb:
        "Tres islas chicas frente a Lombok, sin autos ni motos: se recorren a pie, en bicicleta o en carro. Snorkel con tortugas.",
      coords: [-8.35, 116.04],
      image: null,
    },
    {
      id: "labuan-bajo",
      name: "Labuan Bajo y Komodo",
      region: "Flores",
      tag: "Dragones y barcos",
      blurb:
        "La puerta al parque nacional de Komodo: dragones, la playa rosa y snorkel con mantarrayas. La más seca de Indonesia de mayo a octubre.",
      coords: [-8.4964, 119.8877],
      image: null,
    },
    {
      id: "bromo",
      name: "Monte Bromo",
      region: "Java",
      tag: "Volcán al amanecer",
      blurb:
        "Un cráter humeante en medio de un mar de arena, que se mira al amanecer desde el mirador. A más de dos mil metros: las madrugadas son frías.",
      coords: [-7.93, 112.95],
      image: null,
    },
    {
      id: "lago-toba",
      name: "Lago Toba (Sumatra)",
      region: "Sumatra",
      tag: "El lago del supervolcán",
      blurb:
        "Un lago enorme dentro de la caldera de un volcán, con la isla de Samosir en el medio y las casas de techo curvo de los batak. Templado por la altura.",
      coords: [2.66, 98.93],
      image: null,
    },
    {
      id: "raja-ampat",
      name: "Raja Ampat",
      region: "Papúa",
      tag: "Arrecifes del fin del mundo",
      blurb:
        "Islotes verdes sobre agua turquesa y uno de los arrecifes con más vida del planeta. Remoto y caro: se llega en vuelo y ferry.",
      coords: [-0.43, 130.82],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Indonesia es calor todo el año: ropa liviana que se seque rápido, protector alto, repelente y sandalias. De noviembre a marzo, un impermeable liviano. Para los templos, un sarong y algo que cubra los hombros; para el amanecer en el Bromo, una campera de abrigo. Y efectivo en rupias para todo lo que no sea Bali.",
    keyPoints: [
      "Al sur del ecuador: seco de abril a octubre, lluvioso de noviembre a marzo.",
      "Los templos piden sarong y hombros cubiertos.",
      "En Bali, fijate la fecha de Nyepi: ese día no hay vuelos.",
      "Fuera de Bali, efectivo en rupias.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, protector alto, sombrero, repelente y mucha agua. De noviembre a marzo, sumá un impermeable liviano.",
      templado:
        "Ropa liviana y un buzo para la noche: es el clima de Ubud de noche y del lago Toba.",
      fresco:
        "Un buzo abrigado y una campera para la noche en la montaña, como en los alrededores del Bromo.",
      frio: "Campera de abrigo, gorro y guantes para la madrugada en el mirador del Bromo, que en julio y agosto baja a pocos grados.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los enchufes de dos patas redondas, como en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Usá Grab o Gojek en Bali",
          body: "Autos y motos con precio fijo antes de subir. Para un día de templos, un chofer con auto sale bien.",
        },
        {
          title: "Llevá un sarong",
          body: "Los templos lo piden; muchos lo prestan o alquilan en la entrada, pero tener el propio es más fácil.",
        },
        {
          title: "Subí al Bromo de madrugada",
          body: "El amanecer desde el mirador es el momento: llevá abrigo, que hace frío hasta que sale el sol.",
        },
        {
          title: "Reservá las lanchas con margen",
          body: "Las lanchas rápidas a las Gili y Lombok dependen del mar. Dejá un día libre antes de un vuelo.",
        },
        {
          title: "Contá los ceros",
          body: "En los menús, 50K son 50.000 rupias. Antes de pagar, mirá dos veces el billete.",
        },
        {
          title: "Elegí pagar en rupias",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No reserves un vuelo en Nyepi",
          body: "El día de silencio de Bali, en marzo, el aeropuerto cierra y no se puede salir del hotel.",
        },
        {
          title: "No manejes moto sin licencia internacional",
          body: "Además de la multa, los seguros de viaje no suelen cubrir accidentes sin licencia.",
        },
        {
          title: "No entres a un templo descubierto",
          body: "Sarong, hombros cubiertos y, en algunos, no se entra si estás menstruando: lo dice el cartel de la entrada.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada es barata; muchos alojamientos tienen bidones para recargar la botella.",
        },
        {
          title: "No toques a los monos de Ubud",
          body: "Ni les muestres comida: anteojos, gorras y celulares desaparecen en segundos.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "info",
          title: "Seco de abril a octubre",
          body: "Es al revés que en el hemisferio norte de Asia: el invierno del sur es la temporada seca. Mirá el clima de la isla en el planificador.",
        },
        summary: "Lo que pide el trópico",
        items: [
          "Protector solar alto y resistente al agua",
          "Sombrero y anteojos de sol",
          "Repelente de mosquitos",
          "Sandalias y ojotas",
          "Un impermeable liviano de noviembre a marzo",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes entran con visa a la llegada, que se puede pagar online antes; hay un formulario digital de llegada y Bali cobra su propia tasa. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas libres",
          "Visa electrónica o el pago de la visa a la llegada",
          "El formulario digital de llegada completado",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "templos",
        title: "Templos y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Un sarong",
          "Algo que cubra los hombros",
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
          "Sales de rehidratación y algo para el estómago",
          "Crema para después del sol y para las picaduras",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa de abrigo pesada",
        why: "Hace calor todo el año; solo el Bromo de madrugada pide abrigo.",
        instead: "Una campera liviana que abrigue y se guarde chica.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Bali, y en warungs y mercados, se paga en efectivo.",
        instead: "Rupias en efectivo y una tarjeta.",
      },
      {
        leave: "Musculosas y shorts para los templos",
        why: "Piden sarong y hombros cubiertos.",
        instead: "Un sarong y una camisa liviana.",
      },
      {
        leave: "Una valija enorme",
        why: "Las lanchas a las islas no tienen muelle en todos lados: a veces se baja por el agua.",
        instead: "Una mochila o una valija mediana.",
      },
      {
        leave: "Zapatillas pesadas",
        why: "Con el calor y la lluvia, no se secan.",
        instead: "Sandalias de trekking y unas ojotas.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Indonesia?",
        answer:
          "Depende del pasaporte. Muchos latinoamericanos pueden pagar la visa a la llegada, o antes, online, como visa electrónica. Verificalo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a septiembre, la estación seca. El lago Toba y Raja Ampat tienen la lluvia repartida en el año.",
      },
      {
        question: "¿Qué es Nyepi?",
        answer:
          "El día de silencio de Bali, en marzo: no se sale a la calle, no hay luces ni vuelos. Fijate la fecha antes de reservar.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. Indonesia usa los tipos C y F, de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cómo me muevo por Bali?",
        answer:
          "Con Grab o Gojek, o con un chofer por el día. Casi no hay transporte público.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria; muchos restaurantes ya suman servicio. Con guías y choferes, dejar algo es bien recibido.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada es barata y está en todos lados.",
      },
      {
        question: "¿Cómo llego a las islas Gili?",
        answer:
          "En lancha rápida desde Bali o desde Lombok. Dependen del mar: dejá margen antes de un vuelo.",
      },
    ],
  },
};
