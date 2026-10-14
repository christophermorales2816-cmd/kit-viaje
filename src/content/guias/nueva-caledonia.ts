import type { DestinationGuide } from "./types";

/**
 * Guía de Nueva Caledonia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el primer territorio de Oceanía, que entra por la
 * decisión de la sección 16.2 porque tiene moneda y reglas de entrada
 * propias —una visa Schengen sola no alcanza—, y el franco del Pacífico,
 * atado al euro y sin centavos (spec, 16.3). La laguna, patrimonio de la
 * humanidad, es el dato de su portada.
 */
export const nuevaCaledonia: DestinationGuide = {
  slug: "nueva-caledonia",
  country: "Nueva Caledonia",
  subregion: "Melanesia",
  subhead:
    "La laguna patrimonio de la humanidad, las araucarias de la isla de los Pinos, las playas de Ouvéa y Lifou, la cultura kanak del centro Tjibaou y una Numea francesa, de panaderías y playas urbanas.",

  image: null,

  highlights: [
    {
      value: "Laguna",
      label: "de las más grandes del mundo, patrimonio de la humanidad",
      note: "Una barrera de coral de unos mil quinientos kilómetros encierra una laguna enorme, con tortugas, dugongos y rayas. Se recorre desde Numea, la isla de los Pinos o las islas de la Lealtad.",
    },
    {
      value: "Kanak",
      label: "la cultura del centro Tjibaou",
      note: "El centro cultural Tjibaou, de Renzo Piano, cuenta la cultura kanak con sus casas grandes, esculturas y danzas, en las afueras de Numea.",
    },
    {
      value: "Araucarias",
      label: "sobre la arena blanca de la isla de los Pinos",
      note: "Pinos altísimos junto a playas blancas y la piscina natural de Oro, a un vuelo corto de Numea.",
    },
    {
      value: "Ouvéa",
      label: "la isla más cercana al paraíso",
      note: "Así la llaman: un atolón con veinticinco kilómetros de playa blanca y el agua más clara de las islas de la Lealtad.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Nueva Caledonia",
      body: [
        "Nueva Caledonia es un territorio francés con reglas de entrada propias: muchos pasaportes entran sin visa por estadías cortas, y los que la necesitan la piden para Nueva Caledonia en particular. Una visa Schengen sola no alcanza. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Al llegar se declara toda la comida, las plantas y los productos de origen animal: la bioseguridad es estricta, como en Australia.",
        "Si en los días previos estuviste en un país con riesgo de fiebre amarilla —varios de Sudamérica lo son—, te pueden pedir el certificado internacional de vacunación.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Nueva Caledonia",
      body: [
        "La moneda es el franco del Pacífico, o franco CFP, el mismo de la Polinesia Francesa, atado al euro. En Numea la tarjeta se acepta en casi todos lados; en las islas y los pueblos conviene llevar efectivo.",
        "Los euros no sirven para pagar en la calle, pero se cambian fácil en los bancos y en el aeropuerto.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos del Pacífico: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico, pero más fresco",
      body: [
        "Trópico del hemisferio sur, más fresco que el resto de la Melanesia: veranos calurosos y húmedos de diciembre a marzo, con ciclones, e inviernos templados de junio a agosto, con noches de dieciséis o diecisiete grados.",
        "La costa este, con Hienghène y Poindimié, llueve bastante más que la oeste, donde están Numea y Bourail.",
        "De agosto a noviembre es lo más seco del año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De septiembre a noviembre: lo más seco, con días templados y el mar en calma. De julio a septiembre llegan las ballenas jorobadas al sur de la isla.",
        "De diciembre a marzo hace más calor y llueve más, y algunos años hay ciclones.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Nueva Caledonia",
      body: [
        "Numea tiene buses y taxis. Para recorrer la Grande Terre, la isla principal, lo mejor es un auto: hay buses entre los pueblos, pero salen poco.",
        "A la isla de los Pinos y a las islas de la Lealtad se va en vuelo interno o en ferry desde Numea.",
        "Se maneja por la derecha, como en Francia.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-13",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La cultura kanak, el pasado de colonia penal y la Segunda Guerra.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Cocina francesa, pescado, el bougna kanak y panaderías por todos lados.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "La laguna, las araucarias y las montañas de tierra roja.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale: "La isla de los Pinos, Ouvéa y las islas de la Lealtad.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 4,
      rationale: "Precios de Francia, o más altos.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale: "Rutas buenas en la isla grande y vuelos a las islas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El franco del Pacífico está atado al euro.",
    },
  ],

  shines: [
    "La laguna, patrimonio de la humanidad.",
    "Islas de postal a un vuelo corto.",
    "La mezcla de cultura kanak y francesa.",
  ],

  costs: [
    "Caro para comer y dormir.",
    "Vuelos y ferris a las islas que se llenan.",
    "Pocos buses fuera de Numea.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Numea en enero que Hienghène o la isla de los Pinos. Los precios están en francos del Pacífico y son órdenes de magnitud; los hoteles de la isla de los Pinos y de Ouvéa cuestan bastante más.",

  places: [
    {
      id: "numea",
      name: "Numea",
      region: "Provincia Sur",
      tag: "La capital",
      blurb:
        "La capital, con playas urbanas en Anse Vata y la bahía de los Limones, el centro cultural Tjibaou, el mercado del puerto y el acuario de la laguna. Es la base del planificador: veranos calurosos, con lluvias de enero a mayo, e inviernos templados.",
      coords: [-22.2758, 166.458],
      featured: true,
      image: null,
    },
    {
      id: "isla-de-los-pinos",
      name: "Isla de los Pinos",
      region: "Provincia Sur",
      tag: "Las araucarias",
      blurb:
        "Araucarias sobre playas de arena blanca, la piscina natural de Oro, las ruinas de la colonia penal y las piraguas de la bahía de Saint-Joseph.",
      coords: [-22.64, 167.48],
      image: null,
    },
    {
      id: "lifou",
      name: "Lifou (islas de la Lealtad)",
      region: "Islas de la Lealtad",
      tag: "Acantilados y vainilla",
      blurb:
        "La isla más grande de la Lealtad, con acantilados, la bahía de Jinek para el snorkel, cuevas y plantaciones de vainilla.",
      coords: [-20.92, 167.23],
      image: null,
    },
    {
      id: "mare",
      name: "Maré",
      region: "Islas de la Lealtad",
      tag: "Piscinas naturales",
      blurb:
        "Una isla de acantilados y bosque, con piscinas naturales en la roca, la caleta de Shabadran y pueblos kanak.",
      coords: [-21.5, 167.98],
      image: null,
    },
    {
      id: "ouvea",
      name: "Ouvéa",
      region: "Islas de la Lealtad",
      tag: "La isla más cercana al paraíso",
      blurb:
        "Un atolón con veinticinco kilómetros de playa blanca, el puente de Mouli y tortugas y rayas en el agua más clara de la Lealtad.",
      coords: [-20.65, 166.56],
      image: null,
    },
    {
      id: "hienghene",
      name: "Hienghène (costa este)",
      region: "Provincia Norte",
      tag: "La costa salvaje",
      blurb:
        "La costa este, verde y lluviosa, con la roca de la Gallina Empollando, cascadas y la cultura kanak más viva.",
      coords: [-20.69, 164.94],
      image: null,
    },
    {
      id: "poindimie",
      name: "Poindimié",
      region: "Provincia Norte",
      tag: "La costa verde",
      blurb:
        "Un pueblo de la costa este, con playas, snorkel en la isla Tibarama y cascadas en el interior.",
      coords: [-20.94, 165.33],
      image: null,
    },
    {
      id: "bourail",
      name: "Bourail (La Roche Percée)",
      region: "Provincia Sur",
      tag: "Surf y tortugas",
      blurb:
        "La costa oeste, de pasto y ganado, con la roca agujereada de La Roche Percée, la bahía de las Tortugas y surf en la barrera de coral.",
      coords: [-21.57, 165.49],
      image: null,
    },
    {
      id: "riviere-bleue",
      name: "Parque de la Rivière Bleue",
      region: "Provincia Sur",
      tag: "La tierra roja",
      blurb:
        "Un parque de tierra roja, ríos azules y bosque, con el kagu, el ave nacional que no vuela, y el bosque ahogado del lago de Yaté.",
      coords: [-22.1, 166.65],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Nueva Caledonia, ropa liviana, traje de baño, protector y sombrero; en invierno, un buzo para la noche. Revisá la entrada para tu pasaporte —es un territorio francés con reglas propias— y no lleves comida sin declarar.",
    keyPoints: [
      "Reglas de entrada propias: una visa Schengen sola no alcanza.",
      "Se declara toda la comida al llegar: la bioseguridad es estricta.",
      "Veranos calurosos de diciembre a marzo; inviernos templados de junio a agosto.",
      "Precios altos: comer y dormir cuesta como en Francia, o más.",
    ],
    adviceByBucket: {
      calido: "Ropa liviana, traje de baño, sombrero, protector y repelente.",
      templado: "Ropa liviana de día y un buzo para la noche.",
      fresco: "Un buzo y una campera liviana para las noches de invierno.",
      frio: "No hace frío en Nueva Caledonia: un buzo y una campera liviana alcanzan.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "220 V, 50 Hz",
      note: "Son las dos patas redondas de Francia; el tipo E suma una tercera pata en el toma. Si tu enchufe es de otro tipo, llevá adaptador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Verificá la entrada para tu pasaporte",
          body: "Nueva Caledonia tiene su propia lista de visas: la de Francia o la Schengen no alcanzan solas.",
        },
        {
          title: "Declará toda la comida al llegar",
          body: "Fruta, carne, lácteos y semillas: se declara todo, y mucho no entra.",
        },
        {
          title: "Hacé snorkel en la laguna",
          body: "Desde la playa, en Anse Vata, en la isla de los Pinos o en la bahía de Jinek.",
        },
        {
          title: "Hacé la coutume en las tribus",
          body: "En las tierras kanak se le presenta un regalo chico al jefe del lugar: es la forma de pedir permiso para entrar.",
        },
        {
          title: "Reservá las islas con tiempo",
          body: "Los vuelos y los alojamientos de la isla de los Pinos y de la Lealtad se llenan.",
        },
        {
          title: "Elegí pagar en francos del Pacífico",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres comida sin declarar",
          body: "La bioseguridad es estricta, como en Australia.",
        },
        {
          title: "No saques coral ni conchas",
          body: "La laguna es patrimonio de la humanidad, y está protegida.",
        },
        {
          title: "No cuentes con el bus",
          body: "Fuera de Numea sale pocas veces por día: para recorrer, un auto.",
        },
        {
          title: "No dejes las compras para el domingo",
          body: "Fuera de Numea, casi todo cierra.",
        },
        {
          title: "No andes en traje de baño por los pueblos",
          body: "Fuera de la playa, mejor tapate un poco, sobre todo en las tribus.",
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
          body: "Nueva Caledonia tiene su propia lista de visas: verificá tu pasaporte, porque una visa Schengen sola no alcanza. Al llegar se declara toda la comida.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa para Nueva Caledonia, si tu pasaporte la necesita",
          "La declaración de llegada, con toda la comida",
          "Certificado de la fiebre amarilla, si venís de un país con riesgo",
          "Pasaje de salida del país",
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
        summary: "Playas, snorkel e islas",
        items: [
          "Protector solar que no dañe el arrecife",
          "Máscara y snorkel",
          "Traje de baño y una remera de lycra",
          "Calzado para el agua",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer la isla grande",
        notice: null,
        summary: "Rutas, montaña y tribus",
        items: [
          "Licencia de conducir, para alquilar un auto",
          "Calzado para caminar",
          "Un buzo para el invierno",
          "Un regalo chico para la coutume",
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
        leave: "Comida en la valija",
        why: "Hay que declararla toda, y mucha no entra.",
        instead: "Comprarla allá.",
      },
      {
        leave: "Euros para pagar",
        why: "En la calle se paga en francos del Pacífico.",
        instead: "Euros para cambiar, o la tarjeta.",
      },
      {
        leave: "Un viaje solo en Numea",
        why: "Lo mejor está en las islas y en la costa este.",
        instead: "Unos días en la isla de los Pinos o en la Lealtad.",
      },
      {
        leave: "Solo ropa de verano",
        why: "En invierno las noches son frescas.",
        instead: "Un buzo y una campera liviana.",
      },
      {
        leave: "Protector solar común",
        why: "Daña el coral de la laguna.",
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
        question: "¿Necesito visa para entrar a Nueva Caledonia?",
        answer:
          "Depende del pasaporte: es un territorio francés con su propia lista de visas, y una visa Schengen sola no alcanza. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El franco del Pacífico, o franco CFP, atado al euro. Los euros se cambian en los bancos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De septiembre a noviembre, lo más seco. De junio a agosto, el invierno, es fresco y agradable.",
      },
      {
        question: "¿Cómo llego a las islas?",
        answer:
          "En vuelo interno o en ferry desde Numea, a la isla de los Pinos y a las islas de la Lealtad.",
      },
      {
        question: "¿Qué hay que hacer en las tribus?",
        answer:
          "La coutume: un regalo chico para el jefe del lugar, que es la forma de pedir permiso para entrar.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El francés, y casi treinta lenguas kanak. Fuera de los hoteles, el inglés se habla poco.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Desde Argentina, sí: son las dos patas redondas de Francia, a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En Numea, sí. En las islas y las tribus, mejor tomá embotellada.",
      },
    ],
  },
};
