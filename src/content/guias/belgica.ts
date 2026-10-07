import type { DestinationGuide } from "./types";

/**
 * Guía de Bélgica.
 *
 * Mismas reglas que el resto: nada de alertas de seguridad, ningún número
 * volátil en prosa —sin cotizaciones, sin precios, sin tarifas— y la fecha de
 * revisión visible. Al tocar cualquier texto de `facts`, mover `factsUpdatedAt`.
 *
 * Lo que este país aporta: un país tan chico que se recorre entero desde una
 * sola base, con trenes de menos de una hora entre ciudades. El clima es el de
 * los Países Bajos —gris, templado y con lluvia en cualquier mes— y lo que
 * más importa en la valija es el calzado para los adoquines.
 */
export const belgica: DestinationGuide = {
  slug: "belgica",
  country: "Bélgica",
  subregion: "Europa Occidental",
  subhead:
    "Ciudades medievales a una hora de distancia, cerveza, chocolate y papas fritas a la altura de su fama. Gris, templado y con lluvia en cualquier mes: capas y buen calzado.",

  image: null,

  highlights: [
    {
      value: "1 h",
      label: "en tren de Bruselas a Brujas",
      note: "Todo el país es chico: Gante, Amberes y Lovaina quedan todavía más cerca. Se puede dormir en un solo lugar y moverse por el día.",
    },
    {
      value: "3",
      label: "idiomas oficiales",
      note: "Neerlandés en Flandes, francés en Valonia y alemán en un rincón del este. Bruselas es bilingüe, y el inglés funciona en todos lados.",
    },
    {
      value: "1.500",
      label: "cervezas distintas",
      note: "La cultura cervecera belga es patrimonio inmaterial de la humanidad. Muchas tienen bastante más alcohol que una cerveza común: con calma.",
    },
    {
      value: "UE",
      label: "Bruselas, capital de Europa",
      note: "Es la sede de las instituciones europeas: los hoteles se llenan de viajes de trabajo entre semana y bajan los fines de semana.",
    },
  ],

  facts: [
    {
      id: "entrar",
      title: "Entrar: el espacio Schengen",
      body: [
        "Bélgica es parte del espacio Schengen. Para muchos pasaportes latinoamericanos no hace falta visa para estadías cortas, de hasta 90 días dentro de cualquier período de 180, contando todos los países del espacio juntos: Bélgica, los Países Bajos y Francia en el mismo viaje consumen un solo cupo.",
        "No todos los pasaportes están exentos y las reglas cambian, así que verificá el tuyo antes de comprar el pasaje. En la frontera pueden pedirte el pasaje de vuelta, las reservas de alojamiento, un seguro médico y cómo vas a solventar la estadía, y el pasaporte tiene que seguir vigente al menos tres meses después de la salida.",
        "Con el registro electrónico de entradas y salidas, la primera vez que entrás al espacio Schengen te toman huellas y foto: contá con más tiempo en migraciones. Está previsto que además se pida una autorización electrónica previa, ETIAS, a quienes no necesitan visa. Fijate si ya está vigente antes de viajar.",
      ],
    },
    {
      id: "plata",
      title: "Cómo se paga en Bélgica",
      body: [
        "La moneda es el euro y la tarjeta se acepta casi en todos lados, también sin contacto. El efectivo queda para algún puesto de papas fritas o un mercado.",
        "El servicio va incluido en la cuenta, así que la propina es opcional: redondear si te atendieron bien es un gesto. Las ciudades cobran una tasa turística por noche que no siempre está en el precio de la reserva.",
        "Cuando una terminal te ofrece cobrarte en tu moneda, elegí euros: la conversión del comercio suele ser peor que la de tu banco.",
      ],
    },
    {
      id: "clima",
      title: "Oceánico y gris",
      body: [
        "Bélgica es hemisferio norte: enero es invierno y julio, verano. El clima es oceánico: inviernos grises y húmedos cerca de cero, veranos templados que rara vez pasan los veinticinco grados y lluvia repartida en todo el año.",
        "Flandes y la costa son llanos y parejos, con viento del mar del Norte. Las Ardenas, al sureste, están más altas y son el rincón más frío del país, con alguna nevada en invierno.",
        "Llueve seguido pero en chaparrones cortos: algo impermeable y liviano resuelve casi todo.",
      ],
    },
    {
      id: "cuando-ir",
      title: "Cuándo ir",
      body: [
        "De abril a septiembre los días son largos y templados, ideales para caminar las ciudades y pedalear por Flandes. Cada dos años, en agosto, la Grand-Place de Bruselas se cubre con una alfombra de flores.",
        "Diciembre trae los mercados navideños, con frío y cielo gris. El invierno es oscuro temprano, pero los museos, los cafés y las cervecerías no cierran.",
        "El planificador usa el clima histórico de cada ciudad, no un pronóstico. Con meses de anticipación es lo único que existe, y es lo que sirve para decidir qué llevar.",
      ],
    },
    {
      id: "moverse",
      title: "Moverse por Bélgica",
      body: [
        "Los trenes unen todas las ciudades en una o dos horas: Gante está a media hora de Bruselas, y Brujas, a una. Se puede dormir en un solo lugar y recorrer el país por el día.",
        "Los fines de semana hay tarifas de tren rebajadas. En Flandes, las ciclovías llegan a todos lados; el auto solo suma para las Ardenas.",
        "Las precauciones son las de cualquier ciudad muy visitada: atención al celular y a la mochila en las estaciones grandes de Bruselas y en el centro.",
      ],
    },
  ],

  factsUpdatedAt: "2026-10-07",

  scores: [
    {
      dimension: "Ciudades medievales",
      score: 9.5,
      rationale:
        "Brujas, Gante y la Grand-Place de Bruselas: plazas y canales de los más lindos de Europa, a minutos uno del otro.",
    },
    {
      dimension: "Cerveza y gastronomía",
      score: 9.5,
      rationale:
        "Cervezas únicas, chocolate, waffles, papas fritas en serio y una cocina que se toma en serio.",
    },
    {
      dimension: "Arte",
      score: 8.5,
      rationale:
        "Los primitivos flamencos, Rubens en Amberes, el surrealismo de Magritte y la historieta como arte nacional.",
    },
    {
      dimension: "Naturaleza",
      score: 6.5,
      rationale:
        "Las Ardenas tienen bosques y ríos lindos, pero el país es chico y mayormente llano.",
    },
    {
      dimension: "Relación precio-calidad",
      score: 7,
      rationale:
        "Más accesible que Ámsterdam o París, con buena calidad. Brujas en temporada alta es cara.",
    },
    {
      dimension: "Facilidad logística",
      score: 9.5,
      rationale:
        "Un país chico, con trenes frecuentes: todo queda a una o dos horas de Bruselas.",
    },
    {
      dimension: "Previsibilidad económica",
      score: 9.5,
      rationale: "El euro, precios claros y tarjeta en casi todos lados.",
    },
  ],

  shines: [
    "Ciudades medievales a una hora de distancia, sin cambiar de hotel.",
    "Cerveza, chocolate y papas fritas a la altura de su fama.",
    "Más accesible que sus vecinos.",
  ],

  costs: [
    "Cielo gris y lluvia en cualquier mes.",
    "Brujas se llena de excursiones en temporada alta.",
    "Bruselas no enamora a primera vista: hay que darle tiempo.",
  ],

  dataScopeNote:
    "Elegís la ciudad en el planificador y los cálculos se hacen con su clima: las Ardenas en enero no piden lo mismo que la costa. Los precios están en euros y son órdenes de magnitud, no cotizaciones.",

  places: [
    {
      id: "bruselas",
      name: "Bruselas",
      region: "Bruselas",
      tag: "Grand-Place",
      blurb:
        "La Grand-Place, el Atomium, museos de historieta y de Magritte, y la sede de la Unión Europea. Es la base del planificador: inviernos grises cerca de cero, veranos templados.",
      coords: [50.8503, 4.3517],
      featured: true,
      image: null,
    },
    {
      id: "brujas",
      name: "Brujas",
      region: "Flandes",
      tag: "Canales medievales",
      blurb:
        "Canales, casas de ladrillo y plazas medievales casi intactas. Es la ciudad más visitada del país: dormir ahí y recorrerla temprano cambia la experiencia.",
      coords: [51.2093, 3.2247],
      image: null,
    },
    {
      id: "gante",
      name: "Gante",
      region: "Flandes",
      tag: "Medieval y universitaria",
      blurb:
        "Tan linda como Brujas, con menos turistas y mucha vida estudiantil. Un castillo en el centro y el retablo de los Van Eyck en la catedral.",
      coords: [51.0543, 3.7174],
      image: null,
    },
    {
      id: "amberes",
      name: "Amberes",
      region: "Flandes",
      tag: "Diamantes y moda",
      blurb:
        "Un puerto enorme, la casa de Rubens, una estación de tren monumental y una escena de moda y diseño propia.",
      coords: [51.2194, 4.4025],
      image: null,
    },
    {
      id: "lovaina",
      name: "Lovaina",
      region: "Flandes",
      tag: "Ciudad universitaria",
      blurb:
        "Una de las universidades más antiguas de Europa, un ayuntamiento gótico que parece de encaje y bares llenos de estudiantes.",
      coords: [50.8798, 4.7005],
      image: null,
    },
    {
      id: "malinas",
      name: "Malinas",
      region: "Flandes",
      tag: "Torre y carillón",
      blurb:
        "Una ciudad tranquila entre Bruselas y Amberes, con una catedral de torre enorme y una escuela de carillón famosa en el mundo.",
      coords: [51.0259, 4.4776],
      image: null,
    },
    {
      id: "dinant",
      name: "Dinant y el Mosa",
      region: "Valonia",
      tag: "Río y acantilados",
      blurb:
        "Una ciudad encajonada entre el río Mosa y los acantilados, con una ciudadela arriba. Cuna del saxofón y puerta a las Ardenas.",
      coords: [50.2606, 4.9122],
      image: null,
    },
    {
      id: "ardenas",
      name: "Durbuy y las Ardenas",
      region: "Valonia",
      tag: "Bosques y ríos",
      blurb:
        "Bosques, ríos para bajar en kayak y pueblos de piedra como Durbuy. Es lo más alto y lo más frío del país, con alguna nevada en invierno.",
      coords: [50.3524, 5.4563],
      image: null,
    },
    {
      id: "ostende",
      name: "Ostende y la costa",
      region: "Costa",
      tag: "Playa del mar del Norte",
      blurb:
        "La ciudad de playa más grande de la costa belga, con un paseo marítimo largo y mariscos. Agua fría y viento, también en verano.",
      coords: [51.2154, 2.9286],
      image: null,
    },
  ],

  preparation: {
    quickAnswer:
      "Bélgica tiene clima oceánico: inviernos grises y húmedos cerca de cero, veranos templados que rara vez pasan los veinticinco grados y lluvia en cualquier mes. La valija se arma en capas, con una campera impermeable y calzado cómodo para caminar sobre adoquines. Si vas a las Ardenas en invierno, sumá abrigo de verdad: es el rincón más frío del país.",
    keyPoints: [
      "Hemisferio norte: el invierno va de diciembre a febrero, gris y frío; el verano, de junio a agosto, templado.",
      "Llueve seguido, en lloviznas y chaparrones, en cualquier mes del año.",
      "Las ciudades se recorren a pie sobre adoquines: el calzado importa más que la ropa.",
      "Las Ardenas, al sureste, son más altas y más frías que el resto del país.",
    ],
    adviceByBucket: {
      calido:
        "Ropa liviana y un buzo para la noche. Los días de calor son pocos, y muchas casas no tienen aire acondicionado.",
      templado:
        "Capas y una campera impermeable liviana. Es el verano belga: agradable, con algún chaparrón.",
      fresco:
        "Sweater, campera impermeable y calzado que no se moje. En la costa el viento se siente.",
      frio: "Abrigo de verdad, gorro y guantes. El frío es húmedo y gris, y en las Ardenas puede nevar.",
    },
    plug: {
      types: "Tipo C y tipo E",
      voltage: "230 V, 50 Hz",
      note: "El tipo E es el europeo de dos patas redondas, con una tercera pata que sale del toma; los enchufes tipo C entran sin problema. Si los tuyos son de patas planas, necesitás adaptador, y si tu país usa 110-120 V, revisá que el cargador diga 100-240 V.",
    },
    tips: {
      dos: [
        {
          title: "Dormí en un lugar y movete en tren",
          body: "Bruselas, Gante y Amberes quedan a menos de una hora entre sí. Con una sola base recorrés el país sin cambiar de hotel.",
        },
        {
          title: "Recorré Brujas temprano o de noche",
          body: "De día se llena de excursiones. Al amanecer o al caer la tarde, la ciudad es otra.",
        },
        {
          title: "Tomá las cervezas con calma",
          body: "Muchas cervezas belgas tienen bastante más alcohol que una común, y cada una se sirve en su propia copa. Se toman despacio.",
        },
        {
          title: "Aprovechá las tarifas de fin de semana",
          body: "Los trenes tienen tarifas rebajadas los fines de semana. Si podés, hacé las escapadas el sábado o el domingo.",
        },
        {
          title: "Seguí la ruta de murales de historieta",
          body: "El centro de Bruselas tiene murales de historietas, de Tintín en adelante, en las medianeras. Se recorre caminando y es gratis.",
        },
        {
          title: "Elegí pagar en euros",
          body: "Cuando una terminal o un cajero te ofrece cobrarte en tu moneda, decí que no: la conversión del comercio suele ser peor que la de tu banco.",
        },
      ],
      donts: [
        {
          title: "No camines los adoquines con suela lisa",
          body: "Los cascos viejos resbalan con lluvia y cansan los pies. Calzado cómodo con buena suela.",
        },
        {
          title: "No esperes calor en la costa",
          body: "El mar del Norte es frío y ventoso aun en agosto. La playa belga es más para caminar que para nadar.",
        },
        {
          title: "No te quedes solo con Brujas",
          body: "Gante tiene la misma belleza medieval con mucha menos gente, y está a media hora.",
        },
        {
          title: "No saludes en cualquier idioma",
          body: "En Flandes se habla neerlandés y en Valonia francés. Equivocarse no ofende, pero empezar en inglés es lo más prudente.",
        },
        {
          title: "No descuides la mochila en las estaciones",
          body: "En las estaciones grandes de Bruselas y en el centro hay carteristas. Mochila adelante y el teléfono a mano.",
        },
        {
          title: "No dejes lo esencial en la bodega",
          body: "Medicación, documentos, cargador y una muda van en el bolso de mano. Con conexiones en Europa, la valija demorada es más probable.",
        },
      ],
    },
    checklists: [
      {
        id: "lluvia",
        title: "Lluvia y adoquines",
        notice: {
          tone: "info",
          title: "Gris y con lluvia, en cualquier mes",
          body: "Llueve seguido pero en chaparrones cortos. Lo que sirve es algo impermeable y liviano, y calzado que no se moje.",
        },
        summary: "Lo que cubre cualquier mes",
        items: [
          "Campera impermeable liviana",
          "Sweater o polar",
          "Calzado cómodo que no se moje",
          "Paraguas plegable chico, para la ciudad",
          "Gorro y guantes de noviembre a marzo",
        ],
      },
      {
        id: "ardenas",
        title: "Ardenas",
        notice: null,
        summary: "Si vas a los bosques y ríos del sureste",
        items: [
          "Abrigo de verdad en invierno: es lo más frío del país",
          "Calzado de trekking para los senderos",
          "Ropa de recambio si vas a bajar el río en kayak",
          "Repelente en verano",
        ],
      },
      {
        id: "documentos",
        title: "Documentos y entrada",
        notice: {
          tone: "warn",
          title: "Revisá qué pide tu pasaporte",
          body: "Muchos pasaportes latinoamericanos entran sin visa por hasta 90 días, pero no todos, y en la frontera pueden pedir pasaje de vuelta, reservas y seguro. Verificalo antes de comprar el pasaje.",
        },
        summary: "Lo que te pueden pedir en la frontera",
        items: [
          "Pasaporte vigente al menos tres meses después de la salida",
          "Pasaje de vuelta o de salida del espacio Schengen",
          "Reservas de alojamiento",
          "Seguro de viaje con cobertura médica",
          "Copia digital de todo, en el teléfono y fuera de él",
        ],
      },
      {
        id: "electronica",
        title: "Electrónica y carga",
        notice: {
          tone: "info",
          title: "Enchufes de dos patas redondas",
          body: "Los tomas son tipo E, donde entran los enchufes europeos de dos patas redondas. Si los tuyos son de patas planas, necesitás adaptador.",
        },
        summary: "Cargado y con qué enchufarlo",
        items: [
          "Adaptador para enchufes de patas redondas, o universal",
          "Cargador del teléfono y cable de repuesto",
          "Batería portátil, en el bolso de mano",
          "Auriculares para los trenes",
        ],
      },
      {
        id: "salud",
        title: "Salud y medicamentos",
        notice: null,
        summary: "Botiquín básico",
        items: [
          "Medicación habitual, con receta y en envase original",
          "Analgésico y algo para el resfrío",
          "Curitas y algo para ampollas: se camina mucho sobre adoquines",
          "Seguro de viaje con cobertura médica",
        ],
      },
    ],
    avoid: [
      {
        leave: "Zapatos de taco o de suela lisa",
        why: "Hay adoquines en todos los cascos viejos, y resbalan con lluvia.",
        instead: "Zapatillas cómodas con buena suela.",
      },
      {
        leave: "Ropa solo de verano",
        why: "Aun en julio las noches son frescas y llueve.",
        instead: "Capas y una campera liviana.",
      },
      {
        leave: "Mucho efectivo",
        why: "La tarjeta se acepta casi en todos lados.",
        instead: "Algo de efectivo para puestos y mercados.",
      },
      {
        leave: "Una valija enorme",
        why: "Trenes, escaleras y adoquines: arrastrarla cansa.",
        instead: "Una valija mediana o una mochila.",
      },
      {
        leave: "El paraguas grande",
        why: "Con lluvia corta y viento en la costa, un plegable alcanza.",
        instead: "Un paraguas plegable o una campera con capucha.",
      },
      {
        leave: "El secador de pelo",
        why: "Casi todos los hoteles tienen uno, y si el tuyo es de 110 V puede quemarse a 230 V.",
        instead: "El del alojamiento.",
      },
      {
        leave: "Joyas y relojes de valor",
        why: "En las estaciones y en el centro de Bruselas llaman la atención de los carteristas.",
        instead: "Nada, o algo que no te importe perder.",
      },
    ],
    faq: [
      {
        question: "¿Necesito visa para entrar a Bélgica?",
        answer:
          "Depende del pasaporte. Muchos países latinoamericanos están exentos para estadías de hasta 90 días dentro de 180, sumando todo el espacio Schengen, pero no todos. Verificalo antes de viajar, y fijate si ya rige la autorización electrónica previa (ETIAS).",
      },
      {
        question: "¿Necesito adaptador de enchufe?",
        answer:
          "Si tus enchufes tienen patas planas, sí. Los tomas son tipo E, donde entran los europeos de dos patas redondas, a 230 V.",
      },
      {
        question: "¿Cuál es la mejor época para ir?",
        answer:
          "De abril a septiembre: días largos y templados. Diciembre tiene los mercados navideños, con frío y cielo gris.",
      },
      {
        question: "¿Qué idioma se habla?",
        answer:
          "Neerlandés en Flandes —Brujas, Gante, Amberes—, francés en Valonia y los dos en Bruselas. El inglés funciona en todos lados.",
      },
      {
        question: "¿Se puede recorrer el país sin auto?",
        answer:
          "Sí, y es fácil: los trenes conectan todas las ciudades en una o dos horas. El auto solo suma para las Ardenas.",
      },
      {
        question: "¿Se deja propina?",
        answer:
          "El servicio va incluido en la cuenta. Redondear si te atendieron bien es un gesto, no una obligación.",
      },
      {
        question: "¿El agua de la canilla es potable?",
        answer:
          "Sí. En los restaurantes, igual, lo habitual es pedir agua embotellada.",
      },
      {
        question: "¿Brujas o Gante?",
        answer:
          "Las dos son medievales y lindas. Brujas es más de postal y está más llena; Gante tiene vida propia y menos turistas. Están a media hora: se pueden hacer las dos.",
      },
    ],
  },
};
