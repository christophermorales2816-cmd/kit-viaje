import type { DestinationGuide } from "./types";

/**
 * Guía de China.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: dos cosas que cambian cómo se prepara el viaje y que
 * ningún otro país del sitio tiene. Casi todo se paga con el celular (Alipay o
 * WeChat Pay), y muchos servicios occidentales —Google, WhatsApp, Instagram—
 * no funcionan con una conexión china. Se dice como logística, sin opinión. La
 * entrada sin visa se amplió por etapas y a prueba: se dice el mecanismo y se
 * manda a verificar. El Tíbet pide un permiso aparte y no está en el
 * planificador.
 */
export const china: DestinationGuide = {
  slug: "china",
  country: "China",
  subregion: "Asia Oriental",
  subhead:
    "La Gran Muralla, la Ciudad Prohibida, los guerreros de terracota, montañas de piedra que salen del río y ciudades del futuro. Un país del tamaño de un continente, con trenes rápidos que lo acortan.",

  image: null,

  highlights: [
    {
      value: "QR",
      label: "para pagar casi todo, con Alipay o WeChat",
      note: "Las dos aceptan tarjetas extranjeras y conviene configurarlas antes de viajar. El efectivo es legal, pero en muchos puestos no tienen vuelto.",
    },
    {
      value: "Gran Muralla",
      label: "a un día de excursión desde Pekín",
      note: "Mutianyu y Jinshanling son tramos restaurados con menos gente que Badaling. Se camina sobre la muralla, de torre en torre.",
    },
    {
      value: "Terracota",
      label: "miles de soldados de barro en Xi'an",
      note: "El ejército del primer emperador, enterrado hace más de dos mil años y descubierto por unos campesinos que cavaban un pozo.",
    },
    {
      value: "Tren bala",
      label: "la red de alta velocidad más grande del mundo",
      note: "De Pekín a Shanghái en algo más de cuatro horas. Los pasajes se sacan con el pasaporte.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a China",
      body: [
        "China fue ampliando la lista de pasaportes que entran sin visa por estadías cortas, y algunos latinoamericanos entraron a esa lista a prueba, por un período. Otros necesitan visa del consulado. Verificá el tuyo y fijate si la exención sigue vigente cuando viajes.",
        "Muchos pasaportes pueden pasar varios días sin visa si están en tránsito hacia un tercer país, entrando y saliendo por ciertos aeropuertos y quedándose en ciertas regiones. Sirve para sumar China a un viaje por Asia.",
        "Al llegar te toman huellas. El Tíbet pide un permiso especial aparte, que se tramita con una agencia autorizada: por eso no está en el planificador.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en China",
      body: [
        "La moneda es el yuan, también llamado renminbi. Casi todo se paga con el celular, escaneando un código QR: Alipay y WeChat Pay aceptan tarjetas extranjeras y conviene dejarlas configuradas antes de viajar.",
        "Las tarjetas internacionales funcionan en hoteles grandes, aeropuertos y algunas tiendas. El efectivo es legal y hay que aceptarlo, pero en muchos puestos y taxis no tienen vuelto.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí yuanes: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "internet",
      title: "El celular funciona distinto",
      body: [
        "Google —el buscador, Maps, Gmail—, WhatsApp, Instagram y muchos servicios occidentales no funcionan con el wifi ni con un chip de China. Una eSIM de un operador extranjero, con datos en roaming, suele funcionar como en tu país.",
        "Para moverse, Apple Maps o Amap; para pedir un auto, DiDi, que tiene versión en inglés; para hablar con quien vive allá, WeChat.",
        "Bajá todo y probalo antes de salir: una vez allá, algunas tiendas de aplicaciones tampoco funcionan.",
      ],
    },
    {
      id: "clima",
      title: "Un país, todos los climas",
      body: [
        "China es hemisferio norte: enero es invierno y julio, verano. Pekín y Xi'an tienen inviernos secos y helados, y veranos calurosos con la lluvia concentrada en julio y agosto.",
        "Shanghái, Hangzhou y el valle del Yangtsé son húmedos todo el año, con una temporada de lluvias en junio. El sur, con Guilín, casi no conoce el frío.",
        "Harbin, en el noreste, pasa el invierno muy por debajo de cero. Lijiang, a más de dos mil metros, tiene días templados, noches frías y lluvia de junio a septiembre.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Abril y mayo, y septiembre y octubre: clima templado en casi todo el país.",
        "Conviene esquivar la Semana Dorada (la primera de octubre) y el Año Nuevo chino (enero o febrero, según el año): viaja todo el país, los trenes se agotan y los lugares famosos se llenan.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por China",
      body: [
        "Entre ciudades, el tren de alta velocidad: rápido, puntual y con estaciones enormes donde conviene llegar con tiempo, porque hay control de seguridad y de pasaporte. Para distancias muy largas, vuelos internos.",
        "En las ciudades, metro con carteles en inglés y DiDi para los autos. El pasaporte se pide en trenes, hoteles y muchas atracciones: llevalo siempre encima.",
        "Las precauciones son las de cualquier gran ciudad: el celular y la mochila a mano en el metro lleno y en los lugares turísticos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "La Gran Muralla, la Ciudad Prohibida, los guerreros de terracota: miles de años de imperio a la vista.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Pato laqueado en Pekín, dumplings en Shanghái, el picante de Sichuan y fideos en cada esquina.",
    },
    {
      dimension: "Paisaje",
      score: 10,
      rationale:
        "El río Li entre montañas de piedra, los pilares de Zhangjiajie y las montañas nevadas de Yunnan.",
    },
    {
      dimension: "Playas",
      score: 4,
      rationale:
        "Las hay en el sur, pero no son el motivo del viaje ni están en el planificador.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 8,
      rationale:
        "Comer y moverse en tren sale bien; las entradas y los hoteles de Shanghái, no tanto.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Trenes y metro excelentes, pero pagar, conectarse y entenderse piden preparación previa.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale: "Precios estables y pagos digitales en todos lados.",
    },
  ],

  shines: [
    "Monumentos que no existen en ningún otro lado.",
    "Trenes rápidos que acortan un país enorme.",
    "Comida distinta en cada región.",
  ],

  costs: [
    "Pagos y aplicaciones que hay que preparar antes.",
    "Feriados largos con todo el país viajando.",
    "Poca gente habla inglés fuera de los hoteles.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Harbin en enero que Guilín. Los precios están en yuanes y son órdenes de magnitud.",

  places: [
    {
      id: "pekin",
      name: "Pekín",
      region: "Pekín",
      tag: "La capital imperial",
      blurb:
        "La Ciudad Prohibida, la plaza de Tiananmén, el Templo del Cielo, los callejones (hutong) y la Gran Muralla a un día de excursión. Es la base del planificador: inviernos secos y helados, veranos calurosos con lluvia en julio y agosto.",
      coords: [39.9042, 116.4074],
      featured: true,
      image: null,
    },
    {
      id: "shanghai",
      name: "Shanghái",
      region: "Shanghái",
      tag: "La ciudad del futuro",
      blurb:
        "El Bund y su arquitectura de los años veinte frente a los rascacielos de Pudong, la antigua Concesión Francesa y el jardín Yuyuan. Húmeda todo el año.",
      coords: [31.2304, 121.4737],
      image: null,
    },
    {
      id: "xian",
      name: "Xi'an",
      region: "Shaanxi",
      tag: "Los guerreros de terracota",
      blurb:
        "El ejército de terracota, la muralla que se recorre en bicicleta y el barrio musulmán con su comida callejera. Fue el comienzo de la Ruta de la Seda.",
      coords: [34.3416, 108.9398],
      image: null,
    },
    {
      id: "guilin",
      name: "Guilín y Yangshuo",
      region: "Guangxi",
      tag: "El río Li",
      blurb:
        "Montañas de piedra caliza que salen del río, terrazas de arroz y paseos en balsa de bambú. Lluviosa en primavera, calurosa en verano.",
      coords: [25.2736, 110.29],
      image: null,
    },
    {
      id: "chengdu",
      name: "Chengdú",
      region: "Sichuan",
      tag: "Pandas y picante",
      blurb:
        "La base de investigación de los osos panda, casas de té en los parques y la cocina de Sichuan, de las más picantes del país. Gris y húmeda gran parte del año.",
      coords: [30.5728, 104.0668],
      image: null,
    },
    {
      id: "hangzhou",
      name: "Hangzhou",
      region: "Zhejiang",
      tag: "El Lago del Oeste",
      blurb:
        "Un lago con pagodas, jardines y diques arbolados, y plantaciones de té verde en las colinas. Se llega en una hora de tren desde Shanghái.",
      coords: [30.2741, 120.1551],
      image: null,
    },
    {
      id: "zhangjiajie",
      name: "Zhangjiajie",
      region: "Hunan",
      tag: "Pilares de piedra",
      blurb:
        "Miles de columnas de arenisca cubiertas de verde, puentes de vidrio y ascensores sobre el acantilado. Con niebla, parece otro planeta.",
      coords: [29.1171, 110.4792],
      image: null,
    },
    {
      id: "lijiang",
      name: "Lijiang",
      region: "Yunnan",
      tag: "Pueblo antiguo en la altura",
      blurb:
        "El casco antiguo de la cultura naxi, con canales y techos de teja, y la montaña Nevada del Dragón de Jade. A más de dos mil metros: días templados y noches frías.",
      coords: [26.8721, 100.2299],
      image: null,
    },
    {
      id: "harbin",
      name: "Harbin",
      region: "Heilongjiang",
      tag: "El festival de hielo",
      blurb:
        "En enero y febrero, un festival con palacios esculpidos en hielo e iluminados de noche. Arquitectura de influencia rusa. La más fría de China en el planificador.",
      coords: [45.8038, 126.5349],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Lo primero no va en la valija: Alipay o WeChat Pay configurados con tu tarjeta y una eSIM con roaming, porque muchos servicios occidentales no funcionan allá. Después, según la ciudad y el mes: abrigo de verdad para Pekín en invierno y de nieve para Harbin, ropa liviana que se seque rápido para el verano húmedo. Siempre, el pasaporte encima y calzado cómodo para caminar mucho.",
    keyPoints: [
      "Hemisferio norte: invierno seco y helado en el norte, verano caluroso y húmedo con lluvias.",
      "Se paga con el celular: configurá Alipay o WeChat Pay con tu tarjeta antes de viajar.",
      "Google, WhatsApp e Instagram no funcionan con una conexión china: una eSIM con roaming sí.",
      "El pasaporte se pide en trenes, hoteles y atracciones.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, un paraguas plegable, protector y agua. El verano es caluroso y húmedo, con lluvias fuertes en julio y agosto.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es la primavera y el otoño, la mejor época del año.",
      fresco:
        "Capas, un buzo abrigado y una campera. Es el invierno de Shanghái y del sur, húmedo y sin calefacción en todos lados.",
      frio: "Campera de abrigo de verdad, gorro, guantes y calzado que abrigue. Pekín pasa el invierno bajo cero; Harbin, muy por debajo.",
    },
    plug: {
      types: "Tipo A, tipo C y tipo I",
      voltage: "220 V, 50 Hz",
      note: "Muchos tomas aceptan varios tipos. El tipo I es el mismo de Argentina y Australia. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Configurá Alipay o WeChat Pay antes de salir",
          body: "Las dos aceptan tarjetas extranjeras. Probalas con un pago chico antes del viaje: allá es como se paga casi todo.",
        },
        {
          title: "Viajá con una eSIM con roaming",
          body: "Con datos de un operador extranjero, tus aplicaciones de siempre funcionan como en tu país.",
        },
        {
          title: "Llevá el pasaporte siempre encima",
          body: "Lo piden para subir al tren, en el hotel y para entrar a muchas atracciones.",
        },
        {
          title: "Llegá con tiempo a las estaciones de tren",
          body: "Son enormes, con control de seguridad y de pasaporte, y el andén cierra unos minutos antes de la salida.",
        },
        {
          title: "Caminá la Muralla en un tramo tranquilo",
          body: "Mutianyu o Jinshanling, temprano: menos gente que Badaling y la misma muralla.",
        },
        {
          title: "Elegí pagar en yuanes",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes en la Semana Dorada ni en el Año Nuevo chino",
          body: "Trenes agotados, precios más altos y los lugares famosos desbordados.",
        },
        {
          title: "No cuentes con Google Maps",
          body: "Sin una eSIM con roaming no funciona, y aun con ella los mapas son pobres. Apple Maps o Amap.",
        },
        {
          title: "No dejes propina",
          body: "No se usa en restaurantes ni en taxis.",
        },
        {
          title: "No tomes agua de la canilla",
          body: "La embotellada está en todos lados y los hoteles tienen hervidor.",
        },
        {
          title: "No dependas solo del efectivo",
          body: "Es legal, pero muchos puestos y taxis no tienen vuelto: el celular es el medio de pago.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones largas, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "celular",
        title: "Celular y pagos",
        notice: {
          tone: "warn",
          title: "Prepará el celular antes de llegar",
          body: "Sin una forma de pagar con el celular y sin una conexión que abra tus aplicaciones, los primeros días son difíciles. Dejalo resuelto antes de salir.",
        },
        summary: "Lo que conviene tener funcionando antes del viaje",
        items: [
          "Alipay o WeChat Pay con tu tarjeta cargada",
          "Una eSIM con datos en roaming",
          "Apple Maps o Amap, y DiDi",
          "Un traductor con cámara",
          "Batería portátil",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "La entrada sin visa se amplió por etapas y a prueba, y el tránsito sin visa tiene condiciones. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
          "Pasaje de salida del país",
          "Reservas de alojamiento",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "climas",
        title: "Según la ciudad y la época",
        notice: {
          tone: "info",
          title: "Del hielo al trópico",
          body: "Harbin en enero y Guilín en julio no comparten nada. Mirá el clima de la ciudad y del mes en el planificador.",
        },
        summary: "Lo que cambia con la época",
        items: [
          "Campera de abrigo para el norte en invierno",
          "Ropa liviana de secado rápido para el verano",
          "Un paraguas plegable",
          "Calzado cómodo para caminar mucho",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el estómago",
          "Pañuelos descartables, que no todos los baños tienen papel",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Solo efectivo y tarjeta",
        why: "Casi todo se paga con el celular y muchos puestos no tienen vuelto.",
        instead: "Alipay o WeChat Pay con tu tarjeta.",
      },
      {
        leave: "Depender de Google y WhatsApp",
        why: "No funcionan con el wifi ni con un chip de China.",
        instead: "Una eSIM con roaming, Apple Maps o Amap, y WeChat.",
      },
      {
        leave: "Una valija enorme",
        why: "Las estaciones tienen controles, escaleras y caminatas largas.",
        instead: "Una valija mediana o mochila.",
      },
      {
        leave: "Sandalias para la Muralla",
        why: "Son escalones altos e irregulares, en subida y bajada.",
        instead: "Zapatillas con buena suela.",
      },
      {
        leave: "El pasaporte en el hotel",
        why: "Lo piden en trenes y atracciones.",
        instead: "Pasaporte encima y una copia digital.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a China?",
        answer:
          "Depende del pasaporte. China amplió la entrada sin visa para estadías cortas, con algunos países latinoamericanos a prueba, y permite un tránsito sin visa de varios días hacia un tercer país. Las reglas cambian: verificalo antes de viajar.",
      },
      {
        question: "¿Cómo pago si no tengo cuenta en China?",
        answer:
          "Con Alipay o WeChat Pay, que aceptan tarjetas extranjeras. Configuralos antes de salir y probalos con un pago chico.",
      },
      {
        question: "¿Funcionan WhatsApp y Google?",
        answer:
          "No con el wifi ni con un chip de China. Con una eSIM de un operador extranjero, en roaming, suelen funcionar.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país. China usa los tipos A, C e I a 220 V; el tipo I es el mismo de Argentina.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "Abril y mayo, y septiembre y octubre. Evitá la primera semana de octubre y el Año Nuevo chino.",
      },
      {
        question: "¿Cómo me muevo entre ciudades?",
        answer:
          "En tren de alta velocidad, con el pasaporte. Para distancias muy largas, vuelos internos.",
      },
      {
        question: "¿Se deja propina?",
        answer: "No. No se usa en restaurantes ni en taxis.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "No conviene tomarla: la embotellada está en todos lados y los hoteles tienen hervidor.",
      },
    ],
  },
};
