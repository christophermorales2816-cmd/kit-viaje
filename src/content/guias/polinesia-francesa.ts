import type { DestinationGuide } from "./types";

/**
 * Guía de la Polinesia Francesa.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: islas repartidas en un mar del tamaño de Europa
 * —el dato de su portada—, con tres husos horarios: las Marquesas tienen
 * media hora menos que Tahití. Entra por la decisión de la sección 16.2, con
 * moneda y reglas de entrada propias, como Nueva Caledonia. Bora Bora lleva
 * el factor más alto que admite el generador (2,5): sus hoteles sobre el agua
 * cuestan bastante más.
 */
export const polinesiaFrancesa: DestinationGuide = {
  slug: "polinesia-francesa",
  country: "Polinesia Francesa",
  subregion: "Polinesia",
  subhead:
    "Las lagunas de Bora Bora y Moorea, los atolones de Rangiroa y Fakarava con sus tiburones, la Raiatea sagrada, la vainilla de Taha'a y los valles de las Marquesas.",

  image: null,

  highlights: [
    {
      value: "118 islas",
      label: "repartidas en un mar del tamaño de Europa",
      note: "Cinco archipiélagos: la Sociedad, con Tahití, Moorea y Bora Bora; las Tuamotu, de atolones; las Marquesas, las Australes y las Gambier. Entre ellos se va en avión.",
    },
    {
      value: "Sobre el agua",
      label: "los bungalós de Bora Bora",
      note: "Los bungalós sobre la laguna nacieron en la Polinesia, en los años sesenta. En Bora Bora son la postal, y cuestan bastante más que un hotel común.",
    },
    {
      value: "Tiburones",
      label: "por cientos en los pasos de las Tuamotu",
      note: "En los pasos de los atolones, como Fakarava y Rangiroa, se bucea con cientos de tiburones grises, y en las lagunas se nada con rayas.",
    },
    {
      value: "Media hora",
      label: "menos en las Marquesas que en Tahití",
      note: "Las Marquesas tienen media hora menos que Tahití, y las Gambier, una hora más. Revisá la hora de cada vuelo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a la Polinesia Francesa",
      body: [
        "La Polinesia es un territorio francés con reglas de entrada propias: muchos pasaportes entran sin visa por estadías cortas, y los que la necesitan la piden para la Polinesia en particular. Una visa Schengen sola no alcanza. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "En la frontera piden el pasaje de salida, y al llegar se declaran la comida, las plantas y los productos de origen animal.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en la Polinesia",
      body: [
        "La moneda es el franco del Pacífico, o franco CFP, el mismo de Nueva Caledonia, atado al euro. En Tahití, Moorea y Bora Bora la tarjeta se acepta en casi todos lados.",
        "En los atolones y las Marquesas hay pocos cajeros: llevá efectivo. Los euros se cambian en los bancos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos del Pacífico: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor todo el año, y una temporada de lluvias",
      body: [
        "Calor húmedo todo el año. De noviembre a abril es la temporada de lluvias, más calurosa, con ciclones algunos años; de mayo a octubre, la seca, más fresca, con los alisios.",
        "Las Tuamotu, de atolones bajos, son más secas que las islas altas de la Sociedad.",
        "El mar está templado todo el año, bueno para nadar y bucear.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a octubre: la temporada seca, con menos calor y menos lluvia. De julio a octubre llegan las ballenas jorobadas a Tahití, Moorea y las Australes.",
        "En julio se hace el Heiva, el festival de danza y canto tahitiano, en Papeete.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por la Polinesia",
      body: [
        "Entre las islas se va en avión, con vuelos desde Papeete a casi todas, y a Moorea en ferry, en menos de una hora.",
        "En Tahití hay buses y taxis; en las islas chicas se alquila una bici, un scooter o un auto.",
        "Se maneja por la derecha, como en Francia. Las Marquesas tienen media hora menos que Tahití: revisá la hora de cada vuelo.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "Los marae polinesios, la historia de los navegantes y los años de Gauguin.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale: "Poisson cru, cocina francesa y las roulottes de Papeete.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale: "Lagunas turquesa, picos volcánicos y atolones.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale: "Arena blanca y rosada en los atolones; negra en Tahití.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 3,
      rationale: "De lo más caro del mundo, sobre todo en Bora Bora.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale: "Vuelos a casi todas las islas, aunque caros.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco del Pacífico está atado al euro.",
    },
  ],

  shines: [
    "Las lagunas de Bora Bora y Moorea.",
    "Buceo con tiburones en las Tuamotu.",
    "La cultura de la danza y del tatuaje.",
  ],

  costs: [
    "De lo más caro del mundo.",
    "Vuelos entre islas caros.",
    "Lejos de todo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Papeete en enero que Rangiroa o Nuku Hiva. Los precios están en francos del Pacífico y son órdenes de magnitud; en Bora Bora todo cuesta mucho más, y los vuelos entre islas, también.",

  places: [
    {
      id: "papeete",
      name: "Papeete (Tahití)",
      region: "Islas de la Sociedad",
      tag: "La capital",
      blurb:
        "La capital, en Tahití, con el mercado, las roulottes del puerto por la noche, playas de arena negra y un interior de montañas y cascadas. Es la base del planificador: calor todo el año, con lluvias de noviembre a marzo y una temporada seca de abril a octubre.",
      coords: [-17.5516, -149.5585],
      featured: true,
      image: null,
    },
    {
      id: "moorea",
      name: "Moorea",
      region: "Islas de la Sociedad",
      tag: "La isla de enfrente",
      blurb:
        "La isla de enfrente, a menos de una hora de ferry, con picos verdes, las bahías de Cook y de Opunohu, y snorkel con rayas y tiburones en la laguna.",
      coords: [-17.5388, -149.8295],
      image: null,
    },
    {
      id: "bora-bora",
      name: "Bora Bora",
      region: "Islas de la Sociedad",
      tag: "La laguna",
      blurb:
        "La laguna más famosa del Pacífico, alrededor del monte Otemanu, con hoteles sobre el agua y snorkel con rayas y tiburones. Lo más caro del planificador en Oceanía.",
      coords: [-16.5004, -151.7415],
      image: null,
    },
    {
      id: "huahine",
      name: "Huahine",
      region: "Islas de la Sociedad",
      tag: "La isla tranquila",
      blurb:
        "Dos islas unidas por un puente, con marae antiguos, anguilas sagradas de ojos azules y pueblos que viven a su ritmo.",
      coords: [-16.73, -151.03],
      image: null,
    },
    {
      id: "raiatea",
      name: "Raiatea (marae de Taputapuātea)",
      region: "Islas de la Sociedad",
      tag: "La isla sagrada",
      blurb:
        "La isla sagrada de la Polinesia, con el marae de Taputapuātea, patrimonio de la humanidad, de donde salían los navegantes, y el único río navegable del territorio.",
      coords: [-16.83, -151.37],
      image: null,
    },
    {
      id: "tahaa",
      name: "Taha'a (vainilla)",
      region: "Islas de la Sociedad",
      tag: "La isla de la vainilla",
      blurb:
        "La isla de la vainilla, en la misma laguna que Raiatea, con plantaciones, granjas de perlas y un jardín de coral donde se nada a favor de la corriente.",
      coords: [-16.62, -151.5],
      image: null,
    },
    {
      id: "rangiroa",
      name: "Rangiroa (atolón)",
      region: "Tuamotu",
      tag: "El atolón",
      blurb:
        "Uno de los atolones más grandes del mundo, con una laguna donde entraría Tahití entera, delfines en el paso de Tiputa y el único viñedo sobre un atolón.",
      coords: [-14.97, -147.63],
      image: null,
    },
    {
      id: "fakarava",
      name: "Fakarava",
      region: "Tuamotu",
      tag: "La pared de tiburones",
      blurb:
        "Un atolón reserva de la biosfera, con cientos de tiburones grises en el paso sur y playas de arena rosada.",
      coords: [-16.06, -145.62],
      image: null,
    },
    {
      id: "nuku-hiva",
      name: "Nuku Hiva (Marquesas)",
      region: "Islas Marquesas",
      tag: "Las Marquesas",
      blurb:
        "La isla más grande de las Marquesas, de acantilados y valles verdes, con tikis de piedra y la bahía de Taiohae. Tiene media hora menos que Tahití.",
      coords: [-8.91, -140.1],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para la Polinesia, ropa liviana, traje de baño, protector que no dañe el coral, sombrero y repelente: hace calor todo el año. De noviembre a abril, algo impermeable. Revisá la entrada para tu pasaporte —es un territorio francés con reglas propias— y armá el presupuesto con margen: es de lo más caro del mundo.",
    keyPoints: [
      "Reglas de entrada propias: una visa Schengen sola no alcanza.",
      "Temporada seca de mayo a octubre; lluvias de noviembre a abril.",
      "Entre las islas se vuela, salvo a Moorea, que tiene ferry.",
      "Precios muy altos, sobre todo en Bora Bora.",
    ],
    adviceByBucket: {
      calido: "Ropa liviana, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana y un buzo fino para las noches de la temporada seca.",
      fresco: "Un buzo liviano para las noches y los barcos.",
      frio: "No hace frío en la Polinesia: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipo A, tipo B y tipo E",
      voltage: "220 V, 60 Hz",
      note: "Hay tomas de dos patas redondas, como en Francia, y en muchos hoteles, de patas planas, como en Estados Unidos. Ojo: aunque el enchufe estadounidense entre, la corriente es de 220 V. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Verificá la entrada para tu pasaporte",
          body: "La Polinesia tiene su propia lista de visas: la de Francia o la Schengen no alcanzan solas.",
        },
        {
          title: "Probá el poisson cru",
          body: "Pescado crudo con limón y leche de coco, el plato de las islas.",
        },
        {
          title: "Comé en las roulottes",
          body: "Los puestos de comida del puerto de Papeete, por la noche, son de lo más barato y de lo más rico.",
        },
        {
          title: "Buscá un pase de islas",
          body: "Las aerolíneas venden pases para varias islas, que suelen salir más baratos que los tramos sueltos.",
        },
        {
          title: "Usá protector que no dañe el coral",
          body: "Y una remera de lycra para el snorkel: el sol quema rápido en el agua.",
        },
        {
          title: "Elegí pagar en francos del Pacífico",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No pises el coral",
          body: "Se rompe con nada, y corta.",
        },
        {
          title: "No toques a las rayas ni a los tiburones",
          body: "Se nada cerca, pero sin tocarlos.",
        },
        {
          title: "No subestimes los precios",
          body: "Hasta lo básico cuesta caro: el supermercado ayuda.",
        },
        {
          title: "No armes el viaje solo en Bora Bora",
          body: "Huahine, Taha'a y los atolones son más tranquilos y menos caros.",
        },
        {
          title: "No dejes los vuelos para último momento",
          body: "Entre las islas hay pocos asientos, y se llenan.",
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
          tone: "warn",
          title: "Reglas de entrada propias",
          body: "La Polinesia tiene su propia lista de visas: verificá tu pasaporte, porque una visa Schengen sola no alcanza. En la frontera piden el pasaje de salida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa para la Polinesia, si tu pasaporte la necesita",
          "Pasaje de salida del territorio",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "laguna",
        title: "Para la laguna",
        notice: {
          tone: "warn",
          title: "Un sol muy fuerte",
          body: "El sol del trópico quema rápido, sobre todo en el agua: protector alto, sombrero y una remera de lycra.",
        },
        summary: "Playas, snorkel y barcos",
        items: [
          "Protector solar que no dañe el arrecife",
          "Máscara, snorkel y calzado para el agua",
          "Traje de baño y una remera de lycra",
          "Una bolsa estanca para los barcos",
        ],
      },
      {
        id: "islas",
        title: "Para los atolones y las Marquesas",
        notice: {
          tone: "info",
          title: "Pocos cajeros",
          body: "En los atolones y las Marquesas hay pocos cajeros: llevá efectivo además de la tarjeta.",
        },
        summary: "Lejos de Tahití",
        items: [
          "Efectivo en francos del Pacífico",
          "Una linterna",
          "Repelente para los jejenes de las Marquesas",
          "Calzado para caminar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "info",
          title: "Dengue",
          body: "En la temporada de lluvias hay dengue: repelente y manga larga al atardecer. No hay malaria.",
        },
        summary: "Botiquín",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Seguro de viaje con cobertura médica: la salud es cara",
        ],
      },
    ],
    avoid: [
      {
        leave: "Un presupuesto justo",
        why: "Comer, dormir y moverse entre islas cuesta mucho.",
        instead: "Un margen grande, y el supermercado para algunas comidas.",
      },
      {
        leave: "Euros para pagar",
        why: "En la calle se paga en francos del Pacífico.",
        instead: "Euros para cambiar, o la tarjeta.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los vuelos entre islas el equipaje tiene un límite bajo.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral de las lagunas.",
        instead: "Uno que no dañe el arrecife.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a la Polinesia Francesa?",
        answer:
          "Depende del pasaporte: es un territorio francés con su propia lista de visas, y una visa Schengen sola no alcanza. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De mayo a octubre, la temporada seca. En julio es el Heiva, el festival de danza de Papeete.",
      },
      {
        question: "¿Cómo me muevo entre las islas?",
        answer:
          "En avión desde Papeete, y a Moorea en ferry. Los pases de varias islas suelen salir más baratos que los tramos sueltos.",
      },
      {
        question: "¿Hay opciones más baratas que Bora Bora?",
        answer:
          "Sí: Huahine, Taha'a, Moorea y los atolones de las Tuamotu tienen pensiones familiares y lagunas igual de lindas.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El franco del Pacífico, o franco CFP, atado al euro. Los euros se cambian en los bancos.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés y el tahitiano. En los hoteles y con los guías, el inglés se entiende.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Desde Argentina, sí: hay tomas de dos patas redondas y de patas planas, a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Papeete y Bora Bora, sí. En los atolones, mejor tomá embotellada.",
      },
    ],
  },
};
