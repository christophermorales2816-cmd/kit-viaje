import type { DestinationGuide } from "./types";

/**
 * Guía de Vanuatu.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un volcán activo al que se sube hasta el borde del
 * cráter —el Yasur, el dato de su portada—, con una entrada fija y cara que la
 * migración carga aparte para Tanna, y el salto del naghol, que se hace solo
 * de abril a junio. Se maneja por la derecha, como en Nueva Caledonia y a
 * diferencia de Fiyi, Papúa y las Salomón. El vatu no lleva centavos (spec,
 * 16.3).
 */
export const vanuatu: DestinationGuide = {
  slug: "vanuatu",
  country: "Vanuatu",
  subregion: "Melanesia",
  subhead:
    "La lava del volcán Yasur en Tanna, el salto del naghol en Pentecostés, el naufragio del Coolidge y Champagne Beach en Espíritu Santo, y las cascadas y el correo submarino de Port Vila.",

  image: null,

  highlights: [
    {
      value: "Lava a la vista",
      label: "desde el borde del volcán Yasur, en Tanna",
      note: "Uno de los volcanes activos más accesibles del mundo: se sube en camioneta y a pie hasta el borde del cráter, y al atardecer se ven las explosiones de lava. Cuando la actividad sube, el acceso se limita.",
    },
    {
      value: "Naghol",
      label: "el salto de Pentecostés que inspiró el bungee",
      note: "De abril a junio, los hombres del sur de Pentecostés se tiran desde torres de madera atados de los tobillos con lianas, para que la cosecha de ñame sea buena.",
    },
    {
      value: "Correo submarino",
      label: "frente a Port Vila",
      note: "En la isla Hideaway hay un buzón a tres metros de profundidad: se compran postales impermeables y se mandan buceando o con snorkel.",
    },
    {
      value: "Bislama",
      label: "el criollo que une más de cien lenguas",
      note: "Vanuatu tiene más lenguas por habitante que ningún otro país. Para entenderse se usa el bislama, un criollo de base inglesa, además del inglés y el francés.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Vanuatu",
      body: [
        "Muchos pasaportes entran sin visa por estadías cortas, con el permiso que se da al llegar, el pasaje de salida y fondos para la estadía; otros tramitan la visa antes. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "El pasaporte tiene que tener al menos seis meses de vigencia. Al llegar se declaran la comida, las plantas y los productos de origen animal.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Vanuatu",
      body: [
        "La moneda es el vatu. En Port Vila y Luganville, los hoteles, los restaurantes y los supermercados aceptan tarjeta; en el resto de las islas se paga en efectivo.",
        "Hay cajeros en Port Vila y Luganville, y muy pocos en las otras islas: sacá lo que vayas a necesitar antes de salir.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí vatus: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo, y un invierno más fresco",
      body: [
        "De noviembre a abril, calor húmedo, lluvias y ciclones; de mayo a octubre, una temporada más seca y fresca, con alisios. De agosto a octubre es lo más seco del año.",
        "Espíritu Santo, en el norte, es más caluroso y más lluvioso que Efate; Tanna, en el sur, más fresco: las noches de julio y agosto rondan los quince grados.",
        "El mar está templado todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada más seca, con menos calor y sin ciclones, la mejor para los volcanes y el buceo.",
        "El salto del naghol, en Pentecostés, se hace de abril a junio.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Vanuatu",
      body: [
        "Entre las islas se va en vuelo interno, desde Port Vila a Tanna, Espíritu Santo y las islas chicas, o en barcos de carga con pasajeros, lentos y sin horario fijo.",
        "En Port Vila y Luganville hay minibuses, con una B en la patente, que paran a pedido, y taxis, con una T.",
        "Se maneja por la derecha. En Tanna los caminos son de tierra, y al volcán se va en camioneta.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "El kastom, las tradiciones de los pueblos, y huellas de la guerra en Santo.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Laplap, pescado, la carne de Santo y cocina francesa en Port Vila.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Volcanes activos, cascadas, selva y arrecifes.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale: "Champagne Beach y la arena blanca de Santo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Port Vila tiene de todo; las islas, alojamiento sencillo y caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Vuelos internos que cambian y caminos de tierra en las islas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale: "El vatu se mueve poco y hay precios a la vista.",
    },
  ],

  shines: [
    "El volcán Yasur.",
    "Buceo en el naufragio del Coolidge.",
    "Pueblos que mantienen sus costumbres.",
  ],

  costs: [
    "Vuelos internos caros y que cambian.",
    "Lluvias y ciclones de noviembre a abril.",
    "Malaria en el norte del país.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Port Vila en enero que Tanna o Espíritu Santo. Los precios están en vatus y son órdenes de magnitud; la visita al volcán Yasur y los vuelos internos cuestan bastante más.",

  places: [
    {
      id: "port-vila",
      name: "Port Vila",
      region: "Shefa",
      tag: "La capital",
      blurb:
        "La capital, sobre una bahía de la isla de Efate, con el mercado, restaurantes franceses, el museo nacional e islas frente al puerto. Es la base del planificador: calor húmedo, con lluvias de noviembre a julio; de agosto a octubre, lo más seco del año.",
      coords: [-17.7333, 168.3273],
      featured: true,
      image: null,
    },
    {
      id: "bahia-de-mele",
      name: "Bahía de Mele (cascadas)",
      region: "Shefa",
      tag: "Las cascadas",
      blurb:
        "Las cascadas de Mele, que bajan en piletas de agua turquesa entre la selva, a un rato de Port Vila.",
      coords: [-17.69, 168.26],
      image: null,
    },
    {
      id: "isla-hideaway",
      name: "Isla Hideaway (correo submarino)",
      region: "Shefa",
      tag: "El correo submarino",
      blurb:
        "Una isla chica en la bahía de Mele, con una reserva marina para el snorkel y un buzón a tres metros de profundidad, donde se mandan postales impermeables.",
      coords: [-17.7, 168.25],
      image: null,
    },
    {
      id: "tanna",
      name: "Tanna (volcán Yasur)",
      region: "Tafea",
      tag: "El volcán",
      blurb:
        "La isla del volcán Yasur, al que se sube al atardecer para ver la lava, con pueblos de kastom y el culto de John Frum. Más fresca que Efate: las noches de invierno rondan los quince grados.",
      coords: [-19.53, 169.45],
      image: null,
    },
    {
      id: "luganville",
      name: "Luganville (Espíritu Santo)",
      region: "Sanma",
      tag: "Buceo y la guerra",
      blurb:
        "El pueblo de Espíritu Santo, base de Estados Unidos en la Segunda Guerra, con el naufragio del SS President Coolidge, uno de los buceos más famosos del mundo, y el Million Dollar Point.",
      coords: [-15.5126, 167.1766],
      image: null,
    },
    {
      id: "champagne-beach",
      name: "Champagne Beach",
      region: "Sanma",
      tag: "La playa",
      blurb:
        "Una de las playas más lindas del Pacífico, de arena blanca y agua transparente, en el este de Espíritu Santo, con los blue holes de agua dulce de camino.",
      coords: [-15.15, 167.12],
      image: null,
    },
    {
      id: "pentecostes",
      name: "Pentecostés (el salto del naghol)",
      region: "Penama",
      tag: "El salto del naghol",
      blurb:
        "La isla del naghol, que se salta de abril a junio desde torres de madera, atado con lianas. El resto del año, pueblos, cascadas y caminatas.",
      coords: [-15.7, 168.17],
      image: null,
    },
    {
      id: "malekula",
      name: "Malekula",
      region: "Malampa",
      tag: "Pueblos de kastom",
      blurb:
        "La segunda isla más grande, con los pueblos de los Small Nambas y los Big Nambas, danzas tradicionales y las islas Maskelyne, en el sur.",
      coords: [-16.11, 167.42],
      image: null,
    },
    {
      id: "ambrym",
      name: "Ambrym (volcanes)",
      region: "Malampa",
      tag: "La isla negra",
      blurb:
        "La isla negra, por la ceniza de los volcanes Marum y Benbow, con caminatas a los cráteres, tallas en helecho arborescente y la danza del rom.",
      coords: [-16.25, 168.12],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Vanuatu, ropa liviana y fresca, traje de baño, protector y repelente: hace calor húmedo casi todo el año. Para Tanna y el volcán, un buzo y calzado cerrado. Efectivo para las islas, y la consulta por la malaria si vas al norte.",
    keyPoints: [
      "Muchos pasaportes entran sin visa: verificá el tuyo antes de viajar.",
      "Temporada más seca y fresca de mayo a octubre; lluvias y ciclones de noviembre a abril.",
      "Efectivo para las islas: fuera de Port Vila y Luganville hay pocos cajeros.",
      "Malaria en el norte, en Espíritu Santo y Malekula: consultá con un médico de viajes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana y un buzo para las noches y el volcán.",
      fresco:
        "Un buzo y una campera liviana para Tanna y las noches del volcán.",
      frio: "No hace frío en Vanuatu: un buzo alcanza, aun en el volcán.",
    },
    plug: {
      types: "Tipo I",
      voltage: "230 V, 50 Hz",
      note: "Es el enchufe de patas planas en V, el mismo de Argentina y de Australia. Si el tuyo es de otro tipo, llevá adaptador. En las islas chicas, la luz puede depender de un generador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Subí al Yasur al atardecer",
          body: "La lava se ve con la última luz, y mejor todavía de noche.",
        },
        {
          title: "Probá el laplap",
          body: "Un pastel de raíces rallado con coco y cocido en hojas, bajo tierra.",
        },
        {
          title: "Pagá la entrada de cada pueblo",
          body: "Las playas, las cascadas y las cuevas tienen dueño, y se visitan pagándole al pueblo.",
        },
        {
          title: "Buceá en el Coolidge",
          body: "Un transatlántico hundido en la guerra, frente a Luganville, al que se entra caminando desde la costa.",
        },
        {
          title: "Dejá días de margen",
          body: "Los vuelos internos cambian de horario seguido.",
        },
        {
          title: "Elegí pagar en vatus",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No pases la línea que marca el guía",
          body: "En el Yasur, la distancia al cráter depende de la actividad del día.",
        },
        {
          title: "No uses ropa corta en los pueblos",
          body: "Se tapan rodillas y hombros.",
        },
        {
          title: "No fotografíes una ceremonia sin permiso",
          body: "Algunas no se fotografían, y en otras se paga.",
        },
        {
          title: "No cuentes con la tarjeta en las islas",
          body: "Fuera de Port Vila y Luganville, todo se paga en efectivo.",
        },
        {
          title: "No regatees",
          body: "No es costumbre: el precio que te dicen es el precio.",
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
          title: "Permiso al llegar",
          body: "Muchos pasaportes reciben el permiso de visitante al llegar, con el pasaje de salida y el pasaporte con seis meses de vigencia. Verificá el tuyo.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con seis meses de vigencia",
          "Pasaje de salida del país",
          "Reserva del alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "volcan",
        title: "Para el volcán",
        notice: {
          tone: "info",
          title: "Un acceso que cambia",
          body: "Cuando la actividad del Yasur sube, el acceso al cráter se limita o se cierra: dejá un día de margen en Tanna.",
        },
        summary: "Tanna y el Yasur",
        items: [
          "Calzado cerrado",
          "Un buzo o una campera liviana",
          "Una linterna",
          "Una bolsa para cubrir la cámara de la ceniza",
        ],
      },
      {
        id: "mar",
        title: "Para el mar",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "El sol quema en minutos, aun con nubes: protector alto, sombrero y una remera de lycra para el snorkel.",
        },
        summary: "Playas, arrecife y naufragios",
        items: [
          "Protector solar alto, que no dañe el arrecife",
          "Traje de baño y una remera de lycra",
          "Calzado para el agua",
          "Una bolsa estanca para los barcos",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en buena parte del país, sobre todo en el norte, en Espíritu Santo y Malekula; en Port Vila y Tanna el riesgo es bajo. Consultá con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Port Vila y Luganville casi nadie la acepta.",
        instead: "Efectivo en vatus.",
      },
      {
        leave: "Ropa corta para los pueblos",
        why: "En los pueblos se tapan rodillas y hombros.",
        instead: "Pantalones livianos o un pareo largo.",
      },
      {
        leave: "Solo ropa de verano",
        why: "En el volcán y en las noches de invierno de Tanna refresca.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Un itinerario sin margen",
        why: "Los vuelos internos cambian, y el volcán puede cerrar un día.",
        instead: "Días libres en Tanna y antes del vuelo internacional.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los vuelos internos el equipaje tiene un límite bajo.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Vanuatu?",
        answer:
          "Muchos pasaportes entran sin visa por estadías cortas, con el permiso que se da al llegar; otros la tramitan antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada más seca y fresca. De noviembre a abril llueve más, y algunos años hay ciclones.",
      },
      {
        question: "¿Cómo se visita el volcán Yasur?",
        answer:
          "Desde Tanna, con una excursión que sube al atardecer hasta el borde del cráter. A Tanna se llega en vuelo interno desde Port Vila.",
      },
      {
        question: "¿Cuándo es el salto del naghol?",
        answer:
          "De abril a junio, en el sur de Pentecostés. Se llega en vuelo interno.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en buena parte del país, sobre todo en el norte; en Port Vila y Tanna el riesgo es bajo. Consultá con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El bislama, un criollo de base inglesa, el inglés y el francés. Hay además más de cien lenguas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si venís de Argentina, no: el enchufe es el mismo. Desde otros países, sí: son los de patas planas en V, a 230 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Port Vila y Luganville, sí. En las otras islas, mejor tomá embotellada o filtrada.",
      },
    ],
  },
};
