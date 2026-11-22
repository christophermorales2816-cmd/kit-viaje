import type { DestinationGuide } from "./types";

/**
 * Guía de Guyana.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Entra con aviso, como Pakistán (spec, 14.2 y 22): Estados Unidos pide
 * reconsiderar el viaje por el delito, y la frontera con Venezuela, en
 * disputa, tiene sus propios riesgos. La entrada "tener-en-cuenta" manda a
 * revisar la recomendación de viaje del propio país y qué cubre el seguro.
 * Ninguna ciudad del planificador está cerca de esa frontera.
 *
 * Lo que este país aporta: el interior más remoto del planificador. Kaieteur,
 * Iwokrama y la Rupununi se alcanzan en avioneta o por rutas de tierra, y se
 * duerme en lodges de comunidades indígenas con pocos servicios. La guía lo
 * dice como lo que es: lo que hay que resolver antes de salir de Georgetown.
 * Y la entrada también es salud: fiebre amarilla y malaria en el interior.
 */
export const guyana: DestinationGuide = {
  slug: "guyana",
  country: "Guyana",
  subregion: "Sudamérica",
  subhead:
    "Selva casi intacta, la catarata de Kaieteur, sabanas con nutrias gigantes y jaguares, y una capital de madera. El país de habla inglesa de Sudamérica.",

  image: null,

  highlights: [
    {
      value: "226 m",
      label: "de caída en Kaieteur",
      note: "Más de cuatro veces la altura de las cataratas del Niágara, en medio de la selva y casi sin visitantes.",
    },
    {
      value: "+80 %",
      label: "del país es selva",
      note: "Una de las selvas tropicales más intactas del mundo, con lodges de comunidades indígenas.",
    },
    {
      value: "Inglés",
      label: "idioma oficial",
      note: "El único país de Sudamérica con el inglés como idioma oficial. En la calle se habla también criollo guyanés.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica, como el críquet.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros necesitan una visa o una aprobación previa. Verifica el tuyo antes de reservar.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te piden el certificado de vacunación. Para el interior, la vacuna se recomienda a todos los viajeros.",
      ],
    },
    {
      id: "salud",
      title: "Salud",
      body: [
        "En el interior hay malaria y dengue. Consulta a un médico de viajes antes de ir: la guía no receta, pero la protección contra los mosquitos no es opcional.",
        "Fuera de Georgetown, la atención médica es básica y lejana. Un seguro con evacuación es parte del viaje.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar guyanés flota, sin mercado paralelo. En hoteles y lodges se aceptan dólares estadounidenses.",
        "La tarjeta funciona en los hoteles grandes de Georgetown. En el interior, efectivo, o el paquete pagado antes con el lodge.",
      ],
    },
    {
      id: "interior",
      title: "El interior",
      body: [
        "Kaieteur se visita en el día en avioneta desde Georgetown. Iwokrama, Surama, Rewa y la Rupununi se alcanzan en avioneta o por la ruta de tierra a Lethem, larga y a veces cortada por la lluvia.",
        "Los lodges son chicos, muchos de comunidades indígenas, y venden el paquete con traslados, comidas y guías. Hay poca señal de teléfono, pocos cajeros y ningún almacén grande.",
        "Antes de salir de Georgetown se resuelven el efectivo, los medicamentos, el repelente y la reserva confirmada con el lodge.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "En la costa hay dos temporadas de lluvias, de mayo a agosto y de diciembre a enero. En el interior, una sola, de mayo a agosto, cuando la sabana se inunda.",
        "De septiembre a noviembre es la época más seca y la mejor para el interior. Kaieteur lleva más agua en las lluvias.",
        "El planificador usa el clima histórico de cada lugar, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisa la recomendación de viaje de tu propio país: varios gobiernos piden reconsiderar el viaje a Guyana por el delito, y la frontera con Venezuela, en disputa, tiene sus propios riesgos.",
        "Fíjate también qué cubre tu seguro, y que incluya evacuación desde el interior.",
        "Ninguna ciudad del planificador está cerca de la frontera con Venezuela. En Georgetown, nada de caminar de noche y taxis de confianza.",
        "El agua corriente no es para tomar. Agua embotellada o filtrada.",
      ],
    },
    {
      id: "emergencias",
      title: "Emergencias",
      body: ["999"],
    },
  ],

  factsUpdatedAt: "2026-11-22",

  scores: [
    {
      dimension: "Selva y fauna",
      score: 10,
      rationale:
        "Nutrias gigantes, oso hormiguero, jaguares y cientos de aves en Iwokrama y la Rupununi.",
    },
    {
      dimension: "Cataratas",
      score: 10,
      rationale:
        "Kaieteur, una de las cataratas más impresionantes del mundo, casi sin visitantes.",
    },
    {
      dimension: "Turismo comunitario",
      score: 9,
      rationale:
        "Lodges de comunidades indígenas, como Surama y Rewa, que muestran su forma de vida.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5.5,
      rationale:
        "Georgetown es accesible; el interior, con avionetas y lodges, es caro.",
    },
    {
      dimension: "Facilidad logística",
      score: 4,
      rationale:
        "Avionetas con poco equipaje, rutas de tierra y lodges que hay que reservar con tiempo.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Una moneda que flota sin mercado paralelo, con dólares aceptados en hoteles y lodges.",
    },
  ],

  shines: [
    "Kaieteur, sin multitudes ni barandas.",
    "Selva y sabana con fauna que en otros lados no se ve.",
    "Lodges de comunidades indígenas.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "El interior: caro, remoto y con poca señal.",
    "Malaria y dengue en el interior.",
  ],

  dataScopeNote:
    "Eliges el lugar en el planificador y los cálculos se hacen con su clima: la sabana de Lethem no pide lo mismo que la selva de Kaieteur. Los precios son órdenes de magnitud, no cotizaciones; en los lodges del interior, el paquete suele incluir comidas y traslados.",

  places: [
    {
      id: "georgetown",
      name: "Georgetown",
      region: "Costa",
      tag: "Capital de madera",
      blurb:
        "La capital, con la catedral de San Jorge, una de las iglesias de madera más altas del mundo, el mercado de Stabroek y el malecón. Es la base del planificador.",
      coords: [6.8013, -58.1551],
      featured: true,
      image: null,
    },
    {
      id: "arrowpoint",
      name: "Arrowpoint y el río Kamuni",
      region: "Costa",
      tag: "Selva cerca",
      blurb:
        "Un lodge sobre un río de aguas negras, cerca del pueblo indígena de Santa Mission, a una hora de Georgetown en lancha.",
      coords: [6.47, -58.24],
      image: null,
    },
    {
      id: "bartica",
      name: "Bartica",
      region: "Río Esequibo",
      tag: "Puerta del interior",
      blurb:
        "Un pueblo donde se juntan tres ríos, sobre el Esequibo, con islas, playas de río y la salida a las minas y los saltos del interior.",
      coords: [6.405, -58.625],
      image: null,
    },
    {
      id: "kaieteur",
      name: "Cataratas de Kaieteur",
      region: "Interior",
      tag: "Catarata",
      blurb:
        "Una caída de 226 metros en un río de la selva, que se visita en el día en avioneta. Al borde no hay barandas, y casi no hay gente.",
      coords: [5.175, -59.48],
      image: null,
    },
    {
      id: "iwokrama",
      name: "Iwokrama",
      region: "Interior",
      tag: "Selva",
      blurb:
        "Una reserva de selva con un sendero colgante entre las copas de los árboles, jaguares y nutrias gigantes en el río. Remota de verdad.",
      coords: [4.67, -58.685],
      image: null,
    },
    {
      id: "surama",
      name: "Surama",
      region: "Interior",
      tag: "Pueblo makushi",
      blurb:
        "Un pueblo makushi entre la selva y la sabana, con un lodge comunitario, caminatas al amanecer y avistaje de aves.",
      coords: [4.15, -59.08],
      image: null,
    },
    {
      id: "rewa",
      name: "Rewa",
      region: "Interior",
      tag: "Río y pesca",
      blurb:
        "Un lodge comunitario donde se juntan dos ríos, solo accesible en bote, con pesca del arapaima y caminatas en la selva.",
      coords: [3.99, -58.78],
      image: null,
    },
    {
      id: "karanambu",
      name: "Karanambu",
      region: "Rupununi",
      tag: "Nutrias gigantes",
      blurb:
        "Un rancho en la sabana de la Rupununi, famoso por sus nutrias gigantes, osos hormigueros y nenúfares gigantes.",
      coords: [3.75, -59.31],
      image: null,
    },
    {
      id: "lethem",
      name: "Lethem",
      region: "Rupununi",
      tag: "Sabana y frontera",
      blurb:
        "El pueblo de la sabana sur, en la frontera con Brasil, con ranchos de vaqueros y la ruta de tierra que llega desde Georgetown.",
      coords: [3.38, -59.8],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Guyana es calor y humedad todo el año: ropa ligera de manga larga, repelente fuerte, impermeable y calzado cerrado para la selva. En la sabana de la Rupununi los días son muy calurosos. Si vas al interior, consulta a un médico de viajes por la fiebre amarilla y la malaria, y resuelve el efectivo en Georgetown.",
    keyPoints: [
      "Antes de reservar, revisa la recomendación de viaje de tu país y tu seguro.",
      "Calor y humedad todo el año; en la costa, dos temporadas de lluvias.",
      "El interior tiene malaria y dengue: médico de viajes antes de ir.",
      "Las avionetas al interior llevan poco equipaje.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera de manga larga que seque rápido, repelente fuerte e impermeable. Es el clima del país todo el año.",
      templado:
        "Camiseta y una capa ligera para las noches de la selva y las madrugadas de la sabana.",
      fresco: "Un suéter ligero para la noche más fresca en las tierras altas.",
      frio: "En Guyana no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A, B, D y G",
      voltage: "240 V, 60 Hz",
      note: "Guyana mezcla enchufes y voltajes: lleva un adaptador universal y cargadores que digan 100-240 V. En algunos lugares de Georgetown hay tomas de 110 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Consulta a un médico de viajes",
          body: "Por la fiebre amarilla y la malaria del interior, con semanas de anticipación.",
        },
        {
          title: "Reserva el interior como paquete",
          body: "Los lodges venden traslados, comidas y guías juntos, y tienen pocos lugares.",
        },
        {
          title: "Lleva efectivo desde Georgetown",
          body: "En el interior casi no hay cajeros.",
        },
        {
          title: "Viaja ligero al interior",
          body: "Las avionetas tienen un límite de equipaje bajo, y lo cumplen.",
        },
        {
          title: "Lleva repelente fuerte y manga larga",
          body: "Al atardecer, en la selva y en la sabana.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Que cubra este destino y la evacuación desde el interior.",
        },
        {
          title: "No te acerques a la frontera con Venezuela",
          body: "Está en disputa, y no hay pasos oficiales.",
        },
        {
          title: "No camines de noche por Georgetown",
          body: "Taxis de confianza, pedidos por el hotel.",
        },
        {
          title: "No tomes agua corriente",
          body: "Agua embotellada o filtrada.",
        },
        {
          title: "No te asomes al borde de Kaieteur",
          body: "No hay barandas, y la roca puede estar mojada.",
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
          tone: "warn",
          title: "Recomendación de viaje, seguro y salud",
          body: "Revisa la recomendación de viaje de tu país, qué cubre tu seguro en Guyana, si tu pasaporte necesita visa y qué vacunas te indica un médico de viajes.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro con cobertura médica y evacuación",
          "Certificado de fiebre amarilla",
          "Lodges y avionetas del interior, confirmados",
        ],
      },
      {
        id: "selva",
        title: "Selva y sabana",
        notice: {
          tone: "warn",
          title: "Malaria y dengue",
          body: "En el interior hay malaria y dengue. Repelente, manga larga al atardecer y lo que indique un médico de viajes.",
        },
        summary: "Para el interior",
        items: [
          "Repelente fuerte",
          "Camisa y pantalón de manga larga, ligeros",
          "Calzado cerrado que se pueda mojar",
          "Impermeable",
          "Linterna frontal",
          "Prismáticos para las aves",
        ],
      },
      {
        id: "remoto",
        title: "Lugares remotos",
        notice: {
          tone: "info",
          title: "Pocos servicios",
          body: "En el interior hay poca señal, pocos cajeros y ningún almacén grande. Lo esencial se resuelve en Georgetown.",
        },
        summary: "Lo que no se consigue en el interior",
        items: [
          "Efectivo en dólares guyaneses y estadounidenses",
          "Medicación de más, por si el vuelo de vuelta se atrasa",
          "Batería portátil y cables",
          "Un botiquín con lo básico",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Crema para picaduras",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador universal",
          "Cargadores que digan 100-240 V",
          "Batería portátil: en los lodges la electricidad es por horas",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Las vacunas que indique un pediatra de viajes",
          "Repelente apto para niños y ropa de manga larga",
        ],
      },
    ],
    avoid: [
      {
        leave: "Reservar sin leer la recomendación de viaje",
        why: "La situación cambia, y tu seguro puede no cubrir el destino.",
        instead: "La recomendación de tu país, leída, y el seguro revisado.",
      },
      {
        leave: "Una maleta rígida grande",
        why: "Las avionetas del interior llevan poco equipaje.",
        instead: "Un bolso blando y ligero.",
      },
      {
        leave: "Sandalias para la selva",
        why: "Se camina por barro, raíces y agua.",
        instead: "Calzado cerrado que se pueda mojar.",
      },
      {
        leave: "Ropa de colores oscuros para la sabana",
        why: "Atrae a los mosquitos y absorbe el calor.",
        instead: "Ropa clara de manga larga.",
      },
      {
        leave: "Solo tarjeta para el interior",
        why: "Casi no hay cajeros ni lugares que la acepten.",
        instead: "Efectivo, sacado en Georgetown.",
      },
      {
        leave: "Abrigo",
        why: "En Guyana no hay un mes frío.",
        instead: "Una capa ligera para las noches de la selva.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Guyana, las reglas de entrada para tu pasaporte y las vacunas que indique un médico de viajes.",
      },
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros necesitan visa o una aprobación previa. Verifica el tuyo antes de reservar.",
      },
      {
        question: "¿Necesito la vacuna de la fiebre amarilla?",
        answer:
          "Te piden el certificado si llegas desde un país con riesgo, y para el interior se recomienda a todos. Consulta a un médico de viajes.",
      },
      {
        question: "¿Cómo se llega a Kaieteur?",
        answer:
          "En avioneta desde Georgetown, en una excursión de día. Por tierra y río son varios días de expedición.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De septiembre a noviembre, la época más seca, sobre todo para el interior.",
      },
      {
        question: "¿Se habla español?",
        answer:
          "Poco. El idioma oficial es el inglés, y en la calle se habla criollo guyanés.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer: "No. Agua embotellada o filtrada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Conviene uno universal: hay varios tipos de enchufe y voltajes de 110 y 240 V. Revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
