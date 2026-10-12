import type { DestinationGuide } from "./types";

/**
 * Guía de Mozambique.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 15.8 decidió para nueve países de África: entra con
 * aviso, como Pakistán. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: la temporada de ciclones. La lluvia de verano, de
 * diciembre a marzo, es también la de los ciclones, que cortan rutas y vuelos
 * en la costa: es el dato de su portada, porque decide cuándo ir. Las
 * ciudades del planificador son las del sur, la costa de Inhambane,
 * Gorongosa, Chimanimani y la Isla de Mozambique; ninguna está en Cabo
 * Delgado ni en los distritos del norte de Niassa y Nampula que las
 * recomendaciones señalan. Para Gorongosa y la Isla, la guía manda a revisar
 * también las rutas.
 */
export const mozambique: DestinationGuide = {
  slug: "mozambique",
  country: "Mozambique",
  subregion: "África Oriental",
  subhead:
    "Playas del Índico, los tiburones ballena de Tofo, las dunas de Bazaruto, la Isla de Mozambique y los leones de Gorongosa. Se habla portugués, y la comida de mar tiene sabor a piri-piri.",

  image: null,

  highlights: [
    {
      value: "Ciclones",
      label: "entre diciembre y marzo, sobre la costa",
      note: "La temporada de lluvias es también la de los ciclones, que pueden cortar rutas y vuelos. Para la playa, de mayo a noviembre: seco, templado y con el mar en calma.",
    },
    {
      value: "Tiburones ballena",
      label: "en Tofo, casi todo el año",
      note: "Tofo es de los mejores lugares del mundo para nadar con tiburones ballena y mantarrayas gigantes. Se sale en lancha desde la playa.",
    },
    {
      value: "Bazaruto",
      label: "dunas y agua turquesa frente a Vilankulo",
      note: "Un archipiélago protegido, con dugongos, arrecifes y dunas altísimas, a una hora de lancha de Vilankulo.",
    },
    {
      value: "Isla",
      label: "de Mozambique, la antigua capital, patrimonio de la humanidad",
      note: "Una isla chica unida al continente por un puente de más de tres kilómetros, con una ciudad de piedra de la época portuguesa y otra de techos de palma.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Mozambique",
      body: [
        "Los pasaportes que no necesitan visa tienen que hacer un registro online, con pago, al menos dos días antes de viajar; los demás tramitan la visa electrónica en el mismo sitio oficial. Verificá el tuyo antes de comprar el pasaje.",
        "Mozambique pide el certificado de la fiebre amarilla a quien llega de un país con riesgo de transmisión, y varios de Sudamérica están en esa lista. Si tu viaje pasa por uno, vacunate al menos diez días antes y llevá el certificado.",
        "El pasaporte tiene que tener al menos seis meses de vigencia y páginas libres.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Mozambique",
      body: [
        "La moneda es el metical. La tarjeta funciona en hoteles, restaurantes y supermercados de Maputo y de los lugares de playa más conocidos; en el resto, efectivo.",
        "Hay cajeros en las ciudades; en los pueblos de playa, pocos. Llevá efectivo para las islas y los parques.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí meticales: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Trópico y ciclones",
      body: [
        "Mozambique es hemisferio sur y trópico. Maputo tiene veranos calurosos y húmedos e inviernos templados y secos, de mayo a septiembre.",
        "Hacia el norte el calor sube, y las lluvias de verano, de diciembre a marzo, son más fuertes: es también la temporada de ciclones.",
        "Gorongosa y los montes Chimanimani tienen lluvias fuertes de noviembre a marzo y noches frescas en invierno.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De mayo a noviembre: seco, templado y con el mar en calma, la mejor época para la playa y los parques.",
        "De diciembre a marzo llueve fuerte en el centro y el norte, y es temporada de ciclones. Los tiburones ballena de Tofo están casi todo el año; las ballenas jorobadas pasan de julio a octubre.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Mozambique",
      body: [
        "Las distancias son enormes: entre Maputo, Vilankulo, Beira y Nampula conviene volar.",
        "Por la costa sur, de Maputo a Tofo y Vilankulo, hay buses y chapas, las combis colectivas, lentos pero baratos. En Maputo hay taxis y aplicaciones como Yango.",
        "Las rutas tienen poca luz y animales sueltos: no manejes de noche. Se maneja por la izquierda.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a partes de Mozambique, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Las ciudades del planificador son las del sur, la costa de Inhambane, Gorongosa, Chimanimani y la Isla de Mozambique. Ninguna está en Cabo Delgado ni en los distritos del norte de Niassa y Nampula que las recomendaciones señalan. A Gorongosa y a la Isla se llega por ruta desde Beira y Nampula: revisá también qué dice tu recomendación sobre esos caminos.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-12",

  scores: [
    {
      dimension: "Historia",
      score: 6,
      rationale:
        "La Isla de Mozambique, patrimonio de la humanidad, y la Maputo colonial.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Mariscos, camarones a la parrilla, matapa, piri-piri y pan portugués.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale: "La costa del Índico, dunas, islas y la sabana de Gorongosa.",
    },
    {
      dimension: "Playas",
      score: 9,
      rationale:
        "Miles de kilómetros de costa, con arrecifes, islas y agua cálida.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 6,
      rationale:
        "Comer y dormir simple es accesible; los lodges de las islas, caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale: "Distancias enormes, rutas lentas y vuelos internos caros.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 6,
      rationale: "El metical es bastante estable.",
    },
  ],

  shines: [
    "Las playas y las islas del Índico.",
    "Los tiburones ballena y las mantarrayas de Tofo.",
    "La comida de mar con sabor portugués.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Distancias enormes y vuelos internos caros.",
    "Ciclones de diciembre a marzo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Maputo en julio que Gorongosa o la Isla de Mozambique. Los precios están en meticales y son órdenes de magnitud; un lodge en las islas de Bazaruto puede costar varias veces más.",

  places: [
    {
      id: "maputo",
      name: "Maputo",
      region: "Maputo",
      tag: "La capital del Índico",
      blurb:
        "Avenidas con jacarandás, la estación de tren con su cúpula de hierro, el mercado de pescado y una vida nocturna larga. Es la base del planificador: veranos calurosos y húmedos, inviernos templados y secos.",
      coords: [-25.9692, 32.5732],
      featured: true,
      image: null,
    },
    {
      id: "ponta-do-ouro",
      name: "Ponta do Ouro",
      region: "Maputo",
      tag: "Delfines y buceo",
      blurb:
        "Una playa del sur, casi en la frontera con Sudáfrica, con buceo, delfines salvajes y una reserva marina.",
      coords: [-26.8417, 32.8956],
      image: null,
    },
    {
      id: "bilene",
      name: "Bilene (laguna Uembje)",
      region: "Gaza",
      tag: "La laguna",
      blurb:
        "Una laguna de agua salada y tranquila, separada del mar por dunas, a pocas horas de Maputo. Ideal para kayak y para ir con chicos.",
      coords: [-25.2833, 33.25],
      image: null,
    },
    {
      id: "tofo",
      name: "Tofo (tiburones ballena)",
      region: "Inhambane",
      tag: "Tiburones ballena",
      blurb:
        "Un pueblo de playa con surf y salidas en lancha para nadar con tiburones ballena y mantarrayas gigantes.",
      coords: [-23.8519, 35.5458],
      image: null,
    },
    {
      id: "inhambane",
      name: "Inhambane",
      region: "Inhambane",
      tag: "La ciudad vieja",
      blurb:
        "Una de las ciudades más antiguas del país, con la catedral vieja, el mercado y casas coloniales, sobre una bahía con dhows.",
      coords: [-23.865, 35.3833],
      image: null,
    },
    {
      id: "vilankulo",
      name: "Vilankulo (archipiélago de Bazaruto)",
      region: "Inhambane",
      tag: "La puerta de Bazaruto",
      blurb:
        "La base para el archipiélago de Bazaruto, con dhows, arrecifes, dugongos y dunas. Calor y lluvia en verano; seco en invierno.",
      coords: [-21.9952, 35.3166],
      image: null,
    },
    {
      id: "gorongosa",
      name: "Parque Nacional Gorongosa",
      region: "Sofala",
      tag: "El parque que volvió",
      blurb:
        "Un parque que se recuperó después de la guerra, con leones, elefantes y llanuras que se inundan. Lluvias fuertes de noviembre a marzo; en invierno, noches frescas.",
      coords: [-18.98, 34.35],
      image: null,
    },
    {
      id: "ilha-de-mocambique",
      name: "Isla de Mozambique",
      region: "Nampula",
      tag: "La antigua capital",
      blurb:
        "La antigua capital colonial, patrimonio de la humanidad, con la fortaleza de San Sebastián, iglesias y el barrio de techos de palma, unida al continente por un puente largo.",
      coords: [-15.0347, 40.7356],
      image: null,
    },
    {
      id: "chimanimani",
      name: "Montes Chimanimani",
      region: "Manica",
      tag: "Montañas de cuarcita",
      blurb:
        "Montañas de cuarcita sobre la frontera con Zimbabue, con caminatas, cascadas y piletas naturales. Noches frías en invierno.",
      coords: [-19.75, 33.25],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Para Mozambique, ropa liviana, traje de baño, sombrero y protector: es trópico y playa casi todo el año. De mayo a septiembre, un buzo para las noches del sur, y abrigo para Chimanimani. De diciembre a marzo, algo impermeable. Repelente siempre, y un adaptador.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Registro online o visa electrónica antes de viajar, según el pasaporte.",
      "De mayo a noviembre, seco y con el mar en calma; de diciembre a marzo, lluvia y ciclones.",
      "Malaria en todo el país: consultá con un médico de viajes con semanas de anticipación.",
    ],
    adviceByBucket: {
      calido: "Ropa liviana, traje de baño, sombrero, protector y repelente.",
      templado:
        "Ropa liviana de día y un buzo para la noche y las salidas en lancha.",
      fresco:
        "Un buzo y una campera liviana para las noches de invierno en Gorongosa y Chimanimani.",
      frio: "Un buzo de abrigo y una campera para Chimanimani, donde las noches de invierno bajan de los diez grados.",
    },
    plug: {
      types: "Tipos C, F y M",
      voltage: "220 V, 50 Hz",
      note: "Lo más común son las dos patas redondas (C y F). En edificios viejos aparece el M, el sudafricano de tres patas redondas grandes, que un adaptador universal no siempre resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Hacé el registro o la visa con tiempo",
          body: "Se tramitan online antes de viajar, y sin eso no te embarcan.",
        },
        {
          title: "Nadá con tiburones ballena en Tofo",
          body: "Con operadores que respetan las distancias, sin tocarlos.",
        },
        {
          title: "Probá el piri-piri",
          body: "Camarones o pollo con la salsa de ají más famosa de esta costa.",
        },
        {
          title: "Hablá en portuñol",
          body: "El idioma oficial es el portugués: con español y paciencia, te entendés.",
        },
        {
          title: "Elegí pagar en meticales",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No te metas al mar con bandera roja",
          body: "Hay corrientes fuertes, y muchas playas no tienen guardavidas.",
        },
        {
          title: "No manejes de noche",
          body: "Las rutas tienen poca luz, pozos y animales sueltos.",
        },
        {
          title: "No saques fotos de edificios oficiales",
          body: "Ni de policías, militares o puertos.",
        },
        {
          title: "No compres conchas ni corales",
          body: "Dañan los arrecifes, y sacarlos del país puede estar prohibido.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Mozambique y si tu pasaporte necesita visa o el registro online.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino, con cobertura médica",
          "La visa electrónica o el registro online, aprobados",
          "El certificado de la fiebre amarilla, si tu viaje pasa por un país con riesgo",
        ],
      },
      {
        id: "playa",
        title: "Para la playa",
        notice: {
          tone: "info",
          title: "Sol fuerte todo el año",
          body: "Aun en invierno, el sol del trópico quema: protector y algo que cubra.",
        },
        summary: "Mar y sol",
        items: [
          "Traje de baño y una remera de lycra",
          "Protector solar resistente al agua",
          "Sombrero y lentes de sol",
          "Ojotas o sandalias para el agua",
        ],
      },
      {
        id: "plata",
        title: "Plata",
        notice: null,
        summary: "Para pagar sin problemas",
        items: [
          "Una tarjeta de débito y una de crédito",
          "Meticales en efectivo para las islas y los parques",
          "Dólares o rands nuevos y sanos, si vas a cambiar",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: {
          tone: "warn",
          title: "Malaria",
          body: "Hay malaria en todo el país, todo el año, con más riesgo de noviembre a abril. Consultá la profilaxis con un médico de viajes, con semanas de anticipación.",
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
        leave: "Ropa gruesa",
        why: "Hace calor casi todo el año.",
        instead: "Algodón o lino livianos, y un buzo para la noche.",
      },
      {
        leave: "Solo la tarjeta",
        why: "En las islas y los pueblos se paga en efectivo.",
        instead: "Meticales en efectivo.",
      },
      {
        leave: "Un recorrido de punta a punta por tierra",
        why: "Las distancias son enormes y las rutas, lentas.",
        instead: "Vuelos internos y una región por viaje.",
      },
      {
        leave: "Dólares viejos o rotos",
        why: "Se rechazan al cambiar.",
        instead: "Billetes nuevos y sanos.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 220 V.",
        instead: "El del alojamiento.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Mozambique y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Mozambique?",
        answer:
          "Según el pasaporte, la visa electrónica o un registro online, con pago, antes de viajar. Verificá el tuyo en el sitio oficial.",
      },
      {
        question: "¿Me piden la vacuna de la fiebre amarilla?",
        answer:
          "Si llegás de un país con riesgo de transmisión, como varios de Sudamérica, te la pueden pedir. Vacunate al menos diez días antes y llevá el certificado.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer: "De mayo a noviembre: seco, templado y con el mar en calma.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "El portugués es el oficial; en la calle, también idiomas locales. Con español te arreglás bastante.",
      },
      {
        question: "¿Hay malaria?",
        answer:
          "Sí, en todo el país. Consultá la profilaxis con un médico de viajes.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer: "Probablemente: Mozambique usa los tipos C, F y M a 220 V.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer: "No: tomá embotellada o filtrada.",
      },
    ],
  },
};
