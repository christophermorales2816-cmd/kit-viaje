import type { DestinationGuide } from "./types";

/**
 * Guía de Ruanda.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: una regla de la valija. Las bolsas de plástico
 * están prohibidas y en el aeropuerto te las pueden sacar: es el dato de su
 * portada, porque cambia cómo se empaca. Ninguna ciudad del planificador está
 * en la franja de diez kilómetros sobre la frontera con el Congo que las
 * recomendaciones desaconsejan. Musanze queda afuera de ella, pero el parque
 * de los volcanes no: sus permisos no entran en el presupuesto, y la guía lo
 * dice. Nyungwe y Akagera llevan una excepción en su migración, porque su
 * entrada es más cara que la atracción principal de Kigali.
 */
export const ruanda: DestinationGuide = {
  slug: "ruanda",
  country: "Ruanda",
  subregion: "África Oriental",
  subhead:
    "El país de las mil colinas: Kigali, ordenada y verde, la selva de montaña de Nyungwe, los safaris de Akagera y el lago Kivu. Templado todo el año, sobre el ecuador.",

  image: null,

  highlights: [
    {
      value: "Sin bolsas",
      label: "de plástico: están prohibidas y te las pueden sacar al llegar",
      note: "Ruanda prohibió las bolsas de plástico hace años, y en el aeropuerto pueden revisar la valija y quedárselas. Para la ropa sucia y los zapatos, bolsas de tela.",
    },
    {
      value: "Umuganda",
      label:
        "el último sábado de cada mes, la mañana es de trabajo comunitario",
      note: "Durante la mañana casi todo cierra y el transporte se frena. Planeá los traslados para la tarde.",
    },
    {
      value: "Nyungwe",
      label: "una selva de montaña con una pasarela sobre los árboles",
      note: "Uno de los bosques de montaña más antiguos de África, con chimpancés, monos colobos y una pasarela colgante a decenas de metros del suelo.",
    },
    {
      value: "Memorial",
      label: "del genocidio contra los tutsis, en Kigali",
      note: "Cuenta el genocidio de 1994 y es la visita que explica el país. Hay que dedicarle al menos un par de horas.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Ruanda",
      body: [
        "Ruanda da la visa al llegar a casi todos los pasaportes, y también se tramita online antes. Si vas a combinar con Uganda o Kenia, existe una visa turística conjunta de África del Este, que no se da al llegar: se pide antes. Verificá el tuyo en el sitio oficial.",
        "Ruanda pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y en esa lista están varios de Sudamérica, Uganda y el Congo. Si tu viaje pasa por uno, vacunate al menos diez días antes y llevá el certificado.",
        "Las bolsas de plástico están prohibidas: en el aeropuerto pueden revisar la valija y quedárselas.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Ruanda",
      body: [
        "La moneda es el franco ruandés. La tarjeta funciona en hoteles, restaurantes y supermercados de Kigali; en el resto, efectivo o mobile money, el pago por celular.",
        "Los permisos de los parques y muchos lodges cobran en dólares. Si llevás dólares, que sean billetes nuevos y sanos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí francos: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Sobre el ecuador, en altura",
      body: [
        "Ruanda está casi sobre el ecuador y en altura: calor templado todo el año, sin invierno. Llueve de marzo a mayo y de septiembre a diciembre; de junio a agosto es la temporada seca.",
        "Musanze, al pie de los volcanes, y el bosque de Nyungwe son frescos y lluviosos. Akagera, en el este, es lo más cálido y seco.",
        "Kigali está repartida sobre colinas, a unos mil quinientos metros: noches templadas todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De junio a septiembre, y en enero y febrero: las temporadas secas, las mejores para los parques.",
        "El último sábado de cada mes, a la mañana, es el umuganda: casi todo cierra hasta el mediodía.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Ruanda",
      body: [
        "Ruanda es chico: de Kigali a cualquier ciudad del planificador hay pocas horas de ruta, en buses que salen a horario o con chofer.",
        "En Kigali hay taxis y motos taxi, con casco obligatorio también para el pasajero.",
        "Las rutas son buenas, pero de montaña, con muchas curvas. Se maneja por la derecha.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos piden más precaución en Ruanda y desaconsejan viajar a la franja junto a la frontera con el Congo, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Ninguna ciudad del planificador está en esa franja, ni en Rubavu ni en Rusizi. Musanze queda unos kilómetros afuera, pero el parque de los volcanes, el de los gorilas, llega hasta la frontera: revisá qué dice tu recomendación sobre esa zona antes de reservar el permiso.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "El memorial de Kigali, el palacio real de Nyanza y el museo etnográfico de Huye.",
    },
    {
      dimension: "Gastronomía",
      score: 5,
      rationale:
        "Brochettes, isombe, banana cocida y un café y un té muy buenos.",
    },
    {
      dimension: "Paisaje",
      score: 9,
      rationale: "Colinas en terrazas, volcanes, lagos y una selva de montaña.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale: "No tiene mar; sí playas de lago, en el Kivu.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer y moverse es accesible; los permisos y los lodges, muy caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 8,
      rationale: "Un país chico, con buenas rutas y transporte ordenado.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El franco pierde valor de a poco.",
    },
  ],

  shines: [
    "Un país chico, ordenado y fácil de recorrer.",
    "Los primates de Nyungwe y los safaris de Akagera.",
    "Colinas verdes todo el año.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Permisos y lodges muy caros.",
    "Lluvia buena parte del año.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Kigali que Nyungwe o Akagera. Los precios están en francos ruandeses y son órdenes de magnitud. Los permisos del parque de los volcanes no entran en el presupuesto, y un lodge en los parques puede costar varias veces más.",

  places: [
    {
      id: "kigali",
      name: "Kigali",
      region: "Kigali",
      tag: "La capital de las colinas",
      blurb:
        "Una capital limpia y ordenada sobre colinas, con el memorial del genocidio, mercados, cafés y galerías de arte. Es la base del planificador: templada todo el año, con lluvias de marzo a mayo y de octubre a diciembre.",
      coords: [-1.9441, 30.0619],
      featured: true,
      image: null,
    },
    {
      id: "musanze",
      name: "Musanze",
      region: "Norte",
      tag: "Al pie de los volcanes",
      blurb:
        "La ciudad de los volcanes Virunga, con los lagos Burera y Ruhondo y las cuevas de Musanze cerca. El parque de los gorilas llega hasta la frontera con el Congo: revisá tu recomendación de viaje antes de reservar el permiso. Fresca y lluviosa.",
      coords: [-1.4998, 29.6344],
      image: null,
    },
    {
      id: "nyungwe",
      name: "Bosque de Nyungwe",
      region: "Sur",
      tag: "Selva de montaña",
      blurb:
        "Uno de los bosques de montaña más antiguos de África, con chimpancés, colobos, cascadas y una pasarela colgante sobre la copa de los árboles. Fresco y lluvioso casi todo el año.",
      coords: [-2.4789, 29.2003],
      image: null,
    },
    {
      id: "akagera",
      name: "Parque Nacional Akagera",
      region: "Este",
      tag: "Safari en la sabana",
      blurb:
        "Sabana, lagos y pantanos con los cinco grandes, safaris en camioneta y en bote. Lo más cálido y seco del país.",
      coords: [-1.8833, 30.7167],
      image: null,
    },
    {
      id: "karongi",
      name: "Karongi (lago Kivu)",
      region: "Oeste",
      tag: "El lago Kivu",
      blurb:
        "Un pueblo sobre el lago Kivu, con paseos en bote y playas de agua dulce entre colinas. Templado todo el año.",
      coords: [-2.06, 29.3483],
      image: null,
    },
    {
      id: "huye",
      name: "Huye (Butare)",
      region: "Sur",
      tag: "La ciudad universitaria",
      blurb:
        "La antigua Butare, con la universidad y el museo etnográfico, el mejor del país para entender la historia y la cultura ruandesa.",
      coords: [-2.5967, 29.7394],
      image: null,
    },
    {
      id: "nyanza",
      name: "Nyanza (palacio real)",
      region: "Sur",
      tag: "El palacio real",
      blurb:
        "El palacio del rey, réplica de la residencia tradicional con techo de paja, y las vacas de cuernos largos, las inyambo.",
      coords: [-2.3519, 29.7509],
      image: null,
    },
    {
      id: "nyamata",
      name: "Nyamata (memorial)",
      region: "Este",
      tag: "El memorial de la iglesia",
      blurb:
        "La iglesia de Nyamata, hoy memorial del genocidio, a menos de una hora de Kigali. Más cálida y seca que la capital.",
      coords: [-2.15, 30.09],
      image: null,
    },
    {
      id: "muhazi",
      name: "Lago Muhazi",
      region: "Este",
      tag: "Un lago cerca de Kigali",
      blurb:
        "Un lago largo y tranquilo entre colinas, a una hora de Kigali, para un fin de semana de kayak, pesca y descanso.",
      coords: [-1.8667, 30.3],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Ruanda es templada todo el año, sin invierno: ropa liviana de día y un buzo para la noche, que en Musanze y Nyungwe refresca. Algo impermeable siempre, y más de marzo a mayo y de septiembre a diciembre. Bolsas de tela en lugar de las de plástico, que están prohibidas, repelente y un adaptador universal.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Bolsas de plástico prohibidas: te las pueden sacar al llegar.",
      "Templada todo el año; lluvias de marzo a mayo y de septiembre a diciembre.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana, sombrero, protector y repelente para Akagera y el lago.",
      templado:
        "Ropa liviana de día, un buzo para la noche y algo impermeable.",
      fresco:
        "Capas, un polar y una campera impermeable para Musanze y Nyungwe.",
      frio: "No hace frío en Ruanda: un polar alcanza para las noches de Musanze y Nyungwe.",
    },
    plug: {
      types: "Tipos C y J",
      voltage: "230 V, 50 Hz",
      note: "El C es el de dos patas redondas finas; el J, suizo, tiene tres patas redondas, y en él entran las de dos. Un adaptador universal resuelve todo. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Empacá con bolsas de tela",
          body: "Las de plástico están prohibidas y te las pueden sacar en el aeropuerto.",
        },
        {
          title: "Dejá libre la mañana del umuganda",
          body: "El último sábado de cada mes, a la mañana, casi todo cierra.",
        },
        {
          title: "Visitá el memorial de Kigali",
          body: "Es la visita que explica el país. Dedicale al menos un par de horas.",
        },
        {
          title: "Probá el café y el té ruandeses",
          body: "Se cultivan en las colinas, y en Kigali hay cafeterías muy buenas.",
        },
        {
          title: "Elegí pagar en francos",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No hables del genocidio a la ligera",
          body: "Es un tema doloroso y regulado por ley: escuchá más de lo que preguntás.",
        },
        {
          title: "No comas caminando por la calle",
          body: "Se considera de mala educación: se come sentado.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o del aeropuerto.",
        },
        {
          title: "No te bañes en lagos sin preguntar",
          body: "En varios hay bilharzia: preguntá en el alojamiento.",
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
        title: "Antes de reservar",
        notice: {
          tone: "warn",
          title: "Recomendación de viaje, seguro y visa",
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Ruanda y si tu pasaporte necesita visa: casi todos la reciben al llegar.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa, si la tramitás antes",
          "El certificado de la fiebre amarilla, si tu viaje pasa por un país con riesgo",
          "Los permisos de los parques, si vas a reservar alguno",
        ],
      },
      {
        id: "sin-plastico",
        title: "Sin plástico",
        notice: {
          tone: "info",
          title: "Bolsas prohibidas",
          body: "En el aeropuerto pueden revisar la valija y quedarse con las bolsas de plástico.",
        },
        summary: "Para empacar",
        items: [
          "Bolsas de tela para la ropa sucia y los zapatos",
          "Cubos organizadores en lugar de bolsas",
          "Una bolsa de tela plegable para las compras",
        ],
      },
      {
        id: "lluvia",
        title: "Para la lluvia y la altura",
        notice: null,
        summary: "Capas",
        items: [
          "Una campera impermeable",
          "Un polar para Musanze y Nyungwe",
          "Calzado cerrado que aguante el barro",
          "Protector solar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, con más riesgo en las temporadas de lluvia. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
        },
        summary: "Botiquín y prevención",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente con DEET o icaridina",
          "Profilaxis contra la malaria, si te la indican",
          "Sales de rehidratación y algo para el estómago",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia rápido, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Bolsas de plástico",
        why: "Están prohibidas y te las pueden sacar al llegar.",
        instead: "Bolsas de tela o cubos organizadores.",
      },
      {
        leave: "Ropa azul o negra para Akagera",
        why: "Atrae a las moscas tse-tse.",
        instead: "Colores neutros: beige, caqui, verde.",
      },
      {
        leave: "Solo ropa de verano",
        why: "En Musanze y Nyungwe las noches son frescas.",
        instead: "Un polar y una campera.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan al cambiar.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Ruanda y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Ruanda?",
        answer:
          "Casi todos los pasaportes la reciben al llegar, y también se puede tramitar online antes. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, Uganda o el Congo, te la pueden pedir. Vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Puedo llevar bolsas de plástico?",
        answer:
          "No: están prohibidas, y en el aeropuerto te las pueden sacar. Usá bolsas de tela.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De junio a septiembre, y en enero y febrero: las temporadas secas.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Ruanda usa los tipos C y J a 230 V. Un adaptador universal los resuelve.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
