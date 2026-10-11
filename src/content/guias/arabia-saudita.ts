import type { DestinationGuide } from "./types";

/**
 * Guía de Arabia Saudita.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un país abierto al turismo hace poco, con reglas
 * que se dicen como preparación y no como advertencia —ropa que cubra, nada
 * de alcohol, La Meca cerrada a quienes no son musulmanes— y el enchufe de
 * tres patas planas a 60 Hz. AlUla lleva el factor de precio más alto: casi
 * todo ahí se paga como experiencia organizada.
 */
export const arabiaSaudita: DestinationGuide = {
  slug: "arabia-saudita",
  country: "Arabia Saudita",
  subregion: "Asia Occidental",
  subhead:
    "Tumbas talladas en la roca en el desierto de AlUla, el barro y los rascacielos de Riad, el casco antiguo de Yeda sobre el mar Rojo y montañas verdes en el sur. Un país que se abrió al turismo hace pocos años.",

  image: null,

  highlights: [
    {
      value: "+40 °C",
      label: "en Riad de mayo a septiembre",
      note: "El invierno, de noviembre a marzo, es la temporada: días templados y noches frescas, frías en el desierto.",
    },
    {
      value: "Hegra",
      label: "tumbas nabateas talladas en la roca, en AlUla",
      note: "El primer sitio del país declarado patrimonio de la humanidad, de la misma cultura que Petra. Se visita con entrada y en grupo.",
    },
    {
      value: "Al Balad",
      label: "el casco antiguo de Yeda",
      note: "Casas de piedra de coral con balcones de madera, patrimonio de la humanidad, a pasos del mar Rojo.",
    },
    {
      value: "Kabsa",
      label: "arroz especiado con carne, para compartir",
      note: "El plato nacional, servido en fuentes grandes. De postre, dátiles y café árabe con cardamomo.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar a Arabia Saudita",
      body: [
        "Algunos pasaportes latinoamericanos sacan la visa de turista online, en el sitio oficial; otros pueden sacarla si tienen una visa vigente de Estados Unidos, el Reino Unido o el espacio Schengen. Verificá el tuyo antes de comprar el pasaje.",
        "El pasaporte tiene que tener vigencia de sobra, y el seguro médico suele ser parte del trámite de la visa.",
        "La Meca está cerrada a quienes no son musulmanes. Ninguna de las ciudades del planificador está ahí.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Arabia Saudita",
      body: [
        "La moneda es el riyal, atado al dólar. La tarjeta y el pago con el teléfono funcionan en casi todos lados, también en negocios chicos.",
        "Hay cajeros en todas las ciudades. Algo de efectivo sirve para los zocos y los pueblos.",
        "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, elegí riyales: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Desierto, mar y montaña",
      body: [
        "Arabia Saudita es hemisferio norte y casi todo desierto. Riad tiene inviernos templados y veranos de calor extremo y seco, con más de cuarenta grados de mayo a septiembre.",
        "Yeda, Umluj y la costa del mar Rojo son calurosas y húmedas todo el año, con el mar templado aun en invierno.",
        "Abha y Taif, en las montañas del oeste, a casi dos mil metros, son frescas, y Abha tiene lluvias de verano. En AlUla y Hail las noches de invierno son frías.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De noviembre a marzo: días templados en Riad y AlUla, y el mar Rojo agradable. Es la temporada alta y la de los grandes festivales.",
        "En verano, el calor del desierto es extremo; las montañas de Abha y Taif son el refugio. Durante el Ramadán cambian los horarios de casi todo.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Arabia Saudita",
      body: [
        "Las distancias son grandes: entre Riad, Yeda y AlUla conviene el vuelo interno. Riad tiene tren a Dammam y al norte, y metro desde fines de 2024.",
        "En las ciudades, taxis por app. El auto de alquiler es la forma más simple de recorrer las montañas del sur o la costa.",
        "En AlUla casi todo —Hegra, los miradores, el desierto— se visita con entrada y en grupo: conviene reservar antes.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-10",

  scores: [
    {
      dimension: "Historia",
      score: 7,
      rationale:
        "Hegra, Diriyah, el casco antiguo de Yeda y el arte rupestre de Hail.",
    },
    {
      dimension: "Gastronomía",
      score: 6,
      rationale:
        "Kabsa, mandi, dátiles y café árabe; en las ciudades, cocina de todo el mundo.",
    },
    {
      dimension: "Paisaje",
      score: 8,
      rationale:
        "El desierto de AlUla, las montañas del Asir y la costa del mar Rojo.",
    },
    {
      dimension: "Playas",
      score: 6,
      rationale:
        "El mar Rojo tiene arrecifes y agua templada todo el año; las playas están en desarrollo.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 5,
      rationale:
        "Comer en la calle sale poco; los hoteles y las experiencias de AlUla son caros.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos internos, apps y tarjeta en todos lados; las distancias son enormes.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9,
      rationale: "El riyal está atado al dólar desde hace décadas.",
    },
  ],

  shines: [
    "Paisajes de desierto y sitios arqueológicos casi sin gente.",
    "La tarjeta y el teléfono sirven para todo.",
    "Un país que recién se abre al turismo.",
  ],

  costs: [
    "El calor extremo de mayo a septiembre.",
    "Distancias enormes entre los lugares.",
    "AlUla y los hoteles nuevos son caros.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: no es lo mismo Riad que Abha o AlUla. Los precios están en riyales y son órdenes de magnitud; en AlUla, más altos.",

  places: [
    {
      id: "riad",
      name: "Riad",
      region: "Riad",
      tag: "La capital entre el barro y el vidrio",
      blurb:
        "Diriyah, la ciudad de adobe donde nació el país, patrimonio de la humanidad, el museo nacional, zocos y rascacielos. Es la base del planificador: inviernos templados, veranos de calor extremo.",
      coords: [24.7136, 46.6753],
      featured: true,
      image: null,
    },
    {
      id: "yeda",
      name: "Yeda",
      region: "La Meca",
      tag: "El mar Rojo y Al Balad",
      blurb:
        "El casco antiguo de casas de piedra de coral, la corniche sobre el mar Rojo y una fuente que sale del mar. Calurosa y húmeda todo el año.",
      coords: [21.4858, 39.1925],
      image: null,
    },
    {
      id: "alula",
      name: "AlUla",
      region: "Medina",
      tag: "Tumbas en la roca",
      blurb:
        "Hegra, con más de cien tumbas nabateas talladas en la piedra, la Roca del Elefante y un oasis de palmeras entre cañones. Noches frías en invierno.",
      coords: [26.6085, 37.9232],
      image: null,
    },
    {
      id: "abha",
      name: "Abha",
      region: "Asir",
      tag: "Las montañas verdes",
      blurb:
        "Una ciudad a más de dos mil metros, con aldeas de piedra pintada como Rijal Almaa y bosques en las montañas. Fresca en verano, con lluvias.",
      coords: [18.2164, 42.5053],
      image: null,
    },
    {
      id: "taif",
      name: "Taif",
      region: "La Meca",
      tag: "La ciudad de las rosas",
      blurb:
        "Una ciudad de montaña a casi dos mil metros, famosa por sus rosas y sus granjas de frutas, con un teleférico sobre las sierras. Más fresca que la costa.",
      coords: [21.2703, 40.4158],
      image: null,
    },
    {
      id: "al-ahsa",
      name: "Oasis de Al Ahsa",
      region: "Provincia Oriental",
      tag: "Millones de palmeras",
      blurb:
        "Uno de los oasis más grandes del mundo, con palmerales, manantiales, cuevas y un zoco antiguo en Hofuf. Patrimonio de la humanidad. Muy caluroso en verano.",
      coords: [25.3832, 49.5865],
      image: null,
    },
    {
      id: "al-jobar",
      name: "Al Jobar y Dammam",
      region: "Provincia Oriental",
      tag: "El golfo Pérsico",
      blurb:
        "La costa del Golfo, con su corniche y, en Dhahran, el centro cultural Ithra. Calor húmedo en verano.",
      coords: [26.2172, 50.1971],
      image: null,
    },
    {
      id: "umluj",
      name: "Umluj",
      region: "Tabuk",
      tag: "Islas del mar Rojo",
      blurb:
        "Un pueblo costero frente a decenas de islas de arena blanca y agua turquesa, para snorkel y paseos en lancha. Templado en invierno, caluroso en verano.",
      coords: [25.0213, 37.2685],
      image: null,
    },
    {
      id: "hail",
      name: "Hail",
      region: "Hail",
      tag: "Arte en la roca",
      blurb:
        "La puerta a Jubbah, con grabados en piedra de miles de años, patrimonio de la humanidad, entre dunas del desierto de Nefud. Inviernos fríos de noche.",
      coords: [27.5114, 41.7208],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Arabia Saudita depende de la estación. De noviembre a marzo, ropa liviana que cubra hombros y rodillas y un abrigo para las noches del desierto. En verano, ropa liviana y holgada, sombrero, protector y mucha agua. Para la costa, traje de baño para las playas de hoteles y las islas. Siempre, ropa discreta en la calle, y nada de alcohol en la valija.",
    keyPoints: [
      "Hemisferio norte: lo mejor es de noviembre a marzo.",
      "Ropa que cubra hombros y rodillas en público, para hombres y mujeres.",
      "El alcohol está prohibido, también en la valija.",
      "La tarjeta funciona en casi todos lados.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y holgada que cubra, sombrero, protector y agua: el sol del desierto es fuerte. Para la costa, traje de baño para las playas de hoteles.",
      templado:
        "Ropa liviana de día y un buzo para la noche: es el invierno de Riad, Yeda y AlUla, la mejor época.",
      fresco:
        "Capas, un polar y una campera para las noches del desierto en invierno y para Abha y Taif.",
      frio: "Campera, gorro y guantes para las noches de enero en AlUla, Hail y las montañas, que bajan de cinco grados.",
    },
    plug: {
      types: "Tipo G",
      voltage: "230 V, 60 Hz",
      note: "El tipo G es el británico, de tres patas planas. Un adaptador universal lo resuelve. Si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Vestite con discreción",
          body: "Hombros y rodillas cubiertos en la calle, para todos. Las mujeres no tienen que usar abaya ni cubrirse el pelo, salvo en las mezquitas.",
        },
        {
          title: "Reservá AlUla con tiempo",
          body: "Hegra y casi todas las experiencias se venden con entrada y horario, y en temporada se agotan.",
        },
        {
          title: "Volá entre las ciudades",
          body: "Riad, Yeda y AlUla están a cientos de kilómetros entre sí. Los vuelos internos ahorran días.",
        },
        {
          title: "Aceptá el café árabe",
          body: "Con cardamomo y dátiles, es la forma de recibir. Se sirve en tazas chicas; moverla de costado avisa que no querés más.",
        },
        {
          title: "Pagá con tarjeta",
          body: "Funciona en casi todos lados, también en negocios chicos y taxis.",
        },
        {
          title: "Elegí pagar en riyales",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No lleves alcohol",
          body: "Está prohibido en el país, también en la valija.",
        },
        {
          title: "No planees ir a La Meca",
          body: "Está cerrada a quienes no son musulmanes.",
        },
        {
          title: "No comas en público de día en Ramadán",
          body: "Por respeto, se evita comer, beber o fumar en la calle mientras dura el ayuno.",
        },
        {
          title: "No fotografíes a la gente sin preguntar",
          body: "Sobre todo a las mujeres. Preguntá antes, y aceptá un no.",
        },
        {
          title: "No subestimes el sol del desierto",
          body: "Aun en invierno, al mediodía quema. Agua, sombrero y protector.",
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
          body: "Algunos pasaportes sacan la visa online y otros dependen de tener una visa vigente de Estados Unidos, el Reino Unido o Schengen.",
        },
        summary: "Lo que te pueden pedir",
        items: [
          "Pasaporte con vigencia de sobra",
          "Visa electrónica impresa",
          "Seguro médico",
          "Pasaje de salida",
        ],
      },
      {
        id: "ropa",
        title: "Ropa para la calle",
        notice: {
          tone: "info",
          title: "Discreta, no incómoda",
          body: "Ropa liviana y holgada que cubra hombros y rodillas sirve para el calor y para las costumbres del país.",
        },
        summary: "Lo que conviene llevar",
        items: [
          "Pantalones o polleras largas livianas",
          "Remeras con manga",
          "Un pañuelo para las mezquitas",
          "Un abrigo para las noches del desierto",
        ],
      },
      {
        id: "desierto",
        title: "Para el desierto",
        notice: null,
        summary: "Lo que pide AlUla",
        items: [
          "Sombrero y anteojos de sol",
          "Protector solar",
          "Calzado cerrado para la arena",
          "Una botella reutilizable",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Sales de rehidratación para el calor",
          "Protector solar y labial",
        ],
      },
    ],
    avoid: [
      {
        leave: "Ropa corta para la calle",
        why: "En público se cubren hombros y rodillas.",
        instead: "Ropa liviana y holgada que cubra.",
      },
      {
        leave: "Alcohol en la valija",
        why: "Está prohibido en el país.",
        instead: "Nada: no se puede entrar.",
      },
      {
        leave: "Un itinerario en ruta entre ciudades lejanas",
        why: "Riad, Yeda y AlUla están a cientos de kilómetros.",
        instead: "Vuelos internos.",
      },
      {
        leave: "Solo ropa de verano en invierno",
        why: "Las noches del desierto en enero son frías.",
        instead: "Un buzo y una campera.",
      },
      {
        leave: "Mucho efectivo",
        why: "Casi todo se paga con tarjeta o con el teléfono.",
        instead: "La tarjeta, y algo de efectivo para los zocos.",
      },
      {
        leave: "El secador de pelo de 110 V",
        why: "A 230 V se quema. La mayoría de los hoteles tiene uno.",
        instead: "Nada: no hace falta.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Arabia Saudita?",
        answer:
          "Sí. Algunos pasaportes la sacan online y otros dependen de tener una visa vigente de Estados Unidos, el Reino Unido o Schengen. Verificá el tuyo.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De noviembre a marzo. En verano el calor del desierto es extremo.",
      },
      {
        question: "¿Cómo me tengo que vestir?",
        answer:
          "Con hombros y rodillas cubiertos en público, hombres y mujeres. Las mujeres no tienen que usar abaya ni velo, salvo en las mezquitas.",
      },
      {
        question: "¿Se puede tomar alcohol?",
        answer: "No: está prohibido en el país.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Probablemente: Arabia Saudita usa el tipo G, de tres patas planas, a 230 V y 60 Hz.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "No es obligatoria. En restaurantes, alrededor del diez por ciento si la cuenta no incluye servicio.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Es agua desalinizada y tratada, pero casi todos toman embotellada.",
      },
      {
        question: "¿Cómo se visita Hegra?",
        answer:
          "Con entrada y en grupo, desde AlUla, en recorridos con horario. En temporada alta conviene reservar con tiempo.",
      },
    ],
  },
};
