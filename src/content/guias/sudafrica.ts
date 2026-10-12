import type { DestinationGuide } from "./types";

/**
 * Guía de Sudáfrica.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: es el primer país donde el adaptador universal que
 * sugiere la lista de equipaje casi nunca sirve —el enchufe es de tipo M, y la
 * guía lo dice en el hero, en la checklist y en lo que no hay que llevar—. Es
 * hemisferio sur, con un Cabo mediterráneo de inviernos lluviosos, al revés que
 * el resto del país. Y pide el certificado de fiebre amarilla a quien viene de
 * varios países de Sudamérica. La base es Ciudad del Cabo, la capital
 * legislativa y el destino de casi todo el que viaja.
 */
export const sudafrica: DestinationGuide = {
  slug: "sudafrica",
  country: "Sudáfrica",
  subregion: "África Austral",
  subhead:
    "La montaña de la Mesa, los viñedos de Stellenbosch, ballenas desde la costa, la Ruta Jardín y los Big Five en el Kruger. Safari, mar y montaña en un mismo viaje, con las estaciones al revés que en el norte.",

  image: null,

  highlights: [
    {
      value: "Enchufe M",
      label: "que el adaptador universal casi nunca trae",
      note: "Tres patas redondas y gruesas. El adaptador se consigue en el aeropuerto y en cualquier supermercado; las tomas nuevas, de tipo N, aceptan también los enchufes de dos patas finas.",
    },
    {
      value: "Invierno",
      label: "de junio a agosto, con lluvia en el Cabo",
      note: "Hemisferio sur: en invierno, Ciudad del Cabo tiene días templados y es su temporada de lluvias. El resto del país, en cambio, es seco en invierno.",
    },
    {
      value: "Big Five",
      label: "en el Parque Kruger",
      note: "León, leopardo, elefante, búfalo y rinoceronte, en uno de los parques más grandes de África. Se recorre en auto propio o en safari guiado.",
    },
    {
      value: "Ballenas",
      label: "desde la costa de Hermanus",
      note: "De junio a noviembre, las ballenas francas australes se ven desde los acantilados, sin subir a un barco.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Sudáfrica",
      body: [
        "Muchos pasaportes sudamericanos entran sin visa por turismo; otros necesitan tramitarla antes. Verificá el tuyo antes de comprar el pasaje. El pasaporte tiene que tener al menos dos páginas en blanco.",
        "Sudáfrica pide el certificado internacional de vacunación contra la fiebre amarilla a quien llega de un país con riesgo, y en su lista están varios de Sudamérica, entre ellos Argentina y Brasil. También cuenta una escala de más de doce horas en uno de esos países. Sin el certificado te pueden negar la entrada; la lista cambia, así que verificala antes de viajar.",
        "Si viajás con menores, llevá su partida de nacimiento: te la pueden pedir en la frontera.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Sudáfrica",
      body: [
        "La moneda es el rand. La tarjeta, también sin contacto, funciona en casi todos lados, incluso en mercados y estaciones de servicio.",
        "En los restaurantes, la propina es costumbre y no viene incluida. También se da algo a quien carga nafta en la estación de servicio y a los cuidacoches.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí rands: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Tres climas y las estaciones al revés",
      body: [
        "Sudáfrica es hemisferio sur, como el Cono Sur: el invierno va de junio a agosto. Ciudad del Cabo es mediterránea: veranos secos y ventosos, inviernos templados con lluvia.",
        "En la meseta —Johannesburgo, el Drakensberg— llueve en verano, con tormentas de tarde, y el invierno es seco, con días templados y noches frías: en el Drakensberg, julio roza los cero grados.",
        "El Kruger y Durban son subtropicales: calor húmedo en verano e inviernos templados. El Pequeño Karoo, alrededor de Oudtshoorn, es semidesierto, con veranos muy calurosos y heladas en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a abril para el Cabo y la Ruta Jardín: días largos y secos. De mayo a septiembre para el Kruger: el monte está más bajo, los animales se juntan en el agua y hay menos mosquitos.",
        "Las ballenas se ven en Hermanus de junio a noviembre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Sudáfrica",
      body: [
        "Las distancias son largas: entre Johannesburgo, el Kruger, Durban y el Cabo conviene volar. Para la Ruta Jardín y los viñedos, auto de alquiler. Se maneja por la izquierda.",
        "En las ciudades, aplicaciones como Uber y Bolt y, en Ciudad del Cabo, los colectivos MyCiTi. De noche, la costumbre es moverse en auto, no a pie.",
        "Las precauciones son las de una ciudad grande: nada a la vista en el auto, el teléfono guardado en la calle y los cajeros dentro de los shoppings.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-11",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Robben Island, el museo del Apartheid, Soweto y las pinturas rupestres del Drakensberg.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "El braai, el bobotie, la cocina malaya del Cabo y los vinos de Stellenbosch.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "La montaña de la Mesa, el cabo de Buena Esperanza, la Ruta Jardín y el Drakensberg.",
    },
    {
      dimension: "Playas",
      score: 7,
      rationale:
        "Lindas pero de agua fría en el Cabo; templada en Durban, sobre el Índico.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Vinos, comida y alojamiento de muy buena calidad por precios razonables.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Buenas rutas y vuelos internos; se maneja por la izquierda y las distancias son largas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "El rand se mueve bastante, pero los precios son estables y la tarjeta funciona en todos lados.",
    },
  ],

  shines: [
    "Safari, viñedos, montaña y mar en un mismo viaje.",
    "Ciudad del Cabo, entre la montaña de la Mesa y el mar.",
    "Muy buena calidad por el precio.",
  ],

  costs: [
    "Distancias largas, que obligan a volar o a manejar mucho.",
    "Las precauciones de una ciudad grande, sobre todo de noche.",
    "El enchufe M, que hay que conseguir allá.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Ciudad del Cabo en julio que el Kruger o el Drakensberg. Los precios están en rands y son órdenes de magnitud; un lodge de safari en el Kruger puede costar varias veces más.",

  places: [
    {
      id: "ciudad-del-cabo",
      name: "Ciudad del Cabo",
      region: "Cabo Occidental",
      tag: "La montaña de la Mesa",
      blurb:
        "La montaña de la Mesa, el Waterfront, las casas de colores de Bo-Kaap y el cabo de Buena Esperanza a un día de paseo. Es la base del planificador: veranos secos y ventosos, inviernos templados y lluviosos.",
      coords: [-33.9249, 18.4241],
      featured: true,
      image: null,
    },
    {
      id: "johannesburgo",
      name: "Johannesburgo",
      region: "Gauteng",
      tag: "Soweto y el museo del Apartheid",
      blurb:
        "La ciudad más grande del país y su puerta de entrada: el museo del Apartheid, Soweto y la casa de Mandela. Tormentas de verano e inviernos secos de noches frías.",
      coords: [-26.2041, 28.0473],
      image: null,
    },
    {
      id: "kruger",
      name: "Parque Kruger",
      region: "Mpumalanga",
      tag: "Safari",
      blurb:
        "Uno de los grandes parques de África, con los Big Five, caminos para recorrer en auto propio y lodges en las reservas privadas. Mejor en invierno, de mayo a septiembre.",
      coords: [-24.9948, 31.5969],
      image: null,
    },
    {
      id: "stellenbosch",
      name: "Stellenbosch",
      region: "Cabo Occidental",
      tag: "Los viñedos",
      blurb:
        "Bodegas con montañas de fondo, casas holandesas del Cabo y restaurantes. A una hora de Ciudad del Cabo, con Franschhoek y Paarl cerca.",
      coords: [-33.9321, 18.8602],
      image: null,
    },
    {
      id: "hermanus",
      name: "Hermanus",
      region: "Cabo Occidental",
      tag: "Ballenas desde la costa",
      blurb:
        "Acantilados para ver ballenas de junio a noviembre, sin subir a un barco. A un par de horas de Ciudad del Cabo.",
      coords: [-34.4187, 19.2345],
      image: null,
    },
    {
      id: "knysna",
      name: "Knysna (Ruta Jardín)",
      region: "Cabo Occidental",
      tag: "La Ruta Jardín",
      blurb:
        "Una laguna entre bosques y acantilados, en el medio de la Ruta Jardín, que sigue la costa hacia Gqeberha. Clima templado y lluvia repartida en el año.",
      coords: [-34.0363, 23.0471],
      image: null,
    },
    {
      id: "oudtshoorn",
      name: "Oudtshoorn (Pequeño Karoo)",
      region: "Cabo Occidental",
      tag: "El Pequeño Karoo",
      blurb:
        "Granjas de avestruces, las cuevas de Cango y el paso de Swartberg. Semidesierto: veranos muy calurosos y heladas en invierno.",
      coords: [-33.5907, 22.2014],
      image: null,
    },
    {
      id: "durban",
      name: "Durban",
      region: "KwaZulu-Natal",
      tag: "El Índico",
      blurb:
        "Playas de agua templada sobre el Índico, una gran comunidad de origen indio y el bunny chow, un curry servido dentro de un pan. Calor húmedo en verano.",
      coords: [-29.8587, 31.0218],
      image: null,
    },
    {
      id: "drakensberg",
      name: "Drakensberg",
      region: "KwaZulu-Natal",
      tag: "Montañas y arte rupestre",
      blurb:
        "Paredes de basalto de más de tres mil metros, senderos y pinturas rupestres del pueblo san, patrimonio de la humanidad. Tormentas en verano y noches heladas en invierno.",
      coords: [-29.08, 29.42],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Sudáfrica es hemisferio sur: de junio a agosto es invierno. Para Ciudad del Cabo en invierno, abrigo liviano y algo impermeable; en verano, ropa liviana, un buzo para el viento y protector. Para el Kruger, ropa de colores neutros, un abrigo para las salidas del amanecer y repelente. Todo el año, calzado cómodo y el adaptador de tipo M, que se compra allá.",
    keyPoints: [
      "Hemisferio sur: el invierno es de junio a agosto, y en el Cabo es la temporada de lluvias.",
      "El enchufe es de tipo M: el adaptador universal casi nunca sirve.",
      "Si venís de un país con riesgo de fiebre amarilla, llevá el certificado de vacunación.",
      "Los safaris salen al amanecer, y en invierno el vehículo abierto es frío.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y repelente. En el Cabo, un buzo para el viento de la tarde.",
      templado:
        "Ropa liviana de día y un buzo para la noche. En el Cabo, algo para el viento.",
      fresco:
        "Capas, un buzo abrigado y una campera; en el Cabo, algo impermeable en invierno.",
      frio: "Campera de abrigo, gorro y guantes para las noches de la meseta y el Drakensberg y para los safaris del amanecer en invierno.",
    },
    plug: {
      types: "Tipo M (también N y C)",
      voltage: "230 V, 50 Hz",
      note: "El tipo M tiene tres patas redondas y gruesas, y casi ningún adaptador universal lo trae: se compra en el aeropuerto o en cualquier supermercado. Las tomas nuevas, de tipo N, aceptan también los enchufes de dos patas finas (tipo C). Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Comprá el adaptador al llegar",
          body: "En el aeropuerto o en un supermercado: el tipo M casi nunca viene en los universales.",
        },
        {
          title: "Volá entre las regiones",
          body: "Johannesburgo, el Kruger, Durban y el Cabo están a muchas horas de ruta entre sí.",
        },
        {
          title: "Hacé el safari en invierno",
          body: "De mayo a septiembre el monte es más bajo, los animales se juntan en el agua y hay menos mosquitos.",
        },
        {
          title: "Subí a la montaña de la Mesa temprano",
          body: "El viento y las nubes que la tapan cierran seguido el teleférico a la tarde. Fijate el estado antes de ir.",
        },
        {
          title: "Manejá la Ruta Jardín",
          body: "Bosques, lagunas y pueblos de costa entre el Cabo y Gqeberha.",
        },
        {
          title: "Elegí pagar en rands",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No camines de noche por el centro de las ciudades",
          body: "Moverse en auto o con aplicación es la costumbre de todos, no solo de los turistas.",
        },
        {
          title: "No dejes nada a la vista en el auto",
          body: "Ni bolsos ni teléfonos: es la regla en todo el país.",
        },
        {
          title: "No bajes del auto en el Kruger",
          body: "Salvo en los lugares marcados: los animales son salvajes.",
        },
        {
          title: "No te olvides el certificado de fiebre amarilla",
          body: "Si venís de un país con riesgo, sin el certificado te pueden negar la entrada.",
        },
        {
          title: "No subestimes el frío del invierno",
          body: "Muchos alojamientos no tienen calefacción central, y las noches de la meseta y el Drakensberg bajan cerca de cero.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "safari",
        title: "Para el safari",
        notice: {
          tone: "info",
          title: "Mosquitos y madrugadas",
          body: "El Kruger está en zona de malaria, con más riesgo en verano: consultá con un médico de viajes antes de ir. Los safaris salen al amanecer.",
        },
        summary: "Lo que pide el monte",
        items: [
          "Ropa de colores neutros",
          "Abrigo para las salidas del amanecer",
          "Repelente con DEET o icaridina",
          "Binoculares",
          "Sombrero y protector",
        ],
      },
      {
        id: "electricidad",
        title: "Electrónica",
        notice: {
          tone: "warn",
          title: "El enchufe es de tipo M",
          body: "Casi ningún adaptador universal lo trae: comprá uno al llegar, en el aeropuerto o en un supermercado.",
        },
        summary: "Para cargar todo",
        items: [
          "Adaptador de tipo M, comprado allá",
          "Una zapatilla para cargar varias cosas con un solo adaptador",
          "Cargadores que digan 100-240 V",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "El certificado de fiebre amarilla",
          body: "Si venís de un país con riesgo —Argentina y Brasil están en la lista—, sin el certificado te pueden negar la entrada.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con al menos dos páginas en blanco",
          "Certificado internacional de vacunación contra la fiebre amarilla, si venís de un país con riesgo",
          "Visa, si tu pasaporte la necesita",
          "Partida de nacimiento de los menores que viajan",
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
          "Repelente, si vas al Kruger",
          "Protector solar alto",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "El adaptador universal",
        why: "Casi ninguno trae el tipo M de Sudáfrica.",
        instead: "Un adaptador de tipo M, comprado al llegar.",
      },
      {
        leave: "Solo ropa de verano en julio",
        why: "Es invierno: en la meseta y en los safaris del amanecer hace frío.",
        instead: "Un buzo abrigado y una campera.",
      },
      {
        leave: "Ropa blanca para el safari",
        why: "Se ensucia enseguida con el polvo del monte.",
        instead: "Ropa de colores neutros.",
      },
      {
        leave: "Joyas y relojes caros a la vista",
        why: "En las ciudades llaman la atención.",
        instead: "Dejarlos en casa.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta funciona casi en todos lados.",
        instead: "Una tarjeta y algo de efectivo para las propinas.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Sudáfrica?",
        answer:
          "Depende del pasaporte. Muchos sudamericanos entran sin visa por turismo; otros la tramitan antes. Verificalo antes de viajar.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Si venís de un país con riesgo, sí: Sudáfrica pide el certificado, y Argentina y Brasil están en su lista. Se aplica al menos diez días antes del viaje.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Depende de qué buscás: de octubre a abril para el Cabo y la costa; de mayo a septiembre para los safaris.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "En el Kruger y el noreste, con más riesgo en verano. Consultá con un médico de viajes antes de ir; en Ciudad del Cabo y la Ruta Jardín no hay.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Sí, uno de tipo M, que se compra allá: casi ningún universal lo trae.",
      },
      {
        question: "¿De qué lado se maneja?",
        answer: "Por la izquierda, como en el Reino Unido.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "Sí: en restaurantes, a guías y rangers de safari, y algo a quien carga nafta y a los cuidacoches.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades, sí; en zonas rurales y en los parques, mejor preguntar.",
      },
    ],
  },
};
