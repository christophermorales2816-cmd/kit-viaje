import type { DestinationGuide } from "./types";

/**
 * Guía de Ghana.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la vacuna de la fiebre amarilla obligatoria para
 * todos, vengan de donde vengan, y controlada al llegar. Es el dato de su
 * portada: hasta acá, el certificado dependía de dónde había estado cada uno.
 * El sur tiene dos temporadas de lluvia y el harmattan de diciembre a febrero.
 * Accra es de lo más seco de la costa y no llega al bucket de lluvia (spec,
 * 14.12) en ningún mes; Kakum, tierra adentro, lo activa cinco.
 * Ninguna ciudad está en el norte, donde partes de las regiones fronterizas
 * tienen recomendaciones de más precaución, y la guía lo dice como dato de
 * entrada, como Senegal con Casamance.
 */
export const ghana: DestinationGuide = {
  slug: "ghana",
  country: "Ghana",
  subregion: "África Occidental",
  subhead:
    "Los castillos de Cape Coast y Elmina, los puentes colgantes de Kakum, el reino ashanti en Kumasi y la música y la comida de Accra. Calor húmedo todo el año, sobre el golfo de Guinea.",

  image: null,

  highlights: [
    {
      value: "Vacuna",
      label: "contra la fiebre amarilla, obligatoria para entrar",
      note: "Ghana pide el certificado internacional a todos los viajeros, vengan de donde vengan, y lo revisa en el aeropuerto antes de migraciones. Tiene que estar aplicada al menos diez días antes de llegar.",
    },
    {
      value: "Castillos",
      label: "de la trata de esclavos, en Cape Coast y Elmina",
      note: "Fuertes europeos sobre el Atlántico por donde pasaron muchísimos africanos esclavizados camino a América. Patrimonio de la humanidad; la visita guiada recorre las mazmorras y la Puerta sin Retorno.",
    },
    {
      value: "Kakum",
      label: "puentes colgantes sobre la copa de la selva",
      note: "Siete puentes colgantes a más de treinta metros de altura, en plena selva, a menos de una hora de Cape Coast.",
    },
    {
      value: "Harmattan",
      label: "el viento del Sahara, de diciembre a febrero",
      note: "Trae polvo fino, cielos blancos y noches algo más frescas. Si usás lentes de contacto o tenés alergias, llevá gotas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Ghana",
      body: [
        "La mayoría de los pasaportes de fuera de África necesita visa, que se tramita antes de viajar, online o en un consulado. Verificá el tuyo en el sitio oficial antes de comprar el pasaje.",
        "Ghana pide el certificado internacional de vacunación contra la fiebre amarilla a todos los viajeros, vengan de donde vengan, y lo controla al llegar. La vacuna tiene que estar aplicada al menos diez días antes.",
        "Ninguna ciudad del planificador está en el norte, donde partes de las regiones fronterizas tienen recomendaciones de viaje de más precaución. Si vas, revisá antes las de tu país.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Ghana",
      body: [
        "La moneda es el cedi. La tarjeta funciona en hoteles, restaurantes y supermercados de Accra y Kumasi; en el resto, efectivo o mobile money, el pago por celular que usa todo el país.",
        "Hay cajeros en las ciudades. Si llevás dólares o euros para cambiar, que sean billetes nuevos y sanos, y cambialos en bancos o casas de cambio.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí cedis: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Calor húmedo y dos lluvias",
      body: [
        "Ghana está cerca del ecuador: hace calor todo el año, con mucha humedad en la costa. En el sur hay dos temporadas de lluvia: la larga, de abril a junio, y la corta, de septiembre a noviembre.",
        "Accra es de lo más seco de la costa; hacia el oeste, en Busua, y tierra adentro, en Kakum y Kumasi, llueve bastante más. En Aburi, en las colinas, las noches son algo más frescas.",
        "De diciembre a febrero sopla el harmattan, el viento del Sahara: polvo, cielos blancos y noches un poco más frescas.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: temporada seca, la mejor para recorrer. En diciembre y enero llega el harmattan, y Accra se llena de fiestas y de visitantes de la diáspora.",
        "De abril a junio llueve más, con chaparrones fuertes que se cortan rápido. Julio y agosto son más secos y algo más frescos en la costa.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Ghana",
      body: [
        "Entre las ciudades hay buses cómodos, como los de STC y VIP, y vuelos internos entre Accra y Kumasi. En Accra, aplicaciones como Uber y Bolt; los trotros, las combis colectivas, son baratos pero confusos para el que llega.",
        "El tránsito de Accra es lento a cualquier hora: calculá tiempo de sobra para llegar al aeropuerto.",
        "Las precauciones son las de una ciudad grande: el teléfono guardado en la calle y, de noche, siempre en auto. Se maneja por la derecha.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 8,
      rationale:
        "Los castillos de Cape Coast y Elmina, patrimonio de la humanidad, y el reino ashanti en Kumasi.",
    },
    {
      dimension: "Gastronomía",
      score: 7,
      rationale:
        "Jollof, fufu, banku con pescado a la parrilla, kelewele y waakye.",
    },
    {
      dimension: "Paisaje",
      score: 6,
      rationale:
        "Selva en Kakum, el lago Volta, cascadas en Wli y playas con palmeras.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "Playas largas con palmeras y surf en Busua; el mar es fuerte.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer en la calle es barato; los hoteles de Accra, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Buses cómodos y vuelos internos; el tránsito de Accra es lento.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 5,
      rationale: "El cedi se mueve bastante.",
    },
  ],

  shines: [
    "La historia de la trata de esclavos, contada donde pasó.",
    "La comida de la calle y la música.",
    "Un país tranquilo para empezar a conocer África Occidental.",
  ],

  costs: [
    "Calor y humedad todo el año.",
    "El tránsito de Accra.",
    "Visa y vacuna obligatoria, que se tramitan antes.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Accra en junio que Kumasi o Busua. Los precios están en cedis y son órdenes de magnitud; los hoteles de Accra pueden costar bastante más.",

  places: [
    {
      id: "accra",
      name: "Accra",
      region: "Gran Accra",
      tag: "La capital",
      blurb:
        "Mercados, el barrio de Jamestown con su faro, el mausoleo de Nkrumah y una vida nocturna que no para. Es la base del planificador: calor húmedo todo el año, y de lo más seco de la costa.",
      coords: [5.6037, -0.187],
      featured: true,
      image: null,
    },
    {
      id: "cape-coast",
      name: "Cape Coast",
      region: "Central",
      tag: "El castillo",
      blurb:
        "El castillo de Cape Coast, patrimonio de la humanidad, con el de Elmina a minutos y Kakum a menos de una hora. Playa de pescadores y piraguas de colores.",
      coords: [5.1053, -1.2466],
      image: null,
    },
    {
      id: "kakum",
      name: "Parque Nacional Kakum",
      region: "Central",
      tag: "Puentes sobre la selva",
      blurb:
        "Selva tropical con siete puentes colgantes a más de treinta metros de altura. Llueve de abril a junio y de septiembre a octubre.",
      coords: [5.35, -1.3833],
      image: null,
    },
    {
      id: "busua",
      name: "Busua",
      region: "Occidental",
      tag: "Surf",
      blurb:
        "Una bahía con olas para aprender a surfear, pueblos de pescadores y el fuerte de Dixcove cerca. Más lluviosa que Accra.",
      coords: [4.8028, -1.9356],
      image: null,
    },
    {
      id: "kumasi",
      name: "Kumasi",
      region: "Ashanti",
      tag: "La ciudad ashanti",
      blurb:
        "La capital del reino ashanti, con el palacio de Manhyia, el mercado de Kejetia, uno de los más grandes de África Occidental, y talleres de tela kente cerca.",
      coords: [6.6885, -1.6244],
      image: null,
    },
    {
      id: "ada-foah",
      name: "Ada Foah (estuario del Volta)",
      region: "Gran Accra",
      tag: "Donde el Volta llega al mar",
      blurb:
        "Una lengua de arena entre el río Volta y el océano, con cabañas, kayak y tortugas que desovan en la playa.",
      coords: [5.7833, 0.6333],
      image: null,
    },
    {
      id: "akosombo",
      name: "Akosombo (lago Volta)",
      region: "Oriental",
      tag: "El lago Volta",
      blurb:
        "La represa que formó el lago Volta, uno de los lagos artificiales más grandes del mundo, con paseos en barco a la isla Dodi.",
      coords: [6.2833, 0.05],
      image: null,
    },
    {
      id: "wli",
      name: "Cataratas de Wli (Hohoe)",
      region: "Volta",
      tag: "La cascada más alta",
      blurb:
        "Las cataratas más altas del país, en un bosque con monos y una colonia de murciélagos frugívoros, a pocos kilómetros de Hohoe.",
      coords: [7.1167, 0.5833],
      image: null,
    },
    {
      id: "aburi",
      name: "Aburi (jardín botánico)",
      region: "Oriental",
      tag: "Jardín en las colinas",
      blurb:
        "Un jardín botánico de la época colonial en las colinas de Akuapem, más fresco que Accra, y talleres de tallado en madera sobre la ruta.",
      coords: [5.8483, -0.1747],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Ghana, ropa liviana y fresca, de algodón o lino, sombrero y protector: hace calor húmedo todo el año. De abril a junio y de septiembre a noviembre, algo impermeable. Repelente siempre, el certificado de la fiebre amarilla en el bolso de mano, porque te lo piden al llegar, y un adaptador para el enchufe británico.",
    keyPoints: [
      "Vacuna de la fiebre amarilla obligatoria para todos: el certificado se controla al llegar.",
      "Calor húmedo todo el año; lluvias de abril a junio y de septiembre a noviembre.",
      "Harmattan de diciembre a febrero: polvo y cielos blancos.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y fresca, de algodón o lino, sombrero, protector y repelente. Algo impermeable en las temporadas de lluvia.",
      templado:
        "Ropa liviana y un buzo fino para el aire acondicionado o las noches del harmattan.",
      fresco:
        "Un buzo liviano para el aire acondicionado de los buses y de los hoteles.",
      frio: "No hace frío en Ghana: un buzo liviano alcanza.",
    },
    plug: {
      types: "Tipos D y G",
      voltage: "230 V, 50 Hz",
      note: "Lo más común es el británico, de tres patas rectangulares; también aparece otro de tres patas redondas. Un adaptador universal resuelve los dos. Los cortes de luz son frecuentes. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vacunate contra la fiebre amarilla con tiempo",
          body: "Al menos diez días antes de llegar, y llevá el certificado en el bolso de mano: lo piden antes de migraciones.",
        },
        {
          title: "Tramitá la visa con anticipación",
          body: "Para casi todos los pasaportes de fuera de África se hace antes de viajar.",
        },
        {
          title: "Visitá los castillos con guía",
          body: "La visita guiada recorre las mazmorras y cuenta la historia que el lugar no dice solo.",
        },
        {
          title: "Probá la comida de la calle",
          body: "Kelewele, waakye y pescado a la parrilla, en los puestos con más gente.",
        },
        {
          title: "Usá mobile money",
          body: "Con una línea local, el pago por celular funciona hasta en los puestos chicos.",
        },
        {
          title: "Elegí pagar en cedis",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin el certificado de la fiebre amarilla",
          body: "Sin él te pueden negar la entrada.",
        },
        {
          title: "No uses la mano izquierda para dar o recibir",
          body: "Se considera de mala educación: se da, se recibe, se come y se saluda con la derecha.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o aeropuertos: está prohibido.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Las corrientes de la costa son fuertes, y muchas playas no tienen guardavidas.",
        },
        {
          title: "No te bañes en ríos ni lagos sin preguntar",
          body: "En el lago Volta y en muchos ríos hay bilharzia.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "calor",
        title: "Para el calor",
        notice: {
          tone: "info",
          title: "Humedad todo el año",
          body: "Calor húmedo de día y de noche: ropa que se seque rápido y agua siempre a mano.",
        },
        summary: "Sol y humedad",
        items: [
          "Ropa liviana de algodón o lino",
          "Sombrero, lentes de sol y protector",
          "Una botella con filtro",
          "Algo impermeable en las temporadas de lluvia",
        ],
      },
      {
        id: "recorrer",
        title: "Para recorrer",
        notice: null,
        summary: "Castillos, selva y mercados",
        items: [
          "Calzado cómodo y cerrado",
          "Una mochila chica",
          "Billetes chicos para los mercados",
          "Una batería externa para los cortes de luz",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Visa y fiebre amarilla",
          body: "La mayoría de los pasaportes necesita visa, tramitada antes, y todos los viajeros necesitan el certificado de la fiebre amarilla, que se controla al llegar.",
        },
        summary: "Lo que te van a pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "La visa, si tu pasaporte la necesita",
          "Certificado internacional de vacunación contra la fiebre amarilla",
          "Pasaje de salida del país",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Algo para el estómago",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa gruesa o de jean",
        why: "Con el calor húmedo no se seca nunca.",
        instead: "Algodón o lino livianos.",
      },
      {
        leave: "Billetes grandes",
        why: "En los mercados y en los trotros casi nunca hay vuelto.",
        instead: "Billetes chicos.",
      },
      {
        leave: "Dólares o euros viejos o rotos",
        why: "Se rechazan en bancos y casas de cambio.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "Lentes de contacto sin anteojos de repuesto",
        why: "Con el polvo del harmattan, los ojos se irritan.",
        instead: "Anteojos y gotas lubricantes.",
      },
      {
        leave: "Una valija rígida grande",
        why: "En los trotros y en los buses hay poco lugar.",
        instead: "Una mochila o un bolso mediano.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Ghana?",
        answer:
          "La mayoría de los pasaportes de fuera de África la necesita, y se tramita antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Es obligatoria la vacuna de la fiebre amarilla?",
        answer:
          "Sí, para todos los viajeros, vengan de donde vengan. El certificado se controla al llegar, y la vacuna tiene que estar aplicada al menos diez días antes.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo, la temporada seca. De diciembre a febrero sopla el harmattan.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El inglés es el oficial y se habla en todos lados; en la calle, también twi y otros idiomas locales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente. Lo más común es el británico, tipo G, a 230 V; un adaptador universal resuelve todo.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "En los restaurantes, algo si el servicio no está incluido; a guías y choferes, también.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
