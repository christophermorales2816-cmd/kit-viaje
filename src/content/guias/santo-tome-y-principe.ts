import type { DestinationGuide } from "./types";

/**
 * Guía de Santo Tomé y Príncipe.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer país de África Central en la portada, y
 * el ecuador, que se pisa en el Ilhéu das Rolas. Dos islas con calor húmedo
 * todo el año y una sola temporada seca, la gravana, de junio a septiembre,
 * que es el dato de su portada. El norte, alrededor de la capital, es lo más
 * seco —ni Santo Tomé ni la Lagoa Azul llegan al bucket de lluvia (spec,
 * 14.12)—, y el sur y la montaña se mojan nueve meses de doce.
 * La dobra está atada al euro, y las tarjetas extranjeras casi no funcionan.
 * Los resorts de Príncipe y del Ilhéu das Rolas entran por su factor de precios.
 */
export const santoTomeYPrincipe: DestinationGuide = {
  slug: "santo-tome-y-principe",
  country: "Santo Tomé y Príncipe",
  subregion: "África Central",
  subhead:
    "Las roças del cacao, la selva del Parque Obô, el Pico Cão Grande, las playas de Príncipe y la línea del ecuador en el Ilhéu das Rolas. Dos islas en el golfo de Guinea, a ritmo leve-leve.",

  image: null,

  highlights: [
    {
      value: "Lluvia",
      label: "casi todo el año, menos de junio a septiembre",
      note: "Esos cuatro meses son la gravana, la temporada seca y más fresca, la mejor para caminar en la selva y ver ballenas. El sur y la montaña son lo más lluvioso; el norte, alrededor de la capital, es bastante más seco.",
    },
    {
      value: "Cacao",
      label: "las roças, las haciendas del cacao y del café",
      note: "A comienzos del siglo veinte, las islas fueron el mayor productor de cacao del mundo. Muchas roças se visitan, y algunas son hoteles.",
    },
    {
      value: "Ecuador",
      label: "una línea que se pisa en el Ilhéu das Rolas",
      note: "Un monumento marca el paralelo cero en un islote del sur, a un cruce corto en lancha desde Porto Alegre.",
    },
    {
      value: "Pico Cão Grande",
      label: "una aguja volcánica que sale de la selva",
      note: "Una torre de roca de más de trescientos metros en el sur de la isla de Santo Tomé. Se ve desde la ruta, y solo se escala con experiencia.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Santo Tomé y Príncipe",
      body: [
        "Muchos pasaportes entran sin visa por estadías cortas; el resto tramita una visa electrónica antes de viajar. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Te pueden pedir el certificado internacional de vacunación contra la fiebre amarilla al llegar, y no solo si venís de un país con riesgo: llevalo.",
        "Casi todos llegan con escala en Lisboa o en otra ciudad de la región. A Príncipe se va en avioneta o en barco desde Santo Tomé.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Santo Tomé y Príncipe",
      body: [
        "La moneda es la dobra, atada al euro. Los euros se aceptan en hoteles, restaurantes y muchos comercios, y el vuelto suele venir en dobras.",
        "Las tarjetas extranjeras casi no funcionan y hay pocos cajeros: llevá euros en efectivo para buena parte del viaje.",
        "Que sean billetes chicos, nuevos y sanos: en los pueblos no hay vuelto para los grandes.",
      ],
    },
    {
      id: "clima",
      title: "Calor y lluvia sobre el ecuador",
      body: [
        "Santo Tomé y Príncipe está sobre el ecuador: hace calor húmedo todo el año, con máximas de entre veintisiete y treinta y un grados en la costa.",
        "Hay una sola temporada seca, la gravana, de junio a septiembre, algo más fresca. El norte de Santo Tomé, alrededor de la capital y de la Lagoa Azul, es lo más seco del país; el sur y las laderas reciben muchísima lluvia.",
        "En la montaña, en Bom Sucesso, a más de mil metros, las noches rondan los catorce grados.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: la gravana, con menos lluvia, la mejor época para caminar en la selva y, de julio a octubre, para ver ballenas jorobadas.",
        "De noviembre a febrero, las tortugas desovan en las playas, y en diciembre y enero suele haber una pausa en las lluvias, el gravanito.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por las islas",
      body: [
        "Una ruta rodea casi toda la isla de Santo Tomé: se recorre en auto alquilado, con chofer o en taxis compartidos. Se maneja por la derecha.",
        "A Príncipe se va en avioneta, en un vuelo corto, o en barco, en un viaje mucho más largo y movido.",
        "El ritmo de las islas es el leve-leve, despacio: los horarios son aproximados, y conviene dejar margen.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "Las roças coloniales del cacao y el fuerte de San Sebastián, hoy museo nacional.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Calulú, pescado a la parrilla, frutas tropicales y el chocolate de las roças.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale:
        "Selva sobre volcanes, el Pico Cão Grande y playas con palmeras.",
    },
    {
      dimension: "Playas",
      score: 8,
      rationale:
        "Arena dorada y palmeras en Príncipe y en el sur de Santo Tomé.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer es barato; los vuelos y los hoteles de Príncipe, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Pocos vuelos internacionales y casi nada de tarjeta; adentro, todo es cerca pero lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "La dobra está atada al euro.",
    },
  ],

  shines: [
    "Islas tranquilas, con muy pocos turistas.",
    "Selva, cacao y playas en pocos kilómetros.",
    "Ballenas y tortugas, según la temporada.",
  ],

  costs: [
    "Pocos vuelos, y casi siempre con escala.",
    "Tarjetas que casi no funcionan.",
    "Lluvia casi todo el año en el sur.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo la ciudad de Santo Tomé que Bom Sucesso o Príncipe. Los precios están en dobras y son órdenes de magnitud; los resorts de Príncipe y del Ilhéu das Rolas cuestan varias veces más.",

  places: [
    {
      id: "santo-tome",
      name: "Santo Tomé",
      region: "Santo Tomé",
      tag: "La capital",
      blurb:
        "Una capital chica de casas coloniales de colores, con el mercado, la catedral y el fuerte de San Sebastián, hoy museo. Es la base del planificador: calor húmedo todo el año, y lo más seco del país.",
      coords: [0.3365, 6.7273],
      featured: true,
      image: null,
    },
    {
      id: "lagoa-azul",
      name: "Lagoa Azul (norte)",
      region: "Norte de Santo Tomé",
      tag: "Baobabs y agua transparente",
      blurb:
        "Una bahía de agua transparente para el snorkel, rodeada de baobabs, en el norte seco de la isla.",
      coords: [0.4, 6.6167],
      image: null,
    },
    {
      id: "monte-cafe",
      name: "Monte Café (interior)",
      region: "Interior de Santo Tomé",
      tag: "La roça del café",
      blurb:
        "Una roça cafetera en las laderas, con un museo del café y senderos a cascadas. Más fresca y lluviosa que la costa.",
      coords: [0.3, 6.6333],
      image: null,
    },
    {
      id: "bom-sucesso",
      name: "Bom Sucesso (Parque Obô)",
      region: "Interior de Santo Tomé",
      tag: "La puerta del Obô",
      blurb:
        "Un jardín botánico a más de mil metros, en la entrada del Parque Natural Obô, con caminatas a la Lagoa Amélia, un cráter cubierto de selva. Llueve nueve meses de doce.",
      coords: [0.2833, 6.6],
      image: null,
    },
    {
      id: "sao-joao-dos-angolares",
      name: "São João dos Angolares (sur)",
      region: "Sur de Santo Tomé",
      tag: "Cocina y selva",
      blurb:
        "Una roça frente al mar, conocida por su cocina, en el sur verde y lluvioso de la isla, cerca del Pico Cão Grande.",
      coords: [0.1333, 6.65],
      image: null,
    },
    {
      id: "santana",
      name: "Santana (costa este)",
      region: "Este de Santo Tomé",
      tag: "Playas del este",
      blurb:
        "Pueblos de pescadores y playas tranquilas en la costa este, a media hora de la capital.",
      coords: [0.25, 6.75],
      image: null,
    },
    {
      id: "ilheu-das-rolas",
      name: "Ilhéu das Rolas (línea del ecuador)",
      region: "Sur de Santo Tomé",
      tag: "La línea del ecuador",
      blurb:
        "Un islote con un resort y el monumento al paralelo cero, frente a Porto Alegre, en el extremo sur. Playas, buceo y lluvia casi todo el año.",
      coords: [0.003, 6.52],
      image: null,
    },
    {
      id: "santo-antonio",
      name: "Santo António (Príncipe)",
      region: "Príncipe",
      tag: "La capital de Príncipe",
      blurb:
        "Un pueblo chico de casas coloniales en una isla que es reserva de la biosfera, con selva, playas vacías y picos volcánicos de fondo.",
      coords: [1.6389, 7.4194],
      image: null,
    },
    {
      id: "praia-banana",
      name: "Praia Banana (Príncipe)",
      region: "Príncipe",
      tag: "La playa de la foto",
      blurb:
        "Una de las playas más fotografiadas del país, con palmeras inclinadas sobre el agua, cerca de la roça Belo Monte y de los resorts del norte de la isla.",
      coords: [1.67, 7.38],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Santo Tomé y Príncipe, ropa liviana y fresca, traje de baño, protector y repelente: hace calor húmedo todo el año. Algo impermeable para la lluvia, que en el sur y en la montaña cae casi todos los días fuera de la gravana. Para la selva, calzado de trekking; para la montaña, un buzo. Euros en efectivo y un adaptador universal, si tu país usa otro enchufe.",
    keyPoints: [
      "Calor húmedo todo el año; la gravana, de junio a septiembre, es la temporada seca.",
      "El sur y la montaña llueven casi todo el año; el norte es lo más seco.",
      "Las tarjetas casi no funcionan: euros en efectivo.",
      "Malaria: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, traje de baño, sombrero, protector y repelente. Algo impermeable fuera de la gravana.",
      templado:
        "Ropa liviana y un buzo para las noches de la montaña, en Monte Café y en Bom Sucesso.",
      fresco:
        "Un buzo abrigado y una campera impermeable para la montaña, donde las noches rondan los catorce grados.",
      frio: "No hace frío en las islas: un buzo alcanza para la montaña.",
    },
    plug: {
      types: "Tipos C y F",
      voltage: "220 V, 50 Hz",
      note: "Dos patas redondas, como en buena parte de Europa. Un adaptador universal resuelve todo. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Llevá euros en efectivo",
          body: "Las tarjetas extranjeras casi no funcionan y hay pocos cajeros.",
        },
        {
          title: "Visitá una roça",
          body: "Las haciendas del cacao y del café se recorren con guía, y en algunas se come o se duerme.",
        },
        {
          title: "Caminá a la Lagoa Amélia con guía",
          body: "Un cráter cubierto de selva en el Parque Obô, con senderos embarrados.",
        },
        {
          title: "Andá a Príncipe",
          body: "La isla chica es reserva de la biosfera, con las playas más lindas del país.",
        },
        {
          title: "Probá el chocolate de las roças",
          body: "Se hace con el cacao de las islas, y se compra en la capital.",
        },
        {
          title: "Tomate el ritmo leve-leve",
          body: "Los horarios son aproximados: dejá margen entre un plan y otro.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Te lo pueden pedir al llegar, vengas de donde vengas.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "En varias playas del sur hay corrientes fuertes.",
        },
        {
          title: "No molestes a las tortugas",
          body: "De noviembre a febrero desovan de noche en las playas: nada de luces ni de flash, y siempre con guía.",
        },
        {
          title: "No saques fotos de la gente sin preguntar",
          body: "Muchos no quieren: preguntá antes.",
        },
        {
          title: "No cuentes con la tarjeta",
          body: "Fuera de algunos hoteles, no la aceptan.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "selva",
        title: "Para la selva",
        notice: {
          tone: "info",
          title: "Barro y lluvia",
          body: "En el Obô y en el sur llueve casi todos los días fuera de la gravana: calzado que se pueda embarrar y algo impermeable.",
        },
        summary: "Lo que pide el Obô",
        items: [
          "Calzado de trekking",
          "Campera impermeable",
          "Repelente",
          "Una bolsa seca para el teléfono",
        ],
      },
      {
        id: "playa",
        title: "Para la playa",
        notice: null,
        summary: "Arena dorada y agua tibia",
        items: [
          "Traje de baño",
          "Protector solar alto",
          "Máscara y snorkel",
          "Algo para cubrirse fuera de la playa",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Fiebre amarilla y visa",
          body: "Te pueden pedir el certificado de la fiebre amarilla al llegar, vengas de donde vengas. Muchos pasaportes entran sin visa por estadías cortas; otros tramitan una visa electrónica.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra y páginas en blanco",
          "La visa electrónica, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de vuelta",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en las islas, con más riesgo en la temporada de lluvias. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica y evacuación",
        ],
      },
    ],
    avoid: [
      {
        leave: "Depender de la tarjeta",
        why: "Casi no la aceptan, y hay pocos cajeros.",
        instead: "Euros en efectivo.",
      },
      {
        leave: "Billetes grandes de euro",
        why: "En los pueblos no hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Sandalias para la selva",
        why: "Los senderos del Obô son empinados y con barro.",
        instead: "Calzado de trekking.",
      },
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En la avioneta a Príncipe se lleva poco peso.",
        instead: "Un bolso blando.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Santo Tomé y Príncipe?",
        answer:
          "Muchos pasaportes entran sin visa por estadías cortas; otros tramitan una visa electrónica antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Te pueden pedir el certificado al llegar, aunque no vengas de un país con riesgo: llevalo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre, la gravana, con menos lluvia. De noviembre a febrero, para ver tortugas.",
      },
      {
        question: "¿Se puede pagar con tarjeta?",
        answer:
          "Casi nunca: llevá euros en efectivo, que se aceptan en muchos lugares.",
      },
      {
        question: "¿Hay malaria?",
        answer: "Sí. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El portugués, que es el oficial, y el forro, el criollo de las islas.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: son los de dos patas redondas, a 220 V. Un adaptador universal resuelve todo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
