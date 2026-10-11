import type { DestinationGuide } from "./types";

/**
 * Guía de Macao.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este destino aporta: el territorio más chico del sitio, con moneda y
 * frontera propias (spec, 14.11), y el portugués en los carteles de cada calle.
 * Las nueve "ciudades" son barrios que comparten el clima, como en Catar. El
 * dólar de Hong Kong circula a la par de la pataca, pero el cambio se da en
 * patacas: se dice porque cambia cómo conviene pagar.
 */
export const macao: DestinationGuide = {
  slug: "macao",
  country: "Macao",
  subregion: "Asia Oriental",
  subhead:
    "Calles empedradas portuguesas con nombres en dos idiomas, la fachada de una iglesia jesuita sobre una escalinata, templos chinos, pasteles de nata y, del otro lado del puente, casinos enormes. Cuatro siglos de mezcla en pocos kilómetros.",

  image: null,

  highlights: [
    {
      value: "Pataca",
      label: "o dólares de Hong Kong, que valen casi igual",
      note: "Los dos circulan, pero el cambio se da en patacas, que fuera de Macao casi no sirven. Gastalas antes de irte.",
    },
    {
      value: "Portugués",
      label: "en los carteles de cada calle",
      note: "Es idioma oficial junto con el chino, herencia de más de cuatro siglos de administración portuguesa.",
    },
    {
      value: "San Pablo",
      label: "la fachada de una iglesia del siglo XVII",
      note: "Lo que quedó en pie de una iglesia jesuita, sobre una escalinata, en el centro histórico, patrimonio de la humanidad.",
    },
    {
      value: "Pastel de nata",
      label: "recién salido del horno, en Coloane",
      note: "La herencia portuguesa más dulce. Y para comer, la cocina macaense: minchi, pollo a la africana y sándwich de chuleta.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Macao",
      body: [
        "Macao tiene control de fronteras propio, distinto del de Hong Kong y del de China continental. Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros necesitan tramitarla. Verificá el tuyo.",
        "Para cruzar a China continental hace falta la visa china, que es otra.",
        "Se llega en ferry o en bus por el puente desde Hong Kong, o en avión al aeropuerto de Macao.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Macao",
      body: [
        "La moneda es la pataca, y el dólar de Hong Kong se acepta casi en todos lados a la par. El cambio, en cambio, se da en patacas.",
        "La tarjeta funciona en hoteles, restaurantes y tiendas. En los puestos de comida y las panaderías, efectivo.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí patacas: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Subtropical y húmedo",
      body: [
        "Macao es hemisferio norte. De noviembre a febrero el clima es templado y seco, con noches frescas.",
        "De mayo a septiembre hace calor y mucha humedad, con lluvias fuertes y tifones, sobre todo de julio a septiembre.",
        "Todo el territorio comparte el clima: la península, Taipa, Cotai y Coloane están a minutos.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De octubre a diciembre: templado y seco, con el Gran Premio de autos en noviembre y la ciudad llena.",
        "El Año Nuevo chino trae fuegos artificiales y muchedumbres. En verano conviene seguir el pronóstico de tifones.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Macao",
      body: [
        "La península se recorre a pie. Entre la península, Taipa y Cotai hay buses, un tren ligero y taxis.",
        "Los grandes hoteles de Cotai tienen buses gratis desde el ferry y la frontera.",
        "A Hong Kong se vuelve en ferry o en bus por el puente, en alrededor de una hora.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "El centro histórico portugués y chino, patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Cocina macaense, panaderías portuguesas y cantonesa de primer nivel.",
    },
    {
      dimension: "Paisaje",
      score: 3,
      rationale: "Ciudad y colinas; el paisaje no es el motivo del viaje.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale: "Hac Sa, en Coloane, es de arena oscura y tranquila.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale: "Comer en la calle sale poco; los hoteles de Cotai, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 9,
      rationale:
        "Todo cerca, buses gratis de los hoteles y una hora desde Hong Kong.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "La pataca está atada al dólar de Hong Kong.",
    },
  ],

  shines: [
    "El centro histórico a pie.",
    "La mezcla de cocina portuguesa y china.",
    "Fácil de sumar a un viaje a Hong Kong.",
  ],

  costs: [
    "Muy chico: alcanza con pocos días.",
    "Calor húmedo y tifones en verano.",
    "Hoteles caros en Cotai.",
  ],

  dataScopeNote:
    "Elegís el barrio en el planificador y los cálculos se hacen con su clima, que es el mismo en todo el territorio. Los precios están en patacas y son órdenes de magnitud; en Cotai, más altos.",

  places: [
    {
      id: "centro-historico",
      name: "Centro histórico (Largo do Senado)",
      region: "Península",
      tag: "La plaza de baldosas",
      blurb:
        "La plaza del Senado, de baldosas portuguesas en ondas, iglesias coloniales y callecitas con panaderías. Patrimonio de la humanidad. Es la base del planificador: inviernos templados, veranos húmedos.",
      coords: [22.1937, 113.5397],
      featured: true,
      image: null,
    },
    {
      id: "san-pablo",
      name: "Ruinas de San Pablo y la Fortaleza del Monte",
      region: "Península",
      tag: "La fachada de piedra",
      blurb:
        "La fachada de la iglesia jesuita sobre su escalinata y, al lado, la fortaleza con cañones y el museo de Macao.",
      coords: [22.1975, 113.5409],
      image: null,
    },
    {
      id: "a-ma",
      name: "Templo de A-Ma y la Barra",
      region: "Península",
      tag: "El templo más antiguo",
      blurb:
        "Un templo a la diosa del mar, anterior a la llegada de los portugueses, en la punta sur de la península, cerca del museo marítimo.",
      coords: [22.1863, 113.5308],
      image: null,
    },
    {
      id: "nam-van",
      name: "Torre de Macao y Nam Van",
      region: "Península",
      tag: "La torre y los lagos",
      blurb:
        "La torre con mirador y uno de los saltos de bungee más altos del mundo, junto a los lagos de Nam Van.",
      coords: [22.18, 113.5375],
      image: null,
    },
    {
      id: "taipa",
      name: "Taipa Vieja",
      region: "Taipa",
      tag: "El pueblo de las casas pintadas",
      blurb:
        "La calle de los dulces y las galletas de almendra, las casas portuguesas pintadas de verde y restaurantes macaenses.",
      coords: [22.1534, 113.5571],
      image: null,
    },
    {
      id: "cotai",
      name: "Cotai",
      region: "Cotai",
      tag: "Los casinos",
      blurb:
        "Hoteles casino enormes construidos sobre tierra ganada al mar, con espectáculos, canales interiores y centros comerciales.",
      coords: [22.1457, 113.5654],
      image: null,
    },
    {
      id: "coloane",
      name: "Coloane",
      region: "Coloane",
      tag: "El pueblo tranquilo",
      blurb:
        "Un pueblo de pescadores con una capilla amarilla, senderos en las colinas y una panadería famosa por sus pasteles de nata.",
      coords: [22.1186, 113.5528],
      image: null,
    },
    {
      id: "hac-sa",
      name: "Playa de Hac Sa",
      region: "Coloane",
      tag: "Arena negra",
      blurb:
        "Una playa de arena oscura con pinos y restaurantes portugueses cerca, en el extremo sur del territorio.",
      coords: [22.1193, 113.5721],
      image: null,
    },
    {
      id: "guia",
      name: "Fortaleza y faro de Guia",
      region: "Península",
      tag: "El faro sobre la colina",
      blurb:
        "Una fortaleza con capilla y uno de los primeros faros modernos de la costa china, en el punto más alto de la península.",
      coords: [22.1966, 113.5497],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Macao depende de la estación. De noviembre a febrero, ropa liviana y un buzo para la noche. De mayo a septiembre, ropa que respire, paraguas y un abrigo liviano para el aire acondicionado de los hoteles. Siempre, calzado cómodo para el empedrado y las subidas de la península.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de octubre a diciembre.",
      "Control de fronteras propio, distinto de Hong Kong y China continental.",
      "El dólar de Hong Kong circula, pero el cambio se da en patacas.",
      "Calor húmedo y tifones de junio a septiembre.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana que respire, paraguas, protector y un abrigo liviano para los interiores.",
      templado:
        "Ropa liviana y un buzo para la noche: es el otoño y la primavera, la mejor época.",
      fresco:
        "Un buzo y una campera liviana para las noches de enero y febrero.",
      frio: "Una campera para los días más frescos del invierno, que rara vez bajan de diez grados.",
    },
    plug: {
      types: "Tipo G, tipo D y tipo M",
      voltage: "220 V, 50 Hz",
      note: "Conviven el británico de tres patas planas y los de tres patas redondas. Un adaptador universal los resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Recorré la península a pie",
          body: "Del Largo do Senado a San Pablo y la fortaleza, todo queda a pocas cuadras.",
        },
        {
          title: "Usá los buses gratis de los hoteles",
          body: "Salen del ferry y de la frontera hacia Cotai y la península, aunque no te alojes ahí.",
        },
        {
          title: "Probá la cocina macaense",
          body: "Minchi, pollo a la africana y bacalao: una mezcla de Portugal, China, India y África.",
        },
        {
          title: "Gastá las patacas antes de irte",
          body: "Fuera de Macao casi no se cambian.",
        },
        {
          title: "Sumalo a Hong Kong",
          body: "Con una hora de ferry o de bus, Macao entra en un viaje de uno o dos días.",
        },
        {
          title: "Elegí pagar en patacas",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No confundas las fronteras",
          body: "Macao, Hong Kong y China continental tienen controles separados.",
        },
        {
          title: "No te vayas con patacas",
          body: "Afuera casi no se aceptan ni se cambian.",
        },
        {
          title: "No fotografíes adentro de los casinos",
          body: "Está prohibido en las salas de juego.",
        },
        {
          title: "No subestimes la humedad",
          body: "En verano, el empedrado y las subidas cansan: agua y descansos.",
        },
        {
          title: "No olvides el abrigo liviano",
          body: "El aire acondicionado de los hoteles es muy fuerte.",
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
          body: "Macao tiene control de fronteras propio. Muchos pasaportes entran sin visa, pero no todos; para China continental hace falta otra.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Pasaje de salida",
          "Visa china, si pensás cruzar",
          "Seguro de viaje",
        ],
      },
      {
        id: "verano",
        title: "Para el verano",
        notice: {
          tone: "info",
          title: "Humedad y tifones",
          body: "De junio a septiembre, calor húmedo, lluvias fuertes y tifones. Seguí los avisos.",
        },
        summary: "Lo que pide el verano",
        items: [
          "Paraguas",
          "Ropa liviana que respire",
          "Un abrigo liviano para los interiores",
        ],
      },
      {
        id: "a-pie",
        title: "Para caminar",
        notice: null,
        summary: "Lo que pide la península",
        items: [
          "Zapatillas cómodas con buen agarre",
          "Agua",
          "Protector solar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente",
          "Algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de suela lisa",
        why: "El empedrado portugués resbala, sobre todo con lluvia.",
        instead: "Zapatillas con buen agarre.",
      },
      {
        leave: "Cambiar mucha plata a patacas",
        why: "Fuera de Macao casi no sirven.",
        instead: "Dólares de Hong Kong o tarjeta.",
      },
      {
        leave: "Solo ropa de verano",
        why: "El aire acondicionado es muy fuerte.",
        instead: "Un abrigo liviano.",
      },
      {
        leave: "Una estadía larga sin plan",
        why: "El territorio es chico.",
        instead: "Uno o dos días, o sumarlo a Hong Kong.",
      },
      {
        leave: "Un plan sin margen en verano",
        why: "Un tifón puede frenar los ferris.",
        instead: "Un día libre.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 220 V se quema. Los hoteles tienen uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Macao?",
        answer:
          "Muchos pasaportes latinoamericanos entran sin visa por estadías cortas; otros la necesitan. Verificá el tuyo.",
      },
      {
        question: "¿Puedo pagar con dólares de Hong Kong?",
        answer:
          "Sí, casi en todos lados y a la par, pero el cambio te lo dan en patacas.",
      },
      {
        question: "¿Cuántos días hacen falta?",
        answer: "Uno o dos alcanzan para la península, Taipa y Coloane.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De octubre a diciembre. En verano hay calor húmedo y tifones.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: se usan los tipos G, D y M a 220 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿Se habla portugués?",
        answer:
          "Es idioma oficial y está en todos los carteles, pero en la calle se habla cantonés. En los hoteles, inglés.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "Es tratada, pero muchos la hierven o toman embotellada.",
      },
      {
        question: "¿Cómo llego desde Hong Kong?",
        answer:
          "En ferry o en bus por el puente, en alrededor de una hora, pasando la frontera.",
      },
    ],
  },
};
