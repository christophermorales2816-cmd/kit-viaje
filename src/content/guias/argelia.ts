import type { DestinationGuide } from "./types";

/**
 * Guía de Argelia.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: el caso de Malaui en el norte de África. El dinar
 * tiene una cotización oficial y otra paralela muy lejos entre sí, así que los
 * precios van en dólares y el corredor muestra las dos (spec, 15.9); además,
 * como en Marruecos y Túnez, no se puede sacar del país. El dato de su
 * portada son las ciudades romanas —Timgad, Djémila y Tipaza—, patrimonio de
 * la humanidad. La visa se tramita en un consulado, y es lo que más cuesta del
 * viaje. Ninguna ciudad del planificador está cerca de las fronteras del sur y
 * del este ni en el Sahara profundo, y la guía lo dice como dato de entrada,
 * como Kenia con la frontera de Somalia.
 */
export const argelia: DestinationGuide = {
  slug: "argelia",
  country: "Argelia",
  subregion: "África del Norte",
  subhead:
    "Ciudades romanas enteras y casi sin visitantes, la Casba de Argel sobre la bahía, los puentes de Constantina y el valle del M'zab, a las puertas del Sahara.",

  image: null,

  highlights: [
    {
      value: "3 ciudades",
      label: "romanas patrimonio de la humanidad: Timgad, Djémila y Tipaza",
      note: "Calles, foros, arcos y mosaicos casi intactos, con muy pocos visitantes. Timgad, trazada en damero, es de las mejor conservadas del mundo romano.",
    },
    {
      value: "Casba",
      label: "de Argel, una ciudad vieja sobre el mar",
      note: "Patrimonio de la humanidad, con callejones en pendiente, palacios otomanos y terrazas sobre la bahía. Conviene recorrerla con guía local.",
    },
    {
      value: "M'zab",
      label: "cinco ciudades fortificadas a las puertas del desierto",
      note: "El valle de Ghardaïa, patrimonio de la humanidad: ciudades del siglo XI que inspiraron a arquitectos modernos. Se recorre con guía local.",
    },
    {
      value: "2 cotizaciones",
      label: "del dinar, muy lejos entre sí",
      note: "La oficial y la del mercado paralelo están muy lejos, y el dinar no se puede sacar del país. Por eso los precios del planificador están en dólares.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Argelia",
      body: [
        "Casi todos los pasaportes necesitan visa, que se tramita en un consulado antes de viajar, con reserva de hotel o una carta de invitación; con un viaje armado por una agencia, el trámite es más rápido. Verificá el tuyo antes de comprar el pasaje.",
        "Argelia pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y varios de Sudamérica están en esa lista. Si tu viaje pasa por uno, vacunate al menos diez días antes y llevá el certificado.",
        "Ninguna ciudad del planificador está cerca de las fronteras del sur y del este ni en el Sahara profundo —Tamanrasset, Djanet, Illizi—, donde las recomendaciones de viaje piden no ir o ir solo con agencia. Si vas, revisá antes las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Argelia",
      body: [
        "La moneda es el dinar argelino, con una cotización oficial y otra en el mercado paralelo muy lejos entre sí. Por eso los precios del planificador están en dólares.",
        "El dinar no se puede sacar del país, y al entrar se declaran las divisas. Cambiá de a poco, solo en bancos o en el hotel: el cambio en la calle es ilegal.",
        "Casi todo se paga en efectivo: la tarjeta funciona en pocos hoteles grandes, y los cajeros no siempre aceptan tarjetas extranjeras. Llevá euros en billetes nuevos.",
      ],
    },
    {
      id: "clima",
      title: "Mediterráneo y Sahara",
      body: [
        "En la costa —Argel, Orán, Béjaïa— los veranos son calurosos y secos, y los inviernos, templados y lluviosos, de noviembre a marzo.",
        "Tierra adentro, en Constantina, Djémila y Timgad, a más de seiscientos metros, el invierno es frío, con heladas de noche, y el verano pasa los treinta y tres grados.",
        "Ghardaïa ya es Sahara: pasa los cuarenta grados en julio y casi no llueve; las noches de invierno son frescas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De marzo a mayo y de septiembre a noviembre: templado en la costa y en el interior, la mejor época para las ruinas.",
        "Para Ghardaïa, de octubre a abril. En verano, la costa se llena de veraneantes; en Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Argelia",
      body: [
        "Entre Argel, Orán y Constantina hay trenes y vuelos internos, y los buses llegan a todas partes. A Ghardaïa se llega en vuelo o en bus.",
        "En Argel hay metro, tranvía y teleféricos, y aplicaciones de taxi como Yassir.",
        "En las rutas hay controles policiales: llevá el pasaporte siempre. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 9,
      rationale:
        "Ciudades romanas enteras, la Casba de Argel y el valle del M'zab.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Cuscús, chorba, chakhchoukha, dulces de almendra y pan casero.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "Costa mediterránea, las montañas de Cabilia y el comienzo del Sahara.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale: "Calas y playas en la costa, como las de Tipaza y Béjaïa.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Barato con la cotización paralela; los hoteles son de calidad despareja.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale: "Visa en consulado, controles y poco turismo organizado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 3,
      rationale: "Dos cotizaciones muy lejos entre sí.",
    },
  ],

  shines: [
    "Las ruinas romanas, casi sin visitantes.",
    "La Casba de Argel y el M'zab.",
    "Mediterráneo y Sahara en un solo país.",
  ],

  costs: [
    "La visa, que se tramita en un consulado.",
    "Dos cotizaciones y casi todo en efectivo.",
    "Poca infraestructura turística.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Argel en enero que Timgad o Ghardaïa. Los precios están en dólares, que es como conviene pensarlos con un dinar de dos cotizaciones, y son órdenes de magnitud.",

  places: [
    {
      id: "argel",
      name: "Argel",
      region: "Argel",
      tag: "La Blanca",
      blurb:
        "La Casba sobre la bahía, la basílica de Nuestra Señora de África, el museo del Bardo y los bulevares de la época francesa. Es la base del planificador: veranos calurosos y secos, inviernos templados y lluviosos.",
      coords: [36.7538, 3.0588],
      featured: true,
      image: null,
    },
    {
      id: "tipaza",
      name: "Tipaza (ruinas romanas)",
      region: "Tipaza",
      tag: "Ruinas sobre el mar",
      blurb:
        "Ruinas romanas entre pinos y acantilados, sobre el Mediterráneo, a una hora de Argel.",
      coords: [36.5917, 2.4475],
      image: null,
    },
    {
      id: "oran",
      name: "Orán",
      region: "Orán",
      tag: "La ciudad del raï",
      blurb:
        "La segunda ciudad, con el fuerte de Santa Cruz sobre la bahía, huellas de la época española y la música raï.",
      coords: [35.6971, -0.6308],
      image: null,
    },
    {
      id: "tlemcen",
      name: "Tlemcen",
      region: "Tlemcen",
      tag: "La ciudad andalusí",
      blurb:
        "Mezquitas y palacios de los zayyaníes, las ruinas de Mansura y cascadas cerca; de lo más andalusí del Magreb. Inviernos fríos.",
      coords: [34.8783, -1.315],
      image: null,
    },
    {
      id: "bejaia",
      name: "Béjaïa",
      region: "Béjaïa",
      tag: "Cabilia y el mar",
      blurb:
        "Una ciudad sobre el golfo, con el parque nacional de Gouraya, playas y la Cabilia montañosa alrededor.",
      coords: [36.7509, 5.0567],
      image: null,
    },
    {
      id: "constantina",
      name: "Constantina",
      region: "Constantina",
      tag: "La ciudad de los puentes",
      blurb:
        "Una ciudad sobre un cañón, unida por puentes colgantes, con el palacio de Ahmed Bey. Inviernos fríos, veranos calurosos.",
      coords: [36.365, 6.6147],
      image: null,
    },
    {
      id: "djemila",
      name: "Djémila (ruinas romanas)",
      region: "Sétif",
      tag: "Ruinas en la montaña",
      blurb:
        "Una ciudad romana entera en una ladera, patrimonio de la humanidad, con mosaicos en el museo. Inviernos fríos.",
      coords: [36.3203, 5.7364],
      image: null,
    },
    {
      id: "timgad",
      name: "Timgad (ruinas romanas)",
      region: "Batna",
      tag: "La Pompeya de África",
      blurb:
        "Una ciudad romana trazada en damero, patrimonio de la humanidad, con su arco de Trajano. Lo más frío del planificador en invierno.",
      coords: [35.4844, 6.4686],
      image: null,
    },
    {
      id: "ghardaia",
      name: "Ghardaïa (valle del M'zab)",
      region: "Ghardaïa",
      tag: "El valle del M'zab",
      blurb:
        "Cinco ciudades fortificadas del siglo XI en el valle del M'zab, patrimonio de la humanidad, que se recorren con guía local. Pasa los cuarenta grados en julio.",
      coords: [32.4911, 3.6736],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Argelia depende de la zona. En la costa, ropa liviana en verano y una campera liviana e impermeable en invierno. Tierra adentro, en Constantina, Djémila y Timgad, abrigo de verdad de diciembre a febrero. Para Ghardaïa, ropa holgada que cubra, sombrero y protector. Siempre, ropa que cubra hombros y rodillas, y euros en efectivo.",
    keyPoints: [
      "Visa en un consulado antes de viajar, con reserva o carta de invitación.",
      "Dos cotizaciones: los precios del planificador están en dólares, y el dinar no se puede sacar del país.",
      "Costa templada; interior frío en invierno; Ghardaïa, calor extremo en verano.",
      "Ropa que cubra hombros y rodillas fuera de las playas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, protector y agua para Ghardaïa y el verano del interior.",
      templado: "Ropa liviana de día y un buzo para la noche.",
      fresco: "Capas, un buzo y una campera liviana para la costa en invierno.",
      frio: "Campera de abrigo, gorro y guantes para Constantina, Djémila y Timgad de diciembre a febrero.",
    },
    plug: {
      types: "Tipos C y F",
      voltage: "230 V, 50 Hz",
      note: "Dos patas redondas, como en casi toda Europa. Si tu enchufe es de otro tipo, llevá adaptador. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la visa con tiempo",
          body: "En el consulado, con la reserva de hotel o una carta de invitación; con agencia, es más rápido.",
        },
        {
          title: "Andá temprano a las ruinas",
          body: "Timgad y Djémila tienen poca sombra y casi ningún visitante.",
        },
        {
          title: "Probá la chakhchoukha",
          body: "Pan desmenuzado con guiso de cordero y garbanzos, típico del este.",
        },
        {
          title: "Llevá euros en efectivo",
          body: "En billetes nuevos: las tarjetas extranjeras casi no funcionan.",
        },
        {
          title: "Cruzá los puentes de Constantina",
          body: "A pie, por el colgante de Sidi M'Cid, sobre el cañón del Rhumel.",
        },
        {
          title: "Recorré la Casba con guía",
          body: "Los callejones son un laberinto, y un guía local abre las puertas de los palacios.",
        },
      ],
      donts: [
        {
          title: "No cambies plata en la calle",
          body: "Es ilegal: cambiá en bancos o en el hotel.",
        },
        {
          title: "No te vayas con dinares",
          body: "No se pueden sacar del país: cambiá de a poco y gastalos antes de irte.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o del puerto.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No tomes alcohol en la calle",
          body: "Se consigue en algunos hoteles y restaurantes; en público, no.",
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
          title: "Visa en consulado",
          body: "Casi todos los pasaportes necesitan visa, tramitada antes en un consulado, con reserva de hotel o una carta de invitación.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa, tramitada antes",
          "Reserva de hotel o carta de invitación",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: {
          tone: "info",
          title: "Efectivo, y nada de dinares a la salida",
          body: "Las tarjetas extranjeras casi no funcionan, y el dinar no se puede sacar del país: cambiá de a poco.",
        },
        summary: "Para pagar sin problemas",
        items: [
          "Euros en billetes nuevos",
          "Una tarjeta para los hoteles grandes",
          "Los comprobantes de cambio",
        ],
      },
      {
        id: "respeto",
        title: "Ropa y respeto",
        notice: null,
        summary: "Para moverte cómodo",
        items: [
          "Ropa que cubra hombros y rodillas",
          "Un pañuelo para las mezquitas",
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
          "Algo para el estómago",
          "Protector solar",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta o ajustada",
        why: "Fuera de las playas se cubren hombros y rodillas.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Las tarjetas extranjeras casi no funcionan.",
        instead: "Euros en efectivo.",
      },
      {
        leave: "Cambiar todo el dinero al llegar",
        why: "El dinar no se puede sacar del país, y volver a cambiarlo es difícil.",
        instead: "Cambiar de a poco.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "El interior tiene heladas de noche.",
        instead: "Una campera de abrigo.",
      },
      {
        leave: "Lentes de contacto sin anteojos de repuesto",
        why: "El viento y la arena del sur irritan los ojos.",
        instead: "Anteojos y gotas lubricantes.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Argelia?",
        answer:
          "Casi todos los pasaportes la necesitan, y se tramita en un consulado antes de viajar. Verificá el tuyo.",
      },
      {
        question: "¿Por qué los precios están en dólares?",
        answer:
          "Porque el dinar tiene dos cotizaciones muy lejos entre sí: en dólares, el presupuesto dice lo que de verdad cuesta.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, te la pueden pedir.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Primavera y otoño: de marzo a mayo y de septiembre a noviembre.",
      },
      {
        question: "¿Se puede ir al Sahara?",
        answer:
          "Ghardaïa está en el planificador. Más al sur, las recomendaciones de viaje piden ir con agencia o no ir: revisá las de tu país.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El árabe y el tamazight son los oficiales; el francés se habla mucho.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer: "Probablemente: Argelia usa los tipos C y F a 230 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "En las ciudades suele serlo, pero conviene tomar embotellada.",
      },
    ],
  },
};
