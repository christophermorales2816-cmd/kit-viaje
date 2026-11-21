import type { DestinationGuide } from "./types";

/**
 * Guía de Barbados.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: una isla de 34 kilómetros con dos mares. El oeste
 * es el Caribe calmo y el este, el Atlántico, con olas y corrientes; la guía
 * dice dónde se nada y dónde se mira. Como Malta o Nauru, los nueve destinos
 * del planificador son zonas de la isla y no ciudades.
 *
 * Y el segundo dólar con paridad fija del sitio, después del de Belice: dos
 * de Barbados valen uno estadounidense desde 1975. Los precios van en BBD.
 */
export const barbados: DestinationGuide = {
  slug: "barbados",
  country: "Barbados",
  subregion: "Caribe",
  subhead:
    "Playas de mar calmo al oeste, olas del Atlántico al este, ron, críquet y el pescado volador. Una isla chica, de clima parejo todo el año.",

  image: null,

  highlights: [
    {
      value: "2 mares",
      label: "en una isla de 34 km",
      note: "Al oeste, el Caribe calmo para nadar; al este, el Atlántico, con olas para el surf.",
    },
    {
      value: "2 = 1",
      label: "dólares de Barbados por dólar",
      note: "La paridad es fija desde 1975, y el dólar estadounidense se acepta en casi todos lados.",
    },
    {
      value: "Izquierda",
      label: "se conduce por la",
      note: "Herencia británica, como el críquet. Las rutas son angostas y con curvas.",
    },
    {
      value: "Dic–May",
      label: "época seca",
      note: "De junio a noviembre llueve más y es temporada de huracanes, aunque Barbados queda al borde de su recorrido habitual.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "Antes de llegar se completa en línea el formulario de migración y aduana. Pueden pedirte el pasaje de salida.",
        "Si llegas desde un país con riesgo de fiebre amarilla, o pasaste más de doce horas en el aeropuerto de uno, te piden el certificado de vacunación. Varios países de Sudamérica están en esa lista.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "Dos dólares de Barbados valen uno estadounidense, por paridad fija, y el estadounidense se acepta en casi todos lados. El cambio suele llegar en dólares de Barbados.",
        "Los precios pueden estar en cualquiera de las dos monedas: pregunta siempre cuál.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los buses, los puestos de comida y los bares de ron del barrio, efectivo.",
        "Muchas cuentas incluyen un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "costas",
      title: "Las costas",
      body: [
        "La costa oeste, la de Holetown y Speightstown, es mar calmo y transparente, con tortugas y barcos hundidos para hacer snorkel.",
        "La costa sur, de Bridgetown a Oistins, es la más animada, con playas, bares y el pescado frito de los viernes en Oistins.",
        "La costa este, sobre el Atlántico, tiene olas, rocas y corrientes fuertes. En Bathsheba se mira el mar o se surfea con experiencia, pero no se nada.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De diciembre a mayo es la época seca, con brisa constante. De diciembre a abril es la temporada alta.",
        "De junio a noviembre llueve más, en chaparrones cortos, y es temporada de huracanes. En julio y agosto se celebra el Crop Over, el gran festival de la isla.",
        "El planificador usa el clima histórico de cada zona, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Los buses del gobierno, los privados y las combis blancas cubren casi toda la isla, con tarifa única y en efectivo.",
        "Los taxis no tienen taxímetro: tienen tarifas fijas, y conviene acordar el precio antes de subir.",
        "Para alquilar un auto hace falta un permiso de conducir local, que tramita la empresa de alquiler. Se conduce por la izquierda.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas solas en la arena.",
        "El manzanillo es un árbol de playa venenoso: su savia y su fruto queman. Muchos tienen el tronco marcado con pintura roja, y no conviene refugiarse debajo cuando llueve.",
        "La ropa de camuflaje está prohibida para quien no es militar.",
        "El agua corriente es potable: se filtra a través de la piedra de coral de la isla.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Mar calmo y arena blanca en el oeste y el sur, y playas salvajes en el este.",
    },
    {
      dimension: "Mar y buceo",
      score: 8,
      rationale:
        "Snorkel con tortugas y barcos hundidos en la bahía Carlisle y la costa oeste.",
    },
    {
      dimension: "Cultura y fiestas",
      score: 8,
      rationale: "El Crop Over, el críquet, el ron y los bares de barrio.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "El pescado volador con cou-cou, el pescado frito de Oistins y más de tres siglos de ron.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Caro en alojamiento y en la costa oeste; los buses y la comida de la calle son baratos.",
    },
    {
      dimension: "Facilidad logística",
      score: 8.5,
      rationale:
        "Una isla chica, con buses que llegan a todos lados y vuelos directos desde muchos países.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar desde 1975, y dólares aceptados en casi todos lados.",
    },
  ],

  shines: [
    "Mar calmo y transparente en la costa oeste.",
    "Una isla chica que se recorre entera en bus.",
    "Ron, críquet y el pescado frito de los viernes.",
  ],

  costs: [
    "El precio del alojamiento, sobre todo en la costa oeste.",
    "La costa este, hermosa de ver pero peligrosa para nadar.",
    "La temporada de lluvias y huracanes, de junio a noviembre.",
  ],

  dataScopeNote:
    "Eliges la zona de la isla en el planificador y los cálculos se hacen con su clima, que cambia poco de una costa a la otra. Los precios son órdenes de magnitud, no cotizaciones, y van en dólares de Barbados.",

  places: [
    {
      id: "bridgetown",
      name: "Bridgetown",
      region: "Suroeste",
      tag: "Capital colonial",
      blurb:
        "La capital, con su centro histórico y su guarnición patrimonio de la UNESCO, a un paso de la bahía Carlisle. Es la base del planificador.",
      coords: [13.0975, -59.6167],
      featured: true,
      image: null,
    },
    {
      id: "costa-oeste",
      name: "Holetown y la costa oeste",
      region: "Oeste",
      tag: "Mar calmo",
      blurb:
        "La costa más elegante de la isla, con mar calmo, tortugas y barcos hundidos para hacer snorkel.",
      coords: [13.1874, -59.6386],
      image: null,
    },
    {
      id: "speightstown",
      name: "Speightstown",
      region: "Norte",
      tag: "Pueblo histórico",
      blurb:
        "Un viejo puerto de casas de dos pisos con galerías, en el norte de la costa oeste. Más tranquilo que Holetown.",
      coords: [13.25, -59.6431],
      image: null,
    },
    {
      id: "st-lawrence-gap",
      name: "St. Lawrence Gap y Oistins",
      region: "Sur",
      tag: "Noche y pescado frito",
      blurb:
        "La costa sur más animada, con bares y restaurantes, y el pescado frito de los viernes en el mercado de Oistins.",
      coords: [13.068, -59.56],
      image: null,
    },
    {
      id: "silver-sands",
      name: "Silver Sands",
      region: "Sur",
      tag: "Kitesurf",
      blurb:
        "El extremo sur de la isla, donde el viento constante del este junta a los que hacen kitesurf y windsurf.",
      coords: [13.0469, -59.5197],
      image: null,
    },
    {
      id: "crane-beach",
      name: "Crane Beach y el sureste",
      region: "Sureste",
      tag: "Acantilados",
      blurb:
        "Playas de arena rosada al pie de acantilados, con olas del Atlántico y calas como Bottom Bay.",
      coords: [13.1036, -59.4489],
      image: null,
    },
    {
      id: "bathsheba",
      name: "Bathsheba",
      region: "Costa este",
      tag: "Surf y rocas",
      blurb:
        "Rocas gigantes en el mar, la ola de Soup Bowl para surfistas expertos y las corrientes más fuertes de la isla. Para mirar, no para nadar.",
      coords: [13.2125, -59.5225],
      image: null,
    },
    {
      id: "cueva-harrison",
      name: "Cueva de Harrison",
      region: "Centro",
      tag: "Cueva de cristales",
      blurb:
        "Una cueva de piedra caliza con estalactitas y ríos subterráneos, en el centro verde de la isla, que se recorre en un trencito.",
      coords: [13.1806, -59.5869],
      image: null,
    },
    {
      id: "animal-flower-cave",
      name: "Animal Flower Cave y el norte",
      region: "Norte",
      tag: "Acantilados del norte",
      blurb:
        "Una cueva marina en el extremo norte, con pozas naturales y acantilados donde rompe el Atlántico. El rincón más salvaje de la isla.",
      coords: [13.3358, -59.6058],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Barbados es verano todo el año: ropa ligera, traje de baño, protector y repelente. La brisa del Atlántico refresca, pero el sol quema igual. Suma algo elegante e informal para la noche: varios restaurantes de la costa oeste lo piden. De diciembre a mayo es la época seca.",
    keyPoints: [
      "Calor parejo todo el año, con brisa constante del este.",
      "La costa oeste es mar calmo; la este, olas y corrientes.",
      "De junio a noviembre llueve más, y es temporada de huracanes.",
      "Algo elegante e informal para la noche: varios restaurantes lo piden.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de la isla todo el año.",
      templado: "Camiseta y una capa ligera para la brisa de la noche.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En Barbados no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "115 V, 50 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Pregunta en qué dólares es el precio",
          body: "Puede estar en dólares de Barbados o estadounidenses, y la diferencia es el doble.",
        },
        {
          title: "Nada en la costa oeste o en la sur",
          body: "El mar es calmo y transparente; el del este tiene corrientes peligrosas.",
        },
        {
          title: "Recorre la isla en bus",
          body: "Tarifa única, en efectivo, y pasan seguido por las costas.",
        },
        {
          title: "Ve a Oistins un viernes a la noche",
          body: "Pescado frito, música y la isla entera en la calle.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la costa oeste lo agradecen.",
        },
        {
          title: "Reserva con flexibilidad en temporada de huracanes",
          body: "De junio a noviembre, que la reserva se pueda cambiar.",
        },
      ],
      donts: [
        {
          title: "No nades en la costa este",
          body: "En Bathsheba y el Atlántico las corrientes arrastran incluso a quien nada bien.",
        },
        {
          title: "No te refugies bajo un manzanillo",
          body: "Su savia quema la piel, también cuando gotea con la lluvia.",
        },
        {
          title: "No pagues la propina dos veces",
          body: "Muchas cuentas ya incluyen un cargo por servicio.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
        },
        {
          title: "No subestimes el sol",
          body: "La brisa engaña: quema igual.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el equipaje de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "documentos",
        title: "Antes de reservar",
        notice: {
          tone: "info",
          title: "Entrada",
          body: "Muchos pasaportes entran sin visa; otros la necesitan. El formulario de migración y aduana se completa en línea antes de llegar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Pasaporte vigente y pasaje de salida",
          "El formulario de migración y aduana, completado en línea",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: {
          tone: "warn",
          title: "Temporada de huracanes",
          body: "De junio a noviembre. Sigue los avisos locales y prefiere reservas que se puedan cambiar.",
        },
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Snorkel propio, si tienes",
          "Repelente para el atardecer",
        ],
      },
      {
        id: "noche",
        title: "Para la noche",
        notice: {
          tone: "info",
          title: "Elegante e informal",
          body: "Varios restaurantes de la costa oeste piden camisa con cuello o vestido, y nada de traje de baño.",
        },
        summary: "Lo que piden algunos restaurantes",
        items: [
          "Una camisa con cuello o un vestido ligero",
          "Pantalón largo o falda",
          "Calzado cerrado o sandalias de vestir",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para las quemaduras de sol",
          "Repelente de insectos: hay dengue",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
          "Calzado para el agua, para las rocas de la costa",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En Barbados no hay un mes frío.",
        instead: "Una capa ligera para la brisa de la noche.",
      },
      {
        leave: "Ropa de camuflaje",
        why: "Está prohibida para quien no es militar.",
        instead: "Cualquier otro estampado.",
      },
      {
        leave: "Billetes grandes de dólar",
        why: "En lo local cuesta cambiarlos, y el cambio llega en dólares de Barbados.",
        instead: "Billetes chicos o dólares de Barbados para buses y puestos.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "La toalla grande de casa",
        why: "Los hoteles dan toallas de playa.",
        instead: "Nada, o una de microfibra.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y completa en línea el formulario de migración y aduana antes de llegar.",
      },
      {
        question: "¿Puedo pagar en dólares estadounidenses?",
        answer:
          "Sí, en casi todos lados: dos dólares de Barbados valen uno estadounidense. Pregunta en qué moneda está cada precio, y cuenta con recibir el cambio en dólares de Barbados.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De diciembre a mayo, la época seca. En julio y agosto, si quieres vivir el Crop Over.",
      },
      {
        question: "¿En qué costa conviene nadar?",
        answer:
          "En la oeste y en la sur, de mar calmo. La costa este tiene corrientes peligrosas: se mira o se surfea con experiencia.",
      },
      {
        question: "¿Cómo me muevo por la isla?",
        answer:
          "En bus, con tarifa única y en efectivo, o en taxi con el precio acordado antes. Para alquilar un auto hace falta un permiso local.",
      },
      {
        question: "¿Qué es el Crop Over?",
        answer:
          "El gran festival de la isla, que celebra el fin de la zafra de la caña de azúcar con música, desfiles y disfraces. Termina el primer lunes de agosto.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí: se filtra a través de la piedra de coral de la isla.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 115 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
