import type { DestinationGuide } from "./types";

/**
 * Guía de Panamá.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Lo que este país aporta: el tercer dolarizado, con un matiz —el balboa
 * existe, pero solo en monedas— y la misma lección de Costa Rica sobre dos
 * costas con calendarios opuestos, a una hora de distancia.
 */
export const panama: DestinationGuide = {
  slug: "panama",
  country: "Panamá",
  subregion: "México y Centroamérica",
  subhead:
    "Una capital de rascacielos junto al canal, islas en el Caribe y en el Pacífico, y café en las tierras altas. Se paga en dólares.",

  image: null,

  highlights: [
    {
      value: "US$",
      label: "es la moneda",
      note: "Los billetes que circulan son dólares. El balboa existe, pero solo en monedas, y vale lo mismo.",
    },
    {
      value: "1 hora",
      label: "del Pacífico al Caribe",
      note: "Por el istmo. Se puede ver el atardecer en un océano y el amanecer en el otro.",
    },
    {
      value: "Ene–Abr",
      label: "estación seca",
      note: "En el Pacífico y en la capital. Bocas del Toro, en el Caribe, tiene su propio calendario.",
    },
    {
      value: "365",
      label: "islas en Guna Yala",
      note: "Una por día del año, dicen. En el Caribe, con autonomía del pueblo guna.",
    },
  ],

  facts: [
    {
      id: "plata",
      title: "Se paga en dólares",
      body: [
        "Panamá usa el dólar estadounidense como papel moneda. El balboa, la moneda propia, existe solo en monedas y vale exactamente un dólar: vas a recibir las dos mezcladas en el vuelto.",
        "No hay tipo de cambio que seguir. Lo único que cambia el costo es lo que cobre tu banco por usar la tarjeta afuera.",
        "La tarjeta funciona en la capital y en los lugares turísticos. En Guna Yala y en pueblos chicos hace falta efectivo, en billetes chicos.",
      ],
    },
    {
      id: "dos-costas",
      title: "Dos costas, dos calendarios",
      body: [
        "En la capital y el Pacífico la estación seca va de enero a abril, con sol y viento. De mayo a diciembre llueve casi todas las tardes, más fuerte en octubre y noviembre.",
        "Bocas del Toro, en el Caribe, llueve casi todo el año, pero sus meses más secos son septiembre y octubre, justo cuando el Pacífico está en lo peor.",
        "Boquete, en las tierras altas, es fresco de noche todo el año y tiene neblina y llovizna frecuentes.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a abril para la capital, el Pacífico y Guna Yala. Es la temporada alta.",
        "En septiembre y octubre, Bocas del Toro es la mejor apuesta.",
        "La temporada de lluvias tiene mañanas de sol, menos gente y precios más bajos. Panamá está al sur de la zona habitual de huracanes y rara vez los recibe.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "La capital tiene metro y aplicaciones de transporte. El canal, el Casco Viejo y la calzada de Amador están a minutos.",
        "A Bocas del Toro y a Guna Yala se llega en avioneta, o por tierra más lancha. A Boquete, en avión hasta David o en bus.",
        "Los buses interurbanos son baratos y frecuentes por la Panamericana.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier ciudad grande: atención a las pertenencias en zonas concurridas y traslados por aplicación.",
        "En la capital el agua de la canilla es potable. En Bocas del Toro, Guna Yala y zonas rurales, mejor agua embotellada.",
        "Guna Yala es un territorio autónomo con sus propias reglas y tasas de ingreso. Respetá lo que piden las comunidades, incluido pedir permiso para sacar fotos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-02",

  scores: [
    {
      dimension: "Islas y playas",
      score: 9,
      rationale:
        "Guna Yala, Bocas del Toro y el archipiélago de las Perlas. Caribe y Pacífico.",
    },
    {
      dimension: "Vida urbana",
      score: 8,
      rationale:
        "Una capital moderna con un Casco Viejo patrimonio y el canal a la vuelta.",
    },
    {
      dimension: "Naturaleza",
      score: 8.5,
      rationale:
        "Selva a minutos de la capital, bosque nuboso en Boquete y Coiba en el Pacífico.",
    },
    {
      dimension: "Gastronomía",
      score: 6.5,
      rationale:
        "Sancocho, pescado fresco y una escena gastronómica en crecimiento en la capital.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Más caro que sus vecinos, sobre todo en la capital y las islas.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale:
        "Un hub aéreo con vuelos a todo el continente y distancias cortas dentro del país.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 10,
      rationale: "Se paga en dólares. No hay conversión que hacer.",
    },
  ],

  shines: [
    "Ver pasar un barco por el canal y estar en una isla del Caribe el mismo día.",
    "Guna Yala, islas con cultura propia y casi nada más.",
    "El hub aéreo, que hace fácil llegar desde cualquier lado.",
  ],

  costs: [
    "Precios más altos que en el resto de Centroamérica.",
    "La humedad de la capital, pareja todo el año.",
    "Llegar a las islas, que pide avioneta o lancha.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: Boquete no pide lo mismo que Guna Yala. Los precios están en dólares y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "ciudad-de-panama",
      name: "Ciudad de Panamá",
      region: "Centro",
      tag: "Rascacielos y Casco Viejo",
      blurb:
        "Una capital de rascacielos frente al Pacífico, con un Casco Viejo colonial y el canal a minutos. Calor y humedad todo el año. Es la base del planificador.",
      coords: [8.9824, -79.5199],
      featured: true,
      image: null,
    },
    {
      id: "bocas-del-toro",
      name: "Bocas del Toro",
      region: "Caribe occidental",
      tag: "Archipiélago",
      blurb:
        "Islas en el Caribe con casas de madera sobre el agua, playas, arrecifes y ambiente relajado. Sus meses más secos son septiembre y octubre.",
      coords: [9.3403, -82.242],
      image: null,
    },
    {
      id: "guna-yala",
      name: "Guna Yala",
      region: "Caribe oriental",
      tag: "Islas del pueblo guna",
      blurb:
        "Cientos de islas de arena blanca administradas por el pueblo guna, con alojamiento sencillo y casi nada más. Es otro mundo.",
      coords: [9.55, -78.95],
      image: null,
    },
    {
      id: "boquete",
      name: "Boquete",
      region: "Tierras altas",
      tag: "Café y volcán Barú",
      blurb:
        "Un pueblo de montaña entre cafetales, al pie del volcán Barú, el punto más alto del país. Fresco y con llovizna frecuente.",
      coords: [8.78, -82.44],
      image: null,
    },
    {
      id: "el-valle",
      name: "El Valle de Antón",
      region: "Tierras altas",
      tag: "Pueblo en un cráter",
      blurb:
        "Un pueblo dentro del cráter de un volcán apagado, con cascadas, senderos y un clima más fresco que la capital, a dos horas.",
      coords: [8.6, -80.1333],
      image: null,
    },
    {
      id: "pedasi",
      name: "Pedasí",
      region: "Azuero",
      tag: "Playa y pesca",
      blurb:
        "Un pueblo tranquilo en la península de Azuero, con playas, pesca deportiva y la isla Iguana enfrente.",
      coords: [7.53, -80.03],
      image: null,
    },
    {
      id: "santa-catalina",
      name: "Santa Catalina",
      region: "Pacífico",
      tag: "Surf y Coiba",
      blurb:
        "Un pueblo de surf en el Pacífico y la puerta al parque nacional Coiba, con buceo de primer nivel.",
      coords: [7.6333, -81.2667],
      image: null,
    },
    {
      id: "portobelo",
      name: "Portobelo",
      region: "Caribe central",
      tag: "Fuertes coloniales",
      blurb:
        "Un pueblo caribeño con fuertes coloniales en ruinas, patrimonio de la UNESCO, a dos horas de la capital. Llueve mucho.",
      coords: [9.55, -79.65],
      image: null,
    },
    {
      id: "isla-contadora",
      name: "Isla Contadora",
      region: "Archipiélago de las Perlas",
      tag: "Isla del Pacífico",
      blurb:
        "Una isla chica del archipiélago de las Perlas, a un viaje en ferry de la capital, con playas tranquilas y ballenas de julio a octubre.",
      coords: [8.625, -79.04],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Panamá es calor y humedad todo el año al nivel del mar: ropa liviana, traje de baño, protector y repelente. Para Boquete y El Valle, sumá un polar y una campera impermeable. De mayo a diciembre llueve casi todas las tardes en el Pacífico; si vas en septiembre u octubre, Bocas del Toro es la mejor apuesta. Y llevá dólares en billetes chicos.",
    keyPoints: [
      "Calor y humedad todo el año al nivel del mar.",
      "La estación seca del Pacífico va de enero a abril; la de Bocas del Toro, de septiembre a octubre.",
      "Boquete y El Valle son frescos de noche.",
      "Se paga en dólares; el balboa solo existe en monedas.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana de secado rápido, traje de baño, protector y repelente. La humedad hace que se sienta más calor.",
      templado:
        "Remera y algo de manga larga. Es el clima de El Valle y de los días de Boquete.",
      fresco:
        "Polar y campera impermeable para las noches de Boquete y la subida al Barú.",
      frio: "Solo en la cima del volcán Barú de madrugada: abrigo, gorro y guantes.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "120 V, 60 Hz",
      note: "Es el enchufe de fichas planas, como en Estados Unidos. Si venís de un país con 220 V, revisá que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dólares en billetes chicos",
          body: "En las islas y los pueblos no siempre hay cambio para billetes grandes.",
        },
        {
          title: "Ropa de secado rápido",
          body: "Con esta humedad, el algodón grueso no se seca nunca.",
        },
        {
          title: "Elegí la costa según el mes",
          body: "Pacífico de enero a abril; Bocas del Toro en septiembre y octubre.",
        },
        {
          title: "Un polar para Boquete",
          body: "Aunque vengas del calor de la capital, las noches de la montaña son frescas.",
        },
        {
          title: "Bolsa seca para las lanchas",
          body: "A Guna Yala y en Bocas del Toro te vas a mojar en la lancha. Teléfono y documentos, protegidos.",
        },
        {
          title: "Repelente siempre",
          body: "En las islas y en la selva, los mosquitos y los jejenes pican fuerte.",
        },
      ],
      donts: [
        {
          title: "No lleves abrigo pesado",
          body: "Salvo que subas el Barú de madrugada, no se usa.",
        },
        {
          title: "No vayas al Pacífico en octubre esperando sol",
          body: "Es de los meses más lluviosos. Bocas del Toro está mejor.",
        },
        {
          title: "No lleves una valija rígida a las islas",
          body: "Las avionetas y las lanchas tienen poco espacio.",
        },
        {
          title: "No saques fotos en Guna Yala sin pedir permiso",
          body: "Es un territorio autónomo y muchas comunidades lo piden, a veces con una tasa.",
        },
        {
          title: "No tomes agua de la canilla fuera de la capital",
          body: "En las islas y zonas rurales, agua embotellada.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano.",
        },
      ],
    },
    checklists: [
      {
        id: "islas",
        title: "Islas y lanchas",
        notice: {
          tone: "info",
          title: "Te vas a mojar",
          body: "Los traslados en lancha a las islas mojan, sobre todo con mar movido. Bolsa seca para lo que importa.",
        },
        summary: "Lo específico de Guna Yala y Bocas del Toro",
        items: [
          "Bolsa seca para el teléfono y los documentos",
          "Protector solar biodegradable",
          "Remera con protección UV",
          "Máscara propia si tenés, para snorkel",
          "Efectivo en billetes chicos",
        ],
      },
      {
        id: "humedad",
        title: "Calor y humedad",
        notice: null,
        summary: "Lo que se usa todos los días",
        items: [
          "Ropa liviana de secado rápido",
          "Campera impermeable liviana",
          "Repelente",
          "Botella reutilizable",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Consultá las vacunas si vas a la selva",
          body: "Para el Darién y algunas zonas de selva suele recomendarse la fiebre amarilla. Necesita días para hacer efecto.",
        },
        summary: "Botiquín básico y qué averiguar antes",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos",
          "Pastillas para el mareo, para las lanchas",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a fichas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil: en algunas islas hay luz solo unas horas",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con chicos",
        notice: null,
        summary: "Lo que cambia cuando no viajás solo",
        items: [
          "Documentación de cada menor; si viaja con un solo progenitor, averiguá qué autorización piden",
          "Chaleco salvavidas propio si van a navegar seguido",
          "Repelente y protector aptos para chicos",
          "Pastillas para el mareo aptas para chicos",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo pesado",
        why: "Ni en Boquete hace frío de verdad.",
        instead: "Un polar y una campera impermeable.",
      },
      {
        leave: "Jeans pesados",
        why: "Con la humedad no se secan.",
        instead: "Pantalones livianos.",
      },
      {
        leave: "Una valija rígida",
        why: "Avionetas y lanchas tienen poco espacio.",
        instead: "Una mochila o bolso blando.",
      },
      {
        leave: "Billetes de cien",
        why: "En islas y pueblos no hay cambio, y muchos comercios no los aceptan.",
        instead: "Billetes de veinte o menos.",
      },
      {
        leave: "Protector solar común para el mar",
        why: "Daña los arrecifes.",
        instead: "Protector biodegradable.",
      },
      {
        leave: "Zapatos de vestir",
        why: "Salvo una cena en la capital, no se usan.",
        instead: "Algo liviano y cómodo para salir.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en las islas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito cambiar plata?",
        answer:
          "No. Panamá usa el dólar estadounidense. El balboa existe solo en monedas y vale lo mismo.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de fichas planas, sí. El voltaje es 120 V: revisá que tus cargadores digan 100-240 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De enero a abril para la capital y el Pacífico. Septiembre y octubre para Bocas del Toro.",
      },
      {
        question: "¿Hay huracanes?",
        answer:
          "Rara vez. Panamá está al sur de la zona habitual de los huracanes del Caribe.",
      },
      {
        question: "¿Cómo llego a Guna Yala?",
        answer:
          "En avioneta, o en 4x4 desde la capital y después en lancha. Hay tasas de ingreso del territorio guna.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En la capital, sí. En las islas y zonas rurales, mejor agua embotellada.",
      },
      {
        question: "¿Hace frío en Boquete?",
        answer:
          "Fresco de noche, no frío. Un polar alcanza, salvo que subas al volcán Barú de madrugada.",
      },
      {
        question: "¿De qué tamaño conviene la valija?",
        answer:
          "Chica y blanda. Con ropa liviana alcanza, y las avionetas y lanchas tienen poco espacio.",
      },
    ],
  },
};
