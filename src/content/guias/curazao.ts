import type { DestinationGuide } from "./types";

/**
 * Guía de Curazao.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Un territorio que cumple el criterio de 16.2 (spec, 22.8): es un país del
 * Reino de los Países Bajos, con moneda y reglas de entrada propias, y se
 * viaja a él como a un país.
 *
 * Lo que este país aporta: una moneda nueva. El florín caribeño (XCG)
 * reemplazó al de las Antillas Neerlandesas en 2025, con la misma paridad
 * fija con el dólar; los precios del planificador van en XCG, con centavos.
 * Y, como Aruba, el Caribe seco y fuera del cinturón de huracanes.
 */
export const curazao: DestinationGuide = {
  slug: "curazao",
  country: "Curazao",
  subregion: "Caribe",
  subhead:
    "Willemstad y sus casas de colores sobre el puerto, calas de agua turquesa en el oeste y buceo desde la orilla. Seco, ventoso y fuera del cinturón de huracanes.",

  image: null,

  highlights: [
    {
      value: "UNESCO",
      label: "el centro de Willemstad",
      note: "Casas de colores de estilo holandés a los dos lados del puerto, unidas por un puente flotante.",
    },
    {
      value: "+35",
      label: "playas y calas",
      note: "La mayoría en el oeste, pequeñas, entre acantilados y con agua transparente.",
    },
    {
      value: "Antes de volar",
      label: "tarjeta digital de inmigración",
      note: "Todos los visitantes que llegan en avión la completan en línea.",
    },
    {
      value: "1,79 = 1",
      label: "florines caribeños por dólar",
      note: "Paridad fija con el dólar estadounidense, que se acepta en casi todos lados.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Curazao es un país del Reino de los Países Bajos, con sus propias reglas de entrada, distintas de las de Schengen. Muchos pasaportes entran sin visa; otros la necesitan. Verifica el tuyo.",
        "Todos los visitantes que llegan en avión completan antes la tarjeta digital de inmigración, en el sitio oficial. Usa solo ese: hay páginas que cobran por hacerlo.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El florín caribeño reemplazó en 2025 al de las Antillas Neerlandesas, con la misma paridad fija con el dólar. El dólar estadounidense se acepta en casi todos lados.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los puestos de comida y algunas playas que cobran la entrada, efectivo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Cualquier mes: es seco y ventoso todo el año. Lo poco que llueve cae de octubre a diciembre, en chaparrones cortos.",
        "De diciembre a abril es la temporada alta. En febrero o marzo, el carnaval llena Willemstad.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Las playas del oeste quedan lejos de Willemstad, y el transporte público es escaso: conviene alquilar un auto. Se conduce por la derecha.",
        "Muchas playas son privadas o cobran la entrada, que suele incluir camastros y baños.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Las precauciones son las de cualquier destino de playa: atención a las pertenencias y nada de dejar cosas a la vista en el auto.",
        "La costa norte, de cara al viento, tiene olas fuertes: se mira, no se nada.",
        "El agua corriente es potable: sale de plantas desalinizadoras.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Calas como Kenepa, Lagun y Cas Abao, pequeñas y de agua transparente.",
    },
    {
      dimension: "Buceo",
      score: 9.5,
      rationale:
        "Arrecifes desde la orilla en toda la costa oeste, sin necesidad de barco.",
    },
    {
      dimension: "Ciudad",
      score: 8.5,
      rationale:
        "Willemstad, patrimonio de la UNESCO, con Pietermaai y su vida nocturna.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6.5,
      rationale:
        "Más accesible que Aruba, con hoteles pequeños y casas de alquiler.",
    },
    {
      dimension: "Facilidad logística",
      score: 7.5,
      rationale:
        "Vuelos directos desde América y Europa, pero las playas piden auto.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale:
        "Una paridad fija con el dólar, que además se acepta en casi todos lados.",
    },
  ],

  shines: [
    "Buceo y snorkel desde la orilla.",
    "Willemstad, una ciudad colonial de colores.",
    "Playa segura casi cualquier mes del año.",
  ],

  costs: [
    "Hace falta auto para las playas del oeste.",
    "Muchas playas cobran la entrada.",
    "La tarjeta de inmigración, que se completa antes de volar.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima, que cambia poco en toda la isla. Los precios son órdenes de magnitud, no cotizaciones, y van en florines caribeños.",

  places: [
    {
      id: "willemstad",
      name: "Willemstad",
      region: "Centro",
      tag: "Ciudad de colores",
      blurb:
        "La capital, con Punda y Otrobanda a los dos lados del puerto, el puente flotante Reina Emma y casas de colores patrimonio de la UNESCO. Es la base del planificador.",
      coords: [12.1084, -68.9335],
      featured: true,
      image: null,
    },
    {
      id: "pietermaai",
      name: "Pietermaai y Mambo Beach",
      region: "Centro",
      tag: "Noche y playa",
      blurb:
        "El barrio de mansiones restauradas con bares y restaurantes, a minutos de la playa de Mambo y el acuario.",
      coords: [12.1063, -68.92],
      image: null,
    },
    {
      id: "jan-thiel",
      name: "Jan Thiel",
      region: "Sureste",
      tag: "Club de playa",
      blurb:
        "Una bahía con clubes de playa y agua calma, junto a las salinas donde a veces hay flamencos.",
      coords: [12.0786, -68.8786],
      image: null,
    },
    {
      id: "spaanse-water",
      name: "Spaanse Water",
      region: "Sureste",
      tag: "Laguna",
      blurb:
        "Una laguna interior protegida, con marinas, kitesurf y la salida de los barcos a Klein Curaçao.",
      coords: [12.0733, -68.8611],
      image: null,
    },
    {
      id: "playa-lagun",
      name: "Playa Lagun",
      region: "Oeste",
      tag: "Tortugas",
      blurb:
        "Una cala angosta entre acantilados, con tortugas a pocos metros de la orilla.",
      coords: [12.3167, -69.15],
      image: null,
    },
    {
      id: "westpunt",
      name: "Westpunt y Playa Kenepa",
      region: "Oeste",
      tag: "La playa más famosa",
      blurb:
        "El extremo oeste, con Grote Knip, la playa de las postales, y saltos desde las rocas en Playa Forti.",
      coords: [12.3672, -69.155],
      image: null,
    },
    {
      id: "christoffel",
      name: "Parque Christoffel",
      region: "Oeste",
      tag: "Cerro y cactus",
      blurb:
        "El parque nacional con el cerro más alto de la isla, que se sube temprano por el calor, cactus y ciervos de cola blanca.",
      coords: [12.3383, -69.1222],
      image: null,
    },
    {
      id: "shete-boka",
      name: "Parque Shete Boka",
      region: "Norte",
      tag: "Olas y cuevas",
      blurb:
        "Siete bahías en la costa norte donde las olas rompen contra cuevas de piedra caliza, con tortugas que desovan.",
      coords: [12.3584, -69.1153],
      image: null,
    },
    {
      id: "santa-barbara",
      name: "Bahía de Santa Bárbara",
      region: "Este",
      tag: "Resort y playa",
      blurb:
        "Una playa de agua calma en el este, junto a un campo de golf y la entrada a Spaanse Water.",
      coords: [12.0628, -68.8317],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Curazao es verano seco todo el año: ropa ligera, traje de baño, protector alto y gafas de sol. El viento refresca, pero el sol quema igual. Lleva calzado para el agua: muchas calas son de piedras. Antes de volar, completa la tarjeta digital de inmigración.",
    keyPoints: [
      "Calor seco y viento todo el año.",
      "Fuera del cinturón de huracanes, con poca lluvia.",
      "Para las playas del oeste hace falta auto.",
      "La tarjeta digital de inmigración se completa antes de volar.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector alto y gafas de sol. Es el clima de la isla todo el año.",
      templado: "Camiseta y una capa ligera para el viento de la noche.",
      fresco: "Un suéter ligero alcanza para la noche más fresca del año.",
      frio: "En Curazao no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "127 V, 50 Hz",
      note: "Es el enchufe de clavijas planas. Revisa que tus cargadores digan 100-240 V: el voltaje es 127 V.",
    },
    tips: {
      dos: [
        {
          title: "Completa la tarjeta digital antes de volar",
          body: "En el sitio oficial, gratis. Las páginas que cobran no son del gobierno.",
        },
        {
          title: "Alquila un auto para las playas del oeste",
          body: "El transporte público casi no llega, y los taxis son caros.",
        },
        {
          title: "Bucea desde la orilla",
          body: "En casi toda la costa oeste el arrecife empieza a pocos metros.",
        },
        {
          title: "Lleva calzado para el agua",
          body: "Muchas calas son de piedras y coral muerto.",
        },
        {
          title: "Sube al Christoffel temprano",
          body: "Al mediodía el calor y el sol lo hacen muy duro.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "Los arrecifes de la isla lo agradecen.",
        },
      ],
      donts: [
        {
          title: "No dejes cosas a la vista en el auto",
          body: "Es la precaución de cualquier estacionamiento de playa.",
        },
        {
          title: "No te bañes en la costa norte",
          body: "Las olas rompen contra las rocas y las cuevas.",
        },
        {
          title: "No toques ni alimentes a las tortugas",
          body: "Se miran de lejos.",
        },
        {
          title: "No subestimes el sol",
          body: "Con el viento no se siente el calor, pero quema.",
        },
        {
          title: "No pises el coral",
          body: "Un roce lo daña.",
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
        title: "Antes de volar",
        notice: {
          tone: "info",
          title: "Tarjeta digital de inmigración",
          body: "Se completa en línea antes de llegar, en el sitio oficial. Algunos pasaportes necesitan además visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "Tarjeta digital de inmigración, completada",
          "Visa, si tu pasaporte la necesita",
          "Auto alquilado, si vas a ir a las playas del oeste",
          "Seguro de viaje con cobertura médica",
        ],
      },
      {
        id: "playa",
        title: "Playa y buceo",
        notice: null,
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar alto que no dañe el coral",
          "Calzado para el agua",
          "Snorkel propio, si tienes",
          "Certificado de buceo, si vas a bucear",
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
          "Repelente: hay mosquitos y dengue",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargadores que digan 100-240 V",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Tarjeta digital de inmigración de cada menor",
          "Protector solar de factor alto y camiseta con protección UV",
          "Calzado para el agua a su medida",
        ],
      },
    ],
    avoid: [
      {
        leave: "Abrigo",
        why: "En Curazao no hay un mes frío.",
        instead: "Una capa ligera para el viento de la noche.",
      },
      {
        leave: "Paraguas",
        why: "Casi no llueve, y con el viento no sirve.",
        instead: "Nada.",
      },
      {
        leave: "Sandalias para las calas de piedra",
        why: "Se resbalan y no protegen del coral.",
        instead: "Calzado para el agua.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa?",
        answer:
          "Depende del pasaporte. Curazao tiene sus propias reglas: muchos pasaportes entran sin visa y otros la necesitan. Verifica el tuyo, y completa la tarjeta digital de inmigración.",
      },
      {
        question: "¿Qué moneda se usa?",
        answer:
          "El florín caribeño, que en 2025 reemplazó al de las Antillas Neerlandesas, con paridad fija con el dólar. El dólar estadounidense se acepta en casi todos lados.",
      },
      {
        question: "¿Hay huracanes?",
        answer:
          "Casi nunca: Curazao está al sur del recorrido habitual. Por eso se viaja cualquier mes.",
      },
      {
        question: "¿Hace falta auto?",
        answer:
          "Para las playas del oeste, sí: el transporte público casi no llega.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Sí, mucha gente lo habla, junto con el papiamento, el neerlandés y el inglés.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "Sí: sale de plantas desalinizadoras.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 127 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
