import type { DestinationGuide } from "./types";

/**
 * Guía de Trinidad y Tobago.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa y la fecha de revisión visible. Al tocar `facts`, mover
 * `factsUpdatedAt`.
 *
 * Entra con aviso, como Pakistán (spec, 14.2 y 22): Estados Unidos pide
 * reconsiderar el viaje a todo el país, con barrios de Puerto España en los
 * que su personal no puede entrar. La entrada "tener-en-cuenta" manda a
 * revisar la recomendación de viaje del propio país y qué cubre el seguro.
 * Ninguna ciudad del planificador es uno de esos barrios.
 *
 * Lo que este país aporta: dos islas que son dos viajes. Trinidad es el
 * carnaval, la ciudad y el bosque de la cordillera norte; Tobago, la playa y
 * el arrecife. Y está al sur del recorrido habitual de los huracanes.
 */
export const trinidadYTobago: DestinationGuide = {
  slug: "trinidad-y-tobago",
  country: "Trinidad y Tobago",
  subregion: "Caribe",
  subhead:
    "El carnaval más grande del Caribe, bosques con aves de todos los colores y las playas tranquilas de Tobago. Dos islas, dos viajes.",

  image: null,

  highlights: [
    {
      value: "Carnaval",
      label: "antes del Miércoles de Ceniza",
      note: "Dos días de desfile en Puerto España, con semanas de fiestas antes. Es la razón por la que muchos viajan.",
    },
    {
      value: "2 islas",
      label: "dos viajes",
      note: "Trinidad es la ciudad, el carnaval y el bosque; Tobago, la playa y el arrecife.",
    },
    {
      value: "Izquierda",
      label: "lado por el que se conduce",
      note: "Herencia británica, como el críquet. El volante va a la derecha.",
    },
    {
      value: "Jun–Dic",
      label: "temporada de lluvias",
      note: "Las islas quedan al sur del recorrido habitual de los huracanes. De enero a mayo es la época seca.",
    },
  ],

  facts: [
    {
      id: "entrada",
      title: "Cómo se entra",
      body: [
        "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo antes de reservar.",
        "La llegada y la salida se registran en línea, en la plataforma del gobierno, antes de viajar. Pueden pedirte el pasaje de salida.",
        "Si llegas desde un país con riesgo de fiebre amarilla, te pueden pedir el certificado de vacunación. Si vas a los bosques de Trinidad, la vacuna se recomienda igual.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga",
      body: [
        "El dólar de Trinidad y Tobago flota, sin mercado paralelo. Los dólares estadounidenses se aceptan en algunos hoteles, pero en la calle se paga en moneda local.",
        "La tarjeta funciona en hoteles, restaurantes y supermercados. Para los puestos de comida, los maxi taxis y los mercados, efectivo.",
        "Muchos restaurantes suman un cargo por servicio. Si no lo traen, se deja alrededor de un 10 %.",
      ],
    },
    {
      id: "carnaval",
      title: "El carnaval",
      body: [
        "Se celebra el lunes y el martes antes del Miércoles de Ceniza, en febrero o en marzo. Las semanas anteriores hay fiestas, ensayos de bandas de acero y concursos de calipso.",
        "Para desfilar se compra un disfraz con una banda, meses antes. El alojamiento de esa semana también se reserva con mucha anticipación, y cuesta varias veces más.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De enero a mayo es la época seca. De junio a diciembre llueve más, en chaparrones fuertes y cortos.",
        "Las islas quedan al sur del recorrido habitual de los huracanes, aunque la temporada va de junio a noviembre.",
        "De marzo a agosto, las tortugas laúd desovan en las playas del norte de Trinidad, como Grande Riviere.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse",
      body: [
        "Entre Trinidad y Tobago hay ferry y vuelos cortos, varias veces por día. En temporada alta se llenan: conviene reservar.",
        "En Trinidad, los maxi taxis —minibuses con una franja de color según la ruta— son baratos y llegan a todos lados. Los taxis no tienen taxímetro: acuerda el precio antes.",
        "Se conduce por la izquierda. En Tobago, un auto alquilado es la forma más cómoda de recorrer la isla.",
      ],
    },
    {
      id: "tener-en-cuenta",
      title: "Qué tener en cuenta",
      body: [
        "Antes de reservar, revisa la recomendación de viaje de tu propio país: varios gobiernos piden reconsiderar el viaje al país por el delito, y desaconsejan algunos barrios de Puerto España. La situación cambia.",
        "Fíjate también qué cubre tu seguro, y que incluya atención médica y traslado.",
        "Ninguna ciudad del planificador es uno de esos barrios. Tobago tiene menos delito que Trinidad; en las dos islas, las precauciones son no caminar de noche por zonas que no conoces y moverse en taxis de confianza.",
        "El agua corriente de las ciudades está tratada, pero mucha gente toma embotellada. En el campo, agua embotellada.",
      ],
    },
  ],

  factsUpdatedAt: "2026-11-21",

  scores: [
    {
      dimension: "Fiestas y música",
      score: 10,
      rationale:
        "El carnaval, el calipso, el soca y las bandas de acero, que nacieron en Trinidad.",
    },
    {
      dimension: "Naturaleza y aves",
      score: 9,
      rationale:
        "Los ibis escarlata del pantano de Caroni, los bosques de la cordillera norte y las tortugas laúd.",
    },
    {
      dimension: "Playas",
      score: 7.5,
      rationale:
        "Las de Tobago, con arrecife y agua calma; en Trinidad, Maracas y la costa norte, con olas.",
    },
    {
      dimension: "Gastronomía",
      score: 9,
      rationale:
        "Doubles, roti, el bake and shark de Maracas: la mezcla de India, África y el Caribe.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Más barato que el resto del Caribe, salvo en la semana de carnaval.",
    },
    {
      dimension: "Facilidad logística",
      score: 7,
      rationale:
        "Vuelos directos y ferry entre las islas, pero tránsito pesado en Trinidad.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 8,
      rationale:
        "Una moneda que flota sin mercado paralelo, aunque los dólares cuestan de conseguir en los bancos.",
    },
  ],

  shines: [
    "El carnaval, que no tiene comparación en el Caribe.",
    "Bosques con aves que no se ven en ninguna otra isla.",
    "Tobago: playa tranquila y arrecife, a media hora de vuelo.",
  ],

  costs: [
    "Revisar la recomendación de viaje y el seguro.",
    "La semana de carnaval, cara y con todo reservado meses antes.",
    "El tránsito de Trinidad, que alarga cualquier recorrido.",
  ],

  dataScopeNote:
    "Eliges la ciudad en el planificador y los cálculos se hacen con su clima: el bosque de Asa Wright no pide lo mismo que la playa de Crown Point. Los precios son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "puerto-espana",
      name: "Puerto España",
      region: "Trinidad",
      tag: "Carnaval",
      blurb:
        "La capital, con la sabana de Queen's Park, el carnaval, las bandas de acero y la comida de la calle. Es la base del planificador.",
      coords: [10.6596, -61.5019],
      featured: true,
      image: null,
    },
    {
      id: "chaguaramas",
      name: "Chaguaramas",
      region: "Trinidad",
      tag: "Puertos y senderos",
      blurb:
        "Una península al oeste de la capital, con marinas, senderos en el bosque y barcos a las islas del golfo de Paria.",
      coords: [10.68, -61.63],
      image: null,
    },
    {
      id: "maracas",
      name: "Bahía de Maracas",
      region: "Trinidad",
      tag: "Playa y bake and shark",
      blurb:
        "La playa más famosa de Trinidad, al otro lado de la cordillera norte, con el sándwich de tiburón frito que la hizo conocida.",
      coords: [10.7553, -61.4339],
      image: null,
    },
    {
      id: "asa-wright",
      name: "Asa Wright y la cordillera norte",
      region: "Trinidad",
      tag: "Aves",
      blurb:
        "Un bosque de montaña con colibríes, tucanes y el pájaro guácharo, famoso entre los observadores de aves. Más fresco y lluvioso que la costa.",
      coords: [10.717, -61.297],
      image: null,
    },
    {
      id: "grande-riviere",
      name: "Grande Riviere",
      region: "Trinidad",
      tag: "Tortugas laúd",
      blurb:
        "Un pueblo remoto de la costa noreste donde, de marzo a agosto, cientos de tortugas laúd salen a desovar cada noche.",
      coords: [10.835, -61.05],
      image: null,
    },
    {
      id: "san-fernando",
      name: "San Fernando",
      region: "Trinidad",
      tag: "Lago de asfalto",
      blurb:
        "La ciudad del sur, cerca del Pitch Lake, el mayor depósito natural de asfalto del mundo, y de templos hindúes junto al mar.",
      coords: [10.2797, -61.4685],
      image: null,
    },
    {
      id: "crown-point",
      name: "Crown Point y Pigeon Point",
      region: "Tobago",
      tag: "Playa y arrecife",
      blurb:
        "El extremo sur de Tobago, con el aeropuerto, la playa de Pigeon Point y barcos con fondo de vidrio al arrecife de Buccoo.",
      coords: [11.15, -60.8333],
      image: null,
    },
    {
      id: "castara",
      name: "Castara",
      region: "Tobago",
      tag: "Pueblo de pescadores",
      blurb:
        "Un pueblo de pescadores en una bahía de la costa norte de Tobago, sin resorts y con el horno de pan del pueblo.",
      coords: [11.2833, -60.7],
      image: null,
    },
    {
      id: "speyside",
      name: "Speyside y la reserva de la cordillera",
      region: "Tobago",
      tag: "Buceo y selva",
      blurb:
        "El extremo noreste de Tobago, con buceo entre mantarrayas y la Main Ridge, una de las reservas forestales más antiguas de América.",
      coords: [11.3, -60.5333],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Trinidad y Tobago es calor todo el año: ropa ligera, traje de baño, protector y repelente. Si vas a la cordillera norte, suma una capa y un impermeable: arriba es más fresco y llueve más. De enero a mayo es la época seca.",
    keyPoints: [
      "Antes de reservar, revisa la recomendación de viaje de tu país y tu seguro.",
      "Calor todo el año, con chaparrones fuertes de junio a diciembre.",
      "El bosque de la cordillera norte es más fresco y lluvioso.",
      "Para carnaval, el disfraz y el alojamiento se reservan meses antes.",
    ],
    adviceByBucket: {
      calido:
        "Ropa ligera, traje de baño, protector y repelente. Es el clima de las dos islas todo el año.",
      templado:
        "Camiseta y una capa ligera. Es el clima del bosque de la cordillera norte.",
      fresco: "Un suéter ligero para la noche en la montaña.",
      frio: "En Trinidad y Tobago no hace frío: no hace falta abrigo.",
    },
    plug: {
      types: "Tipo A y tipo B",
      voltage: "115 V, 60 Hz",
      note: "Es el enchufe de clavijas planas, como en Estados Unidos. Si vienes de un país con 220 V, revisa que tus cargadores digan 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Revisa la recomendación de viaje antes de reservar",
          body: "La de tu país, y qué cubre tu seguro en este destino.",
        },
        {
          title: "Reserva el carnaval con meses de anticipación",
          body: "El disfraz, el alojamiento y los vuelos de esa semana se agotan.",
        },
        {
          title: "Lleva repelente al bosque y a la costa",
          body: "Hay mosquitos y dengue, sobre todo en la época de lluvias.",
        },
        {
          title: "Reserva el ferry o el vuelo a Tobago",
          body: "En temporada alta y en los feriados se llenan.",
        },
        {
          title: "Usa taxis de confianza",
          body: "Los que pide tu hotel o los de una empresa, con el precio acordado antes.",
        },
        {
          title: "Usa protector que no dañe el coral",
          body: "El arrecife de Buccoo y el de Speyside lo agradecen.",
        },
      ],
      donts: [
        {
          title: "No viajes sin revisar tu seguro",
          body: "Que cubra este destino, la atención médica y el traslado.",
        },
        {
          title: "No camines de noche por zonas que no conoces",
          body: "Sobre todo en Puerto España. Un taxi de confianza es lo más seguro.",
        },
        {
          title: "No te bañes en las playas con bandera roja",
          body: "La costa norte de Trinidad tiene olas y corrientes fuertes.",
        },
        {
          title: "No molestes a las tortugas",
          body: "Se miran de noche, sin linterna blanca y con un guía de la playa.",
        },
        {
          title: "No dejes cosas solas en la playa",
          body: "Es la precaución de cualquier playa concurrida.",
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
          title: "Recomendación de viaje, seguro y entrada",
          body: "Revisa la recomendación de viaje de tu país, qué cubre tu seguro en Trinidad y Tobago y si tu pasaporte necesita visa.",
        },
        summary: "Lo que conviene tener resuelto",
        items: [
          "La recomendación de viaje de tu país, leída",
          "Un seguro con cobertura médica y traslado",
          "El registro de llegada en línea, completado",
          "Certificado de fiebre amarilla, si llegas desde un país con riesgo",
        ],
      },
      {
        id: "playa",
        title: "Playa y sol",
        notice: null,
        summary: "Lo específico de la costa",
        items: [
          "Traje de baño y camiseta con protección UV",
          "Protector solar que no dañe el coral",
          "Sandalias",
          "Bolsa impermeable para el teléfono",
        ],
      },
      {
        id: "carnaval",
        title: "Carnaval",
        notice: {
          tone: "info",
          title: "Se termina cubierto de pintura",
          body: "En el J'ouvert, la madrugada del lunes, se tira barro, pintura y polvo de colores. La ropa de ese día no vuelve.",
        },
        summary: "Si vas a la fiesta",
        items: [
          "Ropa vieja para el J'ouvert",
          "Calzado cómodo y cerrado para horas de desfile",
          "Riñonera o bolso chico que se cierre",
          "Protector solar y agua",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Repelente de insectos: hay dengue",
          "Algo para el malestar estomacal y sales de rehidratación",
          "Póliza del seguro a mano",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: null,
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador a clavijas planas, si tu enchufe es distinto",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el equipaje de mano",
        ],
      },
      {
        id: "chicos",
        title: "Viajar con niños",
        notice: null,
        summary: "Lo que cambia cuando no viajas solo",
        items: [
          "Pasaporte de cada menor; si viaja con un solo progenitor, la autorización que pida tu país",
          "Protector solar de factor alto y camiseta con protección UV",
          "Repelente apto para niños",
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
        leave: "Abrigo",
        why: "En las islas no hay un mes frío.",
        instead: "Una capa ligera y un impermeable para la montaña.",
      },
      {
        leave: "La ropa buena para el J'ouvert",
        why: "Termina cubierta de pintura y barro.",
        instead: "Ropa vieja que se pueda tirar.",
      },
      {
        leave: "Jeans pesados",
        why: "Con el calor húmedo no se aguantan.",
        instead: "Pantalones ligeros.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "No se usan en la playa ni en el carnaval.",
        instead: "Nada, o algo que no te importe perder.",
      },
      {
        leave: "Protector solar común para el arrecife",
        why: "Daña el coral.",
        instead: "Protector que no dañe el coral.",
      },
    ],
    faq: [
      {
        question: "¿Qué tengo que revisar antes de reservar?",
        answer:
          "La recomendación de viaje de tu país, qué cubre tu seguro en Trinidad y Tobago y las reglas de entrada para tu pasaporte.",
      },
      {
        question: "¿Necesito visa?",
        answer:
          "Muchos pasaportes entran sin visa para una estadía corta; otros la necesitan. Verifica el tuyo, y registra la llegada en línea antes de viajar.",
      },
      {
        question: "¿Cuándo es el carnaval?",
        answer:
          "El lunes y el martes antes del Miércoles de Ceniza, en febrero o en marzo. Las fiestas empiezan semanas antes.",
      },
      {
        question: "¿Trinidad o Tobago?",
        answer:
          "Trinidad para el carnaval, la comida y las aves; Tobago para la playa y el arrecife. Entre las dos hay ferry y vuelos cortos.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De enero a mayo, la época seca. De marzo a agosto, si quieres ver a las tortugas laúd.",
      },
      {
        question: "¿Se puede tomar el agua corriente?",
        answer:
          "En las ciudades está tratada, pero mucha gente toma embotellada. En el campo, agua embotellada.",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tu enchufe no es de clavijas planas, sí. El voltaje es 115 V: revisa que tus cargadores digan 100-240 V.",
      },
    ],
  },
};
