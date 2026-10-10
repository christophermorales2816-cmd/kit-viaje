import type { DestinationGuide } from "./types";

/**
 * Guía de Azerbaiyán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la entrada. Casi todos los pasaportes del sitio
 * tramitan visa electrónica, y las fronteras terrestres estuvieron cerradas a
 * los viajeros desde 2020: se dice como dato a verificar, no como regla fija.
 * Karabaj se nombra como Transnistria en Moldavia —se visita con permiso, y
 * ninguna ciudad del planificador está ahí—. El manat lleva centavos y está
 * estable contra el dólar desde 2017.
 */
export const azerbaiyan: DestinationGuide = {
  slug: "azerbaiyan",
  country: "Azerbaiyán",
  subregion: "Asia Occidental",
  subhead:
    "Una ciudad vieja amurallada junto a torres de vidrio sobre el Caspio, fuego que sale de la tierra, grabados en piedra de miles de años y pueblos de montaña en el Cáucaso. Y té, a toda hora, con dulce.",

  image: null,

  highlights: [
    {
      value: "Viento",
      label: "fuerte en Bakú buena parte del año",
      note: "A Bakú le dicen la ciudad de los vientos. Sopla más en otoño e invierno, y una campera rompevientos sirve casi siempre.",
    },
    {
      value: "Fuego",
      label: "que sale de la tierra en Yanar Dag",
      note: "Una ladera que arde sin parar por el gas que escapa del suelo, a las afueras de Bakú. Por algo le dicen la tierra del fuego.",
    },
    {
      value: "6.000",
      label: "grabados en piedra en Gobustán",
      note: "Petroglifos de miles de años en un paisaje semidesértico, patrimonio de la humanidad, cerca de volcanes de lodo que burbujean.",
    },
    {
      value: "Té",
      label: "con dulce, a cualquier hora",
      note: "Se sirve en vasos con forma de pera, con mermeladas caseras y terrones de azúcar. Es la forma de recibir a cualquiera.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Azerbaiyán",
      body: [
        "La mayoría de los pasaportes latinoamericanos tramita una visa electrónica online, en el sitio oficial, antes de viajar; unos pocos no la necesitan. Verificá el tuyo antes de comprar el pasaje.",
        "Desde 2020 las fronteras terrestres estuvieron cerradas a los viajeros y se entraba en avión. Fijate si eso cambió antes de armar una ruta por tierra desde Georgia.",
        "Karabaj y las zonas cercanas a la frontera con Armenia se visitan solo con permiso especial o en viajes organizados. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Azerbaiyán",
      body: [
        "La moneda es el manat, con centavos (qəpik). En Bakú la tarjeta funciona en casi todos lados, y el pago sin contacto es habitual.",
        "Fuera de la capital, en los mercados y en los pueblos, manda el efectivo. Hay cajeros en todas las ciudades.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí manats: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Del Caspio al Cáucaso",
      body: [
        "Azerbaiyán es hemisferio norte. Bakú, sobre el Caspio, tiene veranos calurosos y secos e inviernos templados, con viento fuerte buena parte del año.",
        "Al norte, en las laderas del Gran Cáucaso, Sheki, Gabala, Quba y Lahij son frescos en verano y fríos en invierno; Shahdag tiene nieve de diciembre a marzo.",
        "Lankaran, en el sur, es subtropical: veranos húmedos, té y cítricos, y lluvia en otoño e invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril, mayo, junio, septiembre y octubre: templado en Bakú y verde en la montaña.",
        "Julio y agosto son calurosos en Bakú y agradables en Sheki, Gabala y Quba. De diciembre a marzo se esquía en Shahdag y en Gabala.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Azerbaiyán",
      body: [
        "En Bakú hay metro, buses y taxis por app. El metro y los buses se pagan con una tarjeta recargable, la BakuCard.",
        "Desde Bakú salen buses y algunos trenes a las ciudades del norte y del sur.",
        "Para Gobustán, los volcanes de lodo y Yanar Dag, que quedan lejos entre sí, muchos viajeros contratan una excursión o un auto con chofer.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "La Ciudad Vieja de Bakú, el palacio de Sheki y los petroglifos de Gobustán.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Plov, dolma, qutab, kebabs y la cultura del té con dulces y frutos secos.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale: "El Gran Cáucaso, el Caspio y el semidesierto de Gobustán.",
    },
    {
      dimension: "Playas",
      score: 3,
      rationale:
        "Hay playas en el Caspio cerca de Bakú, con agua templada en verano, pero no son el motivo del viaje.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Comer y moverse sale poco; Bakú y las estaciones de montaña son más caras.",
    },
    {
      dimension: "Facilidad logística",
      score: 6,
      rationale:
        "Bakú es fácil; el resto pide bus, tren o chofer, y casi siempre se entra en avión.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "El manat se mantiene estable contra el dólar desde 2017.",
    },
  ],

  shines: [
    "Bakú: ciudad vieja amurallada y arquitectura nueva.",
    "Montañas y pueblos del Cáucaso a pocas horas.",
    "La hospitalidad y la cultura del té.",
  ],

  costs: [
    "Casi siempre hay que tramitar visa.",
    "Fuera de Bakú se habla poco inglés.",
    "El viento de Bakú.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Bakú que Shahdag o Lankaran. Los precios están en manats y son órdenes de magnitud; en la estación de esquí, más altos.",

  places: [
    {
      id: "baku",
      name: "Bakú",
      region: "Bakú",
      tag: "La Ciudad Vieja y las Torres de Llamas",
      blurb:
        "La Ciudad Vieja amurallada, con el palacio de los Shirvanshah y la Torre de la Doncella, patrimonio de la humanidad, junto a las Torres de Llamas, el Centro Heydar Aliyev y el bulevar sobre el Caspio. Es la base del planificador: veranos calurosos, inviernos templados y mucho viento.",
      coords: [40.4093, 49.8671],
      featured: true,
      image: null,
    },
    {
      id: "sheki",
      name: "Sheki",
      region: "Sheki-Zaqatala",
      tag: "El palacio de los kanes",
      blurb:
        "Un pueblo en las laderas del Cáucaso con el palacio de los kanes, de vitrales de madera y vidrio de colores, y un caravasar donde se puede dormir. Patrimonio de la humanidad, y famoso por su halva.",
      coords: [41.1919, 47.1706],
      image: null,
    },
    {
      id: "gabala",
      name: "Gabala",
      region: "Sheki-Zaqatala",
      tag: "Montaña y teleféricos",
      blurb:
        "Bosques, lagos y el teleférico de Tufandag, con esquí en invierno y caminatas en verano. Un destino de fin de semana para Bakú.",
      coords: [40.9814, 47.8458],
      image: null,
    },
    {
      id: "quba",
      name: "Quba",
      region: "Quba-Khachmaz",
      tag: "Manzanas y la Aldea Roja",
      blurb:
        "Una ciudad de huertos de manzanas al pie del Cáucaso, frente a la Aldea Roja, una comunidad judía de montaña con siglos de historia.",
      coords: [41.3611, 48.5134],
      image: null,
    },
    {
      id: "shahdag",
      name: "Shahdag",
      region: "Quba-Khachmaz",
      tag: "Esquí en el Gran Cáucaso",
      blurb:
        "Una estación de esquí moderna a más de mil seiscientos metros, con nieve de diciembre a marzo. En verano, caminatas y aire fresco.",
      coords: [41.32, 48.14],
      image: null,
    },
    {
      id: "gobustan",
      name: "Gobustán",
      region: "Bakú",
      tag: "Petroglifos y volcanes de lodo",
      blurb:
        "Más de seis mil grabados en piedra en un paisaje semidesértico, patrimonio de la humanidad, y cerca, volcanes de lodo que burbujean. A una hora de Bakú.",
      coords: [40.11, 49.38],
      image: null,
    },
    {
      id: "shamakhi",
      name: "Shamakhi",
      region: "Shirván",
      tag: "Vino y la mezquita antigua",
      blurb:
        "La antigua capital del Shirván, con la mezquita del Viernes, de las más antiguas del Cáucaso, el mausoleo de Yeddi Gumbez y bodegas en las colinas.",
      coords: [40.6314, 48.6414],
      image: null,
    },
    {
      id: "lankaran",
      name: "Lankaran",
      region: "Lankaran-Astara",
      tag: "Té y bosques subtropicales",
      blurb:
        "Plantaciones de té, cítricos y el parque nacional de Hirkan, con bosques húmedos que son patrimonio de la humanidad, cerca de la frontera con Irán. Lluvioso en otoño e invierno.",
      coords: [38.7529, 48.8475],
      image: null,
    },
    {
      id: "lahij",
      name: "Lahij",
      region: "Shirván",
      tag: "El pueblo de los caldereros",
      blurb:
        "Un pueblo de montaña con calles de piedra y talleres donde el cobre se trabaja a mano desde hace siglos. Fresco en verano, frío en invierno.",
      coords: [40.8478, 48.3889],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Azerbaiyán depende de la zona. Para Bakú, una campera rompevientos casi todo el año; en verano, ropa liviana y protector, y en invierno, abrigo. Para la montaña del norte, capas y, en invierno, ropa de nieve. Siempre, ropa que cubra hombros y rodillas para las mezquitas y la visa electrónica tramitada antes de viajar.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de abril a junio, septiembre y octubre.",
      "La mayoría de los pasaportes latinoamericanos tramita visa electrónica antes de viajar.",
      "En Bakú sopla viento fuerte buena parte del año.",
      "Fuera de Bakú, efectivo y algunas palabras de ruso o de azerí ayudan.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, protector y agua para Bakú y Gobustán en julio y agosto. Para las mezquitas, algo que cubra hombros y rodillas.",
      templado:
        "Ropa liviana de día, un buzo para la noche y una campera rompevientos para Bakú.",
      fresco:
        "Capas, un polar y una campera para el viento de Bakú en otoño y para los pueblos de montaña.",
      frio: "Campera de abrigo, gorro, guantes y calzado para nieve en Shahdag y Gabala en invierno.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Tramitá la visa antes",
          body: "La visa electrónica se pide online, en el sitio oficial, y suele llegar en pocos días. Llevala impresa.",
        },
        {
          title: "Llevá una campera rompevientos",
          body: "El viento de Bakú se siente aun en días de sol, y más sobre el bulevar del Caspio.",
        },
        {
          title: "Sacá una BakuCard",
          body: "Sirve para el metro y los buses de Bakú, y se recarga en las estaciones.",
        },
        {
          title: "Aceptá el té",
          body: "Viene en vasos con forma de pera, con mermelada o un terrón de azúcar. Una invitación al té es parte del viaje.",
        },
        {
          title: "Juntá Gobustán y Yanar Dag en una excursión",
          body: "Los petroglifos, los volcanes de lodo y la colina que arde quedan lejos entre sí y del transporte público.",
        },
        {
          title: "Elegí pagar en manats",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo en la cabeza. Sin zapatos adentro.",
        },
        {
          title: "No planees ir a Karabaj por tu cuenta",
          body: "Se visita solo con permiso especial o en viajes organizados.",
        },
        {
          title: "No tomes a la ligera el conflicto con Armenia",
          body: "Es un tema doloroso para muchos azerbaiyanos. Escuchá más de lo que opinás.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "Embotellada, sobre todo fuera de Bakú.",
        },
        {
          title: "No cuentes con entrar por tierra",
          body: "Las fronteras terrestres estuvieron cerradas a los viajeros durante años. Verificá antes de planear una ruta desde Georgia.",
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
          title: "Visa electrónica",
          body: "La mayoría de los pasaportes latinoamericanos la tramita online antes de viajar. Si te quedás más de quince días hay que registrarse ante migraciones; los hoteles suelen hacerlo.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica impresa",
          "Pasaje de salida y reservas",
          "Seguro de viaje",
        ],
      },
      {
        id: "baku",
        title: "Para Bakú",
        notice: {
          tone: "info",
          title: "Viento",
          body: "El viento del Caspio sopla fuerte buena parte del año, más en otoño e invierno.",
        },
        summary: "Lo que pide la ciudad",
        items: [
          "Campera rompevientos con capucha",
          "Anteojos de sol",
          "Protector solar en verano",
          "Calzado cómodo para la Ciudad Vieja",
        ],
      },
      {
        id: "mezquitas",
        title: "Mezquitas y respeto",
        notice: null,
        summary: "Para entrar sin problemas",
        items: [
          "Algo que cubra hombros y rodillas",
          "Un pañuelo para la cabeza",
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
          "Protector solar",
        ],
      },
    ],
    avoid: [
      {
        leave: "Viajar sin la visa tramitada",
        why: "La mayoría de los pasaportes latinoamericanos la necesita antes de llegar.",
        instead: "La visa electrónica, impresa.",
      },
      {
        leave: "Un paraguas para Bakú",
        why: "Con el viento se da vuelta.",
        instead: "Una campera con capucha.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Bakú, en los mercados y los pueblos, se paga en efectivo.",
        instead: "Manats en efectivo para lo chico.",
      },
      {
        leave: "Solo ropa corta",
        why: "Las mezquitas y los pueblos piden hombros y rodillas cubiertos.",
        instead: "Ropa liviana que cubra.",
      },
      {
        leave: "Un itinerario con cruce por tierra",
        why: "Las fronteras terrestres estuvieron cerradas a los viajeros.",
        instead:
          "Entrar y salir en avión, salvo que verifiques que se abrieron.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Azerbaiyán?",
        answer:
          "La mayoría de los pasaportes latinoamericanos sí: una visa electrónica que se tramita online antes de viajar. Verificá el tuyo.",
      },
      {
        question: "¿Se puede entrar por tierra?",
        answer:
          "Desde 2020 se entra en avión: las fronteras terrestres estuvieron cerradas a los viajeros. Verificá si eso cambió.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a junio, septiembre y octubre. Para esquiar, de diciembre a marzo en Shahdag.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Azerbaiyán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "En restaurantes, alrededor del diez por ciento si la cuenta no lo incluye.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No conviene: embotellada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Azerí. Mucha gente habla ruso, y en Bakú los jóvenes hablan inglés.",
      },
      {
        question: "¿Qué es Yanar Dag?",
        answer:
          "Una ladera a las afueras de Bakú que arde sin parar por el gas que sale de la tierra. Se ve mejor de noche.",
      },
    ],
  },
};
