import type { DestinationGuide } from "./types";

/**
 * Guía de Irán.
 *
 * Mismas reglas que el resto —ningún número volátil en prosa y la fecha de
 * revisión visible; al tocar `facts`, mover `factsUpdatedAt`— con la
 * excepción que la sección 14.11 decidió para seis países: entra con aviso,
 * como Venezuela. La entrada "tener-en-cuenta" manda a revisar la
 * recomendación de viaje del propio país y qué cubre el seguro.
 *
 * Lo que este país aporta: el único destino del sitio donde ninguna tarjeta
 * extranjera funciona, por las sanciones, y la tesis de Venezuela llevada al
 * extremo: el rial tiene varias cotizaciones e inflación alta, así que los
 * precios van en dólares y el corredor, en IRR con dos cotizaciones. Los
 * precios en la calle se dicen en tomanes, diez riales cada uno.
 */
export const iran: DestinationGuide = {
  slug: "iran",
  country: "Irán",
  subregion: "Asia del Sur",
  subhead:
    "Mezquitas de azulejos en Isfahán, las ruinas de Persépolis, los jardines y la poesía de Shiraz, la ciudad de adobe de Yazd entre torres de viento y una hospitalidad famosa. Una de las civilizaciones más antiguas del mundo.",

  image: null,

  highlights: [
    {
      value: "Efectivo",
      label: "para todo el viaje: las tarjetas extranjeras no funcionan",
      note: "Por las sanciones, ningún cajero ni comercio acepta tarjetas del exterior. Se lleva todo en dólares o euros y se cambia allá.",
    },
    {
      value: "Naqsh-e Jahan",
      label: "la gran plaza de Isfahán",
      note: "Una de las plazas más grandes del mundo, rodeada de mezquitas de azulejos, un palacio y un bazar. Patrimonio de la humanidad.",
    },
    {
      value: "Persépolis",
      label: "la capital ceremonial del imperio persa",
      note: "Escalinatas, columnas y relieves de hace dos mil quinientos años, cerca de Shiraz. Patrimonio de la humanidad.",
    },
    {
      value: "Tahdig",
      label: "la costra dorada del arroz",
      note: "La parte del fondo de la olla, crocante, que en cada casa se disputa. Va con kebabs, ghormeh sabzi o fesenjan.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Irán",
      body: [
        "Varios pasaportes sacan la visa online o a la llegada; otros la tramitan antes en un consulado. Verificá el tuyo antes de comprar el pasaje.",
        "Si tu pasaporte entra a Estados Unidos con autorización electrónica, como el chileno, haber estado en Irán te saca de ese programa y vas a necesitar visa.",
        "Por ley, las mujeres llevan el pelo cubierto en público y ropa holgada que cubra brazos y piernas; los hombres no usan pantalón corto. El alcohol está prohibido.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Irán",
      body: [
        "Las tarjetas extranjeras no funcionan, por las sanciones. Todo se paga en efectivo, que se lleva en dólares o euros y se cambia en casas de cambio.",
        "La moneda es el rial, pero los precios se dicen en tomanes: un toman son diez riales. Preguntá siempre en cuál te están diciendo el precio.",
        "El rial tiene varias cotizaciones y mucha inflación: por eso los precios del planificador están en dólares.",
      ],
    },
    {
      id: "clima",
      title: "Una meseta entre montañas",
      body: [
        "Irán es hemisferio norte. Teherán, Isfahán, Shiraz y Yazd, entre mil y mil quinientos metros, tienen veranos calurosos y secos e inviernos fríos, con heladas de noche.",
        "Tabriz, en el noroeste, tiene el invierno más duro, con nieve. Yazd y Kashan, junto al desierto, son las más calurosas en verano.",
        "Qeshm, en el golfo Pérsico, es calurosa y húmeda casi todo el año.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "Marzo, abril, mayo, octubre y noviembre: días templados en todo el país.",
        "Nowruz, el año nuevo persa, a fines de marzo, llena los hoteles y los trenes durante dos semanas. En Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Irán",
      body: [
        "Entre ciudades hay buses VIP cómodos y baratos, trenes nocturnos y vuelos internos.",
        "En las ciudades, taxis por app local, metro en Teherán, Isfahán, Shiraz y Mashhad, y taxis compartidos.",
        "Las distancias son largas: entre Teherán y Shiraz, un día de bus o un vuelo corto.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisá la recomendación de viaje de tu propio país: varios gobiernos desaconsejan viajar a Irán, y la situación cambia rápido.",
        "Fijate también qué cubre tu seguro: muchos excluyen los destinos con esa recomendación.",
        "Internet está filtrada y varias aplicaciones y sitios no funcionan. Descargá antes lo que vayas a necesitar.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 10,
      rationale:
        "Persépolis, Isfahán, Yazd, Kashan y Tabriz: más de veinte sitios patrimonio de la humanidad.",
    },
    {
      dimension: "Gastronomía",
      score: 8,
      rationale:
        "Kebabs, guisos con hierbas y granada, arroz con azafrán y dulces.",
    },
    {
      dimension: "Paisaje",
      score: 7,
      rationale: "Desiertos, montañas y la isla de Qeshm en el golfo Pérsico.",
    },
    {
      dimension: "Playas",
      score: 2,
      rationale:
        "Hay costa en el golfo y en el Caspio, pero con reglas estrictas de vestimenta.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 9,
      rationale:
        "Para quien llega con dólares, comer, dormir y moverse sale muy poco.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Buen transporte, pero todo en efectivo, internet filtrada y visa según el pasaporte.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 2,
      rationale: "Varias cotizaciones del rial e inflación alta.",
    },
  ],

  shines: [
    "Ciudades históricas únicas.",
    "La hospitalidad.",
    "Muy barato para quien llega con dólares.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "Todo en efectivo: las tarjetas no funcionan.",
    "Internet filtrada.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Teherán que Yazd o Tabriz. Los precios están en dólares, que es como conviene pensarlos con un rial de varias cotizaciones, y son órdenes de magnitud.",

  places: [
    {
      id: "teheran",
      name: "Teherán",
      region: "Teherán",
      tag: "La capital al pie de las montañas",
      blurb:
        "El palacio de Golestán, el gran bazar, los museos y las montañas del Alborz de fondo. Es la base del planificador: veranos calurosos, inviernos fríos.",
      coords: [35.6892, 51.389],
      featured: true,
      image: null,
    },
    {
      id: "isfahan",
      name: "Isfahán",
      region: "Isfahán",
      tag: "La mitad del mundo",
      blurb:
        "La plaza Naqsh-e Jahan, la mezquita del Imán, los puentes sobre el río y el barrio armenio de Jolfa. Patrimonio de la humanidad.",
      coords: [32.6546, 51.668],
      image: null,
    },
    {
      id: "shiraz",
      name: "Shiraz",
      region: "Fars",
      tag: "Jardines y poetas",
      blurb:
        "La mezquita rosa de Nasir al-Mulk, los jardines persas y las tumbas de los poetas Hafez y Saadi. Base para Persépolis.",
      coords: [29.5918, 52.5837],
      image: null,
    },
    {
      id: "yazd",
      name: "Yazd",
      region: "Yazd",
      tag: "Adobe y torres de viento",
      blurb:
        "Una ciudad de adobe junto al desierto, con torres de viento, templos del fuego zoroastrianos y callejones techados. Patrimonio de la humanidad.",
      coords: [31.8974, 54.3569],
      image: null,
    },
    {
      id: "persepolis",
      name: "Persépolis",
      region: "Fars",
      tag: "La capital del imperio",
      blurb:
        "Las ruinas de la capital ceremonial aqueménida y, cerca, las tumbas de los reyes talladas en la roca de Naqsh-e Rostam. Calor seco en verano.",
      coords: [29.9355, 52.8916],
      image: null,
    },
    {
      id: "kashan",
      name: "Kashan",
      region: "Isfahán",
      tag: "Casas históricas y agua de rosas",
      blurb:
        "Casas de mercaderes con patios y espejos, el jardín de Fin, patrimonio de la humanidad, y la cosecha de rosas de mayo.",
      coords: [33.985, 51.4096],
      image: null,
    },
    {
      id: "tabriz",
      name: "Tabriz",
      region: "Azerbaiyán Oriental",
      tag: "El gran bazar",
      blurb:
        "Uno de los bazares cubiertos más grandes del mundo, patrimonio de la humanidad, y la Mezquita Azul. Inviernos fríos con nieve.",
      coords: [38.0962, 46.2738],
      image: null,
    },
    {
      id: "mashhad",
      name: "Mashhad",
      region: "Jorasán Razaví",
      tag: "La ciudad santa",
      blurb:
        "El santuario del imán Reza, uno de los más grandes del mundo y centro de peregrinación, y la tumba del poeta Ferdousí cerca.",
      coords: [36.2605, 59.6168],
      image: null,
    },
    {
      id: "qeshm",
      name: "Isla de Qeshm",
      region: "Hormozgán",
      tag: "Manglares y cañones",
      blurb:
        "Una isla del golfo Pérsico con bosques de manglares, cañones de sal y valles de piedra esculpida, parte de un geoparque. Calurosa casi todo el año.",
      coords: [26.95, 56.27],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Irán depende de la estación, pero la ropa tiene reglas: las mujeres con el pelo cubierto y ropa holgada que cubra brazos y piernas; los hombres, sin pantalón corto. En primavera y otoño, capas livianas y un abrigo para la noche. En verano, telas que respiren. En invierno, campera, sobre todo para Tabriz. Y todo el efectivo del viaje, en dólares o euros.",
    keyPoints: [
      "Antes de reservar, revisá la recomendación de viaje de tu país y tu seguro.",
      "Las tarjetas extranjeras no funcionan: todo en efectivo.",
      "Ropa con reglas: pelo cubierto para las mujeres, sin pantalón corto para los hombres.",
      "Los precios se dicen en tomanes, diez riales cada uno.",
    ],
    adviceByBucket: {
      calido:
        "Ropa holgada de telas que respiren, que cubra brazos y piernas, sombrero, protector y agua.",
      templado:
        "Capas livianas que cubran y un buzo para la noche: es la primavera y el otoño, la mejor época.",
      fresco:
        "Un polar y una campera para las noches de la meseta y para Tabriz en otoño.",
      frio: "Campera de abrigo, gorro y guantes para el invierno de Tabriz, Teherán e Isfahán.",
    },
    plug: {
      types: "Tipo C y tipo F",
      voltage: "230 V, 50 Hz",
      note: "Son los mismos enchufes de dos patas redondas que en buena parte de Europa. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisá la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Llevá todo el efectivo",
          body: "En dólares o euros, en billetes nuevos. Allá no hay forma de sacar plata con una tarjeta extranjera.",
        },
        {
          title: "Preguntá si es en tomanes o en riales",
          body: "Los precios se dicen en tomanes; los billetes están en riales. Un cero de diferencia cambia todo.",
        },
        {
          title: "Descargá antes lo que necesites",
          body: "Mapas, documentos y aplicaciones: internet está filtrada.",
        },
        {
          title: "Aceptá el ta'arof con calma",
          body: "Es la cortesía de rechazar el pago o un regalo por educación. Insistí dos o tres veces antes de dar por hecho que es en serio.",
        },
        {
          title: "Reservá con tiempo para Nowruz",
          body: "A fines de marzo el país entero viaja.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Muchos excluyen los destinos con recomendación de no viajar.",
        },
        {
          title: "No lleves alcohol",
          body: "Está prohibido.",
        },
        {
          title: "No fotografíes edificios oficiales ni militares",
          body: "Preguntá antes de sacar la cámara.",
        },
        {
          title: "No cambies plata en la calle",
          body: "Hacelo en casas de cambio, donde la cotización es la libre y es legal.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
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
          body: "Revisá la recomendación de viaje de tu país, qué cubre tu seguro en Irán y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro que cubra este destino",
          "Pasaporte con vigencia de sobra",
          "Visa, si tu pasaporte la necesita",
        ],
      },
      {
        id: "plata",
        title: "Efectivo",
        notice: {
          tone: "warn",
          title: "Sin tarjetas",
          body: "Ningún cajero ni comercio acepta tarjetas extranjeras. Lo que no lleves en efectivo no lo vas a poder pagar.",
        },
        summary: "Cómo llevar la plata",
        items: [
          "Dólares o euros en billetes nuevos, para todo el viaje",
          "Una riñonera o bolsillo interno",
          "Un margen extra por si el viaje se alarga",
        ],
      },
      {
        id: "ropa",
        title: "Ropa",
        notice: null,
        summary: "Lo que pide la ley",
        items: [
          "Pañuelos para cubrir el pelo, para las mujeres",
          "Ropa holgada que cubra brazos y piernas",
          "Pantalones largos, para los hombres",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el estómago",
          "Protector solar y labial",
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
        leave: "Contar con la tarjeta",
        why: "Ninguna tarjeta extranjera funciona.",
        instead: "Todo el efectivo del viaje.",
      },
      {
        leave: "Ropa corta o ajustada",
        why: "La ley pide ropa holgada que cubra.",
        instead: "Ropa liviana y holgada.",
      },
      {
        leave: "Alcohol en la valija",
        why: "Está prohibido.",
        instead: "Nada.",
      },
      {
        leave: "Depender de internet",
        why: "Está filtrada.",
        instead: "Mapas y documentos descargados antes.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Irán y las reglas de visa para tu pasaporte.",
      },
      {
        question: "¿Necesito visa para entrar a Irán?",
        answer:
          "Varios pasaportes la sacan online o a la llegada; otros, en un consulado. Verificá el tuyo.",
      },
      {
        question: "¿Funcionan las tarjetas?",
        answer:
          "No: por las sanciones, ninguna tarjeta extranjera funciona. Todo se paga en efectivo.",
      },
      {
        question: "¿Cómo me tengo que vestir?",
        answer:
          "Las mujeres, con el pelo cubierto y ropa holgada que cubra brazos y piernas. Los hombres, sin pantalón corto.",
      },
      {
        question: "¿Qué es un toman?",
        answer:
          "La unidad en que se dicen los precios: diez riales. Los billetes están en riales.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Depende de tu país: Irán usa los tipos C y F a 230 V, los mismos que buena parte de Europa.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "En las ciudades grandes suele serlo; muchos prefieren embotellada.",
      },
      {
        question: "¿Afecta un viaje a Irán mi entrada a Estados Unidos?",
        answer:
          "Si tu pasaporte entra con autorización electrónica, como el chileno, sí: vas a necesitar visa.",
      },
    ],
  },
};
