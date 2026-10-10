import type { DestinationGuide } from "./types";

/**
 * Guía de Bangladés.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un país de ríos y deltas donde el monzón no es una
 * estación de lluvia sino una forma de vida, y el manglar más grande del
 * mundo. Las Colinas de Chittagong piden permiso aparte para extranjeros y la
 * isla de San Martín tiene cupo y temporada: los dos se dicen como dato de
 * entrada, como Transnistria en Moldavia.
 */
export const banglades: DestinationGuide = {
  slug: "banglades",
  country: "Bangladés",
  subregion: "Asia del Sur",
  subhead:
    "Ríos por todos lados, el manglar más grande del mundo con tigres de Bengala, colinas de té en el noreste, mezquitas de ladrillo de seis siglos y una de las playas más largas del mundo. Pocos turistas y mucha hospitalidad.",

  image: null,

  highlights: [
    {
      value: "Monzón",
      label: "de junio a septiembre, con lluvia casi diaria",
      note: "La época seca y templada va de noviembre a febrero, y es la mejor para viajar.",
    },
    {
      value: "Sundarbans",
      label: "el manglar más grande del mundo",
      note: "Compartido con la India, patrimonio de la humanidad, hogar del tigre de Bengala. Se recorre en barco durante varios días.",
    },
    {
      value: "120 km",
      label: "de playa en Cox's Bazar",
      note: "Una de las playas naturales más largas del mundo, sobre el golfo de Bengala.",
    },
    {
      value: "Rickshaws",
      label: "pintados a mano, por todo Daca",
      note: "Daca es conocida como la capital del rickshaw: miles recorren la ciudad, cada uno decorado con colores y dibujos.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Bangladés",
      body: [
        "Muchos pasaportes sacan la visa a la llegada en el aeropuerto de Daca; otros la tramitan antes en un consulado o online. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y pueden pedirte el pasaje de salida y la reserva del hotel.",
        "Las Colinas de Chittagong, en el sudeste, piden un permiso aparte para extranjeros, y la isla de San Martín abre solo algunos meses con cupo de visitantes. Ninguna otra ciudad del planificador tiene reglas especiales.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Bangladés",
      body: [
        "La moneda es la taka. El efectivo manda: la tarjeta funciona en hoteles grandes y algunos restaurantes de Daca y Chittagong.",
        "Hay cajeros en las ciudades. Llevá billetes chicos para rickshaws, puestos y propinas.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí takas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Ríos, deltas y monzón",
      body: [
        "Bangladés es hemisferio norte y tropical. De noviembre a febrero es la época seca, con días templados y mañanas frescas en el norte.",
        "Marzo, abril y mayo son muy calurosos y húmedos. De junio a septiembre el monzón trae lluvia casi todos los días e inundaciones.",
        "En la costa, en abril y mayo y en octubre y noviembre, puede haber ciclones. Sylhet y Srimangal, en el noreste, son de lo más lluvioso del país.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a febrero: seco, templado y la mejor época para los Sundarbans y la playa.",
        "El monzón tiene su encanto en los ríos y las plantaciones de té, pero complica moverse.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Bangladés",
      body: [
        "Entre ciudades, buses con aire acondicionado, trenes y vuelos internos cortos. El tránsito es lento, sobre todo en Daca.",
        "En Daca, rickshaws, CNG —motos con cabina— y taxis por app. Hay un metro elevado que esquiva parte del tránsito.",
        "Los barcos son parte del viaje: a los Sundarbans se va en barco, y por los ríos hay ferris y lanchas.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La ciudad mezquita de Bagerhat, el monasterio de Paharpur y el Daca antiguo.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Biryani, pescado ilish, curries, dulces de leche y té en todas partes.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale: "Ríos, manglares, arrozales y colinas de té.",
    },
    {
      dimension: "Playas",
      score: 5,
      rationale:
        "Cox's Bazar es enorme y la isla de San Martín tiene coral; agua templada todo el año.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 3,
      rationale: "Tránsito muy lento, poca infraestructura turística y monzón.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "La taka pierde valor contra el dólar de a poco.",
    },
  ],

  shines: [
    "Pocos turistas y mucha hospitalidad.",
    "Los Sundarbans y los ríos.",
    "Muy barato.",
  ],

  costs: [
    "El tránsito de Daca.",
    "El monzón y los ciclones.",
    "Poca infraestructura para turistas.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Daca que Sylhet o Cox's Bazar. Los precios están en takas y son órdenes de magnitud; en los Sundarbans, los barcos encarecen.",

  places: [
    {
      id: "daca",
      name: "Daca",
      region: "Daca",
      tag: "La ciudad de los rickshaws",
      blurb:
        "El Daca antiguo con el fuerte de Lalbagh, el palacio rosa de Ahsan Manzil y el puerto fluvial de Sadarghat, entre bazares y rickshaws. Es la base del planificador: invierno templado, monzón de junio a septiembre.",
      coords: [23.8103, 90.4125],
      featured: true,
      image: null,
    },
    {
      id: "chittagong",
      name: "Chittagong",
      region: "Chittagong",
      tag: "El gran puerto",
      blurb:
        "El puerto principal del país, entre colinas y el río Karnaphuli, puerta a Cox's Bazar y a las Colinas de Chittagong.",
      coords: [22.3569, 91.7832],
      image: null,
    },
    {
      id: "cox-bazar",
      name: "Cox's Bazar",
      region: "Chittagong",
      tag: "La playa más larga",
      blurb:
        "Una de las playas naturales más largas del mundo, con atardeceres sobre el golfo de Bengala y una ruta costera hacia el sur.",
      coords: [21.4272, 92.0058],
      image: null,
    },
    {
      id: "sundarbans",
      name: "Sundarbans (Khulna)",
      region: "Khulna",
      tag: "Manglares y tigres",
      blurb:
        "El manglar más grande del mundo, patrimonio de la humanidad, con tigres de Bengala, cocodrilos y delfines de río. Se recorre en barco desde Khulna o Mongla.",
      coords: [22.4, 89.6],
      image: null,
    },
    {
      id: "srimangal",
      name: "Srimangal",
      region: "Sylhet",
      tag: "La capital del té",
      blurb:
        "Colinas cubiertas de plantaciones de té, un bosque con gibones y el té de siete capas. Muy lluvioso en el monzón.",
      coords: [24.3065, 91.7296],
      image: null,
    },
    {
      id: "sylhet",
      name: "Sylhet",
      region: "Sylhet",
      tag: "Ríos de piedras y bosques inundados",
      blurb:
        "Plantaciones de té, el bosque inundado de Ratargul y ríos de agua clara junto a la frontera con la India. De lo más lluvioso del país.",
      coords: [24.8949, 91.8687],
      image: null,
    },
    {
      id: "bagerhat",
      name: "Bagerhat",
      region: "Khulna",
      tag: "La ciudad mezquita",
      blurb:
        "Una ciudad de mezquitas de ladrillo del siglo XV, con la mezquita de las Sesenta Cúpulas, patrimonio de la humanidad.",
      coords: [22.6602, 89.7895],
      image: null,
    },
    {
      id: "paharpur",
      name: "Paharpur",
      region: "Rajshahi",
      tag: "El gran monasterio budista",
      blurb:
        "Las ruinas de Somapura, uno de los grandes monasterios budistas al sur del Himalaya, patrimonio de la humanidad. Más continental: inviernos frescos y mayo muy caluroso.",
      coords: [25.0311, 88.9767],
      image: null,
    },
    {
      id: "isla-san-martin",
      name: "Isla de San Martín",
      region: "Chittagong",
      tag: "La isla de coral",
      blurb:
        "La única isla de coral del país, con cocoteros y agua clara. Abre solo algunos meses del año y con cupo de visitantes: verificá las reglas vigentes.",
      coords: [20.6237, 92.3234],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bangladés es calor casi todo el año. Ropa liviana de algodón que cubra hombros y piernas, un pañuelo, protector y repelente. En el monzón, todo impermeable y sandalias que se mojen. De diciembre a febrero, un buzo para las mañanas frescas del norte. Siempre, efectivo en billetes chicos y paciencia para el tránsito.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de noviembre a febrero.",
      "Monzón de junio a septiembre, con lluvia casi diaria.",
      "Ropa que cubra hombros y piernas, para hombres y mujeres.",
      "El efectivo manda fuera de los hoteles grandes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de algodón que cubra, sombrero, protector, repelente y una campera impermeable en el monzón.",
      templado:
        "Ropa liviana de día y un buzo fino para las mañanas y noches de invierno.",
      fresco:
        "Un buzo y una campera liviana para las mañanas de diciembre y enero en el norte.",
      frio: "En Bangladés no hace frío de verdad: un buzo abrigado alcanza para las mañanas de enero.",
    },
    plug: {
      types: "Tipo C, tipo D, tipo G y tipo K",
      voltage: "220 V, 50 Hz",
      note: "Conviven varios enchufes. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vestite con discreción",
          body: "Ropa que cubra hombros y piernas. Para las mujeres, un pañuelo suma en mezquitas y zonas rurales.",
        },
        {
          title: "Reservá el barco de los Sundarbans",
          body: "Se recorre en excursiones de varios días con permisos incluidos, que conviene contratar antes.",
        },
        {
          title: "Probá el té de siete capas en Srimangal",
          body: "Siete tés de colores distintos en un vaso, inventado en la ciudad.",
        },
        {
          title: "Dejá tiempo para el tránsito",
          body: "En Daca, un trayecto corto puede llevar horas. El metro esquiva parte del atasco.",
        },
        {
          title: "Llevá billetes chicos",
          body: "Para rickshaws, puestos y propinas: el cambio escasea.",
        },
        {
          title: "Elegí pagar en takas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros, piernas y, para las mujeres, el pelo. Sin zapatos adentro.",
        },
        {
          title: "No vayas a las Colinas de Chittagong sin permiso",
          body: "Los extranjeros necesitan uno aparte, que se tramita antes.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada o filtrada, también para lavarte los dientes.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No planees la costa sin mirar el pronóstico",
          body: "En abril, mayo, octubre y noviembre puede haber ciclones.",
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
        title: "Documentos",
        notice: {
          tone: "warn",
          title: "Verificá la visa",
          body: "Muchos pasaportes la sacan al llegar a Daca, pero no todos. Las Colinas de Chittagong piden un permiso aparte.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita antes",
          "Reserva del hotel y pasaje de salida",
          "Seguro de viaje",
        ],
      },
      {
        id: "monzon",
        title: "Para el monzón",
        notice: {
          tone: "info",
          title: "Mojarse es parte del viaje",
          body: "De junio a septiembre llueve casi todos los días. Ropa que se seque rápido y todo lo importante en bolsas estancas.",
        },
        summary: "Lo que pide la lluvia",
        items: [
          "Campera impermeable liviana",
          "Sandalias que se puedan mojar",
          "Bolsas estancas",
          "Ropa de secado rápido",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverte cómodo",
        items: [
          "Pantalones o polleras largas livianas",
          "Remeras con manga",
          "Un pañuelo",
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
          "Repelente",
          "Las vacunas que te indique tu médico",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta",
        why: "Fuera de los hoteles se cubren hombros y piernas.",
        instead: "Ropa liviana de algodón que cubra.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de los hoteles grandes casi todo se paga en efectivo.",
        instead: "Takas en billetes chicos.",
      },
      {
        leave: "Zapatillas de tela en el monzón",
        why: "No se secan nunca.",
        instead: "Sandalias que se puedan mojar.",
      },
      {
        leave: "Un itinerario apretado",
        why: "El tránsito y la lluvia demoran todo.",
        instead: "Días de margen.",
      },
      {
        leave: "Abrigo pesado",
        why: "En invierno solo las mañanas son frescas.",
        instead: "Un buzo.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. Los hoteles grandes tienen uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Bangladés?",
        answer:
          "Muchos pasaportes la sacan al llegar a Daca; otros la tramitan antes. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a febrero, la época seca y templada. De junio a septiembre es el monzón.",
      },
      {
        question: "¿Cómo se visitan los Sundarbans?",
        answer:
          "En barco, en excursiones de varios días desde Khulna o Mongla, con los permisos incluidos.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Bangladés usa varios tipos a 220 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Es habitual en restaurantes y para guías y choferes; montos chicos, en efectivo.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: embotellada o filtrada.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer:
          "Está muy restringido: algunos hoteles grandes y clubes lo venden a extranjeros.",
      },
      {
        question: "¿Puedo ir a la isla de San Martín?",
        answer:
          "Solo algunos meses del año y con cupo de visitantes. Verificá las reglas vigentes antes de planearlo.",
      },
    ],
  },
};
