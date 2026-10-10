import type { DestinationGuide } from "./types";

/**
 * Guía de Kirguistán.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: la montaña como estación. El lago Song-Kol, a más
 * de tres mil metros, es la ciudad más fría del planificador, y sus yurtas
 * abren solo de junio a septiembre: el consejo de clima tiene que decir que
 * en enero ahí no hay viaje posible, no solo que hace frío. Los permisos de
 * zona de frontera se dicen como dato de entrada, y ninguna ciudad del
 * planificador los necesita.
 */
export const kirguistan: DestinationGuide = {
  slug: "kirguistan",
  country: "Kirguistán",
  subregion: "Asia Central",
  subhead:
    "Montañas del Tian Shan casi sin gente, un lago enorme que no se congela, yurtas en pasturas a tres mil metros y caballos para recorrerlas. Un país nómada, barato y hecho para caminar.",

  image: null,

  highlights: [
    {
      value: "Yurtas",
      label: "para dormir junto al lago Song-Kol, a 3.000 m",
      note: "Los campamentos abren de junio a septiembre. Aun en verano las noches son frías: bolsa de dormir o mucho abrigo.",
    },
    {
      value: "Issyk-Kul",
      label: "un lago de montaña que no se congela",
      note: "A mil seiscientos metros, rodeado de picos nevados. Es levemente salado, y en verano sus playas se llenan.",
    },
    {
      value: "Águilas",
      label: "y los cazadores que las entrenan",
      note: "En la costa sur del Issyk-Kul, los cazadores muestran una tradición nómada que sigue viva.",
    },
    {
      value: "Lagman",
      label: "fideos estirados a mano, en caldo o salteados",
      note: "Llegó con los uigures y los dunganos y se come en todo el país, con carne y verduras.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Kirguistán",
      body: [
        "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica online. Verificá el tuyo antes de comprar el pasaje.",
        "Se llega en avión a Biskek o a Osh, o por tierra desde Kazajistán: Almaty está a unas pocas horas de Biskek.",
        "Algunas zonas de montaña cerca de las fronteras con China y Tayikistán piden un permiso especial, que se tramita con una agencia. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Kirguistán",
      body: [
        "La moneda es el som kirguís. En Biskek la tarjeta funciona en hoteles, restaurantes y supermercados.",
        "Fuera de la capital manda el efectivo: en las yurtas, las casas de familia y los pueblos no hay tarjeta ni cajeros. Sacá antes en Biskek, Karakol u Osh.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí soms: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Casi todo es montaña",
      body: [
        "Kirguistán es hemisferio norte. Biskek y Osh, en los valles, tienen veranos calurosos e inviernos fríos.",
        "El lago Issyk-Kul, a mil seiscientos metros, no se congela y modera el clima de sus orillas: veranos templados, y la costa sur casi no llueve.",
        "Más arriba el invierno es largo y duro. El lago Song-Kol, a más de tres mil metros, está congelado de noviembre a abril, y aun en julio las noches son frías.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre: montañas abiertas, yurtas en Song-Kol y el Issyk-Kul templado. Es la temporada.",
        "Mayo y octubre sirven para Biskek, Osh y los valles, pero arriba ya hace frío. De diciembre a marzo se esquía cerca de Karakol.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Kirguistán",
      body: [
        "Marshrutkas y taxis compartidos conectan Biskek con Karakol, Cholpon-Ata y el resto del lago.",
        "A Song-Kol y a los valles altos se llega por caminos de ripio, en auto todoterreno o a caballo. Los caminos de montaña se cierran en invierno.",
        "En Biskek hay taxis por app. Para la montaña, muchos viajeros contratan un auto con chofer o una agencia.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 5,
      rationale:
        "La torre de Burana, el monte sagrado de Osh y la tradición nómada; pocas ciudades antiguas.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale: "Lagman, plov, beshbarmak y kumis: cocina simple y abundante.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "Las montañas del Tian Shan, lagos de altura y valles con yurtas y caballos.",
    },
    {
      dimension: "Playas",
      score: 3,
      rationale:
        "No tiene mar; el Issyk-Kul tiene playas de verano con agua fresca.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale: "Comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 5,
      rationale:
        "Marshrutkas y caminos de ripio; lo mejor de la montaña pide chofer, agencia o caballo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 7,
      rationale:
        "Moneda chica, pero bastante estable contra el dólar en los últimos años.",
    },
  ],

  shines: [
    "Montañas y lagos de altura casi sin gente.",
    "Dormir en yurta y andar a caballo.",
    "Muy barato.",
  ],

  costs: [
    "La montaña se cierra en invierno.",
    "Caminos lentos y poco transporte arriba.",
    "Fuera de Biskek se habla poco inglés.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Biskek que Karakol o el lago Song-Kol, a más de tres mil metros. Los precios están en soms kirguises y son órdenes de magnitud.",

  places: [
    {
      id: "biskek",
      name: "Biskek",
      region: "Biskek",
      tag: "La capital verde",
      blurb:
        "Avenidas con árboles, la plaza Ala-Too, el bazar de Osh y montañas nevadas en el horizonte. Es la base del planificador: veranos calurosos, inviernos fríos.",
      coords: [42.8746, 74.5698],
      featured: true,
      image: null,
    },
    {
      id: "cholpon-ata",
      name: "Cholpon-Ata (Issyk-Kul)",
      region: "Issyk-Kul",
      tag: "Playas en la costa norte",
      blurb:
        "Playas de lago con picos nevados enfrente y un campo de petroglifos al aire libre. Un balneario lleno en verano; tranquilo y frío el resto del año.",
      coords: [42.6497, 77.0819],
      image: null,
    },
    {
      id: "karakol",
      name: "Karakol",
      region: "Issyk-Kul",
      tag: "La base de montaña",
      blurb:
        "La puerta a los valles y glaciares del Tian Shan, con una catedral ortodoxa de madera y una mezquita dungana con forma de pagoda. Esquí en invierno.",
      coords: [42.4907, 78.3936],
      image: null,
    },
    {
      id: "jeti-oguz",
      name: "Jeti-Oguz",
      region: "Issyk-Kul",
      tag: "Los siete toros",
      blurb:
        "Rocas rojas con forma de toros en la entrada de un valle de pinos y praderas, con caminatas hasta cascadas. Frío de montaña en invierno.",
      coords: [42.33, 78.23],
      image: null,
    },
    {
      id: "bokonbaevo",
      name: "Bokonbaevo y el cañón Skazka",
      region: "Issyk-Kul",
      tag: "La costa sur",
      blurb:
        "La costa seca del Issyk-Kul, con el cañón Skazka, de formaciones de colores, y los cazadores que entrenan águilas. Casi no llueve.",
      coords: [42.1167, 76.9833],
      image: null,
    },
    {
      id: "ala-archa",
      name: "Parque Nacional Ala-Archa",
      region: "Chuy",
      tag: "Montaña a una hora de Biskek",
      blurb:
        "Picos y glaciares a menos de una hora de Biskek, con caminatas de un día hasta cascadas y refugios. Nieve en invierno.",
      coords: [42.565, 74.482],
      image: null,
    },
    {
      id: "song-kol",
      name: "Lago Song-Kol",
      region: "Naryn",
      tag: "Yurtas a tres mil metros",
      blurb:
        "Un lago en una meseta de pasturas a más de tres mil metros, con campamentos de yurtas y caballos de junio a septiembre. El resto del año, congelado y sin campamentos.",
      coords: [41.8333, 75.1333],
      image: null,
    },
    {
      id: "osh",
      name: "Osh",
      region: "Osh",
      tag: "El monte sagrado",
      blurb:
        "De las ciudades más antiguas de Asia Central, con el monte Sulaimán, patrimonio de la humanidad, y un bazar enorme. Calurosa en verano.",
      coords: [40.5283, 72.7985],
      image: null,
    },
    {
      id: "arslanbob",
      name: "Arslanbob",
      region: "Jalal-Abad",
      tag: "El bosque de nogales",
      blurb:
        "Un pueblo de montaña junto a uno de los bosques de nogales silvestres más grandes del mundo, con cascadas y casas de familia para dormir.",
      coords: [41.3333, 72.9333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Kirguistán es montaña. Para Biskek y Osh en verano, ropa liviana; para el Issyk-Kul, traje de baño y un abrigo para la noche. Para Song-Kol y la montaña, capas, campera de abrigo, gorro y bolsa de dormir aun en julio. En invierno, ropa de nieve. Siempre, efectivo en soms para los pueblos y las yurtas.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de junio a septiembre.",
      "Arriba de los dos mil metros las noches son frías aun en verano.",
      "Fuera de Biskek manda el efectivo.",
      "Las yurtas de Song-Kol abren solo de junio a septiembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, protector y sombrero para Biskek y Osh en julio y agosto: el sol de montaña quema.",
      templado:
        "Ropa liviana de día y un abrigo para la noche: es el verano del Issyk-Kul, con traje de baño.",
      fresco:
        "Capas, un polar y una campera impermeable para los valles de montaña y las noches del lago.",
      frio: "Campera de pluma, térmicas, gorro, guantes y bolsa de dormir abrigada para Song-Kol y la montaña. En pleno invierno, Song-Kol está congelado y sin campamentos.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "220 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dormí una noche en yurta",
          body: "En Song-Kol o en los valles de montaña, con cena casera y caballos al día siguiente.",
        },
        {
          title: "Llevá efectivo desde la ciudad",
          body: "En las yurtas, las casas de familia y los pueblos no hay tarjeta ni cajeros.",
        },
        {
          title: "Contratá un chofer para la montaña",
          body: "A Song-Kol y a los valles altos se llega por caminos de ripio. Un auto con chofer o una agencia lo resuelven.",
        },
        {
          title: "Buscá casas de familia",
          body: "En Karakol, Arslanbob y los pueblos son baratas y ayudan a organizar caminatas y caballos.",
        },
        {
          title: "Probá el kumis en verano",
          body: "Leche de yegua fermentada, ácida y apenas alcohólica, en las yurtas de las pasturas altas.",
        },
        {
          title: "Elegí pagar en soms",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No subestimes la altura",
          body: "Song-Kol está a más de tres mil metros: subí despacio y tomá agua.",
        },
        {
          title: "No vayas a la montaña sin abrigo",
          body: "Aun en julio, las noches en las yurtas son frías.",
        },
        {
          title: "No planees Song-Kol fuera de temporada",
          body: "De octubre a mayo el lago está congelado o por congelarse, y los campamentos están cerrados.",
        },
        {
          title: "No tomes agua de la canilla ni de los arroyos",
          body: "Embotellada, hervida o filtrada.",
        },
        {
          title: "No entres a una mezquita sin cubrirte",
          body: "Hombros y rodillas cubiertos, y las mujeres con un pañuelo en la cabeza. Sin zapatos adentro.",
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
        title: "Documentos y permisos",
        notice: {
          tone: "warn",
          title: "Visa y zonas de frontera",
          body: "Muchos pasaportes entran sin visa y otros tramitan una visa electrónica. Algunas zonas de montaña cerca de las fronteras piden un permiso especial.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica, si tu pasaporte la necesita",
          "Permiso de zona de frontera, si vas a una",
          "Seguro de viaje que cubra montaña",
        ],
      },
      {
        id: "montana",
        title: "Para la montaña y las yurtas",
        notice: {
          tone: "info",
          title: "Frío de noche",
          body: "A más de dos mil metros las noches son frías aun en julio.",
        },
        summary: "Lo que pide la altura",
        items: [
          "Bolsa de dormir o campera de pluma",
          "Polar y térmicas",
          "Campera impermeable",
          "Linterna frontal",
        ],
      },
      {
        id: "lago",
        title: "Para el Issyk-Kul",
        notice: null,
        summary: "Lo que pide el verano del lago",
        items: ["Traje de baño", "Protector solar", "Un abrigo para la noche"],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Protector solar y labial para la altura",
          "Pastillas o filtro para el agua",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo ropa de verano",
        why: "En la montaña y en el lago refresca mucho de noche.",
        instead: "Un polar y una campera.",
      },
      {
        leave: "Solo la tarjeta",
        why: "Fuera de Biskek casi todo se paga en efectivo.",
        instead: "Soms en efectivo para todo lo que sea fuera de la capital.",
      },
      {
        leave: "Una valija con rueditas",
        why: "Los caminos de montaña son de ripio y las yurtas están en el pasto.",
        instead: "Una mochila o un bolso blando.",
      },
      {
        leave: "Zapatos nuevos",
        why: "Las caminatas son largas.",
        instead: "Calzado de trekking ya usado.",
      },
      {
        leave: "Un itinerario apretado",
        why: "Los caminos de montaña son lentos y el clima cambia rápido.",
        instead: "Días de margen.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema, y en las yurtas no hay dónde enchufarlo.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Kirguistán?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros tramitan una visa electrónica. Verificá el tuyo antes de viajar.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre, con la montaña abierta. Para esquiar, de diciembre a marzo cerca de Karakol.",
      },
      {
        question: "¿Se puede dormir en yurta?",
        answer:
          "Sí, de junio a septiembre en Song-Kol y en los valles de montaña, en campamentos con cena. Llevá abrigo: las noches son frías.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Kirguistán usa los tipos C y F a 220 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En los restaurantes de Biskek, alrededor del diez por ciento si la cuenta no lo incluye.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No conviene: embotellada, hervida o filtrada.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Kirguís y ruso. En Biskek se habla algo de inglés; en la montaña, casi nada.",
      },
      {
        question: "¿El Issyk-Kul se congela?",
        answer:
          "No: es levemente salado y no se congela, aunque alrededor el invierno es frío.",
      },
    ],
  },
};
